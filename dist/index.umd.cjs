(function(Me,l){typeof exports=="object"&&typeof module<"u"?l(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],l):(Me=typeof globalThis<"u"?globalThis:Me||self,l(Me["react-scheduler"]={},Me["react/jsx-runtime"],Me.React,Me.ReactDOM))})(this,function(Me,l,p,Xr){"use strict";var el=Object.defineProperty;var tl=(Me,l,p)=>l in Me?el(Me,l,{enumerable:!0,configurable:!0,writable:!0,value:p}):Me[l]=p;var Gr=(Me,l,p)=>(tl(Me,typeof l!="symbol"?l+"":l,p),p);function Ur(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const re=Ur(p);var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lt={},Kr={get exports(){return lt},set exports(e){lt=e}},pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wn;function Jr(){if(wn)return pe;wn=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),v;v=Symbol.for("react.module.reference");function k(m){if(typeof m=="object"&&m!==null){var W=m.$$typeof;switch(W){case e:switch(m=m.type,m){case t:case o:case n:case a:case d:return m;default:switch(m=m&&m.$$typeof,m){case c:case i:case u:case g:case h:case s:return m;default:return W}}case r:return W}}}return pe.ContextConsumer=i,pe.ContextProvider=s,pe.Element=e,pe.ForwardRef=u,pe.Fragment=t,pe.Lazy=g,pe.Memo=h,pe.Portal=r,pe.Profiler=o,pe.StrictMode=n,pe.Suspense=a,pe.SuspenseList=d,pe.isAsyncMode=function(){return!1},pe.isConcurrentMode=function(){return!1},pe.isContextConsumer=function(m){return k(m)===i},pe.isContextProvider=function(m){return k(m)===s},pe.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},pe.isForwardRef=function(m){return k(m)===u},pe.isFragment=function(m){return k(m)===t},pe.isLazy=function(m){return k(m)===g},pe.isMemo=function(m){return k(m)===h},pe.isPortal=function(m){return k(m)===r},pe.isProfiler=function(m){return k(m)===o},pe.isStrictMode=function(m){return k(m)===n},pe.isSuspense=function(m){return k(m)===a},pe.isSuspenseList=function(m){return k(m)===d},pe.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===t||m===o||m===n||m===a||m===d||m===b||typeof m=="object"&&m!==null&&(m.$$typeof===g||m.$$typeof===h||m.$$typeof===s||m.$$typeof===i||m.$$typeof===u||m.$$typeof===v||m.getModuleId!==void 0)},pe.typeOf=k,pe}var me={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sn;function qr(){return Sn||(Sn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),v=!1,k=!1,m=!1,W=!1,q=!1,j;j=Symbol.for("react.module.reference");function A(L){return!!(typeof L=="string"||typeof L=="function"||L===t||L===o||q||L===n||L===a||L===d||W||L===b||v||k||m||typeof L=="object"&&L!==null&&(L.$$typeof===g||L.$$typeof===h||L.$$typeof===s||L.$$typeof===i||L.$$typeof===u||L.$$typeof===j||L.getModuleId!==void 0))}function f(L){if(typeof L=="object"&&L!==null){var J=L.$$typeof;switch(J){case e:var te=L.type;switch(te){case t:case o:case n:case a:case d:return te;default:var H=te&&te.$$typeof;switch(H){case c:case i:case u:case g:case h:case s:return H;default:return J}}case r:return J}}}var y=i,S=s,T=e,P=u,Z=t,K=g,U=h,D=r,E=o,$=n,N=a,O=d,Q=!1,ee=!1;function se(L){return Q||(Q=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function oe(L){return ee||(ee=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function z(L){return f(L)===i}function V(L){return f(L)===s}function G(L){return typeof L=="object"&&L!==null&&L.$$typeof===e}function X(L){return f(L)===u}function w(L){return f(L)===t}function F(L){return f(L)===g}function x(L){return f(L)===h}function Y(L){return f(L)===r}function B(L){return f(L)===o}function I(L){return f(L)===n}function C(L){return f(L)===a}function R(L){return f(L)===d}me.ContextConsumer=y,me.ContextProvider=S,me.Element=T,me.ForwardRef=P,me.Fragment=Z,me.Lazy=K,me.Memo=U,me.Portal=D,me.Profiler=E,me.StrictMode=$,me.Suspense=N,me.SuspenseList=O,me.isAsyncMode=se,me.isConcurrentMode=oe,me.isContextConsumer=z,me.isContextProvider=V,me.isElement=G,me.isForwardRef=X,me.isFragment=w,me.isLazy=F,me.isMemo=x,me.isPortal=Y,me.isProfiler=B,me.isStrictMode=I,me.isSuspense=C,me.isSuspenseList=R,me.isValidElementType=A,me.typeOf=f}()),me}(function(e){process.env.NODE_ENV==="production"?e.exports=Jr():e.exports=qr()})(Kr);function Qr(e){function r(z,V,G,X,w){for(var F=0,x=0,Y=0,B=0,I,C,R=0,L=0,J,te=J=I=0,H=0,ie=0,he=0,de=0,ae=G.length,le=ae-1,ce,ne="",fe="",Se="",_e="",De;H<ae;){if(C=G.charCodeAt(H),H===le&&x+B+Y+F!==0&&(x!==0&&(C=x===47?10:47),B=Y=F=0,ae++,le++),x+B+Y+F===0){if(H===le&&(0<ie&&(ne=ne.replace(g,"")),0<ne.trim().length)){switch(C){case 32:case 9:case 59:case 13:case 10:break;default:ne+=G.charAt(H)}C=59}switch(C){case 123:for(ne=ne.trim(),I=ne.charCodeAt(0),J=1,de=++H;H<ae;){switch(C=G.charCodeAt(H)){case 123:J++;break;case 125:J--;break;case 47:switch(C=G.charCodeAt(H+1)){case 42:case 47:e:{for(te=H+1;te<le;++te)switch(G.charCodeAt(te)){case 47:if(C===42&&G.charCodeAt(te-1)===42&&H+2!==te){H=te+1;break e}break;case 10:if(C===47){H=te+1;break e}}H=te}}break;case 91:C++;case 40:C++;case 34:case 39:for(;H++<le&&G.charCodeAt(H)!==C;);}if(J===0)break;H++}switch(J=G.substring(de,H),I===0&&(I=(ne=ne.replace(h,"").trim()).charCodeAt(0)),I){case 64:switch(0<ie&&(ne=ne.replace(g,"")),C=ne.charCodeAt(1),C){case 100:case 109:case 115:case 45:ie=V;break;default:ie=N}if(J=r(V,ie,J,C,w+1),de=J.length,0<Q&&(ie=t(N,ne,he),De=c(3,J,ie,V,D,U,de,C,w,X),ne=ie.join(""),De!==void 0&&(de=(J=De.trim()).length)===0&&(C=0,J="")),0<de)switch(C){case 115:ne=ne.replace(y,i);case 100:case 109:case 45:J=ne+"{"+J+"}";break;case 107:ne=ne.replace(q,"$1 $2"),J=ne+"{"+J+"}",J=$===1||$===2&&s("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=ne+J,X===112&&(J=(fe+=J,""))}else J="";break;default:J=r(V,t(V,ne,he),J,X,w+1)}Se+=J,J=he=ie=te=I=0,ne="",C=G.charCodeAt(++H);break;case 125:case 59:if(ne=(0<ie?ne.replace(g,""):ne).trim(),1<(de=ne.length))switch(te===0&&(I=ne.charCodeAt(0),I===45||96<I&&123>I)&&(de=(ne=ne.replace(" ",":")).length),0<Q&&(De=c(1,ne,V,z,D,U,fe.length,X,w,X))!==void 0&&(de=(ne=De.trim()).length)===0&&(ne="\0\0"),I=ne.charCodeAt(0),C=ne.charCodeAt(1),I){case 0:break;case 64:if(C===105||C===99){_e+=ne+G.charAt(H);break}default:ne.charCodeAt(de-1)!==58&&(fe+=o(ne,I,C,ne.charCodeAt(2)))}he=ie=te=I=0,ne="",C=G.charCodeAt(++H)}}switch(C){case 13:case 10:x===47?x=0:1+I===0&&X!==107&&0<ne.length&&(ie=1,ne+="\0"),0<Q*se&&c(0,ne,V,z,D,U,fe.length,X,w,X),U=1,D++;break;case 59:case 125:if(x+B+Y+F===0){U++;break}default:switch(U++,ce=G.charAt(H),C){case 9:case 32:if(B+F+x===0)switch(R){case 44:case 58:case 9:case 32:ce="";break;default:C!==32&&(ce=" ")}break;case 0:ce="\\0";break;case 12:ce="\\f";break;case 11:ce="\\v";break;case 38:B+x+F===0&&(ie=he=1,ce="\f"+ce);break;case 108:if(B+x+F+E===0&&0<te)switch(H-te){case 2:R===112&&G.charCodeAt(H-3)===58&&(E=R);case 8:L===111&&(E=L)}break;case 58:B+x+F===0&&(te=H);break;case 44:x+Y+B+F===0&&(ie=1,ce+="\r");break;case 34:case 39:x===0&&(B=B===C?0:B===0?C:B);break;case 91:B+x+Y===0&&F++;break;case 93:B+x+Y===0&&F--;break;case 41:B+x+F===0&&Y--;break;case 40:if(B+x+F===0){if(I===0)switch(2*R+3*L){case 533:break;default:I=1}Y++}break;case 64:x+Y+B+F+te+J===0&&(J=1);break;case 42:case 47:if(!(0<B+F+Y))switch(x){case 0:switch(2*C+3*G.charCodeAt(H+1)){case 235:x=47;break;case 220:de=H,x=42}break;case 42:C===47&&R===42&&de+2!==H&&(G.charCodeAt(de+2)===33&&(fe+=G.substring(de,H+1)),ce="",x=0)}}x===0&&(ne+=ce)}L=R,R=C,H++}if(de=fe.length,0<de){if(ie=V,0<Q&&(De=c(2,fe,ie,z,D,U,de,X,w,X),De!==void 0&&(fe=De).length===0))return _e+fe+Se;if(fe=ie.join(",")+"{"+fe+"}",$*E!==0){switch($!==2||s(fe,2)||(E=0),E){case 111:fe=fe.replace(A,":-moz-$1")+fe;break;case 112:fe=fe.replace(j,"::-webkit-input-$1")+fe.replace(j,"::-moz-$1")+fe.replace(j,":-ms-input-$1")+fe}E=0}}return _e+fe+Se}function t(z,V,G){var X=V.trim().split(m);V=X;var w=X.length,F=z.length;switch(F){case 0:case 1:var x=0;for(z=F===0?"":z[0]+" ";x<w;++x)V[x]=n(z,V[x],G).trim();break;default:var Y=x=0;for(V=[];x<w;++x)for(var B=0;B<F;++B)V[Y++]=n(z[B]+" ",X[x],G).trim()}return V}function n(z,V,G){var X=V.charCodeAt(0);switch(33>X&&(X=(V=V.trim()).charCodeAt(0)),X){case 38:return V.replace(W,"$1"+z.trim());case 58:return z.trim()+V.replace(W,"$1"+z.trim());default:if(0<1*G&&0<V.indexOf("\f"))return V.replace(W,(z.charCodeAt(0)===58?"":"$1")+z.trim())}return z+V}function o(z,V,G,X){var w=z+";",F=2*V+3*G+4*X;if(F===944){z=w.indexOf(":",9)+1;var x=w.substring(z,w.length-1).trim();return x=w.substring(0,z).trim()+x+";",$===1||$===2&&s(x,1)?"-webkit-"+x+x:x}if($===0||$===2&&!s(w,1))return w;switch(F){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(K,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return x=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+x+"-webkit-"+w+"-ms-flex-pack"+x+w;case 1005:return v.test(w)?w.replace(b,":-webkit-")+w.replace(b,":-moz-")+w:w;case 1e3:switch(x=w.substring(13).trim(),V=x.indexOf("-")+1,x.charCodeAt(0)+x.charCodeAt(V)){case 226:x=w.replace(f,"tb");break;case 232:x=w.replace(f,"tb-rl");break;case 220:x=w.replace(f,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+x+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(V=(w=z).length-10,x=(w.charCodeAt(V)===33?w.substring(0,V):w).substring(z.indexOf(":",7)+1).trim(),F=x.charCodeAt(0)+(x.charCodeAt(7)|0)){case 203:if(111>x.charCodeAt(8))break;case 115:w=w.replace(x,"-webkit-"+x)+";"+w;break;case 207:case 102:w=w.replace(x,"-webkit-"+(102<F?"inline-":"")+"box")+";"+w.replace(x,"-webkit-"+x)+";"+w.replace(x,"-ms-"+x+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return x=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+x+"-ms-flex-"+x+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(T,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(T,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(Z.test(z)===!0)return(x=z.substring(z.indexOf(":")+1)).charCodeAt(0)===115?o(z.replace("stretch","fill-available"),V,G,X).replace(":fill-available",":stretch"):w.replace(x,"-webkit-"+x)+w.replace(x,"-moz-"+x.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,G+X===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(k,"$1-webkit-$2")+w}return w}function s(z,V){var G=z.indexOf(V===1?":":"{"),X=z.substring(0,V!==3?G:10);return G=z.substring(G+1,z.length-1),ee(V!==2?X:X.replace(P,"$1"),G,V)}function i(z,V){var G=o(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return G!==V+";"?G.replace(S," or ($1)").substring(4):"("+V+")"}function c(z,V,G,X,w,F,x,Y,B,I){for(var C=0,R=V,L;C<Q;++C)switch(L=O[C].call(d,z,R,G,X,w,F,x,Y,B,I)){case void 0:case!1:case!0:case null:break;default:R=L}if(R!==V)return R}function u(z){switch(z){case void 0:case null:Q=O.length=0;break;default:if(typeof z=="function")O[Q++]=z;else if(typeof z=="object")for(var V=0,G=z.length;V<G;++V)u(z[V]);else se=!!z|0}return u}function a(z){return z=z.prefix,z!==void 0&&(ee=null,z?typeof z!="function"?$=1:($=2,ee=z):$=0),a}function d(z,V){var G=z;if(33>G.charCodeAt(0)&&(G=G.trim()),oe=G,G=[oe],0<Q){var X=c(-1,V,G,G,D,U,0,0,0,0);X!==void 0&&typeof X=="string"&&(V=X)}var w=r(N,G,V,0,0);return 0<Q&&(X=c(-2,w,G,G,D,U,w.length,0,0,0),X!==void 0&&(w=X)),oe="",E=0,U=D=1,w}var h=/^\0+/g,g=/[\0\r\f]/g,b=/: */g,v=/zoo|gra/,k=/([,: ])(transform)/g,m=/,\r+?/g,W=/([\t\r\n ])*\f?&/g,q=/@(k\w+)\s*(\S*)\s*/,j=/::(place)/g,A=/:(read-only)/g,f=/[svh]\w+-[tblr]{2}/,y=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,T=/-self|flex-/g,P=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Z=/stretch|:\s*\w+\-(?:conte|avail)/,K=/([^-])(image-set\()/,U=1,D=1,E=0,$=1,N=[],O=[],Q=0,ee=null,se=0,oe="";return d.use=u,d.set=a,e!==void 0&&a(e),d}var Rr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function eo(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var to=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Cn=eo(function(e){return to.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Tt={},no={get exports(){return Tt},set exports(e){Tt=e}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mn;function ro(){if(Mn)return ge;Mn=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,a=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,v=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,W=e?Symbol.for("react.responder"):60118,q=e?Symbol.for("react.scope"):60119;function j(f){if(typeof f=="object"&&f!==null){var y=f.$$typeof;switch(y){case r:switch(f=f.type,f){case u:case a:case n:case s:case o:case h:return f;default:switch(f=f&&f.$$typeof,f){case c:case d:case v:case b:case i:return f;default:return y}}case t:return y}}}function A(f){return j(f)===a}return ge.AsyncMode=u,ge.ConcurrentMode=a,ge.ContextConsumer=c,ge.ContextProvider=i,ge.Element=r,ge.ForwardRef=d,ge.Fragment=n,ge.Lazy=v,ge.Memo=b,ge.Portal=t,ge.Profiler=s,ge.StrictMode=o,ge.Suspense=h,ge.isAsyncMode=function(f){return A(f)||j(f)===u},ge.isConcurrentMode=A,ge.isContextConsumer=function(f){return j(f)===c},ge.isContextProvider=function(f){return j(f)===i},ge.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===r},ge.isForwardRef=function(f){return j(f)===d},ge.isFragment=function(f){return j(f)===n},ge.isLazy=function(f){return j(f)===v},ge.isMemo=function(f){return j(f)===b},ge.isPortal=function(f){return j(f)===t},ge.isProfiler=function(f){return j(f)===s},ge.isStrictMode=function(f){return j(f)===o},ge.isSuspense=function(f){return j(f)===h},ge.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===n||f===a||f===s||f===o||f===h||f===g||typeof f=="object"&&f!==null&&(f.$$typeof===v||f.$$typeof===b||f.$$typeof===i||f.$$typeof===c||f.$$typeof===d||f.$$typeof===m||f.$$typeof===W||f.$$typeof===q||f.$$typeof===k)},ge.typeOf=j,ge}var ye={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kn;function oo(){return kn||(kn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,a=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,v=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,W=e?Symbol.for("react.responder"):60118,q=e?Symbol.for("react.scope"):60119;function j(C){return typeof C=="string"||typeof C=="function"||C===n||C===a||C===s||C===o||C===h||C===g||typeof C=="object"&&C!==null&&(C.$$typeof===v||C.$$typeof===b||C.$$typeof===i||C.$$typeof===c||C.$$typeof===d||C.$$typeof===m||C.$$typeof===W||C.$$typeof===q||C.$$typeof===k)}function A(C){if(typeof C=="object"&&C!==null){var R=C.$$typeof;switch(R){case r:var L=C.type;switch(L){case u:case a:case n:case s:case o:case h:return L;default:var J=L&&L.$$typeof;switch(J){case c:case d:case v:case b:case i:return J;default:return R}}case t:return R}}}var f=u,y=a,S=c,T=i,P=r,Z=d,K=n,U=v,D=b,E=t,$=s,N=o,O=h,Q=!1;function ee(C){return Q||(Q=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),se(C)||A(C)===u}function se(C){return A(C)===a}function oe(C){return A(C)===c}function z(C){return A(C)===i}function V(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function G(C){return A(C)===d}function X(C){return A(C)===n}function w(C){return A(C)===v}function F(C){return A(C)===b}function x(C){return A(C)===t}function Y(C){return A(C)===s}function B(C){return A(C)===o}function I(C){return A(C)===h}ye.AsyncMode=f,ye.ConcurrentMode=y,ye.ContextConsumer=S,ye.ContextProvider=T,ye.Element=P,ye.ForwardRef=Z,ye.Fragment=K,ye.Lazy=U,ye.Memo=D,ye.Portal=E,ye.Profiler=$,ye.StrictMode=N,ye.Suspense=O,ye.isAsyncMode=ee,ye.isConcurrentMode=se,ye.isContextConsumer=oe,ye.isContextProvider=z,ye.isElement=V,ye.isForwardRef=G,ye.isFragment=X,ye.isLazy=w,ye.isMemo=F,ye.isPortal=x,ye.isProfiler=Y,ye.isStrictMode=B,ye.isSuspense=I,ye.isValidElementType=j,ye.typeOf=A}()),ye}(function(e){process.env.NODE_ENV==="production"?e.exports=ro():e.exports=oo()})(no);var Pt=Tt,so={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},io={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ao={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},At={};At[Pt.ForwardRef]=ao,At[Pt.Memo]=Dn;function $n(e){return Pt.isMemo(e)?Dn:At[e.$$typeof]||so}var co=Object.defineProperty,lo=Object.getOwnPropertyNames,En=Object.getOwnPropertySymbols,uo=Object.getOwnPropertyDescriptor,fo=Object.getPrototypeOf,_n=Object.prototype;function Tn(e,r,t){if(typeof r!="string"){if(_n){var n=fo(r);n&&n!==_n&&Tn(e,n,t)}var o=lo(r);En&&(o=o.concat(En(r)));for(var s=$n(e),i=$n(r),c=0;c<o.length;++c){var u=o[c];if(!io[u]&&!(t&&t[u])&&!(i&&i[u])&&!(s&&s[u])){var a=uo(r,u);try{co(e,u,a)}catch{}}}}return e}var ho=Tn;function Te(){return(Te=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Pn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},It=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!lt.typeOf(e)},mt=Object.freeze([]),Ne=Object.freeze({});function Ue(e){return typeof e=="function"}function Ot(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Yt(e){return e&&typeof e.styledComponentId=="string"}var Ke=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Lt=typeof window<"u"&&"HTMLElement"in window,po=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),mo={},go=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function yo(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Ae(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(yo.apply(void 0,[go[e]].concat(t)).trim())}var vo=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,i=s;t>=i;)(i<<=1)<0&&Ae(16,""+t);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var c=s;c<i;c++)this.groupSizes[c]=0}for(var u=this.indexOfGroup(t+1),a=0,d=n.length;a<d;a++)this.tag.insertRule(u,n[a])&&(this.groupSizes[t]++,u++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var i=o;i<s;i++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),i=s+o,c=s;c<i;c++)n+=this.tag.getRule(c)+`/*!sc*/
`;return n},e}(),gt=new Map,yt=new Map,dt=1,vt=function(e){if(gt.has(e))return gt.get(e);for(;yt.has(dt);)dt++;var r=dt++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&Ae(16,""+r),gt.set(e,r),yt.set(r,e),r},bo=function(e){return yt.get(e)},xo=function(e,r){r>=dt&&(dt=r+1),gt.set(e,r),yt.set(r,e)},wo="style["+Ke+'][data-styled-version="5.3.8"]',So=new RegExp("^"+Ke+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Co=function(e,r,t){for(var n,o=t.split(","),s=0,i=o.length;s<i;s++)(n=o[s])&&e.registerName(r,n)},Mo=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var i=t[o].trim();if(i){var c=i.match(So);if(c){var u=0|parseInt(c[1],10),a=c[2];u!==0&&(xo(a,u),Co(e,a,c[3]),e.getTag().insertRules(u,n)),n.length=0}else n.push(i)}}},ko=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},An=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(c){for(var u=c.childNodes,a=u.length;a>=0;a--){var d=u[a];if(d&&d.nodeType===1&&d.hasAttribute(Ke))return d}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(Ke,"active"),n.setAttribute("data-styled-version","5.3.8");var i=ko();return i&&n.setAttribute("nonce",i),t.insertBefore(n,s),n},Do=function(){function e(t){var n=this.element=An(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,i=0,c=s.length;i<c;i++){var u=s[i];if(u.ownerNode===o)return u}Ae(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),$o=function(){function e(t){var n=this.element=An(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Eo=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),In=Lt,_o={isServer:!Lt,useCSSOMInjection:!po},bt=function(){function e(t,n,o){t===void 0&&(t=Ne),n===void 0&&(n={}),this.options=Te({},_o,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Lt&&In&&(In=!1,function(s){for(var i=document.querySelectorAll(wo),c=0,u=i.length;c<u;c++){var a=i[c];a&&a.getAttribute(Ke)!=="active"&&(Mo(s,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(t){return vt(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Te({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,i=n.target,t=o?new Eo(i):s?new Do(i):new $o(i),new vo(t)));var t,n,o,s,i},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(vt(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(vt(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(vt(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",i=0;i<o;i++){var c=bo(i);if(c!==void 0){var u=t.names.get(c),a=n.getGroup(i);if(u&&a&&u.size){var d=Ke+".g"+i+'[id="'+c+'"]',h="";u!==void 0&&u.forEach(function(g){g.length>0&&(h+=g+",")}),s+=""+a+d+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),To=/(a)(d)/gi,On=function(e){return String.fromCharCode(e+(e>25?39:97))};function Nt(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=On(r%52)+t;return(On(r%52)+t).replace(To,"$1-$2")}var Be=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},Yn=function(e){return Be(5381,e)};function Ln(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(Ue(t)&&!Yt(t))return!1}return!0}var Po=Yn("5.3.8"),Ao=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&Ln(r),this.componentId=t,this.baseHash=Be(Po,t),this.baseStyle=n,bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var i=ze(this.rules,r,t,n).join(""),c=Nt(Be(this.baseHash,i)>>>0);if(!t.hasNameForId(o,c)){var u=n(i,"."+c,void 0,o);t.insertRules(o,c,u)}s.push(c),this.staticRulesId=c}else{for(var a=this.rules.length,d=Be(this.baseHash,n.hash),h="",g=0;g<a;g++){var b=this.rules[g];if(typeof b=="string")h+=b,process.env.NODE_ENV!=="production"&&(d=Be(d,b+g));else if(b){var v=ze(b,r,t,n),k=Array.isArray(v)?v.join(""):v;d=Be(d,k+g),h+=k}}if(h){var m=Nt(d>>>0);if(!t.hasNameForId(o,m)){var W=n(h,"."+m,void 0,o);t.insertRules(o,m,W)}s.push(m)}}return s.join(" ")},e}(),Io=/^\s*\/\/.*$/gm,Oo=[":","[",".","#"];function Yo(e){var r,t,n,o,s=e===void 0?Ne:e,i=s.options,c=i===void 0?Ne:i,u=s.plugins,a=u===void 0?mt:u,d=new Qr(c),h=[],g=function(k){function m(W){if(W)try{k(W+"}")}catch{}}return function(W,q,j,A,f,y,S,T,P,Z){switch(W){case 1:if(P===0&&q.charCodeAt(0)===64)return k(q+";"),"";break;case 2:if(T===0)return q+"/*|*/";break;case 3:switch(T){case 102:case 112:return k(j[0]+q),"";default:return q+(Z===0?"/*|*/":"")}case-2:q.split("/*|*/}").forEach(m)}}}(function(k){h.push(k)}),b=function(k,m,W){return m===0&&Oo.indexOf(W[t.length])!==-1||W.match(o)?k:"."+r};function v(k,m,W,q){q===void 0&&(q="&");var j=k.replace(Io,""),A=m&&W?W+" "+m+" { "+j+" }":j;return r=q,t=m,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),d(W||!m?"":m,A)}return d.use([].concat(a,[function(k,m,W){k===2&&W.length&&W[0].lastIndexOf(t)>0&&(W[0]=W[0].replace(n,b))},g,function(k){if(k===-2){var m=h;return h=[],m}}])),v.hash=a.length?a.reduce(function(k,m){return m.name||Ae(15),Be(k,m.name)},5381).toString():"",v}var Nn=p.createContext();Nn.Consumer;var Fn=p.createContext(),Lo=(Fn.Consumer,new bt),Ft=Yo();function Wn(){return p.useContext(Nn)||Lo}function Hn(){return p.useContext(Fn)||Ft}var Bn=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=Ft);var i=n.name+s.hash;o.hasNameForId(n.id,i)||o.insertRules(n.id,i,s(n.rules,i,"@keyframes"))},this.toString=function(){return Ae(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=Ft),this.name+r.hash},e}(),No=/([A-Z])/,Fo=/([A-Z])/g,Wo=/^ms-/,Ho=function(e){return"-"+e.toLowerCase()};function zn(e){return No.test(e)?e.replace(Fo,Ho).replace(Wo,"-ms-"):e}var Zn=function(e){return e==null||e===!1||e===""};function ze(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],i=0,c=e.length;i<c;i+=1)(o=ze(e[i],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(Zn(e))return"";if(Yt(e))return"."+e.styledComponentId;if(Ue(e)){if(typeof(a=e)!="function"||a.prototype&&a.prototype.isReactComponent||!r)return e;var u=e(r);return process.env.NODE_ENV!=="production"&&lt.isElement(u)&&console.warn(Ot(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),ze(u,r,t,n)}var a;return e instanceof Bn?t?(e.inject(t,n),e.getName(n)):e:It(e)?function d(h,g){var b,v,k=[];for(var m in h)h.hasOwnProperty(m)&&!Zn(h[m])&&(Array.isArray(h[m])&&h[m].isCss||Ue(h[m])?k.push(zn(m)+":",h[m],";"):It(h[m])?k.push.apply(k,d(h[m],m)):k.push(zn(m)+": "+(b=m,(v=h[m])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||b in Rr?String(v).trim():v+"px")+";"));return g?[g+" {"].concat(k,["}"]):k}(e):e.toString()}var jn=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function xt(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return Ue(e)||It(e)?jn(ze(Pn(mt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:jn(ze(Pn(e,t)))}var Vn=/invalid hook call/i,wt=new Set,Gn=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(Vn.test(s))o=!1,wt.delete(t);else{for(var i=arguments.length,c=new Array(i>1?i-1:0),u=1;u<i;u++)c[u-1]=arguments[u];n.apply(void 0,[s].concat(c))}},p.useRef(),o&&!wt.has(t)&&(console.warn(t),wt.add(t))}catch(s){Vn.test(s.message)&&wt.delete(t)}finally{console.error=n}}},Xn=function(e,r,t){return t===void 0&&(t=Ne),e.theme!==t.theme&&e.theme||r||t.theme},Bo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zo=/(^-|-$)/g;function Wt(e){return e.replace(Bo,"-").replace(zo,"")}var Ht=function(e){return Nt(Yn(e)>>>0)};function St(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Bt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Zo=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function jo(e,r,t){var n=e[t];Bt(r)&&Bt(n)?Un(n,r):e[t]=r}function Un(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var i=s[o];if(Bt(i))for(var c in i)Zo(c)&&jo(e,i[c],c)}return e}var Je=p.createContext();Je.Consumer;function Vo(e){var r=p.useContext(Je),t=p.useMemo(function(){return function(n,o){if(!n)return Ae(14);if(Ue(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Ae(7)}return Array.isArray(n)||typeof n!="object"?Ae(8):o?Te({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?p.createElement(Je.Provider,{value:t},e.children):null}var zt={};function Kn(e,r,t){var n=Yt(e),o=!St(e),s=r.attrs,i=s===void 0?mt:s,c=r.componentId,u=c===void 0?function(q,j){var A=typeof q!="string"?"sc":Wt(q);zt[A]=(zt[A]||0)+1;var f=A+"-"+Ht("5.3.8"+A+zt[A]);return j?j+"-"+f:f}(r.displayName,r.parentComponentId):c,a=r.displayName,d=a===void 0?function(q){return St(q)?"styled."+q:"Styled("+Ot(q)+")"}(e):a,h=r.displayName&&r.componentId?Wt(r.displayName)+"-"+r.componentId:r.componentId||u,g=n&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,b=r.shouldForwardProp;n&&e.shouldForwardProp&&(b=r.shouldForwardProp?function(q,j,A){return e.shouldForwardProp(q,j,A)&&r.shouldForwardProp(q,j,A)}:e.shouldForwardProp);var v,k=new Ao(t,h,n?e.componentStyle:void 0),m=k.isStatic&&i.length===0,W=function(q,j){return function(A,f,y,S){var T=A.attrs,P=A.componentStyle,Z=A.defaultProps,K=A.foldedComponentIds,U=A.shouldForwardProp,D=A.styledComponentId,E=A.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(D);var $=function(X,w,F){X===void 0&&(X=Ne);var x=Te({},w,{theme:X}),Y={};return F.forEach(function(B){var I,C,R,L=B;for(I in Ue(L)&&(L=L(x)),L)x[I]=Y[I]=I==="className"?(C=Y[I],R=L[I],C&&R?C+" "+R:C||R):L[I]}),[x,Y]}(Xn(f,p.useContext(Je),Z)||Ne,f,T),N=$[0],O=$[1],Q=function(X,w,F,x){var Y=Wn(),B=Hn(),I=w?X.generateAndInjectStyles(Ne,Y,B):X.generateAndInjectStyles(F,Y,B);return process.env.NODE_ENV!=="production"&&p.useDebugValue(I),process.env.NODE_ENV!=="production"&&!w&&x&&x(I),I}(P,S,N,process.env.NODE_ENV!=="production"?A.warnTooManyClasses:void 0),ee=y,se=O.$as||f.$as||O.as||f.as||E,oe=St(se),z=O!==f?Te({},f,{},O):f,V={};for(var G in z)G[0]!=="$"&&G!=="as"&&(G==="forwardedAs"?V.as=z[G]:(U?U(G,Cn,se):!oe||Cn(G))&&(V[G]=z[G]));return f.style&&O.style!==f.style&&(V.style=Te({},f.style,{},O.style)),V.className=Array.prototype.concat(K,D,Q!==D?Q:null,f.className,O.className).filter(Boolean).join(" "),V.ref=ee,p.createElement(se,V)}(v,q,j,m)};return W.displayName=d,(v=p.forwardRef(W)).attrs=g,v.componentStyle=k,v.displayName=d,v.shouldForwardProp=b,v.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):mt,v.styledComponentId=h,v.target=n?e.target:e,v.withComponent=function(q){var j=r.componentId,A=function(y,S){if(y==null)return{};var T,P,Z={},K=Object.keys(y);for(P=0;P<K.length;P++)T=K[P],S.indexOf(T)>=0||(Z[T]=y[T]);return Z}(r,["componentId"]),f=j&&j+"-"+(St(q)?q:Wt(Ot(q)));return Kn(q,Te({},A,{attrs:g,componentId:f}),t)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=n?Un({},e.defaultProps,q):q}}),process.env.NODE_ENV!=="production"&&(Gn(d,h),v.warnTooManyClasses=function(q,j){var A={},f=!1;return function(y){if(!f&&(A[y]=!0,Object.keys(A).length>=200)){var S=j?' with the id of "'+j+'"':"";console.warn("Over 200 classes were generated for component "+q+S+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),f=!0,A={}}}}(d,h)),v.toString=function(){return"."+v.styledComponentId},o&&ho(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Zt=function(e){return function r(t,n,o){if(o===void 0&&(o=Ne),!lt.isValidElementType(n))return Ae(1,String(n));var s=function(){return t(n,o,xt.apply(void 0,arguments))};return s.withConfig=function(i){return r(t,n,Te({},o,{},i))},s.attrs=function(i){return r(t,n,Te({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},s}(Kn,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Zt[e]=Zt(e)});var Go=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ln(t),bt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var i=s(ze(this.rules,n,o,s).join(""),""),c=this.componentId+t;o.insertRules(c,c,i)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&bt.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function Xo(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=xt.apply(void 0,[e].concat(t)),s="sc-global-"+Ht(JSON.stringify(o)),i=new Go(o,s);function c(a){var d=Wn(),h=Hn(),g=p.useContext(Je),b=p.useRef(d.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(a.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(v){return typeof v=="string"&&v.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),d.server&&u(b,a,d,g,h),p.useLayoutEffect(function(){if(!d.server)return u(b,a,d,g,h),function(){return i.removeStyles(b,d)}},[b,a,d,g,h]),null}function u(a,d,h,g,b){if(i.isStatic)i.renderStyles(a,mo,h,b);else{var v=Te({},d,{theme:Xn(d,g,c.defaultProps)});i.renderStyles(a,v,h,b)}}return process.env.NODE_ENV!=="production"&&Gn(s),p.memo(c)}function Ct(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=xt.apply(void 0,[e].concat(t)).join(""),s=Ht(o);return new Bn(s,o)}var Ze=function(){return p.useContext(Je)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const M=Zt,ut="reactSchedulerOutsideWrapper",Uo=Xo`

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
`,Ko={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},Jo={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},qe=`
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
`;const ve=50,Ie=24,Re=16,je=40,et=je+Re+Ie,tt=84,ue=56,$e=196,Ee=12,we=50,nt=24,ft=16,jt=40,qo=nt+ft+jt,Jn=24,qn=52,Pe={topRow:"600 14px Inter",middleRow:"400 10px Inter",bottomRow:{name:"600 14px Inter",number:"600 10px Inter",hoursInDay:"400 9px Inter"}},rt=3,Qo=1.6,Ro=4.5,Vt=12,Mt=24,es="reactSchedulerCanvasHeaderWrapper",Qn="reactSchedulerCanvasWrapper",Ve=ut,ts=4,Gt=48,Fe=5,ns=40,Rn=8,Xt=Ie/2+2,er=Re/2+Ie+1,tr=2,be=60,ke=21;var Ge={},rs={get exports(){return Ge},set exports(e){Ge=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",i="second",c="minute",u="hour",a="day",d="week",h="month",g="quarter",b="year",v="date",k="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,W=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(D){var E=["th","st","nd","rd"],$=D%100;return"["+D+(E[($-20)%10]||E[$]||E[0])+"]"}},j=function(D,E,$){var N=String(D);return!N||N.length>=E?D:""+Array(E+1-N.length).join($)+D},A={s:j,z:function(D){var E=-D.utcOffset(),$=Math.abs(E),N=Math.floor($/60),O=$%60;return(E<=0?"+":"-")+j(N,2,"0")+":"+j(O,2,"0")},m:function D(E,$){if(E.date()<$.date())return-D($,E);var N=12*($.year()-E.year())+($.month()-E.month()),O=E.clone().add(N,h),Q=$-O<0,ee=E.clone().add(N+(Q?-1:1),h);return+(-(N+($-O)/(Q?O-ee:ee-O))||0)},a:function(D){return D<0?Math.ceil(D)||0:Math.floor(D)},p:function(D){return{M:h,y:b,w:d,d:a,D:v,h:u,m:c,s:i,ms:s,Q:g}[D]||String(D||"").toLowerCase().replace(/s$/,"")},u:function(D){return D===void 0}},f="en",y={};y[f]=q;var S=function(D){return D instanceof K},T=function D(E,$,N){var O;if(!E)return f;if(typeof E=="string"){var Q=E.toLowerCase();y[Q]&&(O=Q),$&&(y[Q]=$,O=Q);var ee=E.split("-");if(!O&&ee.length>1)return D(ee[0])}else{var se=E.name;y[se]=E,O=se}return!N&&O&&(f=O),O||!N&&f},P=function(D,E){if(S(D))return D.clone();var $=typeof E=="object"?E:{};return $.date=D,$.args=arguments,new K($)},Z=A;Z.l=T,Z.i=S,Z.w=function(D,E){return P(D,{locale:E.$L,utc:E.$u,x:E.$x,$offset:E.$offset})};var K=function(){function D($){this.$L=T($.locale,null,!0),this.parse($)}var E=D.prototype;return E.parse=function($){this.$d=function(N){var O=N.date,Q=N.utc;if(O===null)return new Date(NaN);if(Z.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var ee=O.match(m);if(ee){var se=ee[2]-1||0,oe=(ee[7]||"0").substring(0,3);return Q?new Date(Date.UTC(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)):new Date(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,oe)}}return new Date(O)}($),this.$x=$.x||{},this.init()},E.init=function(){var $=this.$d;this.$y=$.getFullYear(),this.$M=$.getMonth(),this.$D=$.getDate(),this.$W=$.getDay(),this.$H=$.getHours(),this.$m=$.getMinutes(),this.$s=$.getSeconds(),this.$ms=$.getMilliseconds()},E.$utils=function(){return Z},E.isValid=function(){return this.$d.toString()!==k},E.isSame=function($,N){var O=P($);return this.startOf(N)<=O&&O<=this.endOf(N)},E.isAfter=function($,N){return P($)<this.startOf(N)},E.isBefore=function($,N){return this.endOf(N)<P($)},E.$g=function($,N,O){return Z.u($)?this[N]:this.set(O,$)},E.unix=function(){return Math.floor(this.valueOf()/1e3)},E.valueOf=function(){return this.$d.getTime()},E.startOf=function($,N){var O=this,Q=!!Z.u(N)||N,ee=Z.p($),se=function(x,Y){var B=Z.w(O.$u?Date.UTC(O.$y,Y,x):new Date(O.$y,Y,x),O);return Q?B:B.endOf(a)},oe=function(x,Y){return Z.w(O.toDate()[x].apply(O.toDate("s"),(Q?[0,0,0,0]:[23,59,59,999]).slice(Y)),O)},z=this.$W,V=this.$M,G=this.$D,X="set"+(this.$u?"UTC":"");switch(ee){case b:return Q?se(1,0):se(31,11);case h:return Q?se(1,V):se(0,V+1);case d:var w=this.$locale().weekStart||0,F=(z<w?z+7:z)-w;return se(Q?G-F:G+(6-F),V);case a:case v:return oe(X+"Hours",0);case u:return oe(X+"Minutes",1);case c:return oe(X+"Seconds",2);case i:return oe(X+"Milliseconds",3);default:return this.clone()}},E.endOf=function($){return this.startOf($,!1)},E.$set=function($,N){var O,Q=Z.p($),ee="set"+(this.$u?"UTC":""),se=(O={},O[a]=ee+"Date",O[v]=ee+"Date",O[h]=ee+"Month",O[b]=ee+"FullYear",O[u]=ee+"Hours",O[c]=ee+"Minutes",O[i]=ee+"Seconds",O[s]=ee+"Milliseconds",O)[Q],oe=Q===a?this.$D+(N-this.$W):N;if(Q===h||Q===b){var z=this.clone().set(v,1);z.$d[se](oe),z.init(),this.$d=z.set(v,Math.min(this.$D,z.daysInMonth())).$d}else se&&this.$d[se](oe);return this.init(),this},E.set=function($,N){return this.clone().$set($,N)},E.get=function($){return this[Z.p($)]()},E.add=function($,N){var O,Q=this;$=Number($);var ee=Z.p(N),se=function(V){var G=P(Q);return Z.w(G.date(G.date()+Math.round(V*$)),Q)};if(ee===h)return this.set(h,this.$M+$);if(ee===b)return this.set(b,this.$y+$);if(ee===a)return se(1);if(ee===d)return se(7);var oe=(O={},O[c]=n,O[u]=o,O[i]=t,O)[ee]||1,z=this.$d.getTime()+$*oe;return Z.w(z,this)},E.subtract=function($,N){return this.add(-1*$,N)},E.format=function($){var N=this,O=this.$locale();if(!this.isValid())return O.invalidDate||k;var Q=$||"YYYY-MM-DDTHH:mm:ssZ",ee=Z.z(this),se=this.$H,oe=this.$m,z=this.$M,V=O.weekdays,G=O.months,X=function(Y,B,I,C){return Y&&(Y[B]||Y(N,Q))||I[B].slice(0,C)},w=function(Y){return Z.s(se%12||12,Y,"0")},F=O.meridiem||function(Y,B,I){var C=Y<12?"AM":"PM";return I?C.toLowerCase():C},x={YY:String(this.$y).slice(-2),YYYY:this.$y,M:z+1,MM:Z.s(z+1,2,"0"),MMM:X(O.monthsShort,z,G,3),MMMM:X(G,z),D:this.$D,DD:Z.s(this.$D,2,"0"),d:String(this.$W),dd:X(O.weekdaysMin,this.$W,V,2),ddd:X(O.weekdaysShort,this.$W,V,3),dddd:V[this.$W],H:String(se),HH:Z.s(se,2,"0"),h:w(1),hh:w(2),a:F(se,oe,!0),A:F(se,oe,!1),m:String(oe),mm:Z.s(oe,2,"0"),s:String(this.$s),ss:Z.s(this.$s,2,"0"),SSS:Z.s(this.$ms,3,"0"),Z:ee};return Q.replace(W,function(Y,B){return B||x[Y]||ee.replace(":","")})},E.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},E.diff=function($,N,O){var Q,ee=Z.p(N),se=P($),oe=(se.utcOffset()-this.utcOffset())*n,z=this-se,V=Z.m(this,se);return V=(Q={},Q[b]=V/12,Q[h]=V,Q[g]=V/3,Q[d]=(z-oe)/6048e5,Q[a]=(z-oe)/864e5,Q[u]=z/o,Q[c]=z/n,Q[i]=z/t,Q)[ee]||z,O?V:Z.a(V)},E.daysInMonth=function(){return this.endOf(h).$D},E.$locale=function(){return y[this.$L]},E.locale=function($,N){if(!$)return this.$L;var O=this.clone(),Q=T($,N,!0);return Q&&(O.$L=Q),O},E.clone=function(){return Z.w(this.$d,this)},E.toDate=function(){return new Date(this.valueOf())},E.toJSON=function(){return this.isValid()?this.toISOString():null},E.toISOString=function(){return this.$d.toISOString()},E.toString=function(){return this.$d.toUTCString()},D}(),U=K.prototype;return P.prototype=U,[["$ms",s],["$s",i],["$m",c],["$H",u],["$W",a],["$M",h],["$y",b],["$D",v]].forEach(function(D){U[D[1]]=function(E){return this.$g(E,D[0],D[1])}}),P.extend=function(D,E){return D.$i||(D(E,K,P),D.$i=!0),P},P.locale=T,P.isDayjs=S,P.unix=function(D){return P(1e3*D)},P.en=y[f],P.Ls=y,P.p={},P})})(rs);const _=Ge,nr=e=>e%4===0&&e%100>0||e%400===0?366:365,Ut=e=>{const r=e.day();return r!==0&&r!==6},rr=(e,r)=>_(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),or=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:Ut(e),isCurrentDay:e.isSame(_(),"day"),year:parseInt(e.format("YYYY"))}),Kt=(e,r,t,n,o,s,i)=>{e.strokeStyle=i.colors.border,s?e.fillStyle=i.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=i.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,ue),e.strokeRect(r+.5,t+.5,n,ue)},Jt=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*ke},os=(e,r,t,n,o,s=[])=>{for(let i=0;i<r;i++){const c=Jt(i,s);for(let u=0;u<=t;u++){const a=_(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(u,"days"),d=a.isSame(_(),"day");Kt(e,u*ve,i*ue+c,ve,Ut(a),d,o)}}},ss=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},is=(e,r,t,n,o,s=[])=>{let i=0,c=-(n.dayOfMonth-1)*Ee;const u=r*ue+s.length*ke;for(let a=0;a<=t;a++){const h=_(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(a,"weeks").isSame(_(),"week");for(let g=0;g<r;g++){const b=Jt(g,s);Kt(e,i,g*ue+b,tt,!0,h,o)}i+=tt}for(let a=0;a<t;a++){const d=rr(n,a)*Ee;ss(e,c,u,o),c+=d}},as=(e,r,t,n,o,s=[])=>{const i=_(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let c=0;c<r;c++){const u=Jt(c,s);for(let a=0;a<=t;a++){let d;a===Math.floor(t/2)?d=_():a>Math.floor(t/2)?d=_().add(a-Math.floor(t/2),"hours"):d=_().subtract(Math.floor(t/2)-c,"hours");const h=i.isSame(_(),"day")&&d.isSame(_(),"hour");Kt(e,a*we+we/2-.5,c*ue+u,we,Ut(d),h,o)}}},cs=(e,r,t,n)=>{const o=t*ue+r*ke,s=e.canvas.width,i=o+ke/2;e.fillStyle=n.mode==="dark"?n.colors.primary+"80":n.colors.primary,e.fillRect(0,o,s,ke),e.strokeStyle=n.colors.border,e.lineWidth=1,e.setLineDash([]),e.beginPath(),e.moveTo(0,i+.5),e.lineTo(s,i+.5),e.stroke()},ls=(e,r,t,n,o,s,i=[])=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(Qn)){switch(r){case 0:is(e,t,n,o,s,i);break;case 1:os(e,t,n,o,s,i);break;case 2:as(e,t,n,o,s,i);break}for(let u=0;u<i.length;u++)cs(e,u,i[u],s)}};var qt={},ds={get exports(){return qt},set exports(e){qt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t="week",n="year";return function(o,s,i){var c=s.prototype;c.week=function(u){if(u===void 0&&(u=null),u!==null)return this.add(7*(u-this.week()),"day");var a=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var d=i(this).startOf(n).add(1,n).date(a),h=i(this).endOf(t);if(d.isBefore(h))return 1}var g=i(this).startOf(n).date(a).startOf(t).subtract(1,"millisecond"),b=this.diff(g,t,!0);return b<0?i(this).startOf("week").week():Math.ceil(b)},c.weeks=function(u){return u===void 0&&(u=null),this.week(u)}}})})(ds);const us=qt;var Qt={},fs={get exports(){return Qt},set exports(e){Qt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var i=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?i:this.add(s-i,"day")}}})})(fs);const hs=Qt;var Rt={},ps={get exports(){return Rt},set exports(e){Rt=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t="day";return function(n,o,s){var i=function(a){return a.add(4-a.isoWeekday(),t)},c=o.prototype;c.isoWeekYear=function(){return i(this).year()},c.isoWeek=function(a){if(!this.$utils().u(a))return this.add(7*(a-this.isoWeek()),t);var d,h,g,b,v=i(this),k=(d=this.isoWeekYear(),h=this.$u,g=(h?s.utc:s)().year(d).startOf("year"),b=4-g.isoWeekday(),g.isoWeekday()>4&&(b+=7),g.add(b,t));return v.diff(k,"week")+1},c.isoWeekday=function(a){return this.$utils().u(a)?this.day()||7:this.day(this.day()%7?a:a-7)};var u=c.startOf;c.startOf=function(a,d){var h=this.$utils(),g=!!h.u(d)||d;return h.p(a)==="isoweek"?g?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):u.bind(this)(a,d)}}})})(ps);const ms=Rt;var en={},gs={get exports(){return en},set exports(e){en=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n,o){n.prototype.isBetween=function(s,i,c,u){var a=o(s),d=o(i),h=(u=u||"()")[0]==="(",g=u[1]===")";return(h?this.isAfter(a,c):!this.isBefore(a,c))&&(g?this.isBefore(d,c):!this.isAfter(d,c))||(h?this.isBefore(a,c):!this.isAfter(a,c))&&(g?this.isAfter(d,c):!this.isBefore(d,c))}}})})(gs);const ys=en;var tn={},vs={get exports(){return tn},set exports(e){tn=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){var t,n,o=1e3,s=6e4,i=36e5,c=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,d=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,g={years:a,months:d,days:c,hours:i,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},b=function(f){return f instanceof A},v=function(f,y,S){return new A(f,S,y.$l)},k=function(f){return n.p(f)+"s"},m=function(f){return f<0},W=function(f){return m(f)?Math.ceil(f):Math.floor(f)},q=function(f){return Math.abs(f)},j=function(f,y){return f?m(f)?{negative:!0,format:""+q(f)+y}:{negative:!1,format:""+f+y}:{negative:!1,format:""}},A=function(){function f(S,T,P){var Z=this;if(this.$d={},this.$l=P,S===void 0&&(this.$ms=0,this.parseFromMilliseconds()),T)return v(S*g[k(T)],this);if(typeof S=="number")return this.$ms=S,this.parseFromMilliseconds(),this;if(typeof S=="object")return Object.keys(S).forEach(function(D){Z.$d[k(D)]=S[D]}),this.calMilliseconds(),this;if(typeof S=="string"){var K=S.match(h);if(K){var U=K.slice(2).map(function(D){return D!=null?Number(D):0});return this.$d.years=U[0],this.$d.months=U[1],this.$d.weeks=U[2],this.$d.days=U[3],this.$d.hours=U[4],this.$d.minutes=U[5],this.$d.seconds=U[6],this.calMilliseconds(),this}}return this}var y=f.prototype;return y.calMilliseconds=function(){var S=this;this.$ms=Object.keys(this.$d).reduce(function(T,P){return T+(S.$d[P]||0)*g[P]},0)},y.parseFromMilliseconds=function(){var S=this.$ms;this.$d.years=W(S/a),S%=a,this.$d.months=W(S/d),S%=d,this.$d.days=W(S/c),S%=c,this.$d.hours=W(S/i),S%=i,this.$d.minutes=W(S/s),S%=s,this.$d.seconds=W(S/o),S%=o,this.$d.milliseconds=S},y.toISOString=function(){var S=j(this.$d.years,"Y"),T=j(this.$d.months,"M"),P=+this.$d.days||0;this.$d.weeks&&(P+=7*this.$d.weeks);var Z=j(P,"D"),K=j(this.$d.hours,"H"),U=j(this.$d.minutes,"M"),D=this.$d.seconds||0;this.$d.milliseconds&&(D+=this.$d.milliseconds/1e3);var E=j(D,"S"),$=S.negative||T.negative||Z.negative||K.negative||U.negative||E.negative,N=K.format||U.format||E.format?"T":"",O=($?"-":"")+"P"+S.format+T.format+Z.format+N+K.format+U.format+E.format;return O==="P"||O==="-P"?"P0D":O},y.toJSON=function(){return this.toISOString()},y.format=function(S){var T=S||"YYYY-MM-DDTHH:mm:ss",P={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return T.replace(u,function(Z,K){return K||String(P[Z])})},y.as=function(S){return this.$ms/g[k(S)]},y.get=function(S){var T=this.$ms,P=k(S);return P==="milliseconds"?T%=1e3:T=P==="weeks"?W(T/g[P]):this.$d[P],T===0?0:T},y.add=function(S,T,P){var Z;return Z=T?S*g[k(T)]:b(S)?S.$ms:v(S,this).$ms,v(this.$ms+Z*(P?-1:1),this)},y.subtract=function(S,T){return this.add(S,T,!0)},y.locale=function(S){var T=this.clone();return T.$l=S,T},y.clone=function(){return v(this.$ms,this)},y.humanize=function(S){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!S)},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},f}();return function(f,y,S){t=S,n=S().$utils(),S.duration=function(Z,K){var U=S.locale();return v(Z,{$l:U},K)},S.isDuration=b;var T=y.prototype.add,P=y.prototype.subtract;y.prototype.add=function(Z,K){return b(Z)&&(Z=Z.asMilliseconds()),T.bind(this)(Z,K)},y.prototype.subtract=function(Z,K){return b(Z)&&(Z=Z.asMilliseconds()),P.bind(this)(Z,K)}}})})(vs);const bs=tn;var xs="Expected a function",sr=0/0,ws="[object Symbol]",Ss=/^\s+|\s+$/g,Cs=/^[-+]0x[0-9a-f]+$/i,Ms=/^0b[01]+$/i,ks=/^0o[0-7]+$/i,Ds=parseInt,$s=typeof xe=="object"&&xe&&xe.Object===Object&&xe,Es=typeof self=="object"&&self&&self.Object===Object&&self,_s=$s||Es||Function("return this")(),Ts=Object.prototype,Ps=Ts.toString,As=Math.max,Is=Math.min,nn=function(){return _s.Date.now()};function Os(e,r,t){var n,o,s,i,c,u,a=0,d=!1,h=!1,g=!0;if(typeof e!="function")throw new TypeError(xs);r=ir(r)||0,rn(t)&&(d=!!t.leading,h="maxWait"in t,s=h?As(ir(t.maxWait)||0,r):s,g="trailing"in t?!!t.trailing:g);function b(y){var S=n,T=o;return n=o=void 0,a=y,i=e.apply(T,S),i}function v(y){return a=y,c=setTimeout(W,r),d?b(y):i}function k(y){var S=y-u,T=y-a,P=r-S;return h?Is(P,s-T):P}function m(y){var S=y-u,T=y-a;return u===void 0||S>=r||S<0||h&&T>=s}function W(){var y=nn();if(m(y))return q(y);c=setTimeout(W,k(y))}function q(y){return c=void 0,g&&n?b(y):(n=o=void 0,i)}function j(){c!==void 0&&clearTimeout(c),a=0,n=u=o=c=void 0}function A(){return c===void 0?i:q(nn())}function f(){var y=nn(),S=m(y);if(n=arguments,o=this,u=y,S){if(c===void 0)return v(u);if(h)return c=setTimeout(W,r),b(u)}return c===void 0&&(c=setTimeout(W,r)),i}return f.cancel=j,f.flush=A,f}function rn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function Ys(e){return!!e&&typeof e=="object"}function Ls(e){return typeof e=="symbol"||Ys(e)&&Ps.call(e)==ws}function ir(e){if(typeof e=="number")return e;if(Ls(e))return sr;if(rn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=rn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ss,"");var t=Ms.test(e);return t||ks.test(e)?Ds(e.slice(2),t?2:8):Cs.test(e)?sr:+e}var ot=Os;const kt=[0,1,2];var ht=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(ht||{});const ar=e=>kt.includes(e),st=e=>{var n;const t=(((n=document.getElementById(Ve))==null?void 0:n.clientWidth)||0)-$e;switch(e){case 1:return Math.ceil(t/ve)*rt;case 2:return Math.ceil(t/we)*rt;default:return Math.ceil(t/tt)*rt}},Ns=e=>st(e)/rt,on=(e,r)=>{const t=st(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},Fs=(e,r)=>{const t=on(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},sn=()=>{var t;return((((t=document.getElementById(Ve))==null?void 0:t.clientWidth)||0)-$e)*rt},cr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:_(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});_.extend(us),_.extend(hs),_.extend(ms),_.extend(ys),_.extend(bs);const Ws=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=_(),onRangeChange:s,handleToggleDisplayActiveUnits:i,onClearFilterData:c})=>{const{zoom:u,maxRecordsPerPage:a=50}=n,[d,h]=p.useState(u),[g,b]=p.useState(_()),[v,k]=p.useState(!1),[m,W]=p.useState(st(d)),q=kt[d]!==kt[kt.length-1],j=d!==0,A=p.useMemo(()=>Fs(g,d),[g,d]),f=on(g,d).startDate,y=_(f).dayOfYear(),S=or(f),T=p.useRef(null),[P,Z]=p.useState([{x:0,y:0}]),K=p.useCallback((X,w="auto")=>{var x,Y,B,I;const F=sn();switch(X){case"back":return(x=T.current)==null?void 0:x.scrollTo({behavior:w,left:F/3});case"forward":return(Y=T.current)==null?void 0:Y.scrollTo({behavior:w,left:F/3});case"middle":{const C=F/rt/4;return(B=T.current)==null?void 0:B.scrollTo({behavior:w,left:F/2-C})}default:return(I=T.current)==null?void 0:I.scrollTo({behavior:w,left:F/2})}},[]),U=X=>{Z(X)},D=p.useCallback(X=>{const w=Ns(d);let F;switch(d){case 0:F=w*7;break;case 1:F=w;break;case 2:F=Math.ceil(w/Mt);break}ot(()=>{switch(X){case"back":b(Y=>Y.subtract(F,"days"));break;case"forward":b(Y=>Y.add(F,"days"));break;case"middle":b(_());break}s==null||s(A)},300)()},[s,A,d]);p.useEffect(()=>{T.current=document.getElementById(Ve),W(st(d))},[d]),p.useEffect(()=>{const X=()=>W(st(d));return window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[d]),p.useEffect(()=>{s==null||s(A)},[s,A]),p.useEffect(()=>{k(!1)},[o]),p.useEffect(()=>{v||(K("middle"),k(!0),b(o))},[o,v,K]);const E=()=>{t||(b(X=>d===2?X.add(Jn,"hours"):X.add(tr,"weeks")),s==null||s(A))},$=p.useCallback(()=>{t||(D("forward"),ot(()=>{K("forward")},500)())},[t,D,K]),N=()=>{t||(b(X=>d===2?X.subtract(Jn,"hours"):X.subtract(tr,"weeks")),s==null||s(A))},O=p.useCallback(()=>{!v||t||(D("back"),ot(()=>{K("back")},500)())},[v,t,D,K]),Q=p.useCallback(()=>{t||(D("middle"),ot(()=>{K("middle","smooth")},300)())},[t,D,K]),ee=p.useCallback(X=>{if(t)return;const w=_(X).startOf("day");w.isValid()&&(b(w),s==null||s(A),setTimeout(()=>{K("middle","smooth")},300))},[t,K,s,A]),se=()=>z(d+1),oe=()=>z(d-1),z=X=>{ar(X)&&(h(X),W(st(X)),s==null||s(A))},V=()=>i==null?void 0:i(),{Provider:G}=cr;return l.jsx(G,{value:{data:e,config:n,handleGoNext:E,handleScrollNext:$,handleGoPrev:N,handleScrollPrev:O,handleGoToday:Q,goToDate:ee,zoomIn:se,zoomOut:oe,zoom:d,isNextZoom:q,isPrevZoom:j,date:g,isLoading:t,cols:m,startDate:S,dayOfYear:y,toggleDisplayActiveUnits:V,tilesCoords:P,updateTilesCoords:U,recordsThreshold:a,onClearFilterData:c},children:r})},We=()=>p.useContext(cr),lr=(e,r,t)=>{e.canvas.width=r*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=r+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},dr=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*ue+n*ke;if(e>=s+ke)n++;else if(e>=s)return o*ue+n*ke-n*ke}return t-n*ke},Hs=5,ur=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>Hs},pt=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},Bs=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:i={},gridRef:c,separatorRowIndices:u=[]})=>{const a=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(F=>({...F,data:[F.data]})):r:e,{enabled:d=!0,isDraggable:h,resourceOnly:g=!1,isValidDrop:b}=i,[v,k]=p.useState("idle"),[m,W]=p.useState(null),[q,j]=p.useState({x:0,y:0}),[A,f]=p.useState({width:0,height:48}),[y,S]=p.useState(null),[T,P]=p.useState(!0),Z=p.useRef({x:0,y:0}),K=p.useRef({x:0,y:0}),U=p.useRef({x:0,y:0}),D=p.useRef(null),E=p.useRef(null),$=p.useRef(0),N=p.useRef(null),O=p.useCallback(F=>!d||F.draggable===!1?!1:h?h(F):!0,[d,h]),Q=p.useCallback((F,x)=>{const Y=dr(x,u),B=Math.floor(Y/ue);let I;switch(t){case 0:I=Ee*7;break;case 1:I=ve;break;case 2:I=we;break;default:I=ve}const C=Math.floor(F/I);let R;const L=_().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:R=L.add(C*7,"days").toDate();break;case 1:R=L.add(C,"days").toDate();break;case 2:R=L.add(C,"hours").toDate();break;default:R=L.toDate()}return{snappedDate:R,snappedResourceIndex:B}},[t,n,u]),ee=p.useCallback((F,x,Y,B)=>{const I=[],C=x.getTime(),R=Y.getTime(),L=a.find(te=>te.id===B);if(!L)return I;const J=[];for(const te of L.data)Array.isArray(te)?J.push(...te):J.push(te);for(const te of J){if(te.segmentId===F.segmentId)continue;const H=te.startDate.getTime(),ie=te.endDate.getTime();if(C>=H&&C<ie||R>H&&R<=ie||C<=H&&R>=ie){const de=new Date(Math.max(C,H)),ae=new Date(Math.min(R,ie)),le=ae.getTime()-de.getTime();I.push({event:te,conflictStart:de,conflictEnd:ae,overlapDuration:le})}}return I},[a]),se=p.useCallback((F,x,Y,B)=>{const I=[],C=x.getTime(),R=Y.getTime(),L=_(x).format("YYYY-MM-DD"),J=a.find(H=>H.id===B);if(!J)return I;const te=[];for(const H of J.data)Array.isArray(H)?te.push(...H):te.push(H);for(const H of te){if(H.segmentId===F.segmentId)continue;const ie=H.startDate.getTime(),he=H.endDate.getTime(),de=_(H.startDate).format("YYYY-MM-DD"),ae=_(H.endDate).format("YYYY-MM-DD"),le=_(Y).format("YYYY-MM-DD");if(!(de===L||ae===L||de===le||ae===le||_(H.startDate).isBefore(x,"day")&&_(H.endDate).isAfter(Y,"day"))||C>=ie&&C<he||R>ie&&R<=he||C<=ie&&R>=he)continue;let fe,Se;he<=C?(fe=C-he,Se="before"):(fe=ie-R,Se="after"),I.push({event:H,timeGap:fe,position:Se})}return I.sort((H,ie)=>H.timeGap-ie.timeGap)},[a]),oe=p.useCallback((F,x,Y)=>{const B=Q(x,Y);let I,C;if(g)I=F.startDate,C=F.endDate;else{const he=_(F.endDate).diff(F.startDate);I=B.snappedDate,C=_(I).add(he,"milliseconds").toDate()}let R=0,L="",J;for(const he of e){const de=Math.max(he.data.length,1);if(B.snappedResourceIndex<R+de){L=he.id,J=he.capacity;break}R+=de}if(!L)return null;let te=!0;J!==void 0&&F.totalPassengers!==void 0&&(te=F.totalPassengers<=J);const H=ee(F,I,C,L),ie=H.length===0?se(F,I,C,L):[];return{startDate:I,endDate:C,resourceId:L,resourceIndex:B.snappedResourceIndex,resourceCapacity:J,hasCapacity:te,conflicts:H,hasConflict:H.length>0,nearbyEvents:ie}},[Q,e,g,ee,se]),z=p.useCallback((F,x)=>{if(!s)return;const Y=Date.now();if(Y-$.current<100)return;$.current=Y;const B={event:F,currentStartDate:x.startDate,currentEndDate:x.endDate,currentResourceId:x.resourceId,conflicts:x.conflicts};s(B)},[s]),V=p.useCallback((F,x)=>{if(!O(F)||!c.current)return;x.preventDefault(),x.stopPropagation();const Y=x.target.closest('[style*="left"]');let B=0,I=0;Y&&Y.style.left&&Y.style.top&&(B=parseInt(Y.style.left),I=parseInt(Y.style.top));const C=pt(x.clientX,x.clientY,c.current);Z.current={x:B,y:I},K.current={x:x.clientX,y:x.clientY},U.current={x:C.x-B,y:20},N.current={startDate:F.startDate,endDate:F.endDate,resourceId:""};for(const J of e){for(const te of J.data)if(te.some(H=>H.segmentId===F.segmentId)){N.current.resourceId=J.id;break}if(N.current.resourceId)break}W(F),k("potential"),j({x:B,y:I});let R=100,L=48;if(Y){const J=Y.getBoundingClientRect();R=J.width,L=J.height}f({width:R,height:L})},[O,c,e,t]),G=p.useCallback(F=>{if(!c.current)return;let x=c.current;for(;x&&x!==document.body;){const H=window.getComputedStyle(x);if(x.scrollHeight>x.clientHeight&&(H.overflowY==="auto"||H.overflowY==="scroll"||H.overflow==="auto"||H.overflow==="scroll"))break;x=x.parentElement}(!x||x===document.body)&&(x=document.documentElement);const Y=x.getBoundingClientRect(),B=F.clientY,I=50,C=5,R=B-Y.top,L=Y.bottom-B;let J=!1,te=0;R<I&&R>0?(J=!0,te=-C*(1-R/I)):L<I&&L>0&&(J=!0,te=C*(1-L/I)),J?(E.current&&cancelAnimationFrame(E.current),E.current=requestAnimationFrame(()=>{x.scrollTop+=te,v==="dragging"&&G(F)})):E.current&&(cancelAnimationFrame(E.current),E.current=null)},[c,v]),X=p.useCallback(F=>{if(v==="idle"||v==="animating"||!m||!c.current)return;const x={x:F.clientX,y:F.clientY};if(v==="potential")if(ur(K.current,x))k("dragging");else return;G(F);const Y=pt(F.clientX,F.clientY,c.current);D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{const B={x:Y.x-U.current.x,y:Y.y-U.current.y};j(B);const I=oe(m,Y.x,Y.y);if(I&&b){const C={event:m,currentStartDate:I.startDate,currentEndDate:I.endDate,currentResourceId:I.resourceId,conflicts:I.conflicts};I.hasConflict=!b(C)}if(S(I),I){const C=I.hasCapacity!==!1;P(C),z(m,I)}})},[v,m,c,oe,z,b,G]),w=p.useCallback(async F=>{if(v==="idle"||v==="animating")return;const x={x:F.clientX,y:F.clientY};if(!ur(K.current,x)||v==="potential"){k("idle"),W(null),S(null);return}if(!m||!y||!N.current){k("idle"),W(null),S(null);return}if(y.hasCapacity===!1){P(!1),k("animating"),j(Z.current),setTimeout(()=>{k("idle"),W(null),S(null),P(!0)},300);return}const B={event:m,originalStartDate:N.current.startDate,originalEndDate:N.current.endDate,originalResourceId:N.current.resourceId,newStartDate:y.startDate,newEndDate:y.endDate,newResourceId:y.resourceId,hasConflict:y.hasConflict,conflicts:y.conflicts};let I=!0;if(o)try{const C=o(B);I=C instanceof Promise?await C:C}catch{I=!1}I?(P(!0),k("idle"),W(null),S(null)):(P(!1),k("animating"),j(Z.current),setTimeout(()=>{k("idle"),W(null),S(null),P(!0)},300))},[v,m,y,o,b]);return p.useEffect(()=>{if(v==="potential"||v==="dragging"){const F=Y=>X(Y),x=Y=>w(Y);return document.addEventListener("mousemove",F),document.addEventListener("mouseup",x),()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",x)}}else return()=>{}},[v,X,w]),p.useEffect(()=>()=>{D.current&&(cancelAnimationFrame(D.current),D.current=null),E.current&&(cancelAnimationFrame(E.current),E.current=null)},[]),p.useEffect(()=>{(v==="idle"||v==="animating")&&(D.current&&(cancelAnimationFrame(D.current),D.current=null),E.current&&(cancelAnimationFrame(E.current),E.current=null))},[v]),p.useEffect(()=>{(v==="dragging"||v==="potential")&&(v==="dragging"?(k("animating"),j(Z.current),setTimeout(()=>{k("idle"),W(null),S(null)},300)):(k("idle"),W(null),S(null)))},[t]),p.useEffect(()=>{if((v==="dragging"||v==="potential")&&m){let F=!1;for(const x of e){for(const Y of x.data)if(Y.some(B=>B.segmentId===m.segmentId)){F=!0;break}if(F)break}F||(v==="dragging"?(k("animating"),j(Z.current),setTimeout(()=>{k("idle"),W(null),S(null)},300)):(k("idle"),W(null),S(null)))}},[e,v,m]),{dragState:v,draggedEvent:m,ghostPosition:q,ghostDimensions:A,dropTarget:y,isValidDrop:T,handleDragStart:V,isDraggable:O,draggingEventId:(m==null?void 0:m.segmentId)||null,resourceOnly:g}},zs=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:i={},gridRef:c,isDragging:u,separatorRowIndices:a=[]})=>{const{enabled:d=!1,isSelectable:h}=i,g=d&&!!o,b=p.useCallback(x=>{let Y=0;for(const B of a)B<=x&&Y++;return x*ue+Y*ke},[a]),[v,k]=p.useState("idle"),[m,W]=p.useState(null),[q,j]=p.useState(null),[A,f]=p.useState(null),[y,S]=p.useState(!1),[T,P]=p.useState([]),[Z,K]=p.useState(!1),U=p.useRef(null),D=p.useRef(null),E=p.useRef(null),$=p.useCallback(()=>{switch(t){case 0:return Ee*7;case 1:return ve;case 2:return we;default:return ve}},[t]),N=p.useCallback(x=>{const Y=$(),B=Math.floor(x/Y),I=_().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return I.add(B*7,"days").toDate();case 1:return I.add(B,"days").toDate();case 2:return I.add(B,"hours").toDate();default:return I.toDate()}},[t,n,$]),O=p.useCallback(x=>{const Y=dr(x,a),B=Math.floor(Y/ue);let I=0;for(const C of e){const R=Math.max(C.data.length,1);if(B<I+R)return{resourceId:C.id,resourceIndex:B,resourceLabel:C.label};I+=R}return null},[e,a]),Q=p.useCallback(x=>{const Y=$();return Math.floor(x/Y)*Y},[$]),ee=p.useCallback((x,Y,B,I=[])=>{const C=[],L=(r||e).find(H=>H.id===x),J=Y.getTime(),te=B.getTime();if(L){const H=L.data[0],ie=H&&Array.isArray(H)?L.data.flat():L.data;for(const he of ie){const de=new Date(he.startDate).getTime(),ae=new Date(he.endDate).getTime();if(J<ae&&te>de){const le=new Date(Math.max(J,de)),ce=new Date(Math.min(te,ae)),ne=ce.getTime()-le.getTime();C.push({event:he,conflictStart:le,conflictEnd:ce,overlapDuration:ne})}}}for(const H of I){if(H.resourceId!==x)continue;const ie=H.startDate.getTime(),he=H.endDate.getTime();if(J<he&&te>ie){const de=new Date(Math.max(J,ie)),ae=new Date(Math.min(te,he)),le=ae.getTime()-de.getTime(),ce={segmentId:`pending-${H.startDate.getTime()}`,reservationId:`pending-${H.startDate.getTime()}`,startDate:H.startDate,endDate:H.endDate,occupancy:0,title:`New Event (${H.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};C.push({event:ce,conflictStart:de,conflictEnd:ae,overlapDuration:le})}}return C},[e,r]),se=p.useCallback(x=>{if(!g||u||!c.current||x.button!==0)return;const Y=x.target;if(Y.closest("[data-segment-id]")||Y.closest("[data-multi-select-ui]"))return;const B=pt(x.clientX,x.clientY,c.current),I=O(B.y);if(!I)return;U.current={x:x.clientX,y:x.clientY},D.current=I.resourceIndex;const C=Q(B.x),R=$(),L=b(I.resourceIndex);W(B),j(B),f({x:C,y:L,width:R,height:ue}),k("selecting")},[g,u,c,O,Q,$,b]),oe=p.useCallback(x=>{if(v!=="selecting"||!c.current||D.current===null)return;const Y=pt(x.clientX,x.clientY,c.current);E.current&&cancelAnimationFrame(E.current),E.current=requestAnimationFrame(()=>{j(Y);const B=$(),I=Q((m==null?void 0:m.x)||0),C=Q(Y.x),R=b(D.current),L=Math.min(I,C),J=Math.max(I,C)+B;f({x:L,y:R,width:J-L,height:ue})})},[v,c,m,$,Q,b]),z=p.useCallback(x=>{if(v!=="selecting")return;if(!c.current||!m||!U.current){k("idle"),W(null),j(null),f(null);return}const Y=pt(x.clientX,x.clientY,c.current),B=O(m.y);if(!B){k("idle"),W(null),j(null),f(null);return}const I=Math.min(m.x,Y.x),C=Math.max(m.x,Y.x),R=N(I),L=N(C),J=_(L).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h(B.resourceId,R,J)){k("idle"),W(null),j(null),f(null);return}const te=ee(B.resourceId,R,J,T),H=te.length>0,ie={startDate:R,endDate:J,resourceId:B.resourceId,resourceLabel:B.resourceLabel,zoomLevel:t,hasConflict:H,conflicts:H?te:void 0};if(y)P(he=>[...he,ie]),K(!0);else if(o){const he=o(ie),de=ae=>{ae!=null&&ae.continueMultiSelect&&(S(!0),P([ie]),K(!0))};he instanceof Promise?he.then(de):de(he)}k("idle"),W(null),j(null),f(null),U.current=null,D.current=null},[v,c,m,O,N,h,o,t,y,ee,T]),V=p.useCallback(()=>{if(T.length>0&&s){K(!1);const x=s(T),Y=B=>{B!=null&&B.continueMultiSelect?K(!0):(P([]),S(!1),K(!1))};x instanceof Promise?x.then(Y):Y(x);return}P([]),S(!1),K(!1)},[T,s]),G=p.useCallback(()=>{P([]),S(!1),K(!1)},[]),X=p.useCallback(x=>{P(Y=>{const B=Y.filter((I,C)=>C!==x);return B.length===0&&(S(!1),K(!1)),B})},[]),w=p.useCallback((x,Y)=>{P(B=>B.map((I,C)=>{if(C!==x)return I;const R={...I,...Y},L=B.filter((te,H)=>H!==x),J=ee(R.resourceId,R.startDate,R.endDate,L);return{...R,hasConflict:J.length>0,conflicts:J.length>0?J:void 0}}))},[ee]),F=p.useCallback(x=>{x.key==="Escape"&&(v==="selecting"?(k("idle"),W(null),j(null),f(null),U.current=null,D.current=null):y&&T.length>0&&(P([]),S(!1),K(!1)))},[v,y,T.length]);return p.useEffect(()=>{if(v==="selecting")return document.addEventListener("mousemove",oe),document.addEventListener("mouseup",z),document.addEventListener("keydown",F),()=>{document.removeEventListener("mousemove",oe),document.removeEventListener("mouseup",z),document.removeEventListener("keydown",F)}},[v,oe,z,F]),p.useEffect(()=>{if(y&&T.length>0)return document.addEventListener("keydown",F),()=>{document.removeEventListener("keydown",F)}},[y,T.length,F]),p.useEffect(()=>()=>{E.current&&(cancelAnimationFrame(E.current),E.current=null)},[]),p.useEffect(()=>{u&&v==="selecting"&&(k("idle"),W(null),j(null),f(null),U.current=null,D.current=null)},[u,v]),{selectionState:v,selectionStart:m,selectionEnd:q,selectionBox:A,handleGridMouseDown:se,isEnabled:g,pendingSelections:T,confirmSelections:V,clearSelections:G,removeSelection:X,updateSelection:w,isMultiSelectActive:y,hasUnconfirmedSelections:Z}},Zs=M.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,js=M.div`
  position: relative;
`,Vs=M.canvas``;M.canvas``;const fr=M.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,Gs=p.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onEventDrop:i,onEventDrag:c,draggableConfig:u,onDragStateChange:a,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:g,separatorRowIndices:b=[]},v){const k=p.useRef(!1),{handleScrollNext:m,handleScrollPrev:W,date:q,isLoading:j,cols:A,startDate:f}=We(),y=p.useRef(null),S=p.useRef(null),T=p.useRef(null),P=p.useRef(null),[Z,K]=p.useState(!1),U=Ze(),{dragState:D,draggedEvent:E,ghostPosition:$,ghostDimensions:N,dropTarget:O,isValidDrop:Q,handleDragStart:ee,isDraggable:se,draggingEventId:oe,resourceOnly:z}=Bs({data:n,baseData:o||n,zoom:r,startDate:f,onEventDrop:i,onEventDrag:c,draggableConfig:u,gridRef:P,separatorRowIndices:b});p.useEffect(()=>{const H=D==="dragging"||D==="potential";K(H),a&&a(H)},[D,a]);const{selectionState:V,selectionBox:G,handleGridMouseDown:X,pendingSelections:w,confirmSelections:F,clearSelections:x,removeSelection:Y,updateSelection:B,isMultiSelectActive:I,hasUnconfirmedSelections:C}=zs({data:n,baseData:o||n,zoom:r,startDate:f,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:g,gridRef:P,isDragging:Z,separatorRowIndices:b}),R=p.useCallback(H=>{H.preventDefault()},[]),L=p.useCallback(H=>{H.preventDefault()},[]),J=b.length*ke,te=p.useCallback(H=>{const ie=sn(),he=t*ue+1+J;lr(H,ie,he),ls(H,r,t,A,f,U,b)},[A,f,t,r,U,b,J]);return p.useEffect(()=>{if(!y.current)return;const H=y.current.getContext("2d");if(!H)return;const ie=()=>te(H);return window.addEventListener("resize",ie),()=>window.removeEventListener("resize",ie)},[te]),p.useEffect(()=>{const H=y.current;if(!H)return;H.style.letterSpacing="1px";const ie=H.getContext("2d");ie&&te(ie)},[q,t,r,te]),p.useEffect(()=>{if(!S.current)return;const H=new IntersectionObserver(ie=>{ie[0].isIntersecting&&!k.current&&(k.current=!0,m(),setTimeout(()=>{k.current=!1},1e3))},{root:document.getElementById(Ve)});return H.observe(S.current),()=>{H.disconnect()}},[m]),p.useEffect(()=>{if(!T.current)return;const H=new IntersectionObserver(ie=>{ie[0].isIntersecting&&!k.current&&(k.current=!0,W(),setTimeout(()=>{k.current=!1},1e3))},{root:document.getElementById(Ve),rootMargin:`0px 0px 0px -${$e}px`});return H.observe(T.current),()=>{H.disconnect()}},[W]),l.jsxs(Zs,{id:Qn,children:[l.jsxs(js,{ref:H=>{typeof v=="function"?v(H):v&&(v.current=H),P.current=H},onMouseDown:X,style:{cursor:d?"crosshair":"default"},children:[l.jsx(fr,{position:"left",ref:T}),l.jsx(gn,{isLoading:j,position:"left"}),l.jsx(Vs,{ref:y,onDragStart:R,onDragOver:L,style:{userSelect:D==="dragging"?"none":"auto"}}),l.jsx(Jc,{zoom:r,startDate:f}),l.jsx(ec,{data:n,zoom:r,onTileClick:s,onDragStart:ee,isDraggable:se,draggingEventId:oe,separatorRowIndices:b}),l.jsx(fr,{ref:S,position:"right"}),l.jsx(gn,{isLoading:j,position:"right"}),(D==="dragging"||D==="animating")&&l.jsx(Pc,{draggedEvent:E,ghostPosition:$,ghostDimensions:N,dropTarget:O,isValidDrop:Q,dragState:D,zoom:r,data:n,resourceOnly:z,separatorRowIndices:b}),l.jsx(Oc,{selectionBox:G,isSelecting:V==="selecting"}),I&&w.length>0&&l.jsx(Uc,{selections:w,data:n,zoom:r,startDate:f,onRemove:Y,onUpdate:B,separatorRowIndices:b})]}),I&&C&&w.length>0&&l.jsx(zc,{selections:w,onConfirm:F,onClear:x,onRemove:Y})]})}),hr=e=>{const r=_.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},pr=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/be);t+=o.hours+s,n+=r%be,n>=be&&(t++,n-=be)}),{hours:t,minutes:n}},mr=(e,r)=>{let t=Rn;switch(r){case 0:t=ns;break;case 1:t=Rn;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,i=be-e.minutes;return i===be&&(s++,i=0),{hours:Math.max(0,s),minutes:s<0?0:i}},o=()=>{const s=e.hours-t,i=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:i}};return{free:n(),overtime:o()}},Xs=(e,r,t)=>{const n=r.isoWeek(),o=e.map(a=>{const d=_(a.startDate).isoWeek(),h=_(a.startDate).isoWeekday(),g=_(a.endDate).isoWeek(),b=_(a.endDate).isoWeekday(),{hours:v,minutes:k}=hr(a.occupancy);if(n===d){const m=(Fe+1-h)*v,W=(Fe+1-h)*k;return{hours:Math.max(0,m),minutes:W}}else if(n===g){const m=b>Fe?Fe*v:b*v,W=b>Fe?Fe*k:b*k;return{hours:m,minutes:W}}else if(_(r).isBetween(a.startDate,a.endDate))return{hours:Fe*v,minutes:Fe*k};return{hours:0,minutes:0}}),{hours:s,minutes:i}=pr(o),{free:c,overtime:u}=mr({hours:s,minutes:i},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,i)},free:c,overtime:u}},Us=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(d=>{const{hours:h,minutes:g}=hr(d.occupancy);return o<=(n?7:5)?{hours:h,minutes:g}:{hours:0,minutes:0}}),{hours:i,minutes:c}=pr(s),{free:u,overtime:a}=mr({hours:i,minutes:c},t);return{taken:{hours:Math.max(0,i),minutes:Math.max(0,c)},free:u,overtime:a}},Ks=(e,r)=>{let t=0;e.forEach(c=>{const u=_(c.startDate).hour(),a=_(c.endDate).hour(),d=r.hour(),h=_(c.endDate).minute(),g=_(c.startDate).minute();u<d&&a>d?t+=be:u===d&&a===d&&g&&h?t+=h?h-g:be-g:u===d&&a>=d?t+=g?be-g:be:a===d&&h&&(t+=h)});const n=Math.floor(t/be),o=t%be,s=n||o?0:1,i=n?0:o?be-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:i},overtime:{hours:0,minutes:0}}},Js=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(i=>n===1?_(t).isBetween(i.startDate,i.endDate,"day","[]"):n===2?_(t).isBetween(i.startDate,i.endDate,"hour","[]"):_(i.startDate).isBetween(_(t),_(t).add(6,"days"),"day","[]")||_(t).isBetween(_(i.startDate),_(i.endDate),"day","[]"));switch(n){case 1:return Us(s,t,n,o);case 2:return Ks(s,t);default:return Xs(s,t,n)}},qs=(e,r,t,n,o,s,i=!1)=>{let c="weeks",u;switch(s){case 0:c="weeks",u=tt;break;case 1:c="days",u=ve;break;case 2:c="hours",u=we;break}const a=Math.ceil(s===2?(t.x-.5*u)/u:t.x/u),d=_(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(a-1,c),h=Math.ceil(t.y/ue),g=n.findIndex((W,q,j)=>j.slice(0,q+1).reduce((f,y)=>f+y,0)>=h),b=s===2?(a+1)*u:a*u,v=(h-1)*ue+ue,k=Js(o[g],g,d,s,i),m=_(e.startDate).isSame(_(e.endDate),"day");return{coords:{x:b,y:v},mouseCoords:t,resourceIndex:g,disposition:k,reservationData:{startTime:_(e.startDate).format("hh:mm A"),startDate:_(e.startDate).format("MMM D, YYYY"),endTime:_(e.endDate).format("hh:mm A"),endDate:_(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,isOneDayEvent:m,passengers:e.totalPassengers}}};function Qs(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function Rs(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const d of e)!d.isSubcontract&&d.capacity!=null&&t.add(d.capacity);const n=[...t].sort((d,h)=>d-h);if(n.length<2)return r;const o=Math.min(5,n.length),s=Qs(n,o),i=[];let c=0;for(const d of s)i.push({min:n[c],max:n[d-1],values:n.slice(c,d)}),c=d;i.push({min:n[c],max:n[n.length-1],values:n.slice(c)});const u=[],a=new Map;return i.forEach((d,h)=>{const g="__auto_cat_"+h,b=d.min===d.max?d.min+" pax":d.min+"-"+d.max+" pax";u.push({id:g,name:b,minPassengers:d.min,maxPassengers:d.max});for(const v of d.values)a.set(v,g)}),{categories:u,capacityToCategoryId:a}}const ei=(e,r,t,n)=>{const o=[];let s=0,i=[],c=0;return r.length>n?(r.forEach((u,a)=>{const d={id:e[a].id,label:e[a].label,data:u,capacity:e[a].capacity,isSubcontract:e[a].isSubcontract,categoryId:e[a].categoryId};c>=n&&(o.push(i),s+=i.length,i=[],c=0),c++,i.push(d)}),t.slice(s).length<=n&&(i=[],r.slice(s).forEach((u,a)=>{const d={id:e[a+s].id,label:e[a+s].label,data:u,capacity:e[a+s].capacity,isSubcontract:e[a+s].isSubcontract,categoryId:e[a+s].categoryId};i.push(d),a===r.length-s-1&&o.push(i)})),o):(r.forEach((u,a)=>{const d={id:e[a].id,label:e[a].label,data:u,capacity:e[a].capacity,isSubcontract:e[a].isSubcontract,categoryId:e[a].categoryId};i.push(d)}),o.push(i),o)};var an={},ti={get exports(){return an},set exports(e){an=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(ti);const ni=an;var cn={},ri={get exports(){return cn},set exports(e){cn=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(ri);const oi=cn,si=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let i=0;i<o.length;i++){const c=_(t.startDate).startOf("day"),u=_(t.endDate).startOf("day"),a=_(o[i].startDate).startOf("day"),d=_(o[i].endDate).startOf("day");if(c.isBetween(a,d,null,"[]")||u.isBetween(a,d,null,"[]")||c.isBefore(a,"minute")&&u.isAfter(d,"minute")||c.isAfter(a,"minute")&&u.isBefore(d,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};_.extend(ni),_.extend(oi);const gr=new WeakMap,ii=e=>{const r=gr.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const i=_(o.startDate),c=_(s.startDate),u=i.startOf("day").diff(c.startOf("day"),"day");return u!==0?u:i.diff(c)}),n=si(t);return gr.set(e,n),n},ai=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const i=ii(s.data);return o[0].push(i),o[1].push(Math.max(i.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},ci=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,li=e=>{const{recordsThreshold:r}=We(),[t,n]=p.useState(0),[o,s]=p.useState(0),i=p.useRef(null);p.useEffect(()=>{i.current=document.getElementById(Ve)},[]);const{projectsPerPerson:c,rowsPerPerson:u}=p.useMemo(()=>ai(e),[e]),a=p.useMemo(()=>ei(e,c,u,r),[e,c,r,u]),d=p.useCallback(()=>{a[o].length&&i.current&&(i.current.scroll({top:0}),n(m=>m+a[Math.max(o,0)].length),s(m=>Math.min(m+1,a.length-1)),window.scroll({top:0}))},[o,a]),h=p.useCallback(()=>{a[o].length&&(n(m=>Math.max(m-a[o-1].length,0)),s(m=>Math.max(m-1,0)))},[o,a]),g=p.useCallback(()=>{n(0),s(0)},[]),b=t+a[o].length,v=p.useMemo(()=>u.slice(t,b),[b,u,t]),k=p.useMemo(()=>c.slice(t,b),[b,c,t]);return{page:a[o],currentPageNum:o,pagesAmount:a.length,projectsPerPerson:k,rowsPerItem:v,totalRowsPerPage:ci(a[o]),next:d,previous:h,reset:g}};var ln={},di={get exports(){return ln},set exports(e){ln=e}};(function(e,r){(function(t,n){e.exports=n()})(xe,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(di);const ui=ln;var dn={},fi={get exports(){return dn},set exports(e){dn=e}};(function(e,r){(function(t,n){e.exports=n(Ge)})(xe,function(t){function n(g){return g&&typeof g=="object"&&"default"in g?g:{default:g}}var o=n(t);function s(g){return g%10<5&&g%10>1&&~~(g/10)%10!=1}function i(g,b,v){var k=g+" ";switch(v){case"m":return b?"minuta":"minutę";case"mm":return k+(s(g)?"minuty":"minut");case"h":return b?"godzina":"godzinę";case"hh":return k+(s(g)?"godziny":"godzin");case"MM":return k+(s(g)?"miesiące":"miesięcy");case"yy":return k+(s(g)?"lata":"lat")}}var c="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),u="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),a=/D MMMM/,d=function(g,b){return a.test(b)?c[g.month()]:u[g.month()]};d.s=u,d.f=c;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:d,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(g){return g+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})(fi);const hi=dn;var un={},pi={get exports(){return un},set exports(e){un=e}};(function(e,r){(function(t,n){e.exports=n(Ge)})(xe,function(t){function n(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(u,a,d){var h=s[d];return Array.isArray(h)&&(h=h[a?0:1]),h.replace("%d",u)}var c={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return o.default.locale(c,null,!0),c})})(pi);const mi=un;var fn={},gi={get exports(){return fn},set exports(e){fn=e}};(function(e,r){(function(t,n){e.exports=n(Ge)})(xe,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),i="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),c=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,u=function(d,h){return c.test(h)?s[d.month()]:i[d.month()]};u.s=i,u.f=s;var a={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:u,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(d){return d+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(a,null,!0),a})})(gi);const yi=fn;var hn={},vi={get exports(){return hn},set exports(e){hn=e}};(function(e,r){(function(t,n){e.exports=n(Ge)})(xe,function(t){function n(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(i){return i+"º"}};return o.default.locale(s,null,!0),s})})(vi);const bi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:ui},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:hi},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:hn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:yi},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:mi}];class xi{constructor(){Gr(this,"locales",bi)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const Dt=new xi,yr=p.createContext({localesData:Dt.getLocales(),currentLocale:Dt.getLocales()[0],setCurrentLocale:()=>{}}),wi=({children:e,lang:r,translations:t})=>{const[n,o]=p.useState("en"),s=Dt.getLocales(),i=p.useCallback(()=>{const h=s.find(g=>g.id===n);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&_.locale(h.dayjsTranslations),h||s[0]},[n,s]),[c,u]=p.useState(i()),a=h=>{localStorage.setItem("locale",h.translateCode),u(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(b=>b.id===h.id)||Dt.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),g=r??h??"en";localStorage.setItem("locale",g),o(g),u(i())},[i,r]);const{Provider:d}=yr;return l.jsx(d,{value:{currentLocale:c,localesData:s,setCurrentLocale:a},children:e})},He=()=>p.useContext(yr).currentLocale.lang,Si=e=>re.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},re.createElement("defs",null,re.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),re.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},re.createElement("stop",{offset:.47,stopColor:"#ccc"}),re.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),re.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),re.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),re.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),re.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),re.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),re.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),re.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),re.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),re.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),re.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Ci=M.div`
  height: 440px;
  width: 514px;
  position: relative;
`,Mi=M.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,ki=({onTileClick:e})=>{const{feelingEmpty:r}=He();return l.jsxs(Ci,{onClick:e,children:[l.jsx(Si,{}),l.jsx(Mi,{children:r})]})},Di=M.div`
  position: relative;
  display: flex;
`,$i=M.div`
  position: relative;
  margin-left: ${$e};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Ei=M.div`
  width: calc(${({width:e})=>e}px - ${$e}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${$e}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,pn={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:ht.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function _i(e,r){const t=r?[...r].sort((c,u)=>c.maxPassengers-u.maxPassengers):[],n=[];for(const c of t){const u=e.filter(a=>!a.isSubcontract&&a.categoryId===c.id);u.length>0&&n.push({type:"category",category:c,items:u})}const o=t.length>0,s=e.filter(c=>!c.isSubcontract&&(!c.categoryId||!o));s.length>0&&o?n.push({type:"uncategorized",items:s}):s.length>0&&n.push({type:"uncategorized",items:s});const i=e.filter(c=>c.isSubcontract);return i.length>0&&n.push({type:"subcontract",items:i}),n}const Ti=({data:e,baseData:r,categories:t,onTileClick:n,onItemClick:o,toggleTheme:s,topBarWidth:i,onEventDrop:c,onEventDrag:u,draggableConfig:a,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:g})=>{const[b,v]=p.useState(pn),[k,m]=p.useState(e),[W,q]=p.useState(!1),[j,A]=p.useState(!1),[f,y]=p.useState(""),[S,T]=p.useState(new Set),{zoom:P,startDate:Z,isLoading:K,config:{includeTakenHoursOnWeekendsInDayView:U,showTooltip:D,showThemeToggle:E}}=We(),$=p.useRef(null),{page:N,projectsPerPerson:O,rowsPerItem:Q,currentPageNum:ee,pagesAmount:se,next:oe,previous:z,reset:V}=li(k),{effectiveCategories:G,effectivePage:X}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:N};const ae=Rs(N);if(ae.categories.length===0)return{effectiveCategories:void 0,effectivePage:N};const le=N.map(ce=>{if(ce.isSubcontract||ce.capacity==null)return ce;const ne=ae.capacityToCategoryId.get(ce.capacity);return ne?{...ce,categoryId:ne}:ce});return{effectiveCategories:ae.categories,effectivePage:le}},[t,N]),w=p.useCallback(ae=>{T(le=>{const ce=new Set(le);return ce.has(ae)?ce.delete(ae):ce.add(ae),ce})},[]),F=p.useMemo(()=>{const ae=[],le=G?[...G].sort((ce,ne)=>ce.maxPassengers-ne.maxPassengers):[];for(const ce of le)X.some(ne=>!ne.isSubcontract&&ne.categoryId===ce.id)&&ae.push(ce.id);return X.some(ce=>ce.isSubcontract)&&ae.push("__subcontract__"),ae},[G,X]),x=p.useCallback(()=>{T(new Set)},[]),Y=p.useCallback(()=>{T(new Set(F))},[F]),{visiblePage:B,visibleRowsPerItem:I,visibleTotalRows:C,visibleProjectsPerPerson:R,separatorRowIndices:L}=p.useMemo(()=>{const ae=_i(X,G),le=((G==null?void 0:G.length)??0)>0,ce=new Map;N.forEach((Ce,Le)=>ce.set(Ce.id,Le));const ne=[],fe=[],Se=[],_e=[];let De=0;for(const Ce of ae)if(Ce.type==="subcontract"||Ce.type==="category"&&le){const at=Ce.type==="subcontract"?"__subcontract__":Ce.category.id,ct=S.has(at);if(_e.push(De),!ct)for(const Xe of Ce.items){const Et=ce.get(Xe.id)??0,_t=Q[Et];ne.push(Xe),fe.push(_t),Se.push(O[Et]),De+=_t}}else for(const at of Ce.items){const ct=ce.get(at.id)??0,Xe=Q[ct];ne.push(at),fe.push(Xe),Se.push(O[ct]),De+=Xe}const xn=fe.reduce((Ce,Le)=>Ce+Le,0);return{visiblePage:ne,visibleRowsPerItem:fe,visibleTotalRows:xn,visibleProjectsPerPerson:Se,separatorRowIndices:_e}},[X,G,N,S,Q,O]),J=p.useRef(ot((ae,le,ce,ne,fe,Se)=>{if(!$.current)return;const{tile:_e,segmentId:De}=ie(ae);if(!De||!_e){q(!1),v(pn);return}const xn=H(De,le),Ce=$.current.getBoundingClientRect(),Le=_e.getBoundingClientRect(),at={x:ae.clientX-Ce.left,y:ae.clientY-Ce.top},ct={x:ae.clientX-Ce.left,y:ae.clientY-Ce.top},Xe={x:Le.left-Ce.left,y:Le.top-Ce.top,width:Le.width,height:Le.height},{coords:{x:Et,y:_t},resourceIndex:qc,disposition:Qc,reservationData:Rc}=qs(xn,ce,at,ne,fe,Se,U);v({coords:{x:Et,y:_t},mouseCoords:ct,resourceIndex:qc,disposition:Qc,reservationData:Rc,tileBounds:Xe}),q(!0)},4)),te=p.useRef(ot((ae,le)=>{V(),m(ae.map(ce=>({...ce,data:ce.data.filter(ne=>{const{title:fe,description:Se,subtitle:_e}=ne;return(fe==null?void 0:fe.toLowerCase().includes(le.toLowerCase()))||(_e==null?void 0:_e.toLowerCase().includes(le.toLowerCase()))||(Se==null?void 0:Se.toLowerCase().includes(le.toLowerCase()))})})).filter(ce=>ce.data.length>0))},500)),H=(ae,le)=>{if(ae)return le.flatMap(ce=>ce.data).find(ce=>ce.segmentId===ae)},ie=ae=>{if(!ae.target)return{tile:null,segmentId:null};const le=ae.target.closest("[data-segment-id]");return le?{tile:le,segmentId:le.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},he=ae=>{const le=ae.target.value;y(le),te.current.cancel(),le?te.current(e,le):(V(),m(e))},de=p.useCallback(()=>{J.current.cancel(),q(!1),v(pn)},[]);return p.useEffect(()=>{const ae=ce=>J.current(ce,e,Z,I,R,P),le=$.current;if(le)return le.addEventListener("mousemove",ae),le.addEventListener("mouseleave",de),()=>{le.removeEventListener("mousemove",ae),le.removeEventListener("mouseleave",de)}},[J,de,R,I,Z,P,e]),p.useEffect(()=>{f?(te.current.cancel(),te.current(e,f)):m(e)},[e,f]),l.jsxs(Di,{children:[l.jsx(ma,{data:X,categories:G,pageNum:ee,pagesAmount:se,rows:Q,onLoadNext:oe,onLoadPrevious:z,searchInputValue:f,onSearchInputChange:he,onItemClick:o,collapsedGroups:S,onToggleGroup:w,allGroupIds:F,onExpandAll:x,onCollapseAll:Y}),l.jsxs($i,{children:[l.jsx(Aa,{zoom:P,topBarWidth:i,showThemeToggle:E,toggleTheme:s}),e.length?l.jsx(Gs,{data:B,baseData:r||e,zoom:P,rows:C,ref:$,onTileClick:n,onEventDrop:c,onEventDrag:u,draggableConfig:a,onDragStateChange:A,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:g,separatorRowIndices:L}):l.jsx(Ei,{width:i,children:K?l.jsx(gn,{isLoading:K,position:"left"}):l.jsx(ki,{})}),D&&W&&!j&&(b==null?void 0:b.resourceIndex)>-1&&l.jsx(gc,{tooltipData:b})]})]})},vr=`
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`,Pi=M.div`
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
`,Ai=M.div`
  display: flex;
  gap: 1.875rem;
`,br=M.button`
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
`,Ii=M.button`
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
`,Oi=M.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Yi=M.div`
  display: flex;
`,Li=M.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`,Ni=({width:e,showThemeToggle:r,toggleTheme:t})=>{const{topbar:n}=He(),{data:o,config:s,handleGoNext:i,handleGoPrev:c,handleGoToday:u,zoomIn:a,zoomOut:d,isNextZoom:h,isPrevZoom:g,toggleDisplayActiveUnits:b,onClearFilterData:v}=We(),{colors:k}=Ze(),{filterButtonState:m=-1}=s,W=q=>{q.stopPropagation(),v==null||v()};return l.jsxs(Pi,{width:e,children:[l.jsx(Yi,{children:m>=0&&l.jsxs(mn,{variant:m?"filled":"outlined",iconName:"filter",width:"16",height:"16",onClick:b,children:[n.filters,!!m&&l.jsx("span",{onClick:W,children:l.jsx(Oe,{iconName:"close",height:"16",width:"16",fill:k.textSecondary})})]})}),l.jsxs(Ai,{children:[l.jsxs(br,{onClick:c,children:[l.jsx(Oe,{iconName:"arrowLeft",height:"15",fill:k.textPrimary}),n.prev]}),l.jsx(Ii,{onClick:u,children:n.today}),l.jsxs(br,{onClick:i,children:[n.next,l.jsx(Oe,{iconName:"arrowRight",height:"15",fill:k.textPrimary})]})]}),l.jsxs(Li,{children:[r&&l.jsx(xc,{toggleTheme:t}),l.jsxs(Oi,{children:[n.view,l.jsx(mn,{isDisabled:!g,onClick:d,isFullRounded:!0,iconName:"subtract",width:"14"}),l.jsx(mn,{isDisabled:!h,onClick:a,isFullRounded:!0,iconName:"add",width:"14"})]})]})]})},Fi={add:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>re.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),re.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Oe=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=Ze(),i=Fi[e];return i?l.jsx(i,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},Wi=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r],Hi=M.button`
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
  ${({theme:e,variant:r,disabled:t})=>Wi(e,r,t)}
`,mn=({iconName:e,width:r,height:t,fill:n,className:o,onClick:s,children:i,isFullRounded:c,isDisabled:u,variant:a="outlined"})=>{const{colors:d}=Ze();return l.jsxs(Hi,{onClick:s,isFullRounded:c,hasChildren:!!i,disabled:u,variant:a,children:[l.jsx(Oe,{iconName:e,width:r,height:t,fill:u?d.disabled:n,className:o}),i]})},Bi=M.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,zi=M.div`
  position: relative;
`,Zi=({data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:c,onEventDrag:u,draggableConfig:a,schedulerRef:d,onTimeRangeSelect:h,onMultiTimeRangeSelect:g,clickToAddConfig:b})=>{const{goToDate:v,handleGoToday:k,zoomIn:m,zoomOut:W,zoom:q}=We();return p.useImperativeHandle(d,()=>({goToDate:v,goToToday:k,setZoom:j=>{if(!ar(j))return;const A=j-q;if(A>0)for(let f=0;f<A;f++)m();else for(let f=0;f<Math.abs(A);f++)W()}}),[v,k,q,m,W]),l.jsx(Ti,{data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:c,onEventDrag:u,draggableConfig:a,onTimeRangeSelect:h,onMultiTimeRangeSelect:g,clickToAddConfig:b})},ji=p.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:i,onTileClick:c,handleToggleDisplayActiveUnits:u,onClearFilterData:a,onItemClick:d,isLoading:h,onEventDrop:g,onEventDrag:b,draggableConfig:v,onTimeRangeSelect:k,onMultiTimeRangeSelect:m,clickToAddConfig:W},q){var $;const j=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,translations:void 0,...o}),[o]),A=p.useRef(null),f=p.useRef(null),[y,S]=p.useState(($=A.current)==null?void 0:$.clientWidth),T=p.useMemo(()=>_(s),[s]),[P,Z]=p.useState(j.defaultTheme??"light"),K=()=>{Z(P==="light"?"dark":"light")},U=P==="light"?Ko:Jo,D=j.theme?j.theme[U.mode]:{},E={...U,colors:{...U.colors,...D}};return p.useImperativeHandle(q,()=>({goToDate:N=>{var O;return(O=f.current)==null?void 0:O.goToDate(N)},goToToday:()=>{var N;return(N=f.current)==null?void 0:N.goToToday()},setZoom:N=>{var O;return(O=f.current)==null?void 0:O.setZoom(N)}}),[]),p.useEffect(()=>{const N=()=>{A.current&&S(A.current.clientWidth)};return N(),window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]),A.current,l.jsxs(l.Fragment,{children:[l.jsx(Uo,{}),l.jsx(Vo,{theme:E,children:l.jsx(wi,{lang:j.lang,translations:j.translations,children:l.jsx(Ws,{data:r,isLoading:!!h,config:j,onRangeChange:i,defaultStartDate:T,handleToggleDisplayActiveUnits:u,onClearFilterData:a,children:l.jsx(Bi,{showScroll:!!r.length,id:Ve,ref:A,children:l.jsx(zi,{children:l.jsx(Zi,{data:r,baseData:n,categories:t,onTileClick:c,topBarWidth:y??0,onItemClick:d,toggleTheme:K,onEventDrop:g,onEventDrag:b,draggableConfig:v,schedulerRef:f,onTimeRangeSelect:k,onMultiTimeRangeSelect:m,clickToAddConfig:W})})})})})})]})}),Vi=M.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,Gi=M.button`
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
`,Xi=M.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ui=M.p`
  ${qe}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,xr=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:i,loadPrevious:c}=He(),u=e==="next"?`${i} ${o+2}/${s}`:`${c} ${o}/${s}`;return l.jsx(Vi,{intent:e,children:l.jsxs(Gi,{onClick:r,isVisible:n,children:[t&&l.jsx(Xi,{children:t}),l.jsx(Ui,{children:u})]})})},Ki=M.div`
  min-width: ${$e+"px"};
  max-width: ${$e+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,Ji=M.div`
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
`,qi=M.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,Qi=M.input`
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
`,Ri=M.div`
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
`,ea=M.button`
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
`,ta=M.div`
  display: flex;
  align-items: ${({rows:e})=>e>1?"start":"center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${ue}px;
  height: calc(${ue}px * ${({rows:e})=>e});
  border-top: 1px solid
    ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBorder+"33":e.colors.border};
  background-color: ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBg:"transparent"};
  transition: 0.5s ease;
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,na=M.div`
  display: flex;
  align-items: center;
`,ra=M.div`
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
`,oa=M.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,sa=M.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,wr=M.p`
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
`,ia=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),aa=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[l.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),l.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),l.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),l.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),l.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),ca=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),l.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),la=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>l.jsx(ta,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:l.jsxs(na,{children:[l.jsx(ra,{$provider:o,children:ia(r.icon)?l.jsx(oa,{src:r.icon,alt:""}):o?l.jsx(ca,{}):l.jsx(aa,{})}),l.jsxs(sa,{children:[l.jsx(wr,{isMain:!0,children:r.title}),l.jsx(wr,{children:r.subtitle})]})]})}),da=M.div`
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
`,ua=M.div`
  width: 3px;
  height: 100%;
  flex-shrink: 0;
  background: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder:e.colors.accent};
  border-radius: 0 2px 2px 0;
`,fa=M.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`,ha=M.span`
  font-size: 0.625rem;
  font-weight: 500;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder:e.colors.accent};
  background: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder+"18":e.colors.accent+"14"};
  padding: 1px 6px;
  border-radius: 10px;
  flex-shrink: 0;
  line-height: 1.4;
`,pa=M.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.placeholder};
  transition: transform 0.2s ease;
  transform: rotate(${({$collapsed:e})=>e?"-90deg":"0deg"});
`,Sr=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>l.jsxs(da,{$variant:o,onClick:n,title:e,children:[l.jsx(ua,{$variant:o}),l.jsx(pa,{$collapsed:t,children:l.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:l.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),l.jsx(fa,{$variant:o,children:e}),l.jsx(ha,{$variant:o,children:r})]}),ma=({data:e,categories:r,rows:t,onLoadNext:n,onLoadPrevious:o,pageNum:s,pagesAmount:i,searchInputValue:c,onSearchInputChange:u,onItemClick:a,collapsedGroups:d,onToggleGroup:h,allGroupIds:g,onExpandAll:b,onCollapseAll:v})=>{const[k,m]=p.useState(!1),W=He(),q=()=>m(U=>!U),j=r?[...r].sort((U,D)=>U.maxPassengers-D.maxPassengers):[],A=j.length>0,f=g.length>0,y=f&&d.size===g.length;f&&d.size;const S=e.filter(U=>U.isSubcontract),T=W.subcontract??"Subcontract",P=U=>{const D=e.indexOf(U);return l.jsx(la,{id:U.id,item:U.label,rows:t[D],onItemClick:a,isSubcontract:U.isSubcontract},U.id)},Z=U=>{const D=e.filter(N=>!N.isSubcontract&&N.categoryId===U.id);if(D.length===0)return null;const E=d.has(U.id),$=U.name;return l.jsxs("div",{children:[l.jsx(Sr,{label:$,count:D.length,isCollapsed:E,onToggle:()=>h(U.id),variant:"category"}),!E&&D.map(P)]},U.id)},K=e.filter(U=>!U.isSubcontract&&(!U.categoryId||!A));return l.jsxs(Ki,{children:[l.jsxs(Ji,{children:[l.jsxs(qi,{children:[l.jsxs(Ri,{isFocused:k,children:[l.jsx(Qi,{placeholder:W.search,value:c,onChange:u,onFocus:q,onBlur:q}),l.jsx(Oe,{iconName:"search"})]}),f&&l.jsx(ea,{title:y?"Expand all":"Collapse all",onClick:y?b:v,$allCollapsed:y,children:l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:y?l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),l.jsx(xr,{intent:"previous",isVisible:s!==0,onClick:o,icon:l.jsx(Oe,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:s,pagesAmount:i})]}),A?j.map(Z):K.map(P),A&&K.length>0&&K.map(P),S.length>0&&l.jsxs(l.Fragment,{children:[l.jsx(Sr,{label:T,count:S.length,isCollapsed:d.has("__subcontract__"),onToggle:()=>h("__subcontract__"),variant:"subcontract"}),!d.has("__subcontract__")&&S.map(P)]}),l.jsx(xr,{intent:"next",isVisible:s!==i-1,onClick:n,icon:l.jsx(Oe,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:s,pagesAmount:i})]})},ga=M.div`
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
`,ya=Ct`
from{
    left: -100%;
}
to{
    left: 100%;
}`,va=M.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${ya} 1s infinite;
`,gn=({isLoading:e,position:r})=>e?l.jsx(ga,{position:r,children:l.jsx(va,{})}):null,Ye=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:i,textYPos:c,label:u,font:a,isBottomRow:d,fillStyle:h,topText:g,bottomText:b,strokeStyle:v,labelBetweenCells:k}=e;if(t.beginPath(),t.strokeStyle=v??r.colors.border,t.setLineDash([]),u&&a&&c){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,i),k?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+i),t.lineTo(n+s,o+i),t.stroke(),t.moveTo(n+s/2,o+i),t.lineTo(n+s/2,o+i-5),t.stroke()):t.strokeRect(n+.5,o+.5,s,i),t.font=a;const m=n+s/2-t.measureText(u).width/2;t.textBaseline="middle",t.fillStyle=r.colors.accent,t.fillText(u,m,c)}if(d&&h&&g&&b){t.fillStyle=h,t.fillRect(n,o,s,i),t.strokeRect(n+.5,o+.5,s,i),t.font=g.font;const m=n+s/2-t.measureText(g.label).width/2;t.fillStyle=g.color,t.fillText(g.label,m,g.y),t.font=b.font;const W=n+s/2-t.measureText(b.label).width/2;t.fillStyle=b.color,t.fillText(b.label,W,b.y)}},Cr=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},yn=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},ba=(e,r,t,n)=>{const o=et-je/Qo,s=et-je/Ro,i=Ie+Re;let c=0;for(let u=0;u<r;u++){const a=or(_(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(u,"days")),d=a.isCurrentDay;if(Ye({ctx:e,x:c,y:i,width:ve,height:je,isBottomRow:!0,fillStyle:d?n.colors.today+"26":Cr({isCurrent:!1,isBusinessDay:a.isBusinessDay},n),topText:{y:o,label:d?"":a.dayName.toUpperCase(),font:Pe.bottomRow.name,color:yn({isCurrent:!1,isBusinessDay:a.isBusinessDay},n)},bottomText:{y:s,label:`${a.dayOfMonth}`,font:d?"700 10px Inter":Pe.bottomRow.number,color:d?n.colors.today:yn({isCurrent:!1,isBusinessDay:a.isBusinessDay,variant:"bottomRow"},n)}},n),d){const b=c+ve/2,v=o-13/2;e.save(),e.fillStyle=n.colors.today,e.beginPath(),e.roundRect?e.roundRect(b-30/2,v,30,13,5):e.rect(b-30/2,v,30,13),e.fill(),e.fillStyle="#fff",e.font="800 8.5px Inter",e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",b,v+13/2+.5),e.restore()}c+=ve}},xa=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*Ee;const s=Ie;let c=t.month;for(let u=0;u<r;u++){c>=Vt&&(c=0);const a=rr(t,u)*Ee;Ye({ctx:e,x:o,y:s,width:a,height:Re,textYPos:er,label:_().month(c).format("MMMM").toUpperCase(),font:Pe.bottomRow.number},n),o+=a,c++}},wa=(e,r,t)=>{let o=0,s=0,i=_(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month();o=-r.dayOfMonth*ve+ve;for(let c=0;c<Vt;c++)i>Vt-1&&(i=0),s=_(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(c,"months").daysInMonth()*ve,Ye({ctx:e,x:o,y:0,width:s,height:Ie,textYPos:Xt,label:_(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${_(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,font:Pe.topRow},t),o+=s,i++},Sa=(e,r,t,n)=>{const o=7*ve,s=Ie,i=e.canvas.width/o+o,c=r.weekOfYear;let u=0;for(let a=0;a<i;a++){const d=_(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let h=(c+a)%qn;h<=0&&(h+=qn),d!==1&&a===0&&(u=-d*ve+ve),Ye({ctx:e,x:u,y:s,width:o,height:Re,textYPos:er,label:`${t.toUpperCase()} ${h}`,font:Pe.middleRow},n),u+=o}},Ca=(e,r,t,n,o)=>{const s=et-je/1.6,i=et-je/4.5,c=Ie+Re;let u=0;for(let a=0;a<r;a++){const d=_(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(a,"weeks"),h=d.isSame(_(),"week");Ye({ctx:e,x:u,y:c,width:tt,height:je,isBottomRow:!0,fillStyle:h?o.colors.today+"26":Cr({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:d.isoWeek().toString(),font:h?"700 14px Inter":Pe.bottomRow.name,color:h?o.colors.today:yn({isCurrent:h},o)},bottomText:{y:i,label:n.toUpperCase(),font:Pe.middleRow,color:o.colors.placeholder}},o),u+=tt}},Ma=(e,r,t,n)=>{const s=r.year,i=e.canvas.width*2;let c=0,u=0,a=(nr(s)-t+1)*Ee,d=0;for(;c+d<=i;)u>0&&(a=nr(s+u)*Ee),d+a>i&&u>0&&(a=Math.ceil((i-d)/Ee)*Ee),Ye({ctx:e,x:c,y:0,width:a,height:Ie,textYPos:Xt,label:(s+u).toString(),font:Pe.topRow},n),c+=a,d+=a,u++},ka=(e,r,t,n)=>{const o=Math.floor(r/Mt)+2,s=Mt*we;let u=-_(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*we+.5*we;for(let a=0;a<o;a++){const d=_(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(a,"day").format("dddd DD/MM/YYYY").toUpperCase();Ye({ctx:e,x:u,y:nt,width:s,height:ft,textYPos:nt+ft/2+2,label:d,font:Pe.bottomRow.number},n),u+=s}},Da=(e,r,t,n)=>{const o=Math.ceil(r/Mt),s=_(`${t.year}-${t.month+1}-${t.dayOfMonth}`),i=s.add(o-1,"days"),c=s.month(),u=i.add(1,"day").month(),a=c===u?1:2;let d=.5*we;for(let h=0;h<a;h++){const g=_(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),v=_(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),k=v.format("MMMM").toUpperCase(),m=v.diff(g,"hour")+1,W=h===0?m*we:r*we;Ye({ctx:e,x:d,y:0,width:W,height:nt,textYPos:Xt,label:k,font:Pe.topRow},n),d+=W}},$a=(e,r,t,n)=>{let o=0;const s=nt+ft,i=_(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),c=we;for(let u=0;u<r;u++){const a=i.add(u,"hours").format("h:00a").toUpperCase();Ye({ctx:e,x:o,y:s,width:c,height:jt,label:a,font:Pe.bottomRow.hoursInDay,textYPos:nt+ft+jt/2+2,labelBetweenCells:!0},n),o+=we}},Ea=(e,r,t,n,o,s,i)=>{switch(r){case 0:Ma(e,n,s,i),xa(e,t,n,i),Ca(e,t,n,o,i);break;case 1:wa(e,n,i),Sa(e,n,o,i),ba(e,t,n,i);break;case 2:Da(e,t,n,i),ka(e,t,n,i),$a(e,t,n,i);break}},_a=M.div`
  position: sticky;
  top: 0;
  z-index: 1;
`,Ta=M.div`
  height: ${et}px;
  display: block;
`,Pa=M.canvas``,Aa=({zoom:e,topBarWidth:r,showThemeToggle:t,toggleTheme:n})=>{const{week:o}=He(),{date:s,cols:i,dayOfYear:c,startDate:u,config:a}=We(),d=p.useRef(null),h=Ze(),g=p.useCallback(b=>{const v=sn(),m=(e===2?qo:et)+1;lr(b,v,m),Ea(b,e,i,u,o,c,h)},[i,c,u,o,e,h]);return p.useEffect(()=>{if(!d.current)return;const b=d.current.getContext("2d");if(!b)return;const v=()=>g(b);return window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[g]),p.useEffect(()=>{const b=d.current;if(!b)return;b.style.letterSpacing="1px";const v=b.getContext("2d");v&&g(v)},[s,e,g]),l.jsxs(_a,{children:[a.showTopbar!==!1&&l.jsx(Ni,{width:r,showThemeToggle:t,toggleTheme:n}),l.jsx(Ta,{id:es,children:l.jsx(Pa,{ref:d})})]})},Ia=(e,r,t)=>{let n;switch(t){case 0:n=Ee;break;case 2:n=we;break;default:n=ve}const s=e.startDate.startOf("day"),i=e.endDate.startOf("day"),c=r.startDate.startOf("day"),u=r.endDate.startOf("day"),a=()=>{let d;switch(t){case 2:d=(e.startDate.diff(r.startDate,"minute")/be+1)*n-n/2;break;default:d=s.diff(c,"day")*n}return Math.max(0,d)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(e.startDate,"minute")/be*n,50);break;default:d=Math.max(i.diff(s,"day")*n+n,50)}return{x:a(),width:d}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(r.startDate,"minute")/be*n+.5*n,50);break;default:d=Math.max(i.diff(c,"day")*n+n,50)}return{x:a(),width:d}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let d;switch(t){case 2:d=Math.max(r.endDate.diff(e.startDate,"minute")/be*n,50);break;default:d=Math.max(u.diff(s,"day")*n+n,50)}return{x:a(),width:d}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let d;switch(t){case 2:d=Math.max(r.endDate.diff(r.startDate,"minute")/be*n,50);break;default:d=Math.max(u.diff(c,"day")*n+n,50)}return{x:a(),width:d}}return{x:a(),width:50}},Oa=(e,r,t,n,o,s)=>{const i=e*ue+ts,c=r.hour(),u=t.hour();let a,d,h,g;switch(s){case 2:{a=_(n),d=_(o),h=_(r).hour(c).minute(0),g=_(t).hour(u).minute(0);break}default:{a=_(n).hour(0).minute(0),d=_(o).hour(23).minute(59),h=r,g=t;break}}return{...Ia({startDate:a,endDate:d},{startDate:h,endDate:g},s),y:i}},Mr=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"},Ya={transfer:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 8h13l-3-3"}),l.jsx("path",{d:"M20 16H7l3 3"})]}),sun:l.jsxs(l.Fragment,{children:[l.jsx("circle",{cx:"12",cy:"12",r:"4"}),l.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),l.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:l.jsxs(l.Fragment,{children:[l.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),l.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:l.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M12 3 2 20h20z"}),l.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:l.jsxs(l.Fragment,{children:[l.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),l.jsx("path",{d:"M12 7.5V12l3 2"})]})},$t=({name:e,className:r,strokeWidth:t=2})=>l.jsx("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:Ya[e]});M.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,M.p`
  ${qe}
  ${Qe}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const La=M.button`
  ${qe}
  position: absolute;
  height: ${Gt}px;
  border-radius: 7px;
  overflow: hidden;
  outline: none;
  border: none;
  text-align: left;
  color: #fff;
  width: 100%;
  box-shadow: 0 2px 5px -1px rgba(12, 26, 23, 0.28), 0 0 0 0.5px rgba(12, 26, 23, 0.14);
  cursor: ${({isDraggable:e,isDragging:r})=>e?r?"grabbing":"grab":"not-allowed"};
  opacity: ${({isDragging:e})=>e?.3:1};
  transition: opacity 0.2s ease;
  ${({$unconfirmed:e})=>e&&`background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0 6px, transparent 6px 12px);
     box-shadow: 0 0 0 1.5px #D98A22, 0 2px 5px -1px rgba(12,26,23,0.28);`}
`,Na=M.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 3;
  pointer-events: none;
`,Fa=M.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`,kr=M.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,Wa=M.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,Ha=M.span`
  ${Qe}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 750;
`,Dr=M.span`
  ${Qe}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,Ba=M.span`
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
`,za=M.div`
  ${Qe}
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
`,$r=M.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,Za=M.span`
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
`,Er=M.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: #b4791e;
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,ja=M.div`
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
`,_r=M.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({$end:e})=>e?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.95)"};
  color: ${({$end:e})=>e?"#3A4C46":"#183D3D"};
`,Va=M.span`
  position: absolute;
  right: 2px;
  top: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid #fff;
`,Ga=34,Xa=156,Ua=248,Ka={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63"}},Ja="#3E8E5A",qa="#D98A22",Qa=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onDragStart:s,isDragging:i=!1,isDraggable:c=!0,yOffset:u=0})=>{const{date:a}=We(),d=on(a,t),{y:h,x:g,width:b}=Oa(e,d.startDate,d.endDate,r.startDate,r.endDate,t),{colors:v}=Ze(),k=p.useRef(null),m=_(r.startDate).isSame(_(r.endDate),"day"),W=r.eventType===ht.Tour,q=r.eventType===ht.Transfer,j=m&&(W||q),A=D=>{k.current={x:D.clientX,y:D.clientY},c&&s&&(D.preventDefault(),s(r,D))},f=D=>{if(k.current){const E=Math.abs(D.clientX-k.current.x),$=Math.abs(D.clientY-k.current.y);Math.sqrt(E*E+$*$)<=5&&(o==null||o(r)),k.current=null}else o==null||o(r)},y={left:`${g}px`,top:`${h+u}px`,backgroundColor:`${r.bgColor??v.defaultTile}`,width:`${b}px`,color:Mr(r.bgColor??"")},S=!n&&r.readiness?Ka[r.readiness]:null,T=n&&r.subcontractConfirmed===!1,P=n?T?qa:Ja:S==null?void 0:S.stripe,Z=D=>l.jsxs(La,{"data-segment-id":r.segmentId,style:y,onClick:f,onMouseDown:A,onDragStart:E=>E.preventDefault(),isDraggable:c,isDragging:i,$unconfirmed:T,children:[P&&l.jsx(Na,{style:{background:P}}),D]});if(j)return Z(l.jsxs(l.Fragment,{children:[n&&l.jsx($r,{$sm:!0,children:l.jsx(Er,{children:"SUB"})}),l.jsxs(ja,{children:[l.jsx($t,{name:q?"transfer":"sun",strokeWidth:2.4}),b>=Ga&&l.jsxs(l.Fragment,{children:[l.jsx(_r,{children:_(r.startDate).format("HH:mm")}),!q&&l.jsx(_r,{$end:!0,children:_(r.endDate).format("HH:mm")})]}),S&&l.jsx(Va,{style:{background:S.color}})]})]}));const K=b>=Ua,U=r.bookingNumber?l.jsx(Ba,{children:r.bookingNumber}):null;return Z(l.jsxs(l.Fragment,{children:[l.jsx($r,{children:n?l.jsx(Er,{children:"SUB"}):S&&l.jsx(Za,{style:{color:S.color},children:l.jsx($t,{name:S.icon,strokeWidth:S.icon==="check"?2.6:2.2})})}),l.jsxs(Fa,{children:[l.jsxs(kr,{$pad:!0,children:[l.jsx(Wa,{children:l.jsx($t,{name:q?"transfer":"tour"})}),K?l.jsx(Ha,{children:r.title}):l.jsxs(l.Fragment,{children:[U,b>=Xa&&r.subtitle&&l.jsx(Dr,{children:r.subtitle})]})]}),K&&l.jsxs(kr,{children:[U,r.subtitle&&l.jsx(Dr,{children:r.subtitle})]}),K&&r.driver&&l.jsxs(za,{children:[l.jsx($t,{name:"person"}),r.driver]})]})]}))},Tr=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*ke},Ra=M.div`
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
`,ec=({data:e,zoom:r,onTileClick:t,onDragStart:n,isDraggable:o,draggingEventId:s,separatorRowIndices:i=[]})=>{const c=p.useCallback(()=>{let u=0;return e.map((a,d)=>{if(d>0&&(u+=Math.max(e[d-1].data.length,1)),!a.data.some(h=>h.length>0)){const h=Tr(u,i);return[l.jsx(Ra,{style:{top:`${u*ue+h}px`},children:"Disponible"},`dispo-${a.id}`)]}return a.data.map((h,g)=>h.map(b=>{const v=s===b.segmentId,k=o?o(b):!1,m=g+u,W=Tr(m,i);return l.jsx(Qa,{row:m,data:b,zoom:r,isSubcontract:a.isSubcontract,onTileClick:t,onDragStart:n,isDragging:v,isDraggable:k,yOffset:W},b.segmentId)}))}).flat(2)},[e,t,r,n,o,s,i]);return l.jsx(l.Fragment,{children:c()})};M.div`
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
`;const tc=M.div`
  position: absolute;
  width: 240px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`,nc=M.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,rc=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`,oc=M.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
`,sc=M.span`
  background: ${({$type:e})=>e==="transfer"?"#dbeafe":"#dcfce7"};
  color: ${({$type:e})=>e==="transfer"?"#1e40af":"#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`,ic=M.div`
  ${qe}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ac=M.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
`,cc=M.div`
  padding: 10px 12px;
`,lc=M.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,Pr=M.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,Ar=M.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,Ir=M.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Or=M.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,Yr=M.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,dc=M.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,uc=M.div``,fc=M.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,hc=M.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,pc=M.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Lr=M.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Nr=M.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Fr=M.div`
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
`;M.div``,M.span``,M.span``,M.div``,M.div``,M.span``,M.span``,M.div``,M.div``,M.span``,M.span``,M.div``,M.div``,M.div``,M.span``,M.div``,M.div``,M.div``,M.div``,M.p``,M.span``;const mc={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},gc=({tooltipData:e})=>{const{mouseCoords:r,reservationData:t}=e,n=p.useRef(null),[o,s]=p.useState("below"),i=He(),c={...mc,...i.tooltip};p.useLayoutEffect(()=>{if(!n.current||!r)return;const b=n.current,{width:v,height:k}=b.getBoundingClientRect(),m=b.parentElement;if(!m)return;const W=m.getBoundingClientRect(),q=12,j=4,A=W.height-r.y,f=W.width-r.x;let y=r.x+q,S=r.y+q,T="below";f<v+q&&(y=r.x-v-q),A<k+q&&(S=r.y-k-q,T="above"),y=Math.max(j,Math.min(y,W.width-v-j)),S=Math.max(j,Math.min(S,W.height-k-j)),s(T),b.style.left=`${y}px`,b.style.top=`${S}px`},[r]);const u=t.reservationType===ht.Tour,a=u&&t.isOneDayEvent,d=()=>u?a?"oneday":"tour":"transfer",h=()=>u?a?c.oneDay:c.tour:c.transfer,g=[t.groupName&&{label:c.groupName,value:t.groupName},t.driver&&{label:c.driver,value:t.driver},t.passengers&&{label:c.passengers,value:String(t.passengers)},t.flightNumber&&{label:c.flightNumber,value:t.flightNumber}].filter(Boolean);return l.jsxs(tc,{ref:n,$position:o,children:[l.jsxs(nc,{children:[l.jsxs(rc,{children:[l.jsx(oc,{children:t.bookingNumber}),l.jsx(sc,{$type:d(),children:h()})]}),l.jsx(ic,{children:t.eventName}),t.client&&l.jsx(ac,{children:t.client})]}),l.jsxs(cc,{children:[l.jsxs(lc,{children:[l.jsxs(Pr,{children:[l.jsx(Ar,{children:c.startDate}),l.jsxs(Ir,{children:[l.jsx(Or,{children:t.startDate})," ",l.jsx(Yr,{children:t.startTime})]})]}),u&&t.endDate&&l.jsxs(Pr,{$isEnd:!0,children:[l.jsx(Ar,{children:c.endDate}),l.jsxs(Ir,{children:[l.jsx(Or,{children:t.endDate})," ",l.jsx(Yr,{children:t.endTime})]})]})]}),g.length>0&&l.jsx(dc,{children:g.map((b,v)=>l.jsxs(uc,{children:[l.jsx(fc,{children:b.label}),l.jsx(hc,{children:b.value})]},v))}),(t.serviceNotes||t.reservationNotes)&&l.jsxs(pc,{children:[t.serviceNotes&&l.jsxs(Lr,{children:[l.jsx(Nr,{children:c.serviceNotes}),l.jsx(Fr,{children:t.serviceNotes})]}),t.reservationNotes&&l.jsxs(Lr,{children:[l.jsx(Nr,{children:c.reservationNotes}),l.jsx(Fr,{children:t.reservationNotes})]})]})]})]})},yc=M.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`,vc=M.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({theme:e})=>e.mode==="light"?"4px":"34px"};
  transition: left 0.3s ease;
`,bc=M.div`
  position: absolute;
  top: 5px;
  left: ${({theme:e})=>e.mode==="light"?"38px":"4px"};
  transition: left 0.3s ease;
`,xc=({toggleTheme:e})=>{const r=Ze();return l.jsxs(yc,{onClick:e,children:[l.jsx(vc,{}),l.jsx(bc,{children:r.mode==="light"?l.jsx(Oe,{iconName:"sun",height:"16",width:"16"}):l.jsx(Oe,{iconName:"moon",height:"16",width:"16"})})]})},wc=M.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,Sc=M.div`
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
`,Cc=M.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,Wr=M.p`
  ${qe}
  ${Qe}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,Mc=M.p`
  ${qe}
  ${Qe}
`,kc=M.div`
  position: sticky;
  left: ${$e+16}px;
  overflow: hidden;
`,Dc=M.div`
  position: absolute;
  height: ${Gt}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,$c=M.div`
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
`,Ec=M.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,_c=M.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,Tc=M.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,Hr=M.div`
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
`,Br=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,zr=M.div`
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
`,Zr=M.div`
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
`,jr=M.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,Pc=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:i,resourceOnly:c,separatorRowIndices:u=[]})=>{const a=He(),d=A=>{let f=0;for(const y of u)y<=A&&f++;return A*ue+f*ke},[h,g]=p.useState(null),[b,v]=p.useState(0),k=p.useCallback((A=400,f=300)=>{const S=t.width,T=48,P=document.getElementById("react-scheduler");if(!P)return{x:r.x+S+16,y:r.y};const Z=P.scrollLeft,K=P.scrollTop,U=P.clientWidth,D=P.clientHeight,E=r.x-Z,$=r.y-K,N={left:$e+16,right:U-16,top:16,bottom:D-16},O=N.right-(E+S),Q=E-N.left,ee=N.bottom-($+T),se=$-N.top;let oe,z;return O>=A+16?oe=E+S+16:Q>=A+16?oe=E-A-16:O>=Q?(oe=E+S+16,oe+A>N.right&&(oe=N.right-A)):(oe=E-A-16,oe<N.left&&(oe=N.left)),ee>=f+16?z=$+T+16:se>=f+16?z=$-f-16:ee>=se?(z=$+T+16,z+f>N.bottom&&(z=N.bottom-f)):(z=$-f-16,z<N.top&&(z=N.top)),oe=Math.max(N.left,Math.min(oe,N.right-A)),z=Math.max(N.top,Math.min(z,N.bottom-f)),{x:oe+Z,y:z+K}},[r.x,r.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&b===0?v(r.x):s==="idle"&&v(0)},[s,e,r.x,b]),p.useEffect(()=>{g(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const m=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const A=[];let f=0;for(const y of i){const S=Math.max(y.data.length,1);if(y.capacity!==void 0&&e.totalPassengers>y.capacity)for(let T=0;T<S;T++)A.push(f+T);f+=S}return A},[e,i,s]);if(!e||s==="idle"||s==="potential")return null;const W=s==="animating",q=Mr(e.bgColor??""),j=()=>{if(!n)return"";const A=_(n.startDate).format("MMM D, HH:mm"),f=_(n.endDate).format("HH:mm");return`${A} - ${f}`};return l.jsxs(wc,{children:[m.map(A=>l.jsx(_c,{style:{top:`${d(A)}px`,height:`${ue}px`}},A)),n&&s==="dragging"&&l.jsx(Ec,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${d(n.resourceIndex)}px`,height:`${ue}px`}}),n&&s==="dragging"&&!c&&l.jsxs(l.Fragment,{children:[l.jsx(Dc,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${d(n.resourceIndex)+(ue-48)/2}px`,width:`${t.width}px`}}),l.jsx($c,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${d(n.resourceIndex)+(ue-48)/2}px`},children:j()})]}),n&&s==="dragging"&&c&&l.jsx(Tc,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${d(n.resourceIndex)}px`,height:`${ue}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const A=k(400,300);return l.jsxs(Hr,{style:{left:`${A.x}px`,top:`${A.y}px`},children:[l.jsxs(Br,{children:[l.jsx(zr,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?a.conflicts.detectedPlural:a.conflicts.detected," ",a.conflicts.detectedSuffix]}),l.jsx(Zr,{children:n.conflicts.map((f,y)=>{const S=_(n.startDate).format("YYYY-MM-DD"),T=_(n.endDate).format("YYYY-MM-DD"),P=_(f.event.startDate).format("YYYY-MM-DD"),Z=_(f.event.endDate).format("YYYY-MM-DD"),K=_(f.conflictStart).format("YYYY-MM-DD"),U=_(f.conflictEnd).format("YYYY-MM-DD"),D=S!==T,E=P!==Z,$=K!==U,N=D?_(n.startDate).format("MMM D, h:mm A"):_(n.startDate).format("h:mm A"),O=D?_(n.endDate).format("MMM D, h:mm A"):_(n.endDate).format("h:mm A"),Q=E?_(f.event.startDate).format("MMM D, h:mm A"):_(f.event.startDate).format("h:mm A"),ee=E?_(f.event.endDate).format("MMM D, h:mm A"):_(f.event.endDate).format("h:mm A"),se=$?_(f.conflictStart).format("MMM D, h:mm A"):_(f.conflictStart).format("h:mm A"),oe=$?_(f.conflictEnd).format("MMM D, h:mm A"):_(f.conflictEnd).format("h:mm A"),z=$?"":_(f.conflictStart).format("MMM D"),V=n.startDate.getTime(),G=n.endDate.getTime(),X=f.event.startDate.getTime(),w=f.event.endDate.getTime(),F=V>=X&&V<w,x=G>X&&G<=w,Y=V<=X&&G>=w,B=X<=V&&w>=G;let I=!1,C=!1,R=!1,L=!1,J="";return Y||B?(I=!0,C=!0,R=!0,L=!0,J=`⚠️ ${a.conflicts.changeBoth}`):F&&x?(I=!0,C=!0,R=!0,L=!0,J=`⚠️ ${a.conflicts.changeBoth}`):F?(I=!0,L=!0,J=`⚠️ ${a.conflicts.changeStart}`):x&&(C=!0,R=!0,J=`⚠️ ${a.conflicts.changeEnd}`),l.jsxs(vn,{children:[l.jsxs(bn,{children:[a.conflicts.conflictsWith,": ",f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),l.jsxs(it,{children:[l.jsx("strong",{children:e.title})," ",a.conflicts.movingTo,":"," ",I?l.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:N}):N," ",a.conflicts.to," ",C?l.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:O}):O]}),l.jsxs(it,{children:[l.jsx("strong",{children:f.event.title})," ",a.conflicts.currentlyAt,":"," ",R?l.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:Q}):Q," ",a.conflicts.to," ",L?l.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:ee}):ee]}),l.jsxs(jr,{children:[a.conflicts.conflictTime,": ",z&&`${z}, `,se," - ",oe]}),J&&l.jsx(it,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:J})]},y)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const A=k(400,400);return l.jsxs(Hr,{style:{left:`${A.x}px`,top:`${A.y}px`,borderColor:"#4CAF50"},children:[l.jsxs(Br,{style:{color:"#2E7D32"},children:[l.jsx(zr,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?a.conflicts.nearbyEvents:a.conflicts.nearbyEvent]}),l.jsxs(Zr,{children:[(()=>{const f=n.nearbyEvents.some(P=>P.position==="before"),y=n.nearbyEvents.some(P=>P.position==="after"),S=_(n.startDate).format("h:mm A"),T=_(n.endDate).format("h:mm A");return l.jsxs(vn,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[l.jsxs(bn,{style:{color:"#33691E"},children:[a.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),l.jsxs(it,{style:{fontWeight:600},children:[_(n.startDate).format("MMM D"),":"," ",f?l.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:S}):S," ",a.conflicts.to," ",y?l.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:T}):T]}),l.jsx(it,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:a.conflicts.sameDay})]})})(),n.nearbyEvents.map((f,y)=>{const S=_(f.event.startDate).format("YYYY-MM-DD"),T=_(f.event.endDate).format("YYYY-MM-DD"),P=S!==T,Z=P?_(f.event.startDate).format("MMM D, h:mm A"):_(f.event.startDate).format("h:mm A"),K=P?_(f.event.endDate).format("MMM D, h:mm A"):_(f.event.endDate).format("h:mm A"),U=_(f.event.startDate).format("MMM D"),D=Math.floor(f.timeGap/(1e3*60*60)),E=Math.floor(f.timeGap%(1e3*60*60)/(1e3*60)),$=D>0?`${D}h ${E}m`:`${E}m`,N=f.position==="after",O=f.position==="before";return l.jsxs(vn,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[l.jsxs(bn,{style:{color:"#1B5E20"},children:[f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),l.jsxs(it,{children:[!P&&`${U}: `,N?l.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:Z}):Z," ",a.conflicts.to," ",O?l.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:K}):K]}),l.jsxs(jr,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[$," ",f.position==="before"?a.conflicts.before:a.conflicts.after]})]},y)})]})]})})(),l.jsx(Sc,{$isAnimating:W,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:W?`${(h==null?void 0:h.x)??0}px`:"0",top:W?`${(h==null?void 0:h.y)??0}px`:"0",transform:W?void 0:`translate3d(${c?b:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:q},children:l.jsx(Cc,{children:l.jsxs(kc,{children:[l.jsx(Wr,{$bold:!0,children:e.title}),e.subtitle&&l.jsx(Wr,{children:e.subtitle}),e.description&&l.jsx(Mc,{children:e.description})]})})})]})},Ac=Ct`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,Ic=M.div`
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
  animation: ${Ac} 1.5s ease-in-out infinite;
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
`,Oc=({selectionBox:e,isSelecting:r})=>!e||!r?null:l.jsx(Ic,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),Yc=Ct`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Lc=M.div`
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
  animation: ${Yc} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,Nc=M.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,Fc=M.span`
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
`,Wc=M.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,Hc=M.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;M.div`
  display: none;
`,M.div`
  display: none;
`,M.button`
  display: none;
`;const Bc=M.div`
  display: flex;
  gap: 8px;
`,Vr=M.button`
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
`,zc=({selections:e,onConfirm:r,onClear:t})=>{var v;const o=He().multiSelect,s=p.useMemo(()=>e.filter(k=>k.hasConflict).length,[e]),i=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",c=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,u=(o==null?void 0:o.clearAll)||"Clear All",a=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",d=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((v=o==null?void 0:o.conflictsWarning)==null?void 0:v.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const g=s>0,b=l.jsxs(Lc,{$hasConflicts:g,"data-multi-select-ui":!0,children:[l.jsxs(Nc,{children:[l.jsxs(Fc,{$hasConflicts:g,children:[e.length," ",i]}),g&&l.jsxs(Wc,{children:["⚠️ ",h]}),l.jsx(Hc,{children:c})]}),l.jsxs(Bc,{children:[l.jsxs(Vr,{variant:"secondary",onClick:t,children:["✕ ",u]}),l.jsx(Vr,{variant:"primary",$hasConflicts:g,onClick:r,children:g?`⚠️ ${d}`:`✓ ${a}`})]})]});return Xr.createPortal(b,document.body)},Zc=Ct`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,jc=M.div`
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
  animation: ${Zc} 0.2s ease-out;
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
`,Vc=M.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,Gc=M.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,Xc=M.button`
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
`,Uc=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:i=[]})=>{const[c,u]=p.useState(null),[a,d]=p.useState({x:0,y:0}),h=p.useRef(null),g=p.useMemo(()=>{switch(t){case 0:return Ee*7;case 1:return ve;case 2:return we;default:return ve}},[t]),b=p.useMemo(()=>_().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),v=p.useMemo(()=>e.map((y,S)=>{let T=0,P=!1;for(const Q of r){if(Q.id===y.resourceId){P=!0;break}T+=Math.max(Q.data.length,1)}if(!P)return null;const Z=_(y.startDate),K=_(y.endDate);let U,D;switch(t){case 0:U=Math.floor(Z.diff(b,"days")/7),D=Math.max(1,Math.ceil(K.diff(Z,"days")/7)+1);break;case 1:U=Z.diff(b,"days"),D=Math.max(1,K.diff(Z,"days")+1);break;case 2:U=Z.diff(b,"hours"),D=Math.max(1,K.diff(Z,"hours")+1);break;default:U=0,D=1}const E=U*g;let $=0;for(const Q of i)Q<=T&&$++;const N=T*ue+$*ke,O=D*g;return{index:S,selection:y,x:E,y:N,width:O,height:ue}}),[e,r,t,b,g]),k=(y,S)=>{const T=_(y).format("MMM D"),P=_(S).format("MMM D");return T===P?T:`${T} - ${P}`},m=y=>!y.hasConflict||!y.conflicts?"":`⚠️ Conflicts with:
${y.conflicts.map(T=>{const P=(T.overlapDuration/36e5).toFixed(1);return`• ${T.event.title} (${P}h overlap)`}).join(`
`)}`,W=p.useCallback(y=>{let S=0;for(const T of r){const P=Math.max(T.data.length,1);if(y>=S*ue&&y<(S+P)*ue)return{resourceId:T.id,resourceLabel:T.label};S+=P}return null},[r]),q=p.useCallback(y=>{const S=Math.floor(y/g);switch(t){case 0:return b.add(S*7,"days").toDate();case 1:return b.add(S,"days").toDate();case 2:return b.add(S,"hours").toDate();default:return b.toDate()}},[t,b,g]),j=p.useCallback((y,S)=>{!s||(y.preventDefault(),y.stopPropagation(),!v[S])||(h.current={x:y.clientX,y:y.clientY},u(S),d({x:0,y:0}))},[s,v]),A=p.useCallback(y=>{if(c===null||!h.current)return;const S=y.clientX-h.current.x,T=y.clientY-h.current.y,P=Math.round(S/g)*g,Z=Math.round(T/ue)*ue;d({x:P,y:Z})},[c,g]),f=p.useCallback(()=>{if(c===null||!s){u(null),d({x:0,y:0}),h.current=null;return}const y=v[c];if(!y){u(null),d({x:0,y:0}),h.current=null;return}const S=y.x+a.x,T=y.y+a.y,P=W(T+ue/2);if(!P){u(null),d({x:0,y:0}),h.current=null;return}const Z=q(S),K=e[c],U=K.endDate.getTime()-K.startDate.getTime(),D=new Date(Z.getTime()+U);s(c,{startDate:Z,endDate:D,resourceId:P.resourceId,resourceLabel:P.resourceLabel}),u(null),d({x:0,y:0}),h.current=null},[c,a,v,e,s,W,q]);return p.useEffect(()=>{if(c!==null)return document.addEventListener("mousemove",A),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",f)}},[c,A,f]),l.jsx(l.Fragment,{children:v.map(y=>{if(!y)return null;const S=y.selection.hasConflict||!1,T=c===y.index,P=T?y.x+a.x:y.x,Z=T?y.y+a.y:y.y;return l.jsxs(jc,{$hasConflict:S,$isDragging:T,style:{left:P,top:Z,width:y.width,height:y.height},"data-multi-select-ui":!0,onMouseDown:K=>j(K,y.index),children:[S&&l.jsx(Gc,{title:m(y.selection),children:"⚠️"}),l.jsx(Vc,{$hasConflict:S,children:k(y.selection.startDate,y.selection.endDate)}),l.jsx(Xc,{onClick:K=>{K.stopPropagation(),o(y.index)},onMouseDown:K=>K.stopPropagation(),title:S?"Remove conflicting selection":"Remove selection",children:"×"})]},y.index)})})},Kc=M.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,Jc=({zoom:e,startDate:r})=>{const{cols:t}=We(),n=p.useMemo(()=>{if(e===2)return null;const o=e===0?Ee*7:ve,s=_().year(r.year).month(r.month).date(r.dayOfMonth).startOf("day"),i=_().startOf("day"),c=e===0?i.startOf("week").diff(s.startOf("week"),"week"):i.diff(s,"days");return c<0||c>=t?null:{x:c*o,width:o}},[e,r,t]);return n?l.jsx(Kc,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},_l="";Me.Scheduler=ji,Object.defineProperty(Me,Symbol.toStringTag,{value:"Module"})});
