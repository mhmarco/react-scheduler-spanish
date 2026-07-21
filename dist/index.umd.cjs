(function(Ae,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],i):(Ae=typeof globalThis<"u"?globalThis:Ae||self,i(Ae["react-scheduler"]={},Ae["react/jsx-runtime"],Ae.React,Ae.ReactDOM))})(this,function(Ae,i,p,uo){"use strict";var Wl=Object.defineProperty;var jl=(Ae,i,p)=>i in Ae?Wl(Ae,i,{enumerable:!0,configurable:!0,writable:!0,value:p}):Ae[i]=p;var lo=(Ae,i,p)=>(jl(Ae,typeof i!="symbol"?i+"":i,p),p);function fo(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const oe=fo(p);var Ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wt={},ho={get exports(){return wt},set exports(e){wt=e}},xe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn;function po(){if(Yn)return xe;Yn=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function $(m){if(typeof m=="object"&&m!==null){var N=m.$$typeof;switch(N){case e:switch(m=m.type,m){case t:case o:case n:case c:case u:return m;default:switch(m=m&&m.$$typeof,m){case l:case a:case d:case v:case h:case s:return m;default:return N}}case r:return N}}}return xe.ContextConsumer=a,xe.ContextProvider=s,xe.Element=e,xe.ForwardRef=d,xe.Fragment=t,xe.Lazy=v,xe.Memo=h,xe.Portal=r,xe.Profiler=o,xe.StrictMode=n,xe.Suspense=c,xe.SuspenseList=u,xe.isAsyncMode=function(){return!1},xe.isConcurrentMode=function(){return!1},xe.isContextConsumer=function(m){return $(m)===a},xe.isContextProvider=function(m){return $(m)===s},xe.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},xe.isForwardRef=function(m){return $(m)===d},xe.isFragment=function(m){return $(m)===t},xe.isLazy=function(m){return $(m)===v},xe.isMemo=function(m){return $(m)===h},xe.isPortal=function(m){return $(m)===r},xe.isProfiler=function(m){return $(m)===o},xe.isStrictMode=function(m){return $(m)===n},xe.isSuspense=function(m){return $(m)===c},xe.isSuspenseList=function(m){return $(m)===u},xe.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===t||m===o||m===n||m===c||m===u||m===M||typeof m=="object"&&m!==null&&(m.$$typeof===v||m.$$typeof===h||m.$$typeof===s||m.$$typeof===a||m.$$typeof===d||m.$$typeof===x||m.getModuleId!==void 0)},xe.typeOf=$,xe}var be={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ln;function mo(){return Ln||(Ln=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),x=!1,$=!1,m=!1,N=!1,X=!1,F;F=Symbol.for("react.module.reference");function P(T){return!!(typeof T=="string"||typeof T=="function"||T===t||T===o||X||T===n||T===c||T===u||N||T===M||x||$||m||typeof T=="object"&&T!==null&&(T.$$typeof===v||T.$$typeof===h||T.$$typeof===s||T.$$typeof===a||T.$$typeof===d||T.$$typeof===F||T.getModuleId!==void 0))}function f(T){if(typeof T=="object"&&T!==null){var j=T.$$typeof;switch(j){case e:var ne=T.type;switch(ne){case t:case o:case n:case c:case u:return ne;default:var R=ne&&ne.$$typeof;switch(R){case l:case a:case d:case v:case h:case s:return R;default:return j}}case r:return j}}}var y=a,S=s,_=e,w=d,E=t,W=v,Q=h,I=r,k=o,O=n,B=c,Y=u,U=!1,K=!1;function ee(T){return U||(U=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function re(T){return K||(K=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function L(T){return f(T)===a}function z(T){return f(T)===s}function J(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function te(T){return f(T)===d}function D(T){return f(T)===t}function Z(T){return f(T)===v}function C(T){return f(T)===h}function G(T){return f(T)===r}function V(T){return f(T)===o}function H(T){return f(T)===n}function g(T){return f(T)===c}function q(T){return f(T)===u}be.ContextConsumer=y,be.ContextProvider=S,be.Element=_,be.ForwardRef=w,be.Fragment=E,be.Lazy=W,be.Memo=Q,be.Portal=I,be.Profiler=k,be.StrictMode=O,be.Suspense=B,be.SuspenseList=Y,be.isAsyncMode=ee,be.isConcurrentMode=re,be.isContextConsumer=L,be.isContextProvider=z,be.isElement=J,be.isForwardRef=te,be.isFragment=D,be.isLazy=Z,be.isMemo=C,be.isPortal=G,be.isProfiler=V,be.isStrictMode=H,be.isSuspense=g,be.isSuspenseList=q,be.isValidElementType=P,be.typeOf=f}()),be}(function(e){process.env.NODE_ENV==="production"?e.exports=po():e.exports=mo()})(ho);function go(e){function r(L,z,J,te,D){for(var Z=0,C=0,G=0,V=0,H,g,q=0,T=0,j,ne=j=H=0,R=0,ae=0,he=0,de=0,ye=J.length,Ce=ye-1,ve,se="",fe="",$e="",ue="",me;R<ye;){if(g=J.charCodeAt(R),R===Ce&&C+V+G+Z!==0&&(C!==0&&(g=C===47?10:47),V=G=Z=0,ye++,Ce++),C+V+G+Z===0){if(R===Ce&&(0<ae&&(se=se.replace(v,"")),0<se.trim().length)){switch(g){case 32:case 9:case 59:case 13:case 10:break;default:se+=J.charAt(R)}g=59}switch(g){case 123:for(se=se.trim(),H=se.charCodeAt(0),j=1,de=++R;R<ye;){switch(g=J.charCodeAt(R)){case 123:j++;break;case 125:j--;break;case 47:switch(g=J.charCodeAt(R+1)){case 42:case 47:e:{for(ne=R+1;ne<Ce;++ne)switch(J.charCodeAt(ne)){case 47:if(g===42&&J.charCodeAt(ne-1)===42&&R+2!==ne){R=ne+1;break e}break;case 10:if(g===47){R=ne+1;break e}}R=ne}}break;case 91:g++;case 40:g++;case 34:case 39:for(;R++<Ce&&J.charCodeAt(R)!==g;);}if(j===0)break;R++}switch(j=J.substring(de,R),H===0&&(H=(se=se.replace(h,"").trim()).charCodeAt(0)),H){case 64:switch(0<ae&&(se=se.replace(v,"")),g=se.charCodeAt(1),g){case 100:case 109:case 115:case 45:ae=z;break;default:ae=B}if(j=r(z,ae,j,g,D+1),de=j.length,0<U&&(ae=t(B,se,he),me=l(3,j,ae,z,I,Q,de,g,D,te),se=ae.join(""),me!==void 0&&(de=(j=me.trim()).length)===0&&(g=0,j="")),0<de)switch(g){case 115:se=se.replace(y,a);case 100:case 109:case 45:j=se+"{"+j+"}";break;case 107:se=se.replace(X,"$1 $2"),j=se+"{"+j+"}",j=O===1||O===2&&s("@"+j,3)?"@-webkit-"+j+"@"+j:"@"+j;break;default:j=se+j,te===112&&(j=(fe+=j,""))}else j="";break;default:j=r(z,t(z,se,he),j,te,D+1)}$e+=j,j=he=ae=ne=H=0,se="",g=J.charCodeAt(++R);break;case 125:case 59:if(se=(0<ae?se.replace(v,""):se).trim(),1<(de=se.length))switch(ne===0&&(H=se.charCodeAt(0),H===45||96<H&&123>H)&&(de=(se=se.replace(" ",":")).length),0<U&&(me=l(1,se,z,L,I,Q,fe.length,te,D,te))!==void 0&&(de=(se=me.trim()).length)===0&&(se="\0\0"),H=se.charCodeAt(0),g=se.charCodeAt(1),H){case 0:break;case 64:if(g===105||g===99){ue+=se+J.charAt(R);break}default:se.charCodeAt(de-1)!==58&&(fe+=o(se,H,g,se.charCodeAt(2)))}he=ae=ne=H=0,se="",g=J.charCodeAt(++R)}}switch(g){case 13:case 10:C===47?C=0:1+H===0&&te!==107&&0<se.length&&(ae=1,se+="\0"),0<U*ee&&l(0,se,z,L,I,Q,fe.length,te,D,te),Q=1,I++;break;case 59:case 125:if(C+V+G+Z===0){Q++;break}default:switch(Q++,ve=J.charAt(R),g){case 9:case 32:if(V+Z+C===0)switch(q){case 44:case 58:case 9:case 32:ve="";break;default:g!==32&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:V+C+Z===0&&(ae=he=1,ve="\f"+ve);break;case 108:if(V+C+Z+k===0&&0<ne)switch(R-ne){case 2:q===112&&J.charCodeAt(R-3)===58&&(k=q);case 8:T===111&&(k=T)}break;case 58:V+C+Z===0&&(ne=R);break;case 44:C+G+V+Z===0&&(ae=1,ve+="\r");break;case 34:case 39:C===0&&(V=V===g?0:V===0?g:V);break;case 91:V+C+G===0&&Z++;break;case 93:V+C+G===0&&Z--;break;case 41:V+C+Z===0&&G--;break;case 40:if(V+C+Z===0){if(H===0)switch(2*q+3*T){case 533:break;default:H=1}G++}break;case 64:C+G+V+Z+ne+j===0&&(j=1);break;case 42:case 47:if(!(0<V+Z+G))switch(C){case 0:switch(2*g+3*J.charCodeAt(R+1)){case 235:C=47;break;case 220:de=R,C=42}break;case 42:g===47&&q===42&&de+2!==R&&(J.charCodeAt(de+2)===33&&(fe+=J.substring(de,R+1)),ve="",C=0)}}C===0&&(se+=ve)}T=q,q=g,R++}if(de=fe.length,0<de){if(ae=z,0<U&&(me=l(2,fe,ae,L,I,Q,de,te,D,te),me!==void 0&&(fe=me).length===0))return ue+fe+$e;if(fe=ae.join(",")+"{"+fe+"}",O*k!==0){switch(O!==2||s(fe,2)||(k=0),k){case 111:fe=fe.replace(P,":-moz-$1")+fe;break;case 112:fe=fe.replace(F,"::-webkit-input-$1")+fe.replace(F,"::-moz-$1")+fe.replace(F,":-ms-input-$1")+fe}k=0}}return ue+fe+$e}function t(L,z,J){var te=z.trim().split(m);z=te;var D=te.length,Z=L.length;switch(Z){case 0:case 1:var C=0;for(L=Z===0?"":L[0]+" ";C<D;++C)z[C]=n(L,z[C],J).trim();break;default:var G=C=0;for(z=[];C<D;++C)for(var V=0;V<Z;++V)z[G++]=n(L[V]+" ",te[C],J).trim()}return z}function n(L,z,J){var te=z.charCodeAt(0);switch(33>te&&(te=(z=z.trim()).charCodeAt(0)),te){case 38:return z.replace(N,"$1"+L.trim());case 58:return L.trim()+z.replace(N,"$1"+L.trim());default:if(0<1*J&&0<z.indexOf("\f"))return z.replace(N,(L.charCodeAt(0)===58?"":"$1")+L.trim())}return L+z}function o(L,z,J,te){var D=L+";",Z=2*z+3*J+4*te;if(Z===944){L=D.indexOf(":",9)+1;var C=D.substring(L,D.length-1).trim();return C=D.substring(0,L).trim()+C+";",O===1||O===2&&s(C,1)?"-webkit-"+C+C:C}if(O===0||O===2&&!s(D,1))return D;switch(Z){case 1015:return D.charCodeAt(10)===97?"-webkit-"+D+D:D;case 951:return D.charCodeAt(3)===116?"-webkit-"+D+D:D;case 963:return D.charCodeAt(5)===110?"-webkit-"+D+D:D;case 1009:if(D.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+D+D;case 978:return"-webkit-"+D+"-moz-"+D+D;case 1019:case 983:return"-webkit-"+D+"-moz-"+D+"-ms-"+D+D;case 883:if(D.charCodeAt(8)===45)return"-webkit-"+D+D;if(0<D.indexOf("image-set(",11))return D.replace(W,"$1-webkit-$2")+D;break;case 932:if(D.charCodeAt(4)===45)switch(D.charCodeAt(5)){case 103:return"-webkit-box-"+D.replace("-grow","")+"-webkit-"+D+"-ms-"+D.replace("grow","positive")+D;case 115:return"-webkit-"+D+"-ms-"+D.replace("shrink","negative")+D;case 98:return"-webkit-"+D+"-ms-"+D.replace("basis","preferred-size")+D}return"-webkit-"+D+"-ms-"+D+D;case 964:return"-webkit-"+D+"-ms-flex-"+D+D;case 1023:if(D.charCodeAt(8)!==99)break;return C=D.substring(D.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+C+"-webkit-"+D+"-ms-flex-pack"+C+D;case 1005:return x.test(D)?D.replace(M,":-webkit-")+D.replace(M,":-moz-")+D:D;case 1e3:switch(C=D.substring(13).trim(),z=C.indexOf("-")+1,C.charCodeAt(0)+C.charCodeAt(z)){case 226:C=D.replace(f,"tb");break;case 232:C=D.replace(f,"tb-rl");break;case 220:C=D.replace(f,"lr");break;default:return D}return"-webkit-"+D+"-ms-"+C+D;case 1017:if(D.indexOf("sticky",9)===-1)break;case 975:switch(z=(D=L).length-10,C=(D.charCodeAt(z)===33?D.substring(0,z):D).substring(L.indexOf(":",7)+1).trim(),Z=C.charCodeAt(0)+(C.charCodeAt(7)|0)){case 203:if(111>C.charCodeAt(8))break;case 115:D=D.replace(C,"-webkit-"+C)+";"+D;break;case 207:case 102:D=D.replace(C,"-webkit-"+(102<Z?"inline-":"")+"box")+";"+D.replace(C,"-webkit-"+C)+";"+D.replace(C,"-ms-"+C+"box")+";"+D}return D+";";case 938:if(D.charCodeAt(5)===45)switch(D.charCodeAt(6)){case 105:return C=D.replace("-items",""),"-webkit-"+D+"-webkit-box-"+C+"-ms-flex-"+C+D;case 115:return"-webkit-"+D+"-ms-flex-item-"+D.replace(_,"")+D;default:return"-webkit-"+D+"-ms-flex-line-pack"+D.replace("align-content","").replace(_,"")+D}break;case 973:case 989:if(D.charCodeAt(3)!==45||D.charCodeAt(4)===122)break;case 931:case 953:if(E.test(L)===!0)return(C=L.substring(L.indexOf(":")+1)).charCodeAt(0)===115?o(L.replace("stretch","fill-available"),z,J,te).replace(":fill-available",":stretch"):D.replace(C,"-webkit-"+C)+D.replace(C,"-moz-"+C.replace("fill-",""))+D;break;case 962:if(D="-webkit-"+D+(D.charCodeAt(5)===102?"-ms-"+D:"")+D,J+te===211&&D.charCodeAt(13)===105&&0<D.indexOf("transform",10))return D.substring(0,D.indexOf(";",27)+1).replace($,"$1-webkit-$2")+D}return D}function s(L,z){var J=L.indexOf(z===1?":":"{"),te=L.substring(0,z!==3?J:10);return J=L.substring(J+1,L.length-1),K(z!==2?te:te.replace(w,"$1"),J,z)}function a(L,z){var J=o(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return J!==z+";"?J.replace(S," or ($1)").substring(4):"("+z+")"}function l(L,z,J,te,D,Z,C,G,V,H){for(var g=0,q=z,T;g<U;++g)switch(T=Y[g].call(u,L,q,J,te,D,Z,C,G,V,H)){case void 0:case!1:case!0:case null:break;default:q=T}if(q!==z)return q}function d(L){switch(L){case void 0:case null:U=Y.length=0;break;default:if(typeof L=="function")Y[U++]=L;else if(typeof L=="object")for(var z=0,J=L.length;z<J;++z)d(L[z]);else ee=!!L|0}return d}function c(L){return L=L.prefix,L!==void 0&&(K=null,L?typeof L!="function"?O=1:(O=2,K=L):O=0),c}function u(L,z){var J=L;if(33>J.charCodeAt(0)&&(J=J.trim()),re=J,J=[re],0<U){var te=l(-1,z,J,J,I,Q,0,0,0,0);te!==void 0&&typeof te=="string"&&(z=te)}var D=r(B,J,z,0,0);return 0<U&&(te=l(-2,D,J,J,I,Q,D.length,0,0,0),te!==void 0&&(D=te)),re="",k=0,Q=I=1,D}var h=/^\0+/g,v=/[\0\r\f]/g,M=/: */g,x=/zoo|gra/,$=/([,: ])(transform)/g,m=/,\r+?/g,N=/([\t\r\n ])*\f?&/g,X=/@(k\w+)\s*(\S*)\s*/,F=/::(place)/g,P=/:(read-only)/g,f=/[svh]\w+-[tblr]{2}/,y=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,_=/-self|flex-/g,w=/[^]*?(:[rp][el]a[\w-]+)[^]*/,E=/stretch|:\s*\w+\-(?:conte|avail)/,W=/([^-])(image-set\()/,Q=1,I=1,k=0,O=1,B=[],Y=[],U=0,K=null,ee=0,re="";return u.use=d,u.set=c,e!==void 0&&c(e),u}var yo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function vo(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var xo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Nn=vo(function(e){return xo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Gt={},bo={get exports(){return Gt},set exports(e){Gt=e}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fn;function wo(){if(Fn)return we;Fn=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,M=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,$=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,X=e?Symbol.for("react.scope"):60119;function F(f){if(typeof f=="object"&&f!==null){var y=f.$$typeof;switch(y){case r:switch(f=f.type,f){case d:case c:case n:case s:case o:case h:return f;default:switch(f=f&&f.$$typeof,f){case l:case u:case x:case M:case a:return f;default:return y}}case t:return y}}}function P(f){return F(f)===c}return we.AsyncMode=d,we.ConcurrentMode=c,we.ContextConsumer=l,we.ContextProvider=a,we.Element=r,we.ForwardRef=u,we.Fragment=n,we.Lazy=x,we.Memo=M,we.Portal=t,we.Profiler=s,we.StrictMode=o,we.Suspense=h,we.isAsyncMode=function(f){return P(f)||F(f)===d},we.isConcurrentMode=P,we.isContextConsumer=function(f){return F(f)===l},we.isContextProvider=function(f){return F(f)===a},we.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===r},we.isForwardRef=function(f){return F(f)===u},we.isFragment=function(f){return F(f)===n},we.isLazy=function(f){return F(f)===x},we.isMemo=function(f){return F(f)===M},we.isPortal=function(f){return F(f)===t},we.isProfiler=function(f){return F(f)===s},we.isStrictMode=function(f){return F(f)===o},we.isSuspense=function(f){return F(f)===h},we.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===n||f===c||f===s||f===o||f===h||f===v||typeof f=="object"&&f!==null&&(f.$$typeof===x||f.$$typeof===M||f.$$typeof===a||f.$$typeof===l||f.$$typeof===u||f.$$typeof===m||f.$$typeof===N||f.$$typeof===X||f.$$typeof===$)},we.typeOf=F,we}var Se={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bn;function So(){return Bn||(Bn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,M=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,$=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,X=e?Symbol.for("react.scope"):60119;function F(g){return typeof g=="string"||typeof g=="function"||g===n||g===c||g===s||g===o||g===h||g===v||typeof g=="object"&&g!==null&&(g.$$typeof===x||g.$$typeof===M||g.$$typeof===a||g.$$typeof===l||g.$$typeof===u||g.$$typeof===m||g.$$typeof===N||g.$$typeof===X||g.$$typeof===$)}function P(g){if(typeof g=="object"&&g!==null){var q=g.$$typeof;switch(q){case r:var T=g.type;switch(T){case d:case c:case n:case s:case o:case h:return T;default:var j=T&&T.$$typeof;switch(j){case l:case u:case x:case M:case a:return j;default:return q}}case t:return q}}}var f=d,y=c,S=l,_=a,w=r,E=u,W=n,Q=x,I=M,k=t,O=s,B=o,Y=h,U=!1;function K(g){return U||(U=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ee(g)||P(g)===d}function ee(g){return P(g)===c}function re(g){return P(g)===l}function L(g){return P(g)===a}function z(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function J(g){return P(g)===u}function te(g){return P(g)===n}function D(g){return P(g)===x}function Z(g){return P(g)===M}function C(g){return P(g)===t}function G(g){return P(g)===s}function V(g){return P(g)===o}function H(g){return P(g)===h}Se.AsyncMode=f,Se.ConcurrentMode=y,Se.ContextConsumer=S,Se.ContextProvider=_,Se.Element=w,Se.ForwardRef=E,Se.Fragment=W,Se.Lazy=Q,Se.Memo=I,Se.Portal=k,Se.Profiler=O,Se.StrictMode=B,Se.Suspense=Y,Se.isAsyncMode=K,Se.isConcurrentMode=ee,Se.isContextConsumer=re,Se.isContextProvider=L,Se.isElement=z,Se.isForwardRef=J,Se.isFragment=te,Se.isLazy=D,Se.isMemo=Z,Se.isPortal=C,Se.isProfiler=G,Se.isStrictMode=V,Se.isSuspense=H,Se.isValidElementType=F,Se.typeOf=P}()),Se}(function(e){process.env.NODE_ENV==="production"?e.exports=wo():e.exports=So()})(bo);var Xt=Gt,Co={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Mo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ko={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ut={};Ut[Xt.ForwardRef]=ko,Ut[Xt.Memo]=Hn;function zn(e){return Xt.isMemo(e)?Hn:Ut[e.$$typeof]||Co}var $o=Object.defineProperty,Do=Object.getOwnPropertyNames,Wn=Object.getOwnPropertySymbols,Eo=Object.getOwnPropertyDescriptor,_o=Object.getPrototypeOf,jn=Object.prototype;function Zn(e,r,t){if(typeof r!="string"){if(jn){var n=_o(r);n&&n!==jn&&Zn(e,n,t)}var o=Do(r);Wn&&(o=o.concat(Wn(r)));for(var s=zn(e),a=zn(r),l=0;l<o.length;++l){var d=o[l];if(!Mo[d]&&!(t&&t[d])&&!(a&&a[d])&&!(s&&s[d])){var c=Eo(r,d);try{$o(e,d,c)}catch{}}}}return e}var To=Zn;function Le(){return(Le=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Vn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},Kt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!wt.typeOf(e)},_t=Object.freeze([]),Ue=Object.freeze({});function rt(e){return typeof e=="function"}function qt(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Jt(e){return e&&typeof e.styledComponentId=="string"}var ot=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Qt=typeof window<"u"&&"HTMLElement"in window,Ao=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),Po={},Oo=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function Io(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Be(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(Io.apply(void 0,[Oo[e]].concat(t)).trim())}var Yo=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,a=s;t>=a;)(a<<=1)<0&&Be(16,""+t);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(t+1),c=0,u=n.length;c<u;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[t]++,d++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var a=o;a<s;a++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),a=s+o,l=s;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),Tt=new Map,At=new Map,St=1,Pt=function(e){if(Tt.has(e))return Tt.get(e);for(;At.has(St);)St++;var r=St++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&Be(16,""+r),Tt.set(e,r),At.set(r,e),r},Lo=function(e){return At.get(e)},No=function(e,r){r>=St&&(St=r+1),Tt.set(e,r),At.set(r,e)},Fo="style["+ot+'][data-styled-version="5.3.8"]',Bo=new RegExp("^"+ot+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ho=function(e,r,t){for(var n,o=t.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(r,n)},zo=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var a=t[o].trim();if(a){var l=a.match(Bo);if(l){var d=0|parseInt(l[1],10),c=l[2];d!==0&&(No(c,d),Ho(e,c,l[3]),e.getTag().insertRules(d,n)),n.length=0}else n.push(a)}}},Wo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Gn=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(l){for(var d=l.childNodes,c=d.length;c>=0;c--){var u=d[c];if(u&&u.nodeType===1&&u.hasAttribute(ot))return u}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(ot,"active"),n.setAttribute("data-styled-version","5.3.8");var a=Wo();return a&&n.setAttribute("nonce",a),t.insertBefore(n,s),n},jo=function(){function e(t){var n=this.element=Gn(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var d=s[a];if(d.ownerNode===o)return d}Be(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),Zo=function(){function e(t){var n=this.element=Gn(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Vo=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Xn=Qt,Go={isServer:!Qt,useCSSOMInjection:!Ao},Ot=function(){function e(t,n,o){t===void 0&&(t=Ue),n===void 0&&(n={}),this.options=Le({},Go,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Qt&&Xn&&(Xn=!1,function(s){for(var a=document.querySelectorAll(Fo),l=0,d=a.length;l<d;l++){var c=a[l];c&&c.getAttribute(ot)!=="active"&&(zo(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return Pt(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Le({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,a=n.target,t=o?new Vo(a):s?new jo(a):new Zo(a),new Yo(t)));var t,n,o,s,a},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(Pt(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(Pt(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(Pt(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",a=0;a<o;a++){var l=Lo(a);if(l!==void 0){var d=t.names.get(l),c=n.getGroup(a);if(d&&c&&d.size){var u=ot+".g"+a+'[id="'+l+'"]',h="";d!==void 0&&d.forEach(function(v){v.length>0&&(h+=v+",")}),s+=""+c+u+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),Xo=/(a)(d)/gi,Un=function(e){return String.fromCharCode(e+(e>25?39:97))};function Rt(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=Un(r%52)+t;return(Un(r%52)+t).replace(Xo,"$1-$2")}var Je=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},Kn=function(e){return Je(5381,e)};function qn(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(rt(t)&&!Jt(t))return!1}return!0}var Uo=Kn("5.3.8"),Ko=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&qn(r),this.componentId=t,this.baseHash=Je(Uo,t),this.baseStyle=n,Ot.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var a=Qe(this.rules,r,t,n).join(""),l=Rt(Je(this.baseHash,a)>>>0);if(!t.hasNameForId(o,l)){var d=n(a,"."+l,void 0,o);t.insertRules(o,l,d)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,u=Je(this.baseHash,n.hash),h="",v=0;v<c;v++){var M=this.rules[v];if(typeof M=="string")h+=M,process.env.NODE_ENV!=="production"&&(u=Je(u,M+v));else if(M){var x=Qe(M,r,t,n),$=Array.isArray(x)?x.join(""):x;u=Je(u,$+v),h+=$}}if(h){var m=Rt(u>>>0);if(!t.hasNameForId(o,m)){var N=n(h,"."+m,void 0,o);t.insertRules(o,m,N)}s.push(m)}}return s.join(" ")},e}(),qo=/^\s*\/\/.*$/gm,Jo=[":","[",".","#"];function Qo(e){var r,t,n,o,s=e===void 0?Ue:e,a=s.options,l=a===void 0?Ue:a,d=s.plugins,c=d===void 0?_t:d,u=new go(l),h=[],v=function($){function m(N){if(N)try{$(N+"}")}catch{}}return function(N,X,F,P,f,y,S,_,w,E){switch(N){case 1:if(w===0&&X.charCodeAt(0)===64)return $(X+";"),"";break;case 2:if(_===0)return X+"/*|*/";break;case 3:switch(_){case 102:case 112:return $(F[0]+X),"";default:return X+(E===0?"/*|*/":"")}case-2:X.split("/*|*/}").forEach(m)}}}(function($){h.push($)}),M=function($,m,N){return m===0&&Jo.indexOf(N[t.length])!==-1||N.match(o)?$:"."+r};function x($,m,N,X){X===void 0&&(X="&");var F=$.replace(qo,""),P=m&&N?N+" "+m+" { "+F+" }":F;return r=X,t=m,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),u(N||!m?"":m,P)}return u.use([].concat(c,[function($,m,N){$===2&&N.length&&N[0].lastIndexOf(t)>0&&(N[0]=N[0].replace(n,M))},v,function($){if($===-2){var m=h;return h=[],m}}])),x.hash=c.length?c.reduce(function($,m){return m.name||Be(15),Je($,m.name)},5381).toString():"",x}var Jn=p.createContext();Jn.Consumer;var Qn=p.createContext(),Ro=(Qn.Consumer,new Ot),en=Qo();function Rn(){return p.useContext(Jn)||Ro}function er(){return p.useContext(Qn)||en}var tr=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=en);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.toString=function(){return Be(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=en),this.name+r.hash},e}(),es=/([A-Z])/,ts=/([A-Z])/g,ns=/^ms-/,rs=function(e){return"-"+e.toLowerCase()};function nr(e){return es.test(e)?e.replace(ts,rs).replace(ns,"-ms-"):e}var rr=function(e){return e==null||e===!1||e===""};function Qe(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],a=0,l=e.length;a<l;a+=1)(o=Qe(e[a],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(rr(e))return"";if(Jt(e))return"."+e.styledComponentId;if(rt(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!r)return e;var d=e(r);return process.env.NODE_ENV!=="production"&&wt.isElement(d)&&console.warn(qt(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Qe(d,r,t,n)}var c;return e instanceof tr?t?(e.inject(t,n),e.getName(n)):e:Kt(e)?function u(h,v){var M,x,$=[];for(var m in h)h.hasOwnProperty(m)&&!rr(h[m])&&(Array.isArray(h[m])&&h[m].isCss||rt(h[m])?$.push(nr(m)+":",h[m],";"):Kt(h[m])?$.push.apply($,u(h[m],m)):$.push(nr(m)+": "+(M=m,(x=h[m])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||M in yo?String(x).trim():x+"px")+";"));return v?[v+" {"].concat($,["}"]):$}(e):e.toString()}var or=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function st(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return rt(e)||Kt(e)?or(Qe(Vn(_t,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:or(Qe(Vn(e,t)))}var sr=/invalid hook call/i,It=new Set,ir=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(sr.test(s))o=!1,It.delete(t);else{for(var a=arguments.length,l=new Array(a>1?a-1:0),d=1;d<a;d++)l[d-1]=arguments[d];n.apply(void 0,[s].concat(l))}},p.useRef(),o&&!It.has(t)&&(console.warn(t),It.add(t))}catch(s){sr.test(s.message)&&It.delete(t)}finally{console.error=n}}},ar=function(e,r,t){return t===void 0&&(t=Ue),e.theme!==t.theme&&e.theme||r||t.theme},os=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ss=/(^-|-$)/g;function tn(e){return e.replace(os,"-").replace(ss,"")}var nn=function(e){return Rt(Kn(e)>>>0)};function Yt(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var rn=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},is=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function as(e,r,t){var n=e[t];rn(r)&&rn(n)?cr(n,r):e[t]=r}function cr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var a=s[o];if(rn(a))for(var l in a)is(l)&&as(e,a[l],l)}return e}var it=p.createContext();it.Consumer;function cs(e){var r=p.useContext(it),t=p.useMemo(function(){return function(n,o){if(!n)return Be(14);if(rt(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Be(7)}return Array.isArray(n)||typeof n!="object"?Be(8):o?Le({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?p.createElement(it.Provider,{value:t},e.children):null}var on={};function lr(e,r,t){var n=Jt(e),o=!Yt(e),s=r.attrs,a=s===void 0?_t:s,l=r.componentId,d=l===void 0?function(X,F){var P=typeof X!="string"?"sc":tn(X);on[P]=(on[P]||0)+1;var f=P+"-"+nn("5.3.8"+P+on[P]);return F?F+"-"+f:f}(r.displayName,r.parentComponentId):l,c=r.displayName,u=c===void 0?function(X){return Yt(X)?"styled."+X:"Styled("+qt(X)+")"}(e):c,h=r.displayName&&r.componentId?tn(r.displayName)+"-"+r.componentId:r.componentId||d,v=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,M=r.shouldForwardProp;n&&e.shouldForwardProp&&(M=r.shouldForwardProp?function(X,F,P){return e.shouldForwardProp(X,F,P)&&r.shouldForwardProp(X,F,P)}:e.shouldForwardProp);var x,$=new Ko(t,h,n?e.componentStyle:void 0),m=$.isStatic&&a.length===0,N=function(X,F){return function(P,f,y,S){var _=P.attrs,w=P.componentStyle,E=P.defaultProps,W=P.foldedComponentIds,Q=P.shouldForwardProp,I=P.styledComponentId,k=P.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(I);var O=function(te,D,Z){te===void 0&&(te=Ue);var C=Le({},D,{theme:te}),G={};return Z.forEach(function(V){var H,g,q,T=V;for(H in rt(T)&&(T=T(C)),T)C[H]=G[H]=H==="className"?(g=G[H],q=T[H],g&&q?g+" "+q:g||q):T[H]}),[C,G]}(ar(f,p.useContext(it),E)||Ue,f,_),B=O[0],Y=O[1],U=function(te,D,Z,C){var G=Rn(),V=er(),H=D?te.generateAndInjectStyles(Ue,G,V):te.generateAndInjectStyles(Z,G,V);return process.env.NODE_ENV!=="production"&&p.useDebugValue(H),process.env.NODE_ENV!=="production"&&!D&&C&&C(H),H}(w,S,B,process.env.NODE_ENV!=="production"?P.warnTooManyClasses:void 0),K=y,ee=Y.$as||f.$as||Y.as||f.as||k,re=Yt(ee),L=Y!==f?Le({},f,{},Y):f,z={};for(var J in L)J[0]!=="$"&&J!=="as"&&(J==="forwardedAs"?z.as=L[J]:(Q?Q(J,Nn,ee):!re||Nn(J))&&(z[J]=L[J]));return f.style&&Y.style!==f.style&&(z.style=Le({},f.style,{},Y.style)),z.className=Array.prototype.concat(W,I,U!==I?U:null,f.className,Y.className).filter(Boolean).join(" "),z.ref=K,p.createElement(ee,z)}(x,X,F,m)};return N.displayName=u,(x=p.forwardRef(N)).attrs=v,x.componentStyle=$,x.displayName=u,x.shouldForwardProp=M,x.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):_t,x.styledComponentId=h,x.target=n?e.target:e,x.withComponent=function(X){var F=r.componentId,P=function(y,S){if(y==null)return{};var _,w,E={},W=Object.keys(y);for(w=0;w<W.length;w++)_=W[w],S.indexOf(_)>=0||(E[_]=y[_]);return E}(r,["componentId"]),f=F&&F+"-"+(Yt(X)?X:tn(qt(X)));return lr(X,Le({},P,{attrs:v,componentId:f}),t)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=n?cr({},e.defaultProps,X):X}}),process.env.NODE_ENV!=="production"&&(ir(u,h),x.warnTooManyClasses=function(X,F){var P={},f=!1;return function(y){if(!f&&(P[y]=!0,Object.keys(P).length>=200)){var S=F?' with the id of "'+F+'"':"";console.warn("Over 200 classes were generated for component "+X+S+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),f=!0,P={}}}}(u,h)),x.toString=function(){return"."+x.styledComponentId},o&&To(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var sn=function(e){return function r(t,n,o){if(o===void 0&&(o=Ue),!wt.isValidElementType(n))return Be(1,String(n));var s=function(){return t(n,o,st.apply(void 0,arguments))};return s.withConfig=function(a){return r(t,n,Le({},o,{},a))},s.attrs=function(a){return r(t,n,Le({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},s}(lr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){sn[e]=sn(e)});var ls=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=qn(t),Ot.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var a=s(Qe(this.rules,n,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,a)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&Ot.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function ds(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=st.apply(void 0,[e].concat(t)),s="sc-global-"+nn(JSON.stringify(o)),a=new ls(o,s);function l(c){var u=Rn(),h=er(),v=p.useContext(it),M=p.useRef(u.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(x){return typeof x=="string"&&x.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),u.server&&d(M,c,u,v,h),p.useLayoutEffect(function(){if(!u.server)return d(M,c,u,v,h),function(){return a.removeStyles(M,u)}},[M,c,u,v,h]),null}function d(c,u,h,v,M){if(a.isStatic)a.renderStyles(c,Po,h,M);else{var x=Le({},u,{theme:ar(u,v,l.defaultProps)});a.renderStyles(c,x,h,M)}}return process.env.NODE_ENV!=="production"&&ir(s),p.memo(l)}function He(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=st.apply(void 0,[e].concat(t)).join(""),s=nn(o);return new tr(s,o)}var Lt=function(){return p.useContext(it)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const b=sn,Ct="reactSchedulerOutsideWrapper",Ne="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",us=ds`

  #${Ct} {
    font-family: ${Ne};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Ct} *,
 #${Ct} *:before,
 #${Ct} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,fs={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},hs={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},at=`
margin: 0;
padding: 0;
`,ct=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;b.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const ke=50,ze=24,lt=16,Re=40,dt=Re+lt+ze,ut=84,pe=56,Pe=196,Ie=12,_e=50,ft=24,Mt=16,an=40,ps=ft+Mt+an,dr=24,ur=52,Fe={topRow:`600 14px ${Ne}`,middleRow:`400 10px ${Ne}`,bottomRow:{name:`600 14px ${Ne}`,number:`600 10px ${Ne}`,hoursInDay:`400 9px ${Ne}`}},ht=3,ms=1.6,gs=4.5,cn=12,Nt=24,ys="reactSchedulerCanvasHeaderWrapper",fr="reactSchedulerCanvasWrapper",We=Ct,vs=4,ln=48,Ke=5,xs=40,hr=8,dn=ze/2+2,pr=lt/2+ze+1,mr=2,De=60,Oe=21,gr=58,yr="reactSchedulerBody";var et={},bs={get exports(){return et},set exports(e){et=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",a="second",l="minute",d="hour",c="day",u="week",h="month",v="quarter",M="year",x="date",$="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,N=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(I){var k=["th","st","nd","rd"],O=I%100;return"["+I+(k[(O-20)%10]||k[O]||k[0])+"]"}},F=function(I,k,O){var B=String(I);return!B||B.length>=k?I:""+Array(k+1-B.length).join(O)+I},P={s:F,z:function(I){var k=-I.utcOffset(),O=Math.abs(k),B=Math.floor(O/60),Y=O%60;return(k<=0?"+":"-")+F(B,2,"0")+":"+F(Y,2,"0")},m:function I(k,O){if(k.date()<O.date())return-I(O,k);var B=12*(O.year()-k.year())+(O.month()-k.month()),Y=k.clone().add(B,h),U=O-Y<0,K=k.clone().add(B+(U?-1:1),h);return+(-(B+(O-Y)/(U?Y-K:K-Y))||0)},a:function(I){return I<0?Math.ceil(I)||0:Math.floor(I)},p:function(I){return{M:h,y:M,w:u,d:c,D:x,h:d,m:l,s:a,ms:s,Q:v}[I]||String(I||"").toLowerCase().replace(/s$/,"")},u:function(I){return I===void 0}},f="en",y={};y[f]=X;var S=function(I){return I instanceof W},_=function I(k,O,B){var Y;if(!k)return f;if(typeof k=="string"){var U=k.toLowerCase();y[U]&&(Y=U),O&&(y[U]=O,Y=U);var K=k.split("-");if(!Y&&K.length>1)return I(K[0])}else{var ee=k.name;y[ee]=k,Y=ee}return!B&&Y&&(f=Y),Y||!B&&f},w=function(I,k){if(S(I))return I.clone();var O=typeof k=="object"?k:{};return O.date=I,O.args=arguments,new W(O)},E=P;E.l=_,E.i=S,E.w=function(I,k){return w(I,{locale:k.$L,utc:k.$u,x:k.$x,$offset:k.$offset})};var W=function(){function I(O){this.$L=_(O.locale,null,!0),this.parse(O)}var k=I.prototype;return k.parse=function(O){this.$d=function(B){var Y=B.date,U=B.utc;if(Y===null)return new Date(NaN);if(E.u(Y))return new Date;if(Y instanceof Date)return new Date(Y);if(typeof Y=="string"&&!/Z$/i.test(Y)){var K=Y.match(m);if(K){var ee=K[2]-1||0,re=(K[7]||"0").substring(0,3);return U?new Date(Date.UTC(K[1],ee,K[3]||1,K[4]||0,K[5]||0,K[6]||0,re)):new Date(K[1],ee,K[3]||1,K[4]||0,K[5]||0,K[6]||0,re)}}return new Date(Y)}(O),this.$x=O.x||{},this.init()},k.init=function(){var O=this.$d;this.$y=O.getFullYear(),this.$M=O.getMonth(),this.$D=O.getDate(),this.$W=O.getDay(),this.$H=O.getHours(),this.$m=O.getMinutes(),this.$s=O.getSeconds(),this.$ms=O.getMilliseconds()},k.$utils=function(){return E},k.isValid=function(){return this.$d.toString()!==$},k.isSame=function(O,B){var Y=w(O);return this.startOf(B)<=Y&&Y<=this.endOf(B)},k.isAfter=function(O,B){return w(O)<this.startOf(B)},k.isBefore=function(O,B){return this.endOf(B)<w(O)},k.$g=function(O,B,Y){return E.u(O)?this[B]:this.set(Y,O)},k.unix=function(){return Math.floor(this.valueOf()/1e3)},k.valueOf=function(){return this.$d.getTime()},k.startOf=function(O,B){var Y=this,U=!!E.u(B)||B,K=E.p(O),ee=function(C,G){var V=E.w(Y.$u?Date.UTC(Y.$y,G,C):new Date(Y.$y,G,C),Y);return U?V:V.endOf(c)},re=function(C,G){return E.w(Y.toDate()[C].apply(Y.toDate("s"),(U?[0,0,0,0]:[23,59,59,999]).slice(G)),Y)},L=this.$W,z=this.$M,J=this.$D,te="set"+(this.$u?"UTC":"");switch(K){case M:return U?ee(1,0):ee(31,11);case h:return U?ee(1,z):ee(0,z+1);case u:var D=this.$locale().weekStart||0,Z=(L<D?L+7:L)-D;return ee(U?J-Z:J+(6-Z),z);case c:case x:return re(te+"Hours",0);case d:return re(te+"Minutes",1);case l:return re(te+"Seconds",2);case a:return re(te+"Milliseconds",3);default:return this.clone()}},k.endOf=function(O){return this.startOf(O,!1)},k.$set=function(O,B){var Y,U=E.p(O),K="set"+(this.$u?"UTC":""),ee=(Y={},Y[c]=K+"Date",Y[x]=K+"Date",Y[h]=K+"Month",Y[M]=K+"FullYear",Y[d]=K+"Hours",Y[l]=K+"Minutes",Y[a]=K+"Seconds",Y[s]=K+"Milliseconds",Y)[U],re=U===c?this.$D+(B-this.$W):B;if(U===h||U===M){var L=this.clone().set(x,1);L.$d[ee](re),L.init(),this.$d=L.set(x,Math.min(this.$D,L.daysInMonth())).$d}else ee&&this.$d[ee](re);return this.init(),this},k.set=function(O,B){return this.clone().$set(O,B)},k.get=function(O){return this[E.p(O)]()},k.add=function(O,B){var Y,U=this;O=Number(O);var K=E.p(B),ee=function(z){var J=w(U);return E.w(J.date(J.date()+Math.round(z*O)),U)};if(K===h)return this.set(h,this.$M+O);if(K===M)return this.set(M,this.$y+O);if(K===c)return ee(1);if(K===u)return ee(7);var re=(Y={},Y[l]=n,Y[d]=o,Y[a]=t,Y)[K]||1,L=this.$d.getTime()+O*re;return E.w(L,this)},k.subtract=function(O,B){return this.add(-1*O,B)},k.format=function(O){var B=this,Y=this.$locale();if(!this.isValid())return Y.invalidDate||$;var U=O||"YYYY-MM-DDTHH:mm:ssZ",K=E.z(this),ee=this.$H,re=this.$m,L=this.$M,z=Y.weekdays,J=Y.months,te=function(G,V,H,g){return G&&(G[V]||G(B,U))||H[V].slice(0,g)},D=function(G){return E.s(ee%12||12,G,"0")},Z=Y.meridiem||function(G,V,H){var g=G<12?"AM":"PM";return H?g.toLowerCase():g},C={YY:String(this.$y).slice(-2),YYYY:this.$y,M:L+1,MM:E.s(L+1,2,"0"),MMM:te(Y.monthsShort,L,J,3),MMMM:te(J,L),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:te(Y.weekdaysMin,this.$W,z,2),ddd:te(Y.weekdaysShort,this.$W,z,3),dddd:z[this.$W],H:String(ee),HH:E.s(ee,2,"0"),h:D(1),hh:D(2),a:Z(ee,re,!0),A:Z(ee,re,!1),m:String(re),mm:E.s(re,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:K};return U.replace(N,function(G,V){return V||C[G]||K.replace(":","")})},k.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},k.diff=function(O,B,Y){var U,K=E.p(B),ee=w(O),re=(ee.utcOffset()-this.utcOffset())*n,L=this-ee,z=E.m(this,ee);return z=(U={},U[M]=z/12,U[h]=z,U[v]=z/3,U[u]=(L-re)/6048e5,U[c]=(L-re)/864e5,U[d]=L/o,U[l]=L/n,U[a]=L/t,U)[K]||L,Y?z:E.a(z)},k.daysInMonth=function(){return this.endOf(h).$D},k.$locale=function(){return y[this.$L]},k.locale=function(O,B){if(!O)return this.$L;var Y=this.clone(),U=_(O,B,!0);return U&&(Y.$L=U),Y},k.clone=function(){return E.w(this.$d,this)},k.toDate=function(){return new Date(this.valueOf())},k.toJSON=function(){return this.isValid()?this.toISOString():null},k.toISOString=function(){return this.$d.toISOString()},k.toString=function(){return this.$d.toUTCString()},I}(),Q=W.prototype;return w.prototype=Q,[["$ms",s],["$s",a],["$m",l],["$H",d],["$W",c],["$M",h],["$y",M],["$D",x]].forEach(function(I){Q[I[1]]=function(k){return this.$g(k,I[0],I[1])}}),w.extend=function(I,k){return I.$i||(I(k,W,w),I.$i=!0),w},w.locale=_,w.isDayjs=S,w.unix=function(I){return w(1e3*I)},w.en=y[f],w.Ls=y,w.p={},w})})(bs);const A=et,vr=e=>e%4===0&&e%100>0||e%400===0?366:365,un=e=>{const r=e.day();return r!==0&&r!==6},xr=(e,r)=>A(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),br=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:un(e),isCurrentDay:e.isSame(A(),"day"),year:parseInt(e.format("YYYY"))});let Ft=null;const ws=e=>{if(Ft)return Ft;const r=document.createElement("canvas");r.width=12,r.height=12;const t=r.getContext("2d");return t?(t.strokeStyle="rgba(120, 137, 127, 0.045)",t.lineWidth=6,t.beginPath(),t.moveTo(-3,15),t.lineTo(15,-3),t.stroke(),Ft=e.createPattern(r,"repeat"),Ft):null},fn=(e,r,t,n,o,s,a,l=!1)=>{if(e.strokeStyle=a.colors.border,s?e.fillStyle=a.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=a.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,pe),l&&!s){const d=ws(e);d&&(e.fillStyle=d,e.fillRect(r,t,n,pe))}e.strokeRect(r+.5,t+.5,n,pe)},hn=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Oe},Ss=(e,r,t,n,o,s=[])=>{for(let a=0;a<r;a++){const l=hn(a,s);for(let d=0;d<=t;d++){const c=A(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(d,"days"),u=c.isSame(A(),"day"),h=c.isBefore(A(),"day");fn(e,d*ke,a*pe+l,ke,un(c),u,o,h)}}},Cs=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},Ms=(e,r,t,n,o,s=[])=>{let a=0,l=-(n.dayOfMonth-1)*Ie;const d=r*pe+s.length*Oe;for(let c=0;c<=t;c++){const h=A(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(c,"weeks").isSame(A(),"week");for(let v=0;v<r;v++){const M=hn(v,s);fn(e,a,v*pe+M,ut,!0,h,o)}a+=ut}for(let c=0;c<t;c++){const u=xr(n,c)*Ie;Cs(e,l,d,o),l+=u}},ks=(e,r,t,n,o,s=[])=>{const a=A(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let l=0;l<r;l++){const d=hn(l,s);for(let c=0;c<=t;c++){let u;c===Math.floor(t/2)?u=A():c>Math.floor(t/2)?u=A().add(c-Math.floor(t/2),"hours"):u=A().subtract(Math.floor(t/2)-l,"hours");const h=a.isSame(A(),"day")&&u.isSame(A(),"hour");fn(e,c*_e+_e/2-.5,l*pe+d,_e,un(u),h,o)}}},$s=(e,r,t,n,o=!1)=>{const s=t*pe+r*Oe,a=e.canvas.width;e.fillStyle=o?n.colors.subcontractBorder+"40":n.mode==="dark"?n.colors.primary+"80":n.colors.primary,e.fillRect(0,s,a,Oe)},Ds=(e,r,t,n,o,s,a=[],l=-1)=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(fr)){switch(r){case 0:Ms(e,t,n,o,s,a);break;case 1:Ss(e,t,n,o,s,a);break;case 2:ks(e,t,n,o,s,a);break}for(let c=0;c<a.length;c++)$s(e,c,a[c],s,a[c]===l)}};var pn={},Es={get exports(){return pn},set exports(e){pn=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){var t="week",n="year";return function(o,s,a){var l=s.prototype;l.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var u=a(this).startOf(n).add(1,n).date(c),h=a(this).endOf(t);if(u.isBefore(h))return 1}var v=a(this).startOf(n).date(c).startOf(t).subtract(1,"millisecond"),M=this.diff(v,t,!0);return M<0?a(this).startOf("week").week():Math.ceil(M)},l.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(Es);const _s=pn;var mn={},Ts={get exports(){return mn},set exports(e){mn=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?a:this.add(s-a,"day")}}})})(Ts);const As=mn;var gn={},Ps={get exports(){return gn},set exports(e){gn=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){var t="day";return function(n,o,s){var a=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return a(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var u,h,v,M,x=a(this),$=(u=this.isoWeekYear(),h=this.$u,v=(h?s.utc:s)().year(u).startOf("year"),M=4-v.isoWeekday(),v.isoWeekday()>4&&(M+=7),v.add(M,t));return x.diff($,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var d=l.startOf;l.startOf=function(c,u){var h=this.$utils(),v=!!h.u(u)||u;return h.p(c)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(c,u)}}})})(Ps);const Os=gn;var yn={},Is={get exports(){return yn},set exports(e){yn=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){return function(t,n,o){n.prototype.isBetween=function(s,a,l,d){var c=o(s),u=o(a),h=(d=d||"()")[0]==="(",v=d[1]===")";return(h?this.isAfter(c,l):!this.isBefore(c,l))&&(v?this.isBefore(u,l):!this.isAfter(u,l))||(h?this.isBefore(c,l):!this.isAfter(c,l))&&(v?this.isAfter(u,l):!this.isBefore(u,l))}}})})(Is);const Ys=yn;var vn={},Ls={get exports(){return vn},set exports(e){vn=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){var t,n,o=1e3,s=6e4,a=36e5,l=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,u=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:c,months:u,days:l,hours:a,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},M=function(f){return f instanceof P},x=function(f,y,S){return new P(f,S,y.$l)},$=function(f){return n.p(f)+"s"},m=function(f){return f<0},N=function(f){return m(f)?Math.ceil(f):Math.floor(f)},X=function(f){return Math.abs(f)},F=function(f,y){return f?m(f)?{negative:!0,format:""+X(f)+y}:{negative:!1,format:""+f+y}:{negative:!1,format:""}},P=function(){function f(S,_,w){var E=this;if(this.$d={},this.$l=w,S===void 0&&(this.$ms=0,this.parseFromMilliseconds()),_)return x(S*v[$(_)],this);if(typeof S=="number")return this.$ms=S,this.parseFromMilliseconds(),this;if(typeof S=="object")return Object.keys(S).forEach(function(I){E.$d[$(I)]=S[I]}),this.calMilliseconds(),this;if(typeof S=="string"){var W=S.match(h);if(W){var Q=W.slice(2).map(function(I){return I!=null?Number(I):0});return this.$d.years=Q[0],this.$d.months=Q[1],this.$d.weeks=Q[2],this.$d.days=Q[3],this.$d.hours=Q[4],this.$d.minutes=Q[5],this.$d.seconds=Q[6],this.calMilliseconds(),this}}return this}var y=f.prototype;return y.calMilliseconds=function(){var S=this;this.$ms=Object.keys(this.$d).reduce(function(_,w){return _+(S.$d[w]||0)*v[w]},0)},y.parseFromMilliseconds=function(){var S=this.$ms;this.$d.years=N(S/c),S%=c,this.$d.months=N(S/u),S%=u,this.$d.days=N(S/l),S%=l,this.$d.hours=N(S/a),S%=a,this.$d.minutes=N(S/s),S%=s,this.$d.seconds=N(S/o),S%=o,this.$d.milliseconds=S},y.toISOString=function(){var S=F(this.$d.years,"Y"),_=F(this.$d.months,"M"),w=+this.$d.days||0;this.$d.weeks&&(w+=7*this.$d.weeks);var E=F(w,"D"),W=F(this.$d.hours,"H"),Q=F(this.$d.minutes,"M"),I=this.$d.seconds||0;this.$d.milliseconds&&(I+=this.$d.milliseconds/1e3);var k=F(I,"S"),O=S.negative||_.negative||E.negative||W.negative||Q.negative||k.negative,B=W.format||Q.format||k.format?"T":"",Y=(O?"-":"")+"P"+S.format+_.format+E.format+B+W.format+Q.format+k.format;return Y==="P"||Y==="-P"?"P0D":Y},y.toJSON=function(){return this.toISOString()},y.format=function(S){var _=S||"YYYY-MM-DDTHH:mm:ss",w={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return _.replace(d,function(E,W){return W||String(w[E])})},y.as=function(S){return this.$ms/v[$(S)]},y.get=function(S){var _=this.$ms,w=$(S);return w==="milliseconds"?_%=1e3:_=w==="weeks"?N(_/v[w]):this.$d[w],_===0?0:_},y.add=function(S,_,w){var E;return E=_?S*v[$(_)]:M(S)?S.$ms:x(S,this).$ms,x(this.$ms+E*(w?-1:1),this)},y.subtract=function(S,_){return this.add(S,_,!0)},y.locale=function(S){var _=this.clone();return _.$l=S,_},y.clone=function(){return x(this.$ms,this)},y.humanize=function(S){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!S)},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},f}();return function(f,y,S){t=S,n=S().$utils(),S.duration=function(E,W){var Q=S.locale();return x(E,{$l:Q},W)},S.isDuration=M;var _=y.prototype.add,w=y.prototype.subtract;y.prototype.add=function(E,W){return M(E)&&(E=E.asMilliseconds()),_.bind(this)(E,W)},y.prototype.subtract=function(E,W){return M(E)&&(E=E.asMilliseconds()),w.bind(this)(E,W)}}})})(Ls);const Ns=vn;var Fs="Expected a function",wr=0/0,Bs="[object Symbol]",Hs=/^\s+|\s+$/g,zs=/^[-+]0x[0-9a-f]+$/i,Ws=/^0b[01]+$/i,js=/^0o[0-7]+$/i,Zs=parseInt,Vs=typeof Ee=="object"&&Ee&&Ee.Object===Object&&Ee,Gs=typeof self=="object"&&self&&self.Object===Object&&self,Xs=Vs||Gs||Function("return this")(),Us=Object.prototype,Ks=Us.toString,qs=Math.max,Js=Math.min,xn=function(){return Xs.Date.now()};function Qs(e,r,t){var n,o,s,a,l,d,c=0,u=!1,h=!1,v=!0;if(typeof e!="function")throw new TypeError(Fs);r=Sr(r)||0,bn(t)&&(u=!!t.leading,h="maxWait"in t,s=h?qs(Sr(t.maxWait)||0,r):s,v="trailing"in t?!!t.trailing:v);function M(y){var S=n,_=o;return n=o=void 0,c=y,a=e.apply(_,S),a}function x(y){return c=y,l=setTimeout(N,r),u?M(y):a}function $(y){var S=y-d,_=y-c,w=r-S;return h?Js(w,s-_):w}function m(y){var S=y-d,_=y-c;return d===void 0||S>=r||S<0||h&&_>=s}function N(){var y=xn();if(m(y))return X(y);l=setTimeout(N,$(y))}function X(y){return l=void 0,v&&n?M(y):(n=o=void 0,a)}function F(){l!==void 0&&clearTimeout(l),c=0,n=d=o=l=void 0}function P(){return l===void 0?a:X(xn())}function f(){var y=xn(),S=m(y);if(n=arguments,o=this,d=y,S){if(l===void 0)return x(d);if(h)return l=setTimeout(N,r),M(d)}return l===void 0&&(l=setTimeout(N,r)),a}return f.cancel=F,f.flush=P,f}function bn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function Rs(e){return!!e&&typeof e=="object"}function ei(e){return typeof e=="symbol"||Rs(e)&&Ks.call(e)==Bs}function Sr(e){if(typeof e=="number")return e;if(ei(e))return wr;if(bn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=bn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(Hs,"");var t=Ws.test(e);return t||js.test(e)?Zs(e.slice(2),t?2:8):zs.test(e)?wr:+e}var wn=Qs;const Bt=[0,1,2];var kt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(kt||{});const Cr=e=>Bt.includes(e),pt=e=>{var n;const t=(((n=document.getElementById(We))==null?void 0:n.clientWidth)||0)-Pe;switch(e){case 1:return Math.ceil(t/ke)*ht;case 2:return Math.ceil(t/_e)*ht;default:return Math.ceil(t/ut)*ht}},ti=e=>pt(e)/ht,Ht=(e,r)=>{const t=pt(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},ni=(e,r)=>{const t=Ht(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},Sn=()=>{var t;return((((t=document.getElementById(We))==null?void 0:t.clientWidth)||0)-Pe)*ht},Mr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:A(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});A.extend(_s),A.extend(As),A.extend(Os),A.extend(Ys),A.extend(Ns);const ri=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=A(),onRangeChange:s,handleToggleDisplayActiveUnits:a,onClearFilterData:l,toolbarActions:d})=>{const{zoom:c,maxRecordsPerPage:u=50}=n,[h,v]=p.useState(c),[M,x]=p.useState(A()),[$,m]=p.useState(!1),[N,X]=p.useState(pt(h)),F=Bt[h]!==Bt[Bt.length-1],P=h!==0,f=p.useMemo(()=>ni(M,h),[M,h]),y=Ht(M,h).startDate,S=A(y).dayOfYear(),_=br(y),w=p.useRef(null),E=p.useRef(!1),W=p.useRef(null),[Q,I]=p.useState([{x:0,y:0}]),k=p.useCallback((C,G="auto")=>{var H,g,q,T;const V=Sn();switch(C){case"back":return(H=w.current)==null?void 0:H.scrollTo({behavior:G,left:V/3});case"forward":return(g=w.current)==null?void 0:g.scrollTo({behavior:G,left:V/3});case"middle":{const j=V/ht/4;return(q=w.current)==null?void 0:q.scrollTo({behavior:G,left:V/2-j})}default:return(T=w.current)==null?void 0:T.scrollTo({behavior:G,left:V/2})}},[]),O=C=>{I(C)},B=p.useCallback(C=>{const G=ti(h);let V;switch(h){case 0:V=G*7;break;case 1:V=G;break;case 2:V=Math.ceil(G/Nt);break}wn(()=>{switch((C==="forward"||C==="back")&&(E.current=!0),W.current=C,C){case"back":x(g=>g.subtract(V,"days"));break;case"forward":x(g=>g.add(V,"days"));break;case"middle":x(A());break}s==null||s(f)},300)()},[s,f,h]);p.useEffect(()=>{W.current&&(k(W.current),W.current=null)},[M,k]),p.useEffect(()=>{w.current=document.getElementById(We),X(pt(h))},[h]),p.useEffect(()=>{const C=()=>X(pt(h));return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[h]),p.useEffect(()=>{s==null||s(f)},[s,f]),p.useEffect(()=>{m(!1)},[o]),p.useEffect(()=>{$||(k("middle"),m(!0),x(o))},[o,$,k]);const Y=()=>{t||(x(C=>h===2?C.add(dr,"hours"):C.add(mr,"weeks")),s==null||s(f))},U=p.useCallback(()=>{t||B("forward")},[t,B]),K=()=>{t||(x(C=>h===2?C.subtract(dr,"hours"):C.subtract(mr,"weeks")),s==null||s(f))},ee=p.useCallback(()=>{!$||t||B("back")},[$,t,B]),re=p.useCallback(()=>{t||(W.current="middle",x(A()),s==null||s(f))},[t,s,f]),L=p.useCallback(C=>{if(t)return;const G=A(C).startOf("day");G.isValid()&&(W.current="middle",x(G),s==null||s(f))},[t,s,f]),z=()=>te(h+1),J=()=>te(h-1),te=C=>{Cr(C)&&(v(C),X(pt(C)),s==null||s(f))},D=()=>a==null?void 0:a(),{Provider:Z}=Mr;return i.jsx(Z,{value:{data:e,config:n,handleGoNext:Y,handleScrollNext:U,handleGoPrev:K,handleScrollPrev:ee,handleGoToday:re,goToDate:L,zoomIn:z,zoomOut:J,setZoom:te,zoom:h,isNextZoom:F,isPrevZoom:P,date:M,isLoading:t,cols:N,startDate:_,dayOfYear:S,toggleDisplayActiveUnits:D,tilesCoords:Q,updateTilesCoords:O,recordsThreshold:u,onClearFilterData:l,suppressNextSlideRef:E,toolbarActions:d},children:r})},je=()=>p.useContext(Mr),kr=(e,r,t)=>{e.canvas.width=r*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=r+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},$r=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*pe+n*Oe;if(e>=s+Oe)n++;else if(e>=s)return o*pe+n*Oe-n*Oe}return t-n*Oe},oi=5,Dr=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>oi},mt=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},si=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:a={},gridRef:l,separatorRowIndices:d=[]})=>{const c=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(Z=>({...Z,data:[Z.data]})):r:e,{enabled:u=!0,isDraggable:h,resourceOnly:v=!1,isValidDrop:M}=a,[x,$]=p.useState("idle"),[m,N]=p.useState(null),[X,F]=p.useState({x:0,y:0}),[P,f]=p.useState({width:0,height:48}),[y,S]=p.useState(null),[_,w]=p.useState(!0),E=p.useRef({x:0,y:0}),W=p.useRef({x:0,y:0}),Q=p.useRef({x:0,y:0}),I=p.useRef(null),k=p.useRef(null),O=p.useRef(0),B=p.useRef(null),Y=p.useCallback(Z=>!u||Z.draggable===!1?!1:h?h(Z):!0,[u,h]),U=p.useCallback((Z,C)=>{const G=$r(C,d),V=Math.floor(G/pe);let H;switch(t){case 0:H=Ie*7;break;case 1:H=ke;break;case 2:H=_e;break;default:H=ke}const g=Math.floor(Z/H);let q;const T=A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:q=T.add(g*7,"days").toDate();break;case 1:q=T.add(g,"days").toDate();break;case 2:q=T.add(g,"hours").toDate();break;default:q=T.toDate()}return{snappedDate:q,snappedResourceIndex:V}},[t,n,d]),K=p.useCallback((Z,C,G,V)=>{const H=[],g=C.getTime(),q=G.getTime(),T=c.find(ne=>ne.id===V);if(!T)return H;const j=[];for(const ne of T.data)Array.isArray(ne)?j.push(...ne):j.push(ne);for(const ne of j){if(ne.segmentId===Z.segmentId)continue;const R=ne.startDate.getTime(),ae=ne.endDate.getTime();if(g>=R&&g<ae||q>R&&q<=ae||g<=R&&q>=ae){const de=new Date(Math.max(g,R)),ye=new Date(Math.min(q,ae)),Ce=ye.getTime()-de.getTime();H.push({event:ne,conflictStart:de,conflictEnd:ye,overlapDuration:Ce})}}return H},[c]),ee=p.useCallback((Z,C,G,V)=>{const H=[],g=C.getTime(),q=G.getTime(),T=A(C).format("YYYY-MM-DD"),j=c.find(R=>R.id===V);if(!j)return H;const ne=[];for(const R of j.data)Array.isArray(R)?ne.push(...R):ne.push(R);for(const R of ne){if(R.segmentId===Z.segmentId)continue;const ae=R.startDate.getTime(),he=R.endDate.getTime(),de=A(R.startDate).format("YYYY-MM-DD"),ye=A(R.endDate).format("YYYY-MM-DD"),Ce=A(G).format("YYYY-MM-DD");if(!(de===T||ye===T||de===Ce||ye===Ce||A(R.startDate).isBefore(C,"day")&&A(R.endDate).isAfter(G,"day"))||g>=ae&&g<he||q>ae&&q<=he||g<=ae&&q>=he)continue;let fe,$e;he<=g?(fe=g-he,$e="before"):(fe=ae-q,$e="after"),H.push({event:R,timeGap:fe,position:$e})}return H.sort((R,ae)=>R.timeGap-ae.timeGap)},[c]),re=p.useCallback((Z,C,G)=>{const V=U(C,G);let H,g;if(v)H=Z.startDate,g=Z.endDate;else{const he=A(Z.endDate).diff(Z.startDate);H=V.snappedDate,g=A(H).add(he,"milliseconds").toDate()}let q=0,T="",j;for(const he of e){const de=Math.max(he.data.length,1);if(V.snappedResourceIndex<q+de){T=he.id,j=he.capacity;break}q+=de}if(!T)return null;let ne=!0;j!==void 0&&Z.totalPassengers!==void 0&&(ne=Z.totalPassengers<=j);const R=K(Z,H,g,T),ae=R.length===0?ee(Z,H,g,T):[];return{startDate:H,endDate:g,resourceId:T,resourceIndex:V.snappedResourceIndex,resourceCapacity:j,hasCapacity:ne,conflicts:R,hasConflict:R.length>0,nearbyEvents:ae}},[U,e,v,K,ee]),L=p.useCallback((Z,C)=>{if(!s)return;const G=Date.now();if(G-O.current<100)return;O.current=G;const V={event:Z,currentStartDate:C.startDate,currentEndDate:C.endDate,currentResourceId:C.resourceId,conflicts:C.conflicts};s(V)},[s]),z=p.useCallback((Z,C)=>{if(!Y(Z)||!l.current)return;C.preventDefault(),C.stopPropagation();const G=C.target.closest('[style*="left"]');let V=0,H=0;G&&G.style.left&&G.style.top&&(V=parseInt(G.style.left),H=parseInt(G.style.top));const g=mt(C.clientX,C.clientY,l.current);E.current={x:V,y:H},W.current={x:C.clientX,y:C.clientY},Q.current={x:g.x-V,y:20},B.current={startDate:Z.startDate,endDate:Z.endDate,resourceId:""};for(const j of e){for(const ne of j.data)if(ne.some(R=>R.segmentId===Z.segmentId)){B.current.resourceId=j.id;break}if(B.current.resourceId)break}N(Z),$("potential"),F({x:V,y:H});let q=100,T=48;if(G){const j=G.getBoundingClientRect();q=j.width,T=j.height}f({width:q,height:T})},[Y,l,e,t]),J=p.useCallback(Z=>{if(!l.current)return;let C=l.current;for(;C&&C!==document.body;){const R=window.getComputedStyle(C);if(C.scrollHeight>C.clientHeight&&(R.overflowY==="auto"||R.overflowY==="scroll"||R.overflow==="auto"||R.overflow==="scroll"))break;C=C.parentElement}(!C||C===document.body)&&(C=document.documentElement);const G=C.getBoundingClientRect(),V=Z.clientY,H=50,g=12,q=V-G.top,T=G.bottom-V;let j=!1,ne=0;q<H&&q>0?(j=!0,ne=-g*(1-q/H)):T<H&&T>0&&(j=!0,ne=g*(1-T/H)),j?(k.current&&cancelAnimationFrame(k.current),k.current=requestAnimationFrame(()=>{C.scrollTop+=ne,x==="dragging"&&J(Z)})):k.current&&(cancelAnimationFrame(k.current),k.current=null)},[l,x]),te=p.useCallback(Z=>{if(x==="idle"||x==="animating"||!m||!l.current)return;const C={x:Z.clientX,y:Z.clientY};if(x==="potential")if(Dr(W.current,C))$("dragging");else return;J(Z);const G=mt(Z.clientX,Z.clientY,l.current);I.current&&cancelAnimationFrame(I.current),I.current=requestAnimationFrame(()=>{const V={x:G.x-Q.current.x,y:G.y-Q.current.y};F(V);const H=re(m,G.x,G.y);if(H&&M){const g={event:m,currentStartDate:H.startDate,currentEndDate:H.endDate,currentResourceId:H.resourceId,conflicts:H.conflicts};H.hasConflict=!M(g)}if(S(H),H){const g=H.hasCapacity!==!1;w(g),L(m,H)}})},[x,m,l,re,L,M,J]),D=p.useCallback(async Z=>{if(x==="idle"||x==="animating")return;const C={x:Z.clientX,y:Z.clientY};if(!Dr(W.current,C)||x==="potential"){$("idle"),N(null),S(null);return}if(!m||!y||!B.current){$("idle"),N(null),S(null);return}if(y.hasCapacity===!1){w(!1),$("animating"),F(E.current),setTimeout(()=>{$("idle"),N(null),S(null),w(!0)},300);return}const V={event:m,originalStartDate:B.current.startDate,originalEndDate:B.current.endDate,originalResourceId:B.current.resourceId,newStartDate:y.startDate,newEndDate:y.endDate,newResourceId:y.resourceId,hasConflict:y.hasConflict,conflicts:y.conflicts};let H=!0;if(o)try{const g=o(V);H=g instanceof Promise?await g:g}catch{H=!1}H?(w(!0),$("idle"),N(null),S(null)):(w(!1),$("animating"),F(E.current),setTimeout(()=>{$("idle"),N(null),S(null),w(!0)},300))},[x,m,y,o,M]);return p.useEffect(()=>{if(x==="potential"||x==="dragging"){const Z=G=>te(G),C=G=>D(G);return document.addEventListener("mousemove",Z),document.addEventListener("mouseup",C),()=>{document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",C)}}else return()=>{}},[x,te,D]),p.useEffect(()=>()=>{I.current&&(cancelAnimationFrame(I.current),I.current=null),k.current&&(cancelAnimationFrame(k.current),k.current=null)},[]),p.useEffect(()=>{(x==="idle"||x==="animating")&&(I.current&&(cancelAnimationFrame(I.current),I.current=null),k.current&&(cancelAnimationFrame(k.current),k.current=null))},[x]),p.useEffect(()=>{(x==="dragging"||x==="potential")&&(x==="dragging"?($("animating"),F(E.current),setTimeout(()=>{$("idle"),N(null),S(null)},300)):($("idle"),N(null),S(null)))},[t]),p.useEffect(()=>{if((x==="dragging"||x==="potential")&&m){let Z=!1;for(const C of e){for(const G of C.data)if(G.some(V=>V.segmentId===m.segmentId)){Z=!0;break}if(Z)break}Z||(x==="dragging"?($("animating"),F(E.current),setTimeout(()=>{$("idle"),N(null),S(null)},300)):($("idle"),N(null),S(null)))}},[e,x,m]),{dragState:x,draggedEvent:m,ghostPosition:X,ghostDimensions:P,dropTarget:y,isValidDrop:_,handleDragStart:z,isDraggable:Y,draggingEventId:(m==null?void 0:m.segmentId)||null,resourceOnly:v}},ii=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:a={},gridRef:l,isDragging:d,separatorRowIndices:c=[]})=>{const{enabled:u=!1,isSelectable:h}=a,v=u&&!!o,M=p.useCallback(g=>{let q=0;for(const T of c)T<=g&&q++;return g*pe+q*Oe},[c]),[x,$]=p.useState("idle"),[m,N]=p.useState(null),[X,F]=p.useState(null),[P,f]=p.useState(null),[y,S]=p.useState(!1),[_,w]=p.useState([]),[E,W]=p.useState(!1),Q=p.useRef(null),I=p.useRef(null),k=p.useRef(null),O=p.useRef(null),B=p.useCallback(()=>{switch(t){case 0:return Ie*7;case 1:return ke;case 2:return _e;default:return ke}},[t]),Y=p.useCallback(g=>{const q=B(),T=Math.floor(g/q),j=A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return j.add(T*7,"days").toDate();case 1:return j.add(T,"days").toDate();case 2:return j.add(T,"hours").toDate();default:return j.toDate()}},[t,n,B]),U=p.useCallback(g=>{const q=$r(g,c),T=Math.floor(q/pe);let j=0;for(const ne of e){const R=Math.max(ne.data.length,1);if(T<j+R)return{resourceId:ne.id,resourceIndex:T,resourceLabel:ne.label};j+=R}return null},[e,c]),K=p.useCallback(g=>{const q=B();return Math.floor(g/q)*q},[B]),ee=p.useCallback((g,q,T,j=[])=>{const ne=[],ae=(r||e).find(ye=>ye.id===g),he=q.getTime(),de=T.getTime();if(ae){const ye=ae.data[0],Ce=ye&&Array.isArray(ye)?ae.data.flat():ae.data;for(const ve of Ce){const se=new Date(ve.startDate).getTime(),fe=new Date(ve.endDate).getTime();if(he<fe&&de>se){const $e=new Date(Math.max(he,se)),ue=new Date(Math.min(de,fe)),me=ue.getTime()-$e.getTime();ne.push({event:ve,conflictStart:$e,conflictEnd:ue,overlapDuration:me})}}}for(const ye of j){if(ye.resourceId!==g)continue;const Ce=ye.startDate.getTime(),ve=ye.endDate.getTime();if(he<ve&&de>Ce){const se=new Date(Math.max(he,Ce)),fe=new Date(Math.min(de,ve)),$e=fe.getTime()-se.getTime(),ue={segmentId:`pending-${ye.startDate.getTime()}`,reservationId:`pending-${ye.startDate.getTime()}`,startDate:ye.startDate,endDate:ye.endDate,occupancy:0,title:`New Event (${ye.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ne.push({event:ue,conflictStart:se,conflictEnd:fe,overlapDuration:$e})}}return ne},[e,r]),re=p.useCallback(g=>{if(!v||d||!l.current||g.button!==0)return;const q=g.target;if(q.closest("[data-segment-id]")||q.closest("[data-multi-select-ui]"))return;const T=mt(g.clientX,g.clientY,l.current),j=U(T.y);if(!j)return;Q.current={x:g.clientX,y:g.clientY},I.current=j.resourceIndex;const ne=K(T.x),R=B(),ae=M(j.resourceIndex);N(T),F(T),f({x:ne,y:ae,width:R,height:pe}),$("selecting")},[v,d,l,U,K,B,M]),L=p.useCallback(g=>{F(g);const q=B(),T=K((m==null?void 0:m.x)||0),j=K(g.x),ne=M(I.current),R=Math.min(T,j),ae=Math.max(T,j)+q;f({x:R,y:ne,width:ae-R,height:pe})},[m,B,K,M]),z=p.useCallback(()=>{O.current&&(cancelAnimationFrame(O.current),O.current=null)},[]),J=p.useCallback((g,q)=>{const T=document.getElementById(We);if(!T||!l.current)return;const j=T.getBoundingClientRect(),ne=60,R=12,ae=g-(j.left+Pe),he=j.right-g;let de=0;ae<ne?de=-R*(1-Math.max(0,ae)/ne):he<ne&&(de=R*(1-Math.max(0,he)/ne)),z(),de!==0&&(O.current=requestAnimationFrame(()=>{T.scrollLeft+=de,L(mt(g,q,l.current)),J(g,q)}))},[l,L,z]),te=p.useCallback(g=>{if(x!=="selecting"||!l.current||I.current===null)return;const q=mt(g.clientX,g.clientY,l.current);k.current&&cancelAnimationFrame(k.current),k.current=requestAnimationFrame(()=>L(q)),J(g.clientX,g.clientY)},[x,l,L,J]),D=p.useCallback(g=>{if(x!=="selecting")return;if(z(),!l.current||!m||!Q.current){$("idle"),N(null),F(null),f(null);return}const q=mt(g.clientX,g.clientY,l.current),T=U(m.y);if(!T){$("idle"),N(null),F(null),f(null);return}const j=Math.min(m.x,q.x),ne=Math.max(m.x,q.x),R=Y(j),ae=Y(ne),he=A(ae).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h(T.resourceId,R,he)){$("idle"),N(null),F(null),f(null);return}const de=ee(T.resourceId,R,he,_),ye=de.length>0,Ce={startDate:R,endDate:he,resourceId:T.resourceId,resourceLabel:T.resourceLabel,zoomLevel:t,hasConflict:ye,conflicts:ye?de:void 0};if(y)w(ve=>[...ve,Ce]),W(!0);else if(o){const ve=o(Ce),se=fe=>{fe!=null&&fe.continueMultiSelect&&(S(!0),w([Ce]),W(!0))};ve instanceof Promise?ve.then(se):se(ve)}$("idle"),N(null),F(null),f(null),Q.current=null,I.current=null},[x,l,m,U,Y,h,o,t,y,ee,_,z]),Z=p.useCallback(()=>{if(_.length>0&&s){W(!1);const g=s(_),q=T=>{T!=null&&T.continueMultiSelect?W(!0):(w([]),S(!1),W(!1))};g instanceof Promise?g.then(q):q(g);return}w([]),S(!1),W(!1)},[_,s]),C=p.useCallback(()=>{w([]),S(!1),W(!1)},[]),G=p.useCallback(g=>{w(q=>{const T=q.filter((j,ne)=>ne!==g);return T.length===0&&(S(!1),W(!1)),T})},[]),V=p.useCallback((g,q)=>{w(T=>T.map((j,ne)=>{if(ne!==g)return j;const R={...j,...q},ae=T.filter((de,ye)=>ye!==g),he=ee(R.resourceId,R.startDate,R.endDate,ae);return{...R,hasConflict:he.length>0,conflicts:he.length>0?he:void 0}}))},[ee]),H=p.useCallback(g=>{g.key==="Escape"&&(x==="selecting"?(z(),$("idle"),N(null),F(null),f(null),Q.current=null,I.current=null):y&&_.length>0&&(w([]),S(!1),W(!1)))},[x,y,_.length,z]);return p.useEffect(()=>{if(x==="selecting")return document.addEventListener("mousemove",te),document.addEventListener("mouseup",D),document.addEventListener("keydown",H),()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",D),document.removeEventListener("keydown",H)}},[x,te,D,H]),p.useEffect(()=>{if(y&&_.length>0)return document.addEventListener("keydown",H),()=>{document.removeEventListener("keydown",H)}},[y,_.length,H]),p.useEffect(()=>()=>{k.current&&(cancelAnimationFrame(k.current),k.current=null),z()},[z]),p.useEffect(()=>{d&&x==="selecting"&&(z(),$("idle"),N(null),F(null),f(null),Q.current=null,I.current=null)},[d,x,z]),{selectionState:x,selectionStart:m,selectionEnd:X,selectionBox:P,handleGridMouseDown:re,isEnabled:v,pendingSelections:_,confirmSelections:Z,clearSelections:C,removeSelection:G,updateSelection:V,isMultiSelectActive:y,hasUnconfirmedSelections:E}},ai=b.div`
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
`,ui=p.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onEventDrop:a,onEventDrag:l,draggableConfig:d,onDragStateChange:c,onTimeRangeSelect:u,onMultiTimeRangeSelect:h,clickToAddConfig:v,separatorRowIndices:M=[],subcontractSeparatorRow:x=-1,fadingUnitIds:$},m){const N=p.useRef(!1),{handleScrollNext:X,handleScrollPrev:F,date:P,isLoading:f,cols:y,startDate:S,suppressNextSlideRef:_}=je(),w=p.useRef(null),E=p.useRef(null),W=p.useRef(t),Q=p.useRef(P),I=p.useRef(null),k=p.useRef(null),O=p.useRef(null),B=p.useRef(null),[Y,U]=p.useState(!1),K=Lt(),{dragState:ee,draggedEvent:re,ghostPosition:L,ghostDimensions:z,dropTarget:J,isValidDrop:te,handleDragStart:D,isDraggable:Z,draggingEventId:C,resourceOnly:G}=si({data:n,baseData:o||n,zoom:r,startDate:S,onEventDrop:a,onEventDrag:l,draggableConfig:d,gridRef:B,separatorRowIndices:M});p.useEffect(()=>{const ue=ee==="dragging"||ee==="potential";U(ue),c&&c(ue)},[ee,c]);const V=p.useRef(!1),H=p.useRef(P),g=p.useRef(null);p.useEffect(()=>{var ge;const ue=H.current;if(H.current=P,!V.current){V.current=!0;return}if(_!=null&&_.current){_.current=!1;return}const me=B.current;if(!(me!=null&&me.animate))return;const ie=P.isAfter(ue)?48:-48;(ge=g.current)==null||ge.cancel(),me.style.willChange="transform";const ce=me.animate([{transform:`translateX(${ie}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),le=()=>{me.style.willChange=""};ce.onfinish=le,ce.oncancel=le,g.current=ce},[P,_]);const{selectionState:q,selectionBox:T,handleGridMouseDown:j,pendingSelections:ne,confirmSelections:R,clearSelections:ae,removeSelection:he,updateSelection:de,isMultiSelectActive:ye,hasUnconfirmedSelections:Ce}=ii({data:n,baseData:o||n,zoom:r,startDate:S,onTimeRangeSelect:u,onMultiTimeRangeSelect:h,clickToAddConfig:v,gridRef:B,isDragging:Y,separatorRowIndices:M}),ve=p.useCallback(ue=>{ue.preventDefault()},[]),se=p.useCallback(ue=>{ue.preventDefault()},[]),fe=M.length*Oe,$e=p.useCallback(ue=>{const me=Sn(),ie=t*pe+1+fe;kr(ue,me,ie),Ds(ue,r,t,y,S,K,M,x)},[y,S,t,r,K,M,x,fe]);return p.useEffect(()=>{if(!w.current)return;const ue=w.current.getContext("2d");if(!ue)return;const me=()=>$e(ue);return window.addEventListener("resize",me),()=>window.removeEventListener("resize",me)},[$e]),p.useEffect(()=>{var Me,Ye;const ue=W.current,me=Q.current;if(W.current=t,Q.current=P,ue===t||!P.isSame(me,"day")||(Me=window.matchMedia)!=null&&Me.call(window,"(prefers-reduced-motion: reduce)").matches)return;const ie=w.current,ce=E.current;if(!ie||!ce)return;const le=ce.getContext("2d");if(!le)return;ce.width=ie.width,ce.height=ie.height,ce.style.width=ie.style.width,ce.style.height=ie.style.height,le.setTransform(1,0,0,1,0,0),le.clearRect(0,0,ce.width,ce.height),le.drawImage(ie,0,0),(Ye=I.current)==null||Ye.cancel(),ce.style.opacity="1";const ge=ce.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease"});ge.onfinish=()=>{ce.style.opacity="0"},I.current=ge},[t,P]),p.useEffect(()=>{const ue=w.current;if(!ue)return;ue.style.letterSpacing="1px";const me=ue.getContext("2d");me&&$e(me)},[P,t,r,$e]),p.useEffect(()=>{if(!k.current)return;const ue=new IntersectionObserver(me=>{me[0].isIntersecting&&!N.current&&(N.current=!0,X(),setTimeout(()=>{N.current=!1},1e3))},{root:document.getElementById(We)});return ue.observe(k.current),()=>{ue.disconnect()}},[X]),p.useEffect(()=>{if(!O.current)return;const ue=new IntersectionObserver(me=>{me[0].isIntersecting&&!N.current&&(N.current=!0,F(),setTimeout(()=>{N.current=!1},1e3))},{root:document.getElementById(We),rootMargin:`0px 0px 0px -${Pe}px`});return ue.observe(O.current),()=>{ue.disconnect()}},[F]),i.jsxs(ai,{id:fr,children:[i.jsxs(ci,{ref:ue=>{typeof m=="function"?m(ue):m&&(m.current=ue),B.current=ue},onMouseDown:j,style:{cursor:u?"crosshair":"default"},children:[i.jsx(Er,{position:"left",ref:O}),i.jsx(An,{isLoading:f,position:"left"}),i.jsx(li,{ref:w,onDragStart:ve,onDragOver:se,style:{userSelect:ee==="dragging"?"none":"auto"}}),i.jsx(di,{ref:E,"aria-hidden":!0}),i.jsx(Bl,{zoom:r,startDate:S}),i.jsx(Uc,{data:n,zoom:r,onTileClick:s,onDragStart:D,isDraggable:Z,draggingEventId:C,separatorRowIndices:M,fadingUnitIds:$}),i.jsx(Er,{ref:k,position:"right"}),i.jsx(An,{isLoading:f,position:"right"}),(ee==="dragging"||ee==="animating")&&i.jsx(bl,{draggedEvent:re,ghostPosition:L,ghostDimensions:z,dropTarget:J,isValidDrop:te,dragState:ee,zoom:r,data:n,resourceOnly:G,separatorRowIndices:M}),i.jsx(Cl,{selectionBox:T,isSelecting:q==="selecting"}),ye&&ne.length>0&&i.jsx(Nl,{selections:ne,data:n,zoom:r,startDate:S,onRemove:he,onUpdate:de,separatorRowIndices:M})]}),ye&&Ce&&ne.length>0&&i.jsx(Al,{selections:ne,onConfirm:R,onClear:ae,onRemove:he})]})}),_r=e=>{const r=A.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},Tr=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/De);t+=o.hours+s,n+=r%De,n>=De&&(t++,n-=De)}),{hours:t,minutes:n}},Ar=(e,r)=>{let t=hr;switch(r){case 0:t=xs;break;case 1:t=hr;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,a=De-e.minutes;return a===De&&(s++,a=0),{hours:Math.max(0,s),minutes:s<0?0:a}},o=()=>{const s=e.hours-t,a=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:a}};return{free:n(),overtime:o()}},fi=(e,r,t)=>{const n=r.isoWeek(),o=e.map(c=>{const u=A(c.startDate).isoWeek(),h=A(c.startDate).isoWeekday(),v=A(c.endDate).isoWeek(),M=A(c.endDate).isoWeekday(),{hours:x,minutes:$}=_r(c.occupancy);if(n===u){const m=(Ke+1-h)*x,N=(Ke+1-h)*$;return{hours:Math.max(0,m),minutes:N}}else if(n===v){const m=M>Ke?Ke*x:M*x,N=M>Ke?Ke*$:M*$;return{hours:m,minutes:N}}else if(A(r).isBetween(c.startDate,c.endDate))return{hours:Ke*x,minutes:Ke*$};return{hours:0,minutes:0}}),{hours:s,minutes:a}=Tr(o),{free:l,overtime:d}=Ar({hours:s,minutes:a},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,a)},free:l,overtime:d}},hi=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(u=>{const{hours:h,minutes:v}=_r(u.occupancy);return o<=(n?7:5)?{hours:h,minutes:v}:{hours:0,minutes:0}}),{hours:a,minutes:l}=Tr(s),{free:d,overtime:c}=Ar({hours:a,minutes:l},t);return{taken:{hours:Math.max(0,a),minutes:Math.max(0,l)},free:d,overtime:c}},pi=(e,r)=>{let t=0;e.forEach(l=>{const d=A(l.startDate).hour(),c=A(l.endDate).hour(),u=r.hour(),h=A(l.endDate).minute(),v=A(l.startDate).minute();d<u&&c>u?t+=De:d===u&&c===u&&v&&h?t+=h?h-v:De-v:d===u&&c>=u?t+=v?De-v:De:c===u&&h&&(t+=h)});const n=Math.floor(t/De),o=t%De,s=n||o?0:1,a=n?0:o?De-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:a},overtime:{hours:0,minutes:0}}},mi=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(a=>n===1?A(t).isBetween(a.startDate,a.endDate,"day","[]"):n===2?A(t).isBetween(a.startDate,a.endDate,"hour","[]"):A(a.startDate).isBetween(A(t),A(t).add(6,"days"),"day","[]")||A(t).isBetween(A(a.startDate),A(a.endDate),"day","[]"));switch(n){case 1:return hi(s,t,n,o);case 2:return pi(s,t);default:return fi(s,t,n)}},gi=(e,r,t,n,o,s,a=!1)=>{let l="weeks",d;switch(s){case 0:l="weeks",d=ut;break;case 1:l="days",d=ke;break;case 2:l="hours",d=_e;break}const c=Math.ceil(s===2?(t.x-.5*d)/d:t.x/d),u=A(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(c-1,l),h=Math.ceil(t.y/pe),v=n.findIndex((N,X,F)=>F.slice(0,X+1).reduce((f,y)=>f+y,0)>=h),M=s===2?(c+1)*d:c*d,x=(h-1)*pe+pe,$=mi(o[v],v,u,s,a),m=A(e.startDate).isSame(A(e.endDate),"day");return{coords:{x:M,y:x},mouseCoords:t,resourceIndex:v,disposition:$,reservationData:{startTime:A(e.startDate).format("hh:mm A"),startDate:A(e.startDate).format("MMM D, YYYY"),endTime:A(e.endDate).format("hh:mm A"),endDate:A(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,departureAddress:e.departureAddress,destinationAddress:e.destinationAddress,returnAddress:e.returnAddress,isOneDayEvent:m,passengers:e.totalPassengers}}};function yi(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function vi(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const u of e)!u.isSubcontract&&u.capacity!=null&&t.add(u.capacity);const n=[...t].sort((u,h)=>u-h);if(n.length<2)return r;const o=Math.min(5,n.length),s=yi(n,o),a=[];let l=0;for(const u of s)a.push({min:n[l],max:n[u-1],values:n.slice(l,u)}),l=u;a.push({min:n[l],max:n[n.length-1],values:n.slice(l)});const d=[],c=new Map;return a.forEach((u,h)=>{const v="__auto_cat_"+h,M=u.min===u.max?u.min+" pax":u.min+"-"+u.max+" pax";d.push({id:v,name:M,minPassengers:u.min,maxPassengers:u.max});for(const x of u.values)c.set(x,v)}),{categories:d,capacityToCategoryId:c}}const xi=(e,r,t,n)=>{const o=[];let s=0,a=[],l=0;return r.length>n?(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=n&&(o.push(a),s+=a.length,a=[],l=0),l++,a.push(u)}),t.slice(s).length<=n&&(a=[],r.slice(s).forEach((d,c)=>{const u={id:e[c+s].id,label:e[c+s].label,data:d,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};a.push(u),c===r.length-s-1&&o.push(a)})),o):(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};a.push(u)}),o.push(a),o)};var Cn={},bi={get exports(){return Cn},set exports(e){Cn=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(bi);const wi=Cn;var Mn={},Si={get exports(){return Mn},set exports(e){Mn=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(Si);const Ci=Mn,Mi=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let a=0;a<o.length;a++){const l=A(t.startDate).startOf("day"),d=A(t.endDate).startOf("day"),c=A(o[a].startDate).startOf("day"),u=A(o[a].endDate).startOf("day");if(l.isBetween(c,u,null,"[]")||d.isBetween(c,u,null,"[]")||l.isBefore(c,"minute")&&d.isAfter(u,"minute")||l.isAfter(c,"minute")&&d.isBefore(u,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};A.extend(wi),A.extend(Ci);const Pr=new WeakMap,ki=e=>{const r=Pr.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const a=A(o.startDate),l=A(s.startDate),d=a.startOf("day").diff(l.startOf("day"),"day");return d!==0?d:a.diff(l)}),n=Mi(t);return Pr.set(e,n),n},$i=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const a=ki(s.data);return o[0].push(a),o[1].push(Math.max(a.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},Di=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,Ei=e=>{const{recordsThreshold:r}=je(),[t,n]=p.useState(0),[o,s]=p.useState(0),a=p.useRef(null);p.useEffect(()=>{a.current=document.getElementById(We)},[]);const{projectsPerPerson:l,rowsPerPerson:d}=p.useMemo(()=>$i(e),[e]),c=p.useMemo(()=>xi(e,l,d,r),[e,l,r,d]),u=p.useCallback(()=>{c[o].length&&a.current&&(a.current.scroll({top:0}),n(m=>m+c[Math.max(o,0)].length),s(m=>Math.min(m+1,c.length-1)),window.scroll({top:0}))},[o,c]),h=p.useCallback(()=>{c[o].length&&(n(m=>Math.max(m-c[o-1].length,0)),s(m=>Math.max(m-1,0)))},[o,c]),v=p.useCallback(()=>{n(0),s(0)},[]),M=t+c[o].length,x=p.useMemo(()=>d.slice(t,M),[M,d,t]),$=p.useMemo(()=>l.slice(t,M),[M,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:$,rowsPerItem:x,totalRowsPerPage:Di(c[o]),next:u,previous:h,reset:v}};var kn={},_i={get exports(){return kn},set exports(e){kn=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(_i);const Ti=kn;var $n={},Ai={get exports(){return $n},set exports(e){$n=e}};(function(e,r){(function(t,n){e.exports=n(et)})(Ee,function(t){function n(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var o=n(t);function s(v){return v%10<5&&v%10>1&&~~(v/10)%10!=1}function a(v,M,x){var $=v+" ";switch(x){case"m":return M?"minuta":"minutę";case"mm":return $+(s(v)?"minuty":"minut");case"h":return M?"godzina":"godzinę";case"hh":return $+(s(v)?"godziny":"godzin");case"MM":return $+(s(v)?"miesiące":"miesięcy");case"yy":return $+(s(v)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,u=function(v,M){return c.test(M)?l[v.month()]:d[v.month()]};u.s=d,u.f=l;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:u,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(v){return v+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})(Ai);const Pi=$n;var Dn={},Oi={get exports(){return Dn},set exports(e){Dn=e}};(function(e,r){(function(t,n){e.exports=n(et)})(Ee,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(d,c,u){var h=s[u];return Array.isArray(h)&&(h=h[c?0:1]),h.replace("%d",d)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return o.default.locale(l,null,!0),l})})(Oi);const Ii=Dn;var En={},Yi={get exports(){return En},set exports(e){En=e}};(function(e,r){(function(t,n){e.exports=n(et)})(Ee,function(t){function n(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),a="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,d=function(u,h){return l.test(h)?s[u.month()]:a[u.month()]};d.s=a,d.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:d,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(u){return u+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Yi);const Li=En;var _n={},Ni={get exports(){return _n},set exports(e){_n=e}};(function(e,r){(function(t,n){e.exports=n(et)})(Ee,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return o.default.locale(s,null,!0),s})})(Ni);const Fi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:Ti},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:Pi},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:_n},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:Li},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:Ii}];class Bi{constructor(){lo(this,"locales",Fi)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const zt=new Bi,Or=p.createContext({localesData:zt.getLocales(),currentLocale:zt.getLocales()[0],setCurrentLocale:()=>{}}),Hi=({children:e,lang:r,translations:t})=>{const[n,o]=p.useState("en"),s=zt.getLocales(),a=p.useCallback(()=>{const h=s.find(v=>v.id===n);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&A.locale(h.dayjsTranslations),h||s[0]},[n,s]),[l,d]=p.useState(a()),c=h=>{localStorage.setItem("locale",h.translateCode),d(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(M=>M.id===h.id)||zt.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),v=r??h??"en";localStorage.setItem("locale",v),o(v),d(a())},[a,r]);const{Provider:u}=Or;return i.jsx(u,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},Ze=()=>p.useContext(Or).currentLocale.lang,zi=e=>oe.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},oe.createElement("defs",null,oe.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),oe.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},oe.createElement("stop",{offset:.47,stopColor:"#ccc"}),oe.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),oe.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),oe.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),oe.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),oe.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),oe.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),oe.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),oe.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),oe.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),oe.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),oe.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Wi=b.div`
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
`,Zi=({onTileClick:e})=>{const{feelingEmpty:r}=Ze();return i.jsxs(Wi,{onClick:e,children:[i.jsx(zi,{}),i.jsx(ji,{children:r})]})},Vi=b.div`
  position: relative;
  display: flex;
`,Gi=b.div`
  position: relative;
  margin-left: ${Pe};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Xi=b.div`
  width: calc(${({width:e})=>e}px - ${Pe}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Pe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ui=new Set,Ki={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:kt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function qi(e,r){const t=r?[...r].sort((l,d)=>l.maxPassengers-d.maxPassengers):[],n=[];for(const l of t){const d=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);d.length>0&&n.push({type:"category",category:l,items:d})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?n.push({type:"uncategorized",items:s}):s.length>0&&n.push({type:"uncategorized",items:s});const a=e.filter(l=>l.isSubcontract);return a.length>0&&n.push({type:"subcontract",items:a}),n}const Ji=({data:e,baseData:r,categories:t,onTileClick:n,onItemClick:o,toggleTheme:s,topBarWidth:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:u,onMultiTimeRangeSelect:h,clickToAddConfig:v})=>{const[M,x]=p.useState(Ki),[$,m]=p.useState(e),[N,X]=p.useState(!1),[F,P]=p.useState(!1),[f,y]=p.useState(""),[S,_]=p.useState(new Set),[w,E]=p.useState(new Set),W=p.useRef([]);p.useEffect(()=>()=>W.current.forEach(clearTimeout),[]);const{zoom:Q,startDate:I,isLoading:k,config:{includeTakenHoursOnWeekendsInDayView:O,showTooltip:B,showThemeToggle:Y}}=je(),U=p.useRef(null),K=p.useRef(null),[ee,re]=p.useState(124),{page:L,projectsPerPerson:z,rowsPerItem:J,currentPageNum:te,pagesAmount:D,next:Z,previous:C,reset:G}=Ei($),{effectiveCategories:V,effectivePage:H}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:L};const ie=vi(L);if(ie.categories.length===0)return{effectiveCategories:void 0,effectivePage:L};const ce=L.map(le=>{if(le.isSubcontract||le.capacity==null)return le;const ge=ie.capacityToCategoryId.get(le.capacity);return ge?{...le,categoryId:ge}:le});return{effectiveCategories:ie.categories,effectivePage:ce}},[t,L]),g=p.useCallback(ie=>{var le;if(S.has(ie)){_(ge=>{const Me=new Set(ge);return Me.delete(ie),Me}),E(ge=>{if(!ge.has(ie))return ge;const Me=new Set(ge);return Me.delete(ie),Me});return}if((le=window.matchMedia)!=null&&le.call(window,"(prefers-reduced-motion: reduce)").matches){_(ge=>new Set(ge).add(ie));return}E(ge=>new Set(ge).add(ie));const ce=setTimeout(()=>{_(ge=>new Set(ge).add(ie)),E(ge=>{const Me=new Set(ge);return Me.delete(ie),Me})},190);W.current.push(ce)},[S]),q=p.useMemo(()=>{const ie=[],ce=V?[...V].sort((le,ge)=>le.maxPassengers-ge.maxPassengers):[];for(const le of ce)H.some(ge=>!ge.isSubcontract&&ge.categoryId===le.id)&&ie.push(le.id);return H.some(le=>le.isSubcontract)&&ie.push("__subcontract__"),ie},[V,H]),T=p.useCallback(()=>{_(new Set)},[]),j=p.useCallback(()=>{_(new Set(q))},[q]),ne=p.useMemo(()=>{if(w.size===0)return Ui;const ie=new Set;for(const ce of H){const le=ce.isSubcontract?"__subcontract__":ce.categoryId;le&&w.has(le)&&ie.add(ce.id)}return ie},[w,H]),{visiblePage:R,visibleRowsPerItem:ae,visibleTotalRows:he,visibleProjectsPerPerson:de,separatorRowIndices:ye,subcontractSeparatorRow:Ce}=p.useMemo(()=>{const ie=qi(H,V),ce=((V==null?void 0:V.length)??0)>0,le=new Map;L.forEach((Te,vt)=>le.set(Te.id,vt));const ge=[],Me=[],Ye=[],Xe=[];let tt=0,jt=-1;for(const Te of ie)if(Te.type==="subcontract"||Te.type==="category"&&ce){const xt=Te.type==="subcontract"?"__subcontract__":Te.category.id,bt=S.has(xt);if(Xe.push(tt),Te.type==="subcontract"&&(jt=tt),!bt)for(const nt of Te.items){const Zt=le.get(nt.id)??0,Vt=J[Zt];ge.push(nt),Me.push(Vt),Ye.push(z[Zt]),tt+=Vt}}else for(const xt of Te.items){const bt=le.get(xt.id)??0,nt=J[bt];ge.push(xt),Me.push(nt),Ye.push(z[bt]),tt+=nt}const qe=Me.reduce((Te,vt)=>Te+vt,0);return{visiblePage:ge,visibleRowsPerItem:Me,visibleTotalRows:qe,visibleProjectsPerPerson:Ye,separatorRowIndices:Xe,subcontractSeparatorRow:jt}},[H,V,L,S,J,z]),ve=p.useRef(wn((ie,ce,le,ge,Me,Ye)=>{if(!U.current)return;const{tile:Xe,segmentId:tt}=$e(ie);if(!tt||!Xe){X(!1);return}const jt=fe(tt,ce),qe=U.current.getBoundingClientRect(),Te=Xe.getBoundingClientRect(),vt={x:ie.clientX-qe.left,y:ie.clientY-qe.top},xt={x:ie.clientX-qe.left,y:ie.clientY-qe.top},bt={x:Te.left-qe.left,y:Te.top-qe.top,width:Te.width,height:Te.height},{coords:{x:nt,y:Zt},resourceIndex:Vt,disposition:Hl,reservationData:zl}=gi(jt,le,vt,ge,Me,Ye,O);x({coords:{x:nt,y:Zt},mouseCoords:xt,resourceIndex:Vt,disposition:Hl,reservationData:zl,tileBounds:bt}),X(!0)},4)),se=p.useRef(wn((ie,ce)=>{G(),m(ie.map(le=>({...le,data:le.data.filter(ge=>{const{title:Me,description:Ye,subtitle:Xe}=ge;return(Me==null?void 0:Me.toLowerCase().includes(ce.toLowerCase()))||(Xe==null?void 0:Xe.toLowerCase().includes(ce.toLowerCase()))||(Ye==null?void 0:Ye.toLowerCase().includes(ce.toLowerCase()))})})).filter(le=>le.data.length>0))},500)),fe=(ie,ce)=>{if(ie)return ce.flatMap(le=>le.data).find(le=>le.segmentId===ie)},$e=ie=>{if(!ie.target)return{tile:null,segmentId:null};const ce=ie.target.closest("[data-segment-id]");return ce?{tile:ce,segmentId:ce.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},ue=ie=>{const ce=ie.target.value;y(ce),se.current.cancel(),ce?se.current(e,ce):(G(),m(e))},me=p.useCallback(()=>{ve.current.cancel(),X(!1)},[]);return p.useEffect(()=>{const ie=le=>ve.current(le,e,I,ae,de,Q),ce=U.current;if(ce)return ce.addEventListener("mousemove",ie),ce.addEventListener("mouseleave",me),()=>{ce.removeEventListener("mousemove",ie),ce.removeEventListener("mouseleave",me)}},[ve,me,de,ae,I,Q,e]),p.useEffect(()=>{f?(se.current.cancel(),se.current(e,f)):m(e)},[e,f]),p.useLayoutEffect(()=>{const ie=K.current;if(!ie)return;const ce=()=>re(ie.offsetHeight);ce();const le=new ResizeObserver(ce);return le.observe(ie),()=>le.disconnect()},[]),i.jsxs(Vi,{children:[i.jsx(ec,{headerHeight:ee,data:H,categories:V,pageNum:te,pagesAmount:D,rows:J,onLoadNext:Z,onLoadPrevious:C,searchInputValue:f,onSearchInputChange:ue,onItemClick:o,collapsedGroups:S,fadingGroups:w,onToggleGroup:g,allGroupIds:q,onExpandAll:T,onCollapseAll:j}),i.jsxs(Gi,{children:[i.jsx(Ec,{ref:K,zoom:Q,topBarWidth:a,showThemeToggle:Y,toggleTheme:s}),e.length?i.jsx(ui,{data:R,baseData:r||e,zoom:Q,rows:he,ref:U,onTileClick:n,onEventDrop:l,onEventDrag:d,draggableConfig:c,onDragStateChange:P,onTimeRangeSelect:u,onMultiTimeRangeSelect:h,clickToAddConfig:v,separatorRowIndices:ye,subcontractSeparatorRow:Ce,fadingUnitIds:ne}):i.jsx(Xi,{width:a,children:k?i.jsx(An,{isLoading:k,position:"left"}):i.jsx(Zi,{})}),B&&i.jsx(ll,{tooltipData:M,visible:N&&!F})]})]})},Qi=b.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Pe+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.primary};
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
`,na=b.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin-left: 4px;
  text-transform: capitalize;
  white-space: nowrap;
`,ra=b.div`
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
`,Lr=b.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 650;
  color: ${({$primary:e})=>e?"#fff":"#3a4c46"};
  border: 1px solid ${({$primary:e})=>e?"transparent":"#c8d5cd"};
  background: ${({theme:e,$primary:r})=>r?e.colors.accent:"#fff"};
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
`,oa=b.label`
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
`,sa=b.button`
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
`,ia=b.span`
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
`,gt=({children:e,sw:r=2})=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:e}),aa=()=>{var r,t;const e=document.getElementById(yr);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(r=e==null?void 0:e.requestFullscreen)==null||r.call(e)},ca=()=>{const{config:e,date:r,zoom:t,handleGoNext:n,handleGoPrev:o,handleGoToday:s,setZoom:a,goToDate:l,toggleDisplayActiveUnits:d,toolbarActions:c}=je();Ze();const{filterButtonState:u=-1}=e,h=()=>{var v;(v=document.querySelector(`#${We} input[placeholder]`))==null||v.focus()};return i.jsxs(Qi,{width:0,children:[i.jsxs(Ir,{$at:"start",children:[i.jsxs(ea,{children:[i.jsx(Yr,{onClick:o,"aria-label":"Anterior",children:i.jsx(gt,{children:i.jsx("path",{d:"m15 18-6-6 6-6"})})}),i.jsx(ta,{onClick:s,children:"Hoy"}),i.jsx(Yr,{onClick:n,"aria-label":"Siguiente",children:i.jsx(gt,{children:i.jsx("path",{d:"m9 18 6-6-6-6"})})})]}),i.jsx(na,{children:r.locale(A.locale()).format("MMMM YYYY")}),i.jsx(Ri,{}),i.jsxs(ra,{children:[i.jsx("button",{className:t===2?"on":"",onClick:()=>a(2),children:"Día"}),i.jsx("button",{className:t===0?"on":"",onClick:()=>a(0),children:"Semana"}),i.jsx("button",{className:t===1?"on":"",onClick:()=>a(1),children:"Mes"})]}),e.showJumpToDate!==!1&&i.jsxs(oa,{children:[i.jsxs(gt,{children:[i.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),i.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),i.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",i.jsx("input",{type:"date",onChange:v=>v.target.value&&l(v.target.value)})]}),i.jsxs(sa,{onClick:h,children:[i.jsxs(gt,{children:[i.jsx("circle",{cx:"11",cy:"11",r:"7"}),i.jsx("path",{d:"m20 20-3.2-3.2"})]}),"Buscar",i.jsx("span",{className:"k",children:"⌘K"})]})]}),i.jsxs(Ir,{$at:"end",children:[e.showFilterButton!==!1&&u>=0&&i.jsxs(Lr,{$primary:!!u,onClick:d,children:[i.jsx(gt,{children:i.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!u&&i.jsx(ia,{children:u})]}),e.showFullscreenButton!==!1&&i.jsxs(Lr,{onClick:aa,children:[i.jsx(gt,{children:i.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]}),c]})]})},la={add:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>oe.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),oe.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Tn=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=Lt(),a=la[e];return a?i.jsx(a,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},da=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r];b.button`
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
  ${({theme:e,variant:r,disabled:t})=>da(e,r,t)}
`;const ua=b.div`
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
  font-family: ${Ne};
`,fa=b.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,ha=b.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,pa=b.div`
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
`,ma=b.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,ga=b.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,ya=b.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({$sev:e})=>e===2?"#c6483d":e===1?"#d98a22":"#93b1a6"};
`,va=b.div`
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
`,xa=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,ba=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`,wa=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,Sa=b.div`
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
`,Ca=()=>{const{date:e,zoom:r,data:t,goToDate:n,config:o}=je(),s=Ze(),a=p.useRef(null),[l,d]=p.useState(null),c=p.useMemo(()=>Array.from({length:12},(w,E)=>A().month(E).format("MMM").toUpperCase()),[s]),u=p.useMemo(()=>A().startOf("day"),[]),{domainStart:h,domainEnd:v,domainDays:M}=p.useMemo(()=>{const w=u.subtract(3,"month").startOf("month"),E=u.add(9,"month").endOf("month");return{domainStart:w,domainEnd:E,domainDays:E.diff(w,"day")+1}},[u]),x=w=>w.diff(h,"day")/M*100,$=w=>Math.min(100,Math.max(0,w)),m=p.useMemo(()=>{const w=[];let E=h.startOf("month");for(;E.isBefore(v);)w.push(E),E=E.add(1,"month");return w},[h,v]),N=o==null?void 0:o.yearCounts,X=p.useMemo(()=>{const w=Math.ceil(M/7),E=new Array(w).fill(0),W=new Array(w).fill(0),Q=K=>{const ee=K.diff(h,"day");return ee<0||ee>=M?-1:Math.floor(ee/7)};if(N&&N.length)for(const K of N){const ee=Q(A(K.date));ee<0||ee>=w||(E[ee]+=K.count)}else for(const K of t??[])for(const ee of K.data??[]){const re=Q(A(ee.startDate));re<0||re>=w||(E[re]+=1)}for(const K of t??[])for(const ee of K.data??[]){const re=Q(A(ee.startDate));if(re<0||re>=w)continue;const L=ee.readiness==="sin_chofer"?2:ee.readiness==="sin_avisar"?1:0;L>W[re]&&(W[re]=L)}const I=E.length?Math.max(...E):0;if(I<=0)return E.map((K,ee)=>({h:0,sev:W[ee]}));const k=E.filter(K=>K>0).sort((K,ee)=>K-ee),O=k.length>>1,B=k.length%2?k[O]:(k[O-1]+k[O])/2,Y=B>0?I/B:1,U=Math.min(1,Math.max(.45,1/(1+Math.log2(Math.max(1,Y)))));return E.map((K,ee)=>({h:K>0?Math.min(100,100*Math.pow(K/I,U)):0,sev:W[ee]}))},[t,N,h,M]),F=x(u),P=w=>{const{startDate:E,endDate:W}=Ht(w,r),Q=$(x(E));return{left:Q,width:$(x(W))-Q,startDate:E,endDate:W}},f=P(e),y=l?P(l.d):null,S=w=>`${w.date()} ${c[w.month()]}`,_=w=>{var Q;const E=(Q=a.current)==null?void 0:Q.getBoundingClientRect();if(!E)return null;const W=Math.min(1,Math.max(0,(w-E.left)/E.width));return{f:W,d:h.add(Math.round(W*(M-1)),"day")}};return i.jsxs(ua,{children:[i.jsxs(fa,{children:["Navegar",i.jsx("br",{}),"por fecha"]}),i.jsxs(ha,{ref:a,onClick:w=>{const E=_(w.clientX);E&&n(E.d.toDate())},onMouseMove:w=>{const E=_(w.clientX);E&&d({left:E.f*100,d:E.d})},onMouseLeave:()=>d(null),children:[i.jsx(pa,{children:m.map((w,E)=>i.jsx("span",{style:{left:`${x(w)}%`},children:E===0||w.month()===0?`${c[w.month()]} ${w.format("YY")}`:c[w.month()]},E))}),m.map((w,E)=>E===0?null:i.jsx(ma,{style:{left:`${x(w)}%`}},E)),i.jsx(ga,{children:X.map((w,E)=>i.jsx(ya,{$sev:w.sev,style:{height:`${w.h}%`}},E))}),i.jsx(xa,{style:{left:`${f.left}%`,width:`${f.width}%`}}),i.jsx(va,{style:{left:`${$(F)}%`},children:i.jsx("span",{children:"HOY"})}),l&&y&&i.jsxs(i.Fragment,{children:[i.jsx(ba,{style:{left:`${y.left}%`,width:`${y.width}%`}}),i.jsx(wa,{style:{left:`${l.left}%`}}),i.jsx(Sa,{style:{left:`${l.left}%`},children:`Ir a ${S(l.d)}`})]})]})]})},Ma=b.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,ka=b.div`
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
`,Da=({data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,schedulerRef:u,onTimeRangeSelect:h,onMultiTimeRangeSelect:v,clickToAddConfig:M})=>{const{goToDate:x,handleGoToday:$,zoomIn:m,zoomOut:N,zoom:X}=je();return p.useImperativeHandle(u,()=>({goToDate:x,goToToday:$,setZoom:F=>{if(!Cr(F))return;const P=F-X;if(P>0)for(let f=0;f<P;f++)m();else for(let f=0;f<Math.abs(P);f++)N()}}),[x,$,X,m,N]),i.jsx(Ji,{data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:h,onMultiTimeRangeSelect:v,clickToAddConfig:M})},Ea=p.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:a,onTileClick:l,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:u,onItemClick:h,isLoading:v,onEventDrop:M,onEventDrag:x,draggableConfig:$,onTimeRangeSelect:m,onMultiTimeRangeSelect:N,clickToAddConfig:X},F){var B;const P=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),f=p.useRef(null),y=p.useRef(null),[S,_]=p.useState((B=f.current)==null?void 0:B.clientWidth),w=p.useMemo(()=>A(s),[s]),[E,W]=p.useState(P.defaultTheme??"light"),Q=()=>{W(E==="light"?"dark":"light")},I=E==="light"?fs:hs,k=P.theme?P.theme[I.mode]:{},O={...I,colors:{...I.colors,...k}};return p.useImperativeHandle(F,()=>({goToDate:Y=>{var U;return(U=y.current)==null?void 0:U.goToDate(Y)},goToToday:()=>{var Y;return(Y=y.current)==null?void 0:Y.goToToday()},setZoom:Y=>{var U;return(U=y.current)==null?void 0:U.setZoom(Y)}}),[]),p.useLayoutEffect(()=>{const Y=()=>{f.current&&_(f.current.clientWidth)};return Y(),window.addEventListener("resize",Y),()=>window.removeEventListener("resize",Y)},[]),i.jsxs(i.Fragment,{children:[i.jsx(us,{}),i.jsx(cs,{theme:O,children:i.jsx(Hi,{lang:P.lang,translations:P.translations,children:i.jsx(ri,{data:r,isLoading:!!v,config:P,onRangeChange:a,defaultStartDate:w,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:u,children:i.jsxs(Ma,{id:yr,children:[i.jsx(ka,{showScroll:!!r.length,$footer:P.showOverview!==!1&&!!r.length,id:We,ref:f,children:i.jsx($a,{children:i.jsx(Da,{data:r,baseData:n,categories:t,onTileClick:l,topBarWidth:S??0,onItemClick:h,toggleTheme:Q,onEventDrop:M,onEventDrag:x,draggableConfig:$,schedulerRef:y,onTimeRangeSelect:m,onMultiTimeRangeSelect:N,clickToAddConfig:X})})}),P.showOverview!==!1&&!!r.length&&i.jsx(Ca,{})]})})})})]})}),_a=b.div`
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
  ${at}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,Nr=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:a,loadPrevious:l}=Ze(),d=e==="next"?`${a} ${o+2}/${s}`:`${l} ${o}/${s}`;return i.jsx(_a,{intent:e,children:i.jsxs(Ta,{onClick:r,isVisible:n,children:[t&&i.jsx(Aa,{children:t}),i.jsx(Pa,{children:d})]})})},Oa=b.div`
  min-width: ${Pe+"px"};
  max-width: ${Pe+"px"};
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
  width: ${Pe}px;
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
`,Fa=He`
  from { opacity: 1; }
  to { opacity: 0; }
`,Fr=b.div`
  ${({$fading:e})=>e&&st`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Fa} 180ms ease forwards;
      }
    `}
`,Ba=b.button`
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
`,Ha=He`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,za=b.div`
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
`,Wa=b.div`
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
`,Br=b.p`
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
`,Ga=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),Xa=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),i.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),i.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),Ua=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),i.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),Ka=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>i.jsx(za,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:i.jsxs(Wa,{children:[i.jsx(ja,{$provider:o,children:Ga(r.icon)?i.jsx(Za,{src:r.icon,alt:""}):o?i.jsx(Ua,{}):i.jsx(Xa,{})}),i.jsxs(Va,{children:[i.jsx(Br,{isMain:!0,children:r.title}),i.jsx(Br,{children:r.subtitle})]})]})}),qa=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:e.colors.accent};
  background: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder+"24":e.colors.accent+"14"};
  border-left: 3px solid
    ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder:"transparent"};
  border-bottom: 1px solid
    ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder:e.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractBorder+"33":e.colors.accent+"22"};
  }
`,Ja=b.span`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:e.colors.accent};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`,Qa=b.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:e.colors.accent};
  flex-shrink: 0;
`,Ra=b.div`
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
`,Hr=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>i.jsxs(qa,{$variant:o,onClick:n,title:e,children:[i.jsx(Ra,{$collapsed:t,children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:i.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx(Ja,{$variant:o,children:e}),i.jsx(Qa,{$variant:o,children:r})]}),ec=({data:e,categories:r,headerHeight:t,rows:n,onLoadNext:o,onLoadPrevious:s,pageNum:a,pagesAmount:l,searchInputValue:d,onSearchInputChange:c,onItemClick:u,collapsedGroups:h,fadingGroups:v,onToggleGroup:M,allGroupIds:x,onExpandAll:$,onCollapseAll:m})=>{const[N,X]=p.useState(!1),F=Ze(),P=()=>X(k=>!k),f=r?[...r].sort((k,O)=>k.maxPassengers-O.maxPassengers):[],y=f.length>0,S=x.length>0,_=S&&h.size===x.length;S&&h.size;const w=e.filter(k=>k.isSubcontract),E=F.subcontract??"Subcontract",W=k=>{const O=e.indexOf(k);return i.jsx(Ka,{id:k.id,item:k.label,rows:n[O],onItemClick:u,isSubcontract:k.isSubcontract},k.id)},Q=k=>{const O=e.filter(K=>!K.isSubcontract&&K.categoryId===k.id);if(O.length===0)return null;const B=h.has(k.id),Y=v.has(k.id),U=k.name;return i.jsxs("div",{children:[i.jsx(Hr,{label:U,count:O.length,isCollapsed:B||Y,onToggle:()=>M(k.id),variant:"category"}),!B&&i.jsx(Fr,{$fading:Y,children:O.map(W)})]},k.id)},I=e.filter(k=>!k.isSubcontract&&(!k.categoryId||!y));return i.jsxs(Oa,{children:[i.jsxs(Ia,{$height:t,children:[i.jsxs(Ya,{children:[i.jsxs(Na,{isFocused:N,children:[i.jsx(La,{placeholder:F.search,value:d,onChange:c,onFocus:P,onBlur:P}),i.jsx(Tn,{iconName:"search"})]}),S&&i.jsx(Ba,{title:_?"Expand all":"Collapse all",onClick:_?$:m,$allCollapsed:_,children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:_?i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),i.jsx(Nr,{intent:"previous",isVisible:a!==0,onClick:s,icon:i.jsx(Tn,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]}),y?f.map(Q):I.map(W),y&&I.length>0&&I.map(W),w.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Hr,{label:E,count:w.length,isCollapsed:h.has("__subcontract__")||v.has("__subcontract__"),onToggle:()=>M("__subcontract__"),variant:"subcontract"}),!h.has("__subcontract__")&&i.jsx(Fr,{$fading:v.has("__subcontract__"),children:w.map(W)})]}),i.jsx(Nr,{intent:"next",isVisible:a!==l-1,onClick:o,icon:i.jsx(Tn,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]})},tc=b.div`
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
`,nc=He`
from{
    left: -100%;
}
to{
    left: 100%;
}`,rc=b.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${nc} 1s infinite;
`,An=({isLoading:e,position:r})=>e?i.jsx(tc,{position:r,children:i.jsx(rc,{})}):null,Ve=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:a,textYPos:l,label:d,font:c,isBottomRow:u,fillStyle:h,topText:v,bottomText:M,strokeStyle:x,labelBetweenCells:$}=e;if(t.beginPath(),t.strokeStyle=x??r.colors.border,t.setLineDash([]),d&&c&&l){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,a),$?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+a),t.lineTo(n+s,o+a),t.stroke(),t.moveTo(n+s/2,o+a),t.lineTo(n+s/2,o+a-5),t.stroke()):t.strokeRect(n+.5,o+.5,s,a),t.font=c;const m=n+s/2-t.measureText(d).width/2;t.textBaseline="middle",t.fillStyle=r.colors.accent,t.fillText(d,m,l)}if(u&&h&&v&&M){t.fillStyle=h,t.fillRect(n,o,s,a),t.strokeRect(n+.5,o+.5,s,a),t.font=v.font;const m=n+s/2-t.measureText(v.label).width/2;t.fillStyle=v.color,t.fillText(v.label,m,v.y),t.font=M.font;const N=n+s/2-t.measureText(M.label).width/2;t.fillStyle=M.color,t.fillText(M.label,N,M.y)}},Pn=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},oc=(e,r,t,n)=>{const o=dt-Re/ms,s=dt-Re/gs,a=ze+lt;let l=0;for(let d=0;d<r;d++){const c=br(A(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(d,"days")),u=c.isCurrentDay;if(Ve({ctx:e,x:l,y:a,width:ke,height:Re,isBottomRow:!0,fillStyle:u?n.colors.currentDay:c.isBusinessDay?n.colors.gridBackground:n.colors.primary,topText:{y:o,label:u?"":c.dayName.toUpperCase(),font:Fe.bottomRow.name,color:Pn({isCurrent:!1,isBusinessDay:c.isBusinessDay},n)},bottomText:{y:s,label:`${c.dayOfMonth}`,font:u?`700 10px ${Ne}`:Fe.bottomRow.number,color:u?n.colors.today:Pn({isCurrent:!1,isBusinessDay:c.isBusinessDay,variant:"bottomRow"},n)}},n),u){const M=l+ke/2,x=o-13/2;e.save(),e.fillStyle=n.colors.today,e.beginPath(),e.roundRect?e.roundRect(M-30/2,x,30,13,5):e.rect(M-30/2,x,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Ne}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",M,x+13/2+.5),e.restore()}l+=ke}},sc=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*Ie;const s=ze;let l=t.month;for(let d=0;d<r;d++){l>=cn&&(l=0);const c=xr(t,d)*Ie;Ve({ctx:e,x:o,y:s,width:c,height:lt,textYPos:pr,label:A().month(l).format("MMMM").toUpperCase(),font:Fe.bottomRow.number},n),o+=c,l++}},ic=(e,r,t)=>{let o=0,s=0,a=A(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month();o=-r.dayOfMonth*ke+ke;for(let l=0;l<cn;l++)a>cn-1&&(a=0),s=A(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(l,"months").daysInMonth()*ke,Ve({ctx:e,x:o,y:0,width:s,height:ze,textYPos:dn,label:A(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(a).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${A(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(a).format("MMMM YYYY").toUpperCase()}`,font:Fe.topRow},t),o+=s,a++},ac=(e,r,t,n)=>{const o=7*ke,s=ze,a=e.canvas.width/o+o,l=r.weekOfYear;let d=0;for(let c=0;c<a;c++){const u=A(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let h=(l+c)%ur;h<=0&&(h+=ur),u!==1&&c===0&&(d=-u*ke+ke),Ve({ctx:e,x:d,y:s,width:o,height:lt,textYPos:pr,label:`${t.toUpperCase()} ${h}`,font:Fe.middleRow},n),d+=o}},cc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},lc=(e,r,t,n,o)=>{const s=dt-Re/1.6,a=dt-Re/4.5,l=ze+lt;let d=0;for(let c=0;c<r;c++){const u=A(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),h=u.isSame(A(),"week");Ve({ctx:e,x:d,y:l,width:ut,height:Re,isBottomRow:!0,fillStyle:h?o.colors.today+"26":cc({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:u.isoWeek().toString(),font:h?`700 14px ${Ne}`:Fe.bottomRow.name,color:h?o.colors.today:Pn({isCurrent:h},o)},bottomText:{y:a,label:n.toUpperCase(),font:Fe.middleRow,color:o.colors.placeholder}},o),d+=ut}},dc=(e,r,t,n)=>{const s=r.year,a=e.canvas.width*2;let l=0,d=0,c=(vr(s)-t+1)*Ie,u=0;for(;l+u<=a;)d>0&&(c=vr(s+d)*Ie),u+c>a&&d>0&&(c=Math.ceil((a-u)/Ie)*Ie),Ve({ctx:e,x:l,y:0,width:c,height:ze,textYPos:dn,label:(s+d).toString(),font:Fe.topRow},n),l+=c,u+=c,d++},uc=(e,r,t,n)=>{const o=Math.floor(r/Nt)+2,s=Nt*_e;let d=-A(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*_e+.5*_e;for(let c=0;c<o;c++){const u=A(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Ve({ctx:e,x:d,y:ft,width:s,height:Mt,textYPos:ft+Mt/2+2,label:u,font:Fe.bottomRow.number},n),d+=s}},fc=(e,r,t,n)=>{const o=Math.ceil(r/Nt),s=A(`${t.year}-${t.month+1}-${t.dayOfMonth}`),a=s.add(o-1,"days"),l=s.month(),d=a.add(1,"day").month(),c=l===d?1:2;let u=.5*_e;for(let h=0;h<c;h++){const v=A(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),x=A(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),$=x.format("MMMM").toUpperCase(),m=x.diff(v,"hour")+1,N=h===0?m*_e:r*_e;Ve({ctx:e,x:u,y:0,width:N,height:ft,textYPos:dn,label:$,font:Fe.topRow},n),u+=N}},hc=(e,r,t,n)=>{let o=0;const s=ft+Mt,a=A(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=_e;for(let d=0;d<r;d++){const c=a.add(d,"hours").format("h:00a").toUpperCase();Ve({ctx:e,x:o,y:s,width:l,height:an,label:c,font:Fe.bottomRow.hoursInDay,textYPos:ft+Mt+an/2+2,labelBetweenCells:!0},n),o+=_e}},pc=(e,r,t,n,o,s,a)=>{switch(r){case 0:dc(e,n,s,a),sc(e,t,n,a),lc(e,t,n,o,a);break;case 1:ic(e,n,a),ac(e,n,o,a),oc(e,t,n,a);break;case 2:fc(e,t,n,a),uc(e,t,n,a),hc(e,t,n,a);break}},mc=b.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,gc=b.div`
  position: sticky;
  left: 0;
  width: ${({$width:e})=>e}px;
  z-index: 3;
`,yc=b.div`
  height: ${dt}px;
  display: block;
`,vc=b.canvas``,xc={transfer:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 8h13l-3-3"}),i.jsx("path",{d:"M20 16H7l3 3"})]}),sun:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),i.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),i.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:i.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 3 2 20h20z"}),i.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),i.jsx("path",{d:"M12 7.5V12l3 2"})]})},Ge=({name:e,className:r,strokeWidth:t=2})=>i.jsx("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:xc[e]}),bc=b.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Pe+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,zr=b.span`
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
`,Wt=b.span`
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
`,wc=b.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,Sc=b.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,Cc=b.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,Mc=b.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,kc=b.span`
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
`,$c=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],Dc=()=>i.jsxs(bc,{children:[i.jsx(zr,{children:"Leyenda"}),i.jsxs(Wt,{children:[i.jsx(Ge,{name:"transfer"})," Transfer"]}),i.jsxs(Wt,{children:[i.jsx(Ge,{name:"sun"})," Gira 1 día"]}),i.jsxs(Wt,{children:[i.jsx(Ge,{name:"tour"})," Gira multidía"]}),i.jsxs(Wt,{children:[i.jsx(wc,{children:"SUB"})," Subcontrato"]}),i.jsx(Sc,{}),i.jsxs(zr,{children:["Estado ",i.jsx("em",{children:"franja izq. + punto esq."})]}),$c.map(e=>i.jsxs(Cc,{children:[i.jsx(Mc,{style:{background:e.stripe}}),i.jsx(kc,{style:{color:e.color},children:i.jsx(Ge,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),Ec=p.forwardRef(function({zoom:r,topBarWidth:t,showThemeToggle:n,toggleTheme:o},s){const{week:a}=Ze(),{date:l,cols:d,dayOfYear:c,startDate:u,config:h}=je(),v=p.useRef(null),M=Lt(),x=p.useCallback($=>{const m=Sn(),X=(r===2?ps:dt)+1;kr($,m,X),pc($,r,d,u,a,c,M)},[d,c,u,a,r,M]);return p.useEffect(()=>{if(!v.current)return;const $=v.current.getContext("2d");if(!$)return;const m=()=>x($);return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[x]),p.useEffect(()=>{const $=v.current;if(!$)return;$.style.letterSpacing="1px";const m=$.getContext("2d");m&&x(m)},[l,r,x]),i.jsxs(mc,{ref:s,children:[(h.showTopbar!==!1||h.showLegend!==!1)&&i.jsxs(gc,{$width:t,children:[h.showTopbar!==!1&&i.jsx(ca,{width:t,showThemeToggle:n,toggleTheme:o}),h.showLegend!==!1&&i.jsx(Dc,{})]}),i.jsx(yc,{id:ys,children:i.jsx(vc,{ref:v})})]})}),_c=(e,r,t)=>{let n;switch(t){case 0:n=Ie;break;case 2:n=_e;break;default:n=ke}const s=e.startDate.startOf("day"),a=e.endDate.startOf("day"),l=r.startDate.startOf("day"),d=r.endDate.startOf("day"),c=()=>{let u;switch(t){case 2:u=(e.startDate.diff(r.startDate,"minute")/De+1)*n-n/2;break;default:u=s.diff(l,"day")*n}return Math.max(0,u)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(e.startDate,"minute")/De*n,50);break;default:u=Math.max(a.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(r.startDate,"minute")/De*n+.5*n,50);break;default:u=Math.max(a.diff(l,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(e.startDate,"minute")/De*n,50);break;default:u=Math.max(d.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(r.startDate,"minute")/De*n,50);break;default:u=Math.max(d.diff(l,"day")*n+n,50)}return{x:c(),width:u}}return{x:c(),width:50}},Tc=(e,r,t,n,o,s)=>{const a=e*pe+vs,l=r.hour(),d=t.hour();let c,u,h,v;switch(s){case 2:{c=A(n),u=A(o),h=A(r).hour(l).minute(0),v=A(t).hour(d).minute(0);break}default:{c=A(n).hour(0).minute(0),u=A(o).hour(23).minute(59),h=r,v=t;break}}return{..._c({startDate:c,endDate:u},{startDate:h,endDate:v},s),y:a}},Wr=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"};b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,b.p`
  ${at}
  ${ct}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const Ac=He`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,Pc=He`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`,Oc=b.button`
  ${at}
  position: absolute;
  height: ${ln}px;
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
    animation: ${Ac} 180ms ease-out;
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
  ${({$exiting:e})=>e&&st`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Pc} 190ms ease-out forwards;
      }
    `}
`,Ic=b.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`,Yc=b.div`
  position: sticky;
  left: ${Pe+4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`,jr=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,Lc=b.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,Nc=b.span`
  ${ct}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,Fc=b.span`
  ${ct}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,Bc=b.span`
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
`,Hc=b.div`
  ${ct}
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  padding-right: 46px;
  opacity: 0.9;
  font-size: 9.5px;
  font-weight: 600;
  & svg {
    width: 11px;
    height: 11px;
    flex: none;
    opacity: 0.9;
  }
`,Zr=b.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,Vr=b.span`
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
`,Gr=b.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,zc=b.div`
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
`,Xr=b.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({$end:e})=>e?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.95)"};
  color: ${({$end:e})=>e?"#3A4C46":"#183D3D"};
`,Wc=34,jc={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63"}},Zc="#3E8E5A",Vc="#D98A22",Ur=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onDragStart:s,isDragging:a=!1,isDraggable:l=!0,yOffset:d=0,exiting:c=!1})=>{const{date:u}=je(),h=Ht(u,t),{y:v,x:M,width:x}=Tc(e,h.startDate,h.endDate,r.startDate,r.endDate,t),{colors:$}=Lt(),m=p.useRef(null),N=A(r.startDate).isSame(A(r.endDate),"day"),X=r.eventType===kt.Tour,F=r.eventType===kt.Transfer,P=N&&(X||F),f=Q=>{m.current={x:Q.clientX,y:Q.clientY},l&&s&&(Q.preventDefault(),s(r,Q))},y=Q=>{if(m.current){const I=Math.abs(Q.clientX-m.current.x),k=Math.abs(Q.clientY-m.current.y);Math.sqrt(I*I+k*k)<=5&&(o==null||o(r)),m.current=null}else o==null||o(r)},S={left:`${M}px`,top:`${v+d}px`,backgroundColor:`${r.bgColor??$.defaultTile}`,width:`${x}px`,color:Wr(r.bgColor??"")},_=!n&&r.readiness?jc[r.readiness]:null,w=n&&r.subcontractConfirmed===!1,E=n?w?Vc:Zc:_==null?void 0:_.stripe,W=Q=>i.jsxs(Oc,{"data-segment-id":r.segmentId,style:S,onClick:y,onMouseDown:f,onDragStart:I=>I.preventDefault(),isDraggable:l,isDragging:a,$unconfirmed:w,$exiting:c,children:[E&&i.jsx(Ic,{style:{background:E}}),Q]});return W(P?i.jsxs(i.Fragment,{children:[(n||_)&&i.jsx(Zr,{$sm:!0,children:n?i.jsx(Gr,{children:"SUB"}):_&&i.jsx(Vr,{$sm:!0,style:{color:_.color},children:i.jsx(Ge,{name:_.icon,strokeWidth:_.icon==="check"?2.6:2.2})})}),i.jsxs(zc,{$transfer:F,children:[i.jsx(Ge,{name:F?"transfer":"sun",strokeWidth:2.4}),x>=Wc&&i.jsxs(i.Fragment,{children:[i.jsx(Xr,{children:A(r.startDate).format("HH:mm")}),!F&&i.jsx(Xr,{$end:!0,children:A(r.endDate).format("HH:mm")})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(Zr,{children:n?i.jsx(Gr,{children:"SUB"}):_&&i.jsx(Vr,{style:{color:_.color},children:i.jsx(Ge,{name:_.icon,strokeWidth:_.icon==="check"?2.6:2.2})})}),r.bookingNumber&&i.jsx(Bc,{children:r.bookingNumber}),i.jsxs(Yc,{children:[i.jsxs(jr,{$pad:!0,children:[i.jsx(Lc,{children:i.jsx(Ge,{name:F?"transfer":"tour"})}),i.jsx(Nc,{children:r.title})]}),r.subtitle&&i.jsx(jr,{children:i.jsx(Fc,{children:r.subtitle})}),r.driver&&i.jsxs(Hc,{children:[i.jsx(Ge,{name:"person"}),r.driver]})]})]}))},Kr=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Oe},Gc=He`
  from { opacity: 0; }
  to { opacity: 1; }
`,Xc=b.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${pe}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #93b1a6;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Gc} 200ms ease-out;
  }
  pointer-events: none;
`,Uc=({data:e,zoom:r,onTileClick:t,onDragStart:n,isDraggable:o,draggingEventId:s,separatorRowIndices:a=[],fadingUnitIds:l})=>{const{nodes:d,liveMap:c}=p.useMemo(()=>{const $=new Map;let m=0;return{nodes:e.map((X,F)=>{F>0&&(m+=Math.max(e[F-1].data.length,1));const P=!!(l!=null&&l.has(X.id));if(!X.data.some(f=>f.length>0)){const f=Kr(m,a);return[i.jsx(Xc,{style:{top:`${m*pe+f}px`,opacity:P?0:void 0,transition:"opacity 180ms ease"},children:"Disponible"},`dispo-${X.id}`)]}return X.data.map((f,y)=>f.map(S=>{const _=s===S.segmentId,w=o?o(S):!1,E=y+m,W=Kr(E,a);return $.set(S.segmentId,{project:S,absoluteRow:E,yOffset:W,isSubcontract:!!X.isSubcontract}),i.jsx(Ur,{row:E,data:S,zoom:r,isSubcontract:X.isSubcontract,onTileClick:t,onDragStart:n,isDragging:_,isDraggable:w,yOffset:W,exiting:P},S.segmentId)}))}).flat(2),liveMap:$}},[e,t,r,n,o,s,a,l]),u=p.useRef(new Map),h=p.useRef([]),[v,M]=p.useState([]);p.useEffect(()=>()=>h.current.forEach(clearTimeout),[]),p.useEffect(()=>{const $=u.current;u.current=c;const m=[];if($.forEach((F,P)=>{c.has(P)||m.push(F)}),M(F=>{let P=F.filter(f=>!c.has(f.project.segmentId));for(const f of m)P.some(y=>y.project.segmentId===f.project.segmentId)||(P=[...P,f]);return P}),!m.length)return;const N=new Set(m.map(F=>F.project.segmentId)),X=setTimeout(()=>{M(F=>F.filter(P=>!N.has(P.project.segmentId)))},220);h.current.push(X)},[c]);const x=v.filter($=>!c.has($.project.segmentId)).map($=>i.jsx(Ur,{row:$.absoluteRow,data:$.project,zoom:r,isSubcontract:$.isSubcontract,yOffset:$.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},$.project.segmentId));return i.jsx(i.Fragment,{children:[...d,...x]})};b.div`
  box-sizing: border-box;
  font-family: ${Ne};
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
`;const Kc=b.div`
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
`,qc=b.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Jc=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`,Qc=b.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Rc=b.span`
  flex-shrink: 0;
  background: ${({$type:e})=>e==="transfer"?"#dbeafe":"#dcfce7"};
  color: ${({$type:e})=>e==="transfer"?"#1e40af":"#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`,el=b.div`
  ${at}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,tl=b.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`,nl=b.div`
  padding: 10px 12px;
`,rl=b.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,qr=b.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,Jr=b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,Qr=b.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Rr=b.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,eo=b.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,ol=b.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,sl=b.div`
  min-width: 0;
`,il=b.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,al=b.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`,to=b.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,$t=b.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Dt=b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Et=b.div`
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
`;b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.div``,b.span``,b.div``,b.div``,b.div``,b.div``,b.p``,b.span``;const cl={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",salida:"Salida",destino:"Destino",regreso:"Regreso",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},ll=({tooltipData:e,visible:r=!0})=>{const{mouseCoords:t,reservationData:n}=e,o=p.useRef(null),[s,a]=p.useState("below"),l=Ze(),d={...cl,...l.tooltip};p.useLayoutEffect(()=>{if(!o.current||!t)return;const x=o.current,{width:$,height:m}=x.getBoundingClientRect(),N=x.parentElement;if(!N)return;const X=N.getBoundingClientRect(),F=12,P=4,f=X.height-t.y,y=X.width-t.x;let S=t.x+F,_=t.y+F,w="below";y<$+F&&(S=t.x-$-F),f<m+F&&(_=t.y-m-F,w="above"),S=Math.max(P,Math.min(S,X.width-$-P)),_=Math.max(P,Math.min(_,X.height-m-P)),a(w),x.style.left=`${S}px`,x.style.top=`${_}px`},[t]);const c=n.reservationType===kt.Tour,u=c&&n.isOneDayEvent,h=()=>c?u?"oneday":"tour":"transfer",v=()=>c?u?d.oneDay:d.tour:d.transfer,M=[n.groupName&&{label:d.groupName,value:n.groupName},n.driver&&{label:d.driver,value:n.driver},n.passengers&&{label:d.passengers,value:String(n.passengers)},n.flightNumber&&{label:d.flightNumber,value:n.flightNumber}].filter(Boolean);return i.jsxs(Kc,{ref:o,$position:s,$visible:r,children:[i.jsxs(qc,{children:[i.jsxs(Jc,{children:[i.jsx(Qc,{children:n.bookingNumber}),i.jsx(Rc,{$type:h(),children:v()})]}),i.jsx(el,{children:n.eventName}),n.client&&i.jsx(tl,{children:n.client})]}),i.jsxs(nl,{children:[i.jsxs(rl,{children:[i.jsxs(qr,{children:[i.jsx(Jr,{children:d.startDate}),i.jsxs(Qr,{children:[i.jsx(Rr,{children:n.startDate})," ",i.jsx(eo,{children:n.startTime})]})]}),c&&n.endDate&&i.jsxs(qr,{$isEnd:!0,children:[i.jsx(Jr,{children:d.endDate}),i.jsxs(Qr,{children:[i.jsx(Rr,{children:n.endDate})," ",i.jsx(eo,{children:n.endTime})]})]})]}),M.length>0&&i.jsx(ol,{children:M.map((x,$)=>i.jsxs(sl,{children:[i.jsx(il,{children:x.label}),i.jsx(al,{children:x.value})]},$))}),(n.departureAddress||n.destinationAddress||n.returnAddress)&&i.jsxs(to,{children:[n.departureAddress&&i.jsxs($t,{children:[i.jsx(Dt,{children:d.salida}),i.jsx(Et,{children:n.departureAddress})]}),n.destinationAddress&&i.jsxs($t,{children:[i.jsx(Dt,{children:d.destino}),i.jsx(Et,{children:n.destinationAddress})]}),n.returnAddress&&i.jsxs($t,{children:[i.jsx(Dt,{children:d.regreso}),i.jsx(Et,{children:n.returnAddress})]})]}),(n.serviceNotes||n.reservationNotes)&&i.jsxs(to,{children:[n.serviceNotes&&i.jsxs($t,{children:[i.jsx(Dt,{children:d.serviceNotes}),i.jsx(Et,{children:n.serviceNotes})]}),n.reservationNotes&&i.jsxs($t,{children:[i.jsx(Dt,{children:d.reservationNotes}),i.jsx(Et,{children:n.reservationNotes})]})]})]})]})};b.div`
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
`;const dl=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,ul=b.div`
  position: absolute;
  height: ${ln}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:r,$animateToY:t})=>e&&r!==void 0&&t!==void 0?`transform: translate3d(${r}px, ${t}px, 0);`:""}
`,fl=b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,no=b.p`
  ${at}
  ${ct}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,hl=b.p`
  ${at}
  ${ct}
`,pl=b.div`
  position: sticky;
  left: ${Pe+16}px;
  overflow: hidden;
`,ml=b.div`
  position: absolute;
  height: ${ln}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,gl=b.div`
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
`,yl=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,vl=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,xl=b.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,ro=b.div`
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
`,oo=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,so=b.div`
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
`,io=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,On=b.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,In=b.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,yt=b.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,ao=b.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,bl=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:a,resourceOnly:l,separatorRowIndices:d=[]})=>{const c=Ze(),u=P=>{let f=0;for(const y of d)y<=P&&f++;return P*pe+f*Oe},[h,v]=p.useState(null),[M,x]=p.useState(0),$=p.useCallback((P=400,f=300)=>{const S=t.width,_=48,w=document.getElementById("react-scheduler");if(!w)return{x:r.x+S+16,y:r.y};const E=w.scrollLeft,W=w.scrollTop,Q=w.clientWidth,I=w.clientHeight,k=r.x-E,O=r.y-W,B={left:Pe+16,right:Q-16,top:16,bottom:I-16},Y=B.right-(k+S),U=k-B.left,K=B.bottom-(O+_),ee=O-B.top;let re,L;return Y>=P+16?re=k+S+16:U>=P+16?re=k-P-16:Y>=U?(re=k+S+16,re+P>B.right&&(re=B.right-P)):(re=k-P-16,re<B.left&&(re=B.left)),K>=f+16?L=O+_+16:ee>=f+16?L=O-f-16:K>=ee?(L=O+_+16,L+f>B.bottom&&(L=B.bottom-f)):(L=O-f-16,L<B.top&&(L=B.top)),re=Math.max(B.left,Math.min(re,B.right-P)),L=Math.max(B.top,Math.min(L,B.bottom-f)),{x:re+E,y:L+W}},[r.x,r.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&M===0?x(r.x):s==="idle"&&x(0)},[s,e,r.x,M]),p.useEffect(()=>{v(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const m=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const P=[];let f=0;for(const y of a){const S=Math.max(y.data.length,1);if(y.capacity!==void 0&&e.totalPassengers>y.capacity)for(let _=0;_<S;_++)P.push(f+_);f+=S}return P},[e,a,s]);if(!e||s==="idle"||s==="potential")return null;const N=s==="animating",X=Wr(e.bgColor??""),F=()=>{if(!n)return"";const P=A(n.startDate).format("MMM D, HH:mm"),f=A(n.endDate).format("HH:mm");return`${P} - ${f}`};return i.jsxs(dl,{children:[m.map(P=>i.jsx(vl,{style:{top:`${u(P)}px`,height:`${pe}px`}},P)),n&&s==="dragging"&&i.jsx(yl,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${u(n.resourceIndex)}px`,height:`${pe}px`}}),n&&s==="dragging"&&!l&&i.jsxs(i.Fragment,{children:[i.jsx(ml,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(pe-48)/2}px`,width:`${t.width}px`}}),i.jsx(gl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(pe-48)/2}px`},children:F()})]}),n&&s==="dragging"&&l&&i.jsx(xl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${u(n.resourceIndex)}px`,height:`${pe}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const P=$(400,300);return i.jsxs(ro,{style:{left:`${P.x}px`,top:`${P.y}px`},children:[i.jsxs(oo,{children:[i.jsx(so,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),i.jsx(io,{children:n.conflicts.map((f,y)=>{const S=A(n.startDate).format("YYYY-MM-DD"),_=A(n.endDate).format("YYYY-MM-DD"),w=A(f.event.startDate).format("YYYY-MM-DD"),E=A(f.event.endDate).format("YYYY-MM-DD"),W=A(f.conflictStart).format("YYYY-MM-DD"),Q=A(f.conflictEnd).format("YYYY-MM-DD"),I=S!==_,k=w!==E,O=W!==Q,B=I?A(n.startDate).format("MMM D, h:mm A"):A(n.startDate).format("h:mm A"),Y=I?A(n.endDate).format("MMM D, h:mm A"):A(n.endDate).format("h:mm A"),U=k?A(f.event.startDate).format("MMM D, h:mm A"):A(f.event.startDate).format("h:mm A"),K=k?A(f.event.endDate).format("MMM D, h:mm A"):A(f.event.endDate).format("h:mm A"),ee=O?A(f.conflictStart).format("MMM D, h:mm A"):A(f.conflictStart).format("h:mm A"),re=O?A(f.conflictEnd).format("MMM D, h:mm A"):A(f.conflictEnd).format("h:mm A"),L=O?"":A(f.conflictStart).format("MMM D"),z=n.startDate.getTime(),J=n.endDate.getTime(),te=f.event.startDate.getTime(),D=f.event.endDate.getTime(),Z=z>=te&&z<D,C=J>te&&J<=D,G=z<=te&&J>=D,V=te<=z&&D>=J;let H=!1,g=!1,q=!1,T=!1,j="";return G||V?(H=!0,g=!0,q=!0,T=!0,j=`⚠️ ${c.conflicts.changeBoth}`):Z&&C?(H=!0,g=!0,q=!0,T=!0,j=`⚠️ ${c.conflicts.changeBoth}`):Z?(H=!0,T=!0,j=`⚠️ ${c.conflicts.changeStart}`):C&&(g=!0,q=!0,j=`⚠️ ${c.conflicts.changeEnd}`),i.jsxs(On,{children:[i.jsxs(In,{children:[c.conflicts.conflictsWith,": ",f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),i.jsxs(yt,{children:[i.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",H?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:B}):B," ",c.conflicts.to," ",g?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:Y}):Y]}),i.jsxs(yt,{children:[i.jsx("strong",{children:f.event.title})," ",c.conflicts.currentlyAt,":"," ",q?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:U}):U," ",c.conflicts.to," ",T?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:K}):K]}),i.jsxs(ao,{children:[c.conflicts.conflictTime,": ",L&&`${L}, `,ee," - ",re]}),j&&i.jsx(yt,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:j})]},y)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const P=$(400,400);return i.jsxs(ro,{style:{left:`${P.x}px`,top:`${P.y}px`,borderColor:"#4CAF50"},children:[i.jsxs(oo,{style:{color:"#2E7D32"},children:[i.jsx(so,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),i.jsxs(io,{children:[(()=>{const f=n.nearbyEvents.some(w=>w.position==="before"),y=n.nearbyEvents.some(w=>w.position==="after"),S=A(n.startDate).format("h:mm A"),_=A(n.endDate).format("h:mm A");return i.jsxs(On,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[i.jsxs(In,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),i.jsxs(yt,{style:{fontWeight:600},children:[A(n.startDate).format("MMM D"),":"," ",f?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:S}):S," ",c.conflicts.to," ",y?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:_}):_]}),i.jsx(yt,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),n.nearbyEvents.map((f,y)=>{const S=A(f.event.startDate).format("YYYY-MM-DD"),_=A(f.event.endDate).format("YYYY-MM-DD"),w=S!==_,E=w?A(f.event.startDate).format("MMM D, h:mm A"):A(f.event.startDate).format("h:mm A"),W=w?A(f.event.endDate).format("MMM D, h:mm A"):A(f.event.endDate).format("h:mm A"),Q=A(f.event.startDate).format("MMM D"),I=Math.floor(f.timeGap/(1e3*60*60)),k=Math.floor(f.timeGap%(1e3*60*60)/(1e3*60)),O=I>0?`${I}h ${k}m`:`${k}m`,B=f.position==="after",Y=f.position==="before";return i.jsxs(On,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[i.jsxs(In,{style:{color:"#1B5E20"},children:[f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),i.jsxs(yt,{children:[!w&&`${Q}: `,B?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:E}):E," ",c.conflicts.to," ",Y?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:W}):W]}),i.jsxs(ao,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[O," ",f.position==="before"?c.conflicts.before:c.conflicts.after]})]},y)})]})]})})(),i.jsx(ul,{$isAnimating:N,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:N?`${(h==null?void 0:h.x)??0}px`:"0",top:N?`${(h==null?void 0:h.y)??0}px`:"0",transform:N?void 0:`translate3d(${l?M:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:X},children:i.jsx(fl,{children:i.jsxs(pl,{children:[i.jsx(no,{$bold:!0,children:e.title}),e.subtitle&&i.jsx(no,{children:e.subtitle}),e.description&&i.jsx(hl,{children:e.description})]})})})]})},wl=He`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,Sl=b.div`
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
  animation: ${wl} 1.5s ease-in-out infinite;
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
`,Cl=({selectionBox:e,isSelecting:r})=>!e||!r?null:i.jsx(Sl,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),Ml=He`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,kl=b.div`
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
  animation: ${Ml} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,$l=b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,Dl=b.span`
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
`,El=b.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,_l=b.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;b.div`
  display: none;
`,b.div`
  display: none;
`,b.button`
  display: none;
`;const Tl=b.div`
  display: flex;
  gap: 8px;
`,co=b.button`
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
`,Al=({selections:e,onConfirm:r,onClear:t})=>{var x;const o=Ze().multiSelect,s=p.useMemo(()=>e.filter($=>$.hasConflict).length,[e]),a=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,d=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",u=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((x=o==null?void 0:o.conflictsWarning)==null?void 0:x.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const v=s>0,M=i.jsxs(kl,{$hasConflicts:v,"data-multi-select-ui":!0,children:[i.jsxs($l,{children:[i.jsxs(Dl,{$hasConflicts:v,children:[e.length," ",a]}),v&&i.jsxs(El,{children:["⚠️ ",h]}),i.jsx(_l,{children:l})]}),i.jsxs(Tl,{children:[i.jsxs(co,{variant:"secondary",onClick:t,children:["✕ ",d]}),i.jsx(co,{variant:"primary",$hasConflicts:v,onClick:r,children:v?`⚠️ ${u}`:`✓ ${c}`})]})]});return uo.createPortal(M,document.body)},Pl=He`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Ol=b.div`
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
  animation: ${Pl} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&st`
      border-style: dashed;
    `}
`,Il=b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,Yl=b.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,Ll=b.button`
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
`,Nl=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:a=[]})=>{const[l,d]=p.useState(null),[c,u]=p.useState({x:0,y:0}),h=p.useRef(null),v=p.useMemo(()=>{switch(t){case 0:return Ie*7;case 1:return ke;case 2:return _e;default:return ke}},[t]),M=p.useMemo(()=>A().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),x=p.useMemo(()=>e.map((y,S)=>{let _=0,w=!1;for(const U of r){if(U.id===y.resourceId){w=!0;break}_+=Math.max(U.data.length,1)}if(!w)return null;const E=A(y.startDate),W=A(y.endDate);let Q,I;switch(t){case 0:Q=Math.floor(E.diff(M,"days")/7),I=Math.max(1,Math.ceil(W.diff(E,"days")/7)+1);break;case 1:Q=E.diff(M,"days"),I=Math.max(1,W.diff(E,"days")+1);break;case 2:Q=E.diff(M,"hours"),I=Math.max(1,W.diff(E,"hours")+1);break;default:Q=0,I=1}const k=Q*v;let O=0;for(const U of a)U<=_&&O++;const B=_*pe+O*Oe,Y=I*v;return{index:S,selection:y,x:k,y:B,width:Y,height:pe}}),[e,r,t,M,v]),$=(y,S)=>{const _=A(y).format("MMM D"),w=A(S).format("MMM D");return _===w?_:`${_} - ${w}`},m=y=>!y.hasConflict||!y.conflicts?"":`⚠️ Conflicts with:
${y.conflicts.map(_=>{const w=(_.overlapDuration/36e5).toFixed(1);return`• ${_.event.title} (${w}h overlap)`}).join(`
`)}`,N=p.useCallback(y=>{let S=0;for(const _ of r){const w=Math.max(_.data.length,1);if(y>=S*pe&&y<(S+w)*pe)return{resourceId:_.id,resourceLabel:_.label};S+=w}return null},[r]),X=p.useCallback(y=>{const S=Math.floor(y/v);switch(t){case 0:return M.add(S*7,"days").toDate();case 1:return M.add(S,"days").toDate();case 2:return M.add(S,"hours").toDate();default:return M.toDate()}},[t,M,v]),F=p.useCallback((y,S)=>{!s||(y.preventDefault(),y.stopPropagation(),!x[S])||(h.current={x:y.clientX,y:y.clientY},d(S),u({x:0,y:0}))},[s,x]),P=p.useCallback(y=>{if(l===null||!h.current)return;const S=y.clientX-h.current.x,_=y.clientY-h.current.y,w=Math.round(S/v)*v,E=Math.round(_/pe)*pe;u({x:w,y:E})},[l,v]),f=p.useCallback(()=>{if(l===null||!s){d(null),u({x:0,y:0}),h.current=null;return}const y=x[l];if(!y){d(null),u({x:0,y:0}),h.current=null;return}const S=y.x+c.x,_=y.y+c.y,w=N(_+pe/2);if(!w){d(null),u({x:0,y:0}),h.current=null;return}const E=X(S),W=e[l],Q=W.endDate.getTime()-W.startDate.getTime(),I=new Date(E.getTime()+Q);s(l,{startDate:E,endDate:I,resourceId:w.resourceId,resourceLabel:w.resourceLabel}),d(null),u({x:0,y:0}),h.current=null},[l,c,x,e,s,N,X]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",P),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",f)}},[l,P,f]),i.jsx(i.Fragment,{children:x.map(y=>{if(!y)return null;const S=y.selection.hasConflict||!1,_=l===y.index,w=_?y.x+c.x:y.x,E=_?y.y+c.y:y.y;return i.jsxs(Ol,{$hasConflict:S,$isDragging:_,style:{left:w,top:E,width:y.width,height:y.height},"data-multi-select-ui":!0,onMouseDown:W=>F(W,y.index),children:[S&&i.jsx(Yl,{title:m(y.selection),children:"⚠️"}),i.jsx(Il,{$hasConflict:S,children:$(y.selection.startDate,y.selection.endDate)}),i.jsx(Ll,{onClick:W=>{W.stopPropagation(),o(y.index)},onMouseDown:W=>W.stopPropagation(),title:S?"Remove conflicting selection":"Remove selection",children:"×"})]},y.index)})})},Fl=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,Bl=({zoom:e,startDate:r})=>{const{cols:t}=je(),n=p.useMemo(()=>{if(e===2)return null;const o=e===0?Ie*7:ke,s=A().year(r.year).month(r.month).date(r.dayOfMonth).startOf("day"),a=A().startOf("day"),l=e===0?a.startOf("week").diff(s.startOf("week"),"week"):a.diff(s,"days");return l<0||l>=t?null:{x:l*o,width:o}},[e,r,t]);return n?i.jsx(Fl,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},yd="";Ae.Scheduler=Ea,Object.defineProperty(Ae,Symbol.toStringTag,{value:"Module"})});
