(function(Me,f){typeof exports=="object"&&typeof module<"u"?f(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],f):(Me=typeof globalThis<"u"?globalThis:Me||self,f(Me["react-scheduler"]={},Me["react/jsx-runtime"],Me.React,Me.ReactDOM))})(this,function(Me,f,p,Br){"use strict";var Ic=Object.defineProperty;var Oc=(Me,f,p)=>f in Me?Ic(Me,f,{enumerable:!0,configurable:!0,writable:!0,value:p}):Me[f]=p;var zr=(Me,f,p)=>(Oc(Me,typeof f!="symbol"?f+"":f,p),p);function jr(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const re=jr(p);var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lt={},Zr={get exports(){return lt},set exports(e){lt=e}},pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wn;function Vr(){if(wn)return pe;wn=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),l=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),v;v=Symbol.for("react.module.reference");function k(g){if(typeof g=="object"&&g!==null){var L=g.$$typeof;switch(L){case e:switch(g=g.type,g){case t:case o:case n:case a:case l:return g;default:switch(g=g&&g.$$typeof,g){case c:case i:case d:case m:case h:case s:return g;default:return L}}case r:return L}}}return pe.ContextConsumer=i,pe.ContextProvider=s,pe.Element=e,pe.ForwardRef=d,pe.Fragment=t,pe.Lazy=m,pe.Memo=h,pe.Portal=r,pe.Profiler=o,pe.StrictMode=n,pe.Suspense=a,pe.SuspenseList=l,pe.isAsyncMode=function(){return!1},pe.isConcurrentMode=function(){return!1},pe.isContextConsumer=function(g){return k(g)===i},pe.isContextProvider=function(g){return k(g)===s},pe.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===e},pe.isForwardRef=function(g){return k(g)===d},pe.isFragment=function(g){return k(g)===t},pe.isLazy=function(g){return k(g)===m},pe.isMemo=function(g){return k(g)===h},pe.isPortal=function(g){return k(g)===r},pe.isProfiler=function(g){return k(g)===o},pe.isStrictMode=function(g){return k(g)===n},pe.isSuspense=function(g){return k(g)===a},pe.isSuspenseList=function(g){return k(g)===l},pe.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===t||g===o||g===n||g===a||g===l||g===x||typeof g=="object"&&g!==null&&(g.$$typeof===m||g.$$typeof===h||g.$$typeof===s||g.$$typeof===i||g.$$typeof===d||g.$$typeof===v||g.getModuleId!==void 0)},pe.typeOf=k,pe}var me={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sn;function Gr(){return Sn||(Sn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),l=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),v=!1,k=!1,g=!1,L=!1,q=!1,Z;Z=Symbol.for("react.module.reference");function A(N){return!!(typeof N=="string"||typeof N=="function"||N===t||N===o||q||N===n||N===a||N===l||L||N===x||v||k||g||typeof N=="object"&&N!==null&&(N.$$typeof===m||N.$$typeof===h||N.$$typeof===s||N.$$typeof===i||N.$$typeof===d||N.$$typeof===Z||N.getModuleId!==void 0))}function u(N){if(typeof N=="object"&&N!==null){var K=N.$$typeof;switch(K){case e:var te=N.type;switch(te){case t:case o:case n:case a:case l:return te;default:var W=te&&te.$$typeof;switch(W){case c:case i:case d:case m:case h:case s:return W;default:return K}}case r:return K}}}var y=i,S=s,E=e,T=d,j=t,Q=m,U=h,P=r,_=o,D=n,F=a,O=l,J=!1,ee=!1;function se(N){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function oe(N){return ee||(ee=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function B(N){return u(N)===i}function V(N){return u(N)===s}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function X(N){return u(N)===d}function w(N){return u(N)===t}function H(N){return u(N)===m}function b(N){return u(N)===h}function Y(N){return u(N)===r}function z(N){return u(N)===o}function I(N){return u(N)===n}function C(N){return u(N)===a}function R(N){return u(N)===l}me.ContextConsumer=y,me.ContextProvider=S,me.Element=E,me.ForwardRef=T,me.Fragment=j,me.Lazy=Q,me.Memo=U,me.Portal=P,me.Profiler=_,me.StrictMode=D,me.Suspense=F,me.SuspenseList=O,me.isAsyncMode=se,me.isConcurrentMode=oe,me.isContextConsumer=B,me.isContextProvider=V,me.isElement=G,me.isForwardRef=X,me.isFragment=w,me.isLazy=H,me.isMemo=b,me.isPortal=Y,me.isProfiler=z,me.isStrictMode=I,me.isSuspense=C,me.isSuspenseList=R,me.isValidElementType=A,me.typeOf=u}()),me}(function(e){process.env.NODE_ENV==="production"?e.exports=Vr():e.exports=Gr()})(Zr);function Xr(e){function r(B,V,G,X,w){for(var H=0,b=0,Y=0,z=0,I,C,R=0,N=0,K,te=K=I=0,W=0,ie=0,fe=0,de=0,ae=G.length,le=ae-1,ce,ne="",ue="",Se="",Ee="",De;W<ae;){if(C=G.charCodeAt(W),W===le&&b+z+Y+H!==0&&(b!==0&&(C=b===47?10:47),z=Y=H=0,ae++,le++),b+z+Y+H===0){if(W===le&&(0<ie&&(ne=ne.replace(m,"")),0<ne.trim().length)){switch(C){case 32:case 9:case 59:case 13:case 10:break;default:ne+=G.charAt(W)}C=59}switch(C){case 123:for(ne=ne.trim(),I=ne.charCodeAt(0),K=1,de=++W;W<ae;){switch(C=G.charCodeAt(W)){case 123:K++;break;case 125:K--;break;case 47:switch(C=G.charCodeAt(W+1)){case 42:case 47:e:{for(te=W+1;te<le;++te)switch(G.charCodeAt(te)){case 47:if(C===42&&G.charCodeAt(te-1)===42&&W+2!==te){W=te+1;break e}break;case 10:if(C===47){W=te+1;break e}}W=te}}break;case 91:C++;case 40:C++;case 34:case 39:for(;W++<le&&G.charCodeAt(W)!==C;);}if(K===0)break;W++}switch(K=G.substring(de,W),I===0&&(I=(ne=ne.replace(h,"").trim()).charCodeAt(0)),I){case 64:switch(0<ie&&(ne=ne.replace(m,"")),C=ne.charCodeAt(1),C){case 100:case 109:case 115:case 45:ie=V;break;default:ie=F}if(K=r(V,ie,K,C,w+1),de=K.length,0<J&&(ie=t(F,ne,fe),De=c(3,K,ie,V,P,U,de,C,w,X),ne=ie.join(""),De!==void 0&&(de=(K=De.trim()).length)===0&&(C=0,K="")),0<de)switch(C){case 115:ne=ne.replace(y,i);case 100:case 109:case 45:K=ne+"{"+K+"}";break;case 107:ne=ne.replace(q,"$1 $2"),K=ne+"{"+K+"}",K=D===1||D===2&&s("@"+K,3)?"@-webkit-"+K+"@"+K:"@"+K;break;default:K=ne+K,X===112&&(K=(ue+=K,""))}else K="";break;default:K=r(V,t(V,ne,fe),K,X,w+1)}Se+=K,K=fe=ie=te=I=0,ne="",C=G.charCodeAt(++W);break;case 125:case 59:if(ne=(0<ie?ne.replace(m,""):ne).trim(),1<(de=ne.length))switch(te===0&&(I=ne.charCodeAt(0),I===45||96<I&&123>I)&&(de=(ne=ne.replace(" ",":")).length),0<J&&(De=c(1,ne,V,B,P,U,ue.length,X,w,X))!==void 0&&(de=(ne=De.trim()).length)===0&&(ne="\0\0"),I=ne.charCodeAt(0),C=ne.charCodeAt(1),I){case 0:break;case 64:if(C===105||C===99){Ee+=ne+G.charAt(W);break}default:ne.charCodeAt(de-1)!==58&&(ue+=o(ne,I,C,ne.charCodeAt(2)))}fe=ie=te=I=0,ne="",C=G.charCodeAt(++W)}}switch(C){case 13:case 10:b===47?b=0:1+I===0&&X!==107&&0<ne.length&&(ie=1,ne+="\0"),0<J*se&&c(0,ne,V,B,P,U,ue.length,X,w,X),U=1,P++;break;case 59:case 125:if(b+z+Y+H===0){U++;break}default:switch(U++,ce=G.charAt(W),C){case 9:case 32:if(z+H+b===0)switch(R){case 44:case 58:case 9:case 32:ce="";break;default:C!==32&&(ce=" ")}break;case 0:ce="\\0";break;case 12:ce="\\f";break;case 11:ce="\\v";break;case 38:z+b+H===0&&(ie=fe=1,ce="\f"+ce);break;case 108:if(z+b+H+_===0&&0<te)switch(W-te){case 2:R===112&&G.charCodeAt(W-3)===58&&(_=R);case 8:N===111&&(_=N)}break;case 58:z+b+H===0&&(te=W);break;case 44:b+Y+z+H===0&&(ie=1,ce+="\r");break;case 34:case 39:b===0&&(z=z===C?0:z===0?C:z);break;case 91:z+b+Y===0&&H++;break;case 93:z+b+Y===0&&H--;break;case 41:z+b+H===0&&Y--;break;case 40:if(z+b+H===0){if(I===0)switch(2*R+3*N){case 533:break;default:I=1}Y++}break;case 64:b+Y+z+H+te+K===0&&(K=1);break;case 42:case 47:if(!(0<z+H+Y))switch(b){case 0:switch(2*C+3*G.charCodeAt(W+1)){case 235:b=47;break;case 220:de=W,b=42}break;case 42:C===47&&R===42&&de+2!==W&&(G.charCodeAt(de+2)===33&&(ue+=G.substring(de,W+1)),ce="",b=0)}}b===0&&(ne+=ce)}N=R,R=C,W++}if(de=ue.length,0<de){if(ie=V,0<J&&(De=c(2,ue,ie,B,P,U,de,X,w,X),De!==void 0&&(ue=De).length===0))return Ee+ue+Se;if(ue=ie.join(",")+"{"+ue+"}",D*_!==0){switch(D!==2||s(ue,2)||(_=0),_){case 111:ue=ue.replace(A,":-moz-$1")+ue;break;case 112:ue=ue.replace(Z,"::-webkit-input-$1")+ue.replace(Z,"::-moz-$1")+ue.replace(Z,":-ms-input-$1")+ue}_=0}}return Ee+ue+Se}function t(B,V,G){var X=V.trim().split(g);V=X;var w=X.length,H=B.length;switch(H){case 0:case 1:var b=0;for(B=H===0?"":B[0]+" ";b<w;++b)V[b]=n(B,V[b],G).trim();break;default:var Y=b=0;for(V=[];b<w;++b)for(var z=0;z<H;++z)V[Y++]=n(B[z]+" ",X[b],G).trim()}return V}function n(B,V,G){var X=V.charCodeAt(0);switch(33>X&&(X=(V=V.trim()).charCodeAt(0)),X){case 38:return V.replace(L,"$1"+B.trim());case 58:return B.trim()+V.replace(L,"$1"+B.trim());default:if(0<1*G&&0<V.indexOf("\f"))return V.replace(L,(B.charCodeAt(0)===58?"":"$1")+B.trim())}return B+V}function o(B,V,G,X){var w=B+";",H=2*V+3*G+4*X;if(H===944){B=w.indexOf(":",9)+1;var b=w.substring(B,w.length-1).trim();return b=w.substring(0,B).trim()+b+";",D===1||D===2&&s(b,1)?"-webkit-"+b+b:b}if(D===0||D===2&&!s(w,1))return w;switch(H){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(Q,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return b=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+b+"-webkit-"+w+"-ms-flex-pack"+b+w;case 1005:return v.test(w)?w.replace(x,":-webkit-")+w.replace(x,":-moz-")+w:w;case 1e3:switch(b=w.substring(13).trim(),V=b.indexOf("-")+1,b.charCodeAt(0)+b.charCodeAt(V)){case 226:b=w.replace(u,"tb");break;case 232:b=w.replace(u,"tb-rl");break;case 220:b=w.replace(u,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+b+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(V=(w=B).length-10,b=(w.charCodeAt(V)===33?w.substring(0,V):w).substring(B.indexOf(":",7)+1).trim(),H=b.charCodeAt(0)+(b.charCodeAt(7)|0)){case 203:if(111>b.charCodeAt(8))break;case 115:w=w.replace(b,"-webkit-"+b)+";"+w;break;case 207:case 102:w=w.replace(b,"-webkit-"+(102<H?"inline-":"")+"box")+";"+w.replace(b,"-webkit-"+b)+";"+w.replace(b,"-ms-"+b+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return b=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+b+"-ms-flex-"+b+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(E,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(E,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(j.test(B)===!0)return(b=B.substring(B.indexOf(":")+1)).charCodeAt(0)===115?o(B.replace("stretch","fill-available"),V,G,X).replace(":fill-available",":stretch"):w.replace(b,"-webkit-"+b)+w.replace(b,"-moz-"+b.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,G+X===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(k,"$1-webkit-$2")+w}return w}function s(B,V){var G=B.indexOf(V===1?":":"{"),X=B.substring(0,V!==3?G:10);return G=B.substring(G+1,B.length-1),ee(V!==2?X:X.replace(T,"$1"),G,V)}function i(B,V){var G=o(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return G!==V+";"?G.replace(S," or ($1)").substring(4):"("+V+")"}function c(B,V,G,X,w,H,b,Y,z,I){for(var C=0,R=V,N;C<J;++C)switch(N=O[C].call(l,B,R,G,X,w,H,b,Y,z,I)){case void 0:case!1:case!0:case null:break;default:R=N}if(R!==V)return R}function d(B){switch(B){case void 0:case null:J=O.length=0;break;default:if(typeof B=="function")O[J++]=B;else if(typeof B=="object")for(var V=0,G=B.length;V<G;++V)d(B[V]);else se=!!B|0}return d}function a(B){return B=B.prefix,B!==void 0&&(ee=null,B?typeof B!="function"?D=1:(D=2,ee=B):D=0),a}function l(B,V){var G=B;if(33>G.charCodeAt(0)&&(G=G.trim()),oe=G,G=[oe],0<J){var X=c(-1,V,G,G,P,U,0,0,0,0);X!==void 0&&typeof X=="string"&&(V=X)}var w=r(F,G,V,0,0);return 0<J&&(X=c(-2,w,G,G,P,U,w.length,0,0,0),X!==void 0&&(w=X)),oe="",_=0,U=P=1,w}var h=/^\0+/g,m=/[\0\r\f]/g,x=/: */g,v=/zoo|gra/,k=/([,: ])(transform)/g,g=/,\r+?/g,L=/([\t\r\n ])*\f?&/g,q=/@(k\w+)\s*(\S*)\s*/,Z=/::(place)/g,A=/:(read-only)/g,u=/[svh]\w+-[tblr]{2}/,y=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,E=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,Q=/([^-])(image-set\()/,U=1,P=1,_=0,D=1,F=[],O=[],J=0,ee=null,se=0,oe="";return l.use=d,l.set=a,e!==void 0&&a(e),l}var Ur={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Kr(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Jr=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Cn=Kr(function(e){return Jr.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),_t={},qr={get exports(){return _t},set exports(e){_t=e}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mn;function Qr(){if(Mn)return ge;Mn=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,a=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,v=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,q=e?Symbol.for("react.scope"):60119;function Z(u){if(typeof u=="object"&&u!==null){var y=u.$$typeof;switch(y){case r:switch(u=u.type,u){case d:case a:case n:case s:case o:case h:return u;default:switch(u=u&&u.$$typeof,u){case c:case l:case v:case x:case i:return u;default:return y}}case t:return y}}}function A(u){return Z(u)===a}return ge.AsyncMode=d,ge.ConcurrentMode=a,ge.ContextConsumer=c,ge.ContextProvider=i,ge.Element=r,ge.ForwardRef=l,ge.Fragment=n,ge.Lazy=v,ge.Memo=x,ge.Portal=t,ge.Profiler=s,ge.StrictMode=o,ge.Suspense=h,ge.isAsyncMode=function(u){return A(u)||Z(u)===d},ge.isConcurrentMode=A,ge.isContextConsumer=function(u){return Z(u)===c},ge.isContextProvider=function(u){return Z(u)===i},ge.isElement=function(u){return typeof u=="object"&&u!==null&&u.$$typeof===r},ge.isForwardRef=function(u){return Z(u)===l},ge.isFragment=function(u){return Z(u)===n},ge.isLazy=function(u){return Z(u)===v},ge.isMemo=function(u){return Z(u)===x},ge.isPortal=function(u){return Z(u)===t},ge.isProfiler=function(u){return Z(u)===s},ge.isStrictMode=function(u){return Z(u)===o},ge.isSuspense=function(u){return Z(u)===h},ge.isValidElementType=function(u){return typeof u=="string"||typeof u=="function"||u===n||u===a||u===s||u===o||u===h||u===m||typeof u=="object"&&u!==null&&(u.$$typeof===v||u.$$typeof===x||u.$$typeof===i||u.$$typeof===c||u.$$typeof===l||u.$$typeof===g||u.$$typeof===L||u.$$typeof===q||u.$$typeof===k)},ge.typeOf=Z,ge}var ye={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kn;function Rr(){return kn||(kn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,a=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,v=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,q=e?Symbol.for("react.scope"):60119;function Z(C){return typeof C=="string"||typeof C=="function"||C===n||C===a||C===s||C===o||C===h||C===m||typeof C=="object"&&C!==null&&(C.$$typeof===v||C.$$typeof===x||C.$$typeof===i||C.$$typeof===c||C.$$typeof===l||C.$$typeof===g||C.$$typeof===L||C.$$typeof===q||C.$$typeof===k)}function A(C){if(typeof C=="object"&&C!==null){var R=C.$$typeof;switch(R){case r:var N=C.type;switch(N){case d:case a:case n:case s:case o:case h:return N;default:var K=N&&N.$$typeof;switch(K){case c:case l:case v:case x:case i:return K;default:return R}}case t:return R}}}var u=d,y=a,S=c,E=i,T=r,j=l,Q=n,U=v,P=x,_=t,D=s,F=o,O=h,J=!1;function ee(C){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),se(C)||A(C)===d}function se(C){return A(C)===a}function oe(C){return A(C)===c}function B(C){return A(C)===i}function V(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function G(C){return A(C)===l}function X(C){return A(C)===n}function w(C){return A(C)===v}function H(C){return A(C)===x}function b(C){return A(C)===t}function Y(C){return A(C)===s}function z(C){return A(C)===o}function I(C){return A(C)===h}ye.AsyncMode=u,ye.ConcurrentMode=y,ye.ContextConsumer=S,ye.ContextProvider=E,ye.Element=T,ye.ForwardRef=j,ye.Fragment=Q,ye.Lazy=U,ye.Memo=P,ye.Portal=_,ye.Profiler=D,ye.StrictMode=F,ye.Suspense=O,ye.isAsyncMode=ee,ye.isConcurrentMode=se,ye.isContextConsumer=oe,ye.isContextProvider=B,ye.isElement=V,ye.isForwardRef=G,ye.isFragment=X,ye.isLazy=w,ye.isMemo=H,ye.isPortal=b,ye.isProfiler=Y,ye.isStrictMode=z,ye.isSuspense=I,ye.isValidElementType=Z,ye.typeOf=A}()),ye}(function(e){process.env.NODE_ENV==="production"?e.exports=Qr():e.exports=Rr()})(qr);var Tt=_t,eo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},to={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},no={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pt={};Pt[Tt.ForwardRef]=no,Pt[Tt.Memo]=Dn;function $n(e){return Tt.isMemo(e)?Dn:Pt[e.$$typeof]||eo}var ro=Object.defineProperty,oo=Object.getOwnPropertyNames,En=Object.getOwnPropertySymbols,so=Object.getOwnPropertyDescriptor,io=Object.getPrototypeOf,_n=Object.prototype;function Tn(e,r,t){if(typeof r!="string"){if(_n){var n=io(r);n&&n!==_n&&Tn(e,n,t)}var o=oo(r);En&&(o=o.concat(En(r)));for(var s=$n(e),i=$n(r),c=0;c<o.length;++c){var d=o[c];if(!to[d]&&!(t&&t[d])&&!(i&&i[d])&&!(s&&s[d])){var a=so(r,d);try{ro(e,d,a)}catch{}}}}return e}var ao=Tn;function Te(){return(Te=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Pn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},At=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!lt.typeOf(e)},mt=Object.freeze([]),Ne=Object.freeze({});function Ke(e){return typeof e=="function"}function It(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Ot(e){return e&&typeof e.styledComponentId=="string"}var Je=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Yt=typeof window<"u"&&"HTMLElement"in window,co=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),lo={},uo=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function fo(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Ie(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(fo.apply(void 0,[uo[e]].concat(t)).trim())}var ho=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,i=s;t>=i;)(i<<=1)<0&&Ie(16,""+t);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var c=s;c<i;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(t+1),a=0,l=n.length;a<l;a++)this.tag.insertRule(d,n[a])&&(this.groupSizes[t]++,d++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var i=o;i<s;i++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),i=s+o,c=s;c<i;c++)n+=this.tag.getRule(c)+`/*!sc*/
`;return n},e}(),gt=new Map,yt=new Map,dt=1,vt=function(e){if(gt.has(e))return gt.get(e);for(;yt.has(dt);)dt++;var r=dt++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&Ie(16,""+r),gt.set(e,r),yt.set(r,e),r},po=function(e){return yt.get(e)},mo=function(e,r){r>=dt&&(dt=r+1),gt.set(e,r),yt.set(r,e)},go="style["+Je+'][data-styled-version="5.3.8"]',yo=new RegExp("^"+Je+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),vo=function(e,r,t){for(var n,o=t.split(","),s=0,i=o.length;s<i;s++)(n=o[s])&&e.registerName(r,n)},bo=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var i=t[o].trim();if(i){var c=i.match(yo);if(c){var d=0|parseInt(c[1],10),a=c[2];d!==0&&(mo(a,d),vo(e,a,c[3]),e.getTag().insertRules(d,n)),n.length=0}else n.push(i)}}},xo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},An=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(c){for(var d=c.childNodes,a=d.length;a>=0;a--){var l=d[a];if(l&&l.nodeType===1&&l.hasAttribute(Je))return l}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(Je,"active"),n.setAttribute("data-styled-version","5.3.8");var i=xo();return i&&n.setAttribute("nonce",i),t.insertBefore(n,s),n},wo=function(){function e(t){var n=this.element=An(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,i=0,c=s.length;i<c;i++){var d=s[i];if(d.ownerNode===o)return d}Ie(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),So=function(){function e(t){var n=this.element=An(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Co=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),In=Yt,Mo={isServer:!Yt,useCSSOMInjection:!co},bt=function(){function e(t,n,o){t===void 0&&(t=Ne),n===void 0&&(n={}),this.options=Te({},Mo,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Yt&&In&&(In=!1,function(s){for(var i=document.querySelectorAll(go),c=0,d=i.length;c<d;c++){var a=i[c];a&&a.getAttribute(Je)!=="active"&&(bo(s,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(t){return vt(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Te({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,i=n.target,t=o?new Co(i):s?new wo(i):new So(i),new ho(t)));var t,n,o,s,i},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(vt(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(vt(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(vt(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",i=0;i<o;i++){var c=po(i);if(c!==void 0){var d=t.names.get(c),a=n.getGroup(i);if(d&&a&&d.size){var l=Je+".g"+i+'[id="'+c+'"]',h="";d!==void 0&&d.forEach(function(m){m.length>0&&(h+=m+",")}),s+=""+a+l+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),ko=/(a)(d)/gi,On=function(e){return String.fromCharCode(e+(e>25?39:97))};function Lt(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=On(r%52)+t;return(On(r%52)+t).replace(ko,"$1-$2")}var We=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},Yn=function(e){return We(5381,e)};function Ln(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(Ke(t)&&!Ot(t))return!1}return!0}var Do=Yn("5.3.8"),$o=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&Ln(r),this.componentId=t,this.baseHash=We(Do,t),this.baseStyle=n,bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var i=ze(this.rules,r,t,n).join(""),c=Lt(We(this.baseHash,i)>>>0);if(!t.hasNameForId(o,c)){var d=n(i,"."+c,void 0,o);t.insertRules(o,c,d)}s.push(c),this.staticRulesId=c}else{for(var a=this.rules.length,l=We(this.baseHash,n.hash),h="",m=0;m<a;m++){var x=this.rules[m];if(typeof x=="string")h+=x,process.env.NODE_ENV!=="production"&&(l=We(l,x+m));else if(x){var v=ze(x,r,t,n),k=Array.isArray(v)?v.join(""):v;l=We(l,k+m),h+=k}}if(h){var g=Lt(l>>>0);if(!t.hasNameForId(o,g)){var L=n(h,"."+g,void 0,o);t.insertRules(o,g,L)}s.push(g)}}return s.join(" ")},e}(),Eo=/^\s*\/\/.*$/gm,_o=[":","[",".","#"];function To(e){var r,t,n,o,s=e===void 0?Ne:e,i=s.options,c=i===void 0?Ne:i,d=s.plugins,a=d===void 0?mt:d,l=new Xr(c),h=[],m=function(k){function g(L){if(L)try{k(L+"}")}catch{}}return function(L,q,Z,A,u,y,S,E,T,j){switch(L){case 1:if(T===0&&q.charCodeAt(0)===64)return k(q+";"),"";break;case 2:if(E===0)return q+"/*|*/";break;case 3:switch(E){case 102:case 112:return k(Z[0]+q),"";default:return q+(j===0?"/*|*/":"")}case-2:q.split("/*|*/}").forEach(g)}}}(function(k){h.push(k)}),x=function(k,g,L){return g===0&&_o.indexOf(L[t.length])!==-1||L.match(o)?k:"."+r};function v(k,g,L,q){q===void 0&&(q="&");var Z=k.replace(Eo,""),A=g&&L?L+" "+g+" { "+Z+" }":Z;return r=q,t=g,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),l(L||!g?"":g,A)}return l.use([].concat(a,[function(k,g,L){k===2&&L.length&&L[0].lastIndexOf(t)>0&&(L[0]=L[0].replace(n,x))},m,function(k){if(k===-2){var g=h;return h=[],g}}])),v.hash=a.length?a.reduce(function(k,g){return g.name||Ie(15),We(k,g.name)},5381).toString():"",v}var Nn=p.createContext();Nn.Consumer;var Fn=p.createContext(),Po=(Fn.Consumer,new bt),Nt=To();function Hn(){return p.useContext(Nn)||Po}function Wn(){return p.useContext(Fn)||Nt}var zn=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=Nt);var i=n.name+s.hash;o.hasNameForId(n.id,i)||o.insertRules(n.id,i,s(n.rules,i,"@keyframes"))},this.toString=function(){return Ie(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=Nt),this.name+r.hash},e}(),Ao=/([A-Z])/,Io=/([A-Z])/g,Oo=/^ms-/,Yo=function(e){return"-"+e.toLowerCase()};function Bn(e){return Ao.test(e)?e.replace(Io,Yo).replace(Oo,"-ms-"):e}var jn=function(e){return e==null||e===!1||e===""};function ze(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],i=0,c=e.length;i<c;i+=1)(o=ze(e[i],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(jn(e))return"";if(Ot(e))return"."+e.styledComponentId;if(Ke(e)){if(typeof(a=e)!="function"||a.prototype&&a.prototype.isReactComponent||!r)return e;var d=e(r);return process.env.NODE_ENV!=="production"&&lt.isElement(d)&&console.warn(It(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),ze(d,r,t,n)}var a;return e instanceof zn?t?(e.inject(t,n),e.getName(n)):e:At(e)?function l(h,m){var x,v,k=[];for(var g in h)h.hasOwnProperty(g)&&!jn(h[g])&&(Array.isArray(h[g])&&h[g].isCss||Ke(h[g])?k.push(Bn(g)+":",h[g],";"):At(h[g])?k.push.apply(k,l(h[g],g)):k.push(Bn(g)+": "+(x=g,(v=h[g])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||x in Ur?String(v).trim():v+"px")+";"));return m?[m+" {"].concat(k,["}"]):k}(e):e.toString()}var Zn=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function xt(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return Ke(e)||At(e)?Zn(ze(Pn(mt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:Zn(ze(Pn(e,t)))}var Vn=/invalid hook call/i,wt=new Set,Gn=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(Vn.test(s))o=!1,wt.delete(t);else{for(var i=arguments.length,c=new Array(i>1?i-1:0),d=1;d<i;d++)c[d-1]=arguments[d];n.apply(void 0,[s].concat(c))}},p.useRef(),o&&!wt.has(t)&&(console.warn(t),wt.add(t))}catch(s){Vn.test(s.message)&&wt.delete(t)}finally{console.error=n}}},Xn=function(e,r,t){return t===void 0&&(t=Ne),e.theme!==t.theme&&e.theme||r||t.theme},Lo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,No=/(^-|-$)/g;function Ft(e){return e.replace(Lo,"-").replace(No,"")}var Ht=function(e){return Lt(Yn(e)>>>0)};function St(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Wt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Fo=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ho(e,r,t){var n=e[t];Wt(r)&&Wt(n)?Un(n,r):e[t]=r}function Un(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var i=s[o];if(Wt(i))for(var c in i)Fo(c)&&Ho(e,i[c],c)}return e}var qe=p.createContext();qe.Consumer;function Wo(e){var r=p.useContext(qe),t=p.useMemo(function(){return function(n,o){if(!n)return Ie(14);if(Ke(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Ie(7)}return Array.isArray(n)||typeof n!="object"?Ie(8):o?Te({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?p.createElement(qe.Provider,{value:t},e.children):null}var zt={};function Kn(e,r,t){var n=Ot(e),o=!St(e),s=r.attrs,i=s===void 0?mt:s,c=r.componentId,d=c===void 0?function(q,Z){var A=typeof q!="string"?"sc":Ft(q);zt[A]=(zt[A]||0)+1;var u=A+"-"+Ht("5.3.8"+A+zt[A]);return Z?Z+"-"+u:u}(r.displayName,r.parentComponentId):c,a=r.displayName,l=a===void 0?function(q){return St(q)?"styled."+q:"Styled("+It(q)+")"}(e):a,h=r.displayName&&r.componentId?Ft(r.displayName)+"-"+r.componentId:r.componentId||d,m=n&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,x=r.shouldForwardProp;n&&e.shouldForwardProp&&(x=r.shouldForwardProp?function(q,Z,A){return e.shouldForwardProp(q,Z,A)&&r.shouldForwardProp(q,Z,A)}:e.shouldForwardProp);var v,k=new $o(t,h,n?e.componentStyle:void 0),g=k.isStatic&&i.length===0,L=function(q,Z){return function(A,u,y,S){var E=A.attrs,T=A.componentStyle,j=A.defaultProps,Q=A.foldedComponentIds,U=A.shouldForwardProp,P=A.styledComponentId,_=A.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(P);var D=function(X,w,H){X===void 0&&(X=Ne);var b=Te({},w,{theme:X}),Y={};return H.forEach(function(z){var I,C,R,N=z;for(I in Ke(N)&&(N=N(b)),N)b[I]=Y[I]=I==="className"?(C=Y[I],R=N[I],C&&R?C+" "+R:C||R):N[I]}),[b,Y]}(Xn(u,p.useContext(qe),j)||Ne,u,E),F=D[0],O=D[1],J=function(X,w,H,b){var Y=Hn(),z=Wn(),I=w?X.generateAndInjectStyles(Ne,Y,z):X.generateAndInjectStyles(H,Y,z);return process.env.NODE_ENV!=="production"&&p.useDebugValue(I),process.env.NODE_ENV!=="production"&&!w&&b&&b(I),I}(T,S,F,process.env.NODE_ENV!=="production"?A.warnTooManyClasses:void 0),ee=y,se=O.$as||u.$as||O.as||u.as||_,oe=St(se),B=O!==u?Te({},u,{},O):u,V={};for(var G in B)G[0]!=="$"&&G!=="as"&&(G==="forwardedAs"?V.as=B[G]:(U?U(G,Cn,se):!oe||Cn(G))&&(V[G]=B[G]));return u.style&&O.style!==u.style&&(V.style=Te({},u.style,{},O.style)),V.className=Array.prototype.concat(Q,P,J!==P?J:null,u.className,O.className).filter(Boolean).join(" "),V.ref=ee,p.createElement(se,V)}(v,q,Z,g)};return L.displayName=l,(v=p.forwardRef(L)).attrs=m,v.componentStyle=k,v.displayName=l,v.shouldForwardProp=x,v.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):mt,v.styledComponentId=h,v.target=n?e.target:e,v.withComponent=function(q){var Z=r.componentId,A=function(y,S){if(y==null)return{};var E,T,j={},Q=Object.keys(y);for(T=0;T<Q.length;T++)E=Q[T],S.indexOf(E)>=0||(j[E]=y[E]);return j}(r,["componentId"]),u=Z&&Z+"-"+(St(q)?q:Ft(It(q)));return Kn(q,Te({},A,{attrs:m,componentId:u}),t)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=n?Un({},e.defaultProps,q):q}}),process.env.NODE_ENV!=="production"&&(Gn(l,h),v.warnTooManyClasses=function(q,Z){var A={},u=!1;return function(y){if(!u&&(A[y]=!0,Object.keys(A).length>=200)){var S=Z?' with the id of "'+Z+'"':"";console.warn("Over 200 classes were generated for component "+q+S+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),u=!0,A={}}}}(l,h)),v.toString=function(){return"."+v.styledComponentId},o&&ao(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Bt=function(e){return function r(t,n,o){if(o===void 0&&(o=Ne),!lt.isValidElementType(n))return Ie(1,String(n));var s=function(){return t(n,o,xt.apply(void 0,arguments))};return s.withConfig=function(i){return r(t,n,Te({},o,{},i))},s.attrs=function(i){return r(t,n,Te({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},s}(Kn,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Bt[e]=Bt(e)});var zo=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ln(t),bt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var i=s(ze(this.rules,n,o,s).join(""),""),c=this.componentId+t;o.insertRules(c,c,i)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&bt.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function Bo(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=xt.apply(void 0,[e].concat(t)),s="sc-global-"+Ht(JSON.stringify(o)),i=new zo(o,s);function c(a){var l=Hn(),h=Wn(),m=p.useContext(qe),x=p.useRef(l.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(a.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(v){return typeof v=="string"&&v.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),l.server&&d(x,a,l,m,h),p.useLayoutEffect(function(){if(!l.server)return d(x,a,l,m,h),function(){return i.removeStyles(x,l)}},[x,a,l,m,h]),null}function d(a,l,h,m,x){if(i.isStatic)i.renderStyles(a,lo,h,x);else{var v=Te({},l,{theme:Xn(l,m,c.defaultProps)});i.renderStyles(a,v,h,x)}}return process.env.NODE_ENV!=="production"&&Gn(s),p.memo(c)}function Ct(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=xt.apply(void 0,[e].concat(t)).join(""),s=Ht(o);return new zn(s,o)}var Be=function(){return p.useContext(qe)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const M=Bt,ut="reactSchedulerOutsideWrapper",jo=Bo`

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
`,Zo={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},Vo={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},je=`
margin: 0;
padding: 0;
`,Qe=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;M.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const ve=50,Oe=24,Re=16,Ze=40,et=Ze+Re+Oe,tt=84,he=56,$e=196,_e=12,we=50,nt=24,ft=16,jt=40,Go=nt+ft+jt,Jn=24,qn=52,Pe={topRow:"600 14px Inter",middleRow:"400 10px Inter",bottomRow:{name:"600 14px Inter",number:"600 10px Inter",hoursInDay:"400 9px Inter"}},rt=3,Xo=1.6,Uo=4.5,Zt=12,Mt=24,Ko="reactSchedulerCanvasHeaderWrapper",Qn="reactSchedulerCanvasWrapper",Ve=ut,Jo=4,Vt=48,Fe=5,qo=40,Rn=8,Gt=Oe/2+2,er=Re/2+Oe+1,tr=2,be=60,ke=21;var Ge={},Qo={get exports(){return Ge},set exports(e){Ge=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",i="second",c="minute",d="hour",a="day",l="week",h="month",m="quarter",x="year",v="date",k="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,L=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(P){var _=["th","st","nd","rd"],D=P%100;return"["+P+(_[(D-20)%10]||_[D]||_[0])+"]"}},Z=function(P,_,D){var F=String(P);return!F||F.length>=_?P:""+Array(_+1-F.length).join(D)+P},A={s:Z,z:function(P){var _=-P.utcOffset(),D=Math.abs(_),F=Math.floor(D/60),O=D%60;return(_<=0?"+":"-")+Z(F,2,"0")+":"+Z(O,2,"0")},m:function P(_,D){if(_.date()<D.date())return-P(D,_);var F=12*(D.year()-_.year())+(D.month()-_.month()),O=_.clone().add(F,h),J=D-O<0,ee=_.clone().add(F+(J?-1:1),h);return+(-(F+(D-O)/(J?O-ee:ee-O))||0)},a:function(P){return P<0?Math.ceil(P)||0:Math.floor(P)},p:function(P){return{M:h,y:x,w:l,d:a,D:v,h:d,m:c,s:i,ms:s,Q:m}[P]||String(P||"").toLowerCase().replace(/s$/,"")},u:function(P){return P===void 0}},u="en",y={};y[u]=q;var S=function(P){return P instanceof Q},E=function P(_,D,F){var O;if(!_)return u;if(typeof _=="string"){var J=_.toLowerCase();y[J]&&(O=J),D&&(y[J]=D,O=J);var ee=_.split("-");if(!O&&ee.length>1)return P(ee[0])}else{var se=_.name;y[se]=_,O=se}return!F&&O&&(u=O),O||!F&&u},T=function(P,_){if(S(P))return P.clone();var D=typeof _=="object"?_:{};return D.date=P,D.args=arguments,new Q(D)},j=A;j.l=E,j.i=S,j.w=function(P,_){return T(P,{locale:_.$L,utc:_.$u,x:_.$x,$offset:_.$offset})};var Q=function(){function P(D){this.$L=E(D.locale,null,!0),this.parse(D)}var _=P.prototype;return _.parse=function(D){this.$d=function(F){var O=F.date,J=F.utc;if(O===null)return new Date(NaN);if(j.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var ee=O.match(g);if(ee){var se=ee[2]-1||0,oe=(ee[7]||"0").substring(0,3);return J?new Date(Date.UTC(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)):new Date(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)}}return new Date(O)}(D),this.$x=D.x||{},this.init()},_.init=function(){var D=this.$d;this.$y=D.getFullYear(),this.$M=D.getMonth(),this.$D=D.getDate(),this.$W=D.getDay(),this.$H=D.getHours(),this.$m=D.getMinutes(),this.$s=D.getSeconds(),this.$ms=D.getMilliseconds()},_.$utils=function(){return j},_.isValid=function(){return this.$d.toString()!==k},_.isSame=function(D,F){var O=T(D);return this.startOf(F)<=O&&O<=this.endOf(F)},_.isAfter=function(D,F){return T(D)<this.startOf(F)},_.isBefore=function(D,F){return this.endOf(F)<T(D)},_.$g=function(D,F,O){return j.u(D)?this[F]:this.set(O,D)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(D,F){var O=this,J=!!j.u(F)||F,ee=j.p(D),se=function(b,Y){var z=j.w(O.$u?Date.UTC(O.$y,Y,b):new Date(O.$y,Y,b),O);return J?z:z.endOf(a)},oe=function(b,Y){return j.w(O.toDate()[b].apply(O.toDate("s"),(J?[0,0,0,0]:[23,59,59,999]).slice(Y)),O)},B=this.$W,V=this.$M,G=this.$D,X="set"+(this.$u?"UTC":"");switch(ee){case x:return J?se(1,0):se(31,11);case h:return J?se(1,V):se(0,V+1);case l:var w=this.$locale().weekStart||0,H=(B<w?B+7:B)-w;return se(J?G-H:G+(6-H),V);case a:case v:return oe(X+"Hours",0);case d:return oe(X+"Minutes",1);case c:return oe(X+"Seconds",2);case i:return oe(X+"Milliseconds",3);default:return this.clone()}},_.endOf=function(D){return this.startOf(D,!1)},_.$set=function(D,F){var O,J=j.p(D),ee="set"+(this.$u?"UTC":""),se=(O={},O[a]=ee+"Date",O[v]=ee+"Date",O[h]=ee+"Month",O[x]=ee+"FullYear",O[d]=ee+"Hours",O[c]=ee+"Minutes",O[i]=ee+"Seconds",O[s]=ee+"Milliseconds",O)[J],oe=J===a?this.$D+(F-this.$W):F;if(J===h||J===x){var B=this.clone().set(v,1);B.$d[se](oe),B.init(),this.$d=B.set(v,Math.min(this.$D,B.daysInMonth())).$d}else se&&this.$d[se](oe);return this.init(),this},_.set=function(D,F){return this.clone().$set(D,F)},_.get=function(D){return this[j.p(D)]()},_.add=function(D,F){var O,J=this;D=Number(D);var ee=j.p(F),se=function(V){var G=T(J);return j.w(G.date(G.date()+Math.round(V*D)),J)};if(ee===h)return this.set(h,this.$M+D);if(ee===x)return this.set(x,this.$y+D);if(ee===a)return se(1);if(ee===l)return se(7);var oe=(O={},O[c]=n,O[d]=o,O[i]=t,O)[ee]||1,B=this.$d.getTime()+D*oe;return j.w(B,this)},_.subtract=function(D,F){return this.add(-1*D,F)},_.format=function(D){var F=this,O=this.$locale();if(!this.isValid())return O.invalidDate||k;var J=D||"YYYY-MM-DDTHH:mm:ssZ",ee=j.z(this),se=this.$H,oe=this.$m,B=this.$M,V=O.weekdays,G=O.months,X=function(Y,z,I,C){return Y&&(Y[z]||Y(F,J))||I[z].slice(0,C)},w=function(Y){return j.s(se%12||12,Y,"0")},H=O.meridiem||function(Y,z,I){var C=Y<12?"AM":"PM";return I?C.toLowerCase():C},b={YY:String(this.$y).slice(-2),YYYY:this.$y,M:B+1,MM:j.s(B+1,2,"0"),MMM:X(O.monthsShort,B,G,3),MMMM:X(G,B),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:X(O.weekdaysMin,this.$W,V,2),ddd:X(O.weekdaysShort,this.$W,V,3),dddd:V[this.$W],H:String(se),HH:j.s(se,2,"0"),h:w(1),hh:w(2),a:H(se,oe,!0),A:H(se,oe,!1),m:String(oe),mm:j.s(oe,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:ee};return J.replace(L,function(Y,z){return z||b[Y]||ee.replace(":","")})},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(D,F,O){var J,ee=j.p(F),se=T(D),oe=(se.utcOffset()-this.utcOffset())*n,B=this-se,V=j.m(this,se);return V=(J={},J[x]=V/12,J[h]=V,J[m]=V/3,J[l]=(B-oe)/6048e5,J[a]=(B-oe)/864e5,J[d]=B/o,J[c]=B/n,J[i]=B/t,J)[ee]||B,O?V:j.a(V)},_.daysInMonth=function(){return this.endOf(h).$D},_.$locale=function(){return y[this.$L]},_.locale=function(D,F){if(!D)return this.$L;var O=this.clone(),J=E(D,F,!0);return J&&(O.$L=J),O},_.clone=function(){return j.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},P}(),U=Q.prototype;return T.prototype=U,[["$ms",s],["$s",i],["$m",c],["$H",d],["$W",a],["$M",h],["$y",x],["$D",v]].forEach(function(P){U[P[1]]=function(_){return this.$g(_,P[0],P[1])}}),T.extend=function(P,_){return P.$i||(P(_,Q,T),P.$i=!0),T},T.locale=E,T.isDayjs=S,T.unix=function(P){return T(1e3*P)},T.en=y[u],T.Ls=y,T.p={},T})})(Qo);const $=Ge,nr=e=>e%4===0&&e%100>0||e%400===0?366:365,Xt=e=>{const r=e.day();return r!==0&&r!==6},rr=(e,r)=>$(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),or=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:Xt(e),isCurrentDay:e.isSame($(),"day"),year:parseInt(e.format("YYYY"))}),Ut=(e,r,t,n,o,s,i)=>{e.strokeStyle=i.colors.border,s?e.fillStyle=i.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=i.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,he),e.strokeRect(r+.5,t+.5,n,he)},Kt=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*ke},Ro=(e,r,t,n,o,s=[])=>{for(let i=0;i<r;i++){const c=Kt(i,s);for(let d=0;d<=t;d++){const a=$(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(d,"days"),l=a.isSame($(),"day");Ut(e,d*ve,i*he+c,ve,Xt(a),l,o)}}},es=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},ts=(e,r,t,n,o,s=[])=>{let i=0,c=-(n.dayOfMonth-1)*_e;const d=r*he+s.length*ke;for(let a=0;a<=t;a++){const h=$(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(a,"weeks").isSame($(),"week");for(let m=0;m<r;m++){const x=Kt(m,s);Ut(e,i,m*he+x,tt,!0,h,o)}i+=tt}for(let a=0;a<t;a++){const l=rr(n,a)*_e;es(e,c,d,o),c+=l}},ns=(e,r,t,n,o,s=[])=>{const i=$(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let c=0;c<r;c++){const d=Kt(c,s);for(let a=0;a<=t;a++){let l;a===Math.floor(t/2)?l=$():a>Math.floor(t/2)?l=$().add(a-Math.floor(t/2),"hours"):l=$().subtract(Math.floor(t/2)-c,"hours");const h=i.isSame($(),"day")&&l.isSame($(),"hour");Ut(e,a*we+we/2-.5,c*he+d,we,Xt(l),h,o)}}},rs=(e,r,t,n)=>{const o=t*he+r*ke,s=e.canvas.width,i=o+ke/2;e.fillStyle=n.mode==="dark"?n.colors.primary+"80":n.colors.primary,e.fillRect(0,o,s,ke),e.strokeStyle=n.colors.border,e.lineWidth=1,e.setLineDash([]),e.beginPath(),e.moveTo(0,i+.5),e.lineTo(s,i+.5),e.stroke()},os=(e,r,t,n,o,s,i=[])=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(Qn)){switch(r){case 0:ts(e,t,n,o,s,i);break;case 1:Ro(e,t,n,o,s,i);break;case 2:ns(e,t,n,o,s,i);break}for(let d=0;d<i.length;d++)rs(e,d,i[d],s)}};var Jt={},ss={get exports(){return Jt},set exports(e){Jt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t="week",n="year";return function(o,s,i){var c=s.prototype;c.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var a=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var l=i(this).startOf(n).add(1,n).date(a),h=i(this).endOf(t);if(l.isBefore(h))return 1}var m=i(this).startOf(n).date(a).startOf(t).subtract(1,"millisecond"),x=this.diff(m,t,!0);return x<0?i(this).startOf("week").week():Math.ceil(x)},c.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(ss);const is=Jt;var qt={},as={get exports(){return qt},set exports(e){qt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var i=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?i:this.add(s-i,"day")}}})})(as);const cs=qt;var Qt={},ls={get exports(){return Qt},set exports(e){Qt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t="day";return function(n,o,s){var i=function(a){return a.add(4-a.isoWeekday(),t)},c=o.prototype;c.isoWeekYear=function(){return i(this).year()},c.isoWeek=function(a){if(!this.$utils().u(a))return this.add(7*(a-this.isoWeek()),t);var l,h,m,x,v=i(this),k=(l=this.isoWeekYear(),h=this.$u,m=(h?s.utc:s)().year(l).startOf("year"),x=4-m.isoWeekday(),m.isoWeekday()>4&&(x+=7),m.add(x,t));return v.diff(k,"week")+1},c.isoWeekday=function(a){return this.$utils().u(a)?this.day()||7:this.day(this.day()%7?a:a-7)};var d=c.startOf;c.startOf=function(a,l){var h=this.$utils(),m=!!h.u(l)||l;return h.p(a)==="isoweek"?m?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(a,l)}}})})(ls);const ds=Qt;var Rt={},us={get exports(){return Rt},set exports(e){Rt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n,o){n.prototype.isBetween=function(s,i,c,d){var a=o(s),l=o(i),h=(d=d||"()")[0]==="(",m=d[1]===")";return(h?this.isAfter(a,c):!this.isBefore(a,c))&&(m?this.isBefore(l,c):!this.isAfter(l,c))||(h?this.isBefore(a,c):!this.isAfter(a,c))&&(m?this.isAfter(l,c):!this.isBefore(l,c))}}})})(us);const fs=Rt;var en={},hs={get exports(){return en},set exports(e){en=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t,n,o=1e3,s=6e4,i=36e5,c=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,m={years:a,months:l,days:c,hours:i,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},x=function(u){return u instanceof A},v=function(u,y,S){return new A(u,S,y.$l)},k=function(u){return n.p(u)+"s"},g=function(u){return u<0},L=function(u){return g(u)?Math.ceil(u):Math.floor(u)},q=function(u){return Math.abs(u)},Z=function(u,y){return u?g(u)?{negative:!0,format:""+q(u)+y}:{negative:!1,format:""+u+y}:{negative:!1,format:""}},A=function(){function u(S,E,T){var j=this;if(this.$d={},this.$l=T,S===void 0&&(this.$ms=0,this.parseFromMilliseconds()),E)return v(S*m[k(E)],this);if(typeof S=="number")return this.$ms=S,this.parseFromMilliseconds(),this;if(typeof S=="object")return Object.keys(S).forEach(function(P){j.$d[k(P)]=S[P]}),this.calMilliseconds(),this;if(typeof S=="string"){var Q=S.match(h);if(Q){var U=Q.slice(2).map(function(P){return P!=null?Number(P):0});return this.$d.years=U[0],this.$d.months=U[1],this.$d.weeks=U[2],this.$d.days=U[3],this.$d.hours=U[4],this.$d.minutes=U[5],this.$d.seconds=U[6],this.calMilliseconds(),this}}return this}var y=u.prototype;return y.calMilliseconds=function(){var S=this;this.$ms=Object.keys(this.$d).reduce(function(E,T){return E+(S.$d[T]||0)*m[T]},0)},y.parseFromMilliseconds=function(){var S=this.$ms;this.$d.years=L(S/a),S%=a,this.$d.months=L(S/l),S%=l,this.$d.days=L(S/c),S%=c,this.$d.hours=L(S/i),S%=i,this.$d.minutes=L(S/s),S%=s,this.$d.seconds=L(S/o),S%=o,this.$d.milliseconds=S},y.toISOString=function(){var S=Z(this.$d.years,"Y"),E=Z(this.$d.months,"M"),T=+this.$d.days||0;this.$d.weeks&&(T+=7*this.$d.weeks);var j=Z(T,"D"),Q=Z(this.$d.hours,"H"),U=Z(this.$d.minutes,"M"),P=this.$d.seconds||0;this.$d.milliseconds&&(P+=this.$d.milliseconds/1e3);var _=Z(P,"S"),D=S.negative||E.negative||j.negative||Q.negative||U.negative||_.negative,F=Q.format||U.format||_.format?"T":"",O=(D?"-":"")+"P"+S.format+E.format+j.format+F+Q.format+U.format+_.format;return O==="P"||O==="-P"?"P0D":O},y.toJSON=function(){return this.toISOString()},y.format=function(S){var E=S||"YYYY-MM-DDTHH:mm:ss",T={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return E.replace(d,function(j,Q){return Q||String(T[j])})},y.as=function(S){return this.$ms/m[k(S)]},y.get=function(S){var E=this.$ms,T=k(S);return T==="milliseconds"?E%=1e3:E=T==="weeks"?L(E/m[T]):this.$d[T],E===0?0:E},y.add=function(S,E,T){var j;return j=E?S*m[k(E)]:x(S)?S.$ms:v(S,this).$ms,v(this.$ms+j*(T?-1:1),this)},y.subtract=function(S,E){return this.add(S,E,!0)},y.locale=function(S){var E=this.clone();return E.$l=S,E},y.clone=function(){return v(this.$ms,this)},y.humanize=function(S){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!S)},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},u}();return function(u,y,S){t=S,n=S().$utils(),S.duration=function(j,Q){var U=S.locale();return v(j,{$l:U},Q)},S.isDuration=x;var E=y.prototype.add,T=y.prototype.subtract;y.prototype.add=function(j,Q){return x(j)&&(j=j.asMilliseconds()),E.bind(this)(j,Q)},y.prototype.subtract=function(j,Q){return x(j)&&(j=j.asMilliseconds()),T.bind(this)(j,Q)}}})})(hs);const ps=en;var ms="Expected a function",sr=0/0,gs="[object Symbol]",ys=/^\s+|\s+$/g,vs=/^[-+]0x[0-9a-f]+$/i,bs=/^0b[01]+$/i,xs=/^0o[0-7]+$/i,ws=parseInt,Ss=typeof xe=="object"&&xe&&xe.Object===Object&&xe,Cs=typeof self=="object"&&self&&self.Object===Object&&self,Ms=Ss||Cs||Function("return this")(),ks=Object.prototype,Ds=ks.toString,$s=Math.max,Es=Math.min,tn=function(){return Ms.Date.now()};function _s(e,r,t){var n,o,s,i,c,d,a=0,l=!1,h=!1,m=!0;if(typeof e!="function")throw new TypeError(ms);r=ir(r)||0,nn(t)&&(l=!!t.leading,h="maxWait"in t,s=h?$s(ir(t.maxWait)||0,r):s,m="trailing"in t?!!t.trailing:m);function x(y){var S=n,E=o;return n=o=void 0,a=y,i=e.apply(E,S),i}function v(y){return a=y,c=setTimeout(L,r),l?x(y):i}function k(y){var S=y-d,E=y-a,T=r-S;return h?Es(T,s-E):T}function g(y){var S=y-d,E=y-a;return d===void 0||S>=r||S<0||h&&E>=s}function L(){var y=tn();if(g(y))return q(y);c=setTimeout(L,k(y))}function q(y){return c=void 0,m&&n?x(y):(n=o=void 0,i)}function Z(){c!==void 0&&clearTimeout(c),a=0,n=d=o=c=void 0}function A(){return c===void 0?i:q(tn())}function u(){var y=tn(),S=g(y);if(n=arguments,o=this,d=y,S){if(c===void 0)return v(d);if(h)return c=setTimeout(L,r),x(d)}return c===void 0&&(c=setTimeout(L,r)),i}return u.cancel=Z,u.flush=A,u}function nn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function Ts(e){return!!e&&typeof e=="object"}function Ps(e){return typeof e=="symbol"||Ts(e)&&Ds.call(e)==gs}function ir(e){if(typeof e=="number")return e;if(Ps(e))return sr;if(nn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=nn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(ys,"");var t=bs.test(e);return t||xs.test(e)?ws(e.slice(2),t?2:8):vs.test(e)?sr:+e}var ot=_s;const kt=[0,1,2];var ht=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(ht||{});const ar=e=>kt.includes(e),st=e=>{var n;const t=(((n=document.getElementById(Ve))==null?void 0:n.clientWidth)||0)-$e;switch(e){case 1:return Math.ceil(t/ve)*rt;case 2:return Math.ceil(t/we)*rt;default:return Math.ceil(t/tt)*rt}},As=e=>st(e)/rt,rn=(e,r)=>{const t=st(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},Is=(e,r)=>{const t=rn(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},on=()=>{var t;return((((t=document.getElementById(Ve))==null?void 0:t.clientWidth)||0)-$e)*rt},cr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:$(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});$.extend(is),$.extend(cs),$.extend(ds),$.extend(fs),$.extend(ps);const Os=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=$(),onRangeChange:s,handleToggleDisplayActiveUnits:i,onClearFilterData:c})=>{const{zoom:d,maxRecordsPerPage:a=50}=n,[l,h]=p.useState(d),[m,x]=p.useState($()),[v,k]=p.useState(!1),[g,L]=p.useState(st(l)),q=kt[l]!==kt[kt.length-1],Z=l!==0,A=p.useMemo(()=>Is(m,l),[m,l]),u=rn(m,l).startDate,y=$(u).dayOfYear(),S=or(u),E=p.useRef(null),[T,j]=p.useState([{x:0,y:0}]),Q=p.useCallback((X,w="auto")=>{var b,Y,z,I;const H=on();switch(X){case"back":return(b=E.current)==null?void 0:b.scrollTo({behavior:w,left:H/3});case"forward":return(Y=E.current)==null?void 0:Y.scrollTo({behavior:w,left:H/3});case"middle":{const C=H/rt/4;return(z=E.current)==null?void 0:z.scrollTo({behavior:w,left:H/2-C})}default:return(I=E.current)==null?void 0:I.scrollTo({behavior:w,left:H/2})}},[]),U=X=>{j(X)},P=p.useCallback(X=>{const w=As(l);let H;switch(l){case 0:H=w*7;break;case 1:H=w;break;case 2:H=Math.ceil(w/Mt);break}ot(()=>{switch(X){case"back":x(Y=>Y.subtract(H,"days"));break;case"forward":x(Y=>Y.add(H,"days"));break;case"middle":x($());break}s==null||s(A)},300)()},[s,A,l]);p.useEffect(()=>{E.current=document.getElementById(Ve),L(st(l))},[l]),p.useEffect(()=>{const X=()=>L(st(l));return window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[l]),p.useEffect(()=>{s==null||s(A)},[s,A]),p.useEffect(()=>{k(!1)},[o]),p.useEffect(()=>{v||(Q("middle"),k(!0),x(o))},[o,v,Q]);const _=()=>{t||(x(X=>l===2?X.add(Jn,"hours"):X.add(tr,"weeks")),s==null||s(A))},D=p.useCallback(()=>{t||(P("forward"),ot(()=>{Q("forward")},500)())},[t,P,Q]),F=()=>{t||(x(X=>l===2?X.subtract(Jn,"hours"):X.subtract(tr,"weeks")),s==null||s(A))},O=p.useCallback(()=>{!v||t||(P("back"),ot(()=>{Q("back")},500)())},[v,t,P,Q]),J=p.useCallback(()=>{t||(P("middle"),ot(()=>{Q("middle","smooth")},300)())},[t,P,Q]),ee=p.useCallback(X=>{if(t)return;const w=$(X).startOf("day");w.isValid()&&(x(w),s==null||s(A),setTimeout(()=>{Q("middle","smooth")},300))},[t,Q,s,A]),se=()=>B(l+1),oe=()=>B(l-1),B=X=>{ar(X)&&(h(X),L(st(X)),s==null||s(A))},V=()=>i==null?void 0:i(),{Provider:G}=cr;return f.jsx(G,{value:{data:e,config:n,handleGoNext:_,handleScrollNext:D,handleGoPrev:F,handleScrollPrev:O,handleGoToday:J,goToDate:ee,zoomIn:se,zoomOut:oe,zoom:l,isNextZoom:q,isPrevZoom:Z,date:m,isLoading:t,cols:g,startDate:S,dayOfYear:y,toggleDisplayActiveUnits:V,tilesCoords:T,updateTilesCoords:U,recordsThreshold:a,onClearFilterData:c},children:r})},Xe=()=>p.useContext(cr),lr=(e,r,t)=>{e.canvas.width=r*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=r+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},dr=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*he+n*ke;if(e>=s+ke)n++;else if(e>=s)return o*he+n*ke-n*ke}return t-n*ke},Ys=5,ur=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>Ys},pt=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},Ls=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:i={},gridRef:c,separatorRowIndices:d=[]})=>{const a=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(H=>({...H,data:[H.data]})):r:e,{enabled:l=!0,isDraggable:h,resourceOnly:m=!1,isValidDrop:x}=i,[v,k]=p.useState("idle"),[g,L]=p.useState(null),[q,Z]=p.useState({x:0,y:0}),[A,u]=p.useState({width:0,height:48}),[y,S]=p.useState(null),[E,T]=p.useState(!0),j=p.useRef({x:0,y:0}),Q=p.useRef({x:0,y:0}),U=p.useRef({x:0,y:0}),P=p.useRef(null),_=p.useRef(null),D=p.useRef(0),F=p.useRef(null),O=p.useCallback(H=>!l||H.draggable===!1?!1:h?h(H):!0,[l,h]),J=p.useCallback((H,b)=>{const Y=dr(b,d),z=Math.floor(Y/he);let I;switch(t){case 0:I=_e*7;break;case 1:I=ve;break;case 2:I=we;break;default:I=ve}const C=Math.floor(H/I);let R;const N=$().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:R=N.add(C*7,"days").toDate();break;case 1:R=N.add(C,"days").toDate();break;case 2:R=N.add(C,"hours").toDate();break;default:R=N.toDate()}return{snappedDate:R,snappedResourceIndex:z}},[t,n,d]),ee=p.useCallback((H,b,Y,z)=>{const I=[],C=b.getTime(),R=Y.getTime(),N=a.find(te=>te.id===z);if(!N)return I;const K=[];for(const te of N.data)Array.isArray(te)?K.push(...te):K.push(te);for(const te of K){if(te.segmentId===H.segmentId)continue;const W=te.startDate.getTime(),ie=te.endDate.getTime();if(C>=W&&C<ie||R>W&&R<=ie||C<=W&&R>=ie){const de=new Date(Math.max(C,W)),ae=new Date(Math.min(R,ie)),le=ae.getTime()-de.getTime();I.push({event:te,conflictStart:de,conflictEnd:ae,overlapDuration:le})}}return I},[a]),se=p.useCallback((H,b,Y,z)=>{const I=[],C=b.getTime(),R=Y.getTime(),N=$(b).format("YYYY-MM-DD"),K=a.find(W=>W.id===z);if(!K)return I;const te=[];for(const W of K.data)Array.isArray(W)?te.push(...W):te.push(W);for(const W of te){if(W.segmentId===H.segmentId)continue;const ie=W.startDate.getTime(),fe=W.endDate.getTime(),de=$(W.startDate).format("YYYY-MM-DD"),ae=$(W.endDate).format("YYYY-MM-DD"),le=$(Y).format("YYYY-MM-DD");if(!(de===N||ae===N||de===le||ae===le||$(W.startDate).isBefore(b,"day")&&$(W.endDate).isAfter(Y,"day"))||C>=ie&&C<fe||R>ie&&R<=fe||C<=ie&&R>=fe)continue;let ue,Se;fe<=C?(ue=C-fe,Se="before"):(ue=ie-R,Se="after"),I.push({event:W,timeGap:ue,position:Se})}return I.sort((W,ie)=>W.timeGap-ie.timeGap)},[a]),oe=p.useCallback((H,b,Y)=>{const z=J(b,Y);let I,C;if(m)I=H.startDate,C=H.endDate;else{const fe=$(H.endDate).diff(H.startDate);I=z.snappedDate,C=$(I).add(fe,"milliseconds").toDate()}let R=0,N="",K;for(const fe of e){const de=Math.max(fe.data.length,1);if(z.snappedResourceIndex<R+de){N=fe.id,K=fe.capacity;break}R+=de}if(!N)return null;let te=!0;K!==void 0&&H.totalPassengers!==void 0&&(te=H.totalPassengers<=K);const W=ee(H,I,C,N),ie=W.length===0?se(H,I,C,N):[];return{startDate:I,endDate:C,resourceId:N,resourceIndex:z.snappedResourceIndex,resourceCapacity:K,hasCapacity:te,conflicts:W,hasConflict:W.length>0,nearbyEvents:ie}},[J,e,m,ee,se]),B=p.useCallback((H,b)=>{if(!s)return;const Y=Date.now();if(Y-D.current<100)return;D.current=Y;const z={event:H,currentStartDate:b.startDate,currentEndDate:b.endDate,currentResourceId:b.resourceId,conflicts:b.conflicts};s(z)},[s]),V=p.useCallback((H,b)=>{if(!O(H)||!c.current)return;b.preventDefault(),b.stopPropagation();const Y=b.target.closest('[style*="left"]');let z=0,I=0;Y&&Y.style.left&&Y.style.top&&(z=parseInt(Y.style.left),I=parseInt(Y.style.top));const C=pt(b.clientX,b.clientY,c.current);j.current={x:z,y:I},Q.current={x:b.clientX,y:b.clientY},U.current={x:C.x-z,y:20},F.current={startDate:H.startDate,endDate:H.endDate,resourceId:""};for(const K of e){for(const te of K.data)if(te.some(W=>W.segmentId===H.segmentId)){F.current.resourceId=K.id;break}if(F.current.resourceId)break}L(H),k("potential"),Z({x:z,y:I});let R=100,N=48;if(Y){const K=Y.getBoundingClientRect();R=K.width,N=K.height}u({width:R,height:N})},[O,c,e,t]),G=p.useCallback(H=>{if(!c.current)return;let b=c.current;for(;b&&b!==document.body;){const W=window.getComputedStyle(b);if(b.scrollHeight>b.clientHeight&&(W.overflowY==="auto"||W.overflowY==="scroll"||W.overflow==="auto"||W.overflow==="scroll"))break;b=b.parentElement}(!b||b===document.body)&&(b=document.documentElement);const Y=b.getBoundingClientRect(),z=H.clientY,I=50,C=5,R=z-Y.top,N=Y.bottom-z;let K=!1,te=0;R<I&&R>0?(K=!0,te=-C*(1-R/I)):N<I&&N>0&&(K=!0,te=C*(1-N/I)),K?(_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>{b.scrollTop+=te,v==="dragging"&&G(H)})):_.current&&(cancelAnimationFrame(_.current),_.current=null)},[c,v]),X=p.useCallback(H=>{if(v==="idle"||v==="animating"||!g||!c.current)return;const b={x:H.clientX,y:H.clientY};if(v==="potential")if(ur(Q.current,b))k("dragging");else return;G(H);const Y=pt(H.clientX,H.clientY,c.current);P.current&&cancelAnimationFrame(P.current),P.current=requestAnimationFrame(()=>{const z={x:Y.x-U.current.x,y:Y.y-U.current.y};Z(z);const I=oe(g,Y.x,Y.y);if(I&&x){const C={event:g,currentStartDate:I.startDate,currentEndDate:I.endDate,currentResourceId:I.resourceId,conflicts:I.conflicts};I.hasConflict=!x(C)}if(S(I),I){const C=I.hasCapacity!==!1;T(C),B(g,I)}})},[v,g,c,oe,B,x,G]),w=p.useCallback(async H=>{if(v==="idle"||v==="animating")return;const b={x:H.clientX,y:H.clientY};if(!ur(Q.current,b)||v==="potential"){k("idle"),L(null),S(null);return}if(!g||!y||!F.current){k("idle"),L(null),S(null);return}if(y.hasCapacity===!1){T(!1),k("animating"),Z(j.current),setTimeout(()=>{k("idle"),L(null),S(null),T(!0)},300);return}const z={event:g,originalStartDate:F.current.startDate,originalEndDate:F.current.endDate,originalResourceId:F.current.resourceId,newStartDate:y.startDate,newEndDate:y.endDate,newResourceId:y.resourceId,hasConflict:y.hasConflict,conflicts:y.conflicts};let I=!0;if(o)try{const C=o(z);I=C instanceof Promise?await C:C}catch{I=!1}I?(T(!0),k("idle"),L(null),S(null)):(T(!1),k("animating"),Z(j.current),setTimeout(()=>{k("idle"),L(null),S(null),T(!0)},300))},[v,g,y,o,x]);return p.useEffect(()=>{if(v==="potential"||v==="dragging"){const H=Y=>X(Y),b=Y=>w(Y);return document.addEventListener("mousemove",H),document.addEventListener("mouseup",b),()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",b)}}else return()=>{}},[v,X,w]),p.useEffect(()=>()=>{P.current&&(cancelAnimationFrame(P.current),P.current=null),_.current&&(cancelAnimationFrame(_.current),_.current=null)},[]),p.useEffect(()=>{(v==="idle"||v==="animating")&&(P.current&&(cancelAnimationFrame(P.current),P.current=null),_.current&&(cancelAnimationFrame(_.current),_.current=null))},[v]),p.useEffect(()=>{(v==="dragging"||v==="potential")&&(v==="dragging"?(k("animating"),Z(j.current),setTimeout(()=>{k("idle"),L(null),S(null)},300)):(k("idle"),L(null),S(null)))},[t]),p.useEffect(()=>{if((v==="dragging"||v==="potential")&&g){let H=!1;for(const b of e){for(const Y of b.data)if(Y.some(z=>z.segmentId===g.segmentId)){H=!0;break}if(H)break}H||(v==="dragging"?(k("animating"),Z(j.current),setTimeout(()=>{k("idle"),L(null),S(null)},300)):(k("idle"),L(null),S(null)))}},[e,v,g]),{dragState:v,draggedEvent:g,ghostPosition:q,ghostDimensions:A,dropTarget:y,isValidDrop:E,handleDragStart:V,isDraggable:O,draggingEventId:(g==null?void 0:g.segmentId)||null,resourceOnly:m}},Ns=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:i={},gridRef:c,isDragging:d,separatorRowIndices:a=[]})=>{const{enabled:l=!1,isSelectable:h}=i,m=l&&!!o,x=p.useCallback(b=>{let Y=0;for(const z of a)z<=b&&Y++;return b*he+Y*ke},[a]),[v,k]=p.useState("idle"),[g,L]=p.useState(null),[q,Z]=p.useState(null),[A,u]=p.useState(null),[y,S]=p.useState(!1),[E,T]=p.useState([]),[j,Q]=p.useState(!1),U=p.useRef(null),P=p.useRef(null),_=p.useRef(null),D=p.useCallback(()=>{switch(t){case 0:return _e*7;case 1:return ve;case 2:return we;default:return ve}},[t]),F=p.useCallback(b=>{const Y=D(),z=Math.floor(b/Y),I=$().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return I.add(z*7,"days").toDate();case 1:return I.add(z,"days").toDate();case 2:return I.add(z,"hours").toDate();default:return I.toDate()}},[t,n,D]),O=p.useCallback(b=>{const Y=dr(b,a),z=Math.floor(Y/he);let I=0;for(const C of e){const R=Math.max(C.data.length,1);if(z<I+R)return{resourceId:C.id,resourceIndex:z,resourceLabel:C.label};I+=R}return null},[e,a]),J=p.useCallback(b=>{const Y=D();return Math.floor(b/Y)*Y},[D]),ee=p.useCallback((b,Y,z,I=[])=>{const C=[],N=(r||e).find(W=>W.id===b),K=Y.getTime(),te=z.getTime();if(N){const W=N.data[0],ie=W&&Array.isArray(W)?N.data.flat():N.data;for(const fe of ie){const de=new Date(fe.startDate).getTime(),ae=new Date(fe.endDate).getTime();if(K<ae&&te>de){const le=new Date(Math.max(K,de)),ce=new Date(Math.min(te,ae)),ne=ce.getTime()-le.getTime();C.push({event:fe,conflictStart:le,conflictEnd:ce,overlapDuration:ne})}}}for(const W of I){if(W.resourceId!==b)continue;const ie=W.startDate.getTime(),fe=W.endDate.getTime();if(K<fe&&te>ie){const de=new Date(Math.max(K,ie)),ae=new Date(Math.min(te,fe)),le=ae.getTime()-de.getTime(),ce={segmentId:`pending-${W.startDate.getTime()}`,reservationId:`pending-${W.startDate.getTime()}`,startDate:W.startDate,endDate:W.endDate,occupancy:0,title:`New Event (${W.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};C.push({event:ce,conflictStart:de,conflictEnd:ae,overlapDuration:le})}}return C},[e,r]),se=p.useCallback(b=>{if(!m||d||!c.current||b.button!==0)return;const Y=b.target;if(Y.closest("[data-segment-id]")||Y.closest("[data-multi-select-ui]"))return;const z=pt(b.clientX,b.clientY,c.current),I=O(z.y);if(!I)return;U.current={x:b.clientX,y:b.clientY},P.current=I.resourceIndex;const C=J(z.x),R=D(),N=x(I.resourceIndex);L(z),Z(z),u({x:C,y:N,width:R,height:he}),k("selecting")},[m,d,c,O,J,D,x]),oe=p.useCallback(b=>{if(v!=="selecting"||!c.current||P.current===null)return;const Y=pt(b.clientX,b.clientY,c.current);_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>{Z(Y);const z=D(),I=J((g==null?void 0:g.x)||0),C=J(Y.x),R=x(P.current),N=Math.min(I,C),K=Math.max(I,C)+z;u({x:N,y:R,width:K-N,height:he})})},[v,c,g,D,J,x]),B=p.useCallback(b=>{if(v!=="selecting")return;if(!c.current||!g||!U.current){k("idle"),L(null),Z(null),u(null);return}const Y=pt(b.clientX,b.clientY,c.current),z=O(g.y);if(!z){k("idle"),L(null),Z(null),u(null);return}const I=Math.min(g.x,Y.x),C=Math.max(g.x,Y.x),R=F(I),N=F(C),K=$(N).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h(z.resourceId,R,K)){k("idle"),L(null),Z(null),u(null);return}const te=ee(z.resourceId,R,K,E),W=te.length>0,ie={startDate:R,endDate:K,resourceId:z.resourceId,resourceLabel:z.resourceLabel,zoomLevel:t,hasConflict:W,conflicts:W?te:void 0};if(y)T(fe=>[...fe,ie]),Q(!0);else if(o){const fe=o(ie),de=ae=>{ae!=null&&ae.continueMultiSelect&&(S(!0),T([ie]),Q(!0))};fe instanceof Promise?fe.then(de):de(fe)}k("idle"),L(null),Z(null),u(null),U.current=null,P.current=null},[v,c,g,O,F,h,o,t,y,ee,E]),V=p.useCallback(()=>{if(E.length>0&&s){Q(!1);const b=s(E),Y=z=>{z!=null&&z.continueMultiSelect?Q(!0):(T([]),S(!1),Q(!1))};b instanceof Promise?b.then(Y):Y(b);return}T([]),S(!1),Q(!1)},[E,s]),G=p.useCallback(()=>{T([]),S(!1),Q(!1)},[]),X=p.useCallback(b=>{T(Y=>{const z=Y.filter((I,C)=>C!==b);return z.length===0&&(S(!1),Q(!1)),z})},[]),w=p.useCallback((b,Y)=>{T(z=>z.map((I,C)=>{if(C!==b)return I;const R={...I,...Y},N=z.filter((te,W)=>W!==b),K=ee(R.resourceId,R.startDate,R.endDate,N);return{...R,hasConflict:K.length>0,conflicts:K.length>0?K:void 0}}))},[ee]),H=p.useCallback(b=>{b.key==="Escape"&&(v==="selecting"?(k("idle"),L(null),Z(null),u(null),U.current=null,P.current=null):y&&E.length>0&&(T([]),S(!1),Q(!1)))},[v,y,E.length]);return p.useEffect(()=>{if(v==="selecting")return document.addEventListener("mousemove",oe),document.addEventListener("mouseup",B),document.addEventListener("keydown",H),()=>{document.removeEventListener("mousemove",oe),document.removeEventListener("mouseup",B),document.removeEventListener("keydown",H)}},[v,oe,B,H]),p.useEffect(()=>{if(y&&E.length>0)return document.addEventListener("keydown",H),()=>{document.removeEventListener("keydown",H)}},[y,E.length,H]),p.useEffect(()=>()=>{_.current&&(cancelAnimationFrame(_.current),_.current=null)},[]),p.useEffect(()=>{d&&v==="selecting"&&(k("idle"),L(null),Z(null),u(null),U.current=null,P.current=null)},[d,v]),{selectionState:v,selectionStart:g,selectionEnd:q,selectionBox:A,handleGridMouseDown:se,isEnabled:m,pendingSelections:E,confirmSelections:V,clearSelections:G,removeSelection:X,updateSelection:w,isMultiSelectActive:y,hasUnconfirmedSelections:j}},Fs=M.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,Hs=M.div`
  position: relative;
`,Ws=M.canvas``;M.canvas``;const fr=M.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,zs=p.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onEventDrop:i,onEventDrag:c,draggableConfig:d,onDragStateChange:a,onTimeRangeSelect:l,onMultiTimeRangeSelect:h,clickToAddConfig:m,separatorRowIndices:x=[]},v){const k=p.useRef(!1),{handleScrollNext:g,handleScrollPrev:L,date:q,isLoading:Z,cols:A,startDate:u}=Xe(),y=p.useRef(null),S=p.useRef(null),E=p.useRef(null),T=p.useRef(null),[j,Q]=p.useState(!1),U=Be(),{dragState:P,draggedEvent:_,ghostPosition:D,ghostDimensions:F,dropTarget:O,isValidDrop:J,handleDragStart:ee,isDraggable:se,draggingEventId:oe,resourceOnly:B}=Ls({data:n,baseData:o||n,zoom:r,startDate:u,onEventDrop:i,onEventDrag:c,draggableConfig:d,gridRef:T,separatorRowIndices:x});p.useEffect(()=>{const W=P==="dragging"||P==="potential";Q(W),a&&a(W)},[P,a]);const{selectionState:V,selectionBox:G,handleGridMouseDown:X,pendingSelections:w,confirmSelections:H,clearSelections:b,removeSelection:Y,updateSelection:z,isMultiSelectActive:I,hasUnconfirmedSelections:C}=Ns({data:n,baseData:o||n,zoom:r,startDate:u,onTimeRangeSelect:l,onMultiTimeRangeSelect:h,clickToAddConfig:m,gridRef:T,isDragging:j,separatorRowIndices:x}),R=p.useCallback(W=>{W.preventDefault()},[]),N=p.useCallback(W=>{W.preventDefault()},[]),K=x.length*ke,te=p.useCallback(W=>{const ie=on(),fe=t*he+1+K;lr(W,ie,fe),os(W,r,t,A,u,U,x)},[A,u,t,r,U,x,K]);return p.useEffect(()=>{if(!y.current)return;const W=y.current.getContext("2d");if(!W)return;const ie=()=>te(W);return window.addEventListener("resize",ie),()=>window.removeEventListener("resize",ie)},[te]),p.useEffect(()=>{const W=y.current;if(!W)return;W.style.letterSpacing="1px";const ie=W.getContext("2d");ie&&te(ie)},[q,t,r,te]),p.useEffect(()=>{if(!S.current)return;const W=new IntersectionObserver(ie=>{ie[0].isIntersecting&&!k.current&&(k.current=!0,g(),setTimeout(()=>{k.current=!1},1e3))},{root:document.getElementById(Ve)});return W.observe(S.current),()=>{W.disconnect()}},[g]),p.useEffect(()=>{if(!E.current)return;const W=new IntersectionObserver(ie=>{ie[0].isIntersecting&&!k.current&&(k.current=!0,L(),setTimeout(()=>{k.current=!1},1e3))},{root:document.getElementById(Ve),rootMargin:`0px 0px 0px -${$e}px`});return W.observe(E.current),()=>{W.disconnect()}},[L]),f.jsxs(Fs,{id:Qn,children:[f.jsxs(Hs,{ref:W=>{typeof v=="function"?v(W):v&&(v.current=W),T.current=W},onMouseDown:X,style:{cursor:l?"crosshair":"default"},children:[f.jsx(fr,{position:"left",ref:E}),f.jsx(mn,{isLoading:Z,position:"left"}),f.jsx(Ws,{ref:y,onDragStart:R,onDragOver:N,style:{userSelect:P==="dragging"?"none":"auto"}}),f.jsx(Ya,{data:n,zoom:r,onTileClick:s,onDragStart:ee,isDraggable:se,draggingEventId:oe,separatorRowIndices:x}),f.jsx(fr,{ref:S,position:"right"}),f.jsx(mn,{isLoading:Z,position:"right"}),(P==="dragging"||P==="animating")&&f.jsx(fc,{draggedEvent:_,ghostPosition:D,ghostDimensions:F,dropTarget:O,isValidDrop:J,dragState:P,zoom:r,data:n,resourceOnly:B,separatorRowIndices:x}),f.jsx(mc,{selectionBox:G,isSelecting:V==="selecting"}),I&&w.length>0&&f.jsx(_c,{selections:w,data:n,zoom:r,startDate:u,onRemove:Y,onUpdate:z,separatorRowIndices:x})]}),I&&C&&w.length>0&&f.jsx(Cc,{selections:w,onConfirm:H,onClear:b,onRemove:Y})]})}),hr=e=>{const r=$.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},pr=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/be);t+=o.hours+s,n+=r%be,n>=be&&(t++,n-=be)}),{hours:t,minutes:n}},mr=(e,r)=>{let t=Rn;switch(r){case 0:t=qo;break;case 1:t=Rn;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,i=be-e.minutes;return i===be&&(s++,i=0),{hours:Math.max(0,s),minutes:s<0?0:i}},o=()=>{const s=e.hours-t,i=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:i}};return{free:n(),overtime:o()}},Bs=(e,r,t)=>{const n=r.isoWeek(),o=e.map(a=>{const l=$(a.startDate).isoWeek(),h=$(a.startDate).isoWeekday(),m=$(a.endDate).isoWeek(),x=$(a.endDate).isoWeekday(),{hours:v,minutes:k}=hr(a.occupancy);if(n===l){const g=(Fe+1-h)*v,L=(Fe+1-h)*k;return{hours:Math.max(0,g),minutes:L}}else if(n===m){const g=x>Fe?Fe*v:x*v,L=x>Fe?Fe*k:x*k;return{hours:g,minutes:L}}else if($(r).isBetween(a.startDate,a.endDate))return{hours:Fe*v,minutes:Fe*k};return{hours:0,minutes:0}}),{hours:s,minutes:i}=pr(o),{free:c,overtime:d}=mr({hours:s,minutes:i},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,i)},free:c,overtime:d}},js=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(l=>{const{hours:h,minutes:m}=hr(l.occupancy);return o<=(n?7:5)?{hours:h,minutes:m}:{hours:0,minutes:0}}),{hours:i,minutes:c}=pr(s),{free:d,overtime:a}=mr({hours:i,minutes:c},t);return{taken:{hours:Math.max(0,i),minutes:Math.max(0,c)},free:d,overtime:a}},Zs=(e,r)=>{let t=0;e.forEach(c=>{const d=$(c.startDate).hour(),a=$(c.endDate).hour(),l=r.hour(),h=$(c.endDate).minute(),m=$(c.startDate).minute();d<l&&a>l?t+=be:d===l&&a===l&&m&&h?t+=h?h-m:be-m:d===l&&a>=l?t+=m?be-m:be:a===l&&h&&(t+=h)});const n=Math.floor(t/be),o=t%be,s=n||o?0:1,i=n?0:o?be-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:i},overtime:{hours:0,minutes:0}}},Vs=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(i=>n===1?$(t).isBetween(i.startDate,i.endDate,"day","[]"):n===2?$(t).isBetween(i.startDate,i.endDate,"hour","[]"):$(i.startDate).isBetween($(t),$(t).add(6,"days"),"day","[]")||$(t).isBetween($(i.startDate),$(i.endDate),"day","[]"));switch(n){case 1:return js(s,t,n,o);case 2:return Zs(s,t);default:return Bs(s,t,n)}},Gs=(e,r,t,n,o,s,i=!1)=>{let c="weeks",d;switch(s){case 0:c="weeks",d=tt;break;case 1:c="days",d=ve;break;case 2:c="hours",d=we;break}const a=Math.ceil(s===2?(t.x-.5*d)/d:t.x/d),l=$(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(a-1,c),h=Math.ceil(t.y/he),m=n.findIndex((L,q,Z)=>Z.slice(0,q+1).reduce((u,y)=>u+y,0)>=h),x=s===2?(a+1)*d:a*d,v=(h-1)*he+he,k=Vs(o[m],m,l,s,i),g=$(e.startDate).isSame($(e.endDate),"day");return{coords:{x,y:v},mouseCoords:t,resourceIndex:m,disposition:k,reservationData:{startTime:$(e.startDate).format("hh:mm A"),startDate:$(e.startDate).format("MMM D, YYYY"),endTime:$(e.endDate).format("hh:mm A"),endDate:$(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,isOneDayEvent:g,passengers:e.totalPassengers}}};function Xs(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function Us(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const l of e)!l.isSubcontract&&l.capacity!=null&&t.add(l.capacity);const n=[...t].sort((l,h)=>l-h);if(n.length<2)return r;const o=Math.min(5,n.length),s=Xs(n,o),i=[];let c=0;for(const l of s)i.push({min:n[c],max:n[l-1],values:n.slice(c,l)}),c=l;i.push({min:n[c],max:n[n.length-1],values:n.slice(c)});const d=[],a=new Map;return i.forEach((l,h)=>{const m="__auto_cat_"+h,x=l.min===l.max?l.min+" pax":l.min+"-"+l.max+" pax";d.push({id:m,name:x,minPassengers:l.min,maxPassengers:l.max});for(const v of l.values)a.set(v,m)}),{categories:d,capacityToCategoryId:a}}const Ks=(e,r,t,n)=>{const o=[];let s=0,i=[],c=0;return r.length>n?(r.forEach((d,a)=>{const l={id:e[a].id,label:e[a].label,data:d,capacity:e[a].capacity,isSubcontract:e[a].isSubcontract,categoryId:e[a].categoryId};c>=n&&(o.push(i),s+=i.length,i=[],c=0),c++,i.push(l)}),t.slice(s).length<=n&&(i=[],r.slice(s).forEach((d,a)=>{const l={id:e[a+s].id,label:e[a+s].label,data:d,capacity:e[a+s].capacity,isSubcontract:e[a+s].isSubcontract,categoryId:e[a+s].categoryId};i.push(l),a===r.length-s-1&&o.push(i)})),o):(r.forEach((d,a)=>{const l={id:e[a].id,label:e[a].label,data:d,capacity:e[a].capacity,isSubcontract:e[a].isSubcontract,categoryId:e[a].categoryId};i.push(l)}),o.push(i),o)};var sn={},Js={get exports(){return sn},set exports(e){sn=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(Js);const qs=sn;var an={},Qs={get exports(){return an},set exports(e){an=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(Qs);const Rs=an,ei=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let i=0;i<o.length;i++){const c=$(t.startDate).startOf("day"),d=$(t.endDate).startOf("day"),a=$(o[i].startDate).startOf("day"),l=$(o[i].endDate).startOf("day");if(c.isBetween(a,l,null,"[]")||d.isBetween(a,l,null,"[]")||c.isBefore(a,"minute")&&d.isAfter(l,"minute")||c.isAfter(a,"minute")&&d.isBefore(l,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};$.extend(qs),$.extend(Rs);const ti=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const i=[...s.data].sort((d,a)=>{const l=$(d.startDate),h=$(a.startDate),m=l.startOf("day").diff(h.startOf("day"),"day");return m!==0?m:l.diff(h)}),c=ei(i);return o[0].push(c),o[1].push(Math.max(c.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},ni=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,ri=e=>{const{recordsThreshold:r}=Xe(),[t,n]=p.useState(0),[o,s]=p.useState(0),i=p.useRef(null);p.useEffect(()=>{i.current=document.getElementById(Ve)},[]);const{projectsPerPerson:c,rowsPerPerson:d}=p.useMemo(()=>ti(e),[e]),a=p.useMemo(()=>Ks(e,c,d,r),[e,c,r,d]),l=p.useCallback(()=>{a[o].length&&i.current&&(i.current.scroll({top:0}),n(g=>g+a[Math.max(o,0)].length),s(g=>Math.min(g+1,a.length-1)),window.scroll({top:0}))},[o,a]),h=p.useCallback(()=>{a[o].length&&(n(g=>Math.max(g-a[o-1].length,0)),s(g=>Math.max(g-1,0)))},[o,a]),m=p.useCallback(()=>{n(0),s(0)},[]),x=t+a[o].length,v=p.useMemo(()=>d.slice(t,x),[x,d,t]),k=p.useMemo(()=>c.slice(t,x),[x,c,t]);return{page:a[o],currentPageNum:o,pagesAmount:a.length,projectsPerPerson:k,rowsPerItem:v,totalRowsPerPage:ni(a[o]),next:l,previous:h,reset:m}};var cn={},oi={get exports(){return cn},set exports(e){cn=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(oi);const si=cn;var ln={},ii={get exports(){return ln},set exports(e){ln=e}};(function(e,r){(function(t,n){e.exports=n(Ge)})(xe,function(t){function n(m){return m&&typeof m=="object"&&"default"in m?m:{default:m}}var o=n(t);function s(m){return m%10<5&&m%10>1&&~~(m/10)%10!=1}function i(m,x,v){var k=m+" ";switch(v){case"m":return x?"minuta":"minutę";case"mm":return k+(s(m)?"minuty":"minut");case"h":return x?"godzina":"godzinę";case"hh":return k+(s(m)?"godziny":"godzin");case"MM":return k+(s(m)?"miesiące":"miesięcy");case"yy":return k+(s(m)?"lata":"lat")}}var c="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),a=/D MMMM/,l=function(m,x){return a.test(x)?c[m.month()]:d[m.month()]};l.s=d,l.f=c;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:l,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(m){return m+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})(ii);const ai=ln;var dn={},ci={get exports(){return dn},set exports(e){dn=e}};(function(e,r){(function(t,n){e.exports=n(Ge)})(xe,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(d,a,l){var h=s[l];return Array.isArray(h)&&(h=h[a?0:1]),h.replace("%d",d)}var c={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return o.default.locale(c,null,!0),c})})(ci);const li=dn;var un={},di={get exports(){return un},set exports(e){un=e}};(function(e,r){(function(t,n){e.exports=n(Ge)})(xe,function(t){function n(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),i="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),c=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,d=function(l,h){return c.test(h)?s[l.month()]:i[l.month()]};d.s=i,d.f=s;var a={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:d,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(l){return l+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(a,null,!0),a})})(di);const ui=un;var fn={},fi={get exports(){return fn},set exports(e){fn=e}};(function(e,r){(function(t,n){e.exports=n(Ge)})(xe,function(t){function n(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(i){return i+"º"}};return o.default.locale(s,null,!0),s})})(fi);const hi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:si},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:ai},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:fn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:ui},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:li}];class pi{constructor(){zr(this,"locales",hi)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const Dt=new pi,gr=p.createContext({localesData:Dt.getLocales(),currentLocale:Dt.getLocales()[0],setCurrentLocale:()=>{}}),mi=({children:e,lang:r,translations:t})=>{const[n,o]=p.useState("en"),s=Dt.getLocales(),i=p.useCallback(()=>{const h=s.find(m=>m.id===n);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&$.locale(h.dayjsTranslations),h||s[0]},[n,s]),[c,d]=p.useState(i()),a=h=>{localStorage.setItem("locale",h.translateCode),d(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(x=>x.id===h.id)||Dt.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),m=r??h??"en";localStorage.setItem("locale",m),o(m),d(i())},[i,r]);const{Provider:l}=gr;return f.jsx(l,{value:{currentLocale:c,localesData:s,setCurrentLocale:a},children:e})},He=()=>p.useContext(gr).currentLocale.lang,gi=e=>re.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},re.createElement("defs",null,re.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),re.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},re.createElement("stop",{offset:.47,stopColor:"#ccc"}),re.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),re.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),re.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),re.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),re.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),re.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),re.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),re.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),re.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),re.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),re.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),yi=M.div`
  height: 440px;
  width: 514px;
  position: relative;
`,vi=M.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,bi=({onTileClick:e})=>{const{feelingEmpty:r}=He();return f.jsxs(yi,{onClick:e,children:[f.jsx(gi,{}),f.jsx(vi,{children:r})]})},xi=M.div`
  position: relative;
  display: flex;
`,wi=M.div`
  position: relative;
  margin-left: ${$e};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Si=M.div`
  width: calc(${({width:e})=>e}px - ${$e}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${$e}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,hn={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:ht.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function Ci(e,r){const t=r?[...r].sort((c,d)=>c.maxPassengers-d.maxPassengers):[],n=[];for(const c of t){const d=e.filter(a=>!a.isSubcontract&&a.categoryId===c.id);d.length>0&&n.push({type:"category",category:c,items:d})}const o=t.length>0,s=e.filter(c=>!c.isSubcontract&&(!c.categoryId||!o));s.length>0&&o?n.push({type:"uncategorized",items:s}):s.length>0&&n.push({type:"uncategorized",items:s});const i=e.filter(c=>c.isSubcontract);return i.length>0&&n.push({type:"subcontract",items:i}),n}const Mi=({data:e,baseData:r,categories:t,onTileClick:n,onItemClick:o,toggleTheme:s,topBarWidth:i,onEventDrop:c,onEventDrag:d,draggableConfig:a,onTimeRangeSelect:l,onMultiTimeRangeSelect:h,clickToAddConfig:m})=>{const[x,v]=p.useState(hn),[k,g]=p.useState(e),[L,q]=p.useState(!1),[Z,A]=p.useState(!1),[u,y]=p.useState(""),[S,E]=p.useState(new Set),{zoom:T,startDate:j,isLoading:Q,config:{includeTakenHoursOnWeekendsInDayView:U,showTooltip:P,showThemeToggle:_}}=Xe(),D=p.useRef(null),{page:F,projectsPerPerson:O,rowsPerItem:J,currentPageNum:ee,pagesAmount:se,next:oe,previous:B,reset:V}=ri(k),{effectiveCategories:G,effectivePage:X}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:F};const ae=Us(F);if(ae.categories.length===0)return{effectiveCategories:void 0,effectivePage:F};const le=F.map(ce=>{if(ce.isSubcontract||ce.capacity==null)return ce;const ne=ae.capacityToCategoryId.get(ce.capacity);return ne?{...ce,categoryId:ne}:ce});return{effectiveCategories:ae.categories,effectivePage:le}},[t,F]),w=p.useCallback(ae=>{E(le=>{const ce=new Set(le);return ce.has(ae)?ce.delete(ae):ce.add(ae),ce})},[]),H=p.useMemo(()=>{const ae=[],le=G?[...G].sort((ce,ne)=>ce.maxPassengers-ne.maxPassengers):[];for(const ce of le)X.some(ne=>!ne.isSubcontract&&ne.categoryId===ce.id)&&ae.push(ce.id);return X.some(ce=>ce.isSubcontract)&&ae.push("__subcontract__"),ae},[G,X]),b=p.useCallback(()=>{E(new Set)},[]),Y=p.useCallback(()=>{E(new Set(H))},[H]),{visiblePage:z,visibleRowsPerItem:I,visibleTotalRows:C,visibleProjectsPerPerson:R,separatorRowIndices:N}=p.useMemo(()=>{const ae=Ci(X,G),le=((G==null?void 0:G.length)??0)>0,ce=new Map;F.forEach((Ce,Le)=>ce.set(Ce.id,Le));const ne=[],ue=[],Se=[],Ee=[];let De=0;for(const Ce of ae)if(Ce.type==="subcontract"||Ce.type==="category"&&le){const at=Ce.type==="subcontract"?"__subcontract__":Ce.category.id,ct=S.has(at);if(Ee.push(De),!ct)for(const Ue of Ce.items){const $t=ce.get(Ue.id)??0,Et=J[$t];ne.push(Ue),ue.push(Et),Se.push(O[$t]),De+=Et}}else for(const at of Ce.items){const ct=ce.get(at.id)??0,Ue=J[ct];ne.push(at),ue.push(Ue),Se.push(O[ct]),De+=Ue}const xn=ue.reduce((Ce,Le)=>Ce+Le,0);return{visiblePage:ne,visibleRowsPerItem:ue,visibleTotalRows:xn,visibleProjectsPerPerson:Se,separatorRowIndices:Ee}},[X,G,F,S,J,O]),K=p.useRef(ot((ae,le,ce,ne,ue,Se)=>{if(!D.current)return;const{tile:Ee,segmentId:De}=ie(ae);if(!De||!Ee){q(!1),v(hn);return}const xn=W(De,le),Ce=D.current.getBoundingClientRect(),Le=Ee.getBoundingClientRect(),at={x:ae.clientX-Ce.left,y:ae.clientY-Ce.top},ct={x:ae.clientX-Ce.left,y:ae.clientY-Ce.top},Ue={x:Le.left-Ce.left,y:Le.top-Ce.top,width:Le.width,height:Le.height},{coords:{x:$t,y:Et},resourceIndex:Tc,disposition:Pc,reservationData:Ac}=Gs(xn,ce,at,ne,ue,Se,U);v({coords:{x:$t,y:Et},mouseCoords:ct,resourceIndex:Tc,disposition:Pc,reservationData:Ac,tileBounds:Ue}),q(!0)},4)),te=p.useRef(ot((ae,le)=>{V(),g(ae.map(ce=>({...ce,data:ce.data.filter(ne=>{const{title:ue,description:Se,subtitle:Ee}=ne;return(ue==null?void 0:ue.toLowerCase().includes(le.toLowerCase()))||(Ee==null?void 0:Ee.toLowerCase().includes(le.toLowerCase()))||(Se==null?void 0:Se.toLowerCase().includes(le.toLowerCase()))})})).filter(ce=>ce.data.length>0))},500)),W=(ae,le)=>{if(ae)return le.flatMap(ce=>ce.data).find(ce=>ce.segmentId===ae)},ie=ae=>{if(!ae.target)return{tile:null,segmentId:null};const le=ae.target.closest("[data-segment-id]");return le?{tile:le,segmentId:le.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},fe=ae=>{const le=ae.target.value;y(le),te.current.cancel(),le?te.current(e,le):(V(),g(e))},de=p.useCallback(()=>{K.current.cancel(),q(!1),v(hn)},[]);return p.useEffect(()=>{const ae=ce=>K.current(ce,e,j,I,R,T),le=D.current;if(le)return le.addEventListener("mousemove",ae),le.addEventListener("mouseleave",de),()=>{le.removeEventListener("mousemove",ae),le.removeEventListener("mouseleave",de)}},[K,de,R,I,j,T,e]),p.useEffect(()=>{u?(te.current.cancel(),te.current(e,u)):g(e)},[e,u]),f.jsxs(xi,{children:[f.jsx(ia,{data:X,categories:G,pageNum:ee,pagesAmount:se,rows:J,onLoadNext:oe,onLoadPrevious:B,searchInputValue:u,onSearchInputChange:fe,onItemClick:o,collapsedGroups:S,onToggleGroup:w,allGroupIds:H,onExpandAll:b,onCollapseAll:Y}),f.jsxs(wi,{children:[f.jsx(Ca,{zoom:T,topBarWidth:i,showThemeToggle:_,toggleTheme:s}),e.length?f.jsx(zs,{data:z,baseData:r||e,zoom:T,rows:C,ref:D,onTileClick:n,onEventDrop:c,onEventDrag:d,draggableConfig:a,onDragStateChange:A,onTimeRangeSelect:l,onMultiTimeRangeSelect:h,clickToAddConfig:m,separatorRowIndices:N}):f.jsx(Si,{width:i,children:Q?f.jsx(mn,{isLoading:Q,position:"left"}):f.jsx(bi,{})}),P&&L&&!Z&&(x==null?void 0:x.resourceIndex)>-1&&f.jsx(qa,{tooltipData:x})]})]})},yr=`
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`,ki=M.div`
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
`,Di=M.div`
  display: flex;
  gap: 1.875rem;
`,vr=M.button`
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
`,$i=M.button`
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
`,Ei=M.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textPrimary};
`,_i=M.div`
  display: flex;
`,Ti=M.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`,Pi=({width:e,showThemeToggle:r,toggleTheme:t})=>{const{topbar:n}=He(),{data:o,config:s,handleGoNext:i,handleGoPrev:c,handleGoToday:d,zoomIn:a,zoomOut:l,isNextZoom:h,isPrevZoom:m,toggleDisplayActiveUnits:x,onClearFilterData:v}=Xe(),{colors:k}=Be(),{filterButtonState:g=-1}=s,L=q=>{q.stopPropagation(),v==null||v()};return f.jsxs(ki,{width:e,children:[f.jsx(_i,{children:g>=0&&f.jsxs(pn,{variant:g?"filled":"outlined",iconName:"filter",width:"16",height:"16",onClick:x,children:[n.filters,!!g&&f.jsx("span",{onClick:L,children:f.jsx(Ae,{iconName:"close",height:"16",width:"16",fill:k.textSecondary})})]})}),f.jsxs(Di,{children:[f.jsxs(vr,{onClick:c,children:[f.jsx(Ae,{iconName:"arrowLeft",height:"15",fill:k.textPrimary}),n.prev]}),f.jsx($i,{onClick:d,children:n.today}),f.jsxs(vr,{onClick:i,children:[n.next,f.jsx(Ae,{iconName:"arrowRight",height:"15",fill:k.textPrimary})]})]}),f.jsxs(Ti,{children:[r&&f.jsx(tc,{toggleTheme:t}),f.jsxs(Ei,{children:[n.view,f.jsx(pn,{isDisabled:!m,onClick:l,isFullRounded:!0,iconName:"subtract",width:"14"}),f.jsx(pn,{isDisabled:!h,onClick:a,isFullRounded:!0,iconName:"add",width:"14"})]})]})]})},Ai={add:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>re.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),re.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Ae=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=Be(),i=Ai[e];return i?f.jsx(i,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},Ii=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r],Oi=M.button`
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
  ${({theme:e,variant:r,disabled:t})=>Ii(e,r,t)}
`,pn=({iconName:e,width:r,height:t,fill:n,className:o,onClick:s,children:i,isFullRounded:c,isDisabled:d,variant:a="outlined"})=>{const{colors:l}=Be();return f.jsxs(Oi,{onClick:s,isFullRounded:c,hasChildren:!!i,disabled:d,variant:a,children:[f.jsx(Ae,{iconName:e,width:r,height:t,fill:d?l.disabled:n,className:o}),i]})},Yi=M.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Li=M.div`
  position: relative;
`,Ni=({data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:c,onEventDrag:d,draggableConfig:a,schedulerRef:l,onTimeRangeSelect:h,onMultiTimeRangeSelect:m,clickToAddConfig:x})=>{const{goToDate:v,handleGoToday:k,zoomIn:g,zoomOut:L,zoom:q}=Xe();return p.useImperativeHandle(l,()=>({goToDate:v,goToToday:k,setZoom:Z=>{if(!ar(Z))return;const A=Z-q;if(A>0)for(let u=0;u<A;u++)g();else for(let u=0;u<Math.abs(A);u++)L()}}),[v,k,q,g,L]),f.jsx(Mi,{data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:c,onEventDrag:d,draggableConfig:a,onTimeRangeSelect:h,onMultiTimeRangeSelect:m,clickToAddConfig:x})},Fi=p.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:i,onTileClick:c,handleToggleDisplayActiveUnits:d,onClearFilterData:a,onItemClick:l,isLoading:h,onEventDrop:m,onEventDrag:x,draggableConfig:v,onTimeRangeSelect:k,onMultiTimeRangeSelect:g,clickToAddConfig:L},q){var D;const Z=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,translations:void 0,...o}),[o]),A=p.useRef(null),u=p.useRef(null),[y,S]=p.useState((D=A.current)==null?void 0:D.clientWidth),E=p.useMemo(()=>$(s),[s]),[T,j]=p.useState(Z.defaultTheme??"light"),Q=()=>{j(T==="light"?"dark":"light")},U=T==="light"?Zo:Vo,P=Z.theme?Z.theme[U.mode]:{},_={...U,colors:{...U.colors,...P}};return p.useImperativeHandle(q,()=>({goToDate:F=>{var O;return(O=u.current)==null?void 0:O.goToDate(F)},goToToday:()=>{var F;return(F=u.current)==null?void 0:F.goToToday()},setZoom:F=>{var O;return(O=u.current)==null?void 0:O.setZoom(F)}}),[]),p.useEffect(()=>{const F=()=>{A.current&&S(A.current.clientWidth)};return F(),window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)},[]),A.current,f.jsxs(f.Fragment,{children:[f.jsx(jo,{}),f.jsx(Wo,{theme:_,children:f.jsx(mi,{lang:Z.lang,translations:Z.translations,children:f.jsx(Os,{data:r,isLoading:!!h,config:Z,onRangeChange:i,defaultStartDate:E,handleToggleDisplayActiveUnits:d,onClearFilterData:a,children:f.jsx(Yi,{showScroll:!!r.length,id:Ve,ref:A,children:f.jsx(Li,{children:f.jsx(Ni,{data:r,baseData:n,categories:t,onTileClick:c,topBarWidth:y??0,onItemClick:l,toggleTheme:Q,onEventDrop:m,onEventDrag:x,draggableConfig:v,schedulerRef:u,onTimeRangeSelect:k,onMultiTimeRangeSelect:g,clickToAddConfig:L})})})})})})]})}),Hi=M.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,Wi=M.button`
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
`,zi=M.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Bi=M.p`
  ${je}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,br=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:i,loadPrevious:c}=He(),d=e==="next"?`${i} ${o+2}/${s}`:`${c} ${o}/${s}`;return f.jsx(Hi,{intent:e,children:f.jsxs(Wi,{onClick:r,isVisible:n,children:[t&&f.jsx(zi,{children:t}),f.jsx(Bi,{children:d})]})})},ji=M.div`
  min-width: ${$e+"px"};
  max-width: ${$e+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,Zi=M.div`
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
`,Vi=M.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,Gi=M.input`
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
`,Xi=M.div`
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
`,Ui=M.button`
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
`,Ki=M.div`
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
`,Ji=M.div`
  display: flex;
  align-items: center;
`,qi=M.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`,Qi=M.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,Ri=M.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,xr=M.p`
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
`,ea=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>f.jsx(Ki,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:f.jsxs(Ji,{children:[f.jsx(qi,{children:r.icon?f.jsx(Qi,{src:r.icon,alt:"Icon"}):f.jsx(Ae,{iconName:"defaultAvatar"})}),f.jsxs(Ri,{children:[f.jsx(xr,{isMain:!0,children:r.title}),f.jsx(xr,{children:r.subtitle})]})]})}),ta=M.div`
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
`,na=M.div`
  width: 3px;
  height: 100%;
  flex-shrink: 0;
  background: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder:e.colors.accent};
  border-radius: 0 2px 2px 0;
`,ra=M.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`,oa=M.span`
  font-size: 0.625rem;
  font-weight: 500;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder:e.colors.accent};
  background: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder+"18":e.colors.accent+"14"};
  padding: 1px 6px;
  border-radius: 10px;
  flex-shrink: 0;
  line-height: 1.4;
`,sa=M.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.placeholder};
  transition: transform 0.2s ease;
  transform: rotate(${({$collapsed:e})=>e?"-90deg":"0deg"});
`,wr=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>f.jsxs(ta,{$variant:o,onClick:n,title:e,children:[f.jsx(na,{$variant:o}),f.jsx(sa,{$collapsed:t,children:f.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:f.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),f.jsx(ra,{$variant:o,children:e}),f.jsx(oa,{$variant:o,children:r})]}),ia=({data:e,categories:r,rows:t,onLoadNext:n,onLoadPrevious:o,pageNum:s,pagesAmount:i,searchInputValue:c,onSearchInputChange:d,onItemClick:a,collapsedGroups:l,onToggleGroup:h,allGroupIds:m,onExpandAll:x,onCollapseAll:v})=>{const[k,g]=p.useState(!1),L=He(),q=()=>g(U=>!U),Z=r?[...r].sort((U,P)=>U.maxPassengers-P.maxPassengers):[],A=Z.length>0,u=m.length>0,y=u&&l.size===m.length;u&&l.size;const S=e.filter(U=>U.isSubcontract),E=L.subcontract??"Subcontract",T=U=>{const P=e.indexOf(U);return f.jsx(ea,{id:U.id,item:U.label,rows:t[P],onItemClick:a,isSubcontract:U.isSubcontract},U.id)},j=U=>{const P=e.filter(F=>!F.isSubcontract&&F.categoryId===U.id);if(P.length===0)return null;const _=l.has(U.id),D=U.name;return f.jsxs("div",{children:[f.jsx(wr,{label:D,count:P.length,isCollapsed:_,onToggle:()=>h(U.id),variant:"category"}),!_&&P.map(T)]},U.id)},Q=e.filter(U=>!U.isSubcontract&&(!U.categoryId||!A));return f.jsxs(ji,{children:[f.jsxs(Zi,{children:[f.jsxs(Vi,{children:[f.jsxs(Xi,{isFocused:k,children:[f.jsx(Gi,{placeholder:L.search,value:c,onChange:d,onFocus:q,onBlur:q}),f.jsx(Ae,{iconName:"search"})]}),u&&f.jsx(Ui,{title:y?"Expand all":"Collapse all",onClick:y?x:v,$allCollapsed:y,children:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:y?f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),f.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),f.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),f.jsx(br,{intent:"previous",isVisible:s!==0,onClick:o,icon:f.jsx(Ae,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:s,pagesAmount:i})]}),A?Z.map(j):Q.map(T),A&&Q.length>0&&Q.map(T),S.length>0&&f.jsxs(f.Fragment,{children:[f.jsx(wr,{label:E,count:S.length,isCollapsed:l.has("__subcontract__"),onToggle:()=>h("__subcontract__"),variant:"subcontract"}),!l.has("__subcontract__")&&S.map(T)]}),f.jsx(br,{intent:"next",isVisible:s!==i-1,onClick:n,icon:f.jsx(Ae,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:s,pagesAmount:i})]})},aa=M.div`
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
`,ca=Ct`
from{
    left: -100%;
}
to{
    left: 100%;
}`,la=M.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${ca} 1s infinite;
`,mn=({isLoading:e,position:r})=>e?f.jsx(aa,{position:r,children:f.jsx(la,{})}):null,Ye=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:i,textYPos:c,label:d,font:a,isBottomRow:l,fillStyle:h,topText:m,bottomText:x,strokeStyle:v,labelBetweenCells:k}=e;if(t.beginPath(),t.strokeStyle=v??r.colors.border,t.setLineDash([]),d&&a&&c){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,i),k?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+i),t.lineTo(n+s,o+i),t.stroke(),t.moveTo(n+s/2,o+i),t.lineTo(n+s/2,o+i-5),t.stroke()):t.strokeRect(n+.5,o+.5,s,i),t.font=a;const g=n+s/2-t.measureText(d).width/2;t.textBaseline="middle",t.fillStyle=r.colors.accent,t.fillText(d,g,c)}if(l&&h&&m&&x){t.fillStyle=h,t.fillRect(n,o,s,i),t.strokeRect(n+.5,o+.5,s,i),t.font=m.font;const g=n+s/2-t.measureText(m.label).width/2;t.fillStyle=m.color,t.fillText(m.label,g,m.y),t.font=x.font;const L=n+s/2-t.measureText(x.label).width/2;t.fillStyle=x.color,t.fillText(x.label,L,x.y)}},Sr=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},gn=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},da=(e,r,t,n)=>{const o=et-Ze/Xo,s=et-Ze/Uo,i=Oe+Re;let c=0;for(let d=0;d<r;d++){const a=or($(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(d,"days"));Ye({ctx:e,x:c,y:i,width:ve,height:Ze,isBottomRow:!0,fillStyle:Sr({isCurrent:a.isCurrentDay,isBusinessDay:a.isBusinessDay},n),topText:{y:o,label:a.dayName.toUpperCase(),font:Pe.bottomRow.name,color:gn({isCurrent:a.isCurrentDay,isBusinessDay:a.isBusinessDay},n)},bottomText:{y:s,label:`${a.dayOfMonth}`,font:Pe.bottomRow.number,color:gn({isCurrent:a.isCurrentDay,isBusinessDay:a.isBusinessDay,variant:"bottomRow"},n)}},n),c+=ve}},ua=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*_e;const s=Oe;let c=t.month;for(let d=0;d<r;d++){c>=Zt&&(c=0);const a=rr(t,d)*_e;Ye({ctx:e,x:o,y:s,width:a,height:Re,textYPos:er,label:$().month(c).format("MMMM").toUpperCase(),font:Pe.bottomRow.number},n),o+=a,c++}},fa=(e,r,t)=>{let o=0,s=0,i=$(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month();o=-r.dayOfMonth*ve+ve;for(let c=0;c<Zt;c++)i>Zt-1&&(i=0),s=$(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(c,"months").daysInMonth()*ve,Ye({ctx:e,x:o,y:0,width:s,height:Oe,textYPos:Gt,label:$(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(i).format("MMMM").toUpperCase()+`                                                                                                  ${$(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(i).format("MMMM").toUpperCase()}`,font:Pe.topRow},t),o+=s,i++},ha=(e,r,t,n)=>{const o=7*ve,s=Oe,i=e.canvas.width/o+o,c=r.weekOfYear;let d=0;for(let a=0;a<i;a++){const l=$(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let h=(c+a)%qn;h<=0&&(h+=qn),l!==1&&a===0&&(d=-l*ve+ve),Ye({ctx:e,x:d,y:s,width:o,height:Re,textYPos:er,label:`${t.toUpperCase()} ${h}`,font:Pe.middleRow},n),d+=o}},pa=(e,r,t,n,o)=>{const s=et-Ze/1.6,i=et-Ze/4.5,c=Oe+Re;let d=0;for(let a=0;a<r;a++){const l=$(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(a,"weeks"),h=l.isSame($(),"week");Ye({ctx:e,x:d,y:c,width:tt,height:Ze,isBottomRow:!0,fillStyle:Sr({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:l.isoWeek().toString(),font:Pe.bottomRow.name,color:gn({isCurrent:h},o)},bottomText:{y:i,label:n.toUpperCase(),font:Pe.middleRow,color:o.colors.placeholder}},o),d+=tt}},ma=(e,r,t,n)=>{const s=r.year,i=e.canvas.width*2;let c=0,d=0,a=(nr(s)-t+1)*_e,l=0;for(;c+l<=i;)d>0&&(a=nr(s+d)*_e),l+a>i&&d>0&&(a=Math.ceil((i-l)/_e)*_e),Ye({ctx:e,x:c,y:0,width:a,height:Oe,textYPos:Gt,label:(s+d).toString(),font:Pe.topRow},n),c+=a,l+=a,d++},ga=(e,r,t,n)=>{const o=Math.floor(r/Mt)+2,s=Mt*we;let d=-$(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*we+.5*we;for(let a=0;a<o;a++){const l=$(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(a,"day").format("dddd DD/MM/YYYY").toUpperCase();Ye({ctx:e,x:d,y:nt,width:s,height:ft,textYPos:nt+ft/2+2,label:l,font:Pe.bottomRow.number},n),d+=s}},ya=(e,r,t,n)=>{const o=Math.ceil(r/Mt),s=$(`${t.year}-${t.month+1}-${t.dayOfMonth}`),i=s.add(o-1,"days"),c=s.month(),d=i.add(1,"day").month(),a=c===d?1:2;let l=.5*we;for(let h=0;h<a;h++){const m=$(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),v=$(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),k=v.format("MMMM").toUpperCase(),g=v.diff(m,"hour")+1,L=h===0?g*we:r*we;Ye({ctx:e,x:l,y:0,width:L,height:nt,textYPos:Gt,label:k,font:Pe.topRow},n),l+=L}},va=(e,r,t,n)=>{let o=0;const s=nt+ft,i=$(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),c=we;for(let d=0;d<r;d++){const a=i.add(d,"hours").format("h:00a").toUpperCase();Ye({ctx:e,x:o,y:s,width:c,height:jt,label:a,font:Pe.bottomRow.hoursInDay,textYPos:nt+ft+jt/2+2,labelBetweenCells:!0},n),o+=we}},ba=(e,r,t,n,o,s,i)=>{switch(r){case 0:ma(e,n,s,i),ua(e,t,n,i),pa(e,t,n,o,i);break;case 1:fa(e,n,i),ha(e,n,o,i),da(e,t,n,i);break;case 2:ya(e,t,n,i),ga(e,t,n,i),va(e,t,n,i);break}},xa=M.div`
  position: sticky;
  top: 0;
  z-index: 1;
`,wa=M.div`
  height: ${et}px;
  display: block;
`,Sa=M.canvas``,Ca=({zoom:e,topBarWidth:r,showThemeToggle:t,toggleTheme:n})=>{const{week:o}=He(),{date:s,cols:i,dayOfYear:c,startDate:d,config:a}=Xe(),l=p.useRef(null),h=Be(),m=p.useCallback(x=>{const v=on(),g=(e===2?Go:et)+1;lr(x,v,g),ba(x,e,i,d,o,c,h)},[i,c,d,o,e,h]);return p.useEffect(()=>{if(!l.current)return;const x=l.current.getContext("2d");if(!x)return;const v=()=>m(x);return window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[m]),p.useEffect(()=>{const x=l.current;if(!x)return;x.style.letterSpacing="1px";const v=x.getContext("2d");v&&m(v)},[s,e,m]),f.jsxs(xa,{children:[a.showTopbar!==!1&&f.jsx(Pi,{width:r,showThemeToggle:t,toggleTheme:n}),f.jsx(wa,{id:Ko,children:f.jsx(Sa,{ref:l})})]})},Ma=(e,r,t)=>{let n;switch(t){case 0:n=_e;break;case 2:n=we;break;default:n=ve}const s=e.startDate.startOf("day"),i=e.endDate.startOf("day"),c=r.startDate.startOf("day"),d=r.endDate.startOf("day"),a=()=>{let l;switch(t){case 2:l=(e.startDate.diff(r.startDate,"minute")/be+1)*n-n/2;break;default:l=s.diff(c,"day")*n}return Math.max(0,l)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let l;switch(t){case 2:l=Math.max(e.endDate.diff(e.startDate,"minute")/be*n,50);break;default:l=Math.max(i.diff(s,"day")*n+n,50)}return{x:a(),width:l}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let l;switch(t){case 2:l=Math.max(e.endDate.diff(r.startDate,"minute")/be*n+.5*n,50);break;default:l=Math.max(i.diff(c,"day")*n+n,50)}return{x:a(),width:l}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let l;switch(t){case 2:l=Math.max(r.endDate.diff(e.startDate,"minute")/be*n,50);break;default:l=Math.max(d.diff(s,"day")*n+n,50)}return{x:a(),width:l}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let l;switch(t){case 2:l=Math.max(r.endDate.diff(r.startDate,"minute")/be*n,50);break;default:l=Math.max(d.diff(c,"day")*n+n,50)}return{x:a(),width:l}}return{x:a(),width:50}},ka=(e,r,t,n,o,s)=>{const i=e*he+Jo,c=r.hour(),d=t.hour();let a,l,h,m;switch(s){case 2:{a=$(n),l=$(o),h=$(r).hour(c).minute(0),m=$(t).hour(d).minute(0);break}default:{a=$(n).hour(0).minute(0),l=$(o).hour(23).minute(59),h=r,m=t;break}}return{...Ma({startDate:a,endDate:l},{startDate:h,endDate:m},s),y:i}},Cr=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"},Mr=M.button`
  ${je}
  height: ${Vt}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: ${({theme:e})=>e.colors.textPrimary};
  width: 100%;
  cursor: ${({isDraggable:e,isDragging:r})=>e?r?"grabbing":"grab":"not-allowed"};
  opacity: ${({isDragging:e})=>e?.3:1};
  transition: opacity 0.2s ease;
`;M.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,M.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`,M.span`
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
`,M.p`
  ${je}
  ${Qe}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,M.p`
  ${je}
  ${Qe}
`,M.div`
  position: sticky;
  left: ${$e+16}px;
  overflow: hidden;
`;const kr=M.span`
  font-size: 12px;
  line-height: 1;
  flex-shrink: 0;
  opacity: 0.95;
`,Da=M.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  padding: 0 2px;
  overflow: hidden;
`,$a=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.2px;
  font-variant-numeric: tabular-nums;
`,Ea=M.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 8px;
  min-width: 0;
  overflow: hidden;
`,_a=M.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  gap: 1px;
`,yn=M.span`
  ${Qe}
  font-size: ${({bold:e})=>e?"11px":"9px"};
  font-weight: ${({bold:e})=>e?"700":"500"};
  line-height: 1.25;
  letter-spacing: 0.2px;
  opacity: ${({bold:e})=>e?1:.9};
`;M.span`
  ${Qe}
  font-size: 10px;
  font-weight: 600;
  min-width: 0;
  flex: 1;
`,M.span`
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
`,M.span`
  font-size: 10px;
  line-height: 1;
`,M.div`
  display: flex;
  overflow: hidden;
  min-width: 0;
`;const Ta=34,Pa=90,Aa=150,Ia=({row:e,data:r,zoom:t,onTileClick:n,onDragStart:o,isDragging:s=!1,isDraggable:i=!0,yOffset:c=0})=>{const{date:d}=Xe(),a=rn(d,t),{y:l,x:h,width:m}=ka(e,a.startDate,a.endDate,r.startDate,r.endDate,t),{colors:x}=Be(),v=p.useRef(null),k=$(r.startDate).isSame($(r.endDate),"day"),g=r.eventType===ht.Tour,L=r.eventType===ht.Transfer,q=k&&(g||L),Z=L?"⇄":q?"☀":"▦",A=S=>{v.current={x:S.clientX,y:S.clientY},i&&o&&(S.preventDefault(),o(r,S))},u=S=>{if(v.current){const E=Math.abs(S.clientX-v.current.x),T=Math.abs(S.clientY-v.current.y);Math.sqrt(E*E+T*T)<=5&&(n==null||n(r)),v.current=null}else n==null||n(r)},y={left:`${h}px`,top:`${l+c}px`,backgroundColor:`${r.bgColor??x.defaultTile}`,width:`${m}px`,color:Cr(r.bgColor??"")};return q?f.jsx(Mr,{"data-segment-id":r.segmentId,style:y,onClick:u,onMouseDown:A,onDragStart:S=>S.preventDefault(),isDraggable:i,isDragging:s,children:f.jsxs(Da,{children:[f.jsx(kr,{children:Z}),m>=Ta&&f.jsxs($a,{children:[f.jsx("span",{children:$(r.startDate).format("HH:mm")}),!L&&f.jsx("span",{children:$(r.endDate).format("HH:mm")})]})]})}):f.jsx(Mr,{"data-segment-id":r.segmentId,style:y,onClick:u,onMouseDown:A,onDragStart:S=>S.preventDefault(),isDraggable:i,isDragging:s,children:f.jsxs(Ea,{children:[f.jsx(kr,{children:Z}),f.jsxs(_a,{children:[f.jsx(yn,{bold:!0,children:r.title}),m>=Pa&&r.subtitle&&f.jsx(yn,{children:r.subtitle}),m>=Aa&&r.driver&&f.jsx(yn,{children:r.driver})]})]})})},Oa=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*ke},Ya=({data:e,zoom:r,onTileClick:t,onDragStart:n,isDraggable:o,draggingEventId:s,separatorRowIndices:i=[]})=>{const c=p.useCallback(()=>{let d=0;return e.map((a,l)=>(l>0&&(d+=Math.max(e[l-1].data.length,1)),a.data.map((h,m)=>h.map(x=>{const v=s===x.segmentId,k=o?o(x):!1,g=m+d,L=Oa(g,i);return f.jsx(Ia,{row:g,data:x,zoom:r,onTileClick:t,onDragStart:n,isDragging:v,isDraggable:k,yOffset:L},x.segmentId)})))).flat(2)},[e,t,r,n,o,s,i]);return f.jsx(f.Fragment,{children:c()})};M.div`
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
`,M.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`,M.label`
  font-size: 14px;
`,M.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`,M.input`
  height: 18px;
  width: 18px;
`,M.button`
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
`,M.form`
  background-color: rgba(255, 255, 255, 0.75);
`;const La=M.div`
  position: absolute;
  width: 240px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`,Na=M.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Fa=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`,Ha=M.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
`,Wa=M.span`
  background: ${({$type:e})=>e==="transfer"?"#dbeafe":"#dcfce7"};
  color: ${({$type:e})=>e==="transfer"?"#1e40af":"#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`,za=M.div`
  ${je}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ba=M.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
`,ja=M.div`
  padding: 10px 12px;
`,Za=M.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,Dr=M.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,$r=M.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,Er=M.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,_r=M.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,Tr=M.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Va=M.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Ga=M.div``,Xa=M.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,Ua=M.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ka=M.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Pr=M.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Ar=M.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Ir=M.div`
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
`;M.div``,M.span``,M.span``,M.div``,M.div``,M.span``,M.span``,M.div``,M.div``,M.span``,M.span``,M.div``,M.div``,M.div``,M.span``,M.div``,M.div``,M.div``,M.div``,M.p``,M.span``;const Ja={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},qa=({tooltipData:e})=>{const{mouseCoords:r,reservationData:t}=e,n=p.useRef(null),[o,s]=p.useState("below"),i=He(),c={...Ja,...i.tooltip};p.useLayoutEffect(()=>{if(!n.current||!r)return;const x=n.current,{width:v,height:k}=x.getBoundingClientRect(),g=x.parentElement;if(!g)return;const L=g.getBoundingClientRect(),q=12,Z=4,A=L.height-r.y,u=L.width-r.x;let y=r.x+q,S=r.y+q,E="below";u<v+q&&(y=r.x-v-q),A<k+q&&(S=r.y-k-q,E="above"),y=Math.max(Z,Math.min(y,L.width-v-Z)),S=Math.max(Z,Math.min(S,L.height-k-Z)),s(E),x.style.left=`${y}px`,x.style.top=`${S}px`},[r]);const d=t.reservationType===ht.Tour,a=d&&t.isOneDayEvent,l=()=>d?a?"oneday":"tour":"transfer",h=()=>d?a?c.oneDay:c.tour:c.transfer,m=[t.groupName&&{label:c.groupName,value:t.groupName},t.driver&&{label:c.driver,value:t.driver},t.passengers&&{label:c.passengers,value:String(t.passengers)},t.flightNumber&&{label:c.flightNumber,value:t.flightNumber}].filter(Boolean);return f.jsxs(La,{ref:n,$position:o,children:[f.jsxs(Na,{children:[f.jsxs(Fa,{children:[f.jsx(Ha,{children:t.bookingNumber}),f.jsx(Wa,{$type:l(),children:h()})]}),f.jsx(za,{children:t.eventName}),t.client&&f.jsx(Ba,{children:t.client})]}),f.jsxs(ja,{children:[f.jsxs(Za,{children:[f.jsxs(Dr,{children:[f.jsx($r,{children:c.startDate}),f.jsxs(Er,{children:[f.jsx(_r,{children:t.startDate})," ",f.jsx(Tr,{children:t.startTime})]})]}),d&&t.endDate&&f.jsxs(Dr,{$isEnd:!0,children:[f.jsx($r,{children:c.endDate}),f.jsxs(Er,{children:[f.jsx(_r,{children:t.endDate})," ",f.jsx(Tr,{children:t.endTime})]})]})]}),m.length>0&&f.jsx(Va,{children:m.map((x,v)=>f.jsxs(Ga,{children:[f.jsx(Xa,{children:x.label}),f.jsx(Ua,{children:x.value})]},v))}),(t.serviceNotes||t.reservationNotes)&&f.jsxs(Ka,{children:[t.serviceNotes&&f.jsxs(Pr,{children:[f.jsx(Ar,{children:c.serviceNotes}),f.jsx(Ir,{children:t.serviceNotes})]}),t.reservationNotes&&f.jsxs(Pr,{children:[f.jsx(Ar,{children:c.reservationNotes}),f.jsx(Ir,{children:t.reservationNotes})]})]})]})]})},Qa=M.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`,Ra=M.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({theme:e})=>e.mode==="light"?"4px":"34px"};
  transition: left 0.3s ease;
`,ec=M.div`
  position: absolute;
  top: 5px;
  left: ${({theme:e})=>e.mode==="light"?"38px":"4px"};
  transition: left 0.3s ease;
`,tc=({toggleTheme:e})=>{const r=Be();return f.jsxs(Qa,{onClick:e,children:[f.jsx(Ra,{}),f.jsx(ec,{children:r.mode==="light"?f.jsx(Ae,{iconName:"sun",height:"16",width:"16"}):f.jsx(Ae,{iconName:"moon",height:"16",width:"16"})})]})},nc=M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,rc=M.div`
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
`,oc=M.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,Or=M.p`
  ${je}
  ${Qe}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,sc=M.p`
  ${je}
  ${Qe}
`,ic=M.div`
  position: sticky;
  left: ${$e+16}px;
  overflow: hidden;
`,ac=M.div`
  position: absolute;
  height: ${Vt}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,cc=M.div`
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
`,lc=M.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,dc=M.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,uc=M.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,Yr=M.div`
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
`,Lr=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,Nr=M.div`
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
`,Fr=M.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,vn=M.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,bn=M.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,it=M.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,Hr=M.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,fc=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:i,resourceOnly:c,separatorRowIndices:d=[]})=>{const a=He(),l=A=>{let u=0;for(const y of d)y<=A&&u++;return A*he+u*ke},[h,m]=p.useState(null),[x,v]=p.useState(0),k=p.useCallback((A=400,u=300)=>{const S=t.width,E=48,T=document.getElementById("react-scheduler");if(!T)return{x:r.x+S+16,y:r.y};const j=T.scrollLeft,Q=T.scrollTop,U=T.clientWidth,P=T.clientHeight,_=r.x-j,D=r.y-Q,F={left:$e+16,right:U-16,top:16,bottom:P-16},O=F.right-(_+S),J=_-F.left,ee=F.bottom-(D+E),se=D-F.top;let oe,B;return O>=A+16?oe=_+S+16:J>=A+16?oe=_-A-16:O>=J?(oe=_+S+16,oe+A>F.right&&(oe=F.right-A)):(oe=_-A-16,oe<F.left&&(oe=F.left)),ee>=u+16?B=D+E+16:se>=u+16?B=D-u-16:ee>=se?(B=D+E+16,B+u>F.bottom&&(B=F.bottom-u)):(B=D-u-16,B<F.top&&(B=F.top)),oe=Math.max(F.left,Math.min(oe,F.right-A)),B=Math.max(F.top,Math.min(B,F.bottom-u)),{x:oe+j,y:B+Q}},[r.x,r.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&x===0?v(r.x):s==="idle"&&v(0)},[s,e,r.x,x]),p.useEffect(()=>{m(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const g=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const A=[];let u=0;for(const y of i){const S=Math.max(y.data.length,1);if(y.capacity!==void 0&&e.totalPassengers>y.capacity)for(let E=0;E<S;E++)A.push(u+E);u+=S}return A},[e,i,s]);if(!e||s==="idle"||s==="potential")return null;const L=s==="animating",q=Cr(e.bgColor??""),Z=()=>{if(!n)return"";const A=$(n.startDate).format("MMM D, HH:mm"),u=$(n.endDate).format("HH:mm");return`${A} - ${u}`};return f.jsxs(nc,{children:[g.map(A=>f.jsx(dc,{style:{top:`${l(A)}px`,height:`${he}px`}},A)),n&&s==="dragging"&&f.jsx(lc,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${l(n.resourceIndex)}px`,height:`${he}px`}}),n&&s==="dragging"&&!c&&f.jsxs(f.Fragment,{children:[f.jsx(ac,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${l(n.resourceIndex)+(he-48)/2}px`,width:`${t.width}px`}}),f.jsx(cc,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${l(n.resourceIndex)+(he-48)/2}px`},children:Z()})]}),n&&s==="dragging"&&c&&f.jsx(uc,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${l(n.resourceIndex)}px`,height:`${he}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const A=k(400,300);return f.jsxs(Yr,{style:{left:`${A.x}px`,top:`${A.y}px`},children:[f.jsxs(Lr,{children:[f.jsx(Nr,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?a.conflicts.detectedPlural:a.conflicts.detected," ",a.conflicts.detectedSuffix]}),f.jsx(Fr,{children:n.conflicts.map((u,y)=>{const S=$(n.startDate).format("YYYY-MM-DD"),E=$(n.endDate).format("YYYY-MM-DD"),T=$(u.event.startDate).format("YYYY-MM-DD"),j=$(u.event.endDate).format("YYYY-MM-DD"),Q=$(u.conflictStart).format("YYYY-MM-DD"),U=$(u.conflictEnd).format("YYYY-MM-DD"),P=S!==E,_=T!==j,D=Q!==U,F=P?$(n.startDate).format("MMM D, h:mm A"):$(n.startDate).format("h:mm A"),O=P?$(n.endDate).format("MMM D, h:mm A"):$(n.endDate).format("h:mm A"),J=_?$(u.event.startDate).format("MMM D, h:mm A"):$(u.event.startDate).format("h:mm A"),ee=_?$(u.event.endDate).format("MMM D, h:mm A"):$(u.event.endDate).format("h:mm A"),se=D?$(u.conflictStart).format("MMM D, h:mm A"):$(u.conflictStart).format("h:mm A"),oe=D?$(u.conflictEnd).format("MMM D, h:mm A"):$(u.conflictEnd).format("h:mm A"),B=D?"":$(u.conflictStart).format("MMM D"),V=n.startDate.getTime(),G=n.endDate.getTime(),X=u.event.startDate.getTime(),w=u.event.endDate.getTime(),H=V>=X&&V<w,b=G>X&&G<=w,Y=V<=X&&G>=w,z=X<=V&&w>=G;let I=!1,C=!1,R=!1,N=!1,K="";return Y||z?(I=!0,C=!0,R=!0,N=!0,K=`⚠️ ${a.conflicts.changeBoth}`):H&&b?(I=!0,C=!0,R=!0,N=!0,K=`⚠️ ${a.conflicts.changeBoth}`):H?(I=!0,N=!0,K=`⚠️ ${a.conflicts.changeStart}`):b&&(C=!0,R=!0,K=`⚠️ ${a.conflicts.changeEnd}`),f.jsxs(vn,{children:[f.jsxs(bn,{children:[a.conflicts.conflictsWith,": ",u.event.title,u.event.subtitle&&` - ${u.event.subtitle}`]}),f.jsxs(it,{children:[f.jsx("strong",{children:e.title})," ",a.conflicts.movingTo,":"," ",I?f.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:F}):F," ",a.conflicts.to," ",C?f.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:O}):O]}),f.jsxs(it,{children:[f.jsx("strong",{children:u.event.title})," ",a.conflicts.currentlyAt,":"," ",R?f.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:J}):J," ",a.conflicts.to," ",N?f.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:ee}):ee]}),f.jsxs(Hr,{children:[a.conflicts.conflictTime,": ",B&&`${B}, `,se," - ",oe]}),K&&f.jsx(it,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:K})]},y)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const A=k(400,400);return f.jsxs(Yr,{style:{left:`${A.x}px`,top:`${A.y}px`,borderColor:"#4CAF50"},children:[f.jsxs(Lr,{style:{color:"#2E7D32"},children:[f.jsx(Nr,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?a.conflicts.nearbyEvents:a.conflicts.nearbyEvent]}),f.jsxs(Fr,{children:[(()=>{const u=n.nearbyEvents.some(T=>T.position==="before"),y=n.nearbyEvents.some(T=>T.position==="after"),S=$(n.startDate).format("h:mm A"),E=$(n.endDate).format("h:mm A");return f.jsxs(vn,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[f.jsxs(bn,{style:{color:"#33691E"},children:[a.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),f.jsxs(it,{style:{fontWeight:600},children:[$(n.startDate).format("MMM D"),":"," ",u?f.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:S}):S," ",a.conflicts.to," ",y?f.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:E}):E]}),f.jsx(it,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:a.conflicts.sameDay})]})})(),n.nearbyEvents.map((u,y)=>{const S=$(u.event.startDate).format("YYYY-MM-DD"),E=$(u.event.endDate).format("YYYY-MM-DD"),T=S!==E,j=T?$(u.event.startDate).format("MMM D, h:mm A"):$(u.event.startDate).format("h:mm A"),Q=T?$(u.event.endDate).format("MMM D, h:mm A"):$(u.event.endDate).format("h:mm A"),U=$(u.event.startDate).format("MMM D"),P=Math.floor(u.timeGap/(1e3*60*60)),_=Math.floor(u.timeGap%(1e3*60*60)/(1e3*60)),D=P>0?`${P}h ${_}m`:`${_}m`,F=u.position==="after",O=u.position==="before";return f.jsxs(vn,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[f.jsxs(bn,{style:{color:"#1B5E20"},children:[u.event.title,u.event.subtitle&&` - ${u.event.subtitle}`]}),f.jsxs(it,{children:[!T&&`${U}: `,F?f.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:j}):j," ",a.conflicts.to," ",O?f.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:Q}):Q]}),f.jsxs(Hr,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[D," ",u.position==="before"?a.conflicts.before:a.conflicts.after]})]},y)})]})]})})(),f.jsx(rc,{$isAnimating:L,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:L?`${(h==null?void 0:h.x)??0}px`:"0",top:L?`${(h==null?void 0:h.y)??0}px`:"0",transform:L?void 0:`translate3d(${c?x:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:q},children:f.jsx(oc,{children:f.jsxs(ic,{children:[f.jsx(Or,{$bold:!0,children:e.title}),e.subtitle&&f.jsx(Or,{children:e.subtitle}),e.description&&f.jsx(sc,{children:e.description})]})})})]})},hc=Ct`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,pc=M.div`
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
  animation: ${hc} 1.5s ease-in-out infinite;
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
`,mc=({selectionBox:e,isSelecting:r})=>!e||!r?null:f.jsx(pc,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),gc=Ct`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,yc=M.div`
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
  animation: ${gc} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,vc=M.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,bc=M.span`
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
`,xc=M.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,wc=M.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;M.div`
  display: none;
`,M.div`
  display: none;
`,M.button`
  display: none;
`;const Sc=M.div`
  display: flex;
  gap: 8px;
`,Wr=M.button`
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
`,Cc=({selections:e,onConfirm:r,onClear:t})=>{var v;const o=He().multiSelect,s=p.useMemo(()=>e.filter(k=>k.hasConflict).length,[e]),i=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",c=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,d=(o==null?void 0:o.clearAll)||"Clear All",a=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",l=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((v=o==null?void 0:o.conflictsWarning)==null?void 0:v.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const m=s>0,x=f.jsxs(yc,{$hasConflicts:m,"data-multi-select-ui":!0,children:[f.jsxs(vc,{children:[f.jsxs(bc,{$hasConflicts:m,children:[e.length," ",i]}),m&&f.jsxs(xc,{children:["⚠️ ",h]}),f.jsx(wc,{children:c})]}),f.jsxs(Sc,{children:[f.jsxs(Wr,{variant:"secondary",onClick:t,children:["✕ ",d]}),f.jsx(Wr,{variant:"primary",$hasConflicts:m,onClick:r,children:m?`⚠️ ${l}`:`✓ ${a}`})]})]});return Br.createPortal(x,document.body)},Mc=Ct`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,kc=M.div`
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
  animation: ${Mc} 0.2s ease-out;
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
`,Dc=M.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,$c=M.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,Ec=M.button`
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
`,_c=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:i=[]})=>{const[c,d]=p.useState(null),[a,l]=p.useState({x:0,y:0}),h=p.useRef(null),m=p.useMemo(()=>{switch(t){case 0:return _e*7;case 1:return ve;case 2:return we;default:return ve}},[t]),x=p.useMemo(()=>$().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),v=p.useMemo(()=>e.map((y,S)=>{let E=0,T=!1;for(const J of r){if(J.id===y.resourceId){T=!0;break}E+=Math.max(J.data.length,1)}if(!T)return null;const j=$(y.startDate),Q=$(y.endDate);let U,P;switch(t){case 0:U=Math.floor(j.diff(x,"days")/7),P=Math.max(1,Math.ceil(Q.diff(j,"days")/7)+1);break;case 1:U=j.diff(x,"days"),P=Math.max(1,Q.diff(j,"days")+1);break;case 2:U=j.diff(x,"hours"),P=Math.max(1,Q.diff(j,"hours")+1);break;default:U=0,P=1}const _=U*m;let D=0;for(const J of i)J<=E&&D++;const F=E*he+D*ke,O=P*m;return{index:S,selection:y,x:_,y:F,width:O,height:he}}),[e,r,t,x,m]),k=(y,S)=>{const E=$(y).format("MMM D"),T=$(S).format("MMM D");return E===T?E:`${E} - ${T}`},g=y=>!y.hasConflict||!y.conflicts?"":`⚠️ Conflicts with:
${y.conflicts.map(E=>{const T=(E.overlapDuration/36e5).toFixed(1);return`• ${E.event.title} (${T}h overlap)`}).join(`
`)}`,L=p.useCallback(y=>{let S=0;for(const E of r){const T=Math.max(E.data.length,1);if(y>=S*he&&y<(S+T)*he)return{resourceId:E.id,resourceLabel:E.label};S+=T}return null},[r]),q=p.useCallback(y=>{const S=Math.floor(y/m);switch(t){case 0:return x.add(S*7,"days").toDate();case 1:return x.add(S,"days").toDate();case 2:return x.add(S,"hours").toDate();default:return x.toDate()}},[t,x,m]),Z=p.useCallback((y,S)=>{!s||(y.preventDefault(),y.stopPropagation(),!v[S])||(h.current={x:y.clientX,y:y.clientY},d(S),l({x:0,y:0}))},[s,v]),A=p.useCallback(y=>{if(c===null||!h.current)return;const S=y.clientX-h.current.x,E=y.clientY-h.current.y,T=Math.round(S/m)*m,j=Math.round(E/he)*he;l({x:T,y:j})},[c,m]),u=p.useCallback(()=>{if(c===null||!s){d(null),l({x:0,y:0}),h.current=null;return}const y=v[c];if(!y){d(null),l({x:0,y:0}),h.current=null;return}const S=y.x+a.x,E=y.y+a.y,T=L(E+he/2);if(!T){d(null),l({x:0,y:0}),h.current=null;return}const j=q(S),Q=e[c],U=Q.endDate.getTime()-Q.startDate.getTime(),P=new Date(j.getTime()+U);s(c,{startDate:j,endDate:P,resourceId:T.resourceId,resourceLabel:T.resourceLabel}),d(null),l({x:0,y:0}),h.current=null},[c,a,v,e,s,L,q]);return p.useEffect(()=>{if(c!==null)return document.addEventListener("mousemove",A),document.addEventListener("mouseup",u),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",u)}},[c,A,u]),f.jsx(f.Fragment,{children:v.map(y=>{if(!y)return null;const S=y.selection.hasConflict||!1,E=c===y.index,T=E?y.x+a.x:y.x,j=E?y.y+a.y:y.y;return f.jsxs(kc,{$hasConflict:S,$isDragging:E,style:{left:T,top:j,width:y.width,height:y.height},"data-multi-select-ui":!0,onMouseDown:Q=>Z(Q,y.index),children:[S&&f.jsx($c,{title:g(y.selection),children:"⚠️"}),f.jsx(Dc,{$hasConflict:S,children:k(y.selection.startDate,y.selection.endDate)}),f.jsx(Ec,{onClick:Q=>{Q.stopPropagation(),o(y.index)},onMouseDown:Q=>Q.stopPropagation(),title:S?"Remove conflicting selection":"Remove selection",children:"×"})]},y.index)})})},al="";Me.Scheduler=Fi,Object.defineProperty(Me,Symbol.toStringTag,{value:"Module"})});
