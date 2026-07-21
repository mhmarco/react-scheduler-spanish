(function(Ee,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],i):(Ee=typeof globalThis<"u"?globalThis:Ee||self,i(Ee["react-scheduler"]={},Ee["react/jsx-runtime"],Ee.React,Ee.ReactDOM))})(this,function(Ee,i,p,ao){"use strict";var Ll=Object.defineProperty;var Nl=(Ee,i,p)=>i in Ee?Ll(Ee,i,{enumerable:!0,configurable:!0,writable:!0,value:p}):Ee[i]=p;var io=(Ee,i,p)=>(Nl(Ee,typeof i!="symbol"?i+"":i,p),p);function co(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const ae=co(p);var Me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yt={},lo={get exports(){return yt},set exports(e){yt=e}},ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var An;function uo(){if(An)return ge;An=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),y;y=Symbol.for("react.module.reference");function k(g){if(typeof g=="object"&&g!==null){var N=g.$$typeof;switch(N){case e:switch(g=g.type,g){case t:case o:case n:case c:case u:return g;default:switch(g=g&&g.$$typeof,g){case l:case a:case d:case x:case h:case s:return g;default:return N}}case r:return N}}}return ge.ContextConsumer=a,ge.ContextProvider=s,ge.Element=e,ge.ForwardRef=d,ge.Fragment=t,ge.Lazy=x,ge.Memo=h,ge.Portal=r,ge.Profiler=o,ge.StrictMode=n,ge.Suspense=c,ge.SuspenseList=u,ge.isAsyncMode=function(){return!1},ge.isConcurrentMode=function(){return!1},ge.isContextConsumer=function(g){return k(g)===a},ge.isContextProvider=function(g){return k(g)===s},ge.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===e},ge.isForwardRef=function(g){return k(g)===d},ge.isFragment=function(g){return k(g)===t},ge.isLazy=function(g){return k(g)===x},ge.isMemo=function(g){return k(g)===h},ge.isPortal=function(g){return k(g)===r},ge.isProfiler=function(g){return k(g)===o},ge.isStrictMode=function(g){return k(g)===n},ge.isSuspense=function(g){return k(g)===c},ge.isSuspenseList=function(g){return k(g)===u},ge.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===t||g===o||g===n||g===c||g===u||g===M||typeof g=="object"&&g!==null&&(g.$$typeof===x||g.$$typeof===h||g.$$typeof===s||g.$$typeof===a||g.$$typeof===d||g.$$typeof===y||g.getModuleId!==void 0)},ge.typeOf=k,ge}var me={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pn;function fo(){return Pn||(Pn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),y=!1,k=!1,g=!1,N=!1,V=!1,I;I=Symbol.for("react.module.reference");function Y(T){return!!(typeof T=="string"||typeof T=="function"||T===t||T===o||V||T===n||T===c||T===u||N||T===M||y||k||g||typeof T=="object"&&T!==null&&(T.$$typeof===x||T.$$typeof===h||T.$$typeof===s||T.$$typeof===a||T.$$typeof===d||T.$$typeof===I||T.getModuleId!==void 0))}function f(T){if(typeof T=="object"&&T!==null){var j=T.$$typeof;switch(j){case e:var oe=T.type;switch(oe){case t:case o:case n:case c:case u:return oe;default:var Q=oe&&oe.$$typeof;switch(Q){case l:case a:case d:case x:case h:case s:return Q;default:return j}}case r:return j}}}var v=a,C=s,E=e,w=d,D=t,X=x,J=h,A=r,_=o,O=n,B=c,L=u,U=!1,Z=!1;function ee(T){return U||(U=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ie(T){return Z||(Z=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function F(T){return f(T)===a}function H(T){return f(T)===s}function R(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function re(T){return f(T)===d}function $(T){return f(T)===t}function z(T){return f(T)===x}function S(T){return f(T)===h}function G(T){return f(T)===r}function K(T){return f(T)===o}function W(T){return f(T)===n}function m(T){return f(T)===c}function q(T){return f(T)===u}me.ContextConsumer=v,me.ContextProvider=C,me.Element=E,me.ForwardRef=w,me.Fragment=D,me.Lazy=X,me.Memo=J,me.Portal=A,me.Profiler=_,me.StrictMode=O,me.Suspense=B,me.SuspenseList=L,me.isAsyncMode=ee,me.isConcurrentMode=ie,me.isContextConsumer=F,me.isContextProvider=H,me.isElement=R,me.isForwardRef=re,me.isFragment=$,me.isLazy=z,me.isMemo=S,me.isPortal=G,me.isProfiler=K,me.isStrictMode=W,me.isSuspense=m,me.isSuspenseList=q,me.isValidElementType=Y,me.typeOf=f}()),me}(function(e){process.env.NODE_ENV==="production"?e.exports=uo():e.exports=fo()})(lo);function ho(e){function r(F,H,R,re,$){for(var z=0,S=0,G=0,K=0,W,m,q=0,T=0,j,oe=j=W=0,Q=0,le=0,ue=0,de=0,pe=R.length,we=pe-1,xe,ce="",te="",ne="",se="",he;Q<pe;){if(m=R.charCodeAt(Q),Q===we&&S+K+G+z!==0&&(S!==0&&(m=S===47?10:47),K=G=z=0,pe++,we++),S+K+G+z===0){if(Q===we&&(0<le&&(ce=ce.replace(x,"")),0<ce.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:ce+=R.charAt(Q)}m=59}switch(m){case 123:for(ce=ce.trim(),W=ce.charCodeAt(0),j=1,de=++Q;Q<pe;){switch(m=R.charCodeAt(Q)){case 123:j++;break;case 125:j--;break;case 47:switch(m=R.charCodeAt(Q+1)){case 42:case 47:e:{for(oe=Q+1;oe<we;++oe)switch(R.charCodeAt(oe)){case 47:if(m===42&&R.charCodeAt(oe-1)===42&&Q+2!==oe){Q=oe+1;break e}break;case 10:if(m===47){Q=oe+1;break e}}Q=oe}}break;case 91:m++;case 40:m++;case 34:case 39:for(;Q++<we&&R.charCodeAt(Q)!==m;);}if(j===0)break;Q++}switch(j=R.substring(de,Q),W===0&&(W=(ce=ce.replace(h,"").trim()).charCodeAt(0)),W){case 64:switch(0<le&&(ce=ce.replace(x,"")),m=ce.charCodeAt(1),m){case 100:case 109:case 115:case 45:le=H;break;default:le=B}if(j=r(H,le,j,m,$+1),de=j.length,0<U&&(le=t(B,ce,ue),he=l(3,j,le,H,A,J,de,m,$,re),ce=le.join(""),he!==void 0&&(de=(j=he.trim()).length)===0&&(m=0,j="")),0<de)switch(m){case 115:ce=ce.replace(v,a);case 100:case 109:case 45:j=ce+"{"+j+"}";break;case 107:ce=ce.replace(V,"$1 $2"),j=ce+"{"+j+"}",j=O===1||O===2&&s("@"+j,3)?"@-webkit-"+j+"@"+j:"@"+j;break;default:j=ce+j,re===112&&(j=(te+=j,""))}else j="";break;default:j=r(H,t(H,ce,ue),j,re,$+1)}ne+=j,j=ue=le=oe=W=0,ce="",m=R.charCodeAt(++Q);break;case 125:case 59:if(ce=(0<le?ce.replace(x,""):ce).trim(),1<(de=ce.length))switch(oe===0&&(W=ce.charCodeAt(0),W===45||96<W&&123>W)&&(de=(ce=ce.replace(" ",":")).length),0<U&&(he=l(1,ce,H,F,A,J,te.length,re,$,re))!==void 0&&(de=(ce=he.trim()).length)===0&&(ce="\0\0"),W=ce.charCodeAt(0),m=ce.charCodeAt(1),W){case 0:break;case 64:if(m===105||m===99){se+=ce+R.charAt(Q);break}default:ce.charCodeAt(de-1)!==58&&(te+=o(ce,W,m,ce.charCodeAt(2)))}ue=le=oe=W=0,ce="",m=R.charCodeAt(++Q)}}switch(m){case 13:case 10:S===47?S=0:1+W===0&&re!==107&&0<ce.length&&(le=1,ce+="\0"),0<U*ee&&l(0,ce,H,F,A,J,te.length,re,$,re),J=1,A++;break;case 59:case 125:if(S+K+G+z===0){J++;break}default:switch(J++,xe=R.charAt(Q),m){case 9:case 32:if(K+z+S===0)switch(q){case 44:case 58:case 9:case 32:xe="";break;default:m!==32&&(xe=" ")}break;case 0:xe="\\0";break;case 12:xe="\\f";break;case 11:xe="\\v";break;case 38:K+S+z===0&&(le=ue=1,xe="\f"+xe);break;case 108:if(K+S+z+_===0&&0<oe)switch(Q-oe){case 2:q===112&&R.charCodeAt(Q-3)===58&&(_=q);case 8:T===111&&(_=T)}break;case 58:K+S+z===0&&(oe=Q);break;case 44:S+G+K+z===0&&(le=1,xe+="\r");break;case 34:case 39:S===0&&(K=K===m?0:K===0?m:K);break;case 91:K+S+G===0&&z++;break;case 93:K+S+G===0&&z--;break;case 41:K+S+z===0&&G--;break;case 40:if(K+S+z===0){if(W===0)switch(2*q+3*T){case 533:break;default:W=1}G++}break;case 64:S+G+K+z+oe+j===0&&(j=1);break;case 42:case 47:if(!(0<K+z+G))switch(S){case 0:switch(2*m+3*R.charCodeAt(Q+1)){case 235:S=47;break;case 220:de=Q,S=42}break;case 42:m===47&&q===42&&de+2!==Q&&(R.charCodeAt(de+2)===33&&(te+=R.substring(de,Q+1)),xe="",S=0)}}S===0&&(ce+=xe)}T=q,q=m,Q++}if(de=te.length,0<de){if(le=H,0<U&&(he=l(2,te,le,F,A,J,de,re,$,re),he!==void 0&&(te=he).length===0))return se+te+ne;if(te=le.join(",")+"{"+te+"}",O*_!==0){switch(O!==2||s(te,2)||(_=0),_){case 111:te=te.replace(Y,":-moz-$1")+te;break;case 112:te=te.replace(I,"::-webkit-input-$1")+te.replace(I,"::-moz-$1")+te.replace(I,":-ms-input-$1")+te}_=0}}return se+te+ne}function t(F,H,R){var re=H.trim().split(g);H=re;var $=re.length,z=F.length;switch(z){case 0:case 1:var S=0;for(F=z===0?"":F[0]+" ";S<$;++S)H[S]=n(F,H[S],R).trim();break;default:var G=S=0;for(H=[];S<$;++S)for(var K=0;K<z;++K)H[G++]=n(F[K]+" ",re[S],R).trim()}return H}function n(F,H,R){var re=H.charCodeAt(0);switch(33>re&&(re=(H=H.trim()).charCodeAt(0)),re){case 38:return H.replace(N,"$1"+F.trim());case 58:return F.trim()+H.replace(N,"$1"+F.trim());default:if(0<1*R&&0<H.indexOf("\f"))return H.replace(N,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+H}function o(F,H,R,re){var $=F+";",z=2*H+3*R+4*re;if(z===944){F=$.indexOf(":",9)+1;var S=$.substring(F,$.length-1).trim();return S=$.substring(0,F).trim()+S+";",O===1||O===2&&s(S,1)?"-webkit-"+S+S:S}if(O===0||O===2&&!s($,1))return $;switch(z){case 1015:return $.charCodeAt(10)===97?"-webkit-"+$+$:$;case 951:return $.charCodeAt(3)===116?"-webkit-"+$+$:$;case 963:return $.charCodeAt(5)===110?"-webkit-"+$+$:$;case 1009:if($.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+$+$;case 978:return"-webkit-"+$+"-moz-"+$+$;case 1019:case 983:return"-webkit-"+$+"-moz-"+$+"-ms-"+$+$;case 883:if($.charCodeAt(8)===45)return"-webkit-"+$+$;if(0<$.indexOf("image-set(",11))return $.replace(X,"$1-webkit-$2")+$;break;case 932:if($.charCodeAt(4)===45)switch($.charCodeAt(5)){case 103:return"-webkit-box-"+$.replace("-grow","")+"-webkit-"+$+"-ms-"+$.replace("grow","positive")+$;case 115:return"-webkit-"+$+"-ms-"+$.replace("shrink","negative")+$;case 98:return"-webkit-"+$+"-ms-"+$.replace("basis","preferred-size")+$}return"-webkit-"+$+"-ms-"+$+$;case 964:return"-webkit-"+$+"-ms-flex-"+$+$;case 1023:if($.charCodeAt(8)!==99)break;return S=$.substring($.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+S+"-webkit-"+$+"-ms-flex-pack"+S+$;case 1005:return y.test($)?$.replace(M,":-webkit-")+$.replace(M,":-moz-")+$:$;case 1e3:switch(S=$.substring(13).trim(),H=S.indexOf("-")+1,S.charCodeAt(0)+S.charCodeAt(H)){case 226:S=$.replace(f,"tb");break;case 232:S=$.replace(f,"tb-rl");break;case 220:S=$.replace(f,"lr");break;default:return $}return"-webkit-"+$+"-ms-"+S+$;case 1017:if($.indexOf("sticky",9)===-1)break;case 975:switch(H=($=F).length-10,S=($.charCodeAt(H)===33?$.substring(0,H):$).substring(F.indexOf(":",7)+1).trim(),z=S.charCodeAt(0)+(S.charCodeAt(7)|0)){case 203:if(111>S.charCodeAt(8))break;case 115:$=$.replace(S,"-webkit-"+S)+";"+$;break;case 207:case 102:$=$.replace(S,"-webkit-"+(102<z?"inline-":"")+"box")+";"+$.replace(S,"-webkit-"+S)+";"+$.replace(S,"-ms-"+S+"box")+";"+$}return $+";";case 938:if($.charCodeAt(5)===45)switch($.charCodeAt(6)){case 105:return S=$.replace("-items",""),"-webkit-"+$+"-webkit-box-"+S+"-ms-flex-"+S+$;case 115:return"-webkit-"+$+"-ms-flex-item-"+$.replace(E,"")+$;default:return"-webkit-"+$+"-ms-flex-line-pack"+$.replace("align-content","").replace(E,"")+$}break;case 973:case 989:if($.charCodeAt(3)!==45||$.charCodeAt(4)===122)break;case 931:case 953:if(D.test(F)===!0)return(S=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?o(F.replace("stretch","fill-available"),H,R,re).replace(":fill-available",":stretch"):$.replace(S,"-webkit-"+S)+$.replace(S,"-moz-"+S.replace("fill-",""))+$;break;case 962:if($="-webkit-"+$+($.charCodeAt(5)===102?"-ms-"+$:"")+$,R+re===211&&$.charCodeAt(13)===105&&0<$.indexOf("transform",10))return $.substring(0,$.indexOf(";",27)+1).replace(k,"$1-webkit-$2")+$}return $}function s(F,H){var R=F.indexOf(H===1?":":"{"),re=F.substring(0,H!==3?R:10);return R=F.substring(R+1,F.length-1),Z(H!==2?re:re.replace(w,"$1"),R,H)}function a(F,H){var R=o(H,H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2));return R!==H+";"?R.replace(C," or ($1)").substring(4):"("+H+")"}function l(F,H,R,re,$,z,S,G,K,W){for(var m=0,q=H,T;m<U;++m)switch(T=L[m].call(u,F,q,R,re,$,z,S,G,K,W)){case void 0:case!1:case!0:case null:break;default:q=T}if(q!==H)return q}function d(F){switch(F){case void 0:case null:U=L.length=0;break;default:if(typeof F=="function")L[U++]=F;else if(typeof F=="object")for(var H=0,R=F.length;H<R;++H)d(F[H]);else ee=!!F|0}return d}function c(F){return F=F.prefix,F!==void 0&&(Z=null,F?typeof F!="function"?O=1:(O=2,Z=F):O=0),c}function u(F,H){var R=F;if(33>R.charCodeAt(0)&&(R=R.trim()),ie=R,R=[ie],0<U){var re=l(-1,H,R,R,A,J,0,0,0,0);re!==void 0&&typeof re=="string"&&(H=re)}var $=r(B,R,H,0,0);return 0<U&&(re=l(-2,$,R,R,A,J,$.length,0,0,0),re!==void 0&&($=re)),ie="",_=0,J=A=1,$}var h=/^\0+/g,x=/[\0\r\f]/g,M=/: */g,y=/zoo|gra/,k=/([,: ])(transform)/g,g=/,\r+?/g,N=/([\t\r\n ])*\f?&/g,V=/@(k\w+)\s*(\S*)\s*/,I=/::(place)/g,Y=/:(read-only)/g,f=/[svh]\w+-[tblr]{2}/,v=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,E=/-self|flex-/g,w=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,X=/([^-])(image-set\()/,J=1,A=1,_=0,O=1,B=[],L=[],U=0,Z=null,ee=0,ie="";return u.use=d,u.set=c,e!==void 0&&c(e),u}var po={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function go(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var mo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,On=go(function(e){return mo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Wt={},yo={get exports(){return Wt},set exports(e){Wt=e}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var In;function vo(){if(In)return ye;In=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,x=e?Symbol.for("react.suspense_list"):60120,M=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,V=e?Symbol.for("react.scope"):60119;function I(f){if(typeof f=="object"&&f!==null){var v=f.$$typeof;switch(v){case r:switch(f=f.type,f){case d:case c:case n:case s:case o:case h:return f;default:switch(f=f&&f.$$typeof,f){case l:case u:case y:case M:case a:return f;default:return v}}case t:return v}}}function Y(f){return I(f)===c}return ye.AsyncMode=d,ye.ConcurrentMode=c,ye.ContextConsumer=l,ye.ContextProvider=a,ye.Element=r,ye.ForwardRef=u,ye.Fragment=n,ye.Lazy=y,ye.Memo=M,ye.Portal=t,ye.Profiler=s,ye.StrictMode=o,ye.Suspense=h,ye.isAsyncMode=function(f){return Y(f)||I(f)===d},ye.isConcurrentMode=Y,ye.isContextConsumer=function(f){return I(f)===l},ye.isContextProvider=function(f){return I(f)===a},ye.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===r},ye.isForwardRef=function(f){return I(f)===u},ye.isFragment=function(f){return I(f)===n},ye.isLazy=function(f){return I(f)===y},ye.isMemo=function(f){return I(f)===M},ye.isPortal=function(f){return I(f)===t},ye.isProfiler=function(f){return I(f)===s},ye.isStrictMode=function(f){return I(f)===o},ye.isSuspense=function(f){return I(f)===h},ye.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===n||f===c||f===s||f===o||f===h||f===x||typeof f=="object"&&f!==null&&(f.$$typeof===y||f.$$typeof===M||f.$$typeof===a||f.$$typeof===l||f.$$typeof===u||f.$$typeof===g||f.$$typeof===N||f.$$typeof===V||f.$$typeof===k)},ye.typeOf=I,ye}var ve={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn;function xo(){return Yn||(Yn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,x=e?Symbol.for("react.suspense_list"):60120,M=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,V=e?Symbol.for("react.scope"):60119;function I(m){return typeof m=="string"||typeof m=="function"||m===n||m===c||m===s||m===o||m===h||m===x||typeof m=="object"&&m!==null&&(m.$$typeof===y||m.$$typeof===M||m.$$typeof===a||m.$$typeof===l||m.$$typeof===u||m.$$typeof===g||m.$$typeof===N||m.$$typeof===V||m.$$typeof===k)}function Y(m){if(typeof m=="object"&&m!==null){var q=m.$$typeof;switch(q){case r:var T=m.type;switch(T){case d:case c:case n:case s:case o:case h:return T;default:var j=T&&T.$$typeof;switch(j){case l:case u:case y:case M:case a:return j;default:return q}}case t:return q}}}var f=d,v=c,C=l,E=a,w=r,D=u,X=n,J=y,A=M,_=t,O=s,B=o,L=h,U=!1;function Z(m){return U||(U=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ee(m)||Y(m)===d}function ee(m){return Y(m)===c}function ie(m){return Y(m)===l}function F(m){return Y(m)===a}function H(m){return typeof m=="object"&&m!==null&&m.$$typeof===r}function R(m){return Y(m)===u}function re(m){return Y(m)===n}function $(m){return Y(m)===y}function z(m){return Y(m)===M}function S(m){return Y(m)===t}function G(m){return Y(m)===s}function K(m){return Y(m)===o}function W(m){return Y(m)===h}ve.AsyncMode=f,ve.ConcurrentMode=v,ve.ContextConsumer=C,ve.ContextProvider=E,ve.Element=w,ve.ForwardRef=D,ve.Fragment=X,ve.Lazy=J,ve.Memo=A,ve.Portal=_,ve.Profiler=O,ve.StrictMode=B,ve.Suspense=L,ve.isAsyncMode=Z,ve.isConcurrentMode=ee,ve.isContextConsumer=ie,ve.isContextProvider=F,ve.isElement=H,ve.isForwardRef=R,ve.isFragment=re,ve.isLazy=$,ve.isMemo=z,ve.isPortal=S,ve.isProfiler=G,ve.isStrictMode=K,ve.isSuspense=W,ve.isValidElementType=I,ve.typeOf=Y}()),ve}(function(e){process.env.NODE_ENV==="production"?e.exports=vo():e.exports=xo()})(yo);var jt=Wt,bo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},So={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ln={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zt={};Zt[jt.ForwardRef]=So,Zt[jt.Memo]=Ln;function Nn(e){return jt.isMemo(e)?Ln:Zt[e.$$typeof]||bo}var Co=Object.defineProperty,Mo=Object.getOwnPropertyNames,Fn=Object.getOwnPropertySymbols,ko=Object.getOwnPropertyDescriptor,$o=Object.getPrototypeOf,Bn=Object.prototype;function Hn(e,r,t){if(typeof r!="string"){if(Bn){var n=$o(r);n&&n!==Bn&&Hn(e,n,t)}var o=Mo(r);Fn&&(o=o.concat(Fn(r)));for(var s=Nn(e),a=Nn(r),l=0;l<o.length;++l){var d=o[l];if(!wo[d]&&!(t&&t[d])&&!(a&&a[d])&&!(s&&s[d])){var c=ko(r,d);try{Co(e,d,c)}catch{}}}}return e}var Do=Hn;function Oe(){return(Oe=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var zn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},Vt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!yt.typeOf(e)},kt=Object.freeze([]),Ze=Object.freeze({});function et(e){return typeof e=="function"}function Gt(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Xt(e){return e&&typeof e.styledComponentId=="string"}var tt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Ut=typeof window<"u"&&"HTMLElement"in window,Eo=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),_o={},To=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function Ao(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Ne(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(Ao.apply(void 0,[To[e]].concat(t)).trim())}var Po=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,a=s;t>=a;)(a<<=1)<0&&Ne(16,""+t);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(t+1),c=0,u=n.length;c<u;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[t]++,d++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var a=o;a<s;a++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),a=s+o,l=s;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),$t=new Map,Dt=new Map,vt=1,Et=function(e){if($t.has(e))return $t.get(e);for(;Dt.has(vt);)vt++;var r=vt++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&Ne(16,""+r),$t.set(e,r),Dt.set(r,e),r},Oo=function(e){return Dt.get(e)},Io=function(e,r){r>=vt&&(vt=r+1),$t.set(e,r),Dt.set(r,e)},Yo="style["+tt+'][data-styled-version="5.3.8"]',Lo=new RegExp("^"+tt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),No=function(e,r,t){for(var n,o=t.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(r,n)},Fo=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var a=t[o].trim();if(a){var l=a.match(Lo);if(l){var d=0|parseInt(l[1],10),c=l[2];d!==0&&(Io(c,d),No(e,c,l[3]),e.getTag().insertRules(d,n)),n.length=0}else n.push(a)}}},Bo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Wn=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(l){for(var d=l.childNodes,c=d.length;c>=0;c--){var u=d[c];if(u&&u.nodeType===1&&u.hasAttribute(tt))return u}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(tt,"active"),n.setAttribute("data-styled-version","5.3.8");var a=Bo();return a&&n.setAttribute("nonce",a),t.insertBefore(n,s),n},Ho=function(){function e(t){var n=this.element=Wn(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var d=s[a];if(d.ownerNode===o)return d}Ne(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),zo=function(){function e(t){var n=this.element=Wn(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Wo=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),jn=Ut,jo={isServer:!Ut,useCSSOMInjection:!Eo},_t=function(){function e(t,n,o){t===void 0&&(t=Ze),n===void 0&&(n={}),this.options=Oe({},jo,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Ut&&jn&&(jn=!1,function(s){for(var a=document.querySelectorAll(Yo),l=0,d=a.length;l<d;l++){var c=a[l];c&&c.getAttribute(tt)!=="active"&&(Fo(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return Et(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Oe({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,a=n.target,t=o?new Wo(a):s?new Ho(a):new zo(a),new Po(t)));var t,n,o,s,a},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(Et(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(Et(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(Et(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",a=0;a<o;a++){var l=Oo(a);if(l!==void 0){var d=t.names.get(l),c=n.getGroup(a);if(d&&c&&d.size){var u=tt+".g"+a+'[id="'+l+'"]',h="";d!==void 0&&d.forEach(function(x){x.length>0&&(h+=x+",")}),s+=""+c+u+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),Zo=/(a)(d)/gi,Zn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kt(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=Zn(r%52)+t;return(Zn(r%52)+t).replace(Zo,"$1-$2")}var Xe=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},Vn=function(e){return Xe(5381,e)};function Gn(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(et(t)&&!Xt(t))return!1}return!0}var Vo=Vn("5.3.8"),Go=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&Gn(r),this.componentId=t,this.baseHash=Xe(Vo,t),this.baseStyle=n,_t.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var a=Ue(this.rules,r,t,n).join(""),l=Kt(Xe(this.baseHash,a)>>>0);if(!t.hasNameForId(o,l)){var d=n(a,"."+l,void 0,o);t.insertRules(o,l,d)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,u=Xe(this.baseHash,n.hash),h="",x=0;x<c;x++){var M=this.rules[x];if(typeof M=="string")h+=M,process.env.NODE_ENV!=="production"&&(u=Xe(u,M+x));else if(M){var y=Ue(M,r,t,n),k=Array.isArray(y)?y.join(""):y;u=Xe(u,k+x),h+=k}}if(h){var g=Kt(u>>>0);if(!t.hasNameForId(o,g)){var N=n(h,"."+g,void 0,o);t.insertRules(o,g,N)}s.push(g)}}return s.join(" ")},e}(),Xo=/^\s*\/\/.*$/gm,Uo=[":","[",".","#"];function Ko(e){var r,t,n,o,s=e===void 0?Ze:e,a=s.options,l=a===void 0?Ze:a,d=s.plugins,c=d===void 0?kt:d,u=new ho(l),h=[],x=function(k){function g(N){if(N)try{k(N+"}")}catch{}}return function(N,V,I,Y,f,v,C,E,w,D){switch(N){case 1:if(w===0&&V.charCodeAt(0)===64)return k(V+";"),"";break;case 2:if(E===0)return V+"/*|*/";break;case 3:switch(E){case 102:case 112:return k(I[0]+V),"";default:return V+(D===0?"/*|*/":"")}case-2:V.split("/*|*/}").forEach(g)}}}(function(k){h.push(k)}),M=function(k,g,N){return g===0&&Uo.indexOf(N[t.length])!==-1||N.match(o)?k:"."+r};function y(k,g,N,V){V===void 0&&(V="&");var I=k.replace(Xo,""),Y=g&&N?N+" "+g+" { "+I+" }":I;return r=V,t=g,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),u(N||!g?"":g,Y)}return u.use([].concat(c,[function(k,g,N){k===2&&N.length&&N[0].lastIndexOf(t)>0&&(N[0]=N[0].replace(n,M))},x,function(k){if(k===-2){var g=h;return h=[],g}}])),y.hash=c.length?c.reduce(function(k,g){return g.name||Ne(15),Xe(k,g.name)},5381).toString():"",y}var Xn=p.createContext();Xn.Consumer;var Un=p.createContext(),qo=(Un.Consumer,new _t),qt=Ko();function Kn(){return p.useContext(Xn)||qo}function qn(){return p.useContext(Un)||qt}var Jn=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=qt);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.toString=function(){return Ne(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=qt),this.name+r.hash},e}(),Jo=/([A-Z])/,Qo=/([A-Z])/g,Ro=/^ms-/,es=function(e){return"-"+e.toLowerCase()};function Qn(e){return Jo.test(e)?e.replace(Qo,es).replace(Ro,"-ms-"):e}var Rn=function(e){return e==null||e===!1||e===""};function Ue(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],a=0,l=e.length;a<l;a+=1)(o=Ue(e[a],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(Rn(e))return"";if(Xt(e))return"."+e.styledComponentId;if(et(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!r)return e;var d=e(r);return process.env.NODE_ENV!=="production"&&yt.isElement(d)&&console.warn(Gt(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ue(d,r,t,n)}var c;return e instanceof Jn?t?(e.inject(t,n),e.getName(n)):e:Vt(e)?function u(h,x){var M,y,k=[];for(var g in h)h.hasOwnProperty(g)&&!Rn(h[g])&&(Array.isArray(h[g])&&h[g].isCss||et(h[g])?k.push(Qn(g)+":",h[g],";"):Vt(h[g])?k.push.apply(k,u(h[g],g)):k.push(Qn(g)+": "+(M=g,(y=h[g])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||M in po?String(y).trim():y+"px")+";"));return x?[x+" {"].concat(k,["}"]):k}(e):e.toString()}var er=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Tt(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return et(e)||Vt(e)?er(Ue(zn(kt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:er(Ue(zn(e,t)))}var tr=/invalid hook call/i,At=new Set,nr=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(tr.test(s))o=!1,At.delete(t);else{for(var a=arguments.length,l=new Array(a>1?a-1:0),d=1;d<a;d++)l[d-1]=arguments[d];n.apply(void 0,[s].concat(l))}},p.useRef(),o&&!At.has(t)&&(console.warn(t),At.add(t))}catch(s){tr.test(s.message)&&At.delete(t)}finally{console.error=n}}},rr=function(e,r,t){return t===void 0&&(t=Ze),e.theme!==t.theme&&e.theme||r||t.theme},ts=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ns=/(^-|-$)/g;function Jt(e){return e.replace(ts,"-").replace(ns,"")}var Qt=function(e){return Kt(Vn(e)>>>0)};function Pt(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Rt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},rs=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function os(e,r,t){var n=e[t];Rt(r)&&Rt(n)?or(n,r):e[t]=r}function or(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var a=s[o];if(Rt(a))for(var l in a)rs(l)&&os(e,a[l],l)}return e}var nt=p.createContext();nt.Consumer;function ss(e){var r=p.useContext(nt),t=p.useMemo(function(){return function(n,o){if(!n)return Ne(14);if(et(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Ne(7)}return Array.isArray(n)||typeof n!="object"?Ne(8):o?Oe({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?p.createElement(nt.Provider,{value:t},e.children):null}var en={};function sr(e,r,t){var n=Xt(e),o=!Pt(e),s=r.attrs,a=s===void 0?kt:s,l=r.componentId,d=l===void 0?function(V,I){var Y=typeof V!="string"?"sc":Jt(V);en[Y]=(en[Y]||0)+1;var f=Y+"-"+Qt("5.3.8"+Y+en[Y]);return I?I+"-"+f:f}(r.displayName,r.parentComponentId):l,c=r.displayName,u=c===void 0?function(V){return Pt(V)?"styled."+V:"Styled("+Gt(V)+")"}(e):c,h=r.displayName&&r.componentId?Jt(r.displayName)+"-"+r.componentId:r.componentId||d,x=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,M=r.shouldForwardProp;n&&e.shouldForwardProp&&(M=r.shouldForwardProp?function(V,I,Y){return e.shouldForwardProp(V,I,Y)&&r.shouldForwardProp(V,I,Y)}:e.shouldForwardProp);var y,k=new Go(t,h,n?e.componentStyle:void 0),g=k.isStatic&&a.length===0,N=function(V,I){return function(Y,f,v,C){var E=Y.attrs,w=Y.componentStyle,D=Y.defaultProps,X=Y.foldedComponentIds,J=Y.shouldForwardProp,A=Y.styledComponentId,_=Y.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(A);var O=function(re,$,z){re===void 0&&(re=Ze);var S=Oe({},$,{theme:re}),G={};return z.forEach(function(K){var W,m,q,T=K;for(W in et(T)&&(T=T(S)),T)S[W]=G[W]=W==="className"?(m=G[W],q=T[W],m&&q?m+" "+q:m||q):T[W]}),[S,G]}(rr(f,p.useContext(nt),D)||Ze,f,E),B=O[0],L=O[1],U=function(re,$,z,S){var G=Kn(),K=qn(),W=$?re.generateAndInjectStyles(Ze,G,K):re.generateAndInjectStyles(z,G,K);return process.env.NODE_ENV!=="production"&&p.useDebugValue(W),process.env.NODE_ENV!=="production"&&!$&&S&&S(W),W}(w,C,B,process.env.NODE_ENV!=="production"?Y.warnTooManyClasses:void 0),Z=v,ee=L.$as||f.$as||L.as||f.as||_,ie=Pt(ee),F=L!==f?Oe({},f,{},L):f,H={};for(var R in F)R[0]!=="$"&&R!=="as"&&(R==="forwardedAs"?H.as=F[R]:(J?J(R,On,ee):!ie||On(R))&&(H[R]=F[R]));return f.style&&L.style!==f.style&&(H.style=Oe({},f.style,{},L.style)),H.className=Array.prototype.concat(X,A,U!==A?U:null,f.className,L.className).filter(Boolean).join(" "),H.ref=Z,p.createElement(ee,H)}(y,V,I,g)};return N.displayName=u,(y=p.forwardRef(N)).attrs=x,y.componentStyle=k,y.displayName=u,y.shouldForwardProp=M,y.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):kt,y.styledComponentId=h,y.target=n?e.target:e,y.withComponent=function(V){var I=r.componentId,Y=function(v,C){if(v==null)return{};var E,w,D={},X=Object.keys(v);for(w=0;w<X.length;w++)E=X[w],C.indexOf(E)>=0||(D[E]=v[E]);return D}(r,["componentId"]),f=I&&I+"-"+(Pt(V)?V:Jt(Gt(V)));return sr(V,Oe({},Y,{attrs:x,componentId:f}),t)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=n?or({},e.defaultProps,V):V}}),process.env.NODE_ENV!=="production"&&(nr(u,h),y.warnTooManyClasses=function(V,I){var Y={},f=!1;return function(v){if(!f&&(Y[v]=!0,Object.keys(Y).length>=200)){var C=I?' with the id of "'+I+'"':"";console.warn("Over 200 classes were generated for component "+V+C+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),f=!0,Y={}}}}(u,h)),y.toString=function(){return"."+y.styledComponentId},o&&Do(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var tn=function(e){return function r(t,n,o){if(o===void 0&&(o=Ze),!yt.isValidElementType(n))return Ne(1,String(n));var s=function(){return t(n,o,Tt.apply(void 0,arguments))};return s.withConfig=function(a){return r(t,n,Oe({},o,{},a))},s.attrs=function(a){return r(t,n,Oe({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},s}(sr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){tn[e]=tn(e)});var is=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Gn(t),_t.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var a=s(Ue(this.rules,n,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,a)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&_t.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function as(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=Tt.apply(void 0,[e].concat(t)),s="sc-global-"+Qt(JSON.stringify(o)),a=new is(o,s);function l(c){var u=Kn(),h=qn(),x=p.useContext(nt),M=p.useRef(u.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(y){return typeof y=="string"&&y.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),u.server&&d(M,c,u,x,h),p.useLayoutEffect(function(){if(!u.server)return d(M,c,u,x,h),function(){return a.removeStyles(M,u)}},[M,c,u,x,h]),null}function d(c,u,h,x,M){if(a.isStatic)a.renderStyles(c,_o,h,M);else{var y=Oe({},u,{theme:rr(u,x,l.defaultProps)});a.renderStyles(c,y,h,M)}}return process.env.NODE_ENV!=="production"&&nr(s),p.memo(l)}function Ke(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=Tt.apply(void 0,[e].concat(t)).join(""),s=Qt(o);return new Jn(s,o)}var Ot=function(){return p.useContext(nt)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const b=tn,xt="reactSchedulerOutsideWrapper",Ie="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",cs=as`

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
`,ls={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},ds={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},rt=`
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
`;const Se=50,Fe=24,st=16,qe=40,it=qe+st+Fe,at=84,fe=56,_e=196,Pe=12,ke=50,ct=24,bt=16,nn=40,us=ct+bt+nn,ir=24,ar=52,Ye={topRow:`600 14px ${Ie}`,middleRow:`400 10px ${Ie}`,bottomRow:{name:`600 14px ${Ie}`,number:`600 10px ${Ie}`,hoursInDay:`400 9px ${Ie}`}},lt=3,fs=1.6,hs=4.5,rn=12,It=24,ps="reactSchedulerCanvasHeaderWrapper",cr="reactSchedulerCanvasWrapper",Be=xt,gs=4,on=48,Ve=5,ms=40,lr=8,sn=Fe/2+2,dr=st/2+Fe+1,ur=2,Ce=60,Ae=21,fr=58,hr="reactSchedulerBody";var Je={},ys={get exports(){return Je},set exports(e){Je=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",a="second",l="minute",d="hour",c="day",u="week",h="month",x="quarter",M="year",y="date",k="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,N=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,V={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(A){var _=["th","st","nd","rd"],O=A%100;return"["+A+(_[(O-20)%10]||_[O]||_[0])+"]"}},I=function(A,_,O){var B=String(A);return!B||B.length>=_?A:""+Array(_+1-B.length).join(O)+A},Y={s:I,z:function(A){var _=-A.utcOffset(),O=Math.abs(_),B=Math.floor(O/60),L=O%60;return(_<=0?"+":"-")+I(B,2,"0")+":"+I(L,2,"0")},m:function A(_,O){if(_.date()<O.date())return-A(O,_);var B=12*(O.year()-_.year())+(O.month()-_.month()),L=_.clone().add(B,h),U=O-L<0,Z=_.clone().add(B+(U?-1:1),h);return+(-(B+(O-L)/(U?L-Z:Z-L))||0)},a:function(A){return A<0?Math.ceil(A)||0:Math.floor(A)},p:function(A){return{M:h,y:M,w:u,d:c,D:y,h:d,m:l,s:a,ms:s,Q:x}[A]||String(A||"").toLowerCase().replace(/s$/,"")},u:function(A){return A===void 0}},f="en",v={};v[f]=V;var C=function(A){return A instanceof X},E=function A(_,O,B){var L;if(!_)return f;if(typeof _=="string"){var U=_.toLowerCase();v[U]&&(L=U),O&&(v[U]=O,L=U);var Z=_.split("-");if(!L&&Z.length>1)return A(Z[0])}else{var ee=_.name;v[ee]=_,L=ee}return!B&&L&&(f=L),L||!B&&f},w=function(A,_){if(C(A))return A.clone();var O=typeof _=="object"?_:{};return O.date=A,O.args=arguments,new X(O)},D=Y;D.l=E,D.i=C,D.w=function(A,_){return w(A,{locale:_.$L,utc:_.$u,x:_.$x,$offset:_.$offset})};var X=function(){function A(O){this.$L=E(O.locale,null,!0),this.parse(O)}var _=A.prototype;return _.parse=function(O){this.$d=function(B){var L=B.date,U=B.utc;if(L===null)return new Date(NaN);if(D.u(L))return new Date;if(L instanceof Date)return new Date(L);if(typeof L=="string"&&!/Z$/i.test(L)){var Z=L.match(g);if(Z){var ee=Z[2]-1||0,ie=(Z[7]||"0").substring(0,3);return U?new Date(Date.UTC(Z[1],ee,Z[3]||1,Z[4]||0,Z[5]||0,Z[6]||0,ie)):new Date(Z[1],ee,Z[3]||1,Z[4]||0,Z[5]||0,Z[6]||0,ie)}}return new Date(L)}(O),this.$x=O.x||{},this.init()},_.init=function(){var O=this.$d;this.$y=O.getFullYear(),this.$M=O.getMonth(),this.$D=O.getDate(),this.$W=O.getDay(),this.$H=O.getHours(),this.$m=O.getMinutes(),this.$s=O.getSeconds(),this.$ms=O.getMilliseconds()},_.$utils=function(){return D},_.isValid=function(){return this.$d.toString()!==k},_.isSame=function(O,B){var L=w(O);return this.startOf(B)<=L&&L<=this.endOf(B)},_.isAfter=function(O,B){return w(O)<this.startOf(B)},_.isBefore=function(O,B){return this.endOf(B)<w(O)},_.$g=function(O,B,L){return D.u(O)?this[B]:this.set(L,O)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(O,B){var L=this,U=!!D.u(B)||B,Z=D.p(O),ee=function(S,G){var K=D.w(L.$u?Date.UTC(L.$y,G,S):new Date(L.$y,G,S),L);return U?K:K.endOf(c)},ie=function(S,G){return D.w(L.toDate()[S].apply(L.toDate("s"),(U?[0,0,0,0]:[23,59,59,999]).slice(G)),L)},F=this.$W,H=this.$M,R=this.$D,re="set"+(this.$u?"UTC":"");switch(Z){case M:return U?ee(1,0):ee(31,11);case h:return U?ee(1,H):ee(0,H+1);case u:var $=this.$locale().weekStart||0,z=(F<$?F+7:F)-$;return ee(U?R-z:R+(6-z),H);case c:case y:return ie(re+"Hours",0);case d:return ie(re+"Minutes",1);case l:return ie(re+"Seconds",2);case a:return ie(re+"Milliseconds",3);default:return this.clone()}},_.endOf=function(O){return this.startOf(O,!1)},_.$set=function(O,B){var L,U=D.p(O),Z="set"+(this.$u?"UTC":""),ee=(L={},L[c]=Z+"Date",L[y]=Z+"Date",L[h]=Z+"Month",L[M]=Z+"FullYear",L[d]=Z+"Hours",L[l]=Z+"Minutes",L[a]=Z+"Seconds",L[s]=Z+"Milliseconds",L)[U],ie=U===c?this.$D+(B-this.$W):B;if(U===h||U===M){var F=this.clone().set(y,1);F.$d[ee](ie),F.init(),this.$d=F.set(y,Math.min(this.$D,F.daysInMonth())).$d}else ee&&this.$d[ee](ie);return this.init(),this},_.set=function(O,B){return this.clone().$set(O,B)},_.get=function(O){return this[D.p(O)]()},_.add=function(O,B){var L,U=this;O=Number(O);var Z=D.p(B),ee=function(H){var R=w(U);return D.w(R.date(R.date()+Math.round(H*O)),U)};if(Z===h)return this.set(h,this.$M+O);if(Z===M)return this.set(M,this.$y+O);if(Z===c)return ee(1);if(Z===u)return ee(7);var ie=(L={},L[l]=n,L[d]=o,L[a]=t,L)[Z]||1,F=this.$d.getTime()+O*ie;return D.w(F,this)},_.subtract=function(O,B){return this.add(-1*O,B)},_.format=function(O){var B=this,L=this.$locale();if(!this.isValid())return L.invalidDate||k;var U=O||"YYYY-MM-DDTHH:mm:ssZ",Z=D.z(this),ee=this.$H,ie=this.$m,F=this.$M,H=L.weekdays,R=L.months,re=function(G,K,W,m){return G&&(G[K]||G(B,U))||W[K].slice(0,m)},$=function(G){return D.s(ee%12||12,G,"0")},z=L.meridiem||function(G,K,W){var m=G<12?"AM":"PM";return W?m.toLowerCase():m},S={YY:String(this.$y).slice(-2),YYYY:this.$y,M:F+1,MM:D.s(F+1,2,"0"),MMM:re(L.monthsShort,F,R,3),MMMM:re(R,F),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:re(L.weekdaysMin,this.$W,H,2),ddd:re(L.weekdaysShort,this.$W,H,3),dddd:H[this.$W],H:String(ee),HH:D.s(ee,2,"0"),h:$(1),hh:$(2),a:z(ee,ie,!0),A:z(ee,ie,!1),m:String(ie),mm:D.s(ie,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z};return U.replace(N,function(G,K){return K||S[G]||Z.replace(":","")})},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(O,B,L){var U,Z=D.p(B),ee=w(O),ie=(ee.utcOffset()-this.utcOffset())*n,F=this-ee,H=D.m(this,ee);return H=(U={},U[M]=H/12,U[h]=H,U[x]=H/3,U[u]=(F-ie)/6048e5,U[c]=(F-ie)/864e5,U[d]=F/o,U[l]=F/n,U[a]=F/t,U)[Z]||F,L?H:D.a(H)},_.daysInMonth=function(){return this.endOf(h).$D},_.$locale=function(){return v[this.$L]},_.locale=function(O,B){if(!O)return this.$L;var L=this.clone(),U=E(O,B,!0);return U&&(L.$L=U),L},_.clone=function(){return D.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},A}(),J=X.prototype;return w.prototype=J,[["$ms",s],["$s",a],["$m",l],["$H",d],["$W",c],["$M",h],["$y",M],["$D",y]].forEach(function(A){J[A[1]]=function(_){return this.$g(_,A[0],A[1])}}),w.extend=function(A,_){return A.$i||(A(_,X,w),A.$i=!0),w},w.locale=E,w.isDayjs=C,w.unix=function(A){return w(1e3*A)},w.en=v[f],w.Ls=v,w.p={},w})})(ys);const P=Je,pr=e=>e%4===0&&e%100>0||e%400===0?366:365,an=e=>{const r=e.day();return r!==0&&r!==6},gr=(e,r)=>P(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),mr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:an(e),isCurrentDay:e.isSame(P(),"day"),year:parseInt(e.format("YYYY"))});let Yt=null;const vs=e=>{if(Yt)return Yt;const r=document.createElement("canvas");r.width=12,r.height=12;const t=r.getContext("2d");return t?(t.strokeStyle="rgba(120, 137, 127, 0.045)",t.lineWidth=6,t.beginPath(),t.moveTo(-3,15),t.lineTo(15,-3),t.stroke(),Yt=e.createPattern(r,"repeat"),Yt):null},cn=(e,r,t,n,o,s,a,l=!1)=>{if(e.strokeStyle=a.colors.border,s?e.fillStyle=a.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=a.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,fe),l&&!s){const d=vs(e);d&&(e.fillStyle=d,e.fillRect(r,t,n,fe))}e.strokeRect(r+.5,t+.5,n,fe)},ln=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Ae},xs=(e,r,t,n,o,s=[])=>{for(let a=0;a<r;a++){const l=ln(a,s);for(let d=0;d<=t;d++){const c=P(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(d,"days"),u=c.isSame(P(),"day"),h=c.isBefore(P(),"day");cn(e,d*Se,a*fe+l,Se,an(c),u,o,h)}}},bs=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},ws=(e,r,t,n,o,s=[])=>{let a=0,l=-(n.dayOfMonth-1)*Pe;const d=r*fe+s.length*Ae;for(let c=0;c<=t;c++){const h=P(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(c,"weeks").isSame(P(),"week");for(let x=0;x<r;x++){const M=ln(x,s);cn(e,a,x*fe+M,at,!0,h,o)}a+=at}for(let c=0;c<t;c++){const u=gr(n,c)*Pe;bs(e,l,d,o),l+=u}},Ss=(e,r,t,n,o,s=[])=>{const a=P(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let l=0;l<r;l++){const d=ln(l,s);for(let c=0;c<=t;c++){let u;c===Math.floor(t/2)?u=P():c>Math.floor(t/2)?u=P().add(c-Math.floor(t/2),"hours"):u=P().subtract(Math.floor(t/2)-l,"hours");const h=a.isSame(P(),"day")&&u.isSame(P(),"hour");cn(e,c*ke+ke/2-.5,l*fe+d,ke,an(u),h,o)}}},Cs=(e,r,t,n,o=!1)=>{const s=t*fe+r*Ae,a=e.canvas.width;e.fillStyle=o?n.colors.subcontractBorder+"40":n.mode==="dark"?n.colors.primary+"80":n.colors.primary,e.fillRect(0,s,a,Ae)},Ms=(e,r,t,n,o,s,a=[],l=-1)=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(cr)){switch(r){case 0:ws(e,t,n,o,s,a);break;case 1:xs(e,t,n,o,s,a);break;case 2:Ss(e,t,n,o,s,a);break}for(let c=0;c<a.length;c++)Cs(e,c,a[c],s,a[c]===l)}};var dn={},ks={get exports(){return dn},set exports(e){dn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t="week",n="year";return function(o,s,a){var l=s.prototype;l.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var u=a(this).startOf(n).add(1,n).date(c),h=a(this).endOf(t);if(u.isBefore(h))return 1}var x=a(this).startOf(n).date(c).startOf(t).subtract(1,"millisecond"),M=this.diff(x,t,!0);return M<0?a(this).startOf("week").week():Math.ceil(M)},l.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(ks);const $s=dn;var un={},Ds={get exports(){return un},set exports(e){un=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?a:this.add(s-a,"day")}}})})(Ds);const Es=un;var fn={},_s={get exports(){return fn},set exports(e){fn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t="day";return function(n,o,s){var a=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return a(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var u,h,x,M,y=a(this),k=(u=this.isoWeekYear(),h=this.$u,x=(h?s.utc:s)().year(u).startOf("year"),M=4-x.isoWeekday(),x.isoWeekday()>4&&(M+=7),x.add(M,t));return y.diff(k,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var d=l.startOf;l.startOf=function(c,u){var h=this.$utils(),x=!!h.u(u)||u;return h.p(c)==="isoweek"?x?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(c,u)}}})})(_s);const Ts=fn;var hn={},As={get exports(){return hn},set exports(e){hn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n,o){n.prototype.isBetween=function(s,a,l,d){var c=o(s),u=o(a),h=(d=d||"()")[0]==="(",x=d[1]===")";return(h?this.isAfter(c,l):!this.isBefore(c,l))&&(x?this.isBefore(u,l):!this.isAfter(u,l))||(h?this.isBefore(c,l):!this.isAfter(c,l))&&(x?this.isAfter(u,l):!this.isBefore(u,l))}}})})(As);const Ps=hn;var pn={},Os={get exports(){return pn},set exports(e){pn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){var t,n,o=1e3,s=6e4,a=36e5,l=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,u=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,x={years:c,months:u,days:l,hours:a,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},M=function(f){return f instanceof Y},y=function(f,v,C){return new Y(f,C,v.$l)},k=function(f){return n.p(f)+"s"},g=function(f){return f<0},N=function(f){return g(f)?Math.ceil(f):Math.floor(f)},V=function(f){return Math.abs(f)},I=function(f,v){return f?g(f)?{negative:!0,format:""+V(f)+v}:{negative:!1,format:""+f+v}:{negative:!1,format:""}},Y=function(){function f(C,E,w){var D=this;if(this.$d={},this.$l=w,C===void 0&&(this.$ms=0,this.parseFromMilliseconds()),E)return y(C*x[k(E)],this);if(typeof C=="number")return this.$ms=C,this.parseFromMilliseconds(),this;if(typeof C=="object")return Object.keys(C).forEach(function(A){D.$d[k(A)]=C[A]}),this.calMilliseconds(),this;if(typeof C=="string"){var X=C.match(h);if(X){var J=X.slice(2).map(function(A){return A!=null?Number(A):0});return this.$d.years=J[0],this.$d.months=J[1],this.$d.weeks=J[2],this.$d.days=J[3],this.$d.hours=J[4],this.$d.minutes=J[5],this.$d.seconds=J[6],this.calMilliseconds(),this}}return this}var v=f.prototype;return v.calMilliseconds=function(){var C=this;this.$ms=Object.keys(this.$d).reduce(function(E,w){return E+(C.$d[w]||0)*x[w]},0)},v.parseFromMilliseconds=function(){var C=this.$ms;this.$d.years=N(C/c),C%=c,this.$d.months=N(C/u),C%=u,this.$d.days=N(C/l),C%=l,this.$d.hours=N(C/a),C%=a,this.$d.minutes=N(C/s),C%=s,this.$d.seconds=N(C/o),C%=o,this.$d.milliseconds=C},v.toISOString=function(){var C=I(this.$d.years,"Y"),E=I(this.$d.months,"M"),w=+this.$d.days||0;this.$d.weeks&&(w+=7*this.$d.weeks);var D=I(w,"D"),X=I(this.$d.hours,"H"),J=I(this.$d.minutes,"M"),A=this.$d.seconds||0;this.$d.milliseconds&&(A+=this.$d.milliseconds/1e3);var _=I(A,"S"),O=C.negative||E.negative||D.negative||X.negative||J.negative||_.negative,B=X.format||J.format||_.format?"T":"",L=(O?"-":"")+"P"+C.format+E.format+D.format+B+X.format+J.format+_.format;return L==="P"||L==="-P"?"P0D":L},v.toJSON=function(){return this.toISOString()},v.format=function(C){var E=C||"YYYY-MM-DDTHH:mm:ss",w={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return E.replace(d,function(D,X){return X||String(w[D])})},v.as=function(C){return this.$ms/x[k(C)]},v.get=function(C){var E=this.$ms,w=k(C);return w==="milliseconds"?E%=1e3:E=w==="weeks"?N(E/x[w]):this.$d[w],E===0?0:E},v.add=function(C,E,w){var D;return D=E?C*x[k(E)]:M(C)?C.$ms:y(C,this).$ms,y(this.$ms+D*(w?-1:1),this)},v.subtract=function(C,E){return this.add(C,E,!0)},v.locale=function(C){var E=this.clone();return E.$l=C,E},v.clone=function(){return y(this.$ms,this)},v.humanize=function(C){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!C)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},f}();return function(f,v,C){t=C,n=C().$utils(),C.duration=function(D,X){var J=C.locale();return y(D,{$l:J},X)},C.isDuration=M;var E=v.prototype.add,w=v.prototype.subtract;v.prototype.add=function(D,X){return M(D)&&(D=D.asMilliseconds()),E.bind(this)(D,X)},v.prototype.subtract=function(D,X){return M(D)&&(D=D.asMilliseconds()),w.bind(this)(D,X)}}})})(Os);const Is=pn;var Ys="Expected a function",yr=0/0,Ls="[object Symbol]",Ns=/^\s+|\s+$/g,Fs=/^[-+]0x[0-9a-f]+$/i,Bs=/^0b[01]+$/i,Hs=/^0o[0-7]+$/i,zs=parseInt,Ws=typeof Me=="object"&&Me&&Me.Object===Object&&Me,js=typeof self=="object"&&self&&self.Object===Object&&self,Zs=Ws||js||Function("return this")(),Vs=Object.prototype,Gs=Vs.toString,Xs=Math.max,Us=Math.min,gn=function(){return Zs.Date.now()};function Ks(e,r,t){var n,o,s,a,l,d,c=0,u=!1,h=!1,x=!0;if(typeof e!="function")throw new TypeError(Ys);r=vr(r)||0,mn(t)&&(u=!!t.leading,h="maxWait"in t,s=h?Xs(vr(t.maxWait)||0,r):s,x="trailing"in t?!!t.trailing:x);function M(v){var C=n,E=o;return n=o=void 0,c=v,a=e.apply(E,C),a}function y(v){return c=v,l=setTimeout(N,r),u?M(v):a}function k(v){var C=v-d,E=v-c,w=r-C;return h?Us(w,s-E):w}function g(v){var C=v-d,E=v-c;return d===void 0||C>=r||C<0||h&&E>=s}function N(){var v=gn();if(g(v))return V(v);l=setTimeout(N,k(v))}function V(v){return l=void 0,x&&n?M(v):(n=o=void 0,a)}function I(){l!==void 0&&clearTimeout(l),c=0,n=d=o=l=void 0}function Y(){return l===void 0?a:V(gn())}function f(){var v=gn(),C=g(v);if(n=arguments,o=this,d=v,C){if(l===void 0)return y(d);if(h)return l=setTimeout(N,r),M(d)}return l===void 0&&(l=setTimeout(N,r)),a}return f.cancel=I,f.flush=Y,f}function mn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function qs(e){return!!e&&typeof e=="object"}function Js(e){return typeof e=="symbol"||qs(e)&&Gs.call(e)==Ls}function vr(e){if(typeof e=="number")return e;if(Js(e))return yr;if(mn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=mn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ns,"");var t=Bs.test(e);return t||Hs.test(e)?zs(e.slice(2),t?2:8):Fs.test(e)?yr:+e}var yn=Ks;const Lt=[0,1,2];var wt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(wt||{});const xr=e=>Lt.includes(e),dt=e=>{var n;const t=(((n=document.getElementById(Be))==null?void 0:n.clientWidth)||0)-_e;switch(e){case 1:return Math.ceil(t/Se)*lt;case 2:return Math.ceil(t/ke)*lt;default:return Math.ceil(t/at)*lt}},Qs=e=>dt(e)/lt,Nt=(e,r)=>{const t=dt(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},Rs=(e,r)=>{const t=Nt(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},vn=()=>{var t;return((((t=document.getElementById(Be))==null?void 0:t.clientWidth)||0)-_e)*lt},br=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:P(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});P.extend($s),P.extend(Es),P.extend(Ts),P.extend(Ps),P.extend(Is);const ei=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=P(),onRangeChange:s,handleToggleDisplayActiveUnits:a,onClearFilterData:l,toolbarActions:d})=>{const{zoom:c,maxRecordsPerPage:u=50}=n,[h,x]=p.useState(c),[M,y]=p.useState(P()),[k,g]=p.useState(!1),[N,V]=p.useState(dt(h)),I=Lt[h]!==Lt[Lt.length-1],Y=h!==0,f=p.useMemo(()=>Rs(M,h),[M,h]),v=Nt(M,h).startDate,C=P(v).dayOfYear(),E=mr(v),w=p.useRef(null),D=p.useRef(!1),X=p.useRef(null),[J,A]=p.useState([{x:0,y:0}]),_=p.useCallback((S,G="auto")=>{var W,m,q,T;const K=vn();switch(S){case"back":return(W=w.current)==null?void 0:W.scrollTo({behavior:G,left:K/3});case"forward":return(m=w.current)==null?void 0:m.scrollTo({behavior:G,left:K/3});case"middle":{const j=K/lt/4;return(q=w.current)==null?void 0:q.scrollTo({behavior:G,left:K/2-j})}default:return(T=w.current)==null?void 0:T.scrollTo({behavior:G,left:K/2})}},[]),O=S=>{A(S)},B=p.useCallback(S=>{const G=Qs(h);let K;switch(h){case 0:K=G*7;break;case 1:K=G;break;case 2:K=Math.ceil(G/It);break}yn(()=>{switch((S==="forward"||S==="back")&&(D.current=!0),X.current=S,S){case"back":y(m=>m.subtract(K,"days"));break;case"forward":y(m=>m.add(K,"days"));break;case"middle":y(P());break}s==null||s(f)},300)()},[s,f,h]);p.useEffect(()=>{X.current&&(_(X.current),X.current=null)},[M,_]),p.useEffect(()=>{w.current=document.getElementById(Be),V(dt(h))},[h]),p.useEffect(()=>{const S=()=>V(dt(h));return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[h]),p.useEffect(()=>{s==null||s(f)},[s,f]),p.useEffect(()=>{g(!1)},[o]),p.useEffect(()=>{k||(_("middle"),g(!0),y(o))},[o,k,_]);const L=()=>{t||(y(S=>h===2?S.add(ir,"hours"):S.add(ur,"weeks")),s==null||s(f))},U=p.useCallback(()=>{t||B("forward")},[t,B]),Z=()=>{t||(y(S=>h===2?S.subtract(ir,"hours"):S.subtract(ur,"weeks")),s==null||s(f))},ee=p.useCallback(()=>{!k||t||B("back")},[k,t,B]),ie=p.useCallback(()=>{t||(X.current="middle",y(P()),s==null||s(f))},[t,s,f]),F=p.useCallback(S=>{if(t)return;const G=P(S).startOf("day");G.isValid()&&(X.current="middle",y(G),s==null||s(f))},[t,s,f]),H=()=>re(h+1),R=()=>re(h-1),re=S=>{xr(S)&&(x(S),V(dt(S)),s==null||s(f))},$=()=>a==null?void 0:a(),{Provider:z}=br;return i.jsx(z,{value:{data:e,config:n,handleGoNext:L,handleScrollNext:U,handleGoPrev:Z,handleScrollPrev:ee,handleGoToday:ie,goToDate:F,zoomIn:H,zoomOut:R,setZoom:re,zoom:h,isNextZoom:I,isPrevZoom:Y,date:M,isLoading:t,cols:N,startDate:E,dayOfYear:C,toggleDisplayActiveUnits:$,tilesCoords:J,updateTilesCoords:O,recordsThreshold:u,onClearFilterData:l,suppressNextSlideRef:D,toolbarActions:d},children:r})},He=()=>p.useContext(br),wr=(e,r,t)=>{e.canvas.width=r*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=r+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},Sr=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*fe+n*Ae;if(e>=s+Ae)n++;else if(e>=s)return o*fe+n*Ae-n*Ae}return t-n*Ae},ti=5,Cr=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>ti},ut=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},ni=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:a={},gridRef:l,separatorRowIndices:d=[]})=>{const c=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(z=>({...z,data:[z.data]})):r:e,{enabled:u=!0,isDraggable:h,resourceOnly:x=!1,isValidDrop:M}=a,[y,k]=p.useState("idle"),[g,N]=p.useState(null),[V,I]=p.useState({x:0,y:0}),[Y,f]=p.useState({width:0,height:48}),[v,C]=p.useState(null),[E,w]=p.useState(!0),D=p.useRef({x:0,y:0}),X=p.useRef({x:0,y:0}),J=p.useRef({x:0,y:0}),A=p.useRef(null),_=p.useRef(null),O=p.useRef(0),B=p.useRef(null),L=p.useCallback(z=>!u||z.draggable===!1?!1:h?h(z):!0,[u,h]),U=p.useCallback((z,S)=>{const G=Sr(S,d),K=Math.floor(G/fe);let W;switch(t){case 0:W=Pe*7;break;case 1:W=Se;break;case 2:W=ke;break;default:W=Se}const m=Math.floor(z/W);let q;const T=P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:q=T.add(m*7,"days").toDate();break;case 1:q=T.add(m,"days").toDate();break;case 2:q=T.add(m,"hours").toDate();break;default:q=T.toDate()}return{snappedDate:q,snappedResourceIndex:K}},[t,n,d]),Z=p.useCallback((z,S,G,K)=>{const W=[],m=S.getTime(),q=G.getTime(),T=c.find(oe=>oe.id===K);if(!T)return W;const j=[];for(const oe of T.data)Array.isArray(oe)?j.push(...oe):j.push(oe);for(const oe of j){if(oe.segmentId===z.segmentId)continue;const Q=oe.startDate.getTime(),le=oe.endDate.getTime();if(m>=Q&&m<le||q>Q&&q<=le||m<=Q&&q>=le){const de=new Date(Math.max(m,Q)),pe=new Date(Math.min(q,le)),we=pe.getTime()-de.getTime();W.push({event:oe,conflictStart:de,conflictEnd:pe,overlapDuration:we})}}return W},[c]),ee=p.useCallback((z,S,G,K)=>{const W=[],m=S.getTime(),q=G.getTime(),T=P(S).format("YYYY-MM-DD"),j=c.find(Q=>Q.id===K);if(!j)return W;const oe=[];for(const Q of j.data)Array.isArray(Q)?oe.push(...Q):oe.push(Q);for(const Q of oe){if(Q.segmentId===z.segmentId)continue;const le=Q.startDate.getTime(),ue=Q.endDate.getTime(),de=P(Q.startDate).format("YYYY-MM-DD"),pe=P(Q.endDate).format("YYYY-MM-DD"),we=P(G).format("YYYY-MM-DD");if(!(de===T||pe===T||de===we||pe===we||P(Q.startDate).isBefore(S,"day")&&P(Q.endDate).isAfter(G,"day"))||m>=le&&m<ue||q>le&&q<=ue||m<=le&&q>=ue)continue;let te,ne;ue<=m?(te=m-ue,ne="before"):(te=le-q,ne="after"),W.push({event:Q,timeGap:te,position:ne})}return W.sort((Q,le)=>Q.timeGap-le.timeGap)},[c]),ie=p.useCallback((z,S,G)=>{const K=U(S,G);let W,m;if(x)W=z.startDate,m=z.endDate;else{const ue=P(z.endDate).diff(z.startDate);W=K.snappedDate,m=P(W).add(ue,"milliseconds").toDate()}let q=0,T="",j;for(const ue of e){const de=Math.max(ue.data.length,1);if(K.snappedResourceIndex<q+de){T=ue.id,j=ue.capacity;break}q+=de}if(!T)return null;let oe=!0;j!==void 0&&z.totalPassengers!==void 0&&(oe=z.totalPassengers<=j);const Q=Z(z,W,m,T),le=Q.length===0?ee(z,W,m,T):[];return{startDate:W,endDate:m,resourceId:T,resourceIndex:K.snappedResourceIndex,resourceCapacity:j,hasCapacity:oe,conflicts:Q,hasConflict:Q.length>0,nearbyEvents:le}},[U,e,x,Z,ee]),F=p.useCallback((z,S)=>{if(!s)return;const G=Date.now();if(G-O.current<100)return;O.current=G;const K={event:z,currentStartDate:S.startDate,currentEndDate:S.endDate,currentResourceId:S.resourceId,conflicts:S.conflicts};s(K)},[s]),H=p.useCallback((z,S)=>{if(!L(z)||!l.current)return;S.preventDefault(),S.stopPropagation();const G=S.target.closest('[style*="left"]');let K=0,W=0;G&&G.style.left&&G.style.top&&(K=parseInt(G.style.left),W=parseInt(G.style.top));const m=ut(S.clientX,S.clientY,l.current);D.current={x:K,y:W},X.current={x:S.clientX,y:S.clientY},J.current={x:m.x-K,y:20},B.current={startDate:z.startDate,endDate:z.endDate,resourceId:""};for(const j of e){for(const oe of j.data)if(oe.some(Q=>Q.segmentId===z.segmentId)){B.current.resourceId=j.id;break}if(B.current.resourceId)break}N(z),k("potential"),I({x:K,y:W});let q=100,T=48;if(G){const j=G.getBoundingClientRect();q=j.width,T=j.height}f({width:q,height:T})},[L,l,e,t]),R=p.useCallback(z=>{if(!l.current)return;let S=l.current;for(;S&&S!==document.body;){const Q=window.getComputedStyle(S);if(S.scrollHeight>S.clientHeight&&(Q.overflowY==="auto"||Q.overflowY==="scroll"||Q.overflow==="auto"||Q.overflow==="scroll"))break;S=S.parentElement}(!S||S===document.body)&&(S=document.documentElement);const G=S.getBoundingClientRect(),K=z.clientY,W=50,m=12,q=K-G.top,T=G.bottom-K;let j=!1,oe=0;q<W&&q>0?(j=!0,oe=-m*(1-q/W)):T<W&&T>0&&(j=!0,oe=m*(1-T/W)),j?(_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>{S.scrollTop+=oe,y==="dragging"&&R(z)})):_.current&&(cancelAnimationFrame(_.current),_.current=null)},[l,y]),re=p.useCallback(z=>{if(y==="idle"||y==="animating"||!g||!l.current)return;const S={x:z.clientX,y:z.clientY};if(y==="potential")if(Cr(X.current,S))k("dragging");else return;R(z);const G=ut(z.clientX,z.clientY,l.current);A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>{const K={x:G.x-J.current.x,y:G.y-J.current.y};I(K);const W=ie(g,G.x,G.y);if(W&&M){const m={event:g,currentStartDate:W.startDate,currentEndDate:W.endDate,currentResourceId:W.resourceId,conflicts:W.conflicts};W.hasConflict=!M(m)}if(C(W),W){const m=W.hasCapacity!==!1;w(m),F(g,W)}})},[y,g,l,ie,F,M,R]),$=p.useCallback(async z=>{if(y==="idle"||y==="animating")return;const S={x:z.clientX,y:z.clientY};if(!Cr(X.current,S)||y==="potential"){k("idle"),N(null),C(null);return}if(!g||!v||!B.current){k("idle"),N(null),C(null);return}if(v.hasCapacity===!1){w(!1),k("animating"),I(D.current),setTimeout(()=>{k("idle"),N(null),C(null),w(!0)},300);return}const K={event:g,originalStartDate:B.current.startDate,originalEndDate:B.current.endDate,originalResourceId:B.current.resourceId,newStartDate:v.startDate,newEndDate:v.endDate,newResourceId:v.resourceId,hasConflict:v.hasConflict,conflicts:v.conflicts};let W=!0;if(o)try{const m=o(K);W=m instanceof Promise?await m:m}catch{W=!1}W?(w(!0),k("idle"),N(null),C(null)):(w(!1),k("animating"),I(D.current),setTimeout(()=>{k("idle"),N(null),C(null),w(!0)},300))},[y,g,v,o,M]);return p.useEffect(()=>{if(y==="potential"||y==="dragging"){const z=G=>re(G),S=G=>$(G);return document.addEventListener("mousemove",z),document.addEventListener("mouseup",S),()=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",S)}}else return()=>{}},[y,re,$]),p.useEffect(()=>()=>{A.current&&(cancelAnimationFrame(A.current),A.current=null),_.current&&(cancelAnimationFrame(_.current),_.current=null)},[]),p.useEffect(()=>{(y==="idle"||y==="animating")&&(A.current&&(cancelAnimationFrame(A.current),A.current=null),_.current&&(cancelAnimationFrame(_.current),_.current=null))},[y]),p.useEffect(()=>{(y==="dragging"||y==="potential")&&(y==="dragging"?(k("animating"),I(D.current),setTimeout(()=>{k("idle"),N(null),C(null)},300)):(k("idle"),N(null),C(null)))},[t]),p.useEffect(()=>{if((y==="dragging"||y==="potential")&&g){let z=!1;for(const S of e){for(const G of S.data)if(G.some(K=>K.segmentId===g.segmentId)){z=!0;break}if(z)break}z||(y==="dragging"?(k("animating"),I(D.current),setTimeout(()=>{k("idle"),N(null),C(null)},300)):(k("idle"),N(null),C(null)))}},[e,y,g]),{dragState:y,draggedEvent:g,ghostPosition:V,ghostDimensions:Y,dropTarget:v,isValidDrop:E,handleDragStart:H,isDraggable:L,draggingEventId:(g==null?void 0:g.segmentId)||null,resourceOnly:x}},ri=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:a={},gridRef:l,isDragging:d,separatorRowIndices:c=[]})=>{const{enabled:u=!1,isSelectable:h}=a,x=u&&!!o,M=p.useCallback(m=>{let q=0;for(const T of c)T<=m&&q++;return m*fe+q*Ae},[c]),[y,k]=p.useState("idle"),[g,N]=p.useState(null),[V,I]=p.useState(null),[Y,f]=p.useState(null),[v,C]=p.useState(!1),[E,w]=p.useState([]),[D,X]=p.useState(!1),J=p.useRef(null),A=p.useRef(null),_=p.useRef(null),O=p.useRef(null),B=p.useCallback(()=>{switch(t){case 0:return Pe*7;case 1:return Se;case 2:return ke;default:return Se}},[t]),L=p.useCallback(m=>{const q=B(),T=Math.floor(m/q),j=P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return j.add(T*7,"days").toDate();case 1:return j.add(T,"days").toDate();case 2:return j.add(T,"hours").toDate();default:return j.toDate()}},[t,n,B]),U=p.useCallback(m=>{const q=Sr(m,c),T=Math.floor(q/fe);let j=0;for(const oe of e){const Q=Math.max(oe.data.length,1);if(T<j+Q)return{resourceId:oe.id,resourceIndex:T,resourceLabel:oe.label};j+=Q}return null},[e,c]),Z=p.useCallback(m=>{const q=B();return Math.floor(m/q)*q},[B]),ee=p.useCallback((m,q,T,j=[])=>{const oe=[],le=(r||e).find(pe=>pe.id===m),ue=q.getTime(),de=T.getTime();if(le){const pe=le.data[0],we=pe&&Array.isArray(pe)?le.data.flat():le.data;for(const xe of we){const ce=new Date(xe.startDate).getTime(),te=new Date(xe.endDate).getTime();if(ue<te&&de>ce){const ne=new Date(Math.max(ue,ce)),se=new Date(Math.min(de,te)),he=se.getTime()-ne.getTime();oe.push({event:xe,conflictStart:ne,conflictEnd:se,overlapDuration:he})}}}for(const pe of j){if(pe.resourceId!==m)continue;const we=pe.startDate.getTime(),xe=pe.endDate.getTime();if(ue<xe&&de>we){const ce=new Date(Math.max(ue,we)),te=new Date(Math.min(de,xe)),ne=te.getTime()-ce.getTime(),se={segmentId:`pending-${pe.startDate.getTime()}`,reservationId:`pending-${pe.startDate.getTime()}`,startDate:pe.startDate,endDate:pe.endDate,occupancy:0,title:`New Event (${pe.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};oe.push({event:se,conflictStart:ce,conflictEnd:te,overlapDuration:ne})}}return oe},[e,r]),ie=p.useCallback(m=>{if(!x||d||!l.current||m.button!==0)return;const q=m.target;if(q.closest("[data-segment-id]")||q.closest("[data-multi-select-ui]"))return;const T=ut(m.clientX,m.clientY,l.current),j=U(T.y);if(!j)return;J.current={x:m.clientX,y:m.clientY},A.current=j.resourceIndex;const oe=Z(T.x),Q=B(),le=M(j.resourceIndex);N(T),I(T),f({x:oe,y:le,width:Q,height:fe}),k("selecting")},[x,d,l,U,Z,B,M]),F=p.useCallback(m=>{I(m);const q=B(),T=Z((g==null?void 0:g.x)||0),j=Z(m.x),oe=M(A.current),Q=Math.min(T,j),le=Math.max(T,j)+q;f({x:Q,y:oe,width:le-Q,height:fe})},[g,B,Z,M]),H=p.useCallback(()=>{O.current&&(cancelAnimationFrame(O.current),O.current=null)},[]),R=p.useCallback((m,q)=>{const T=document.getElementById(Be);if(!T||!l.current)return;const j=T.getBoundingClientRect(),oe=60,Q=12,le=m-(j.left+_e),ue=j.right-m;let de=0;le<oe?de=-Q*(1-Math.max(0,le)/oe):ue<oe&&(de=Q*(1-Math.max(0,ue)/oe)),H(),de!==0&&(O.current=requestAnimationFrame(()=>{T.scrollLeft+=de,F(ut(m,q,l.current)),R(m,q)}))},[l,F,H]),re=p.useCallback(m=>{if(y!=="selecting"||!l.current||A.current===null)return;const q=ut(m.clientX,m.clientY,l.current);_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>F(q)),R(m.clientX,m.clientY)},[y,l,F,R]),$=p.useCallback(m=>{if(y!=="selecting")return;if(H(),!l.current||!g||!J.current){k("idle"),N(null),I(null),f(null);return}const q=ut(m.clientX,m.clientY,l.current),T=U(g.y);if(!T){k("idle"),N(null),I(null),f(null);return}const j=Math.min(g.x,q.x),oe=Math.max(g.x,q.x),Q=L(j),le=L(oe),ue=P(le).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h(T.resourceId,Q,ue)){k("idle"),N(null),I(null),f(null);return}const de=ee(T.resourceId,Q,ue,E),pe=de.length>0,we={startDate:Q,endDate:ue,resourceId:T.resourceId,resourceLabel:T.resourceLabel,zoomLevel:t,hasConflict:pe,conflicts:pe?de:void 0};if(v)w(xe=>[...xe,we]),X(!0);else if(o){const xe=o(we),ce=te=>{te!=null&&te.continueMultiSelect&&(C(!0),w([we]),X(!0))};xe instanceof Promise?xe.then(ce):ce(xe)}k("idle"),N(null),I(null),f(null),J.current=null,A.current=null},[y,l,g,U,L,h,o,t,v,ee,E,H]),z=p.useCallback(()=>{if(E.length>0&&s){X(!1);const m=s(E),q=T=>{T!=null&&T.continueMultiSelect?X(!0):(w([]),C(!1),X(!1))};m instanceof Promise?m.then(q):q(m);return}w([]),C(!1),X(!1)},[E,s]),S=p.useCallback(()=>{w([]),C(!1),X(!1)},[]),G=p.useCallback(m=>{w(q=>{const T=q.filter((j,oe)=>oe!==m);return T.length===0&&(C(!1),X(!1)),T})},[]),K=p.useCallback((m,q)=>{w(T=>T.map((j,oe)=>{if(oe!==m)return j;const Q={...j,...q},le=T.filter((de,pe)=>pe!==m),ue=ee(Q.resourceId,Q.startDate,Q.endDate,le);return{...Q,hasConflict:ue.length>0,conflicts:ue.length>0?ue:void 0}}))},[ee]),W=p.useCallback(m=>{m.key==="Escape"&&(y==="selecting"?(H(),k("idle"),N(null),I(null),f(null),J.current=null,A.current=null):v&&E.length>0&&(w([]),C(!1),X(!1)))},[y,v,E.length,H]);return p.useEffect(()=>{if(y==="selecting")return document.addEventListener("mousemove",re),document.addEventListener("mouseup",$),document.addEventListener("keydown",W),()=>{document.removeEventListener("mousemove",re),document.removeEventListener("mouseup",$),document.removeEventListener("keydown",W)}},[y,re,$,W]),p.useEffect(()=>{if(v&&E.length>0)return document.addEventListener("keydown",W),()=>{document.removeEventListener("keydown",W)}},[v,E.length,W]),p.useEffect(()=>()=>{_.current&&(cancelAnimationFrame(_.current),_.current=null),H()},[H]),p.useEffect(()=>{d&&y==="selecting"&&(H(),k("idle"),N(null),I(null),f(null),J.current=null,A.current=null)},[d,y,H]),{selectionState:y,selectionStart:g,selectionEnd:V,selectionBox:Y,handleGridMouseDown:ie,isEnabled:x,pendingSelections:E,confirmSelections:z,clearSelections:S,removeSelection:G,updateSelection:K,isMultiSelectActive:v,hasUnconfirmedSelections:D}},oi=b.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,si=b.div`
  position: relative;
`,ii=b.canvas``;b.canvas``;const ai=b.canvas`
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
`,ci=p.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onEventDrop:a,onEventDrag:l,draggableConfig:d,onDragStateChange:c,onTimeRangeSelect:u,onMultiTimeRangeSelect:h,clickToAddConfig:x,separatorRowIndices:M=[],subcontractSeparatorRow:y=-1},k){const g=p.useRef(!1),{handleScrollNext:N,handleScrollPrev:V,date:I,isLoading:Y,cols:f,startDate:v,suppressNextSlideRef:C}=He(),E=p.useRef(null),w=p.useRef(null),D=p.useRef(t),X=p.useRef(I),J=p.useRef(null),A=p.useRef(null),_=p.useRef(null),O=p.useRef(null),[B,L]=p.useState(!1),U=Ot(),{dragState:Z,draggedEvent:ee,ghostPosition:ie,ghostDimensions:F,dropTarget:H,isValidDrop:R,handleDragStart:re,isDraggable:$,draggingEventId:z,resourceOnly:S}=ni({data:n,baseData:o||n,zoom:r,startDate:v,onEventDrop:a,onEventDrag:l,draggableConfig:d,gridRef:O,separatorRowIndices:M});p.useEffect(()=>{const ne=Z==="dragging"||Z==="potential";L(ne),c&&c(ne)},[Z,c]);const G=p.useRef(!1),K=p.useRef(I),W=p.useRef(null);p.useEffect(()=>{var Te;const ne=K.current;if(K.current=I,!G.current){G.current=!0;return}if(C!=null&&C.current){C.current=!1;return}const se=O.current;if(!(se!=null&&se.animate))return;const he=I.isAfter(ne)?48:-48;(Te=W.current)==null||Te.cancel(),se.style.willChange="transform";const be=se.animate([{transform:`translateX(${he}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),$e=()=>{se.style.willChange=""};be.onfinish=$e,be.oncancel=$e,W.current=be},[I,C]);const{selectionState:m,selectionBox:q,handleGridMouseDown:T,pendingSelections:j,confirmSelections:oe,clearSelections:Q,removeSelection:le,updateSelection:ue,isMultiSelectActive:de,hasUnconfirmedSelections:pe}=ri({data:n,baseData:o||n,zoom:r,startDate:v,onTimeRangeSelect:u,onMultiTimeRangeSelect:h,clickToAddConfig:x,gridRef:O,isDragging:B,separatorRowIndices:M}),we=p.useCallback(ne=>{ne.preventDefault()},[]),xe=p.useCallback(ne=>{ne.preventDefault()},[]),ce=M.length*Ae,te=p.useCallback(ne=>{const se=vn(),he=t*fe+1+ce;wr(ne,se,he),Ms(ne,r,t,f,v,U,M,y)},[f,v,t,r,U,M,y,ce]);return p.useEffect(()=>{if(!E.current)return;const ne=E.current.getContext("2d");if(!ne)return;const se=()=>te(ne);return window.addEventListener("resize",se),()=>window.removeEventListener("resize",se)},[te]),p.useEffect(()=>{var Le,Qe;const ne=D.current,se=X.current;if(D.current=t,X.current=I,ne===t||!I.isSame(se,"day")||(Le=window.matchMedia)!=null&&Le.call(window,"(prefers-reduced-motion: reduce)").matches)return;const he=E.current,be=w.current;if(!he||!be)return;const $e=be.getContext("2d");if(!$e)return;be.width=he.width,be.height=he.height,be.style.width=he.style.width,be.style.height=he.style.height,$e.setTransform(1,0,0,1,0,0),$e.clearRect(0,0,be.width,be.height),$e.drawImage(he,0,0),(Qe=J.current)==null||Qe.cancel(),be.style.opacity="1";const Te=be.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease"});Te.onfinish=()=>{be.style.opacity="0"},J.current=Te},[t,I]),p.useEffect(()=>{const ne=E.current;if(!ne)return;ne.style.letterSpacing="1px";const se=ne.getContext("2d");se&&te(se)},[I,t,r,te]),p.useEffect(()=>{if(!A.current)return;const ne=new IntersectionObserver(se=>{se[0].isIntersecting&&!g.current&&(g.current=!0,N(),setTimeout(()=>{g.current=!1},1e3))},{root:document.getElementById(Be)});return ne.observe(A.current),()=>{ne.disconnect()}},[N]),p.useEffect(()=>{if(!_.current)return;const ne=new IntersectionObserver(se=>{se[0].isIntersecting&&!g.current&&(g.current=!0,V(),setTimeout(()=>{g.current=!1},1e3))},{root:document.getElementById(Be),rootMargin:`0px 0px 0px -${_e}px`});return ne.observe(_.current),()=>{ne.disconnect()}},[V]),i.jsxs(oi,{id:cr,children:[i.jsxs(si,{ref:ne=>{typeof k=="function"?k(ne):k&&(k.current=ne),O.current=ne},onMouseDown:T,style:{cursor:u?"crosshair":"default"},children:[i.jsx(Mr,{position:"left",ref:_}),i.jsx(Dn,{isLoading:Y,position:"left"}),i.jsx(ii,{ref:E,onDragStart:we,onDragOver:xe,style:{userSelect:Z==="dragging"?"none":"auto"}}),i.jsx(ai,{ref:w,"aria-hidden":!0}),i.jsx(Ol,{zoom:r,startDate:v}),i.jsx(Wc,{data:n,zoom:r,onTileClick:s,onDragStart:re,isDraggable:$,draggingEventId:z,separatorRowIndices:M}),i.jsx(Mr,{ref:A,position:"right"}),i.jsx(Dn,{isLoading:Y,position:"right"}),(Z==="dragging"||Z==="animating")&&i.jsx(pl,{draggedEvent:ee,ghostPosition:ie,ghostDimensions:F,dropTarget:H,isValidDrop:R,dragState:Z,zoom:r,data:n,resourceOnly:S,separatorRowIndices:M}),i.jsx(yl,{selectionBox:q,isSelecting:m==="selecting"}),de&&j.length>0&&i.jsx(Al,{selections:j,data:n,zoom:r,startDate:v,onRemove:le,onUpdate:ue,separatorRowIndices:M})]}),de&&pe&&j.length>0&&i.jsx(kl,{selections:j,onConfirm:oe,onClear:Q,onRemove:le})]})}),kr=e=>{const r=P.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},$r=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/Ce);t+=o.hours+s,n+=r%Ce,n>=Ce&&(t++,n-=Ce)}),{hours:t,minutes:n}},Dr=(e,r)=>{let t=lr;switch(r){case 0:t=ms;break;case 1:t=lr;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,a=Ce-e.minutes;return a===Ce&&(s++,a=0),{hours:Math.max(0,s),minutes:s<0?0:a}},o=()=>{const s=e.hours-t,a=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:a}};return{free:n(),overtime:o()}},li=(e,r,t)=>{const n=r.isoWeek(),o=e.map(c=>{const u=P(c.startDate).isoWeek(),h=P(c.startDate).isoWeekday(),x=P(c.endDate).isoWeek(),M=P(c.endDate).isoWeekday(),{hours:y,minutes:k}=kr(c.occupancy);if(n===u){const g=(Ve+1-h)*y,N=(Ve+1-h)*k;return{hours:Math.max(0,g),minutes:N}}else if(n===x){const g=M>Ve?Ve*y:M*y,N=M>Ve?Ve*k:M*k;return{hours:g,minutes:N}}else if(P(r).isBetween(c.startDate,c.endDate))return{hours:Ve*y,minutes:Ve*k};return{hours:0,minutes:0}}),{hours:s,minutes:a}=$r(o),{free:l,overtime:d}=Dr({hours:s,minutes:a},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,a)},free:l,overtime:d}},di=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(u=>{const{hours:h,minutes:x}=kr(u.occupancy);return o<=(n?7:5)?{hours:h,minutes:x}:{hours:0,minutes:0}}),{hours:a,minutes:l}=$r(s),{free:d,overtime:c}=Dr({hours:a,minutes:l},t);return{taken:{hours:Math.max(0,a),minutes:Math.max(0,l)},free:d,overtime:c}},ui=(e,r)=>{let t=0;e.forEach(l=>{const d=P(l.startDate).hour(),c=P(l.endDate).hour(),u=r.hour(),h=P(l.endDate).minute(),x=P(l.startDate).minute();d<u&&c>u?t+=Ce:d===u&&c===u&&x&&h?t+=h?h-x:Ce-x:d===u&&c>=u?t+=x?Ce-x:Ce:c===u&&h&&(t+=h)});const n=Math.floor(t/Ce),o=t%Ce,s=n||o?0:1,a=n?0:o?Ce-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:a},overtime:{hours:0,minutes:0}}},fi=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(a=>n===1?P(t).isBetween(a.startDate,a.endDate,"day","[]"):n===2?P(t).isBetween(a.startDate,a.endDate,"hour","[]"):P(a.startDate).isBetween(P(t),P(t).add(6,"days"),"day","[]")||P(t).isBetween(P(a.startDate),P(a.endDate),"day","[]"));switch(n){case 1:return di(s,t,n,o);case 2:return ui(s,t);default:return li(s,t,n)}},hi=(e,r,t,n,o,s,a=!1)=>{let l="weeks",d;switch(s){case 0:l="weeks",d=at;break;case 1:l="days",d=Se;break;case 2:l="hours",d=ke;break}const c=Math.ceil(s===2?(t.x-.5*d)/d:t.x/d),u=P(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(c-1,l),h=Math.ceil(t.y/fe),x=n.findIndex((N,V,I)=>I.slice(0,V+1).reduce((f,v)=>f+v,0)>=h),M=s===2?(c+1)*d:c*d,y=(h-1)*fe+fe,k=fi(o[x],x,u,s,a),g=P(e.startDate).isSame(P(e.endDate),"day");return{coords:{x:M,y},mouseCoords:t,resourceIndex:x,disposition:k,reservationData:{startTime:P(e.startDate).format("hh:mm A"),startDate:P(e.startDate).format("MMM D, YYYY"),endTime:P(e.endDate).format("hh:mm A"),endDate:P(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,departureAddress:e.departureAddress,destinationAddress:e.destinationAddress,returnAddress:e.returnAddress,isOneDayEvent:g,passengers:e.totalPassengers}}};function pi(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function gi(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const u of e)!u.isSubcontract&&u.capacity!=null&&t.add(u.capacity);const n=[...t].sort((u,h)=>u-h);if(n.length<2)return r;const o=Math.min(5,n.length),s=pi(n,o),a=[];let l=0;for(const u of s)a.push({min:n[l],max:n[u-1],values:n.slice(l,u)}),l=u;a.push({min:n[l],max:n[n.length-1],values:n.slice(l)});const d=[],c=new Map;return a.forEach((u,h)=>{const x="__auto_cat_"+h,M=u.min===u.max?u.min+" pax":u.min+"-"+u.max+" pax";d.push({id:x,name:M,minPassengers:u.min,maxPassengers:u.max});for(const y of u.values)c.set(y,x)}),{categories:d,capacityToCategoryId:c}}const mi=(e,r,t,n)=>{const o=[];let s=0,a=[],l=0;return r.length>n?(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=n&&(o.push(a),s+=a.length,a=[],l=0),l++,a.push(u)}),t.slice(s).length<=n&&(a=[],r.slice(s).forEach((d,c)=>{const u={id:e[c+s].id,label:e[c+s].label,data:d,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};a.push(u),c===r.length-s-1&&o.push(a)})),o):(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};a.push(u)}),o.push(a),o)};var xn={},yi={get exports(){return xn},set exports(e){xn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(yi);const vi=xn;var bn={},xi={get exports(){return bn},set exports(e){bn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(xi);const bi=bn,wi=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let a=0;a<o.length;a++){const l=P(t.startDate).startOf("day"),d=P(t.endDate).startOf("day"),c=P(o[a].startDate).startOf("day"),u=P(o[a].endDate).startOf("day");if(l.isBetween(c,u,null,"[]")||d.isBetween(c,u,null,"[]")||l.isBefore(c,"minute")&&d.isAfter(u,"minute")||l.isAfter(c,"minute")&&d.isBefore(u,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};P.extend(vi),P.extend(bi);const Er=new WeakMap,Si=e=>{const r=Er.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const a=P(o.startDate),l=P(s.startDate),d=a.startOf("day").diff(l.startOf("day"),"day");return d!==0?d:a.diff(l)}),n=wi(t);return Er.set(e,n),n},Ci=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const a=Si(s.data);return o[0].push(a),o[1].push(Math.max(a.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},Mi=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,ki=e=>{const{recordsThreshold:r}=He(),[t,n]=p.useState(0),[o,s]=p.useState(0),a=p.useRef(null);p.useEffect(()=>{a.current=document.getElementById(Be)},[]);const{projectsPerPerson:l,rowsPerPerson:d}=p.useMemo(()=>Ci(e),[e]),c=p.useMemo(()=>mi(e,l,d,r),[e,l,r,d]),u=p.useCallback(()=>{c[o].length&&a.current&&(a.current.scroll({top:0}),n(g=>g+c[Math.max(o,0)].length),s(g=>Math.min(g+1,c.length-1)),window.scroll({top:0}))},[o,c]),h=p.useCallback(()=>{c[o].length&&(n(g=>Math.max(g-c[o-1].length,0)),s(g=>Math.max(g-1,0)))},[o,c]),x=p.useCallback(()=>{n(0),s(0)},[]),M=t+c[o].length,y=p.useMemo(()=>d.slice(t,M),[M,d,t]),k=p.useMemo(()=>l.slice(t,M),[M,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:k,rowsPerItem:y,totalRowsPerPage:Mi(c[o]),next:u,previous:h,reset:x}};var wn={},$i={get exports(){return wn},set exports(e){wn=e}};(function(e,r){(function(t,n){e.exports=n()})(Me,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})($i);const Di=wn;var Sn={},Ei={get exports(){return Sn},set exports(e){Sn=e}};(function(e,r){(function(t,n){e.exports=n(Je)})(Me,function(t){function n(x){return x&&typeof x=="object"&&"default"in x?x:{default:x}}var o=n(t);function s(x){return x%10<5&&x%10>1&&~~(x/10)%10!=1}function a(x,M,y){var k=x+" ";switch(y){case"m":return M?"minuta":"minutę";case"mm":return k+(s(x)?"minuty":"minut");case"h":return M?"godzina":"godzinę";case"hh":return k+(s(x)?"godziny":"godzin");case"MM":return k+(s(x)?"miesiące":"miesięcy");case"yy":return k+(s(x)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,u=function(x,M){return c.test(M)?l[x.month()]:d[x.month()]};u.s=d,u.f=l;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:u,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(x){return x+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})(Ei);const _i=Sn;var Cn={},Ti={get exports(){return Cn},set exports(e){Cn=e}};(function(e,r){(function(t,n){e.exports=n(Je)})(Me,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(d,c,u){var h=s[u];return Array.isArray(h)&&(h=h[c?0:1]),h.replace("%d",d)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return o.default.locale(l,null,!0),l})})(Ti);const Ai=Cn;var Mn={},Pi={get exports(){return Mn},set exports(e){Mn=e}};(function(e,r){(function(t,n){e.exports=n(Je)})(Me,function(t){function n(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),a="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,d=function(u,h){return l.test(h)?s[u.month()]:a[u.month()]};d.s=a,d.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:d,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(u){return u+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Pi);const Oi=Mn;var kn={},Ii={get exports(){return kn},set exports(e){kn=e}};(function(e,r){(function(t,n){e.exports=n(Je)})(Me,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return o.default.locale(s,null,!0),s})})(Ii);const Yi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:Di},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:_i},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:kn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:Oi},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:Ai}];class Li{constructor(){io(this,"locales",Yi)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const Ft=new Li,_r=p.createContext({localesData:Ft.getLocales(),currentLocale:Ft.getLocales()[0],setCurrentLocale:()=>{}}),Ni=({children:e,lang:r,translations:t})=>{const[n,o]=p.useState("en"),s=Ft.getLocales(),a=p.useCallback(()=>{const h=s.find(x=>x.id===n);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&P.locale(h.dayjsTranslations),h||s[0]},[n,s]),[l,d]=p.useState(a()),c=h=>{localStorage.setItem("locale",h.translateCode),d(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(M=>M.id===h.id)||Ft.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),x=r??h??"en";localStorage.setItem("locale",x),o(x),d(a())},[a,r]);const{Provider:u}=_r;return i.jsx(u,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},ze=()=>p.useContext(_r).currentLocale.lang,Fi=e=>ae.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},ae.createElement("defs",null,ae.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),ae.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},ae.createElement("stop",{offset:.47,stopColor:"#ccc"}),ae.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),ae.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),ae.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),ae.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),ae.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),ae.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),ae.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),ae.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),ae.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),ae.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),ae.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Bi=b.div`
  height: 440px;
  width: 514px;
  position: relative;
`,Hi=b.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,zi=({onTileClick:e})=>{const{feelingEmpty:r}=ze();return i.jsxs(Bi,{onClick:e,children:[i.jsx(Fi,{}),i.jsx(Hi,{children:r})]})},Wi=b.div`
  position: relative;
  display: flex;
`,ji=b.div`
  position: relative;
  margin-left: ${_e};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Zi=b.div`
  width: calc(${({width:e})=>e}px - ${_e}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${_e}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Vi={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:wt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function Gi(e,r){const t=r?[...r].sort((l,d)=>l.maxPassengers-d.maxPassengers):[],n=[];for(const l of t){const d=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);d.length>0&&n.push({type:"category",category:l,items:d})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?n.push({type:"uncategorized",items:s}):s.length>0&&n.push({type:"uncategorized",items:s});const a=e.filter(l=>l.isSubcontract);return a.length>0&&n.push({type:"subcontract",items:a}),n}const Xi=({data:e,baseData:r,categories:t,onTileClick:n,onItemClick:o,toggleTheme:s,topBarWidth:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:u,onMultiTimeRangeSelect:h,clickToAddConfig:x})=>{const[M,y]=p.useState(Vi),[k,g]=p.useState(e),[N,V]=p.useState(!1),[I,Y]=p.useState(!1),[f,v]=p.useState(""),[C,E]=p.useState(new Set),{zoom:w,startDate:D,isLoading:X,config:{includeTakenHoursOnWeekendsInDayView:J,showTooltip:A,showThemeToggle:_}}=He(),O=p.useRef(null),B=p.useRef(null),[L,U]=p.useState(124),{page:Z,projectsPerPerson:ee,rowsPerItem:ie,currentPageNum:F,pagesAmount:H,next:R,previous:re,reset:$}=ki(k),{effectiveCategories:z,effectivePage:S}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:Z};const te=gi(Z);if(te.categories.length===0)return{effectiveCategories:void 0,effectivePage:Z};const ne=Z.map(se=>{if(se.isSubcontract||se.capacity==null)return se;const he=te.capacityToCategoryId.get(se.capacity);return he?{...se,categoryId:he}:se});return{effectiveCategories:te.categories,effectivePage:ne}},[t,Z]),G=p.useCallback(te=>{E(ne=>{const se=new Set(ne);return se.has(te)?se.delete(te):se.add(te),se})},[]),K=p.useMemo(()=>{const te=[],ne=z?[...z].sort((se,he)=>se.maxPassengers-he.maxPassengers):[];for(const se of ne)S.some(he=>!he.isSubcontract&&he.categoryId===se.id)&&te.push(se.id);return S.some(se=>se.isSubcontract)&&te.push("__subcontract__"),te},[z,S]),W=p.useCallback(()=>{E(new Set)},[]),m=p.useCallback(()=>{E(new Set(K))},[K]),{visiblePage:q,visibleRowsPerItem:T,visibleTotalRows:j,visibleProjectsPerPerson:oe,separatorRowIndices:Q,subcontractSeparatorRow:le}=p.useMemo(()=>{const te=Gi(S,z),ne=((z==null?void 0:z.length)??0)>0,se=new Map;Z.forEach((De,pt)=>se.set(De.id,pt));const he=[],be=[],$e=[],Te=[];let Le=0,Qe=-1;for(const De of te)if(De.type==="subcontract"||De.type==="category"&&ne){const gt=De.type==="subcontract"?"__subcontract__":De.category.id,mt=C.has(gt);if(Te.push(Le),De.type==="subcontract"&&(Qe=Le),!mt)for(const Re of De.items){const Ht=se.get(Re.id)??0,zt=ie[Ht];he.push(Re),be.push(zt),$e.push(ee[Ht]),Le+=zt}}else for(const gt of De.items){const mt=se.get(gt.id)??0,Re=ie[mt];he.push(gt),be.push(Re),$e.push(ee[mt]),Le+=Re}const Ge=be.reduce((De,pt)=>De+pt,0);return{visiblePage:he,visibleRowsPerItem:be,visibleTotalRows:Ge,visibleProjectsPerPerson:$e,separatorRowIndices:Te,subcontractSeparatorRow:Qe}},[S,z,Z,C,ie,ee]),ue=p.useRef(yn((te,ne,se,he,be,$e)=>{if(!O.current)return;const{tile:Te,segmentId:Le}=we(te);if(!Le||!Te){V(!1);return}const Qe=pe(Le,ne),Ge=O.current.getBoundingClientRect(),De=Te.getBoundingClientRect(),pt={x:te.clientX-Ge.left,y:te.clientY-Ge.top},gt={x:te.clientX-Ge.left,y:te.clientY-Ge.top},mt={x:De.left-Ge.left,y:De.top-Ge.top,width:De.width,height:De.height},{coords:{x:Re,y:Ht},resourceIndex:zt,disposition:Il,reservationData:Yl}=hi(Qe,se,pt,he,be,$e,J);y({coords:{x:Re,y:Ht},mouseCoords:gt,resourceIndex:zt,disposition:Il,reservationData:Yl,tileBounds:mt}),V(!0)},4)),de=p.useRef(yn((te,ne)=>{$(),g(te.map(se=>({...se,data:se.data.filter(he=>{const{title:be,description:$e,subtitle:Te}=he;return(be==null?void 0:be.toLowerCase().includes(ne.toLowerCase()))||(Te==null?void 0:Te.toLowerCase().includes(ne.toLowerCase()))||($e==null?void 0:$e.toLowerCase().includes(ne.toLowerCase()))})})).filter(se=>se.data.length>0))},500)),pe=(te,ne)=>{if(te)return ne.flatMap(se=>se.data).find(se=>se.segmentId===te)},we=te=>{if(!te.target)return{tile:null,segmentId:null};const ne=te.target.closest("[data-segment-id]");return ne?{tile:ne,segmentId:ne.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},xe=te=>{const ne=te.target.value;v(ne),de.current.cancel(),ne?de.current(e,ne):($(),g(e))},ce=p.useCallback(()=>{ue.current.cancel(),V(!1)},[]);return p.useEffect(()=>{const te=se=>ue.current(se,e,D,T,oe,w),ne=O.current;if(ne)return ne.addEventListener("mousemove",te),ne.addEventListener("mouseleave",ce),()=>{ne.removeEventListener("mousemove",te),ne.removeEventListener("mouseleave",ce)}},[ue,ce,oe,T,D,w,e]),p.useEffect(()=>{f?(de.current.cancel(),de.current(e,f)):g(e)},[e,f]),p.useLayoutEffect(()=>{const te=B.current;if(!te)return;const ne=()=>U(te.offsetHeight);ne();const se=new ResizeObserver(ne);return se.observe(te),()=>se.disconnect()},[]),i.jsxs(Wi,{children:[i.jsx(Ka,{headerHeight:L,data:S,categories:z,pageNum:F,pagesAmount:H,rows:ie,onLoadNext:R,onLoadPrevious:re,searchInputValue:f,onSearchInputChange:xe,onItemClick:o,collapsedGroups:C,onToggleGroup:G,allGroupIds:K,onExpandAll:W,onCollapseAll:m}),i.jsxs(ji,{children:[i.jsx(Cc,{ref:B,zoom:w,topBarWidth:a,showThemeToggle:_,toggleTheme:s}),e.length?i.jsx(ci,{data:q,baseData:r||e,zoom:w,rows:j,ref:O,onTileClick:n,onEventDrop:l,onEventDrag:d,draggableConfig:c,onDragStateChange:Y,onTimeRangeSelect:u,onMultiTimeRangeSelect:h,clickToAddConfig:x,separatorRowIndices:Q,subcontractSeparatorRow:le}):i.jsx(Zi,{width:a,children:X?i.jsx(Dn,{isLoading:X,position:"left"}):i.jsx(zi,{})}),A&&i.jsx(rl,{tooltipData:M,visible:N&&!I})]})]})},Ui=b.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${_e+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.primary};
`,Tr=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({$at:e})=>e==="end"?"flex-end":"flex-start"};
`,Ki=b.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`,qi=b.div`
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
`,Ji=b.button`
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
`,Qi=b.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin-left: 4px;
  text-transform: capitalize;
  white-space: nowrap;
`,Ri=b.div`
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
`,ea=b.label`
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
`,ta=b.button`
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
`,na=b.span`
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
`,ft=({children:e,sw:r=2})=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:e}),ra=()=>{var r,t;const e=document.getElementById(hr);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(r=e==null?void 0:e.requestFullscreen)==null||r.call(e)},oa=()=>{const{config:e,date:r,zoom:t,handleGoNext:n,handleGoPrev:o,handleGoToday:s,setZoom:a,goToDate:l,toggleDisplayActiveUnits:d,toolbarActions:c}=He();ze();const{filterButtonState:u=-1}=e,h=()=>{var x;(x=document.querySelector(`#${Be} input[placeholder]`))==null||x.focus()};return i.jsxs(Ui,{width:0,children:[i.jsxs(Tr,{$at:"start",children:[i.jsxs(qi,{children:[i.jsx(Ar,{onClick:o,"aria-label":"Anterior",children:i.jsx(ft,{children:i.jsx("path",{d:"m15 18-6-6 6-6"})})}),i.jsx(Ji,{onClick:s,children:"Hoy"}),i.jsx(Ar,{onClick:n,"aria-label":"Siguiente",children:i.jsx(ft,{children:i.jsx("path",{d:"m9 18 6-6-6-6"})})})]}),i.jsx(Qi,{children:r.locale(P.locale()).format("MMMM YYYY")}),i.jsx(Ki,{}),i.jsxs(Ri,{children:[i.jsx("button",{className:t===2?"on":"",onClick:()=>a(2),children:"Día"}),i.jsx("button",{className:t===0?"on":"",onClick:()=>a(0),children:"Semana"}),i.jsx("button",{className:t===1?"on":"",onClick:()=>a(1),children:"Mes"})]}),e.showJumpToDate!==!1&&i.jsxs(ea,{children:[i.jsxs(ft,{children:[i.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),i.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),i.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",i.jsx("input",{type:"date",onChange:x=>x.target.value&&l(x.target.value)})]}),i.jsxs(ta,{onClick:h,children:[i.jsxs(ft,{children:[i.jsx("circle",{cx:"11",cy:"11",r:"7"}),i.jsx("path",{d:"m20 20-3.2-3.2"})]}),"Buscar",i.jsx("span",{className:"k",children:"⌘K"})]})]}),i.jsxs(Tr,{$at:"end",children:[e.showFilterButton!==!1&&u>=0&&i.jsxs(Pr,{$primary:!!u,onClick:d,children:[i.jsx(ft,{children:i.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!u&&i.jsx(na,{children:u})]}),e.showFullscreenButton!==!1&&i.jsxs(Pr,{onClick:ra,children:[i.jsx(ft,{children:i.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]}),c]})]})},sa={add:e=>ae.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>ae.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>ae.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>ae.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>ae.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>ae.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>ae.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>ae.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>ae.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>ae.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>ae.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>ae.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>ae.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>ae.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},ae.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),ae.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ae.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ae.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ae.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ae.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ae.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ae.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),ae.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},$n=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=Ot(),a=sa[e];return a?i.jsx(a,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},ia=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r];b.button`
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
  ${({theme:e,variant:r,disabled:t})=>ia(e,r,t)}
`;const aa=b.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${fr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ie};
`,ca=b.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,la=b.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,da=b.div`
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
`,ua=b.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,fa=b.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,ha=b.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({$sev:e})=>e===2?"#c6483d":e===1?"#d98a22":"#93b1a6"};
`,pa=b.div`
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
`,ga=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,ma=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`,ya=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,va=b.div`
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
`,xa=()=>{const{date:e,zoom:r,data:t,goToDate:n,config:o}=He(),s=ze(),a=p.useRef(null),[l,d]=p.useState(null),c=p.useMemo(()=>Array.from({length:12},(w,D)=>P().month(D).format("MMM").toUpperCase()),[s]),u=p.useMemo(()=>P().startOf("day"),[]),{domainStart:h,domainEnd:x,domainDays:M}=p.useMemo(()=>{const w=u.subtract(3,"month").startOf("month"),D=u.add(9,"month").endOf("month");return{domainStart:w,domainEnd:D,domainDays:D.diff(w,"day")+1}},[u]),y=w=>w.diff(h,"day")/M*100,k=w=>Math.min(100,Math.max(0,w)),g=p.useMemo(()=>{const w=[];let D=h.startOf("month");for(;D.isBefore(x);)w.push(D),D=D.add(1,"month");return w},[h,x]),N=o==null?void 0:o.yearCounts,V=p.useMemo(()=>{const w=Math.ceil(M/7),D=new Array(w).fill(0),X=new Array(w).fill(0),J=Z=>{const ee=Z.diff(h,"day");return ee<0||ee>=M?-1:Math.floor(ee/7)};if(N&&N.length)for(const Z of N){const ee=J(P(Z.date));ee<0||ee>=w||(D[ee]+=Z.count)}else for(const Z of t??[])for(const ee of Z.data??[]){const ie=J(P(ee.startDate));ie<0||ie>=w||(D[ie]+=1)}for(const Z of t??[])for(const ee of Z.data??[]){const ie=J(P(ee.startDate));if(ie<0||ie>=w)continue;const F=ee.readiness==="sin_chofer"?2:ee.readiness==="sin_avisar"?1:0;F>X[ie]&&(X[ie]=F)}const A=D.length?Math.max(...D):0;if(A<=0)return D.map((Z,ee)=>({h:0,sev:X[ee]}));const _=D.filter(Z=>Z>0).sort((Z,ee)=>Z-ee),O=_.length>>1,B=_.length%2?_[O]:(_[O-1]+_[O])/2,L=B>0?A/B:1,U=Math.min(1,Math.max(.45,1/(1+Math.log2(Math.max(1,L)))));return D.map((Z,ee)=>({h:Z>0?Math.min(100,100*Math.pow(Z/A,U)):0,sev:X[ee]}))},[t,N,h,M]),I=y(u),Y=w=>{const{startDate:D,endDate:X}=Nt(w,r),J=k(y(D));return{left:J,width:k(y(X))-J,startDate:D,endDate:X}},f=Y(e),v=l?Y(l.d):null,C=w=>`${w.date()} ${c[w.month()]}`,E=w=>{var J;const D=(J=a.current)==null?void 0:J.getBoundingClientRect();if(!D)return null;const X=Math.min(1,Math.max(0,(w-D.left)/D.width));return{f:X,d:h.add(Math.round(X*(M-1)),"day")}};return i.jsxs(aa,{children:[i.jsxs(ca,{children:["Navegar",i.jsx("br",{}),"por fecha"]}),i.jsxs(la,{ref:a,onClick:w=>{const D=E(w.clientX);D&&n(D.d.toDate())},onMouseMove:w=>{const D=E(w.clientX);D&&d({left:D.f*100,d:D.d})},onMouseLeave:()=>d(null),children:[i.jsx(da,{children:g.map((w,D)=>i.jsx("span",{style:{left:`${y(w)}%`},children:D===0||w.month()===0?`${c[w.month()]} ${w.format("YY")}`:c[w.month()]},D))}),g.map((w,D)=>D===0?null:i.jsx(ua,{style:{left:`${y(w)}%`}},D)),i.jsx(fa,{children:V.map((w,D)=>i.jsx(ha,{$sev:w.sev,style:{height:`${w.h}%`}},D))}),i.jsx(ga,{style:{left:`${f.left}%`,width:`${f.width}%`}}),i.jsx(pa,{style:{left:`${k(I)}%`},children:i.jsx("span",{children:"HOY"})}),l&&v&&i.jsxs(i.Fragment,{children:[i.jsx(ma,{style:{left:`${v.left}%`,width:`${v.width}%`}}),i.jsx(ya,{style:{left:`${l.left}%`}}),i.jsx(va,{style:{left:`${l.left}%`},children:`Ir a ${C(l.d)}`})]})]})]})},ba=b.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,wa=b.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?fr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Sa=b.div`
  position: relative;
`,Ca=({data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,schedulerRef:u,onTimeRangeSelect:h,onMultiTimeRangeSelect:x,clickToAddConfig:M})=>{const{goToDate:y,handleGoToday:k,zoomIn:g,zoomOut:N,zoom:V}=He();return p.useImperativeHandle(u,()=>({goToDate:y,goToToday:k,setZoom:I=>{if(!xr(I))return;const Y=I-V;if(Y>0)for(let f=0;f<Y;f++)g();else for(let f=0;f<Math.abs(Y);f++)N()}}),[y,k,V,g,N]),i.jsx(Xi,{data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:h,onMultiTimeRangeSelect:x,clickToAddConfig:M})},Ma=p.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:a,onTileClick:l,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:u,onItemClick:h,isLoading:x,onEventDrop:M,onEventDrag:y,draggableConfig:k,onTimeRangeSelect:g,onMultiTimeRangeSelect:N,clickToAddConfig:V},I){var B;const Y=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),f=p.useRef(null),v=p.useRef(null),[C,E]=p.useState((B=f.current)==null?void 0:B.clientWidth),w=p.useMemo(()=>P(s),[s]),[D,X]=p.useState(Y.defaultTheme??"light"),J=()=>{X(D==="light"?"dark":"light")},A=D==="light"?ls:ds,_=Y.theme?Y.theme[A.mode]:{},O={...A,colors:{...A.colors,..._}};return p.useImperativeHandle(I,()=>({goToDate:L=>{var U;return(U=v.current)==null?void 0:U.goToDate(L)},goToToday:()=>{var L;return(L=v.current)==null?void 0:L.goToToday()},setZoom:L=>{var U;return(U=v.current)==null?void 0:U.setZoom(L)}}),[]),p.useLayoutEffect(()=>{const L=()=>{f.current&&E(f.current.clientWidth)};return L(),window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[]),i.jsxs(i.Fragment,{children:[i.jsx(cs,{}),i.jsx(ss,{theme:O,children:i.jsx(Ni,{lang:Y.lang,translations:Y.translations,children:i.jsx(ei,{data:r,isLoading:!!x,config:Y,onRangeChange:a,defaultStartDate:w,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:u,children:i.jsxs(ba,{id:hr,children:[i.jsx(wa,{showScroll:!!r.length,$footer:Y.showOverview!==!1&&!!r.length,id:Be,ref:f,children:i.jsx(Sa,{children:i.jsx(Ca,{data:r,baseData:n,categories:t,onTileClick:l,topBarWidth:C??0,onItemClick:h,toggleTheme:J,onEventDrop:M,onEventDrag:y,draggableConfig:k,schedulerRef:v,onTimeRangeSelect:g,onMultiTimeRangeSelect:N,clickToAddConfig:V})})}),Y.showOverview!==!1&&!!r.length&&i.jsx(xa,{})]})})})})]})}),ka=b.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,$a=b.button`
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
`,Da=b.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ea=b.p`
  ${rt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,Or=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:a,loadPrevious:l}=ze(),d=e==="next"?`${a} ${o+2}/${s}`:`${l} ${o}/${s}`;return i.jsx(ka,{intent:e,children:i.jsxs($a,{onClick:r,isVisible:n,children:[t&&i.jsx(Da,{children:t}),i.jsx(Ea,{children:d})]})})},_a=b.div`
  min-width: ${_e+"px"};
  max-width: ${_e+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,Ta=b.div`
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
`,Aa=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,Pa=b.input`
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
`,Oa=b.div`
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
`,Ir=b.div`
  display: grid;
  grid-template-rows: ${({$collapsed:e})=>e?"0fr":"1fr"};
  transition: grid-template-rows 200ms ease;
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Yr=b.div`
  overflow: hidden;
  min-height: 0;
`,Ia=b.button`
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
`,Ya=Ke`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,La=b.div`
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
    animation: ${Ya} 200ms ease-out;
  }
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,Na=b.div`
  display: flex;
  align-items: center;
`,Fa=b.div`
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
`,Ba=b.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,Ha=b.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,Lr=b.p`
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
`,za=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),Wa=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),i.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),i.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),ja=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),i.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),Za=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>i.jsx(La,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:i.jsxs(Na,{children:[i.jsx(Fa,{$provider:o,children:za(r.icon)?i.jsx(Ba,{src:r.icon,alt:""}):o?i.jsx(ja,{}):i.jsx(Wa,{})}),i.jsxs(Ha,{children:[i.jsx(Lr,{isMain:!0,children:r.title}),i.jsx(Lr,{children:r.subtitle})]})]})}),Va=b.div`
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
`,Ga=b.span`
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
`,Xa=b.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:e.colors.accent};
  flex-shrink: 0;
`,Ua=b.div`
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
`,Nr=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>i.jsxs(Va,{$variant:o,onClick:n,title:e,children:[i.jsx(Ua,{$collapsed:t,children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:i.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx(Ga,{$variant:o,children:e}),i.jsx(Xa,{$variant:o,children:r})]}),Ka=({data:e,categories:r,headerHeight:t,rows:n,onLoadNext:o,onLoadPrevious:s,pageNum:a,pagesAmount:l,searchInputValue:d,onSearchInputChange:c,onItemClick:u,collapsedGroups:h,onToggleGroup:x,allGroupIds:M,onExpandAll:y,onCollapseAll:k})=>{const[g,N]=p.useState(!1),V=ze(),I=()=>N(A=>!A),Y=r?[...r].sort((A,_)=>A.maxPassengers-_.maxPassengers):[],f=Y.length>0,v=M.length>0,C=v&&h.size===M.length;v&&h.size;const E=e.filter(A=>A.isSubcontract),w=V.subcontract??"Subcontract",D=A=>{const _=e.indexOf(A);return i.jsx(Za,{id:A.id,item:A.label,rows:n[_],onItemClick:u,isSubcontract:A.isSubcontract},A.id)},X=A=>{const _=e.filter(L=>!L.isSubcontract&&L.categoryId===A.id);if(_.length===0)return null;const O=h.has(A.id),B=A.name;return i.jsxs("div",{children:[i.jsx(Nr,{label:B,count:_.length,isCollapsed:O,onToggle:()=>x(A.id),variant:"category"}),i.jsx(Ir,{$collapsed:O,children:i.jsx(Yr,{children:_.map(D)})})]},A.id)},J=e.filter(A=>!A.isSubcontract&&(!A.categoryId||!f));return i.jsxs(_a,{children:[i.jsxs(Ta,{$height:t,children:[i.jsxs(Aa,{children:[i.jsxs(Oa,{isFocused:g,children:[i.jsx(Pa,{placeholder:V.search,value:d,onChange:c,onFocus:I,onBlur:I}),i.jsx($n,{iconName:"search"})]}),v&&i.jsx(Ia,{title:C?"Expand all":"Collapse all",onClick:C?y:k,$allCollapsed:C,children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:C?i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),i.jsx(Or,{intent:"previous",isVisible:a!==0,onClick:s,icon:i.jsx($n,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]}),f?Y.map(X):J.map(D),f&&J.length>0&&J.map(D),E.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Nr,{label:w,count:E.length,isCollapsed:h.has("__subcontract__"),onToggle:()=>x("__subcontract__"),variant:"subcontract"}),i.jsx(Ir,{$collapsed:h.has("__subcontract__"),children:i.jsx(Yr,{children:E.map(D)})})]}),i.jsx(Or,{intent:"next",isVisible:a!==l-1,onClick:o,icon:i.jsx($n,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]})},qa=b.div`
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
`,Ja=Ke`
from{
    left: -100%;
}
to{
    left: 100%;
}`,Qa=b.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Ja} 1s infinite;
`,Dn=({isLoading:e,position:r})=>e?i.jsx(qa,{position:r,children:i.jsx(Qa,{})}):null,We=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:a,textYPos:l,label:d,font:c,isBottomRow:u,fillStyle:h,topText:x,bottomText:M,strokeStyle:y,labelBetweenCells:k}=e;if(t.beginPath(),t.strokeStyle=y??r.colors.border,t.setLineDash([]),d&&c&&l){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,a),k?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+a),t.lineTo(n+s,o+a),t.stroke(),t.moveTo(n+s/2,o+a),t.lineTo(n+s/2,o+a-5),t.stroke()):t.strokeRect(n+.5,o+.5,s,a),t.font=c;const g=n+s/2-t.measureText(d).width/2;t.textBaseline="middle",t.fillStyle=r.colors.accent,t.fillText(d,g,l)}if(u&&h&&x&&M){t.fillStyle=h,t.fillRect(n,o,s,a),t.strokeRect(n+.5,o+.5,s,a),t.font=x.font;const g=n+s/2-t.measureText(x.label).width/2;t.fillStyle=x.color,t.fillText(x.label,g,x.y),t.font=M.font;const N=n+s/2-t.measureText(M.label).width/2;t.fillStyle=M.color,t.fillText(M.label,N,M.y)}},En=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},Ra=(e,r,t,n)=>{const o=it-qe/fs,s=it-qe/hs,a=Fe+st;let l=0;for(let d=0;d<r;d++){const c=mr(P(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(d,"days")),u=c.isCurrentDay;if(We({ctx:e,x:l,y:a,width:Se,height:qe,isBottomRow:!0,fillStyle:u?n.colors.currentDay:c.isBusinessDay?n.colors.gridBackground:n.colors.primary,topText:{y:o,label:u?"":c.dayName.toUpperCase(),font:Ye.bottomRow.name,color:En({isCurrent:!1,isBusinessDay:c.isBusinessDay},n)},bottomText:{y:s,label:`${c.dayOfMonth}`,font:u?`700 10px ${Ie}`:Ye.bottomRow.number,color:u?n.colors.today:En({isCurrent:!1,isBusinessDay:c.isBusinessDay,variant:"bottomRow"},n)}},n),u){const M=l+Se/2,y=o-13/2;e.save(),e.fillStyle=n.colors.today,e.beginPath(),e.roundRect?e.roundRect(M-30/2,y,30,13,5):e.rect(M-30/2,y,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Ie}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",M,y+13/2+.5),e.restore()}l+=Se}},ec=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*Pe;const s=Fe;let l=t.month;for(let d=0;d<r;d++){l>=rn&&(l=0);const c=gr(t,d)*Pe;We({ctx:e,x:o,y:s,width:c,height:st,textYPos:dr,label:P().month(l).format("MMMM").toUpperCase(),font:Ye.bottomRow.number},n),o+=c,l++}},tc=(e,r,t)=>{let o=0,s=0,a=P(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month();o=-r.dayOfMonth*Se+Se;for(let l=0;l<rn;l++)a>rn-1&&(a=0),s=P(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(l,"months").daysInMonth()*Se,We({ctx:e,x:o,y:0,width:s,height:Fe,textYPos:sn,label:P(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(a).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${P(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(a).format("MMMM YYYY").toUpperCase()}`,font:Ye.topRow},t),o+=s,a++},nc=(e,r,t,n)=>{const o=7*Se,s=Fe,a=e.canvas.width/o+o,l=r.weekOfYear;let d=0;for(let c=0;c<a;c++){const u=P(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let h=(l+c)%ar;h<=0&&(h+=ar),u!==1&&c===0&&(d=-u*Se+Se),We({ctx:e,x:d,y:s,width:o,height:st,textYPos:dr,label:`${t.toUpperCase()} ${h}`,font:Ye.middleRow},n),d+=o}},rc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},oc=(e,r,t,n,o)=>{const s=it-qe/1.6,a=it-qe/4.5,l=Fe+st;let d=0;for(let c=0;c<r;c++){const u=P(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),h=u.isSame(P(),"week");We({ctx:e,x:d,y:l,width:at,height:qe,isBottomRow:!0,fillStyle:h?o.colors.today+"26":rc({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:u.isoWeek().toString(),font:h?`700 14px ${Ie}`:Ye.bottomRow.name,color:h?o.colors.today:En({isCurrent:h},o)},bottomText:{y:a,label:n.toUpperCase(),font:Ye.middleRow,color:o.colors.placeholder}},o),d+=at}},sc=(e,r,t,n)=>{const s=r.year,a=e.canvas.width*2;let l=0,d=0,c=(pr(s)-t+1)*Pe,u=0;for(;l+u<=a;)d>0&&(c=pr(s+d)*Pe),u+c>a&&d>0&&(c=Math.ceil((a-u)/Pe)*Pe),We({ctx:e,x:l,y:0,width:c,height:Fe,textYPos:sn,label:(s+d).toString(),font:Ye.topRow},n),l+=c,u+=c,d++},ic=(e,r,t,n)=>{const o=Math.floor(r/It)+2,s=It*ke;let d=-P(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*ke+.5*ke;for(let c=0;c<o;c++){const u=P(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();We({ctx:e,x:d,y:ct,width:s,height:bt,textYPos:ct+bt/2+2,label:u,font:Ye.bottomRow.number},n),d+=s}},ac=(e,r,t,n)=>{const o=Math.ceil(r/It),s=P(`${t.year}-${t.month+1}-${t.dayOfMonth}`),a=s.add(o-1,"days"),l=s.month(),d=a.add(1,"day").month(),c=l===d?1:2;let u=.5*ke;for(let h=0;h<c;h++){const x=P(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),y=P(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),k=y.format("MMMM").toUpperCase(),g=y.diff(x,"hour")+1,N=h===0?g*ke:r*ke;We({ctx:e,x:u,y:0,width:N,height:ct,textYPos:sn,label:k,font:Ye.topRow},n),u+=N}},cc=(e,r,t,n)=>{let o=0;const s=ct+bt,a=P(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=ke;for(let d=0;d<r;d++){const c=a.add(d,"hours").format("h:00a").toUpperCase();We({ctx:e,x:o,y:s,width:l,height:nn,label:c,font:Ye.bottomRow.hoursInDay,textYPos:ct+bt+nn/2+2,labelBetweenCells:!0},n),o+=ke}},lc=(e,r,t,n,o,s,a)=>{switch(r){case 0:sc(e,n,s,a),ec(e,t,n,a),oc(e,t,n,o,a);break;case 1:tc(e,n,a),nc(e,n,o,a),Ra(e,t,n,a);break;case 2:ac(e,t,n,a),ic(e,t,n,a),cc(e,t,n,a);break}},dc=b.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,uc=b.div`
  position: sticky;
  left: 0;
  width: ${({$width:e})=>e}px;
  z-index: 3;
`,fc=b.div`
  height: ${it}px;
  display: block;
`,hc=b.canvas``,pc={transfer:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 8h13l-3-3"}),i.jsx("path",{d:"M20 16H7l3 3"})]}),sun:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),i.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),i.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:i.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 3 2 20h20z"}),i.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),i.jsx("path",{d:"M12 7.5V12l3 2"})]})},je=({name:e,className:r,strokeWidth:t=2})=>i.jsx("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:pc[e]}),gc=b.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${_e+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,Fr=b.span`
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
`,mc=b.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,yc=b.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,vc=b.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,xc=b.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,bc=b.span`
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
`,wc=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],Sc=()=>i.jsxs(gc,{children:[i.jsx(Fr,{children:"Leyenda"}),i.jsxs(Bt,{children:[i.jsx(je,{name:"transfer"})," Transfer"]}),i.jsxs(Bt,{children:[i.jsx(je,{name:"sun"})," Gira 1 día"]}),i.jsxs(Bt,{children:[i.jsx(je,{name:"tour"})," Gira multidía"]}),i.jsxs(Bt,{children:[i.jsx(mc,{children:"SUB"})," Subcontrato"]}),i.jsx(yc,{}),i.jsxs(Fr,{children:["Estado ",i.jsx("em",{children:"franja izq. + punto esq."})]}),wc.map(e=>i.jsxs(vc,{children:[i.jsx(xc,{style:{background:e.stripe}}),i.jsx(bc,{style:{color:e.color},children:i.jsx(je,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),Cc=p.forwardRef(function({zoom:r,topBarWidth:t,showThemeToggle:n,toggleTheme:o},s){const{week:a}=ze(),{date:l,cols:d,dayOfYear:c,startDate:u,config:h}=He(),x=p.useRef(null),M=Ot(),y=p.useCallback(k=>{const g=vn(),V=(r===2?us:it)+1;wr(k,g,V),lc(k,r,d,u,a,c,M)},[d,c,u,a,r,M]);return p.useEffect(()=>{if(!x.current)return;const k=x.current.getContext("2d");if(!k)return;const g=()=>y(k);return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[y]),p.useEffect(()=>{const k=x.current;if(!k)return;k.style.letterSpacing="1px";const g=k.getContext("2d");g&&y(g)},[l,r,y]),i.jsxs(dc,{ref:s,children:[(h.showTopbar!==!1||h.showLegend!==!1)&&i.jsxs(uc,{$width:t,children:[h.showTopbar!==!1&&i.jsx(oa,{width:t,showThemeToggle:n,toggleTheme:o}),h.showLegend!==!1&&i.jsx(Sc,{})]}),i.jsx(fc,{id:ps,children:i.jsx(hc,{ref:x})})]})}),Mc=(e,r,t)=>{let n;switch(t){case 0:n=Pe;break;case 2:n=ke;break;default:n=Se}const s=e.startDate.startOf("day"),a=e.endDate.startOf("day"),l=r.startDate.startOf("day"),d=r.endDate.startOf("day"),c=()=>{let u;switch(t){case 2:u=(e.startDate.diff(r.startDate,"minute")/Ce+1)*n-n/2;break;default:u=s.diff(l,"day")*n}return Math.max(0,u)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(e.startDate,"minute")/Ce*n,50);break;default:u=Math.max(a.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(r.startDate,"minute")/Ce*n+.5*n,50);break;default:u=Math.max(a.diff(l,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(e.startDate,"minute")/Ce*n,50);break;default:u=Math.max(d.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(r.startDate,"minute")/Ce*n,50);break;default:u=Math.max(d.diff(l,"day")*n+n,50)}return{x:c(),width:u}}return{x:c(),width:50}},kc=(e,r,t,n,o,s)=>{const a=e*fe+gs,l=r.hour(),d=t.hour();let c,u,h,x;switch(s){case 2:{c=P(n),u=P(o),h=P(r).hour(l).minute(0),x=P(t).hour(d).minute(0);break}default:{c=P(n).hour(0).minute(0),u=P(o).hour(23).minute(59),h=r,x=t;break}}return{...Mc({startDate:c,endDate:u},{startDate:h,endDate:x},s),y:a}},Br=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"};b.div`
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
`;const $c=Ke`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,Dc=b.button`
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
    animation: ${$c} 180ms ease-out;
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
`,Ec=b.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`,_c=b.div`
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
`,Hr=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,Tc=b.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,Ac=b.span`
  ${ot}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,Pc=b.span`
  ${ot}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,Oc=b.span`
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
`,Ic=b.div`
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
`,zr=b.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,Wr=b.span`
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
`,jr=b.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,Yc=b.div`
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
`,Zr=b.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({$end:e})=>e?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.95)"};
  color: ${({$end:e})=>e?"#3A4C46":"#183D3D"};
`,Lc=34,Nc={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63"}},Fc="#3E8E5A",Bc="#D98A22",Vr=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onDragStart:s,isDragging:a=!1,isDraggable:l=!0,yOffset:d=0,exiting:c=!1})=>{const{date:u}=He(),h=Nt(u,t),{y:x,x:M,width:y}=kc(e,h.startDate,h.endDate,r.startDate,r.endDate,t),{colors:k}=Ot(),g=p.useRef(null),N=P(r.startDate).isSame(P(r.endDate),"day"),V=r.eventType===wt.Tour,I=r.eventType===wt.Transfer,Y=N&&(V||I),f=J=>{g.current={x:J.clientX,y:J.clientY},l&&s&&(J.preventDefault(),s(r,J))},v=J=>{if(g.current){const A=Math.abs(J.clientX-g.current.x),_=Math.abs(J.clientY-g.current.y);Math.sqrt(A*A+_*_)<=5&&(o==null||o(r)),g.current=null}else o==null||o(r)},C={left:`${M}px`,top:`${x+d}px`,backgroundColor:`${r.bgColor??k.defaultTile}`,width:`${y}px`,color:Br(r.bgColor??"")},E=!n&&r.readiness?Nc[r.readiness]:null,w=n&&r.subcontractConfirmed===!1,D=n?w?Bc:Fc:E==null?void 0:E.stripe,X=J=>i.jsxs(Dc,{"data-segment-id":r.segmentId,style:C,onClick:v,onMouseDown:f,onDragStart:A=>A.preventDefault(),isDraggable:l,isDragging:a,$unconfirmed:w,$exiting:c,children:[D&&i.jsx(Ec,{style:{background:D}}),J]});return X(Y?i.jsxs(i.Fragment,{children:[(n||E)&&i.jsx(zr,{$sm:!0,children:n?i.jsx(jr,{children:"SUB"}):E&&i.jsx(Wr,{$sm:!0,style:{color:E.color},children:i.jsx(je,{name:E.icon,strokeWidth:E.icon==="check"?2.6:2.2})})}),i.jsxs(Yc,{$transfer:I,children:[i.jsx(je,{name:I?"transfer":"sun",strokeWidth:2.4}),y>=Lc&&i.jsxs(i.Fragment,{children:[i.jsx(Zr,{children:P(r.startDate).format("HH:mm")}),!I&&i.jsx(Zr,{$end:!0,children:P(r.endDate).format("HH:mm")})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(zr,{children:n?i.jsx(jr,{children:"SUB"}):E&&i.jsx(Wr,{style:{color:E.color},children:i.jsx(je,{name:E.icon,strokeWidth:E.icon==="check"?2.6:2.2})})}),r.bookingNumber&&i.jsx(Oc,{children:r.bookingNumber}),i.jsxs(_c,{children:[i.jsxs(Hr,{$pad:!0,children:[i.jsx(Tc,{children:i.jsx(je,{name:I?"transfer":"tour"})}),i.jsx(Ac,{children:r.title})]}),r.subtitle&&i.jsx(Hr,{children:i.jsx(Pc,{children:r.subtitle})}),r.driver&&i.jsxs(Ic,{children:[i.jsx(je,{name:"person"}),r.driver]})]})]}))},Gr=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Ae},Hc=Ke`
  from { opacity: 0; }
  to { opacity: 1; }
`,zc=b.div`
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
    animation: ${Hc} 200ms ease-out;
  }
  pointer-events: none;
`,Wc=({data:e,zoom:r,onTileClick:t,onDragStart:n,isDraggable:o,draggingEventId:s,separatorRowIndices:a=[]})=>{const{nodes:l,liveMap:d}=p.useMemo(()=>{const y=new Map;let k=0;return{nodes:e.map((N,V)=>{if(V>0&&(k+=Math.max(e[V-1].data.length,1)),!N.data.some(I=>I.length>0)){const I=Gr(k,a);return[i.jsx(zc,{style:{top:`${k*fe+I}px`},children:"Disponible"},`dispo-${N.id}`)]}return N.data.map((I,Y)=>I.map(f=>{const v=s===f.segmentId,C=o?o(f):!1,E=Y+k,w=Gr(E,a);return y.set(f.segmentId,{project:f,absoluteRow:E,yOffset:w,isSubcontract:!!N.isSubcontract}),i.jsx(Vr,{row:E,data:f,zoom:r,isSubcontract:N.isSubcontract,onTileClick:t,onDragStart:n,isDragging:v,isDraggable:C,yOffset:w},f.segmentId)}))}).flat(2),liveMap:y}},[e,t,r,n,o,s,a]),c=p.useRef(new Map),u=p.useRef([]),[h,x]=p.useState([]);p.useEffect(()=>()=>u.current.forEach(clearTimeout),[]),p.useEffect(()=>{const y=c.current;c.current=d;const k=[];if(y.forEach((V,I)=>{d.has(I)||k.push(V)}),x(V=>{let I=V.filter(Y=>!d.has(Y.project.segmentId));for(const Y of k)I.some(f=>f.project.segmentId===Y.project.segmentId)||(I=[...I,Y]);return I}),!k.length)return;const g=new Set(k.map(V=>V.project.segmentId)),N=setTimeout(()=>{x(V=>V.filter(I=>!g.has(I.project.segmentId)))},220);u.current.push(N)},[d]);const M=h.filter(y=>!d.has(y.project.segmentId)).map(y=>i.jsx(Vr,{row:y.absoluteRow,data:y.project,zoom:r,isSubcontract:y.isSubcontract,yOffset:y.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},y.project.segmentId));return i.jsx(i.Fragment,{children:[...l,...M]})};b.div`
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
`;const jc=b.div`
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
`,Zc=b.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Vc=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`,Gc=b.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Xc=b.span`
  flex-shrink: 0;
  background: ${({$type:e})=>e==="transfer"?"#dbeafe":"#dcfce7"};
  color: ${({$type:e})=>e==="transfer"?"#1e40af":"#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`,Uc=b.div`
  ${rt}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Kc=b.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`,qc=b.div`
  padding: 10px 12px;
`,Jc=b.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,Xr=b.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,Ur=b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,Kr=b.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,qr=b.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,Jr=b.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Qc=b.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Rc=b.div`
  min-width: 0;
`,el=b.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,tl=b.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`,Qr=b.div`
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
`,Mt=b.div`
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
`;b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.div``,b.span``,b.div``,b.div``,b.div``,b.div``,b.p``,b.span``;const nl={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",salida:"Salida",destino:"Destino",regreso:"Regreso",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},rl=({tooltipData:e,visible:r=!0})=>{const{mouseCoords:t,reservationData:n}=e,o=p.useRef(null),[s,a]=p.useState("below"),l=ze(),d={...nl,...l.tooltip};p.useLayoutEffect(()=>{if(!o.current||!t)return;const y=o.current,{width:k,height:g}=y.getBoundingClientRect(),N=y.parentElement;if(!N)return;const V=N.getBoundingClientRect(),I=12,Y=4,f=V.height-t.y,v=V.width-t.x;let C=t.x+I,E=t.y+I,w="below";v<k+I&&(C=t.x-k-I),f<g+I&&(E=t.y-g-I,w="above"),C=Math.max(Y,Math.min(C,V.width-k-Y)),E=Math.max(Y,Math.min(E,V.height-g-Y)),a(w),y.style.left=`${C}px`,y.style.top=`${E}px`},[t]);const c=n.reservationType===wt.Tour,u=c&&n.isOneDayEvent,h=()=>c?u?"oneday":"tour":"transfer",x=()=>c?u?d.oneDay:d.tour:d.transfer,M=[n.groupName&&{label:d.groupName,value:n.groupName},n.driver&&{label:d.driver,value:n.driver},n.passengers&&{label:d.passengers,value:String(n.passengers)},n.flightNumber&&{label:d.flightNumber,value:n.flightNumber}].filter(Boolean);return i.jsxs(jc,{ref:o,$position:s,$visible:r,children:[i.jsxs(Zc,{children:[i.jsxs(Vc,{children:[i.jsx(Gc,{children:n.bookingNumber}),i.jsx(Xc,{$type:h(),children:x()})]}),i.jsx(Uc,{children:n.eventName}),n.client&&i.jsx(Kc,{children:n.client})]}),i.jsxs(qc,{children:[i.jsxs(Jc,{children:[i.jsxs(Xr,{children:[i.jsx(Ur,{children:d.startDate}),i.jsxs(Kr,{children:[i.jsx(qr,{children:n.startDate})," ",i.jsx(Jr,{children:n.startTime})]})]}),c&&n.endDate&&i.jsxs(Xr,{$isEnd:!0,children:[i.jsx(Ur,{children:d.endDate}),i.jsxs(Kr,{children:[i.jsx(qr,{children:n.endDate})," ",i.jsx(Jr,{children:n.endTime})]})]})]}),M.length>0&&i.jsx(Qc,{children:M.map((y,k)=>i.jsxs(Rc,{children:[i.jsx(el,{children:y.label}),i.jsx(tl,{children:y.value})]},k))}),(n.departureAddress||n.destinationAddress||n.returnAddress)&&i.jsxs(Qr,{children:[n.departureAddress&&i.jsxs(St,{children:[i.jsx(Ct,{children:d.salida}),i.jsx(Mt,{children:n.departureAddress})]}),n.destinationAddress&&i.jsxs(St,{children:[i.jsx(Ct,{children:d.destino}),i.jsx(Mt,{children:n.destinationAddress})]}),n.returnAddress&&i.jsxs(St,{children:[i.jsx(Ct,{children:d.regreso}),i.jsx(Mt,{children:n.returnAddress})]})]}),(n.serviceNotes||n.reservationNotes)&&i.jsxs(Qr,{children:[n.serviceNotes&&i.jsxs(St,{children:[i.jsx(Ct,{children:d.serviceNotes}),i.jsx(Mt,{children:n.serviceNotes})]}),n.reservationNotes&&i.jsxs(St,{children:[i.jsx(Ct,{children:d.reservationNotes}),i.jsx(Mt,{children:n.reservationNotes})]})]})]})]})};b.div`
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
`;const ol=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,sl=b.div`
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
`,il=b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,Rr=b.p`
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
`,al=b.p`
  ${rt}
  ${ot}
`,cl=b.div`
  position: sticky;
  left: ${_e+16}px;
  overflow: hidden;
`,ll=b.div`
  position: absolute;
  height: ${on}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,dl=b.div`
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
`,ul=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,fl=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,hl=b.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,eo=b.div`
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
`,to=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,no=b.div`
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
`,ro=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,_n=b.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,Tn=b.div`
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
`,oo=b.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,pl=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:a,resourceOnly:l,separatorRowIndices:d=[]})=>{const c=ze(),u=Y=>{let f=0;for(const v of d)v<=Y&&f++;return Y*fe+f*Ae},[h,x]=p.useState(null),[M,y]=p.useState(0),k=p.useCallback((Y=400,f=300)=>{const C=t.width,E=48,w=document.getElementById("react-scheduler");if(!w)return{x:r.x+C+16,y:r.y};const D=w.scrollLeft,X=w.scrollTop,J=w.clientWidth,A=w.clientHeight,_=r.x-D,O=r.y-X,B={left:_e+16,right:J-16,top:16,bottom:A-16},L=B.right-(_+C),U=_-B.left,Z=B.bottom-(O+E),ee=O-B.top;let ie,F;return L>=Y+16?ie=_+C+16:U>=Y+16?ie=_-Y-16:L>=U?(ie=_+C+16,ie+Y>B.right&&(ie=B.right-Y)):(ie=_-Y-16,ie<B.left&&(ie=B.left)),Z>=f+16?F=O+E+16:ee>=f+16?F=O-f-16:Z>=ee?(F=O+E+16,F+f>B.bottom&&(F=B.bottom-f)):(F=O-f-16,F<B.top&&(F=B.top)),ie=Math.max(B.left,Math.min(ie,B.right-Y)),F=Math.max(B.top,Math.min(F,B.bottom-f)),{x:ie+D,y:F+X}},[r.x,r.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&M===0?y(r.x):s==="idle"&&y(0)},[s,e,r.x,M]),p.useEffect(()=>{x(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const g=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const Y=[];let f=0;for(const v of a){const C=Math.max(v.data.length,1);if(v.capacity!==void 0&&e.totalPassengers>v.capacity)for(let E=0;E<C;E++)Y.push(f+E);f+=C}return Y},[e,a,s]);if(!e||s==="idle"||s==="potential")return null;const N=s==="animating",V=Br(e.bgColor??""),I=()=>{if(!n)return"";const Y=P(n.startDate).format("MMM D, HH:mm"),f=P(n.endDate).format("HH:mm");return`${Y} - ${f}`};return i.jsxs(ol,{children:[g.map(Y=>i.jsx(fl,{style:{top:`${u(Y)}px`,height:`${fe}px`}},Y)),n&&s==="dragging"&&i.jsx(ul,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${u(n.resourceIndex)}px`,height:`${fe}px`}}),n&&s==="dragging"&&!l&&i.jsxs(i.Fragment,{children:[i.jsx(ll,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(fe-48)/2}px`,width:`${t.width}px`}}),i.jsx(dl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(fe-48)/2}px`},children:I()})]}),n&&s==="dragging"&&l&&i.jsx(hl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${u(n.resourceIndex)}px`,height:`${fe}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const Y=k(400,300);return i.jsxs(eo,{style:{left:`${Y.x}px`,top:`${Y.y}px`},children:[i.jsxs(to,{children:[i.jsx(no,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),i.jsx(ro,{children:n.conflicts.map((f,v)=>{const C=P(n.startDate).format("YYYY-MM-DD"),E=P(n.endDate).format("YYYY-MM-DD"),w=P(f.event.startDate).format("YYYY-MM-DD"),D=P(f.event.endDate).format("YYYY-MM-DD"),X=P(f.conflictStart).format("YYYY-MM-DD"),J=P(f.conflictEnd).format("YYYY-MM-DD"),A=C!==E,_=w!==D,O=X!==J,B=A?P(n.startDate).format("MMM D, h:mm A"):P(n.startDate).format("h:mm A"),L=A?P(n.endDate).format("MMM D, h:mm A"):P(n.endDate).format("h:mm A"),U=_?P(f.event.startDate).format("MMM D, h:mm A"):P(f.event.startDate).format("h:mm A"),Z=_?P(f.event.endDate).format("MMM D, h:mm A"):P(f.event.endDate).format("h:mm A"),ee=O?P(f.conflictStart).format("MMM D, h:mm A"):P(f.conflictStart).format("h:mm A"),ie=O?P(f.conflictEnd).format("MMM D, h:mm A"):P(f.conflictEnd).format("h:mm A"),F=O?"":P(f.conflictStart).format("MMM D"),H=n.startDate.getTime(),R=n.endDate.getTime(),re=f.event.startDate.getTime(),$=f.event.endDate.getTime(),z=H>=re&&H<$,S=R>re&&R<=$,G=H<=re&&R>=$,K=re<=H&&$>=R;let W=!1,m=!1,q=!1,T=!1,j="";return G||K?(W=!0,m=!0,q=!0,T=!0,j=`⚠️ ${c.conflicts.changeBoth}`):z&&S?(W=!0,m=!0,q=!0,T=!0,j=`⚠️ ${c.conflicts.changeBoth}`):z?(W=!0,T=!0,j=`⚠️ ${c.conflicts.changeStart}`):S&&(m=!0,q=!0,j=`⚠️ ${c.conflicts.changeEnd}`),i.jsxs(_n,{children:[i.jsxs(Tn,{children:[c.conflicts.conflictsWith,": ",f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),i.jsxs(ht,{children:[i.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",W?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:B}):B," ",c.conflicts.to," ",m?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:L}):L]}),i.jsxs(ht,{children:[i.jsx("strong",{children:f.event.title})," ",c.conflicts.currentlyAt,":"," ",q?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:U}):U," ",c.conflicts.to," ",T?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:Z}):Z]}),i.jsxs(oo,{children:[c.conflicts.conflictTime,": ",F&&`${F}, `,ee," - ",ie]}),j&&i.jsx(ht,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:j})]},v)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const Y=k(400,400);return i.jsxs(eo,{style:{left:`${Y.x}px`,top:`${Y.y}px`,borderColor:"#4CAF50"},children:[i.jsxs(to,{style:{color:"#2E7D32"},children:[i.jsx(no,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),i.jsxs(ro,{children:[(()=>{const f=n.nearbyEvents.some(w=>w.position==="before"),v=n.nearbyEvents.some(w=>w.position==="after"),C=P(n.startDate).format("h:mm A"),E=P(n.endDate).format("h:mm A");return i.jsxs(_n,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[i.jsxs(Tn,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),i.jsxs(ht,{style:{fontWeight:600},children:[P(n.startDate).format("MMM D"),":"," ",f?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:C}):C," ",c.conflicts.to," ",v?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:E}):E]}),i.jsx(ht,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),n.nearbyEvents.map((f,v)=>{const C=P(f.event.startDate).format("YYYY-MM-DD"),E=P(f.event.endDate).format("YYYY-MM-DD"),w=C!==E,D=w?P(f.event.startDate).format("MMM D, h:mm A"):P(f.event.startDate).format("h:mm A"),X=w?P(f.event.endDate).format("MMM D, h:mm A"):P(f.event.endDate).format("h:mm A"),J=P(f.event.startDate).format("MMM D"),A=Math.floor(f.timeGap/(1e3*60*60)),_=Math.floor(f.timeGap%(1e3*60*60)/(1e3*60)),O=A>0?`${A}h ${_}m`:`${_}m`,B=f.position==="after",L=f.position==="before";return i.jsxs(_n,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[i.jsxs(Tn,{style:{color:"#1B5E20"},children:[f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),i.jsxs(ht,{children:[!w&&`${J}: `,B?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:D}):D," ",c.conflicts.to," ",L?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:X}):X]}),i.jsxs(oo,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[O," ",f.position==="before"?c.conflicts.before:c.conflicts.after]})]},v)})]})]})})(),i.jsx(sl,{$isAnimating:N,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:N?`${(h==null?void 0:h.x)??0}px`:"0",top:N?`${(h==null?void 0:h.y)??0}px`:"0",transform:N?void 0:`translate3d(${l?M:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:V},children:i.jsx(il,{children:i.jsxs(cl,{children:[i.jsx(Rr,{$bold:!0,children:e.title}),e.subtitle&&i.jsx(Rr,{children:e.subtitle}),e.description&&i.jsx(al,{children:e.description})]})})})]})},gl=Ke`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,ml=b.div`
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
  animation: ${gl} 1.5s ease-in-out infinite;
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
`,yl=({selectionBox:e,isSelecting:r})=>!e||!r?null:i.jsx(ml,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),vl=Ke`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,xl=b.div`
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
  animation: ${vl} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,bl=b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,wl=b.span`
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
`,Sl=b.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,Cl=b.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;b.div`
  display: none;
`,b.div`
  display: none;
`,b.button`
  display: none;
`;const Ml=b.div`
  display: flex;
  gap: 8px;
`,so=b.button`
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
`,kl=({selections:e,onConfirm:r,onClear:t})=>{var y;const o=ze().multiSelect,s=p.useMemo(()=>e.filter(k=>k.hasConflict).length,[e]),a=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,d=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",u=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((y=o==null?void 0:o.conflictsWarning)==null?void 0:y.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const x=s>0,M=i.jsxs(xl,{$hasConflicts:x,"data-multi-select-ui":!0,children:[i.jsxs(bl,{children:[i.jsxs(wl,{$hasConflicts:x,children:[e.length," ",a]}),x&&i.jsxs(Sl,{children:["⚠️ ",h]}),i.jsx(Cl,{children:l})]}),i.jsxs(Ml,{children:[i.jsxs(so,{variant:"secondary",onClick:t,children:["✕ ",d]}),i.jsx(so,{variant:"primary",$hasConflicts:x,onClick:r,children:x?`⚠️ ${u}`:`✓ ${c}`})]})]});return ao.createPortal(M,document.body)},$l=Ke`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Dl=b.div`
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
  animation: ${$l} 0.2s ease-out;
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
`,El=b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,_l=b.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,Tl=b.button`
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
`,Al=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:a=[]})=>{const[l,d]=p.useState(null),[c,u]=p.useState({x:0,y:0}),h=p.useRef(null),x=p.useMemo(()=>{switch(t){case 0:return Pe*7;case 1:return Se;case 2:return ke;default:return Se}},[t]),M=p.useMemo(()=>P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),y=p.useMemo(()=>e.map((v,C)=>{let E=0,w=!1;for(const U of r){if(U.id===v.resourceId){w=!0;break}E+=Math.max(U.data.length,1)}if(!w)return null;const D=P(v.startDate),X=P(v.endDate);let J,A;switch(t){case 0:J=Math.floor(D.diff(M,"days")/7),A=Math.max(1,Math.ceil(X.diff(D,"days")/7)+1);break;case 1:J=D.diff(M,"days"),A=Math.max(1,X.diff(D,"days")+1);break;case 2:J=D.diff(M,"hours"),A=Math.max(1,X.diff(D,"hours")+1);break;default:J=0,A=1}const _=J*x;let O=0;for(const U of a)U<=E&&O++;const B=E*fe+O*Ae,L=A*x;return{index:C,selection:v,x:_,y:B,width:L,height:fe}}),[e,r,t,M,x]),k=(v,C)=>{const E=P(v).format("MMM D"),w=P(C).format("MMM D");return E===w?E:`${E} - ${w}`},g=v=>!v.hasConflict||!v.conflicts?"":`⚠️ Conflicts with:
${v.conflicts.map(E=>{const w=(E.overlapDuration/36e5).toFixed(1);return`• ${E.event.title} (${w}h overlap)`}).join(`
`)}`,N=p.useCallback(v=>{let C=0;for(const E of r){const w=Math.max(E.data.length,1);if(v>=C*fe&&v<(C+w)*fe)return{resourceId:E.id,resourceLabel:E.label};C+=w}return null},[r]),V=p.useCallback(v=>{const C=Math.floor(v/x);switch(t){case 0:return M.add(C*7,"days").toDate();case 1:return M.add(C,"days").toDate();case 2:return M.add(C,"hours").toDate();default:return M.toDate()}},[t,M,x]),I=p.useCallback((v,C)=>{!s||(v.preventDefault(),v.stopPropagation(),!y[C])||(h.current={x:v.clientX,y:v.clientY},d(C),u({x:0,y:0}))},[s,y]),Y=p.useCallback(v=>{if(l===null||!h.current)return;const C=v.clientX-h.current.x,E=v.clientY-h.current.y,w=Math.round(C/x)*x,D=Math.round(E/fe)*fe;u({x:w,y:D})},[l,x]),f=p.useCallback(()=>{if(l===null||!s){d(null),u({x:0,y:0}),h.current=null;return}const v=y[l];if(!v){d(null),u({x:0,y:0}),h.current=null;return}const C=v.x+c.x,E=v.y+c.y,w=N(E+fe/2);if(!w){d(null),u({x:0,y:0}),h.current=null;return}const D=V(C),X=e[l],J=X.endDate.getTime()-X.startDate.getTime(),A=new Date(D.getTime()+J);s(l,{startDate:D,endDate:A,resourceId:w.resourceId,resourceLabel:w.resourceLabel}),d(null),u({x:0,y:0}),h.current=null},[l,c,y,e,s,N,V]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",Y),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",f)}},[l,Y,f]),i.jsx(i.Fragment,{children:y.map(v=>{if(!v)return null;const C=v.selection.hasConflict||!1,E=l===v.index,w=E?v.x+c.x:v.x,D=E?v.y+c.y:v.y;return i.jsxs(Dl,{$hasConflict:C,$isDragging:E,style:{left:w,top:D,width:v.width,height:v.height},"data-multi-select-ui":!0,onMouseDown:X=>I(X,v.index),children:[C&&i.jsx(_l,{title:g(v.selection),children:"⚠️"}),i.jsx(El,{$hasConflict:C,children:k(v.selection.startDate,v.selection.endDate)}),i.jsx(Tl,{onClick:X=>{X.stopPropagation(),o(v.index)},onMouseDown:X=>X.stopPropagation(),title:C?"Remove conflicting selection":"Remove selection",children:"×"})]},v.index)})})},Pl=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,Ol=({zoom:e,startDate:r})=>{const{cols:t}=He(),n=p.useMemo(()=>{if(e===2)return null;const o=e===0?Pe*7:Se,s=P().year(r.year).month(r.month).date(r.dayOfMonth).startOf("day"),a=P().startOf("day"),l=e===0?a.startOf("week").diff(s.startOf("week"),"week"):a.diff(s,"days");return l<0||l>=t?null:{x:l*o,width:o}},[e,r,t]);return n?i.jsx(Pl,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},ud="";Ee.Scheduler=Ma,Object.defineProperty(Ee,Symbol.toStringTag,{value:"Module"})});
