(function(ke,f){typeof exports=="object"&&typeof module<"u"?f(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],f):(ke=typeof globalThis<"u"?globalThis:ke||self,f(ke["react-scheduler"]={},ke["react/jsx-runtime"],ke.React,ke.ReactDOM))})(this,function(ke,f,p,jr){"use strict";var Bc=Object.defineProperty;var jc=(ke,f,p)=>f in ke?Bc(ke,f,{enumerable:!0,configurable:!0,writable:!0,value:p}):ke[f]=p;var Br=(ke,f,p)=>(jc(ke,typeof f!="symbol"?f+"":f,p),p);function Zr(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const re=Zr(p);var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lt={},Vr={get exports(){return lt},set exports(e){lt=e}},pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wn;function Gr(){if(wn)return pe;wn=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),l=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),b;b=Symbol.for("react.module.reference");function M(m){if(typeof m=="object"&&m!==null){var W=m.$$typeof;switch(W){case e:switch(m=m.type,m){case t:case o:case n:case a:case l:return m;default:switch(m=m&&m.$$typeof,m){case c:case i:case d:case g:case h:case s:return m;default:return W}}case r:return W}}}return pe.ContextConsumer=i,pe.ContextProvider=s,pe.Element=e,pe.ForwardRef=d,pe.Fragment=t,pe.Lazy=g,pe.Memo=h,pe.Portal=r,pe.Profiler=o,pe.StrictMode=n,pe.Suspense=a,pe.SuspenseList=l,pe.isAsyncMode=function(){return!1},pe.isConcurrentMode=function(){return!1},pe.isContextConsumer=function(m){return M(m)===i},pe.isContextProvider=function(m){return M(m)===s},pe.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},pe.isForwardRef=function(m){return M(m)===d},pe.isFragment=function(m){return M(m)===t},pe.isLazy=function(m){return M(m)===g},pe.isMemo=function(m){return M(m)===h},pe.isPortal=function(m){return M(m)===r},pe.isProfiler=function(m){return M(m)===o},pe.isStrictMode=function(m){return M(m)===n},pe.isSuspense=function(m){return M(m)===a},pe.isSuspenseList=function(m){return M(m)===l},pe.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===t||m===o||m===n||m===a||m===l||m===x||typeof m=="object"&&m!==null&&(m.$$typeof===g||m.$$typeof===h||m.$$typeof===s||m.$$typeof===i||m.$$typeof===d||m.$$typeof===b||m.getModuleId!==void 0)},pe.typeOf=M,pe}var me={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sn;function Xr(){return Sn||(Sn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),l=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),b=!1,M=!1,m=!1,W=!1,q=!1,Z;Z=Symbol.for("react.module.reference");function A(L){return!!(typeof L=="string"||typeof L=="function"||L===t||L===o||q||L===n||L===a||L===l||W||L===x||b||M||m||typeof L=="object"&&L!==null&&(L.$$typeof===g||L.$$typeof===h||L.$$typeof===s||L.$$typeof===i||L.$$typeof===d||L.$$typeof===Z||L.getModuleId!==void 0))}function u(L){if(typeof L=="object"&&L!==null){var J=L.$$typeof;switch(J){case e:var te=L.type;switch(te){case t:case o:case n:case a:case l:return te;default:var H=te&&te.$$typeof;switch(H){case c:case i:case d:case g:case h:case s:return H;default:return J}}case r:return J}}}var y=i,C=s,T=e,P=d,j=t,G=g,K=h,E=r,_=o,D=n,N=a,O=l,Q=!1,ee=!1;function se(L){return Q||(Q=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function oe(L){return ee||(ee=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function B(L){return u(L)===i}function V(L){return u(L)===s}function X(L){return typeof L=="object"&&L!==null&&L.$$typeof===e}function U(L){return u(L)===d}function w(L){return u(L)===t}function F(L){return u(L)===g}function v(L){return u(L)===h}function Y(L){return u(L)===r}function z(L){return u(L)===o}function I(L){return u(L)===n}function S(L){return u(L)===a}function R(L){return u(L)===l}me.ContextConsumer=y,me.ContextProvider=C,me.Element=T,me.ForwardRef=P,me.Fragment=j,me.Lazy=G,me.Memo=K,me.Portal=E,me.Profiler=_,me.StrictMode=D,me.Suspense=N,me.SuspenseList=O,me.isAsyncMode=se,me.isConcurrentMode=oe,me.isContextConsumer=B,me.isContextProvider=V,me.isElement=X,me.isForwardRef=U,me.isFragment=w,me.isLazy=F,me.isMemo=v,me.isPortal=Y,me.isProfiler=z,me.isStrictMode=I,me.isSuspense=S,me.isSuspenseList=R,me.isValidElementType=A,me.typeOf=u}()),me}(function(e){process.env.NODE_ENV==="production"?e.exports=Gr():e.exports=Xr()})(Vr);function Ur(e){function r(B,V,X,U,w){for(var F=0,v=0,Y=0,z=0,I,S,R=0,L=0,J,te=J=I=0,H=0,ie=0,fe=0,de=0,ae=X.length,le=ae-1,ce,ne="",ue="",Se="",_e="",De;H<ae;){if(S=X.charCodeAt(H),H===le&&v+z+Y+F!==0&&(v!==0&&(S=v===47?10:47),z=Y=F=0,ae++,le++),v+z+Y+F===0){if(H===le&&(0<ie&&(ne=ne.replace(g,"")),0<ne.trim().length)){switch(S){case 32:case 9:case 59:case 13:case 10:break;default:ne+=X.charAt(H)}S=59}switch(S){case 123:for(ne=ne.trim(),I=ne.charCodeAt(0),J=1,de=++H;H<ae;){switch(S=X.charCodeAt(H)){case 123:J++;break;case 125:J--;break;case 47:switch(S=X.charCodeAt(H+1)){case 42:case 47:e:{for(te=H+1;te<le;++te)switch(X.charCodeAt(te)){case 47:if(S===42&&X.charCodeAt(te-1)===42&&H+2!==te){H=te+1;break e}break;case 10:if(S===47){H=te+1;break e}}H=te}}break;case 91:S++;case 40:S++;case 34:case 39:for(;H++<le&&X.charCodeAt(H)!==S;);}if(J===0)break;H++}switch(J=X.substring(de,H),I===0&&(I=(ne=ne.replace(h,"").trim()).charCodeAt(0)),I){case 64:switch(0<ie&&(ne=ne.replace(g,"")),S=ne.charCodeAt(1),S){case 100:case 109:case 115:case 45:ie=V;break;default:ie=N}if(J=r(V,ie,J,S,w+1),de=J.length,0<Q&&(ie=t(N,ne,fe),De=c(3,J,ie,V,E,K,de,S,w,U),ne=ie.join(""),De!==void 0&&(de=(J=De.trim()).length)===0&&(S=0,J="")),0<de)switch(S){case 115:ne=ne.replace(y,i);case 100:case 109:case 45:J=ne+"{"+J+"}";break;case 107:ne=ne.replace(q,"$1 $2"),J=ne+"{"+J+"}",J=D===1||D===2&&s("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=ne+J,U===112&&(J=(ue+=J,""))}else J="";break;default:J=r(V,t(V,ne,fe),J,U,w+1)}Se+=J,J=fe=ie=te=I=0,ne="",S=X.charCodeAt(++H);break;case 125:case 59:if(ne=(0<ie?ne.replace(g,""):ne).trim(),1<(de=ne.length))switch(te===0&&(I=ne.charCodeAt(0),I===45||96<I&&123>I)&&(de=(ne=ne.replace(" ",":")).length),0<Q&&(De=c(1,ne,V,B,E,K,ue.length,U,w,U))!==void 0&&(de=(ne=De.trim()).length)===0&&(ne="\0\0"),I=ne.charCodeAt(0),S=ne.charCodeAt(1),I){case 0:break;case 64:if(S===105||S===99){_e+=ne+X.charAt(H);break}default:ne.charCodeAt(de-1)!==58&&(ue+=o(ne,I,S,ne.charCodeAt(2)))}fe=ie=te=I=0,ne="",S=X.charCodeAt(++H)}}switch(S){case 13:case 10:v===47?v=0:1+I===0&&U!==107&&0<ne.length&&(ie=1,ne+="\0"),0<Q*se&&c(0,ne,V,B,E,K,ue.length,U,w,U),K=1,E++;break;case 59:case 125:if(v+z+Y+F===0){K++;break}default:switch(K++,ce=X.charAt(H),S){case 9:case 32:if(z+F+v===0)switch(R){case 44:case 58:case 9:case 32:ce="";break;default:S!==32&&(ce=" ")}break;case 0:ce="\\0";break;case 12:ce="\\f";break;case 11:ce="\\v";break;case 38:z+v+F===0&&(ie=fe=1,ce="\f"+ce);break;case 108:if(z+v+F+_===0&&0<te)switch(H-te){case 2:R===112&&X.charCodeAt(H-3)===58&&(_=R);case 8:L===111&&(_=L)}break;case 58:z+v+F===0&&(te=H);break;case 44:v+Y+z+F===0&&(ie=1,ce+="\r");break;case 34:case 39:v===0&&(z=z===S?0:z===0?S:z);break;case 91:z+v+Y===0&&F++;break;case 93:z+v+Y===0&&F--;break;case 41:z+v+F===0&&Y--;break;case 40:if(z+v+F===0){if(I===0)switch(2*R+3*L){case 533:break;default:I=1}Y++}break;case 64:v+Y+z+F+te+J===0&&(J=1);break;case 42:case 47:if(!(0<z+F+Y))switch(v){case 0:switch(2*S+3*X.charCodeAt(H+1)){case 235:v=47;break;case 220:de=H,v=42}break;case 42:S===47&&R===42&&de+2!==H&&(X.charCodeAt(de+2)===33&&(ue+=X.substring(de,H+1)),ce="",v=0)}}v===0&&(ne+=ce)}L=R,R=S,H++}if(de=ue.length,0<de){if(ie=V,0<Q&&(De=c(2,ue,ie,B,E,K,de,U,w,U),De!==void 0&&(ue=De).length===0))return _e+ue+Se;if(ue=ie.join(",")+"{"+ue+"}",D*_!==0){switch(D!==2||s(ue,2)||(_=0),_){case 111:ue=ue.replace(A,":-moz-$1")+ue;break;case 112:ue=ue.replace(Z,"::-webkit-input-$1")+ue.replace(Z,"::-moz-$1")+ue.replace(Z,":-ms-input-$1")+ue}_=0}}return _e+ue+Se}function t(B,V,X){var U=V.trim().split(m);V=U;var w=U.length,F=B.length;switch(F){case 0:case 1:var v=0;for(B=F===0?"":B[0]+" ";v<w;++v)V[v]=n(B,V[v],X).trim();break;default:var Y=v=0;for(V=[];v<w;++v)for(var z=0;z<F;++z)V[Y++]=n(B[z]+" ",U[v],X).trim()}return V}function n(B,V,X){var U=V.charCodeAt(0);switch(33>U&&(U=(V=V.trim()).charCodeAt(0)),U){case 38:return V.replace(W,"$1"+B.trim());case 58:return B.trim()+V.replace(W,"$1"+B.trim());default:if(0<1*X&&0<V.indexOf("\f"))return V.replace(W,(B.charCodeAt(0)===58?"":"$1")+B.trim())}return B+V}function o(B,V,X,U){var w=B+";",F=2*V+3*X+4*U;if(F===944){B=w.indexOf(":",9)+1;var v=w.substring(B,w.length-1).trim();return v=w.substring(0,B).trim()+v+";",D===1||D===2&&s(v,1)?"-webkit-"+v+v:v}if(D===0||D===2&&!s(w,1))return w;switch(F){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(G,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return v=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+v+"-webkit-"+w+"-ms-flex-pack"+v+w;case 1005:return b.test(w)?w.replace(x,":-webkit-")+w.replace(x,":-moz-")+w:w;case 1e3:switch(v=w.substring(13).trim(),V=v.indexOf("-")+1,v.charCodeAt(0)+v.charCodeAt(V)){case 226:v=w.replace(u,"tb");break;case 232:v=w.replace(u,"tb-rl");break;case 220:v=w.replace(u,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+v+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(V=(w=B).length-10,v=(w.charCodeAt(V)===33?w.substring(0,V):w).substring(B.indexOf(":",7)+1).trim(),F=v.charCodeAt(0)+(v.charCodeAt(7)|0)){case 203:if(111>v.charCodeAt(8))break;case 115:w=w.replace(v,"-webkit-"+v)+";"+w;break;case 207:case 102:w=w.replace(v,"-webkit-"+(102<F?"inline-":"")+"box")+";"+w.replace(v,"-webkit-"+v)+";"+w.replace(v,"-ms-"+v+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return v=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+v+"-ms-flex-"+v+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(T,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(T,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(j.test(B)===!0)return(v=B.substring(B.indexOf(":")+1)).charCodeAt(0)===115?o(B.replace("stretch","fill-available"),V,X,U).replace(":fill-available",":stretch"):w.replace(v,"-webkit-"+v)+w.replace(v,"-moz-"+v.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,X+U===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(M,"$1-webkit-$2")+w}return w}function s(B,V){var X=B.indexOf(V===1?":":"{"),U=B.substring(0,V!==3?X:10);return X=B.substring(X+1,B.length-1),ee(V!==2?U:U.replace(P,"$1"),X,V)}function i(B,V){var X=o(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return X!==V+";"?X.replace(C," or ($1)").substring(4):"("+V+")"}function c(B,V,X,U,w,F,v,Y,z,I){for(var S=0,R=V,L;S<Q;++S)switch(L=O[S].call(l,B,R,X,U,w,F,v,Y,z,I)){case void 0:case!1:case!0:case null:break;default:R=L}if(R!==V)return R}function d(B){switch(B){case void 0:case null:Q=O.length=0;break;default:if(typeof B=="function")O[Q++]=B;else if(typeof B=="object")for(var V=0,X=B.length;V<X;++V)d(B[V]);else se=!!B|0}return d}function a(B){return B=B.prefix,B!==void 0&&(ee=null,B?typeof B!="function"?D=1:(D=2,ee=B):D=0),a}function l(B,V){var X=B;if(33>X.charCodeAt(0)&&(X=X.trim()),oe=X,X=[oe],0<Q){var U=c(-1,V,X,X,E,K,0,0,0,0);U!==void 0&&typeof U=="string"&&(V=U)}var w=r(N,X,V,0,0);return 0<Q&&(U=c(-2,w,X,X,E,K,w.length,0,0,0),U!==void 0&&(w=U)),oe="",_=0,K=E=1,w}var h=/^\0+/g,g=/[\0\r\f]/g,x=/: */g,b=/zoo|gra/,M=/([,: ])(transform)/g,m=/,\r+?/g,W=/([\t\r\n ])*\f?&/g,q=/@(k\w+)\s*(\S*)\s*/,Z=/::(place)/g,A=/:(read-only)/g,u=/[svh]\w+-[tblr]{2}/,y=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,T=/-self|flex-/g,P=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,G=/([^-])(image-set\()/,K=1,E=1,_=0,D=1,N=[],O=[],Q=0,ee=null,se=0,oe="";return l.use=d,l.set=a,e!==void 0&&a(e),l}var Kr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Jr(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var qr=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Cn=Jr(function(e){return qr.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),_t={},Qr={get exports(){return _t},set exports(e){_t=e}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kn;function Rr(){if(kn)return ge;kn=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,a=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,M=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,W=e?Symbol.for("react.responder"):60118,q=e?Symbol.for("react.scope"):60119;function Z(u){if(typeof u=="object"&&u!==null){var y=u.$$typeof;switch(y){case r:switch(u=u.type,u){case d:case a:case n:case s:case o:case h:return u;default:switch(u=u&&u.$$typeof,u){case c:case l:case b:case x:case i:return u;default:return y}}case t:return y}}}function A(u){return Z(u)===a}return ge.AsyncMode=d,ge.ConcurrentMode=a,ge.ContextConsumer=c,ge.ContextProvider=i,ge.Element=r,ge.ForwardRef=l,ge.Fragment=n,ge.Lazy=b,ge.Memo=x,ge.Portal=t,ge.Profiler=s,ge.StrictMode=o,ge.Suspense=h,ge.isAsyncMode=function(u){return A(u)||Z(u)===d},ge.isConcurrentMode=A,ge.isContextConsumer=function(u){return Z(u)===c},ge.isContextProvider=function(u){return Z(u)===i},ge.isElement=function(u){return typeof u=="object"&&u!==null&&u.$$typeof===r},ge.isForwardRef=function(u){return Z(u)===l},ge.isFragment=function(u){return Z(u)===n},ge.isLazy=function(u){return Z(u)===b},ge.isMemo=function(u){return Z(u)===x},ge.isPortal=function(u){return Z(u)===t},ge.isProfiler=function(u){return Z(u)===s},ge.isStrictMode=function(u){return Z(u)===o},ge.isSuspense=function(u){return Z(u)===h},ge.isValidElementType=function(u){return typeof u=="string"||typeof u=="function"||u===n||u===a||u===s||u===o||u===h||u===g||typeof u=="object"&&u!==null&&(u.$$typeof===b||u.$$typeof===x||u.$$typeof===i||u.$$typeof===c||u.$$typeof===l||u.$$typeof===m||u.$$typeof===W||u.$$typeof===q||u.$$typeof===M)},ge.typeOf=Z,ge}var ye={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mn;function eo(){return Mn||(Mn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,a=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,M=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,W=e?Symbol.for("react.responder"):60118,q=e?Symbol.for("react.scope"):60119;function Z(S){return typeof S=="string"||typeof S=="function"||S===n||S===a||S===s||S===o||S===h||S===g||typeof S=="object"&&S!==null&&(S.$$typeof===b||S.$$typeof===x||S.$$typeof===i||S.$$typeof===c||S.$$typeof===l||S.$$typeof===m||S.$$typeof===W||S.$$typeof===q||S.$$typeof===M)}function A(S){if(typeof S=="object"&&S!==null){var R=S.$$typeof;switch(R){case r:var L=S.type;switch(L){case d:case a:case n:case s:case o:case h:return L;default:var J=L&&L.$$typeof;switch(J){case c:case l:case b:case x:case i:return J;default:return R}}case t:return R}}}var u=d,y=a,C=c,T=i,P=r,j=l,G=n,K=b,E=x,_=t,D=s,N=o,O=h,Q=!1;function ee(S){return Q||(Q=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),se(S)||A(S)===d}function se(S){return A(S)===a}function oe(S){return A(S)===c}function B(S){return A(S)===i}function V(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function X(S){return A(S)===l}function U(S){return A(S)===n}function w(S){return A(S)===b}function F(S){return A(S)===x}function v(S){return A(S)===t}function Y(S){return A(S)===s}function z(S){return A(S)===o}function I(S){return A(S)===h}ye.AsyncMode=u,ye.ConcurrentMode=y,ye.ContextConsumer=C,ye.ContextProvider=T,ye.Element=P,ye.ForwardRef=j,ye.Fragment=G,ye.Lazy=K,ye.Memo=E,ye.Portal=_,ye.Profiler=D,ye.StrictMode=N,ye.Suspense=O,ye.isAsyncMode=ee,ye.isConcurrentMode=se,ye.isContextConsumer=oe,ye.isContextProvider=B,ye.isElement=V,ye.isForwardRef=X,ye.isFragment=U,ye.isLazy=w,ye.isMemo=F,ye.isPortal=v,ye.isProfiler=Y,ye.isStrictMode=z,ye.isSuspense=I,ye.isValidElementType=Z,ye.typeOf=A}()),ye}(function(e){process.env.NODE_ENV==="production"?e.exports=Rr():e.exports=eo()})(Qr);var Tt=_t,to={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},no={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ro={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pt={};Pt[Tt.ForwardRef]=ro,Pt[Tt.Memo]=Dn;function $n(e){return Tt.isMemo(e)?Dn:Pt[e.$$typeof]||to}var oo=Object.defineProperty,so=Object.getOwnPropertyNames,En=Object.getOwnPropertySymbols,io=Object.getOwnPropertyDescriptor,ao=Object.getPrototypeOf,_n=Object.prototype;function Tn(e,r,t){if(typeof r!="string"){if(_n){var n=ao(r);n&&n!==_n&&Tn(e,n,t)}var o=so(r);En&&(o=o.concat(En(r)));for(var s=$n(e),i=$n(r),c=0;c<o.length;++c){var d=o[c];if(!no[d]&&!(t&&t[d])&&!(i&&i[d])&&!(s&&s[d])){var a=io(r,d);try{oo(e,d,a)}catch{}}}}return e}var co=Tn;function Te(){return(Te=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Pn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},At=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!lt.typeOf(e)},mt=Object.freeze([]),Ne=Object.freeze({});function Ke(e){return typeof e=="function"}function It(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Ot(e){return e&&typeof e.styledComponentId=="string"}var Je=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Yt=typeof window<"u"&&"HTMLElement"in window,lo=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),uo={},fo=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function ho(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Ie(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(ho.apply(void 0,[fo[e]].concat(t)).trim())}var po=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,i=s;t>=i;)(i<<=1)<0&&Ie(16,""+t);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var c=s;c<i;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(t+1),a=0,l=n.length;a<l;a++)this.tag.insertRule(d,n[a])&&(this.groupSizes[t]++,d++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var i=o;i<s;i++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),i=s+o,c=s;c<i;c++)n+=this.tag.getRule(c)+`/*!sc*/
`;return n},e}(),gt=new Map,yt=new Map,dt=1,vt=function(e){if(gt.has(e))return gt.get(e);for(;yt.has(dt);)dt++;var r=dt++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&Ie(16,""+r),gt.set(e,r),yt.set(r,e),r},mo=function(e){return yt.get(e)},go=function(e,r){r>=dt&&(dt=r+1),gt.set(e,r),yt.set(r,e)},yo="style["+Je+'][data-styled-version="5.3.8"]',vo=new RegExp("^"+Je+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),bo=function(e,r,t){for(var n,o=t.split(","),s=0,i=o.length;s<i;s++)(n=o[s])&&e.registerName(r,n)},xo=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var i=t[o].trim();if(i){var c=i.match(vo);if(c){var d=0|parseInt(c[1],10),a=c[2];d!==0&&(go(a,d),bo(e,a,c[3]),e.getTag().insertRules(d,n)),n.length=0}else n.push(i)}}},wo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},An=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(c){for(var d=c.childNodes,a=d.length;a>=0;a--){var l=d[a];if(l&&l.nodeType===1&&l.hasAttribute(Je))return l}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(Je,"active"),n.setAttribute("data-styled-version","5.3.8");var i=wo();return i&&n.setAttribute("nonce",i),t.insertBefore(n,s),n},So=function(){function e(t){var n=this.element=An(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,i=0,c=s.length;i<c;i++){var d=s[i];if(d.ownerNode===o)return d}Ie(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),Co=function(){function e(t){var n=this.element=An(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ko=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),In=Yt,Mo={isServer:!Yt,useCSSOMInjection:!lo},bt=function(){function e(t,n,o){t===void 0&&(t=Ne),n===void 0&&(n={}),this.options=Te({},Mo,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Yt&&In&&(In=!1,function(s){for(var i=document.querySelectorAll(yo),c=0,d=i.length;c<d;c++){var a=i[c];a&&a.getAttribute(Je)!=="active"&&(xo(s,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(t){return vt(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Te({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,i=n.target,t=o?new ko(i):s?new So(i):new Co(i),new po(t)));var t,n,o,s,i},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(vt(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(vt(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(vt(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",i=0;i<o;i++){var c=mo(i);if(c!==void 0){var d=t.names.get(c),a=n.getGroup(i);if(d&&a&&d.size){var l=Je+".g"+i+'[id="'+c+'"]',h="";d!==void 0&&d.forEach(function(g){g.length>0&&(h+=g+",")}),s+=""+a+l+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),Do=/(a)(d)/gi,On=function(e){return String.fromCharCode(e+(e>25?39:97))};function Lt(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=On(r%52)+t;return(On(r%52)+t).replace(Do,"$1-$2")}var ze=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},Yn=function(e){return ze(5381,e)};function Ln(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(Ke(t)&&!Ot(t))return!1}return!0}var $o=Yn("5.3.8"),Eo=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&Ln(r),this.componentId=t,this.baseHash=ze($o,t),this.baseStyle=n,bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var i=Be(this.rules,r,t,n).join(""),c=Lt(ze(this.baseHash,i)>>>0);if(!t.hasNameForId(o,c)){var d=n(i,"."+c,void 0,o);t.insertRules(o,c,d)}s.push(c),this.staticRulesId=c}else{for(var a=this.rules.length,l=ze(this.baseHash,n.hash),h="",g=0;g<a;g++){var x=this.rules[g];if(typeof x=="string")h+=x,process.env.NODE_ENV!=="production"&&(l=ze(l,x+g));else if(x){var b=Be(x,r,t,n),M=Array.isArray(b)?b.join(""):b;l=ze(l,M+g),h+=M}}if(h){var m=Lt(l>>>0);if(!t.hasNameForId(o,m)){var W=n(h,"."+m,void 0,o);t.insertRules(o,m,W)}s.push(m)}}return s.join(" ")},e}(),_o=/^\s*\/\/.*$/gm,To=[":","[",".","#"];function Po(e){var r,t,n,o,s=e===void 0?Ne:e,i=s.options,c=i===void 0?Ne:i,d=s.plugins,a=d===void 0?mt:d,l=new Ur(c),h=[],g=function(M){function m(W){if(W)try{M(W+"}")}catch{}}return function(W,q,Z,A,u,y,C,T,P,j){switch(W){case 1:if(P===0&&q.charCodeAt(0)===64)return M(q+";"),"";break;case 2:if(T===0)return q+"/*|*/";break;case 3:switch(T){case 102:case 112:return M(Z[0]+q),"";default:return q+(j===0?"/*|*/":"")}case-2:q.split("/*|*/}").forEach(m)}}}(function(M){h.push(M)}),x=function(M,m,W){return m===0&&To.indexOf(W[t.length])!==-1||W.match(o)?M:"."+r};function b(M,m,W,q){q===void 0&&(q="&");var Z=M.replace(_o,""),A=m&&W?W+" "+m+" { "+Z+" }":Z;return r=q,t=m,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),l(W||!m?"":m,A)}return l.use([].concat(a,[function(M,m,W){M===2&&W.length&&W[0].lastIndexOf(t)>0&&(W[0]=W[0].replace(n,x))},g,function(M){if(M===-2){var m=h;return h=[],m}}])),b.hash=a.length?a.reduce(function(M,m){return m.name||Ie(15),ze(M,m.name)},5381).toString():"",b}var Nn=p.createContext();Nn.Consumer;var Fn=p.createContext(),Ao=(Fn.Consumer,new bt),Nt=Po();function Wn(){return p.useContext(Nn)||Ao}function Hn(){return p.useContext(Fn)||Nt}var zn=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=Nt);var i=n.name+s.hash;o.hasNameForId(n.id,i)||o.insertRules(n.id,i,s(n.rules,i,"@keyframes"))},this.toString=function(){return Ie(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=Nt),this.name+r.hash},e}(),Io=/([A-Z])/,Oo=/([A-Z])/g,Yo=/^ms-/,Lo=function(e){return"-"+e.toLowerCase()};function Bn(e){return Io.test(e)?e.replace(Oo,Lo).replace(Yo,"-ms-"):e}var jn=function(e){return e==null||e===!1||e===""};function Be(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],i=0,c=e.length;i<c;i+=1)(o=Be(e[i],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(jn(e))return"";if(Ot(e))return"."+e.styledComponentId;if(Ke(e)){if(typeof(a=e)!="function"||a.prototype&&a.prototype.isReactComponent||!r)return e;var d=e(r);return process.env.NODE_ENV!=="production"&&lt.isElement(d)&&console.warn(It(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Be(d,r,t,n)}var a;return e instanceof zn?t?(e.inject(t,n),e.getName(n)):e:At(e)?function l(h,g){var x,b,M=[];for(var m in h)h.hasOwnProperty(m)&&!jn(h[m])&&(Array.isArray(h[m])&&h[m].isCss||Ke(h[m])?M.push(Bn(m)+":",h[m],";"):At(h[m])?M.push.apply(M,l(h[m],m)):M.push(Bn(m)+": "+(x=m,(b=h[m])==null||typeof b=="boolean"||b===""?"":typeof b!="number"||b===0||x in Kr?String(b).trim():b+"px")+";"));return g?[g+" {"].concat(M,["}"]):M}(e):e.toString()}var Zn=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function xt(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return Ke(e)||At(e)?Zn(Be(Pn(mt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:Zn(Be(Pn(e,t)))}var Vn=/invalid hook call/i,wt=new Set,Gn=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(Vn.test(s))o=!1,wt.delete(t);else{for(var i=arguments.length,c=new Array(i>1?i-1:0),d=1;d<i;d++)c[d-1]=arguments[d];n.apply(void 0,[s].concat(c))}},p.useRef(),o&&!wt.has(t)&&(console.warn(t),wt.add(t))}catch(s){Vn.test(s.message)&&wt.delete(t)}finally{console.error=n}}},Xn=function(e,r,t){return t===void 0&&(t=Ne),e.theme!==t.theme&&e.theme||r||t.theme},No=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Fo=/(^-|-$)/g;function Ft(e){return e.replace(No,"-").replace(Fo,"")}var Wt=function(e){return Lt(Yn(e)>>>0)};function St(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Ht=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Wo=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ho(e,r,t){var n=e[t];Ht(r)&&Ht(n)?Un(n,r):e[t]=r}function Un(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var i=s[o];if(Ht(i))for(var c in i)Wo(c)&&Ho(e,i[c],c)}return e}var qe=p.createContext();qe.Consumer;function zo(e){var r=p.useContext(qe),t=p.useMemo(function(){return function(n,o){if(!n)return Ie(14);if(Ke(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Ie(7)}return Array.isArray(n)||typeof n!="object"?Ie(8):o?Te({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?p.createElement(qe.Provider,{value:t},e.children):null}var zt={};function Kn(e,r,t){var n=Ot(e),o=!St(e),s=r.attrs,i=s===void 0?mt:s,c=r.componentId,d=c===void 0?function(q,Z){var A=typeof q!="string"?"sc":Ft(q);zt[A]=(zt[A]||0)+1;var u=A+"-"+Wt("5.3.8"+A+zt[A]);return Z?Z+"-"+u:u}(r.displayName,r.parentComponentId):c,a=r.displayName,l=a===void 0?function(q){return St(q)?"styled."+q:"Styled("+It(q)+")"}(e):a,h=r.displayName&&r.componentId?Ft(r.displayName)+"-"+r.componentId:r.componentId||d,g=n&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,x=r.shouldForwardProp;n&&e.shouldForwardProp&&(x=r.shouldForwardProp?function(q,Z,A){return e.shouldForwardProp(q,Z,A)&&r.shouldForwardProp(q,Z,A)}:e.shouldForwardProp);var b,M=new Eo(t,h,n?e.componentStyle:void 0),m=M.isStatic&&i.length===0,W=function(q,Z){return function(A,u,y,C){var T=A.attrs,P=A.componentStyle,j=A.defaultProps,G=A.foldedComponentIds,K=A.shouldForwardProp,E=A.styledComponentId,_=A.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(E);var D=function(U,w,F){U===void 0&&(U=Ne);var v=Te({},w,{theme:U}),Y={};return F.forEach(function(z){var I,S,R,L=z;for(I in Ke(L)&&(L=L(v)),L)v[I]=Y[I]=I==="className"?(S=Y[I],R=L[I],S&&R?S+" "+R:S||R):L[I]}),[v,Y]}(Xn(u,p.useContext(qe),j)||Ne,u,T),N=D[0],O=D[1],Q=function(U,w,F,v){var Y=Wn(),z=Hn(),I=w?U.generateAndInjectStyles(Ne,Y,z):U.generateAndInjectStyles(F,Y,z);return process.env.NODE_ENV!=="production"&&p.useDebugValue(I),process.env.NODE_ENV!=="production"&&!w&&v&&v(I),I}(P,C,N,process.env.NODE_ENV!=="production"?A.warnTooManyClasses:void 0),ee=y,se=O.$as||u.$as||O.as||u.as||_,oe=St(se),B=O!==u?Te({},u,{},O):u,V={};for(var X in B)X[0]!=="$"&&X!=="as"&&(X==="forwardedAs"?V.as=B[X]:(K?K(X,Cn,se):!oe||Cn(X))&&(V[X]=B[X]));return u.style&&O.style!==u.style&&(V.style=Te({},u.style,{},O.style)),V.className=Array.prototype.concat(G,E,Q!==E?Q:null,u.className,O.className).filter(Boolean).join(" "),V.ref=ee,p.createElement(se,V)}(b,q,Z,m)};return W.displayName=l,(b=p.forwardRef(W)).attrs=g,b.componentStyle=M,b.displayName=l,b.shouldForwardProp=x,b.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):mt,b.styledComponentId=h,b.target=n?e.target:e,b.withComponent=function(q){var Z=r.componentId,A=function(y,C){if(y==null)return{};var T,P,j={},G=Object.keys(y);for(P=0;P<G.length;P++)T=G[P],C.indexOf(T)>=0||(j[T]=y[T]);return j}(r,["componentId"]),u=Z&&Z+"-"+(St(q)?q:Ft(It(q)));return Kn(q,Te({},A,{attrs:g,componentId:u}),t)},Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=n?Un({},e.defaultProps,q):q}}),process.env.NODE_ENV!=="production"&&(Gn(l,h),b.warnTooManyClasses=function(q,Z){var A={},u=!1;return function(y){if(!u&&(A[y]=!0,Object.keys(A).length>=200)){var C=Z?' with the id of "'+Z+'"':"";console.warn("Over 200 classes were generated for component "+q+C+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),u=!0,A={}}}}(l,h)),b.toString=function(){return"."+b.styledComponentId},o&&co(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),b}var Bt=function(e){return function r(t,n,o){if(o===void 0&&(o=Ne),!lt.isValidElementType(n))return Ie(1,String(n));var s=function(){return t(n,o,xt.apply(void 0,arguments))};return s.withConfig=function(i){return r(t,n,Te({},o,{},i))},s.attrs=function(i){return r(t,n,Te({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},s}(Kn,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Bt[e]=Bt(e)});var Bo=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ln(t),bt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var i=s(Be(this.rules,n,o,s).join(""),""),c=this.componentId+t;o.insertRules(c,c,i)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&bt.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function jo(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=xt.apply(void 0,[e].concat(t)),s="sc-global-"+Wt(JSON.stringify(o)),i=new Bo(o,s);function c(a){var l=Wn(),h=Hn(),g=p.useContext(qe),x=p.useRef(l.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(a.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(b){return typeof b=="string"&&b.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),l.server&&d(x,a,l,g,h),p.useLayoutEffect(function(){if(!l.server)return d(x,a,l,g,h),function(){return i.removeStyles(x,l)}},[x,a,l,g,h]),null}function d(a,l,h,g,x){if(i.isStatic)i.renderStyles(a,uo,h,x);else{var b=Te({},l,{theme:Xn(l,g,c.defaultProps)});i.renderStyles(a,b,h,x)}}return process.env.NODE_ENV!=="production"&&Gn(s),p.memo(c)}function Ct(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=xt.apply(void 0,[e].concat(t)).join(""),s=Wt(o);return new zn(s,o)}var je=function(){return p.useContext(qe)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const k=Bt,ut="reactSchedulerOutsideWrapper",Zo=jo`

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
`,Vo={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},Go={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},Ze=`
margin: 0;
padding: 0;
`,Qe=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;k.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const ve=50,Oe=24,Re=16,Ve=40,et=Ve+Re+Oe,tt=84,he=56,$e=196,Ee=12,we=50,nt=24,ft=16,jt=40,Xo=nt+ft+jt,Jn=24,qn=52,Pe={topRow:"600 14px Inter",middleRow:"400 10px Inter",bottomRow:{name:"600 14px Inter",number:"600 10px Inter",hoursInDay:"400 9px Inter"}},rt=3,Uo=1.6,Ko=4.5,Zt=12,kt=24,Jo="reactSchedulerCanvasHeaderWrapper",Qn="reactSchedulerCanvasWrapper",Ge=ut,qo=4,Vt=48,Fe=5,Qo=40,Rn=8,Gt=Oe/2+2,er=Re/2+Oe+1,tr=2,be=60,Me=21;var Xe={},Ro={get exports(){return Xe},set exports(e){Xe=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",i="second",c="minute",d="hour",a="day",l="week",h="month",g="quarter",x="year",b="date",M="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,W=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(E){var _=["th","st","nd","rd"],D=E%100;return"["+E+(_[(D-20)%10]||_[D]||_[0])+"]"}},Z=function(E,_,D){var N=String(E);return!N||N.length>=_?E:""+Array(_+1-N.length).join(D)+E},A={s:Z,z:function(E){var _=-E.utcOffset(),D=Math.abs(_),N=Math.floor(D/60),O=D%60;return(_<=0?"+":"-")+Z(N,2,"0")+":"+Z(O,2,"0")},m:function E(_,D){if(_.date()<D.date())return-E(D,_);var N=12*(D.year()-_.year())+(D.month()-_.month()),O=_.clone().add(N,h),Q=D-O<0,ee=_.clone().add(N+(Q?-1:1),h);return+(-(N+(D-O)/(Q?O-ee:ee-O))||0)},a:function(E){return E<0?Math.ceil(E)||0:Math.floor(E)},p:function(E){return{M:h,y:x,w:l,d:a,D:b,h:d,m:c,s:i,ms:s,Q:g}[E]||String(E||"").toLowerCase().replace(/s$/,"")},u:function(E){return E===void 0}},u="en",y={};y[u]=q;var C=function(E){return E instanceof G},T=function E(_,D,N){var O;if(!_)return u;if(typeof _=="string"){var Q=_.toLowerCase();y[Q]&&(O=Q),D&&(y[Q]=D,O=Q);var ee=_.split("-");if(!O&&ee.length>1)return E(ee[0])}else{var se=_.name;y[se]=_,O=se}return!N&&O&&(u=O),O||!N&&u},P=function(E,_){if(C(E))return E.clone();var D=typeof _=="object"?_:{};return D.date=E,D.args=arguments,new G(D)},j=A;j.l=T,j.i=C,j.w=function(E,_){return P(E,{locale:_.$L,utc:_.$u,x:_.$x,$offset:_.$offset})};var G=function(){function E(D){this.$L=T(D.locale,null,!0),this.parse(D)}var _=E.prototype;return _.parse=function(D){this.$d=function(N){var O=N.date,Q=N.utc;if(O===null)return new Date(NaN);if(j.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var ee=O.match(m);if(ee){var se=ee[2]-1||0,oe=(ee[7]||"0").substring(0,3);return Q?new Date(Date.UTC(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)):new Date(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)}}return new Date(O)}(D),this.$x=D.x||{},this.init()},_.init=function(){var D=this.$d;this.$y=D.getFullYear(),this.$M=D.getMonth(),this.$D=D.getDate(),this.$W=D.getDay(),this.$H=D.getHours(),this.$m=D.getMinutes(),this.$s=D.getSeconds(),this.$ms=D.getMilliseconds()},_.$utils=function(){return j},_.isValid=function(){return this.$d.toString()!==M},_.isSame=function(D,N){var O=P(D);return this.startOf(N)<=O&&O<=this.endOf(N)},_.isAfter=function(D,N){return P(D)<this.startOf(N)},_.isBefore=function(D,N){return this.endOf(N)<P(D)},_.$g=function(D,N,O){return j.u(D)?this[N]:this.set(O,D)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(D,N){var O=this,Q=!!j.u(N)||N,ee=j.p(D),se=function(v,Y){var z=j.w(O.$u?Date.UTC(O.$y,Y,v):new Date(O.$y,Y,v),O);return Q?z:z.endOf(a)},oe=function(v,Y){return j.w(O.toDate()[v].apply(O.toDate("s"),(Q?[0,0,0,0]:[23,59,59,999]).slice(Y)),O)},B=this.$W,V=this.$M,X=this.$D,U="set"+(this.$u?"UTC":"");switch(ee){case x:return Q?se(1,0):se(31,11);case h:return Q?se(1,V):se(0,V+1);case l:var w=this.$locale().weekStart||0,F=(B<w?B+7:B)-w;return se(Q?X-F:X+(6-F),V);case a:case b:return oe(U+"Hours",0);case d:return oe(U+"Minutes",1);case c:return oe(U+"Seconds",2);case i:return oe(U+"Milliseconds",3);default:return this.clone()}},_.endOf=function(D){return this.startOf(D,!1)},_.$set=function(D,N){var O,Q=j.p(D),ee="set"+(this.$u?"UTC":""),se=(O={},O[a]=ee+"Date",O[b]=ee+"Date",O[h]=ee+"Month",O[x]=ee+"FullYear",O[d]=ee+"Hours",O[c]=ee+"Minutes",O[i]=ee+"Seconds",O[s]=ee+"Milliseconds",O)[Q],oe=Q===a?this.$D+(N-this.$W):N;if(Q===h||Q===x){var B=this.clone().set(b,1);B.$d[se](oe),B.init(),this.$d=B.set(b,Math.min(this.$D,B.daysInMonth())).$d}else se&&this.$d[se](oe);return this.init(),this},_.set=function(D,N){return this.clone().$set(D,N)},_.get=function(D){return this[j.p(D)]()},_.add=function(D,N){var O,Q=this;D=Number(D);var ee=j.p(N),se=function(V){var X=P(Q);return j.w(X.date(X.date()+Math.round(V*D)),Q)};if(ee===h)return this.set(h,this.$M+D);if(ee===x)return this.set(x,this.$y+D);if(ee===a)return se(1);if(ee===l)return se(7);var oe=(O={},O[c]=n,O[d]=o,O[i]=t,O)[ee]||1,B=this.$d.getTime()+D*oe;return j.w(B,this)},_.subtract=function(D,N){return this.add(-1*D,N)},_.format=function(D){var N=this,O=this.$locale();if(!this.isValid())return O.invalidDate||M;var Q=D||"YYYY-MM-DDTHH:mm:ssZ",ee=j.z(this),se=this.$H,oe=this.$m,B=this.$M,V=O.weekdays,X=O.months,U=function(Y,z,I,S){return Y&&(Y[z]||Y(N,Q))||I[z].slice(0,S)},w=function(Y){return j.s(se%12||12,Y,"0")},F=O.meridiem||function(Y,z,I){var S=Y<12?"AM":"PM";return I?S.toLowerCase():S},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:B+1,MM:j.s(B+1,2,"0"),MMM:U(O.monthsShort,B,X,3),MMMM:U(X,B),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:U(O.weekdaysMin,this.$W,V,2),ddd:U(O.weekdaysShort,this.$W,V,3),dddd:V[this.$W],H:String(se),HH:j.s(se,2,"0"),h:w(1),hh:w(2),a:F(se,oe,!0),A:F(se,oe,!1),m:String(oe),mm:j.s(oe,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:ee};return Q.replace(W,function(Y,z){return z||v[Y]||ee.replace(":","")})},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(D,N,O){var Q,ee=j.p(N),se=P(D),oe=(se.utcOffset()-this.utcOffset())*n,B=this-se,V=j.m(this,se);return V=(Q={},Q[x]=V/12,Q[h]=V,Q[g]=V/3,Q[l]=(B-oe)/6048e5,Q[a]=(B-oe)/864e5,Q[d]=B/o,Q[c]=B/n,Q[i]=B/t,Q)[ee]||B,O?V:j.a(V)},_.daysInMonth=function(){return this.endOf(h).$D},_.$locale=function(){return y[this.$L]},_.locale=function(D,N){if(!D)return this.$L;var O=this.clone(),Q=T(D,N,!0);return Q&&(O.$L=Q),O},_.clone=function(){return j.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},E}(),K=G.prototype;return P.prototype=K,[["$ms",s],["$s",i],["$m",c],["$H",d],["$W",a],["$M",h],["$y",x],["$D",b]].forEach(function(E){K[E[1]]=function(_){return this.$g(_,E[0],E[1])}}),P.extend=function(E,_){return E.$i||(E(_,G,P),E.$i=!0),P},P.locale=T,P.isDayjs=C,P.unix=function(E){return P(1e3*E)},P.en=y[u],P.Ls=y,P.p={},P})})(Ro);const $=Xe,nr=e=>e%4===0&&e%100>0||e%400===0?366:365,Xt=e=>{const r=e.day();return r!==0&&r!==6},rr=(e,r)=>$(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),or=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:Xt(e),isCurrentDay:e.isSame($(),"day"),year:parseInt(e.format("YYYY"))}),Ut=(e,r,t,n,o,s,i)=>{e.strokeStyle=i.colors.border,s?e.fillStyle=i.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=i.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,he),e.strokeRect(r+.5,t+.5,n,he)},Kt=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Me},es=(e,r,t,n,o,s=[])=>{for(let i=0;i<r;i++){const c=Kt(i,s);for(let d=0;d<=t;d++){const a=$(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(d,"days"),l=a.isSame($(),"day");Ut(e,d*ve,i*he+c,ve,Xt(a),l,o)}}},ts=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},ns=(e,r,t,n,o,s=[])=>{let i=0,c=-(n.dayOfMonth-1)*Ee;const d=r*he+s.length*Me;for(let a=0;a<=t;a++){const h=$(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(a,"weeks").isSame($(),"week");for(let g=0;g<r;g++){const x=Kt(g,s);Ut(e,i,g*he+x,tt,!0,h,o)}i+=tt}for(let a=0;a<t;a++){const l=rr(n,a)*Ee;ts(e,c,d,o),c+=l}},rs=(e,r,t,n,o,s=[])=>{const i=$(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let c=0;c<r;c++){const d=Kt(c,s);for(let a=0;a<=t;a++){let l;a===Math.floor(t/2)?l=$():a>Math.floor(t/2)?l=$().add(a-Math.floor(t/2),"hours"):l=$().subtract(Math.floor(t/2)-c,"hours");const h=i.isSame($(),"day")&&l.isSame($(),"hour");Ut(e,a*we+we/2-.5,c*he+d,we,Xt(l),h,o)}}},os=(e,r,t,n)=>{const o=t*he+r*Me,s=e.canvas.width,i=o+Me/2;e.fillStyle=n.mode==="dark"?n.colors.primary+"80":n.colors.primary,e.fillRect(0,o,s,Me),e.strokeStyle=n.colors.border,e.lineWidth=1,e.setLineDash([]),e.beginPath(),e.moveTo(0,i+.5),e.lineTo(s,i+.5),e.stroke()},ss=(e,r,t,n,o,s,i=[])=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(Qn)){switch(r){case 0:ns(e,t,n,o,s,i);break;case 1:es(e,t,n,o,s,i);break;case 2:rs(e,t,n,o,s,i);break}for(let d=0;d<i.length;d++)os(e,d,i[d],s)}};var Jt={},is={get exports(){return Jt},set exports(e){Jt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t="week",n="year";return function(o,s,i){var c=s.prototype;c.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var a=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var l=i(this).startOf(n).add(1,n).date(a),h=i(this).endOf(t);if(l.isBefore(h))return 1}var g=i(this).startOf(n).date(a).startOf(t).subtract(1,"millisecond"),x=this.diff(g,t,!0);return x<0?i(this).startOf("week").week():Math.ceil(x)},c.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(is);const as=Jt;var qt={},cs={get exports(){return qt},set exports(e){qt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var i=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?i:this.add(s-i,"day")}}})})(cs);const ls=qt;var Qt={},ds={get exports(){return Qt},set exports(e){Qt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t="day";return function(n,o,s){var i=function(a){return a.add(4-a.isoWeekday(),t)},c=o.prototype;c.isoWeekYear=function(){return i(this).year()},c.isoWeek=function(a){if(!this.$utils().u(a))return this.add(7*(a-this.isoWeek()),t);var l,h,g,x,b=i(this),M=(l=this.isoWeekYear(),h=this.$u,g=(h?s.utc:s)().year(l).startOf("year"),x=4-g.isoWeekday(),g.isoWeekday()>4&&(x+=7),g.add(x,t));return b.diff(M,"week")+1},c.isoWeekday=function(a){return this.$utils().u(a)?this.day()||7:this.day(this.day()%7?a:a-7)};var d=c.startOf;c.startOf=function(a,l){var h=this.$utils(),g=!!h.u(l)||l;return h.p(a)==="isoweek"?g?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(a,l)}}})})(ds);const us=Qt;var Rt={},fs={get exports(){return Rt},set exports(e){Rt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n,o){n.prototype.isBetween=function(s,i,c,d){var a=o(s),l=o(i),h=(d=d||"()")[0]==="(",g=d[1]===")";return(h?this.isAfter(a,c):!this.isBefore(a,c))&&(g?this.isBefore(l,c):!this.isAfter(l,c))||(h?this.isBefore(a,c):!this.isAfter(a,c))&&(g?this.isAfter(l,c):!this.isBefore(l,c))}}})})(fs);const hs=Rt;var en={},ps={get exports(){return en},set exports(e){en=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t,n,o=1e3,s=6e4,i=36e5,c=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,g={years:a,months:l,days:c,hours:i,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},x=function(u){return u instanceof A},b=function(u,y,C){return new A(u,C,y.$l)},M=function(u){return n.p(u)+"s"},m=function(u){return u<0},W=function(u){return m(u)?Math.ceil(u):Math.floor(u)},q=function(u){return Math.abs(u)},Z=function(u,y){return u?m(u)?{negative:!0,format:""+q(u)+y}:{negative:!1,format:""+u+y}:{negative:!1,format:""}},A=function(){function u(C,T,P){var j=this;if(this.$d={},this.$l=P,C===void 0&&(this.$ms=0,this.parseFromMilliseconds()),T)return b(C*g[M(T)],this);if(typeof C=="number")return this.$ms=C,this.parseFromMilliseconds(),this;if(typeof C=="object")return Object.keys(C).forEach(function(E){j.$d[M(E)]=C[E]}),this.calMilliseconds(),this;if(typeof C=="string"){var G=C.match(h);if(G){var K=G.slice(2).map(function(E){return E!=null?Number(E):0});return this.$d.years=K[0],this.$d.months=K[1],this.$d.weeks=K[2],this.$d.days=K[3],this.$d.hours=K[4],this.$d.minutes=K[5],this.$d.seconds=K[6],this.calMilliseconds(),this}}return this}var y=u.prototype;return y.calMilliseconds=function(){var C=this;this.$ms=Object.keys(this.$d).reduce(function(T,P){return T+(C.$d[P]||0)*g[P]},0)},y.parseFromMilliseconds=function(){var C=this.$ms;this.$d.years=W(C/a),C%=a,this.$d.months=W(C/l),C%=l,this.$d.days=W(C/c),C%=c,this.$d.hours=W(C/i),C%=i,this.$d.minutes=W(C/s),C%=s,this.$d.seconds=W(C/o),C%=o,this.$d.milliseconds=C},y.toISOString=function(){var C=Z(this.$d.years,"Y"),T=Z(this.$d.months,"M"),P=+this.$d.days||0;this.$d.weeks&&(P+=7*this.$d.weeks);var j=Z(P,"D"),G=Z(this.$d.hours,"H"),K=Z(this.$d.minutes,"M"),E=this.$d.seconds||0;this.$d.milliseconds&&(E+=this.$d.milliseconds/1e3);var _=Z(E,"S"),D=C.negative||T.negative||j.negative||G.negative||K.negative||_.negative,N=G.format||K.format||_.format?"T":"",O=(D?"-":"")+"P"+C.format+T.format+j.format+N+G.format+K.format+_.format;return O==="P"||O==="-P"?"P0D":O},y.toJSON=function(){return this.toISOString()},y.format=function(C){var T=C||"YYYY-MM-DDTHH:mm:ss",P={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return T.replace(d,function(j,G){return G||String(P[j])})},y.as=function(C){return this.$ms/g[M(C)]},y.get=function(C){var T=this.$ms,P=M(C);return P==="milliseconds"?T%=1e3:T=P==="weeks"?W(T/g[P]):this.$d[P],T===0?0:T},y.add=function(C,T,P){var j;return j=T?C*g[M(T)]:x(C)?C.$ms:b(C,this).$ms,b(this.$ms+j*(P?-1:1),this)},y.subtract=function(C,T){return this.add(C,T,!0)},y.locale=function(C){var T=this.clone();return T.$l=C,T},y.clone=function(){return b(this.$ms,this)},y.humanize=function(C){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!C)},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},u}();return function(u,y,C){t=C,n=C().$utils(),C.duration=function(j,G){var K=C.locale();return b(j,{$l:K},G)},C.isDuration=x;var T=y.prototype.add,P=y.prototype.subtract;y.prototype.add=function(j,G){return x(j)&&(j=j.asMilliseconds()),T.bind(this)(j,G)},y.prototype.subtract=function(j,G){return x(j)&&(j=j.asMilliseconds()),P.bind(this)(j,G)}}})})(ps);const ms=en;var gs="Expected a function",sr=0/0,ys="[object Symbol]",vs=/^\s+|\s+$/g,bs=/^[-+]0x[0-9a-f]+$/i,xs=/^0b[01]+$/i,ws=/^0o[0-7]+$/i,Ss=parseInt,Cs=typeof xe=="object"&&xe&&xe.Object===Object&&xe,ks=typeof self=="object"&&self&&self.Object===Object&&self,Ms=Cs||ks||Function("return this")(),Ds=Object.prototype,$s=Ds.toString,Es=Math.max,_s=Math.min,tn=function(){return Ms.Date.now()};function Ts(e,r,t){var n,o,s,i,c,d,a=0,l=!1,h=!1,g=!0;if(typeof e!="function")throw new TypeError(gs);r=ir(r)||0,nn(t)&&(l=!!t.leading,h="maxWait"in t,s=h?Es(ir(t.maxWait)||0,r):s,g="trailing"in t?!!t.trailing:g);function x(y){var C=n,T=o;return n=o=void 0,a=y,i=e.apply(T,C),i}function b(y){return a=y,c=setTimeout(W,r),l?x(y):i}function M(y){var C=y-d,T=y-a,P=r-C;return h?_s(P,s-T):P}function m(y){var C=y-d,T=y-a;return d===void 0||C>=r||C<0||h&&T>=s}function W(){var y=tn();if(m(y))return q(y);c=setTimeout(W,M(y))}function q(y){return c=void 0,g&&n?x(y):(n=o=void 0,i)}function Z(){c!==void 0&&clearTimeout(c),a=0,n=d=o=c=void 0}function A(){return c===void 0?i:q(tn())}function u(){var y=tn(),C=m(y);if(n=arguments,o=this,d=y,C){if(c===void 0)return b(d);if(h)return c=setTimeout(W,r),x(d)}return c===void 0&&(c=setTimeout(W,r)),i}return u.cancel=Z,u.flush=A,u}function nn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function Ps(e){return!!e&&typeof e=="object"}function As(e){return typeof e=="symbol"||Ps(e)&&$s.call(e)==ys}function ir(e){if(typeof e=="number")return e;if(As(e))return sr;if(nn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=nn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(vs,"");var t=xs.test(e);return t||ws.test(e)?Ss(e.slice(2),t?2:8):bs.test(e)?sr:+e}var ot=Ts;const Mt=[0,1,2];var ht=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(ht||{});const ar=e=>Mt.includes(e),st=e=>{var n;const t=(((n=document.getElementById(Ge))==null?void 0:n.clientWidth)||0)-$e;switch(e){case 1:return Math.ceil(t/ve)*rt;case 2:return Math.ceil(t/we)*rt;default:return Math.ceil(t/tt)*rt}},Is=e=>st(e)/rt,rn=(e,r)=>{const t=st(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},Os=(e,r)=>{const t=rn(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},on=()=>{var t;return((((t=document.getElementById(Ge))==null?void 0:t.clientWidth)||0)-$e)*rt},cr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:$(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});$.extend(as),$.extend(ls),$.extend(us),$.extend(hs),$.extend(ms);const Ys=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=$(),onRangeChange:s,handleToggleDisplayActiveUnits:i,onClearFilterData:c})=>{const{zoom:d,maxRecordsPerPage:a=50}=n,[l,h]=p.useState(d),[g,x]=p.useState($()),[b,M]=p.useState(!1),[m,W]=p.useState(st(l)),q=Mt[l]!==Mt[Mt.length-1],Z=l!==0,A=p.useMemo(()=>Os(g,l),[g,l]),u=rn(g,l).startDate,y=$(u).dayOfYear(),C=or(u),T=p.useRef(null),[P,j]=p.useState([{x:0,y:0}]),G=p.useCallback((U,w="auto")=>{var v,Y,z,I;const F=on();switch(U){case"back":return(v=T.current)==null?void 0:v.scrollTo({behavior:w,left:F/3});case"forward":return(Y=T.current)==null?void 0:Y.scrollTo({behavior:w,left:F/3});case"middle":{const S=F/rt/4;return(z=T.current)==null?void 0:z.scrollTo({behavior:w,left:F/2-S})}default:return(I=T.current)==null?void 0:I.scrollTo({behavior:w,left:F/2})}},[]),K=U=>{j(U)},E=p.useCallback(U=>{const w=Is(l);let F;switch(l){case 0:F=w*7;break;case 1:F=w;break;case 2:F=Math.ceil(w/kt);break}ot(()=>{switch(U){case"back":x(Y=>Y.subtract(F,"days"));break;case"forward":x(Y=>Y.add(F,"days"));break;case"middle":x($());break}s==null||s(A)},300)()},[s,A,l]);p.useEffect(()=>{T.current=document.getElementById(Ge),W(st(l))},[l]),p.useEffect(()=>{const U=()=>W(st(l));return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[l]),p.useEffect(()=>{s==null||s(A)},[s,A]),p.useEffect(()=>{M(!1)},[o]),p.useEffect(()=>{b||(G("middle"),M(!0),x(o))},[o,b,G]);const _=()=>{t||(x(U=>l===2?U.add(Jn,"hours"):U.add(tr,"weeks")),s==null||s(A))},D=p.useCallback(()=>{t||(E("forward"),ot(()=>{G("forward")},500)())},[t,E,G]),N=()=>{t||(x(U=>l===2?U.subtract(Jn,"hours"):U.subtract(tr,"weeks")),s==null||s(A))},O=p.useCallback(()=>{!b||t||(E("back"),ot(()=>{G("back")},500)())},[b,t,E,G]),Q=p.useCallback(()=>{t||(E("middle"),ot(()=>{G("middle","smooth")},300)())},[t,E,G]),ee=p.useCallback(U=>{if(t)return;const w=$(U).startOf("day");w.isValid()&&(x(w),s==null||s(A),setTimeout(()=>{G("middle","smooth")},300))},[t,G,s,A]),se=()=>B(l+1),oe=()=>B(l-1),B=U=>{ar(U)&&(h(U),W(st(U)),s==null||s(A))},V=()=>i==null?void 0:i(),{Provider:X}=cr;return f.jsx(X,{value:{data:e,config:n,handleGoNext:_,handleScrollNext:D,handleGoPrev:N,handleScrollPrev:O,handleGoToday:Q,goToDate:ee,zoomIn:se,zoomOut:oe,zoom:l,isNextZoom:q,isPrevZoom:Z,date:g,isLoading:t,cols:m,startDate:C,dayOfYear:y,toggleDisplayActiveUnits:V,tilesCoords:P,updateTilesCoords:K,recordsThreshold:a,onClearFilterData:c},children:r})},We=()=>p.useContext(cr),lr=(e,r,t)=>{e.canvas.width=r*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=r+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},dr=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*he+n*Me;if(e>=s+Me)n++;else if(e>=s)return o*he+n*Me-n*Me}return t-n*Me},Ls=5,ur=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>Ls},pt=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},Ns=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:i={},gridRef:c,separatorRowIndices:d=[]})=>{const a=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(F=>({...F,data:[F.data]})):r:e,{enabled:l=!0,isDraggable:h,resourceOnly:g=!1,isValidDrop:x}=i,[b,M]=p.useState("idle"),[m,W]=p.useState(null),[q,Z]=p.useState({x:0,y:0}),[A,u]=p.useState({width:0,height:48}),[y,C]=p.useState(null),[T,P]=p.useState(!0),j=p.useRef({x:0,y:0}),G=p.useRef({x:0,y:0}),K=p.useRef({x:0,y:0}),E=p.useRef(null),_=p.useRef(null),D=p.useRef(0),N=p.useRef(null),O=p.useCallback(F=>!l||F.draggable===!1?!1:h?h(F):!0,[l,h]),Q=p.useCallback((F,v)=>{const Y=dr(v,d),z=Math.floor(Y/he);let I;switch(t){case 0:I=Ee*7;break;case 1:I=ve;break;case 2:I=we;break;default:I=ve}const S=Math.floor(F/I);let R;const L=$().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:R=L.add(S*7,"days").toDate();break;case 1:R=L.add(S,"days").toDate();break;case 2:R=L.add(S,"hours").toDate();break;default:R=L.toDate()}return{snappedDate:R,snappedResourceIndex:z}},[t,n,d]),ee=p.useCallback((F,v,Y,z)=>{const I=[],S=v.getTime(),R=Y.getTime(),L=a.find(te=>te.id===z);if(!L)return I;const J=[];for(const te of L.data)Array.isArray(te)?J.push(...te):J.push(te);for(const te of J){if(te.segmentId===F.segmentId)continue;const H=te.startDate.getTime(),ie=te.endDate.getTime();if(S>=H&&S<ie||R>H&&R<=ie||S<=H&&R>=ie){const de=new Date(Math.max(S,H)),ae=new Date(Math.min(R,ie)),le=ae.getTime()-de.getTime();I.push({event:te,conflictStart:de,conflictEnd:ae,overlapDuration:le})}}return I},[a]),se=p.useCallback((F,v,Y,z)=>{const I=[],S=v.getTime(),R=Y.getTime(),L=$(v).format("YYYY-MM-DD"),J=a.find(H=>H.id===z);if(!J)return I;const te=[];for(const H of J.data)Array.isArray(H)?te.push(...H):te.push(H);for(const H of te){if(H.segmentId===F.segmentId)continue;const ie=H.startDate.getTime(),fe=H.endDate.getTime(),de=$(H.startDate).format("YYYY-MM-DD"),ae=$(H.endDate).format("YYYY-MM-DD"),le=$(Y).format("YYYY-MM-DD");if(!(de===L||ae===L||de===le||ae===le||$(H.startDate).isBefore(v,"day")&&$(H.endDate).isAfter(Y,"day"))||S>=ie&&S<fe||R>ie&&R<=fe||S<=ie&&R>=fe)continue;let ue,Se;fe<=S?(ue=S-fe,Se="before"):(ue=ie-R,Se="after"),I.push({event:H,timeGap:ue,position:Se})}return I.sort((H,ie)=>H.timeGap-ie.timeGap)},[a]),oe=p.useCallback((F,v,Y)=>{const z=Q(v,Y);let I,S;if(g)I=F.startDate,S=F.endDate;else{const fe=$(F.endDate).diff(F.startDate);I=z.snappedDate,S=$(I).add(fe,"milliseconds").toDate()}let R=0,L="",J;for(const fe of e){const de=Math.max(fe.data.length,1);if(z.snappedResourceIndex<R+de){L=fe.id,J=fe.capacity;break}R+=de}if(!L)return null;let te=!0;J!==void 0&&F.totalPassengers!==void 0&&(te=F.totalPassengers<=J);const H=ee(F,I,S,L),ie=H.length===0?se(F,I,S,L):[];return{startDate:I,endDate:S,resourceId:L,resourceIndex:z.snappedResourceIndex,resourceCapacity:J,hasCapacity:te,conflicts:H,hasConflict:H.length>0,nearbyEvents:ie}},[Q,e,g,ee,se]),B=p.useCallback((F,v)=>{if(!s)return;const Y=Date.now();if(Y-D.current<100)return;D.current=Y;const z={event:F,currentStartDate:v.startDate,currentEndDate:v.endDate,currentResourceId:v.resourceId,conflicts:v.conflicts};s(z)},[s]),V=p.useCallback((F,v)=>{if(!O(F)||!c.current)return;v.preventDefault(),v.stopPropagation();const Y=v.target.closest('[style*="left"]');let z=0,I=0;Y&&Y.style.left&&Y.style.top&&(z=parseInt(Y.style.left),I=parseInt(Y.style.top));const S=pt(v.clientX,v.clientY,c.current);j.current={x:z,y:I},G.current={x:v.clientX,y:v.clientY},K.current={x:S.x-z,y:20},N.current={startDate:F.startDate,endDate:F.endDate,resourceId:""};for(const J of e){for(const te of J.data)if(te.some(H=>H.segmentId===F.segmentId)){N.current.resourceId=J.id;break}if(N.current.resourceId)break}W(F),M("potential"),Z({x:z,y:I});let R=100,L=48;if(Y){const J=Y.getBoundingClientRect();R=J.width,L=J.height}u({width:R,height:L})},[O,c,e,t]),X=p.useCallback(F=>{if(!c.current)return;let v=c.current;for(;v&&v!==document.body;){const H=window.getComputedStyle(v);if(v.scrollHeight>v.clientHeight&&(H.overflowY==="auto"||H.overflowY==="scroll"||H.overflow==="auto"||H.overflow==="scroll"))break;v=v.parentElement}(!v||v===document.body)&&(v=document.documentElement);const Y=v.getBoundingClientRect(),z=F.clientY,I=50,S=5,R=z-Y.top,L=Y.bottom-z;let J=!1,te=0;R<I&&R>0?(J=!0,te=-S*(1-R/I)):L<I&&L>0&&(J=!0,te=S*(1-L/I)),J?(_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>{v.scrollTop+=te,b==="dragging"&&X(F)})):_.current&&(cancelAnimationFrame(_.current),_.current=null)},[c,b]),U=p.useCallback(F=>{if(b==="idle"||b==="animating"||!m||!c.current)return;const v={x:F.clientX,y:F.clientY};if(b==="potential")if(ur(G.current,v))M("dragging");else return;X(F);const Y=pt(F.clientX,F.clientY,c.current);E.current&&cancelAnimationFrame(E.current),E.current=requestAnimationFrame(()=>{const z={x:Y.x-K.current.x,y:Y.y-K.current.y};Z(z);const I=oe(m,Y.x,Y.y);if(I&&x){const S={event:m,currentStartDate:I.startDate,currentEndDate:I.endDate,currentResourceId:I.resourceId,conflicts:I.conflicts};I.hasConflict=!x(S)}if(C(I),I){const S=I.hasCapacity!==!1;P(S),B(m,I)}})},[b,m,c,oe,B,x,X]),w=p.useCallback(async F=>{if(b==="idle"||b==="animating")return;const v={x:F.clientX,y:F.clientY};if(!ur(G.current,v)||b==="potential"){M("idle"),W(null),C(null);return}if(!m||!y||!N.current){M("idle"),W(null),C(null);return}if(y.hasCapacity===!1){P(!1),M("animating"),Z(j.current),setTimeout(()=>{M("idle"),W(null),C(null),P(!0)},300);return}const z={event:m,originalStartDate:N.current.startDate,originalEndDate:N.current.endDate,originalResourceId:N.current.resourceId,newStartDate:y.startDate,newEndDate:y.endDate,newResourceId:y.resourceId,hasConflict:y.hasConflict,conflicts:y.conflicts};let I=!0;if(o)try{const S=o(z);I=S instanceof Promise?await S:S}catch{I=!1}I?(P(!0),M("idle"),W(null),C(null)):(P(!1),M("animating"),Z(j.current),setTimeout(()=>{M("idle"),W(null),C(null),P(!0)},300))},[b,m,y,o,x]);return p.useEffect(()=>{if(b==="potential"||b==="dragging"){const F=Y=>U(Y),v=Y=>w(Y);return document.addEventListener("mousemove",F),document.addEventListener("mouseup",v),()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",v)}}else return()=>{}},[b,U,w]),p.useEffect(()=>()=>{E.current&&(cancelAnimationFrame(E.current),E.current=null),_.current&&(cancelAnimationFrame(_.current),_.current=null)},[]),p.useEffect(()=>{(b==="idle"||b==="animating")&&(E.current&&(cancelAnimationFrame(E.current),E.current=null),_.current&&(cancelAnimationFrame(_.current),_.current=null))},[b]),p.useEffect(()=>{(b==="dragging"||b==="potential")&&(b==="dragging"?(M("animating"),Z(j.current),setTimeout(()=>{M("idle"),W(null),C(null)},300)):(M("idle"),W(null),C(null)))},[t]),p.useEffect(()=>{if((b==="dragging"||b==="potential")&&m){let F=!1;for(const v of e){for(const Y of v.data)if(Y.some(z=>z.segmentId===m.segmentId)){F=!0;break}if(F)break}F||(b==="dragging"?(M("animating"),Z(j.current),setTimeout(()=>{M("idle"),W(null),C(null)},300)):(M("idle"),W(null),C(null)))}},[e,b,m]),{dragState:b,draggedEvent:m,ghostPosition:q,ghostDimensions:A,dropTarget:y,isValidDrop:T,handleDragStart:V,isDraggable:O,draggingEventId:(m==null?void 0:m.segmentId)||null,resourceOnly:g}},Fs=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:i={},gridRef:c,isDragging:d,separatorRowIndices:a=[]})=>{const{enabled:l=!1,isSelectable:h}=i,g=l&&!!o,x=p.useCallback(v=>{let Y=0;for(const z of a)z<=v&&Y++;return v*he+Y*Me},[a]),[b,M]=p.useState("idle"),[m,W]=p.useState(null),[q,Z]=p.useState(null),[A,u]=p.useState(null),[y,C]=p.useState(!1),[T,P]=p.useState([]),[j,G]=p.useState(!1),K=p.useRef(null),E=p.useRef(null),_=p.useRef(null),D=p.useCallback(()=>{switch(t){case 0:return Ee*7;case 1:return ve;case 2:return we;default:return ve}},[t]),N=p.useCallback(v=>{const Y=D(),z=Math.floor(v/Y),I=$().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return I.add(z*7,"days").toDate();case 1:return I.add(z,"days").toDate();case 2:return I.add(z,"hours").toDate();default:return I.toDate()}},[t,n,D]),O=p.useCallback(v=>{const Y=dr(v,a),z=Math.floor(Y/he);let I=0;for(const S of e){const R=Math.max(S.data.length,1);if(z<I+R)return{resourceId:S.id,resourceIndex:z,resourceLabel:S.label};I+=R}return null},[e,a]),Q=p.useCallback(v=>{const Y=D();return Math.floor(v/Y)*Y},[D]),ee=p.useCallback((v,Y,z,I=[])=>{const S=[],L=(r||e).find(H=>H.id===v),J=Y.getTime(),te=z.getTime();if(L){const H=L.data[0],ie=H&&Array.isArray(H)?L.data.flat():L.data;for(const fe of ie){const de=new Date(fe.startDate).getTime(),ae=new Date(fe.endDate).getTime();if(J<ae&&te>de){const le=new Date(Math.max(J,de)),ce=new Date(Math.min(te,ae)),ne=ce.getTime()-le.getTime();S.push({event:fe,conflictStart:le,conflictEnd:ce,overlapDuration:ne})}}}for(const H of I){if(H.resourceId!==v)continue;const ie=H.startDate.getTime(),fe=H.endDate.getTime();if(J<fe&&te>ie){const de=new Date(Math.max(J,ie)),ae=new Date(Math.min(te,fe)),le=ae.getTime()-de.getTime(),ce={segmentId:`pending-${H.startDate.getTime()}`,reservationId:`pending-${H.startDate.getTime()}`,startDate:H.startDate,endDate:H.endDate,occupancy:0,title:`New Event (${H.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};S.push({event:ce,conflictStart:de,conflictEnd:ae,overlapDuration:le})}}return S},[e,r]),se=p.useCallback(v=>{if(!g||d||!c.current||v.button!==0)return;const Y=v.target;if(Y.closest("[data-segment-id]")||Y.closest("[data-multi-select-ui]"))return;const z=pt(v.clientX,v.clientY,c.current),I=O(z.y);if(!I)return;K.current={x:v.clientX,y:v.clientY},E.current=I.resourceIndex;const S=Q(z.x),R=D(),L=x(I.resourceIndex);W(z),Z(z),u({x:S,y:L,width:R,height:he}),M("selecting")},[g,d,c,O,Q,D,x]),oe=p.useCallback(v=>{if(b!=="selecting"||!c.current||E.current===null)return;const Y=pt(v.clientX,v.clientY,c.current);_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>{Z(Y);const z=D(),I=Q((m==null?void 0:m.x)||0),S=Q(Y.x),R=x(E.current),L=Math.min(I,S),J=Math.max(I,S)+z;u({x:L,y:R,width:J-L,height:he})})},[b,c,m,D,Q,x]),B=p.useCallback(v=>{if(b!=="selecting")return;if(!c.current||!m||!K.current){M("idle"),W(null),Z(null),u(null);return}const Y=pt(v.clientX,v.clientY,c.current),z=O(m.y);if(!z){M("idle"),W(null),Z(null),u(null);return}const I=Math.min(m.x,Y.x),S=Math.max(m.x,Y.x),R=N(I),L=N(S),J=$(L).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h(z.resourceId,R,J)){M("idle"),W(null),Z(null),u(null);return}const te=ee(z.resourceId,R,J,T),H=te.length>0,ie={startDate:R,endDate:J,resourceId:z.resourceId,resourceLabel:z.resourceLabel,zoomLevel:t,hasConflict:H,conflicts:H?te:void 0};if(y)P(fe=>[...fe,ie]),G(!0);else if(o){const fe=o(ie),de=ae=>{ae!=null&&ae.continueMultiSelect&&(C(!0),P([ie]),G(!0))};fe instanceof Promise?fe.then(de):de(fe)}M("idle"),W(null),Z(null),u(null),K.current=null,E.current=null},[b,c,m,O,N,h,o,t,y,ee,T]),V=p.useCallback(()=>{if(T.length>0&&s){G(!1);const v=s(T),Y=z=>{z!=null&&z.continueMultiSelect?G(!0):(P([]),C(!1),G(!1))};v instanceof Promise?v.then(Y):Y(v);return}P([]),C(!1),G(!1)},[T,s]),X=p.useCallback(()=>{P([]),C(!1),G(!1)},[]),U=p.useCallback(v=>{P(Y=>{const z=Y.filter((I,S)=>S!==v);return z.length===0&&(C(!1),G(!1)),z})},[]),w=p.useCallback((v,Y)=>{P(z=>z.map((I,S)=>{if(S!==v)return I;const R={...I,...Y},L=z.filter((te,H)=>H!==v),J=ee(R.resourceId,R.startDate,R.endDate,L);return{...R,hasConflict:J.length>0,conflicts:J.length>0?J:void 0}}))},[ee]),F=p.useCallback(v=>{v.key==="Escape"&&(b==="selecting"?(M("idle"),W(null),Z(null),u(null),K.current=null,E.current=null):y&&T.length>0&&(P([]),C(!1),G(!1)))},[b,y,T.length]);return p.useEffect(()=>{if(b==="selecting")return document.addEventListener("mousemove",oe),document.addEventListener("mouseup",B),document.addEventListener("keydown",F),()=>{document.removeEventListener("mousemove",oe),document.removeEventListener("mouseup",B),document.removeEventListener("keydown",F)}},[b,oe,B,F]),p.useEffect(()=>{if(y&&T.length>0)return document.addEventListener("keydown",F),()=>{document.removeEventListener("keydown",F)}},[y,T.length,F]),p.useEffect(()=>()=>{_.current&&(cancelAnimationFrame(_.current),_.current=null)},[]),p.useEffect(()=>{d&&b==="selecting"&&(M("idle"),W(null),Z(null),u(null),K.current=null,E.current=null)},[d,b]),{selectionState:b,selectionStart:m,selectionEnd:q,selectionBox:A,handleGridMouseDown:se,isEnabled:g,pendingSelections:T,confirmSelections:V,clearSelections:X,removeSelection:U,updateSelection:w,isMultiSelectActive:y,hasUnconfirmedSelections:j}},Ws=k.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,Hs=k.div`
  position: relative;
`,zs=k.canvas``;k.canvas``;const fr=k.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,Bs=p.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onEventDrop:i,onEventDrag:c,draggableConfig:d,onDragStateChange:a,onTimeRangeSelect:l,onMultiTimeRangeSelect:h,clickToAddConfig:g,separatorRowIndices:x=[]},b){const M=p.useRef(!1),{handleScrollNext:m,handleScrollPrev:W,date:q,isLoading:Z,cols:A,startDate:u}=We(),y=p.useRef(null),C=p.useRef(null),T=p.useRef(null),P=p.useRef(null),[j,G]=p.useState(!1),K=je(),{dragState:E,draggedEvent:_,ghostPosition:D,ghostDimensions:N,dropTarget:O,isValidDrop:Q,handleDragStart:ee,isDraggable:se,draggingEventId:oe,resourceOnly:B}=Ns({data:n,baseData:o||n,zoom:r,startDate:u,onEventDrop:i,onEventDrag:c,draggableConfig:d,gridRef:P,separatorRowIndices:x});p.useEffect(()=>{const H=E==="dragging"||E==="potential";G(H),a&&a(H)},[E,a]);const{selectionState:V,selectionBox:X,handleGridMouseDown:U,pendingSelections:w,confirmSelections:F,clearSelections:v,removeSelection:Y,updateSelection:z,isMultiSelectActive:I,hasUnconfirmedSelections:S}=Fs({data:n,baseData:o||n,zoom:r,startDate:u,onTimeRangeSelect:l,onMultiTimeRangeSelect:h,clickToAddConfig:g,gridRef:P,isDragging:j,separatorRowIndices:x}),R=p.useCallback(H=>{H.preventDefault()},[]),L=p.useCallback(H=>{H.preventDefault()},[]),J=x.length*Me,te=p.useCallback(H=>{const ie=on(),fe=t*he+1+J;lr(H,ie,fe),ss(H,r,t,A,u,K,x)},[A,u,t,r,K,x,J]);return p.useEffect(()=>{if(!y.current)return;const H=y.current.getContext("2d");if(!H)return;const ie=()=>te(H);return window.addEventListener("resize",ie),()=>window.removeEventListener("resize",ie)},[te]),p.useEffect(()=>{const H=y.current;if(!H)return;H.style.letterSpacing="1px";const ie=H.getContext("2d");ie&&te(ie)},[q,t,r,te]),p.useEffect(()=>{if(!C.current)return;const H=new IntersectionObserver(ie=>{ie[0].isIntersecting&&!M.current&&(M.current=!0,m(),setTimeout(()=>{M.current=!1},1e3))},{root:document.getElementById(Ge)});return H.observe(C.current),()=>{H.disconnect()}},[m]),p.useEffect(()=>{if(!T.current)return;const H=new IntersectionObserver(ie=>{ie[0].isIntersecting&&!M.current&&(M.current=!0,W(),setTimeout(()=>{M.current=!1},1e3))},{root:document.getElementById(Ge),rootMargin:`0px 0px 0px -${$e}px`});return H.observe(T.current),()=>{H.disconnect()}},[W]),f.jsxs(Ws,{id:Qn,children:[f.jsxs(Hs,{ref:H=>{typeof b=="function"?b(H):b&&(b.current=H),P.current=H},onMouseDown:U,style:{cursor:l?"crosshair":"default"},children:[f.jsx(fr,{position:"left",ref:T}),f.jsx(mn,{isLoading:Z,position:"left"}),f.jsx(zs,{ref:y,onDragStart:R,onDragOver:L,style:{userSelect:E==="dragging"?"none":"auto"}}),f.jsx(Fc,{zoom:r,startDate:u}),f.jsx(Ba,{data:n,zoom:r,onTileClick:s,onDragStart:ee,isDraggable:se,draggingEventId:oe,separatorRowIndices:x}),f.jsx(fr,{ref:C,position:"right"}),f.jsx(mn,{isLoading:Z,position:"right"}),(E==="dragging"||E==="animating")&&f.jsx(bc,{draggedEvent:_,ghostPosition:D,ghostDimensions:N,dropTarget:O,isValidDrop:Q,dragState:E,zoom:r,data:n,resourceOnly:B,separatorRowIndices:x}),f.jsx(Sc,{selectionBox:X,isSelecting:V==="selecting"}),I&&w.length>0&&f.jsx(Lc,{selections:w,data:n,zoom:r,startDate:u,onRemove:Y,onUpdate:z,separatorRowIndices:x})]}),I&&S&&w.length>0&&f.jsx(Tc,{selections:w,onConfirm:F,onClear:v,onRemove:Y})]})}),hr=e=>{const r=$.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},pr=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/be);t+=o.hours+s,n+=r%be,n>=be&&(t++,n-=be)}),{hours:t,minutes:n}},mr=(e,r)=>{let t=Rn;switch(r){case 0:t=Qo;break;case 1:t=Rn;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,i=be-e.minutes;return i===be&&(s++,i=0),{hours:Math.max(0,s),minutes:s<0?0:i}},o=()=>{const s=e.hours-t,i=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:i}};return{free:n(),overtime:o()}},js=(e,r,t)=>{const n=r.isoWeek(),o=e.map(a=>{const l=$(a.startDate).isoWeek(),h=$(a.startDate).isoWeekday(),g=$(a.endDate).isoWeek(),x=$(a.endDate).isoWeekday(),{hours:b,minutes:M}=hr(a.occupancy);if(n===l){const m=(Fe+1-h)*b,W=(Fe+1-h)*M;return{hours:Math.max(0,m),minutes:W}}else if(n===g){const m=x>Fe?Fe*b:x*b,W=x>Fe?Fe*M:x*M;return{hours:m,minutes:W}}else if($(r).isBetween(a.startDate,a.endDate))return{hours:Fe*b,minutes:Fe*M};return{hours:0,minutes:0}}),{hours:s,minutes:i}=pr(o),{free:c,overtime:d}=mr({hours:s,minutes:i},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,i)},free:c,overtime:d}},Zs=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(l=>{const{hours:h,minutes:g}=hr(l.occupancy);return o<=(n?7:5)?{hours:h,minutes:g}:{hours:0,minutes:0}}),{hours:i,minutes:c}=pr(s),{free:d,overtime:a}=mr({hours:i,minutes:c},t);return{taken:{hours:Math.max(0,i),minutes:Math.max(0,c)},free:d,overtime:a}},Vs=(e,r)=>{let t=0;e.forEach(c=>{const d=$(c.startDate).hour(),a=$(c.endDate).hour(),l=r.hour(),h=$(c.endDate).minute(),g=$(c.startDate).minute();d<l&&a>l?t+=be:d===l&&a===l&&g&&h?t+=h?h-g:be-g:d===l&&a>=l?t+=g?be-g:be:a===l&&h&&(t+=h)});const n=Math.floor(t/be),o=t%be,s=n||o?0:1,i=n?0:o?be-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:i},overtime:{hours:0,minutes:0}}},Gs=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(i=>n===1?$(t).isBetween(i.startDate,i.endDate,"day","[]"):n===2?$(t).isBetween(i.startDate,i.endDate,"hour","[]"):$(i.startDate).isBetween($(t),$(t).add(6,"days"),"day","[]")||$(t).isBetween($(i.startDate),$(i.endDate),"day","[]"));switch(n){case 1:return Zs(s,t,n,o);case 2:return Vs(s,t);default:return js(s,t,n)}},Xs=(e,r,t,n,o,s,i=!1)=>{let c="weeks",d;switch(s){case 0:c="weeks",d=tt;break;case 1:c="days",d=ve;break;case 2:c="hours",d=we;break}const a=Math.ceil(s===2?(t.x-.5*d)/d:t.x/d),l=$(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(a-1,c),h=Math.ceil(t.y/he),g=n.findIndex((W,q,Z)=>Z.slice(0,q+1).reduce((u,y)=>u+y,0)>=h),x=s===2?(a+1)*d:a*d,b=(h-1)*he+he,M=Gs(o[g],g,l,s,i),m=$(e.startDate).isSame($(e.endDate),"day");return{coords:{x,y:b},mouseCoords:t,resourceIndex:g,disposition:M,reservationData:{startTime:$(e.startDate).format("hh:mm A"),startDate:$(e.startDate).format("MMM D, YYYY"),endTime:$(e.endDate).format("hh:mm A"),endDate:$(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,isOneDayEvent:m,passengers:e.totalPassengers}}};function Us(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function Ks(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const l of e)!l.isSubcontract&&l.capacity!=null&&t.add(l.capacity);const n=[...t].sort((l,h)=>l-h);if(n.length<2)return r;const o=Math.min(5,n.length),s=Us(n,o),i=[];let c=0;for(const l of s)i.push({min:n[c],max:n[l-1],values:n.slice(c,l)}),c=l;i.push({min:n[c],max:n[n.length-1],values:n.slice(c)});const d=[],a=new Map;return i.forEach((l,h)=>{const g="__auto_cat_"+h,x=l.min===l.max?l.min+" pax":l.min+"-"+l.max+" pax";d.push({id:g,name:x,minPassengers:l.min,maxPassengers:l.max});for(const b of l.values)a.set(b,g)}),{categories:d,capacityToCategoryId:a}}const Js=(e,r,t,n)=>{const o=[];let s=0,i=[],c=0;return r.length>n?(r.forEach((d,a)=>{const l={id:e[a].id,label:e[a].label,data:d,capacity:e[a].capacity,isSubcontract:e[a].isSubcontract,categoryId:e[a].categoryId};c>=n&&(o.push(i),s+=i.length,i=[],c=0),c++,i.push(l)}),t.slice(s).length<=n&&(i=[],r.slice(s).forEach((d,a)=>{const l={id:e[a+s].id,label:e[a+s].label,data:d,capacity:e[a+s].capacity,isSubcontract:e[a+s].isSubcontract,categoryId:e[a+s].categoryId};i.push(l),a===r.length-s-1&&o.push(i)})),o):(r.forEach((d,a)=>{const l={id:e[a].id,label:e[a].label,data:d,capacity:e[a].capacity,isSubcontract:e[a].isSubcontract,categoryId:e[a].categoryId};i.push(l)}),o.push(i),o)};var sn={},qs={get exports(){return sn},set exports(e){sn=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(qs);const Qs=sn;var an={},Rs={get exports(){return an},set exports(e){an=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(Rs);const ei=an,ti=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let i=0;i<o.length;i++){const c=$(t.startDate).startOf("day"),d=$(t.endDate).startOf("day"),a=$(o[i].startDate).startOf("day"),l=$(o[i].endDate).startOf("day");if(c.isBetween(a,l,null,"[]")||d.isBetween(a,l,null,"[]")||c.isBefore(a,"minute")&&d.isAfter(l,"minute")||c.isAfter(a,"minute")&&d.isBefore(l,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};$.extend(Qs),$.extend(ei);const ni=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const i=[...s.data].sort((d,a)=>{const l=$(d.startDate),h=$(a.startDate),g=l.startOf("day").diff(h.startOf("day"),"day");return g!==0?g:l.diff(h)}),c=ti(i);return o[0].push(c),o[1].push(Math.max(c.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},ri=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,oi=e=>{const{recordsThreshold:r}=We(),[t,n]=p.useState(0),[o,s]=p.useState(0),i=p.useRef(null);p.useEffect(()=>{i.current=document.getElementById(Ge)},[]);const{projectsPerPerson:c,rowsPerPerson:d}=p.useMemo(()=>ni(e),[e]),a=p.useMemo(()=>Js(e,c,d,r),[e,c,r,d]),l=p.useCallback(()=>{a[o].length&&i.current&&(i.current.scroll({top:0}),n(m=>m+a[Math.max(o,0)].length),s(m=>Math.min(m+1,a.length-1)),window.scroll({top:0}))},[o,a]),h=p.useCallback(()=>{a[o].length&&(n(m=>Math.max(m-a[o-1].length,0)),s(m=>Math.max(m-1,0)))},[o,a]),g=p.useCallback(()=>{n(0),s(0)},[]),x=t+a[o].length,b=p.useMemo(()=>d.slice(t,x),[x,d,t]),M=p.useMemo(()=>c.slice(t,x),[x,c,t]);return{page:a[o],currentPageNum:o,pagesAmount:a.length,projectsPerPerson:M,rowsPerItem:b,totalRowsPerPage:ri(a[o]),next:l,previous:h,reset:g}};var cn={},si={get exports(){return cn},set exports(e){cn=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(si);const ii=cn;var ln={},ai={get exports(){return ln},set exports(e){ln=e}};(function(e,r){(function(t,n){e.exports=n(Xe)})(xe,function(t){function n(g){return g&&typeof g=="object"&&"default"in g?g:{default:g}}var o=n(t);function s(g){return g%10<5&&g%10>1&&~~(g/10)%10!=1}function i(g,x,b){var M=g+" ";switch(b){case"m":return x?"minuta":"minutę";case"mm":return M+(s(g)?"minuty":"minut");case"h":return x?"godzina":"godzinę";case"hh":return M+(s(g)?"godziny":"godzin");case"MM":return M+(s(g)?"miesiące":"miesięcy");case"yy":return M+(s(g)?"lata":"lat")}}var c="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),a=/D MMMM/,l=function(g,x){return a.test(x)?c[g.month()]:d[g.month()]};l.s=d,l.f=c;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:l,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(g){return g+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})(ai);const ci=ln;var dn={},li={get exports(){return dn},set exports(e){dn=e}};(function(e,r){(function(t,n){e.exports=n(Xe)})(xe,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(d,a,l){var h=s[l];return Array.isArray(h)&&(h=h[a?0:1]),h.replace("%d",d)}var c={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return o.default.locale(c,null,!0),c})})(li);const di=dn;var un={},ui={get exports(){return un},set exports(e){un=e}};(function(e,r){(function(t,n){e.exports=n(Xe)})(xe,function(t){function n(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),i="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),c=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,d=function(l,h){return c.test(h)?s[l.month()]:i[l.month()]};d.s=i,d.f=s;var a={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:d,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(l){return l+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(a,null,!0),a})})(ui);const fi=un;var fn={},hi={get exports(){return fn},set exports(e){fn=e}};(function(e,r){(function(t,n){e.exports=n(Xe)})(xe,function(t){function n(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(i){return i+"º"}};return o.default.locale(s,null,!0),s})})(hi);const pi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:ii},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:ci},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:fn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:fi},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:di}];class mi{constructor(){Br(this,"locales",pi)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const Dt=new mi,gr=p.createContext({localesData:Dt.getLocales(),currentLocale:Dt.getLocales()[0],setCurrentLocale:()=>{}}),gi=({children:e,lang:r,translations:t})=>{const[n,o]=p.useState("en"),s=Dt.getLocales(),i=p.useCallback(()=>{const h=s.find(g=>g.id===n);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&$.locale(h.dayjsTranslations),h||s[0]},[n,s]),[c,d]=p.useState(i()),a=h=>{localStorage.setItem("locale",h.translateCode),d(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(x=>x.id===h.id)||Dt.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),g=r??h??"en";localStorage.setItem("locale",g),o(g),d(i())},[i,r]);const{Provider:l}=gr;return f.jsx(l,{value:{currentLocale:c,localesData:s,setCurrentLocale:a},children:e})},He=()=>p.useContext(gr).currentLocale.lang,yi=e=>re.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},re.createElement("defs",null,re.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),re.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},re.createElement("stop",{offset:.47,stopColor:"#ccc"}),re.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),re.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),re.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),re.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),re.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),re.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),re.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),re.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),re.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),re.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),re.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),vi=k.div`
  height: 440px;
  width: 514px;
  position: relative;
`,bi=k.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,xi=({onTileClick:e})=>{const{feelingEmpty:r}=He();return f.jsxs(vi,{onClick:e,children:[f.jsx(yi,{}),f.jsx(bi,{children:r})]})},wi=k.div`
  position: relative;
  display: flex;
`,Si=k.div`
  position: relative;
  margin-left: ${$e};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Ci=k.div`
  width: calc(${({width:e})=>e}px - ${$e}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${$e}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,hn={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:ht.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function ki(e,r){const t=r?[...r].sort((c,d)=>c.maxPassengers-d.maxPassengers):[],n=[];for(const c of t){const d=e.filter(a=>!a.isSubcontract&&a.categoryId===c.id);d.length>0&&n.push({type:"category",category:c,items:d})}const o=t.length>0,s=e.filter(c=>!c.isSubcontract&&(!c.categoryId||!o));s.length>0&&o?n.push({type:"uncategorized",items:s}):s.length>0&&n.push({type:"uncategorized",items:s});const i=e.filter(c=>c.isSubcontract);return i.length>0&&n.push({type:"subcontract",items:i}),n}const Mi=({data:e,baseData:r,categories:t,onTileClick:n,onItemClick:o,toggleTheme:s,topBarWidth:i,onEventDrop:c,onEventDrag:d,draggableConfig:a,onTimeRangeSelect:l,onMultiTimeRangeSelect:h,clickToAddConfig:g})=>{const[x,b]=p.useState(hn),[M,m]=p.useState(e),[W,q]=p.useState(!1),[Z,A]=p.useState(!1),[u,y]=p.useState(""),[C,T]=p.useState(new Set),{zoom:P,startDate:j,isLoading:G,config:{includeTakenHoursOnWeekendsInDayView:K,showTooltip:E,showThemeToggle:_}}=We(),D=p.useRef(null),{page:N,projectsPerPerson:O,rowsPerItem:Q,currentPageNum:ee,pagesAmount:se,next:oe,previous:B,reset:V}=oi(M),{effectiveCategories:X,effectivePage:U}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:N};const ae=Ks(N);if(ae.categories.length===0)return{effectiveCategories:void 0,effectivePage:N};const le=N.map(ce=>{if(ce.isSubcontract||ce.capacity==null)return ce;const ne=ae.capacityToCategoryId.get(ce.capacity);return ne?{...ce,categoryId:ne}:ce});return{effectiveCategories:ae.categories,effectivePage:le}},[t,N]),w=p.useCallback(ae=>{T(le=>{const ce=new Set(le);return ce.has(ae)?ce.delete(ae):ce.add(ae),ce})},[]),F=p.useMemo(()=>{const ae=[],le=X?[...X].sort((ce,ne)=>ce.maxPassengers-ne.maxPassengers):[];for(const ce of le)U.some(ne=>!ne.isSubcontract&&ne.categoryId===ce.id)&&ae.push(ce.id);return U.some(ce=>ce.isSubcontract)&&ae.push("__subcontract__"),ae},[X,U]),v=p.useCallback(()=>{T(new Set)},[]),Y=p.useCallback(()=>{T(new Set(F))},[F]),{visiblePage:z,visibleRowsPerItem:I,visibleTotalRows:S,visibleProjectsPerPerson:R,separatorRowIndices:L}=p.useMemo(()=>{const ae=ki(U,X),le=((X==null?void 0:X.length)??0)>0,ce=new Map;N.forEach((Ce,Le)=>ce.set(Ce.id,Le));const ne=[],ue=[],Se=[],_e=[];let De=0;for(const Ce of ae)if(Ce.type==="subcontract"||Ce.type==="category"&&le){const at=Ce.type==="subcontract"?"__subcontract__":Ce.category.id,ct=C.has(at);if(_e.push(De),!ct)for(const Ue of Ce.items){const $t=ce.get(Ue.id)??0,Et=Q[$t];ne.push(Ue),ue.push(Et),Se.push(O[$t]),De+=Et}}else for(const at of Ce.items){const ct=ce.get(at.id)??0,Ue=Q[ct];ne.push(at),ue.push(Ue),Se.push(O[ct]),De+=Ue}const xn=ue.reduce((Ce,Le)=>Ce+Le,0);return{visiblePage:ne,visibleRowsPerItem:ue,visibleTotalRows:xn,visibleProjectsPerPerson:Se,separatorRowIndices:_e}},[U,X,N,C,Q,O]),J=p.useRef(ot((ae,le,ce,ne,ue,Se)=>{if(!D.current)return;const{tile:_e,segmentId:De}=ie(ae);if(!De||!_e){q(!1),b(hn);return}const xn=H(De,le),Ce=D.current.getBoundingClientRect(),Le=_e.getBoundingClientRect(),at={x:ae.clientX-Ce.left,y:ae.clientY-Ce.top},ct={x:ae.clientX-Ce.left,y:ae.clientY-Ce.top},Ue={x:Le.left-Ce.left,y:Le.top-Ce.top,width:Le.width,height:Le.height},{coords:{x:$t,y:Et},resourceIndex:Wc,disposition:Hc,reservationData:zc}=Xs(xn,ce,at,ne,ue,Se,K);b({coords:{x:$t,y:Et},mouseCoords:ct,resourceIndex:Wc,disposition:Hc,reservationData:zc,tileBounds:Ue}),q(!0)},4)),te=p.useRef(ot((ae,le)=>{V(),m(ae.map(ce=>({...ce,data:ce.data.filter(ne=>{const{title:ue,description:Se,subtitle:_e}=ne;return(ue==null?void 0:ue.toLowerCase().includes(le.toLowerCase()))||(_e==null?void 0:_e.toLowerCase().includes(le.toLowerCase()))||(Se==null?void 0:Se.toLowerCase().includes(le.toLowerCase()))})})).filter(ce=>ce.data.length>0))},500)),H=(ae,le)=>{if(ae)return le.flatMap(ce=>ce.data).find(ce=>ce.segmentId===ae)},ie=ae=>{if(!ae.target)return{tile:null,segmentId:null};const le=ae.target.closest("[data-segment-id]");return le?{tile:le,segmentId:le.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},fe=ae=>{const le=ae.target.value;y(le),te.current.cancel(),le?te.current(e,le):(V(),m(e))},de=p.useCallback(()=>{J.current.cancel(),q(!1),b(hn)},[]);return p.useEffect(()=>{const ae=ce=>J.current(ce,e,j,I,R,P),le=D.current;if(le)return le.addEventListener("mousemove",ae),le.addEventListener("mouseleave",de),()=>{le.removeEventListener("mousemove",ae),le.removeEventListener("mouseleave",de)}},[J,de,R,I,j,P,e]),p.useEffect(()=>{u?(te.current.cancel(),te.current(e,u)):m(e)},[e,u]),f.jsxs(wi,{children:[f.jsx(aa,{data:U,categories:X,pageNum:ee,pagesAmount:se,rows:Q,onLoadNext:oe,onLoadPrevious:B,searchInputValue:u,onSearchInputChange:fe,onItemClick:o,collapsedGroups:C,onToggleGroup:w,allGroupIds:F,onExpandAll:v,onCollapseAll:Y}),f.jsxs(Si,{children:[f.jsx(ka,{zoom:P,topBarWidth:i,showThemeToggle:_,toggleTheme:s}),e.length?f.jsx(Bs,{data:z,baseData:r||e,zoom:P,rows:S,ref:D,onTileClick:n,onEventDrop:c,onEventDrag:d,draggableConfig:a,onDragStateChange:A,onTimeRangeSelect:l,onMultiTimeRangeSelect:h,clickToAddConfig:g,separatorRowIndices:L}):f.jsx(Ci,{width:i,children:G?f.jsx(mn,{isLoading:G,position:"left"}):f.jsx(xi,{})}),E&&W&&!Z&&(x==null?void 0:x.resourceIndex)>-1&&f.jsx(oc,{tooltipData:x})]})]})},yr=`
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`,Di=k.div`
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
`,$i=k.div`
  display: flex;
  gap: 1.875rem;
`,vr=k.button`
  ${yr};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`,Ei=k.button`
  ${yr};
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
`,_i=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Ti=k.div`
  display: flex;
`,Pi=k.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`,Ai=({width:e,showThemeToggle:r,toggleTheme:t})=>{const{topbar:n}=He(),{data:o,config:s,handleGoNext:i,handleGoPrev:c,handleGoToday:d,zoomIn:a,zoomOut:l,isNextZoom:h,isPrevZoom:g,toggleDisplayActiveUnits:x,onClearFilterData:b}=We(),{colors:M}=je(),{filterButtonState:m=-1}=s,W=q=>{q.stopPropagation(),b==null||b()};return f.jsxs(Di,{width:e,children:[f.jsx(Ti,{children:m>=0&&f.jsxs(pn,{variant:m?"filled":"outlined",iconName:"filter",width:"16",height:"16",onClick:x,children:[n.filters,!!m&&f.jsx("span",{onClick:W,children:f.jsx(Ae,{iconName:"close",height:"16",width:"16",fill:M.textSecondary})})]})}),f.jsxs($i,{children:[f.jsxs(vr,{onClick:c,children:[f.jsx(Ae,{iconName:"arrowLeft",height:"15",fill:M.textPrimary}),n.prev]}),f.jsx(Ei,{onClick:d,children:n.today}),f.jsxs(vr,{onClick:i,children:[n.next,f.jsx(Ae,{iconName:"arrowRight",height:"15",fill:M.textPrimary})]})]}),f.jsxs(Pi,{children:[r&&f.jsx(cc,{toggleTheme:t}),f.jsxs(_i,{children:[n.view,f.jsx(pn,{isDisabled:!g,onClick:l,isFullRounded:!0,iconName:"subtract",width:"14"}),f.jsx(pn,{isDisabled:!h,onClick:a,isFullRounded:!0,iconName:"add",width:"14"})]})]})]})},Ii={add:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>re.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),re.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Ae=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=je(),i=Ii[e];return i?f.jsx(i,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},Oi=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r],Yi=k.button`
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
  ${({theme:e,variant:r,disabled:t})=>Oi(e,r,t)}
`,pn=({iconName:e,width:r,height:t,fill:n,className:o,onClick:s,children:i,isFullRounded:c,isDisabled:d,variant:a="outlined"})=>{const{colors:l}=je();return f.jsxs(Yi,{onClick:s,isFullRounded:c,hasChildren:!!i,disabled:d,variant:a,children:[f.jsx(Ae,{iconName:e,width:r,height:t,fill:d?l.disabled:n,className:o}),i]})},Li=k.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Ni=k.div`
  position: relative;
`,Fi=({data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:c,onEventDrag:d,draggableConfig:a,schedulerRef:l,onTimeRangeSelect:h,onMultiTimeRangeSelect:g,clickToAddConfig:x})=>{const{goToDate:b,handleGoToday:M,zoomIn:m,zoomOut:W,zoom:q}=We();return p.useImperativeHandle(l,()=>({goToDate:b,goToToday:M,setZoom:Z=>{if(!ar(Z))return;const A=Z-q;if(A>0)for(let u=0;u<A;u++)m();else for(let u=0;u<Math.abs(A);u++)W()}}),[b,M,q,m,W]),f.jsx(Mi,{data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:c,onEventDrag:d,draggableConfig:a,onTimeRangeSelect:h,onMultiTimeRangeSelect:g,clickToAddConfig:x})},Wi=p.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:i,onTileClick:c,handleToggleDisplayActiveUnits:d,onClearFilterData:a,onItemClick:l,isLoading:h,onEventDrop:g,onEventDrag:x,draggableConfig:b,onTimeRangeSelect:M,onMultiTimeRangeSelect:m,clickToAddConfig:W},q){var D;const Z=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,translations:void 0,...o}),[o]),A=p.useRef(null),u=p.useRef(null),[y,C]=p.useState((D=A.current)==null?void 0:D.clientWidth),T=p.useMemo(()=>$(s),[s]),[P,j]=p.useState(Z.defaultTheme??"light"),G=()=>{j(P==="light"?"dark":"light")},K=P==="light"?Vo:Go,E=Z.theme?Z.theme[K.mode]:{},_={...K,colors:{...K.colors,...E}};return p.useImperativeHandle(q,()=>({goToDate:N=>{var O;return(O=u.current)==null?void 0:O.goToDate(N)},goToToday:()=>{var N;return(N=u.current)==null?void 0:N.goToToday()},setZoom:N=>{var O;return(O=u.current)==null?void 0:O.setZoom(N)}}),[]),p.useEffect(()=>{const N=()=>{A.current&&C(A.current.clientWidth)};return N(),window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]),A.current,f.jsxs(f.Fragment,{children:[f.jsx(Zo,{}),f.jsx(zo,{theme:_,children:f.jsx(gi,{lang:Z.lang,translations:Z.translations,children:f.jsx(Ys,{data:r,isLoading:!!h,config:Z,onRangeChange:i,defaultStartDate:T,handleToggleDisplayActiveUnits:d,onClearFilterData:a,children:f.jsx(Li,{showScroll:!!r.length,id:Ge,ref:A,children:f.jsx(Ni,{children:f.jsx(Fi,{data:r,baseData:n,categories:t,onTileClick:c,topBarWidth:y??0,onItemClick:l,toggleTheme:G,onEventDrop:g,onEventDrag:x,draggableConfig:b,schedulerRef:u,onTimeRangeSelect:M,onMultiTimeRangeSelect:m,clickToAddConfig:W})})})})})})]})}),Hi=k.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,zi=k.button`
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
`,Bi=k.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ji=k.p`
  ${Ze}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,br=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:i,loadPrevious:c}=He(),d=e==="next"?`${i} ${o+2}/${s}`:`${c} ${o}/${s}`;return f.jsx(Hi,{intent:e,children:f.jsxs(zi,{onClick:r,isVisible:n,children:[t&&f.jsx(Bi,{children:t}),f.jsx(ji,{children:d})]})})},Zi=k.div`
  min-width: ${$e+"px"};
  max-width: ${$e+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,Vi=k.div`
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
`,Gi=k.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,Xi=k.input`
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
`,Ui=k.div`
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
`,Ki=k.button`
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
`,Ji=k.div`
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
`,qi=k.div`
  display: flex;
  align-items: center;
`,Qi=k.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`,Ri=k.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,ea=k.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,xr=k.p`
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
`,ta=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>f.jsx(Ji,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:f.jsxs(qi,{children:[f.jsx(Qi,{children:r.icon?f.jsx(Ri,{src:r.icon,alt:"Icon"}):f.jsx(Ae,{iconName:"defaultAvatar"})}),f.jsxs(ea,{children:[f.jsx(xr,{isMain:!0,children:r.title}),f.jsx(xr,{children:r.subtitle})]})]})}),na=k.div`
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
`,ra=k.div`
  width: 3px;
  height: 100%;
  flex-shrink: 0;
  background: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder:e.colors.accent};
  border-radius: 0 2px 2px 0;
`,oa=k.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`,sa=k.span`
  font-size: 0.625rem;
  font-weight: 500;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder:e.colors.accent};
  background: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder+"18":e.colors.accent+"14"};
  padding: 1px 6px;
  border-radius: 10px;
  flex-shrink: 0;
  line-height: 1.4;
`,ia=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.placeholder};
  transition: transform 0.2s ease;
  transform: rotate(${({$collapsed:e})=>e?"-90deg":"0deg"});
`,wr=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>f.jsxs(na,{$variant:o,onClick:n,title:e,children:[f.jsx(ra,{$variant:o}),f.jsx(ia,{$collapsed:t,children:f.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:f.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),f.jsx(oa,{$variant:o,children:e}),f.jsx(sa,{$variant:o,children:r})]}),aa=({data:e,categories:r,rows:t,onLoadNext:n,onLoadPrevious:o,pageNum:s,pagesAmount:i,searchInputValue:c,onSearchInputChange:d,onItemClick:a,collapsedGroups:l,onToggleGroup:h,allGroupIds:g,onExpandAll:x,onCollapseAll:b})=>{const[M,m]=p.useState(!1),W=He(),q=()=>m(K=>!K),Z=r?[...r].sort((K,E)=>K.maxPassengers-E.maxPassengers):[],A=Z.length>0,u=g.length>0,y=u&&l.size===g.length;u&&l.size;const C=e.filter(K=>K.isSubcontract),T=W.subcontract??"Subcontract",P=K=>{const E=e.indexOf(K);return f.jsx(ta,{id:K.id,item:K.label,rows:t[E],onItemClick:a,isSubcontract:K.isSubcontract},K.id)},j=K=>{const E=e.filter(N=>!N.isSubcontract&&N.categoryId===K.id);if(E.length===0)return null;const _=l.has(K.id),D=K.name;return f.jsxs("div",{children:[f.jsx(wr,{label:D,count:E.length,isCollapsed:_,onToggle:()=>h(K.id),variant:"category"}),!_&&E.map(P)]},K.id)},G=e.filter(K=>!K.isSubcontract&&(!K.categoryId||!A));return f.jsxs(Zi,{children:[f.jsxs(Vi,{children:[f.jsxs(Gi,{children:[f.jsxs(Ui,{isFocused:M,children:[f.jsx(Xi,{placeholder:W.search,value:c,onChange:d,onFocus:q,onBlur:q}),f.jsx(Ae,{iconName:"search"})]}),u&&f.jsx(Ki,{title:y?"Expand all":"Collapse all",onClick:y?x:b,$allCollapsed:y,children:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:y?f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),f.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),f.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),f.jsx(br,{intent:"previous",isVisible:s!==0,onClick:o,icon:f.jsx(Ae,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:s,pagesAmount:i})]}),A?Z.map(j):G.map(P),A&&G.length>0&&G.map(P),C.length>0&&f.jsxs(f.Fragment,{children:[f.jsx(wr,{label:T,count:C.length,isCollapsed:l.has("__subcontract__"),onToggle:()=>h("__subcontract__"),variant:"subcontract"}),!l.has("__subcontract__")&&C.map(P)]}),f.jsx(br,{intent:"next",isVisible:s!==i-1,onClick:n,icon:f.jsx(Ae,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:s,pagesAmount:i})]})},ca=k.div`
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
`,la=Ct`
from{
    left: -100%;
}
to{
    left: 100%;
}`,da=k.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${la} 1s infinite;
`,mn=({isLoading:e,position:r})=>e?f.jsx(ca,{position:r,children:f.jsx(da,{})}):null,Ye=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:i,textYPos:c,label:d,font:a,isBottomRow:l,fillStyle:h,topText:g,bottomText:x,strokeStyle:b,labelBetweenCells:M}=e;if(t.beginPath(),t.strokeStyle=b??r.colors.border,t.setLineDash([]),d&&a&&c){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,i),M?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+i),t.lineTo(n+s,o+i),t.stroke(),t.moveTo(n+s/2,o+i),t.lineTo(n+s/2,o+i-5),t.stroke()):t.strokeRect(n+.5,o+.5,s,i),t.font=a;const m=n+s/2-t.measureText(d).width/2;t.textBaseline="middle",t.fillStyle=r.colors.accent,t.fillText(d,m,c)}if(l&&h&&g&&x){t.fillStyle=h,t.fillRect(n,o,s,i),t.strokeRect(n+.5,o+.5,s,i),t.font=g.font;const m=n+s/2-t.measureText(g.label).width/2;t.fillStyle=g.color,t.fillText(g.label,m,g.y),t.font=x.font;const W=n+s/2-t.measureText(x.label).width/2;t.fillStyle=x.color,t.fillText(x.label,W,x.y)}},Sr=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},gn=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},ua=(e,r,t,n)=>{const o=et-Ve/Uo,s=et-Ve/Ko,i=Oe+Re;let c=0;for(let d=0;d<r;d++){const a=or($(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(d,"days"));Ye({ctx:e,x:c,y:i,width:ve,height:Ve,isBottomRow:!0,fillStyle:Sr({isCurrent:a.isCurrentDay,isBusinessDay:a.isBusinessDay},n),topText:{y:o,label:a.dayName.toUpperCase(),font:Pe.bottomRow.name,color:gn({isCurrent:a.isCurrentDay,isBusinessDay:a.isBusinessDay},n)},bottomText:{y:s,label:`${a.dayOfMonth}`,font:Pe.bottomRow.number,color:gn({isCurrent:a.isCurrentDay,isBusinessDay:a.isBusinessDay,variant:"bottomRow"},n)}},n),c+=ve}},fa=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*Ee;const s=Oe;let c=t.month;for(let d=0;d<r;d++){c>=Zt&&(c=0);const a=rr(t,d)*Ee;Ye({ctx:e,x:o,y:s,width:a,height:Re,textYPos:er,label:$().month(c).format("MMMM").toUpperCase(),font:Pe.bottomRow.number},n),o+=a,c++}},ha=(e,r,t)=>{let o=0,s=0,i=$(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month();o=-r.dayOfMonth*ve+ve;for(let c=0;c<Zt;c++)i>Zt-1&&(i=0),s=$(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(c,"months").daysInMonth()*ve,Ye({ctx:e,x:o,y:0,width:s,height:Oe,textYPos:Gt,label:$(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(i).format("MMMM").toUpperCase()+`                                                                                                  ${$(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(i).format("MMMM").toUpperCase()}`,font:Pe.topRow},t),o+=s,i++},pa=(e,r,t,n)=>{const o=7*ve,s=Oe,i=e.canvas.width/o+o,c=r.weekOfYear;let d=0;for(let a=0;a<i;a++){const l=$(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let h=(c+a)%qn;h<=0&&(h+=qn),l!==1&&a===0&&(d=-l*ve+ve),Ye({ctx:e,x:d,y:s,width:o,height:Re,textYPos:er,label:`${t.toUpperCase()} ${h}`,font:Pe.middleRow},n),d+=o}},ma=(e,r,t,n,o)=>{const s=et-Ve/1.6,i=et-Ve/4.5,c=Oe+Re;let d=0;for(let a=0;a<r;a++){const l=$(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(a,"weeks"),h=l.isSame($(),"week");Ye({ctx:e,x:d,y:c,width:tt,height:Ve,isBottomRow:!0,fillStyle:h?o.colors.today+"26":Sr({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:l.isoWeek().toString(),font:h?"700 14px Inter":Pe.bottomRow.name,color:h?o.colors.today:gn({isCurrent:h},o)},bottomText:{y:i,label:n.toUpperCase(),font:Pe.middleRow,color:o.colors.placeholder}},o),d+=tt}},ga=(e,r,t,n)=>{const s=r.year,i=e.canvas.width*2;let c=0,d=0,a=(nr(s)-t+1)*Ee,l=0;for(;c+l<=i;)d>0&&(a=nr(s+d)*Ee),l+a>i&&d>0&&(a=Math.ceil((i-l)/Ee)*Ee),Ye({ctx:e,x:c,y:0,width:a,height:Oe,textYPos:Gt,label:(s+d).toString(),font:Pe.topRow},n),c+=a,l+=a,d++},ya=(e,r,t,n)=>{const o=Math.floor(r/kt)+2,s=kt*we;let d=-$(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*we+.5*we;for(let a=0;a<o;a++){const l=$(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(a,"day").format("dddd DD/MM/YYYY").toUpperCase();Ye({ctx:e,x:d,y:nt,width:s,height:ft,textYPos:nt+ft/2+2,label:l,font:Pe.bottomRow.number},n),d+=s}},va=(e,r,t,n)=>{const o=Math.ceil(r/kt),s=$(`${t.year}-${t.month+1}-${t.dayOfMonth}`),i=s.add(o-1,"days"),c=s.month(),d=i.add(1,"day").month(),a=c===d?1:2;let l=.5*we;for(let h=0;h<a;h++){const g=$(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),b=$(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),M=b.format("MMMM").toUpperCase(),m=b.diff(g,"hour")+1,W=h===0?m*we:r*we;Ye({ctx:e,x:l,y:0,width:W,height:nt,textYPos:Gt,label:M,font:Pe.topRow},n),l+=W}},ba=(e,r,t,n)=>{let o=0;const s=nt+ft,i=$(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),c=we;for(let d=0;d<r;d++){const a=i.add(d,"hours").format("h:00a").toUpperCase();Ye({ctx:e,x:o,y:s,width:c,height:jt,label:a,font:Pe.bottomRow.hoursInDay,textYPos:nt+ft+jt/2+2,labelBetweenCells:!0},n),o+=we}},xa=(e,r,t,n,o,s,i)=>{switch(r){case 0:ga(e,n,s,i),fa(e,t,n,i),ma(e,t,n,o,i);break;case 1:ha(e,n,i),pa(e,n,o,i),ua(e,t,n,i);break;case 2:va(e,t,n,i),ya(e,t,n,i),ba(e,t,n,i);break}},wa=k.div`
  position: sticky;
  top: 0;
  z-index: 1;
`,Sa=k.div`
  height: ${et}px;
  display: block;
`,Ca=k.canvas``,ka=({zoom:e,topBarWidth:r,showThemeToggle:t,toggleTheme:n})=>{const{week:o}=He(),{date:s,cols:i,dayOfYear:c,startDate:d,config:a}=We(),l=p.useRef(null),h=je(),g=p.useCallback(x=>{const b=on(),m=(e===2?Xo:et)+1;lr(x,b,m),xa(x,e,i,d,o,c,h)},[i,c,d,o,e,h]);return p.useEffect(()=>{if(!l.current)return;const x=l.current.getContext("2d");if(!x)return;const b=()=>g(x);return window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[g]),p.useEffect(()=>{const x=l.current;if(!x)return;x.style.letterSpacing="1px";const b=x.getContext("2d");b&&g(b)},[s,e,g]),f.jsxs(wa,{children:[a.showTopbar!==!1&&f.jsx(Ai,{width:r,showThemeToggle:t,toggleTheme:n}),f.jsx(Sa,{id:Jo,children:f.jsx(Ca,{ref:l})})]})},Ma=(e,r,t)=>{let n;switch(t){case 0:n=Ee;break;case 2:n=we;break;default:n=ve}const s=e.startDate.startOf("day"),i=e.endDate.startOf("day"),c=r.startDate.startOf("day"),d=r.endDate.startOf("day"),a=()=>{let l;switch(t){case 2:l=(e.startDate.diff(r.startDate,"minute")/be+1)*n-n/2;break;default:l=s.diff(c,"day")*n}return Math.max(0,l)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let l;switch(t){case 2:l=Math.max(e.endDate.diff(e.startDate,"minute")/be*n,50);break;default:l=Math.max(i.diff(s,"day")*n+n,50)}return{x:a(),width:l}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let l;switch(t){case 2:l=Math.max(e.endDate.diff(r.startDate,"minute")/be*n+.5*n,50);break;default:l=Math.max(i.diff(c,"day")*n+n,50)}return{x:a(),width:l}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let l;switch(t){case 2:l=Math.max(r.endDate.diff(e.startDate,"minute")/be*n,50);break;default:l=Math.max(d.diff(s,"day")*n+n,50)}return{x:a(),width:l}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let l;switch(t){case 2:l=Math.max(r.endDate.diff(r.startDate,"minute")/be*n,50);break;default:l=Math.max(d.diff(c,"day")*n+n,50)}return{x:a(),width:l}}return{x:a(),width:50}},Da=(e,r,t,n,o,s)=>{const i=e*he+qo,c=r.hour(),d=t.hour();let a,l,h,g;switch(s){case 2:{a=$(n),l=$(o),h=$(r).hour(c).minute(0),g=$(t).hour(d).minute(0);break}default:{a=$(n).hour(0).minute(0),l=$(o).hour(23).minute(59),h=r,g=t;break}}return{...Ma({startDate:a,endDate:l},{startDate:h,endDate:g},s),y:i}},Cr=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"},kr=k.button`
  ${Ze}
  height: ${Vt}px;
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
`,k.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`,k.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.85);
  color: ${({$type:e})=>"#374151"};
  font-size: 9px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 3px;
  letter-spacing: 0.3px;
  line-height: 1;
  border-left: 2px solid ${({$type:e})=>e==="tour"?"#10b981":"#3b82f6"};
  white-space: nowrap;
`,k.p`
  ${Ze}
  ${Qe}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,k.p`
  ${Ze}
  ${Qe}
`,k.div`
  position: sticky;
  left: ${$e+16}px;
  overflow: hidden;
`;const Mr=k.span`
  font-size: 12px;
  line-height: 1;
  flex-shrink: 0;
  opacity: 0.95;
`,$a=k.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  border-radius: 4px 0 0 4px;
  pointer-events: none;
`,Ea=k.div`
  position: absolute;
  top: 3px;
  right: 4px;
  display: flex;
  align-items: center;
  gap: 3px;
  pointer-events: none;
`,_a=k.span`
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 0.4px;
  line-height: 1;
  padding: 2px 3px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
`,Ta=k.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.9);
`,Pa=k.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  padding: 0 2px;
  overflow: hidden;
`,Aa=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.2px;
  font-variant-numeric: tabular-nums;
`,Ia=k.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 8px;
  min-width: 0;
  overflow: hidden;
`,Oa=k.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  gap: 1px;
`,yn=k.span`
  ${Qe}
  font-size: ${({bold:e})=>e?"11px":"9px"};
  font-weight: ${({bold:e})=>e?"700":"500"};
  line-height: 1.25;
  letter-spacing: 0.2px;
  opacity: ${({bold:e})=>e?1:.9};
`;k.span`
  ${Qe}
  font-size: 10px;
  font-weight: 600;
  min-width: 0;
  flex: 1;
`,k.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  color: ${({$type:e})=>e==="tour"?"#15803d":"#1d4ed8"};
  font-size: 9px;
  font-weight: 700;
  padding: 3px 5px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  flex-shrink: 0;
  line-height: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
`,k.span`
  font-size: 10px;
  line-height: 1;
`,k.div`
  display: flex;
  overflow: hidden;
  min-width: 0;
`;const Ya=34,La=90,Na=150,Dr={sin_chofer:"#9AA5A0",sin_avisar:"#E0A83C",notificado:"#3B82F6",confirmado:"#2FA36B"},Fa="#3E8E5A",Wa="#9AA5A0",Ha=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onDragStart:s,isDragging:i=!1,isDraggable:c=!0,yOffset:d=0})=>{const{date:a}=We(),l=rn(a,t),{y:h,x:g,width:x}=Da(e,l.startDate,l.endDate,r.startDate,r.endDate,t),{colors:b}=je(),M=p.useRef(null),m=$(r.startDate).isSame($(r.endDate),"day"),W=r.eventType===ht.Tour,q=r.eventType===ht.Transfer,Z=m&&(W||q),A=q?"⇄":Z?"☀":"▦",u=G=>{M.current={x:G.clientX,y:G.clientY},c&&s&&(G.preventDefault(),s(r,G))},y=G=>{if(M.current){const K=Math.abs(G.clientX-M.current.x),E=Math.abs(G.clientY-M.current.y);Math.sqrt(K*K+E*E)<=5&&(o==null||o(r)),M.current=null}else o==null||o(r)},C={left:`${g}px`,top:`${h+d}px`,backgroundColor:`${r.bgColor??b.defaultTile}`,width:`${x}px`,color:Cr(r.bgColor??"")},T=n&&r.subcontractConfirmed===!1,P=n?r.subcontractConfirmed===!1?Wa:Fa:r.readiness?Dr[r.readiness]:void 0,j=f.jsxs(f.Fragment,{children:[P&&f.jsx($a,{style:{background:P}}),f.jsx(Ea,{children:n?f.jsx(_a,{children:"SUB"}):r.readiness&&f.jsx(Ta,{style:{background:Dr[r.readiness]}})})]});return Z?f.jsxs(kr,{"data-segment-id":r.segmentId,style:C,onClick:y,onMouseDown:u,onDragStart:G=>G.preventDefault(),isDraggable:c,isDragging:i,$dashed:T,children:[j,f.jsxs(Pa,{children:[f.jsx(Mr,{children:A}),x>=Ya&&f.jsxs(Aa,{children:[f.jsx("span",{children:$(r.startDate).format("HH:mm")}),!q&&f.jsx("span",{children:$(r.endDate).format("HH:mm")})]})]})]}):f.jsxs(kr,{"data-segment-id":r.segmentId,style:C,onClick:y,onMouseDown:u,onDragStart:G=>G.preventDefault(),isDraggable:c,isDragging:i,$dashed:T,children:[j,f.jsxs(Ia,{children:[f.jsx(Mr,{children:A}),f.jsxs(Oa,{children:[f.jsx(yn,{bold:!0,children:r.title}),x>=La&&r.subtitle&&f.jsx(yn,{children:r.subtitle}),x>=Na&&r.driver&&f.jsx(yn,{children:r.driver})]})]})]})},za=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Me},Ba=({data:e,zoom:r,onTileClick:t,onDragStart:n,isDraggable:o,draggingEventId:s,separatorRowIndices:i=[]})=>{const c=p.useCallback(()=>{let d=0;return e.map((a,l)=>(l>0&&(d+=Math.max(e[l-1].data.length,1)),a.data.map((h,g)=>h.map(x=>{const b=s===x.segmentId,M=o?o(x):!1,m=g+d,W=za(m,i);return f.jsx(Ha,{row:m,data:x,zoom:r,isSubcontract:a.isSubcontract,onTileClick:t,onDragStart:n,isDragging:b,isDraggable:M,yOffset:W},x.segmentId)})))).flat(2)},[e,t,r,n,o,s,i]);return f.jsx(f.Fragment,{children:c()})};k.div`
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
`;const ja=k.div`
  position: absolute;
  width: 240px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`,Za=k.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Va=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`,Ga=k.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
`,Xa=k.span`
  background: ${({$type:e})=>e==="transfer"?"#dbeafe":"#dcfce7"};
  color: ${({$type:e})=>e==="transfer"?"#1e40af":"#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`,Ua=k.div`
  ${Ze}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ka=k.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
`,Ja=k.div`
  padding: 10px 12px;
`,qa=k.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,$r=k.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,Er=k.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,_r=k.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Tr=k.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,Pr=k.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Qa=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Ra=k.div``,ec=k.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,tc=k.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,nc=k.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Ar=k.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Ir=k.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Or=k.div`
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
`;k.div``,k.span``,k.span``,k.div``,k.div``,k.span``,k.span``,k.div``,k.div``,k.span``,k.span``,k.div``,k.div``,k.div``,k.span``,k.div``,k.div``,k.div``,k.div``,k.p``,k.span``;const rc={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},oc=({tooltipData:e})=>{const{mouseCoords:r,reservationData:t}=e,n=p.useRef(null),[o,s]=p.useState("below"),i=He(),c={...rc,...i.tooltip};p.useLayoutEffect(()=>{if(!n.current||!r)return;const x=n.current,{width:b,height:M}=x.getBoundingClientRect(),m=x.parentElement;if(!m)return;const W=m.getBoundingClientRect(),q=12,Z=4,A=W.height-r.y,u=W.width-r.x;let y=r.x+q,C=r.y+q,T="below";u<b+q&&(y=r.x-b-q),A<M+q&&(C=r.y-M-q,T="above"),y=Math.max(Z,Math.min(y,W.width-b-Z)),C=Math.max(Z,Math.min(C,W.height-M-Z)),s(T),x.style.left=`${y}px`,x.style.top=`${C}px`},[r]);const d=t.reservationType===ht.Tour,a=d&&t.isOneDayEvent,l=()=>d?a?"oneday":"tour":"transfer",h=()=>d?a?c.oneDay:c.tour:c.transfer,g=[t.groupName&&{label:c.groupName,value:t.groupName},t.driver&&{label:c.driver,value:t.driver},t.passengers&&{label:c.passengers,value:String(t.passengers)},t.flightNumber&&{label:c.flightNumber,value:t.flightNumber}].filter(Boolean);return f.jsxs(ja,{ref:n,$position:o,children:[f.jsxs(Za,{children:[f.jsxs(Va,{children:[f.jsx(Ga,{children:t.bookingNumber}),f.jsx(Xa,{$type:l(),children:h()})]}),f.jsx(Ua,{children:t.eventName}),t.client&&f.jsx(Ka,{children:t.client})]}),f.jsxs(Ja,{children:[f.jsxs(qa,{children:[f.jsxs($r,{children:[f.jsx(Er,{children:c.startDate}),f.jsxs(_r,{children:[f.jsx(Tr,{children:t.startDate})," ",f.jsx(Pr,{children:t.startTime})]})]}),d&&t.endDate&&f.jsxs($r,{$isEnd:!0,children:[f.jsx(Er,{children:c.endDate}),f.jsxs(_r,{children:[f.jsx(Tr,{children:t.endDate})," ",f.jsx(Pr,{children:t.endTime})]})]})]}),g.length>0&&f.jsx(Qa,{children:g.map((x,b)=>f.jsxs(Ra,{children:[f.jsx(ec,{children:x.label}),f.jsx(tc,{children:x.value})]},b))}),(t.serviceNotes||t.reservationNotes)&&f.jsxs(nc,{children:[t.serviceNotes&&f.jsxs(Ar,{children:[f.jsx(Ir,{children:c.serviceNotes}),f.jsx(Or,{children:t.serviceNotes})]}),t.reservationNotes&&f.jsxs(Ar,{children:[f.jsx(Ir,{children:c.reservationNotes}),f.jsx(Or,{children:t.reservationNotes})]})]})]})]})},sc=k.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`,ic=k.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({theme:e})=>e.mode==="light"?"4px":"34px"};
  transition: left 0.3s ease;
`,ac=k.div`
  position: absolute;
  top: 5px;
  left: ${({theme:e})=>e.mode==="light"?"38px":"4px"};
  transition: left 0.3s ease;
`,cc=({toggleTheme:e})=>{const r=je();return f.jsxs(sc,{onClick:e,children:[f.jsx(ic,{}),f.jsx(ac,{children:r.mode==="light"?f.jsx(Ae,{iconName:"sun",height:"16",width:"16"}):f.jsx(Ae,{iconName:"moon",height:"16",width:"16"})})]})},lc=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,dc=k.div`
  position: absolute;
  height: ${Vt}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:r,$animateToY:t})=>e&&r!==void 0&&t!==void 0?`transform: translate3d(${r}px, ${t}px, 0);`:""}
`,uc=k.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,Yr=k.p`
  ${Ze}
  ${Qe}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,fc=k.p`
  ${Ze}
  ${Qe}
`,hc=k.div`
  position: sticky;
  left: ${$e+16}px;
  overflow: hidden;
`,pc=k.div`
  position: absolute;
  height: ${Vt}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,mc=k.div`
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
`,gc=k.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,yc=k.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,vc=k.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,Lr=k.div`
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
`,Nr=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,Fr=k.div`
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
`,Wr=k.div`
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
`,it=k.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,Hr=k.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,bc=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:i,resourceOnly:c,separatorRowIndices:d=[]})=>{const a=He(),l=A=>{let u=0;for(const y of d)y<=A&&u++;return A*he+u*Me},[h,g]=p.useState(null),[x,b]=p.useState(0),M=p.useCallback((A=400,u=300)=>{const C=t.width,T=48,P=document.getElementById("react-scheduler");if(!P)return{x:r.x+C+16,y:r.y};const j=P.scrollLeft,G=P.scrollTop,K=P.clientWidth,E=P.clientHeight,_=r.x-j,D=r.y-G,N={left:$e+16,right:K-16,top:16,bottom:E-16},O=N.right-(_+C),Q=_-N.left,ee=N.bottom-(D+T),se=D-N.top;let oe,B;return O>=A+16?oe=_+C+16:Q>=A+16?oe=_-A-16:O>=Q?(oe=_+C+16,oe+A>N.right&&(oe=N.right-A)):(oe=_-A-16,oe<N.left&&(oe=N.left)),ee>=u+16?B=D+T+16:se>=u+16?B=D-u-16:ee>=se?(B=D+T+16,B+u>N.bottom&&(B=N.bottom-u)):(B=D-u-16,B<N.top&&(B=N.top)),oe=Math.max(N.left,Math.min(oe,N.right-A)),B=Math.max(N.top,Math.min(B,N.bottom-u)),{x:oe+j,y:B+G}},[r.x,r.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&x===0?b(r.x):s==="idle"&&b(0)},[s,e,r.x,x]),p.useEffect(()=>{g(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const m=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const A=[];let u=0;for(const y of i){const C=Math.max(y.data.length,1);if(y.capacity!==void 0&&e.totalPassengers>y.capacity)for(let T=0;T<C;T++)A.push(u+T);u+=C}return A},[e,i,s]);if(!e||s==="idle"||s==="potential")return null;const W=s==="animating",q=Cr(e.bgColor??""),Z=()=>{if(!n)return"";const A=$(n.startDate).format("MMM D, HH:mm"),u=$(n.endDate).format("HH:mm");return`${A} - ${u}`};return f.jsxs(lc,{children:[m.map(A=>f.jsx(yc,{style:{top:`${l(A)}px`,height:`${he}px`}},A)),n&&s==="dragging"&&f.jsx(gc,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${l(n.resourceIndex)}px`,height:`${he}px`}}),n&&s==="dragging"&&!c&&f.jsxs(f.Fragment,{children:[f.jsx(pc,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${l(n.resourceIndex)+(he-48)/2}px`,width:`${t.width}px`}}),f.jsx(mc,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${l(n.resourceIndex)+(he-48)/2}px`},children:Z()})]}),n&&s==="dragging"&&c&&f.jsx(vc,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${l(n.resourceIndex)}px`,height:`${he}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const A=M(400,300);return f.jsxs(Lr,{style:{left:`${A.x}px`,top:`${A.y}px`},children:[f.jsxs(Nr,{children:[f.jsx(Fr,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?a.conflicts.detectedPlural:a.conflicts.detected," ",a.conflicts.detectedSuffix]}),f.jsx(Wr,{children:n.conflicts.map((u,y)=>{const C=$(n.startDate).format("YYYY-MM-DD"),T=$(n.endDate).format("YYYY-MM-DD"),P=$(u.event.startDate).format("YYYY-MM-DD"),j=$(u.event.endDate).format("YYYY-MM-DD"),G=$(u.conflictStart).format("YYYY-MM-DD"),K=$(u.conflictEnd).format("YYYY-MM-DD"),E=C!==T,_=P!==j,D=G!==K,N=E?$(n.startDate).format("MMM D, h:mm A"):$(n.startDate).format("h:mm A"),O=E?$(n.endDate).format("MMM D, h:mm A"):$(n.endDate).format("h:mm A"),Q=_?$(u.event.startDate).format("MMM D, h:mm A"):$(u.event.startDate).format("h:mm A"),ee=_?$(u.event.endDate).format("MMM D, h:mm A"):$(u.event.endDate).format("h:mm A"),se=D?$(u.conflictStart).format("MMM D, h:mm A"):$(u.conflictStart).format("h:mm A"),oe=D?$(u.conflictEnd).format("MMM D, h:mm A"):$(u.conflictEnd).format("h:mm A"),B=D?"":$(u.conflictStart).format("MMM D"),V=n.startDate.getTime(),X=n.endDate.getTime(),U=u.event.startDate.getTime(),w=u.event.endDate.getTime(),F=V>=U&&V<w,v=X>U&&X<=w,Y=V<=U&&X>=w,z=U<=V&&w>=X;let I=!1,S=!1,R=!1,L=!1,J="";return Y||z?(I=!0,S=!0,R=!0,L=!0,J=`⚠️ ${a.conflicts.changeBoth}`):F&&v?(I=!0,S=!0,R=!0,L=!0,J=`⚠️ ${a.conflicts.changeBoth}`):F?(I=!0,L=!0,J=`⚠️ ${a.conflicts.changeStart}`):v&&(S=!0,R=!0,J=`⚠️ ${a.conflicts.changeEnd}`),f.jsxs(vn,{children:[f.jsxs(bn,{children:[a.conflicts.conflictsWith,": ",u.event.title,u.event.subtitle&&` - ${u.event.subtitle}`]}),f.jsxs(it,{children:[f.jsx("strong",{children:e.title})," ",a.conflicts.movingTo,":"," ",I?f.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:N}):N," ",a.conflicts.to," ",S?f.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:O}):O]}),f.jsxs(it,{children:[f.jsx("strong",{children:u.event.title})," ",a.conflicts.currentlyAt,":"," ",R?f.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:Q}):Q," ",a.conflicts.to," ",L?f.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:ee}):ee]}),f.jsxs(Hr,{children:[a.conflicts.conflictTime,": ",B&&`${B}, `,se," - ",oe]}),J&&f.jsx(it,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:J})]},y)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const A=M(400,400);return f.jsxs(Lr,{style:{left:`${A.x}px`,top:`${A.y}px`,borderColor:"#4CAF50"},children:[f.jsxs(Nr,{style:{color:"#2E7D32"},children:[f.jsx(Fr,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?a.conflicts.nearbyEvents:a.conflicts.nearbyEvent]}),f.jsxs(Wr,{children:[(()=>{const u=n.nearbyEvents.some(P=>P.position==="before"),y=n.nearbyEvents.some(P=>P.position==="after"),C=$(n.startDate).format("h:mm A"),T=$(n.endDate).format("h:mm A");return f.jsxs(vn,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[f.jsxs(bn,{style:{color:"#33691E"},children:[a.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),f.jsxs(it,{style:{fontWeight:600},children:[$(n.startDate).format("MMM D"),":"," ",u?f.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:C}):C," ",a.conflicts.to," ",y?f.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:T}):T]}),f.jsx(it,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:a.conflicts.sameDay})]})})(),n.nearbyEvents.map((u,y)=>{const C=$(u.event.startDate).format("YYYY-MM-DD"),T=$(u.event.endDate).format("YYYY-MM-DD"),P=C!==T,j=P?$(u.event.startDate).format("MMM D, h:mm A"):$(u.event.startDate).format("h:mm A"),G=P?$(u.event.endDate).format("MMM D, h:mm A"):$(u.event.endDate).format("h:mm A"),K=$(u.event.startDate).format("MMM D"),E=Math.floor(u.timeGap/(1e3*60*60)),_=Math.floor(u.timeGap%(1e3*60*60)/(1e3*60)),D=E>0?`${E}h ${_}m`:`${_}m`,N=u.position==="after",O=u.position==="before";return f.jsxs(vn,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[f.jsxs(bn,{style:{color:"#1B5E20"},children:[u.event.title,u.event.subtitle&&` - ${u.event.subtitle}`]}),f.jsxs(it,{children:[!P&&`${K}: `,N?f.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:j}):j," ",a.conflicts.to," ",O?f.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:G}):G]}),f.jsxs(Hr,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[D," ",u.position==="before"?a.conflicts.before:a.conflicts.after]})]},y)})]})]})})(),f.jsx(dc,{$isAnimating:W,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:W?`${(h==null?void 0:h.x)??0}px`:"0",top:W?`${(h==null?void 0:h.y)??0}px`:"0",transform:W?void 0:`translate3d(${c?x:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:q},children:f.jsx(uc,{children:f.jsxs(hc,{children:[f.jsx(Yr,{$bold:!0,children:e.title}),e.subtitle&&f.jsx(Yr,{children:e.subtitle}),e.description&&f.jsx(fc,{children:e.description})]})})})]})},xc=Ct`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,wc=k.div`
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
  animation: ${xc} 1.5s ease-in-out infinite;
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
`,Sc=({selectionBox:e,isSelecting:r})=>!e||!r?null:f.jsx(wc,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),Cc=Ct`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,kc=k.div`
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
  animation: ${Cc} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,Mc=k.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,Dc=k.span`
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
`,$c=k.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,Ec=k.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;k.div`
  display: none;
`,k.div`
  display: none;
`,k.button`
  display: none;
`;const _c=k.div`
  display: flex;
  gap: 8px;
`,zr=k.button`
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
`,Tc=({selections:e,onConfirm:r,onClear:t})=>{var b;const o=He().multiSelect,s=p.useMemo(()=>e.filter(M=>M.hasConflict).length,[e]),i=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",c=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,d=(o==null?void 0:o.clearAll)||"Clear All",a=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",l=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((b=o==null?void 0:o.conflictsWarning)==null?void 0:b.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const g=s>0,x=f.jsxs(kc,{$hasConflicts:g,"data-multi-select-ui":!0,children:[f.jsxs(Mc,{children:[f.jsxs(Dc,{$hasConflicts:g,children:[e.length," ",i]}),g&&f.jsxs($c,{children:["⚠️ ",h]}),f.jsx(Ec,{children:c})]}),f.jsxs(_c,{children:[f.jsxs(zr,{variant:"secondary",onClick:t,children:["✕ ",d]}),f.jsx(zr,{variant:"primary",$hasConflicts:g,onClick:r,children:g?`⚠️ ${l}`:`✓ ${a}`})]})]});return jr.createPortal(x,document.body)},Pc=Ct`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Ac=k.div`
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
  animation: ${Pc} 0.2s ease-out;
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
`,Ic=k.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,Oc=k.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,Yc=k.button`
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
`,Lc=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:i=[]})=>{const[c,d]=p.useState(null),[a,l]=p.useState({x:0,y:0}),h=p.useRef(null),g=p.useMemo(()=>{switch(t){case 0:return Ee*7;case 1:return ve;case 2:return we;default:return ve}},[t]),x=p.useMemo(()=>$().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),b=p.useMemo(()=>e.map((y,C)=>{let T=0,P=!1;for(const Q of r){if(Q.id===y.resourceId){P=!0;break}T+=Math.max(Q.data.length,1)}if(!P)return null;const j=$(y.startDate),G=$(y.endDate);let K,E;switch(t){case 0:K=Math.floor(j.diff(x,"days")/7),E=Math.max(1,Math.ceil(G.diff(j,"days")/7)+1);break;case 1:K=j.diff(x,"days"),E=Math.max(1,G.diff(j,"days")+1);break;case 2:K=j.diff(x,"hours"),E=Math.max(1,G.diff(j,"hours")+1);break;default:K=0,E=1}const _=K*g;let D=0;for(const Q of i)Q<=T&&D++;const N=T*he+D*Me,O=E*g;return{index:C,selection:y,x:_,y:N,width:O,height:he}}),[e,r,t,x,g]),M=(y,C)=>{const T=$(y).format("MMM D"),P=$(C).format("MMM D");return T===P?T:`${T} - ${P}`},m=y=>!y.hasConflict||!y.conflicts?"":`⚠️ Conflicts with:
${y.conflicts.map(T=>{const P=(T.overlapDuration/36e5).toFixed(1);return`• ${T.event.title} (${P}h overlap)`}).join(`
`)}`,W=p.useCallback(y=>{let C=0;for(const T of r){const P=Math.max(T.data.length,1);if(y>=C*he&&y<(C+P)*he)return{resourceId:T.id,resourceLabel:T.label};C+=P}return null},[r]),q=p.useCallback(y=>{const C=Math.floor(y/g);switch(t){case 0:return x.add(C*7,"days").toDate();case 1:return x.add(C,"days").toDate();case 2:return x.add(C,"hours").toDate();default:return x.toDate()}},[t,x,g]),Z=p.useCallback((y,C)=>{!s||(y.preventDefault(),y.stopPropagation(),!b[C])||(h.current={x:y.clientX,y:y.clientY},d(C),l({x:0,y:0}))},[s,b]),A=p.useCallback(y=>{if(c===null||!h.current)return;const C=y.clientX-h.current.x,T=y.clientY-h.current.y,P=Math.round(C/g)*g,j=Math.round(T/he)*he;l({x:P,y:j})},[c,g]),u=p.useCallback(()=>{if(c===null||!s){d(null),l({x:0,y:0}),h.current=null;return}const y=b[c];if(!y){d(null),l({x:0,y:0}),h.current=null;return}const C=y.x+a.x,T=y.y+a.y,P=W(T+he/2);if(!P){d(null),l({x:0,y:0}),h.current=null;return}const j=q(C),G=e[c],K=G.endDate.getTime()-G.startDate.getTime(),E=new Date(j.getTime()+K);s(c,{startDate:j,endDate:E,resourceId:P.resourceId,resourceLabel:P.resourceLabel}),d(null),l({x:0,y:0}),h.current=null},[c,a,b,e,s,W,q]);return p.useEffect(()=>{if(c!==null)return document.addEventListener("mousemove",A),document.addEventListener("mouseup",u),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",u)}},[c,A,u]),f.jsx(f.Fragment,{children:b.map(y=>{if(!y)return null;const C=y.selection.hasConflict||!1,T=c===y.index,P=T?y.x+a.x:y.x,j=T?y.y+a.y:y.y;return f.jsxs(Ac,{$hasConflict:C,$isDragging:T,style:{left:P,top:j,width:y.width,height:y.height},"data-multi-select-ui":!0,onMouseDown:G=>Z(G,y.index),children:[C&&f.jsx(Oc,{title:m(y.selection),children:"⚠️"}),f.jsx(Ic,{$hasConflict:C,children:M(y.selection.startDate,y.selection.endDate)}),f.jsx(Yc,{onClick:G=>{G.stopPropagation(),o(y.index)},onMouseDown:G=>G.stopPropagation(),title:C?"Remove conflicting selection":"Remove selection",children:"×"})]},y.index)})})},Nc=k.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 2px solid ${({theme:e})=>e.colors.today};
  box-shadow: inset 0 3px 0 0 ${({theme:e})=>e.colors.today}, 0 0 10px ${({theme:e})=>e.colors.today}33;
  background: ${({theme:e})=>e.colors.today}12;
  border-radius: 0 0 2px 2px;
`,Fc=({zoom:e,startDate:r})=>{const{cols:t}=We(),n=p.useMemo(()=>{if(e===2)return null;const o=e===0?Ee*7:ve,s=$().year(r.year).month(r.month).date(r.dayOfMonth).startOf("day"),i=$().startOf("day"),c=e===0?i.startOf("week").diff(s.startOf("week"),"week"):i.diff(s,"days");return c<0||c>=t?null:{x:c*o,width:o}},[e,r,t]);return n?f.jsx(Nc,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},yl="";ke.Scheduler=Wi,Object.defineProperty(ke,Symbol.toStringTag,{value:"Module"})});
