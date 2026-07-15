(function($e,a){typeof exports=="object"&&typeof module<"u"?a(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],a):($e=typeof globalThis<"u"?globalThis:$e||self,a($e["react-scheduler"]={},$e["react/jsx-runtime"],$e.React,$e.ReactDOM))})(this,function($e,a,p,no){"use strict";var kl=Object.defineProperty;var $l=($e,a,p)=>a in $e?kl($e,a,{enumerable:!0,configurable:!0,writable:!0,value:p}):$e[a]=p;var to=($e,a,p)=>($l($e,typeof a!="symbol"?a+"":a,p),p);function ro(e){const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return n.default=e,Object.freeze(n)}const oe=ro(p);var Ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ht={},oo={get exports(){return ht},set exports(e){ht=e}},ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _n;function so(){if(_n)return ge;_n=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function k(g){if(typeof g=="object"&&g!==null){var N=g.$$typeof;switch(N){case e:switch(g=g.type,g){case t:case o:case r:case c:case d:return g;default:switch(g=g&&g.$$typeof,g){case l:case i:case u:case v:case h:case s:return g;default:return N}}case n:return N}}}return ge.ContextConsumer=i,ge.ContextProvider=s,ge.Element=e,ge.ForwardRef=u,ge.Fragment=t,ge.Lazy=v,ge.Memo=h,ge.Portal=n,ge.Profiler=o,ge.StrictMode=r,ge.Suspense=c,ge.SuspenseList=d,ge.isAsyncMode=function(){return!1},ge.isConcurrentMode=function(){return!1},ge.isContextConsumer=function(g){return k(g)===i},ge.isContextProvider=function(g){return k(g)===s},ge.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===e},ge.isForwardRef=function(g){return k(g)===u},ge.isFragment=function(g){return k(g)===t},ge.isLazy=function(g){return k(g)===v},ge.isMemo=function(g){return k(g)===h},ge.isPortal=function(g){return k(g)===n},ge.isProfiler=function(g){return k(g)===o},ge.isStrictMode=function(g){return k(g)===r},ge.isSuspense=function(g){return k(g)===c},ge.isSuspenseList=function(g){return k(g)===d},ge.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===t||g===o||g===r||g===c||g===d||g===S||typeof g=="object"&&g!==null&&(g.$$typeof===v||g.$$typeof===h||g.$$typeof===s||g.$$typeof===i||g.$$typeof===u||g.$$typeof===x||g.getModuleId!==void 0)},ge.typeOf=k,ge}var me={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tn;function io(){return Tn||(Tn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),x=!1,k=!1,g=!1,N=!1,V=!1,W;W=Symbol.for("react.module.reference");function _($){return!!(typeof $=="string"||typeof $=="function"||$===t||$===o||V||$===r||$===c||$===d||N||$===S||x||k||g||typeof $=="object"&&$!==null&&($.$$typeof===v||$.$$typeof===h||$.$$typeof===s||$.$$typeof===i||$.$$typeof===u||$.$$typeof===W||$.getModuleId!==void 0))}function f($){if(typeof $=="object"&&$!==null){var j=$.$$typeof;switch(j){case e:var ne=$.type;switch(ne){case t:case o:case r:case c:case d:return ne;default:var q=ne&&ne.$$typeof;switch(q){case l:case i:case u:case v:case h:case s:return q;default:return j}}case n:return j}}}var y=i,b=s,P=e,O=u,I=t,K=v,R=h,T=n,E=o,A=r,F=c,L=d,Q=!1,ee=!1;function se($){return Q||(Q=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ae($){return ee||(ee=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function H($){return f($)===i}function z($){return f($)===s}function U($){return typeof $=="object"&&$!==null&&$.$$typeof===e}function te($){return f($)===u}function C($){return f($)===t}function Y($){return f($)===v}function M($){return f($)===h}function Z($){return f($)===n}function J($){return f($)===o}function B($){return f($)===r}function m($){return f($)===c}function X($){return f($)===d}me.ContextConsumer=y,me.ContextProvider=b,me.Element=P,me.ForwardRef=O,me.Fragment=I,me.Lazy=K,me.Memo=R,me.Portal=T,me.Profiler=E,me.StrictMode=A,me.Suspense=F,me.SuspenseList=L,me.isAsyncMode=se,me.isConcurrentMode=ae,me.isContextConsumer=H,me.isContextProvider=z,me.isElement=U,me.isForwardRef=te,me.isFragment=C,me.isLazy=Y,me.isMemo=M,me.isPortal=Z,me.isProfiler=J,me.isStrictMode=B,me.isSuspense=m,me.isSuspenseList=X,me.isValidElementType=_,me.typeOf=f}()),me}(function(e){process.env.NODE_ENV==="production"?e.exports=so():e.exports=io()})(oo);function ao(e){function n(H,z,U,te,C){for(var Y=0,M=0,Z=0,J=0,B,m,X=0,$=0,j,ne=j=B=0,q=0,ce=0,ue=0,de=0,ie=U.length,fe=ie-1,pe,G="",re="",le="",xe="",we;q<ie;){if(m=U.charCodeAt(q),q===fe&&M+J+Z+Y!==0&&(M!==0&&(m=M===47?10:47),J=Z=Y=0,ie++,fe++),M+J+Z+Y===0){if(q===fe&&(0<ce&&(G=G.replace(v,"")),0<G.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:G+=U.charAt(q)}m=59}switch(m){case 123:for(G=G.trim(),B=G.charCodeAt(0),j=1,de=++q;q<ie;){switch(m=U.charCodeAt(q)){case 123:j++;break;case 125:j--;break;case 47:switch(m=U.charCodeAt(q+1)){case 42:case 47:e:{for(ne=q+1;ne<fe;++ne)switch(U.charCodeAt(ne)){case 47:if(m===42&&U.charCodeAt(ne-1)===42&&q+2!==ne){q=ne+1;break e}break;case 10:if(m===47){q=ne+1;break e}}q=ne}}break;case 91:m++;case 40:m++;case 34:case 39:for(;q++<fe&&U.charCodeAt(q)!==m;);}if(j===0)break;q++}switch(j=U.substring(de,q),B===0&&(B=(G=G.replace(h,"").trim()).charCodeAt(0)),B){case 64:switch(0<ce&&(G=G.replace(v,"")),m=G.charCodeAt(1),m){case 100:case 109:case 115:case 45:ce=z;break;default:ce=F}if(j=n(z,ce,j,m,C+1),de=j.length,0<Q&&(ce=t(F,G,ue),we=l(3,j,ce,z,T,R,de,m,C,te),G=ce.join(""),we!==void 0&&(de=(j=we.trim()).length)===0&&(m=0,j="")),0<de)switch(m){case 115:G=G.replace(y,i);case 100:case 109:case 45:j=G+"{"+j+"}";break;case 107:G=G.replace(V,"$1 $2"),j=G+"{"+j+"}",j=A===1||A===2&&s("@"+j,3)?"@-webkit-"+j+"@"+j:"@"+j;break;default:j=G+j,te===112&&(j=(re+=j,""))}else j="";break;default:j=n(z,t(z,G,ue),j,te,C+1)}le+=j,j=ue=ce=ne=B=0,G="",m=U.charCodeAt(++q);break;case 125:case 59:if(G=(0<ce?G.replace(v,""):G).trim(),1<(de=G.length))switch(ne===0&&(B=G.charCodeAt(0),B===45||96<B&&123>B)&&(de=(G=G.replace(" ",":")).length),0<Q&&(we=l(1,G,z,H,T,R,re.length,te,C,te))!==void 0&&(de=(G=we.trim()).length)===0&&(G="\0\0"),B=G.charCodeAt(0),m=G.charCodeAt(1),B){case 0:break;case 64:if(m===105||m===99){xe+=G+U.charAt(q);break}default:G.charCodeAt(de-1)!==58&&(re+=o(G,B,m,G.charCodeAt(2)))}ue=ce=ne=B=0,G="",m=U.charCodeAt(++q)}}switch(m){case 13:case 10:M===47?M=0:1+B===0&&te!==107&&0<G.length&&(ce=1,G+="\0"),0<Q*se&&l(0,G,z,H,T,R,re.length,te,C,te),R=1,T++;break;case 59:case 125:if(M+J+Z+Y===0){R++;break}default:switch(R++,pe=U.charAt(q),m){case 9:case 32:if(J+Y+M===0)switch(X){case 44:case 58:case 9:case 32:pe="";break;default:m!==32&&(pe=" ")}break;case 0:pe="\\0";break;case 12:pe="\\f";break;case 11:pe="\\v";break;case 38:J+M+Y===0&&(ce=ue=1,pe="\f"+pe);break;case 108:if(J+M+Y+E===0&&0<ne)switch(q-ne){case 2:X===112&&U.charCodeAt(q-3)===58&&(E=X);case 8:$===111&&(E=$)}break;case 58:J+M+Y===0&&(ne=q);break;case 44:M+Z+J+Y===0&&(ce=1,pe+="\r");break;case 34:case 39:M===0&&(J=J===m?0:J===0?m:J);break;case 91:J+M+Z===0&&Y++;break;case 93:J+M+Z===0&&Y--;break;case 41:J+M+Y===0&&Z--;break;case 40:if(J+M+Y===0){if(B===0)switch(2*X+3*$){case 533:break;default:B=1}Z++}break;case 64:M+Z+J+Y+ne+j===0&&(j=1);break;case 42:case 47:if(!(0<J+Y+Z))switch(M){case 0:switch(2*m+3*U.charCodeAt(q+1)){case 235:M=47;break;case 220:de=q,M=42}break;case 42:m===47&&X===42&&de+2!==q&&(U.charCodeAt(de+2)===33&&(re+=U.substring(de,q+1)),pe="",M=0)}}M===0&&(G+=pe)}$=X,X=m,q++}if(de=re.length,0<de){if(ce=z,0<Q&&(we=l(2,re,ce,H,T,R,de,te,C,te),we!==void 0&&(re=we).length===0))return xe+re+le;if(re=ce.join(",")+"{"+re+"}",A*E!==0){switch(A!==2||s(re,2)||(E=0),E){case 111:re=re.replace(_,":-moz-$1")+re;break;case 112:re=re.replace(W,"::-webkit-input-$1")+re.replace(W,"::-moz-$1")+re.replace(W,":-ms-input-$1")+re}E=0}}return xe+re+le}function t(H,z,U){var te=z.trim().split(g);z=te;var C=te.length,Y=H.length;switch(Y){case 0:case 1:var M=0;for(H=Y===0?"":H[0]+" ";M<C;++M)z[M]=r(H,z[M],U).trim();break;default:var Z=M=0;for(z=[];M<C;++M)for(var J=0;J<Y;++J)z[Z++]=r(H[J]+" ",te[M],U).trim()}return z}function r(H,z,U){var te=z.charCodeAt(0);switch(33>te&&(te=(z=z.trim()).charCodeAt(0)),te){case 38:return z.replace(N,"$1"+H.trim());case 58:return H.trim()+z.replace(N,"$1"+H.trim());default:if(0<1*U&&0<z.indexOf("\f"))return z.replace(N,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+z}function o(H,z,U,te){var C=H+";",Y=2*z+3*U+4*te;if(Y===944){H=C.indexOf(":",9)+1;var M=C.substring(H,C.length-1).trim();return M=C.substring(0,H).trim()+M+";",A===1||A===2&&s(M,1)?"-webkit-"+M+M:M}if(A===0||A===2&&!s(C,1))return C;switch(Y){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(K,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return M=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+C+"-ms-flex-pack"+M+C;case 1005:return x.test(C)?C.replace(S,":-webkit-")+C.replace(S,":-moz-")+C:C;case 1e3:switch(M=C.substring(13).trim(),z=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(z)){case 226:M=C.replace(f,"tb");break;case 232:M=C.replace(f,"tb-rl");break;case 220:M=C.replace(f,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+M+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(z=(C=H).length-10,M=(C.charCodeAt(z)===33?C.substring(0,z):C).substring(H.indexOf(":",7)+1).trim(),Y=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:C=C.replace(M,"-webkit-"+M)+";"+C;break;case 207:case 102:C=C.replace(M,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+C.replace(M,"-webkit-"+M)+";"+C.replace(M,"-ms-"+M+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return M=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+M+"-ms-flex-"+M+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(P,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(P,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(I.test(H)===!0)return(M=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?o(H.replace("stretch","fill-available"),z,U,te).replace(":fill-available",":stretch"):C.replace(M,"-webkit-"+M)+C.replace(M,"-moz-"+M.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,U+te===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(k,"$1-webkit-$2")+C}return C}function s(H,z){var U=H.indexOf(z===1?":":"{"),te=H.substring(0,z!==3?U:10);return U=H.substring(U+1,H.length-1),ee(z!==2?te:te.replace(O,"$1"),U,z)}function i(H,z){var U=o(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return U!==z+";"?U.replace(b," or ($1)").substring(4):"("+z+")"}function l(H,z,U,te,C,Y,M,Z,J,B){for(var m=0,X=z,$;m<Q;++m)switch($=L[m].call(d,H,X,U,te,C,Y,M,Z,J,B)){case void 0:case!1:case!0:case null:break;default:X=$}if(X!==z)return X}function u(H){switch(H){case void 0:case null:Q=L.length=0;break;default:if(typeof H=="function")L[Q++]=H;else if(typeof H=="object")for(var z=0,U=H.length;z<U;++z)u(H[z]);else se=!!H|0}return u}function c(H){return H=H.prefix,H!==void 0&&(ee=null,H?typeof H!="function"?A=1:(A=2,ee=H):A=0),c}function d(H,z){var U=H;if(33>U.charCodeAt(0)&&(U=U.trim()),ae=U,U=[ae],0<Q){var te=l(-1,z,U,U,T,R,0,0,0,0);te!==void 0&&typeof te=="string"&&(z=te)}var C=n(F,U,z,0,0);return 0<Q&&(te=l(-2,C,U,U,T,R,C.length,0,0,0),te!==void 0&&(C=te)),ae="",E=0,R=T=1,C}var h=/^\0+/g,v=/[\0\r\f]/g,S=/: */g,x=/zoo|gra/,k=/([,: ])(transform)/g,g=/,\r+?/g,N=/([\t\r\n ])*\f?&/g,V=/@(k\w+)\s*(\S*)\s*/,W=/::(place)/g,_=/:(read-only)/g,f=/[svh]\w+-[tblr]{2}/,y=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,P=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,K=/([^-])(image-set\()/,R=1,T=1,E=0,A=1,F=[],L=[],Q=0,ee=null,se=0,ae="";return d.use=u,d.set=c,e!==void 0&&c(e),d}var co={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function lo(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var uo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,An=lo(function(e){return uo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),It={},fo={get exports(){return It},set exports(e){It=e}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pn;function ho(){if(Pn)return ye;Pn=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,S=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,V=e?Symbol.for("react.scope"):60119;function W(f){if(typeof f=="object"&&f!==null){var y=f.$$typeof;switch(y){case n:switch(f=f.type,f){case u:case c:case r:case s:case o:case h:return f;default:switch(f=f&&f.$$typeof,f){case l:case d:case x:case S:case i:return f;default:return y}}case t:return y}}}function _(f){return W(f)===c}return ye.AsyncMode=u,ye.ConcurrentMode=c,ye.ContextConsumer=l,ye.ContextProvider=i,ye.Element=n,ye.ForwardRef=d,ye.Fragment=r,ye.Lazy=x,ye.Memo=S,ye.Portal=t,ye.Profiler=s,ye.StrictMode=o,ye.Suspense=h,ye.isAsyncMode=function(f){return _(f)||W(f)===u},ye.isConcurrentMode=_,ye.isContextConsumer=function(f){return W(f)===l},ye.isContextProvider=function(f){return W(f)===i},ye.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===n},ye.isForwardRef=function(f){return W(f)===d},ye.isFragment=function(f){return W(f)===r},ye.isLazy=function(f){return W(f)===x},ye.isMemo=function(f){return W(f)===S},ye.isPortal=function(f){return W(f)===t},ye.isProfiler=function(f){return W(f)===s},ye.isStrictMode=function(f){return W(f)===o},ye.isSuspense=function(f){return W(f)===h},ye.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===r||f===c||f===s||f===o||f===h||f===v||typeof f=="object"&&f!==null&&(f.$$typeof===x||f.$$typeof===S||f.$$typeof===i||f.$$typeof===l||f.$$typeof===d||f.$$typeof===g||f.$$typeof===N||f.$$typeof===V||f.$$typeof===k)},ye.typeOf=W,ye}var ve={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var On;function po(){return On||(On=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,S=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,V=e?Symbol.for("react.scope"):60119;function W(m){return typeof m=="string"||typeof m=="function"||m===r||m===c||m===s||m===o||m===h||m===v||typeof m=="object"&&m!==null&&(m.$$typeof===x||m.$$typeof===S||m.$$typeof===i||m.$$typeof===l||m.$$typeof===d||m.$$typeof===g||m.$$typeof===N||m.$$typeof===V||m.$$typeof===k)}function _(m){if(typeof m=="object"&&m!==null){var X=m.$$typeof;switch(X){case n:var $=m.type;switch($){case u:case c:case r:case s:case o:case h:return $;default:var j=$&&$.$$typeof;switch(j){case l:case d:case x:case S:case i:return j;default:return X}}case t:return X}}}var f=u,y=c,b=l,P=i,O=n,I=d,K=r,R=x,T=S,E=t,A=s,F=o,L=h,Q=!1;function ee(m){return Q||(Q=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),se(m)||_(m)===u}function se(m){return _(m)===c}function ae(m){return _(m)===l}function H(m){return _(m)===i}function z(m){return typeof m=="object"&&m!==null&&m.$$typeof===n}function U(m){return _(m)===d}function te(m){return _(m)===r}function C(m){return _(m)===x}function Y(m){return _(m)===S}function M(m){return _(m)===t}function Z(m){return _(m)===s}function J(m){return _(m)===o}function B(m){return _(m)===h}ve.AsyncMode=f,ve.ConcurrentMode=y,ve.ContextConsumer=b,ve.ContextProvider=P,ve.Element=O,ve.ForwardRef=I,ve.Fragment=K,ve.Lazy=R,ve.Memo=T,ve.Portal=E,ve.Profiler=A,ve.StrictMode=F,ve.Suspense=L,ve.isAsyncMode=ee,ve.isConcurrentMode=se,ve.isContextConsumer=ae,ve.isContextProvider=H,ve.isElement=z,ve.isForwardRef=U,ve.isFragment=te,ve.isLazy=C,ve.isMemo=Y,ve.isPortal=M,ve.isProfiler=Z,ve.isStrictMode=J,ve.isSuspense=B,ve.isValidElementType=W,ve.typeOf=_}()),ve}(function(e){process.env.NODE_ENV==="production"?e.exports=ho():e.exports=po()})(fo);var Lt=It,go={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nt={};Nt[Lt.ForwardRef]=yo,Nt[Lt.Memo]=Yn;function In(e){return Lt.isMemo(e)?Yn:Nt[e.$$typeof]||go}var vo=Object.defineProperty,xo=Object.getOwnPropertyNames,Ln=Object.getOwnPropertySymbols,bo=Object.getOwnPropertyDescriptor,wo=Object.getPrototypeOf,Nn=Object.prototype;function Fn(e,n,t){if(typeof n!="string"){if(Nn){var r=wo(n);r&&r!==Nn&&Fn(e,r,t)}var o=xo(n);Ln&&(o=o.concat(Ln(n)));for(var s=In(e),i=In(n),l=0;l<o.length;++l){var u=o[l];if(!mo[u]&&!(t&&t[u])&&!(i&&i[u])&&!(s&&s[u])){var c=bo(n,u);try{vo(e,u,c)}catch{}}}}return e}var So=Fn;function Te(){return(Te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var Hn=function(e,n){for(var t=[e[0]],r=0,o=n.length;r<o;r+=1)t.push(n[r],e[r+1]);return t},Ft=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ht.typeOf(e)},vt=Object.freeze([]),je=Object.freeze({});function qe(e){return typeof e=="function"}function Ht(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Wt(e){return e&&typeof e.styledComponentId=="string"}var Je=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",zt=typeof window<"u"&&"HTMLElement"in window,Co=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),Mo={},ko=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function $o(){for(var e=arguments.length<=0?void 0:arguments[0],n=[],t=1,r=arguments.length;t<r;t+=1)n.push(t<0||arguments.length<=t?void 0:arguments[t]);return n.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Ye(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error($o.apply(void 0,[ko[e]].concat(t)).trim())}var Do=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var n=e.prototype;return n.indexOfGroup=function(t){for(var r=0,o=0;o<t;o++)r+=this.groupSizes[o];return r},n.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,i=s;t>=i;)(i<<=1)<0&&Ye(16,""+t);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var l=s;l<i;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(t+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[t]++,u++)},n.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],o=this.indexOfGroup(t),s=o+r;this.groupSizes[t]=0;for(var i=o;i<s;i++)this.tag.deleteRule(o)}},n.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),i=s+o,l=s;l<i;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),xt=new Map,bt=new Map,pt=1,wt=function(e){if(xt.has(e))return xt.get(e);for(;bt.has(pt);)pt++;var n=pt++;return process.env.NODE_ENV!=="production"&&((0|n)<0||n>1<<30)&&Ye(16,""+n),xt.set(e,n),bt.set(n,e),n},Eo=function(e){return bt.get(e)},_o=function(e,n){n>=pt&&(pt=n+1),xt.set(e,n),bt.set(n,e)},To="style["+Je+'][data-styled-version="5.3.8"]',Ao=new RegExp("^"+Je+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Po=function(e,n,t){for(var r,o=t.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(n,r)},Oo=function(e,n){for(var t=(n.textContent||"").split(`/*!sc*/
`),r=[],o=0,s=t.length;o<s;o++){var i=t[o].trim();if(i){var l=i.match(Ao);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(_o(c,u),Po(e,c,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},Yo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Wn=function(e){var n=document.head,t=e||n,r=document.createElement("style"),o=function(l){for(var u=l.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(Je))return d}}(t),s=o!==void 0?o.nextSibling:null;r.setAttribute(Je,"active"),r.setAttribute("data-styled-version","5.3.8");var i=Yo();return i&&r.setAttribute("nonce",i),t.insertBefore(r,s),r},Io=function(){function e(t){var r=this.element=Wn(t);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,i=0,l=s.length;i<l;i++){var u=s[i];if(u.ownerNode===o)return u}Ye(17)}(r),this.length=0}var n=e.prototype;return n.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.getRule=function(t){var r=this.sheet.cssRules[t];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Lo=function(){function e(t){var r=this.element=Wn(t);this.nodes=r.childNodes,this.length=0}var n=e.prototype;return n.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},n.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),No=function(){function e(t){this.rules=[],this.length=0}var n=e.prototype;return n.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),zn=zt,Fo={isServer:!zt,useCSSOMInjection:!Co},St=function(){function e(t,r,o){t===void 0&&(t=je),r===void 0&&(r={}),this.options=Te({},Fo,{},t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&zt&&zn&&(zn=!1,function(s){for(var i=document.querySelectorAll(To),l=0,u=i.length;l<u;l++){var c=i[l];c&&c.getAttribute(Je)!=="active"&&(Oo(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return wt(t)};var n=e.prototype;return n.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Te({},this.options,{},t),this.gs,r&&this.names||void 0)},n.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,s=r.useCSSOMInjection,i=r.target,t=o?new No(i):s?new Io(i):new Lo(i),new Do(t)));var t,r,o,s,i},n.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.registerName=function(t,r){if(wt(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},n.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(wt(t),o)},n.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.clearRules=function(t){this.getTag().clearGroup(wt(t)),this.clearNames(t)},n.clearTag=function(){this.tag=void 0},n.toString=function(){return function(t){for(var r=t.getTag(),o=r.length,s="",i=0;i<o;i++){var l=Eo(i);if(l!==void 0){var u=t.names.get(l),c=r.getGroup(i);if(u&&c&&u.size){var d=Je+".g"+i+'[id="'+l+'"]',h="";u!==void 0&&u.forEach(function(v){v.length>0&&(h+=v+",")}),s+=""+c+d+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),Ho=/(a)(d)/gi,Bn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Bt(e){var n,t="";for(n=Math.abs(e);n>52;n=n/52|0)t=Bn(n%52)+t;return(Bn(n%52)+t).replace(Ho,"$1-$2")}var Ve=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},jn=function(e){return Ve(5381,e)};function Zn(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(qe(t)&&!Wt(t))return!1}return!0}var Wo=jn("5.3.8"),zo=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(r===void 0||r.isStatic)&&Zn(n),this.componentId=t,this.baseHash=Ve(Wo,t),this.baseStyle=r,St.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(n,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var i=Ge(this.rules,n,t,r).join(""),l=Bt(Ve(this.baseHash,i)>>>0);if(!t.hasNameForId(o,l)){var u=r(i,"."+l,void 0,o);t.insertRules(o,l,u)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,d=Ve(this.baseHash,r.hash),h="",v=0;v<c;v++){var S=this.rules[v];if(typeof S=="string")h+=S,process.env.NODE_ENV!=="production"&&(d=Ve(d,S+v));else if(S){var x=Ge(S,n,t,r),k=Array.isArray(x)?x.join(""):x;d=Ve(d,k+v),h+=k}}if(h){var g=Bt(d>>>0);if(!t.hasNameForId(o,g)){var N=r(h,"."+g,void 0,o);t.insertRules(o,g,N)}s.push(g)}}return s.join(" ")},e}(),Bo=/^\s*\/\/.*$/gm,jo=[":","[",".","#"];function Zo(e){var n,t,r,o,s=e===void 0?je:e,i=s.options,l=i===void 0?je:i,u=s.plugins,c=u===void 0?vt:u,d=new ao(l),h=[],v=function(k){function g(N){if(N)try{k(N+"}")}catch{}}return function(N,V,W,_,f,y,b,P,O,I){switch(N){case 1:if(O===0&&V.charCodeAt(0)===64)return k(V+";"),"";break;case 2:if(P===0)return V+"/*|*/";break;case 3:switch(P){case 102:case 112:return k(W[0]+V),"";default:return V+(I===0?"/*|*/":"")}case-2:V.split("/*|*/}").forEach(g)}}}(function(k){h.push(k)}),S=function(k,g,N){return g===0&&jo.indexOf(N[t.length])!==-1||N.match(o)?k:"."+n};function x(k,g,N,V){V===void 0&&(V="&");var W=k.replace(Bo,""),_=g&&N?N+" "+g+" { "+W+" }":W;return n=V,t=g,r=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),d(N||!g?"":g,_)}return d.use([].concat(c,[function(k,g,N){k===2&&N.length&&N[0].lastIndexOf(t)>0&&(N[0]=N[0].replace(r,S))},v,function(k){if(k===-2){var g=h;return h=[],g}}])),x.hash=c.length?c.reduce(function(k,g){return g.name||Ye(15),Ve(k,g.name)},5381).toString():"",x}var Vn=p.createContext();Vn.Consumer;var Gn=p.createContext(),Vo=(Gn.Consumer,new St),jt=Zo();function Xn(){return p.useContext(Vn)||Vo}function Un(){return p.useContext(Gn)||jt}var Kn=function(){function e(n,t){var r=this;this.inject=function(o,s){s===void 0&&(s=jt);var i=r.name+s.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,s(r.rules,i,"@keyframes"))},this.toString=function(){return Ye(12,String(r.name))},this.name=n,this.id="sc-keyframes-"+n,this.rules=t}return e.prototype.getName=function(n){return n===void 0&&(n=jt),this.name+n.hash},e}(),Go=/([A-Z])/,Xo=/([A-Z])/g,Uo=/^ms-/,Ko=function(e){return"-"+e.toLowerCase()};function qn(e){return Go.test(e)?e.replace(Xo,Ko).replace(Uo,"-ms-"):e}var Jn=function(e){return e==null||e===!1||e===""};function Ge(e,n,t,r){if(Array.isArray(e)){for(var o,s=[],i=0,l=e.length;i<l;i+=1)(o=Ge(e[i],n,t,r))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(Jn(e))return"";if(Wt(e))return"."+e.styledComponentId;if(qe(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!n)return e;var u=e(n);return process.env.NODE_ENV!=="production"&&ht.isElement(u)&&console.warn(Ht(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ge(u,n,t,r)}var c;return e instanceof Kn?t?(e.inject(t,r),e.getName(r)):e:Ft(e)?function d(h,v){var S,x,k=[];for(var g in h)h.hasOwnProperty(g)&&!Jn(h[g])&&(Array.isArray(h[g])&&h[g].isCss||qe(h[g])?k.push(qn(g)+":",h[g],";"):Ft(h[g])?k.push.apply(k,d(h[g],g)):k.push(qn(g)+": "+(S=g,(x=h[g])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||S in co?String(x).trim():x+"px")+";"));return v?[v+" {"].concat(k,["}"]):k}(e):e.toString()}var Qn=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ct(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return qe(e)||Ft(e)?Qn(Ge(Hn(vt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:Qn(Ge(Hn(e,t)))}var Rn=/invalid hook call/i,Mt=new Set,er=function(e,n){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(n?' with the id of "'+n+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,r=console.error;try{var o=!0;console.error=function(s){if(Rn.test(s))o=!1,Mt.delete(t);else{for(var i=arguments.length,l=new Array(i>1?i-1:0),u=1;u<i;u++)l[u-1]=arguments[u];r.apply(void 0,[s].concat(l))}},p.useRef(),o&&!Mt.has(t)&&(console.warn(t),Mt.add(t))}catch(s){Rn.test(s.message)&&Mt.delete(t)}finally{console.error=r}}},tr=function(e,n,t){return t===void 0&&(t=je),e.theme!==t.theme&&e.theme||n||t.theme},qo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jo=/(^-|-$)/g;function Zt(e){return e.replace(qo,"-").replace(Jo,"")}var Vt=function(e){return Bt(jn(e)>>>0)};function kt(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Gt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Qo=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ro(e,n,t){var r=e[t];Gt(n)&&Gt(r)?nr(r,n):e[t]=n}function nr(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];for(var o=0,s=t;o<s.length;o++){var i=s[o];if(Gt(i))for(var l in i)Qo(l)&&Ro(e,i[l],l)}return e}var Qe=p.createContext();Qe.Consumer;function es(e){var n=p.useContext(Qe),t=p.useMemo(function(){return function(r,o){if(!r)return Ye(14);if(qe(r)){var s=r(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Ye(7)}return Array.isArray(r)||typeof r!="object"?Ye(8):o?Te({},o,{},r):r}(e.theme,n)},[e.theme,n]);return e.children?p.createElement(Qe.Provider,{value:t},e.children):null}var Xt={};function rr(e,n,t){var r=Wt(e),o=!kt(e),s=n.attrs,i=s===void 0?vt:s,l=n.componentId,u=l===void 0?function(V,W){var _=typeof V!="string"?"sc":Zt(V);Xt[_]=(Xt[_]||0)+1;var f=_+"-"+Vt("5.3.8"+_+Xt[_]);return W?W+"-"+f:f}(n.displayName,n.parentComponentId):l,c=n.displayName,d=c===void 0?function(V){return kt(V)?"styled."+V:"Styled("+Ht(V)+")"}(e):c,h=n.displayName&&n.componentId?Zt(n.displayName)+"-"+n.componentId:n.componentId||u,v=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,S=n.shouldForwardProp;r&&e.shouldForwardProp&&(S=n.shouldForwardProp?function(V,W,_){return e.shouldForwardProp(V,W,_)&&n.shouldForwardProp(V,W,_)}:e.shouldForwardProp);var x,k=new zo(t,h,r?e.componentStyle:void 0),g=k.isStatic&&i.length===0,N=function(V,W){return function(_,f,y,b){var P=_.attrs,O=_.componentStyle,I=_.defaultProps,K=_.foldedComponentIds,R=_.shouldForwardProp,T=_.styledComponentId,E=_.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(T);var A=function(te,C,Y){te===void 0&&(te=je);var M=Te({},C,{theme:te}),Z={};return Y.forEach(function(J){var B,m,X,$=J;for(B in qe($)&&($=$(M)),$)M[B]=Z[B]=B==="className"?(m=Z[B],X=$[B],m&&X?m+" "+X:m||X):$[B]}),[M,Z]}(tr(f,p.useContext(Qe),I)||je,f,P),F=A[0],L=A[1],Q=function(te,C,Y,M){var Z=Xn(),J=Un(),B=C?te.generateAndInjectStyles(je,Z,J):te.generateAndInjectStyles(Y,Z,J);return process.env.NODE_ENV!=="production"&&p.useDebugValue(B),process.env.NODE_ENV!=="production"&&!C&&M&&M(B),B}(O,b,F,process.env.NODE_ENV!=="production"?_.warnTooManyClasses:void 0),ee=y,se=L.$as||f.$as||L.as||f.as||E,ae=kt(se),H=L!==f?Te({},f,{},L):f,z={};for(var U in H)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?z.as=H[U]:(R?R(U,An,se):!ae||An(U))&&(z[U]=H[U]));return f.style&&L.style!==f.style&&(z.style=Te({},f.style,{},L.style)),z.className=Array.prototype.concat(K,T,Q!==T?Q:null,f.className,L.className).filter(Boolean).join(" "),z.ref=ee,p.createElement(se,z)}(x,V,W,g)};return N.displayName=d,(x=p.forwardRef(N)).attrs=v,x.componentStyle=k,x.displayName=d,x.shouldForwardProp=S,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):vt,x.styledComponentId=h,x.target=r?e.target:e,x.withComponent=function(V){var W=n.componentId,_=function(y,b){if(y==null)return{};var P,O,I={},K=Object.keys(y);for(O=0;O<K.length;O++)P=K[O],b.indexOf(P)>=0||(I[P]=y[P]);return I}(n,["componentId"]),f=W&&W+"-"+(kt(V)?V:Zt(Ht(V)));return rr(V,Te({},_,{attrs:v,componentId:f}),t)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=r?nr({},e.defaultProps,V):V}}),process.env.NODE_ENV!=="production"&&(er(d,h),x.warnTooManyClasses=function(V,W){var _={},f=!1;return function(y){if(!f&&(_[y]=!0,Object.keys(_).length>=200)){var b=W?' with the id of "'+W+'"':"";console.warn("Over 200 classes were generated for component "+V+b+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),f=!0,_={}}}}(d,h)),x.toString=function(){return"."+x.styledComponentId},o&&So(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var Ut=function(e){return function n(t,r,o){if(o===void 0&&(o=je),!ht.isValidElementType(r))return Ye(1,String(r));var s=function(){return t(r,o,Ct.apply(void 0,arguments))};return s.withConfig=function(i){return n(t,r,Te({},o,{},i))},s.attrs=function(i){return n(t,r,Te({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},s}(rr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ut[e]=Ut(e)});var ts=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Zn(t),St.registerId(this.componentId+1)}var n=e.prototype;return n.createStyles=function(t,r,o,s){var i=s(Ge(this.rules,r,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,i)},n.removeStyles=function(t,r){r.clearRules(this.componentId+t)},n.renderStyles=function(t,r,o,s){t>2&&St.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,s)},e}();function ns(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=Ct.apply(void 0,[e].concat(t)),s="sc-global-"+Vt(JSON.stringify(o)),i=new ts(o,s);function l(c){var d=Xn(),h=Un(),v=p.useContext(Qe),S=p.useRef(d.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(x){return typeof x=="string"&&x.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),d.server&&u(S,c,d,v,h),p.useLayoutEffect(function(){if(!d.server)return u(S,c,d,v,h),function(){return i.removeStyles(S,d)}},[S,c,d,v,h]),null}function u(c,d,h,v,S){if(i.isStatic)i.renderStyles(c,Mo,h,S);else{var x=Te({},d,{theme:tr(d,v,l.defaultProps)});i.renderStyles(c,x,h,S)}}return process.env.NODE_ENV!=="production"&&er(s),p.memo(l)}function $t(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=Ct.apply(void 0,[e].concat(t)).join(""),s=Vt(o);return new Kn(s,o)}var Dt=function(){return p.useContext(Qe)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const w=Ut,gt="reactSchedulerOutsideWrapper",Ae="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",rs=ns`

  #${gt} {
    font-family: ${Ae};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${gt} *,
 #${gt} *:before,
 #${gt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,os={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},ss={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},Re=`
margin: 0;
padding: 0;
`,et=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;w.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const be=50,Ie=24,tt=16,Xe=40,nt=Xe+tt+Ie,rt=84,he=56,Ee=196,_e=12,Me=50,ot=24,mt=16,Kt=40,is=ot+mt+Kt,or=24,sr=52,Pe={topRow:`600 14px ${Ae}`,middleRow:`400 10px ${Ae}`,bottomRow:{name:`600 14px ${Ae}`,number:`600 10px ${Ae}`,hoursInDay:`400 9px ${Ae}`}},st=3,as=1.6,cs=4.5,qt=12,Et=24,ls="reactSchedulerCanvasHeaderWrapper",ir="reactSchedulerCanvasWrapper",Oe=gt,ds=4,Jt=48,Ze=5,us=40,ar=8,Qt=Ie/2+2,cr=tt/2+Ie+1,lr=2,Se=60,De=21,dr=58;var Ue={},fs={get exports(){return Ue},set exports(e){Ue=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t=1e3,r=6e4,o=36e5,s="millisecond",i="second",l="minute",u="hour",c="day",d="week",h="month",v="quarter",S="year",x="date",k="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,N=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,V={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(T){var E=["th","st","nd","rd"],A=T%100;return"["+T+(E[(A-20)%10]||E[A]||E[0])+"]"}},W=function(T,E,A){var F=String(T);return!F||F.length>=E?T:""+Array(E+1-F.length).join(A)+T},_={s:W,z:function(T){var E=-T.utcOffset(),A=Math.abs(E),F=Math.floor(A/60),L=A%60;return(E<=0?"+":"-")+W(F,2,"0")+":"+W(L,2,"0")},m:function T(E,A){if(E.date()<A.date())return-T(A,E);var F=12*(A.year()-E.year())+(A.month()-E.month()),L=E.clone().add(F,h),Q=A-L<0,ee=E.clone().add(F+(Q?-1:1),h);return+(-(F+(A-L)/(Q?L-ee:ee-L))||0)},a:function(T){return T<0?Math.ceil(T)||0:Math.floor(T)},p:function(T){return{M:h,y:S,w:d,d:c,D:x,h:u,m:l,s:i,ms:s,Q:v}[T]||String(T||"").toLowerCase().replace(/s$/,"")},u:function(T){return T===void 0}},f="en",y={};y[f]=V;var b=function(T){return T instanceof K},P=function T(E,A,F){var L;if(!E)return f;if(typeof E=="string"){var Q=E.toLowerCase();y[Q]&&(L=Q),A&&(y[Q]=A,L=Q);var ee=E.split("-");if(!L&&ee.length>1)return T(ee[0])}else{var se=E.name;y[se]=E,L=se}return!F&&L&&(f=L),L||!F&&f},O=function(T,E){if(b(T))return T.clone();var A=typeof E=="object"?E:{};return A.date=T,A.args=arguments,new K(A)},I=_;I.l=P,I.i=b,I.w=function(T,E){return O(T,{locale:E.$L,utc:E.$u,x:E.$x,$offset:E.$offset})};var K=function(){function T(A){this.$L=P(A.locale,null,!0),this.parse(A)}var E=T.prototype;return E.parse=function(A){this.$d=function(F){var L=F.date,Q=F.utc;if(L===null)return new Date(NaN);if(I.u(L))return new Date;if(L instanceof Date)return new Date(L);if(typeof L=="string"&&!/Z$/i.test(L)){var ee=L.match(g);if(ee){var se=ee[2]-1||0,ae=(ee[7]||"0").substring(0,3);return Q?new Date(Date.UTC(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,ae)):new Date(ee[1],se,ee[3]||1,ee[4]||0,ee[5]||0,ee[6]||0,ae)}}return new Date(L)}(A),this.$x=A.x||{},this.init()},E.init=function(){var A=this.$d;this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()},E.$utils=function(){return I},E.isValid=function(){return this.$d.toString()!==k},E.isSame=function(A,F){var L=O(A);return this.startOf(F)<=L&&L<=this.endOf(F)},E.isAfter=function(A,F){return O(A)<this.startOf(F)},E.isBefore=function(A,F){return this.endOf(F)<O(A)},E.$g=function(A,F,L){return I.u(A)?this[F]:this.set(L,A)},E.unix=function(){return Math.floor(this.valueOf()/1e3)},E.valueOf=function(){return this.$d.getTime()},E.startOf=function(A,F){var L=this,Q=!!I.u(F)||F,ee=I.p(A),se=function(M,Z){var J=I.w(L.$u?Date.UTC(L.$y,Z,M):new Date(L.$y,Z,M),L);return Q?J:J.endOf(c)},ae=function(M,Z){return I.w(L.toDate()[M].apply(L.toDate("s"),(Q?[0,0,0,0]:[23,59,59,999]).slice(Z)),L)},H=this.$W,z=this.$M,U=this.$D,te="set"+(this.$u?"UTC":"");switch(ee){case S:return Q?se(1,0):se(31,11);case h:return Q?se(1,z):se(0,z+1);case d:var C=this.$locale().weekStart||0,Y=(H<C?H+7:H)-C;return se(Q?U-Y:U+(6-Y),z);case c:case x:return ae(te+"Hours",0);case u:return ae(te+"Minutes",1);case l:return ae(te+"Seconds",2);case i:return ae(te+"Milliseconds",3);default:return this.clone()}},E.endOf=function(A){return this.startOf(A,!1)},E.$set=function(A,F){var L,Q=I.p(A),ee="set"+(this.$u?"UTC":""),se=(L={},L[c]=ee+"Date",L[x]=ee+"Date",L[h]=ee+"Month",L[S]=ee+"FullYear",L[u]=ee+"Hours",L[l]=ee+"Minutes",L[i]=ee+"Seconds",L[s]=ee+"Milliseconds",L)[Q],ae=Q===c?this.$D+(F-this.$W):F;if(Q===h||Q===S){var H=this.clone().set(x,1);H.$d[se](ae),H.init(),this.$d=H.set(x,Math.min(this.$D,H.daysInMonth())).$d}else se&&this.$d[se](ae);return this.init(),this},E.set=function(A,F){return this.clone().$set(A,F)},E.get=function(A){return this[I.p(A)]()},E.add=function(A,F){var L,Q=this;A=Number(A);var ee=I.p(F),se=function(z){var U=O(Q);return I.w(U.date(U.date()+Math.round(z*A)),Q)};if(ee===h)return this.set(h,this.$M+A);if(ee===S)return this.set(S,this.$y+A);if(ee===c)return se(1);if(ee===d)return se(7);var ae=(L={},L[l]=r,L[u]=o,L[i]=t,L)[ee]||1,H=this.$d.getTime()+A*ae;return I.w(H,this)},E.subtract=function(A,F){return this.add(-1*A,F)},E.format=function(A){var F=this,L=this.$locale();if(!this.isValid())return L.invalidDate||k;var Q=A||"YYYY-MM-DDTHH:mm:ssZ",ee=I.z(this),se=this.$H,ae=this.$m,H=this.$M,z=L.weekdays,U=L.months,te=function(Z,J,B,m){return Z&&(Z[J]||Z(F,Q))||B[J].slice(0,m)},C=function(Z){return I.s(se%12||12,Z,"0")},Y=L.meridiem||function(Z,J,B){var m=Z<12?"AM":"PM";return B?m.toLowerCase():m},M={YY:String(this.$y).slice(-2),YYYY:this.$y,M:H+1,MM:I.s(H+1,2,"0"),MMM:te(L.monthsShort,H,U,3),MMMM:te(U,H),D:this.$D,DD:I.s(this.$D,2,"0"),d:String(this.$W),dd:te(L.weekdaysMin,this.$W,z,2),ddd:te(L.weekdaysShort,this.$W,z,3),dddd:z[this.$W],H:String(se),HH:I.s(se,2,"0"),h:C(1),hh:C(2),a:Y(se,ae,!0),A:Y(se,ae,!1),m:String(ae),mm:I.s(ae,2,"0"),s:String(this.$s),ss:I.s(this.$s,2,"0"),SSS:I.s(this.$ms,3,"0"),Z:ee};return Q.replace(N,function(Z,J){return J||M[Z]||ee.replace(":","")})},E.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},E.diff=function(A,F,L){var Q,ee=I.p(F),se=O(A),ae=(se.utcOffset()-this.utcOffset())*r,H=this-se,z=I.m(this,se);return z=(Q={},Q[S]=z/12,Q[h]=z,Q[v]=z/3,Q[d]=(H-ae)/6048e5,Q[c]=(H-ae)/864e5,Q[u]=H/o,Q[l]=H/r,Q[i]=H/t,Q)[ee]||H,L?z:I.a(z)},E.daysInMonth=function(){return this.endOf(h).$D},E.$locale=function(){return y[this.$L]},E.locale=function(A,F){if(!A)return this.$L;var L=this.clone(),Q=P(A,F,!0);return Q&&(L.$L=Q),L},E.clone=function(){return I.w(this.$d,this)},E.toDate=function(){return new Date(this.valueOf())},E.toJSON=function(){return this.isValid()?this.toISOString():null},E.toISOString=function(){return this.$d.toISOString()},E.toString=function(){return this.$d.toUTCString()},T}(),R=K.prototype;return O.prototype=R,[["$ms",s],["$s",i],["$m",l],["$H",u],["$W",c],["$M",h],["$y",S],["$D",x]].forEach(function(T){R[T[1]]=function(E){return this.$g(E,T[0],T[1])}}),O.extend=function(T,E){return T.$i||(T(E,K,O),T.$i=!0),O},O.locale=P,O.isDayjs=b,O.unix=function(T){return O(1e3*T)},O.en=y[f],O.Ls=y,O.p={},O})})(fs);const D=Ue,ur=e=>e%4===0&&e%100>0||e%400===0?366:365,Rt=e=>{const n=e.day();return n!==0&&n!==6},fr=(e,n)=>D(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(n,"months").daysInMonth(),hr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:Rt(e),isCurrentDay:e.isSame(D(),"day"),year:parseInt(e.format("YYYY"))});let _t=null;const hs=e=>{if(_t)return _t;const n=document.createElement("canvas");n.width=12,n.height=12;const t=n.getContext("2d");return t?(t.strokeStyle="rgba(120, 137, 127, 0.045)",t.lineWidth=6,t.beginPath(),t.moveTo(-3,15),t.lineTo(15,-3),t.stroke(),_t=e.createPattern(n,"repeat"),_t):null},en=(e,n,t,r,o,s,i,l=!1)=>{if(e.strokeStyle=i.colors.border,s?e.fillStyle=i.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=i.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(n,t,r,he),l&&!s){const u=hs(e);u&&(e.fillStyle=u,e.fillRect(n,t,r,he))}e.strokeRect(n+.5,t+.5,r,he)},tn=(e,n)=>{let t=0;for(const r of n)r<=e&&t++;return t*De},ps=(e,n,t,r,o,s=[])=>{for(let i=0;i<n;i++){const l=tn(i,s);for(let u=0;u<=t;u++){const c=D(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(u,"days"),d=c.isSame(D(),"day"),h=c.isBefore(D(),"day");en(e,u*be,i*he+l,be,Rt(c),d,o,h)}}},gs=(e,n,t,r)=>{e.setLineDash([5,5]),e.strokeStyle=r.colors.border,e.moveTo(n+.5,.5),e.lineTo(n+.5,t+.5),e.stroke()},ms=(e,n,t,r,o,s=[])=>{let i=0,l=-(r.dayOfMonth-1)*_e;const u=n*he+s.length*De;for(let c=0;c<=t;c++){const h=D(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(c,"weeks").isSame(D(),"week");for(let v=0;v<n;v++){const S=tn(v,s);en(e,i,v*he+S,rt,!0,h,o)}i+=rt}for(let c=0;c<t;c++){const d=fr(r,c)*_e;gs(e,l,u,o),l+=d}},ys=(e,n,t,r,o,s=[])=>{const i=D(`${r.year}-${r.month+1}-${r.dayOfMonth+1}`);for(let l=0;l<n;l++){const u=tn(l,s);for(let c=0;c<=t;c++){let d;c===Math.floor(t/2)?d=D():c>Math.floor(t/2)?d=D().add(c-Math.floor(t/2),"hours"):d=D().subtract(Math.floor(t/2)-l,"hours");const h=i.isSame(D(),"day")&&d.isSame(D(),"hour");en(e,c*Me+Me/2-.5,l*he+u,Me,Rt(d),h,o)}}},vs=(e,n,t,r)=>{const o=t*he+n*De,s=e.canvas.width,i=o+De/2;e.fillStyle=r.mode==="dark"?r.colors.primary+"80":r.colors.primary,e.fillRect(0,o,s,De),e.strokeStyle=r.colors.border,e.lineWidth=1,e.setLineDash([]),e.beginPath(),e.moveTo(0,i+.5),e.lineTo(s,i+.5),e.stroke()},xs=(e,n,t,r,o,s,i=[])=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(ir)){switch(n){case 0:ms(e,t,r,o,s,i);break;case 1:ps(e,t,r,o,s,i);break;case 2:ys(e,t,r,o,s,i);break}for(let u=0;u<i.length;u++)vs(e,u,i[u],s)}};var nn={},bs={get exports(){return nn},set exports(e){nn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t="week",r="year";return function(o,s,i){var l=s.prototype;l.week=function(u){if(u===void 0&&(u=null),u!==null)return this.add(7*(u-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var d=i(this).startOf(r).add(1,r).date(c),h=i(this).endOf(t);if(d.isBefore(h))return 1}var v=i(this).startOf(r).date(c).startOf(t).subtract(1,"millisecond"),S=this.diff(v,t,!0);return S<0?i(this).startOf("week").week():Math.ceil(S)},l.weeks=function(u){return u===void 0&&(u=null),this.week(u)}}})})(bs);const ws=nn;var rn={},Ss={get exports(){return rn},set exports(e){rn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r,o){r.prototype.dayOfYear=function(s){var i=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?i:this.add(s-i,"day")}}})})(Ss);const Cs=rn;var on={},Ms={get exports(){return on},set exports(e){on=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t="day";return function(r,o,s){var i=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return i(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var d,h,v,S,x=i(this),k=(d=this.isoWeekYear(),h=this.$u,v=(h?s.utc:s)().year(d).startOf("year"),S=4-v.isoWeekday(),v.isoWeekday()>4&&(S+=7),v.add(S,t));return x.diff(k,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var u=l.startOf;l.startOf=function(c,d){var h=this.$utils(),v=!!h.u(d)||d;return h.p(c)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):u.bind(this)(c,d)}}})})(Ms);const ks=on;var sn={},$s={get exports(){return sn},set exports(e){sn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r,o){r.prototype.isBetween=function(s,i,l,u){var c=o(s),d=o(i),h=(u=u||"()")[0]==="(",v=u[1]===")";return(h?this.isAfter(c,l):!this.isBefore(c,l))&&(v?this.isBefore(d,l):!this.isAfter(d,l))||(h?this.isBefore(c,l):!this.isAfter(c,l))&&(v?this.isAfter(d,l):!this.isBefore(d,l))}}})})($s);const Ds=sn;var an={},Es={get exports(){return an},set exports(e){an=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t,r,o=1e3,s=6e4,i=36e5,l=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,d=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:c,months:d,days:l,hours:i,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},S=function(f){return f instanceof _},x=function(f,y,b){return new _(f,b,y.$l)},k=function(f){return r.p(f)+"s"},g=function(f){return f<0},N=function(f){return g(f)?Math.ceil(f):Math.floor(f)},V=function(f){return Math.abs(f)},W=function(f,y){return f?g(f)?{negative:!0,format:""+V(f)+y}:{negative:!1,format:""+f+y}:{negative:!1,format:""}},_=function(){function f(b,P,O){var I=this;if(this.$d={},this.$l=O,b===void 0&&(this.$ms=0,this.parseFromMilliseconds()),P)return x(b*v[k(P)],this);if(typeof b=="number")return this.$ms=b,this.parseFromMilliseconds(),this;if(typeof b=="object")return Object.keys(b).forEach(function(T){I.$d[k(T)]=b[T]}),this.calMilliseconds(),this;if(typeof b=="string"){var K=b.match(h);if(K){var R=K.slice(2).map(function(T){return T!=null?Number(T):0});return this.$d.years=R[0],this.$d.months=R[1],this.$d.weeks=R[2],this.$d.days=R[3],this.$d.hours=R[4],this.$d.minutes=R[5],this.$d.seconds=R[6],this.calMilliseconds(),this}}return this}var y=f.prototype;return y.calMilliseconds=function(){var b=this;this.$ms=Object.keys(this.$d).reduce(function(P,O){return P+(b.$d[O]||0)*v[O]},0)},y.parseFromMilliseconds=function(){var b=this.$ms;this.$d.years=N(b/c),b%=c,this.$d.months=N(b/d),b%=d,this.$d.days=N(b/l),b%=l,this.$d.hours=N(b/i),b%=i,this.$d.minutes=N(b/s),b%=s,this.$d.seconds=N(b/o),b%=o,this.$d.milliseconds=b},y.toISOString=function(){var b=W(this.$d.years,"Y"),P=W(this.$d.months,"M"),O=+this.$d.days||0;this.$d.weeks&&(O+=7*this.$d.weeks);var I=W(O,"D"),K=W(this.$d.hours,"H"),R=W(this.$d.minutes,"M"),T=this.$d.seconds||0;this.$d.milliseconds&&(T+=this.$d.milliseconds/1e3);var E=W(T,"S"),A=b.negative||P.negative||I.negative||K.negative||R.negative||E.negative,F=K.format||R.format||E.format?"T":"",L=(A?"-":"")+"P"+b.format+P.format+I.format+F+K.format+R.format+E.format;return L==="P"||L==="-P"?"P0D":L},y.toJSON=function(){return this.toISOString()},y.format=function(b){var P=b||"YYYY-MM-DDTHH:mm:ss",O={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return P.replace(u,function(I,K){return K||String(O[I])})},y.as=function(b){return this.$ms/v[k(b)]},y.get=function(b){var P=this.$ms,O=k(b);return O==="milliseconds"?P%=1e3:P=O==="weeks"?N(P/v[O]):this.$d[O],P===0?0:P},y.add=function(b,P,O){var I;return I=P?b*v[k(P)]:S(b)?b.$ms:x(b,this).$ms,x(this.$ms+I*(O?-1:1),this)},y.subtract=function(b,P){return this.add(b,P,!0)},y.locale=function(b){var P=this.clone();return P.$l=b,P},y.clone=function(){return x(this.$ms,this)},y.humanize=function(b){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!b)},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},f}();return function(f,y,b){t=b,r=b().$utils(),b.duration=function(I,K){var R=b.locale();return x(I,{$l:R},K)},b.isDuration=S;var P=y.prototype.add,O=y.prototype.subtract;y.prototype.add=function(I,K){return S(I)&&(I=I.asMilliseconds()),P.bind(this)(I,K)},y.prototype.subtract=function(I,K){return S(I)&&(I=I.asMilliseconds()),O.bind(this)(I,K)}}})})(Es);const _s=an;var Ts="Expected a function",pr=0/0,As="[object Symbol]",Ps=/^\s+|\s+$/g,Os=/^[-+]0x[0-9a-f]+$/i,Ys=/^0b[01]+$/i,Is=/^0o[0-7]+$/i,Ls=parseInt,Ns=typeof Ce=="object"&&Ce&&Ce.Object===Object&&Ce,Fs=typeof self=="object"&&self&&self.Object===Object&&self,Hs=Ns||Fs||Function("return this")(),Ws=Object.prototype,zs=Ws.toString,Bs=Math.max,js=Math.min,cn=function(){return Hs.Date.now()};function Zs(e,n,t){var r,o,s,i,l,u,c=0,d=!1,h=!1,v=!0;if(typeof e!="function")throw new TypeError(Ts);n=gr(n)||0,ln(t)&&(d=!!t.leading,h="maxWait"in t,s=h?Bs(gr(t.maxWait)||0,n):s,v="trailing"in t?!!t.trailing:v);function S(y){var b=r,P=o;return r=o=void 0,c=y,i=e.apply(P,b),i}function x(y){return c=y,l=setTimeout(N,n),d?S(y):i}function k(y){var b=y-u,P=y-c,O=n-b;return h?js(O,s-P):O}function g(y){var b=y-u,P=y-c;return u===void 0||b>=n||b<0||h&&P>=s}function N(){var y=cn();if(g(y))return V(y);l=setTimeout(N,k(y))}function V(y){return l=void 0,v&&r?S(y):(r=o=void 0,i)}function W(){l!==void 0&&clearTimeout(l),c=0,r=u=o=l=void 0}function _(){return l===void 0?i:V(cn())}function f(){var y=cn(),b=g(y);if(r=arguments,o=this,u=y,b){if(l===void 0)return x(u);if(h)return l=setTimeout(N,n),S(u)}return l===void 0&&(l=setTimeout(N,n)),i}return f.cancel=W,f.flush=_,f}function ln(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Vs(e){return!!e&&typeof e=="object"}function Gs(e){return typeof e=="symbol"||Vs(e)&&zs.call(e)==As}function gr(e){if(typeof e=="number")return e;if(Gs(e))return pr;if(ln(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ln(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ps,"");var t=Ys.test(e);return t||Is.test(e)?Ls(e.slice(2),t?2:8):Os.test(e)?pr:+e}var dn=Zs;const Tt=[0,1,2];var yt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(yt||{});const mr=e=>Tt.includes(e),it=e=>{var r;const t=(((r=document.getElementById(Oe))==null?void 0:r.clientWidth)||0)-Ee;switch(e){case 1:return Math.ceil(t/be)*st;case 2:return Math.ceil(t/Me)*st;default:return Math.ceil(t/rt)*st}},un=e=>it(e)/st,fn=(e,n)=>{const t=it(n)/2;let r;switch(n){case 1:r=e.subtract(t,"days");break;case 2:r=e.subtract(t,"hours");break;default:r=e.subtract(t,"weeks");break}let o;switch(n){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:r,endDate:o}},Xs=(e,n)=>{const t=fn(e,n);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},hn=()=>{var t;return((((t=document.getElementById(Oe))==null?void 0:t.clientWidth)||0)-Ee)*st},yr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:D(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});D.extend(ws),D.extend(Cs),D.extend(ks),D.extend(Ds),D.extend(_s);const Us=({data:e,children:n,isLoading:t,config:r,defaultStartDate:o=D(),onRangeChange:s,handleToggleDisplayActiveUnits:i,onClearFilterData:l})=>{const{zoom:u,maxRecordsPerPage:c=50}=r,[d,h]=p.useState(u),[v,S]=p.useState(D()),[x,k]=p.useState(!1),[g,N]=p.useState(it(d)),V=Tt[d]!==Tt[Tt.length-1],W=d!==0,_=p.useMemo(()=>Xs(v,d),[v,d]),f=fn(v,d).startDate,y=D(f).dayOfYear(),b=hr(f),P=p.useRef(null),O=p.useRef(!1),I=p.useRef(null),[K,R]=p.useState([{x:0,y:0}]),T=p.useCallback((Y,M="auto")=>{var J,B,m,X;const Z=hn();switch(Y){case"back":return(J=P.current)==null?void 0:J.scrollTo({behavior:M,left:Z/3});case"forward":return(B=P.current)==null?void 0:B.scrollTo({behavior:M,left:Z/3});case"middle":{const $=Z/st/4;return(m=P.current)==null?void 0:m.scrollTo({behavior:M,left:Z/2-$})}default:return(X=P.current)==null?void 0:X.scrollTo({behavior:M,left:Z/2})}},[]),E=Y=>{R(Y)},A=p.useCallback(Y=>{const M=un(d);let Z;switch(d){case 0:Z=M*7;break;case 1:Z=M;break;case 2:Z=Math.ceil(M/Et);break}dn(()=>{switch((Y==="forward"||Y==="back")&&(O.current=!0),I.current=Y,Y){case"back":S(B=>B.subtract(Z,"days"));break;case"forward":S(B=>B.add(Z,"days"));break;case"middle":S(D());break}s==null||s(_)},300)()},[s,_,d]);p.useEffect(()=>{I.current&&(T(I.current),I.current=null)},[v,T]),p.useEffect(()=>{P.current=document.getElementById(Oe),N(it(d))},[d]),p.useEffect(()=>{const Y=()=>N(it(d));return window.addEventListener("resize",Y),()=>window.removeEventListener("resize",Y)},[d]),p.useEffect(()=>{s==null||s(_)},[s,_]),p.useEffect(()=>{k(!1)},[o]),p.useEffect(()=>{x||(T("middle"),k(!0),S(o))},[o,x,T]);const F=()=>{t||(S(Y=>d===2?Y.add(or,"hours"):Y.add(lr,"weeks")),s==null||s(_))},L=p.useCallback(()=>{t||A("forward")},[t,A]),Q=()=>{t||(S(Y=>d===2?Y.subtract(or,"hours"):Y.subtract(lr,"weeks")),s==null||s(_))},ee=p.useCallback(()=>{!x||t||A("back")},[x,t,A]),se=p.useCallback(()=>{t||A("middle")},[t,A]),ae=p.useCallback(Y=>{if(t)return;const M=D(Y).startOf("day");M.isValid()&&(I.current="middle",S(M),s==null||s(_))},[t,s,_]),H=()=>U(d+1),z=()=>U(d-1),U=Y=>{mr(Y)&&(h(Y),N(it(Y)),s==null||s(_))},te=()=>i==null?void 0:i(),{Provider:C}=yr;return a.jsx(C,{value:{data:e,config:r,handleGoNext:F,handleScrollNext:L,handleGoPrev:Q,handleScrollPrev:ee,handleGoToday:se,goToDate:ae,zoomIn:H,zoomOut:z,setZoom:U,zoom:d,isNextZoom:V,isPrevZoom:W,date:v,isLoading:t,cols:g,startDate:b,dayOfYear:y,toggleDisplayActiveUnits:te,tilesCoords:K,updateTilesCoords:E,recordsThreshold:c,onClearFilterData:l,suppressNextSlideRef:O},children:n})},Le=()=>p.useContext(yr),vr=(e,n,t)=>{e.canvas.width=n*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=n+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},xr=(e,n)=>{if(n.length===0)return e;let t=e,r=0;for(const o of n){const s=o*he+r*De;if(e>=s+De)r++;else if(e>=s)return o*he+r*De-r*De}return t-r*De},Ks=5,br=(e,n)=>{const t=Math.abs(n.x-e.x),r=Math.abs(n.y-e.y);return Math.sqrt(t*t+r*r)>Ks},at=(e,n,t)=>{const r=t.getBoundingClientRect();return{x:e-r.left+t.scrollLeft,y:n-r.top+t.scrollTop}},qs=({data:e,baseData:n,zoom:t,startDate:r,onEventDrop:o,onEventDrag:s,draggableConfig:i={},gridRef:l,separatorRowIndices:u=[]})=>{const c=n?n.length>0&&n[0].data.length>0&&!Array.isArray(n[0].data[0])?n.map(Y=>({...Y,data:[Y.data]})):n:e,{enabled:d=!0,isDraggable:h,resourceOnly:v=!1,isValidDrop:S}=i,[x,k]=p.useState("idle"),[g,N]=p.useState(null),[V,W]=p.useState({x:0,y:0}),[_,f]=p.useState({width:0,height:48}),[y,b]=p.useState(null),[P,O]=p.useState(!0),I=p.useRef({x:0,y:0}),K=p.useRef({x:0,y:0}),R=p.useRef({x:0,y:0}),T=p.useRef(null),E=p.useRef(null),A=p.useRef(0),F=p.useRef(null),L=p.useCallback(Y=>!d||Y.draggable===!1?!1:h?h(Y):!0,[d,h]),Q=p.useCallback((Y,M)=>{const Z=xr(M,u),J=Math.floor(Z/he);let B;switch(t){case 0:B=_e*7;break;case 1:B=be;break;case 2:B=Me;break;default:B=be}const m=Math.floor(Y/B);let X;const $=D().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:X=$.add(m*7,"days").toDate();break;case 1:X=$.add(m,"days").toDate();break;case 2:X=$.add(m,"hours").toDate();break;default:X=$.toDate()}return{snappedDate:X,snappedResourceIndex:J}},[t,r,u]),ee=p.useCallback((Y,M,Z,J)=>{const B=[],m=M.getTime(),X=Z.getTime(),$=c.find(ne=>ne.id===J);if(!$)return B;const j=[];for(const ne of $.data)Array.isArray(ne)?j.push(...ne):j.push(ne);for(const ne of j){if(ne.segmentId===Y.segmentId)continue;const q=ne.startDate.getTime(),ce=ne.endDate.getTime();if(m>=q&&m<ce||X>q&&X<=ce||m<=q&&X>=ce){const de=new Date(Math.max(m,q)),ie=new Date(Math.min(X,ce)),fe=ie.getTime()-de.getTime();B.push({event:ne,conflictStart:de,conflictEnd:ie,overlapDuration:fe})}}return B},[c]),se=p.useCallback((Y,M,Z,J)=>{const B=[],m=M.getTime(),X=Z.getTime(),$=D(M).format("YYYY-MM-DD"),j=c.find(q=>q.id===J);if(!j)return B;const ne=[];for(const q of j.data)Array.isArray(q)?ne.push(...q):ne.push(q);for(const q of ne){if(q.segmentId===Y.segmentId)continue;const ce=q.startDate.getTime(),ue=q.endDate.getTime(),de=D(q.startDate).format("YYYY-MM-DD"),ie=D(q.endDate).format("YYYY-MM-DD"),fe=D(Z).format("YYYY-MM-DD");if(!(de===$||ie===$||de===fe||ie===fe||D(q.startDate).isBefore(M,"day")&&D(q.endDate).isAfter(Z,"day"))||m>=ce&&m<ue||X>ce&&X<=ue||m<=ce&&X>=ue)continue;let re,le;ue<=m?(re=m-ue,le="before"):(re=ce-X,le="after"),B.push({event:q,timeGap:re,position:le})}return B.sort((q,ce)=>q.timeGap-ce.timeGap)},[c]),ae=p.useCallback((Y,M,Z)=>{const J=Q(M,Z);let B,m;if(v)B=Y.startDate,m=Y.endDate;else{const ue=D(Y.endDate).diff(Y.startDate);B=J.snappedDate,m=D(B).add(ue,"milliseconds").toDate()}let X=0,$="",j;for(const ue of e){const de=Math.max(ue.data.length,1);if(J.snappedResourceIndex<X+de){$=ue.id,j=ue.capacity;break}X+=de}if(!$)return null;let ne=!0;j!==void 0&&Y.totalPassengers!==void 0&&(ne=Y.totalPassengers<=j);const q=ee(Y,B,m,$),ce=q.length===0?se(Y,B,m,$):[];return{startDate:B,endDate:m,resourceId:$,resourceIndex:J.snappedResourceIndex,resourceCapacity:j,hasCapacity:ne,conflicts:q,hasConflict:q.length>0,nearbyEvents:ce}},[Q,e,v,ee,se]),H=p.useCallback((Y,M)=>{if(!s)return;const Z=Date.now();if(Z-A.current<100)return;A.current=Z;const J={event:Y,currentStartDate:M.startDate,currentEndDate:M.endDate,currentResourceId:M.resourceId,conflicts:M.conflicts};s(J)},[s]),z=p.useCallback((Y,M)=>{if(!L(Y)||!l.current)return;M.preventDefault(),M.stopPropagation();const Z=M.target.closest('[style*="left"]');let J=0,B=0;Z&&Z.style.left&&Z.style.top&&(J=parseInt(Z.style.left),B=parseInt(Z.style.top));const m=at(M.clientX,M.clientY,l.current);I.current={x:J,y:B},K.current={x:M.clientX,y:M.clientY},R.current={x:m.x-J,y:20},F.current={startDate:Y.startDate,endDate:Y.endDate,resourceId:""};for(const j of e){for(const ne of j.data)if(ne.some(q=>q.segmentId===Y.segmentId)){F.current.resourceId=j.id;break}if(F.current.resourceId)break}N(Y),k("potential"),W({x:J,y:B});let X=100,$=48;if(Z){const j=Z.getBoundingClientRect();X=j.width,$=j.height}f({width:X,height:$})},[L,l,e,t]),U=p.useCallback(Y=>{if(!l.current)return;let M=l.current;for(;M&&M!==document.body;){const q=window.getComputedStyle(M);if(M.scrollHeight>M.clientHeight&&(q.overflowY==="auto"||q.overflowY==="scroll"||q.overflow==="auto"||q.overflow==="scroll"))break;M=M.parentElement}(!M||M===document.body)&&(M=document.documentElement);const Z=M.getBoundingClientRect(),J=Y.clientY,B=50,m=12,X=J-Z.top,$=Z.bottom-J;let j=!1,ne=0;X<B&&X>0?(j=!0,ne=-m*(1-X/B)):$<B&&$>0&&(j=!0,ne=m*(1-$/B)),j?(E.current&&cancelAnimationFrame(E.current),E.current=requestAnimationFrame(()=>{M.scrollTop+=ne,x==="dragging"&&U(Y)})):E.current&&(cancelAnimationFrame(E.current),E.current=null)},[l,x]),te=p.useCallback(Y=>{if(x==="idle"||x==="animating"||!g||!l.current)return;const M={x:Y.clientX,y:Y.clientY};if(x==="potential")if(br(K.current,M))k("dragging");else return;U(Y);const Z=at(Y.clientX,Y.clientY,l.current);T.current&&cancelAnimationFrame(T.current),T.current=requestAnimationFrame(()=>{const J={x:Z.x-R.current.x,y:Z.y-R.current.y};W(J);const B=ae(g,Z.x,Z.y);if(B&&S){const m={event:g,currentStartDate:B.startDate,currentEndDate:B.endDate,currentResourceId:B.resourceId,conflicts:B.conflicts};B.hasConflict=!S(m)}if(b(B),B){const m=B.hasCapacity!==!1;O(m),H(g,B)}})},[x,g,l,ae,H,S,U]),C=p.useCallback(async Y=>{if(x==="idle"||x==="animating")return;const M={x:Y.clientX,y:Y.clientY};if(!br(K.current,M)||x==="potential"){k("idle"),N(null),b(null);return}if(!g||!y||!F.current){k("idle"),N(null),b(null);return}if(y.hasCapacity===!1){O(!1),k("animating"),W(I.current),setTimeout(()=>{k("idle"),N(null),b(null),O(!0)},300);return}const J={event:g,originalStartDate:F.current.startDate,originalEndDate:F.current.endDate,originalResourceId:F.current.resourceId,newStartDate:y.startDate,newEndDate:y.endDate,newResourceId:y.resourceId,hasConflict:y.hasConflict,conflicts:y.conflicts};let B=!0;if(o)try{const m=o(J);B=m instanceof Promise?await m:m}catch{B=!1}B?(O(!0),k("idle"),N(null),b(null)):(O(!1),k("animating"),W(I.current),setTimeout(()=>{k("idle"),N(null),b(null),O(!0)},300))},[x,g,y,o,S]);return p.useEffect(()=>{if(x==="potential"||x==="dragging"){const Y=Z=>te(Z),M=Z=>C(Z);return document.addEventListener("mousemove",Y),document.addEventListener("mouseup",M),()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",M)}}else return()=>{}},[x,te,C]),p.useEffect(()=>()=>{T.current&&(cancelAnimationFrame(T.current),T.current=null),E.current&&(cancelAnimationFrame(E.current),E.current=null)},[]),p.useEffect(()=>{(x==="idle"||x==="animating")&&(T.current&&(cancelAnimationFrame(T.current),T.current=null),E.current&&(cancelAnimationFrame(E.current),E.current=null))},[x]),p.useEffect(()=>{(x==="dragging"||x==="potential")&&(x==="dragging"?(k("animating"),W(I.current),setTimeout(()=>{k("idle"),N(null),b(null)},300)):(k("idle"),N(null),b(null)))},[t]),p.useEffect(()=>{if((x==="dragging"||x==="potential")&&g){let Y=!1;for(const M of e){for(const Z of M.data)if(Z.some(J=>J.segmentId===g.segmentId)){Y=!0;break}if(Y)break}Y||(x==="dragging"?(k("animating"),W(I.current),setTimeout(()=>{k("idle"),N(null),b(null)},300)):(k("idle"),N(null),b(null)))}},[e,x,g]),{dragState:x,draggedEvent:g,ghostPosition:V,ghostDimensions:_,dropTarget:y,isValidDrop:P,handleDragStart:z,isDraggable:L,draggingEventId:(g==null?void 0:g.segmentId)||null,resourceOnly:v}},Js=({data:e,baseData:n,zoom:t,startDate:r,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:i={},gridRef:l,isDragging:u,separatorRowIndices:c=[]})=>{const{enabled:d=!1,isSelectable:h}=i,v=d&&!!o,S=p.useCallback(m=>{let X=0;for(const $ of c)$<=m&&X++;return m*he+X*De},[c]),[x,k]=p.useState("idle"),[g,N]=p.useState(null),[V,W]=p.useState(null),[_,f]=p.useState(null),[y,b]=p.useState(!1),[P,O]=p.useState([]),[I,K]=p.useState(!1),R=p.useRef(null),T=p.useRef(null),E=p.useRef(null),A=p.useRef(null),F=p.useCallback(()=>{switch(t){case 0:return _e*7;case 1:return be;case 2:return Me;default:return be}},[t]),L=p.useCallback(m=>{const X=F(),$=Math.floor(m/X),j=D().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return j.add($*7,"days").toDate();case 1:return j.add($,"days").toDate();case 2:return j.add($,"hours").toDate();default:return j.toDate()}},[t,r,F]),Q=p.useCallback(m=>{const X=xr(m,c),$=Math.floor(X/he);let j=0;for(const ne of e){const q=Math.max(ne.data.length,1);if($<j+q)return{resourceId:ne.id,resourceIndex:$,resourceLabel:ne.label};j+=q}return null},[e,c]),ee=p.useCallback(m=>{const X=F();return Math.floor(m/X)*X},[F]),se=p.useCallback((m,X,$,j=[])=>{const ne=[],ce=(n||e).find(ie=>ie.id===m),ue=X.getTime(),de=$.getTime();if(ce){const ie=ce.data[0],fe=ie&&Array.isArray(ie)?ce.data.flat():ce.data;for(const pe of fe){const G=new Date(pe.startDate).getTime(),re=new Date(pe.endDate).getTime();if(ue<re&&de>G){const le=new Date(Math.max(ue,G)),xe=new Date(Math.min(de,re)),we=xe.getTime()-le.getTime();ne.push({event:pe,conflictStart:le,conflictEnd:xe,overlapDuration:we})}}}for(const ie of j){if(ie.resourceId!==m)continue;const fe=ie.startDate.getTime(),pe=ie.endDate.getTime();if(ue<pe&&de>fe){const G=new Date(Math.max(ue,fe)),re=new Date(Math.min(de,pe)),le=re.getTime()-G.getTime(),xe={segmentId:`pending-${ie.startDate.getTime()}`,reservationId:`pending-${ie.startDate.getTime()}`,startDate:ie.startDate,endDate:ie.endDate,occupancy:0,title:`New Event (${ie.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ne.push({event:xe,conflictStart:G,conflictEnd:re,overlapDuration:le})}}return ne},[e,n]),ae=p.useCallback(m=>{if(!v||u||!l.current||m.button!==0)return;const X=m.target;if(X.closest("[data-segment-id]")||X.closest("[data-multi-select-ui]"))return;const $=at(m.clientX,m.clientY,l.current),j=Q($.y);if(!j)return;R.current={x:m.clientX,y:m.clientY},T.current=j.resourceIndex;const ne=ee($.x),q=F(),ce=S(j.resourceIndex);N($),W($),f({x:ne,y:ce,width:q,height:he}),k("selecting")},[v,u,l,Q,ee,F,S]),H=p.useCallback(m=>{W(m);const X=F(),$=ee((g==null?void 0:g.x)||0),j=ee(m.x),ne=S(T.current),q=Math.min($,j),ce=Math.max($,j)+X;f({x:q,y:ne,width:ce-q,height:he})},[g,F,ee,S]),z=p.useCallback(()=>{A.current&&(cancelAnimationFrame(A.current),A.current=null)},[]),U=p.useCallback((m,X)=>{const $=document.getElementById(Oe);if(!$||!l.current)return;const j=$.getBoundingClientRect(),ne=60,q=12,ce=m-(j.left+Ee),ue=j.right-m;let de=0;ce<ne?de=-q*(1-Math.max(0,ce)/ne):ue<ne&&(de=q*(1-Math.max(0,ue)/ne)),z(),de!==0&&(A.current=requestAnimationFrame(()=>{$.scrollLeft+=de,H(at(m,X,l.current)),U(m,X)}))},[l,H,z]),te=p.useCallback(m=>{if(x!=="selecting"||!l.current||T.current===null)return;const X=at(m.clientX,m.clientY,l.current);E.current&&cancelAnimationFrame(E.current),E.current=requestAnimationFrame(()=>H(X)),U(m.clientX,m.clientY)},[x,l,H,U]),C=p.useCallback(m=>{if(x!=="selecting")return;if(z(),!l.current||!g||!R.current){k("idle"),N(null),W(null),f(null);return}const X=at(m.clientX,m.clientY,l.current),$=Q(g.y);if(!$){k("idle"),N(null),W(null),f(null);return}const j=Math.min(g.x,X.x),ne=Math.max(g.x,X.x),q=L(j),ce=L(ne),ue=D(ce).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h($.resourceId,q,ue)){k("idle"),N(null),W(null),f(null);return}const de=se($.resourceId,q,ue,P),ie=de.length>0,fe={startDate:q,endDate:ue,resourceId:$.resourceId,resourceLabel:$.resourceLabel,zoomLevel:t,hasConflict:ie,conflicts:ie?de:void 0};if(y)O(pe=>[...pe,fe]),K(!0);else if(o){const pe=o(fe),G=re=>{re!=null&&re.continueMultiSelect&&(b(!0),O([fe]),K(!0))};pe instanceof Promise?pe.then(G):G(pe)}k("idle"),N(null),W(null),f(null),R.current=null,T.current=null},[x,l,g,Q,L,h,o,t,y,se,P,z]),Y=p.useCallback(()=>{if(P.length>0&&s){K(!1);const m=s(P),X=$=>{$!=null&&$.continueMultiSelect?K(!0):(O([]),b(!1),K(!1))};m instanceof Promise?m.then(X):X(m);return}O([]),b(!1),K(!1)},[P,s]),M=p.useCallback(()=>{O([]),b(!1),K(!1)},[]),Z=p.useCallback(m=>{O(X=>{const $=X.filter((j,ne)=>ne!==m);return $.length===0&&(b(!1),K(!1)),$})},[]),J=p.useCallback((m,X)=>{O($=>$.map((j,ne)=>{if(ne!==m)return j;const q={...j,...X},ce=$.filter((de,ie)=>ie!==m),ue=se(q.resourceId,q.startDate,q.endDate,ce);return{...q,hasConflict:ue.length>0,conflicts:ue.length>0?ue:void 0}}))},[se]),B=p.useCallback(m=>{m.key==="Escape"&&(x==="selecting"?(z(),k("idle"),N(null),W(null),f(null),R.current=null,T.current=null):y&&P.length>0&&(O([]),b(!1),K(!1)))},[x,y,P.length,z]);return p.useEffect(()=>{if(x==="selecting")return document.addEventListener("mousemove",te),document.addEventListener("mouseup",C),document.addEventListener("keydown",B),()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",C),document.removeEventListener("keydown",B)}},[x,te,C,B]),p.useEffect(()=>{if(y&&P.length>0)return document.addEventListener("keydown",B),()=>{document.removeEventListener("keydown",B)}},[y,P.length,B]),p.useEffect(()=>()=>{E.current&&(cancelAnimationFrame(E.current),E.current=null),z()},[z]),p.useEffect(()=>{u&&x==="selecting"&&(z(),k("idle"),N(null),W(null),f(null),R.current=null,T.current=null)},[u,x,z]),{selectionState:x,selectionStart:g,selectionEnd:V,selectionBox:_,handleGridMouseDown:ae,isEnabled:v,pendingSelections:P,confirmSelections:Y,clearSelections:M,removeSelection:Z,updateSelection:J,isMultiSelectActive:y,hasUnconfirmedSelections:I}},Qs=w.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,Rs=w.div`
  position: relative;
`,ei=w.canvas``;w.canvas``;const wr=w.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,ti=p.forwardRef(function({zoom:n,rows:t,data:r,baseData:o,onTileClick:s,onEventDrop:i,onEventDrag:l,draggableConfig:u,onDragStateChange:c,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v,separatorRowIndices:S=[]},x){const k=p.useRef(!1),{handleScrollNext:g,handleScrollPrev:N,date:V,isLoading:W,cols:_,startDate:f,suppressNextSlideRef:y}=Le(),b=p.useRef(null),P=p.useRef(null),O=p.useRef(null),I=p.useRef(null),[K,R]=p.useState(!1),T=Dt(),{dragState:E,draggedEvent:A,ghostPosition:F,ghostDimensions:L,dropTarget:Q,isValidDrop:ee,handleDragStart:se,isDraggable:ae,draggingEventId:H,resourceOnly:z}=qs({data:r,baseData:o||r,zoom:n,startDate:f,onEventDrop:i,onEventDrag:l,draggableConfig:u,gridRef:I,separatorRowIndices:S});p.useEffect(()=>{const ie=E==="dragging"||E==="potential";R(ie),c&&c(ie)},[E,c]);const U=p.useRef(!1),te=p.useRef(V),C=p.useRef(null);p.useEffect(()=>{var le;const ie=te.current;if(te.current=V,!U.current){U.current=!0;return}if(y!=null&&y.current){y.current=!1;return}const fe=I.current;if(!(fe!=null&&fe.animate))return;const pe=V.isAfter(ie)?34:-34;(le=C.current)==null||le.cancel(),fe.style.willChange="transform";const G=fe.animate([{transform:`translateX(${pe}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:300,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),re=()=>{fe.style.willChange=""};G.onfinish=re,G.oncancel=re,C.current=G},[V,y]);const{selectionState:Y,selectionBox:M,handleGridMouseDown:Z,pendingSelections:J,confirmSelections:B,clearSelections:m,removeSelection:X,updateSelection:$,isMultiSelectActive:j,hasUnconfirmedSelections:ne}=Js({data:r,baseData:o||r,zoom:n,startDate:f,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v,gridRef:I,isDragging:K,separatorRowIndices:S}),q=p.useCallback(ie=>{ie.preventDefault()},[]),ce=p.useCallback(ie=>{ie.preventDefault()},[]),ue=S.length*De,de=p.useCallback(ie=>{const fe=hn(),pe=t*he+1+ue;vr(ie,fe,pe),xs(ie,n,t,_,f,T,S)},[_,f,t,n,T,S,ue]);return p.useEffect(()=>{if(!b.current)return;const ie=b.current.getContext("2d");if(!ie)return;const fe=()=>de(ie);return window.addEventListener("resize",fe),()=>window.removeEventListener("resize",fe)},[de]),p.useEffect(()=>{const ie=b.current;if(!ie)return;ie.style.letterSpacing="1px";const fe=ie.getContext("2d");fe&&de(fe)},[V,t,n,de]),p.useEffect(()=>{if(!P.current)return;const ie=new IntersectionObserver(fe=>{fe[0].isIntersecting&&!k.current&&(k.current=!0,g(),setTimeout(()=>{k.current=!1},1e3))},{root:document.getElementById(Oe)});return ie.observe(P.current),()=>{ie.disconnect()}},[g]),p.useEffect(()=>{if(!O.current)return;const ie=new IntersectionObserver(fe=>{fe[0].isIntersecting&&!k.current&&(k.current=!0,N(),setTimeout(()=>{k.current=!1},1e3))},{root:document.getElementById(Oe),rootMargin:`0px 0px 0px -${Ee}px`});return ie.observe(O.current),()=>{ie.disconnect()}},[N]),a.jsxs(Qs,{id:ir,children:[a.jsxs(Rs,{ref:ie=>{typeof x=="function"?x(ie):x&&(x.current=ie),I.current=ie},onMouseDown:Z,style:{cursor:d?"crosshair":"default"},children:[a.jsx(wr,{position:"left",ref:O}),a.jsx(Mn,{isLoading:W,position:"left"}),a.jsx(ei,{ref:b,onDragStart:q,onDragOver:ce,style:{userSelect:E==="dragging"?"none":"auto"}}),a.jsx(wl,{zoom:n,startDate:f}),a.jsx(_c,{data:r,zoom:n,onTileClick:s,onDragStart:se,isDraggable:ae,draggingEventId:H,separatorRowIndices:S}),a.jsx(wr,{ref:P,position:"right"}),a.jsx(Mn,{isLoading:W,position:"right"}),(E==="dragging"||E==="animating")&&a.jsx(nl,{draggedEvent:A,ghostPosition:F,ghostDimensions:L,dropTarget:Q,isValidDrop:ee,dragState:E,zoom:n,data:r,resourceOnly:z,separatorRowIndices:S}),a.jsx(sl,{selectionBox:M,isSelecting:Y==="selecting"}),j&&J.length>0&&a.jsx(xl,{selections:J,data:r,zoom:n,startDate:f,onRemove:X,onUpdate:$,separatorRowIndices:S})]}),j&&ne&&J.length>0&&a.jsx(hl,{selections:J,onConfirm:B,onClear:m,onRemove:X})]})}),Sr=e=>{const n=D.duration(e,"seconds"),t=n.hours(),r=n.minutes();return{hours:t,minutes:r}},Cr=e=>{let n=0,t=0,r=0;return e.forEach(o=>{n+=o.minutes;const s=Math.floor(n/Se);t+=o.hours+s,r+=n%Se,r>=Se&&(t++,r-=Se)}),{hours:t,minutes:r}},Mr=(e,n)=>{let t=ar;switch(n){case 0:t=us;break;case 1:t=ar;break;case 2:t=1;break}const r=()=>{let s=t-e.hours-1,i=Se-e.minutes;return i===Se&&(s++,i=0),{hours:Math.max(0,s),minutes:s<0?0:i}},o=()=>{const s=e.hours-t,i=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:i}};return{free:r(),overtime:o()}},ni=(e,n,t)=>{const r=n.isoWeek(),o=e.map(c=>{const d=D(c.startDate).isoWeek(),h=D(c.startDate).isoWeekday(),v=D(c.endDate).isoWeek(),S=D(c.endDate).isoWeekday(),{hours:x,minutes:k}=Sr(c.occupancy);if(r===d){const g=(Ze+1-h)*x,N=(Ze+1-h)*k;return{hours:Math.max(0,g),minutes:N}}else if(r===v){const g=S>Ze?Ze*x:S*x,N=S>Ze?Ze*k:S*k;return{hours:g,minutes:N}}else if(D(n).isBetween(c.startDate,c.endDate))return{hours:Ze*x,minutes:Ze*k};return{hours:0,minutes:0}}),{hours:s,minutes:i}=Cr(o),{free:l,overtime:u}=Mr({hours:s,minutes:i},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,i)},free:l,overtime:u}},ri=(e,n,t,r)=>{const o=n.isoWeekday(),s=e.map(d=>{const{hours:h,minutes:v}=Sr(d.occupancy);return o<=(r?7:5)?{hours:h,minutes:v}:{hours:0,minutes:0}}),{hours:i,minutes:l}=Cr(s),{free:u,overtime:c}=Mr({hours:i,minutes:l},t);return{taken:{hours:Math.max(0,i),minutes:Math.max(0,l)},free:u,overtime:c}},oi=(e,n)=>{let t=0;e.forEach(l=>{const u=D(l.startDate).hour(),c=D(l.endDate).hour(),d=n.hour(),h=D(l.endDate).minute(),v=D(l.startDate).minute();u<d&&c>d?t+=Se:u===d&&c===d&&v&&h?t+=h?h-v:Se-v:u===d&&c>=d?t+=v?Se-v:Se:c===d&&h&&(t+=h)});const r=Math.floor(t/Se),o=t%Se,s=r||o?0:1,i=r?0:o?Se-o:0;return{taken:{hours:r,minutes:o},free:{hours:s,minutes:i},overtime:{hours:0,minutes:0}}},si=(e,n,t,r,o=!1)=>{if(n<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(i=>r===1?D(t).isBetween(i.startDate,i.endDate,"day","[]"):r===2?D(t).isBetween(i.startDate,i.endDate,"hour","[]"):D(i.startDate).isBetween(D(t),D(t).add(6,"days"),"day","[]")||D(t).isBetween(D(i.startDate),D(i.endDate),"day","[]"));switch(r){case 1:return ri(s,t,r,o);case 2:return oi(s,t);default:return ni(s,t,r)}},ii=(e,n,t,r,o,s,i=!1)=>{let l="weeks",u;switch(s){case 0:l="weeks",u=rt;break;case 1:l="days",u=be;break;case 2:l="hours",u=Me;break}const c=Math.ceil(s===2?(t.x-.5*u)/u:t.x/u),d=D(`${n.year}-${n.month+1}-${n.dayOfMonth}T${n.hour}:00:00`).add(c-1,l),h=Math.ceil(t.y/he),v=r.findIndex((N,V,W)=>W.slice(0,V+1).reduce((f,y)=>f+y,0)>=h),S=s===2?(c+1)*u:c*u,x=(h-1)*he+he,k=si(o[v],v,d,s,i),g=D(e.startDate).isSame(D(e.endDate),"day");return{coords:{x:S,y:x},mouseCoords:t,resourceIndex:v,disposition:k,reservationData:{startTime:D(e.startDate).format("hh:mm A"),startDate:D(e.startDate).format("MMM D, YYYY"),endTime:D(e.endDate).format("hh:mm A"),endDate:D(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,isOneDayEvent:g,passengers:e.totalPassengers}}};function ai(e,n){if(e.length<=1)return[];if(e.length<=n){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const r=Math.min(n-1,t.length);return t.slice(0,r).map(o=>o.index).sort((o,s)=>o-s)}function ci(e){const n={categories:[],capacityToCategoryId:new Map},t=new Set;for(const d of e)!d.isSubcontract&&d.capacity!=null&&t.add(d.capacity);const r=[...t].sort((d,h)=>d-h);if(r.length<2)return n;const o=Math.min(5,r.length),s=ai(r,o),i=[];let l=0;for(const d of s)i.push({min:r[l],max:r[d-1],values:r.slice(l,d)}),l=d;i.push({min:r[l],max:r[r.length-1],values:r.slice(l)});const u=[],c=new Map;return i.forEach((d,h)=>{const v="__auto_cat_"+h,S=d.min===d.max?d.min+" pax":d.min+"-"+d.max+" pax";u.push({id:v,name:S,minPassengers:d.min,maxPassengers:d.max});for(const x of d.values)c.set(x,v)}),{categories:u,capacityToCategoryId:c}}const li=(e,n,t,r)=>{const o=[];let s=0,i=[],l=0;return n.length>r?(n.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=r&&(o.push(i),s+=i.length,i=[],l=0),l++,i.push(d)}),t.slice(s).length<=r&&(i=[],n.slice(s).forEach((u,c)=>{const d={id:e[c+s].id,label:e[c+s].label,data:u,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};i.push(d),c===n.length-s-1&&o.push(i)})),o):(n.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};i.push(d)}),o.push(i),o)};var pn={},di={get exports(){return pn},set exports(e){pn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r){r.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(di);const ui=pn;var gn={},fi={get exports(){return gn},set exports(e){gn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r){r.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(fi);const hi=gn,pi=e=>{const n=[];for(const t of e){let r=!1;if(n.length)for(const o of n){let s=!1;for(let i=0;i<o.length;i++){const l=D(t.startDate).startOf("day"),u=D(t.endDate).startOf("day"),c=D(o[i].startDate).startOf("day"),d=D(o[i].endDate).startOf("day");if(l.isBetween(c,d,null,"[]")||u.isBetween(c,d,null,"[]")||l.isBefore(c,"minute")&&u.isAfter(d,"minute")||l.isAfter(c,"minute")&&u.isBefore(d,"minute")){s=!0;break}}if(!s){o.push(t),r=!0;break}}r||n.push([t])}return n};D.extend(ui),D.extend(hi);const kr=new WeakMap,gi=e=>{const n=kr.get(e);if(n)return n;const t=[...e].sort((o,s)=>{const i=D(o.startDate),l=D(s.startDate),u=i.startOf("day").diff(l.startOf("day"),"day");return u!==0?u:i.diff(l)}),r=pi(t);return kr.set(e,r),r},mi=e=>{const n=[[],[]],[t,r]=e.reduce((o,s)=>{const i=gi(s.data);return o[0].push(i),o[1].push(Math.max(i.length,1)),o},n);return{projectsPerPerson:t,rowsPerPerson:r}},yi=e=>e?e.map(n=>n.data.length).reduce((n,t)=>n+Math.max(t,1),0):0,vi=e=>{const{recordsThreshold:n}=Le(),[t,r]=p.useState(0),[o,s]=p.useState(0),i=p.useRef(null);p.useEffect(()=>{i.current=document.getElementById(Oe)},[]);const{projectsPerPerson:l,rowsPerPerson:u}=p.useMemo(()=>mi(e),[e]),c=p.useMemo(()=>li(e,l,u,n),[e,l,n,u]),d=p.useCallback(()=>{c[o].length&&i.current&&(i.current.scroll({top:0}),r(g=>g+c[Math.max(o,0)].length),s(g=>Math.min(g+1,c.length-1)),window.scroll({top:0}))},[o,c]),h=p.useCallback(()=>{c[o].length&&(r(g=>Math.max(g-c[o-1].length,0)),s(g=>Math.max(g-1,0)))},[o,c]),v=p.useCallback(()=>{r(0),s(0)},[]),S=t+c[o].length,x=p.useMemo(()=>u.slice(t,S),[S,u,t]),k=p.useMemo(()=>l.slice(t,S),[S,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:k,rowsPerItem:x,totalRowsPerPage:yi(c[o]),next:d,previous:h,reset:v}};var mn={},xi={get exports(){return mn},set exports(e){mn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var r=["th","st","nd","rd"],o=t%100;return"["+t+(r[(o-20)%10]||r[o]||r[0])+"]"}}})})(xi);const bi=mn;var yn={},wi={get exports(){return yn},set exports(e){yn=e}};(function(e,n){(function(t,r){e.exports=r(Ue)})(Ce,function(t){function r(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var o=r(t);function s(v){return v%10<5&&v%10>1&&~~(v/10)%10!=1}function i(v,S,x){var k=v+" ";switch(x){case"m":return S?"minuta":"minutę";case"mm":return k+(s(v)?"minuty":"minut");case"h":return S?"godzina":"godzinę";case"hh":return k+(s(v)?"godziny":"godzin");case"MM":return k+(s(v)?"miesiące":"miesięcy");case"yy":return k+(s(v)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),u="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,d=function(v,S){return c.test(S)?l[v.month()]:u[v.month()]};d.s=u,d.f=l;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:d,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(v){return v+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})(wi);const Si=yn;var vn={},Ci={get exports(){return vn},set exports(e){vn=e}};(function(e,n){(function(t,r){e.exports=r(Ue)})(Ce,function(t){function r(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=r(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(u,c,d){var h=s[d];return Array.isArray(h)&&(h=h[c?0:1]),h.replace("%d",u)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return o.default.locale(l,null,!0),l})})(Ci);const Mi=vn;var xn={},ki={get exports(){return xn},set exports(e){xn=e}};(function(e,n){(function(t,r){e.exports=r(Ue)})(Ce,function(t){function r(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=r(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),i="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,u=function(d,h){return l.test(h)?s[d.month()]:i[d.month()]};u.s=i,u.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:u,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(d){return d+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(ki);const $i=xn;var bn={},Di={get exports(){return bn},set exports(e){bn=e}};(function(e,n){(function(t,r){e.exports=r(Ue)})(Ce,function(t){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var o=r(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(i){return i+"º"}};return o.default.locale(s,null,!0),s})})(Di);const Ei=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:bi},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:Si},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:bn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:$i},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:Mi}];class _i{constructor(){to(this,"locales",Ei)}getLocales(){return this.locales}addLocales(n){this.locales.push(n)}}const At=new _i,$r=p.createContext({localesData:At.getLocales(),currentLocale:At.getLocales()[0],setCurrentLocale:()=>{}}),Ti=({children:e,lang:n,translations:t})=>{const[r,o]=p.useState("en"),s=At.getLocales(),i=p.useCallback(()=>{const h=s.find(v=>v.id===r);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&D.locale(h.dayjsTranslations),h||s[0]},[r,s]),[l,u]=p.useState(i()),c=h=>{localStorage.setItem("locale",h.translateCode),u(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(S=>S.id===h.id)||At.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),v=n??h??"en";localStorage.setItem("locale",v),o(v),u(i())},[i,n]);const{Provider:d}=$r;return a.jsx(d,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},Ne=()=>p.useContext($r).currentLocale.lang,Ai=e=>oe.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},oe.createElement("defs",null,oe.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),oe.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},oe.createElement("stop",{offset:.47,stopColor:"#ccc"}),oe.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),oe.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),oe.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),oe.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),oe.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),oe.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),oe.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),oe.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),oe.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),oe.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),oe.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Pi=w.div`
  height: 440px;
  width: 514px;
  position: relative;
`,Oi=w.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Yi=({onTileClick:e})=>{const{feelingEmpty:n}=Ne();return a.jsxs(Pi,{onClick:e,children:[a.jsx(Ai,{}),a.jsx(Oi,{children:n})]})},Ii=w.div`
  position: relative;
  display: flex;
`,Li=w.div`
  position: relative;
  margin-left: ${Ee};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Ni=w.div`
  width: calc(${({width:e})=>e}px - ${Ee}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ee}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,wn={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:yt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function Fi(e,n){const t=n?[...n].sort((l,u)=>l.maxPassengers-u.maxPassengers):[],r=[];for(const l of t){const u=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);u.length>0&&r.push({type:"category",category:l,items:u})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?r.push({type:"uncategorized",items:s}):s.length>0&&r.push({type:"uncategorized",items:s});const i=e.filter(l=>l.isSubcontract);return i.length>0&&r.push({type:"subcontract",items:i}),r}const Hi=({data:e,baseData:n,categories:t,onTileClick:r,onItemClick:o,toggleTheme:s,topBarWidth:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v})=>{const[S,x]=p.useState(wn),[k,g]=p.useState(e),[N,V]=p.useState(!1),[W,_]=p.useState(!1),[f,y]=p.useState(""),[b,P]=p.useState(new Set),{zoom:O,startDate:I,isLoading:K,config:{includeTakenHoursOnWeekendsInDayView:R,showTooltip:T,showThemeToggle:E}}=Le(),A=p.useRef(null),F=p.useRef(null),[L,Q]=p.useState(124),{page:ee,projectsPerPerson:se,rowsPerItem:ae,currentPageNum:H,pagesAmount:z,next:U,previous:te,reset:C}=vi(k),{effectiveCategories:Y,effectivePage:M}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:ee};const G=ci(ee);if(G.categories.length===0)return{effectiveCategories:void 0,effectivePage:ee};const re=ee.map(le=>{if(le.isSubcontract||le.capacity==null)return le;const xe=G.capacityToCategoryId.get(le.capacity);return xe?{...le,categoryId:xe}:le});return{effectiveCategories:G.categories,effectivePage:re}},[t,ee]),Z=p.useCallback(G=>{P(re=>{const le=new Set(re);return le.has(G)?le.delete(G):le.add(G),le})},[]),J=p.useMemo(()=>{const G=[],re=Y?[...Y].sort((le,xe)=>le.maxPassengers-xe.maxPassengers):[];for(const le of re)M.some(xe=>!xe.isSubcontract&&xe.categoryId===le.id)&&G.push(le.id);return M.some(le=>le.isSubcontract)&&G.push("__subcontract__"),G},[Y,M]),B=p.useCallback(()=>{P(new Set)},[]),m=p.useCallback(()=>{P(new Set(J))},[J]),{visiblePage:X,visibleRowsPerItem:$,visibleTotalRows:j,visibleProjectsPerPerson:ne,separatorRowIndices:q}=p.useMemo(()=>{const G=Fi(M,Y),re=((Y==null?void 0:Y.length)??0)>0,le=new Map;ee.forEach((ke,Be)=>le.set(ke.id,Be));const xe=[],we=[],We=[],ze=[];let dt=0;for(const ke of G)if(ke.type==="subcontract"||ke.type==="category"&&re){const ut=ke.type==="subcontract"?"__subcontract__":ke.category.id,ft=b.has(ut);if(ze.push(dt),!ft)for(const Ke of ke.items){const Ot=le.get(Ke.id)??0,Yt=ae[Ot];xe.push(Ke),we.push(Yt),We.push(se[Ot]),dt+=Yt}}else for(const ut of ke.items){const ft=le.get(ut.id)??0,Ke=ae[ft];xe.push(ut),we.push(Ke),We.push(se[ft]),dt+=Ke}const En=we.reduce((ke,Be)=>ke+Be,0);return{visiblePage:xe,visibleRowsPerItem:we,visibleTotalRows:En,visibleProjectsPerPerson:We,separatorRowIndices:ze}},[M,Y,ee,b,ae,se]),ce=p.useRef(dn((G,re,le,xe,we,We)=>{if(!A.current)return;const{tile:ze,segmentId:dt}=ie(G);if(!dt||!ze){V(!1),x(wn);return}const En=de(dt,re),ke=A.current.getBoundingClientRect(),Be=ze.getBoundingClientRect(),ut={x:G.clientX-ke.left,y:G.clientY-ke.top},ft={x:G.clientX-ke.left,y:G.clientY-ke.top},Ke={x:Be.left-ke.left,y:Be.top-ke.top,width:Be.width,height:Be.height},{coords:{x:Ot,y:Yt},resourceIndex:Sl,disposition:Cl,reservationData:Ml}=ii(En,le,ut,xe,we,We,R);x({coords:{x:Ot,y:Yt},mouseCoords:ft,resourceIndex:Sl,disposition:Cl,reservationData:Ml,tileBounds:Ke}),V(!0)},4)),ue=p.useRef(dn((G,re)=>{C(),g(G.map(le=>({...le,data:le.data.filter(xe=>{const{title:we,description:We,subtitle:ze}=xe;return(we==null?void 0:we.toLowerCase().includes(re.toLowerCase()))||(ze==null?void 0:ze.toLowerCase().includes(re.toLowerCase()))||(We==null?void 0:We.toLowerCase().includes(re.toLowerCase()))})})).filter(le=>le.data.length>0))},500)),de=(G,re)=>{if(G)return re.flatMap(le=>le.data).find(le=>le.segmentId===G)},ie=G=>{if(!G.target)return{tile:null,segmentId:null};const re=G.target.closest("[data-segment-id]");return re?{tile:re,segmentId:re.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},fe=G=>{const re=G.target.value;y(re),ue.current.cancel(),re?ue.current(e,re):(C(),g(e))},pe=p.useCallback(()=>{ce.current.cancel(),V(!1),x(wn)},[]);return p.useEffect(()=>{const G=le=>ce.current(le,e,I,$,ne,O),re=A.current;if(re)return re.addEventListener("mousemove",G),re.addEventListener("mouseleave",pe),()=>{re.removeEventListener("mousemove",G),re.removeEventListener("mouseleave",pe)}},[ce,pe,ne,$,I,O,e]),p.useEffect(()=>{f?(ue.current.cancel(),ue.current(e,f)):g(e)},[e,f]),p.useLayoutEffect(()=>{const G=F.current;if(!G)return;const re=()=>Q(G.offsetHeight);re();const le=new ResizeObserver(re);return le.observe(G),()=>le.disconnect()},[]),a.jsxs(Ii,{children:[a.jsx(Na,{headerHeight:L,data:M,categories:Y,pageNum:H,pagesAmount:z,rows:ae,onLoadNext:U,onLoadPrevious:te,searchInputValue:f,onSearchInputChange:fe,onItemClick:o,collapsedGroups:b,onToggleGroup:Z,allGroupIds:J,onExpandAll:B,onCollapseAll:m}),a.jsxs(Li,{children:[a.jsx(uc,{ref:F,zoom:O,topBarWidth:i,showThemeToggle:E,toggleTheme:s}),e.length?a.jsx(ti,{data:X,baseData:n||e,zoom:O,rows:j,ref:A,onTileClick:r,onEventDrop:l,onEventDrag:u,draggableConfig:c,onDragStateChange:_,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v,separatorRowIndices:q}):a.jsx(Ni,{width:i,children:K?a.jsx(Mn,{isLoading:K,position:"left"}):a.jsx(Yi,{})}),T&&N&&!W&&(S==null?void 0:S.resourceIndex)>-1&&a.jsx(Vc,{tooltipData:S})]})]})},Wi=w.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 9px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.primary};
`,Sn=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-self: ${({$at:e})=>e??"start"};
  justify-content: ${({$at:e})=>e==="end"?"flex-end":e==="center"?"center":"flex-start"};
`,zi=w.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Dr=w.button`
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
`,Bi=w.button`
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
`,ji=w.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin: 0 4px;
  text-transform: capitalize;
  white-space: nowrap;
`,Zi=w.div`
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
`,Er=w.button`
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
`,Vi=w.label`
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
`,Gi=w.button`
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
`,Xi=w.span`
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
`,ct=({children:e,sw:n=2})=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:e}),Ui=()=>{var n,t;const e=document.getElementById(Oe);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(n=e==null?void 0:e.requestFullscreen)==null||n.call(e)},Ki=()=>{const{config:e,date:n,zoom:t,handleGoNext:r,handleGoPrev:o,handleGoToday:s,setZoom:i,goToDate:l,toggleDisplayActiveUnits:u}=Le();Ne();const{filterButtonState:c=-1}=e,d=()=>{var h;(h=document.querySelector(`#${Oe} input[placeholder]`))==null||h.focus()};return a.jsxs(Wi,{width:0,children:[a.jsxs(Sn,{$at:"start",children:[a.jsx(ji,{children:n.locale(D.locale()).format("MMMM YYYY")}),a.jsxs(Zi,{children:[a.jsx("button",{className:t===2?"on":"",onClick:()=>i(2),children:"Día"}),a.jsx("button",{className:t===0?"on":"",onClick:()=>i(0),children:"Semana"}),a.jsx("button",{className:t===1?"on":"",onClick:()=>i(1),children:"Mes"})]}),a.jsxs(Vi,{children:[a.jsxs(ct,{children:[a.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),a.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),a.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",a.jsx("input",{type:"date",onChange:h=>h.target.value&&l(h.target.value)})]})]}),a.jsx(Sn,{$at:"center",children:a.jsxs(zi,{children:[a.jsx(Dr,{onClick:o,"aria-label":"Anterior",children:a.jsx(ct,{children:a.jsx("path",{d:"m15 18-6-6 6-6"})})}),a.jsx(Bi,{onClick:s,children:"Hoy"}),a.jsx(Dr,{onClick:r,"aria-label":"Siguiente",children:a.jsx(ct,{children:a.jsx("path",{d:"m9 18 6-6-6-6"})})})]})}),a.jsxs(Sn,{$at:"end",children:[a.jsxs(Gi,{onClick:d,children:[a.jsxs(ct,{children:[a.jsx("circle",{cx:"11",cy:"11",r:"7"}),a.jsx("path",{d:"m20 20-3.2-3.2"})]}),"Buscar",a.jsx("span",{className:"k",children:"⌘K"})]}),c>=0&&a.jsxs(Er,{$primary:!!c,onClick:u,children:[a.jsx(ct,{children:a.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&a.jsx(Xi,{children:c})]}),a.jsxs(Er,{onClick:Ui,children:[a.jsx(ct,{children:a.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]})]})]})},qi={add:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>oe.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),oe.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Cn=({iconName:e,width:n,height:t,fill:r,className:o})=>{const{colors:s}=Dt(),i=qi[e];return i?a.jsx(i,{style:{transition:".5s ease"},fill:r??s.accent,width:n,height:t,className:o}):null},Ji=(e,n,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[n];w.button`
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
  ${({theme:e,variant:n,disabled:t})=>Ji(e,n,t)}
`;const Qi=w.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${dr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ae};
`,Ri=w.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,ea=w.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,ta=w.div`
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
`,na=w.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,ra=w.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,oa=w.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({$sev:e})=>e===2?"#c6483d":e===1?"#d98a22":"#93b1a6"};
`,sa=w.div`
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
`,ia=w.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,aa=w.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,ca=w.div`
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
`,la=()=>{const{date:e,zoom:n,data:t,goToDate:r}=Le(),o=Ne(),s=p.useRef(null),[i,l]=p.useState(null),u=p.useMemo(()=>Array.from({length:12},(_,f)=>D().month(f).format("MMM").toUpperCase()),[o]),c=e.year(),d=p.useMemo(()=>D(new Date(c,0,1)),[c]),h=p.useMemo(()=>D(new Date(c+1,0,1)).diff(d,"day"),[c,d]),v=_=>_.diff(d,"day")/h*100,S=p.useMemo(()=>{const _=Math.ceil(h/7),f=new Array(_).fill(0),y=new Array(_).fill(0);for(const P of t??[])for(const O of P.data??[]){const I=D(O.startDate);if(I.year()!==c)continue;const K=Math.floor(I.diff(d,"day")/7);if(K<0||K>=_)continue;f[K]+=1;const R=O.readiness==="sin_chofer"?2:O.readiness==="sin_avisar"?1:0;R>y[K]&&(y[K]=R)}const b=Math.max(1,...f);return f.map((P,O)=>({h:P/b*100,sev:y[O]}))},[t,c,d,h]),x=D(),k=x.year()===c?v(x):null,g=n===1?un(1)/2:n===0?un(0)*7/2:.5,N=Math.max(0,v(e.subtract(g,"day"))),V=Math.min(100,v(e.add(g,"day")))-N,W=_=>{var b;const f=(b=s.current)==null?void 0:b.getBoundingClientRect();if(!f)return null;const y=Math.min(1,Math.max(0,(_-f.left)/f.width));return{f:y,d:d.add(Math.round(y*h),"day")}};return a.jsxs(Qi,{children:[a.jsxs(Ri,{children:["Navegar",a.jsx("br",{}),"por fecha"]}),a.jsxs(ea,{ref:s,onClick:_=>{const f=W(_.clientX);f&&r(f.d.toDate())},onMouseMove:_=>{const f=W(_.clientX);f&&l({left:f.f*100,label:`${f.d.date()} ${u[f.d.month()]}`})},onMouseLeave:()=>l(null),children:[a.jsx(ta,{children:u.map((_,f)=>a.jsx("span",{style:{left:`${v(D(new Date(c,f,1)))}%`},children:_},f))}),u.map((_,f)=>f===0?null:a.jsx(na,{style:{left:`${v(D(new Date(c,f,1)))}%`}},f)),a.jsx(ra,{children:S.map((_,f)=>a.jsx(oa,{$sev:_.sev,style:{height:`${_.h}%`}},f))}),a.jsx(ia,{style:{left:`${N}%`,width:`${V}%`}}),k!==null&&a.jsx(sa,{style:{left:`${k}%`},children:a.jsx("span",{children:"HOY"})}),i&&a.jsxs(a.Fragment,{children:[a.jsx(aa,{style:{left:`${i.left}%`}}),a.jsx(ca,{style:{left:`${i.left}%`},children:i.label})]})]})]})},da=w.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?dr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,ua=w.div`
  position: relative;
`,fa=({data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,schedulerRef:d,onTimeRangeSelect:h,onMultiTimeRangeSelect:v,clickToAddConfig:S})=>{const{goToDate:x,handleGoToday:k,zoomIn:g,zoomOut:N,zoom:V}=Le();return p.useImperativeHandle(d,()=>({goToDate:x,goToToday:k,setZoom:W=>{if(!mr(W))return;const _=W-V;if(_>0)for(let f=0;f<_;f++)g();else for(let f=0;f<Math.abs(_);f++)N()}}),[x,k,V,g,N]),a.jsx(Hi,{data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,onTimeRangeSelect:h,onMultiTimeRangeSelect:v,clickToAddConfig:S})},ha=p.forwardRef(function({data:n,categories:t,baseData:r,config:o,startDate:s,onRangeChange:i,onTileClick:l,handleToggleDisplayActiveUnits:u,onClearFilterData:c,onItemClick:d,isLoading:h,onEventDrop:v,onEventDrag:S,draggableConfig:x,onTimeRangeSelect:k,onMultiTimeRangeSelect:g,clickToAddConfig:N},V){var A;const W=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),_=p.useRef(null),f=p.useRef(null),[y,b]=p.useState((A=_.current)==null?void 0:A.clientWidth),P=p.useMemo(()=>D(s),[s]),[O,I]=p.useState(W.defaultTheme??"light"),K=()=>{I(O==="light"?"dark":"light")},R=O==="light"?os:ss,T=W.theme?W.theme[R.mode]:{},E={...R,colors:{...R.colors,...T}};return p.useImperativeHandle(V,()=>({goToDate:F=>{var L;return(L=f.current)==null?void 0:L.goToDate(F)},goToToday:()=>{var F;return(F=f.current)==null?void 0:F.goToToday()},setZoom:F=>{var L;return(L=f.current)==null?void 0:L.setZoom(F)}}),[]),p.useEffect(()=>{const F=()=>{_.current&&b(_.current.clientWidth)};return F(),window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)},[]),_.current,a.jsxs(a.Fragment,{children:[a.jsx(rs,{}),a.jsx(es,{theme:E,children:a.jsx(Ti,{lang:W.lang,translations:W.translations,children:a.jsxs(Us,{data:n,isLoading:!!h,config:W,onRangeChange:i,defaultStartDate:P,handleToggleDisplayActiveUnits:u,onClearFilterData:c,children:[a.jsx(da,{showScroll:!!n.length,$footer:W.showOverview!==!1&&!!n.length,id:Oe,ref:_,children:a.jsx(ua,{children:a.jsx(fa,{data:n,baseData:r,categories:t,onTileClick:l,topBarWidth:y??0,onItemClick:d,toggleTheme:K,onEventDrop:v,onEventDrag:S,draggableConfig:x,schedulerRef:f,onTimeRangeSelect:k,onMultiTimeRangeSelect:g,clickToAddConfig:N})})}),W.showOverview!==!1&&!!n.length&&a.jsx(la,{})]})})})]})}),pa=w.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:n})=>e==="next"?`1px solid ${n.colors.border}`:"none"};
`,ga=w.button`
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
`,ma=w.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ya=w.p`
  ${Re}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,_r=({intent:e,onClick:n,icon:t,isVisible:r,pageNum:o,pagesAmount:s})=>{const{loadNext:i,loadPrevious:l}=Ne(),u=e==="next"?`${i} ${o+2}/${s}`:`${l} ${o}/${s}`;return a.jsx(pa,{intent:e,children:a.jsxs(ga,{onClick:n,isVisible:r,children:[t&&a.jsx(ma,{children:t}),a.jsx(ya,{children:u})]})})},va=w.div`
  min-width: ${Ee+"px"};
  max-width: ${Ee+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,xa=w.div`
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
`,ba=w.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,wa=w.input`
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
`,Sa=w.div`
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
`,Ca=w.button`
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
`,Ma=w.div`
  display: flex;
  align-items: ${({rows:e})=>e>1?"start":"center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${he}px;
  height: calc(${he}px * ${({rows:e})=>e});
  border-top: 1px solid
    ${({theme:e,$isSubcontract:n})=>n?e.colors.subcontractBorder+"33":e.colors.border};
  background-color: ${({theme:e,$isSubcontract:n})=>n?e.colors.subcontractBg:"transparent"};
  transition: 0.5s ease;
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,ka=w.div`
  display: flex;
  align-items: center;
`,$a=w.div`
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
`,Da=w.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,Ea=w.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,Tr=w.p`
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
`,_a=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),Ta=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[a.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),a.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),a.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),a.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),a.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),Aa=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),a.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),Pa=({id:e,item:n,rows:t,onItemClick:r,isSubcontract:o})=>a.jsx(Ma,{title:n.title,clickable:typeof r=="function",rows:t,$isSubcontract:o,onClick:()=>r==null?void 0:r({id:e,label:n}),children:a.jsxs(ka,{children:[a.jsx($a,{$provider:o,children:_a(n.icon)?a.jsx(Da,{src:n.icon,alt:""}):o?a.jsx(Aa,{}):a.jsx(Ta,{})}),a.jsxs(Ea,{children:[a.jsx(Tr,{isMain:!0,children:n.title}),a.jsx(Tr,{children:n.subtitle})]})]})}),Oa=w.div`
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
`,Ya=w.span`
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
`,Ia=w.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractText:e.colors.accent};
  flex-shrink: 0;
`,La=w.div`
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
`,Ar=({label:e,count:n,isCollapsed:t,onToggle:r,variant:o="category"})=>a.jsxs(Oa,{$variant:o,onClick:r,title:e,children:[a.jsx(La,{$collapsed:t,children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),a.jsx(Ya,{$variant:o,children:e}),a.jsx(Ia,{$variant:o,children:n})]}),Na=({data:e,categories:n,headerHeight:t,rows:r,onLoadNext:o,onLoadPrevious:s,pageNum:i,pagesAmount:l,searchInputValue:u,onSearchInputChange:c,onItemClick:d,collapsedGroups:h,onToggleGroup:v,allGroupIds:S,onExpandAll:x,onCollapseAll:k})=>{const[g,N]=p.useState(!1),V=Ne(),W=()=>N(T=>!T),_=n?[...n].sort((T,E)=>T.maxPassengers-E.maxPassengers):[],f=_.length>0,y=S.length>0,b=y&&h.size===S.length;y&&h.size;const P=e.filter(T=>T.isSubcontract),O=V.subcontract??"Subcontract",I=T=>{const E=e.indexOf(T);return a.jsx(Pa,{id:T.id,item:T.label,rows:r[E],onItemClick:d,isSubcontract:T.isSubcontract},T.id)},K=T=>{const E=e.filter(L=>!L.isSubcontract&&L.categoryId===T.id);if(E.length===0)return null;const A=h.has(T.id),F=T.name;return a.jsxs("div",{children:[a.jsx(Ar,{label:F,count:E.length,isCollapsed:A,onToggle:()=>v(T.id),variant:"category"}),!A&&E.map(I)]},T.id)},R=e.filter(T=>!T.isSubcontract&&(!T.categoryId||!f));return a.jsxs(va,{children:[a.jsxs(xa,{$height:t,children:[a.jsxs(ba,{children:[a.jsxs(Sa,{isFocused:g,children:[a.jsx(wa,{placeholder:V.search,value:u,onChange:c,onFocus:W,onBlur:W}),a.jsx(Cn,{iconName:"search"})]}),y&&a.jsx(Ca,{title:b?"Expand all":"Collapse all",onClick:b?x:k,$allCollapsed:b,children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:b?a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),a.jsx(_r,{intent:"previous",isVisible:i!==0,onClick:s,icon:a.jsx(Cn,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:i,pagesAmount:l})]}),f?_.map(K):R.map(I),f&&R.length>0&&R.map(I),P.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(Ar,{label:O,count:P.length,isCollapsed:h.has("__subcontract__"),onToggle:()=>v("__subcontract__"),variant:"subcontract"}),!h.has("__subcontract__")&&P.map(I)]}),a.jsx(_r,{intent:"next",isVisible:i!==l-1,onClick:o,icon:a.jsx(Cn,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:i,pagesAmount:l})]})},Fa=w.div`
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
`,Ha=$t`
from{
    left: -100%;
}
to{
    left: 100%;
}`,Wa=w.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Ha} 1s infinite;
`,Mn=({isLoading:e,position:n})=>e?a.jsx(Fa,{position:n,children:a.jsx(Wa,{})}):null,Fe=(e,n)=>{const{ctx:t,x:r,y:o,width:s,height:i,textYPos:l,label:u,font:c,isBottomRow:d,fillStyle:h,topText:v,bottomText:S,strokeStyle:x,labelBetweenCells:k}=e;if(t.beginPath(),t.strokeStyle=x??n.colors.border,t.setLineDash([]),u&&c&&l){t.fillStyle=n.colors.gridBackground,t.fillRect(r,o,s,i),k?(t.moveTo(r,o),t.lineTo(r+s,o),t.stroke(),t.moveTo(r,o+i),t.lineTo(r+s,o+i),t.stroke(),t.moveTo(r+s/2,o+i),t.lineTo(r+s/2,o+i-5),t.stroke()):t.strokeRect(r+.5,o+.5,s,i),t.font=c;const g=r+s/2-t.measureText(u).width/2;t.textBaseline="middle",t.fillStyle=n.colors.accent,t.fillText(u,g,l)}if(d&&h&&v&&S){t.fillStyle=h,t.fillRect(r,o,s,i),t.strokeRect(r+.5,o+.5,s,i),t.font=v.font;const g=r+s/2-t.measureText(v.label).width/2;t.fillStyle=v.color,t.fillText(v.label,g,v.y),t.font=S.font;const N=r+s/2-t.measureText(S.label).width/2;t.fillStyle=S.color,t.fillText(S.label,N,S.y)}},kn=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return t?o==="bottomRow"?n.colors.placeholder:n.colors.accent:r?o==="bottomRow"?n.colors.placeholder:n.colors.textPrimary:n.colors.placeholder},za=(e,n,t,r)=>{const o=nt-Xe/as,s=nt-Xe/cs,i=Ie+tt;let l=0;for(let u=0;u<n;u++){const c=hr(D(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(u,"days")),d=c.isCurrentDay;if(Fe({ctx:e,x:l,y:i,width:be,height:Xe,isBottomRow:!0,fillStyle:d?r.colors.today+"26":c.isBusinessDay?r.colors.gridBackground:r.colors.primary,topText:{y:o,label:d?"":c.dayName.toUpperCase(),font:Pe.bottomRow.name,color:kn({isCurrent:!1,isBusinessDay:c.isBusinessDay},r)},bottomText:{y:s,label:`${c.dayOfMonth}`,font:d?`700 10px ${Ae}`:Pe.bottomRow.number,color:d?r.colors.today:kn({isCurrent:!1,isBusinessDay:c.isBusinessDay,variant:"bottomRow"},r)}},r),d){const S=l+be/2,x=o-13/2;e.save(),e.fillStyle=r.colors.today,e.beginPath(),e.roundRect?e.roundRect(S-30/2,x,30,13,5):e.rect(S-30/2,x,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Ae}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",S,x+13/2+.5),e.restore()}l+=be}},Ba=(e,n,t,r)=>{let o=-(t.dayOfMonth-1)*_e;const s=Ie;let l=t.month;for(let u=0;u<n;u++){l>=qt&&(l=0);const c=fr(t,u)*_e;Fe({ctx:e,x:o,y:s,width:c,height:tt,textYPos:cr,label:D().month(l).format("MMMM").toUpperCase(),font:Pe.bottomRow.number},r),o+=c,l++}},ja=(e,n,t)=>{let o=0,s=0,i=D(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month();o=-n.dayOfMonth*be+be;for(let l=0;l<qt;l++)i>qt-1&&(i=0),s=D(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(l,"months").daysInMonth()*be,Fe({ctx:e,x:o,y:0,width:s,height:Ie,textYPos:Qt,label:D(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${D(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,font:Pe.topRow},t),o+=s,i++},Za=(e,n,t,r)=>{const o=7*be,s=Ie,i=e.canvas.width/o+o,l=n.weekOfYear;let u=0;for(let c=0;c<i;c++){const d=D(`${n.year}-${n.month+1}-${n.dayOfMonth}`).day();let h=(l+c)%sr;h<=0&&(h+=sr),d!==1&&c===0&&(u=-d*be+be),Fe({ctx:e,x:u,y:s,width:o,height:tt,textYPos:cr,label:`${t.toUpperCase()} ${h}`,font:Pe.middleRow},r),u+=o}},Va=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return o==="yearView"?t?n.colors.tertiary:n.colors.gridBackground:t?n.colors.currentDay:r?n.colors.primary:n.colors.secondary},Ga=(e,n,t,r,o)=>{const s=nt-Xe/1.6,i=nt-Xe/4.5,l=Ie+tt;let u=0;for(let c=0;c<n;c++){const d=D(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),h=d.isSame(D(),"week");Fe({ctx:e,x:u,y:l,width:rt,height:Xe,isBottomRow:!0,fillStyle:h?o.colors.today+"26":Va({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:d.isoWeek().toString(),font:h?`700 14px ${Ae}`:Pe.bottomRow.name,color:h?o.colors.today:kn({isCurrent:h},o)},bottomText:{y:i,label:r.toUpperCase(),font:Pe.middleRow,color:o.colors.placeholder}},o),u+=rt}},Xa=(e,n,t,r)=>{const s=n.year,i=e.canvas.width*2;let l=0,u=0,c=(ur(s)-t+1)*_e,d=0;for(;l+d<=i;)u>0&&(c=ur(s+u)*_e),d+c>i&&u>0&&(c=Math.ceil((i-d)/_e)*_e),Fe({ctx:e,x:l,y:0,width:c,height:Ie,textYPos:Qt,label:(s+u).toString(),font:Pe.topRow},r),l+=c,d+=c,u++},Ua=(e,n,t,r)=>{const o=Math.floor(n/Et)+2,s=Et*Me;let u=-D(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*Me+.5*Me;for(let c=0;c<o;c++){const d=D(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Fe({ctx:e,x:u,y:ot,width:s,height:mt,textYPos:ot+mt/2+2,label:d,font:Pe.bottomRow.number},r),u+=s}},Ka=(e,n,t,r)=>{const o=Math.ceil(n/Et),s=D(`${t.year}-${t.month+1}-${t.dayOfMonth}`),i=s.add(o-1,"days"),l=s.month(),u=i.add(1,"day").month(),c=l===u?1:2;let d=.5*Me;for(let h=0;h<c;h++){const v=D(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),x=D(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),k=x.format("MMMM").toUpperCase(),g=x.diff(v,"hour")+1,N=h===0?g*Me:n*Me;Fe({ctx:e,x:d,y:0,width:N,height:ot,textYPos:Qt,label:k,font:Pe.topRow},r),d+=N}},qa=(e,n,t,r)=>{let o=0;const s=ot+mt,i=D(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=Me;for(let u=0;u<n;u++){const c=i.add(u,"hours").format("h:00a").toUpperCase();Fe({ctx:e,x:o,y:s,width:l,height:Kt,label:c,font:Pe.bottomRow.hoursInDay,textYPos:ot+mt+Kt/2+2,labelBetweenCells:!0},r),o+=Me}},Ja=(e,n,t,r,o,s,i)=>{switch(n){case 0:Xa(e,r,s,i),Ba(e,t,r,i),Ga(e,t,r,o,i);break;case 1:ja(e,r,i),Za(e,r,o,i),za(e,t,r,i);break;case 2:Ka(e,t,r,i),Ua(e,t,r,i),qa(e,t,r,i);break}},Qa=w.div`
  position: sticky;
  top: 0;
  z-index: 1;
`,Ra=w.div`
  position: sticky;
  left: ${Ee}px;
  width: calc(${({$width:e})=>e}px - ${Ee}px);
  z-index: 3;
`,ec=w.div`
  height: ${nt}px;
  display: block;
`,tc=w.canvas``,nc={transfer:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 8h13l-3-3"}),a.jsx("path",{d:"M20 16H7l3 3"})]}),sun:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"12",r:"4"}),a.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),a.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),a.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:a.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M12 3 2 20h20z"}),a.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),a.jsx("path",{d:"M12 7.5V12l3 2"})]})},He=({name:e,className:n,strokeWidth:t=2})=>a.jsx("svg",{className:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:nc[e]}),rc=w.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,Pr=w.span`
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
`,Pt=w.span`
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
`,oc=w.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: #b4791e;
  background: #fbf1de;
  border: 1px solid #e9d3a6;
  padding: 1px 5px;
  border-radius: 5px;
`,sc=w.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,ic=w.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,ac=w.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,cc=w.span`
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
`,lc=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],dc=()=>a.jsxs(rc,{children:[a.jsx(Pr,{children:"Leyenda"}),a.jsxs(Pt,{children:[a.jsx(He,{name:"transfer"})," Transfer"]}),a.jsxs(Pt,{children:[a.jsx(He,{name:"sun"})," Gira 1 día"]}),a.jsxs(Pt,{children:[a.jsx(He,{name:"tour"})," Gira multidía"]}),a.jsxs(Pt,{children:[a.jsx(oc,{children:"SUB"})," Subcontrato"]}),a.jsx(sc,{}),a.jsxs(Pr,{children:["Estado ",a.jsx("em",{children:"franja izq. + punto esq."})]}),lc.map(e=>a.jsxs(ic,{children:[a.jsx(ac,{style:{background:e.stripe}}),a.jsx(cc,{style:{color:e.color},children:a.jsx(He,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),uc=p.forwardRef(function({zoom:n,topBarWidth:t,showThemeToggle:r,toggleTheme:o},s){const{week:i}=Ne(),{date:l,cols:u,dayOfYear:c,startDate:d,config:h}=Le(),v=p.useRef(null),S=Dt(),x=p.useCallback(k=>{const g=hn(),V=(n===2?is:nt)+1;vr(k,g,V),Ja(k,n,u,d,i,c,S)},[u,c,d,i,n,S]);return p.useEffect(()=>{if(!v.current)return;const k=v.current.getContext("2d");if(!k)return;const g=()=>x(k);return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[x]),p.useEffect(()=>{const k=v.current;if(!k)return;k.style.letterSpacing="1px";const g=k.getContext("2d");g&&x(g)},[l,n,x]),a.jsxs(Qa,{ref:s,children:[(h.showTopbar!==!1||h.showLegend!==!1)&&a.jsxs(Ra,{$width:t,children:[h.showTopbar!==!1&&a.jsx(Ki,{width:t,showThemeToggle:r,toggleTheme:o}),h.showLegend!==!1&&a.jsx(dc,{})]}),a.jsx(ec,{id:ls,children:a.jsx(tc,{ref:v})})]})}),fc=(e,n,t)=>{let r;switch(t){case 0:r=_e;break;case 2:r=Me;break;default:r=be}const s=e.startDate.startOf("day"),i=e.endDate.startOf("day"),l=n.startDate.startOf("day"),u=n.endDate.startOf("day"),c=()=>{let d;switch(t){case 2:d=(e.startDate.diff(n.startDate,"minute")/Se+1)*r-r/2;break;default:d=s.diff(l,"day")*r}return Math.max(0,d)};if(e.startDate.isAfter(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(e.startDate,"minute")/Se*r,50);break;default:d=Math.max(i.diff(s,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(n.startDate,"minute")/Se*r+.5*r,50);break;default:d=Math.max(i.diff(l,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isAfter(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(e.startDate,"minute")/Se*r,50);break;default:d=Math.max(u.diff(s,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(n.startDate,"minute")/Se*r,50);break;default:d=Math.max(u.diff(l,"day")*r+r,50)}return{x:c(),width:d}}return{x:c(),width:50}},hc=(e,n,t,r,o,s)=>{const i=e*he+ds,l=n.hour(),u=t.hour();let c,d,h,v;switch(s){case 2:{c=D(r),d=D(o),h=D(n).hour(l).minute(0),v=D(t).hour(u).minute(0);break}default:{c=D(r).hour(0).minute(0),d=D(o).hour(23).minute(59),h=n,v=t;break}}return{...fc({startDate:c,endDate:d},{startDate:h,endDate:v},s),y:i}},Or=e=>{if(!e)return"white";const n=[];for(let o=1;o<6;o+=2)n.push(parseInt(e.slice(o,o+2),16)/255);const t=n.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"};w.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,w.p`
  ${Re}
  ${et}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const pc=w.button`
  ${Re}
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
`,gc=w.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 3;
  pointer-events: none;
`,mc=w.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`,Yr=w.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,yc=w.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,vc=w.span`
  ${et}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,xc=w.span`
  ${et}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,bc=w.span`
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
`,wc=w.div`
  ${et}
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
`,Ir=w.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,Lr=w.span`
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
`,Nr=w.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: #b4791e;
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,Sc=w.div`
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
`,Fr=w.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({$end:e})=>e?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.95)"};
  color: ${({$end:e})=>e?"#3A4C46":"#183D3D"};
`,Cc=34,Mc={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63"}},kc="#3E8E5A",$c="#D98A22",Dc=({row:e,data:n,zoom:t,isSubcontract:r=!1,onTileClick:o,onDragStart:s,isDragging:i=!1,isDraggable:l=!0,yOffset:u=0})=>{const{date:c}=Le(),d=fn(c,t),{y:h,x:v,width:S}=hc(e,d.startDate,d.endDate,n.startDate,n.endDate,t),{colors:x}=Dt(),k=p.useRef(null),g=D(n.startDate).isSame(D(n.endDate),"day"),N=n.eventType===yt.Tour,V=n.eventType===yt.Transfer,W=g&&(N||V),_=K=>{k.current={x:K.clientX,y:K.clientY},l&&s&&(K.preventDefault(),s(n,K))},f=K=>{if(k.current){const R=Math.abs(K.clientX-k.current.x),T=Math.abs(K.clientY-k.current.y);Math.sqrt(R*R+T*T)<=5&&(o==null||o(n)),k.current=null}else o==null||o(n)},y={left:`${v}px`,top:`${h+u}px`,backgroundColor:`${n.bgColor??x.defaultTile}`,width:`${S}px`,color:Or(n.bgColor??"")},b=!r&&n.readiness?Mc[n.readiness]:null,P=r&&n.subcontractConfirmed===!1,O=r?P?$c:kc:b==null?void 0:b.stripe,I=K=>a.jsxs(pc,{"data-segment-id":n.segmentId,style:y,onClick:f,onMouseDown:_,onDragStart:R=>R.preventDefault(),isDraggable:l,isDragging:i,$unconfirmed:P,children:[O&&a.jsx(gc,{style:{background:O}}),K]});return I(W?a.jsxs(a.Fragment,{children:[(r||b)&&a.jsx(Ir,{$sm:!0,children:r?a.jsx(Nr,{children:"SUB"}):b&&a.jsx(Lr,{$sm:!0,style:{color:b.color},children:a.jsx(He,{name:b.icon,strokeWidth:b.icon==="check"?2.6:2.2})})}),a.jsxs(Sc,{children:[a.jsx(He,{name:V?"transfer":"sun",strokeWidth:2.4}),S>=Cc&&a.jsxs(a.Fragment,{children:[a.jsx(Fr,{children:D(n.startDate).format("HH:mm")}),!V&&a.jsx(Fr,{$end:!0,children:D(n.endDate).format("HH:mm")})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(Ir,{children:r?a.jsx(Nr,{children:"SUB"}):b&&a.jsx(Lr,{style:{color:b.color},children:a.jsx(He,{name:b.icon,strokeWidth:b.icon==="check"?2.6:2.2})})}),a.jsxs(mc,{children:[a.jsxs(Yr,{$pad:!0,children:[a.jsx(yc,{children:a.jsx(He,{name:V?"transfer":"tour"})}),a.jsx(vc,{children:n.title})]}),a.jsxs(Yr,{children:[n.bookingNumber&&a.jsx(bc,{children:n.bookingNumber}),n.subtitle&&a.jsx(xc,{children:n.subtitle})]}),n.driver&&a.jsxs(wc,{children:[a.jsx(He,{name:"person"}),n.driver]})]})]}))},Hr=(e,n)=>{let t=0;for(const r of n)e>=r&&t++;return t*De},Ec=w.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${he}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #93b1a6;
  pointer-events: none;
`,_c=({data:e,zoom:n,onTileClick:t,onDragStart:r,isDraggable:o,draggingEventId:s,separatorRowIndices:i=[]})=>{const l=p.useCallback(()=>{let u=0;return e.map((c,d)=>{if(d>0&&(u+=Math.max(e[d-1].data.length,1)),!c.data.some(h=>h.length>0)){const h=Hr(u,i);return[a.jsx(Ec,{style:{top:`${u*he+h}px`},children:"Disponible"},`dispo-${c.id}`)]}return c.data.map((h,v)=>h.map(S=>{const x=s===S.segmentId,k=o?o(S):!1,g=v+u,N=Hr(g,i);return a.jsx(Dc,{row:g,data:S,zoom:n,isSubcontract:c.isSubcontract,onTileClick:t,onDragStart:r,isDragging:x,isDraggable:k,yOffset:N},S.segmentId)}))}).flat(2)},[e,t,n,r,o,s,i]);return a.jsx(a.Fragment,{children:l()})};w.div`
  box-sizing: border-box;
  font-family: ${Ae};
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({isExpanded:e})=>e?0:"-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`,w.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`,w.label`
  font-size: 14px;
`,w.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`,w.input`
  height: 18px;
  width: 18px;
`,w.button`
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
`,w.form`
  background-color: rgba(255, 255, 255, 0.75);
`;const Tc=w.div`
  position: absolute;
  width: 240px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`,Ac=w.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Pc=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`,Oc=w.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
`,Yc=w.span`
  background: ${({$type:e})=>e==="transfer"?"#dbeafe":"#dcfce7"};
  color: ${({$type:e})=>e==="transfer"?"#1e40af":"#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`,Ic=w.div`
  ${Re}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Lc=w.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
`,Nc=w.div`
  padding: 10px 12px;
`,Fc=w.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,Wr=w.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,zr=w.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,Br=w.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,jr=w.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,Zr=w.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Hc=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Wc=w.div``,zc=w.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,Bc=w.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,jc=w.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Vr=w.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Gr=w.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Xr=w.div`
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
`;w.div``,w.span``,w.span``,w.div``,w.div``,w.span``,w.span``,w.div``,w.div``,w.span``,w.span``,w.div``,w.div``,w.div``,w.span``,w.div``,w.div``,w.div``,w.div``,w.p``,w.span``;const Zc={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Vc=({tooltipData:e})=>{const{mouseCoords:n,reservationData:t}=e,r=p.useRef(null),[o,s]=p.useState("below"),i=Ne(),l={...Zc,...i.tooltip};p.useLayoutEffect(()=>{if(!r.current||!n)return;const S=r.current,{width:x,height:k}=S.getBoundingClientRect(),g=S.parentElement;if(!g)return;const N=g.getBoundingClientRect(),V=12,W=4,_=N.height-n.y,f=N.width-n.x;let y=n.x+V,b=n.y+V,P="below";f<x+V&&(y=n.x-x-V),_<k+V&&(b=n.y-k-V,P="above"),y=Math.max(W,Math.min(y,N.width-x-W)),b=Math.max(W,Math.min(b,N.height-k-W)),s(P),S.style.left=`${y}px`,S.style.top=`${b}px`},[n]);const u=t.reservationType===yt.Tour,c=u&&t.isOneDayEvent,d=()=>u?c?"oneday":"tour":"transfer",h=()=>u?c?l.oneDay:l.tour:l.transfer,v=[t.groupName&&{label:l.groupName,value:t.groupName},t.driver&&{label:l.driver,value:t.driver},t.passengers&&{label:l.passengers,value:String(t.passengers)},t.flightNumber&&{label:l.flightNumber,value:t.flightNumber}].filter(Boolean);return a.jsxs(Tc,{ref:r,$position:o,children:[a.jsxs(Ac,{children:[a.jsxs(Pc,{children:[a.jsx(Oc,{children:t.bookingNumber}),a.jsx(Yc,{$type:d(),children:h()})]}),a.jsx(Ic,{children:t.eventName}),t.client&&a.jsx(Lc,{children:t.client})]}),a.jsxs(Nc,{children:[a.jsxs(Fc,{children:[a.jsxs(Wr,{children:[a.jsx(zr,{children:l.startDate}),a.jsxs(Br,{children:[a.jsx(jr,{children:t.startDate})," ",a.jsx(Zr,{children:t.startTime})]})]}),u&&t.endDate&&a.jsxs(Wr,{$isEnd:!0,children:[a.jsx(zr,{children:l.endDate}),a.jsxs(Br,{children:[a.jsx(jr,{children:t.endDate})," ",a.jsx(Zr,{children:t.endTime})]})]})]}),v.length>0&&a.jsx(Hc,{children:v.map((S,x)=>a.jsxs(Wc,{children:[a.jsx(zc,{children:S.label}),a.jsx(Bc,{children:S.value})]},x))}),(t.serviceNotes||t.reservationNotes)&&a.jsxs(jc,{children:[t.serviceNotes&&a.jsxs(Vr,{children:[a.jsx(Gr,{children:l.serviceNotes}),a.jsx(Xr,{children:t.serviceNotes})]}),t.reservationNotes&&a.jsxs(Vr,{children:[a.jsx(Gr,{children:l.reservationNotes}),a.jsx(Xr,{children:t.reservationNotes})]})]})]})]})};w.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`,w.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({theme:e})=>e.mode==="light"?"4px":"34px"};
  transition: left 0.3s ease;
`,w.div`
  position: absolute;
  top: 5px;
  left: ${({theme:e})=>e.mode==="light"?"38px":"4px"};
  transition: left 0.3s ease;
`;const Gc=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,Xc=w.div`
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
`,Uc=w.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,Ur=w.p`
  ${Re}
  ${et}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,Kc=w.p`
  ${Re}
  ${et}
`,qc=w.div`
  position: sticky;
  left: ${Ee+16}px;
  overflow: hidden;
`,Jc=w.div`
  position: absolute;
  height: ${Jt}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:n})=>e?n?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Qc=w.div`
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
`,Rc=w.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,el=w.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,tl=w.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:n})=>e?n?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,Kr=w.div`
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
`,qr=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,Jr=w.div`
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
`,Qr=w.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,$n=w.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,Dn=w.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,lt=w.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,Rr=w.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,nl=({draggedEvent:e,ghostPosition:n,ghostDimensions:t,dropTarget:r,isValidDrop:o,dragState:s,data:i,resourceOnly:l,separatorRowIndices:u=[]})=>{const c=Ne(),d=_=>{let f=0;for(const y of u)y<=_&&f++;return _*he+f*De},[h,v]=p.useState(null),[S,x]=p.useState(0),k=p.useCallback((_=400,f=300)=>{const b=t.width,P=48,O=document.getElementById("react-scheduler");if(!O)return{x:n.x+b+16,y:n.y};const I=O.scrollLeft,K=O.scrollTop,R=O.clientWidth,T=O.clientHeight,E=n.x-I,A=n.y-K,F={left:Ee+16,right:R-16,top:16,bottom:T-16},L=F.right-(E+b),Q=E-F.left,ee=F.bottom-(A+P),se=A-F.top;let ae,H;return L>=_+16?ae=E+b+16:Q>=_+16?ae=E-_-16:L>=Q?(ae=E+b+16,ae+_>F.right&&(ae=F.right-_)):(ae=E-_-16,ae<F.left&&(ae=F.left)),ee>=f+16?H=A+P+16:se>=f+16?H=A-f-16:ee>=se?(H=A+P+16,H+f>F.bottom&&(H=F.bottom-f)):(H=A-f-16,H<F.top&&(H=F.top)),ae=Math.max(F.left,Math.min(ae,F.right-_)),H=Math.max(F.top,Math.min(H,F.bottom-f)),{x:ae+I,y:H+K}},[n.x,n.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&S===0?x(n.x):s==="idle"&&x(0)},[s,e,n.x,S]),p.useEffect(()=>{v(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const g=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const _=[];let f=0;for(const y of i){const b=Math.max(y.data.length,1);if(y.capacity!==void 0&&e.totalPassengers>y.capacity)for(let P=0;P<b;P++)_.push(f+P);f+=b}return _},[e,i,s]);if(!e||s==="idle"||s==="potential")return null;const N=s==="animating",V=Or(e.bgColor??""),W=()=>{if(!r)return"";const _=D(r.startDate).format("MMM D, HH:mm"),f=D(r.endDate).format("HH:mm");return`${_} - ${f}`};return a.jsxs(Gc,{children:[g.map(_=>a.jsx(el,{style:{top:`${d(_)}px`,height:`${he}px`}},_)),r&&s==="dragging"&&a.jsx(Rc,{$isValid:o,$hasConflict:r.hasConflict,style:{top:`${d(r.resourceIndex)}px`,height:`${he}px`}}),r&&s==="dragging"&&!l&&a.jsxs(a.Fragment,{children:[a.jsx(Jc,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(he-48)/2}px`,width:`${t.width}px`}}),a.jsx(Qc,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(he-48)/2}px`},children:W()})]}),r&&s==="dragging"&&l&&a.jsx(tl,{$isValid:o,$hasConflict:r.hasConflict,style:{left:"0px",top:`${d(r.resourceIndex)}px`,height:`${he}px`}}),r&&o&&r.hasConflict&&r.conflicts&&r.conflicts.length>0&&s==="dragging"&&(()=>{const _=k(400,300);return a.jsxs(Kr,{style:{left:`${_.x}px`,top:`${_.y}px`},children:[a.jsxs(qr,{children:[a.jsx(Jr,{children:"!"}),r.conflicts.length," ",r.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),a.jsx(Qr,{children:r.conflicts.map((f,y)=>{const b=D(r.startDate).format("YYYY-MM-DD"),P=D(r.endDate).format("YYYY-MM-DD"),O=D(f.event.startDate).format("YYYY-MM-DD"),I=D(f.event.endDate).format("YYYY-MM-DD"),K=D(f.conflictStart).format("YYYY-MM-DD"),R=D(f.conflictEnd).format("YYYY-MM-DD"),T=b!==P,E=O!==I,A=K!==R,F=T?D(r.startDate).format("MMM D, h:mm A"):D(r.startDate).format("h:mm A"),L=T?D(r.endDate).format("MMM D, h:mm A"):D(r.endDate).format("h:mm A"),Q=E?D(f.event.startDate).format("MMM D, h:mm A"):D(f.event.startDate).format("h:mm A"),ee=E?D(f.event.endDate).format("MMM D, h:mm A"):D(f.event.endDate).format("h:mm A"),se=A?D(f.conflictStart).format("MMM D, h:mm A"):D(f.conflictStart).format("h:mm A"),ae=A?D(f.conflictEnd).format("MMM D, h:mm A"):D(f.conflictEnd).format("h:mm A"),H=A?"":D(f.conflictStart).format("MMM D"),z=r.startDate.getTime(),U=r.endDate.getTime(),te=f.event.startDate.getTime(),C=f.event.endDate.getTime(),Y=z>=te&&z<C,M=U>te&&U<=C,Z=z<=te&&U>=C,J=te<=z&&C>=U;let B=!1,m=!1,X=!1,$=!1,j="";return Z||J?(B=!0,m=!0,X=!0,$=!0,j=`⚠️ ${c.conflicts.changeBoth}`):Y&&M?(B=!0,m=!0,X=!0,$=!0,j=`⚠️ ${c.conflicts.changeBoth}`):Y?(B=!0,$=!0,j=`⚠️ ${c.conflicts.changeStart}`):M&&(m=!0,X=!0,j=`⚠️ ${c.conflicts.changeEnd}`),a.jsxs($n,{children:[a.jsxs(Dn,{children:[c.conflicts.conflictsWith,": ",f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),a.jsxs(lt,{children:[a.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",B?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:F}):F," ",c.conflicts.to," ",m?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:L}):L]}),a.jsxs(lt,{children:[a.jsx("strong",{children:f.event.title})," ",c.conflicts.currentlyAt,":"," ",X?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:Q}):Q," ",c.conflicts.to," ",$?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:ee}):ee]}),a.jsxs(Rr,{children:[c.conflicts.conflictTime,": ",H&&`${H}, `,se," - ",ae]}),j&&a.jsx(lt,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:j})]},y)})})]})})(),r&&o&&!r.hasConflict&&r.nearbyEvents&&r.nearbyEvents.length>0&&s==="dragging"&&(()=>{const _=k(400,400);return a.jsxs(Kr,{style:{left:`${_.x}px`,top:`${_.y}px`,borderColor:"#4CAF50"},children:[a.jsxs(qr,{style:{color:"#2E7D32"},children:[a.jsx(Jr,{style:{backgroundColor:"#4CAF50"},children:"✓"}),r.nearbyEvents.length," ",r.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),a.jsxs(Qr,{children:[(()=>{const f=r.nearbyEvents.some(O=>O.position==="before"),y=r.nearbyEvents.some(O=>O.position==="after"),b=D(r.startDate).format("h:mm A"),P=D(r.endDate).format("h:mm A");return a.jsxs($n,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[a.jsxs(Dn,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),a.jsxs(lt,{style:{fontWeight:600},children:[D(r.startDate).format("MMM D"),":"," ",f?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:b}):b," ",c.conflicts.to," ",y?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:P}):P]}),a.jsx(lt,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),r.nearbyEvents.map((f,y)=>{const b=D(f.event.startDate).format("YYYY-MM-DD"),P=D(f.event.endDate).format("YYYY-MM-DD"),O=b!==P,I=O?D(f.event.startDate).format("MMM D, h:mm A"):D(f.event.startDate).format("h:mm A"),K=O?D(f.event.endDate).format("MMM D, h:mm A"):D(f.event.endDate).format("h:mm A"),R=D(f.event.startDate).format("MMM D"),T=Math.floor(f.timeGap/(1e3*60*60)),E=Math.floor(f.timeGap%(1e3*60*60)/(1e3*60)),A=T>0?`${T}h ${E}m`:`${E}m`,F=f.position==="after",L=f.position==="before";return a.jsxs($n,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[a.jsxs(Dn,{style:{color:"#1B5E20"},children:[f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),a.jsxs(lt,{children:[!O&&`${R}: `,F?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:I}):I," ",c.conflicts.to," ",L?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:K}):K]}),a.jsxs(Rr,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[A," ",f.position==="before"?c.conflicts.before:c.conflicts.after]})]},y)})]})]})})(),a.jsx(Xc,{$isAnimating:N,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:N?`${(h==null?void 0:h.x)??0}px`:"0",top:N?`${(h==null?void 0:h.y)??0}px`:"0",transform:N?void 0:`translate3d(${l?S:n.x}px, ${n.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:V},children:a.jsx(Uc,{children:a.jsxs(qc,{children:[a.jsx(Ur,{$bold:!0,children:e.title}),e.subtitle&&a.jsx(Ur,{children:e.subtitle}),e.description&&a.jsx(Kc,{children:e.description})]})})})]})},rl=$t`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,ol=w.div`
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
  animation: ${rl} 1.5s ease-in-out infinite;
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
`,sl=({selectionBox:e,isSelecting:n})=>!e||!n?null:a.jsx(ol,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),il=$t`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,al=w.div`
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
  animation: ${il} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,cl=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,ll=w.span`
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
`,dl=w.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,ul=w.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;w.div`
  display: none;
`,w.div`
  display: none;
`,w.button`
  display: none;
`;const fl=w.div`
  display: flex;
  gap: 8px;
`,eo=w.button`
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
`,hl=({selections:e,onConfirm:n,onClear:t})=>{var x;const o=Ne().multiSelect,s=p.useMemo(()=>e.filter(k=>k.hasConflict).length,[e]),i=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,u=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",d=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((x=o==null?void 0:o.conflictsWarning)==null?void 0:x.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const v=s>0,S=a.jsxs(al,{$hasConflicts:v,"data-multi-select-ui":!0,children:[a.jsxs(cl,{children:[a.jsxs(ll,{$hasConflicts:v,children:[e.length," ",i]}),v&&a.jsxs(dl,{children:["⚠️ ",h]}),a.jsx(ul,{children:l})]}),a.jsxs(fl,{children:[a.jsxs(eo,{variant:"secondary",onClick:t,children:["✕ ",u]}),a.jsx(eo,{variant:"primary",$hasConflicts:v,onClick:n,children:v?`⚠️ ${d}`:`✓ ${c}`})]})]});return no.createPortal(S,document.body)},pl=$t`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,gl=w.div`
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
  animation: ${pl} 0.2s ease-out;
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
`,ml=w.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,yl=w.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,vl=w.button`
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
`,xl=({selections:e,data:n,zoom:t,startDate:r,onRemove:o,onUpdate:s,separatorRowIndices:i=[]})=>{const[l,u]=p.useState(null),[c,d]=p.useState({x:0,y:0}),h=p.useRef(null),v=p.useMemo(()=>{switch(t){case 0:return _e*7;case 1:return be;case 2:return Me;default:return be}},[t]),S=p.useMemo(()=>D().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0),[r]),x=p.useMemo(()=>e.map((y,b)=>{let P=0,O=!1;for(const Q of n){if(Q.id===y.resourceId){O=!0;break}P+=Math.max(Q.data.length,1)}if(!O)return null;const I=D(y.startDate),K=D(y.endDate);let R,T;switch(t){case 0:R=Math.floor(I.diff(S,"days")/7),T=Math.max(1,Math.ceil(K.diff(I,"days")/7)+1);break;case 1:R=I.diff(S,"days"),T=Math.max(1,K.diff(I,"days")+1);break;case 2:R=I.diff(S,"hours"),T=Math.max(1,K.diff(I,"hours")+1);break;default:R=0,T=1}const E=R*v;let A=0;for(const Q of i)Q<=P&&A++;const F=P*he+A*De,L=T*v;return{index:b,selection:y,x:E,y:F,width:L,height:he}}),[e,n,t,S,v]),k=(y,b)=>{const P=D(y).format("MMM D"),O=D(b).format("MMM D");return P===O?P:`${P} - ${O}`},g=y=>!y.hasConflict||!y.conflicts?"":`⚠️ Conflicts with:
${y.conflicts.map(P=>{const O=(P.overlapDuration/36e5).toFixed(1);return`• ${P.event.title} (${O}h overlap)`}).join(`
`)}`,N=p.useCallback(y=>{let b=0;for(const P of n){const O=Math.max(P.data.length,1);if(y>=b*he&&y<(b+O)*he)return{resourceId:P.id,resourceLabel:P.label};b+=O}return null},[n]),V=p.useCallback(y=>{const b=Math.floor(y/v);switch(t){case 0:return S.add(b*7,"days").toDate();case 1:return S.add(b,"days").toDate();case 2:return S.add(b,"hours").toDate();default:return S.toDate()}},[t,S,v]),W=p.useCallback((y,b)=>{!s||(y.preventDefault(),y.stopPropagation(),!x[b])||(h.current={x:y.clientX,y:y.clientY},u(b),d({x:0,y:0}))},[s,x]),_=p.useCallback(y=>{if(l===null||!h.current)return;const b=y.clientX-h.current.x,P=y.clientY-h.current.y,O=Math.round(b/v)*v,I=Math.round(P/he)*he;d({x:O,y:I})},[l,v]),f=p.useCallback(()=>{if(l===null||!s){u(null),d({x:0,y:0}),h.current=null;return}const y=x[l];if(!y){u(null),d({x:0,y:0}),h.current=null;return}const b=y.x+c.x,P=y.y+c.y,O=N(P+he/2);if(!O){u(null),d({x:0,y:0}),h.current=null;return}const I=V(b),K=e[l],R=K.endDate.getTime()-K.startDate.getTime(),T=new Date(I.getTime()+R);s(l,{startDate:I,endDate:T,resourceId:O.resourceId,resourceLabel:O.resourceLabel}),u(null),d({x:0,y:0}),h.current=null},[l,c,x,e,s,N,V]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",_),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",f)}},[l,_,f]),a.jsx(a.Fragment,{children:x.map(y=>{if(!y)return null;const b=y.selection.hasConflict||!1,P=l===y.index,O=P?y.x+c.x:y.x,I=P?y.y+c.y:y.y;return a.jsxs(gl,{$hasConflict:b,$isDragging:P,style:{left:O,top:I,width:y.width,height:y.height},"data-multi-select-ui":!0,onMouseDown:K=>W(K,y.index),children:[b&&a.jsx(yl,{title:g(y.selection),children:"⚠️"}),a.jsx(ml,{$hasConflict:b,children:k(y.selection.startDate,y.selection.endDate)}),a.jsx(vl,{onClick:K=>{K.stopPropagation(),o(y.index)},onMouseDown:K=>K.stopPropagation(),title:b?"Remove conflicting selection":"Remove selection",children:"×"})]},y.index)})})},bl=w.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,wl=({zoom:e,startDate:n})=>{const{cols:t}=Le(),r=p.useMemo(()=>{if(e===2)return null;const o=e===0?_e*7:be,s=D().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"),i=D().startOf("day"),l=e===0?i.startOf("week").diff(s.startOf("week"),"week"):i.diff(s,"days");return l<0||l>=t?null:{x:l*o,width:o}},[e,n,t]);return r?a.jsx(bl,{style:{left:`${r.x}px`,width:`${r.width}px`},"aria-hidden":!0}):null},ed="";$e.Scheduler=ha,Object.defineProperty($e,Symbol.toStringTag,{value:"Module"})});
