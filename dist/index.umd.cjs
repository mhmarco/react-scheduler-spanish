(function(Te,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],i):(Te=typeof globalThis<"u"?globalThis:Te||self,i(Te["react-scheduler"]={},Te["react/jsx-runtime"],Te.React,Te.ReactDOM))})(this,function(Te,i,p,yo){"use strict";var Rl=Object.defineProperty;var ed=(Te,i,p)=>i in Te?Rl(Te,i,{enumerable:!0,configurable:!0,writable:!0,value:p}):Te[i]=p;var go=(Te,i,p)=>(ed(Te,typeof i!="symbol"?i+"":i,p),p);function vo(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const re=vo(p);var De=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bt={},xo={get exports(){return bt},set exports(e){bt=e}},ve={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ln;function bo(){if(Ln)return ve;Ln=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),w;w=Symbol.for("react.module.reference");function k(m){if(typeof m=="object"&&m!==null){var Y=m.$$typeof;switch(Y){case e:switch(m=m.type,m){case t:case o:case n:case c:case u:return m;default:switch(m=m&&m.$$typeof,m){case l:case a:case d:case y:case f:case s:return m;default:return Y}}case r:return Y}}}return ve.ContextConsumer=a,ve.ContextProvider=s,ve.Element=e,ve.ForwardRef=d,ve.Fragment=t,ve.Lazy=y,ve.Memo=f,ve.Portal=r,ve.Profiler=o,ve.StrictMode=n,ve.Suspense=c,ve.SuspenseList=u,ve.isAsyncMode=function(){return!1},ve.isConcurrentMode=function(){return!1},ve.isContextConsumer=function(m){return k(m)===a},ve.isContextProvider=function(m){return k(m)===s},ve.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},ve.isForwardRef=function(m){return k(m)===d},ve.isFragment=function(m){return k(m)===t},ve.isLazy=function(m){return k(m)===y},ve.isMemo=function(m){return k(m)===f},ve.isPortal=function(m){return k(m)===r},ve.isProfiler=function(m){return k(m)===o},ve.isStrictMode=function(m){return k(m)===n},ve.isSuspense=function(m){return k(m)===c},ve.isSuspenseList=function(m){return k(m)===u},ve.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===t||m===o||m===n||m===c||m===u||m===C||typeof m=="object"&&m!==null&&(m.$$typeof===y||m.$$typeof===f||m.$$typeof===s||m.$$typeof===a||m.$$typeof===d||m.$$typeof===w||m.getModuleId!==void 0)},ve.typeOf=k,ve}var xe={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nn;function wo(){return Nn||(Nn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),w=!1,k=!1,m=!1,Y=!1,G=!1,B;B=Symbol.for("react.module.reference");function A(_){return!!(typeof _=="string"||typeof _=="function"||_===t||_===o||G||_===n||_===c||_===u||Y||_===C||w||k||m||typeof _=="object"&&_!==null&&(_.$$typeof===y||_.$$typeof===f||_.$$typeof===s||_.$$typeof===a||_.$$typeof===d||_.$$typeof===B||_.getModuleId!==void 0))}function h(_){if(typeof _=="object"&&_!==null){var V=_.$$typeof;switch(V){case e:var ee=_.type;switch(ee){case t:case o:case n:case c:case u:return ee;default:var q=ee&&ee.$$typeof;switch(q){case l:case a:case d:case y:case f:case s:return q;default:return V}}case r:return V}}}var v=a,b=s,E=e,S=d,D=t,X=y,K=f,I=r,$=o,O=n,z=c,L=u,H=!1,Q=!1;function ne(_){return H||(H=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function se(_){return Q||(Q=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function F(_){return h(_)===a}function j(_){return h(_)===s}function J(_){return typeof _=="object"&&_!==null&&_.$$typeof===e}function te(_){return h(_)===d}function M(_){return h(_)===t}function Z(_){return h(_)===y}function T(_){return h(_)===f}function R(_){return h(_)===r}function W(_){return h(_)===o}function N(_){return h(_)===n}function g(_){return h(_)===c}function U(_){return h(_)===u}xe.ContextConsumer=v,xe.ContextProvider=b,xe.Element=E,xe.ForwardRef=S,xe.Fragment=D,xe.Lazy=X,xe.Memo=K,xe.Portal=I,xe.Profiler=$,xe.StrictMode=O,xe.Suspense=z,xe.SuspenseList=L,xe.isAsyncMode=ne,xe.isConcurrentMode=se,xe.isContextConsumer=F,xe.isContextProvider=j,xe.isElement=J,xe.isForwardRef=te,xe.isFragment=M,xe.isLazy=Z,xe.isMemo=T,xe.isPortal=R,xe.isProfiler=W,xe.isStrictMode=N,xe.isSuspense=g,xe.isSuspenseList=U,xe.isValidElementType=A,xe.typeOf=h}()),xe}(function(e){process.env.NODE_ENV==="production"?e.exports=bo():e.exports=wo()})(xo);function So(e){function r(F,j,J,te,M){for(var Z=0,T=0,R=0,W=0,N,g,U=0,_=0,V,ee=V=N=0,q=0,ae=0,he=0,de=0,ge=J.length,Ce=ge-1,ye,oe="",fe="",ke="",ue="",me;q<ge;){if(g=J.charCodeAt(q),q===Ce&&T+W+R+Z!==0&&(T!==0&&(g=T===47?10:47),W=R=Z=0,ge++,Ce++),T+W+R+Z===0){if(q===Ce&&(0<ae&&(oe=oe.replace(y,"")),0<oe.trim().length)){switch(g){case 32:case 9:case 59:case 13:case 10:break;default:oe+=J.charAt(q)}g=59}switch(g){case 123:for(oe=oe.trim(),N=oe.charCodeAt(0),V=1,de=++q;q<ge;){switch(g=J.charCodeAt(q)){case 123:V++;break;case 125:V--;break;case 47:switch(g=J.charCodeAt(q+1)){case 42:case 47:e:{for(ee=q+1;ee<Ce;++ee)switch(J.charCodeAt(ee)){case 47:if(g===42&&J.charCodeAt(ee-1)===42&&q+2!==ee){q=ee+1;break e}break;case 10:if(g===47){q=ee+1;break e}}q=ee}}break;case 91:g++;case 40:g++;case 34:case 39:for(;q++<Ce&&J.charCodeAt(q)!==g;);}if(V===0)break;q++}switch(V=J.substring(de,q),N===0&&(N=(oe=oe.replace(f,"").trim()).charCodeAt(0)),N){case 64:switch(0<ae&&(oe=oe.replace(y,"")),g=oe.charCodeAt(1),g){case 100:case 109:case 115:case 45:ae=j;break;default:ae=z}if(V=r(j,ae,V,g,M+1),de=V.length,0<H&&(ae=t(z,oe,he),me=l(3,V,ae,j,I,K,de,g,M,te),oe=ae.join(""),me!==void 0&&(de=(V=me.trim()).length)===0&&(g=0,V="")),0<de)switch(g){case 115:oe=oe.replace(v,a);case 100:case 109:case 45:V=oe+"{"+V+"}";break;case 107:oe=oe.replace(G,"$1 $2"),V=oe+"{"+V+"}",V=O===1||O===2&&s("@"+V,3)?"@-webkit-"+V+"@"+V:"@"+V;break;default:V=oe+V,te===112&&(V=(fe+=V,""))}else V="";break;default:V=r(j,t(j,oe,he),V,te,M+1)}ke+=V,V=he=ae=ee=N=0,oe="",g=J.charCodeAt(++q);break;case 125:case 59:if(oe=(0<ae?oe.replace(y,""):oe).trim(),1<(de=oe.length))switch(ee===0&&(N=oe.charCodeAt(0),N===45||96<N&&123>N)&&(de=(oe=oe.replace(" ",":")).length),0<H&&(me=l(1,oe,j,F,I,K,fe.length,te,M,te))!==void 0&&(de=(oe=me.trim()).length)===0&&(oe="\0\0"),N=oe.charCodeAt(0),g=oe.charCodeAt(1),N){case 0:break;case 64:if(g===105||g===99){ue+=oe+J.charAt(q);break}default:oe.charCodeAt(de-1)!==58&&(fe+=o(oe,N,g,oe.charCodeAt(2)))}he=ae=ee=N=0,oe="",g=J.charCodeAt(++q)}}switch(g){case 13:case 10:T===47?T=0:1+N===0&&te!==107&&0<oe.length&&(ae=1,oe+="\0"),0<H*ne&&l(0,oe,j,F,I,K,fe.length,te,M,te),K=1,I++;break;case 59:case 125:if(T+W+R+Z===0){K++;break}default:switch(K++,ye=J.charAt(q),g){case 9:case 32:if(W+Z+T===0)switch(U){case 44:case 58:case 9:case 32:ye="";break;default:g!==32&&(ye=" ")}break;case 0:ye="\\0";break;case 12:ye="\\f";break;case 11:ye="\\v";break;case 38:W+T+Z===0&&(ae=he=1,ye="\f"+ye);break;case 108:if(W+T+Z+$===0&&0<ee)switch(q-ee){case 2:U===112&&J.charCodeAt(q-3)===58&&($=U);case 8:_===111&&($=_)}break;case 58:W+T+Z===0&&(ee=q);break;case 44:T+R+W+Z===0&&(ae=1,ye+="\r");break;case 34:case 39:T===0&&(W=W===g?0:W===0?g:W);break;case 91:W+T+R===0&&Z++;break;case 93:W+T+R===0&&Z--;break;case 41:W+T+Z===0&&R--;break;case 40:if(W+T+Z===0){if(N===0)switch(2*U+3*_){case 533:break;default:N=1}R++}break;case 64:T+R+W+Z+ee+V===0&&(V=1);break;case 42:case 47:if(!(0<W+Z+R))switch(T){case 0:switch(2*g+3*J.charCodeAt(q+1)){case 235:T=47;break;case 220:de=q,T=42}break;case 42:g===47&&U===42&&de+2!==q&&(J.charCodeAt(de+2)===33&&(fe+=J.substring(de,q+1)),ye="",T=0)}}T===0&&(oe+=ye)}_=U,U=g,q++}if(de=fe.length,0<de){if(ae=j,0<H&&(me=l(2,fe,ae,F,I,K,de,te,M,te),me!==void 0&&(fe=me).length===0))return ue+fe+ke;if(fe=ae.join(",")+"{"+fe+"}",O*$!==0){switch(O!==2||s(fe,2)||($=0),$){case 111:fe=fe.replace(A,":-moz-$1")+fe;break;case 112:fe=fe.replace(B,"::-webkit-input-$1")+fe.replace(B,"::-moz-$1")+fe.replace(B,":-ms-input-$1")+fe}$=0}}return ue+fe+ke}function t(F,j,J){var te=j.trim().split(m);j=te;var M=te.length,Z=F.length;switch(Z){case 0:case 1:var T=0;for(F=Z===0?"":F[0]+" ";T<M;++T)j[T]=n(F,j[T],J).trim();break;default:var R=T=0;for(j=[];T<M;++T)for(var W=0;W<Z;++W)j[R++]=n(F[W]+" ",te[T],J).trim()}return j}function n(F,j,J){var te=j.charCodeAt(0);switch(33>te&&(te=(j=j.trim()).charCodeAt(0)),te){case 38:return j.replace(Y,"$1"+F.trim());case 58:return F.trim()+j.replace(Y,"$1"+F.trim());default:if(0<1*J&&0<j.indexOf("\f"))return j.replace(Y,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+j}function o(F,j,J,te){var M=F+";",Z=2*j+3*J+4*te;if(Z===944){F=M.indexOf(":",9)+1;var T=M.substring(F,M.length-1).trim();return T=M.substring(0,F).trim()+T+";",O===1||O===2&&s(T,1)?"-webkit-"+T+T:T}if(O===0||O===2&&!s(M,1))return M;switch(Z){case 1015:return M.charCodeAt(10)===97?"-webkit-"+M+M:M;case 951:return M.charCodeAt(3)===116?"-webkit-"+M+M:M;case 963:return M.charCodeAt(5)===110?"-webkit-"+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+M+M;case 978:return"-webkit-"+M+"-moz-"+M+M;case 1019:case 983:return"-webkit-"+M+"-moz-"+M+"-ms-"+M+M;case 883:if(M.charCodeAt(8)===45)return"-webkit-"+M+M;if(0<M.indexOf("image-set(",11))return M.replace(X,"$1-webkit-$2")+M;break;case 932:if(M.charCodeAt(4)===45)switch(M.charCodeAt(5)){case 103:return"-webkit-box-"+M.replace("-grow","")+"-webkit-"+M+"-ms-"+M.replace("grow","positive")+M;case 115:return"-webkit-"+M+"-ms-"+M.replace("shrink","negative")+M;case 98:return"-webkit-"+M+"-ms-"+M.replace("basis","preferred-size")+M}return"-webkit-"+M+"-ms-"+M+M;case 964:return"-webkit-"+M+"-ms-flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return T=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+T+"-webkit-"+M+"-ms-flex-pack"+T+M;case 1005:return w.test(M)?M.replace(C,":-webkit-")+M.replace(C,":-moz-")+M:M;case 1e3:switch(T=M.substring(13).trim(),j=T.indexOf("-")+1,T.charCodeAt(0)+T.charCodeAt(j)){case 226:T=M.replace(h,"tb");break;case 232:T=M.replace(h,"tb-rl");break;case 220:T=M.replace(h,"lr");break;default:return M}return"-webkit-"+M+"-ms-"+T+M;case 1017:if(M.indexOf("sticky",9)===-1)break;case 975:switch(j=(M=F).length-10,T=(M.charCodeAt(j)===33?M.substring(0,j):M).substring(F.indexOf(":",7)+1).trim(),Z=T.charCodeAt(0)+(T.charCodeAt(7)|0)){case 203:if(111>T.charCodeAt(8))break;case 115:M=M.replace(T,"-webkit-"+T)+";"+M;break;case 207:case 102:M=M.replace(T,"-webkit-"+(102<Z?"inline-":"")+"box")+";"+M.replace(T,"-webkit-"+T)+";"+M.replace(T,"-ms-"+T+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===45)switch(M.charCodeAt(6)){case 105:return T=M.replace("-items",""),"-webkit-"+M+"-webkit-box-"+T+"-ms-flex-"+T+M;case 115:return"-webkit-"+M+"-ms-flex-item-"+M.replace(E,"")+M;default:return"-webkit-"+M+"-ms-flex-line-pack"+M.replace("align-content","").replace(E,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==45||M.charCodeAt(4)===122)break;case 931:case 953:if(D.test(F)===!0)return(T=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?o(F.replace("stretch","fill-available"),j,J,te).replace(":fill-available",":stretch"):M.replace(T,"-webkit-"+T)+M.replace(T,"-moz-"+T.replace("fill-",""))+M;break;case 962:if(M="-webkit-"+M+(M.charCodeAt(5)===102?"-ms-"+M:"")+M,J+te===211&&M.charCodeAt(13)===105&&0<M.indexOf("transform",10))return M.substring(0,M.indexOf(";",27)+1).replace(k,"$1-webkit-$2")+M}return M}function s(F,j){var J=F.indexOf(j===1?":":"{"),te=F.substring(0,j!==3?J:10);return J=F.substring(J+1,F.length-1),Q(j!==2?te:te.replace(S,"$1"),J,j)}function a(F,j){var J=o(j,j.charCodeAt(0),j.charCodeAt(1),j.charCodeAt(2));return J!==j+";"?J.replace(b," or ($1)").substring(4):"("+j+")"}function l(F,j,J,te,M,Z,T,R,W,N){for(var g=0,U=j,_;g<H;++g)switch(_=L[g].call(u,F,U,J,te,M,Z,T,R,W,N)){case void 0:case!1:case!0:case null:break;default:U=_}if(U!==j)return U}function d(F){switch(F){case void 0:case null:H=L.length=0;break;default:if(typeof F=="function")L[H++]=F;else if(typeof F=="object")for(var j=0,J=F.length;j<J;++j)d(F[j]);else ne=!!F|0}return d}function c(F){return F=F.prefix,F!==void 0&&(Q=null,F?typeof F!="function"?O=1:(O=2,Q=F):O=0),c}function u(F,j){var J=F;if(33>J.charCodeAt(0)&&(J=J.trim()),se=J,J=[se],0<H){var te=l(-1,j,J,J,I,K,0,0,0,0);te!==void 0&&typeof te=="string"&&(j=te)}var M=r(z,J,j,0,0);return 0<H&&(te=l(-2,M,J,J,I,K,M.length,0,0,0),te!==void 0&&(M=te)),se="",$=0,K=I=1,M}var f=/^\0+/g,y=/[\0\r\f]/g,C=/: */g,w=/zoo|gra/,k=/([,: ])(transform)/g,m=/,\r+?/g,Y=/([\t\r\n ])*\f?&/g,G=/@(k\w+)\s*(\S*)\s*/,B=/::(place)/g,A=/:(read-only)/g,h=/[svh]\w+-[tblr]{2}/,v=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,E=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,X=/([^-])(image-set\()/,K=1,I=1,$=0,O=1,z=[],L=[],H=0,Q=null,ne=0,se="";return u.use=d,u.set=c,e!==void 0&&c(e),u}var Co={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Mo(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var ko=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Fn=Mo(function(e){return ko.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Gt={},$o={get exports(){return Gt},set exports(e){Gt=e}},be={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bn;function Do(){if(Bn)return be;Bn=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,Y=e?Symbol.for("react.responder"):60118,G=e?Symbol.for("react.scope"):60119;function B(h){if(typeof h=="object"&&h!==null){var v=h.$$typeof;switch(v){case r:switch(h=h.type,h){case d:case c:case n:case s:case o:case f:return h;default:switch(h=h&&h.$$typeof,h){case l:case u:case w:case C:case a:return h;default:return v}}case t:return v}}}function A(h){return B(h)===c}return be.AsyncMode=d,be.ConcurrentMode=c,be.ContextConsumer=l,be.ContextProvider=a,be.Element=r,be.ForwardRef=u,be.Fragment=n,be.Lazy=w,be.Memo=C,be.Portal=t,be.Profiler=s,be.StrictMode=o,be.Suspense=f,be.isAsyncMode=function(h){return A(h)||B(h)===d},be.isConcurrentMode=A,be.isContextConsumer=function(h){return B(h)===l},be.isContextProvider=function(h){return B(h)===a},be.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===r},be.isForwardRef=function(h){return B(h)===u},be.isFragment=function(h){return B(h)===n},be.isLazy=function(h){return B(h)===w},be.isMemo=function(h){return B(h)===C},be.isPortal=function(h){return B(h)===t},be.isProfiler=function(h){return B(h)===s},be.isStrictMode=function(h){return B(h)===o},be.isSuspense=function(h){return B(h)===f},be.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===n||h===c||h===s||h===o||h===f||h===y||typeof h=="object"&&h!==null&&(h.$$typeof===w||h.$$typeof===C||h.$$typeof===a||h.$$typeof===l||h.$$typeof===u||h.$$typeof===m||h.$$typeof===Y||h.$$typeof===G||h.$$typeof===k)},be.typeOf=B,be}var we={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn;function Eo(){return zn||(zn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,Y=e?Symbol.for("react.responder"):60118,G=e?Symbol.for("react.scope"):60119;function B(g){return typeof g=="string"||typeof g=="function"||g===n||g===c||g===s||g===o||g===f||g===y||typeof g=="object"&&g!==null&&(g.$$typeof===w||g.$$typeof===C||g.$$typeof===a||g.$$typeof===l||g.$$typeof===u||g.$$typeof===m||g.$$typeof===Y||g.$$typeof===G||g.$$typeof===k)}function A(g){if(typeof g=="object"&&g!==null){var U=g.$$typeof;switch(U){case r:var _=g.type;switch(_){case d:case c:case n:case s:case o:case f:return _;default:var V=_&&_.$$typeof;switch(V){case l:case u:case w:case C:case a:return V;default:return U}}case t:return U}}}var h=d,v=c,b=l,E=a,S=r,D=u,X=n,K=w,I=C,$=t,O=s,z=o,L=f,H=!1;function Q(g){return H||(H=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ne(g)||A(g)===d}function ne(g){return A(g)===c}function se(g){return A(g)===l}function F(g){return A(g)===a}function j(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function J(g){return A(g)===u}function te(g){return A(g)===n}function M(g){return A(g)===w}function Z(g){return A(g)===C}function T(g){return A(g)===t}function R(g){return A(g)===s}function W(g){return A(g)===o}function N(g){return A(g)===f}we.AsyncMode=h,we.ConcurrentMode=v,we.ContextConsumer=b,we.ContextProvider=E,we.Element=S,we.ForwardRef=D,we.Fragment=X,we.Lazy=K,we.Memo=I,we.Portal=$,we.Profiler=O,we.StrictMode=z,we.Suspense=L,we.isAsyncMode=Q,we.isConcurrentMode=ne,we.isContextConsumer=se,we.isContextProvider=F,we.isElement=j,we.isForwardRef=J,we.isFragment=te,we.isLazy=M,we.isMemo=Z,we.isPortal=T,we.isProfiler=R,we.isStrictMode=W,we.isSuspense=N,we.isValidElementType=B,we.typeOf=A}()),we}(function(e){process.env.NODE_ENV==="production"?e.exports=Do():e.exports=Eo()})($o);var Xt=Gt,_o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},To={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ao={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ut={};Ut[Xt.ForwardRef]=Ao,Ut[Xt.Memo]=Hn;function Wn(e){return Xt.isMemo(e)?Hn:Ut[e.$$typeof]||_o}var Po=Object.defineProperty,Oo=Object.getOwnPropertyNames,jn=Object.getOwnPropertySymbols,Io=Object.getOwnPropertyDescriptor,Yo=Object.getPrototypeOf,Zn=Object.prototype;function Vn(e,r,t){if(typeof r!="string"){if(Zn){var n=Yo(r);n&&n!==Zn&&Vn(e,n,t)}var o=Oo(r);jn&&(o=o.concat(jn(r)));for(var s=Wn(e),a=Wn(r),l=0;l<o.length;++l){var d=o[l];if(!To[d]&&!(t&&t[d])&&!(a&&a[d])&&!(s&&s[d])){var c=Io(r,d);try{Po(e,d,c)}catch{}}}}return e}var Lo=Vn;function Ye(){return(Ye=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Gn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},Kt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!bt.typeOf(e)},Et=Object.freeze([]),Ke=Object.freeze({});function st(e){return typeof e=="function"}function Jt(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function qt(e){return e&&typeof e.styledComponentId=="string"}var it=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Qt=typeof window<"u"&&"HTMLElement"in window,No=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),Fo={},Bo=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function zo(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function We(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(zo.apply(void 0,[Bo[e]].concat(t)).trim())}var Ho=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,a=s;t>=a;)(a<<=1)<0&&We(16,""+t);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(t+1),c=0,u=n.length;c<u;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[t]++,d++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var a=o;a<s;a++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),a=s+o,l=s;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),_t=new Map,Tt=new Map,wt=1,At=function(e){if(_t.has(e))return _t.get(e);for(;Tt.has(wt);)wt++;var r=wt++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&We(16,""+r),_t.set(e,r),Tt.set(r,e),r},Wo=function(e){return Tt.get(e)},jo=function(e,r){r>=wt&&(wt=r+1),_t.set(e,r),Tt.set(r,e)},Zo="style["+it+'][data-styled-version="5.3.8"]',Vo=new RegExp("^"+it+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Go=function(e,r,t){for(var n,o=t.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(r,n)},Xo=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var a=t[o].trim();if(a){var l=a.match(Vo);if(l){var d=0|parseInt(l[1],10),c=l[2];d!==0&&(jo(c,d),Go(e,c,l[3]),e.getTag().insertRules(d,n)),n.length=0}else n.push(a)}}},Uo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Xn=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(l){for(var d=l.childNodes,c=d.length;c>=0;c--){var u=d[c];if(u&&u.nodeType===1&&u.hasAttribute(it))return u}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(it,"active"),n.setAttribute("data-styled-version","5.3.8");var a=Uo();return a&&n.setAttribute("nonce",a),t.insertBefore(n,s),n},Ko=function(){function e(t){var n=this.element=Xn(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var d=s[a];if(d.ownerNode===o)return d}We(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),Jo=function(){function e(t){var n=this.element=Xn(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),qo=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Un=Qt,Qo={isServer:!Qt,useCSSOMInjection:!No},Pt=function(){function e(t,n,o){t===void 0&&(t=Ke),n===void 0&&(n={}),this.options=Ye({},Qo,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Qt&&Un&&(Un=!1,function(s){for(var a=document.querySelectorAll(Zo),l=0,d=a.length;l<d;l++){var c=a[l];c&&c.getAttribute(it)!=="active"&&(Xo(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return At(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ye({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,a=n.target,t=o?new qo(a):s?new Ko(a):new Jo(a),new Ho(t)));var t,n,o,s,a},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(At(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(At(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(At(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",a=0;a<o;a++){var l=Wo(a);if(l!==void 0){var d=t.names.get(l),c=n.getGroup(a);if(d&&c&&d.size){var u=it+".g"+a+'[id="'+l+'"]',f="";d!==void 0&&d.forEach(function(y){y.length>0&&(f+=y+",")}),s+=""+c+u+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},e}(),Ro=/(a)(d)/gi,Kn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Rt(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=Kn(r%52)+t;return(Kn(r%52)+t).replace(Ro,"$1-$2")}var Qe=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},Jn=function(e){return Qe(5381,e)};function qn(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(st(t)&&!qt(t))return!1}return!0}var es=Jn("5.3.8"),ts=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&qn(r),this.componentId=t,this.baseHash=Qe(es,t),this.baseStyle=n,Pt.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var a=Re(this.rules,r,t,n).join(""),l=Rt(Qe(this.baseHash,a)>>>0);if(!t.hasNameForId(o,l)){var d=n(a,"."+l,void 0,o);t.insertRules(o,l,d)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,u=Qe(this.baseHash,n.hash),f="",y=0;y<c;y++){var C=this.rules[y];if(typeof C=="string")f+=C,process.env.NODE_ENV!=="production"&&(u=Qe(u,C+y));else if(C){var w=Re(C,r,t,n),k=Array.isArray(w)?w.join(""):w;u=Qe(u,k+y),f+=k}}if(f){var m=Rt(u>>>0);if(!t.hasNameForId(o,m)){var Y=n(f,"."+m,void 0,o);t.insertRules(o,m,Y)}s.push(m)}}return s.join(" ")},e}(),ns=/^\s*\/\/.*$/gm,rs=[":","[",".","#"];function os(e){var r,t,n,o,s=e===void 0?Ke:e,a=s.options,l=a===void 0?Ke:a,d=s.plugins,c=d===void 0?Et:d,u=new So(l),f=[],y=function(k){function m(Y){if(Y)try{k(Y+"}")}catch{}}return function(Y,G,B,A,h,v,b,E,S,D){switch(Y){case 1:if(S===0&&G.charCodeAt(0)===64)return k(G+";"),"";break;case 2:if(E===0)return G+"/*|*/";break;case 3:switch(E){case 102:case 112:return k(B[0]+G),"";default:return G+(D===0?"/*|*/":"")}case-2:G.split("/*|*/}").forEach(m)}}}(function(k){f.push(k)}),C=function(k,m,Y){return m===0&&rs.indexOf(Y[t.length])!==-1||Y.match(o)?k:"."+r};function w(k,m,Y,G){G===void 0&&(G="&");var B=k.replace(ns,""),A=m&&Y?Y+" "+m+" { "+B+" }":B;return r=G,t=m,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),u(Y||!m?"":m,A)}return u.use([].concat(c,[function(k,m,Y){k===2&&Y.length&&Y[0].lastIndexOf(t)>0&&(Y[0]=Y[0].replace(n,C))},y,function(k){if(k===-2){var m=f;return f=[],m}}])),w.hash=c.length?c.reduce(function(k,m){return m.name||We(15),Qe(k,m.name)},5381).toString():"",w}var Qn=p.createContext();Qn.Consumer;var Rn=p.createContext(),ss=(Rn.Consumer,new Pt),en=os();function er(){return p.useContext(Qn)||ss}function tr(){return p.useContext(Rn)||en}var nr=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=en);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.toString=function(){return We(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=en),this.name+r.hash},e}(),is=/([A-Z])/,as=/([A-Z])/g,cs=/^ms-/,ls=function(e){return"-"+e.toLowerCase()};function rr(e){return is.test(e)?e.replace(as,ls).replace(cs,"-ms-"):e}var or=function(e){return e==null||e===!1||e===""};function Re(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],a=0,l=e.length;a<l;a+=1)(o=Re(e[a],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(or(e))return"";if(qt(e))return"."+e.styledComponentId;if(st(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!r)return e;var d=e(r);return process.env.NODE_ENV!=="production"&&bt.isElement(d)&&console.warn(Jt(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Re(d,r,t,n)}var c;return e instanceof nr?t?(e.inject(t,n),e.getName(n)):e:Kt(e)?function u(f,y){var C,w,k=[];for(var m in f)f.hasOwnProperty(m)&&!or(f[m])&&(Array.isArray(f[m])&&f[m].isCss||st(f[m])?k.push(rr(m)+":",f[m],";"):Kt(f[m])?k.push.apply(k,u(f[m],m)):k.push(rr(m)+": "+(C=m,(w=f[m])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||C in Co?String(w).trim():w+"px")+";"));return y?[y+" {"].concat(k,["}"]):k}(e):e.toString()}var sr=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function et(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return st(e)||Kt(e)?sr(Re(Gn(Et,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:sr(Re(Gn(e,t)))}var ir=/invalid hook call/i,Ot=new Set,ar=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(ir.test(s))o=!1,Ot.delete(t);else{for(var a=arguments.length,l=new Array(a>1?a-1:0),d=1;d<a;d++)l[d-1]=arguments[d];n.apply(void 0,[s].concat(l))}},p.useRef(),o&&!Ot.has(t)&&(console.warn(t),Ot.add(t))}catch(s){ir.test(s.message)&&Ot.delete(t)}finally{console.error=n}}},cr=function(e,r,t){return t===void 0&&(t=Ke),e.theme!==t.theme&&e.theme||r||t.theme},ds=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,us=/(^-|-$)/g;function tn(e){return e.replace(ds,"-").replace(us,"")}var nn=function(e){return Rt(Jn(e)>>>0)};function It(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var rn=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},fs=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function hs(e,r,t){var n=e[t];rn(r)&&rn(n)?lr(n,r):e[t]=r}function lr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var a=s[o];if(rn(a))for(var l in a)fs(l)&&hs(e,a[l],l)}return e}var at=p.createContext();at.Consumer;function ps(e){var r=p.useContext(at),t=p.useMemo(function(){return function(n,o){if(!n)return We(14);if(st(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:We(7)}return Array.isArray(n)||typeof n!="object"?We(8):o?Ye({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?p.createElement(at.Provider,{value:t},e.children):null}var on={};function dr(e,r,t){var n=qt(e),o=!It(e),s=r.attrs,a=s===void 0?Et:s,l=r.componentId,d=l===void 0?function(G,B){var A=typeof G!="string"?"sc":tn(G);on[A]=(on[A]||0)+1;var h=A+"-"+nn("5.3.8"+A+on[A]);return B?B+"-"+h:h}(r.displayName,r.parentComponentId):l,c=r.displayName,u=c===void 0?function(G){return It(G)?"styled."+G:"Styled("+Jt(G)+")"}(e):c,f=r.displayName&&r.componentId?tn(r.displayName)+"-"+r.componentId:r.componentId||d,y=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,C=r.shouldForwardProp;n&&e.shouldForwardProp&&(C=r.shouldForwardProp?function(G,B,A){return e.shouldForwardProp(G,B,A)&&r.shouldForwardProp(G,B,A)}:e.shouldForwardProp);var w,k=new ts(t,f,n?e.componentStyle:void 0),m=k.isStatic&&a.length===0,Y=function(G,B){return function(A,h,v,b){var E=A.attrs,S=A.componentStyle,D=A.defaultProps,X=A.foldedComponentIds,K=A.shouldForwardProp,I=A.styledComponentId,$=A.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(I);var O=function(te,M,Z){te===void 0&&(te=Ke);var T=Ye({},M,{theme:te}),R={};return Z.forEach(function(W){var N,g,U,_=W;for(N in st(_)&&(_=_(T)),_)T[N]=R[N]=N==="className"?(g=R[N],U=_[N],g&&U?g+" "+U:g||U):_[N]}),[T,R]}(cr(h,p.useContext(at),D)||Ke,h,E),z=O[0],L=O[1],H=function(te,M,Z,T){var R=er(),W=tr(),N=M?te.generateAndInjectStyles(Ke,R,W):te.generateAndInjectStyles(Z,R,W);return process.env.NODE_ENV!=="production"&&p.useDebugValue(N),process.env.NODE_ENV!=="production"&&!M&&T&&T(N),N}(S,b,z,process.env.NODE_ENV!=="production"?A.warnTooManyClasses:void 0),Q=v,ne=L.$as||h.$as||L.as||h.as||$,se=It(ne),F=L!==h?Ye({},h,{},L):h,j={};for(var J in F)J[0]!=="$"&&J!=="as"&&(J==="forwardedAs"?j.as=F[J]:(K?K(J,Fn,ne):!se||Fn(J))&&(j[J]=F[J]));return h.style&&L.style!==h.style&&(j.style=Ye({},h.style,{},L.style)),j.className=Array.prototype.concat(X,I,H!==I?H:null,h.className,L.className).filter(Boolean).join(" "),j.ref=Q,p.createElement(ne,j)}(w,G,B,m)};return Y.displayName=u,(w=p.forwardRef(Y)).attrs=y,w.componentStyle=k,w.displayName=u,w.shouldForwardProp=C,w.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Et,w.styledComponentId=f,w.target=n?e.target:e,w.withComponent=function(G){var B=r.componentId,A=function(v,b){if(v==null)return{};var E,S,D={},X=Object.keys(v);for(S=0;S<X.length;S++)E=X[S],b.indexOf(E)>=0||(D[E]=v[E]);return D}(r,["componentId"]),h=B&&B+"-"+(It(G)?G:tn(Jt(G)));return dr(G,Ye({},A,{attrs:y,componentId:h}),t)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(G){this._foldedDefaultProps=n?lr({},e.defaultProps,G):G}}),process.env.NODE_ENV!=="production"&&(ar(u,f),w.warnTooManyClasses=function(G,B){var A={},h=!1;return function(v){if(!h&&(A[v]=!0,Object.keys(A).length>=200)){var b=B?' with the id of "'+B+'"':"";console.warn("Over 200 classes were generated for component "+G+b+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),h=!0,A={}}}}(u,f)),w.toString=function(){return"."+w.styledComponentId},o&&Lo(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var sn=function(e){return function r(t,n,o){if(o===void 0&&(o=Ke),!bt.isValidElementType(n))return We(1,String(n));var s=function(){return t(n,o,et.apply(void 0,arguments))};return s.withConfig=function(a){return r(t,n,Ye({},o,{},a))},s.attrs=function(a){return r(t,n,Ye({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},s}(dr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){sn[e]=sn(e)});var ms=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=qn(t),Pt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var a=s(Re(this.rules,n,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,a)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&Pt.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function gs(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=et.apply(void 0,[e].concat(t)),s="sc-global-"+nn(JSON.stringify(o)),a=new ms(o,s);function l(c){var u=er(),f=tr(),y=p.useContext(at),C=p.useRef(u.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(w){return typeof w=="string"&&w.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),u.server&&d(C,c,u,y,f),p.useLayoutEffect(function(){if(!u.server)return d(C,c,u,y,f),function(){return a.removeStyles(C,u)}},[C,c,u,y,f]),null}function d(c,u,f,y,C){if(a.isStatic)a.renderStyles(c,Fo,f,C);else{var w=Ye({},u,{theme:cr(u,y,l.defaultProps)});a.renderStyles(c,w,f,C)}}return process.env.NODE_ENV!=="production"&&ar(s),p.memo(l)}function ze(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=et.apply(void 0,[e].concat(t)).join(""),s=nn(o);return new nr(s,o)}var Yt=function(){return p.useContext(at)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const x=sn,St="reactSchedulerOutsideWrapper",Le="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",ys=gs`

  #${St} {
    font-family: ${Le};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${St} *,
 #${St} *:before,
 #${St} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,vs={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},xs={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},ct=`
margin: 0;
padding: 0;
`,lt=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;x.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const Me=50,Ne=24,tt=16,je=40,Lt=je+tt+Ne,dt=84,pe=56,Ae=196,Oe=12,Ee=50,ut=24,Ct=16,an=40,bs=ut+Ct+an,ur=24,fr=52,Fe={topRow:`600 14px ${Le}`,middleRow:`400 10px ${Le}`,bottomRow:{name:`600 14px ${Le}`,number:`600 10px ${Le}`,hoursInDay:`400 9px ${Le}`}},ft=3,ws=1.6,Ss=4.5,cn=12,Nt=24,Cs="reactSchedulerCanvasHeaderWrapper",hr="reactSchedulerCanvasWrapper",Ze=St,Ms=4,ln=48,Je=5,ks=40,pr=8,dn=Ne/2+2,mr=tt/2+Ne+1,gr=2,$e=60,Pe=21,yr=58,vr="reactSchedulerBody";var nt={},$s={get exports(){return nt},set exports(e){nt=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",a="second",l="minute",d="hour",c="day",u="week",f="month",y="quarter",C="year",w="date",k="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,G={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(I){var $=["th","st","nd","rd"],O=I%100;return"["+I+($[(O-20)%10]||$[O]||$[0])+"]"}},B=function(I,$,O){var z=String(I);return!z||z.length>=$?I:""+Array($+1-z.length).join(O)+I},A={s:B,z:function(I){var $=-I.utcOffset(),O=Math.abs($),z=Math.floor(O/60),L=O%60;return($<=0?"+":"-")+B(z,2,"0")+":"+B(L,2,"0")},m:function I($,O){if($.date()<O.date())return-I(O,$);var z=12*(O.year()-$.year())+(O.month()-$.month()),L=$.clone().add(z,f),H=O-L<0,Q=$.clone().add(z+(H?-1:1),f);return+(-(z+(O-L)/(H?L-Q:Q-L))||0)},a:function(I){return I<0?Math.ceil(I)||0:Math.floor(I)},p:function(I){return{M:f,y:C,w:u,d:c,D:w,h:d,m:l,s:a,ms:s,Q:y}[I]||String(I||"").toLowerCase().replace(/s$/,"")},u:function(I){return I===void 0}},h="en",v={};v[h]=G;var b=function(I){return I instanceof X},E=function I($,O,z){var L;if(!$)return h;if(typeof $=="string"){var H=$.toLowerCase();v[H]&&(L=H),O&&(v[H]=O,L=H);var Q=$.split("-");if(!L&&Q.length>1)return I(Q[0])}else{var ne=$.name;v[ne]=$,L=ne}return!z&&L&&(h=L),L||!z&&h},S=function(I,$){if(b(I))return I.clone();var O=typeof $=="object"?$:{};return O.date=I,O.args=arguments,new X(O)},D=A;D.l=E,D.i=b,D.w=function(I,$){return S(I,{locale:$.$L,utc:$.$u,x:$.$x,$offset:$.$offset})};var X=function(){function I(O){this.$L=E(O.locale,null,!0),this.parse(O)}var $=I.prototype;return $.parse=function(O){this.$d=function(z){var L=z.date,H=z.utc;if(L===null)return new Date(NaN);if(D.u(L))return new Date;if(L instanceof Date)return new Date(L);if(typeof L=="string"&&!/Z$/i.test(L)){var Q=L.match(m);if(Q){var ne=Q[2]-1||0,se=(Q[7]||"0").substring(0,3);return H?new Date(Date.UTC(Q[1],ne,Q[3]||1,Q[4]||0,Q[5]||0,Q[6]||0,se)):new Date(Q[1],ne,Q[3]||1,Q[4]||0,Q[5]||0,Q[6]||0,se)}}return new Date(L)}(O),this.$x=O.x||{},this.init()},$.init=function(){var O=this.$d;this.$y=O.getFullYear(),this.$M=O.getMonth(),this.$D=O.getDate(),this.$W=O.getDay(),this.$H=O.getHours(),this.$m=O.getMinutes(),this.$s=O.getSeconds(),this.$ms=O.getMilliseconds()},$.$utils=function(){return D},$.isValid=function(){return this.$d.toString()!==k},$.isSame=function(O,z){var L=S(O);return this.startOf(z)<=L&&L<=this.endOf(z)},$.isAfter=function(O,z){return S(O)<this.startOf(z)},$.isBefore=function(O,z){return this.endOf(z)<S(O)},$.$g=function(O,z,L){return D.u(O)?this[z]:this.set(L,O)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(O,z){var L=this,H=!!D.u(z)||z,Q=D.p(O),ne=function(T,R){var W=D.w(L.$u?Date.UTC(L.$y,R,T):new Date(L.$y,R,T),L);return H?W:W.endOf(c)},se=function(T,R){return D.w(L.toDate()[T].apply(L.toDate("s"),(H?[0,0,0,0]:[23,59,59,999]).slice(R)),L)},F=this.$W,j=this.$M,J=this.$D,te="set"+(this.$u?"UTC":"");switch(Q){case C:return H?ne(1,0):ne(31,11);case f:return H?ne(1,j):ne(0,j+1);case u:var M=this.$locale().weekStart||0,Z=(F<M?F+7:F)-M;return ne(H?J-Z:J+(6-Z),j);case c:case w:return se(te+"Hours",0);case d:return se(te+"Minutes",1);case l:return se(te+"Seconds",2);case a:return se(te+"Milliseconds",3);default:return this.clone()}},$.endOf=function(O){return this.startOf(O,!1)},$.$set=function(O,z){var L,H=D.p(O),Q="set"+(this.$u?"UTC":""),ne=(L={},L[c]=Q+"Date",L[w]=Q+"Date",L[f]=Q+"Month",L[C]=Q+"FullYear",L[d]=Q+"Hours",L[l]=Q+"Minutes",L[a]=Q+"Seconds",L[s]=Q+"Milliseconds",L)[H],se=H===c?this.$D+(z-this.$W):z;if(H===f||H===C){var F=this.clone().set(w,1);F.$d[ne](se),F.init(),this.$d=F.set(w,Math.min(this.$D,F.daysInMonth())).$d}else ne&&this.$d[ne](se);return this.init(),this},$.set=function(O,z){return this.clone().$set(O,z)},$.get=function(O){return this[D.p(O)]()},$.add=function(O,z){var L,H=this;O=Number(O);var Q=D.p(z),ne=function(j){var J=S(H);return D.w(J.date(J.date()+Math.round(j*O)),H)};if(Q===f)return this.set(f,this.$M+O);if(Q===C)return this.set(C,this.$y+O);if(Q===c)return ne(1);if(Q===u)return ne(7);var se=(L={},L[l]=n,L[d]=o,L[a]=t,L)[Q]||1,F=this.$d.getTime()+O*se;return D.w(F,this)},$.subtract=function(O,z){return this.add(-1*O,z)},$.format=function(O){var z=this,L=this.$locale();if(!this.isValid())return L.invalidDate||k;var H=O||"YYYY-MM-DDTHH:mm:ssZ",Q=D.z(this),ne=this.$H,se=this.$m,F=this.$M,j=L.weekdays,J=L.months,te=function(R,W,N,g){return R&&(R[W]||R(z,H))||N[W].slice(0,g)},M=function(R){return D.s(ne%12||12,R,"0")},Z=L.meridiem||function(R,W,N){var g=R<12?"AM":"PM";return N?g.toLowerCase():g},T={YY:String(this.$y).slice(-2),YYYY:this.$y,M:F+1,MM:D.s(F+1,2,"0"),MMM:te(L.monthsShort,F,J,3),MMMM:te(J,F),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:te(L.weekdaysMin,this.$W,j,2),ddd:te(L.weekdaysShort,this.$W,j,3),dddd:j[this.$W],H:String(ne),HH:D.s(ne,2,"0"),h:M(1),hh:M(2),a:Z(ne,se,!0),A:Z(ne,se,!1),m:String(se),mm:D.s(se,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:Q};return H.replace(Y,function(R,W){return W||T[R]||Q.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(O,z,L){var H,Q=D.p(z),ne=S(O),se=(ne.utcOffset()-this.utcOffset())*n,F=this-ne,j=D.m(this,ne);return j=(H={},H[C]=j/12,H[f]=j,H[y]=j/3,H[u]=(F-se)/6048e5,H[c]=(F-se)/864e5,H[d]=F/o,H[l]=F/n,H[a]=F/t,H)[Q]||F,L?j:D.a(j)},$.daysInMonth=function(){return this.endOf(f).$D},$.$locale=function(){return v[this.$L]},$.locale=function(O,z){if(!O)return this.$L;var L=this.clone(),H=E(O,z,!0);return H&&(L.$L=H),L},$.clone=function(){return D.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},I}(),K=X.prototype;return S.prototype=K,[["$ms",s],["$s",a],["$m",l],["$H",d],["$W",c],["$M",f],["$y",C],["$D",w]].forEach(function(I){K[I[1]]=function($){return this.$g($,I[0],I[1])}}),S.extend=function(I,$){return I.$i||(I($,X,S),I.$i=!0),S},S.locale=E,S.isDayjs=b,S.unix=function(I){return S(1e3*I)},S.en=v[h],S.Ls=v,S.p={},S})})($s);const P=nt,xr=e=>e%4===0&&e%100>0||e%400===0?366:365,un=e=>{const r=e.day();return r!==0&&r!==6},br=(e,r)=>P(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),wr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:un(e),isCurrentDay:e.isSame(P(),"day"),year:parseInt(e.format("YYYY"))});let Ft=null;const Ds=e=>{if(Ft)return Ft;const r=document.createElement("canvas");r.width=12,r.height=12;const t=r.getContext("2d");return t?(t.strokeStyle="rgba(120, 137, 127, 0.045)",t.lineWidth=6,t.beginPath(),t.moveTo(-3,15),t.lineTo(15,-3),t.stroke(),Ft=e.createPattern(r,"repeat"),Ft):null},fn=(e,r,t,n,o,s,a,l=!1)=>{if(e.strokeStyle=a.colors.border,s?e.fillStyle=a.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=a.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,pe),l&&!s){const d=Ds(e);d&&(e.fillStyle=d,e.fillRect(r,t,n,pe))}e.strokeRect(r+.5,t+.5,n,pe)},hn=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Pe},Es=(e,r,t,n,o,s=[])=>{for(let a=0;a<r;a++){const l=hn(a,s);for(let d=0;d<=t;d++){const c=P(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(d,"days"),u=c.isSame(P(),"day"),f=c.isBefore(P(),"day");fn(e,d*Me,a*pe+l,Me,un(c),u,o,f)}}},_s=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},Ts=(e,r,t,n,o,s=[])=>{let a=0,l=-(n.dayOfMonth-1)*Oe;const d=r*pe+s.length*Pe;for(let c=0;c<=t;c++){const f=P(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(c,"weeks").isSame(P(),"week");for(let y=0;y<r;y++){const C=hn(y,s);fn(e,a,y*pe+C,dt,!0,f,o)}a+=dt}for(let c=0;c<t;c++){const u=br(n,c)*Oe;_s(e,l,d,o),l+=u}},As=(e,r,t,n,o,s=[])=>{const a=P(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let l=0;l<r;l++){const d=hn(l,s);for(let c=0;c<=t;c++){let u;c===Math.floor(t/2)?u=P():c>Math.floor(t/2)?u=P().add(c-Math.floor(t/2),"hours"):u=P().subtract(Math.floor(t/2)-l,"hours");const f=a.isSame(P(),"day")&&u.isSame(P(),"hour");fn(e,c*Ee+Ee/2-.5,l*pe+d,Ee,un(u),f,o)}}},Ps=(e,r,t,n,o=!1)=>{const s=t*pe+r*Pe,a=e.canvas.width;e.fillStyle=o?n.colors.subcontractBorder+"40":n.mode==="dark"?n.colors.primary+"80":n.colors.primary,e.fillRect(0,s,a,Pe)},Os=(e,r,t,n,o,s,a=[],l=-1)=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(hr)){switch(r){case 0:Ts(e,t,n,o,s,a);break;case 1:Es(e,t,n,o,s,a);break;case 2:As(e,t,n,o,s,a);break}for(let c=0;c<a.length;c++)Ps(e,c,a[c],s,a[c]===l)}};var pn={},Is={get exports(){return pn},set exports(e){pn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){var t="week",n="year";return function(o,s,a){var l=s.prototype;l.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var u=a(this).startOf(n).add(1,n).date(c),f=a(this).endOf(t);if(u.isBefore(f))return 1}var y=a(this).startOf(n).date(c).startOf(t).subtract(1,"millisecond"),C=this.diff(y,t,!0);return C<0?a(this).startOf("week").week():Math.ceil(C)},l.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(Is);const Ys=pn;var mn={},Ls={get exports(){return mn},set exports(e){mn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?a:this.add(s-a,"day")}}})})(Ls);const Ns=mn;var gn={},Fs={get exports(){return gn},set exports(e){gn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){var t="day";return function(n,o,s){var a=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return a(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var u,f,y,C,w=a(this),k=(u=this.isoWeekYear(),f=this.$u,y=(f?s.utc:s)().year(u).startOf("year"),C=4-y.isoWeekday(),y.isoWeekday()>4&&(C+=7),y.add(C,t));return w.diff(k,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var d=l.startOf;l.startOf=function(c,u){var f=this.$utils(),y=!!f.u(u)||u;return f.p(c)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(c,u)}}})})(Fs);const Bs=gn;var yn={},zs={get exports(){return yn},set exports(e){yn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return function(t,n,o){n.prototype.isBetween=function(s,a,l,d){var c=o(s),u=o(a),f=(d=d||"()")[0]==="(",y=d[1]===")";return(f?this.isAfter(c,l):!this.isBefore(c,l))&&(y?this.isBefore(u,l):!this.isAfter(u,l))||(f?this.isBefore(c,l):!this.isAfter(c,l))&&(y?this.isAfter(u,l):!this.isBefore(u,l))}}})})(zs);const Hs=yn;var vn={},Ws={get exports(){return vn},set exports(e){vn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){var t,n,o=1e3,s=6e4,a=36e5,l=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,u=2592e6,f=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:c,months:u,days:l,hours:a,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},C=function(h){return h instanceof A},w=function(h,v,b){return new A(h,b,v.$l)},k=function(h){return n.p(h)+"s"},m=function(h){return h<0},Y=function(h){return m(h)?Math.ceil(h):Math.floor(h)},G=function(h){return Math.abs(h)},B=function(h,v){return h?m(h)?{negative:!0,format:""+G(h)+v}:{negative:!1,format:""+h+v}:{negative:!1,format:""}},A=function(){function h(b,E,S){var D=this;if(this.$d={},this.$l=S,b===void 0&&(this.$ms=0,this.parseFromMilliseconds()),E)return w(b*y[k(E)],this);if(typeof b=="number")return this.$ms=b,this.parseFromMilliseconds(),this;if(typeof b=="object")return Object.keys(b).forEach(function(I){D.$d[k(I)]=b[I]}),this.calMilliseconds(),this;if(typeof b=="string"){var X=b.match(f);if(X){var K=X.slice(2).map(function(I){return I!=null?Number(I):0});return this.$d.years=K[0],this.$d.months=K[1],this.$d.weeks=K[2],this.$d.days=K[3],this.$d.hours=K[4],this.$d.minutes=K[5],this.$d.seconds=K[6],this.calMilliseconds(),this}}return this}var v=h.prototype;return v.calMilliseconds=function(){var b=this;this.$ms=Object.keys(this.$d).reduce(function(E,S){return E+(b.$d[S]||0)*y[S]},0)},v.parseFromMilliseconds=function(){var b=this.$ms;this.$d.years=Y(b/c),b%=c,this.$d.months=Y(b/u),b%=u,this.$d.days=Y(b/l),b%=l,this.$d.hours=Y(b/a),b%=a,this.$d.minutes=Y(b/s),b%=s,this.$d.seconds=Y(b/o),b%=o,this.$d.milliseconds=b},v.toISOString=function(){var b=B(this.$d.years,"Y"),E=B(this.$d.months,"M"),S=+this.$d.days||0;this.$d.weeks&&(S+=7*this.$d.weeks);var D=B(S,"D"),X=B(this.$d.hours,"H"),K=B(this.$d.minutes,"M"),I=this.$d.seconds||0;this.$d.milliseconds&&(I+=this.$d.milliseconds/1e3);var $=B(I,"S"),O=b.negative||E.negative||D.negative||X.negative||K.negative||$.negative,z=X.format||K.format||$.format?"T":"",L=(O?"-":"")+"P"+b.format+E.format+D.format+z+X.format+K.format+$.format;return L==="P"||L==="-P"?"P0D":L},v.toJSON=function(){return this.toISOString()},v.format=function(b){var E=b||"YYYY-MM-DDTHH:mm:ss",S={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return E.replace(d,function(D,X){return X||String(S[D])})},v.as=function(b){return this.$ms/y[k(b)]},v.get=function(b){var E=this.$ms,S=k(b);return S==="milliseconds"?E%=1e3:E=S==="weeks"?Y(E/y[S]):this.$d[S],E===0?0:E},v.add=function(b,E,S){var D;return D=E?b*y[k(E)]:C(b)?b.$ms:w(b,this).$ms,w(this.$ms+D*(S?-1:1),this)},v.subtract=function(b,E){return this.add(b,E,!0)},v.locale=function(b){var E=this.clone();return E.$l=b,E},v.clone=function(){return w(this.$ms,this)},v.humanize=function(b){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!b)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},h}();return function(h,v,b){t=b,n=b().$utils(),b.duration=function(D,X){var K=b.locale();return w(D,{$l:K},X)},b.isDuration=C;var E=v.prototype.add,S=v.prototype.subtract;v.prototype.add=function(D,X){return C(D)&&(D=D.asMilliseconds()),E.bind(this)(D,X)},v.prototype.subtract=function(D,X){return C(D)&&(D=D.asMilliseconds()),S.bind(this)(D,X)}}})})(Ws);const js=vn;var Zs="Expected a function",Sr=0/0,Vs="[object Symbol]",Gs=/^\s+|\s+$/g,Xs=/^[-+]0x[0-9a-f]+$/i,Us=/^0b[01]+$/i,Ks=/^0o[0-7]+$/i,Js=parseInt,qs=typeof De=="object"&&De&&De.Object===Object&&De,Qs=typeof self=="object"&&self&&self.Object===Object&&self,Rs=qs||Qs||Function("return this")(),ei=Object.prototype,ti=ei.toString,ni=Math.max,ri=Math.min,xn=function(){return Rs.Date.now()};function oi(e,r,t){var n,o,s,a,l,d,c=0,u=!1,f=!1,y=!0;if(typeof e!="function")throw new TypeError(Zs);r=Cr(r)||0,bn(t)&&(u=!!t.leading,f="maxWait"in t,s=f?ni(Cr(t.maxWait)||0,r):s,y="trailing"in t?!!t.trailing:y);function C(v){var b=n,E=o;return n=o=void 0,c=v,a=e.apply(E,b),a}function w(v){return c=v,l=setTimeout(Y,r),u?C(v):a}function k(v){var b=v-d,E=v-c,S=r-b;return f?ri(S,s-E):S}function m(v){var b=v-d,E=v-c;return d===void 0||b>=r||b<0||f&&E>=s}function Y(){var v=xn();if(m(v))return G(v);l=setTimeout(Y,k(v))}function G(v){return l=void 0,y&&n?C(v):(n=o=void 0,a)}function B(){l!==void 0&&clearTimeout(l),c=0,n=d=o=l=void 0}function A(){return l===void 0?a:G(xn())}function h(){var v=xn(),b=m(v);if(n=arguments,o=this,d=v,b){if(l===void 0)return w(d);if(f)return l=setTimeout(Y,r),C(d)}return l===void 0&&(l=setTimeout(Y,r)),a}return h.cancel=B,h.flush=A,h}function bn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function si(e){return!!e&&typeof e=="object"}function ii(e){return typeof e=="symbol"||si(e)&&ti.call(e)==Vs}function Cr(e){if(typeof e=="number")return e;if(ii(e))return Sr;if(bn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=bn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(Gs,"");var t=Us.test(e);return t||Ks.test(e)?Js(e.slice(2),t?2:8):Xs.test(e)?Sr:+e}var wn=oi;const Bt=[0,1,2];var Mt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(Mt||{});const Mr=e=>Bt.includes(e),ht=e=>{var n;const t=(((n=document.getElementById(Ze))==null?void 0:n.clientWidth)||0)-Ae;switch(e){case 1:return Math.ceil(t/Me)*ft;case 2:return Math.ceil(t/Ee)*ft;default:return Math.ceil(t/dt)*ft}},ai=e=>ht(e)/ft,zt=(e,r)=>{const t=ht(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},ci=(e,r)=>{const t=zt(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},Sn=()=>{var t;return((((t=document.getElementById(Ze))==null?void 0:t.clientWidth)||0)-Ae)*ft},kr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:P(),jumpDate:null,isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});P.extend(Ys),P.extend(Ns),P.extend(Bs),P.extend(Hs),P.extend(js);const li=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=P(),onRangeChange:s,handleToggleDisplayActiveUnits:a,onClearFilterData:l,toolbarActions:d})=>{const{zoom:c,maxRecordsPerPage:u=50}=n,[f,y]=p.useState(c),[C,w]=p.useState(P()),[k,m]=p.useState(null),[Y,G]=p.useState(!1),[B,A]=p.useState(ht(f)),h=Bt[f]!==Bt[Bt.length-1],v=f!==0,b=p.useMemo(()=>ci(C,f),[C,f]),E=zt(C,f).startDate,S=P(E).dayOfYear(),D=wr(E),X=p.useRef(null),K=p.useRef(!1),I=p.useRef(null),[$,O]=p.useState([{x:0,y:0}]),z=p.useCallback((W,N="auto")=>{var U,_,V,ee;const g=Sn();switch(W){case"back":return(U=X.current)==null?void 0:U.scrollTo({behavior:N,left:g/3});case"forward":return(_=X.current)==null?void 0:_.scrollTo({behavior:N,left:g/3});case"middle":{const q=g/ft/4;return(V=X.current)==null?void 0:V.scrollTo({behavior:N,left:g/2-q})}default:return(ee=X.current)==null?void 0:ee.scrollTo({behavior:N,left:g/2})}},[]),L=W=>{O(W)},H=p.useCallback(W=>{const N=ai(f);let g;switch(f){case 0:g=N*7;break;case 1:g=N;break;case 2:g=Math.ceil(N/Nt);break}wn(()=>{switch((W==="forward"||W==="back")&&(K.current=!0),I.current=W,W){case"back":w(_=>_.subtract(g,"days"));break;case"forward":w(_=>_.add(g,"days"));break;case"middle":w(P());break}s==null||s(b)},300)()},[s,b,f]);p.useEffect(()=>{I.current&&(z(I.current),I.current=null)},[C,z]),p.useEffect(()=>{X.current=document.getElementById(Ze),A(ht(f))},[f]),p.useEffect(()=>{const W=()=>A(ht(f));return window.addEventListener("resize",W),()=>window.removeEventListener("resize",W)},[f]),p.useEffect(()=>{s==null||s(b)},[s,b]),p.useEffect(()=>{G(!1)},[o]),p.useEffect(()=>{Y||(z("middle"),G(!0),w(o))},[o,Y,z]);const Q=()=>{t||(w(W=>f===2?W.add(ur,"hours"):W.add(gr,"weeks")),s==null||s(b))},ne=p.useCallback(()=>{t||H("forward")},[t,H]),se=()=>{t||(w(W=>f===2?W.subtract(ur,"hours"):W.subtract(gr,"weeks")),s==null||s(b))},F=p.useCallback(()=>{!Y||t||H("back")},[Y,t,H]),j=p.useCallback(()=>{t||(I.current="middle",w(P()),m(null),s==null||s(b))},[t,s,b]),J=p.useCallback(W=>{if(t)return;const N=P(W).startOf("day");N.isValid()&&(I.current="middle",w(N),m(N),s==null||s(b))},[t,s,b]),te=()=>Z(f+1),M=()=>Z(f-1),Z=W=>{Mr(W)&&(y(W),A(ht(W)),s==null||s(b))},T=()=>a==null?void 0:a(),{Provider:R}=kr;return i.jsx(R,{value:{data:e,config:n,handleGoNext:Q,handleScrollNext:ne,handleGoPrev:se,handleScrollPrev:F,handleGoToday:j,goToDate:J,zoomIn:te,zoomOut:M,setZoom:Z,zoom:f,isNextZoom:h,isPrevZoom:v,date:C,jumpDate:k,isLoading:t,cols:B,startDate:D,dayOfYear:S,toggleDisplayActiveUnits:T,tilesCoords:$,updateTilesCoords:L,recordsThreshold:u,onClearFilterData:l,suppressNextSlideRef:K,toolbarActions:d},children:r})},He=()=>p.useContext(kr),$r=(e,r,t)=>{e.canvas.width=r*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=r+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},Dr=()=>{var e;return typeof window<"u"&&!!((e=window.matchMedia)!=null&&e.call(window,"(prefers-reduced-motion: reduce)").matches)},Er=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*pe+n*Pe;if(e>=s+Pe)n++;else if(e>=s)return o*pe+n*Pe-n*Pe}return t-n*Pe},di=5,_r=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>di},pt=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},ui=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:a={},gridRef:l,separatorRowIndices:d=[]})=>{const c=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(Z=>({...Z,data:[Z.data]})):r:e,{enabled:u=!0,isDraggable:f,resourceOnly:y=!1,isValidDrop:C}=a,[w,k]=p.useState("idle"),[m,Y]=p.useState(null),[G,B]=p.useState({x:0,y:0}),[A,h]=p.useState({width:0,height:48}),[v,b]=p.useState(null),[E,S]=p.useState(!0),D=p.useRef({x:0,y:0}),X=p.useRef({x:0,y:0}),K=p.useRef({x:0,y:0}),I=p.useRef(null),$=p.useRef(null),O=p.useRef(0),z=p.useRef(null),L=p.useCallback(Z=>!u||Z.draggable===!1?!1:f?f(Z):!0,[u,f]),H=p.useCallback((Z,T)=>{const R=Er(T,d),W=Math.floor(R/pe);let N;switch(t){case 0:N=Oe*7;break;case 1:N=Me;break;case 2:N=Ee;break;default:N=Me}const g=Math.floor(Z/N);let U;const _=P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:U=_.add(g*7,"days").toDate();break;case 1:U=_.add(g,"days").toDate();break;case 2:U=_.add(g,"hours").toDate();break;default:U=_.toDate()}return{snappedDate:U,snappedResourceIndex:W}},[t,n,d]),Q=p.useCallback((Z,T,R,W)=>{const N=[],g=T.getTime(),U=R.getTime(),_=c.find(ee=>ee.id===W);if(!_)return N;const V=[];for(const ee of _.data)Array.isArray(ee)?V.push(...ee):V.push(ee);for(const ee of V){if(ee.segmentId===Z.segmentId)continue;const q=ee.startDate.getTime(),ae=ee.endDate.getTime();if(g>=q&&g<ae||U>q&&U<=ae||g<=q&&U>=ae){const de=new Date(Math.max(g,q)),ge=new Date(Math.min(U,ae)),Ce=ge.getTime()-de.getTime();N.push({event:ee,conflictStart:de,conflictEnd:ge,overlapDuration:Ce})}}return N},[c]),ne=p.useCallback((Z,T,R,W)=>{const N=[],g=T.getTime(),U=R.getTime(),_=P(T).format("YYYY-MM-DD"),V=c.find(q=>q.id===W);if(!V)return N;const ee=[];for(const q of V.data)Array.isArray(q)?ee.push(...q):ee.push(q);for(const q of ee){if(q.segmentId===Z.segmentId)continue;const ae=q.startDate.getTime(),he=q.endDate.getTime(),de=P(q.startDate).format("YYYY-MM-DD"),ge=P(q.endDate).format("YYYY-MM-DD"),Ce=P(R).format("YYYY-MM-DD");if(!(de===_||ge===_||de===Ce||ge===Ce||P(q.startDate).isBefore(T,"day")&&P(q.endDate).isAfter(R,"day"))||g>=ae&&g<he||U>ae&&U<=he||g<=ae&&U>=he)continue;let fe,ke;he<=g?(fe=g-he,ke="before"):(fe=ae-U,ke="after"),N.push({event:q,timeGap:fe,position:ke})}return N.sort((q,ae)=>q.timeGap-ae.timeGap)},[c]),se=p.useCallback((Z,T,R)=>{const W=H(T,R);let N,g;if(y)N=Z.startDate,g=Z.endDate;else{const he=P(Z.endDate).diff(Z.startDate);N=W.snappedDate,g=P(N).add(he,"milliseconds").toDate()}let U=0,_="",V;for(const he of e){const de=Math.max(he.data.length,1);if(W.snappedResourceIndex<U+de){_=he.id,V=he.capacity;break}U+=de}if(!_)return null;let ee=!0;V!==void 0&&Z.totalPassengers!==void 0&&(ee=Z.totalPassengers<=V);const q=Q(Z,N,g,_),ae=q.length===0?ne(Z,N,g,_):[];return{startDate:N,endDate:g,resourceId:_,resourceIndex:W.snappedResourceIndex,resourceCapacity:V,hasCapacity:ee,conflicts:q,hasConflict:q.length>0,nearbyEvents:ae}},[H,e,y,Q,ne]),F=p.useCallback((Z,T)=>{if(!s)return;const R=Date.now();if(R-O.current<100)return;O.current=R;const W={event:Z,currentStartDate:T.startDate,currentEndDate:T.endDate,currentResourceId:T.resourceId,conflicts:T.conflicts};s(W)},[s]),j=p.useCallback((Z,T)=>{if(!L(Z)||!l.current)return;T.preventDefault(),T.stopPropagation();const R=T.target.closest('[style*="left"]');let W=0,N=0;R&&R.style.left&&R.style.top&&(W=parseInt(R.style.left),N=parseInt(R.style.top));const g=pt(T.clientX,T.clientY,l.current);D.current={x:W,y:N},X.current={x:T.clientX,y:T.clientY},K.current={x:g.x-W,y:20},z.current={startDate:Z.startDate,endDate:Z.endDate,resourceId:""};for(const V of e){for(const ee of V.data)if(ee.some(q=>q.segmentId===Z.segmentId)){z.current.resourceId=V.id;break}if(z.current.resourceId)break}Y(Z),k("potential"),B({x:W,y:N});let U=100,_=48;if(R){const V=R.getBoundingClientRect();U=V.width,_=V.height}h({width:U,height:_})},[L,l,e,t]),J=p.useCallback(Z=>{if(!l.current)return;let T=l.current;for(;T&&T!==document.body;){const q=window.getComputedStyle(T);if(T.scrollHeight>T.clientHeight&&(q.overflowY==="auto"||q.overflowY==="scroll"||q.overflow==="auto"||q.overflow==="scroll"))break;T=T.parentElement}(!T||T===document.body)&&(T=document.documentElement);const R=T.getBoundingClientRect(),W=Z.clientY,N=50,g=12,U=W-R.top,_=R.bottom-W;let V=!1,ee=0;U<N&&U>0?(V=!0,ee=-g*(1-U/N)):_<N&&_>0&&(V=!0,ee=g*(1-_/N)),V?($.current&&cancelAnimationFrame($.current),$.current=requestAnimationFrame(()=>{T.scrollTop+=ee,w==="dragging"&&J(Z)})):$.current&&(cancelAnimationFrame($.current),$.current=null)},[l,w]),te=p.useCallback(Z=>{if(w==="idle"||w==="animating"||!m||!l.current)return;const T={x:Z.clientX,y:Z.clientY};if(w==="potential")if(_r(X.current,T))k("dragging");else return;J(Z);const R=pt(Z.clientX,Z.clientY,l.current);I.current&&cancelAnimationFrame(I.current),I.current=requestAnimationFrame(()=>{const W={x:R.x-K.current.x,y:R.y-K.current.y};B(W);const N=se(m,R.x,R.y);if(N&&C){const g={event:m,currentStartDate:N.startDate,currentEndDate:N.endDate,currentResourceId:N.resourceId,conflicts:N.conflicts};N.hasConflict=!C(g)}if(b(N),N){const g=N.hasCapacity!==!1;S(g),F(m,N)}})},[w,m,l,se,F,C,J]),M=p.useCallback(async Z=>{if(w==="idle"||w==="animating")return;const T={x:Z.clientX,y:Z.clientY};if(!_r(X.current,T)||w==="potential"){k("idle"),Y(null),b(null);return}if(!m||!v||!z.current){k("idle"),Y(null),b(null);return}if(v.hasCapacity===!1){S(!1),k("animating"),B(D.current),setTimeout(()=>{k("idle"),Y(null),b(null),S(!0)},300);return}const W={event:m,originalStartDate:z.current.startDate,originalEndDate:z.current.endDate,originalResourceId:z.current.resourceId,newStartDate:v.startDate,newEndDate:v.endDate,newResourceId:v.resourceId,hasConflict:v.hasConflict,conflicts:v.conflicts};let N=!0;if(o)try{const g=o(W);N=g instanceof Promise?await g:g}catch{N=!1}N?(S(!0),k("idle"),Y(null),b(null)):(S(!1),k("animating"),B(D.current),setTimeout(()=>{k("idle"),Y(null),b(null),S(!0)},300))},[w,m,v,o,C]);return p.useEffect(()=>{if(w==="potential"||w==="dragging"){const Z=R=>te(R),T=R=>M(R);return document.addEventListener("mousemove",Z),document.addEventListener("mouseup",T),()=>{document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",T)}}else return()=>{}},[w,te,M]),p.useEffect(()=>()=>{I.current&&(cancelAnimationFrame(I.current),I.current=null),$.current&&(cancelAnimationFrame($.current),$.current=null)},[]),p.useEffect(()=>{(w==="idle"||w==="animating")&&(I.current&&(cancelAnimationFrame(I.current),I.current=null),$.current&&(cancelAnimationFrame($.current),$.current=null))},[w]),p.useEffect(()=>{(w==="dragging"||w==="potential")&&(w==="dragging"?(k("animating"),B(D.current),setTimeout(()=>{k("idle"),Y(null),b(null)},300)):(k("idle"),Y(null),b(null)))},[t]),p.useEffect(()=>{if((w==="dragging"||w==="potential")&&m){let Z=!1;for(const T of e){for(const R of T.data)if(R.some(W=>W.segmentId===m.segmentId)){Z=!0;break}if(Z)break}Z||(w==="dragging"?(k("animating"),B(D.current),setTimeout(()=>{k("idle"),Y(null),b(null)},300)):(k("idle"),Y(null),b(null)))}},[e,w,m]),{dragState:w,draggedEvent:m,ghostPosition:G,ghostDimensions:A,dropTarget:v,isValidDrop:E,handleDragStart:j,isDraggable:L,draggingEventId:(m==null?void 0:m.segmentId)||null,resourceOnly:y}},fi=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:a={},gridRef:l,isDragging:d,separatorRowIndices:c=[]})=>{const{enabled:u=!1,isSelectable:f}=a,y=u&&!!o,C=p.useCallback(g=>{let U=0;for(const _ of c)_<=g&&U++;return g*pe+U*Pe},[c]),[w,k]=p.useState("idle"),[m,Y]=p.useState(null),[G,B]=p.useState(null),[A,h]=p.useState(null),[v,b]=p.useState(!1),[E,S]=p.useState([]),[D,X]=p.useState(!1),K=p.useRef(null),I=p.useRef(null),$=p.useRef(null),O=p.useRef(null),z=p.useCallback(()=>{switch(t){case 0:return Oe*7;case 1:return Me;case 2:return Ee;default:return Me}},[t]),L=p.useCallback(g=>{const U=z(),_=Math.floor(g/U),V=P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return V.add(_*7,"days").toDate();case 1:return V.add(_,"days").toDate();case 2:return V.add(_,"hours").toDate();default:return V.toDate()}},[t,n,z]),H=p.useCallback(g=>{const U=Er(g,c),_=Math.floor(U/pe);let V=0;for(const ee of e){const q=Math.max(ee.data.length,1);if(_<V+q)return{resourceId:ee.id,resourceIndex:_,resourceLabel:ee.label};V+=q}return null},[e,c]),Q=p.useCallback(g=>{const U=z();return Math.floor(g/U)*U},[z]),ne=p.useCallback((g,U,_,V=[])=>{const ee=[],ae=(r||e).find(ge=>ge.id===g),he=U.getTime(),de=_.getTime();if(ae){const ge=ae.data[0],Ce=ge&&Array.isArray(ge)?ae.data.flat():ae.data;for(const ye of Ce){const oe=new Date(ye.startDate).getTime(),fe=new Date(ye.endDate).getTime();if(he<fe&&de>oe){const ke=new Date(Math.max(he,oe)),ue=new Date(Math.min(de,fe)),me=ue.getTime()-ke.getTime();ee.push({event:ye,conflictStart:ke,conflictEnd:ue,overlapDuration:me})}}}for(const ge of V){if(ge.resourceId!==g)continue;const Ce=ge.startDate.getTime(),ye=ge.endDate.getTime();if(he<ye&&de>Ce){const oe=new Date(Math.max(he,Ce)),fe=new Date(Math.min(de,ye)),ke=fe.getTime()-oe.getTime(),ue={segmentId:`pending-${ge.startDate.getTime()}`,reservationId:`pending-${ge.startDate.getTime()}`,startDate:ge.startDate,endDate:ge.endDate,occupancy:0,title:`New Event (${ge.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ee.push({event:ue,conflictStart:oe,conflictEnd:fe,overlapDuration:ke})}}return ee},[e,r]),se=p.useCallback(g=>{if(!y||d||!l.current||g.button!==0)return;const U=g.target;if(U.closest("[data-segment-id]")||U.closest("[data-multi-select-ui]"))return;const _=pt(g.clientX,g.clientY,l.current),V=H(_.y);if(!V)return;K.current={x:g.clientX,y:g.clientY},I.current=V.resourceIndex;const ee=Q(_.x),q=z(),ae=C(V.resourceIndex);Y(_),B(_),h({x:ee,y:ae,width:q,height:pe}),k("selecting")},[y,d,l,H,Q,z,C]),F=p.useCallback(g=>{B(g);const U=z(),_=Q((m==null?void 0:m.x)||0),V=Q(g.x),ee=C(I.current),q=Math.min(_,V),ae=Math.max(_,V)+U;h({x:q,y:ee,width:ae-q,height:pe})},[m,z,Q,C]),j=p.useCallback(()=>{O.current&&(cancelAnimationFrame(O.current),O.current=null)},[]),J=p.useCallback((g,U)=>{const _=document.getElementById(Ze);if(!_||!l.current)return;const V=_.getBoundingClientRect(),ee=60,q=12,ae=g-(V.left+Ae),he=V.right-g;let de=0;ae<ee?de=-q*(1-Math.max(0,ae)/ee):he<ee&&(de=q*(1-Math.max(0,he)/ee)),j(),de!==0&&(O.current=requestAnimationFrame(()=>{_.scrollLeft+=de,F(pt(g,U,l.current)),J(g,U)}))},[l,F,j]),te=p.useCallback(g=>{if(w!=="selecting"||!l.current||I.current===null)return;const U=pt(g.clientX,g.clientY,l.current);$.current&&cancelAnimationFrame($.current),$.current=requestAnimationFrame(()=>F(U)),J(g.clientX,g.clientY)},[w,l,F,J]),M=p.useCallback(g=>{if(w!=="selecting")return;if(j(),!l.current||!m||!K.current){k("idle"),Y(null),B(null),h(null);return}const U=pt(g.clientX,g.clientY,l.current),_=H(m.y);if(!_){k("idle"),Y(null),B(null),h(null);return}const V=Math.min(m.x,U.x),ee=Math.max(m.x,U.x),q=L(V),ae=L(ee),he=P(ae).hour(23).minute(59).second(0).millisecond(0).toDate();if(f&&!f(_.resourceId,q,he)){k("idle"),Y(null),B(null),h(null);return}const de=ne(_.resourceId,q,he,E),ge=de.length>0,Ce={startDate:q,endDate:he,resourceId:_.resourceId,resourceLabel:_.resourceLabel,zoomLevel:t,hasConflict:ge,conflicts:ge?de:void 0};if(v)S(ye=>[...ye,Ce]),X(!0);else if(o){const ye=o(Ce),oe=fe=>{fe!=null&&fe.continueMultiSelect&&(b(!0),S([Ce]),X(!0))};ye instanceof Promise?ye.then(oe):oe(ye)}k("idle"),Y(null),B(null),h(null),K.current=null,I.current=null},[w,l,m,H,L,f,o,t,v,ne,E,j]),Z=p.useCallback(()=>{if(E.length>0&&s){X(!1);const g=s(E),U=_=>{_!=null&&_.continueMultiSelect?X(!0):(S([]),b(!1),X(!1))};g instanceof Promise?g.then(U):U(g);return}S([]),b(!1),X(!1)},[E,s]),T=p.useCallback(()=>{S([]),b(!1),X(!1)},[]),R=p.useCallback(g=>{S(U=>{const _=U.filter((V,ee)=>ee!==g);return _.length===0&&(b(!1),X(!1)),_})},[]),W=p.useCallback((g,U)=>{S(_=>_.map((V,ee)=>{if(ee!==g)return V;const q={...V,...U},ae=_.filter((de,ge)=>ge!==g),he=ne(q.resourceId,q.startDate,q.endDate,ae);return{...q,hasConflict:he.length>0,conflicts:he.length>0?he:void 0}}))},[ne]),N=p.useCallback(g=>{g.key==="Escape"&&(w==="selecting"?(j(),k("idle"),Y(null),B(null),h(null),K.current=null,I.current=null):v&&E.length>0&&(S([]),b(!1),X(!1)))},[w,v,E.length,j]);return p.useEffect(()=>{if(w==="selecting")return document.addEventListener("mousemove",te),document.addEventListener("mouseup",M),document.addEventListener("keydown",N),()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",M),document.removeEventListener("keydown",N)}},[w,te,M,N]),p.useEffect(()=>{if(v&&E.length>0)return document.addEventListener("keydown",N),()=>{document.removeEventListener("keydown",N)}},[v,E.length,N]),p.useEffect(()=>()=>{$.current&&(cancelAnimationFrame($.current),$.current=null),j()},[j]),p.useEffect(()=>{d&&w==="selecting"&&(j(),k("idle"),Y(null),B(null),h(null),K.current=null,I.current=null)},[d,w,j]),{selectionState:w,selectionStart:m,selectionEnd:G,selectionBox:A,handleGridMouseDown:se,isEnabled:y,pendingSelections:E,confirmSelections:Z,clearSelections:T,removeSelection:R,updateSelection:W,isMultiSelectActive:v,hasUnconfirmedSelections:D}},hi=x.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,pi=x.div`
  position: relative;
`,mi=x.canvas``;x.canvas``;const gi=x.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`,Tr=x.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,yi=p.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onEventDrop:a,onEventDrag:l,draggableConfig:d,onDragStateChange:c,onTimeRangeSelect:u,onMultiTimeRangeSelect:f,clickToAddConfig:y,separatorRowIndices:C=[],subcontractSeparatorRow:w=-1,fadingUnitIds:k},m){const Y=p.useRef(!1),{handleScrollNext:G,handleScrollPrev:B,date:A,isLoading:h,cols:v,startDate:b,suppressNextSlideRef:E}=He(),S=p.useRef(null),D=p.useRef(null),X=p.useRef(t),K=p.useRef(A),I=p.useRef(null),$=p.useRef(null),O=p.useRef(null),z=p.useRef(null),[L,H]=p.useState(!1),Q=Yt(),{dragState:ne,draggedEvent:se,ghostPosition:F,ghostDimensions:j,dropTarget:J,isValidDrop:te,handleDragStart:M,isDraggable:Z,draggingEventId:T,resourceOnly:R}=ui({data:n,baseData:o||n,zoom:r,startDate:b,onEventDrop:a,onEventDrag:l,draggableConfig:d,gridRef:z,separatorRowIndices:C});p.useEffect(()=>{const ue=ne==="dragging"||ne==="potential";H(ue),c&&c(ue)},[ne,c]);const W=p.useRef(!1),N=p.useRef(A),g=p.useRef(null);p.useEffect(()=>{var Se;const ue=N.current;if(N.current=A,!W.current){W.current=!0;return}if(E!=null&&E.current){E.current=!1;return}const me=z.current;if(!(me!=null&&me.animate))return;const ce=A.isAfter(ue)?48:-48;(Se=g.current)==null||Se.cancel(),me.style.willChange="transform";const le=me.animate([{transform:`translateX(${ce}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),ie=()=>{me.style.willChange=""};le.onfinish=ie,le.oncancel=ie,g.current=le},[A,E]);const{selectionState:U,selectionBox:_,handleGridMouseDown:V,pendingSelections:ee,confirmSelections:q,clearSelections:ae,removeSelection:he,updateSelection:de,isMultiSelectActive:ge,hasUnconfirmedSelections:Ce}=fi({data:n,baseData:o||n,zoom:r,startDate:b,onTimeRangeSelect:u,onMultiTimeRangeSelect:f,clickToAddConfig:y,gridRef:z,isDragging:L,separatorRowIndices:C}),ye=p.useCallback(ue=>{ue.preventDefault()},[]),oe=p.useCallback(ue=>{ue.preventDefault()},[]),fe=C.length*Pe,ke=p.useCallback(ue=>{const me=Sn(),ce=t*pe+1+fe;$r(ue,me,ce),Os(ue,r,t,v,b,Q,C,w)},[v,b,t,r,Q,C,w,fe]);return p.useEffect(()=>{if(!S.current)return;const ue=S.current.getContext("2d");if(!ue)return;const me=()=>ke(ue);return window.addEventListener("resize",me),()=>window.removeEventListener("resize",me)},[ke]),p.useEffect(()=>{var Ie;const ue=X.current,me=K.current;if(X.current=t,K.current=A,ue===t||!A.isSame(me,"day")||Dr())return;const ce=S.current,le=D.current;if(!ce||!le)return;const ie=le.getContext("2d");if(!ie)return;le.width=ce.width,le.height=ce.height,le.style.width=ce.style.width,le.style.height=ce.style.height,ie.setTransform(1,0,0,1,0,0),ie.clearRect(0,0,le.width,le.height),ie.drawImage(ce,0,0),(Ie=I.current)==null||Ie.cancel(),le.style.opacity="1";const Se=le.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease"});Se.onfinish=()=>{le.style.opacity="0"},I.current=Se},[t,A]),p.useEffect(()=>{const ue=S.current;if(!ue)return;ue.style.letterSpacing="1px";const me=ue.getContext("2d");me&&ke(me)},[A,t,r,ke]),p.useEffect(()=>{if(!$.current)return;const ue=new IntersectionObserver(me=>{me[0].isIntersecting&&!Y.current&&(Y.current=!0,G(),setTimeout(()=>{Y.current=!1},1e3))},{root:document.getElementById(Ze)});return ue.observe($.current),()=>{ue.disconnect()}},[G]),p.useEffect(()=>{if(!O.current)return;const ue=new IntersectionObserver(me=>{me[0].isIntersecting&&!Y.current&&(Y.current=!0,B(),setTimeout(()=>{Y.current=!1},1e3))},{root:document.getElementById(Ze),rootMargin:`0px 0px 0px -${Ae}px`});return ue.observe(O.current),()=>{ue.disconnect()}},[B]),i.jsxs(hi,{id:hr,children:[i.jsxs(pi,{ref:ue=>{typeof m=="function"?m(ue):m&&(m.current=ue),z.current=ue},onMouseDown:V,style:{cursor:u?"crosshair":"default"},children:[i.jsx(Tr,{position:"left",ref:O}),i.jsx(An,{isLoading:h,position:"left"}),i.jsx(mi,{ref:S,onDragStart:ye,onDragOver:oe,style:{userSelect:ne==="dragging"?"none":"auto"}}),i.jsx(gi,{ref:D,"aria-hidden":!0}),i.jsx(Ul,{zoom:r,startDate:b}),i.jsx(Jl,{zoom:r,startDate:b}),i.jsx(nl,{data:n,zoom:r,onTileClick:s,onDragStart:M,isDraggable:Z,draggingEventId:T,separatorRowIndices:C,fadingUnitIds:k}),i.jsx(Tr,{ref:$,position:"right"}),i.jsx(An,{isLoading:h,position:"right"}),(ne==="dragging"||ne==="animating")&&i.jsx(_l,{draggedEvent:se,ghostPosition:F,ghostDimensions:j,dropTarget:J,isValidDrop:te,dragState:ne,zoom:r,data:n,resourceOnly:R,separatorRowIndices:C}),i.jsx(Pl,{selectionBox:_,isSelecting:U==="selecting"}),ge&&ee.length>0&&i.jsx(Gl,{selections:ee,data:n,zoom:r,startDate:b,onRemove:he,onUpdate:de,separatorRowIndices:C})]}),ge&&Ce&&ee.length>0&&i.jsx(zl,{selections:ee,onConfirm:q,onClear:ae,onRemove:he})]})}),Ar=e=>{const r=P.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},Pr=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/$e);t+=o.hours+s,n+=r%$e,n>=$e&&(t++,n-=$e)}),{hours:t,minutes:n}},Or=(e,r)=>{let t=pr;switch(r){case 0:t=ks;break;case 1:t=pr;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,a=$e-e.minutes;return a===$e&&(s++,a=0),{hours:Math.max(0,s),minutes:s<0?0:a}},o=()=>{const s=e.hours-t,a=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:a}};return{free:n(),overtime:o()}},vi=(e,r,t)=>{const n=r.isoWeek(),o=e.map(c=>{const u=P(c.startDate).isoWeek(),f=P(c.startDate).isoWeekday(),y=P(c.endDate).isoWeek(),C=P(c.endDate).isoWeekday(),{hours:w,minutes:k}=Ar(c.occupancy);if(n===u){const m=(Je+1-f)*w,Y=(Je+1-f)*k;return{hours:Math.max(0,m),minutes:Y}}else if(n===y){const m=C>Je?Je*w:C*w,Y=C>Je?Je*k:C*k;return{hours:m,minutes:Y}}else if(P(r).isBetween(c.startDate,c.endDate))return{hours:Je*w,minutes:Je*k};return{hours:0,minutes:0}}),{hours:s,minutes:a}=Pr(o),{free:l,overtime:d}=Or({hours:s,minutes:a},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,a)},free:l,overtime:d}},xi=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(u=>{const{hours:f,minutes:y}=Ar(u.occupancy);return o<=(n?7:5)?{hours:f,minutes:y}:{hours:0,minutes:0}}),{hours:a,minutes:l}=Pr(s),{free:d,overtime:c}=Or({hours:a,minutes:l},t);return{taken:{hours:Math.max(0,a),minutes:Math.max(0,l)},free:d,overtime:c}},bi=(e,r)=>{let t=0;e.forEach(l=>{const d=P(l.startDate).hour(),c=P(l.endDate).hour(),u=r.hour(),f=P(l.endDate).minute(),y=P(l.startDate).minute();d<u&&c>u?t+=$e:d===u&&c===u&&y&&f?t+=f?f-y:$e-y:d===u&&c>=u?t+=y?$e-y:$e:c===u&&f&&(t+=f)});const n=Math.floor(t/$e),o=t%$e,s=n||o?0:1,a=n?0:o?$e-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:a},overtime:{hours:0,minutes:0}}},wi=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(a=>n===1?P(t).isBetween(a.startDate,a.endDate,"day","[]"):n===2?P(t).isBetween(a.startDate,a.endDate,"hour","[]"):P(a.startDate).isBetween(P(t),P(t).add(6,"days"),"day","[]")||P(t).isBetween(P(a.startDate),P(a.endDate),"day","[]"));switch(n){case 1:return xi(s,t,n,o);case 2:return bi(s,t);default:return vi(s,t,n)}},Si=(e,r,t,n,o,s,a=!1)=>{let l="weeks",d;switch(s){case 0:l="weeks",d=dt;break;case 1:l="days",d=Me;break;case 2:l="hours",d=Ee;break}const c=Math.ceil(s===2?(t.x-.5*d)/d:t.x/d),u=P(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(c-1,l),f=Math.ceil(t.y/pe),y=n.findIndex((Y,G,B)=>B.slice(0,G+1).reduce((h,v)=>h+v,0)>=f),C=s===2?(c+1)*d:c*d,w=(f-1)*pe+pe,k=wi(o[y],y,u,s,a),m=P(e.startDate).isSame(P(e.endDate),"day");return{coords:{x:C,y:w},mouseCoords:t,resourceIndex:y,disposition:k,reservationData:{startTime:P(e.startDate).format("hh:mm A"),startDate:P(e.startDate).format("MMM D, YYYY"),endTime:P(e.endDate).format("hh:mm A"),endDate:P(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,departureAddress:e.departureAddress,destinationAddress:e.destinationAddress,returnAddress:e.returnAddress,isOneDayEvent:m,passengers:e.totalPassengers,readiness:e.readiness,subcontractConfirmed:e.subcontractConfirmed}}};function Ci(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function Mi(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const u of e)!u.isSubcontract&&u.capacity!=null&&t.add(u.capacity);const n=[...t].sort((u,f)=>u-f);if(n.length<2)return r;const o=Math.min(5,n.length),s=Ci(n,o),a=[];let l=0;for(const u of s)a.push({min:n[l],max:n[u-1],values:n.slice(l,u)}),l=u;a.push({min:n[l],max:n[n.length-1],values:n.slice(l)});const d=[],c=new Map;return a.forEach((u,f)=>{const y="__auto_cat_"+f,C=u.min===u.max?u.min+" pax":u.min+"-"+u.max+" pax";d.push({id:y,name:C,minPassengers:u.min,maxPassengers:u.max});for(const w of u.values)c.set(w,y)}),{categories:d,capacityToCategoryId:c}}const ki=(e,r,t,n)=>{const o=[];let s=0,a=[],l=0;return r.length>n?(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=n&&(o.push(a),s+=a.length,a=[],l=0),l++,a.push(u)}),t.slice(s).length<=n&&(a=[],r.slice(s).forEach((d,c)=>{const u={id:e[c+s].id,label:e[c+s].label,data:d,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};a.push(u),c===r.length-s-1&&o.push(a)})),o):(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};a.push(u)}),o.push(a),o)};var Cn={},$i={get exports(){return Cn},set exports(e){Cn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})($i);const Di=Cn;var Mn={},Ei={get exports(){return Mn},set exports(e){Mn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(Ei);const _i=Mn,Ti=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let a=0;a<o.length;a++){const l=P(t.startDate).startOf("day"),d=P(t.endDate).startOf("day"),c=P(o[a].startDate).startOf("day"),u=P(o[a].endDate).startOf("day");if(l.isBetween(c,u,null,"[]")||d.isBetween(c,u,null,"[]")||l.isBefore(c,"minute")&&d.isAfter(u,"minute")||l.isAfter(c,"minute")&&d.isBefore(u,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};P.extend(Di),P.extend(_i);const Ir=new WeakMap,Ai=e=>{const r=Ir.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const a=P(o.startDate),l=P(s.startDate),d=a.startOf("day").diff(l.startOf("day"),"day");return d!==0?d:a.diff(l)}),n=Ti(t);return Ir.set(e,n),n},Pi=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const a=Ai(s.data);return o[0].push(a),o[1].push(Math.max(a.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},Oi=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,Ii=e=>{const{recordsThreshold:r}=He(),[t,n]=p.useState(0),[o,s]=p.useState(0),a=p.useRef(null);p.useEffect(()=>{a.current=document.getElementById(Ze)},[]);const{projectsPerPerson:l,rowsPerPerson:d}=p.useMemo(()=>Pi(e),[e]),c=p.useMemo(()=>ki(e,l,d,r),[e,l,r,d]),u=p.useCallback(()=>{c[o].length&&a.current&&(a.current.scroll({top:0}),n(m=>m+c[Math.max(o,0)].length),s(m=>Math.min(m+1,c.length-1)),window.scroll({top:0}))},[o,c]),f=p.useCallback(()=>{c[o].length&&(n(m=>Math.max(m-c[o-1].length,0)),s(m=>Math.max(m-1,0)))},[o,c]),y=p.useCallback(()=>{n(0),s(0)},[]),C=t+c[o].length,w=p.useMemo(()=>d.slice(t,C),[C,d,t]),k=p.useMemo(()=>l.slice(t,C),[C,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:k,rowsPerItem:w,totalRowsPerPage:Oi(c[o]),next:u,previous:f,reset:y}};var kn={},Yi={get exports(){return kn},set exports(e){kn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(Yi);const Li=kn;var $n={},Ni={get exports(){return $n},set exports(e){$n=e}};(function(e,r){(function(t,n){e.exports=n(nt)})(De,function(t){function n(y){return y&&typeof y=="object"&&"default"in y?y:{default:y}}var o=n(t);function s(y){return y%10<5&&y%10>1&&~~(y/10)%10!=1}function a(y,C,w){var k=y+" ";switch(w){case"m":return C?"minuta":"minutę";case"mm":return k+(s(y)?"minuty":"minut");case"h":return C?"godzina":"godzinę";case"hh":return k+(s(y)?"godziny":"godzin");case"MM":return k+(s(y)?"miesiące":"miesięcy");case"yy":return k+(s(y)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,u=function(y,C){return c.test(C)?l[y.month()]:d[y.month()]};u.s=d,u.f=l;var f={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:u,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(y){return y+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(f,null,!0),f})})(Ni);const Fi=$n;var Dn={},Bi={get exports(){return Dn},set exports(e){Dn=e}};(function(e,r){(function(t,n){e.exports=n(nt)})(De,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(d,c,u){var f=s[u];return Array.isArray(f)&&(f=f[c?0:1]),f.replace("%d",d)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return o.default.locale(l,null,!0),l})})(Bi);const zi=Dn;var En={},Hi={get exports(){return En},set exports(e){En=e}};(function(e,r){(function(t,n){e.exports=n(nt)})(De,function(t){function n(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),a="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,d=function(u,f){return l.test(f)?s[u.month()]:a[u.month()]};d.s=a,d.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:d,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(u){return u+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Hi);const Wi=En;var _n={},ji={get exports(){return _n},set exports(e){_n=e}};(function(e,r){(function(t,n){e.exports=n(nt)})(De,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return o.default.locale(s,null,!0),s})})(ji);const Zi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:Li},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:Fi},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"One Day",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:_n},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:Wi},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:zi}];class Vi{constructor(){go(this,"locales",Zi)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const Ht=new Vi,Yr=p.createContext({localesData:Ht.getLocales(),currentLocale:Ht.getLocales()[0],setCurrentLocale:()=>{}}),Gi=({children:e,lang:r,translations:t})=>{const[n,o]=p.useState("en"),s=Ht.getLocales(),a=p.useCallback(()=>{const f=s.find(y=>y.id===n);return typeof(f==null?void 0:f.dayjsTranslations)=="object"&&P.locale(f.dayjsTranslations),f||s[0]},[n,s]),[l,d]=p.useState(a()),c=f=>{localStorage.setItem("locale",f.translateCode),d(f)};p.useEffect(()=>{t==null||t.forEach(f=>{s.find(C=>C.id===f.id)||Ht.addLocales(f)})},[s,t]),p.useEffect(()=>{const f=localStorage.getItem("locale"),y=r??f??"en";localStorage.setItem("locale",y),o(y),d(a())},[a,r]);const{Provider:u}=Yr;return i.jsx(u,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},Ve=()=>p.useContext(Yr).currentLocale.lang,Xi=e=>re.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},re.createElement("defs",null,re.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),re.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},re.createElement("stop",{offset:.47,stopColor:"#ccc"}),re.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),re.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),re.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),re.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),re.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),re.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),re.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),re.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),re.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),re.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),re.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Ui=x.div`
  height: 440px;
  width: 514px;
  position: relative;
`,Ki=x.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Ji=({onTileClick:e})=>{const{feelingEmpty:r}=Ve();return i.jsxs(Ui,{onClick:e,children:[i.jsx(Xi,{}),i.jsx(Ki,{children:r})]})},qi=x.div`
  position: relative;
  display: flex;
`,Qi=x.div`
  position: relative;
  margin-left: ${Ae};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Ri=x.div`
  width: calc(${({width:e})=>e}px - ${Ae}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ae}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,ea=new Set,ta={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:Mt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function na(e,r){const t=r?[...r].sort((l,d)=>l.maxPassengers-d.maxPassengers):[],n=[];for(const l of t){const d=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);d.length>0&&n.push({type:"category",category:l,items:d})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?n.push({type:"uncategorized",items:s}):s.length>0&&n.push({type:"uncategorized",items:s});const a=e.filter(l=>l.isSubcontract);return a.length>0&&n.push({type:"subcontract",items:a}),n}const ra=({data:e,baseData:r,categories:t,onTileClick:n,onItemClick:o,toggleTheme:s,topBarWidth:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:u,onMultiTimeRangeSelect:f,clickToAddConfig:y})=>{const[C,w]=p.useState(ta),[k,m]=p.useState(e),[Y,G]=p.useState(!1),[B,A]=p.useState(!1),[h,v]=p.useState(""),[b,E]=p.useState(new Set),[S,D]=p.useState(new Set),X=p.useRef([]);p.useEffect(()=>()=>X.current.forEach(clearTimeout),[]);const{zoom:K,startDate:I,isLoading:$,config:{includeTakenHoursOnWeekendsInDayView:O,showTooltip:z,showThemeToggle:L}}=He(),H=p.useRef(null),Q=p.useRef(null),[ne,se]=p.useState(124),{page:F,projectsPerPerson:j,rowsPerItem:J,currentPageNum:te,pagesAmount:M,next:Z,previous:T,reset:R}=Ii(k),{effectiveCategories:W,effectivePage:N}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:F};const ce=Mi(F);if(ce.categories.length===0)return{effectiveCategories:void 0,effectivePage:F};const le=F.map(ie=>{if(ie.isSubcontract||ie.capacity==null)return ie;const Se=ce.capacityToCategoryId.get(ie.capacity);return Se?{...ie,categoryId:Se}:ie});return{effectiveCategories:ce.categories,effectivePage:le}},[t,F]),g=p.useCallback(ce=>{if(b.has(ce)){E(ie=>{const Se=new Set(ie);return Se.delete(ce),Se});return}if(Dr()){E(ie=>new Set(ie).add(ce));return}D(ie=>new Set(ie).add(ce));const le=setTimeout(()=>{E(ie=>new Set(ie).add(ce)),D(ie=>{const Se=new Set(ie);return Se.delete(ce),Se})},190);X.current.push(le)},[b]),U=p.useMemo(()=>{const ce=[],le=W?[...W].sort((ie,Se)=>ie.maxPassengers-Se.maxPassengers):[];for(const ie of le)N.some(Se=>!Se.isSubcontract&&Se.categoryId===ie.id)&&ce.push(ie.id);return N.some(ie=>ie.isSubcontract)&&ce.push("__subcontract__"),ce},[W,N]),_=p.useCallback(()=>{E(new Set)},[]),V=p.useCallback(()=>{E(new Set(U))},[U]),ee=p.useMemo(()=>{if(S.size===0)return ea;const ce=new Set;for(const le of N){const ie=le.isSubcontract?"__subcontract__":le.categoryId;ie&&S.has(ie)&&ce.add(le.id)}return ce},[S,N]),{visiblePage:q,visibleRowsPerItem:ae,visibleTotalRows:he,visibleProjectsPerPerson:de,separatorRowIndices:ge,subcontractSeparatorRow:Ce}=p.useMemo(()=>{const ce=na(N,W),le=((W==null?void 0:W.length)??0)>0,ie=new Map;F.forEach((_e,yt)=>ie.set(_e.id,yt));const Se=[],Ie=[],Xe=[],Ue=[];let rt=0,jt=-1;for(const _e of ce)if(_e.type==="subcontract"||_e.type==="category"&&le){const vt=_e.type==="subcontract"?"__subcontract__":_e.category.id,xt=b.has(vt);if(Ue.push(rt),_e.type==="subcontract"&&(jt=rt),!xt)for(const ot of _e.items){const Zt=ie.get(ot.id)??0,Vt=J[Zt];Se.push(ot),Ie.push(Vt),Xe.push(j[Zt]),rt+=Vt}}else for(const vt of _e.items){const xt=ie.get(vt.id)??0,ot=J[xt];Se.push(vt),Ie.push(ot),Xe.push(j[xt]),rt+=ot}const qe=Ie.reduce((_e,yt)=>_e+yt,0);return{visiblePage:Se,visibleRowsPerItem:Ie,visibleTotalRows:qe,visibleProjectsPerPerson:Xe,separatorRowIndices:Ue,subcontractSeparatorRow:jt}},[N,W,F,b,J,j]),ye=p.useRef(wn((ce,le,ie,Se,Ie,Xe)=>{if(!H.current)return;const{tile:Ue,segmentId:rt}=ke(ce);if(!rt||!Ue){G(!1);return}const jt=fe(rt,le),qe=H.current.getBoundingClientRect(),_e=Ue.getBoundingClientRect(),yt={x:ce.clientX-qe.left,y:ce.clientY-qe.top},vt={x:ce.clientX-qe.left,y:ce.clientY-qe.top},xt={x:_e.left-qe.left,y:_e.top-qe.top,width:_e.width,height:_e.height},{coords:{x:ot,y:Zt},resourceIndex:Vt,disposition:ql,reservationData:Ql}=Si(jt,ie,yt,Se,Ie,Xe,O);w({coords:{x:ot,y:Zt},mouseCoords:vt,resourceIndex:Vt,disposition:ql,reservationData:Ql,tileBounds:xt}),G(!0)},4)),oe=p.useRef(wn((ce,le)=>{R(),m(ce.map(ie=>({...ie,data:ie.data.filter(Se=>{const{title:Ie,description:Xe,subtitle:Ue}=Se;return(Ie==null?void 0:Ie.toLowerCase().includes(le.toLowerCase()))||(Ue==null?void 0:Ue.toLowerCase().includes(le.toLowerCase()))||(Xe==null?void 0:Xe.toLowerCase().includes(le.toLowerCase()))})})).filter(ie=>ie.data.length>0))},500)),fe=(ce,le)=>{if(ce)return le.flatMap(ie=>ie.data).find(ie=>ie.segmentId===ce)},ke=ce=>{if(!ce.target)return{tile:null,segmentId:null};const le=ce.target.closest("[data-segment-id]");return le?{tile:le,segmentId:le.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},ue=ce=>{const le=ce.target.value;v(le),oe.current.cancel(),le?oe.current(e,le):(R(),m(e))},me=p.useCallback(()=>{ye.current.cancel(),G(!1)},[]);return p.useEffect(()=>{const ce=ie=>ye.current(ie,e,I,ae,de,K),le=H.current;if(le)return le.addEventListener("mousemove",ce),le.addEventListener("mouseleave",me),()=>{le.removeEventListener("mousemove",ce),le.removeEventListener("mouseleave",me)}},[ye,me,de,ae,I,K,e]),p.useEffect(()=>{h?(oe.current.cancel(),oe.current(e,h)):m(e)},[e,h]),p.useLayoutEffect(()=>{const ce=Q.current;if(!ce)return;const le=()=>se(ce.offsetHeight);le();const ie=new ResizeObserver(le);return ie.observe(ce),()=>ie.disconnect()},[]),i.jsxs(qi,{children:[i.jsx(cc,{headerHeight:ne,data:N,categories:W,pageNum:te,pagesAmount:M,rows:J,onLoadNext:Z,onLoadPrevious:T,searchInputValue:h,onSearchInputChange:ue,onItemClick:o,collapsedGroups:b,fadingGroups:S,onToggleGroup:g,allGroupIds:U,onExpandAll:_,onCollapseAll:V}),i.jsxs(Qi,{children:[i.jsx(Lc,{ref:Q,zoom:K,topBarWidth:a,showThemeToggle:L,toggleTheme:s}),e.length?i.jsx(yi,{data:q,baseData:r||e,zoom:K,rows:he,ref:H,onTileClick:n,onEventDrop:l,onEventDrag:d,draggableConfig:c,onDragStateChange:A,onTimeRangeSelect:u,onMultiTimeRangeSelect:f,clickToAddConfig:y,separatorRowIndices:ge,subcontractSeparatorRow:Ce,fadingUnitIds:ee}):i.jsx(Ri,{width:a,children:$?i.jsx(An,{isLoading:$,position:"left"}):i.jsx(Ji,{})}),z&&i.jsx(vl,{tooltipData:C,visible:Y&&!B})]})]})},oa=x.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Ae+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.primary};
`,Lr=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({$at:e})=>e==="end"?"flex-end":"flex-start"};
`,sa=x.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`,ia=x.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Nr=x.button`
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
`,aa=x.button`
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
`,ca=x.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin-left: 4px;
  text-transform: capitalize;
  white-space: nowrap;
`,la=x.div`
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
`,Fr=x.button`
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
`,da=x.label`
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
`,ua=x.button`
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
`,fa=x.span`
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
`,mt=({children:e,sw:r=2})=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:e}),ha=()=>{var r,t;const e=document.getElementById(vr);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(r=e==null?void 0:e.requestFullscreen)==null||r.call(e)},pa=()=>{const{config:e,date:r,zoom:t,handleGoNext:n,handleGoPrev:o,handleGoToday:s,setZoom:a,goToDate:l,toggleDisplayActiveUnits:d,toolbarActions:c}=He();Ve();const{filterButtonState:u=-1}=e,f=()=>{var y;(y=document.querySelector(`#${Ze} input[placeholder]`))==null||y.focus()};return i.jsxs(oa,{width:0,children:[i.jsxs(Lr,{$at:"start",children:[i.jsxs(ia,{children:[i.jsx(Nr,{onClick:o,"aria-label":"Anterior",children:i.jsx(mt,{children:i.jsx("path",{d:"m15 18-6-6 6-6"})})}),i.jsx(aa,{onClick:s,children:"Hoy"}),i.jsx(Nr,{onClick:n,"aria-label":"Siguiente",children:i.jsx(mt,{children:i.jsx("path",{d:"m9 18 6-6-6-6"})})})]}),i.jsx(ca,{children:r.locale(P.locale()).format("MMMM YYYY")}),e.showViewSwitcher!==!1&&i.jsxs(i.Fragment,{children:[i.jsx(sa,{}),i.jsxs(la,{children:[i.jsx("button",{className:t===2?"on":"",onClick:()=>a(2),children:"Día"}),i.jsx("button",{className:t===0?"on":"",onClick:()=>a(0),children:"Semana"}),i.jsx("button",{className:t===1?"on":"",onClick:()=>a(1),children:"Mes"})]})]}),e.showJumpToDate!==!1&&i.jsxs(da,{children:[i.jsxs(mt,{children:[i.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),i.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),i.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",i.jsx("input",{type:"date",onChange:y=>y.target.value&&l(y.target.value)})]}),i.jsxs(ua,{onClick:f,children:[i.jsxs(mt,{children:[i.jsx("circle",{cx:"11",cy:"11",r:"7"}),i.jsx("path",{d:"m20 20-3.2-3.2"})]}),"Buscar",i.jsx("span",{className:"k",children:"⌘K"})]})]}),i.jsxs(Lr,{$at:"end",children:[e.showFilterButton!==!1&&u>=0&&i.jsxs(Fr,{$primary:!!u,onClick:d,children:[i.jsx(mt,{children:i.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!u&&i.jsx(fa,{children:u})]}),e.showFullscreenButton!==!1&&i.jsxs(Fr,{onClick:ha,children:[i.jsx(mt,{children:i.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]}),c]})]})},ma={add:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>re.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),re.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Tn=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=Yt(),a=ma[e];return a?i.jsx(a,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},ga=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r];x.button`
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
  ${({theme:e,variant:r,disabled:t})=>ga(e,r,t)}
`;const ya=x.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${yr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Le};
`,va=x.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,xa=x.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,ba=x.div`
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
`,wa=x.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,Sa=x.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,Ca=x.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`,Ma=x.div`
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
`,ka=x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,$a=x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`,Da=x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,Ea=x.div`
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
`,Br="#cdd8d2",zr=[178,216,195],_a=[15,125,102],Ta=e=>{const r=Math.min(1,Math.max(0,e)),t=n=>Math.round(zr[n]+(_a[n]-zr[n])*r);return`rgb(${t(0)}, ${t(1)}, ${t(2)})`},Aa=()=>{const{date:e,zoom:r,data:t,goToDate:n,config:o}=He(),s=Ve(),a=p.useRef(null),[l,d]=p.useState(null),c=p.useMemo(()=>Array.from({length:12},(S,D)=>P().month(D).format("MMM").toUpperCase()),[s]),u=p.useMemo(()=>P().startOf("day"),[]),{domainStart:f,domainEnd:y,domainDays:C}=p.useMemo(()=>{const S=u.subtract(3,"month").startOf("month"),D=u.add(9,"month").endOf("month");return{domainStart:S,domainEnd:D,domainDays:D.diff(S,"day")+1}},[u]),w=S=>S.diff(f,"day")/C*100,k=S=>Math.min(100,Math.max(0,S)),m=p.useMemo(()=>{const S=[];let D=f.startOf("month");for(;D.isBefore(y);)S.push(D),D=D.add(1,"month");return S},[f,y]),Y=o==null?void 0:o.yearCounts,G=p.useMemo(()=>{const S=Math.ceil(C/7),D=new Array(S).fill(0),X=H=>{const Q=H.diff(f,"day");return Q<0||Q>=C?-1:Math.floor(Q/7)};if(Y&&Y.length)for(const H of Y){const Q=X(P(H.date));Q>=0&&(D[Q]+=H.count)}else for(const H of t??[])for(const Q of H.data??[]){const ne=X(P(Q.startDate));ne>=0&&(D[ne]+=1)}const K=Math.max(0,...D);if(K<=0)return D.map(()=>({h:0,color:Br}));const I=D.filter(H=>H>0).sort((H,Q)=>H-Q),$=I.length>>1,O=I.length%2?I[$]:(I[$-1]+I[$])/2,z=O>0?K/O:1,L=Math.min(1,Math.max(.45,1/(1+Math.log2(Math.max(1,z)))));return D.map(H=>H>0?{h:Math.min(100,100*Math.pow(H/K,L)),color:Ta(H/K)}:{h:0,color:Br})},[t,Y,f,C]),B=w(u),A=S=>{const{startDate:D,endDate:X}=zt(S,r),K=k(w(D));return{left:K,width:k(w(X))-K,startDate:D,endDate:X}},h=A(e),v=l?A(l.d):null,b=S=>`${S.date()} ${c[S.month()]}`,E=S=>{var K;const D=(K=a.current)==null?void 0:K.getBoundingClientRect();if(!D)return null;const X=Math.min(1,Math.max(0,(S-D.left)/D.width));return{f:X,d:f.add(Math.round(X*(C-1)),"day")}};return i.jsxs(ya,{children:[i.jsxs(va,{children:["Navegar",i.jsx("br",{}),"por fecha"]}),i.jsxs(xa,{ref:a,onClick:S=>{const D=E(S.clientX);D&&n(D.d.toDate())},onMouseMove:S=>{const D=E(S.clientX);D&&d({left:D.f*100,d:D.d})},onMouseLeave:()=>d(null),children:[i.jsx(ba,{children:m.map((S,D)=>i.jsx("span",{style:{left:`${w(S)}%`},children:D===0||S.month()===0?`${c[S.month()]} ${S.format("YY")}`:c[S.month()]},D))}),m.map((S,D)=>D===0?null:i.jsx(wa,{style:{left:`${w(S)}%`}},D)),i.jsx(Sa,{children:G.map((S,D)=>i.jsx(Ca,{style:{height:`${S.h}%`,background:S.color}},D))}),i.jsx(ka,{style:{left:`${h.left}%`,width:`${h.width}%`}}),i.jsx(Ma,{style:{left:`${k(B)}%`},children:i.jsx("span",{children:"HOY"})}),l&&v&&i.jsxs(i.Fragment,{children:[i.jsx($a,{style:{left:`${v.left}%`,width:`${v.width}%`}}),i.jsx(Da,{style:{left:`${l.left}%`}}),i.jsx(Ea,{style:{left:`${l.left}%`},children:`Ir a ${b(l.d)}`})]})]})]})},Pa=x.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Oa=x.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?yr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Ia=x.div`
  position: relative;
`,Ya=({data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,schedulerRef:u,onTimeRangeSelect:f,onMultiTimeRangeSelect:y,clickToAddConfig:C})=>{const{goToDate:w,handleGoToday:k,zoomIn:m,zoomOut:Y,zoom:G}=He();return p.useImperativeHandle(u,()=>({goToDate:w,goToToday:k,setZoom:B=>{if(!Mr(B))return;const A=B-G;if(A>0)for(let h=0;h<A;h++)m();else for(let h=0;h<Math.abs(A);h++)Y()}}),[w,k,G,m,Y]),i.jsx(ra,{data:e,baseData:r,categories:t,onTileClick:n,topBarWidth:o,onItemClick:s,toggleTheme:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onTimeRangeSelect:f,onMultiTimeRangeSelect:y,clickToAddConfig:C})},La=p.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:a,onTileClick:l,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:u,onItemClick:f,isLoading:y,onEventDrop:C,onEventDrag:w,draggableConfig:k,onTimeRangeSelect:m,onMultiTimeRangeSelect:Y,clickToAddConfig:G},B){var z;const A=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),h=p.useRef(null),v=p.useRef(null),[b,E]=p.useState((z=h.current)==null?void 0:z.clientWidth),S=p.useMemo(()=>P(s),[s]),[D,X]=p.useState(A.defaultTheme??"light"),K=()=>{X(D==="light"?"dark":"light")},I=D==="light"?vs:xs,$=A.theme?A.theme[I.mode]:{},O={...I,colors:{...I.colors,...$}};return p.useImperativeHandle(B,()=>({goToDate:L=>{var H;return(H=v.current)==null?void 0:H.goToDate(L)},goToToday:()=>{var L;return(L=v.current)==null?void 0:L.goToToday()},setZoom:L=>{var H;return(H=v.current)==null?void 0:H.setZoom(L)}}),[]),p.useLayoutEffect(()=>{const L=()=>{h.current&&E(h.current.clientWidth)};return L(),window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[]),i.jsxs(i.Fragment,{children:[i.jsx(ys,{}),i.jsx(ps,{theme:O,children:i.jsx(Gi,{lang:A.lang,translations:A.translations,children:i.jsx(li,{data:r,isLoading:!!y,config:A,onRangeChange:a,defaultStartDate:S,handleToggleDisplayActiveUnits:d,onClearFilterData:c,toolbarActions:u,children:i.jsxs(Pa,{id:vr,children:[i.jsx(Oa,{showScroll:!!r.length,$footer:A.showOverview!==!1&&!!r.length,id:Ze,ref:h,children:i.jsx(Ia,{children:i.jsx(Ya,{data:r,baseData:n,categories:t,onTileClick:l,topBarWidth:b??0,onItemClick:f,toggleTheme:K,onEventDrop:C,onEventDrag:w,draggableConfig:k,schedulerRef:v,onTimeRangeSelect:m,onMultiTimeRangeSelect:Y,clickToAddConfig:G})})}),A.showOverview!==!1&&!!r.length&&i.jsx(Aa,{})]})})})})]})}),Na=x.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,Fa=x.button`
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
`,Ba=x.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,za=x.p`
  ${ct}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,Hr=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:a,loadPrevious:l}=Ve(),d=e==="next"?`${a} ${o+2}/${s}`:`${l} ${o}/${s}`;return i.jsx(Na,{intent:e,children:i.jsxs(Fa,{onClick:r,isVisible:n,children:[t&&i.jsx(Ba,{children:t}),i.jsx(za,{children:d})]})})},Ha=x.div`
  min-width: ${Ae+"px"};
  max-width: ${Ae+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,Wa=x.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({$height:e})=>e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Ae}px;
  background-color: ${({theme:e})=>e.colors.background};
  z-index: 3;
`,ja=x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,Za=x.input`
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
`,Va=x.div`
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
`,Ga=ze`
  from { opacity: 1; }
  to { opacity: 0; }
`,Wr=x.div`
  ${({$fading:e})=>e&&et`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Ga} 180ms ease forwards;
      }
    `}
`,Xa=x.button`
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
`,Ua=ze`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,Ka=x.div`
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
    animation: ${Ua} 200ms ease-out;
  }
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,Ja=x.div`
  display: flex;
  align-items: center;
`,qa=x.div`
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
`,Qa=x.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,Ra=x.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,jr=x.p`
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
`,ec=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),tc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),i.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),i.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),nc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),i.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),rc=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>i.jsx(Ka,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:i.jsxs(Ja,{children:[i.jsx(qa,{$provider:o,children:ec(r.icon)?i.jsx(Qa,{src:r.icon,alt:""}):o?i.jsx(nc,{}):i.jsx(tc,{})}),i.jsxs(Ra,{children:[i.jsx(jr,{isMain:!0,children:r.title}),i.jsx(jr,{children:r.subtitle})]})]})}),oc=x.div`
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
`,sc=x.span`
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
`,ic=x.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:e.colors.accent};
  flex-shrink: 0;
`,ac=x.div`
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
`,Zr=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>i.jsxs(oc,{$variant:o,onClick:n,title:e,children:[i.jsx(ac,{$collapsed:t,children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:i.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx(sc,{$variant:o,children:e}),i.jsx(ic,{$variant:o,children:r})]}),cc=({data:e,categories:r,headerHeight:t,rows:n,onLoadNext:o,onLoadPrevious:s,pageNum:a,pagesAmount:l,searchInputValue:d,onSearchInputChange:c,onItemClick:u,collapsedGroups:f,fadingGroups:y,onToggleGroup:C,allGroupIds:w,onExpandAll:k,onCollapseAll:m})=>{const[Y,G]=p.useState(!1),B=Ve(),A=()=>G($=>!$),h=r?[...r].sort(($,O)=>$.maxPassengers-O.maxPassengers):[],v=h.length>0,b=w.length>0,E=b&&f.size===w.length;b&&f.size;const S=e.filter($=>$.isSubcontract),D=B.subcontract??"Subcontract",X=$=>{const O=e.indexOf($);return i.jsx(rc,{id:$.id,item:$.label,rows:n[O],onItemClick:u,isSubcontract:$.isSubcontract},$.id)},K=$=>{const O=e.filter(Q=>!Q.isSubcontract&&Q.categoryId===$.id);if(O.length===0)return null;const z=f.has($.id),L=y.has($.id),H=$.name;return i.jsxs("div",{children:[i.jsx(Zr,{label:H,count:O.length,isCollapsed:z||L,onToggle:()=>C($.id),variant:"category"}),!z&&i.jsx(Wr,{$fading:L,children:O.map(X)})]},$.id)},I=e.filter($=>!$.isSubcontract&&(!$.categoryId||!v));return i.jsxs(Ha,{children:[i.jsxs(Wa,{$height:t,children:[i.jsxs(ja,{children:[i.jsxs(Va,{isFocused:Y,children:[i.jsx(Za,{placeholder:B.search,value:d,onChange:c,onFocus:A,onBlur:A}),i.jsx(Tn,{iconName:"search"})]}),b&&i.jsx(Xa,{title:E?"Expand all":"Collapse all",onClick:E?k:m,$allCollapsed:E,children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:E?i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),i.jsx(Hr,{intent:"previous",isVisible:a!==0,onClick:s,icon:i.jsx(Tn,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]}),v?h.map(K):I.map(X),v&&I.length>0&&I.map(X),S.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Zr,{label:D,count:S.length,isCollapsed:f.has("__subcontract__")||y.has("__subcontract__"),onToggle:()=>C("__subcontract__"),variant:"subcontract"}),!f.has("__subcontract__")&&i.jsx(Wr,{$fading:y.has("__subcontract__"),children:S.map(X)})]}),i.jsx(Hr,{intent:"next",isVisible:a!==l-1,onClick:o,icon:i.jsx(Tn,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]})},lc=x.div`
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
`,dc=ze`
from{
    left: -100%;
}
to{
    left: 100%;
}`,uc=x.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${dc} 1s infinite;
`,An=({isLoading:e,position:r})=>e?i.jsx(lc,{position:r,children:i.jsx(uc,{})}):null,Ge=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:a,textYPos:l,label:d,font:c,isBottomRow:u,fillStyle:f,topText:y,bottomText:C,strokeStyle:w,labelBetweenCells:k}=e;if(t.beginPath(),t.strokeStyle=w??r.colors.border,t.setLineDash([]),d&&c&&l){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,a),k?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+a),t.lineTo(n+s,o+a),t.stroke(),t.moveTo(n+s/2,o+a),t.lineTo(n+s/2,o+a-5),t.stroke()):t.strokeRect(n+.5,o+.5,s,a),t.font=c;const m=n+s/2-t.measureText(d).width/2;t.textBaseline="middle",t.fillStyle=r.colors.accent,t.fillText(d,m,l)}if(u&&f&&y&&C){t.fillStyle=f,t.fillRect(n,o,s,a),t.strokeRect(n+.5,o+.5,s,a),t.font=y.font;const m=n+s/2-t.measureText(y.label).width/2;t.fillStyle=y.color,t.fillText(y.label,m,y.y),t.font=C.font;const Y=n+s/2-t.measureText(C.label).width/2;t.fillStyle=C.color,t.fillText(C.label,Y,C.y)}},Pn=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},fc=(e,r,t,n,o=tt)=>{const s=Ne+o+je,a=s-je/ws,l=s-je/Ss,d=Ne+o;let c=0;for(let u=0;u<r;u++){const f=wr(P(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(u,"days")),y=f.isCurrentDay;if(Ge({ctx:e,x:c,y:d,width:Me,height:je,isBottomRow:!0,fillStyle:y?n.colors.currentDay:f.isBusinessDay?n.colors.gridBackground:n.colors.primary,topText:{y:a,label:y?"":f.dayName.toUpperCase(),font:Fe.bottomRow.name,color:Pn({isCurrent:!1,isBusinessDay:f.isBusinessDay},n)},bottomText:{y:l,label:`${f.dayOfMonth}`,font:y?`700 10px ${Le}`:Fe.bottomRow.number,color:y?n.colors.today:Pn({isCurrent:!1,isBusinessDay:f.isBusinessDay,variant:"bottomRow"},n)}},n),y){const k=c+Me/2,m=a-13/2;e.save(),e.fillStyle=n.colors.today,e.beginPath(),e.roundRect?e.roundRect(k-30/2,m,30,13,5):e.rect(k-30/2,m,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Le}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",k,m+13/2+.5),e.restore()}c+=Me}},hc=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*Oe;const s=Ne;let l=t.month;for(let d=0;d<r;d++){l>=cn&&(l=0);const c=br(t,d)*Oe;Ge({ctx:e,x:o,y:s,width:c,height:tt,textYPos:mr,label:P().month(l).format("MMMM").toUpperCase(),font:Fe.bottomRow.number},n),o+=c,l++}},pc=(e,r,t)=>{let o=0,s=0,a=P(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month();o=-r.dayOfMonth*Me+Me;for(let l=0;l<cn;l++)a>cn-1&&(a=0),s=P(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(l,"months").daysInMonth()*Me,Ge({ctx:e,x:o,y:0,width:s,height:Ne,textYPos:dn,label:P(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(a).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${P(`${r.year}-${r.month+1}-${r.dayOfMonth}`).month(a).format("MMMM YYYY").toUpperCase()}`,font:Fe.topRow},t),o+=s,a++},mc=(e,r,t,n)=>{const o=7*Me,s=Ne,a=e.canvas.width/o+o,l=r.weekOfYear;let d=0;for(let c=0;c<a;c++){const u=P(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let f=(l+c)%fr;f<=0&&(f+=fr),u!==1&&c===0&&(d=-u*Me+Me),Ge({ctx:e,x:d,y:s,width:o,height:tt,textYPos:mr,label:`${t.toUpperCase()} ${f}`,font:Fe.middleRow},n),d+=o}},gc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},yc=(e,r,t,n,o)=>{const s=Lt-je/1.6,a=Lt-je/4.5,l=Ne+tt;let d=0;for(let c=0;c<r;c++){const u=P(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),f=u.isSame(P(),"week");Ge({ctx:e,x:d,y:l,width:dt,height:je,isBottomRow:!0,fillStyle:f?o.colors.today+"26":gc({isCurrent:f,variant:"yearView"},o),topText:{y:s,label:u.isoWeek().toString(),font:f?`700 14px ${Le}`:Fe.bottomRow.name,color:f?o.colors.today:Pn({isCurrent:f},o)},bottomText:{y:a,label:n.toUpperCase(),font:Fe.middleRow,color:o.colors.placeholder}},o),d+=dt}},vc=(e,r,t,n)=>{const s=r.year,a=e.canvas.width*2;let l=0,d=0,c=(xr(s)-t+1)*Oe,u=0;for(;l+u<=a;)d>0&&(c=xr(s+d)*Oe),u+c>a&&d>0&&(c=Math.ceil((a-u)/Oe)*Oe),Ge({ctx:e,x:l,y:0,width:c,height:Ne,textYPos:dn,label:(s+d).toString(),font:Fe.topRow},n),l+=c,u+=c,d++},xc=(e,r,t,n)=>{const o=Math.floor(r/Nt)+2,s=Nt*Ee;let d=-P(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*Ee+.5*Ee;for(let c=0;c<o;c++){const u=P(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Ge({ctx:e,x:d,y:ut,width:s,height:Ct,textYPos:ut+Ct/2+2,label:u,font:Fe.bottomRow.number},n),d+=s}},bc=(e,r,t,n)=>{const o=Math.ceil(r/Nt),s=P(`${t.year}-${t.month+1}-${t.dayOfMonth}`),a=s.add(o-1,"days"),l=s.month(),d=a.add(1,"day").month(),c=l===d?1:2;let u=.5*Ee;for(let f=0;f<c;f++){const y=P(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),w=P(`${t.year}-${t.month+f+1}-01T:23:59:59`).endOf("month"),k=w.format("MMMM").toUpperCase(),m=w.diff(y,"hour")+1,Y=f===0?m*Ee:r*Ee;Ge({ctx:e,x:u,y:0,width:Y,height:ut,textYPos:dn,label:k,font:Fe.topRow},n),u+=Y}},wc=(e,r,t,n)=>{let o=0;const s=ut+Ct,a=P(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=Ee;for(let d=0;d<r;d++){const c=a.add(d,"hours").format("h:00a").toUpperCase();Ge({ctx:e,x:o,y:s,width:l,height:an,label:c,font:Fe.bottomRow.hoursInDay,textYPos:ut+Ct+an/2+2,labelBetweenCells:!0},n),o+=Ee}},Sc=(e,r,t,n,o,s,a,l=!0)=>{switch(r){case 0:vc(e,n,s,a),hc(e,t,n,a),yc(e,t,n,o,a);break;case 1:pc(e,n,a),l&&mc(e,n,o,a),fc(e,t,n,a,l?tt:0);break;case 2:bc(e,t,n,a),xc(e,t,n,a),wc(e,t,n,a);break}},Cc=x.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,Mc=x.div`
  position: sticky;
  left: 0;
  width: ${({$width:e})=>e}px;
  z-index: 3;
`,kc=x.div`
  height: ${({$height:e})=>e??Lt}px;
  display: block;
`,$c=x.canvas``,Dc={transfer:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 8h13l-3-3"}),i.jsx("path",{d:"M20 16H7l3 3"})]}),sun:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),i.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),i.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:i.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 3 2 20h20z"}),i.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),i.jsx("path",{d:"M12 7.5V12l3 2"})]})},Be=({name:e,className:r,strokeWidth:t=2})=>i.jsx("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:Dc[e]}),Ec=x.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Ae+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,Vr=x.span`
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
`,Wt=x.span`
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
`,_c=x.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,Tc=x.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,Ac=x.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,Pc=x.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,Oc=x.span`
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
`,Ic=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],Yc=()=>i.jsxs(Ec,{children:[i.jsx(Vr,{children:"Leyenda"}),i.jsxs(Wt,{children:[i.jsx(Be,{name:"transfer"})," Transfer"]}),i.jsxs(Wt,{children:[i.jsx(Be,{name:"sun"})," Gira 1 día"]}),i.jsxs(Wt,{children:[i.jsx(Be,{name:"tour"})," Gira multidía"]}),i.jsxs(Wt,{children:[i.jsx(_c,{children:"SUB"})," Subcontrato"]}),i.jsx(Tc,{}),i.jsxs(Vr,{children:["Estado ",i.jsx("em",{children:"franja izq. + punto esq."})]}),Ic.map(e=>i.jsxs(Ac,{children:[i.jsx(Pc,{style:{background:e.stripe}}),i.jsx(Oc,{style:{color:e.color},children:i.jsx(Be,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),Lc=p.forwardRef(function({zoom:r,topBarWidth:t,showThemeToggle:n,toggleTheme:o},s){const{week:a}=Ve(),{date:l,cols:d,dayOfYear:c,startDate:u,config:f}=He(),y=p.useRef(null),C=Yt(),w=f.showWeekRow!==!1,k=r===2?bs:r===1&&!w?Ne+je:Lt,m=p.useCallback(Y=>{const G=Sn(),B=k+1;$r(Y,G,B),Sc(Y,r,d,u,a,c,C,w)},[d,c,u,a,r,C,w,k]);return p.useEffect(()=>{if(!y.current)return;const Y=y.current.getContext("2d");if(!Y)return;const G=()=>m(Y);return window.addEventListener("resize",G),()=>window.removeEventListener("resize",G)},[m]),p.useEffect(()=>{const Y=y.current;if(!Y)return;Y.style.letterSpacing="1px";const G=Y.getContext("2d");G&&m(G)},[l,r,m]),i.jsxs(Cc,{ref:s,children:[(f.showTopbar!==!1||f.showLegend!==!1)&&i.jsxs(Mc,{$width:t,children:[f.showTopbar!==!1&&i.jsx(pa,{width:t,showThemeToggle:n,toggleTheme:o}),f.showLegend!==!1&&i.jsx(Yc,{})]}),i.jsx(kc,{$height:k,id:Cs,children:i.jsx($c,{ref:y})})]})}),Nc=(e,r,t)=>{let n;switch(t){case 0:n=Oe;break;case 2:n=Ee;break;default:n=Me}const s=e.startDate.startOf("day"),a=e.endDate.startOf("day"),l=r.startDate.startOf("day"),d=r.endDate.startOf("day"),c=()=>{let u;switch(t){case 2:u=(e.startDate.diff(r.startDate,"minute")/$e+1)*n-n/2;break;default:u=s.diff(l,"day")*n}return Math.max(0,u)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(e.startDate,"minute")/$e*n,50);break;default:u=Math.max(a.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(r.startDate,"minute")/$e*n+.5*n,50);break;default:u=Math.max(a.diff(l,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(e.startDate,"minute")/$e*n,50);break;default:u=Math.max(d.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(r.startDate,"minute")/$e*n,50);break;default:u=Math.max(d.diff(l,"day")*n+n,50)}return{x:c(),width:u}}return{x:c(),width:50}},Fc=(e,r,t,n,o,s)=>{const a=e*pe+Ms,l=r.hour(),d=t.hour();let c,u,f,y;switch(s){case 2:{c=P(n),u=P(o),f=P(r).hour(l).minute(0),y=P(t).hour(d).minute(0);break}default:{c=P(n).hour(0).minute(0),u=P(o).hour(23).minute(59),f=r,y=t;break}}return{...Nc({startDate:c,endDate:u},{startDate:f,endDate:y},s),y:a}},Gr=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"},Xr={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2",label:"Sin chofer"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22",label:"No notificado al chofer"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0",label:"Notificado"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63",label:"Confirmado"}};x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,x.p`
  ${ct}
  ${lt}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const Bc=ze`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,zc=ze`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`,Hc=x.button`
  ${ct}
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
    animation: ${Bc} 180ms ease-out;
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
  ${({$exiting:e})=>e&&et`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${zc} 190ms ease-out forwards;
      }
    `}
`,Wc=x.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`,jc=x.div`
  position: sticky;
  left: ${Ae+4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`,Ur=x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,Zc=x.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,Vc=x.span`
  ${lt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,Gc=x.span`
  ${lt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,Xc=x.span`
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
`,Uc=x.div`
  ${lt}
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
`,Kr=x.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,Jr=x.span`
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
`,qr=x.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,Kc=x.div`
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
`,Qr=x.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  white-space: nowrap;
  text-align: center;
  max-width: 100%;
  background: ${({$end:e})=>e?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.95)"};
  color: ${({$end:e})=>e?"#3A4C46":"#183D3D"};
`,Jc=34,qc="#3E8E5A",Qc="#D98A22",Rr=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onDragStart:s,isDragging:a=!1,isDraggable:l=!0,yOffset:d=0,exiting:c=!1})=>{const{date:u}=He(),f=zt(u,t),{y,x:C,width:w}=Fc(e,f.startDate,f.endDate,r.startDate,r.endDate,t),{colors:k}=Yt(),m=p.useRef(null),Y=P(r.startDate).isSame(P(r.endDate),"day"),G=r.eventType===Mt.Tour,B=r.eventType===Mt.Transfer,A=Y&&(G||B),h=K=>{m.current={x:K.clientX,y:K.clientY},l&&s&&(K.preventDefault(),s(r,K))},v=K=>{if(m.current){const I=Math.abs(K.clientX-m.current.x),$=Math.abs(K.clientY-m.current.y);Math.sqrt(I*I+$*$)<=5&&(o==null||o(r)),m.current=null}else o==null||o(r)},b={left:`${C}px`,top:`${y+d}px`,backgroundColor:`${r.bgColor??k.defaultTile}`,width:`${w}px`,color:Gr(r.bgColor??"")},E=!n&&r.readiness?Xr[r.readiness]:null,S=n&&r.subcontractConfirmed===!1,D=n?S?Qc:qc:E==null?void 0:E.stripe,X=K=>i.jsxs(Hc,{"data-segment-id":r.segmentId,style:b,onClick:v,onMouseDown:h,onDragStart:I=>I.preventDefault(),isDraggable:l,isDragging:a,$unconfirmed:S,$exiting:c,children:[D&&i.jsx(Wc,{style:{background:D}}),K]});return X(A?i.jsxs(i.Fragment,{children:[(n||E)&&i.jsx(Kr,{$sm:!0,children:n?i.jsx(qr,{children:"SUB"}):E&&i.jsx(Jr,{$sm:!0,style:{color:E.color},children:i.jsx(Be,{name:E.icon,strokeWidth:E.icon==="check"?2.6:2.2})})}),i.jsxs(Kc,{$transfer:B,children:[i.jsx(Be,{name:B?"transfer":"sun",strokeWidth:2.4}),w>=Jc&&i.jsxs(i.Fragment,{children:[i.jsx(Qr,{children:P(r.startDate).format("h:mm A")}),!B&&i.jsx(Qr,{$end:!0,children:P(r.endDate).format("h:mm A")})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(Kr,{children:n?i.jsx(qr,{children:"SUB"}):E&&i.jsx(Jr,{style:{color:E.color},children:i.jsx(Be,{name:E.icon,strokeWidth:E.icon==="check"?2.6:2.2})})}),r.bookingNumber&&i.jsx(Xc,{children:r.bookingNumber}),i.jsxs(jc,{children:[i.jsxs(Ur,{$pad:!0,children:[i.jsx(Zc,{children:i.jsx(Be,{name:B?"transfer":"tour"})}),i.jsx(Vc,{children:r.title})]}),r.subtitle&&i.jsx(Ur,{children:i.jsx(Gc,{children:r.subtitle})}),r.driver&&i.jsxs(Uc,{children:[i.jsx(Be,{name:"person"}),r.driver]})]})]}))},eo=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Pe},Rc=ze`
  from { opacity: 0; }
  to { opacity: 1; }
`,el=ze`
  from { opacity: 1; }
  to { opacity: 0; }
`,tl=x.div`
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
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Rc} 200ms ease-out;
  }
  ${({$fading:e})=>e&&et`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${el} 180ms ease forwards;
      }
    `}
`,nl=({data:e,zoom:r,onTileClick:t,onDragStart:n,isDraggable:o,draggingEventId:s,separatorRowIndices:a=[],fadingUnitIds:l})=>{const{nodes:d,liveMap:c}=p.useMemo(()=>{const k=new Map;let m=0;return{nodes:e.map((G,B)=>{B>0&&(m+=Math.max(e[B-1].data.length,1));const A=!!(l!=null&&l.has(G.id));if(!G.data.some(h=>h.length>0)){const h=eo(m,a);return[i.jsx(tl,{$fading:A,style:{top:`${m*pe+h}px`},children:"Disponible"},`dispo-${G.id}`)]}return G.data.map((h,v)=>h.map(b=>{const E=s===b.segmentId,S=o?o(b):!1,D=v+m,X=eo(D,a);return k.set(b.segmentId,{project:b,absoluteRow:D,yOffset:X,isSubcontract:!!G.isSubcontract}),i.jsx(Rr,{row:D,data:b,zoom:r,isSubcontract:G.isSubcontract,onTileClick:t,onDragStart:n,isDragging:E,isDraggable:S,yOffset:X,exiting:A},b.segmentId)}))}).flat(2),liveMap:k}},[e,t,r,n,o,s,a,l]),u=p.useRef(new Map),f=p.useRef([]),[y,C]=p.useState([]);p.useEffect(()=>()=>f.current.forEach(clearTimeout),[]),p.useEffect(()=>{const k=u.current;u.current=c;const m=[];if(k.forEach((B,A)=>{c.has(A)||m.push(B)}),C(B=>{let A=B.filter(h=>!c.has(h.project.segmentId));for(const h of m)A.some(v=>v.project.segmentId===h.project.segmentId)||(A=[...A,h]);return A}),!m.length)return;const Y=new Set(m.map(B=>B.project.segmentId)),G=setTimeout(()=>{C(B=>B.filter(A=>!Y.has(A.project.segmentId)))},220);f.current.push(G)},[c]);const w=y.filter(k=>!c.has(k.project.segmentId)).map(k=>i.jsx(Rr,{row:k.absoluteRow,data:k.project,zoom:r,isSubcontract:k.isSubcontract,yOffset:k.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},k.project.segmentId));return i.jsx(i.Fragment,{children:[...d,...w]})};x.div`
  box-sizing: border-box;
  font-family: ${Le};
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({isExpanded:e})=>e?0:"-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`,x.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`,x.label`
  font-size: 14px;
`,x.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`,x.input`
  height: 18px;
  width: 18px;
`,x.button`
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
`,x.form`
  background-color: rgba(255, 255, 255, 0.75);
`;const rl=x.div`
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
`,ol=x.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,sl=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`,il=x.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,al=x.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  background: #dcfce7;
  color: #166534;
  font-size: 9px;
  font-weight: 600;
  padding: 2px 7px 2px 5px;
  border-radius: 10px;
  text-transform: uppercase;
  svg {
    width: 11px;
    height: 11px;
  }
`,cl=x.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 6px;
  font-size: 11px;
  font-weight: 600;
  svg {
    width: 14px;
    height: 14px;
  }
`,ll=x.div`
  ${ct}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,dl=x.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`,ul=x.div`
  padding: 10px 12px;
`,fl=x.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,to=x.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,no=x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,ro=x.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,oo=x.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,so=x.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,hl=x.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,pl=x.div`
  min-width: 0;
`,ml=x.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,gl=x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`,io=x.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,kt=x.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,$t=x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Dt=x.div`
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
`;x.div``,x.span``,x.span``,x.div``,x.div``,x.span``,x.span``,x.div``,x.div``,x.span``,x.span``,x.div``,x.div``,x.div``,x.span``,x.div``,x.div``,x.div``,x.div``,x.p``,x.span``;const yl={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",salida:"Salida",destino:"Destino",regreso:"Regreso",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},vl=({tooltipData:e,visible:r=!0})=>{const{mouseCoords:t,reservationData:n}=e,o=p.useRef(null),[s,a]=p.useState("below"),l=Ve(),d={...yl,...l.tooltip};p.useLayoutEffect(()=>{if(!o.current||!t)return;const k=o.current,{width:m,height:Y}=k.getBoundingClientRect(),G=k.parentElement;if(!G)return;const B=G.getBoundingClientRect(),A=12,h=4,v=B.height-t.y,b=B.width-t.x;let E=t.x+A,S=t.y+A,D="below";b<m+A&&(E=t.x-m-A),v<Y+A&&(S=t.y-Y-A,D="above"),E=Math.max(h,Math.min(E,B.width-m-h)),S=Math.max(h,Math.min(S,B.height-Y-h)),a(D),k.style.left=`${E}px`,k.style.top=`${S}px`},[t]);const c=n.reservationType===Mt.Tour,u=c&&n.isOneDayEvent,f=c?u?"sun":"tour":"transfer",y=c?u?d.oneDay:d.tour:d.transfer,C=n.readiness?Xr[n.readiness]:null,w=[n.groupName&&{label:d.groupName,value:n.groupName},n.driver&&{label:d.driver,value:n.driver},n.passengers&&{label:d.passengers,value:String(n.passengers)},n.flightNumber&&{label:d.flightNumber,value:n.flightNumber}].filter(Boolean);return i.jsxs(rl,{ref:o,$position:s,$visible:r,children:[i.jsxs(ol,{children:[i.jsxs(sl,{children:[i.jsx(il,{children:n.bookingNumber}),i.jsxs(al,{children:[i.jsx(Be,{name:f,strokeWidth:2.4}),y]})]}),i.jsx(ll,{children:n.eventName}),n.client&&i.jsx(dl,{children:n.client}),C&&i.jsxs(cl,{style:{color:C.color},children:[i.jsx(Be,{name:C.icon,strokeWidth:C.icon==="check"?2.6:2.2}),C.label]})]}),i.jsxs(ul,{children:[i.jsxs(fl,{children:[i.jsxs(to,{children:[i.jsx(no,{children:d.startDate}),i.jsxs(ro,{children:[i.jsx(oo,{children:n.startDate}),i.jsx(so,{children:n.startTime})]})]}),c&&n.endDate&&i.jsxs(to,{$isEnd:!0,children:[i.jsx(no,{children:d.endDate}),i.jsxs(ro,{children:[i.jsx(oo,{children:n.endDate}),i.jsx(so,{children:n.endTime})]})]})]}),w.length>0&&i.jsx(hl,{children:w.map((k,m)=>i.jsxs(pl,{children:[i.jsx(ml,{children:k.label}),i.jsx(gl,{children:k.value})]},m))}),(n.departureAddress||n.destinationAddress||n.returnAddress)&&i.jsxs(io,{children:[n.departureAddress&&i.jsxs(kt,{children:[i.jsx($t,{children:d.salida}),i.jsx(Dt,{children:n.departureAddress})]}),n.destinationAddress&&i.jsxs(kt,{children:[i.jsx($t,{children:d.destino}),i.jsx(Dt,{children:n.destinationAddress})]}),n.returnAddress&&i.jsxs(kt,{children:[i.jsx($t,{children:d.regreso}),i.jsx(Dt,{children:n.returnAddress})]})]}),(n.serviceNotes||n.reservationNotes)&&i.jsxs(io,{children:[n.serviceNotes&&i.jsxs(kt,{children:[i.jsx($t,{children:d.serviceNotes}),i.jsx(Dt,{children:n.serviceNotes})]}),n.reservationNotes&&i.jsxs(kt,{children:[i.jsx($t,{children:d.reservationNotes}),i.jsx(Dt,{children:n.reservationNotes})]})]})]})]})};x.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`,x.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({theme:e})=>e.mode==="light"?"4px":"34px"};
  transition: left 0.3s ease;
`,x.div`
  position: absolute;
  top: 5px;
  left: ${({theme:e})=>e.mode==="light"?"38px":"4px"};
  transition: left 0.3s ease;
`;const xl=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,bl=x.div`
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
`,wl=x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,ao=x.p`
  ${ct}
  ${lt}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,Sl=x.p`
  ${ct}
  ${lt}
`,Cl=x.div`
  position: sticky;
  left: ${Ae+16}px;
  overflow: hidden;
`,Ml=x.div`
  position: absolute;
  height: ${ln}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,kl=x.div`
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
`,$l=x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Dl=x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,El=x.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,co=x.div`
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
`,lo=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,uo=x.div`
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
`,fo=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,On=x.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,In=x.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,gt=x.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,ho=x.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,_l=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:a,resourceOnly:l,separatorRowIndices:d=[]})=>{const c=Ve(),u=A=>{let h=0;for(const v of d)v<=A&&h++;return A*pe+h*Pe},[f,y]=p.useState(null),[C,w]=p.useState(0),k=p.useCallback((A=400,h=300)=>{const b=t.width,E=48,S=document.getElementById("react-scheduler");if(!S)return{x:r.x+b+16,y:r.y};const D=S.scrollLeft,X=S.scrollTop,K=S.clientWidth,I=S.clientHeight,$=r.x-D,O=r.y-X,z={left:Ae+16,right:K-16,top:16,bottom:I-16},L=z.right-($+b),H=$-z.left,Q=z.bottom-(O+E),ne=O-z.top;let se,F;return L>=A+16?se=$+b+16:H>=A+16?se=$-A-16:L>=H?(se=$+b+16,se+A>z.right&&(se=z.right-A)):(se=$-A-16,se<z.left&&(se=z.left)),Q>=h+16?F=O+E+16:ne>=h+16?F=O-h-16:Q>=ne?(F=O+E+16,F+h>z.bottom&&(F=z.bottom-h)):(F=O-h-16,F<z.top&&(F=z.top)),se=Math.max(z.left,Math.min(se,z.right-A)),F=Math.max(z.top,Math.min(F,z.bottom-h)),{x:se+D,y:F+X}},[r.x,r.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&C===0?w(r.x):s==="idle"&&w(0)},[s,e,r.x,C]),p.useEffect(()=>{y(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const m=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const A=[];let h=0;for(const v of a){const b=Math.max(v.data.length,1);if(v.capacity!==void 0&&e.totalPassengers>v.capacity)for(let E=0;E<b;E++)A.push(h+E);h+=b}return A},[e,a,s]);if(!e||s==="idle"||s==="potential")return null;const Y=s==="animating",G=Gr(e.bgColor??""),B=()=>{if(!n)return"";const A=P(n.startDate).format("MMM D, HH:mm"),h=P(n.endDate).format("HH:mm");return`${A} - ${h}`};return i.jsxs(xl,{children:[m.map(A=>i.jsx(Dl,{style:{top:`${u(A)}px`,height:`${pe}px`}},A)),n&&s==="dragging"&&i.jsx($l,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${u(n.resourceIndex)}px`,height:`${pe}px`}}),n&&s==="dragging"&&!l&&i.jsxs(i.Fragment,{children:[i.jsx(Ml,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(pe-48)/2}px`,width:`${t.width}px`}}),i.jsx(kl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(pe-48)/2}px`},children:B()})]}),n&&s==="dragging"&&l&&i.jsx(El,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${u(n.resourceIndex)}px`,height:`${pe}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const A=k(400,300);return i.jsxs(co,{style:{left:`${A.x}px`,top:`${A.y}px`},children:[i.jsxs(lo,{children:[i.jsx(uo,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),i.jsx(fo,{children:n.conflicts.map((h,v)=>{const b=P(n.startDate).format("YYYY-MM-DD"),E=P(n.endDate).format("YYYY-MM-DD"),S=P(h.event.startDate).format("YYYY-MM-DD"),D=P(h.event.endDate).format("YYYY-MM-DD"),X=P(h.conflictStart).format("YYYY-MM-DD"),K=P(h.conflictEnd).format("YYYY-MM-DD"),I=b!==E,$=S!==D,O=X!==K,z=I?P(n.startDate).format("MMM D, h:mm A"):P(n.startDate).format("h:mm A"),L=I?P(n.endDate).format("MMM D, h:mm A"):P(n.endDate).format("h:mm A"),H=$?P(h.event.startDate).format("MMM D, h:mm A"):P(h.event.startDate).format("h:mm A"),Q=$?P(h.event.endDate).format("MMM D, h:mm A"):P(h.event.endDate).format("h:mm A"),ne=O?P(h.conflictStart).format("MMM D, h:mm A"):P(h.conflictStart).format("h:mm A"),se=O?P(h.conflictEnd).format("MMM D, h:mm A"):P(h.conflictEnd).format("h:mm A"),F=O?"":P(h.conflictStart).format("MMM D"),j=n.startDate.getTime(),J=n.endDate.getTime(),te=h.event.startDate.getTime(),M=h.event.endDate.getTime(),Z=j>=te&&j<M,T=J>te&&J<=M,R=j<=te&&J>=M,W=te<=j&&M>=J;let N=!1,g=!1,U=!1,_=!1,V="";return R||W?(N=!0,g=!0,U=!0,_=!0,V=`⚠️ ${c.conflicts.changeBoth}`):Z&&T?(N=!0,g=!0,U=!0,_=!0,V=`⚠️ ${c.conflicts.changeBoth}`):Z?(N=!0,_=!0,V=`⚠️ ${c.conflicts.changeStart}`):T&&(g=!0,U=!0,V=`⚠️ ${c.conflicts.changeEnd}`),i.jsxs(On,{children:[i.jsxs(In,{children:[c.conflicts.conflictsWith,": ",h.event.title,h.event.subtitle&&` - ${h.event.subtitle}`]}),i.jsxs(gt,{children:[i.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",N?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:z}):z," ",c.conflicts.to," ",g?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:L}):L]}),i.jsxs(gt,{children:[i.jsx("strong",{children:h.event.title})," ",c.conflicts.currentlyAt,":"," ",U?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:H}):H," ",c.conflicts.to," ",_?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:Q}):Q]}),i.jsxs(ho,{children:[c.conflicts.conflictTime,": ",F&&`${F}, `,ne," - ",se]}),V&&i.jsx(gt,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:V})]},v)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const A=k(400,400);return i.jsxs(co,{style:{left:`${A.x}px`,top:`${A.y}px`,borderColor:"#4CAF50"},children:[i.jsxs(lo,{style:{color:"#2E7D32"},children:[i.jsx(uo,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),i.jsxs(fo,{children:[(()=>{const h=n.nearbyEvents.some(S=>S.position==="before"),v=n.nearbyEvents.some(S=>S.position==="after"),b=P(n.startDate).format("h:mm A"),E=P(n.endDate).format("h:mm A");return i.jsxs(On,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[i.jsxs(In,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),i.jsxs(gt,{style:{fontWeight:600},children:[P(n.startDate).format("MMM D"),":"," ",h?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:b}):b," ",c.conflicts.to," ",v?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:E}):E]}),i.jsx(gt,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),n.nearbyEvents.map((h,v)=>{const b=P(h.event.startDate).format("YYYY-MM-DD"),E=P(h.event.endDate).format("YYYY-MM-DD"),S=b!==E,D=S?P(h.event.startDate).format("MMM D, h:mm A"):P(h.event.startDate).format("h:mm A"),X=S?P(h.event.endDate).format("MMM D, h:mm A"):P(h.event.endDate).format("h:mm A"),K=P(h.event.startDate).format("MMM D"),I=Math.floor(h.timeGap/(1e3*60*60)),$=Math.floor(h.timeGap%(1e3*60*60)/(1e3*60)),O=I>0?`${I}h ${$}m`:`${$}m`,z=h.position==="after",L=h.position==="before";return i.jsxs(On,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[i.jsxs(In,{style:{color:"#1B5E20"},children:[h.event.title,h.event.subtitle&&` - ${h.event.subtitle}`]}),i.jsxs(gt,{children:[!S&&`${K}: `,z?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:D}):D," ",c.conflicts.to," ",L?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:X}):X]}),i.jsxs(ho,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[O," ",h.position==="before"?c.conflicts.before:c.conflicts.after]})]},v)})]})]})})(),i.jsx(bl,{$isAnimating:Y,$animateToX:f==null?void 0:f.x,$animateToY:f==null?void 0:f.y,style:{left:Y?`${(f==null?void 0:f.x)??0}px`:"0",top:Y?`${(f==null?void 0:f.y)??0}px`:"0",transform:Y?void 0:`translate3d(${l?C:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:G},children:i.jsx(wl,{children:i.jsxs(Cl,{children:[i.jsx(ao,{$bold:!0,children:e.title}),e.subtitle&&i.jsx(ao,{children:e.subtitle}),e.description&&i.jsx(Sl,{children:e.description})]})})})]})},Tl=ze`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,Al=x.div`
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
  animation: ${Tl} 1.5s ease-in-out infinite;
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
`,Pl=({selectionBox:e,isSelecting:r})=>!e||!r?null:i.jsx(Al,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),Ol=ze`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Il=x.div`
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
  animation: ${Ol} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,Yl=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,Ll=x.span`
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
`,Nl=x.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,Fl=x.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;x.div`
  display: none;
`,x.div`
  display: none;
`,x.button`
  display: none;
`;const Bl=x.div`
  display: flex;
  gap: 8px;
`,po=x.button`
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
`,zl=({selections:e,onConfirm:r,onClear:t})=>{var w;const o=Ve().multiSelect,s=p.useMemo(()=>e.filter(k=>k.hasConflict).length,[e]),a=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,d=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",u=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",f=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((w=o==null?void 0:o.conflictsWarning)==null?void 0:w.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const y=s>0,C=i.jsxs(Il,{$hasConflicts:y,"data-multi-select-ui":!0,children:[i.jsxs(Yl,{children:[i.jsxs(Ll,{$hasConflicts:y,children:[e.length," ",a]}),y&&i.jsxs(Nl,{children:["⚠️ ",f]}),i.jsx(Fl,{children:l})]}),i.jsxs(Bl,{children:[i.jsxs(po,{variant:"secondary",onClick:t,children:["✕ ",d]}),i.jsx(po,{variant:"primary",$hasConflicts:y,onClick:r,children:y?`⚠️ ${u}`:`✓ ${c}`})]})]});return yo.createPortal(C,document.body)},Hl=ze`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Wl=x.div`
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
  animation: ${Hl} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&et`
      border-style: dashed;
    `}
`,jl=x.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,Zl=x.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,Vl=x.button`
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
`,Gl=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:a=[]})=>{const[l,d]=p.useState(null),[c,u]=p.useState({x:0,y:0}),f=p.useRef(null),y=p.useMemo(()=>{switch(t){case 0:return Oe*7;case 1:return Me;case 2:return Ee;default:return Me}},[t]),C=p.useMemo(()=>P().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),w=p.useMemo(()=>e.map((v,b)=>{let E=0,S=!1;for(const H of r){if(H.id===v.resourceId){S=!0;break}E+=Math.max(H.data.length,1)}if(!S)return null;const D=P(v.startDate),X=P(v.endDate);let K,I;switch(t){case 0:K=Math.floor(D.diff(C,"days")/7),I=Math.max(1,Math.ceil(X.diff(D,"days")/7)+1);break;case 1:K=D.diff(C,"days"),I=Math.max(1,X.diff(D,"days")+1);break;case 2:K=D.diff(C,"hours"),I=Math.max(1,X.diff(D,"hours")+1);break;default:K=0,I=1}const $=K*y;let O=0;for(const H of a)H<=E&&O++;const z=E*pe+O*Pe,L=I*y;return{index:b,selection:v,x:$,y:z,width:L,height:pe}}),[e,r,t,C,y]),k=(v,b)=>{const E=P(v).format("MMM D"),S=P(b).format("MMM D");return E===S?E:`${E} - ${S}`},m=v=>!v.hasConflict||!v.conflicts?"":`⚠️ Conflicts with:
${v.conflicts.map(E=>{const S=(E.overlapDuration/36e5).toFixed(1);return`• ${E.event.title} (${S}h overlap)`}).join(`
`)}`,Y=p.useCallback(v=>{let b=0;for(const E of r){const S=Math.max(E.data.length,1);if(v>=b*pe&&v<(b+S)*pe)return{resourceId:E.id,resourceLabel:E.label};b+=S}return null},[r]),G=p.useCallback(v=>{const b=Math.floor(v/y);switch(t){case 0:return C.add(b*7,"days").toDate();case 1:return C.add(b,"days").toDate();case 2:return C.add(b,"hours").toDate();default:return C.toDate()}},[t,C,y]),B=p.useCallback((v,b)=>{!s||(v.preventDefault(),v.stopPropagation(),!w[b])||(f.current={x:v.clientX,y:v.clientY},d(b),u({x:0,y:0}))},[s,w]),A=p.useCallback(v=>{if(l===null||!f.current)return;const b=v.clientX-f.current.x,E=v.clientY-f.current.y,S=Math.round(b/y)*y,D=Math.round(E/pe)*pe;u({x:S,y:D})},[l,y]),h=p.useCallback(()=>{if(l===null||!s){d(null),u({x:0,y:0}),f.current=null;return}const v=w[l];if(!v){d(null),u({x:0,y:0}),f.current=null;return}const b=v.x+c.x,E=v.y+c.y,S=Y(E+pe/2);if(!S){d(null),u({x:0,y:0}),f.current=null;return}const D=G(b),X=e[l],K=X.endDate.getTime()-X.startDate.getTime(),I=new Date(D.getTime()+K);s(l,{startDate:D,endDate:I,resourceId:S.resourceId,resourceLabel:S.resourceLabel}),d(null),u({x:0,y:0}),f.current=null},[l,c,w,e,s,Y,G]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",A),document.addEventListener("mouseup",h),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",h)}},[l,A,h]),i.jsx(i.Fragment,{children:w.map(v=>{if(!v)return null;const b=v.selection.hasConflict||!1,E=l===v.index,S=E?v.x+c.x:v.x,D=E?v.y+c.y:v.y;return i.jsxs(Wl,{$hasConflict:b,$isDragging:E,style:{left:S,top:D,width:v.width,height:v.height},"data-multi-select-ui":!0,onMouseDown:X=>B(X,v.index),children:[b&&i.jsx(Zl,{title:m(v.selection),children:"⚠️"}),i.jsx(jl,{$hasConflict:b,children:k(v.selection.startDate,v.selection.endDate)}),i.jsx(Vl,{onClick:X=>{X.stopPropagation(),o(v.index)},onMouseDown:X=>X.stopPropagation(),title:b?"Remove conflicting selection":"Remove selection",children:"×"})]},v.index)})})},mo=(e,r,t,n)=>{if(r===2)return null;const o=r===0?Oe*7:Me,s=P().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"),a=e.startOf("day"),l=r===0?a.startOf("week").diff(s.startOf("week"),"week"):a.diff(s,"days");return l<0||l>=n?null:{x:l*o,width:o}},Xl=x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,Ul=({zoom:e,startDate:r})=>{const{cols:t}=He(),n=p.useMemo(()=>mo(P(),e,r,t),[e,r,t]);return n?i.jsx(Xl,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},Yn="#2f6fed",Kl=x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${Yn};
  border-right: 1px solid ${Yn}55;
  background: ${Yn}1c;
`,Jl=({zoom:e,startDate:r})=>{const{cols:t,jumpDate:n}=He(),o=p.useMemo(()=>!n||n.isSame(P(),"day")?null:mo(n,e,r,t),[n,e,r,t]);return o?i.jsx(Kl,{style:{left:`${o.x}px`,width:`${o.width}px`},"aria-hidden":!0}):null},_d="";Te.Scheduler=La,Object.defineProperty(Te,Symbol.toStringTag,{value:"Module"})});
