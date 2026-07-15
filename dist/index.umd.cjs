(function(ke,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],u):(ke=typeof globalThis<"u"?globalThis:ke||self,u(ke["react-scheduler"]={},ke["react/jsx-runtime"],ke.React,ke.ReactDOM))})(this,function(ke,u,p,Zr){"use strict";var Gc=Object.defineProperty;var Xc=(ke,u,p)=>u in ke?Gc(ke,u,{enumerable:!0,configurable:!0,writable:!0,value:p}):ke[u]=p;var jr=(ke,u,p)=>(Xc(ke,typeof u!="symbol"?u+"":u,p),p);function Vr(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const re=Vr(p);var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ct={},Gr={get exports(){return ct},set exports(e){ct=e}},pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wn;function Xr(){if(wn)return pe;wn=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),l=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),b;b=Symbol.for("react.module.reference");function M(m){if(typeof m=="object"&&m!==null){var W=m.$$typeof;switch(W){case e:switch(m=m.type,m){case t:case o:case n:case a:case l:return m;default:switch(m=m&&m.$$typeof,m){case c:case i:case d:case y:case h:case s:return m;default:return W}}case r:return W}}}return pe.ContextConsumer=i,pe.ContextProvider=s,pe.Element=e,pe.ForwardRef=d,pe.Fragment=t,pe.Lazy=y,pe.Memo=h,pe.Portal=r,pe.Profiler=o,pe.StrictMode=n,pe.Suspense=a,pe.SuspenseList=l,pe.isAsyncMode=function(){return!1},pe.isConcurrentMode=function(){return!1},pe.isContextConsumer=function(m){return M(m)===i},pe.isContextProvider=function(m){return M(m)===s},pe.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},pe.isForwardRef=function(m){return M(m)===d},pe.isFragment=function(m){return M(m)===t},pe.isLazy=function(m){return M(m)===y},pe.isMemo=function(m){return M(m)===h},pe.isPortal=function(m){return M(m)===r},pe.isProfiler=function(m){return M(m)===o},pe.isStrictMode=function(m){return M(m)===n},pe.isSuspense=function(m){return M(m)===a},pe.isSuspenseList=function(m){return M(m)===l},pe.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===t||m===o||m===n||m===a||m===l||m===x||typeof m=="object"&&m!==null&&(m.$$typeof===y||m.$$typeof===h||m.$$typeof===s||m.$$typeof===i||m.$$typeof===d||m.$$typeof===b||m.getModuleId!==void 0)},pe.typeOf=M,pe}var me={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sn;function Ur(){return Sn||(Sn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),l=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),b=!1,M=!1,m=!1,W=!1,q=!1,Z;Z=Symbol.for("react.module.reference");function A(N){return!!(typeof N=="string"||typeof N=="function"||N===t||N===o||q||N===n||N===a||N===l||W||N===x||b||M||m||typeof N=="object"&&N!==null&&(N.$$typeof===y||N.$$typeof===h||N.$$typeof===s||N.$$typeof===i||N.$$typeof===d||N.$$typeof===Z||N.getModuleId!==void 0))}function f(N){if(typeof N=="object"&&N!==null){var K=N.$$typeof;switch(K){case e:var te=N.type;switch(te){case t:case o:case n:case a:case l:return te;default:var H=te&&te.$$typeof;switch(H){case c:case i:case d:case y:case h:case s:return H;default:return K}}case r:return K}}}var g=i,C=s,T=e,P=d,j=t,J=y,U=h,D=r,_=o,$=n,L=a,O=l,Q=!1,ee=!1;function se(N){return Q||(Q=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function oe(N){return ee||(ee=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function B(N){return f(N)===i}function V(N){return f(N)===s}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function X(N){return f(N)===d}function w(N){return f(N)===t}function F(N){return f(N)===y}function v(N){return f(N)===h}function Y(N){return f(N)===r}function z(N){return f(N)===o}function I(N){return f(N)===n}function S(N){return f(N)===a}function R(N){return f(N)===l}me.ContextConsumer=g,me.ContextProvider=C,me.Element=T,me.ForwardRef=P,me.Fragment=j,me.Lazy=J,me.Memo=U,me.Portal=D,me.Profiler=_,me.StrictMode=$,me.Suspense=L,me.SuspenseList=O,me.isAsyncMode=se,me.isConcurrentMode=oe,me.isContextConsumer=B,me.isContextProvider=V,me.isElement=G,me.isForwardRef=X,me.isFragment=w,me.isLazy=F,me.isMemo=v,me.isPortal=Y,me.isProfiler=z,me.isStrictMode=I,me.isSuspense=S,me.isSuspenseList=R,me.isValidElementType=A,me.typeOf=f}()),me}(function(e){process.env.NODE_ENV==="production"?e.exports=Xr():e.exports=Ur()})(Gr);function Kr(e){function r(B,V,G,X,w){for(var F=0,v=0,Y=0,z=0,I,S,R=0,N=0,K,te=K=I=0,H=0,ie=0,fe=0,de=0,ae=G.length,le=ae-1,ce,ne="",ue="",Se="",_e="",De;H<ae;){if(S=G.charCodeAt(H),H===le&&v+z+Y+F!==0&&(v!==0&&(S=v===47?10:47),z=Y=F=0,ae++,le++),v+z+Y+F===0){if(H===le&&(0<ie&&(ne=ne.replace(y,"")),0<ne.trim().length)){switch(S){case 32:case 9:case 59:case 13:case 10:break;default:ne+=G.charAt(H)}S=59}switch(S){case 123:for(ne=ne.trim(),I=ne.charCodeAt(0),K=1,de=++H;H<ae;){switch(S=G.charCodeAt(H)){case 123:K++;break;case 125:K--;break;case 47:switch(S=G.charCodeAt(H+1)){case 42:case 47:e:{for(te=H+1;te<le;++te)switch(G.charCodeAt(te)){case 47:if(S===42&&G.charCodeAt(te-1)===42&&H+2!==te){H=te+1;break e}break;case 10:if(S===47){H=te+1;break e}}H=te}}break;case 91:S++;case 40:S++;case 34:case 39:for(;H++<le&&G.charCodeAt(H)!==S;);}if(K===0)break;H++}switch(K=G.substring(de,H),I===0&&(I=(ne=ne.replace(h,"").trim()).charCodeAt(0)),I){case 64:switch(0<ie&&(ne=ne.replace(y,"")),S=ne.charCodeAt(1),S){case 100:case 109:case 115:case 45:ie=V;break;default:ie=L}if(K=r(V,ie,K,S,w+1),de=K.length,0<Q&&(ie=t(L,ne,fe),De=c(3,K,ie,V,D,U,de,S,w,X),ne=ie.join(""),De!==void 0&&(de=(K=De.trim()).length)===0&&(S=0,K="")),0<de)switch(S){case 115:ne=ne.replace(g,i);case 100:case 109:case 45:K=ne+"{"+K+"}";break;case 107:ne=ne.replace(q,"$1 $2"),K=ne+"{"+K+"}",K=$===1||$===2&&s("@"+K,3)?"@-webkit-"+K+"@"+K:"@"+K;break;default:K=ne+K,X===112&&(K=(ue+=K,""))}else K="";break;default:K=r(V,t(V,ne,fe),K,X,w+1)}Se+=K,K=fe=ie=te=I=0,ne="",S=G.charCodeAt(++H);break;case 125:case 59:if(ne=(0<ie?ne.replace(y,""):ne).trim(),1<(de=ne.length))switch(te===0&&(I=ne.charCodeAt(0),I===45||96<I&&123>I)&&(de=(ne=ne.replace(" ",":")).length),0<Q&&(De=c(1,ne,V,B,D,U,ue.length,X,w,X))!==void 0&&(de=(ne=De.trim()).length)===0&&(ne="\0\0"),I=ne.charCodeAt(0),S=ne.charCodeAt(1),I){case 0:break;case 64:if(S===105||S===99){_e+=ne+G.charAt(H);break}default:ne.charCodeAt(de-1)!==58&&(ue+=o(ne,I,S,ne.charCodeAt(2)))}fe=ie=te=I=0,ne="",S=G.charCodeAt(++H)}}switch(S){case 13:case 10:v===47?v=0:1+I===0&&X!==107&&0<ne.length&&(ie=1,ne+="\0"),0<Q*se&&c(0,ne,V,B,D,U,ue.length,X,w,X),U=1,D++;break;case 59:case 125:if(v+z+Y+F===0){U++;break}default:switch(U++,ce=G.charAt(H),S){case 9:case 32:if(z+F+v===0)switch(R){case 44:case 58:case 9:case 32:ce="";break;default:S!==32&&(ce=" ")}break;case 0:ce="\\0";break;case 12:ce="\\f";break;case 11:ce="\\v";break;case 38:z+v+F===0&&(ie=fe=1,ce="\f"+ce);break;case 108:if(z+v+F+_===0&&0<te)switch(H-te){case 2:R===112&&G.charCodeAt(H-3)===58&&(_=R);case 8:N===111&&(_=N)}break;case 58:z+v+F===0&&(te=H);break;case 44:v+Y+z+F===0&&(ie=1,ce+="\r");break;case 34:case 39:v===0&&(z=z===S?0:z===0?S:z);break;case 91:z+v+Y===0&&F++;break;case 93:z+v+Y===0&&F--;break;case 41:z+v+F===0&&Y--;break;case 40:if(z+v+F===0){if(I===0)switch(2*R+3*N){case 533:break;default:I=1}Y++}break;case 64:v+Y+z+F+te+K===0&&(K=1);break;case 42:case 47:if(!(0<z+F+Y))switch(v){case 0:switch(2*S+3*G.charCodeAt(H+1)){case 235:v=47;break;case 220:de=H,v=42}break;case 42:S===47&&R===42&&de+2!==H&&(G.charCodeAt(de+2)===33&&(ue+=G.substring(de,H+1)),ce="",v=0)}}v===0&&(ne+=ce)}N=R,R=S,H++}if(de=ue.length,0<de){if(ie=V,0<Q&&(De=c(2,ue,ie,B,D,U,de,X,w,X),De!==void 0&&(ue=De).length===0))return _e+ue+Se;if(ue=ie.join(",")+"{"+ue+"}",$*_!==0){switch($!==2||s(ue,2)||(_=0),_){case 111:ue=ue.replace(A,":-moz-$1")+ue;break;case 112:ue=ue.replace(Z,"::-webkit-input-$1")+ue.replace(Z,"::-moz-$1")+ue.replace(Z,":-ms-input-$1")+ue}_=0}}return _e+ue+Se}function t(B,V,G){var X=V.trim().split(m);V=X;var w=X.length,F=B.length;switch(F){case 0:case 1:var v=0;for(B=F===0?"":B[0]+" ";v<w;++v)V[v]=n(B,V[v],G).trim();break;default:var Y=v=0;for(V=[];v<w;++v)for(var z=0;z<F;++z)V[Y++]=n(B[z]+" ",X[v],G).trim()}return V}function n(B,V,G){var X=V.charCodeAt(0);switch(33>X&&(X=(V=V.trim()).charCodeAt(0)),X){case 38:return V.replace(W,"$1"+B.trim());case 58:return B.trim()+V.replace(W,"$1"+B.trim());default:if(0<1*G&&0<V.indexOf("\f"))return V.replace(W,(B.charCodeAt(0)===58?"":"$1")+B.trim())}return B+V}function o(B,V,G,X){var w=B+";",F=2*V+3*G+4*X;if(F===944){B=w.indexOf(":",9)+1;var v=w.substring(B,w.length-1).trim();return v=w.substring(0,B).trim()+v+";",$===1||$===2&&s(v,1)?"-webkit-"+v+v:v}if($===0||$===2&&!s(w,1))return w;switch(F){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(J,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return v=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+v+"-webkit-"+w+"-ms-flex-pack"+v+w;case 1005:return b.test(w)?w.replace(x,":-webkit-")+w.replace(x,":-moz-")+w:w;case 1e3:switch(v=w.substring(13).trim(),V=v.indexOf("-")+1,v.charCodeAt(0)+v.charCodeAt(V)){case 226:v=w.replace(f,"tb");break;case 232:v=w.replace(f,"tb-rl");break;case 220:v=w.replace(f,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+v+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(V=(w=B).length-10,v=(w.charCodeAt(V)===33?w.substring(0,V):w).substring(B.indexOf(":",7)+1).trim(),F=v.charCodeAt(0)+(v.charCodeAt(7)|0)){case 203:if(111>v.charCodeAt(8))break;case 115:w=w.replace(v,"-webkit-"+v)+";"+w;break;case 207:case 102:w=w.replace(v,"-webkit-"+(102<F?"inline-":"")+"box")+";"+w.replace(v,"-webkit-"+v)+";"+w.replace(v,"-ms-"+v+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return v=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+v+"-ms-flex-"+v+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(T,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(T,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(j.test(B)===!0)return(v=B.substring(B.indexOf(":")+1)).charCodeAt(0)===115?o(B.replace("stretch","fill-available"),V,G,X).replace(":fill-available",":stretch"):w.replace(v,"-webkit-"+v)+w.replace(v,"-moz-"+v.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,G+X===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(M,"$1-webkit-$2")+w}return w}function s(B,V){var G=B.indexOf(V===1?":":"{"),X=B.substring(0,V!==3?G:10);return G=B.substring(G+1,B.length-1),ee(V!==2?X:X.replace(P,"$1"),G,V)}function i(B,V){var G=o(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return G!==V+";"?G.replace(C," or ($1)").substring(4):"("+V+")"}function c(B,V,G,X,w,F,v,Y,z,I){for(var S=0,R=V,N;S<Q;++S)switch(N=O[S].call(l,B,R,G,X,w,F,v,Y,z,I)){case void 0:case!1:case!0:case null:break;default:R=N}if(R!==V)return R}function d(B){switch(B){case void 0:case null:Q=O.length=0;break;default:if(typeof B=="function")O[Q++]=B;else if(typeof B=="object")for(var V=0,G=B.length;V<G;++V)d(B[V]);else se=!!B|0}return d}function a(B){return B=B.prefix,B!==void 0&&(ee=null,B?typeof B!="function"?$=1:($=2,ee=B):$=0),a}function l(B,V){var G=B;if(33>G.charCodeAt(0)&&(G=G.trim()),oe=G,G=[oe],0<Q){var X=c(-1,V,G,G,D,U,0,0,0,0);X!==void 0&&typeof X=="string"&&(V=X)}var w=r(L,G,V,0,0);return 0<Q&&(X=c(-2,w,G,G,D,U,w.length,0,0,0),X!==void 0&&(w=X)),oe="",_=0,U=D=1,w}var h=/^\0+/g,y=/[\0\r\f]/g,x=/: */g,b=/zoo|gra/,M=/([,: ])(transform)/g,m=/,\r+?/g,W=/([\t\r\n ])*\f?&/g,q=/@(k\w+)\s*(\S*)\s*/,Z=/::(place)/g,A=/:(read-only)/g,f=/[svh]\w+-[tblr]{2}/,g=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,T=/-self|flex-/g,P=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,J=/([^-])(image-set\()/,U=1,D=1,_=0,$=1,L=[],O=[],Q=0,ee=null,se=0,oe="";return l.use=d,l.set=a,e!==void 0&&a(e),l}var Jr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function qr(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Qr=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Cn=qr(function(e){return Qr.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Tt={},Rr={get exports(){return Tt},set exports(e){Tt=e}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kn;function eo(){if(kn)return ge;kn=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,a=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,M=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,W=e?Symbol.for("react.responder"):60118,q=e?Symbol.for("react.scope"):60119;function Z(f){if(typeof f=="object"&&f!==null){var g=f.$$typeof;switch(g){case r:switch(f=f.type,f){case d:case a:case n:case s:case o:case h:return f;default:switch(f=f&&f.$$typeof,f){case c:case l:case b:case x:case i:return f;default:return g}}case t:return g}}}function A(f){return Z(f)===a}return ge.AsyncMode=d,ge.ConcurrentMode=a,ge.ContextConsumer=c,ge.ContextProvider=i,ge.Element=r,ge.ForwardRef=l,ge.Fragment=n,ge.Lazy=b,ge.Memo=x,ge.Portal=t,ge.Profiler=s,ge.StrictMode=o,ge.Suspense=h,ge.isAsyncMode=function(f){return A(f)||Z(f)===d},ge.isConcurrentMode=A,ge.isContextConsumer=function(f){return Z(f)===c},ge.isContextProvider=function(f){return Z(f)===i},ge.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===r},ge.isForwardRef=function(f){return Z(f)===l},ge.isFragment=function(f){return Z(f)===n},ge.isLazy=function(f){return Z(f)===b},ge.isMemo=function(f){return Z(f)===x},ge.isPortal=function(f){return Z(f)===t},ge.isProfiler=function(f){return Z(f)===s},ge.isStrictMode=function(f){return Z(f)===o},ge.isSuspense=function(f){return Z(f)===h},ge.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===n||f===a||f===s||f===o||f===h||f===y||typeof f=="object"&&f!==null&&(f.$$typeof===b||f.$$typeof===x||f.$$typeof===i||f.$$typeof===c||f.$$typeof===l||f.$$typeof===m||f.$$typeof===W||f.$$typeof===q||f.$$typeof===M)},ge.typeOf=Z,ge}var ye={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mn;function to(){return Mn||(Mn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,a=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,M=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,W=e?Symbol.for("react.responder"):60118,q=e?Symbol.for("react.scope"):60119;function Z(S){return typeof S=="string"||typeof S=="function"||S===n||S===a||S===s||S===o||S===h||S===y||typeof S=="object"&&S!==null&&(S.$$typeof===b||S.$$typeof===x||S.$$typeof===i||S.$$typeof===c||S.$$typeof===l||S.$$typeof===m||S.$$typeof===W||S.$$typeof===q||S.$$typeof===M)}function A(S){if(typeof S=="object"&&S!==null){var R=S.$$typeof;switch(R){case r:var N=S.type;switch(N){case d:case a:case n:case s:case o:case h:return N;default:var K=N&&N.$$typeof;switch(K){case c:case l:case b:case x:case i:return K;default:return R}}case t:return R}}}var f=d,g=a,C=c,T=i,P=r,j=l,J=n,U=b,D=x,_=t,$=s,L=o,O=h,Q=!1;function ee(S){return Q||(Q=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),se(S)||A(S)===d}function se(S){return A(S)===a}function oe(S){return A(S)===c}function B(S){return A(S)===i}function V(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function G(S){return A(S)===l}function X(S){return A(S)===n}function w(S){return A(S)===b}function F(S){return A(S)===x}function v(S){return A(S)===t}function Y(S){return A(S)===s}function z(S){return A(S)===o}function I(S){return A(S)===h}ye.AsyncMode=f,ye.ConcurrentMode=g,ye.ContextConsumer=C,ye.ContextProvider=T,ye.Element=P,ye.ForwardRef=j,ye.Fragment=J,ye.Lazy=U,ye.Memo=D,ye.Portal=_,ye.Profiler=$,ye.StrictMode=L,ye.Suspense=O,ye.isAsyncMode=ee,ye.isConcurrentMode=se,ye.isContextConsumer=oe,ye.isContextProvider=B,ye.isElement=V,ye.isForwardRef=G,ye.isFragment=X,ye.isLazy=w,ye.isMemo=F,ye.isPortal=v,ye.isProfiler=Y,ye.isStrictMode=z,ye.isSuspense=I,ye.isValidElementType=Z,ye.typeOf=A}()),ye}(function(e){process.env.NODE_ENV==="production"?e.exports=eo():e.exports=to()})(Rr);var Pt=Tt,no={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ro={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},oo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},At={};At[Pt.ForwardRef]=oo,At[Pt.Memo]=Dn;function $n(e){return Pt.isMemo(e)?Dn:At[e.$$typeof]||no}var so=Object.defineProperty,io=Object.getOwnPropertyNames,En=Object.getOwnPropertySymbols,ao=Object.getOwnPropertyDescriptor,co=Object.getPrototypeOf,_n=Object.prototype;function Tn(e,r,t){if(typeof r!="string"){if(_n){var n=co(r);n&&n!==_n&&Tn(e,n,t)}var o=io(r);En&&(o=o.concat(En(r)));for(var s=$n(e),i=$n(r),c=0;c<o.length;++c){var d=o[c];if(!ro[d]&&!(t&&t[d])&&!(i&&i[d])&&!(s&&s[d])){var a=ao(r,d);try{so(e,d,a)}catch{}}}}return e}var lo=Tn;function Te(){return(Te=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Pn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},It=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ct.typeOf(e)},mt=Object.freeze([]),Ne=Object.freeze({});function Ue(e){return typeof e=="function"}function Ot(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Yt(e){return e&&typeof e.styledComponentId=="string"}var Ke=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Lt=typeof window<"u"&&"HTMLElement"in window,uo=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),fo={},ho=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function po(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Ie(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(po.apply(void 0,[ho[e]].concat(t)).trim())}var mo=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,i=s;t>=i;)(i<<=1)<0&&Ie(16,""+t);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var c=s;c<i;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(t+1),a=0,l=n.length;a<l;a++)this.tag.insertRule(d,n[a])&&(this.groupSizes[t]++,d++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var i=o;i<s;i++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),i=s+o,c=s;c<i;c++)n+=this.tag.getRule(c)+`/*!sc*/
`;return n},e}(),gt=new Map,yt=new Map,lt=1,vt=function(e){if(gt.has(e))return gt.get(e);for(;yt.has(lt);)lt++;var r=lt++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&Ie(16,""+r),gt.set(e,r),yt.set(r,e),r},go=function(e){return yt.get(e)},yo=function(e,r){r>=lt&&(lt=r+1),gt.set(e,r),yt.set(r,e)},vo="style["+Ke+'][data-styled-version="5.3.8"]',bo=new RegExp("^"+Ke+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),xo=function(e,r,t){for(var n,o=t.split(","),s=0,i=o.length;s<i;s++)(n=o[s])&&e.registerName(r,n)},wo=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var i=t[o].trim();if(i){var c=i.match(bo);if(c){var d=0|parseInt(c[1],10),a=c[2];d!==0&&(yo(a,d),xo(e,a,c[3]),e.getTag().insertRules(d,n)),n.length=0}else n.push(i)}}},So=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},An=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(c){for(var d=c.childNodes,a=d.length;a>=0;a--){var l=d[a];if(l&&l.nodeType===1&&l.hasAttribute(Ke))return l}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(Ke,"active"),n.setAttribute("data-styled-version","5.3.8");var i=So();return i&&n.setAttribute("nonce",i),t.insertBefore(n,s),n},Co=function(){function e(t){var n=this.element=An(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,i=0,c=s.length;i<c;i++){var d=s[i];if(d.ownerNode===o)return d}Ie(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),ko=function(){function e(t){var n=this.element=An(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Mo=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),In=Lt,Do={isServer:!Lt,useCSSOMInjection:!uo},bt=function(){function e(t,n,o){t===void 0&&(t=Ne),n===void 0&&(n={}),this.options=Te({},Do,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Lt&&In&&(In=!1,function(s){for(var i=document.querySelectorAll(vo),c=0,d=i.length;c<d;c++){var a=i[c];a&&a.getAttribute(Ke)!=="active"&&(wo(s,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(t){return vt(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Te({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,i=n.target,t=o?new Mo(i):s?new Co(i):new ko(i),new mo(t)));var t,n,o,s,i},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(vt(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(vt(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(vt(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",i=0;i<o;i++){var c=go(i);if(c!==void 0){var d=t.names.get(c),a=n.getGroup(i);if(d&&a&&d.size){var l=Ke+".g"+i+'[id="'+c+'"]',h="";d!==void 0&&d.forEach(function(y){y.length>0&&(h+=y+",")}),s+=""+a+l+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),$o=/(a)(d)/gi,On=function(e){return String.fromCharCode(e+(e>25?39:97))};function Nt(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=On(r%52)+t;return(On(r%52)+t).replace($o,"$1-$2")}var ze=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},Yn=function(e){return ze(5381,e)};function Ln(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(Ue(t)&&!Yt(t))return!1}return!0}var Eo=Yn("5.3.8"),_o=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&Ln(r),this.componentId=t,this.baseHash=ze(Eo,t),this.baseStyle=n,bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var i=Be(this.rules,r,t,n).join(""),c=Nt(ze(this.baseHash,i)>>>0);if(!t.hasNameForId(o,c)){var d=n(i,"."+c,void 0,o);t.insertRules(o,c,d)}s.push(c),this.staticRulesId=c}else{for(var a=this.rules.length,l=ze(this.baseHash,n.hash),h="",y=0;y<a;y++){var x=this.rules[y];if(typeof x=="string")h+=x,process.env.NODE_ENV!=="production"&&(l=ze(l,x+y));else if(x){var b=Be(x,r,t,n),M=Array.isArray(b)?b.join(""):b;l=ze(l,M+y),h+=M}}if(h){var m=Nt(l>>>0);if(!t.hasNameForId(o,m)){var W=n(h,"."+m,void 0,o);t.insertRules(o,m,W)}s.push(m)}}return s.join(" ")},e}(),To=/^\s*\/\/.*$/gm,Po=[":","[",".","#"];function Ao(e){var r,t,n,o,s=e===void 0?Ne:e,i=s.options,c=i===void 0?Ne:i,d=s.plugins,a=d===void 0?mt:d,l=new Kr(c),h=[],y=function(M){function m(W){if(W)try{M(W+"}")}catch{}}return function(W,q,Z,A,f,g,C,T,P,j){switch(W){case 1:if(P===0&&q.charCodeAt(0)===64)return M(q+";"),"";break;case 2:if(T===0)return q+"/*|*/";break;case 3:switch(T){case 102:case 112:return M(Z[0]+q),"";default:return q+(j===0?"/*|*/":"")}case-2:q.split("/*|*/}").forEach(m)}}}(function(M){h.push(M)}),x=function(M,m,W){return m===0&&Po.indexOf(W[t.length])!==-1||W.match(o)?M:"."+r};function b(M,m,W,q){q===void 0&&(q="&");var Z=M.replace(To,""),A=m&&W?W+" "+m+" { "+Z+" }":Z;return r=q,t=m,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),l(W||!m?"":m,A)}return l.use([].concat(a,[function(M,m,W){M===2&&W.length&&W[0].lastIndexOf(t)>0&&(W[0]=W[0].replace(n,x))},y,function(M){if(M===-2){var m=h;return h=[],m}}])),b.hash=a.length?a.reduce(function(M,m){return m.name||Ie(15),ze(M,m.name)},5381).toString():"",b}var Nn=p.createContext();Nn.Consumer;var Fn=p.createContext(),Io=(Fn.Consumer,new bt),Ft=Ao();function Wn(){return p.useContext(Nn)||Io}function Hn(){return p.useContext(Fn)||Ft}var zn=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=Ft);var i=n.name+s.hash;o.hasNameForId(n.id,i)||o.insertRules(n.id,i,s(n.rules,i,"@keyframes"))},this.toString=function(){return Ie(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=Ft),this.name+r.hash},e}(),Oo=/([A-Z])/,Yo=/([A-Z])/g,Lo=/^ms-/,No=function(e){return"-"+e.toLowerCase()};function Bn(e){return Oo.test(e)?e.replace(Yo,No).replace(Lo,"-ms-"):e}var jn=function(e){return e==null||e===!1||e===""};function Be(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],i=0,c=e.length;i<c;i+=1)(o=Be(e[i],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(jn(e))return"";if(Yt(e))return"."+e.styledComponentId;if(Ue(e)){if(typeof(a=e)!="function"||a.prototype&&a.prototype.isReactComponent||!r)return e;var d=e(r);return process.env.NODE_ENV!=="production"&&ct.isElement(d)&&console.warn(Ot(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Be(d,r,t,n)}var a;return e instanceof zn?t?(e.inject(t,n),e.getName(n)):e:It(e)?function l(h,y){var x,b,M=[];for(var m in h)h.hasOwnProperty(m)&&!jn(h[m])&&(Array.isArray(h[m])&&h[m].isCss||Ue(h[m])?M.push(Bn(m)+":",h[m],";"):It(h[m])?M.push.apply(M,l(h[m],m)):M.push(Bn(m)+": "+(x=m,(b=h[m])==null||typeof b=="boolean"||b===""?"":typeof b!="number"||b===0||x in Jr?String(b).trim():b+"px")+";"));return y?[y+" {"].concat(M,["}"]):M}(e):e.toString()}var Zn=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function xt(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return Ue(e)||It(e)?Zn(Be(Pn(mt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:Zn(Be(Pn(e,t)))}var Vn=/invalid hook call/i,wt=new Set,Gn=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(Vn.test(s))o=!1,wt.delete(t);else{for(var i=arguments.length,c=new Array(i>1?i-1:0),d=1;d<i;d++)c[d-1]=arguments[d];n.apply(void 0,[s].concat(c))}},p.useRef(),o&&!wt.has(t)&&(console.warn(t),wt.add(t))}catch(s){Vn.test(s.message)&&wt.delete(t)}finally{console.error=n}}},Xn=function(e,r,t){return t===void 0&&(t=Ne),e.theme!==t.theme&&e.theme||r||t.theme},Fo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wo=/(^-|-$)/g;function Wt(e){return e.replace(Fo,"-").replace(Wo,"")}var Ht=function(e){return Nt(Yn(e)>>>0)};function St(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var zt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ho=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function zo(e,r,t){var n=e[t];zt(r)&&zt(n)?Un(n,r):e[t]=r}function Un(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var i=s[o];if(zt(i))for(var c in i)Ho(c)&&zo(e,i[c],c)}return e}var Je=p.createContext();Je.Consumer;function Bo(e){var r=p.useContext(Je),t=p.useMemo(function(){return function(n,o){if(!n)return Ie(14);if(Ue(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Ie(7)}return Array.isArray(n)||typeof n!="object"?Ie(8):o?Te({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?p.createElement(Je.Provider,{value:t},e.children):null}var Bt={};function Kn(e,r,t){var n=Yt(e),o=!St(e),s=r.attrs,i=s===void 0?mt:s,c=r.componentId,d=c===void 0?function(q,Z){var A=typeof q!="string"?"sc":Wt(q);Bt[A]=(Bt[A]||0)+1;var f=A+"-"+Ht("5.3.8"+A+Bt[A]);return Z?Z+"-"+f:f}(r.displayName,r.parentComponentId):c,a=r.displayName,l=a===void 0?function(q){return St(q)?"styled."+q:"Styled("+Ot(q)+")"}(e):a,h=r.displayName&&r.componentId?Wt(r.displayName)+"-"+r.componentId:r.componentId||d,y=n&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,x=r.shouldForwardProp;n&&e.shouldForwardProp&&(x=r.shouldForwardProp?function(q,Z,A){return e.shouldForwardProp(q,Z,A)&&r.shouldForwardProp(q,Z,A)}:e.shouldForwardProp);var b,M=new _o(t,h,n?e.componentStyle:void 0),m=M.isStatic&&i.length===0,W=function(q,Z){return function(A,f,g,C){var T=A.attrs,P=A.componentStyle,j=A.defaultProps,J=A.foldedComponentIds,U=A.shouldForwardProp,D=A.styledComponentId,_=A.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(D);var $=function(X,w,F){X===void 0&&(X=Ne);var v=Te({},w,{theme:X}),Y={};return F.forEach(function(z){var I,S,R,N=z;for(I in Ue(N)&&(N=N(v)),N)v[I]=Y[I]=I==="className"?(S=Y[I],R=N[I],S&&R?S+" "+R:S||R):N[I]}),[v,Y]}(Xn(f,p.useContext(Je),j)||Ne,f,T),L=$[0],O=$[1],Q=function(X,w,F,v){var Y=Wn(),z=Hn(),I=w?X.generateAndInjectStyles(Ne,Y,z):X.generateAndInjectStyles(F,Y,z);return process.env.NODE_ENV!=="production"&&p.useDebugValue(I),process.env.NODE_ENV!=="production"&&!w&&v&&v(I),I}(P,C,L,process.env.NODE_ENV!=="production"?A.warnTooManyClasses:void 0),ee=g,se=O.$as||f.$as||O.as||f.as||_,oe=St(se),B=O!==f?Te({},f,{},O):f,V={};for(var G in B)G[0]!=="$"&&G!=="as"&&(G==="forwardedAs"?V.as=B[G]:(U?U(G,Cn,se):!oe||Cn(G))&&(V[G]=B[G]));return f.style&&O.style!==f.style&&(V.style=Te({},f.style,{},O.style)),V.className=Array.prototype.concat(J,D,Q!==D?Q:null,f.className,O.className).filter(Boolean).join(" "),V.ref=ee,p.createElement(se,V)}(b,q,Z,m)};return W.displayName=l,(b=p.forwardRef(W)).attrs=y,b.componentStyle=M,b.displayName=l,b.shouldForwardProp=x,b.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):mt,b.styledComponentId=h,b.target=n?e.target:e,b.withComponent=function(q){var Z=r.componentId,A=function(g,C){if(g==null)return{};var T,P,j={},J=Object.keys(g);for(P=0;P<J.length;P++)T=J[P],C.indexOf(T)>=0||(j[T]=g[T]);return j}(r,["componentId"]),f=Z&&Z+"-"+(St(q)?q:Wt(Ot(q)));return Kn(q,Te({},A,{attrs:y,componentId:f}),t)},Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=n?Un({},e.defaultProps,q):q}}),process.env.NODE_ENV!=="production"&&(Gn(l,h),b.warnTooManyClasses=function(q,Z){var A={},f=!1;return function(g){if(!f&&(A[g]=!0,Object.keys(A).length>=200)){var C=Z?' with the id of "'+Z+'"':"";console.warn("Over 200 classes were generated for component "+q+C+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),f=!0,A={}}}}(l,h)),b.toString=function(){return"."+b.styledComponentId},o&&lo(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),b}var jt=function(e){return function r(t,n,o){if(o===void 0&&(o=Ne),!ct.isValidElementType(n))return Ie(1,String(n));var s=function(){return t(n,o,xt.apply(void 0,arguments))};return s.withConfig=function(i){return r(t,n,Te({},o,{},i))},s.attrs=function(i){return r(t,n,Te({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},s}(Kn,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){jt[e]=jt(e)});var jo=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ln(t),bt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var i=s(Be(this.rules,n,o,s).join(""),""),c=this.componentId+t;o.insertRules(c,c,i)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&bt.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function Zo(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=xt.apply(void 0,[e].concat(t)),s="sc-global-"+Ht(JSON.stringify(o)),i=new jo(o,s);function c(a){var l=Wn(),h=Hn(),y=p.useContext(Je),x=p.useRef(l.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(a.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(b){return typeof b=="string"&&b.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),l.server&&d(x,a,l,y,h),p.useLayoutEffect(function(){if(!l.server)return d(x,a,l,y,h),function(){return i.removeStyles(x,l)}},[x,a,l,y,h]),null}function d(a,l,h,y,x){if(i.isStatic)i.renderStyles(a,fo,h,x);else{var b=Te({},l,{theme:Xn(l,y,c.defaultProps)});i.renderStyles(a,b,h,x)}}return process.env.NODE_ENV!=="production"&&Gn(s),p.memo(c)}function Ct(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=xt.apply(void 0,[e].concat(t)).join(""),s=Ht(o);return new zn(s,o)}var je=function(){return p.useContext(Je)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const k=jt,dt="reactSchedulerOutsideWrapper",Vo=Zo`

  #${dt} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${dt} *,
 #${dt} *:before,
 #${dt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,Go={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},Xo={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},qe=`
margin: 0;
padding: 0;
`,kt=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;k.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const ve=50,Oe=24,Qe=16,Ze=40,Re=Ze+Qe+Oe,et=84,he=56,$e=196,Ee=12,we=50,tt=24,ut=16,Zt=40,Uo=tt+ut+Zt,Jn=24,qn=52,Pe={topRow:"600 14px Inter",middleRow:"400 10px Inter",bottomRow:{name:"600 14px Inter",number:"600 10px Inter",hoursInDay:"400 9px Inter"}},nt=3,Ko=1.6,Jo=4.5,Vt=12,Mt=24,qo="reactSchedulerCanvasHeaderWrapper",Qn="reactSchedulerCanvasWrapper",Ve=dt,Qo=4,Gt=48,Fe=5,Ro=40,Rn=8,Xt=Oe/2+2,er=Qe/2+Oe+1,tr=2,be=60,Me=21;var Ge={},es={get exports(){return Ge},set exports(e){Ge=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",i="second",c="minute",d="hour",a="day",l="week",h="month",y="quarter",x="year",b="date",M="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,W=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(D){var _=["th","st","nd","rd"],$=D%100;return"["+D+(_[($-20)%10]||_[$]||_[0])+"]"}},Z=function(D,_,$){var L=String(D);return!L||L.length>=_?D:""+Array(_+1-L.length).join($)+D},A={s:Z,z:function(D){var _=-D.utcOffset(),$=Math.abs(_),L=Math.floor($/60),O=$%60;return(_<=0?"+":"-")+Z(L,2,"0")+":"+Z(O,2,"0")},m:function D(_,$){if(_.date()<$.date())return-D($,_);var L=12*($.year()-_.year())+($.month()-_.month()),O=_.clone().add(L,h),Q=$-O<0,ee=_.clone().add(L+(Q?-1:1),h);return+(-(L+($-O)/(Q?O-ee:ee-O))||0)},a:function(D){return D<0?Math.ceil(D)||0:Math.floor(D)},p:function(D){return{M:h,y:x,w:l,d:a,D:b,h:d,m:c,s:i,ms:s,Q:y}[D]||String(D||"").toLowerCase().replace(/s$/,"")},u:function(D){return D===void 0}},f="en",g={};g[f]=q;var C=function(D){return D instanceof J},T=function D(_,$,L){var O;if(!_)return f;if(typeof _=="string"){var Q=_.toLowerCase();g[Q]&&(O=Q),$&&(g[Q]=$,O=Q);var ee=_.split("-");if(!O&&ee.length>1)return D(ee[0])}else{var se=_.name;g[se]=_,O=se}return!L&&O&&(f=O),O||!L&&f},P=function(D,_){if(C(D))return D.clone();var $=typeof _=="object"?_:{};return $.date=D,$.args=arguments,new J($)},j=A;j.l=T,j.i=C,j.w=function(D,_){return P(D,{locale:_.$L,utc:_.$u,x:_.$x,$offset:_.$offset})};var J=function(){function D($){this.$L=T($.locale,null,!0),this.parse($)}var _=D.prototype;return _.parse=function($){this.$d=function(L){var O=L.date,Q=L.utc;if(O===null)return new Date(NaN);if(j.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var ee=O.match(m);if(ee){var se=ee[2]-1||0,oe=(ee[7]||"0").substring(0,3);return Q?new Date(Date.UTC(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)):new Date(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)}}return new Date(O)}($),this.$x=$.x||{},this.init()},_.init=function(){var $=this.$d;this.$y=$.getFullYear(),this.$M=$.getMonth(),this.$D=$.getDate(),this.$W=$.getDay(),this.$H=$.getHours(),this.$m=$.getMinutes(),this.$s=$.getSeconds(),this.$ms=$.getMilliseconds()},_.$utils=function(){return j},_.isValid=function(){return this.$d.toString()!==M},_.isSame=function($,L){var O=P($);return this.startOf(L)<=O&&O<=this.endOf(L)},_.isAfter=function($,L){return P($)<this.startOf(L)},_.isBefore=function($,L){return this.endOf(L)<P($)},_.$g=function($,L,O){return j.u($)?this[L]:this.set(O,$)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function($,L){var O=this,Q=!!j.u(L)||L,ee=j.p($),se=function(v,Y){var z=j.w(O.$u?Date.UTC(O.$y,Y,v):new Date(O.$y,Y,v),O);return Q?z:z.endOf(a)},oe=function(v,Y){return j.w(O.toDate()[v].apply(O.toDate("s"),(Q?[0,0,0,0]:[23,59,59,999]).slice(Y)),O)},B=this.$W,V=this.$M,G=this.$D,X="set"+(this.$u?"UTC":"");switch(ee){case x:return Q?se(1,0):se(31,11);case h:return Q?se(1,V):se(0,V+1);case l:var w=this.$locale().weekStart||0,F=(B<w?B+7:B)-w;return se(Q?G-F:G+(6-F),V);case a:case b:return oe(X+"Hours",0);case d:return oe(X+"Minutes",1);case c:return oe(X+"Seconds",2);case i:return oe(X+"Milliseconds",3);default:return this.clone()}},_.endOf=function($){return this.startOf($,!1)},_.$set=function($,L){var O,Q=j.p($),ee="set"+(this.$u?"UTC":""),se=(O={},O[a]=ee+"Date",O[b]=ee+"Date",O[h]=ee+"Month",O[x]=ee+"FullYear",O[d]=ee+"Hours",O[c]=ee+"Minutes",O[i]=ee+"Seconds",O[s]=ee+"Milliseconds",O)[Q],oe=Q===a?this.$D+(L-this.$W):L;if(Q===h||Q===x){var B=this.clone().set(b,1);B.$d[se](oe),B.init(),this.$d=B.set(b,Math.min(this.$D,B.daysInMonth())).$d}else se&&this.$d[se](oe);return this.init(),this},_.set=function($,L){return this.clone().$set($,L)},_.get=function($){return this[j.p($)]()},_.add=function($,L){var O,Q=this;$=Number($);var ee=j.p(L),se=function(V){var G=P(Q);return j.w(G.date(G.date()+Math.round(V*$)),Q)};if(ee===h)return this.set(h,this.$M+$);if(ee===x)return this.set(x,this.$y+$);if(ee===a)return se(1);if(ee===l)return se(7);var oe=(O={},O[c]=n,O[d]=o,O[i]=t,O)[ee]||1,B=this.$d.getTime()+$*oe;return j.w(B,this)},_.subtract=function($,L){return this.add(-1*$,L)},_.format=function($){var L=this,O=this.$locale();if(!this.isValid())return O.invalidDate||M;var Q=$||"YYYY-MM-DDTHH:mm:ssZ",ee=j.z(this),se=this.$H,oe=this.$m,B=this.$M,V=O.weekdays,G=O.months,X=function(Y,z,I,S){return Y&&(Y[z]||Y(L,Q))||I[z].slice(0,S)},w=function(Y){return j.s(se%12||12,Y,"0")},F=O.meridiem||function(Y,z,I){var S=Y<12?"AM":"PM";return I?S.toLowerCase():S},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:B+1,MM:j.s(B+1,2,"0"),MMM:X(O.monthsShort,B,G,3),MMMM:X(G,B),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:X(O.weekdaysMin,this.$W,V,2),ddd:X(O.weekdaysShort,this.$W,V,3),dddd:V[this.$W],H:String(se),HH:j.s(se,2,"0"),h:w(1),hh:w(2),a:F(se,oe,!0),A:F(se,oe,!1),m:String(oe),mm:j.s(oe,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:ee};return Q.replace(W,function(Y,z){return z||v[Y]||ee.replace(":","")})},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function($,L,O){var Q,ee=j.p(L),se=P($),oe=(se.utcOffset()-this.utcOffset())*n,B=this-se,V=j.m(this,se);return V=(Q={},Q[x]=V/12,Q[h]=V,Q[y]=V/3,Q[l]=(B-oe)/6048e5,Q[a]=(B-oe)/864e5,Q[d]=B/o,Q[c]=B/n,Q[i]=B/t,Q)[ee]||B,O?V:j.a(V)},_.daysInMonth=function(){return this.endOf(h).$D},_.$locale=function(){return g[this.$L]},_.locale=function($,L){if(!$)return this.$L;var O=this.clone(),Q=T($,L,!0);return Q&&(O.$L=Q),O},_.clone=function(){return j.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},D}(),U=J.prototype;return P.prototype=U,[["$ms",s],["$s",i],["$m",c],["$H",d],["$W",a],["$M",h],["$y",x],["$D",b]].forEach(function(D){U[D[1]]=function(_){return this.$g(_,D[0],D[1])}}),P.extend=function(D,_){return D.$i||(D(_,J,P),D.$i=!0),P},P.locale=T,P.isDayjs=C,P.unix=function(D){return P(1e3*D)},P.en=g[f],P.Ls=g,P.p={},P})})(es);const E=Ge,nr=e=>e%4===0&&e%100>0||e%400===0?366:365,Ut=e=>{const r=e.day();return r!==0&&r!==6},rr=(e,r)=>E(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),or=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:Ut(e),isCurrentDay:e.isSame(E(),"day"),year:parseInt(e.format("YYYY"))}),Kt=(e,r,t,n,o,s,i)=>{e.strokeStyle=i.colors.border,s?e.fillStyle=i.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=i.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,he),e.strokeRect(r+.5,t+.5,n,he)},Jt=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Me},ts=(e,r,t,n,o,s=[])=>{for(let i=0;i<r;i++){const c=Jt(i,s);for(let d=0;d<=t;d++){const a=E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(d,"days"),l=a.isSame(E(),"day");Kt(e,d*ve,i*he+c,ve,Ut(a),l,o)}}},ns=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},rs=(e,r,t,n,o,s=[])=>{let i=0,c=-(n.dayOfMonth-1)*Ee;const d=r*he+s.length*Me;for(let a=0;a<=t;a++){const h=E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(a,"weeks").isSame(E(),"week");for(let y=0;y<r;y++){const x=Jt(y,s);Kt(e,i,y*he+x,et,!0,h,o)}i+=et}for(let a=0;a<t;a++){const l=rr(n,a)*Ee;ns(e,c,d,o),c+=l}},os=(e,r,t,n,o,s=[])=>{const i=E(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let c=0;c<r;c++){const d=Jt(c,s);for(let a=0;a<=t;a++){let l;a===Math.floor(t/2)?l=E():a>Math.floor(t/2)?l=E().add(a-Math.floor(t/2),"hours"):l=E().subtract(Math.floor(t/2)-c,"hours");const h=i.isSame(E(),"day")&&l.isSame(E(),"hour");Kt(e,a*we+we/2-.5,c*he+d,we,Ut(l),h,o)}}},ss=(e,r,t,n)=>{const o=t*he+r*Me,s=e.canvas.width,i=o+Me/2;e.fillStyle=n.mode==="dark"?n.colors.primary+"80":n.colors.primary,e.fillRect(0,o,s,Me),e.strokeStyle=n.colors.border,e.lineWidth=1,e.setLineDash([]),e.beginPath(),e.moveTo(0,i+.5),e.lineTo(s,i+.5),e.stroke()},is=(e,r,t,n,o,s,i=[])=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(Qn)){switch(r){case 0:rs(e,t,n,o,s,i);break;case 1:ts(e,t,n,o,s,i);break;case 2:os(e,t,n,o,s,i);break}for(let d=0;d<i.length;d++)ss(e,d,i[d],s)}};var qt={},as={get exports(){return qt},set exports(e){qt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t="week",n="year";return function(o,s,i){var c=s.prototype;c.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var a=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var l=i(this).startOf(n).add(1,n).date(a),h=i(this).endOf(t);if(l.isBefore(h))return 1}var y=i(this).startOf(n).date(a).startOf(t).subtract(1,"millisecond"),x=this.diff(y,t,!0);return x<0?i(this).startOf("week").week():Math.ceil(x)},c.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(as);const cs=qt;var Qt={},ls={get exports(){return Qt},set exports(e){Qt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var i=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?i:this.add(s-i,"day")}}})})(ls);const ds=Qt;var Rt={},us={get exports(){return Rt},set exports(e){Rt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t="day";return function(n,o,s){var i=function(a){return a.add(4-a.isoWeekday(),t)},c=o.prototype;c.isoWeekYear=function(){return i(this).year()},c.isoWeek=function(a){if(!this.$utils().u(a))return this.add(7*(a-this.isoWeek()),t);var l,h,y,x,b=i(this),M=(l=this.isoWeekYear(),h=this.$u,y=(h?s.utc:s)().year(l).startOf("year"),x=4-y.isoWeekday(),y.isoWeekday()>4&&(x+=7),y.add(x,t));return b.diff(M,"week")+1},c.isoWeekday=function(a){return this.$utils().u(a)?this.day()||7:this.day(this.day()%7?a:a-7)};var d=c.startOf;c.startOf=function(a,l){var h=this.$utils(),y=!!h.u(l)||l;return h.p(a)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(a,l)}}})})(us);const fs=Rt;var en={},hs={get exports(){return en},set exports(e){en=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n,o){n.prototype.isBetween=function(s,i,c,d){var a=o(s),l=o(i),h=(d=d||"()")[0]==="(",y=d[1]===")";return(h?this.isAfter(a,c):!this.isBefore(a,c))&&(y?this.isBefore(l,c):!this.isAfter(l,c))||(h?this.isBefore(a,c):!this.isAfter(a,c))&&(y?this.isAfter(l,c):!this.isBefore(l,c))}}})})(hs);const ps=en;var tn={},ms={get exports(){return tn},set exports(e){tn=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t,n,o=1e3,s=6e4,i=36e5,c=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:a,months:l,days:c,hours:i,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},x=function(f){return f instanceof A},b=function(f,g,C){return new A(f,C,g.$l)},M=function(f){return n.p(f)+"s"},m=function(f){return f<0},W=function(f){return m(f)?Math.ceil(f):Math.floor(f)},q=function(f){return Math.abs(f)},Z=function(f,g){return f?m(f)?{negative:!0,format:""+q(f)+g}:{negative:!1,format:""+f+g}:{negative:!1,format:""}},A=function(){function f(C,T,P){var j=this;if(this.$d={},this.$l=P,C===void 0&&(this.$ms=0,this.parseFromMilliseconds()),T)return b(C*y[M(T)],this);if(typeof C=="number")return this.$ms=C,this.parseFromMilliseconds(),this;if(typeof C=="object")return Object.keys(C).forEach(function(D){j.$d[M(D)]=C[D]}),this.calMilliseconds(),this;if(typeof C=="string"){var J=C.match(h);if(J){var U=J.slice(2).map(function(D){return D!=null?Number(D):0});return this.$d.years=U[0],this.$d.months=U[1],this.$d.weeks=U[2],this.$d.days=U[3],this.$d.hours=U[4],this.$d.minutes=U[5],this.$d.seconds=U[6],this.calMilliseconds(),this}}return this}var g=f.prototype;return g.calMilliseconds=function(){var C=this;this.$ms=Object.keys(this.$d).reduce(function(T,P){return T+(C.$d[P]||0)*y[P]},0)},g.parseFromMilliseconds=function(){var C=this.$ms;this.$d.years=W(C/a),C%=a,this.$d.months=W(C/l),C%=l,this.$d.days=W(C/c),C%=c,this.$d.hours=W(C/i),C%=i,this.$d.minutes=W(C/s),C%=s,this.$d.seconds=W(C/o),C%=o,this.$d.milliseconds=C},g.toISOString=function(){var C=Z(this.$d.years,"Y"),T=Z(this.$d.months,"M"),P=+this.$d.days||0;this.$d.weeks&&(P+=7*this.$d.weeks);var j=Z(P,"D"),J=Z(this.$d.hours,"H"),U=Z(this.$d.minutes,"M"),D=this.$d.seconds||0;this.$d.milliseconds&&(D+=this.$d.milliseconds/1e3);var _=Z(D,"S"),$=C.negative||T.negative||j.negative||J.negative||U.negative||_.negative,L=J.format||U.format||_.format?"T":"",O=($?"-":"")+"P"+C.format+T.format+j.format+L+J.format+U.format+_.format;return O==="P"||O==="-P"?"P0D":O},g.toJSON=function(){return this.toISOString()},g.format=function(C){var T=C||"YYYY-MM-DDTHH:mm:ss",P={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return T.replace(d,function(j,J){return J||String(P[j])})},g.as=function(C){return this.$ms/y[M(C)]},g.get=function(C){var T=this.$ms,P=M(C);return P==="milliseconds"?T%=1e3:T=P==="weeks"?W(T/y[P]):this.$d[P],T===0?0:T},g.add=function(C,T,P){var j;return j=T?C*y[M(T)]:x(C)?C.$ms:b(C,this).$ms,b(this.$ms+j*(P?-1:1),this)},g.subtract=function(C,T){return this.add(C,T,!0)},g.locale=function(C){var T=this.clone();return T.$l=C,T},g.clone=function(){return b(this.$ms,this)},g.humanize=function(C){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!C)},g.milliseconds=function(){return this.get("milliseconds")},g.asMilliseconds=function(){return this.as("milliseconds")},g.seconds=function(){return this.get("seconds")},g.asSeconds=function(){return this.as("seconds")},g.minutes=function(){return this.get("minutes")},g.asMinutes=function(){return this.as("minutes")},g.hours=function(){return this.get("hours")},g.asHours=function(){return this.as("hours")},g.days=function(){return this.get("days")},g.asDays=function(){return this.as("days")},g.weeks=function(){return this.get("weeks")},g.asWeeks=function(){return this.as("weeks")},g.months=function(){return this.get("months")},g.asMonths=function(){return this.as("months")},g.years=function(){return this.get("years")},g.asYears=function(){return this.as("years")},f}();return function(f,g,C){t=C,n=C().$utils(),C.duration=function(j,J){var U=C.locale();return b(j,{$l:U},J)},C.isDuration=x;var T=g.prototype.add,P=g.prototype.subtract;g.prototype.add=function(j,J){return x(j)&&(j=j.asMilliseconds()),T.bind(this)(j,J)},g.prototype.subtract=function(j,J){return x(j)&&(j=j.asMilliseconds()),P.bind(this)(j,J)}}})})(ms);const gs=tn;var ys="Expected a function",sr=0/0,vs="[object Symbol]",bs=/^\s+|\s+$/g,xs=/^[-+]0x[0-9a-f]+$/i,ws=/^0b[01]+$/i,Ss=/^0o[0-7]+$/i,Cs=parseInt,ks=typeof xe=="object"&&xe&&xe.Object===Object&&xe,Ms=typeof self=="object"&&self&&self.Object===Object&&self,Ds=ks||Ms||Function("return this")(),$s=Object.prototype,Es=$s.toString,_s=Math.max,Ts=Math.min,nn=function(){return Ds.Date.now()};function Ps(e,r,t){var n,o,s,i,c,d,a=0,l=!1,h=!1,y=!0;if(typeof e!="function")throw new TypeError(ys);r=ir(r)||0,rn(t)&&(l=!!t.leading,h="maxWait"in t,s=h?_s(ir(t.maxWait)||0,r):s,y="trailing"in t?!!t.trailing:y);function x(g){var C=n,T=o;return n=o=void 0,a=g,i=e.apply(T,C),i}function b(g){return a=g,c=setTimeout(W,r),l?x(g):i}function M(g){var C=g-d,T=g-a,P=r-C;return h?Ts(P,s-T):P}function m(g){var C=g-d,T=g-a;return d===void 0||C>=r||C<0||h&&T>=s}function W(){var g=nn();if(m(g))return q(g);c=setTimeout(W,M(g))}function q(g){return c=void 0,y&&n?x(g):(n=o=void 0,i)}function Z(){c!==void 0&&clearTimeout(c),a=0,n=d=o=c=void 0}function A(){return c===void 0?i:q(nn())}function f(){var g=nn(),C=m(g);if(n=arguments,o=this,d=g,C){if(c===void 0)return b(d);if(h)return c=setTimeout(W,r),x(d)}return c===void 0&&(c=setTimeout(W,r)),i}return f.cancel=Z,f.flush=A,f}function rn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function As(e){return!!e&&typeof e=="object"}function Is(e){return typeof e=="symbol"||As(e)&&Es.call(e)==vs}function ir(e){if(typeof e=="number")return e;if(Is(e))return sr;if(rn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=rn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(bs,"");var t=ws.test(e);return t||Ss.test(e)?Cs(e.slice(2),t?2:8):xs.test(e)?sr:+e}var rt=Ps;const Dt=[0,1,2];var ft=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(ft||{});const ar=e=>Dt.includes(e),ot=e=>{var n;const t=(((n=document.getElementById(Ve))==null?void 0:n.clientWidth)||0)-$e;switch(e){case 1:return Math.ceil(t/ve)*nt;case 2:return Math.ceil(t/we)*nt;default:return Math.ceil(t/et)*nt}},Os=e=>ot(e)/nt,on=(e,r)=>{const t=ot(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},Ys=(e,r)=>{const t=on(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},sn=()=>{var t;return((((t=document.getElementById(Ve))==null?void 0:t.clientWidth)||0)-$e)*nt},cr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:E(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});E.extend(cs),E.extend(ds),E.extend(fs),E.extend(ps),E.extend(gs);const Ls=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=E(),onRangeChange:s,handleToggleDisplayActiveUnits:i,onClearFilterData:c})=>{const{zoom:d,maxRecordsPerPage:a=50}=n,[l,h]=p.useState(d),[y,x]=p.useState(E()),[b,M]=p.useState(!1),[m,W]=p.useState(ot(l)),q=Dt[l]!==Dt[Dt.length-1],Z=l!==0,A=p.useMemo(()=>Ys(y,l),[y,l]),f=on(y,l).startDate,g=E(f).dayOfYear(),C=or(f),T=p.useRef(null),[P,j]=p.useState([{x:0,y:0}]),J=p.useCallback((X,w="auto")=>{var v,Y,z,I;const F=sn();switch(X){case"back":return(v=T.current)==null?void 0:v.scrollTo({behavior:w,left:F/3});case"forward":return(Y=T.current)==null?void 0:Y.scrollTo({behavior:w,left:F/3});case"middle":{const S=F/nt/4;return(z=T.current)==null?void 0:z.scrollTo({behavior:w,left:F/2-S})}default:return(I=T.current)==null?void 0:I.scrollTo({behavior:w,left:F/2})}},[]),U=X=>{j(X)},D=p.useCallback(X=>{const w=Os(l);let F;switch(l){case 0:F=w*7;break;case 1:F=w;break;case 2:F=Math.ceil(w/Mt);break}rt(()=>{switch(X){case"back":x(Y=>Y.subtract(F,"days"));break;case"forward":x(Y=>Y.add(F,"days"));break;case"middle":x(E());break}s==null||s(A)},300)()},[s,A,l]);p.useEffect(()=>{T.current=document.getElementById(Ve),W(ot(l))},[l]),p.useEffect(()=>{const X=()=>W(ot(l));return window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[l]),p.useEffect(()=>{s==null||s(A)},[s,A]),p.useEffect(()=>{M(!1)},[o]),p.useEffect(()=>{b||(J("middle"),M(!0),x(o))},[o,b,J]);const _=()=>{t||(x(X=>l===2?X.add(Jn,"hours"):X.add(tr,"weeks")),s==null||s(A))},$=p.useCallback(()=>{t||(D("forward"),rt(()=>{J("forward")},500)())},[t,D,J]),L=()=>{t||(x(X=>l===2?X.subtract(Jn,"hours"):X.subtract(tr,"weeks")),s==null||s(A))},O=p.useCallback(()=>{!b||t||(D("back"),rt(()=>{J("back")},500)())},[b,t,D,J]),Q=p.useCallback(()=>{t||(D("middle"),rt(()=>{J("middle","smooth")},300)())},[t,D,J]),ee=p.useCallback(X=>{if(t)return;const w=E(X).startOf("day");w.isValid()&&(x(w),s==null||s(A),setTimeout(()=>{J("middle","smooth")},300))},[t,J,s,A]),se=()=>B(l+1),oe=()=>B(l-1),B=X=>{ar(X)&&(h(X),W(ot(X)),s==null||s(A))},V=()=>i==null?void 0:i(),{Provider:G}=cr;return u.jsx(G,{value:{data:e,config:n,handleGoNext:_,handleScrollNext:$,handleGoPrev:L,handleScrollPrev:O,handleGoToday:Q,goToDate:ee,zoomIn:se,zoomOut:oe,zoom:l,isNextZoom:q,isPrevZoom:Z,date:y,isLoading:t,cols:m,startDate:C,dayOfYear:g,toggleDisplayActiveUnits:V,tilesCoords:P,updateTilesCoords:U,recordsThreshold:a,onClearFilterData:c},children:r})},We=()=>p.useContext(cr),lr=(e,r,t)=>{e.canvas.width=r*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=r+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},dr=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*he+n*Me;if(e>=s+Me)n++;else if(e>=s)return o*he+n*Me-n*Me}return t-n*Me},Ns=5,ur=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>Ns},ht=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},Fs=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:i={},gridRef:c,separatorRowIndices:d=[]})=>{const a=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(F=>({...F,data:[F.data]})):r:e,{enabled:l=!0,isDraggable:h,resourceOnly:y=!1,isValidDrop:x}=i,[b,M]=p.useState("idle"),[m,W]=p.useState(null),[q,Z]=p.useState({x:0,y:0}),[A,f]=p.useState({width:0,height:48}),[g,C]=p.useState(null),[T,P]=p.useState(!0),j=p.useRef({x:0,y:0}),J=p.useRef({x:0,y:0}),U=p.useRef({x:0,y:0}),D=p.useRef(null),_=p.useRef(null),$=p.useRef(0),L=p.useRef(null),O=p.useCallback(F=>!l||F.draggable===!1?!1:h?h(F):!0,[l,h]),Q=p.useCallback((F,v)=>{const Y=dr(v,d),z=Math.floor(Y/he);let I;switch(t){case 0:I=Ee*7;break;case 1:I=ve;break;case 2:I=we;break;default:I=ve}const S=Math.floor(F/I);let R;const N=E().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:R=N.add(S*7,"days").toDate();break;case 1:R=N.add(S,"days").toDate();break;case 2:R=N.add(S,"hours").toDate();break;default:R=N.toDate()}return{snappedDate:R,snappedResourceIndex:z}},[t,n,d]),ee=p.useCallback((F,v,Y,z)=>{const I=[],S=v.getTime(),R=Y.getTime(),N=a.find(te=>te.id===z);if(!N)return I;const K=[];for(const te of N.data)Array.isArray(te)?K.push(...te):K.push(te);for(const te of K){if(te.segmentId===F.segmentId)continue;const H=te.startDate.getTime(),ie=te.endDate.getTime();if(S>=H&&S<ie||R>H&&R<=ie||S<=H&&R>=ie){const de=new Date(Math.max(S,H)),ae=new Date(Math.min(R,ie)),le=ae.getTime()-de.getTime();I.push({event:te,conflictStart:de,conflictEnd:ae,overlapDuration:le})}}return I},[a]),se=p.useCallback((F,v,Y,z)=>{const I=[],S=v.getTime(),R=Y.getTime(),N=E(v).format("YYYY-MM-DD"),K=a.find(H=>H.id===z);if(!K)return I;const te=[];for(const H of K.data)Array.isArray(H)?te.push(...H):te.push(H);for(const H of te){if(H.segmentId===F.segmentId)continue;const ie=H.startDate.getTime(),fe=H.endDate.getTime(),de=E(H.startDate).format("YYYY-MM-DD"),ae=E(H.endDate).format("YYYY-MM-DD"),le=E(Y).format("YYYY-MM-DD");if(!(de===N||ae===N||de===le||ae===le||E(H.startDate).isBefore(v,"day")&&E(H.endDate).isAfter(Y,"day"))||S>=ie&&S<fe||R>ie&&R<=fe||S<=ie&&R>=fe)continue;let ue,Se;fe<=S?(ue=S-fe,Se="before"):(ue=ie-R,Se="after"),I.push({event:H,timeGap:ue,position:Se})}return I.sort((H,ie)=>H.timeGap-ie.timeGap)},[a]),oe=p.useCallback((F,v,Y)=>{const z=Q(v,Y);let I,S;if(y)I=F.startDate,S=F.endDate;else{const fe=E(F.endDate).diff(F.startDate);I=z.snappedDate,S=E(I).add(fe,"milliseconds").toDate()}let R=0,N="",K;for(const fe of e){const de=Math.max(fe.data.length,1);if(z.snappedResourceIndex<R+de){N=fe.id,K=fe.capacity;break}R+=de}if(!N)return null;let te=!0;K!==void 0&&F.totalPassengers!==void 0&&(te=F.totalPassengers<=K);const H=ee(F,I,S,N),ie=H.length===0?se(F,I,S,N):[];return{startDate:I,endDate:S,resourceId:N,resourceIndex:z.snappedResourceIndex,resourceCapacity:K,hasCapacity:te,conflicts:H,hasConflict:H.length>0,nearbyEvents:ie}},[Q,e,y,ee,se]),B=p.useCallback((F,v)=>{if(!s)return;const Y=Date.now();if(Y-$.current<100)return;$.current=Y;const z={event:F,currentStartDate:v.startDate,currentEndDate:v.endDate,currentResourceId:v.resourceId,conflicts:v.conflicts};s(z)},[s]),V=p.useCallback((F,v)=>{if(!O(F)||!c.current)return;v.preventDefault(),v.stopPropagation();const Y=v.target.closest('[style*="left"]');let z=0,I=0;Y&&Y.style.left&&Y.style.top&&(z=parseInt(Y.style.left),I=parseInt(Y.style.top));const S=ht(v.clientX,v.clientY,c.current);j.current={x:z,y:I},J.current={x:v.clientX,y:v.clientY},U.current={x:S.x-z,y:20},L.current={startDate:F.startDate,endDate:F.endDate,resourceId:""};for(const K of e){for(const te of K.data)if(te.some(H=>H.segmentId===F.segmentId)){L.current.resourceId=K.id;break}if(L.current.resourceId)break}W(F),M("potential"),Z({x:z,y:I});let R=100,N=48;if(Y){const K=Y.getBoundingClientRect();R=K.width,N=K.height}f({width:R,height:N})},[O,c,e,t]),G=p.useCallback(F=>{if(!c.current)return;let v=c.current;for(;v&&v!==document.body;){const H=window.getComputedStyle(v);if(v.scrollHeight>v.clientHeight&&(H.overflowY==="auto"||H.overflowY==="scroll"||H.overflow==="auto"||H.overflow==="scroll"))break;v=v.parentElement}(!v||v===document.body)&&(v=document.documentElement);const Y=v.getBoundingClientRect(),z=F.clientY,I=50,S=5,R=z-Y.top,N=Y.bottom-z;let K=!1,te=0;R<I&&R>0?(K=!0,te=-S*(1-R/I)):N<I&&N>0&&(K=!0,te=S*(1-N/I)),K?(_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>{v.scrollTop+=te,b==="dragging"&&G(F)})):_.current&&(cancelAnimationFrame(_.current),_.current=null)},[c,b]),X=p.useCallback(F=>{if(b==="idle"||b==="animating"||!m||!c.current)return;const v={x:F.clientX,y:F.clientY};if(b==="potential")if(ur(J.current,v))M("dragging");else return;G(F);const Y=ht(F.clientX,F.clientY,c.current);D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{const z={x:Y.x-U.current.x,y:Y.y-U.current.y};Z(z);const I=oe(m,Y.x,Y.y);if(I&&x){const S={event:m,currentStartDate:I.startDate,currentEndDate:I.endDate,currentResourceId:I.resourceId,conflicts:I.conflicts};I.hasConflict=!x(S)}if(C(I),I){const S=I.hasCapacity!==!1;P(S),B(m,I)}})},[b,m,c,oe,B,x,G]),w=p.useCallback(async F=>{if(b==="idle"||b==="animating")return;const v={x:F.clientX,y:F.clientY};if(!ur(J.current,v)||b==="potential"){M("idle"),W(null),C(null);return}if(!m||!g||!L.current){M("idle"),W(null),C(null);return}if(g.hasCapacity===!1){P(!1),M("animating"),Z(j.current),setTimeout(()=>{M("idle"),W(null),C(null),P(!0)},300);return}const z={event:m,originalStartDate:L.current.startDate,originalEndDate:L.current.endDate,originalResourceId:L.current.resourceId,newStartDate:g.startDate,newEndDate:g.endDate,newResourceId:g.resourceId,hasConflict:g.hasConflict,conflicts:g.conflicts};let I=!0;if(o)try{const S=o(z);I=S instanceof Promise?await S:S}catch{I=!1}I?(P(!0),M("idle"),W(null),C(null)):(P(!1),M("animating"),Z(j.current),setTimeout(()=>{M("idle"),W(null),C(null),P(!0)},300))},[b,m,g,o,x]);return p.useEffect(()=>{if(b==="potential"||b==="dragging"){const F=Y=>X(Y),v=Y=>w(Y);return document.addEventListener("mousemove",F),document.addEventListener("mouseup",v),()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",v)}}else return()=>{}},[b,X,w]),p.useEffect(()=>()=>{D.current&&(cancelAnimationFrame(D.current),D.current=null),_.current&&(cancelAnimationFrame(_.current),_.current=null)},[]),p.useEffect(()=>{(b==="idle"||b==="animating")&&(D.current&&(cancelAnimationFrame(D.current),D.current=null),_.current&&(cancelAnimationFrame(_.current),_.current=null))},[b]),p.useEffect(()=>{(b==="dragging"||b==="potential")&&(b==="dragging"?(M("animating"),Z(j.current),setTimeout(()=>{M("idle"),W(null),C(null)},300)):(M("idle"),W(null),C(null)))},[t]),p.useEffect(()=>{if((b==="dragging"||b==="potential")&&m){let F=!1;for(const v of e){for(const Y of v.data)if(Y.some(z=>z.segmentId===m.segmentId)){F=!0;break}if(F)break}F||(b==="dragging"?(M("animating"),Z(j.current),setTimeout(()=>{M("idle"),W(null),C(null)},300)):(M("idle"),W(null),C(null)))}},[e,b,m]),{dragState:b,draggedEvent:m,ghostPosition:q,ghostDimensions:A,dropTarget:g,isValidDrop:T,handleDragStart:V,isDraggable:O,draggingEventId:(m==null?void 0:m.segmentId)||null,resourceOnly:y}},Ws=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:i={},gridRef:c,isDragging:d,separatorRowIndices:a=[]})=>{const{enabled:l=!1,isSelectable:h}=i,y=l&&!!o,x=p.useCallback(v=>{let Y=0;for(const z of a)z<=v&&Y++;return v*he+Y*Me},[a]),[b,M]=p.useState("idle"),[m,W]=p.useState(null),[q,Z]=p.useState(null),[A,f]=p.useState(null),[g,C]=p.useState(!1),[T,P]=p.useState([]),[j,J]=p.useState(!1),U=p.useRef(null),D=p.useRef(null),_=p.useRef(null),$=p.useCallback(()=>{switch(t){case 0:return Ee*7;case 1:return ve;case 2:return we;default:return ve}},[t]),L=p.useCallback(v=>{const Y=$(),z=Math.floor(v/Y),I=E().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return I.add(z*7,"days").toDate();case 1:return I.add(z,"days").toDate();case 2:return I.add(z,"hours").toDate();default:return I.toDate()}},[t,n,$]),O=p.useCallback(v=>{const Y=dr(v,a),z=Math.floor(Y/he);let I=0;for(const S of e){const R=Math.max(S.data.length,1);if(z<I+R)return{resourceId:S.id,resourceIndex:z,resourceLabel:S.label};I+=R}return null},[e,a]),Q=p.useCallback(v=>{const Y=$();return Math.floor(v/Y)*Y},[$]),ee=p.useCallback((v,Y,z,I=[])=>{const S=[],N=(r||e).find(H=>H.id===v),K=Y.getTime(),te=z.getTime();if(N){const H=N.data[0],ie=H&&Array.isArray(H)?N.data.flat():N.data;for(const fe of ie){const de=new Date(fe.startDate).getTime(),ae=new Date(fe.endDate).getTime();if(K<ae&&te>de){const le=new Date(Math.max(K,de)),ce=new Date(Math.min(te,ae)),ne=ce.getTime()-le.getTime();S.push({event:fe,conflictStart:le,conflictEnd:ce,overlapDuration:ne})}}}for(const H of I){if(H.resourceId!==v)continue;const ie=H.startDate.getTime(),fe=H.endDate.getTime();if(K<fe&&te>ie){const de=new Date(Math.max(K,ie)),ae=new Date(Math.min(te,fe)),le=ae.getTime()-de.getTime(),ce={segmentId:`pending-${H.startDate.getTime()}`,reservationId:`pending-${H.startDate.getTime()}`,startDate:H.startDate,endDate:H.endDate,occupancy:0,title:`New Event (${H.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};S.push({event:ce,conflictStart:de,conflictEnd:ae,overlapDuration:le})}}return S},[e,r]),se=p.useCallback(v=>{if(!y||d||!c.current||v.button!==0)return;const Y=v.target;if(Y.closest("[data-segment-id]")||Y.closest("[data-multi-select-ui]"))return;const z=ht(v.clientX,v.clientY,c.current),I=O(z.y);if(!I)return;U.current={x:v.clientX,y:v.clientY},D.current=I.resourceIndex;const S=Q(z.x),R=$(),N=x(I.resourceIndex);W(z),Z(z),f({x:S,y:N,width:R,height:he}),M("selecting")},[y,d,c,O,Q,$,x]),oe=p.useCallback(v=>{if(b!=="selecting"||!c.current||D.current===null)return;const Y=ht(v.clientX,v.clientY,c.current);_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>{Z(Y);const z=$(),I=Q((m==null?void 0:m.x)||0),S=Q(Y.x),R=x(D.current),N=Math.min(I,S),K=Math.max(I,S)+z;f({x:N,y:R,width:K-N,height:he})})},[b,c,m,$,Q,x]),B=p.useCallback(v=>{if(b!=="selecting")return;if(!c.current||!m||!U.current){M("idle"),W(null),Z(null),f(null);return}const Y=ht(v.clientX,v.clientY,c.current),z=O(m.y);if(!z){M("idle"),W(null),Z(null),f(null);return}const I=Math.min(m.x,Y.x),S=Math.max(m.x,Y.x),R=L(I),N=L(S),K=E(N).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h(z.resourceId,R,K)){M("idle"),W(null),Z(null),f(null);return}const te=ee(z.resourceId,R,K,T),H=te.length>0,ie={startDate:R,endDate:K,resourceId:z.resourceId,resourceLabel:z.resourceLabel,zoomLevel:t,hasConflict:H,conflicts:H?te:void 0};if(g)P(fe=>[...fe,ie]),J(!0);else if(o){const fe=o(ie),de=ae=>{ae!=null&&ae.continueMultiSelect&&(C(!0),P([ie]),J(!0))};fe instanceof Promise?fe.then(de):de(fe)}M("idle"),W(null),Z(null),f(null),U.current=null,D.current=null},[b,c,m,O,L,h,o,t,g,ee,T]),V=p.useCallback(()=>{if(T.length>0&&s){J(!1);const v=s(T),Y=z=>{z!=null&&z.continueMultiSelect?J(!0):(P([]),C(!1),J(!1))};v instanceof Promise?v.then(Y):Y(v);return}P([]),C(!1),J(!1)},[T,s]),G=p.useCallback(()=>{P([]),C(!1),J(!1)},[]),X=p.useCallback(v=>{P(Y=>{const z=Y.filter((I,S)=>S!==v);return z.length===0&&(C(!1),J(!1)),z})},[]),w=p.useCallback((v,Y)=>{P(z=>z.map((I,S)=>{if(S!==v)return I;const R={...I,...Y},N=z.filter((te,H)=>H!==v),K=ee(R.resourceId,R.startDate,R.endDate,N);return{...R,hasConflict:K.length>0,conflicts:K.length>0?K:void 0}}))},[ee]),F=p.useCallback(v=>{v.key==="Escape"&&(b==="selecting"?(M("idle"),W(null),Z(null),f(null),U.current=null,D.current=null):g&&T.length>0&&(P([]),C(!1),J(!1)))},[b,g,T.length]);return p.useEffect(()=>{if(b==="selecting")return document.addEventListener("mousemove",oe),document.addEventListener("mouseup",B),document.addEventListener("keydown",F),()=>{document.removeEventListener("mousemove",oe),document.removeEventListener("mouseup",B),document.removeEventListener("keydown",F)}},[b,oe,B,F]),p.useEffect(()=>{if(g&&T.length>0)return document.addEventListener("keydown",F),()=>{document.removeEventListener("keydown",F)}},[g,T.length,F]),p.useEffect(()=>()=>{_.current&&(cancelAnimationFrame(_.current),_.current=null)},[]),p.useEffect(()=>{d&&b==="selecting"&&(M("idle"),W(null),Z(null),f(null),U.current=null,D.current=null)},[d,b]),{selectionState:b,selectionStart:m,selectionEnd:q,selectionBox:A,handleGridMouseDown:se,isEnabled:y,pendingSelections:T,confirmSelections:V,clearSelections:G,removeSelection:X,updateSelection:w,isMultiSelectActive:g,hasUnconfirmedSelections:j}},Hs=k.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,zs=k.div`
  position: relative;
`,Bs=k.canvas``;k.canvas``;const fr=k.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,js=p.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onEventDrop:i,onEventDrag:c,draggableConfig:d,onDragStateChange:a,onTimeRangeSelect:l,onMultiTimeRangeSelect:h,clickToAddConfig:y,separatorRowIndices:x=[]},b){const M=p.useRef(!1),{handleScrollNext:m,handleScrollPrev:W,date:q,isLoading:Z,cols:A,startDate:f}=We(),g=p.useRef(null),C=p.useRef(null),T=p.useRef(null),P=p.useRef(null),[j,J]=p.useState(!1),U=je(),{dragState:D,draggedEvent:_,ghostPosition:$,ghostDimensions:L,dropTarget:O,isValidDrop:Q,handleDragStart:ee,isDraggable:se,draggingEventId:oe,resourceOnly:B}=Fs({data:n,baseData:o||n,zoom:r,startDate:f,onEventDrop:i,onEventDrag:c,draggableConfig:d,gridRef:P,separatorRowIndices:x});p.useEffect(()=>{const H=D==="dragging"||D==="potential";J(H),a&&a(H)},[D,a]);const{selectionState:V,selectionBox:G,handleGridMouseDown:X,pendingSelections:w,confirmSelections:F,clearSelections:v,removeSelection:Y,updateSelection:z,isMultiSelectActive:I,hasUnconfirmedSelections:S}=Ws({data:n,baseData:o||n,zoom:r,startDate:f,onTimeRangeSelect:l,onMultiTimeRangeSelect:h,clickToAddConfig:y,gridRef:P,isDragging:j,separatorRowIndices:x}),R=p.useCallback(H=>{H.preventDefault()},[]),N=p.useCallback(H=>{H.preventDefault()},[]),K=x.length*Me,te=p.useCallback(H=>{const ie=sn(),fe=t*he+1+K;lr(H,ie,fe),is(H,r,t,A,f,U,x)},[A,f,t,r,U,x,K]);return p.useEffect(()=>{if(!g.current)return;const H=g.current.getContext("2d");if(!H)return;const ie=()=>te(H);return window.addEventListener("resize",ie),()=>window.removeEventListener("resize",ie)},[te]),p.useEffect(()=>{const H=g.current;if(!H)return;H.style.letterSpacing="1px";const ie=H.getContext("2d");ie&&te(ie)},[q,t,r,te]),p.useEffect(()=>{if(!C.current)return;const H=new IntersectionObserver(ie=>{ie[0].isIntersecting&&!M.current&&(M.current=!0,m(),setTimeout(()=>{M.current=!1},1e3))},{root:document.getElementById(Ve)});return H.observe(C.current),()=>{H.disconnect()}},[m]),p.useEffect(()=>{if(!T.current)return;const H=new IntersectionObserver(ie=>{ie[0].isIntersecting&&!M.current&&(M.current=!0,W(),setTimeout(()=>{M.current=!1},1e3))},{root:document.getElementById(Ve),rootMargin:`0px 0px 0px -${$e}px`});return H.observe(T.current),()=>{H.disconnect()}},[W]),u.jsxs(Hs,{id:Qn,children:[u.jsxs(zs,{ref:H=>{typeof b=="function"?b(H):b&&(b.current=H),P.current=H},onMouseDown:X,style:{cursor:l?"crosshair":"default"},children:[u.jsx(fr,{position:"left",ref:T}),u.jsx(gn,{isLoading:Z,position:"left"}),u.jsx(Bs,{ref:g,onDragStart:R,onDragOver:N,style:{userSelect:D==="dragging"?"none":"auto"}}),u.jsx(Bc,{zoom:r,startDate:f}),u.jsx(Ga,{data:n,zoom:r,onTileClick:s,onDragStart:ee,isDraggable:se,draggingEventId:oe,separatorRowIndices:x}),u.jsx(fr,{ref:C,position:"right"}),u.jsx(gn,{isLoading:Z,position:"right"}),(D==="dragging"||D==="animating")&&u.jsx(Cc,{draggedEvent:_,ghostPosition:$,ghostDimensions:L,dropTarget:O,isValidDrop:Q,dragState:D,zoom:r,data:n,resourceOnly:B,separatorRowIndices:x}),u.jsx(Dc,{selectionBox:G,isSelecting:V==="selecting"}),I&&w.length>0&&u.jsx(Hc,{selections:w,data:n,zoom:r,startDate:f,onRemove:Y,onUpdate:z,separatorRowIndices:x})]}),I&&S&&w.length>0&&u.jsx(Oc,{selections:w,onConfirm:F,onClear:v,onRemove:Y})]})}),hr=e=>{const r=E.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},pr=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/be);t+=o.hours+s,n+=r%be,n>=be&&(t++,n-=be)}),{hours:t,minutes:n}},mr=(e,r)=>{let t=Rn;switch(r){case 0:t=Ro;break;case 1:t=Rn;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,i=be-e.minutes;return i===be&&(s++,i=0),{hours:Math.max(0,s),minutes:s<0?0:i}},o=()=>{const s=e.hours-t,i=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:i}};return{free:n(),overtime:o()}},Zs=(e,r,t)=>{const n=r.isoWeek(),o=e.map(a=>{const l=E(a.startDate).isoWeek(),h=E(a.startDate).isoWeekday(),y=E(a.endDate).isoWeek(),x=E(a.endDate).isoWeekday(),{hours:b,minutes:M}=hr(a.occupancy);if(n===l){const m=(Fe+1-h)*b,W=(Fe+1-h)*M;return{hours:Math.max(0,m),minutes:W}}else if(n===y){const m=x>Fe?Fe*b:x*b,W=x>Fe?Fe*M:x*M;return{hours:m,minutes:W}}else if(E(r).isBetween(a.startDate,a.endDate))return{hours:Fe*b,minutes:Fe*M};return{hours:0,minutes:0}}),{hours:s,minutes:i}=pr(o),{free:c,overtime:d}=mr({hours:s,minutes:i},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,i)},free:c,overtime:d}},Vs=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(l=>{const{hours:h,minutes:y}=hr(l.occupancy);return o<=(n?7:5)?{hours:h,minutes:y}:{hours:0,minutes:0}}),{hours:i,minutes:c}=pr(s),{free:d,overtime:a}=mr({hours:i,minutes:c},t);return{taken:{hours:Math.max(0,i),minutes:Math.max(0,c)},free:d,overtime:a}},Gs=(e,r)=>{let t=0;e.forEach(c=>{const d=E(c.startDate).hour(),a=E(c.endDate).hour(),l=r.hour(),h=E(c.endDate).minute(),y=E(c.startDate).minute();d<l&&a>l?t+=be:d===l&&a===l&&y&&h?t+=h?h-y:be-y:d===l&&a>=l?t+=y?be-y:be:a===l&&h&&(t+=h)});const n=Math.floor(t/be),o=t%be,s=n||o?0:1,i=n?0:o?be-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:i},overtime:{hours:0,minutes:0}}},Xs=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(i=>n===1?E(t).isBetween(i.startDate,i.endDate,"day","[]"):n===2?E(t).isBetween(i.startDate,i.endDate,"hour","[]"):E(i.startDate).isBetween(E(t),E(t).add(6,"days"),"day","[]")||E(t).isBetween(E(i.startDate),E(i.endDate),"day","[]"));switch(n){case 1:return Vs(s,t,n,o);case 2:return Gs(s,t);default:return Zs(s,t,n)}},Us=(e,r,t,n,o,s,i=!1)=>{let c="weeks",d;switch(s){case 0:c="weeks",d=et;break;case 1:c="days",d=ve;break;case 2:c="hours",d=we;break}const a=Math.ceil(s===2?(t.x-.5*d)/d:t.x/d),l=E(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(a-1,c),h=Math.ceil(t.y/he),y=n.findIndex((W,q,Z)=>Z.slice(0,q+1).reduce((f,g)=>f+g,0)>=h),x=s===2?(a+1)*d:a*d,b=(h-1)*he+he,M=Xs(o[y],y,l,s,i),m=E(e.startDate).isSame(E(e.endDate),"day");return{coords:{x,y:b},mouseCoords:t,resourceIndex:y,disposition:M,reservationData:{startTime:E(e.startDate).format("hh:mm A"),startDate:E(e.startDate).format("MMM D, YYYY"),endTime:E(e.endDate).format("hh:mm A"),endDate:E(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,isOneDayEvent:m,passengers:e.totalPassengers}}};function Ks(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function Js(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const l of e)!l.isSubcontract&&l.capacity!=null&&t.add(l.capacity);const n=[...t].sort((l,h)=>l-h);if(n.length<2)return r;const o=Math.min(5,n.length),s=Ks(n,o),i=[];let c=0;for(const l of s)i.push({min:n[c],max:n[l-1],values:n.slice(c,l)}),c=l;i.push({min:n[c],max:n[n.length-1],values:n.slice(c)});const d=[],a=new Map;return i.forEach((l,h)=>{const y="__auto_cat_"+h,x=l.min===l.max?l.min+" pax":l.min+"-"+l.max+" pax";d.push({id:y,name:x,minPassengers:l.min,maxPassengers:l.max});for(const b of l.values)a.set(b,y)}),{categories:d,capacityToCategoryId:a}}const qs=(e,r,t,n)=>{const o=[];let s=0,i=[],c=0;return r.length>n?(r.forEach((d,a)=>{const l={id:e[a].id,label:e[a].label,data:d,capacity:e[a].capacity,isSubcontract:e[a].isSubcontract,categoryId:e[a].categoryId};c>=n&&(o.push(i),s+=i.length,i=[],c=0),c++,i.push(l)}),t.slice(s).length<=n&&(i=[],r.slice(s).forEach((d,a)=>{const l={id:e[a+s].id,label:e[a+s].label,data:d,capacity:e[a+s].capacity,isSubcontract:e[a+s].isSubcontract,categoryId:e[a+s].categoryId};i.push(l),a===r.length-s-1&&o.push(i)})),o):(r.forEach((d,a)=>{const l={id:e[a].id,label:e[a].label,data:d,capacity:e[a].capacity,isSubcontract:e[a].isSubcontract,categoryId:e[a].categoryId};i.push(l)}),o.push(i),o)};var an={},Qs={get exports(){return an},set exports(e){an=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(Qs);const Rs=an;var cn={},ei={get exports(){return cn},set exports(e){cn=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(ei);const ti=cn,ni=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let i=0;i<o.length;i++){const c=E(t.startDate).startOf("day"),d=E(t.endDate).startOf("day"),a=E(o[i].startDate).startOf("day"),l=E(o[i].endDate).startOf("day");if(c.isBetween(a,l,null,"[]")||d.isBetween(a,l,null,"[]")||c.isBefore(a,"minute")&&d.isAfter(l,"minute")||c.isAfter(a,"minute")&&d.isBefore(l,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};E.extend(Rs),E.extend(ti);const gr=new WeakMap,ri=e=>{const r=gr.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const i=E(o.startDate),c=E(s.startDate),d=i.startOf("day").diff(c.startOf("day"),"day");return d!==0?d:i.diff(c)}),n=ni(t);return gr.set(e,n),n},oi=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const i=ri(s.data);return o[0].push(i),o[1].push(Math.max(i.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},si=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,ii=e=>{const{recordsThreshold:r}=We(),[t,n]=p.useState(0),[o,s]=p.useState(0),i=p.useRef(null);p.useEffect(()=>{i.current=document.getElementById(Ve)},[]);const{projectsPerPerson:c,rowsPerPerson:d}=p.useMemo(()=>oi(e),[e]),a=p.useMemo(()=>qs(e,c,d,r),[e,c,r,d]),l=p.useCallback(()=>{a[o].length&&i.current&&(i.current.scroll({top:0}),n(m=>m+a[Math.max(o,0)].length),s(m=>Math.min(m+1,a.length-1)),window.scroll({top:0}))},[o,a]),h=p.useCallback(()=>{a[o].length&&(n(m=>Math.max(m-a[o-1].length,0)),s(m=>Math.max(m-1,0)))},[o,a]),y=p.useCallback(()=>{n(0),s(0)},[]),x=t+a[o].length,b=p.useMemo(()=>d.slice(t,x),[x,d,t]),M=p.useMemo(()=>c.slice(t,x),[x,c,t]);return{page:a[o],currentPageNum:o,pagesAmount:a.length,projectsPerPerson:M,rowsPerItem:b,totalRowsPerPage:si(a[o]),next:l,previous:h,reset:y}};var ln={},ai={get exports(){return ln},set exports(e){ln=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(ai);const ci=ln;var dn={},li={get exports(){return dn},set exports(e){dn=e}};(function(e,r){(function(t,n){e.exports=n(Ge)})(xe,function(t){function n(y){return y&&typeof y=="object"&&"default"in y?y:{default:y}}var o=n(t);function s(y){return y%10<5&&y%10>1&&~~(y/10)%10!=1}function i(y,x,b){var M=y+" ";switch(b){case"m":return x?"minuta":"minutę";case"mm":return M+(s(y)?"minuty":"minut");case"h":return x?"godzina":"godzinę";case"hh":return M+(s(y)?"godziny":"godzin");case"MM":return M+(s(y)?"miesiące":"miesięcy");case"yy":return M+(s(y)?"lata":"lat")}}var c="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),a=/D MMMM/,l=function(y,x){return a.test(x)?c[y.month()]:d[y.month()]};l.s=d,l.f=c;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:l,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(y){return y+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})(li);const di=dn;var un={},ui={get exports(){return un},set exports(e){un=e}};(function(e,r){(function(t,n){e.exports=n(Ge)})(xe,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(d,a,l){var h=s[l];return Array.isArray(h)&&(h=h[a?0:1]),h.replace("%d",d)}var c={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return o.default.locale(c,null,!0),c})})(ui);const fi=un;var fn={},hi={get exports(){return fn},set exports(e){fn=e}};(function(e,r){(function(t,n){e.exports=n(Ge)})(xe,function(t){function n(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),i="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),c=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,d=function(l,h){return c.test(h)?s[l.month()]:i[l.month()]};d.s=i,d.f=s;var a={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:d,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(l){return l+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(a,null,!0),a})})(hi);const pi=fn;var hn={},mi={get exports(){return hn},set exports(e){hn=e}};(function(e,r){(function(t,n){e.exports=n(Ge)})(xe,function(t){function n(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(i){return i+"º"}};return o.default.locale(s,null,!0),s})})(mi);const gi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:ci},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:di},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:hn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:pi},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:fi}];class yi{constructor(){jr(this,"locales",gi)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const $t=new yi,yr=p.createContext({localesData:$t.getLocales(),currentLocale:$t.getLocales()[0],setCurrentLocale:()=>{}}),vi=({children:e,lang:r,translations:t})=>{const[n,o]=p.useState("en"),s=$t.getLocales(),i=p.useCallback(()=>{const h=s.find(y=>y.id===n);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&E.locale(h.dayjsTranslations),h||s[0]},[n,s]),[c,d]=p.useState(i()),a=h=>{localStorage.setItem("locale",h.translateCode),d(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(x=>x.id===h.id)||$t.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),y=r??h??"en";localStorage.setItem("locale",y),o(y),d(i())},[i,r]);const{Provider:l}=yr;return u.jsx(l,{value:{currentLocale:c,localesData:s,setCurrentLocale:a},children:e})},He=()=>p.useContext(yr).currentLocale.lang,bi=e=>re.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},re.createElement("defs",null,re.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),re.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},re.createElement("stop",{offset:.47,stopColor:"#ccc"}),re.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),re.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),re.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),re.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),re.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),re.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),re.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),re.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),re.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),re.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),re.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),xi=k.div`
  height: 440px;
  width: 514px;
  position: relative;
`,wi=k.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Si=({onTileClick:e})=>{const{feelingEmpty:r}=He();return u.jsxs(xi,{onClick:e,children:[u.jsx(bi,{}),u.jsx(wi,{children:r})]})},Ci=k.div`
  position: relative;
  display: flex;
`,ki=k.div`
  position: relative;
  margin-left: ${$e};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Mi=k.div`
  width: calc(${({width:e})=>e}px - ${$e}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${$e}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,pn={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:ft.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function Di(e,r){const t=r?[...r].sort((c,d)=>c.maxPassengers-d.maxPassengers):[],n=[];for(const c of t){const d=e.filter(a=>!a.isSubcontract&&a.categoryId===c.id);d.length>0&&n.push({type:"category",category:c,items:d})}const o=t.length>0,s=e.filter(c=>!c.isSubcontract&&(!c.categoryId||!o));s.length>0&&o?n.push({type:"uncategorized",items:s}):s.length>0&&n.push({type:"uncategorized",items:s});const i=e.filter(c=>c.isSubcontract);return i.length>0&&n.push({type:"subcontract",items:i}),n}const $i=({data:e,baseData:r,categories:t,onTileClick:n,onItemClick:o,toggleTheme:s,topBarWidth:i,onEventDrop:c,onEventDrag:d,draggableConfig:a,onTimeRangeSelect:l,onMultiTimeRangeSelect:h,clickToAddConfig:y})=>{const[x,b]=p.useState(pn),[M,m]=p.useState(e),[W,q]=p.useState(!1),[Z,A]=p.useState(!1),[f,g]=p.useState(""),[C,T]=p.useState(new Set),{zoom:P,startDate:j,isLoading:J,config:{includeTakenHoursOnWeekendsInDayView:U,showTooltip:D,showThemeToggle:_}}=We(),$=p.useRef(null),{page:L,projectsPerPerson:O,rowsPerItem:Q,currentPageNum:ee,pagesAmount:se,next:oe,previous:B,reset:V}=ii(M),{effectiveCategories:G,effectivePage:X}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:L};const ae=Js(L);if(ae.categories.length===0)return{effectiveCategories:void 0,effectivePage:L};const le=L.map(ce=>{if(ce.isSubcontract||ce.capacity==null)return ce;const ne=ae.capacityToCategoryId.get(ce.capacity);return ne?{...ce,categoryId:ne}:ce});return{effectiveCategories:ae.categories,effectivePage:le}},[t,L]),w=p.useCallback(ae=>{T(le=>{const ce=new Set(le);return ce.has(ae)?ce.delete(ae):ce.add(ae),ce})},[]),F=p.useMemo(()=>{const ae=[],le=G?[...G].sort((ce,ne)=>ce.maxPassengers-ne.maxPassengers):[];for(const ce of le)X.some(ne=>!ne.isSubcontract&&ne.categoryId===ce.id)&&ae.push(ce.id);return X.some(ce=>ce.isSubcontract)&&ae.push("__subcontract__"),ae},[G,X]),v=p.useCallback(()=>{T(new Set)},[]),Y=p.useCallback(()=>{T(new Set(F))},[F]),{visiblePage:z,visibleRowsPerItem:I,visibleTotalRows:S,visibleProjectsPerPerson:R,separatorRowIndices:N}=p.useMemo(()=>{const ae=Di(X,G),le=((G==null?void 0:G.length)??0)>0,ce=new Map;L.forEach((Ce,Le)=>ce.set(Ce.id,Le));const ne=[],ue=[],Se=[],_e=[];let De=0;for(const Ce of ae)if(Ce.type==="subcontract"||Ce.type==="category"&&le){const it=Ce.type==="subcontract"?"__subcontract__":Ce.category.id,at=C.has(it);if(_e.push(De),!at)for(const Xe of Ce.items){const Et=ce.get(Xe.id)??0,_t=Q[Et];ne.push(Xe),ue.push(_t),Se.push(O[Et]),De+=_t}}else for(const it of Ce.items){const at=ce.get(it.id)??0,Xe=Q[at];ne.push(it),ue.push(Xe),Se.push(O[at]),De+=Xe}const xn=ue.reduce((Ce,Le)=>Ce+Le,0);return{visiblePage:ne,visibleRowsPerItem:ue,visibleTotalRows:xn,visibleProjectsPerPerson:Se,separatorRowIndices:_e}},[X,G,L,C,Q,O]),K=p.useRef(rt((ae,le,ce,ne,ue,Se)=>{if(!$.current)return;const{tile:_e,segmentId:De}=ie(ae);if(!De||!_e){q(!1),b(pn);return}const xn=H(De,le),Ce=$.current.getBoundingClientRect(),Le=_e.getBoundingClientRect(),it={x:ae.clientX-Ce.left,y:ae.clientY-Ce.top},at={x:ae.clientX-Ce.left,y:ae.clientY-Ce.top},Xe={x:Le.left-Ce.left,y:Le.top-Ce.top,width:Le.width,height:Le.height},{coords:{x:Et,y:_t},resourceIndex:jc,disposition:Zc,reservationData:Vc}=Us(xn,ce,it,ne,ue,Se,U);b({coords:{x:Et,y:_t},mouseCoords:at,resourceIndex:jc,disposition:Zc,reservationData:Vc,tileBounds:Xe}),q(!0)},4)),te=p.useRef(rt((ae,le)=>{V(),m(ae.map(ce=>({...ce,data:ce.data.filter(ne=>{const{title:ue,description:Se,subtitle:_e}=ne;return(ue==null?void 0:ue.toLowerCase().includes(le.toLowerCase()))||(_e==null?void 0:_e.toLowerCase().includes(le.toLowerCase()))||(Se==null?void 0:Se.toLowerCase().includes(le.toLowerCase()))})})).filter(ce=>ce.data.length>0))},500)),H=(ae,le)=>{if(ae)return le.flatMap(ce=>ce.data).find(ce=>ce.segmentId===ae)},ie=ae=>{if(!ae.target)return{tile:null,segmentId:null};const le=ae.target.closest("[data-segment-id]");return le?{tile:le,segmentId:le.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},fe=ae=>{const le=ae.target.value;g(le),te.current.cancel(),le?te.current(e,le):(V(),m(e))},de=p.useCallback(()=>{K.current.cancel(),q(!1),b(pn)},[]);return p.useEffect(()=>{const ae=ce=>K.current(ce,e,j,I,R,P),le=$.current;if(le)return le.addEventListener("mousemove",ae),le.addEventListener("mouseleave",de),()=>{le.removeEventListener("mousemove",ae),le.removeEventListener("mouseleave",de)}},[K,de,R,I,j,P,e]),p.useEffect(()=>{f?(te.current.cancel(),te.current(e,f)):m(e)},[e,f]),u.jsxs(Ci,{children:[u.jsx(la,{data:X,categories:G,pageNum:ee,pagesAmount:se,rows:Q,onLoadNext:oe,onLoadPrevious:B,searchInputValue:f,onSearchInputChange:fe,onItemClick:o,collapsedGroups:C,onToggleGroup:w,allGroupIds:F,onExpandAll:v,onCollapseAll:Y}),u.jsxs(ki,{children:[u.jsx(Da,{zoom:P,topBarWidth:i,showThemeToggle:_,toggleTheme:s}),e.length?u.jsx(js,{data:z,baseData:r||e,zoom:P,rows:S,ref:$,onTileClick:n,onEventDrop:c,onEventDrag:d,draggableConfig:a,onDragStateChange:A,onTimeRangeSelect:l,onMultiTimeRangeSelect:h,clickToAddConfig:y,separatorRowIndices:N}):u.jsx(Mi,{width:i,children:J?u.jsx(gn,{isLoading:J,position:"left"}):u.jsx(Si,{})}),D&&W&&!Z&&(x==null?void 0:x.resourceIndex)>-1&&u.jsx(cc,{tooltipData:x})]})]})},vr=`
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`,Ei=k.div`
  width: calc(${({width:e})=>e}px - ${$e}px);
  position: sticky;
  top: 0;
  left: ${$e}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({theme:e})=>e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({theme:e})=>e.colors.background};
  z-index: 3;
`,_i=k.div`
  display: flex;
  gap: 1.875rem;
`,br=k.button`
  ${vr};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`,Ti=k.button`
  ${vr};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;
  color: ${({theme:e})=>e.colors.textPrimary};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: ${({theme:e})=>e.colors.textPrimary};
  }
  &::before {
    left: -1.125rem;
  }
  &::after {
    right: -1.125rem;
  }
`,Pi=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Ai=k.div`
  display: flex;
`,Ii=k.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`,Oi=({width:e,showThemeToggle:r,toggleTheme:t})=>{const{topbar:n}=He(),{data:o,config:s,handleGoNext:i,handleGoPrev:c,handleGoToday:d,zoomIn:a,zoomOut:l,isNextZoom:h,isPrevZoom:y,toggleDisplayActiveUnits:x,onClearFilterData:b}=We(),{colors:M}=je(),{filterButtonState:m=-1}=s,W=q=>{q.stopPropagation(),b==null||b()};return u.jsxs(Ei,{width:e,children:[u.jsx(Ai,{children:m>=0&&u.jsxs(mn,{variant:m?"filled":"outlined",iconName:"filter",width:"16",height:"16",onClick:x,children:[n.filters,!!m&&u.jsx("span",{onClick:W,children:u.jsx(Ae,{iconName:"close",height:"16",width:"16",fill:M.textSecondary})})]})}),u.jsxs(_i,{children:[u.jsxs(br,{onClick:c,children:[u.jsx(Ae,{iconName:"arrowLeft",height:"15",fill:M.textPrimary}),n.prev]}),u.jsx(Ti,{onClick:d,children:n.today}),u.jsxs(br,{onClick:i,children:[n.next,u.jsx(Ae,{iconName:"arrowRight",height:"15",fill:M.textPrimary})]})]}),u.jsxs(Ii,{children:[r&&u.jsx(fc,{toggleTheme:t}),u.jsxs(Pi,{children:[n.view,u.jsx(mn,{isDisabled:!y,onClick:l,isFullRounded:!0,iconName:"subtract",width:"14"}),u.jsx(mn,{isDisabled:!h,onClick:a,isFullRounded:!0,iconName:"add",width:"14"})]})]})]})},Yi={add:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>re.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),re.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Ae=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=je(),i=Yi[e];return i?u.jsx(i,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},Li=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r],Ni=k.button`
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
  ${({theme:e,variant:r,disabled:t})=>Li(e,r,t)}
`,mn=({iconName:e,width:r,height:t,fill:n,className:o,onClick:s,children:i,isFullRounded:c,isDisabled:d,variant:a="outlined"})=>{const{colors:l}=je();return u.jsxs(Ni,{onClick:s,isFullRounded:c,hasChildren:!!i,disabled:d,variant:a,children:[u.jsx(Ae,{iconName:e,width:r,height:t,fill:d?l.disabled:n,className:o}),i]})},Fi=k.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Wi=k.div`
  position: relative;
`,Hi=({data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:c,onEventDrag:d,draggableConfig:a,schedulerRef:l,onTimeRangeSelect:h,onMultiTimeRangeSelect:y,clickToAddConfig:x})=>{const{goToDate:b,handleGoToday:M,zoomIn:m,zoomOut:W,zoom:q}=We();return p.useImperativeHandle(l,()=>({goToDate:b,goToToday:M,setZoom:Z=>{if(!ar(Z))return;const A=Z-q;if(A>0)for(let f=0;f<A;f++)m();else for(let f=0;f<Math.abs(A);f++)W()}}),[b,M,q,m,W]),u.jsx($i,{data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:c,onEventDrag:d,draggableConfig:a,onTimeRangeSelect:h,onMultiTimeRangeSelect:y,clickToAddConfig:x})},zi=p.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:i,onTileClick:c,handleToggleDisplayActiveUnits:d,onClearFilterData:a,onItemClick:l,isLoading:h,onEventDrop:y,onEventDrag:x,draggableConfig:b,onTimeRangeSelect:M,onMultiTimeRangeSelect:m,clickToAddConfig:W},q){var $;const Z=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,translations:void 0,...o}),[o]),A=p.useRef(null),f=p.useRef(null),[g,C]=p.useState(($=A.current)==null?void 0:$.clientWidth),T=p.useMemo(()=>E(s),[s]),[P,j]=p.useState(Z.defaultTheme??"light"),J=()=>{j(P==="light"?"dark":"light")},U=P==="light"?Go:Xo,D=Z.theme?Z.theme[U.mode]:{},_={...U,colors:{...U.colors,...D}};return p.useImperativeHandle(q,()=>({goToDate:L=>{var O;return(O=f.current)==null?void 0:O.goToDate(L)},goToToday:()=>{var L;return(L=f.current)==null?void 0:L.goToToday()},setZoom:L=>{var O;return(O=f.current)==null?void 0:O.setZoom(L)}}),[]),p.useEffect(()=>{const L=()=>{A.current&&C(A.current.clientWidth)};return L(),window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[]),A.current,u.jsxs(u.Fragment,{children:[u.jsx(Vo,{}),u.jsx(Bo,{theme:_,children:u.jsx(vi,{lang:Z.lang,translations:Z.translations,children:u.jsx(Ls,{data:r,isLoading:!!h,config:Z,onRangeChange:i,defaultStartDate:T,handleToggleDisplayActiveUnits:d,onClearFilterData:a,children:u.jsx(Fi,{showScroll:!!r.length,id:Ve,ref:A,children:u.jsx(Wi,{children:u.jsx(Hi,{data:r,baseData:n,categories:t,onTileClick:c,topBarWidth:g??0,onItemClick:l,toggleTheme:J,onEventDrop:y,onEventDrag:x,draggableConfig:b,schedulerRef:f,onTimeRangeSelect:M,onMultiTimeRangeSelect:m,clickToAddConfig:W})})})})})})]})}),Bi=k.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,ji=k.button`
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
`,Zi=k.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Vi=k.p`
  ${qe}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,xr=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:i,loadPrevious:c}=He(),d=e==="next"?`${i} ${o+2}/${s}`:`${c} ${o}/${s}`;return u.jsx(Bi,{intent:e,children:u.jsxs(ji,{onClick:r,isVisible:n,children:[t&&u.jsx(Zi,{children:t}),u.jsx(Vi,{children:d})]})})},Gi=k.div`
  min-width: ${$e+"px"};
  max-width: ${$e+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,Xi=k.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${$e}px;
  background-color: ${({theme:e})=>e.colors.background};
  z-index: 3;
`,Ui=k.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,Ki=k.input`
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
`,Ji=k.div`
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
`,qi=k.button`
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
`,Qi=k.div`
  display: flex;
  align-items: ${({rows:e})=>e>1?"start":"center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${he}px;
  height: calc(${he}px * ${({rows:e})=>e});
  border-top: 1px solid
    ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBorder+"33":e.colors.border};
  background-color: ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBg:"transparent"};
  transition: 0.5s ease;
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,Ri=k.div`
  display: flex;
  align-items: center;
`,ea=k.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`,ta=k.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,na=k.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,wr=k.p`
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
`,ra=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>u.jsx(Qi,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:u.jsxs(Ri,{children:[u.jsx(ea,{children:r.icon?u.jsx(ta,{src:r.icon,alt:"Icon"}):u.jsx(Ae,{iconName:"defaultAvatar"})}),u.jsxs(na,{children:[u.jsx(wr,{isMain:!0,children:r.title}),u.jsx(wr,{children:r.subtitle})]})]})}),oa=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px 0 0;
  height: 21px;
  background: ${({theme:e})=>e.mode==="dark"?`linear-gradient(90deg, ${e.colors.primary} 0%, ${e.colors.background} 100%)`:`linear-gradient(90deg, #F3F4F6 0%, ${e.colors.background} 100%)`};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({theme:e})=>e.mode==="dark"?e.colors.secondary:"#EBEDF0"};
  }
`,sa=k.div`
  width: 3px;
  height: 100%;
  flex-shrink: 0;
  background: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder:e.colors.accent};
  border-radius: 0 2px 2px 0;
`,ia=k.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`,aa=k.span`
  font-size: 0.625rem;
  font-weight: 500;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder:e.colors.accent};
  background: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder+"18":e.colors.accent+"14"};
  padding: 1px 6px;
  border-radius: 10px;
  flex-shrink: 0;
  line-height: 1.4;
`,ca=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.placeholder};
  transition: transform 0.2s ease;
  transform: rotate(${({$collapsed:e})=>e?"-90deg":"0deg"});
`,Sr=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>u.jsxs(oa,{$variant:o,onClick:n,title:e,children:[u.jsx(sa,{$variant:o}),u.jsx(ca,{$collapsed:t,children:u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:u.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),u.jsx(ia,{$variant:o,children:e}),u.jsx(aa,{$variant:o,children:r})]}),la=({data:e,categories:r,rows:t,onLoadNext:n,onLoadPrevious:o,pageNum:s,pagesAmount:i,searchInputValue:c,onSearchInputChange:d,onItemClick:a,collapsedGroups:l,onToggleGroup:h,allGroupIds:y,onExpandAll:x,onCollapseAll:b})=>{const[M,m]=p.useState(!1),W=He(),q=()=>m(U=>!U),Z=r?[...r].sort((U,D)=>U.maxPassengers-D.maxPassengers):[],A=Z.length>0,f=y.length>0,g=f&&l.size===y.length;f&&l.size;const C=e.filter(U=>U.isSubcontract),T=W.subcontract??"Subcontract",P=U=>{const D=e.indexOf(U);return u.jsx(ra,{id:U.id,item:U.label,rows:t[D],onItemClick:a,isSubcontract:U.isSubcontract},U.id)},j=U=>{const D=e.filter(L=>!L.isSubcontract&&L.categoryId===U.id);if(D.length===0)return null;const _=l.has(U.id),$=U.name;return u.jsxs("div",{children:[u.jsx(Sr,{label:$,count:D.length,isCollapsed:_,onToggle:()=>h(U.id),variant:"category"}),!_&&D.map(P)]},U.id)},J=e.filter(U=>!U.isSubcontract&&(!U.categoryId||!A));return u.jsxs(Gi,{children:[u.jsxs(Xi,{children:[u.jsxs(Ui,{children:[u.jsxs(Ji,{isFocused:M,children:[u.jsx(Ki,{placeholder:W.search,value:c,onChange:d,onFocus:q,onBlur:q}),u.jsx(Ae,{iconName:"search"})]}),f&&u.jsx(qi,{title:g?"Expand all":"Collapse all",onClick:g?x:b,$allCollapsed:g,children:u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:g?u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),u.jsx(xr,{intent:"previous",isVisible:s!==0,onClick:o,icon:u.jsx(Ae,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:s,pagesAmount:i})]}),A?Z.map(j):J.map(P),A&&J.length>0&&J.map(P),C.length>0&&u.jsxs(u.Fragment,{children:[u.jsx(Sr,{label:T,count:C.length,isCollapsed:l.has("__subcontract__"),onToggle:()=>h("__subcontract__"),variant:"subcontract"}),!l.has("__subcontract__")&&C.map(P)]}),u.jsx(xr,{intent:"next",isVisible:s!==i-1,onClick:n,icon:u.jsx(Ae,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:s,pagesAmount:i})]})},da=k.div`
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
`,ua=Ct`
from{
    left: -100%;
}
to{
    left: 100%;
}`,fa=k.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${ua} 1s infinite;
`,gn=({isLoading:e,position:r})=>e?u.jsx(da,{position:r,children:u.jsx(fa,{})}):null,Ye=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:i,textYPos:c,label:d,font:a,isBottomRow:l,fillStyle:h,topText:y,bottomText:x,strokeStyle:b,labelBetweenCells:M}=e;if(t.beginPath(),t.strokeStyle=b??r.colors.border,t.setLineDash([]),d&&a&&c){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,i),M?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+i),t.lineTo(n+s,o+i),t.stroke(),t.moveTo(n+s/2,o+i),t.lineTo(n+s/2,o+i-5),t.stroke()):t.strokeRect(n+.5,o+.5,s,i),t.font=a;const m=n+s/2-t.measureText(d).width/2;t.textBaseline="middle",t.fillStyle=r.colors.accent,t.fillText(d,m,c)}if(l&&h&&y&&x){t.fillStyle=h,t.fillRect(n,o,s,i),t.strokeRect(n+.5,o+.5,s,i),t.font=y.font;const m=n+s/2-t.measureText(y.label).width/2;t.fillStyle=y.color,t.fillText(y.label,m,y.y),t.font=x.font;const W=n+s/2-t.measureText(x.label).width/2;t.fillStyle=x.color,t.fillText(x.label,W,x.y)}},Cr=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},yn=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},ha=(e,r,t,n)=>{const o=Re-Ze/Ko,s=Re-Ze/Jo,i=Oe+Qe;let c=0;for(let d=0;d<r;d++){const a=or(E(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(d,"days")),l=a.isCurrentDay;Ye({ctx:e,x:c,y:i,width:ve,height:Ze,isBottomRow:!0,fillStyle:l?n.colors.today+"26":Cr({isCurrent:!1,isBusinessDay:a.isBusinessDay},n),topText:{y:o,label:l?"HOY":a.dayName.toUpperCase(),font:l?"700 14px Inter":Pe.bottomRow.name,color:l?n.colors.today:yn({isCurrent:!1,isBusinessDay:a.isBusinessDay},n)},bottomText:{y:s,label:`${a.dayOfMonth}`,font:l?"700 10px Inter":Pe.bottomRow.number,color:l?n.colors.today:yn({isCurrent:!1,isBusinessDay:a.isBusinessDay,variant:"bottomRow"},n)}},n),c+=ve}},pa=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*Ee;const s=Oe;let c=t.month;for(let d=0;d<r;d++){c>=Vt&&(c=0);const a=rr(t,d)*Ee;Ye({ctx:e,x:o,y:s,width:a,height:Qe,textYPos:er,label:E().month(c).format("MMMM").toUpperCase(),font:Pe.bottomRow.number},n),o+=a,c++}},ma=(e,r,t)=>{let o=0,s=0,i=E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month();o=-r.dayOfMonth*ve+ve;for(let c=0;c<Vt;c++)i>Vt-1&&(i=0),s=E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(c,"months").daysInMonth()*ve,Ye({ctx:e,x:o,y:0,width:s,height:Oe,textYPos:Xt,label:E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,font:Pe.topRow},t),o+=s,i++},ga=(e,r,t,n)=>{const o=7*ve,s=Oe,i=e.canvas.width/o+o,c=r.weekOfYear;let d=0;for(let a=0;a<i;a++){const l=E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let h=(c+a)%qn;h<=0&&(h+=qn),l!==1&&a===0&&(d=-l*ve+ve),Ye({ctx:e,x:d,y:s,width:o,height:Qe,textYPos:er,label:`${t.toUpperCase()} ${h}`,font:Pe.middleRow},n),d+=o}},ya=(e,r,t,n,o)=>{const s=Re-Ze/1.6,i=Re-Ze/4.5,c=Oe+Qe;let d=0;for(let a=0;a<r;a++){const l=E(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(a,"weeks"),h=l.isSame(E(),"week");Ye({ctx:e,x:d,y:c,width:et,height:Ze,isBottomRow:!0,fillStyle:h?o.colors.today+"26":Cr({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:l.isoWeek().toString(),font:h?"700 14px Inter":Pe.bottomRow.name,color:h?o.colors.today:yn({isCurrent:h},o)},bottomText:{y:i,label:n.toUpperCase(),font:Pe.middleRow,color:o.colors.placeholder}},o),d+=et}},va=(e,r,t,n)=>{const s=r.year,i=e.canvas.width*2;let c=0,d=0,a=(nr(s)-t+1)*Ee,l=0;for(;c+l<=i;)d>0&&(a=nr(s+d)*Ee),l+a>i&&d>0&&(a=Math.ceil((i-l)/Ee)*Ee),Ye({ctx:e,x:c,y:0,width:a,height:Oe,textYPos:Xt,label:(s+d).toString(),font:Pe.topRow},n),c+=a,l+=a,d++},ba=(e,r,t,n)=>{const o=Math.floor(r/Mt)+2,s=Mt*we;let d=-E(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*we+.5*we;for(let a=0;a<o;a++){const l=E(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(a,"day").format("dddd DD/MM/YYYY").toUpperCase();Ye({ctx:e,x:d,y:tt,width:s,height:ut,textYPos:tt+ut/2+2,label:l,font:Pe.bottomRow.number},n),d+=s}},xa=(e,r,t,n)=>{const o=Math.ceil(r/Mt),s=E(`${t.year}-${t.month+1}-${t.dayOfMonth}`),i=s.add(o-1,"days"),c=s.month(),d=i.add(1,"day").month(),a=c===d?1:2;let l=.5*we;for(let h=0;h<a;h++){const y=E(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),b=E(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),M=b.format("MMMM").toUpperCase(),m=b.diff(y,"hour")+1,W=h===0?m*we:r*we;Ye({ctx:e,x:l,y:0,width:W,height:tt,textYPos:Xt,label:M,font:Pe.topRow},n),l+=W}},wa=(e,r,t,n)=>{let o=0;const s=tt+ut,i=E(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),c=we;for(let d=0;d<r;d++){const a=i.add(d,"hours").format("h:00a").toUpperCase();Ye({ctx:e,x:o,y:s,width:c,height:Zt,label:a,font:Pe.bottomRow.hoursInDay,textYPos:tt+ut+Zt/2+2,labelBetweenCells:!0},n),o+=we}},Sa=(e,r,t,n,o,s,i)=>{switch(r){case 0:va(e,n,s,i),pa(e,t,n,i),ya(e,t,n,o,i);break;case 1:ma(e,n,i),ga(e,n,o,i),ha(e,t,n,i);break;case 2:xa(e,t,n,i),ba(e,t,n,i),wa(e,t,n,i);break}},Ca=k.div`
  position: sticky;
  top: 0;
  z-index: 1;
`,ka=k.div`
  height: ${Re}px;
  display: block;
`,Ma=k.canvas``,Da=({zoom:e,topBarWidth:r,showThemeToggle:t,toggleTheme:n})=>{const{week:o}=He(),{date:s,cols:i,dayOfYear:c,startDate:d,config:a}=We(),l=p.useRef(null),h=je(),y=p.useCallback(x=>{const b=sn(),m=(e===2?Uo:Re)+1;lr(x,b,m),Sa(x,e,i,d,o,c,h)},[i,c,d,o,e,h]);return p.useEffect(()=>{if(!l.current)return;const x=l.current.getContext("2d");if(!x)return;const b=()=>y(x);return window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[y]),p.useEffect(()=>{const x=l.current;if(!x)return;x.style.letterSpacing="1px";const b=x.getContext("2d");b&&y(b)},[s,e,y]),u.jsxs(Ca,{children:[a.showTopbar!==!1&&u.jsx(Oi,{width:r,showThemeToggle:t,toggleTheme:n}),u.jsx(ka,{id:qo,children:u.jsx(Ma,{ref:l})})]})},$a=(e,r,t)=>{let n;switch(t){case 0:n=Ee;break;case 2:n=we;break;default:n=ve}const s=e.startDate.startOf("day"),i=e.endDate.startOf("day"),c=r.startDate.startOf("day"),d=r.endDate.startOf("day"),a=()=>{let l;switch(t){case 2:l=(e.startDate.diff(r.startDate,"minute")/be+1)*n-n/2;break;default:l=s.diff(c,"day")*n}return Math.max(0,l)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let l;switch(t){case 2:l=Math.max(e.endDate.diff(e.startDate,"minute")/be*n,50);break;default:l=Math.max(i.diff(s,"day")*n+n,50)}return{x:a(),width:l}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let l;switch(t){case 2:l=Math.max(e.endDate.diff(r.startDate,"minute")/be*n+.5*n,50);break;default:l=Math.max(i.diff(c,"day")*n+n,50)}return{x:a(),width:l}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let l;switch(t){case 2:l=Math.max(r.endDate.diff(e.startDate,"minute")/be*n,50);break;default:l=Math.max(d.diff(s,"day")*n+n,50)}return{x:a(),width:l}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let l;switch(t){case 2:l=Math.max(r.endDate.diff(r.startDate,"minute")/be*n,50);break;default:l=Math.max(d.diff(c,"day")*n+n,50)}return{x:a(),width:l}}return{x:a(),width:50}},Ea=(e,r,t,n,o,s)=>{const i=e*he+Qo,c=r.hour(),d=t.hour();let a,l,h,y;switch(s){case 2:{a=E(n),l=E(o),h=E(r).hour(c).minute(0),y=E(t).hour(d).minute(0);break}default:{a=E(n).hour(0).minute(0),l=E(o).hour(23).minute(59),h=r,y=t;break}}return{...$a({startDate:a,endDate:l},{startDate:h,endDate:y},s),y:i}},kr=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"},Mr=k.button`
  ${qe}
  height: ${Gt}px;
  position: absolute;
  outline: none;
  border: ${({$dashed:e})=>e?"1.5px dashed rgba(255, 255, 255, 0.75)":"none"};
  border-radius: 4px;
  text-align: left;
  color: ${({theme:e})=>e.colors.textPrimary};
  width: 100%;
  cursor: ${({isDraggable:e,isDragging:r})=>e?r?"grabbing":"grab":"not-allowed"};
  opacity: ${({isDragging:e})=>e?.3:1};
  transition: opacity 0.2s ease;
`;k.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,k.p`
  ${qe}
  ${kt}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const Dr=k.span`
  font-size: 12px;
  line-height: 1;
  flex-shrink: 0;
  opacity: 0.95;
`,_a=k.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  border-radius: 4px 0 0 4px;
  pointer-events: none;
`,Ta=k.div`
  position: absolute;
  top: 3px;
  right: 4px;
  display: flex;
  align-items: center;
  gap: 3px;
  pointer-events: none;
`,Pa=k.span`
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 0.4px;
  line-height: 1;
  padding: 2px 3px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
`,Aa=k.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: 800;
  line-height: 1;
  color: #fff;
  box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.9);
`,Ia=k.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  padding: 0 2px;
  overflow: hidden;
`,Oa=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.2px;
  font-variant-numeric: tabular-nums;
`,Ya=k.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 8px;
  min-width: 0;
  overflow: hidden;
`,La=k.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  gap: 1px;
`,pt=k.span`
  ${kt}
  font-size: ${({bold:e})=>e?"11px":"9px"};
  font-weight: ${({bold:e})=>e?"700":"500"};
  line-height: 1.25;
  letter-spacing: 0.2px;
  opacity: ${({bold:e})=>e?1:.9};
`,Na=k.span`
  display: inline-block;
  font-size: 8.5px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1;
  padding: 2px 4px;
  margin-right: 4px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.16);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  vertical-align: middle;
`,Fa=34,Wa=156,Ha=248,$r={sin_chofer:"#9AA5A0",sin_avisar:"#E0A83C",notificado:"#3B82F6",confirmado:"#2FA36B"},za={sin_chofer:"○",sin_avisar:"!",notificado:"→",confirmado:"✓"},Ba="#3E8E5A",ja="#9AA5A0",Za=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onDragStart:s,isDragging:i=!1,isDraggable:c=!0,yOffset:d=0})=>{const{date:a}=We(),l=on(a,t),{y:h,x:y,width:x}=Ea(e,l.startDate,l.endDate,r.startDate,r.endDate,t),{colors:b}=je(),M=p.useRef(null),m=E(r.startDate).isSame(E(r.endDate),"day"),W=r.eventType===ft.Tour,q=r.eventType===ft.Transfer,Z=m&&(W||q),A=q?"⇄":Z?"☀":"▦",f=D=>{M.current={x:D.clientX,y:D.clientY},c&&s&&(D.preventDefault(),s(r,D))},g=D=>{if(M.current){const _=Math.abs(D.clientX-M.current.x),$=Math.abs(D.clientY-M.current.y);Math.sqrt(_*_+$*$)<=5&&(o==null||o(r)),M.current=null}else o==null||o(r)},C={left:`${y}px`,top:`${h+d}px`,backgroundColor:`${r.bgColor??b.defaultTile}`,width:`${x}px`,color:kr(r.bgColor??"")},T=n&&r.subcontractConfirmed===!1,P=n?r.subcontractConfirmed===!1?ja:Ba:r.readiness?$r[r.readiness]:void 0,j=u.jsxs(u.Fragment,{children:[P&&u.jsx(_a,{style:{background:P}}),u.jsx(Ta,{children:n?u.jsx(Pa,{children:"SUB"}):r.readiness&&u.jsx(Aa,{style:{background:$r[r.readiness]},children:za[r.readiness]})})]});if(Z)return u.jsxs(Mr,{"data-segment-id":r.segmentId,style:C,onClick:g,onMouseDown:f,onDragStart:D=>D.preventDefault(),isDraggable:c,isDragging:i,$dashed:T,children:[j,u.jsxs(Ia,{children:[u.jsx(Dr,{children:A}),x>=Fa&&u.jsxs(Oa,{children:[u.jsx("span",{children:E(r.startDate).format("HH:mm")}),!q&&u.jsx("span",{children:E(r.endDate).format("HH:mm")})]})]})]});const J=x>=Ha,U=r.bookingNumber?u.jsx(Na,{children:r.bookingNumber}):null;return u.jsxs(Mr,{"data-segment-id":r.segmentId,style:C,onClick:g,onMouseDown:f,onDragStart:D=>D.preventDefault(),isDraggable:c,isDragging:i,$dashed:T,children:[j,u.jsxs(Ya,{children:[u.jsx(Dr,{children:A}),u.jsx(La,{children:J?u.jsxs(u.Fragment,{children:[u.jsx(pt,{bold:!0,children:r.title}),u.jsxs(pt,{children:[U,r.subtitle]}),r.driver&&u.jsx(pt,{children:r.driver})]}):u.jsxs(u.Fragment,{children:[u.jsx(pt,{children:U}),x>=Wa&&r.subtitle&&u.jsx(pt,{children:r.subtitle})]})})]})]})},Va=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Me},Ga=({data:e,zoom:r,onTileClick:t,onDragStart:n,isDraggable:o,draggingEventId:s,separatorRowIndices:i=[]})=>{const c=p.useCallback(()=>{let d=0;return e.map((a,l)=>(l>0&&(d+=Math.max(e[l-1].data.length,1)),a.data.map((h,y)=>h.map(x=>{const b=s===x.segmentId,M=o?o(x):!1,m=y+d,W=Va(m,i);return u.jsx(Za,{row:m,data:x,zoom:r,isSubcontract:a.isSubcontract,onTileClick:t,onDragStart:n,isDragging:b,isDraggable:M,yOffset:W},x.segmentId)})))).flat(2)},[e,t,r,n,o,s,i]);return u.jsx(u.Fragment,{children:c()})};k.div`
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
`;const Xa=k.div`
  position: absolute;
  width: 240px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`,Ua=k.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Ka=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`,Ja=k.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
`,qa=k.span`
  background: ${({$type:e})=>e==="transfer"?"#dbeafe":"#dcfce7"};
  color: ${({$type:e})=>e==="transfer"?"#1e40af":"#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`,Qa=k.div`
  ${qe}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ra=k.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
`,ec=k.div`
  padding: 10px 12px;
`,tc=k.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,Er=k.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,_r=k.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,Tr=k.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Pr=k.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,Ar=k.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,nc=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,rc=k.div``,oc=k.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,sc=k.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ic=k.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Ir=k.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Or=k.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Yr=k.div`
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
`;k.div``,k.span``,k.span``,k.div``,k.div``,k.span``,k.span``,k.div``,k.div``,k.span``,k.span``,k.div``,k.div``,k.div``,k.span``,k.div``,k.div``,k.div``,k.div``,k.p``,k.span``;const ac={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},cc=({tooltipData:e})=>{const{mouseCoords:r,reservationData:t}=e,n=p.useRef(null),[o,s]=p.useState("below"),i=He(),c={...ac,...i.tooltip};p.useLayoutEffect(()=>{if(!n.current||!r)return;const x=n.current,{width:b,height:M}=x.getBoundingClientRect(),m=x.parentElement;if(!m)return;const W=m.getBoundingClientRect(),q=12,Z=4,A=W.height-r.y,f=W.width-r.x;let g=r.x+q,C=r.y+q,T="below";f<b+q&&(g=r.x-b-q),A<M+q&&(C=r.y-M-q,T="above"),g=Math.max(Z,Math.min(g,W.width-b-Z)),C=Math.max(Z,Math.min(C,W.height-M-Z)),s(T),x.style.left=`${g}px`,x.style.top=`${C}px`},[r]);const d=t.reservationType===ft.Tour,a=d&&t.isOneDayEvent,l=()=>d?a?"oneday":"tour":"transfer",h=()=>d?a?c.oneDay:c.tour:c.transfer,y=[t.groupName&&{label:c.groupName,value:t.groupName},t.driver&&{label:c.driver,value:t.driver},t.passengers&&{label:c.passengers,value:String(t.passengers)},t.flightNumber&&{label:c.flightNumber,value:t.flightNumber}].filter(Boolean);return u.jsxs(Xa,{ref:n,$position:o,children:[u.jsxs(Ua,{children:[u.jsxs(Ka,{children:[u.jsx(Ja,{children:t.bookingNumber}),u.jsx(qa,{$type:l(),children:h()})]}),u.jsx(Qa,{children:t.eventName}),t.client&&u.jsx(Ra,{children:t.client})]}),u.jsxs(ec,{children:[u.jsxs(tc,{children:[u.jsxs(Er,{children:[u.jsx(_r,{children:c.startDate}),u.jsxs(Tr,{children:[u.jsx(Pr,{children:t.startDate})," ",u.jsx(Ar,{children:t.startTime})]})]}),d&&t.endDate&&u.jsxs(Er,{$isEnd:!0,children:[u.jsx(_r,{children:c.endDate}),u.jsxs(Tr,{children:[u.jsx(Pr,{children:t.endDate})," ",u.jsx(Ar,{children:t.endTime})]})]})]}),y.length>0&&u.jsx(nc,{children:y.map((x,b)=>u.jsxs(rc,{children:[u.jsx(oc,{children:x.label}),u.jsx(sc,{children:x.value})]},b))}),(t.serviceNotes||t.reservationNotes)&&u.jsxs(ic,{children:[t.serviceNotes&&u.jsxs(Ir,{children:[u.jsx(Or,{children:c.serviceNotes}),u.jsx(Yr,{children:t.serviceNotes})]}),t.reservationNotes&&u.jsxs(Ir,{children:[u.jsx(Or,{children:c.reservationNotes}),u.jsx(Yr,{children:t.reservationNotes})]})]})]})]})},lc=k.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`,dc=k.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({theme:e})=>e.mode==="light"?"4px":"34px"};
  transition: left 0.3s ease;
`,uc=k.div`
  position: absolute;
  top: 5px;
  left: ${({theme:e})=>e.mode==="light"?"38px":"4px"};
  transition: left 0.3s ease;
`,fc=({toggleTheme:e})=>{const r=je();return u.jsxs(lc,{onClick:e,children:[u.jsx(dc,{}),u.jsx(uc,{children:r.mode==="light"?u.jsx(Ae,{iconName:"sun",height:"16",width:"16"}):u.jsx(Ae,{iconName:"moon",height:"16",width:"16"})})]})},hc=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,pc=k.div`
  position: absolute;
  height: ${Gt}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:r,$animateToY:t})=>e&&r!==void 0&&t!==void 0?`transform: translate3d(${r}px, ${t}px, 0);`:""}
`,mc=k.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,Lr=k.p`
  ${qe}
  ${kt}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,gc=k.p`
  ${qe}
  ${kt}
`,yc=k.div`
  position: sticky;
  left: ${$e+16}px;
  overflow: hidden;
`,vc=k.div`
  position: absolute;
  height: ${Gt}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,bc=k.div`
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
`,xc=k.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,wc=k.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,Sc=k.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,Nr=k.div`
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
`,Fr=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,Wr=k.div`
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
`,Hr=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,vn=k.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,bn=k.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,st=k.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,zr=k.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,Cc=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:i,resourceOnly:c,separatorRowIndices:d=[]})=>{const a=He(),l=A=>{let f=0;for(const g of d)g<=A&&f++;return A*he+f*Me},[h,y]=p.useState(null),[x,b]=p.useState(0),M=p.useCallback((A=400,f=300)=>{const C=t.width,T=48,P=document.getElementById("react-scheduler");if(!P)return{x:r.x+C+16,y:r.y};const j=P.scrollLeft,J=P.scrollTop,U=P.clientWidth,D=P.clientHeight,_=r.x-j,$=r.y-J,L={left:$e+16,right:U-16,top:16,bottom:D-16},O=L.right-(_+C),Q=_-L.left,ee=L.bottom-($+T),se=$-L.top;let oe,B;return O>=A+16?oe=_+C+16:Q>=A+16?oe=_-A-16:O>=Q?(oe=_+C+16,oe+A>L.right&&(oe=L.right-A)):(oe=_-A-16,oe<L.left&&(oe=L.left)),ee>=f+16?B=$+T+16:se>=f+16?B=$-f-16:ee>=se?(B=$+T+16,B+f>L.bottom&&(B=L.bottom-f)):(B=$-f-16,B<L.top&&(B=L.top)),oe=Math.max(L.left,Math.min(oe,L.right-A)),B=Math.max(L.top,Math.min(B,L.bottom-f)),{x:oe+j,y:B+J}},[r.x,r.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&x===0?b(r.x):s==="idle"&&b(0)},[s,e,r.x,x]),p.useEffect(()=>{y(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const m=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const A=[];let f=0;for(const g of i){const C=Math.max(g.data.length,1);if(g.capacity!==void 0&&e.totalPassengers>g.capacity)for(let T=0;T<C;T++)A.push(f+T);f+=C}return A},[e,i,s]);if(!e||s==="idle"||s==="potential")return null;const W=s==="animating",q=kr(e.bgColor??""),Z=()=>{if(!n)return"";const A=E(n.startDate).format("MMM D, HH:mm"),f=E(n.endDate).format("HH:mm");return`${A} - ${f}`};return u.jsxs(hc,{children:[m.map(A=>u.jsx(wc,{style:{top:`${l(A)}px`,height:`${he}px`}},A)),n&&s==="dragging"&&u.jsx(xc,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${l(n.resourceIndex)}px`,height:`${he}px`}}),n&&s==="dragging"&&!c&&u.jsxs(u.Fragment,{children:[u.jsx(vc,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${l(n.resourceIndex)+(he-48)/2}px`,width:`${t.width}px`}}),u.jsx(bc,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${l(n.resourceIndex)+(he-48)/2}px`},children:Z()})]}),n&&s==="dragging"&&c&&u.jsx(Sc,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${l(n.resourceIndex)}px`,height:`${he}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const A=M(400,300);return u.jsxs(Nr,{style:{left:`${A.x}px`,top:`${A.y}px`},children:[u.jsxs(Fr,{children:[u.jsx(Wr,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?a.conflicts.detectedPlural:a.conflicts.detected," ",a.conflicts.detectedSuffix]}),u.jsx(Hr,{children:n.conflicts.map((f,g)=>{const C=E(n.startDate).format("YYYY-MM-DD"),T=E(n.endDate).format("YYYY-MM-DD"),P=E(f.event.startDate).format("YYYY-MM-DD"),j=E(f.event.endDate).format("YYYY-MM-DD"),J=E(f.conflictStart).format("YYYY-MM-DD"),U=E(f.conflictEnd).format("YYYY-MM-DD"),D=C!==T,_=P!==j,$=J!==U,L=D?E(n.startDate).format("MMM D, h:mm A"):E(n.startDate).format("h:mm A"),O=D?E(n.endDate).format("MMM D, h:mm A"):E(n.endDate).format("h:mm A"),Q=_?E(f.event.startDate).format("MMM D, h:mm A"):E(f.event.startDate).format("h:mm A"),ee=_?E(f.event.endDate).format("MMM D, h:mm A"):E(f.event.endDate).format("h:mm A"),se=$?E(f.conflictStart).format("MMM D, h:mm A"):E(f.conflictStart).format("h:mm A"),oe=$?E(f.conflictEnd).format("MMM D, h:mm A"):E(f.conflictEnd).format("h:mm A"),B=$?"":E(f.conflictStart).format("MMM D"),V=n.startDate.getTime(),G=n.endDate.getTime(),X=f.event.startDate.getTime(),w=f.event.endDate.getTime(),F=V>=X&&V<w,v=G>X&&G<=w,Y=V<=X&&G>=w,z=X<=V&&w>=G;let I=!1,S=!1,R=!1,N=!1,K="";return Y||z?(I=!0,S=!0,R=!0,N=!0,K=`⚠️ ${a.conflicts.changeBoth}`):F&&v?(I=!0,S=!0,R=!0,N=!0,K=`⚠️ ${a.conflicts.changeBoth}`):F?(I=!0,N=!0,K=`⚠️ ${a.conflicts.changeStart}`):v&&(S=!0,R=!0,K=`⚠️ ${a.conflicts.changeEnd}`),u.jsxs(vn,{children:[u.jsxs(bn,{children:[a.conflicts.conflictsWith,": ",f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),u.jsxs(st,{children:[u.jsx("strong",{children:e.title})," ",a.conflicts.movingTo,":"," ",I?u.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:L}):L," ",a.conflicts.to," ",S?u.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:O}):O]}),u.jsxs(st,{children:[u.jsx("strong",{children:f.event.title})," ",a.conflicts.currentlyAt,":"," ",R?u.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:Q}):Q," ",a.conflicts.to," ",N?u.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:ee}):ee]}),u.jsxs(zr,{children:[a.conflicts.conflictTime,": ",B&&`${B}, `,se," - ",oe]}),K&&u.jsx(st,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:K})]},g)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const A=M(400,400);return u.jsxs(Nr,{style:{left:`${A.x}px`,top:`${A.y}px`,borderColor:"#4CAF50"},children:[u.jsxs(Fr,{style:{color:"#2E7D32"},children:[u.jsx(Wr,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?a.conflicts.nearbyEvents:a.conflicts.nearbyEvent]}),u.jsxs(Hr,{children:[(()=>{const f=n.nearbyEvents.some(P=>P.position==="before"),g=n.nearbyEvents.some(P=>P.position==="after"),C=E(n.startDate).format("h:mm A"),T=E(n.endDate).format("h:mm A");return u.jsxs(vn,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[u.jsxs(bn,{style:{color:"#33691E"},children:[a.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),u.jsxs(st,{style:{fontWeight:600},children:[E(n.startDate).format("MMM D"),":"," ",f?u.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:C}):C," ",a.conflicts.to," ",g?u.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:T}):T]}),u.jsx(st,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:a.conflicts.sameDay})]})})(),n.nearbyEvents.map((f,g)=>{const C=E(f.event.startDate).format("YYYY-MM-DD"),T=E(f.event.endDate).format("YYYY-MM-DD"),P=C!==T,j=P?E(f.event.startDate).format("MMM D, h:mm A"):E(f.event.startDate).format("h:mm A"),J=P?E(f.event.endDate).format("MMM D, h:mm A"):E(f.event.endDate).format("h:mm A"),U=E(f.event.startDate).format("MMM D"),D=Math.floor(f.timeGap/(1e3*60*60)),_=Math.floor(f.timeGap%(1e3*60*60)/(1e3*60)),$=D>0?`${D}h ${_}m`:`${_}m`,L=f.position==="after",O=f.position==="before";return u.jsxs(vn,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[u.jsxs(bn,{style:{color:"#1B5E20"},children:[f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),u.jsxs(st,{children:[!P&&`${U}: `,L?u.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:j}):j," ",a.conflicts.to," ",O?u.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:J}):J]}),u.jsxs(zr,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[$," ",f.position==="before"?a.conflicts.before:a.conflicts.after]})]},g)})]})]})})(),u.jsx(pc,{$isAnimating:W,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:W?`${(h==null?void 0:h.x)??0}px`:"0",top:W?`${(h==null?void 0:h.y)??0}px`:"0",transform:W?void 0:`translate3d(${c?x:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:q},children:u.jsx(mc,{children:u.jsxs(yc,{children:[u.jsx(Lr,{$bold:!0,children:e.title}),e.subtitle&&u.jsx(Lr,{children:e.subtitle}),e.description&&u.jsx(gc,{children:e.description})]})})})]})},kc=Ct`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,Mc=k.div`
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
  animation: ${kc} 1.5s ease-in-out infinite;
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
`,Dc=({selectionBox:e,isSelecting:r})=>!e||!r?null:u.jsx(Mc,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),$c=Ct`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ec=k.div`
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
  animation: ${$c} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,_c=k.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,Tc=k.span`
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
`,Pc=k.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,Ac=k.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;k.div`
  display: none;
`,k.div`
  display: none;
`,k.button`
  display: none;
`;const Ic=k.div`
  display: flex;
  gap: 8px;
`,Br=k.button`
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
`,Oc=({selections:e,onConfirm:r,onClear:t})=>{var b;const o=He().multiSelect,s=p.useMemo(()=>e.filter(M=>M.hasConflict).length,[e]),i=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",c=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,d=(o==null?void 0:o.clearAll)||"Clear All",a=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",l=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((b=o==null?void 0:o.conflictsWarning)==null?void 0:b.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const y=s>0,x=u.jsxs(Ec,{$hasConflicts:y,"data-multi-select-ui":!0,children:[u.jsxs(_c,{children:[u.jsxs(Tc,{$hasConflicts:y,children:[e.length," ",i]}),y&&u.jsxs(Pc,{children:["⚠️ ",h]}),u.jsx(Ac,{children:c})]}),u.jsxs(Ic,{children:[u.jsxs(Br,{variant:"secondary",onClick:t,children:["✕ ",d]}),u.jsx(Br,{variant:"primary",$hasConflicts:y,onClick:r,children:y?`⚠️ ${l}`:`✓ ${a}`})]})]});return Zr.createPortal(x,document.body)},Yc=Ct`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Lc=k.div`
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
  animation: ${Yc} 0.2s ease-out;
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
`,Nc=k.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,Fc=k.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,Wc=k.button`
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
`,Hc=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:i=[]})=>{const[c,d]=p.useState(null),[a,l]=p.useState({x:0,y:0}),h=p.useRef(null),y=p.useMemo(()=>{switch(t){case 0:return Ee*7;case 1:return ve;case 2:return we;default:return ve}},[t]),x=p.useMemo(()=>E().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),b=p.useMemo(()=>e.map((g,C)=>{let T=0,P=!1;for(const Q of r){if(Q.id===g.resourceId){P=!0;break}T+=Math.max(Q.data.length,1)}if(!P)return null;const j=E(g.startDate),J=E(g.endDate);let U,D;switch(t){case 0:U=Math.floor(j.diff(x,"days")/7),D=Math.max(1,Math.ceil(J.diff(j,"days")/7)+1);break;case 1:U=j.diff(x,"days"),D=Math.max(1,J.diff(j,"days")+1);break;case 2:U=j.diff(x,"hours"),D=Math.max(1,J.diff(j,"hours")+1);break;default:U=0,D=1}const _=U*y;let $=0;for(const Q of i)Q<=T&&$++;const L=T*he+$*Me,O=D*y;return{index:C,selection:g,x:_,y:L,width:O,height:he}}),[e,r,t,x,y]),M=(g,C)=>{const T=E(g).format("MMM D"),P=E(C).format("MMM D");return T===P?T:`${T} - ${P}`},m=g=>!g.hasConflict||!g.conflicts?"":`⚠️ Conflicts with:
${g.conflicts.map(T=>{const P=(T.overlapDuration/36e5).toFixed(1);return`• ${T.event.title} (${P}h overlap)`}).join(`
`)}`,W=p.useCallback(g=>{let C=0;for(const T of r){const P=Math.max(T.data.length,1);if(g>=C*he&&g<(C+P)*he)return{resourceId:T.id,resourceLabel:T.label};C+=P}return null},[r]),q=p.useCallback(g=>{const C=Math.floor(g/y);switch(t){case 0:return x.add(C*7,"days").toDate();case 1:return x.add(C,"days").toDate();case 2:return x.add(C,"hours").toDate();default:return x.toDate()}},[t,x,y]),Z=p.useCallback((g,C)=>{!s||(g.preventDefault(),g.stopPropagation(),!b[C])||(h.current={x:g.clientX,y:g.clientY},d(C),l({x:0,y:0}))},[s,b]),A=p.useCallback(g=>{if(c===null||!h.current)return;const C=g.clientX-h.current.x,T=g.clientY-h.current.y,P=Math.round(C/y)*y,j=Math.round(T/he)*he;l({x:P,y:j})},[c,y]),f=p.useCallback(()=>{if(c===null||!s){d(null),l({x:0,y:0}),h.current=null;return}const g=b[c];if(!g){d(null),l({x:0,y:0}),h.current=null;return}const C=g.x+a.x,T=g.y+a.y,P=W(T+he/2);if(!P){d(null),l({x:0,y:0}),h.current=null;return}const j=q(C),J=e[c],U=J.endDate.getTime()-J.startDate.getTime(),D=new Date(j.getTime()+U);s(c,{startDate:j,endDate:D,resourceId:P.resourceId,resourceLabel:P.resourceLabel}),d(null),l({x:0,y:0}),h.current=null},[c,a,b,e,s,W,q]);return p.useEffect(()=>{if(c!==null)return document.addEventListener("mousemove",A),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",f)}},[c,A,f]),u.jsx(u.Fragment,{children:b.map(g=>{if(!g)return null;const C=g.selection.hasConflict||!1,T=c===g.index,P=T?g.x+a.x:g.x,j=T?g.y+a.y:g.y;return u.jsxs(Lc,{$hasConflict:C,$isDragging:T,style:{left:P,top:j,width:g.width,height:g.height},"data-multi-select-ui":!0,onMouseDown:J=>Z(J,g.index),children:[C&&u.jsx(Fc,{title:m(g.selection),children:"⚠️"}),u.jsx(Nc,{$hasConflict:C,children:M(g.selection.startDate,g.selection.endDate)}),u.jsx(Wc,{onClick:J=>{J.stopPropagation(),o(g.index)},onMouseDown:J=>J.stopPropagation(),title:C?"Remove conflicting selection":"Remove selection",children:"×"})]},g.index)})})},zc=k.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  background: ${({theme:e})=>e.colors.today}12;
`,Bc=({zoom:e,startDate:r})=>{const{cols:t}=We(),n=p.useMemo(()=>{if(e===2)return null;const o=e===0?Ee*7:ve,s=E().year(r.year).month(r.month).date(r.dayOfMonth).startOf("day"),i=E().startOf("day"),c=e===0?i.startOf("week").diff(s.startOf("week"),"week"):i.diff(s,"days");return c<0||c>=t?null:{x:c*o,width:o}},[e,r,t]);return n?u.jsx(zc,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},wl="";ke.Scheduler=zi,Object.defineProperty(ke,Symbol.toStringTag,{value:"Module"})});
