(function(Ee,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],i):(Ee=typeof globalThis<"u"?globalThis:Ee||self,i(Ee["react-scheduler"]={},Ee["react/jsx-runtime"],Ee.React,Ee.ReactDOM))})(this,function(Ee,i,p,so){"use strict";var Ol=Object.defineProperty;var Il=(Ee,i,p)=>i in Ee?Ol(Ee,i,{enumerable:!0,configurable:!0,writable:!0,value:p}):Ee[i]=p;var oo=(Ee,i,p)=>(Il(Ee,typeof i!="symbol"?i+"":i,p),p);function io(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const se=io(p);var ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yt={},ao={get exports(){return yt},set exports(e){yt=e}},ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pn;function co(){if(Pn)return ge;Pn=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function C(m){if(typeof m=="object"&&m!==null){var L=m.$$typeof;switch(L){case e:switch(m=m.type,m){case t:case o:case n:case c:case f:return m;default:switch(m=m&&m.$$typeof,m){case l:case a:case d:case v:case h:case s:return m;default:return L}}case r:return L}}}return ge.ContextConsumer=a,ge.ContextProvider=s,ge.Element=e,ge.ForwardRef=d,ge.Fragment=t,ge.Lazy=v,ge.Memo=h,ge.Portal=r,ge.Profiler=o,ge.StrictMode=n,ge.Suspense=c,ge.SuspenseList=f,ge.isAsyncMode=function(){return!1},ge.isConcurrentMode=function(){return!1},ge.isContextConsumer=function(m){return C(m)===a},ge.isContextProvider=function(m){return C(m)===s},ge.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},ge.isForwardRef=function(m){return C(m)===d},ge.isFragment=function(m){return C(m)===t},ge.isLazy=function(m){return C(m)===v},ge.isMemo=function(m){return C(m)===h},ge.isPortal=function(m){return C(m)===r},ge.isProfiler=function(m){return C(m)===o},ge.isStrictMode=function(m){return C(m)===n},ge.isSuspense=function(m){return C(m)===c},ge.isSuspenseList=function(m){return C(m)===f},ge.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===t||m===o||m===n||m===c||m===f||m===M||typeof m=="object"&&m!==null&&(m.$$typeof===v||m.$$typeof===h||m.$$typeof===s||m.$$typeof===a||m.$$typeof===d||m.$$typeof===x||m.getModuleId!==void 0)},ge.typeOf=C,ge}var me={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var On;function lo(){return On||(On=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),x=!1,C=!1,m=!1,L=!1,j=!1,O;O=Symbol.for("react.module.reference");function I(D){return!!(typeof D=="string"||typeof D=="function"||D===t||D===o||j||D===n||D===c||D===f||L||D===M||x||C||m||typeof D=="object"&&D!==null&&(D.$$typeof===v||D.$$typeof===h||D.$$typeof===s||D.$$typeof===a||D.$$typeof===d||D.$$typeof===O||D.getModuleId!==void 0))}function u(D){if(typeof D=="object"&&D!==null){var Z=D.$$typeof;switch(Z){case e:var re=D.type;switch(re){case t:case o:case n:case c:case f:return re;default:var K=re&&re.$$typeof;switch(K){case l:case a:case d:case v:case h:case s:return K;default:return Z}}case r:return Z}}}var g=a,w=s,$=e,A=d,N=t,J=v,Q=h,_=r,T=o,P=n,B=c,Y=f,U=!1,R=!1;function ie(D){return U||(U=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ce(D){return R||(R=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function F(D){return u(D)===a}function H(D){return u(D)===s}function q(D){return typeof D=="object"&&D!==null&&D.$$typeof===e}function ne(D){return u(D)===d}function k(D){return u(D)===t}function z(D){return u(D)===v}function S(D){return u(D)===h}function V(D){return u(D)===r}function G(D){return u(D)===o}function W(D){return u(D)===n}function y(D){return u(D)===c}function X(D){return u(D)===f}me.ContextConsumer=g,me.ContextProvider=w,me.Element=$,me.ForwardRef=A,me.Fragment=N,me.Lazy=J,me.Memo=Q,me.Portal=_,me.Profiler=T,me.StrictMode=P,me.Suspense=B,me.SuspenseList=Y,me.isAsyncMode=ie,me.isConcurrentMode=ce,me.isContextConsumer=F,me.isContextProvider=H,me.isElement=q,me.isForwardRef=ne,me.isFragment=k,me.isLazy=z,me.isMemo=S,me.isPortal=V,me.isProfiler=G,me.isStrictMode=W,me.isSuspense=y,me.isSuspenseList=X,me.isValidElementType=I,me.typeOf=u}()),me}(function(e){process.env.NODE_ENV==="production"?e.exports=co():e.exports=lo()})(ao);function uo(e){function r(F,H,q,ne,k){for(var z=0,S=0,V=0,G=0,W,y,X=0,D=0,Z,re=Z=W=0,K=0,le=0,ue=0,de=0,pe=q.length,we=pe-1,xe,ae="",ee="",te="",oe="",he;K<pe;){if(y=q.charCodeAt(K),K===we&&S+G+V+z!==0&&(S!==0&&(y=S===47?10:47),G=V=z=0,pe++,we++),S+G+V+z===0){if(K===we&&(0<le&&(ae=ae.replace(v,"")),0<ae.trim().length)){switch(y){case 32:case 9:case 59:case 13:case 10:break;default:ae+=q.charAt(K)}y=59}switch(y){case 123:for(ae=ae.trim(),W=ae.charCodeAt(0),Z=1,de=++K;K<pe;){switch(y=q.charCodeAt(K)){case 123:Z++;break;case 125:Z--;break;case 47:switch(y=q.charCodeAt(K+1)){case 42:case 47:e:{for(re=K+1;re<we;++re)switch(q.charCodeAt(re)){case 47:if(y===42&&q.charCodeAt(re-1)===42&&K+2!==re){K=re+1;break e}break;case 10:if(y===47){K=re+1;break e}}K=re}}break;case 91:y++;case 40:y++;case 34:case 39:for(;K++<we&&q.charCodeAt(K)!==y;);}if(Z===0)break;K++}switch(Z=q.substring(de,K),W===0&&(W=(ae=ae.replace(h,"").trim()).charCodeAt(0)),W){case 64:switch(0<le&&(ae=ae.replace(v,"")),y=ae.charCodeAt(1),y){case 100:case 109:case 115:case 45:le=H;break;default:le=B}if(Z=r(H,le,Z,y,k+1),de=Z.length,0<U&&(le=t(B,ae,ue),he=l(3,Z,le,H,_,Q,de,y,k,ne),ae=le.join(""),he!==void 0&&(de=(Z=he.trim()).length)===0&&(y=0,Z="")),0<de)switch(y){case 115:ae=ae.replace(g,a);case 100:case 109:case 45:Z=ae+"{"+Z+"}";break;case 107:ae=ae.replace(j,"$1 $2"),Z=ae+"{"+Z+"}",Z=P===1||P===2&&s("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=ae+Z,ne===112&&(Z=(ee+=Z,""))}else Z="";break;default:Z=r(H,t(H,ae,ue),Z,ne,k+1)}te+=Z,Z=ue=le=re=W=0,ae="",y=q.charCodeAt(++K);break;case 125:case 59:if(ae=(0<le?ae.replace(v,""):ae).trim(),1<(de=ae.length))switch(re===0&&(W=ae.charCodeAt(0),W===45||96<W&&123>W)&&(de=(ae=ae.replace(" ",":")).length),0<U&&(he=l(1,ae,H,F,_,Q,ee.length,ne,k,ne))!==void 0&&(de=(ae=he.trim()).length)===0&&(ae="\0\0"),W=ae.charCodeAt(0),y=ae.charCodeAt(1),W){case 0:break;case 64:if(y===105||y===99){oe+=ae+q.charAt(K);break}default:ae.charCodeAt(de-1)!==58&&(ee+=o(ae,W,y,ae.charCodeAt(2)))}ue=le=re=W=0,ae="",y=q.charCodeAt(++K)}}switch(y){case 13:case 10:S===47?S=0:1+W===0&&ne!==107&&0<ae.length&&(le=1,ae+="\0"),0<U*ie&&l(0,ae,H,F,_,Q,ee.length,ne,k,ne),Q=1,_++;break;case 59:case 125:if(S+G+V+z===0){Q++;break}default:switch(Q++,xe=q.charAt(K),y){case 9:case 32:if(G+z+S===0)switch(X){case 44:case 58:case 9:case 32:xe="";break;default:y!==32&&(xe=" ")}break;case 0:xe="\\0";break;case 12:xe="\\f";break;case 11:xe="\\v";break;case 38:G+S+z===0&&(le=ue=1,xe="\f"+xe);break;case 108:if(G+S+z+T===0&&0<re)switch(K-re){case 2:X===112&&q.charCodeAt(K-3)===58&&(T=X);case 8:D===111&&(T=D)}break;case 58:G+S+z===0&&(re=K);break;case 44:S+V+G+z===0&&(le=1,xe+="\r");break;case 34:case 39:S===0&&(G=G===y?0:G===0?y:G);break;case 91:G+S+V===0&&z++;break;case 93:G+S+V===0&&z--;break;case 41:G+S+z===0&&V--;break;case 40:if(G+S+z===0){if(W===0)switch(2*X+3*D){case 533:break;default:W=1}V++}break;case 64:S+V+G+z+re+Z===0&&(Z=1);break;case 42:case 47:if(!(0<G+z+V))switch(S){case 0:switch(2*y+3*q.charCodeAt(K+1)){case 235:S=47;break;case 220:de=K,S=42}break;case 42:y===47&&X===42&&de+2!==K&&(q.charCodeAt(de+2)===33&&(ee+=q.substring(de,K+1)),xe="",S=0)}}S===0&&(ae+=xe)}D=X,X=y,K++}if(de=ee.length,0<de){if(le=H,0<U&&(he=l(2,ee,le,F,_,Q,de,ne,k,ne),he!==void 0&&(ee=he).length===0))return oe+ee+te;if(ee=le.join(",")+"{"+ee+"}",P*T!==0){switch(P!==2||s(ee,2)||(T=0),T){case 111:ee=ee.replace(I,":-moz-$1")+ee;break;case 112:ee=ee.replace(O,"::-webkit-input-$1")+ee.replace(O,"::-moz-$1")+ee.replace(O,":-ms-input-$1")+ee}T=0}}return oe+ee+te}function t(F,H,q){var ne=H.trim().split(m);H=ne;var k=ne.length,z=F.length;switch(z){case 0:case 1:var S=0;for(F=z===0?"":F[0]+" ";S<k;++S)H[S]=n(F,H[S],q).trim();break;default:var V=S=0;for(H=[];S<k;++S)for(var G=0;G<z;++G)H[V++]=n(F[G]+" ",ne[S],q).trim()}return H}function n(F,H,q){var ne=H.charCodeAt(0);switch(33>ne&&(ne=(H=H.trim()).charCodeAt(0)),ne){case 38:return H.replace(L,"$1"+F.trim());case 58:return F.trim()+H.replace(L,"$1"+F.trim());default:if(0<1*q&&0<H.indexOf("\f"))return H.replace(L,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+H}function o(F,H,q,ne){var k=F+";",z=2*H+3*q+4*ne;if(z===944){F=k.indexOf(":",9)+1;var S=k.substring(F,k.length-1).trim();return S=k.substring(0,F).trim()+S+";",P===1||P===2&&s(S,1)?"-webkit-"+S+S:S}if(P===0||P===2&&!s(k,1))return k;switch(z){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(J,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return S=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+S+"-webkit-"+k+"-ms-flex-pack"+S+k;case 1005:return x.test(k)?k.replace(M,":-webkit-")+k.replace(M,":-moz-")+k:k;case 1e3:switch(S=k.substring(13).trim(),H=S.indexOf("-")+1,S.charCodeAt(0)+S.charCodeAt(H)){case 226:S=k.replace(u,"tb");break;case 232:S=k.replace(u,"tb-rl");break;case 220:S=k.replace(u,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+S+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(H=(k=F).length-10,S=(k.charCodeAt(H)===33?k.substring(0,H):k).substring(F.indexOf(":",7)+1).trim(),z=S.charCodeAt(0)+(S.charCodeAt(7)|0)){case 203:if(111>S.charCodeAt(8))break;case 115:k=k.replace(S,"-webkit-"+S)+";"+k;break;case 207:case 102:k=k.replace(S,"-webkit-"+(102<z?"inline-":"")+"box")+";"+k.replace(S,"-webkit-"+S)+";"+k.replace(S,"-ms-"+S+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return S=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+S+"-ms-flex-"+S+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace($,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace($,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(N.test(F)===!0)return(S=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?o(F.replace("stretch","fill-available"),H,q,ne).replace(":fill-available",":stretch"):k.replace(S,"-webkit-"+S)+k.replace(S,"-moz-"+S.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,q+ne===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(C,"$1-webkit-$2")+k}return k}function s(F,H){var q=F.indexOf(H===1?":":"{"),ne=F.substring(0,H!==3?q:10);return q=F.substring(q+1,F.length-1),R(H!==2?ne:ne.replace(A,"$1"),q,H)}function a(F,H){var q=o(H,H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2));return q!==H+";"?q.replace(w," or ($1)").substring(4):"("+H+")"}function l(F,H,q,ne,k,z,S,V,G,W){for(var y=0,X=H,D;y<U;++y)switch(D=Y[y].call(f,F,X,q,ne,k,z,S,V,G,W)){case void 0:case!1:case!0:case null:break;default:X=D}if(X!==H)return X}function d(F){switch(F){case void 0:case null:U=Y.length=0;break;default:if(typeof F=="function")Y[U++]=F;else if(typeof F=="object")for(var H=0,q=F.length;H<q;++H)d(F[H]);else ie=!!F|0}return d}function c(F){return F=F.prefix,F!==void 0&&(R=null,F?typeof F!="function"?P=1:(P=2,R=F):P=0),c}function f(F,H){var q=F;if(33>q.charCodeAt(0)&&(q=q.trim()),ce=q,q=[ce],0<U){var ne=l(-1,H,q,q,_,Q,0,0,0,0);ne!==void 0&&typeof ne=="string"&&(H=ne)}var k=r(B,q,H,0,0);return 0<U&&(ne=l(-2,k,q,q,_,Q,k.length,0,0,0),ne!==void 0&&(k=ne)),ce="",T=0,Q=_=1,k}var h=/^\0+/g,v=/[\0\r\f]/g,M=/: */g,x=/zoo|gra/,C=/([,: ])(transform)/g,m=/,\r+?/g,L=/([\t\r\n ])*\f?&/g,j=/@(k\w+)\s*(\S*)\s*/,O=/::(place)/g,I=/:(read-only)/g,u=/[svh]\w+-[tblr]{2}/,g=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,$=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,N=/stretch|:\s*\w+\-(?:conte|avail)/,J=/([^-])(image-set\()/,Q=1,_=1,T=0,P=1,B=[],Y=[],U=0,R=null,ie=0,ce="";return f.use=d,f.set=c,e!==void 0&&c(e),f}var fo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ho(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var po=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,In=ho(function(e){return po.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Wt={},go={get exports(){return Wt},set exports(e){Wt=e}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn;function mo(){if(Yn)return ye;Yn=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,M=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,C=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,j=e?Symbol.for("react.scope"):60119;function O(u){if(typeof u=="object"&&u!==null){var g=u.$$typeof;switch(g){case r:switch(u=u.type,u){case d:case c:case n:case s:case o:case h:return u;default:switch(u=u&&u.$$typeof,u){case l:case f:case x:case M:case a:return u;default:return g}}case t:return g}}}function I(u){return O(u)===c}return ye.AsyncMode=d,ye.ConcurrentMode=c,ye.ContextConsumer=l,ye.ContextProvider=a,ye.Element=r,ye.ForwardRef=f,ye.Fragment=n,ye.Lazy=x,ye.Memo=M,ye.Portal=t,ye.Profiler=s,ye.StrictMode=o,ye.Suspense=h,ye.isAsyncMode=function(u){return I(u)||O(u)===d},ye.isConcurrentMode=I,ye.isContextConsumer=function(u){return O(u)===l},ye.isContextProvider=function(u){return O(u)===a},ye.isElement=function(u){return typeof u=="object"&&u!==null&&u.$$typeof===r},ye.isForwardRef=function(u){return O(u)===f},ye.isFragment=function(u){return O(u)===n},ye.isLazy=function(u){return O(u)===x},ye.isMemo=function(u){return O(u)===M},ye.isPortal=function(u){return O(u)===t},ye.isProfiler=function(u){return O(u)===s},ye.isStrictMode=function(u){return O(u)===o},ye.isSuspense=function(u){return O(u)===h},ye.isValidElementType=function(u){return typeof u=="string"||typeof u=="function"||u===n||u===c||u===s||u===o||u===h||u===v||typeof u=="object"&&u!==null&&(u.$$typeof===x||u.$$typeof===M||u.$$typeof===a||u.$$typeof===l||u.$$typeof===f||u.$$typeof===m||u.$$typeof===L||u.$$typeof===j||u.$$typeof===C)},ye.typeOf=O,ye}var ve={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ln;function yo(){return Ln||(Ln=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,M=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,C=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,j=e?Symbol.for("react.scope"):60119;function O(y){return typeof y=="string"||typeof y=="function"||y===n||y===c||y===s||y===o||y===h||y===v||typeof y=="object"&&y!==null&&(y.$$typeof===x||y.$$typeof===M||y.$$typeof===a||y.$$typeof===l||y.$$typeof===f||y.$$typeof===m||y.$$typeof===L||y.$$typeof===j||y.$$typeof===C)}function I(y){if(typeof y=="object"&&y!==null){var X=y.$$typeof;switch(X){case r:var D=y.type;switch(D){case d:case c:case n:case s:case o:case h:return D;default:var Z=D&&D.$$typeof;switch(Z){case l:case f:case x:case M:case a:return Z;default:return X}}case t:return X}}}var u=d,g=c,w=l,$=a,A=r,N=f,J=n,Q=x,_=M,T=t,P=s,B=o,Y=h,U=!1;function R(y){return U||(U=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ie(y)||I(y)===d}function ie(y){return I(y)===c}function ce(y){return I(y)===l}function F(y){return I(y)===a}function H(y){return typeof y=="object"&&y!==null&&y.$$typeof===r}function q(y){return I(y)===f}function ne(y){return I(y)===n}function k(y){return I(y)===x}function z(y){return I(y)===M}function S(y){return I(y)===t}function V(y){return I(y)===s}function G(y){return I(y)===o}function W(y){return I(y)===h}ve.AsyncMode=u,ve.ConcurrentMode=g,ve.ContextConsumer=w,ve.ContextProvider=$,ve.Element=A,ve.ForwardRef=N,ve.Fragment=J,ve.Lazy=Q,ve.Memo=_,ve.Portal=T,ve.Profiler=P,ve.StrictMode=B,ve.Suspense=Y,ve.isAsyncMode=R,ve.isConcurrentMode=ie,ve.isContextConsumer=ce,ve.isContextProvider=F,ve.isElement=H,ve.isForwardRef=q,ve.isFragment=ne,ve.isLazy=k,ve.isMemo=z,ve.isPortal=S,ve.isProfiler=V,ve.isStrictMode=G,ve.isSuspense=W,ve.isValidElementType=O,ve.typeOf=I}()),ve}(function(e){process.env.NODE_ENV==="production"?e.exports=mo():e.exports=yo()})(go);var jt=Wt,vo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zt={};Zt[jt.ForwardRef]=bo,Zt[jt.Memo]=Nn;function Fn(e){return jt.isMemo(e)?Nn:Zt[e.$$typeof]||vo}var wo=Object.defineProperty,So=Object.getOwnPropertyNames,Bn=Object.getOwnPropertySymbols,Co=Object.getOwnPropertyDescriptor,ko=Object.getPrototypeOf,Hn=Object.prototype;function zn(e,r,t){if(typeof r!="string"){if(Hn){var n=ko(r);n&&n!==Hn&&zn(e,n,t)}var o=So(r);Bn&&(o=o.concat(Bn(r)));for(var s=Fn(e),a=Fn(r),l=0;l<o.length;++l){var d=o[l];if(!xo[d]&&!(t&&t[d])&&!(a&&a[d])&&!(s&&s[d])){var c=Co(r,d);try{wo(e,d,c)}catch{}}}}return e}var Mo=zn;function Oe(){return(Oe=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Wn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},Vt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!yt.typeOf(e)},Mt=Object.freeze([]),Ze=Object.freeze({});function et(e){return typeof e=="function"}function Gt(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Xt(e){return e&&typeof e.styledComponentId=="string"}var tt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Ut=typeof window<"u"&&"HTMLElement"in window,$o=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),Do={},Eo=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function _o(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Ne(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(_o.apply(void 0,[Eo[e]].concat(t)).trim())}var To=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,a=s;t>=a;)(a<<=1)<0&&Ne(16,""+t);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(t+1),c=0,f=n.length;c<f;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[t]++,d++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var a=o;a<s;a++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),a=s+o,l=s;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),$t=new Map,Dt=new Map,vt=1,Et=function(e){if($t.has(e))return $t.get(e);for(;Dt.has(vt);)vt++;var r=vt++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&Ne(16,""+r),$t.set(e,r),Dt.set(r,e),r},Ao=function(e){return Dt.get(e)},Po=function(e,r){r>=vt&&(vt=r+1),$t.set(e,r),Dt.set(r,e)},Oo="style["+tt+'][data-styled-version="5.3.8"]',Io=new RegExp("^"+tt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Yo=function(e,r,t){for(var n,o=t.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(r,n)},Lo=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var a=t[o].trim();if(a){var l=a.match(Io);if(l){var d=0|parseInt(l[1],10),c=l[2];d!==0&&(Po(c,d),Yo(e,c,l[3]),e.getTag().insertRules(d,n)),n.length=0}else n.push(a)}}},No=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},jn=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(l){for(var d=l.childNodes,c=d.length;c>=0;c--){var f=d[c];if(f&&f.nodeType===1&&f.hasAttribute(tt))return f}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(tt,"active"),n.setAttribute("data-styled-version","5.3.8");var a=No();return a&&n.setAttribute("nonce",a),t.insertBefore(n,s),n},Fo=function(){function e(t){var n=this.element=jn(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var d=s[a];if(d.ownerNode===o)return d}Ne(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),Bo=function(){function e(t){var n=this.element=jn(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ho=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Zn=Ut,zo={isServer:!Ut,useCSSOMInjection:!$o},_t=function(){function e(t,n,o){t===void 0&&(t=Ze),n===void 0&&(n={}),this.options=Oe({},zo,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Ut&&Zn&&(Zn=!1,function(s){for(var a=document.querySelectorAll(Oo),l=0,d=a.length;l<d;l++){var c=a[l];c&&c.getAttribute(tt)!=="active"&&(Lo(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return Et(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Oe({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,a=n.target,t=o?new Ho(a):s?new Fo(a):new Bo(a),new To(t)));var t,n,o,s,a},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(Et(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(Et(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(Et(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",a=0;a<o;a++){var l=Ao(a);if(l!==void 0){var d=t.names.get(l),c=n.getGroup(a);if(d&&c&&d.size){var f=tt+".g"+a+'[id="'+l+'"]',h="";d!==void 0&&d.forEach(function(v){v.length>0&&(h+=v+",")}),s+=""+c+f+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),Wo=/(a)(d)/gi,Vn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kt(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=Vn(r%52)+t;return(Vn(r%52)+t).replace(Wo,"$1-$2")}var Xe=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},Gn=function(e){return Xe(5381,e)};function Xn(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(et(t)&&!Xt(t))return!1}return!0}var jo=Gn("5.3.8"),Zo=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&Xn(r),this.componentId=t,this.baseHash=Xe(jo,t),this.baseStyle=n,_t.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var a=Ue(this.rules,r,t,n).join(""),l=Kt(Xe(this.baseHash,a)>>>0);if(!t.hasNameForId(o,l)){var d=n(a,"."+l,void 0,o);t.insertRules(o,l,d)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,f=Xe(this.baseHash,n.hash),h="",v=0;v<c;v++){var M=this.rules[v];if(typeof M=="string")h+=M,process.env.NODE_ENV!=="production"&&(f=Xe(f,M+v));else if(M){var x=Ue(M,r,t,n),C=Array.isArray(x)?x.join(""):x;f=Xe(f,C+v),h+=C}}if(h){var m=Kt(f>>>0);if(!t.hasNameForId(o,m)){var L=n(h,"."+m,void 0,o);t.insertRules(o,m,L)}s.push(m)}}return s.join(" ")},e}(),Vo=/^\s*\/\/.*$/gm,Go=[":","[",".","#"];function Xo(e){var r,t,n,o,s=e===void 0?Ze:e,a=s.options,l=a===void 0?Ze:a,d=s.plugins,c=d===void 0?Mt:d,f=new uo(l),h=[],v=function(C){function m(L){if(L)try{C(L+"}")}catch{}}return function(L,j,O,I,u,g,w,$,A,N){switch(L){case 1:if(A===0&&j.charCodeAt(0)===64)return C(j+";"),"";break;case 2:if($===0)return j+"/*|*/";break;case 3:switch($){case 102:case 112:return C(O[0]+j),"";default:return j+(N===0?"/*|*/":"")}case-2:j.split("/*|*/}").forEach(m)}}}(function(C){h.push(C)}),M=function(C,m,L){return m===0&&Go.indexOf(L[t.length])!==-1||L.match(o)?C:"."+r};function x(C,m,L,j){j===void 0&&(j="&");var O=C.replace(Vo,""),I=m&&L?L+" "+m+" { "+O+" }":O;return r=j,t=m,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),f(L||!m?"":m,I)}return f.use([].concat(c,[function(C,m,L){C===2&&L.length&&L[0].lastIndexOf(t)>0&&(L[0]=L[0].replace(n,M))},v,function(C){if(C===-2){var m=h;return h=[],m}}])),x.hash=c.length?c.reduce(function(C,m){return m.name||Ne(15),Xe(C,m.name)},5381).toString():"",x}var Un=p.createContext();Un.Consumer;var Kn=p.createContext(),Uo=(Kn.Consumer,new _t),qt=Xo();function qn(){return p.useContext(Un)||Uo}function Jn(){return p.useContext(Kn)||qt}var Qn=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=qt);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.toString=function(){return Ne(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=qt),this.name+r.hash},e}(),Ko=/([A-Z])/,qo=/([A-Z])/g,Jo=/^ms-/,Qo=function(e){return"-"+e.toLowerCase()};function Rn(e){return Ko.test(e)?e.replace(qo,Qo).replace(Jo,"-ms-"):e}var er=function(e){return e==null||e===!1||e===""};function Ue(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],a=0,l=e.length;a<l;a+=1)(o=Ue(e[a],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(er(e))return"";if(Xt(e))return"."+e.styledComponentId;if(et(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!r)return e;var d=e(r);return process.env.NODE_ENV!=="production"&&yt.isElement(d)&&console.warn(Gt(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ue(d,r,t,n)}var c;return e instanceof Qn?t?(e.inject(t,n),e.getName(n)):e:Vt(e)?function f(h,v){var M,x,C=[];for(var m in h)h.hasOwnProperty(m)&&!er(h[m])&&(Array.isArray(h[m])&&h[m].isCss||et(h[m])?C.push(Rn(m)+":",h[m],";"):Vt(h[m])?C.push.apply(C,f(h[m],m)):C.push(Rn(m)+": "+(M=m,(x=h[m])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||M in fo?String(x).trim():x+"px")+";"));return v?[v+" {"].concat(C,["}"]):C}(e):e.toString()}var tr=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Tt(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return et(e)||Vt(e)?tr(Ue(Wn(Mt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:tr(Ue(Wn(e,t)))}var nr=/invalid hook call/i,At=new Set,rr=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(nr.test(s))o=!1,At.delete(t);else{for(var a=arguments.length,l=new Array(a>1?a-1:0),d=1;d<a;d++)l[d-1]=arguments[d];n.apply(void 0,[s].concat(l))}},p.useRef(),o&&!At.has(t)&&(console.warn(t),At.add(t))}catch(s){nr.test(s.message)&&At.delete(t)}finally{console.error=n}}},or=function(e,r,t){return t===void 0&&(t=Ze),e.theme!==t.theme&&e.theme||r||t.theme},Ro=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,es=/(^-|-$)/g;function Jt(e){return e.replace(Ro,"-").replace(es,"")}var Qt=function(e){return Kt(Gn(e)>>>0)};function Pt(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Rt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},ts=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ns(e,r,t){var n=e[t];Rt(r)&&Rt(n)?sr(n,r):e[t]=r}function sr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var a=s[o];if(Rt(a))for(var l in a)ts(l)&&ns(e,a[l],l)}return e}var nt=p.createContext();nt.Consumer;function rs(e){var r=p.useContext(nt),t=p.useMemo(function(){return function(n,o){if(!n)return Ne(14);if(et(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Ne(7)}return Array.isArray(n)||typeof n!="object"?Ne(8):o?Oe({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?p.createElement(nt.Provider,{value:t},e.children):null}var en={};function ir(e,r,t){var n=Xt(e),o=!Pt(e),s=r.attrs,a=s===void 0?Mt:s,l=r.componentId,d=l===void 0?function(j,O){var I=typeof j!="string"?"sc":Jt(j);en[I]=(en[I]||0)+1;var u=I+"-"+Qt("5.3.8"+I+en[I]);return O?O+"-"+u:u}(r.displayName,r.parentComponentId):l,c=r.displayName,f=c===void 0?function(j){return Pt(j)?"styled."+j:"Styled("+Gt(j)+")"}(e):c,h=r.displayName&&r.componentId?Jt(r.displayName)+"-"+r.componentId:r.componentId||d,v=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,M=r.shouldForwardProp;n&&e.shouldForwardProp&&(M=r.shouldForwardProp?function(j,O,I){return e.shouldForwardProp(j,O,I)&&r.shouldForwardProp(j,O,I)}:e.shouldForwardProp);var x,C=new Zo(t,h,n?e.componentStyle:void 0),m=C.isStatic&&a.length===0,L=function(j,O){return function(I,u,g,w){var $=I.attrs,A=I.componentStyle,N=I.defaultProps,J=I.foldedComponentIds,Q=I.shouldForwardProp,_=I.styledComponentId,T=I.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(_);var P=function(ne,k,z){ne===void 0&&(ne=Ze);var S=Oe({},k,{theme:ne}),V={};return z.forEach(function(G){var W,y,X,D=G;for(W in et(D)&&(D=D(S)),D)S[W]=V[W]=W==="className"?(y=V[W],X=D[W],y&&X?y+" "+X:y||X):D[W]}),[S,V]}(or(u,p.useContext(nt),N)||Ze,u,$),B=P[0],Y=P[1],U=function(ne,k,z,S){var V=qn(),G=Jn(),W=k?ne.generateAndInjectStyles(Ze,V,G):ne.generateAndInjectStyles(z,V,G);return process.env.NODE_ENV!=="production"&&p.useDebugValue(W),process.env.NODE_ENV!=="production"&&!k&&S&&S(W),W}(A,w,B,process.env.NODE_ENV!=="production"?I.warnTooManyClasses:void 0),R=g,ie=Y.$as||u.$as||Y.as||u.as||T,ce=Pt(ie),F=Y!==u?Oe({},u,{},Y):u,H={};for(var q in F)q[0]!=="$"&&q!=="as"&&(q==="forwardedAs"?H.as=F[q]:(Q?Q(q,In,ie):!ce||In(q))&&(H[q]=F[q]));return u.style&&Y.style!==u.style&&(H.style=Oe({},u.style,{},Y.style)),H.className=Array.prototype.concat(J,_,U!==_?U:null,u.className,Y.className).filter(Boolean).join(" "),H.ref=R,p.createElement(ie,H)}(x,j,O,m)};return L.displayName=f,(x=p.forwardRef(L)).attrs=v,x.componentStyle=C,x.displayName=f,x.shouldForwardProp=M,x.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Mt,x.styledComponentId=h,x.target=n?e.target:e,x.withComponent=function(j){var O=r.componentId,I=function(g,w){if(g==null)return{};var $,A,N={},J=Object.keys(g);for(A=0;A<J.length;A++)$=J[A],w.indexOf($)>=0||(N[$]=g[$]);return N}(r,["componentId"]),u=O&&O+"-"+(Pt(j)?j:Jt(Gt(j)));return ir(j,Oe({},I,{attrs:v,componentId:u}),t)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=n?sr({},e.defaultProps,j):j}}),process.env.NODE_ENV!=="production"&&(rr(f,h),x.warnTooManyClasses=function(j,O){var I={},u=!1;return function(g){if(!u&&(I[g]=!0,Object.keys(I).length>=200)){var w=O?' with the id of "'+O+'"':"";console.warn("Over 200 classes were generated for component "+j+w+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),u=!0,I={}}}}(f,h)),x.toString=function(){return"."+x.styledComponentId},o&&Mo(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var tn=function(e){return function r(t,n,o){if(o===void 0&&(o=Ze),!yt.isValidElementType(n))return Ne(1,String(n));var s=function(){return t(n,o,Tt.apply(void 0,arguments))};return s.withConfig=function(a){return r(t,n,Oe({},o,{},a))},s.attrs=function(a){return r(t,n,Oe({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},s}(ir,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){tn[e]=tn(e)});var os=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Xn(t),_t.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var a=s(Ue(this.rules,n,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,a)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&_t.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function ss(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=Tt.apply(void 0,[e].concat(t)),s="sc-global-"+Qt(JSON.stringify(o)),a=new os(o,s);function l(c){var f=qn(),h=Jn(),v=p.useContext(nt),M=p.useRef(f.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(x){return typeof x=="string"&&x.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),f.server&&d(M,c,f,v,h),p.useLayoutEffect(function(){if(!f.server)return d(M,c,f,v,h),function(){return a.removeStyles(M,f)}},[M,c,f,v,h]),null}function d(c,f,h,v,M){if(a.isStatic)a.renderStyles(c,Do,h,M);else{var x=Oe({},f,{theme:or(f,v,l.defaultProps)});a.renderStyles(c,x,h,M)}}return process.env.NODE_ENV!=="production"&&rr(s),p.memo(l)}function Ke(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=Tt.apply(void 0,[e].concat(t)).join(""),s=Qt(o);return new Qn(s,o)}var Ot=function(){return p.useContext(nt)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const b=tn,xt="reactSchedulerOutsideWrapper",Ie="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",is=ss`

  #${xt} {
    font-family: ${Ie};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${xt} *,
 #${xt} *:before,
 #${xt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,as={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},cs={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},rt=`
margin: 0;
padding: 0;
`,ot=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;b.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const Se=50,Fe=24,st=16,qe=40,it=qe+st+Fe,at=84,fe=56,_e=196,Pe=12,Me=50,ct=24,bt=16,nn=40,ls=ct+bt+nn,ar=24,cr=52,Ye={topRow:`600 14px ${Ie}`,middleRow:`400 10px ${Ie}`,bottomRow:{name:`600 14px ${Ie}`,number:`600 10px ${Ie}`,hoursInDay:`400 9px ${Ie}`}},lt=3,ds=1.6,us=4.5,rn=12,It=24,fs="reactSchedulerCanvasHeaderWrapper",lr="reactSchedulerCanvasWrapper",Be=xt,hs=4,on=48,Ve=5,ps=40,dr=8,sn=Fe/2+2,ur=st/2+Fe+1,fr=2,Ce=60,Ae=21,hr=58,pr="reactSchedulerBody";var Je={},gs={get exports(){return Je},set exports(e){Je=e}};(function(e,r){(function(t,n){e.exports=n()})(ke,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",a="second",l="minute",d="hour",c="day",f="week",h="month",v="quarter",M="year",x="date",C="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,L=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,j={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(_){var T=["th","st","nd","rd"],P=_%100;return"["+_+(T[(P-20)%10]||T[P]||T[0])+"]"}},O=function(_,T,P){var B=String(_);return!B||B.length>=T?_:""+Array(T+1-B.length).join(P)+_},I={s:O,z:function(_){var T=-_.utcOffset(),P=Math.abs(T),B=Math.floor(P/60),Y=P%60;return(T<=0?"+":"-")+O(B,2,"0")+":"+O(Y,2,"0")},m:function _(T,P){if(T.date()<P.date())return-_(P,T);var B=12*(P.year()-T.year())+(P.month()-T.month()),Y=T.clone().add(B,h),U=P-Y<0,R=T.clone().add(B+(U?-1:1),h);return+(-(B+(P-Y)/(U?Y-R:R-Y))||0)},a:function(_){return _<0?Math.ceil(_)||0:Math.floor(_)},p:function(_){return{M:h,y:M,w:f,d:c,D:x,h:d,m:l,s:a,ms:s,Q:v}[_]||String(_||"").toLowerCase().replace(/s$/,"")},u:function(_){return _===void 0}},u="en",g={};g[u]=j;var w=function(_){return _ instanceof J},$=function _(T,P,B){var Y;if(!T)return u;if(typeof T=="string"){var U=T.toLowerCase();g[U]&&(Y=U),P&&(g[U]=P,Y=U);var R=T.split("-");if(!Y&&R.length>1)return _(R[0])}else{var ie=T.name;g[ie]=T,Y=ie}return!B&&Y&&(u=Y),Y||!B&&u},A=function(_,T){if(w(_))return _.clone();var P=typeof T=="object"?T:{};return P.date=_,P.args=arguments,new J(P)},N=I;N.l=$,N.i=w,N.w=function(_,T){return A(_,{locale:T.$L,utc:T.$u,x:T.$x,$offset:T.$offset})};var J=function(){function _(P){this.$L=$(P.locale,null,!0),this.parse(P)}var T=_.prototype;return T.parse=function(P){this.$d=function(B){var Y=B.date,U=B.utc;if(Y===null)return new Date(NaN);if(N.u(Y))return new Date;if(Y instanceof Date)return new Date(Y);if(typeof Y=="string"&&!/Z$/i.test(Y)){var R=Y.match(m);if(R){var ie=R[2]-1||0,ce=(R[7]||"0").substring(0,3);return U?new Date(Date.UTC(R[1],ie,R[3]||1,R[4]||0,R[5]||0,R[6]||0,ce)):new Date(R[1],ie,R[3]||1,R[4]||0,R[5]||0,R[6]||0,ce)}}return new Date(Y)}(P),this.$x=P.x||{},this.init()},T.init=function(){var P=this.$d;this.$y=P.getFullYear(),this.$M=P.getMonth(),this.$D=P.getDate(),this.$W=P.getDay(),this.$H=P.getHours(),this.$m=P.getMinutes(),this.$s=P.getSeconds(),this.$ms=P.getMilliseconds()},T.$utils=function(){return N},T.isValid=function(){return this.$d.toString()!==C},T.isSame=function(P,B){var Y=A(P);return this.startOf(B)<=Y&&Y<=this.endOf(B)},T.isAfter=function(P,B){return A(P)<this.startOf(B)},T.isBefore=function(P,B){return this.endOf(B)<A(P)},T.$g=function(P,B,Y){return N.u(P)?this[B]:this.set(Y,P)},T.unix=function(){return Math.floor(this.valueOf()/1e3)},T.valueOf=function(){return this.$d.getTime()},T.startOf=function(P,B){var Y=this,U=!!N.u(B)||B,R=N.p(P),ie=function(S,V){var G=N.w(Y.$u?Date.UTC(Y.$y,V,S):new Date(Y.$y,V,S),Y);return U?G:G.endOf(c)},ce=function(S,V){return N.w(Y.toDate()[S].apply(Y.toDate("s"),(U?[0,0,0,0]:[23,59,59,999]).slice(V)),Y)},F=this.$W,H=this.$M,q=this.$D,ne="set"+(this.$u?"UTC":"");switch(R){case M:return U?ie(1,0):ie(31,11);case h:return U?ie(1,H):ie(0,H+1);case f:var k=this.$locale().weekStart||0,z=(F<k?F+7:F)-k;return ie(U?q-z:q+(6-z),H);case c:case x:return ce(ne+"Hours",0);case d:return ce(ne+"Minutes",1);case l:return ce(ne+"Seconds",2);case a:return ce(ne+"Milliseconds",3);default:return this.clone()}},T.endOf=function(P){return this.startOf(P,!1)},T.$set=function(P,B){var Y,U=N.p(P),R="set"+(this.$u?"UTC":""),ie=(Y={},Y[c]=R+"Date",Y[x]=R+"Date",Y[h]=R+"Month",Y[M]=R+"FullYear",Y[d]=R+"Hours",Y[l]=R+"Minutes",Y[a]=R+"Seconds",Y[s]=R+"Milliseconds",Y)[U],ce=U===c?this.$D+(B-this.$W):B;if(U===h||U===M){var F=this.clone().set(x,1);F.$d[ie](ce),F.init(),this.$d=F.set(x,Math.min(this.$D,F.daysInMonth())).$d}else ie&&this.$d[ie](ce);return this.init(),this},T.set=function(P,B){return this.clone().$set(P,B)},T.get=function(P){return this[N.p(P)]()},T.add=function(P,B){var Y,U=this;P=Number(P);var R=N.p(B),ie=function(H){var q=A(U);return N.w(q.date(q.date()+Math.round(H*P)),U)};if(R===h)return this.set(h,this.$M+P);if(R===M)return this.set(M,this.$y+P);if(R===c)return ie(1);if(R===f)return ie(7);var ce=(Y={},Y[l]=n,Y[d]=o,Y[a]=t,Y)[R]||1,F=this.$d.getTime()+P*ce;return N.w(F,this)},T.subtract=function(P,B){return this.add(-1*P,B)},T.format=function(P){var B=this,Y=this.$locale();if(!this.isValid())return Y.invalidDate||C;var U=P||"YYYY-MM-DDTHH:mm:ssZ",R=N.z(this),ie=this.$H,ce=this.$m,F=this.$M,H=Y.weekdays,q=Y.months,ne=function(V,G,W,y){return V&&(V[G]||V(B,U))||W[G].slice(0,y)},k=function(V){return N.s(ie%12||12,V,"0")},z=Y.meridiem||function(V,G,W){var y=V<12?"AM":"PM";return W?y.toLowerCase():y},S={YY:String(this.$y).slice(-2),YYYY:this.$y,M:F+1,MM:N.s(F+1,2,"0"),MMM:ne(Y.monthsShort,F,q,3),MMMM:ne(q,F),D:this.$D,DD:N.s(this.$D,2,"0"),d:String(this.$W),dd:ne(Y.weekdaysMin,this.$W,H,2),ddd:ne(Y.weekdaysShort,this.$W,H,3),dddd:H[this.$W],H:String(ie),HH:N.s(ie,2,"0"),h:k(1),hh:k(2),a:z(ie,ce,!0),A:z(ie,ce,!1),m:String(ce),mm:N.s(ce,2,"0"),s:String(this.$s),ss:N.s(this.$s,2,"0"),SSS:N.s(this.$ms,3,"0"),Z:R};return U.replace(L,function(V,G){return G||S[V]||R.replace(":","")})},T.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},T.diff=function(P,B,Y){var U,R=N.p(B),ie=A(P),ce=(ie.utcOffset()-this.utcOffset())*n,F=this-ie,H=N.m(this,ie);return H=(U={},U[M]=H/12,U[h]=H,U[v]=H/3,U[f]=(F-ce)/6048e5,U[c]=(F-ce)/864e5,U[d]=F/o,U[l]=F/n,U[a]=F/t,U)[R]||F,Y?H:N.a(H)},T.daysInMonth=function(){return this.endOf(h).$D},T.$locale=function(){return g[this.$L]},T.locale=function(P,B){if(!P)return this.$L;var Y=this.clone(),U=$(P,B,!0);return U&&(Y.$L=U),Y},T.clone=function(){return N.w(this.$d,this)},T.toDate=function(){return new Date(this.valueOf())},T.toJSON=function(){return this.isValid()?this.toISOString():null},T.toISOString=function(){return this.$d.toISOString()},T.toString=function(){return this.$d.toUTCString()},_}(),Q=J.prototype;return A.prototype=Q,[["$ms",s],["$s",a],["$m",l],["$H",d],["$W",c],["$M",h],["$y",M],["$D",x]].forEach(function(_){Q[_[1]]=function(T){return this.$g(T,_[0],_[1])}}),A.extend=function(_,T){return _.$i||(_(T,J,A),_.$i=!0),A},A.locale=$,A.isDayjs=w,A.unix=function(_){return A(1e3*_)},A.en=g[u],A.Ls=g,A.p={},A})})(gs);const E=Je,gr=e=>e%4===0&&e%100>0||e%400===0?366:365,an=e=>{const r=e.day();return r!==0&&r!==6},mr=(e,r)=>E(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),yr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:an(e),isCurrentDay:e.isSame(E(),"day"),year:parseInt(e.format("YYYY"))});let Yt=null;const ms=e=>{if(Yt)return Yt;const r=document.createElement("canvas");r.width=12,r.height=12;const t=r.getContext("2d");return t?(t.strokeStyle="rgba(120, 137, 127, 0.045)",t.lineWidth=6,t.beginPath(),t.moveTo(-3,15),t.lineTo(15,-3),t.stroke(),Yt=e.createPattern(r,"repeat"),Yt):null},cn=(e,r,t,n,o,s,a,l=!1)=>{if(e.strokeStyle=a.colors.border,s?e.fillStyle=a.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=a.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,fe),l&&!s){const d=ms(e);d&&(e.fillStyle=d,e.fillRect(r,t,n,fe))}e.strokeRect(r+.5,t+.5,n,fe)},ln=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Ae},ys=(e,r,t,n,o,s=[])=>{for(let a=0;a<r;a++){const l=ln(a,s);for(let d=0;d<=t;d++){const c=E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(d,"days"),f=c.isSame(E(),"day"),h=c.isBefore(E(),"day");cn(e,d*Se,a*fe+l,Se,an(c),f,o,h)}}},vs=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},xs=(e,r,t,n,o,s=[])=>{let a=0,l=-(n.dayOfMonth-1)*Pe;const d=r*fe+s.length*Ae;for(let c=0;c<=t;c++){const h=E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(c,"weeks").isSame(E(),"week");for(let v=0;v<r;v++){const M=ln(v,s);cn(e,a,v*fe+M,at,!0,h,o)}a+=at}for(let c=0;c<t;c++){const f=mr(n,c)*Pe;vs(e,l,d,o),l+=f}},bs=(e,r,t,n,o,s=[])=>{const a=E(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let l=0;l<r;l++){const d=ln(l,s);for(let c=0;c<=t;c++){let f;c===Math.floor(t/2)?f=E():c>Math.floor(t/2)?f=E().add(c-Math.floor(t/2),"hours"):f=E().subtract(Math.floor(t/2)-l,"hours");const h=a.isSame(E(),"day")&&f.isSame(E(),"hour");cn(e,c*Me+Me/2-.5,l*fe+d,Me,an(f),h,o)}}},ws=(e,r,t,n,o=!1)=>{const s=t*fe+r*Ae,a=e.canvas.width;e.fillStyle=o?n.colors.subcontractBorder+"40":n.mode==="dark"?n.colors.primary+"80":n.colors.primary,e.fillRect(0,s,a,Ae)},Ss=(e,r,t,n,o,s,a=[],l=-1)=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(lr)){switch(r){case 0:xs(e,t,n,o,s,a);break;case 1:ys(e,t,n,o,s,a);break;case 2:bs(e,t,n,o,s,a);break}for(let c=0;c<a.length;c++)ws(e,c,a[c],s,a[c]===l)}};var dn={},Cs={get exports(){return dn},set exports(e){dn=e}};(function(e,r){(function(t,n){e.exports=n()})(ke,function(){var t="week",n="year";return function(o,s,a){var l=s.prototype;l.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var f=a(this).startOf(n).add(1,n).date(c),h=a(this).endOf(t);if(f.isBefore(h))return 1}var v=a(this).startOf(n).date(c).startOf(t).subtract(1,"millisecond"),M=this.diff(v,t,!0);return M<0?a(this).startOf("week").week():Math.ceil(M)},l.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(Cs);const ks=dn;var un={},Ms={get exports(){return un},set exports(e){un=e}};(function(e,r){(function(t,n){e.exports=n()})(ke,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?a:this.add(s-a,"day")}}})})(Ms);const $s=un;var fn={},Ds={get exports(){return fn},set exports(e){fn=e}};(function(e,r){(function(t,n){e.exports=n()})(ke,function(){var t="day";return function(n,o,s){var a=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return a(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var f,h,v,M,x=a(this),C=(f=this.isoWeekYear(),h=this.$u,v=(h?s.utc:s)().year(f).startOf("year"),M=4-v.isoWeekday(),v.isoWeekday()>4&&(M+=7),v.add(M,t));return x.diff(C,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var d=l.startOf;l.startOf=function(c,f){var h=this.$utils(),v=!!h.u(f)||f;return h.p(c)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(c,f)}}})})(Ds);const Es=fn;var hn={},_s={get exports(){return hn},set exports(e){hn=e}};(function(e,r){(function(t,n){e.exports=n()})(ke,function(){return function(t,n,o){n.prototype.isBetween=function(s,a,l,d){var c=o(s),f=o(a),h=(d=d||"()")[0]==="(",v=d[1]===")";return(h?this.isAfter(c,l):!this.isBefore(c,l))&&(v?this.isBefore(f,l):!this.isAfter(f,l))||(h?this.isBefore(c,l):!this.isAfter(c,l))&&(v?this.isAfter(f,l):!this.isBefore(f,l))}}})})(_s);const Ts=hn;var pn={},As={get exports(){return pn},set exports(e){pn=e}};(function(e,r){(function(t,n){e.exports=n()})(ke,function(){var t,n,o=1e3,s=6e4,a=36e5,l=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,f=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:c,months:f,days:l,hours:a,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},M=function(u){return u instanceof I},x=function(u,g,w){return new I(u,w,g.$l)},C=function(u){return n.p(u)+"s"},m=function(u){return u<0},L=function(u){return m(u)?Math.ceil(u):Math.floor(u)},j=function(u){return Math.abs(u)},O=function(u,g){return u?m(u)?{negative:!0,format:""+j(u)+g}:{negative:!1,format:""+u+g}:{negative:!1,format:""}},I=function(){function u(w,$,A){var N=this;if(this.$d={},this.$l=A,w===void 0&&(this.$ms=0,this.parseFromMilliseconds()),$)return x(w*v[C($)],this);if(typeof w=="number")return this.$ms=w,this.parseFromMilliseconds(),this;if(typeof w=="object")return Object.keys(w).forEach(function(_){N.$d[C(_)]=w[_]}),this.calMilliseconds(),this;if(typeof w=="string"){var J=w.match(h);if(J){var Q=J.slice(2).map(function(_){return _!=null?Number(_):0});return this.$d.years=Q[0],this.$d.months=Q[1],this.$d.weeks=Q[2],this.$d.days=Q[3],this.$d.hours=Q[4],this.$d.minutes=Q[5],this.$d.seconds=Q[6],this.calMilliseconds(),this}}return this}var g=u.prototype;return g.calMilliseconds=function(){var w=this;this.$ms=Object.keys(this.$d).reduce(function($,A){return $+(w.$d[A]||0)*v[A]},0)},g.parseFromMilliseconds=function(){var w=this.$ms;this.$d.years=L(w/c),w%=c,this.$d.months=L(w/f),w%=f,this.$d.days=L(w/l),w%=l,this.$d.hours=L(w/a),w%=a,this.$d.minutes=L(w/s),w%=s,this.$d.seconds=L(w/o),w%=o,this.$d.milliseconds=w},g.toISOString=function(){var w=O(this.$d.years,"Y"),$=O(this.$d.months,"M"),A=+this.$d.days||0;this.$d.weeks&&(A+=7*this.$d.weeks);var N=O(A,"D"),J=O(this.$d.hours,"H"),Q=O(this.$d.minutes,"M"),_=this.$d.seconds||0;this.$d.milliseconds&&(_+=this.$d.milliseconds/1e3);var T=O(_,"S"),P=w.negative||$.negative||N.negative||J.negative||Q.negative||T.negative,B=J.format||Q.format||T.format?"T":"",Y=(P?"-":"")+"P"+w.format+$.format+N.format+B+J.format+Q.format+T.format;return Y==="P"||Y==="-P"?"P0D":Y},g.toJSON=function(){return this.toISOString()},g.format=function(w){var $=w||"YYYY-MM-DDTHH:mm:ss",A={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return $.replace(d,function(N,J){return J||String(A[N])})},g.as=function(w){return this.$ms/v[C(w)]},g.get=function(w){var $=this.$ms,A=C(w);return A==="milliseconds"?$%=1e3:$=A==="weeks"?L($/v[A]):this.$d[A],$===0?0:$},g.add=function(w,$,A){var N;return N=$?w*v[C($)]:M(w)?w.$ms:x(w,this).$ms,x(this.$ms+N*(A?-1:1),this)},g.subtract=function(w,$){return this.add(w,$,!0)},g.locale=function(w){var $=this.clone();return $.$l=w,$},g.clone=function(){return x(this.$ms,this)},g.humanize=function(w){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!w)},g.milliseconds=function(){return this.get("milliseconds")},g.asMilliseconds=function(){return this.as("milliseconds")},g.seconds=function(){return this.get("seconds")},g.asSeconds=function(){return this.as("seconds")},g.minutes=function(){return this.get("minutes")},g.asMinutes=function(){return this.as("minutes")},g.hours=function(){return this.get("hours")},g.asHours=function(){return this.as("hours")},g.days=function(){return this.get("days")},g.asDays=function(){return this.as("days")},g.weeks=function(){return this.get("weeks")},g.asWeeks=function(){return this.as("weeks")},g.months=function(){return this.get("months")},g.asMonths=function(){return this.as("months")},g.years=function(){return this.get("years")},g.asYears=function(){return this.as("years")},u}();return function(u,g,w){t=w,n=w().$utils(),w.duration=function(N,J){var Q=w.locale();return x(N,{$l:Q},J)},w.isDuration=M;var $=g.prototype.add,A=g.prototype.subtract;g.prototype.add=function(N,J){return M(N)&&(N=N.asMilliseconds()),$.bind(this)(N,J)},g.prototype.subtract=function(N,J){return M(N)&&(N=N.asMilliseconds()),A.bind(this)(N,J)}}})})(As);const Ps=pn;var Os="Expected a function",vr=0/0,Is="[object Symbol]",Ys=/^\s+|\s+$/g,Ls=/^[-+]0x[0-9a-f]+$/i,Ns=/^0b[01]+$/i,Fs=/^0o[0-7]+$/i,Bs=parseInt,Hs=typeof ke=="object"&&ke&&ke.Object===Object&&ke,zs=typeof self=="object"&&self&&self.Object===Object&&self,Ws=Hs||zs||Function("return this")(),js=Object.prototype,Zs=js.toString,Vs=Math.max,Gs=Math.min,gn=function(){return Ws.Date.now()};function Xs(e,r,t){var n,o,s,a,l,d,c=0,f=!1,h=!1,v=!0;if(typeof e!="function")throw new TypeError(Os);r=xr(r)||0,mn(t)&&(f=!!t.leading,h="maxWait"in t,s=h?Vs(xr(t.maxWait)||0,r):s,v="trailing"in t?!!t.trailing:v);function M(g){var w=n,$=o;return n=o=void 0,c=g,a=e.apply($,w),a}function x(g){return c=g,l=setTimeout(L,r),f?M(g):a}function C(g){var w=g-d,$=g-c,A=r-w;return h?Gs(A,s-$):A}function m(g){var w=g-d,$=g-c;return d===void 0||w>=r||w<0||h&&$>=s}function L(){var g=gn();if(m(g))return j(g);l=setTimeout(L,C(g))}function j(g){return l=void 0,v&&n?M(g):(n=o=void 0,a)}function O(){l!==void 0&&clearTimeout(l),c=0,n=d=o=l=void 0}function I(){return l===void 0?a:j(gn())}function u(){var g=gn(),w=m(g);if(n=arguments,o=this,d=g,w){if(l===void 0)return x(d);if(h)return l=setTimeout(L,r),M(d)}return l===void 0&&(l=setTimeout(L,r)),a}return u.cancel=O,u.flush=I,u}function mn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function Us(e){return!!e&&typeof e=="object"}function Ks(e){return typeof e=="symbol"||Us(e)&&Zs.call(e)==Is}function xr(e){if(typeof e=="number")return e;if(Ks(e))return vr;if(mn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=mn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ys,"");var t=Ns.test(e);return t||Fs.test(e)?Bs(e.slice(2),t?2:8):Ls.test(e)?vr:+e}var yn=Xs;const Lt=[0,1,2];var wt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(wt||{});const br=e=>Lt.includes(e),dt=e=>{var n;const t=(((n=document.getElementById(Be))==null?void 0:n.clientWidth)||0)-_e;switch(e){case 1:return Math.ceil(t/Se)*lt;case 2:return Math.ceil(t/Me)*lt;default:return Math.ceil(t/at)*lt}},qs=e=>dt(e)/lt,Nt=(e,r)=>{const t=dt(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},Js=(e,r)=>{const t=Nt(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},vn=()=>{var t;return((((t=document.getElementById(Be))==null?void 0:t.clientWidth)||0)-_e)*lt},wr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:E(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});E.extend(ks),E.extend($s),E.extend(Es),E.extend(Ts),E.extend(Ps);const Qs=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=E(),onRangeChange:s,handleToggleDisplayActiveUnits:a,onClearFilterData:l,toolbarActions:d})=>{const{zoom:c,maxRecordsPerPage:f=50}=n,[h,v]=p.useState(c),[M,x]=p.useState(E()),[C,m]=p.useState(!1),[L,j]=p.useState(dt(h)),O=Lt[h]!==Lt[Lt.length-1],I=h!==0,u=p.useMemo(()=>Js(M,h),[M,h]),g=Nt(M,h).startDate,w=E(g).dayOfYear(),$=yr(g),A=p.useRef(null),N=p.useRef(!1),J=p.useRef(null),[Q,_]=p.useState([{x:0,y:0}]),T=p.useCallback((S,V="auto")=>{var W,y,X,D;const G=vn();switch(S){case"back":return(W=A.current)==null?void 0:W.scrollTo({behavior:V,left:G/3});case"forward":return(y=A.current)==null?void 0:y.scrollTo({behavior:V,left:G/3});case"middle":{const Z=G/lt/4;return(X=A.current)==null?void 0:X.scrollTo({behavior:V,left:G/2-Z})}default:return(D=A.current)==null?void 0:D.scrollTo({behavior:V,left:G/2})}},[]),P=S=>{_(S)},B=p.useCallback(S=>{const V=qs(h);let G;switch(h){case 0:G=V*7;break;case 1:G=V;break;case 2:G=Math.ceil(V/It);break}yn(()=>{switch((S==="forward"||S==="back")&&(N.current=!0),J.current=S,S){case"back":x(y=>y.subtract(G,"days"));break;case"forward":x(y=>y.add(G,"days"));break;case"middle":x(E());break}s==null||s(u)},300)()},[s,u,h]);p.useEffect(()=>{J.current&&(T(J.current),J.current=null)},[M,T]),p.useEffect(()=>{A.current=document.getElementById(Be),j(dt(h))},[h]),p.useEffect(()=>{const S=()=>j(dt(h));return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[h]),p.useEffect(()=>{s==null||s(u)},[s,u]),p.useEffect(()=>{m(!1)},[o]),p.useEffect(()=>{C||(T("middle"),m(!0),x(o))},[o,C,T]);const Y=()=>{t||(x(S=>h===2?S.add(ar,"hours"):S.add(fr,"weeks")),s==null||s(u))},U=p.useCallback(()=>{t||B("forward")},[t,B]),R=()=>{t||(x(S=>h===2?S.subtract(ar,"hours"):S.subtract(fr,"weeks")),s==null||s(u))},ie=p.useCallback(()=>{!C||t||B("back")},[C,t,B]),ce=p.useCallback(()=>{t||(J.current="middle",x(E()),s==null||s(u))},[t,s,u]),F=p.useCallback(S=>{if(t)return;const V=E(S).startOf("day");V.isValid()&&(J.current="middle",x(V),s==null||s(u))},[t,s,u]),H=()=>ne(h+1),q=()=>ne(h-1),ne=S=>{br(S)&&(v(S),j(dt(S)),s==null||s(u))},k=()=>a==null?void 0:a(),{Provider:z}=wr;return i.jsx(z,{value:{data:e,config:n,handleGoNext:Y,handleScrollNext:U,handleGoPrev:R,handleScrollPrev:ie,handleGoToday:ce,goToDate:F,zoomIn:H,zoomOut:q,setZoom:ne,zoom:h,isNextZoom:O,isPrevZoom:I,date:M,isLoading:t,cols:L,startDate:$,dayOfYear:w,toggleDisplayActiveUnits:k,tilesCoords:Q,updateTilesCoords:P,recordsThreshold:f,onClearFilterData:l,suppressNextSlideRef:N,toolbarActions:d},children:r})},He=()=>p.useContext(wr),Sr=(e,r,t)=>{e.canvas.width=r*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=r+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},Cr=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*fe+n*Ae;if(e>=s+Ae)n++;else if(e>=s)return o*fe+n*Ae-n*Ae}return t-n*Ae},Rs=5,kr=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>Rs},ut=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},ei=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:a={},gridRef:l,separatorRowIndices:d=[]})=>{const c=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(z=>({...z,data:[z.data]})):r:e,{enabled:f=!0,isDraggable:h,resourceOnly:v=!1,isValidDrop:M}=a,[x,C]=p.useState("idle"),[m,L]=p.useState(null),[j,O]=p.useState({x:0,y:0}),[I,u]=p.useState({width:0,height:48}),[g,w]=p.useState(null),[$,A]=p.useState(!0),N=p.useRef({x:0,y:0}),J=p.useRef({x:0,y:0}),Q=p.useRef({x:0,y:0}),_=p.useRef(null),T=p.useRef(null),P=p.useRef(0),B=p.useRef(null),Y=p.useCallback(z=>!f||z.draggable===!1?!1:h?h(z):!0,[f,h]),U=p.useCallback((z,S)=>{const V=Cr(S,d),G=Math.floor(V/fe);let W;switch(t){case 0:W=Pe*7;break;case 1:W=Se;break;case 2:W=Me;break;default:W=Se}const y=Math.floor(z/W);let X;const D=E().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:X=D.add(y*7,"days").toDate();break;case 1:X=D.add(y,"days").toDate();break;case 2:X=D.add(y,"hours").toDate();break;default:X=D.toDate()}return{snappedDate:X,snappedResourceIndex:G}},[t,n,d]),R=p.useCallback((z,S,V,G)=>{const W=[],y=S.getTime(),X=V.getTime(),D=c.find(re=>re.id===G);if(!D)return W;const Z=[];for(const re of D.data)Array.isArray(re)?Z.push(...re):Z.push(re);for(const re of Z){if(re.segmentId===z.segmentId)continue;const K=re.startDate.getTime(),le=re.endDate.getTime();if(y>=K&&y<le||X>K&&X<=le||y<=K&&X>=le){const de=new Date(Math.max(y,K)),pe=new Date(Math.min(X,le)),we=pe.getTime()-de.getTime();W.push({event:re,conflictStart:de,conflictEnd:pe,overlapDuration:we})}}return W},[c]),ie=p.useCallback((z,S,V,G)=>{const W=[],y=S.getTime(),X=V.getTime(),D=E(S).format("YYYY-MM-DD"),Z=c.find(K=>K.id===G);if(!Z)return W;const re=[];for(const K of Z.data)Array.isArray(K)?re.push(...K):re.push(K);for(const K of re){if(K.segmentId===z.segmentId)continue;const le=K.startDate.getTime(),ue=K.endDate.getTime(),de=E(K.startDate).format("YYYY-MM-DD"),pe=E(K.endDate).format("YYYY-MM-DD"),we=E(V).format("YYYY-MM-DD");if(!(de===D||pe===D||de===we||pe===we||E(K.startDate).isBefore(S,"day")&&E(K.endDate).isAfter(V,"day"))||y>=le&&y<ue||X>le&&X<=ue||y<=le&&X>=ue)continue;let ee,te;ue<=y?(ee=y-ue,te="before"):(ee=le-X,te="after"),W.push({event:K,timeGap:ee,position:te})}return W.sort((K,le)=>K.timeGap-le.timeGap)},[c]),ce=p.useCallback((z,S,V)=>{const G=U(S,V);let W,y;if(v)W=z.startDate,y=z.endDate;else{const ue=E(z.endDate).diff(z.startDate);W=G.snappedDate,y=E(W).add(ue,"milliseconds").toDate()}let X=0,D="",Z;for(const ue of e){const de=Math.max(ue.data.length,1);if(G.snappedResourceIndex<X+de){D=ue.id,Z=ue.capacity;break}X+=de}if(!D)return null;let re=!0;Z!==void 0&&z.totalPassengers!==void 0&&(re=z.totalPassengers<=Z);const K=R(z,W,y,D),le=K.length===0?ie(z,W,y,D):[];return{startDate:W,endDate:y,resourceId:D,resourceIndex:G.snappedResourceIndex,resourceCapacity:Z,hasCapacity:re,conflicts:K,hasConflict:K.length>0,nearbyEvents:le}},[U,e,v,R,ie]),F=p.useCallback((z,S)=>{if(!s)return;const V=Date.now();if(V-P.current<100)return;P.current=V;const G={event:z,currentStartDate:S.startDate,currentEndDate:S.endDate,currentResourceId:S.resourceId,conflicts:S.conflicts};s(G)},[s]),H=p.useCallback((z,S)=>{if(!Y(z)||!l.current)return;S.preventDefault(),S.stopPropagation();const V=S.target.closest('[style*="left"]');let G=0,W=0;V&&V.style.left&&V.style.top&&(G=parseInt(V.style.left),W=parseInt(V.style.top));const y=ut(S.clientX,S.clientY,l.current);N.current={x:G,y:W},J.current={x:S.clientX,y:S.clientY},Q.current={x:y.x-G,y:20},B.current={startDate:z.startDate,endDate:z.endDate,resourceId:""};for(const Z of e){for(const re of Z.data)if(re.some(K=>K.segmentId===z.segmentId)){B.current.resourceId=Z.id;break}if(B.current.resourceId)break}L(z),C("potential"),O({x:G,y:W});let X=100,D=48;if(V){const Z=V.getBoundingClientRect();X=Z.width,D=Z.height}u({width:X,height:D})},[Y,l,e,t]),q=p.useCallback(z=>{if(!l.current)return;let S=l.current;for(;S&&S!==document.body;){const K=window.getComputedStyle(S);if(S.scrollHeight>S.clientHeight&&(K.overflowY==="auto"||K.overflowY==="scroll"||K.overflow==="auto"||K.overflow==="scroll"))break;S=S.parentElement}(!S||S===document.body)&&(S=document.documentElement);const V=S.getBoundingClientRect(),G=z.clientY,W=50,y=12,X=G-V.top,D=V.bottom-G;let Z=!1,re=0;X<W&&X>0?(Z=!0,re=-y*(1-X/W)):D<W&&D>0&&(Z=!0,re=y*(1-D/W)),Z?(T.current&&cancelAnimationFrame(T.current),T.current=requestAnimationFrame(()=>{S.scrollTop+=re,x==="dragging"&&q(z)})):T.current&&(cancelAnimationFrame(T.current),T.current=null)},[l,x]),ne=p.useCallback(z=>{if(x==="idle"||x==="animating"||!m||!l.current)return;const S={x:z.clientX,y:z.clientY};if(x==="potential")if(kr(J.current,S))C("dragging");else return;q(z);const V=ut(z.clientX,z.clientY,l.current);_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>{const G={x:V.x-Q.current.x,y:V.y-Q.current.y};O(G);const W=ce(m,V.x,V.y);if(W&&M){const y={event:m,currentStartDate:W.startDate,currentEndDate:W.endDate,currentResourceId:W.resourceId,conflicts:W.conflicts};W.hasConflict=!M(y)}if(w(W),W){const y=W.hasCapacity!==!1;A(y),F(m,W)}})},[x,m,l,ce,F,M,q]),k=p.useCallback(async z=>{if(x==="idle"||x==="animating")return;const S={x:z.clientX,y:z.clientY};if(!kr(J.current,S)||x==="potential"){C("idle"),L(null),w(null);return}if(!m||!g||!B.current){C("idle"),L(null),w(null);return}if(g.hasCapacity===!1){A(!1),C("animating"),O(N.current),setTimeout(()=>{C("idle"),L(null),w(null),A(!0)},300);return}const G={event:m,originalStartDate:B.current.startDate,originalEndDate:B.current.endDate,originalResourceId:B.current.resourceId,newStartDate:g.startDate,newEndDate:g.endDate,newResourceId:g.resourceId,hasConflict:g.hasConflict,conflicts:g.conflicts};let W=!0;if(o)try{const y=o(G);W=y instanceof Promise?await y:y}catch{W=!1}W?(A(!0),C("idle"),L(null),w(null)):(A(!1),C("animating"),O(N.current),setTimeout(()=>{C("idle"),L(null),w(null),A(!0)},300))},[x,m,g,o,M]);return p.useEffect(()=>{if(x==="potential"||x==="dragging"){const z=V=>ne(V),S=V=>k(V);return document.addEventListener("mousemove",z),document.addEventListener("mouseup",S),()=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",S)}}else return()=>{}},[x,ne,k]),p.useEffect(()=>()=>{_.current&&(cancelAnimationFrame(_.current),_.current=null),T.current&&(cancelAnimationFrame(T.current),T.current=null)},[]),p.useEffect(()=>{(x==="idle"||x==="animating")&&(_.current&&(cancelAnimationFrame(_.current),_.current=null),T.current&&(cancelAnimationFrame(T.current),T.current=null))},[x]),p.useEffect(()=>{(x==="dragging"||x==="potential")&&(x==="dragging"?(C("animating"),O(N.current),setTimeout(()=>{C("idle"),L(null),w(null)},300)):(C("idle"),L(null),w(null)))},[t]),p.useEffect(()=>{if((x==="dragging"||x==="potential")&&m){let z=!1;for(const S of e){for(const V of S.data)if(V.some(G=>G.segmentId===m.segmentId)){z=!0;break}if(z)break}z||(x==="dragging"?(C("animating"),O(N.current),setTimeout(()=>{C("idle"),L(null),w(null)},300)):(C("idle"),L(null),w(null)))}},[e,x,m]),{dragState:x,draggedEvent:m,ghostPosition:j,ghostDimensions:I,dropTarget:g,isValidDrop:$,handleDragStart:H,isDraggable:Y,draggingEventId:(m==null?void 0:m.segmentId)||null,resourceOnly:v}},ti=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:a={},gridRef:l,isDragging:d,separatorRowIndices:c=[]})=>{const{enabled:f=!1,isSelectable:h}=a,v=f&&!!o,M=p.useCallback(y=>{let X=0;for(const D of c)D<=y&&X++;return y*fe+X*Ae},[c]),[x,C]=p.useState("idle"),[m,L]=p.useState(null),[j,O]=p.useState(null),[I,u]=p.useState(null),[g,w]=p.useState(!1),[$,A]=p.useState([]),[N,J]=p.useState(!1),Q=p.useRef(null),_=p.useRef(null),T=p.useRef(null),P=p.useRef(null),B=p.useCallback(()=>{switch(t){case 0:return Pe*7;case 1:return Se;case 2:return Me;default:return Se}},[t]),Y=p.useCallback(y=>{const X=B(),D=Math.floor(y/X),Z=E().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return Z.add(D*7,"days").toDate();case 1:return Z.add(D,"days").toDate();case 2:return Z.add(D,"hours").toDate();default:return Z.toDate()}},[t,n,B]),U=p.useCallback(y=>{const X=Cr(y,c),D=Math.floor(X/fe);let Z=0;for(const re of e){const K=Math.max(re.data.length,1);if(D<Z+K)return{resourceId:re.id,resourceIndex:D,resourceLabel:re.label};Z+=K}return null},[e,c]),R=p.useCallback(y=>{const X=B();return Math.floor(y/X)*X},[B]),ie=p.useCallback((y,X,D,Z=[])=>{const re=[],le=(r||e).find(pe=>pe.id===y),ue=X.getTime(),de=D.getTime();if(le){const pe=le.data[0],we=pe&&Array.isArray(pe)?le.data.flat():le.data;for(const xe of we){const ae=new Date(xe.startDate).getTime(),ee=new Date(xe.endDate).getTime();if(ue<ee&&de>ae){const te=new Date(Math.max(ue,ae)),oe=new Date(Math.min(de,ee)),he=oe.getTime()-te.getTime();re.push({event:xe,conflictStart:te,conflictEnd:oe,overlapDuration:he})}}}for(const pe of Z){if(pe.resourceId!==y)continue;const we=pe.startDate.getTime(),xe=pe.endDate.getTime();if(ue<xe&&de>we){const ae=new Date(Math.max(ue,we)),ee=new Date(Math.min(de,xe)),te=ee.getTime()-ae.getTime(),oe={segmentId:`pending-${pe.startDate.getTime()}`,reservationId:`pending-${pe.startDate.getTime()}`,startDate:pe.startDate,endDate:pe.endDate,occupancy:0,title:`New Event (${pe.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};re.push({event:oe,conflictStart:ae,conflictEnd:ee,overlapDuration:te})}}return re},[e,r]),ce=p.useCallback(y=>{if(!v||d||!l.current||y.button!==0)return;const X=y.target;if(X.closest("[data-segment-id]")||X.closest("[data-multi-select-ui]"))return;const D=ut(y.clientX,y.clientY,l.current),Z=U(D.y);if(!Z)return;Q.current={x:y.clientX,y:y.clientY},_.current=Z.resourceIndex;const re=R(D.x),K=B(),le=M(Z.resourceIndex);L(D),O(D),u({x:re,y:le,width:K,height:fe}),C("selecting")},[v,d,l,U,R,B,M]),F=p.useCallback(y=>{O(y);const X=B(),D=R((m==null?void 0:m.x)||0),Z=R(y.x),re=M(_.current),K=Math.min(D,Z),le=Math.max(D,Z)+X;u({x:K,y:re,width:le-K,height:fe})},[m,B,R,M]),H=p.useCallback(()=>{P.current&&(cancelAnimationFrame(P.current),P.current=null)},[]),q=p.useCallback((y,X)=>{const D=document.getElementById(Be);if(!D||!l.current)return;const Z=D.getBoundingClientRect(),re=60,K=12,le=y-(Z.left+_e),ue=Z.right-y;let de=0;le<re?de=-K*(1-Math.max(0,le)/re):ue<re&&(de=K*(1-Math.max(0,ue)/re)),H(),de!==0&&(P.current=requestAnimationFrame(()=>{D.scrollLeft+=de,F(ut(y,X,l.current)),q(y,X)}))},[l,F,H]),ne=p.useCallback(y=>{if(x!=="selecting"||!l.current||_.current===null)return;const X=ut(y.clientX,y.clientY,l.current);T.current&&cancelAnimationFrame(T.current),T.current=requestAnimationFrame(()=>F(X)),q(y.clientX,y.clientY)},[x,l,F,q]),k=p.useCallback(y=>{if(x!=="selecting")return;if(H(),!l.current||!m||!Q.current){C("idle"),L(null),O(null),u(null);return}const X=ut(y.clientX,y.clientY,l.current),D=U(m.y);if(!D){C("idle"),L(null),O(null),u(null);return}const Z=Math.min(m.x,X.x),re=Math.max(m.x,X.x),K=Y(Z),le=Y(re),ue=E(le).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h(D.resourceId,K,ue)){C("idle"),L(null),O(null),u(null);return}const de=ie(D.resourceId,K,ue,$),pe=de.length>0,we={startDate:K,endDate:ue,resourceId:D.resourceId,resourceLabel:D.resourceLabel,zoomLevel:t,hasConflict:pe,conflicts:pe?de:void 0};if(g)A(xe=>[...xe,we]),J(!0);else if(o){const xe=o(we),ae=ee=>{ee!=null&&ee.continueMultiSelect&&(w(!0),A([we]),J(!0))};xe instanceof Promise?xe.then(ae):ae(xe)}C("idle"),L(null),O(null),u(null),Q.current=null,_.current=null},[x,l,m,U,Y,h,o,t,g,ie,$,H]),z=p.useCallback(()=>{if($.length>0&&s){J(!1);const y=s($),X=D=>{D!=null&&D.continueMultiSelect?J(!0):(A([]),w(!1),J(!1))};y instanceof Promise?y.then(X):X(y);return}A([]),w(!1),J(!1)},[$,s]),S=p.useCallback(()=>{A([]),w(!1),J(!1)},[]),V=p.useCallback(y=>{A(X=>{const D=X.filter((Z,re)=>re!==y);return D.length===0&&(w(!1),J(!1)),D})},[]),G=p.useCallback((y,X)=>{A(D=>D.map((Z,re)=>{if(re!==y)return Z;const K={...Z,...X},le=D.filter((de,pe)=>pe!==y),ue=ie(K.resourceId,K.startDate,K.endDate,le);return{...K,hasConflict:ue.length>0,conflicts:ue.length>0?ue:void 0}}))},[ie]),W=p.useCallback(y=>{y.key==="Escape"&&(x==="selecting"?(H(),C("idle"),L(null),O(null),u(null),Q.current=null,_.current=null):g&&$.length>0&&(A([]),w(!1),J(!1)))},[x,g,$.length,H]);return p.useEffect(()=>{if(x==="selecting")return document.addEventListener("mousemove",ne),document.addEventListener("mouseup",k),document.addEventListener("keydown",W),()=>{document.removeEventListener("mousemove",ne),document.removeEventListener("mouseup",k),document.removeEventListener("keydown",W)}},[x,ne,k,W]),p.useEffect(()=>{if(g&&$.length>0)return document.addEventListener("keydown",W),()=>{document.removeEventListener("keydown",W)}},[g,$.length,W]),p.useEffect(()=>()=>{T.current&&(cancelAnimationFrame(T.current),T.current=null),H()},[H]),p.useEffect(()=>{d&&x==="selecting"&&(H(),C("idle"),L(null),O(null),u(null),Q.current=null,_.current=null)},[d,x,H]),{selectionState:x,selectionStart:m,selectionEnd:j,selectionBox:I,handleGridMouseDown:ce,isEnabled:v,pendingSelections:$,confirmSelections:z,clearSelections:S,removeSelection:V,updateSelection:G,isMultiSelectActive:g,hasUnconfirmedSelections:N}},ni=b.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,ri=b.div`
  position: relative;
`,oi=b.canvas``;b.canvas``;const si=b.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`,Mr=b.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,ii=p.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onEventDrop:a,onEventDrag:l,draggableConfig:d,onDragStateChange:c,onTimeRangeSelect:f,onMultiTimeRangeSelect:h,clickToAddConfig:v,separatorRowIndices:M=[],subcontractSeparatorRow:x=-1},C){const m=p.useRef(!1),{handleScrollNext:L,handleScrollPrev:j,date:O,isLoading:I,cols:u,startDate:g,suppressNextSlideRef:w}=He(),$=p.useRef(null),A=p.useRef(null),N=p.useRef(t),J=p.useRef(O),Q=p.useRef(null),_=p.useRef(null),T=p.useRef(null),P=p.useRef(null),[B,Y]=p.useState(!1),U=Ot(),{dragState:R,draggedEvent:ie,ghostPosition:ce,ghostDimensions:F,dropTarget:H,isValidDrop:q,handleDragStart:ne,isDraggable:k,draggingEventId:z,resourceOnly:S}=ei({data:n,baseData:o||n,zoom:r,startDate:g,onEventDrop:a,onEventDrag:l,draggableConfig:d,gridRef:P,separatorRowIndices:M});p.useEffect(()=>{const te=R==="dragging"||R==="potential";Y(te),c&&c(te)},[R,c]);const V=p.useRef(!1),G=p.useRef(O),W=p.useRef(null);p.useEffect(()=>{var Te;const te=G.current;if(G.current=O,!V.current){V.current=!0;return}if(w!=null&&w.current){w.current=!1;return}const oe=P.current;if(!(oe!=null&&oe.animate))return;const he=O.isAfter(te)?48:-48;(Te=W.current)==null||Te.cancel(),oe.style.willChange="transform";const be=oe.animate([{transform:`translateX(${he}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),$e=()=>{oe.style.willChange=""};be.onfinish=$e,be.oncancel=$e,W.current=be},[O,w]);const{selectionState:y,selectionBox:X,handleGridMouseDown:D,pendingSelections:Z,confirmSelections:re,clearSelections:K,removeSelection:le,updateSelection:ue,isMultiSelectActive:de,hasUnconfirmedSelections:pe}=ti({data:n,baseData:o||n,zoom:r,startDate:g,onTimeRangeSelect:f,onMultiTimeRangeSelect:h,clickToAddConfig:v,gridRef:P,isDragging:B,separatorRowIndices:M}),we=p.useCallback(te=>{te.preventDefault()},[]),xe=p.useCallback(te=>{te.preventDefault()},[]),ae=M.length*Ae,ee=p.useCallback(te=>{const oe=vn(),he=t*fe+1+ae;Sr(te,oe,he),Ss(te,r,t,u,g,U,M,x)},[u,g,t,r,U,M,x,ae]);return p.useEffect(()=>{if(!$.current)return;const te=$.current.getContext("2d");if(!te)return;const oe=()=>ee(te);return window.addEventListener("resize",oe),()=>window.removeEventListener("resize",oe)},[ee]),p.useEffect(()=>{var Le,Qe;const te=N.current,oe=J.current;if(N.current=t,J.current=O,te===t||!O.isSame(oe,"day")||(Le=window.matchMedia)!=null&&Le.call(window,"(prefers-reduced-motion: reduce)").matches)return;const he=$.current,be=A.current;if(!he||!be)return;const $e=be.getContext("2d");if(!$e)return;be.width=he.width,be.height=he.height,be.style.width=he.style.width,be.style.height=he.style.height,$e.setTransform(1,0,0,1,0,0),$e.clearRect(0,0,be.width,be.height),$e.drawImage(he,0,0),(Qe=Q.current)==null||Qe.cancel(),be.style.opacity="1";const Te=be.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease"});Te.onfinish=()=>{be.style.opacity="0"},Q.current=Te},[t,O]),p.useEffect(()=>{const te=$.current;if(!te)return;te.style.letterSpacing="1px";const oe=te.getContext("2d");oe&&ee(oe)},[O,t,r,ee]),p.useEffect(()=>{if(!_.current)return;const te=new IntersectionObserver(oe=>{oe[0].isIntersecting&&!m.current&&(m.current=!0,L(),setTimeout(()=>{m.current=!1},1e3))},{root:document.getElementById(Be)});return te.observe(_.current),()=>{te.disconnect()}},[L]),p.useEffect(()=>{if(!T.current)return;const te=new IntersectionObserver(oe=>{oe[0].isIntersecting&&!m.current&&(m.current=!0,j(),setTimeout(()=>{m.current=!1},1e3))},{root:document.getElementById(Be),rootMargin:`0px 0px 0px -${_e}px`});return te.observe(T.current),()=>{te.disconnect()}},[j]),i.jsxs(ni,{id:lr,children:[i.jsxs(ri,{ref:te=>{typeof C=="function"?C(te):C&&(C.current=te),P.current=te},onMouseDown:D,style:{cursor:f?"crosshair":"default"},children:[i.jsx(Mr,{position:"left",ref:T}),i.jsx(En,{isLoading:I,position:"left"}),i.jsx(oi,{ref:$,onDragStart:we,onDragOver:xe,style:{userSelect:R==="dragging"?"none":"auto"}}),i.jsx(si,{ref:A,"aria-hidden":!0}),i.jsx(Tl,{zoom:r,startDate:g}),i.jsx(Bc,{data:n,zoom:r,onTileClick:s,onDragStart:ne,isDraggable:k,draggingEventId:z,separatorRowIndices:M}),i.jsx(Mr,{ref:_,position:"right"}),i.jsx(En,{isLoading:I,position:"right"}),(R==="dragging"||R==="animating")&&i.jsx(ul,{draggedEvent:ie,ghostPosition:ce,ghostDimensions:F,dropTarget:H,isValidDrop:q,dragState:R,zoom:r,data:n,resourceOnly:S,separatorRowIndices:M}),i.jsx(pl,{selectionBox:X,isSelecting:y==="selecting"}),de&&Z.length>0&&i.jsx(El,{selections:Z,data:n,zoom:r,startDate:g,onRemove:le,onUpdate:ue,separatorRowIndices:M})]}),de&&pe&&Z.length>0&&i.jsx(Sl,{selections:Z,onConfirm:re,onClear:K,onRemove:le})]})}),$r=e=>{const r=E.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},Dr=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/Ce);t+=o.hours+s,n+=r%Ce,n>=Ce&&(t++,n-=Ce)}),{hours:t,minutes:n}},Er=(e,r)=>{let t=dr;switch(r){case 0:t=ps;break;case 1:t=dr;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,a=Ce-e.minutes;return a===Ce&&(s++,a=0),{hours:Math.max(0,s),minutes:s<0?0:a}},o=()=>{const s=e.hours-t,a=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:a}};return{free:n(),overtime:o()}},ai=(e,r,t)=>{const n=r.isoWeek(),o=e.map(c=>{const f=E(c.startDate).isoWeek(),h=E(c.startDate).isoWeekday(),v=E(c.endDate).isoWeek(),M=E(c.endDate).isoWeekday(),{hours:x,minutes:C}=$r(c.occupancy);if(n===f){const m=(Ve+1-h)*x,L=(Ve+1-h)*C;return{hours:Math.max(0,m),minutes:L}}else if(n===v){const m=M>Ve?Ve*x:M*x,L=M>Ve?Ve*C:M*C;return{hours:m,minutes:L}}else if(E(r).isBetween(c.startDate,c.endDate))return{hours:Ve*x,minutes:Ve*C};return{hours:0,minutes:0}}),{hours:s,minutes:a}=Dr(o),{free:l,overtime:d}=Er({hours:s,minutes:a},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,a)},free:l,overtime:d}},ci=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(f=>{const{hours:h,minutes:v}=$r(f.occupancy);return o<=(n?7:5)?{hours:h,minutes:v}:{hours:0,minutes:0}}),{hours:a,minutes:l}=Dr(s),{free:d,overtime:c}=Er({hours:a,minutes:l},t);return{taken:{hours:Math.max(0,a),minutes:Math.max(0,l)},free:d,overtime:c}},li=(e,r)=>{let t=0;e.forEach(l=>{const d=E(l.startDate).hour(),c=E(l.endDate).hour(),f=r.hour(),h=E(l.endDate).minute(),v=E(l.startDate).minute();d<f&&c>f?t+=Ce:d===f&&c===f&&v&&h?t+=h?h-v:Ce-v:d===f&&c>=f?t+=v?Ce-v:Ce:c===f&&h&&(t+=h)});const n=Math.floor(t/Ce),o=t%Ce,s=n||o?0:1,a=n?0:o?Ce-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:a},overtime:{hours:0,minutes:0}}},di=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(a=>n===1?E(t).isBetween(a.startDate,a.endDate,"day","[]"):n===2?E(t).isBetween(a.startDate,a.endDate,"hour","[]"):E(a.startDate).isBetween(E(t),E(t).add(6,"days"),"day","[]")||E(t).isBetween(E(a.startDate),E(a.endDate),"day","[]"));switch(n){case 1:return ci(s,t,n,o);case 2:return li(s,t);default:return ai(s,t,n)}},ui=(e,r,t,n,o,s,a=!1)=>{let l="weeks",d;switch(s){case 0:l="weeks",d=at;break;case 1:l="days",d=Se;break;case 2:l="hours",d=Me;break}const c=Math.ceil(s===2?(t.x-.5*d)/d:t.x/d),f=E(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(c-1,l),h=Math.ceil(t.y/fe),v=n.findIndex((L,j,O)=>O.slice(0,j+1).reduce((u,g)=>u+g,0)>=h),M=s===2?(c+1)*d:c*d,x=(h-1)*fe+fe,C=di(o[v],v,f,s,a),m=E(e.startDate).isSame(E(e.endDate),"day");return{coords:{x:M,y:x},mouseCoords:t,resourceIndex:v,disposition:C,reservationData:{startTime:E(e.startDate).format("hh:mm A"),startDate:E(e.startDate).format("MMM D, YYYY"),endTime:E(e.endDate).format("hh:mm A"),endDate:E(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,departureAddress:e.departureAddress,destinationAddress:e.destinationAddress,returnAddress:e.returnAddress,isOneDayEvent:m,passengers:e.totalPassengers}}};function fi(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function hi(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const f of e)!f.isSubcontract&&f.capacity!=null&&t.add(f.capacity);const n=[...t].sort((f,h)=>f-h);if(n.length<2)return r;const o=Math.min(5,n.length),s=fi(n,o),a=[];let l=0;for(const f of s)a.push({min:n[l],max:n[f-1],values:n.slice(l,f)}),l=f;a.push({min:n[l],max:n[n.length-1],values:n.slice(l)});const d=[],c=new Map;return a.forEach((f,h)=>{const v="__auto_cat_"+h,M=f.min===f.max?f.min+" pax":f.min+"-"+f.max+" pax";d.push({id:v,name:M,minPassengers:f.min,maxPassengers:f.max});for(const x of f.values)c.set(x,v)}),{categories:d,capacityToCategoryId:c}}const pi=(e,r,t,n)=>{const o=[];let s=0,a=[],l=0;return r.length>n?(r.forEach((d,c)=>{const f={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=n&&(o.push(a),s+=a.length,a=[],l=0),l++,a.push(f)}),t.slice(s).length<=n&&(a=[],r.slice(s).forEach((d,c)=>{const f={id:e[c+s].id,label:e[c+s].label,data:d,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};a.push(f),c===r.length-s-1&&o.push(a)})),o):(r.forEach((d,c)=>{const f={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};a.push(f)}),o.push(a),o)};var xn={},gi={get exports(){return xn},set exports(e){xn=e}};(function(e,r){(function(t,n){e.exports=n()})(ke,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(gi);const mi=xn;var bn={},yi={get exports(){return bn},set exports(e){bn=e}};(function(e,r){(function(t,n){e.exports=n()})(ke,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(yi);const vi=bn,xi=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let a=0;a<o.length;a++){const l=E(t.startDate).startOf("day"),d=E(t.endDate).startOf("day"),c=E(o[a].startDate).startOf("day"),f=E(o[a].endDate).startOf("day");if(l.isBetween(c,f,null,"[]")||d.isBetween(c,f,null,"[]")||l.isBefore(c,"minute")&&d.isAfter(f,"minute")||l.isAfter(c,"minute")&&d.isBefore(f,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};E.extend(mi),E.extend(vi);const _r=new WeakMap,bi=e=>{const r=_r.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const a=E(o.startDate),l=E(s.startDate),d=a.startOf("day").diff(l.startOf("day"),"day");return d!==0?d:a.diff(l)}),n=xi(t);return _r.set(e,n),n},wi=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const a=bi(s.data);return o[0].push(a),o[1].push(Math.max(a.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},Si=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,Ci=e=>{const{recordsThreshold:r}=He(),[t,n]=p.useState(0),[o,s]=p.useState(0),a=p.useRef(null);p.useEffect(()=>{a.current=document.getElementById(Be)},[]);const{projectsPerPerson:l,rowsPerPerson:d}=p.useMemo(()=>wi(e),[e]),c=p.useMemo(()=>pi(e,l,d,r),[e,l,r,d]),f=p.useCallback(()=>{c[o].length&&a.current&&(a.current.scroll({top:0}),n(m=>m+c[Math.max(o,0)].length),s(m=>Math.min(m+1,c.length-1)),window.scroll({top:0}))},[o,c]),h=p.useCallback(()=>{c[o].length&&(n(m=>Math.max(m-c[o-1].length,0)),s(m=>Math.max(m-1,0)))},[o,c]),v=p.useCallback(()=>{n(0),s(0)},[]),M=t+c[o].length,x=p.useMemo(()=>d.slice(t,M),[M,d,t]),C=p.useMemo(()=>l.slice(t,M),[M,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:C,rowsPerItem:x,totalRowsPerPage:Si(c[o]),next:f,previous:h,reset:v}};var wn={},ki={get exports(){return wn},set exports(e){wn=e}};(function(e,r){(function(t,n){e.exports=n()})(ke,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(ki);const Mi=wn;var Sn={},$i={get exports(){return Sn},set exports(e){Sn=e}};(function(e,r){(function(t,n){e.exports=n(Je)})(ke,function(t){function n(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var o=n(t);function s(v){return v%10<5&&v%10>1&&~~(v/10)%10!=1}function a(v,M,x){var C=v+" ";switch(x){case"m":return M?"minuta":"minutę";case"mm":return C+(s(v)?"minuty":"minut");case"h":return M?"godzina":"godzinę";case"hh":return C+(s(v)?"godziny":"godzin");case"MM":return C+(s(v)?"miesiące":"miesięcy");case"yy":return C+(s(v)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,f=function(v,M){return c.test(M)?l[v.month()]:d[v.month()]};f.s=d,f.f=l;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:f,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(v){return v+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})($i);const Di=Sn;var Cn={},Ei={get exports(){return Cn},set exports(e){Cn=e}};(function(e,r){(function(t,n){e.exports=n(Je)})(ke,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(d,c,f){var h=s[f];return Array.isArray(h)&&(h=h[c?0:1]),h.replace("%d",d)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return o.default.locale(l,null,!0),l})})(Ei);const _i=Cn;var kn={},Ti={get exports(){return kn},set exports(e){kn=e}};(function(e,r){(function(t,n){e.exports=n(Je)})(ke,function(t){function n(f){return f&&typeof f=="object"&&"default"in f?f:{default:f}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),a="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,d=function(f,h){return l.test(h)?s[f.month()]:a[f.month()]};d.s=a,d.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:d,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(f){return f+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Ti);const Ai=kn;var Mn={},Pi={get exports(){return Mn},set exports(e){Mn=e}};(function(e,r){(function(t,n){e.exports=n(Je)})(ke,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return o.default.locale(s,null,!0),s})})(Pi);const Oi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:Mi},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:Di},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:Mn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:Ai},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:_i}];class Ii{constructor(){oo(this,"locales",Oi)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const Ft=new Ii,Tr=p.createContext({localesData:Ft.getLocales(),currentLocale:Ft.getLocales()[0],setCurrentLocale:()=>{}}),Yi=({children:e,lang:r,translations:t})=>{const[n,o]=p.useState("en"),s=Ft.getLocales(),a=p.useCallback(()=>{const h=s.find(v=>v.id===n);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&E.locale(h.dayjsTranslations),h||s[0]},[n,s]),[l,d]=p.useState(a()),c=h=>{localStorage.setItem("locale",h.translateCode),d(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(M=>M.id===h.id)||Ft.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),v=r??h??"en";localStorage.setItem("locale",v),o(v),d(a())},[a,r]);const{Provider:f}=Tr;return i.jsx(f,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},ze=()=>p.useContext(Tr).currentLocale.lang,Li=e=>se.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},se.createElement("defs",null,se.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),se.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},se.createElement("stop",{offset:.47,stopColor:"#ccc"}),se.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),se.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),se.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),se.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),se.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),se.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),se.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),se.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),se.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),se.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),se.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Ni=b.div`
  height: 440px;
  width: 514px;
  position: relative;
`,Fi=b.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Bi=({onTileClick:e})=>{const{feelingEmpty:r}=ze();return i.jsxs(Ni,{onClick:e,children:[i.jsx(Li,{}),i.jsx(Fi,{children:r})]})},Hi=b.div`
  position: relative;
  display: flex;
`,zi=b.div`
  position: relative;
  margin-left: ${_e};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Wi=b.div`
  width: calc(${({width:e})=>e}px - ${_e}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${_e}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,ji={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:wt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function Zi(e,r){const t=r?[...r].sort((l,d)=>l.maxPassengers-d.maxPassengers):[],n=[];for(const l of t){const d=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);d.length>0&&n.push({type:"category",category:l,items:d})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?n.push({type:"uncategorized",items:s}):s.length>0&&n.push({type:"uncategorized",items:s});const a=e.filter(l=>l.isSubcontract);return a.length>0&&n.push({type:"subcontract",items:a}),n}const Vi=({data:e,baseData:r,categories:t,onTileClick:n,onItemClick:o,toggleTheme:s,topBarWidth:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:f,onMultiTimeRangeSelect:h,clickToAddConfig:v})=>{const[M,x]=p.useState(ji),[C,m]=p.useState(e),[L,j]=p.useState(!1),[O,I]=p.useState(!1),[u,g]=p.useState(""),[w,$]=p.useState(new Set),{zoom:A,startDate:N,isLoading:J,config:{includeTakenHoursOnWeekendsInDayView:Q,showTooltip:_,showThemeToggle:T}}=He(),P=p.useRef(null),B=p.useRef(null),[Y,U]=p.useState(124),{page:R,projectsPerPerson:ie,rowsPerItem:ce,currentPageNum:F,pagesAmount:H,next:q,previous:ne,reset:k}=Ci(C),{effectiveCategories:z,effectivePage:S}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:R};const ee=hi(R);if(ee.categories.length===0)return{effectiveCategories:void 0,effectivePage:R};const te=R.map(oe=>{if(oe.isSubcontract||oe.capacity==null)return oe;const he=ee.capacityToCategoryId.get(oe.capacity);return he?{...oe,categoryId:he}:oe});return{effectiveCategories:ee.categories,effectivePage:te}},[t,R]),V=p.useCallback(ee=>{$(te=>{const oe=new Set(te);return oe.has(ee)?oe.delete(ee):oe.add(ee),oe})},[]),G=p.useMemo(()=>{const ee=[],te=z?[...z].sort((oe,he)=>oe.maxPassengers-he.maxPassengers):[];for(const oe of te)S.some(he=>!he.isSubcontract&&he.categoryId===oe.id)&&ee.push(oe.id);return S.some(oe=>oe.isSubcontract)&&ee.push("__subcontract__"),ee},[z,S]),W=p.useCallback(()=>{$(new Set)},[]),y=p.useCallback(()=>{$(new Set(G))},[G]),{visiblePage:X,visibleRowsPerItem:D,visibleTotalRows:Z,visibleProjectsPerPerson:re,separatorRowIndices:K,subcontractSeparatorRow:le}=p.useMemo(()=>{const ee=Zi(S,z),te=((z==null?void 0:z.length)??0)>0,oe=new Map;R.forEach((De,pt)=>oe.set(De.id,pt));const he=[],be=[],$e=[],Te=[];let Le=0,Qe=-1;for(const De of ee)if(De.type==="subcontract"||De.type==="category"&&te){const gt=De.type==="subcontract"?"__subcontract__":De.category.id,mt=w.has(gt);if(Te.push(Le),De.type==="subcontract"&&(Qe=Le),!mt)for(const Re of De.items){const Ht=oe.get(Re.id)??0,zt=ce[Ht];he.push(Re),be.push(zt),$e.push(ie[Ht]),Le+=zt}}else for(const gt of De.items){const mt=oe.get(gt.id)??0,Re=ce[mt];he.push(gt),be.push(Re),$e.push(ie[mt]),Le+=Re}const Ge=be.reduce((De,pt)=>De+pt,0);return{visiblePage:he,visibleRowsPerItem:be,visibleTotalRows:Ge,visibleProjectsPerPerson:$e,separatorRowIndices:Te,subcontractSeparatorRow:Qe}},[S,z,R,w,ce,ie]),ue=p.useRef(yn((ee,te,oe,he,be,$e)=>{if(!P.current)return;const{tile:Te,segmentId:Le}=we(ee);if(!Le||!Te){j(!1);return}const Qe=pe(Le,te),Ge=P.current.getBoundingClientRect(),De=Te.getBoundingClientRect(),pt={x:ee.clientX-Ge.left,y:ee.clientY-Ge.top},gt={x:ee.clientX-Ge.left,y:ee.clientY-Ge.top},mt={x:De.left-Ge.left,y:De.top-Ge.top,width:De.width,height:De.height},{coords:{x:Re,y:Ht},resourceIndex:zt,disposition:Al,reservationData:Pl}=ui(Qe,oe,pt,he,be,$e,Q);x({coords:{x:Re,y:Ht},mouseCoords:gt,resourceIndex:zt,disposition:Al,reservationData:Pl,tileBounds:mt}),j(!0)},4)),de=p.useRef(yn((ee,te)=>{k(),m(ee.map(oe=>({...oe,data:oe.data.filter(he=>{const{title:be,description:$e,subtitle:Te}=he;return(be==null?void 0:be.toLowerCase().includes(te.toLowerCase()))||(Te==null?void 0:Te.toLowerCase().includes(te.toLowerCase()))||($e==null?void 0:$e.toLowerCase().includes(te.toLowerCase()))})})).filter(oe=>oe.data.length>0))},500)),pe=(ee,te)=>{if(ee)return te.flatMap(oe=>oe.data).find(oe=>oe.segmentId===ee)},we=ee=>{if(!ee.target)return{tile:null,segmentId:null};const te=ee.target.closest("[data-segment-id]");return te?{tile:te,segmentId:te.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},xe=ee=>{const te=ee.target.value;g(te),de.current.cancel(),te?de.current(e,te):(k(),m(e))},ae=p.useCallback(()=>{ue.current.cancel(),j(!1)},[]);return p.useEffect(()=>{const ee=oe=>ue.current(oe,e,N,D,re,A),te=P.current;if(te)return te.addEventListener("mousemove",ee),te.addEventListener("mouseleave",ae),()=>{te.removeEventListener("mousemove",ee),te.removeEventListener("mouseleave",ae)}},[ue,ae,re,D,N,A,e]),p.useEffect(()=>{u?(de.current.cancel(),de.current(e,u)):m(e)},[e,u]),p.useLayoutEffect(()=>{const ee=B.current;if(!ee)return;const te=()=>U(ee.offsetHeight);te();const oe=new ResizeObserver(te);return oe.observe(ee),()=>oe.disconnect()},[]),i.jsxs(Hi,{children:[i.jsx(Ga,{headerHeight:Y,data:S,categories:z,pageNum:F,pagesAmount:H,rows:ce,onLoadNext:q,onLoadPrevious:ne,searchInputValue:u,onSearchInputChange:xe,onItemClick:o,collapsedGroups:w,onToggleGroup:V,allGroupIds:G,onExpandAll:W,onCollapseAll:y}),i.jsxs(zi,{children:[i.jsx(bc,{ref:B,zoom:A,topBarWidth:a,showThemeToggle:T,toggleTheme:s}),e.length?i.jsx(ii,{data:X,baseData:r||e,zoom:A,rows:Z,ref:P,onTileClick:n,onEventDrop:l,onEventDrag:d,draggableConfig:c,onDragStateChange:I,onTimeRangeSelect:f,onMultiTimeRangeSelect:h,clickToAddConfig:v,separatorRowIndices:K,subcontractSeparatorRow:le}):i.jsx(Wi,{width:a,children:J?i.jsx(En,{isLoading:J,position:"left"}):i.jsx(Bi,{})}),_&&i.jsx(el,{tooltipData:M,visible:L&&!O})]})]})},Gi=b.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 9px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.primary};
`,$n=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-self: ${({$at:e})=>e??"start"};
  justify-content: ${({$at:e})=>e==="end"?"flex-end":e==="center"?"center":"flex-start"};
`,Xi=b.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Ar=b.button`
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
`,Ui=b.button`
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
`,Ki=b.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin: 0 4px;
  text-transform: capitalize;
  white-space: nowrap;
`,qi=b.div`
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
`,Pr=b.button`
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
`,Ji=b.label`
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
`,Qi=b.button`
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
`,Ri=b.span`
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
`,ft=({children:e,sw:r=2})=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:e}),ea=()=>{var r,t;const e=document.getElementById(pr);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(r=e==null?void 0:e.requestFullscreen)==null||r.call(e)},ta=()=>{const{config:e,date:r,zoom:t,handleGoNext:n,handleGoPrev:o,handleGoToday:s,setZoom:a,goToDate:l,toggleDisplayActiveUnits:d,toolbarActions:c}=He();ze();const{filterButtonState:f=-1}=e,h=()=>{var v;(v=document.querySelector(`#${Be} input[placeholder]`))==null||v.focus()};return i.jsxs(Gi,{width:0,children:[i.jsxs($n,{$at:"start",children:[i.jsx(Ki,{children:r.locale(E.locale()).format("MMMM YYYY")}),i.jsxs(qi,{children:[i.jsx("button",{className:t===2?"on":"",onClick:()=>a(2),children:"Día"}),i.jsx("button",{className:t===0?"on":"",onClick:()=>a(0),children:"Semana"}),i.jsx("button",{className:t===1?"on":"",onClick:()=>a(1),children:"Mes"})]}),e.showJumpToDate!==!1&&i.jsxs(Ji,{children:[i.jsxs(ft,{children:[i.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),i.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),i.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",i.jsx("input",{type:"date",onChange:v=>v.target.value&&l(v.target.value)})]})]}),i.jsx($n,{$at:"center",children:i.jsxs(Xi,{children:[i.jsx(Ar,{onClick:o,"aria-label":"Anterior",children:i.jsx(ft,{children:i.jsx("path",{d:"m15 18-6-6 6-6"})})}),i.jsx(Ui,{onClick:s,children:"Hoy"}),i.jsx(Ar,{onClick:n,"aria-label":"Siguiente",children:i.jsx(ft,{children:i.jsx("path",{d:"m9 18 6-6-6-6"})})})]})}),i.jsxs($n,{$at:"end",children:[i.jsxs(Qi,{onClick:h,children:[i.jsxs(ft,{children:[i.jsx("circle",{cx:"11",cy:"11",r:"7"}),i.jsx("path",{d:"m20 20-3.2-3.2"})]}),"Buscar",i.jsx("span",{className:"k",children:"⌘K"})]}),e.showFilterButton!==!1&&f>=0&&i.jsxs(Pr,{$primary:!!f,onClick:d,children:[i.jsx(ft,{children:i.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!f&&i.jsx(Ri,{children:f})]}),e.showFullscreenButton!==!1&&i.jsxs(Pr,{onClick:ea,children:[i.jsx(ft,{children:i.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]}),c]})]})},na={add:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>se.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>se.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>se.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>se.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>se.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>se.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>se.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),se.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Dn=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=Ot(),a=na[e];return a?i.jsx(a,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},ra=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r];b.button`
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
  ${({theme:e,variant:r,disabled:t})=>ra(e,r,t)}
`;const oa=b.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${hr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ie};
`,sa=b.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,ia=b.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,aa=b.div`
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
`,ca=b.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,la=b.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,da=b.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({$sev:e})=>e===2?"#c6483d":e===1?"#d98a22":"#93b1a6"};
`,ua=b.div`
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
`,fa=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,ha=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`,pa=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,ga=b.div`
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
`,ma=()=>{const{date:e,zoom:r,data:t,goToDate:n}=He(),o=ze(),s=p.useRef(null),[a,l]=p.useState(null),d=p.useMemo(()=>Array.from({length:12},(u,g)=>E().month(g).format("MMM").toUpperCase()),[o]),c=e.year(),f=p.useMemo(()=>E(new Date(c,0,1)),[c]),h=p.useMemo(()=>E(new Date(c+1,0,1)).diff(f,"day"),[c,f]),v=u=>u.diff(f,"day")/h*100,M=p.useMemo(()=>{const u=Math.ceil(h/7),g=new Array(u).fill(0),w=new Array(u).fill(0);for(const A of t??[])for(const N of A.data??[]){const J=E(N.startDate);if(J.year()!==c)continue;const Q=Math.floor(J.diff(f,"day")/7);if(Q<0||Q>=u)continue;g[Q]+=1;const _=N.readiness==="sin_chofer"?2:N.readiness==="sin_avisar"?1:0;_>w[Q]&&(w[Q]=_)}const $=Math.max(1,...g);return g.map((A,N)=>({h:A/$*100,sev:w[N]}))},[t,c,f,h]),x=E(),C=x.year()===c?v(x):null,m=u=>{const{startDate:g,endDate:w}=Nt(u,r),$=Math.max(0,v(g));return{left:$,width:Math.min(100,v(w))-$,startDate:g,endDate:w}},L=m(e),j=a?m(a.d):null,O=u=>`${u.date()} ${d[u.month()]}`,I=u=>{var $;const g=($=s.current)==null?void 0:$.getBoundingClientRect();if(!g)return null;const w=Math.min(1,Math.max(0,(u-g.left)/g.width));return{f:w,d:f.add(Math.round(w*h),"day")}};return i.jsxs(oa,{children:[i.jsxs(sa,{children:["Navegar",i.jsx("br",{}),"por fecha"]}),i.jsxs(ia,{ref:s,onClick:u=>{const g=I(u.clientX);g&&n(g.d.toDate())},onMouseMove:u=>{const g=I(u.clientX);g&&l({left:g.f*100,d:g.d})},onMouseLeave:()=>l(null),children:[i.jsx(aa,{children:d.map((u,g)=>i.jsx("span",{style:{left:`${v(E(new Date(c,g,1)))}%`},children:u},g))}),d.map((u,g)=>g===0?null:i.jsx(ca,{style:{left:`${v(E(new Date(c,g,1)))}%`}},g)),i.jsx(la,{children:M.map((u,g)=>i.jsx(da,{$sev:u.sev,style:{height:`${u.h}%`}},g))}),i.jsx(fa,{style:{left:`${L.left}%`,width:`${L.width}%`}}),C!==null&&i.jsx(ua,{style:{left:`${C}%`},children:i.jsx("span",{children:"HOY"})}),a&&j&&i.jsxs(i.Fragment,{children:[i.jsx(ha,{style:{left:`${j.left}%`,width:`${j.width}%`}}),i.jsx(pa,{style:{left:`${a.left}%`}}),i.jsx(ga,{style:{left:`${a.left}%`},children:`${O(j.startDate)} – ${O(j.endDate)}`})]})]})]})},ya=b.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,va=b.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?hr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,xa=b.div`
  position: relative;
`,ba=({data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,schedulerRef:f,onTimeRangeSelect:h,onMultiTimeRangeSelect:v,clickToAddConfig:M})=>{const{goToDate:x,handleGoToday:C,zoomIn:m,zoomOut:L,zoom:j}=He();return p.useImperativeHandle(f,()=>({goToDate:x,goToToday:C,setZoom:O=>{if(!br(O))return;const I=O-j;if(I>0)for(let u=0;u<I;u++)m();else for(let u=0;u<Math.abs(I);u++)L()}}),[x,C,j,m,L]),i.jsx(Vi,{data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:h,onMultiTimeRangeSelect:v,clickToAddConfig:M})},wa=p.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:a,onTileClick:l,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:f,onItemClick:h,isLoading:v,onEventDrop:M,onEventDrag:x,draggableConfig:C,onTimeRangeSelect:m,onMultiTimeRangeSelect:L,clickToAddConfig:j},O){var B;const I=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),u=p.useRef(null),g=p.useRef(null),[w,$]=p.useState((B=u.current)==null?void 0:B.clientWidth),A=p.useMemo(()=>E(s),[s]),[N,J]=p.useState(I.defaultTheme??"light"),Q=()=>{J(N==="light"?"dark":"light")},_=N==="light"?as:cs,T=I.theme?I.theme[_.mode]:{},P={..._,colors:{..._.colors,...T}};return p.useImperativeHandle(O,()=>({goToDate:Y=>{var U;return(U=g.current)==null?void 0:U.goToDate(Y)},goToToday:()=>{var Y;return(Y=g.current)==null?void 0:Y.goToToday()},setZoom:Y=>{var U;return(U=g.current)==null?void 0:U.setZoom(Y)}}),[]),p.useLayoutEffect(()=>{const Y=()=>{u.current&&$(u.current.clientWidth)};return Y(),window.addEventListener("resize",Y),()=>window.removeEventListener("resize",Y)},[]),i.jsxs(i.Fragment,{children:[i.jsx(is,{}),i.jsx(rs,{theme:P,children:i.jsx(Yi,{lang:I.lang,translations:I.translations,children:i.jsx(Qs,{data:r,isLoading:!!v,config:I,onRangeChange:a,defaultStartDate:A,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:f,children:i.jsxs(ya,{id:pr,children:[i.jsx(va,{showScroll:!!r.length,$footer:I.showOverview!==!1&&!!r.length,id:Be,ref:u,children:i.jsx(xa,{children:i.jsx(ba,{data:r,baseData:n,categories:t,onTileClick:l,topBarWidth:w??0,onItemClick:h,toggleTheme:Q,onEventDrop:M,onEventDrag:x,draggableConfig:C,schedulerRef:g,onTimeRangeSelect:m,onMultiTimeRangeSelect:L,clickToAddConfig:j})})}),I.showOverview!==!1&&!!r.length&&i.jsx(ma,{})]})})})})]})}),Sa=b.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,Ca=b.button`
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
`,ka=b.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ma=b.p`
  ${rt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,Or=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:a,loadPrevious:l}=ze(),d=e==="next"?`${a} ${o+2}/${s}`:`${l} ${o}/${s}`;return i.jsx(Sa,{intent:e,children:i.jsxs(Ca,{onClick:r,isVisible:n,children:[t&&i.jsx(ka,{children:t}),i.jsx(Ma,{children:d})]})})},$a=b.div`
  min-width: ${_e+"px"};
  max-width: ${_e+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,Da=b.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({$height:e})=>e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${_e}px;
  background-color: ${({theme:e})=>e.colors.background};
  z-index: 3;
`,Ea=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,_a=b.input`
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
`,Ta=b.div`
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
`,Aa=b.button`
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
`,Pa=Ke`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,Oa=b.div`
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
    animation: ${Pa} 200ms ease-out;
  }
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,Ia=b.div`
  display: flex;
  align-items: center;
`,Ya=b.div`
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
`,La=b.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,Na=b.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,Ir=b.p`
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
`,Fa=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),Ba=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),i.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),i.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),Ha=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),i.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),za=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>i.jsx(Oa,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:i.jsxs(Ia,{children:[i.jsx(Ya,{$provider:o,children:Fa(r.icon)?i.jsx(La,{src:r.icon,alt:""}):o?i.jsx(Ha,{}):i.jsx(Ba,{})}),i.jsxs(Na,{children:[i.jsx(Ir,{isMain:!0,children:r.title}),i.jsx(Ir,{children:r.subtitle})]})]})}),Wa=b.div`
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
`,ja=b.span`
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
`,Za=b.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:e.colors.accent};
  flex-shrink: 0;
`,Va=b.div`
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
`,Yr=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>i.jsxs(Wa,{$variant:o,onClick:n,title:e,children:[i.jsx(Va,{$collapsed:t,children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:i.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx(ja,{$variant:o,children:e}),i.jsx(Za,{$variant:o,children:r})]}),Ga=({data:e,categories:r,headerHeight:t,rows:n,onLoadNext:o,onLoadPrevious:s,pageNum:a,pagesAmount:l,searchInputValue:d,onSearchInputChange:c,onItemClick:f,collapsedGroups:h,onToggleGroup:v,allGroupIds:M,onExpandAll:x,onCollapseAll:C})=>{const[m,L]=p.useState(!1),j=ze(),O=()=>L(_=>!_),I=r?[...r].sort((_,T)=>_.maxPassengers-T.maxPassengers):[],u=I.length>0,g=M.length>0,w=g&&h.size===M.length;g&&h.size;const $=e.filter(_=>_.isSubcontract),A=j.subcontract??"Subcontract",N=_=>{const T=e.indexOf(_);return i.jsx(za,{id:_.id,item:_.label,rows:n[T],onItemClick:f,isSubcontract:_.isSubcontract},_.id)},J=_=>{const T=e.filter(Y=>!Y.isSubcontract&&Y.categoryId===_.id);if(T.length===0)return null;const P=h.has(_.id),B=_.name;return i.jsxs("div",{children:[i.jsx(Yr,{label:B,count:T.length,isCollapsed:P,onToggle:()=>v(_.id),variant:"category"}),!P&&T.map(N)]},_.id)},Q=e.filter(_=>!_.isSubcontract&&(!_.categoryId||!u));return i.jsxs($a,{children:[i.jsxs(Da,{$height:t,children:[i.jsxs(Ea,{children:[i.jsxs(Ta,{isFocused:m,children:[i.jsx(_a,{placeholder:j.search,value:d,onChange:c,onFocus:O,onBlur:O}),i.jsx(Dn,{iconName:"search"})]}),g&&i.jsx(Aa,{title:w?"Expand all":"Collapse all",onClick:w?x:C,$allCollapsed:w,children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:w?i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),i.jsx(Or,{intent:"previous",isVisible:a!==0,onClick:s,icon:i.jsx(Dn,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]}),u?I.map(J):Q.map(N),u&&Q.length>0&&Q.map(N),$.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Yr,{label:A,count:$.length,isCollapsed:h.has("__subcontract__"),onToggle:()=>v("__subcontract__"),variant:"subcontract"}),!h.has("__subcontract__")&&$.map(N)]}),i.jsx(Or,{intent:"next",isVisible:a!==l-1,onClick:o,icon:i.jsx(Dn,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]})},Xa=b.div`
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
`,Ua=Ke`
from{
    left: -100%;
}
to{
    left: 100%;
}`,Ka=b.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Ua} 1s infinite;
`,En=({isLoading:e,position:r})=>e?i.jsx(Xa,{position:r,children:i.jsx(Ka,{})}):null,We=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:a,textYPos:l,label:d,font:c,isBottomRow:f,fillStyle:h,topText:v,bottomText:M,strokeStyle:x,labelBetweenCells:C}=e;if(t.beginPath(),t.strokeStyle=x??r.colors.border,t.setLineDash([]),d&&c&&l){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,a),C?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+a),t.lineTo(n+s,o+a),t.stroke(),t.moveTo(n+s/2,o+a),t.lineTo(n+s/2,o+a-5),t.stroke()):t.strokeRect(n+.5,o+.5,s,a),t.font=c;const m=n+s/2-t.measureText(d).width/2;t.textBaseline="middle",t.fillStyle=r.colors.accent,t.fillText(d,m,l)}if(f&&h&&v&&M){t.fillStyle=h,t.fillRect(n,o,s,a),t.strokeRect(n+.5,o+.5,s,a),t.font=v.font;const m=n+s/2-t.measureText(v.label).width/2;t.fillStyle=v.color,t.fillText(v.label,m,v.y),t.font=M.font;const L=n+s/2-t.measureText(M.label).width/2;t.fillStyle=M.color,t.fillText(M.label,L,M.y)}},_n=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},qa=(e,r,t,n)=>{const o=it-qe/ds,s=it-qe/us,a=Fe+st;let l=0;for(let d=0;d<r;d++){const c=yr(E(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(d,"days")),f=c.isCurrentDay;if(We({ctx:e,x:l,y:a,width:Se,height:qe,isBottomRow:!0,fillStyle:f?n.colors.currentDay:c.isBusinessDay?n.colors.gridBackground:n.colors.primary,topText:{y:o,label:f?"":c.dayName.toUpperCase(),font:Ye.bottomRow.name,color:_n({isCurrent:!1,isBusinessDay:c.isBusinessDay},n)},bottomText:{y:s,label:`${c.dayOfMonth}`,font:f?`700 10px ${Ie}`:Ye.bottomRow.number,color:f?n.colors.today:_n({isCurrent:!1,isBusinessDay:c.isBusinessDay,variant:"bottomRow"},n)}},n),f){const M=l+Se/2,x=o-13/2;e.save(),e.fillStyle=n.colors.today,e.beginPath(),e.roundRect?e.roundRect(M-30/2,x,30,13,5):e.rect(M-30/2,x,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Ie}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",M,x+13/2+.5),e.restore()}l+=Se}},Ja=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*Pe;const s=Fe;let l=t.month;for(let d=0;d<r;d++){l>=rn&&(l=0);const c=mr(t,d)*Pe;We({ctx:e,x:o,y:s,width:c,height:st,textYPos:ur,label:E().month(l).format("MMMM").toUpperCase(),font:Ye.bottomRow.number},n),o+=c,l++}},Qa=(e,r,t)=>{let o=0,s=0,a=E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month();o=-r.dayOfMonth*Se+Se;for(let l=0;l<rn;l++)a>rn-1&&(a=0),s=E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(l,"months").daysInMonth()*Se,We({ctx:e,x:o,y:0,width:s,height:Fe,textYPos:sn,label:E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(a).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(a).format("MMMM YYYY").toUpperCase()}`,font:Ye.topRow},t),o+=s,a++},Ra=(e,r,t,n)=>{const o=7*Se,s=Fe,a=e.canvas.width/o+o,l=r.weekOfYear;let d=0;for(let c=0;c<a;c++){const f=E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let h=(l+c)%cr;h<=0&&(h+=cr),f!==1&&c===0&&(d=-f*Se+Se),We({ctx:e,x:d,y:s,width:o,height:st,textYPos:ur,label:`${t.toUpperCase()} ${h}`,font:Ye.middleRow},n),d+=o}},ec=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},tc=(e,r,t,n,o)=>{const s=it-qe/1.6,a=it-qe/4.5,l=Fe+st;let d=0;for(let c=0;c<r;c++){const f=E(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),h=f.isSame(E(),"week");We({ctx:e,x:d,y:l,width:at,height:qe,isBottomRow:!0,fillStyle:h?o.colors.today+"26":ec({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:f.isoWeek().toString(),font:h?`700 14px ${Ie}`:Ye.bottomRow.name,color:h?o.colors.today:_n({isCurrent:h},o)},bottomText:{y:a,label:n.toUpperCase(),font:Ye.middleRow,color:o.colors.placeholder}},o),d+=at}},nc=(e,r,t,n)=>{const s=r.year,a=e.canvas.width*2;let l=0,d=0,c=(gr(s)-t+1)*Pe,f=0;for(;l+f<=a;)d>0&&(c=gr(s+d)*Pe),f+c>a&&d>0&&(c=Math.ceil((a-f)/Pe)*Pe),We({ctx:e,x:l,y:0,width:c,height:Fe,textYPos:sn,label:(s+d).toString(),font:Ye.topRow},n),l+=c,f+=c,d++},rc=(e,r,t,n)=>{const o=Math.floor(r/It)+2,s=It*Me;let d=-E(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*Me+.5*Me;for(let c=0;c<o;c++){const f=E(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();We({ctx:e,x:d,y:ct,width:s,height:bt,textYPos:ct+bt/2+2,label:f,font:Ye.bottomRow.number},n),d+=s}},oc=(e,r,t,n)=>{const o=Math.ceil(r/It),s=E(`${t.year}-${t.month+1}-${t.dayOfMonth}`),a=s.add(o-1,"days"),l=s.month(),d=a.add(1,"day").month(),c=l===d?1:2;let f=.5*Me;for(let h=0;h<c;h++){const v=E(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),x=E(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),C=x.format("MMMM").toUpperCase(),m=x.diff(v,"hour")+1,L=h===0?m*Me:r*Me;We({ctx:e,x:f,y:0,width:L,height:ct,textYPos:sn,label:C,font:Ye.topRow},n),f+=L}},sc=(e,r,t,n)=>{let o=0;const s=ct+bt,a=E(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=Me;for(let d=0;d<r;d++){const c=a.add(d,"hours").format("h:00a").toUpperCase();We({ctx:e,x:o,y:s,width:l,height:nn,label:c,font:Ye.bottomRow.hoursInDay,textYPos:ct+bt+nn/2+2,labelBetweenCells:!0},n),o+=Me}},ic=(e,r,t,n,o,s,a)=>{switch(r){case 0:nc(e,n,s,a),Ja(e,t,n,a),tc(e,t,n,o,a);break;case 1:Qa(e,n,a),Ra(e,n,o,a),qa(e,t,n,a);break;case 2:oc(e,t,n,a),rc(e,t,n,a),sc(e,t,n,a);break}},ac=b.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,cc=b.div`
  position: sticky;
  left: ${_e}px;
  width: calc(${({$width:e})=>e}px - ${_e}px);
  z-index: 3;
`,lc=b.div`
  height: ${it}px;
  display: block;
`,dc=b.canvas``,uc={transfer:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 8h13l-3-3"}),i.jsx("path",{d:"M20 16H7l3 3"})]}),sun:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),i.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),i.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:i.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 3 2 20h20z"}),i.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),i.jsx("path",{d:"M12 7.5V12l3 2"})]})},je=({name:e,className:r,strokeWidth:t=2})=>i.jsx("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:uc[e]}),fc=b.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,Lr=b.span`
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
`,hc=b.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,pc=b.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,gc=b.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,mc=b.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,yc=b.span`
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
`,vc=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],xc=()=>i.jsxs(fc,{children:[i.jsx(Lr,{children:"Leyenda"}),i.jsxs(Bt,{children:[i.jsx(je,{name:"transfer"})," Transfer"]}),i.jsxs(Bt,{children:[i.jsx(je,{name:"sun"})," Gira 1 día"]}),i.jsxs(Bt,{children:[i.jsx(je,{name:"tour"})," Gira multidía"]}),i.jsxs(Bt,{children:[i.jsx(hc,{children:"SUB"})," Subcontrato"]}),i.jsx(pc,{}),i.jsxs(Lr,{children:["Estado ",i.jsx("em",{children:"franja izq. + punto esq."})]}),vc.map(e=>i.jsxs(gc,{children:[i.jsx(mc,{style:{background:e.stripe}}),i.jsx(yc,{style:{color:e.color},children:i.jsx(je,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),bc=p.forwardRef(function({zoom:r,topBarWidth:t,showThemeToggle:n,toggleTheme:o},s){const{week:a}=ze(),{date:l,cols:d,dayOfYear:c,startDate:f,config:h}=He(),v=p.useRef(null),M=Ot(),x=p.useCallback(C=>{const m=vn(),j=(r===2?ls:it)+1;Sr(C,m,j),ic(C,r,d,f,a,c,M)},[d,c,f,a,r,M]);return p.useEffect(()=>{if(!v.current)return;const C=v.current.getContext("2d");if(!C)return;const m=()=>x(C);return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[x]),p.useEffect(()=>{const C=v.current;if(!C)return;C.style.letterSpacing="1px";const m=C.getContext("2d");m&&x(m)},[l,r,x]),i.jsxs(ac,{ref:s,children:[(h.showTopbar!==!1||h.showLegend!==!1)&&i.jsxs(cc,{$width:t,children:[h.showTopbar!==!1&&i.jsx(ta,{width:t,showThemeToggle:n,toggleTheme:o}),h.showLegend!==!1&&i.jsx(xc,{})]}),i.jsx(lc,{id:fs,children:i.jsx(dc,{ref:v})})]})}),wc=(e,r,t)=>{let n;switch(t){case 0:n=Pe;break;case 2:n=Me;break;default:n=Se}const s=e.startDate.startOf("day"),a=e.endDate.startOf("day"),l=r.startDate.startOf("day"),d=r.endDate.startOf("day"),c=()=>{let f;switch(t){case 2:f=(e.startDate.diff(r.startDate,"minute")/Ce+1)*n-n/2;break;default:f=s.diff(l,"day")*n}return Math.max(0,f)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let f;switch(t){case 2:f=Math.max(e.endDate.diff(e.startDate,"minute")/Ce*n,50);break;default:f=Math.max(a.diff(s,"day")*n+n,50)}return{x:c(),width:f}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let f;switch(t){case 2:f=Math.max(e.endDate.diff(r.startDate,"minute")/Ce*n+.5*n,50);break;default:f=Math.max(a.diff(l,"day")*n+n,50)}return{x:c(),width:f}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let f;switch(t){case 2:f=Math.max(r.endDate.diff(e.startDate,"minute")/Ce*n,50);break;default:f=Math.max(d.diff(s,"day")*n+n,50)}return{x:c(),width:f}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let f;switch(t){case 2:f=Math.max(r.endDate.diff(r.startDate,"minute")/Ce*n,50);break;default:f=Math.max(d.diff(l,"day")*n+n,50)}return{x:c(),width:f}}return{x:c(),width:50}},Sc=(e,r,t,n,o,s)=>{const a=e*fe+hs,l=r.hour(),d=t.hour();let c,f,h,v;switch(s){case 2:{c=E(n),f=E(o),h=E(r).hour(l).minute(0),v=E(t).hour(d).minute(0);break}default:{c=E(n).hour(0).minute(0),f=E(o).hour(23).minute(59),h=r,v=t;break}}return{...wc({startDate:c,endDate:f},{startDate:h,endDate:v},s),y:a}},Nr=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"};b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,b.p`
  ${rt}
  ${ot}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const Cc=Ke`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,kc=b.button`
  ${rt}
  position: absolute;
  height: ${on}px;
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
    animation: ${Cc} 180ms ease-out;
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
  ${({$exiting:e})=>e&&"opacity: 0; transform: scale(0.96); pointer-events: none;"}
`,Mc=b.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`,$c=b.div`
  position: sticky;
  left: ${_e+4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`,Fr=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,Dc=b.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,Ec=b.span`
  ${ot}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,_c=b.span`
  ${ot}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,Tc=b.span`
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
`,Ac=b.div`
  ${ot}
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
`,Br=b.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,Hr=b.span`
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
`,zr=b.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,Pc=b.div`
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
`,Wr=b.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({$end:e})=>e?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.95)"};
  color: ${({$end:e})=>e?"#3A4C46":"#183D3D"};
`,Oc=34,Ic={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63"}},Yc="#3E8E5A",Lc="#D98A22",jr=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onDragStart:s,isDragging:a=!1,isDraggable:l=!0,yOffset:d=0,exiting:c=!1})=>{const{date:f}=He(),h=Nt(f,t),{y:v,x:M,width:x}=Sc(e,h.startDate,h.endDate,r.startDate,r.endDate,t),{colors:C}=Ot(),m=p.useRef(null),L=E(r.startDate).isSame(E(r.endDate),"day"),j=r.eventType===wt.Tour,O=r.eventType===wt.Transfer,I=L&&(j||O),u=Q=>{m.current={x:Q.clientX,y:Q.clientY},l&&s&&(Q.preventDefault(),s(r,Q))},g=Q=>{if(m.current){const _=Math.abs(Q.clientX-m.current.x),T=Math.abs(Q.clientY-m.current.y);Math.sqrt(_*_+T*T)<=5&&(o==null||o(r)),m.current=null}else o==null||o(r)},w={left:`${M}px`,top:`${v+d}px`,backgroundColor:`${r.bgColor??C.defaultTile}`,width:`${x}px`,color:Nr(r.bgColor??"")},$=!n&&r.readiness?Ic[r.readiness]:null,A=n&&r.subcontractConfirmed===!1,N=n?A?Lc:Yc:$==null?void 0:$.stripe,J=Q=>i.jsxs(kc,{"data-segment-id":r.segmentId,style:w,onClick:g,onMouseDown:u,onDragStart:_=>_.preventDefault(),isDraggable:l,isDragging:a,$unconfirmed:A,$exiting:c,children:[N&&i.jsx(Mc,{style:{background:N}}),Q]});return J(I?i.jsxs(i.Fragment,{children:[(n||$)&&i.jsx(Br,{$sm:!0,children:n?i.jsx(zr,{children:"SUB"}):$&&i.jsx(Hr,{$sm:!0,style:{color:$.color},children:i.jsx(je,{name:$.icon,strokeWidth:$.icon==="check"?2.6:2.2})})}),i.jsxs(Pc,{$transfer:O,children:[i.jsx(je,{name:O?"transfer":"sun",strokeWidth:2.4}),x>=Oc&&i.jsxs(i.Fragment,{children:[i.jsx(Wr,{children:E(r.startDate).format("HH:mm")}),!O&&i.jsx(Wr,{$end:!0,children:E(r.endDate).format("HH:mm")})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(Br,{children:n?i.jsx(zr,{children:"SUB"}):$&&i.jsx(Hr,{style:{color:$.color},children:i.jsx(je,{name:$.icon,strokeWidth:$.icon==="check"?2.6:2.2})})}),r.bookingNumber&&i.jsx(Tc,{children:r.bookingNumber}),i.jsxs($c,{children:[i.jsxs(Fr,{$pad:!0,children:[i.jsx(Dc,{children:i.jsx(je,{name:O?"transfer":"tour"})}),i.jsx(Ec,{children:r.title})]}),r.subtitle&&i.jsx(Fr,{children:i.jsx(_c,{children:r.subtitle})}),r.driver&&i.jsxs(Ac,{children:[i.jsx(je,{name:"person"}),r.driver]})]})]}))},Zr=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Ae},Nc=Ke`
  from { opacity: 0; }
  to { opacity: 1; }
`,Fc=b.div`
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
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Nc} 200ms ease-out;
  }
  pointer-events: none;
`,Bc=({data:e,zoom:r,onTileClick:t,onDragStart:n,isDraggable:o,draggingEventId:s,separatorRowIndices:a=[]})=>{const{nodes:l,liveMap:d}=p.useMemo(()=>{const x=new Map;let C=0;return{nodes:e.map((L,j)=>{if(j>0&&(C+=Math.max(e[j-1].data.length,1)),!L.data.some(O=>O.length>0)){const O=Zr(C,a);return[i.jsx(Fc,{style:{top:`${C*fe+O}px`},children:"Disponible"},`dispo-${L.id}`)]}return L.data.map((O,I)=>O.map(u=>{const g=s===u.segmentId,w=o?o(u):!1,$=I+C,A=Zr($,a);return x.set(u.segmentId,{project:u,absoluteRow:$,yOffset:A,isSubcontract:!!L.isSubcontract}),i.jsx(jr,{row:$,data:u,zoom:r,isSubcontract:L.isSubcontract,onTileClick:t,onDragStart:n,isDragging:g,isDraggable:w,yOffset:A},u.segmentId)}))}).flat(2),liveMap:x}},[e,t,r,n,o,s,a]),c=p.useRef(new Map),f=p.useRef([]),[h,v]=p.useState([]);p.useEffect(()=>()=>f.current.forEach(clearTimeout),[]),p.useEffect(()=>{const x=c.current;c.current=d;const C=[];if(x.forEach((j,O)=>{d.has(O)||C.push(j)}),v(j=>{let O=j.filter(I=>!d.has(I.project.segmentId));for(const I of C)O.some(u=>u.project.segmentId===I.project.segmentId)||(O=[...O,I]);return O}),!C.length)return;const m=new Set(C.map(j=>j.project.segmentId)),L=setTimeout(()=>{v(j=>j.filter(O=>!m.has(O.project.segmentId)))},220);f.current.push(L)},[d]);const M=h.filter(x=>!d.has(x.project.segmentId)).map(x=>i.jsx(jr,{row:x.absoluteRow,data:x.project,zoom:r,isSubcontract:x.isSubcontract,yOffset:x.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},x.project.segmentId));return i.jsx(i.Fragment,{children:[...l,...M]})};b.div`
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
`;const Hc=b.div`
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
`,zc=b.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Wc=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`,jc=b.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Zc=b.span`
  flex-shrink: 0;
  background: ${({$type:e})=>e==="transfer"?"#dbeafe":"#dcfce7"};
  color: ${({$type:e})=>e==="transfer"?"#1e40af":"#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`,Vc=b.div`
  ${rt}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Gc=b.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`,Xc=b.div`
  padding: 10px 12px;
`,Uc=b.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,Vr=b.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,Gr=b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,Xr=b.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Ur=b.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,Kr=b.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Kc=b.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,qc=b.div`
  min-width: 0;
`,Jc=b.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,Qc=b.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`,qr=b.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,St=b.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Ct=b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,kt=b.div`
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
`;b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.div``,b.span``,b.div``,b.div``,b.div``,b.div``,b.p``,b.span``;const Rc={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",salida:"Salida",destino:"Destino",regreso:"Regreso",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},el=({tooltipData:e,visible:r=!0})=>{const{mouseCoords:t,reservationData:n}=e,o=p.useRef(null),[s,a]=p.useState("below"),l=ze(),d={...Rc,...l.tooltip};p.useLayoutEffect(()=>{if(!o.current||!t)return;const x=o.current,{width:C,height:m}=x.getBoundingClientRect(),L=x.parentElement;if(!L)return;const j=L.getBoundingClientRect(),O=12,I=4,u=j.height-t.y,g=j.width-t.x;let w=t.x+O,$=t.y+O,A="below";g<C+O&&(w=t.x-C-O),u<m+O&&($=t.y-m-O,A="above"),w=Math.max(I,Math.min(w,j.width-C-I)),$=Math.max(I,Math.min($,j.height-m-I)),a(A),x.style.left=`${w}px`,x.style.top=`${$}px`},[t]);const c=n.reservationType===wt.Tour,f=c&&n.isOneDayEvent,h=()=>c?f?"oneday":"tour":"transfer",v=()=>c?f?d.oneDay:d.tour:d.transfer,M=[n.groupName&&{label:d.groupName,value:n.groupName},n.driver&&{label:d.driver,value:n.driver},n.passengers&&{label:d.passengers,value:String(n.passengers)},n.flightNumber&&{label:d.flightNumber,value:n.flightNumber}].filter(Boolean);return i.jsxs(Hc,{ref:o,$position:s,$visible:r,children:[i.jsxs(zc,{children:[i.jsxs(Wc,{children:[i.jsx(jc,{children:n.bookingNumber}),i.jsx(Zc,{$type:h(),children:v()})]}),i.jsx(Vc,{children:n.eventName}),n.client&&i.jsx(Gc,{children:n.client})]}),i.jsxs(Xc,{children:[i.jsxs(Uc,{children:[i.jsxs(Vr,{children:[i.jsx(Gr,{children:d.startDate}),i.jsxs(Xr,{children:[i.jsx(Ur,{children:n.startDate})," ",i.jsx(Kr,{children:n.startTime})]})]}),c&&n.endDate&&i.jsxs(Vr,{$isEnd:!0,children:[i.jsx(Gr,{children:d.endDate}),i.jsxs(Xr,{children:[i.jsx(Ur,{children:n.endDate})," ",i.jsx(Kr,{children:n.endTime})]})]})]}),M.length>0&&i.jsx(Kc,{children:M.map((x,C)=>i.jsxs(qc,{children:[i.jsx(Jc,{children:x.label}),i.jsx(Qc,{children:x.value})]},C))}),(n.departureAddress||n.destinationAddress||n.returnAddress)&&i.jsxs(qr,{children:[n.departureAddress&&i.jsxs(St,{children:[i.jsx(Ct,{children:d.salida}),i.jsx(kt,{children:n.departureAddress})]}),n.destinationAddress&&i.jsxs(St,{children:[i.jsx(Ct,{children:d.destino}),i.jsx(kt,{children:n.destinationAddress})]}),n.returnAddress&&i.jsxs(St,{children:[i.jsx(Ct,{children:d.regreso}),i.jsx(kt,{children:n.returnAddress})]})]}),(n.serviceNotes||n.reservationNotes)&&i.jsxs(qr,{children:[n.serviceNotes&&i.jsxs(St,{children:[i.jsx(Ct,{children:d.serviceNotes}),i.jsx(kt,{children:n.serviceNotes})]}),n.reservationNotes&&i.jsxs(St,{children:[i.jsx(Ct,{children:d.reservationNotes}),i.jsx(kt,{children:n.reservationNotes})]})]})]})]})};b.div`
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
`;const tl=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,nl=b.div`
  position: absolute;
  height: ${on}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:r,$animateToY:t})=>e&&r!==void 0&&t!==void 0?`transform: translate3d(${r}px, ${t}px, 0);`:""}
`,rl=b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,Jr=b.p`
  ${rt}
  ${ot}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,ol=b.p`
  ${rt}
  ${ot}
`,sl=b.div`
  position: sticky;
  left: ${_e+16}px;
  overflow: hidden;
`,il=b.div`
  position: absolute;
  height: ${on}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,al=b.div`
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
`,cl=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,ll=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,dl=b.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,Qr=b.div`
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
`,Rr=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,eo=b.div`
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
`,to=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Tn=b.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,An=b.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,ht=b.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,no=b.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,ul=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:a,resourceOnly:l,separatorRowIndices:d=[]})=>{const c=ze(),f=I=>{let u=0;for(const g of d)g<=I&&u++;return I*fe+u*Ae},[h,v]=p.useState(null),[M,x]=p.useState(0),C=p.useCallback((I=400,u=300)=>{const w=t.width,$=48,A=document.getElementById("react-scheduler");if(!A)return{x:r.x+w+16,y:r.y};const N=A.scrollLeft,J=A.scrollTop,Q=A.clientWidth,_=A.clientHeight,T=r.x-N,P=r.y-J,B={left:_e+16,right:Q-16,top:16,bottom:_-16},Y=B.right-(T+w),U=T-B.left,R=B.bottom-(P+$),ie=P-B.top;let ce,F;return Y>=I+16?ce=T+w+16:U>=I+16?ce=T-I-16:Y>=U?(ce=T+w+16,ce+I>B.right&&(ce=B.right-I)):(ce=T-I-16,ce<B.left&&(ce=B.left)),R>=u+16?F=P+$+16:ie>=u+16?F=P-u-16:R>=ie?(F=P+$+16,F+u>B.bottom&&(F=B.bottom-u)):(F=P-u-16,F<B.top&&(F=B.top)),ce=Math.max(B.left,Math.min(ce,B.right-I)),F=Math.max(B.top,Math.min(F,B.bottom-u)),{x:ce+N,y:F+J}},[r.x,r.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&M===0?x(r.x):s==="idle"&&x(0)},[s,e,r.x,M]),p.useEffect(()=>{v(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const m=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const I=[];let u=0;for(const g of a){const w=Math.max(g.data.length,1);if(g.capacity!==void 0&&e.totalPassengers>g.capacity)for(let $=0;$<w;$++)I.push(u+$);u+=w}return I},[e,a,s]);if(!e||s==="idle"||s==="potential")return null;const L=s==="animating",j=Nr(e.bgColor??""),O=()=>{if(!n)return"";const I=E(n.startDate).format("MMM D, HH:mm"),u=E(n.endDate).format("HH:mm");return`${I} - ${u}`};return i.jsxs(tl,{children:[m.map(I=>i.jsx(ll,{style:{top:`${f(I)}px`,height:`${fe}px`}},I)),n&&s==="dragging"&&i.jsx(cl,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${f(n.resourceIndex)}px`,height:`${fe}px`}}),n&&s==="dragging"&&!l&&i.jsxs(i.Fragment,{children:[i.jsx(il,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${f(n.resourceIndex)+(fe-48)/2}px`,width:`${t.width}px`}}),i.jsx(al,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${f(n.resourceIndex)+(fe-48)/2}px`},children:O()})]}),n&&s==="dragging"&&l&&i.jsx(dl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${f(n.resourceIndex)}px`,height:`${fe}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const I=C(400,300);return i.jsxs(Qr,{style:{left:`${I.x}px`,top:`${I.y}px`},children:[i.jsxs(Rr,{children:[i.jsx(eo,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),i.jsx(to,{children:n.conflicts.map((u,g)=>{const w=E(n.startDate).format("YYYY-MM-DD"),$=E(n.endDate).format("YYYY-MM-DD"),A=E(u.event.startDate).format("YYYY-MM-DD"),N=E(u.event.endDate).format("YYYY-MM-DD"),J=E(u.conflictStart).format("YYYY-MM-DD"),Q=E(u.conflictEnd).format("YYYY-MM-DD"),_=w!==$,T=A!==N,P=J!==Q,B=_?E(n.startDate).format("MMM D, h:mm A"):E(n.startDate).format("h:mm A"),Y=_?E(n.endDate).format("MMM D, h:mm A"):E(n.endDate).format("h:mm A"),U=T?E(u.event.startDate).format("MMM D, h:mm A"):E(u.event.startDate).format("h:mm A"),R=T?E(u.event.endDate).format("MMM D, h:mm A"):E(u.event.endDate).format("h:mm A"),ie=P?E(u.conflictStart).format("MMM D, h:mm A"):E(u.conflictStart).format("h:mm A"),ce=P?E(u.conflictEnd).format("MMM D, h:mm A"):E(u.conflictEnd).format("h:mm A"),F=P?"":E(u.conflictStart).format("MMM D"),H=n.startDate.getTime(),q=n.endDate.getTime(),ne=u.event.startDate.getTime(),k=u.event.endDate.getTime(),z=H>=ne&&H<k,S=q>ne&&q<=k,V=H<=ne&&q>=k,G=ne<=H&&k>=q;let W=!1,y=!1,X=!1,D=!1,Z="";return V||G?(W=!0,y=!0,X=!0,D=!0,Z=`⚠️ ${c.conflicts.changeBoth}`):z&&S?(W=!0,y=!0,X=!0,D=!0,Z=`⚠️ ${c.conflicts.changeBoth}`):z?(W=!0,D=!0,Z=`⚠️ ${c.conflicts.changeStart}`):S&&(y=!0,X=!0,Z=`⚠️ ${c.conflicts.changeEnd}`),i.jsxs(Tn,{children:[i.jsxs(An,{children:[c.conflicts.conflictsWith,": ",u.event.title,u.event.subtitle&&` - ${u.event.subtitle}`]}),i.jsxs(ht,{children:[i.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",W?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:B}):B," ",c.conflicts.to," ",y?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:Y}):Y]}),i.jsxs(ht,{children:[i.jsx("strong",{children:u.event.title})," ",c.conflicts.currentlyAt,":"," ",X?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:U}):U," ",c.conflicts.to," ",D?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:R}):R]}),i.jsxs(no,{children:[c.conflicts.conflictTime,": ",F&&`${F}, `,ie," - ",ce]}),Z&&i.jsx(ht,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:Z})]},g)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const I=C(400,400);return i.jsxs(Qr,{style:{left:`${I.x}px`,top:`${I.y}px`,borderColor:"#4CAF50"},children:[i.jsxs(Rr,{style:{color:"#2E7D32"},children:[i.jsx(eo,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),i.jsxs(to,{children:[(()=>{const u=n.nearbyEvents.some(A=>A.position==="before"),g=n.nearbyEvents.some(A=>A.position==="after"),w=E(n.startDate).format("h:mm A"),$=E(n.endDate).format("h:mm A");return i.jsxs(Tn,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[i.jsxs(An,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),i.jsxs(ht,{style:{fontWeight:600},children:[E(n.startDate).format("MMM D"),":"," ",u?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:w}):w," ",c.conflicts.to," ",g?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:$}):$]}),i.jsx(ht,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),n.nearbyEvents.map((u,g)=>{const w=E(u.event.startDate).format("YYYY-MM-DD"),$=E(u.event.endDate).format("YYYY-MM-DD"),A=w!==$,N=A?E(u.event.startDate).format("MMM D, h:mm A"):E(u.event.startDate).format("h:mm A"),J=A?E(u.event.endDate).format("MMM D, h:mm A"):E(u.event.endDate).format("h:mm A"),Q=E(u.event.startDate).format("MMM D"),_=Math.floor(u.timeGap/(1e3*60*60)),T=Math.floor(u.timeGap%(1e3*60*60)/(1e3*60)),P=_>0?`${_}h ${T}m`:`${T}m`,B=u.position==="after",Y=u.position==="before";return i.jsxs(Tn,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[i.jsxs(An,{style:{color:"#1B5E20"},children:[u.event.title,u.event.subtitle&&` - ${u.event.subtitle}`]}),i.jsxs(ht,{children:[!A&&`${Q}: `,B?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:N}):N," ",c.conflicts.to," ",Y?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:J}):J]}),i.jsxs(no,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[P," ",u.position==="before"?c.conflicts.before:c.conflicts.after]})]},g)})]})]})})(),i.jsx(nl,{$isAnimating:L,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:L?`${(h==null?void 0:h.x)??0}px`:"0",top:L?`${(h==null?void 0:h.y)??0}px`:"0",transform:L?void 0:`translate3d(${l?M:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:j},children:i.jsx(rl,{children:i.jsxs(sl,{children:[i.jsx(Jr,{$bold:!0,children:e.title}),e.subtitle&&i.jsx(Jr,{children:e.subtitle}),e.description&&i.jsx(ol,{children:e.description})]})})})]})},fl=Ke`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,hl=b.div`
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
  animation: ${fl} 1.5s ease-in-out infinite;
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
`,pl=({selectionBox:e,isSelecting:r})=>!e||!r?null:i.jsx(hl,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),gl=Ke`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ml=b.div`
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
  animation: ${gl} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,yl=b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,vl=b.span`
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
`,xl=b.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,bl=b.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;b.div`
  display: none;
`,b.div`
  display: none;
`,b.button`
  display: none;
`;const wl=b.div`
  display: flex;
  gap: 8px;
`,ro=b.button`
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
`,Sl=({selections:e,onConfirm:r,onClear:t})=>{var x;const o=ze().multiSelect,s=p.useMemo(()=>e.filter(C=>C.hasConflict).length,[e]),a=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,d=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",f=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((x=o==null?void 0:o.conflictsWarning)==null?void 0:x.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const v=s>0,M=i.jsxs(ml,{$hasConflicts:v,"data-multi-select-ui":!0,children:[i.jsxs(yl,{children:[i.jsxs(vl,{$hasConflicts:v,children:[e.length," ",a]}),v&&i.jsxs(xl,{children:["⚠️ ",h]}),i.jsx(bl,{children:l})]}),i.jsxs(wl,{children:[i.jsxs(ro,{variant:"secondary",onClick:t,children:["✕ ",d]}),i.jsx(ro,{variant:"primary",$hasConflicts:v,onClick:r,children:v?`⚠️ ${f}`:`✓ ${c}`})]})]});return so.createPortal(M,document.body)},Cl=Ke`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,kl=b.div`
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
  animation: ${Cl} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&Tt`
      border-style: dashed;
    `}
`,Ml=b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,$l=b.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,Dl=b.button`
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
`,El=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:a=[]})=>{const[l,d]=p.useState(null),[c,f]=p.useState({x:0,y:0}),h=p.useRef(null),v=p.useMemo(()=>{switch(t){case 0:return Pe*7;case 1:return Se;case 2:return Me;default:return Se}},[t]),M=p.useMemo(()=>E().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),x=p.useMemo(()=>e.map((g,w)=>{let $=0,A=!1;for(const U of r){if(U.id===g.resourceId){A=!0;break}$+=Math.max(U.data.length,1)}if(!A)return null;const N=E(g.startDate),J=E(g.endDate);let Q,_;switch(t){case 0:Q=Math.floor(N.diff(M,"days")/7),_=Math.max(1,Math.ceil(J.diff(N,"days")/7)+1);break;case 1:Q=N.diff(M,"days"),_=Math.max(1,J.diff(N,"days")+1);break;case 2:Q=N.diff(M,"hours"),_=Math.max(1,J.diff(N,"hours")+1);break;default:Q=0,_=1}const T=Q*v;let P=0;for(const U of a)U<=$&&P++;const B=$*fe+P*Ae,Y=_*v;return{index:w,selection:g,x:T,y:B,width:Y,height:fe}}),[e,r,t,M,v]),C=(g,w)=>{const $=E(g).format("MMM D"),A=E(w).format("MMM D");return $===A?$:`${$} - ${A}`},m=g=>!g.hasConflict||!g.conflicts?"":`⚠️ Conflicts with:
${g.conflicts.map($=>{const A=($.overlapDuration/36e5).toFixed(1);return`• ${$.event.title} (${A}h overlap)`}).join(`
`)}`,L=p.useCallback(g=>{let w=0;for(const $ of r){const A=Math.max($.data.length,1);if(g>=w*fe&&g<(w+A)*fe)return{resourceId:$.id,resourceLabel:$.label};w+=A}return null},[r]),j=p.useCallback(g=>{const w=Math.floor(g/v);switch(t){case 0:return M.add(w*7,"days").toDate();case 1:return M.add(w,"days").toDate();case 2:return M.add(w,"hours").toDate();default:return M.toDate()}},[t,M,v]),O=p.useCallback((g,w)=>{!s||(g.preventDefault(),g.stopPropagation(),!x[w])||(h.current={x:g.clientX,y:g.clientY},d(w),f({x:0,y:0}))},[s,x]),I=p.useCallback(g=>{if(l===null||!h.current)return;const w=g.clientX-h.current.x,$=g.clientY-h.current.y,A=Math.round(w/v)*v,N=Math.round($/fe)*fe;f({x:A,y:N})},[l,v]),u=p.useCallback(()=>{if(l===null||!s){d(null),f({x:0,y:0}),h.current=null;return}const g=x[l];if(!g){d(null),f({x:0,y:0}),h.current=null;return}const w=g.x+c.x,$=g.y+c.y,A=L($+fe/2);if(!A){d(null),f({x:0,y:0}),h.current=null;return}const N=j(w),J=e[l],Q=J.endDate.getTime()-J.startDate.getTime(),_=new Date(N.getTime()+Q);s(l,{startDate:N,endDate:_,resourceId:A.resourceId,resourceLabel:A.resourceLabel}),d(null),f({x:0,y:0}),h.current=null},[l,c,x,e,s,L,j]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",I),document.addEventListener("mouseup",u),()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",u)}},[l,I,u]),i.jsx(i.Fragment,{children:x.map(g=>{if(!g)return null;const w=g.selection.hasConflict||!1,$=l===g.index,A=$?g.x+c.x:g.x,N=$?g.y+c.y:g.y;return i.jsxs(kl,{$hasConflict:w,$isDragging:$,style:{left:A,top:N,width:g.width,height:g.height},"data-multi-select-ui":!0,onMouseDown:J=>O(J,g.index),children:[w&&i.jsx($l,{title:m(g.selection),children:"⚠️"}),i.jsx(Ml,{$hasConflict:w,children:C(g.selection.startDate,g.selection.endDate)}),i.jsx(Dl,{onClick:J=>{J.stopPropagation(),o(g.index)},onMouseDown:J=>J.stopPropagation(),title:w?"Remove conflicting selection":"Remove selection",children:"×"})]},g.index)})})},_l=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,Tl=({zoom:e,startDate:r})=>{const{cols:t}=He(),n=p.useMemo(()=>{if(e===2)return null;const o=e===0?Pe*7:Se,s=E().year(r.year).month(r.month).date(r.dayOfMonth).startOf("day"),a=E().startOf("day"),l=e===0?a.startOf("week").diff(s.startOf("week"),"week"):a.diff(s,"days");return l<0||l>=t?null:{x:l*o,width:o}},[e,r,t]);return n?i.jsx(_l,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},cd="";Ee.Scheduler=wa,Object.defineProperty(Ee,Symbol.toStringTag,{value:"Module"})});
