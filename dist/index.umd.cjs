(function($e,a){typeof exports=="object"&&typeof module<"u"?a(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],a):($e=typeof globalThis<"u"?globalThis:$e||self,a($e["react-scheduler"]={},$e["react/jsx-runtime"],$e.React,$e.ReactDOM))})(this,function($e,a,p,no){"use strict";var kl=Object.defineProperty;var $l=($e,a,p)=>a in $e?kl($e,a,{enumerable:!0,configurable:!0,writable:!0,value:p}):$e[a]=p;var to=($e,a,p)=>($l($e,typeof a!="symbol"?a+"":a,p),p);function ro(e){const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return n.default=e,Object.freeze(n)}const se=ro(p);var Ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pt={},oo={get exports(){return pt},set exports(e){pt=e}},pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _n;function so(){if(_n)return pe;_n=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function M(g){if(typeof g=="object"&&g!==null){var L=g.$$typeof;switch(L){case e:switch(g=g.type,g){case t:case o:case r:case c:case d:return g;default:switch(g=g&&g.$$typeof,g){case l:case i:case u:case v:case h:case s:return g;default:return L}}case n:return L}}}return pe.ContextConsumer=i,pe.ContextProvider=s,pe.Element=e,pe.ForwardRef=u,pe.Fragment=t,pe.Lazy=v,pe.Memo=h,pe.Portal=n,pe.Profiler=o,pe.StrictMode=r,pe.Suspense=c,pe.SuspenseList=d,pe.isAsyncMode=function(){return!1},pe.isConcurrentMode=function(){return!1},pe.isContextConsumer=function(g){return M(g)===i},pe.isContextProvider=function(g){return M(g)===s},pe.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===e},pe.isForwardRef=function(g){return M(g)===u},pe.isFragment=function(g){return M(g)===t},pe.isLazy=function(g){return M(g)===v},pe.isMemo=function(g){return M(g)===h},pe.isPortal=function(g){return M(g)===n},pe.isProfiler=function(g){return M(g)===o},pe.isStrictMode=function(g){return M(g)===r},pe.isSuspense=function(g){return M(g)===c},pe.isSuspenseList=function(g){return M(g)===d},pe.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===t||g===o||g===r||g===c||g===d||g===S||typeof g=="object"&&g!==null&&(g.$$typeof===v||g.$$typeof===h||g.$$typeof===s||g.$$typeof===i||g.$$typeof===u||g.$$typeof===x||g.getModuleId!==void 0)},pe.typeOf=M,pe}var ge={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tn;function io(){return Tn||(Tn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),x=!1,M=!1,g=!1,L=!1,V=!1,z;z=Symbol.for("react.module.reference");function _(D){return!!(typeof D=="string"||typeof D=="function"||D===t||D===o||V||D===r||D===c||D===d||L||D===S||x||M||g||typeof D=="object"&&D!==null&&(D.$$typeof===v||D.$$typeof===h||D.$$typeof===s||D.$$typeof===i||D.$$typeof===u||D.$$typeof===z||D.getModuleId!==void 0))}function f(D){if(typeof D=="object"&&D!==null){var Z=D.$$typeof;switch(Z){case e:var ne=D.type;switch(ne){case t:case o:case r:case c:case d:return ne;default:var q=ne&&ne.$$typeof;switch(q){case l:case i:case u:case v:case h:case s:return q;default:return Z}}case n:return Z}}}var y=i,b=s,T=e,P=u,H=t,j=v,ee=h,$=n,A=o,O=r,N=c,Y=d,Q=!1,te=!1;function ie(D){return Q||(Q=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ae(D){return te||(te=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function F(D){return f(D)===i}function W(D){return f(D)===s}function K(D){return typeof D=="object"&&D!==null&&D.$$typeof===e}function U(D){return f(D)===u}function C(D){return f(D)===t}function I(D){return f(D)===v}function k(D){return f(D)===h}function G(D){return f(D)===n}function R(D){return f(D)===o}function B(D){return f(D)===r}function m(D){return f(D)===c}function J(D){return f(D)===d}ge.ContextConsumer=y,ge.ContextProvider=b,ge.Element=T,ge.ForwardRef=P,ge.Fragment=H,ge.Lazy=j,ge.Memo=ee,ge.Portal=$,ge.Profiler=A,ge.StrictMode=O,ge.Suspense=N,ge.SuspenseList=Y,ge.isAsyncMode=ie,ge.isConcurrentMode=ae,ge.isContextConsumer=F,ge.isContextProvider=W,ge.isElement=K,ge.isForwardRef=U,ge.isFragment=C,ge.isLazy=I,ge.isMemo=k,ge.isPortal=G,ge.isProfiler=R,ge.isStrictMode=B,ge.isSuspense=m,ge.isSuspenseList=J,ge.isValidElementType=_,ge.typeOf=f}()),ge}(function(e){process.env.NODE_ENV==="production"?e.exports=so():e.exports=io()})(oo);function ao(e){function n(F,W,K,U,C){for(var I=0,k=0,G=0,R=0,B,m,J=0,D=0,Z,ne=Z=B=0,q=0,ce=0,ue=0,re=0,de=K.length,ve=de-1,he,X="",oe="",le="",xe="",we;q<de;){if(m=K.charCodeAt(q),q===ve&&k+R+G+I!==0&&(k!==0&&(m=k===47?10:47),R=G=I=0,de++,ve++),k+R+G+I===0){if(q===ve&&(0<ce&&(X=X.replace(v,"")),0<X.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:X+=K.charAt(q)}m=59}switch(m){case 123:for(X=X.trim(),B=X.charCodeAt(0),Z=1,re=++q;q<de;){switch(m=K.charCodeAt(q)){case 123:Z++;break;case 125:Z--;break;case 47:switch(m=K.charCodeAt(q+1)){case 42:case 47:e:{for(ne=q+1;ne<ve;++ne)switch(K.charCodeAt(ne)){case 47:if(m===42&&K.charCodeAt(ne-1)===42&&q+2!==ne){q=ne+1;break e}break;case 10:if(m===47){q=ne+1;break e}}q=ne}}break;case 91:m++;case 40:m++;case 34:case 39:for(;q++<ve&&K.charCodeAt(q)!==m;);}if(Z===0)break;q++}switch(Z=K.substring(re,q),B===0&&(B=(X=X.replace(h,"").trim()).charCodeAt(0)),B){case 64:switch(0<ce&&(X=X.replace(v,"")),m=X.charCodeAt(1),m){case 100:case 109:case 115:case 45:ce=W;break;default:ce=N}if(Z=n(W,ce,Z,m,C+1),re=Z.length,0<Q&&(ce=t(N,X,ue),we=l(3,Z,ce,W,$,ee,re,m,C,U),X=ce.join(""),we!==void 0&&(re=(Z=we.trim()).length)===0&&(m=0,Z="")),0<re)switch(m){case 115:X=X.replace(y,i);case 100:case 109:case 45:Z=X+"{"+Z+"}";break;case 107:X=X.replace(V,"$1 $2"),Z=X+"{"+Z+"}",Z=O===1||O===2&&s("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=X+Z,U===112&&(Z=(oe+=Z,""))}else Z="";break;default:Z=n(W,t(W,X,ue),Z,U,C+1)}le+=Z,Z=ue=ce=ne=B=0,X="",m=K.charCodeAt(++q);break;case 125:case 59:if(X=(0<ce?X.replace(v,""):X).trim(),1<(re=X.length))switch(ne===0&&(B=X.charCodeAt(0),B===45||96<B&&123>B)&&(re=(X=X.replace(" ",":")).length),0<Q&&(we=l(1,X,W,F,$,ee,oe.length,U,C,U))!==void 0&&(re=(X=we.trim()).length)===0&&(X="\0\0"),B=X.charCodeAt(0),m=X.charCodeAt(1),B){case 0:break;case 64:if(m===105||m===99){xe+=X+K.charAt(q);break}default:X.charCodeAt(re-1)!==58&&(oe+=o(X,B,m,X.charCodeAt(2)))}ue=ce=ne=B=0,X="",m=K.charCodeAt(++q)}}switch(m){case 13:case 10:k===47?k=0:1+B===0&&U!==107&&0<X.length&&(ce=1,X+="\0"),0<Q*ie&&l(0,X,W,F,$,ee,oe.length,U,C,U),ee=1,$++;break;case 59:case 125:if(k+R+G+I===0){ee++;break}default:switch(ee++,he=K.charAt(q),m){case 9:case 32:if(R+I+k===0)switch(J){case 44:case 58:case 9:case 32:he="";break;default:m!==32&&(he=" ")}break;case 0:he="\\0";break;case 12:he="\\f";break;case 11:he="\\v";break;case 38:R+k+I===0&&(ce=ue=1,he="\f"+he);break;case 108:if(R+k+I+A===0&&0<ne)switch(q-ne){case 2:J===112&&K.charCodeAt(q-3)===58&&(A=J);case 8:D===111&&(A=D)}break;case 58:R+k+I===0&&(ne=q);break;case 44:k+G+R+I===0&&(ce=1,he+="\r");break;case 34:case 39:k===0&&(R=R===m?0:R===0?m:R);break;case 91:R+k+G===0&&I++;break;case 93:R+k+G===0&&I--;break;case 41:R+k+I===0&&G--;break;case 40:if(R+k+I===0){if(B===0)switch(2*J+3*D){case 533:break;default:B=1}G++}break;case 64:k+G+R+I+ne+Z===0&&(Z=1);break;case 42:case 47:if(!(0<R+I+G))switch(k){case 0:switch(2*m+3*K.charCodeAt(q+1)){case 235:k=47;break;case 220:re=q,k=42}break;case 42:m===47&&J===42&&re+2!==q&&(K.charCodeAt(re+2)===33&&(oe+=K.substring(re,q+1)),he="",k=0)}}k===0&&(X+=he)}D=J,J=m,q++}if(re=oe.length,0<re){if(ce=W,0<Q&&(we=l(2,oe,ce,F,$,ee,re,U,C,U),we!==void 0&&(oe=we).length===0))return xe+oe+le;if(oe=ce.join(",")+"{"+oe+"}",O*A!==0){switch(O!==2||s(oe,2)||(A=0),A){case 111:oe=oe.replace(_,":-moz-$1")+oe;break;case 112:oe=oe.replace(z,"::-webkit-input-$1")+oe.replace(z,"::-moz-$1")+oe.replace(z,":-ms-input-$1")+oe}A=0}}return xe+oe+le}function t(F,W,K){var U=W.trim().split(g);W=U;var C=U.length,I=F.length;switch(I){case 0:case 1:var k=0;for(F=I===0?"":F[0]+" ";k<C;++k)W[k]=r(F,W[k],K).trim();break;default:var G=k=0;for(W=[];k<C;++k)for(var R=0;R<I;++R)W[G++]=r(F[R]+" ",U[k],K).trim()}return W}function r(F,W,K){var U=W.charCodeAt(0);switch(33>U&&(U=(W=W.trim()).charCodeAt(0)),U){case 38:return W.replace(L,"$1"+F.trim());case 58:return F.trim()+W.replace(L,"$1"+F.trim());default:if(0<1*K&&0<W.indexOf("\f"))return W.replace(L,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+W}function o(F,W,K,U){var C=F+";",I=2*W+3*K+4*U;if(I===944){F=C.indexOf(":",9)+1;var k=C.substring(F,C.length-1).trim();return k=C.substring(0,F).trim()+k+";",O===1||O===2&&s(k,1)?"-webkit-"+k+k:k}if(O===0||O===2&&!s(C,1))return C;switch(I){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(j,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return k=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+k+"-webkit-"+C+"-ms-flex-pack"+k+C;case 1005:return x.test(C)?C.replace(S,":-webkit-")+C.replace(S,":-moz-")+C:C;case 1e3:switch(k=C.substring(13).trim(),W=k.indexOf("-")+1,k.charCodeAt(0)+k.charCodeAt(W)){case 226:k=C.replace(f,"tb");break;case 232:k=C.replace(f,"tb-rl");break;case 220:k=C.replace(f,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+k+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(W=(C=F).length-10,k=(C.charCodeAt(W)===33?C.substring(0,W):C).substring(F.indexOf(":",7)+1).trim(),I=k.charCodeAt(0)+(k.charCodeAt(7)|0)){case 203:if(111>k.charCodeAt(8))break;case 115:C=C.replace(k,"-webkit-"+k)+";"+C;break;case 207:case 102:C=C.replace(k,"-webkit-"+(102<I?"inline-":"")+"box")+";"+C.replace(k,"-webkit-"+k)+";"+C.replace(k,"-ms-"+k+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return k=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+k+"-ms-flex-"+k+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(T,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(T,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(H.test(F)===!0)return(k=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?o(F.replace("stretch","fill-available"),W,K,U).replace(":fill-available",":stretch"):C.replace(k,"-webkit-"+k)+C.replace(k,"-moz-"+k.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,K+U===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(M,"$1-webkit-$2")+C}return C}function s(F,W){var K=F.indexOf(W===1?":":"{"),U=F.substring(0,W!==3?K:10);return K=F.substring(K+1,F.length-1),te(W!==2?U:U.replace(P,"$1"),K,W)}function i(F,W){var K=o(W,W.charCodeAt(0),W.charCodeAt(1),W.charCodeAt(2));return K!==W+";"?K.replace(b," or ($1)").substring(4):"("+W+")"}function l(F,W,K,U,C,I,k,G,R,B){for(var m=0,J=W,D;m<Q;++m)switch(D=Y[m].call(d,F,J,K,U,C,I,k,G,R,B)){case void 0:case!1:case!0:case null:break;default:J=D}if(J!==W)return J}function u(F){switch(F){case void 0:case null:Q=Y.length=0;break;default:if(typeof F=="function")Y[Q++]=F;else if(typeof F=="object")for(var W=0,K=F.length;W<K;++W)u(F[W]);else ie=!!F|0}return u}function c(F){return F=F.prefix,F!==void 0&&(te=null,F?typeof F!="function"?O=1:(O=2,te=F):O=0),c}function d(F,W){var K=F;if(33>K.charCodeAt(0)&&(K=K.trim()),ae=K,K=[ae],0<Q){var U=l(-1,W,K,K,$,ee,0,0,0,0);U!==void 0&&typeof U=="string"&&(W=U)}var C=n(N,K,W,0,0);return 0<Q&&(U=l(-2,C,K,K,$,ee,C.length,0,0,0),U!==void 0&&(C=U)),ae="",A=0,ee=$=1,C}var h=/^\0+/g,v=/[\0\r\f]/g,S=/: */g,x=/zoo|gra/,M=/([,: ])(transform)/g,g=/,\r+?/g,L=/([\t\r\n ])*\f?&/g,V=/@(k\w+)\s*(\S*)\s*/,z=/::(place)/g,_=/:(read-only)/g,f=/[svh]\w+-[tblr]{2}/,y=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,T=/-self|flex-/g,P=/[^]*?(:[rp][el]a[\w-]+)[^]*/,H=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,ee=1,$=1,A=0,O=1,N=[],Y=[],Q=0,te=null,ie=0,ae="";return d.use=u,d.set=c,e!==void 0&&c(e),d}var co={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function lo(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var uo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,An=lo(function(e){return uo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Lt={},fo={get exports(){return Lt},set exports(e){Lt=e}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pn;function ho(){if(Pn)return me;Pn=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,S=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,M=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,V=e?Symbol.for("react.scope"):60119;function z(f){if(typeof f=="object"&&f!==null){var y=f.$$typeof;switch(y){case n:switch(f=f.type,f){case u:case c:case r:case s:case o:case h:return f;default:switch(f=f&&f.$$typeof,f){case l:case d:case x:case S:case i:return f;default:return y}}case t:return y}}}function _(f){return z(f)===c}return me.AsyncMode=u,me.ConcurrentMode=c,me.ContextConsumer=l,me.ContextProvider=i,me.Element=n,me.ForwardRef=d,me.Fragment=r,me.Lazy=x,me.Memo=S,me.Portal=t,me.Profiler=s,me.StrictMode=o,me.Suspense=h,me.isAsyncMode=function(f){return _(f)||z(f)===u},me.isConcurrentMode=_,me.isContextConsumer=function(f){return z(f)===l},me.isContextProvider=function(f){return z(f)===i},me.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===n},me.isForwardRef=function(f){return z(f)===d},me.isFragment=function(f){return z(f)===r},me.isLazy=function(f){return z(f)===x},me.isMemo=function(f){return z(f)===S},me.isPortal=function(f){return z(f)===t},me.isProfiler=function(f){return z(f)===s},me.isStrictMode=function(f){return z(f)===o},me.isSuspense=function(f){return z(f)===h},me.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===r||f===c||f===s||f===o||f===h||f===v||typeof f=="object"&&f!==null&&(f.$$typeof===x||f.$$typeof===S||f.$$typeof===i||f.$$typeof===l||f.$$typeof===d||f.$$typeof===g||f.$$typeof===L||f.$$typeof===V||f.$$typeof===M)},me.typeOf=z,me}var ye={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var On;function po(){return On||(On=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,S=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,M=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,V=e?Symbol.for("react.scope"):60119;function z(m){return typeof m=="string"||typeof m=="function"||m===r||m===c||m===s||m===o||m===h||m===v||typeof m=="object"&&m!==null&&(m.$$typeof===x||m.$$typeof===S||m.$$typeof===i||m.$$typeof===l||m.$$typeof===d||m.$$typeof===g||m.$$typeof===L||m.$$typeof===V||m.$$typeof===M)}function _(m){if(typeof m=="object"&&m!==null){var J=m.$$typeof;switch(J){case n:var D=m.type;switch(D){case u:case c:case r:case s:case o:case h:return D;default:var Z=D&&D.$$typeof;switch(Z){case l:case d:case x:case S:case i:return Z;default:return J}}case t:return J}}}var f=u,y=c,b=l,T=i,P=n,H=d,j=r,ee=x,$=S,A=t,O=s,N=o,Y=h,Q=!1;function te(m){return Q||(Q=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ie(m)||_(m)===u}function ie(m){return _(m)===c}function ae(m){return _(m)===l}function F(m){return _(m)===i}function W(m){return typeof m=="object"&&m!==null&&m.$$typeof===n}function K(m){return _(m)===d}function U(m){return _(m)===r}function C(m){return _(m)===x}function I(m){return _(m)===S}function k(m){return _(m)===t}function G(m){return _(m)===s}function R(m){return _(m)===o}function B(m){return _(m)===h}ye.AsyncMode=f,ye.ConcurrentMode=y,ye.ContextConsumer=b,ye.ContextProvider=T,ye.Element=P,ye.ForwardRef=H,ye.Fragment=j,ye.Lazy=ee,ye.Memo=$,ye.Portal=A,ye.Profiler=O,ye.StrictMode=N,ye.Suspense=Y,ye.isAsyncMode=te,ye.isConcurrentMode=ie,ye.isContextConsumer=ae,ye.isContextProvider=F,ye.isElement=W,ye.isForwardRef=K,ye.isFragment=U,ye.isLazy=C,ye.isMemo=I,ye.isPortal=k,ye.isProfiler=G,ye.isStrictMode=R,ye.isSuspense=B,ye.isValidElementType=z,ye.typeOf=_}()),ye}(function(e){process.env.NODE_ENV==="production"?e.exports=ho():e.exports=po()})(fo);var Nt=Lt,go={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ft={};Ft[Nt.ForwardRef]=yo,Ft[Nt.Memo]=Yn;function In(e){return Nt.isMemo(e)?Yn:Ft[e.$$typeof]||go}var vo=Object.defineProperty,xo=Object.getOwnPropertyNames,Ln=Object.getOwnPropertySymbols,bo=Object.getOwnPropertyDescriptor,wo=Object.getPrototypeOf,Nn=Object.prototype;function Fn(e,n,t){if(typeof n!="string"){if(Nn){var r=wo(n);r&&r!==Nn&&Fn(e,r,t)}var o=xo(n);Ln&&(o=o.concat(Ln(n)));for(var s=In(e),i=In(n),l=0;l<o.length;++l){var u=o[l];if(!mo[u]&&!(t&&t[u])&&!(i&&i[u])&&!(s&&s[u])){var c=bo(n,u);try{vo(e,u,c)}catch{}}}}return e}var So=Fn;function Te(){return(Te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var Hn=function(e,n){for(var t=[e[0]],r=0,o=n.length;r<o;r+=1)t.push(n[r],e[r+1]);return t},Ht=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!pt.typeOf(e)},xt=Object.freeze([]),je=Object.freeze({});function qe(e){return typeof e=="function"}function Wt(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function zt(e){return e&&typeof e.styledComponentId=="string"}var Je=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Bt=typeof window<"u"&&"HTMLElement"in window,Co=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),Mo={},ko=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`;return r},e}(),bt=new Map,wt=new Map,gt=1,St=function(e){if(bt.has(e))return bt.get(e);for(;wt.has(gt);)gt++;var n=gt++;return process.env.NODE_ENV!=="production"&&((0|n)<0||n>1<<30)&&Ye(16,""+n),bt.set(e,n),wt.set(n,e),n},Eo=function(e){return wt.get(e)},_o=function(e,n){n>=gt&&(gt=n+1),bt.set(e,n),wt.set(n,e)},To="style["+Je+'][data-styled-version="5.3.8"]',Ao=new RegExp("^"+Je+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Po=function(e,n,t){for(var r,o=t.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(n,r)},Oo=function(e,n){for(var t=(n.textContent||"").split(`/*!sc*/
`),r=[],o=0,s=t.length;o<s;o++){var i=t[o].trim();if(i){var l=i.match(Ao);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(_o(c,u),Po(e,c,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},Yo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Wn=function(e){var n=document.head,t=e||n,r=document.createElement("style"),o=function(l){for(var u=l.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(Je))return d}}(t),s=o!==void 0?o.nextSibling:null;r.setAttribute(Je,"active"),r.setAttribute("data-styled-version","5.3.8");var i=Yo();return i&&r.setAttribute("nonce",i),t.insertBefore(r,s),r},Io=function(){function e(t){var r=this.element=Wn(t);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,i=0,l=s.length;i<l;i++){var u=s[i];if(u.ownerNode===o)return u}Ye(17)}(r),this.length=0}var n=e.prototype;return n.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.getRule=function(t){var r=this.sheet.cssRules[t];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Lo=function(){function e(t){var r=this.element=Wn(t);this.nodes=r.childNodes,this.length=0}var n=e.prototype;return n.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},n.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),No=function(){function e(t){this.rules=[],this.length=0}var n=e.prototype;return n.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),zn=Bt,Fo={isServer:!Bt,useCSSOMInjection:!Co},Ct=function(){function e(t,r,o){t===void 0&&(t=je),r===void 0&&(r={}),this.options=Te({},Fo,{},t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Bt&&zn&&(zn=!1,function(s){for(var i=document.querySelectorAll(To),l=0,u=i.length;l<u;l++){var c=i[l];c&&c.getAttribute(Je)!=="active"&&(Oo(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return St(t)};var n=e.prototype;return n.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Te({},this.options,{},t),this.gs,r&&this.names||void 0)},n.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,s=r.useCSSOMInjection,i=r.target,t=o?new No(i):s?new Io(i):new Lo(i),new Do(t)));var t,r,o,s,i},n.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.registerName=function(t,r){if(St(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},n.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(St(t),o)},n.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.clearRules=function(t){this.getTag().clearGroup(St(t)),this.clearNames(t)},n.clearTag=function(){this.tag=void 0},n.toString=function(){return function(t){for(var r=t.getTag(),o=r.length,s="",i=0;i<o;i++){var l=Eo(i);if(l!==void 0){var u=t.names.get(l),c=r.getGroup(i);if(u&&c&&u.size){var d=Je+".g"+i+'[id="'+l+'"]',h="";u!==void 0&&u.forEach(function(v){v.length>0&&(h+=v+",")}),s+=""+c+d+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),Ho=/(a)(d)/gi,Bn=function(e){return String.fromCharCode(e+(e>25?39:97))};function jt(e){var n,t="";for(n=Math.abs(e);n>52;n=n/52|0)t=Bn(n%52)+t;return(Bn(n%52)+t).replace(Ho,"$1-$2")}var Ve=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},jn=function(e){return Ve(5381,e)};function Zn(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(qe(t)&&!zt(t))return!1}return!0}var Wo=jn("5.3.8"),zo=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(r===void 0||r.isStatic)&&Zn(n),this.componentId=t,this.baseHash=Ve(Wo,t),this.baseStyle=r,Ct.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(n,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var i=Ge(this.rules,n,t,r).join(""),l=jt(Ve(this.baseHash,i)>>>0);if(!t.hasNameForId(o,l)){var u=r(i,"."+l,void 0,o);t.insertRules(o,l,u)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,d=Ve(this.baseHash,r.hash),h="",v=0;v<c;v++){var S=this.rules[v];if(typeof S=="string")h+=S,process.env.NODE_ENV!=="production"&&(d=Ve(d,S+v));else if(S){var x=Ge(S,n,t,r),M=Array.isArray(x)?x.join(""):x;d=Ve(d,M+v),h+=M}}if(h){var g=jt(d>>>0);if(!t.hasNameForId(o,g)){var L=r(h,"."+g,void 0,o);t.insertRules(o,g,L)}s.push(g)}}return s.join(" ")},e}(),Bo=/^\s*\/\/.*$/gm,jo=[":","[",".","#"];function Zo(e){var n,t,r,o,s=e===void 0?je:e,i=s.options,l=i===void 0?je:i,u=s.plugins,c=u===void 0?xt:u,d=new ao(l),h=[],v=function(M){function g(L){if(L)try{M(L+"}")}catch{}}return function(L,V,z,_,f,y,b,T,P,H){switch(L){case 1:if(P===0&&V.charCodeAt(0)===64)return M(V+";"),"";break;case 2:if(T===0)return V+"/*|*/";break;case 3:switch(T){case 102:case 112:return M(z[0]+V),"";default:return V+(H===0?"/*|*/":"")}case-2:V.split("/*|*/}").forEach(g)}}}(function(M){h.push(M)}),S=function(M,g,L){return g===0&&jo.indexOf(L[t.length])!==-1||L.match(o)?M:"."+n};function x(M,g,L,V){V===void 0&&(V="&");var z=M.replace(Bo,""),_=g&&L?L+" "+g+" { "+z+" }":z;return n=V,t=g,r=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),d(L||!g?"":g,_)}return d.use([].concat(c,[function(M,g,L){M===2&&L.length&&L[0].lastIndexOf(t)>0&&(L[0]=L[0].replace(r,S))},v,function(M){if(M===-2){var g=h;return h=[],g}}])),x.hash=c.length?c.reduce(function(M,g){return g.name||Ye(15),Ve(M,g.name)},5381).toString():"",x}var Vn=p.createContext();Vn.Consumer;var Gn=p.createContext(),Vo=(Gn.Consumer,new Ct),Zt=Zo();function Xn(){return p.useContext(Vn)||Vo}function Un(){return p.useContext(Gn)||Zt}var Kn=function(){function e(n,t){var r=this;this.inject=function(o,s){s===void 0&&(s=Zt);var i=r.name+s.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,s(r.rules,i,"@keyframes"))},this.toString=function(){return Ye(12,String(r.name))},this.name=n,this.id="sc-keyframes-"+n,this.rules=t}return e.prototype.getName=function(n){return n===void 0&&(n=Zt),this.name+n.hash},e}(),Go=/([A-Z])/,Xo=/([A-Z])/g,Uo=/^ms-/,Ko=function(e){return"-"+e.toLowerCase()};function qn(e){return Go.test(e)?e.replace(Xo,Ko).replace(Uo,"-ms-"):e}var Jn=function(e){return e==null||e===!1||e===""};function Ge(e,n,t,r){if(Array.isArray(e)){for(var o,s=[],i=0,l=e.length;i<l;i+=1)(o=Ge(e[i],n,t,r))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(Jn(e))return"";if(zt(e))return"."+e.styledComponentId;if(qe(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!n)return e;var u=e(n);return process.env.NODE_ENV!=="production"&&pt.isElement(u)&&console.warn(Wt(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ge(u,n,t,r)}var c;return e instanceof Kn?t?(e.inject(t,r),e.getName(r)):e:Ht(e)?function d(h,v){var S,x,M=[];for(var g in h)h.hasOwnProperty(g)&&!Jn(h[g])&&(Array.isArray(h[g])&&h[g].isCss||qe(h[g])?M.push(qn(g)+":",h[g],";"):Ht(h[g])?M.push.apply(M,d(h[g],g)):M.push(qn(g)+": "+(S=g,(x=h[g])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||S in co?String(x).trim():x+"px")+";"));return v?[v+" {"].concat(M,["}"]):M}(e):e.toString()}var Qn=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Mt(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return qe(e)||Ht(e)?Qn(Ge(Hn(xt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:Qn(Ge(Hn(e,t)))}var Rn=/invalid hook call/i,kt=new Set,er=function(e,n){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(n?' with the id of "'+n+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,r=console.error;try{var o=!0;console.error=function(s){if(Rn.test(s))o=!1,kt.delete(t);else{for(var i=arguments.length,l=new Array(i>1?i-1:0),u=1;u<i;u++)l[u-1]=arguments[u];r.apply(void 0,[s].concat(l))}},p.useRef(),o&&!kt.has(t)&&(console.warn(t),kt.add(t))}catch(s){Rn.test(s.message)&&kt.delete(t)}finally{console.error=r}}},tr=function(e,n,t){return t===void 0&&(t=je),e.theme!==t.theme&&e.theme||n||t.theme},qo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jo=/(^-|-$)/g;function Vt(e){return e.replace(qo,"-").replace(Jo,"")}var Gt=function(e){return jt(jn(e)>>>0)};function $t(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Xt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Qo=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ro(e,n,t){var r=e[t];Xt(n)&&Xt(r)?nr(r,n):e[t]=n}function nr(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];for(var o=0,s=t;o<s.length;o++){var i=s[o];if(Xt(i))for(var l in i)Qo(l)&&Ro(e,i[l],l)}return e}var Qe=p.createContext();Qe.Consumer;function es(e){var n=p.useContext(Qe),t=p.useMemo(function(){return function(r,o){if(!r)return Ye(14);if(qe(r)){var s=r(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Ye(7)}return Array.isArray(r)||typeof r!="object"?Ye(8):o?Te({},o,{},r):r}(e.theme,n)},[e.theme,n]);return e.children?p.createElement(Qe.Provider,{value:t},e.children):null}var Ut={};function rr(e,n,t){var r=zt(e),o=!$t(e),s=n.attrs,i=s===void 0?xt:s,l=n.componentId,u=l===void 0?function(V,z){var _=typeof V!="string"?"sc":Vt(V);Ut[_]=(Ut[_]||0)+1;var f=_+"-"+Gt("5.3.8"+_+Ut[_]);return z?z+"-"+f:f}(n.displayName,n.parentComponentId):l,c=n.displayName,d=c===void 0?function(V){return $t(V)?"styled."+V:"Styled("+Wt(V)+")"}(e):c,h=n.displayName&&n.componentId?Vt(n.displayName)+"-"+n.componentId:n.componentId||u,v=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,S=n.shouldForwardProp;r&&e.shouldForwardProp&&(S=n.shouldForwardProp?function(V,z,_){return e.shouldForwardProp(V,z,_)&&n.shouldForwardProp(V,z,_)}:e.shouldForwardProp);var x,M=new zo(t,h,r?e.componentStyle:void 0),g=M.isStatic&&i.length===0,L=function(V,z){return function(_,f,y,b){var T=_.attrs,P=_.componentStyle,H=_.defaultProps,j=_.foldedComponentIds,ee=_.shouldForwardProp,$=_.styledComponentId,A=_.target;process.env.NODE_ENV!=="production"&&p.useDebugValue($);var O=function(U,C,I){U===void 0&&(U=je);var k=Te({},C,{theme:U}),G={};return I.forEach(function(R){var B,m,J,D=R;for(B in qe(D)&&(D=D(k)),D)k[B]=G[B]=B==="className"?(m=G[B],J=D[B],m&&J?m+" "+J:m||J):D[B]}),[k,G]}(tr(f,p.useContext(Qe),H)||je,f,T),N=O[0],Y=O[1],Q=function(U,C,I,k){var G=Xn(),R=Un(),B=C?U.generateAndInjectStyles(je,G,R):U.generateAndInjectStyles(I,G,R);return process.env.NODE_ENV!=="production"&&p.useDebugValue(B),process.env.NODE_ENV!=="production"&&!C&&k&&k(B),B}(P,b,N,process.env.NODE_ENV!=="production"?_.warnTooManyClasses:void 0),te=y,ie=Y.$as||f.$as||Y.as||f.as||A,ae=$t(ie),F=Y!==f?Te({},f,{},Y):f,W={};for(var K in F)K[0]!=="$"&&K!=="as"&&(K==="forwardedAs"?W.as=F[K]:(ee?ee(K,An,ie):!ae||An(K))&&(W[K]=F[K]));return f.style&&Y.style!==f.style&&(W.style=Te({},f.style,{},Y.style)),W.className=Array.prototype.concat(j,$,Q!==$?Q:null,f.className,Y.className).filter(Boolean).join(" "),W.ref=te,p.createElement(ie,W)}(x,V,z,g)};return L.displayName=d,(x=p.forwardRef(L)).attrs=v,x.componentStyle=M,x.displayName=d,x.shouldForwardProp=S,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):xt,x.styledComponentId=h,x.target=r?e.target:e,x.withComponent=function(V){var z=n.componentId,_=function(y,b){if(y==null)return{};var T,P,H={},j=Object.keys(y);for(P=0;P<j.length;P++)T=j[P],b.indexOf(T)>=0||(H[T]=y[T]);return H}(n,["componentId"]),f=z&&z+"-"+($t(V)?V:Vt(Wt(V)));return rr(V,Te({},_,{attrs:v,componentId:f}),t)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=r?nr({},e.defaultProps,V):V}}),process.env.NODE_ENV!=="production"&&(er(d,h),x.warnTooManyClasses=function(V,z){var _={},f=!1;return function(y){if(!f&&(_[y]=!0,Object.keys(_).length>=200)){var b=z?' with the id of "'+z+'"':"";console.warn("Over 200 classes were generated for component "+V+b+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),f=!0,_={}}}}(d,h)),x.toString=function(){return"."+x.styledComponentId},o&&So(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var Kt=function(e){return function n(t,r,o){if(o===void 0&&(o=je),!pt.isValidElementType(r))return Ye(1,String(r));var s=function(){return t(r,o,Mt.apply(void 0,arguments))};return s.withConfig=function(i){return n(t,r,Te({},o,{},i))},s.attrs=function(i){return n(t,r,Te({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},s}(rr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Kt[e]=Kt(e)});var ts=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Zn(t),Ct.registerId(this.componentId+1)}var n=e.prototype;return n.createStyles=function(t,r,o,s){var i=s(Ge(this.rules,r,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,i)},n.removeStyles=function(t,r){r.clearRules(this.componentId+t)},n.renderStyles=function(t,r,o,s){t>2&&Ct.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,s)},e}();function ns(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=Mt.apply(void 0,[e].concat(t)),s="sc-global-"+Gt(JSON.stringify(o)),i=new ts(o,s);function l(c){var d=Xn(),h=Un(),v=p.useContext(Qe),S=p.useRef(d.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(x){return typeof x=="string"&&x.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),d.server&&u(S,c,d,v,h),p.useLayoutEffect(function(){if(!d.server)return u(S,c,d,v,h),function(){return i.removeStyles(S,d)}},[S,c,d,v,h]),null}function u(c,d,h,v,S){if(i.isStatic)i.renderStyles(c,Mo,h,S);else{var x=Te({},d,{theme:tr(d,v,l.defaultProps)});i.renderStyles(c,x,h,S)}}return process.env.NODE_ENV!=="production"&&er(s),p.memo(l)}function Dt(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=Mt.apply(void 0,[e].concat(t)).join(""),s=Gt(o);return new Kn(s,o)}var Et=function(){return p.useContext(Qe)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const w=Kt,mt="reactSchedulerOutsideWrapper",Ae="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",rs=ns`

  #${mt} {
    font-family: ${Ae};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${mt} *,
 #${mt} *:before,
 #${mt} *:after {
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
`;const be=50,Ie=24,tt=16,Xe=40,nt=Xe+tt+Ie,rt=84,fe=56,Ee=196,_e=12,Me=50,ot=24,yt=16,qt=40,is=ot+yt+qt,or=24,sr=52,Pe={topRow:`600 14px ${Ae}`,middleRow:`400 10px ${Ae}`,bottomRow:{name:`600 14px ${Ae}`,number:`600 10px ${Ae}`,hoursInDay:`400 9px ${Ae}`}},st=3,as=1.6,cs=4.5,Jt=12,_t=24,ls="reactSchedulerCanvasHeaderWrapper",ir="reactSchedulerCanvasWrapper",Oe=mt,ds=4,Qt=48,Ze=5,us=40,ar=8,Rt=Ie/2+2,cr=tt/2+Ie+1,lr=2,Se=60,De=21,dr=58;var Ue={},fs={get exports(){return Ue},set exports(e){Ue=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t=1e3,r=6e4,o=36e5,s="millisecond",i="second",l="minute",u="hour",c="day",d="week",h="month",v="quarter",S="year",x="date",M="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,L=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,V={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function($){var A=["th","st","nd","rd"],O=$%100;return"["+$+(A[(O-20)%10]||A[O]||A[0])+"]"}},z=function($,A,O){var N=String($);return!N||N.length>=A?$:""+Array(A+1-N.length).join(O)+$},_={s:z,z:function($){var A=-$.utcOffset(),O=Math.abs(A),N=Math.floor(O/60),Y=O%60;return(A<=0?"+":"-")+z(N,2,"0")+":"+z(Y,2,"0")},m:function $(A,O){if(A.date()<O.date())return-$(O,A);var N=12*(O.year()-A.year())+(O.month()-A.month()),Y=A.clone().add(N,h),Q=O-Y<0,te=A.clone().add(N+(Q?-1:1),h);return+(-(N+(O-Y)/(Q?Y-te:te-Y))||0)},a:function($){return $<0?Math.ceil($)||0:Math.floor($)},p:function($){return{M:h,y:S,w:d,d:c,D:x,h:u,m:l,s:i,ms:s,Q:v}[$]||String($||"").toLowerCase().replace(/s$/,"")},u:function($){return $===void 0}},f="en",y={};y[f]=V;var b=function($){return $ instanceof j},T=function $(A,O,N){var Y;if(!A)return f;if(typeof A=="string"){var Q=A.toLowerCase();y[Q]&&(Y=Q),O&&(y[Q]=O,Y=Q);var te=A.split("-");if(!Y&&te.length>1)return $(te[0])}else{var ie=A.name;y[ie]=A,Y=ie}return!N&&Y&&(f=Y),Y||!N&&f},P=function($,A){if(b($))return $.clone();var O=typeof A=="object"?A:{};return O.date=$,O.args=arguments,new j(O)},H=_;H.l=T,H.i=b,H.w=function($,A){return P($,{locale:A.$L,utc:A.$u,x:A.$x,$offset:A.$offset})};var j=function(){function $(O){this.$L=T(O.locale,null,!0),this.parse(O)}var A=$.prototype;return A.parse=function(O){this.$d=function(N){var Y=N.date,Q=N.utc;if(Y===null)return new Date(NaN);if(H.u(Y))return new Date;if(Y instanceof Date)return new Date(Y);if(typeof Y=="string"&&!/Z$/i.test(Y)){var te=Y.match(g);if(te){var ie=te[2]-1||0,ae=(te[7]||"0").substring(0,3);return Q?new Date(Date.UTC(te[1],ie,te[3]||1,te[4]||0,te[5]||0,te[6]||0,ae)):new Date(te[1],ie,te[3]||1,te[4]||0,te[5]||0,te[6]||0,ae)}}return new Date(Y)}(O),this.$x=O.x||{},this.init()},A.init=function(){var O=this.$d;this.$y=O.getFullYear(),this.$M=O.getMonth(),this.$D=O.getDate(),this.$W=O.getDay(),this.$H=O.getHours(),this.$m=O.getMinutes(),this.$s=O.getSeconds(),this.$ms=O.getMilliseconds()},A.$utils=function(){return H},A.isValid=function(){return this.$d.toString()!==M},A.isSame=function(O,N){var Y=P(O);return this.startOf(N)<=Y&&Y<=this.endOf(N)},A.isAfter=function(O,N){return P(O)<this.startOf(N)},A.isBefore=function(O,N){return this.endOf(N)<P(O)},A.$g=function(O,N,Y){return H.u(O)?this[N]:this.set(Y,O)},A.unix=function(){return Math.floor(this.valueOf()/1e3)},A.valueOf=function(){return this.$d.getTime()},A.startOf=function(O,N){var Y=this,Q=!!H.u(N)||N,te=H.p(O),ie=function(k,G){var R=H.w(Y.$u?Date.UTC(Y.$y,G,k):new Date(Y.$y,G,k),Y);return Q?R:R.endOf(c)},ae=function(k,G){return H.w(Y.toDate()[k].apply(Y.toDate("s"),(Q?[0,0,0,0]:[23,59,59,999]).slice(G)),Y)},F=this.$W,W=this.$M,K=this.$D,U="set"+(this.$u?"UTC":"");switch(te){case S:return Q?ie(1,0):ie(31,11);case h:return Q?ie(1,W):ie(0,W+1);case d:var C=this.$locale().weekStart||0,I=(F<C?F+7:F)-C;return ie(Q?K-I:K+(6-I),W);case c:case x:return ae(U+"Hours",0);case u:return ae(U+"Minutes",1);case l:return ae(U+"Seconds",2);case i:return ae(U+"Milliseconds",3);default:return this.clone()}},A.endOf=function(O){return this.startOf(O,!1)},A.$set=function(O,N){var Y,Q=H.p(O),te="set"+(this.$u?"UTC":""),ie=(Y={},Y[c]=te+"Date",Y[x]=te+"Date",Y[h]=te+"Month",Y[S]=te+"FullYear",Y[u]=te+"Hours",Y[l]=te+"Minutes",Y[i]=te+"Seconds",Y[s]=te+"Milliseconds",Y)[Q],ae=Q===c?this.$D+(N-this.$W):N;if(Q===h||Q===S){var F=this.clone().set(x,1);F.$d[ie](ae),F.init(),this.$d=F.set(x,Math.min(this.$D,F.daysInMonth())).$d}else ie&&this.$d[ie](ae);return this.init(),this},A.set=function(O,N){return this.clone().$set(O,N)},A.get=function(O){return this[H.p(O)]()},A.add=function(O,N){var Y,Q=this;O=Number(O);var te=H.p(N),ie=function(W){var K=P(Q);return H.w(K.date(K.date()+Math.round(W*O)),Q)};if(te===h)return this.set(h,this.$M+O);if(te===S)return this.set(S,this.$y+O);if(te===c)return ie(1);if(te===d)return ie(7);var ae=(Y={},Y[l]=r,Y[u]=o,Y[i]=t,Y)[te]||1,F=this.$d.getTime()+O*ae;return H.w(F,this)},A.subtract=function(O,N){return this.add(-1*O,N)},A.format=function(O){var N=this,Y=this.$locale();if(!this.isValid())return Y.invalidDate||M;var Q=O||"YYYY-MM-DDTHH:mm:ssZ",te=H.z(this),ie=this.$H,ae=this.$m,F=this.$M,W=Y.weekdays,K=Y.months,U=function(G,R,B,m){return G&&(G[R]||G(N,Q))||B[R].slice(0,m)},C=function(G){return H.s(ie%12||12,G,"0")},I=Y.meridiem||function(G,R,B){var m=G<12?"AM":"PM";return B?m.toLowerCase():m},k={YY:String(this.$y).slice(-2),YYYY:this.$y,M:F+1,MM:H.s(F+1,2,"0"),MMM:U(Y.monthsShort,F,K,3),MMMM:U(K,F),D:this.$D,DD:H.s(this.$D,2,"0"),d:String(this.$W),dd:U(Y.weekdaysMin,this.$W,W,2),ddd:U(Y.weekdaysShort,this.$W,W,3),dddd:W[this.$W],H:String(ie),HH:H.s(ie,2,"0"),h:C(1),hh:C(2),a:I(ie,ae,!0),A:I(ie,ae,!1),m:String(ae),mm:H.s(ae,2,"0"),s:String(this.$s),ss:H.s(this.$s,2,"0"),SSS:H.s(this.$ms,3,"0"),Z:te};return Q.replace(L,function(G,R){return R||k[G]||te.replace(":","")})},A.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},A.diff=function(O,N,Y){var Q,te=H.p(N),ie=P(O),ae=(ie.utcOffset()-this.utcOffset())*r,F=this-ie,W=H.m(this,ie);return W=(Q={},Q[S]=W/12,Q[h]=W,Q[v]=W/3,Q[d]=(F-ae)/6048e5,Q[c]=(F-ae)/864e5,Q[u]=F/o,Q[l]=F/r,Q[i]=F/t,Q)[te]||F,Y?W:H.a(W)},A.daysInMonth=function(){return this.endOf(h).$D},A.$locale=function(){return y[this.$L]},A.locale=function(O,N){if(!O)return this.$L;var Y=this.clone(),Q=T(O,N,!0);return Q&&(Y.$L=Q),Y},A.clone=function(){return H.w(this.$d,this)},A.toDate=function(){return new Date(this.valueOf())},A.toJSON=function(){return this.isValid()?this.toISOString():null},A.toISOString=function(){return this.$d.toISOString()},A.toString=function(){return this.$d.toUTCString()},$}(),ee=j.prototype;return P.prototype=ee,[["$ms",s],["$s",i],["$m",l],["$H",u],["$W",c],["$M",h],["$y",S],["$D",x]].forEach(function($){ee[$[1]]=function(A){return this.$g(A,$[0],$[1])}}),P.extend=function($,A){return $.$i||($(A,j,P),$.$i=!0),P},P.locale=T,P.isDayjs=b,P.unix=function($){return P(1e3*$)},P.en=y[f],P.Ls=y,P.p={},P})})(fs);const E=Ue,ur=e=>e%4===0&&e%100>0||e%400===0?366:365,en=e=>{const n=e.day();return n!==0&&n!==6},fr=(e,n)=>E(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(n,"months").daysInMonth(),hr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:en(e),isCurrentDay:e.isSame(E(),"day"),year:parseInt(e.format("YYYY"))});let Tt=null;const hs=e=>{if(Tt)return Tt;const n=document.createElement("canvas");n.width=12,n.height=12;const t=n.getContext("2d");return t?(t.strokeStyle="rgba(120, 137, 127, 0.045)",t.lineWidth=6,t.beginPath(),t.moveTo(-3,15),t.lineTo(15,-3),t.stroke(),Tt=e.createPattern(n,"repeat"),Tt):null},tn=(e,n,t,r,o,s,i,l=!1)=>{if(e.strokeStyle=i.colors.border,s?e.fillStyle=i.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=i.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(n,t,r,fe),l&&!s){const u=hs(e);u&&(e.fillStyle=u,e.fillRect(n,t,r,fe))}e.strokeRect(n+.5,t+.5,r,fe)},nn=(e,n)=>{let t=0;for(const r of n)r<=e&&t++;return t*De},ps=(e,n,t,r,o,s=[])=>{for(let i=0;i<n;i++){const l=nn(i,s);for(let u=0;u<=t;u++){const c=E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(u,"days"),d=c.isSame(E(),"day"),h=c.isBefore(E(),"day");tn(e,u*be,i*fe+l,be,en(c),d,o,h)}}},gs=(e,n,t,r)=>{e.setLineDash([5,5]),e.strokeStyle=r.colors.border,e.moveTo(n+.5,.5),e.lineTo(n+.5,t+.5),e.stroke()},ms=(e,n,t,r,o,s=[])=>{let i=0,l=-(r.dayOfMonth-1)*_e;const u=n*fe+s.length*De;for(let c=0;c<=t;c++){const h=E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(c,"weeks").isSame(E(),"week");for(let v=0;v<n;v++){const S=nn(v,s);tn(e,i,v*fe+S,rt,!0,h,o)}i+=rt}for(let c=0;c<t;c++){const d=fr(r,c)*_e;gs(e,l,u,o),l+=d}},ys=(e,n,t,r,o,s=[])=>{const i=E(`${r.year}-${r.month+1}-${r.dayOfMonth+1}`);for(let l=0;l<n;l++){const u=nn(l,s);for(let c=0;c<=t;c++){let d;c===Math.floor(t/2)?d=E():c>Math.floor(t/2)?d=E().add(c-Math.floor(t/2),"hours"):d=E().subtract(Math.floor(t/2)-l,"hours");const h=i.isSame(E(),"day")&&d.isSame(E(),"hour");tn(e,c*Me+Me/2-.5,l*fe+u,Me,en(d),h,o)}}},vs=(e,n,t,r)=>{const o=t*fe+n*De,s=e.canvas.width,i=o+De/2;e.fillStyle=r.mode==="dark"?r.colors.primary+"80":r.colors.primary,e.fillRect(0,o,s,De),e.strokeStyle=r.colors.border,e.lineWidth=1,e.setLineDash([]),e.beginPath(),e.moveTo(0,i+.5),e.lineTo(s,i+.5),e.stroke()},xs=(e,n,t,r,o,s,i=[])=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(ir)){switch(n){case 0:ms(e,t,r,o,s,i);break;case 1:ps(e,t,r,o,s,i);break;case 2:ys(e,t,r,o,s,i);break}for(let u=0;u<i.length;u++)vs(e,u,i[u],s)}};var rn={},bs={get exports(){return rn},set exports(e){rn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t="week",r="year";return function(o,s,i){var l=s.prototype;l.week=function(u){if(u===void 0&&(u=null),u!==null)return this.add(7*(u-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var d=i(this).startOf(r).add(1,r).date(c),h=i(this).endOf(t);if(d.isBefore(h))return 1}var v=i(this).startOf(r).date(c).startOf(t).subtract(1,"millisecond"),S=this.diff(v,t,!0);return S<0?i(this).startOf("week").week():Math.ceil(S)},l.weeks=function(u){return u===void 0&&(u=null),this.week(u)}}})})(bs);const ws=rn;var on={},Ss={get exports(){return on},set exports(e){on=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r,o){r.prototype.dayOfYear=function(s){var i=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?i:this.add(s-i,"day")}}})})(Ss);const Cs=on;var sn={},Ms={get exports(){return sn},set exports(e){sn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t="day";return function(r,o,s){var i=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return i(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var d,h,v,S,x=i(this),M=(d=this.isoWeekYear(),h=this.$u,v=(h?s.utc:s)().year(d).startOf("year"),S=4-v.isoWeekday(),v.isoWeekday()>4&&(S+=7),v.add(S,t));return x.diff(M,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var u=l.startOf;l.startOf=function(c,d){var h=this.$utils(),v=!!h.u(d)||d;return h.p(c)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):u.bind(this)(c,d)}}})})(Ms);const ks=sn;var an={},$s={get exports(){return an},set exports(e){an=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r,o){r.prototype.isBetween=function(s,i,l,u){var c=o(s),d=o(i),h=(u=u||"()")[0]==="(",v=u[1]===")";return(h?this.isAfter(c,l):!this.isBefore(c,l))&&(v?this.isBefore(d,l):!this.isAfter(d,l))||(h?this.isBefore(c,l):!this.isAfter(c,l))&&(v?this.isAfter(d,l):!this.isBefore(d,l))}}})})($s);const Ds=an;var cn={},Es={get exports(){return cn},set exports(e){cn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t,r,o=1e3,s=6e4,i=36e5,l=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,d=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:c,months:d,days:l,hours:i,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},S=function(f){return f instanceof _},x=function(f,y,b){return new _(f,b,y.$l)},M=function(f){return r.p(f)+"s"},g=function(f){return f<0},L=function(f){return g(f)?Math.ceil(f):Math.floor(f)},V=function(f){return Math.abs(f)},z=function(f,y){return f?g(f)?{negative:!0,format:""+V(f)+y}:{negative:!1,format:""+f+y}:{negative:!1,format:""}},_=function(){function f(b,T,P){var H=this;if(this.$d={},this.$l=P,b===void 0&&(this.$ms=0,this.parseFromMilliseconds()),T)return x(b*v[M(T)],this);if(typeof b=="number")return this.$ms=b,this.parseFromMilliseconds(),this;if(typeof b=="object")return Object.keys(b).forEach(function($){H.$d[M($)]=b[$]}),this.calMilliseconds(),this;if(typeof b=="string"){var j=b.match(h);if(j){var ee=j.slice(2).map(function($){return $!=null?Number($):0});return this.$d.years=ee[0],this.$d.months=ee[1],this.$d.weeks=ee[2],this.$d.days=ee[3],this.$d.hours=ee[4],this.$d.minutes=ee[5],this.$d.seconds=ee[6],this.calMilliseconds(),this}}return this}var y=f.prototype;return y.calMilliseconds=function(){var b=this;this.$ms=Object.keys(this.$d).reduce(function(T,P){return T+(b.$d[P]||0)*v[P]},0)},y.parseFromMilliseconds=function(){var b=this.$ms;this.$d.years=L(b/c),b%=c,this.$d.months=L(b/d),b%=d,this.$d.days=L(b/l),b%=l,this.$d.hours=L(b/i),b%=i,this.$d.minutes=L(b/s),b%=s,this.$d.seconds=L(b/o),b%=o,this.$d.milliseconds=b},y.toISOString=function(){var b=z(this.$d.years,"Y"),T=z(this.$d.months,"M"),P=+this.$d.days||0;this.$d.weeks&&(P+=7*this.$d.weeks);var H=z(P,"D"),j=z(this.$d.hours,"H"),ee=z(this.$d.minutes,"M"),$=this.$d.seconds||0;this.$d.milliseconds&&($+=this.$d.milliseconds/1e3);var A=z($,"S"),O=b.negative||T.negative||H.negative||j.negative||ee.negative||A.negative,N=j.format||ee.format||A.format?"T":"",Y=(O?"-":"")+"P"+b.format+T.format+H.format+N+j.format+ee.format+A.format;return Y==="P"||Y==="-P"?"P0D":Y},y.toJSON=function(){return this.toISOString()},y.format=function(b){var T=b||"YYYY-MM-DDTHH:mm:ss",P={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return T.replace(u,function(H,j){return j||String(P[H])})},y.as=function(b){return this.$ms/v[M(b)]},y.get=function(b){var T=this.$ms,P=M(b);return P==="milliseconds"?T%=1e3:T=P==="weeks"?L(T/v[P]):this.$d[P],T===0?0:T},y.add=function(b,T,P){var H;return H=T?b*v[M(T)]:S(b)?b.$ms:x(b,this).$ms,x(this.$ms+H*(P?-1:1),this)},y.subtract=function(b,T){return this.add(b,T,!0)},y.locale=function(b){var T=this.clone();return T.$l=b,T},y.clone=function(){return x(this.$ms,this)},y.humanize=function(b){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!b)},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},f}();return function(f,y,b){t=b,r=b().$utils(),b.duration=function(H,j){var ee=b.locale();return x(H,{$l:ee},j)},b.isDuration=S;var T=y.prototype.add,P=y.prototype.subtract;y.prototype.add=function(H,j){return S(H)&&(H=H.asMilliseconds()),T.bind(this)(H,j)},y.prototype.subtract=function(H,j){return S(H)&&(H=H.asMilliseconds()),P.bind(this)(H,j)}}})})(Es);const _s=cn;var Ts="Expected a function",pr=0/0,As="[object Symbol]",Ps=/^\s+|\s+$/g,Os=/^[-+]0x[0-9a-f]+$/i,Ys=/^0b[01]+$/i,Is=/^0o[0-7]+$/i,Ls=parseInt,Ns=typeof Ce=="object"&&Ce&&Ce.Object===Object&&Ce,Fs=typeof self=="object"&&self&&self.Object===Object&&self,Hs=Ns||Fs||Function("return this")(),Ws=Object.prototype,zs=Ws.toString,Bs=Math.max,js=Math.min,ln=function(){return Hs.Date.now()};function Zs(e,n,t){var r,o,s,i,l,u,c=0,d=!1,h=!1,v=!0;if(typeof e!="function")throw new TypeError(Ts);n=gr(n)||0,dn(t)&&(d=!!t.leading,h="maxWait"in t,s=h?Bs(gr(t.maxWait)||0,n):s,v="trailing"in t?!!t.trailing:v);function S(y){var b=r,T=o;return r=o=void 0,c=y,i=e.apply(T,b),i}function x(y){return c=y,l=setTimeout(L,n),d?S(y):i}function M(y){var b=y-u,T=y-c,P=n-b;return h?js(P,s-T):P}function g(y){var b=y-u,T=y-c;return u===void 0||b>=n||b<0||h&&T>=s}function L(){var y=ln();if(g(y))return V(y);l=setTimeout(L,M(y))}function V(y){return l=void 0,v&&r?S(y):(r=o=void 0,i)}function z(){l!==void 0&&clearTimeout(l),c=0,r=u=o=l=void 0}function _(){return l===void 0?i:V(ln())}function f(){var y=ln(),b=g(y);if(r=arguments,o=this,u=y,b){if(l===void 0)return x(u);if(h)return l=setTimeout(L,n),S(u)}return l===void 0&&(l=setTimeout(L,n)),i}return f.cancel=z,f.flush=_,f}function dn(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Vs(e){return!!e&&typeof e=="object"}function Gs(e){return typeof e=="symbol"||Vs(e)&&zs.call(e)==As}function gr(e){if(typeof e=="number")return e;if(Gs(e))return pr;if(dn(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=dn(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ps,"");var t=Ys.test(e);return t||Is.test(e)?Ls(e.slice(2),t?2:8):Os.test(e)?pr:+e}var it=Zs;const At=[0,1,2];var vt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(vt||{});const mr=e=>At.includes(e),at=e=>{var r;const t=(((r=document.getElementById(Oe))==null?void 0:r.clientWidth)||0)-Ee;switch(e){case 1:return Math.ceil(t/be)*st;case 2:return Math.ceil(t/Me)*st;default:return Math.ceil(t/rt)*st}},un=e=>at(e)/st,fn=(e,n)=>{const t=at(n)/2;let r;switch(n){case 1:r=e.subtract(t,"days");break;case 2:r=e.subtract(t,"hours");break;default:r=e.subtract(t,"weeks");break}let o;switch(n){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:r,endDate:o}},Xs=(e,n)=>{const t=fn(e,n);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},hn=()=>{var t;return((((t=document.getElementById(Oe))==null?void 0:t.clientWidth)||0)-Ee)*st},yr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:E(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});E.extend(ws),E.extend(Cs),E.extend(ks),E.extend(Ds),E.extend(_s);const Us=({data:e,children:n,isLoading:t,config:r,defaultStartDate:o=E(),onRangeChange:s,handleToggleDisplayActiveUnits:i,onClearFilterData:l})=>{const{zoom:u,maxRecordsPerPage:c=50}=r,[d,h]=p.useState(u),[v,S]=p.useState(E()),[x,M]=p.useState(!1),[g,L]=p.useState(at(d)),V=At[d]!==At[At.length-1],z=d!==0,_=p.useMemo(()=>Xs(v,d),[v,d]),f=fn(v,d).startDate,y=E(f).dayOfYear(),b=hr(f),T=p.useRef(null),[P,H]=p.useState([{x:0,y:0}]),j=p.useCallback((U,C="auto")=>{var k,G,R,B;const I=hn();switch(U){case"back":return(k=T.current)==null?void 0:k.scrollTo({behavior:C,left:I/3});case"forward":return(G=T.current)==null?void 0:G.scrollTo({behavior:C,left:I/3});case"middle":{const m=I/st/4;return(R=T.current)==null?void 0:R.scrollTo({behavior:C,left:I/2-m})}default:return(B=T.current)==null?void 0:B.scrollTo({behavior:C,left:I/2})}},[]),ee=U=>{H(U)},$=p.useCallback(U=>{const C=un(d);let I;switch(d){case 0:I=C*7;break;case 1:I=C;break;case 2:I=Math.ceil(C/_t);break}it(()=>{switch(U){case"back":S(G=>G.subtract(I,"days"));break;case"forward":S(G=>G.add(I,"days"));break;case"middle":S(E());break}s==null||s(_)},300)()},[s,_,d]);p.useEffect(()=>{T.current=document.getElementById(Oe),L(at(d))},[d]),p.useEffect(()=>{const U=()=>L(at(d));return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[d]),p.useEffect(()=>{s==null||s(_)},[s,_]),p.useEffect(()=>{M(!1)},[o]),p.useEffect(()=>{x||(j("middle"),M(!0),S(o))},[o,x,j]);const A=()=>{t||(S(U=>d===2?U.add(or,"hours"):U.add(lr,"weeks")),s==null||s(_))},O=p.useCallback(()=>{t||($("forward"),it(()=>{j("forward")},500)())},[t,$,j]),N=()=>{t||(S(U=>d===2?U.subtract(or,"hours"):U.subtract(lr,"weeks")),s==null||s(_))},Y=p.useCallback(()=>{!x||t||($("back"),it(()=>{j("back")},500)())},[x,t,$,j]),Q=p.useCallback(()=>{t||($("middle"),it(()=>{j("middle","auto")},300)())},[t,$,j]),te=p.useCallback(U=>{if(t)return;const C=E(U).startOf("day");C.isValid()&&(S(C),s==null||s(_),setTimeout(()=>{j("middle","auto")},300))},[t,j,s,_]),ie=()=>F(d+1),ae=()=>F(d-1),F=U=>{mr(U)&&(h(U),L(at(U)),s==null||s(_))},W=()=>i==null?void 0:i(),{Provider:K}=yr;return a.jsx(K,{value:{data:e,config:r,handleGoNext:A,handleScrollNext:O,handleGoPrev:N,handleScrollPrev:Y,handleGoToday:Q,goToDate:te,zoomIn:ie,zoomOut:ae,setZoom:F,zoom:d,isNextZoom:V,isPrevZoom:z,date:v,isLoading:t,cols:g,startDate:b,dayOfYear:y,toggleDisplayActiveUnits:W,tilesCoords:P,updateTilesCoords:ee,recordsThreshold:c,onClearFilterData:l},children:n})},Le=()=>p.useContext(yr),vr=(e,n,t)=>{e.canvas.width=n*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=n+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},xr=(e,n)=>{if(n.length===0)return e;let t=e,r=0;for(const o of n){const s=o*fe+r*De;if(e>=s+De)r++;else if(e>=s)return o*fe+r*De-r*De}return t-r*De},Ks=5,br=(e,n)=>{const t=Math.abs(n.x-e.x),r=Math.abs(n.y-e.y);return Math.sqrt(t*t+r*r)>Ks},ct=(e,n,t)=>{const r=t.getBoundingClientRect();return{x:e-r.left+t.scrollLeft,y:n-r.top+t.scrollTop}},qs=({data:e,baseData:n,zoom:t,startDate:r,onEventDrop:o,onEventDrag:s,draggableConfig:i={},gridRef:l,separatorRowIndices:u=[]})=>{const c=n?n.length>0&&n[0].data.length>0&&!Array.isArray(n[0].data[0])?n.map(I=>({...I,data:[I.data]})):n:e,{enabled:d=!0,isDraggable:h,resourceOnly:v=!1,isValidDrop:S}=i,[x,M]=p.useState("idle"),[g,L]=p.useState(null),[V,z]=p.useState({x:0,y:0}),[_,f]=p.useState({width:0,height:48}),[y,b]=p.useState(null),[T,P]=p.useState(!0),H=p.useRef({x:0,y:0}),j=p.useRef({x:0,y:0}),ee=p.useRef({x:0,y:0}),$=p.useRef(null),A=p.useRef(null),O=p.useRef(0),N=p.useRef(null),Y=p.useCallback(I=>!d||I.draggable===!1?!1:h?h(I):!0,[d,h]),Q=p.useCallback((I,k)=>{const G=xr(k,u),R=Math.floor(G/fe);let B;switch(t){case 0:B=_e*7;break;case 1:B=be;break;case 2:B=Me;break;default:B=be}const m=Math.floor(I/B);let J;const D=E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:J=D.add(m*7,"days").toDate();break;case 1:J=D.add(m,"days").toDate();break;case 2:J=D.add(m,"hours").toDate();break;default:J=D.toDate()}return{snappedDate:J,snappedResourceIndex:R}},[t,r,u]),te=p.useCallback((I,k,G,R)=>{const B=[],m=k.getTime(),J=G.getTime(),D=c.find(ne=>ne.id===R);if(!D)return B;const Z=[];for(const ne of D.data)Array.isArray(ne)?Z.push(...ne):Z.push(ne);for(const ne of Z){if(ne.segmentId===I.segmentId)continue;const q=ne.startDate.getTime(),ce=ne.endDate.getTime();if(m>=q&&m<ce||J>q&&J<=ce||m<=q&&J>=ce){const re=new Date(Math.max(m,q)),de=new Date(Math.min(J,ce)),ve=de.getTime()-re.getTime();B.push({event:ne,conflictStart:re,conflictEnd:de,overlapDuration:ve})}}return B},[c]),ie=p.useCallback((I,k,G,R)=>{const B=[],m=k.getTime(),J=G.getTime(),D=E(k).format("YYYY-MM-DD"),Z=c.find(q=>q.id===R);if(!Z)return B;const ne=[];for(const q of Z.data)Array.isArray(q)?ne.push(...q):ne.push(q);for(const q of ne){if(q.segmentId===I.segmentId)continue;const ce=q.startDate.getTime(),ue=q.endDate.getTime(),re=E(q.startDate).format("YYYY-MM-DD"),de=E(q.endDate).format("YYYY-MM-DD"),ve=E(G).format("YYYY-MM-DD");if(!(re===D||de===D||re===ve||de===ve||E(q.startDate).isBefore(k,"day")&&E(q.endDate).isAfter(G,"day"))||m>=ce&&m<ue||J>ce&&J<=ue||m<=ce&&J>=ue)continue;let oe,le;ue<=m?(oe=m-ue,le="before"):(oe=ce-J,le="after"),B.push({event:q,timeGap:oe,position:le})}return B.sort((q,ce)=>q.timeGap-ce.timeGap)},[c]),ae=p.useCallback((I,k,G)=>{const R=Q(k,G);let B,m;if(v)B=I.startDate,m=I.endDate;else{const ue=E(I.endDate).diff(I.startDate);B=R.snappedDate,m=E(B).add(ue,"milliseconds").toDate()}let J=0,D="",Z;for(const ue of e){const re=Math.max(ue.data.length,1);if(R.snappedResourceIndex<J+re){D=ue.id,Z=ue.capacity;break}J+=re}if(!D)return null;let ne=!0;Z!==void 0&&I.totalPassengers!==void 0&&(ne=I.totalPassengers<=Z);const q=te(I,B,m,D),ce=q.length===0?ie(I,B,m,D):[];return{startDate:B,endDate:m,resourceId:D,resourceIndex:R.snappedResourceIndex,resourceCapacity:Z,hasCapacity:ne,conflicts:q,hasConflict:q.length>0,nearbyEvents:ce}},[Q,e,v,te,ie]),F=p.useCallback((I,k)=>{if(!s)return;const G=Date.now();if(G-O.current<100)return;O.current=G;const R={event:I,currentStartDate:k.startDate,currentEndDate:k.endDate,currentResourceId:k.resourceId,conflicts:k.conflicts};s(R)},[s]),W=p.useCallback((I,k)=>{if(!Y(I)||!l.current)return;k.preventDefault(),k.stopPropagation();const G=k.target.closest('[style*="left"]');let R=0,B=0;G&&G.style.left&&G.style.top&&(R=parseInt(G.style.left),B=parseInt(G.style.top));const m=ct(k.clientX,k.clientY,l.current);H.current={x:R,y:B},j.current={x:k.clientX,y:k.clientY},ee.current={x:m.x-R,y:20},N.current={startDate:I.startDate,endDate:I.endDate,resourceId:""};for(const Z of e){for(const ne of Z.data)if(ne.some(q=>q.segmentId===I.segmentId)){N.current.resourceId=Z.id;break}if(N.current.resourceId)break}L(I),M("potential"),z({x:R,y:B});let J=100,D=48;if(G){const Z=G.getBoundingClientRect();J=Z.width,D=Z.height}f({width:J,height:D})},[Y,l,e,t]),K=p.useCallback(I=>{if(!l.current)return;let k=l.current;for(;k&&k!==document.body;){const q=window.getComputedStyle(k);if(k.scrollHeight>k.clientHeight&&(q.overflowY==="auto"||q.overflowY==="scroll"||q.overflow==="auto"||q.overflow==="scroll"))break;k=k.parentElement}(!k||k===document.body)&&(k=document.documentElement);const G=k.getBoundingClientRect(),R=I.clientY,B=50,m=12,J=R-G.top,D=G.bottom-R;let Z=!1,ne=0;J<B&&J>0?(Z=!0,ne=-m*(1-J/B)):D<B&&D>0&&(Z=!0,ne=m*(1-D/B)),Z?(A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>{k.scrollTop+=ne,x==="dragging"&&K(I)})):A.current&&(cancelAnimationFrame(A.current),A.current=null)},[l,x]),U=p.useCallback(I=>{if(x==="idle"||x==="animating"||!g||!l.current)return;const k={x:I.clientX,y:I.clientY};if(x==="potential")if(br(j.current,k))M("dragging");else return;K(I);const G=ct(I.clientX,I.clientY,l.current);$.current&&cancelAnimationFrame($.current),$.current=requestAnimationFrame(()=>{const R={x:G.x-ee.current.x,y:G.y-ee.current.y};z(R);const B=ae(g,G.x,G.y);if(B&&S){const m={event:g,currentStartDate:B.startDate,currentEndDate:B.endDate,currentResourceId:B.resourceId,conflicts:B.conflicts};B.hasConflict=!S(m)}if(b(B),B){const m=B.hasCapacity!==!1;P(m),F(g,B)}})},[x,g,l,ae,F,S,K]),C=p.useCallback(async I=>{if(x==="idle"||x==="animating")return;const k={x:I.clientX,y:I.clientY};if(!br(j.current,k)||x==="potential"){M("idle"),L(null),b(null);return}if(!g||!y||!N.current){M("idle"),L(null),b(null);return}if(y.hasCapacity===!1){P(!1),M("animating"),z(H.current),setTimeout(()=>{M("idle"),L(null),b(null),P(!0)},300);return}const R={event:g,originalStartDate:N.current.startDate,originalEndDate:N.current.endDate,originalResourceId:N.current.resourceId,newStartDate:y.startDate,newEndDate:y.endDate,newResourceId:y.resourceId,hasConflict:y.hasConflict,conflicts:y.conflicts};let B=!0;if(o)try{const m=o(R);B=m instanceof Promise?await m:m}catch{B=!1}B?(P(!0),M("idle"),L(null),b(null)):(P(!1),M("animating"),z(H.current),setTimeout(()=>{M("idle"),L(null),b(null),P(!0)},300))},[x,g,y,o,S]);return p.useEffect(()=>{if(x==="potential"||x==="dragging"){const I=G=>U(G),k=G=>C(G);return document.addEventListener("mousemove",I),document.addEventListener("mouseup",k),()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",k)}}else return()=>{}},[x,U,C]),p.useEffect(()=>()=>{$.current&&(cancelAnimationFrame($.current),$.current=null),A.current&&(cancelAnimationFrame(A.current),A.current=null)},[]),p.useEffect(()=>{(x==="idle"||x==="animating")&&($.current&&(cancelAnimationFrame($.current),$.current=null),A.current&&(cancelAnimationFrame(A.current),A.current=null))},[x]),p.useEffect(()=>{(x==="dragging"||x==="potential")&&(x==="dragging"?(M("animating"),z(H.current),setTimeout(()=>{M("idle"),L(null),b(null)},300)):(M("idle"),L(null),b(null)))},[t]),p.useEffect(()=>{if((x==="dragging"||x==="potential")&&g){let I=!1;for(const k of e){for(const G of k.data)if(G.some(R=>R.segmentId===g.segmentId)){I=!0;break}if(I)break}I||(x==="dragging"?(M("animating"),z(H.current),setTimeout(()=>{M("idle"),L(null),b(null)},300)):(M("idle"),L(null),b(null)))}},[e,x,g]),{dragState:x,draggedEvent:g,ghostPosition:V,ghostDimensions:_,dropTarget:y,isValidDrop:T,handleDragStart:W,isDraggable:Y,draggingEventId:(g==null?void 0:g.segmentId)||null,resourceOnly:v}},Js=({data:e,baseData:n,zoom:t,startDate:r,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:i={},gridRef:l,isDragging:u,separatorRowIndices:c=[]})=>{const{enabled:d=!1,isSelectable:h}=i,v=d&&!!o,S=p.useCallback(m=>{let J=0;for(const D of c)D<=m&&J++;return m*fe+J*De},[c]),[x,M]=p.useState("idle"),[g,L]=p.useState(null),[V,z]=p.useState(null),[_,f]=p.useState(null),[y,b]=p.useState(!1),[T,P]=p.useState([]),[H,j]=p.useState(!1),ee=p.useRef(null),$=p.useRef(null),A=p.useRef(null),O=p.useRef(null),N=p.useCallback(()=>{switch(t){case 0:return _e*7;case 1:return be;case 2:return Me;default:return be}},[t]),Y=p.useCallback(m=>{const J=N(),D=Math.floor(m/J),Z=E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return Z.add(D*7,"days").toDate();case 1:return Z.add(D,"days").toDate();case 2:return Z.add(D,"hours").toDate();default:return Z.toDate()}},[t,r,N]),Q=p.useCallback(m=>{const J=xr(m,c),D=Math.floor(J/fe);let Z=0;for(const ne of e){const q=Math.max(ne.data.length,1);if(D<Z+q)return{resourceId:ne.id,resourceIndex:D,resourceLabel:ne.label};Z+=q}return null},[e,c]),te=p.useCallback(m=>{const J=N();return Math.floor(m/J)*J},[N]),ie=p.useCallback((m,J,D,Z=[])=>{const ne=[],ce=(n||e).find(de=>de.id===m),ue=J.getTime(),re=D.getTime();if(ce){const de=ce.data[0],ve=de&&Array.isArray(de)?ce.data.flat():ce.data;for(const he of ve){const X=new Date(he.startDate).getTime(),oe=new Date(he.endDate).getTime();if(ue<oe&&re>X){const le=new Date(Math.max(ue,X)),xe=new Date(Math.min(re,oe)),we=xe.getTime()-le.getTime();ne.push({event:he,conflictStart:le,conflictEnd:xe,overlapDuration:we})}}}for(const de of Z){if(de.resourceId!==m)continue;const ve=de.startDate.getTime(),he=de.endDate.getTime();if(ue<he&&re>ve){const X=new Date(Math.max(ue,ve)),oe=new Date(Math.min(re,he)),le=oe.getTime()-X.getTime(),xe={segmentId:`pending-${de.startDate.getTime()}`,reservationId:`pending-${de.startDate.getTime()}`,startDate:de.startDate,endDate:de.endDate,occupancy:0,title:`New Event (${de.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ne.push({event:xe,conflictStart:X,conflictEnd:oe,overlapDuration:le})}}return ne},[e,n]),ae=p.useCallback(m=>{if(!v||u||!l.current||m.button!==0)return;const J=m.target;if(J.closest("[data-segment-id]")||J.closest("[data-multi-select-ui]"))return;const D=ct(m.clientX,m.clientY,l.current),Z=Q(D.y);if(!Z)return;ee.current={x:m.clientX,y:m.clientY},$.current=Z.resourceIndex;const ne=te(D.x),q=N(),ce=S(Z.resourceIndex);L(D),z(D),f({x:ne,y:ce,width:q,height:fe}),M("selecting")},[v,u,l,Q,te,N,S]),F=p.useCallback(m=>{z(m);const J=N(),D=te((g==null?void 0:g.x)||0),Z=te(m.x),ne=S($.current),q=Math.min(D,Z),ce=Math.max(D,Z)+J;f({x:q,y:ne,width:ce-q,height:fe})},[g,N,te,S]),W=p.useCallback(()=>{O.current&&(cancelAnimationFrame(O.current),O.current=null)},[]),K=p.useCallback((m,J)=>{const D=document.getElementById(Oe);if(!D||!l.current)return;const Z=D.getBoundingClientRect(),ne=60,q=12,ce=m-(Z.left+Ee),ue=Z.right-m;let re=0;ce<ne?re=-q*(1-Math.max(0,ce)/ne):ue<ne&&(re=q*(1-Math.max(0,ue)/ne)),W(),re!==0&&(O.current=requestAnimationFrame(()=>{D.scrollLeft+=re,F(ct(m,J,l.current)),K(m,J)}))},[l,F,W]),U=p.useCallback(m=>{if(x!=="selecting"||!l.current||$.current===null)return;const J=ct(m.clientX,m.clientY,l.current);A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>F(J)),K(m.clientX,m.clientY)},[x,l,F,K]),C=p.useCallback(m=>{if(x!=="selecting")return;if(W(),!l.current||!g||!ee.current){M("idle"),L(null),z(null),f(null);return}const J=ct(m.clientX,m.clientY,l.current),D=Q(g.y);if(!D){M("idle"),L(null),z(null),f(null);return}const Z=Math.min(g.x,J.x),ne=Math.max(g.x,J.x),q=Y(Z),ce=Y(ne),ue=E(ce).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h(D.resourceId,q,ue)){M("idle"),L(null),z(null),f(null);return}const re=ie(D.resourceId,q,ue,T),de=re.length>0,ve={startDate:q,endDate:ue,resourceId:D.resourceId,resourceLabel:D.resourceLabel,zoomLevel:t,hasConflict:de,conflicts:de?re:void 0};if(y)P(he=>[...he,ve]),j(!0);else if(o){const he=o(ve),X=oe=>{oe!=null&&oe.continueMultiSelect&&(b(!0),P([ve]),j(!0))};he instanceof Promise?he.then(X):X(he)}M("idle"),L(null),z(null),f(null),ee.current=null,$.current=null},[x,l,g,Q,Y,h,o,t,y,ie,T,W]),I=p.useCallback(()=>{if(T.length>0&&s){j(!1);const m=s(T),J=D=>{D!=null&&D.continueMultiSelect?j(!0):(P([]),b(!1),j(!1))};m instanceof Promise?m.then(J):J(m);return}P([]),b(!1),j(!1)},[T,s]),k=p.useCallback(()=>{P([]),b(!1),j(!1)},[]),G=p.useCallback(m=>{P(J=>{const D=J.filter((Z,ne)=>ne!==m);return D.length===0&&(b(!1),j(!1)),D})},[]),R=p.useCallback((m,J)=>{P(D=>D.map((Z,ne)=>{if(ne!==m)return Z;const q={...Z,...J},ce=D.filter((re,de)=>de!==m),ue=ie(q.resourceId,q.startDate,q.endDate,ce);return{...q,hasConflict:ue.length>0,conflicts:ue.length>0?ue:void 0}}))},[ie]),B=p.useCallback(m=>{m.key==="Escape"&&(x==="selecting"?(W(),M("idle"),L(null),z(null),f(null),ee.current=null,$.current=null):y&&T.length>0&&(P([]),b(!1),j(!1)))},[x,y,T.length,W]);return p.useEffect(()=>{if(x==="selecting")return document.addEventListener("mousemove",U),document.addEventListener("mouseup",C),document.addEventListener("keydown",B),()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",C),document.removeEventListener("keydown",B)}},[x,U,C,B]),p.useEffect(()=>{if(y&&T.length>0)return document.addEventListener("keydown",B),()=>{document.removeEventListener("keydown",B)}},[y,T.length,B]),p.useEffect(()=>()=>{A.current&&(cancelAnimationFrame(A.current),A.current=null),W()},[W]),p.useEffect(()=>{u&&x==="selecting"&&(W(),M("idle"),L(null),z(null),f(null),ee.current=null,$.current=null)},[u,x,W]),{selectionState:x,selectionStart:g,selectionEnd:V,selectionBox:_,handleGridMouseDown:ae,isEnabled:v,pendingSelections:T,confirmSelections:I,clearSelections:k,removeSelection:G,updateSelection:R,isMultiSelectActive:y,hasUnconfirmedSelections:H}},Qs=w.div`
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
`,ti=p.forwardRef(function({zoom:n,rows:t,data:r,baseData:o,onTileClick:s,onEventDrop:i,onEventDrag:l,draggableConfig:u,onDragStateChange:c,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v,separatorRowIndices:S=[]},x){const M=p.useRef(!1),{handleScrollNext:g,handleScrollPrev:L,date:V,isLoading:z,cols:_,startDate:f}=Le(),y=p.useRef(null),b=p.useRef(null),T=p.useRef(null),P=p.useRef(null),[H,j]=p.useState(!1),ee=Et(),{dragState:$,draggedEvent:A,ghostPosition:O,ghostDimensions:N,dropTarget:Y,isValidDrop:Q,handleDragStart:te,isDraggable:ie,draggingEventId:ae,resourceOnly:F}=qs({data:r,baseData:o||r,zoom:n,startDate:f,onEventDrop:i,onEventDrag:l,draggableConfig:u,gridRef:P,separatorRowIndices:S});p.useEffect(()=>{const re=$==="dragging"||$==="potential";j(re),c&&c(re)},[$,c]);const W=p.useRef(!1),K=p.useRef(V),U=p.useRef(null);p.useEffect(()=>{var ve,he,X;const re=K.current;if(K.current=V,!W.current){W.current=!0;return}const de=V.isAfter(re)?34:-34;(ve=U.current)==null||ve.cancel(),U.current=((X=(he=P.current)==null?void 0:he.animate)==null?void 0:X.call(he,[{transform:`translateX(${de}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:300,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}))??null},[V]);const{selectionState:C,selectionBox:I,handleGridMouseDown:k,pendingSelections:G,confirmSelections:R,clearSelections:B,removeSelection:m,updateSelection:J,isMultiSelectActive:D,hasUnconfirmedSelections:Z}=Js({data:r,baseData:o||r,zoom:n,startDate:f,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v,gridRef:P,isDragging:H,separatorRowIndices:S}),ne=p.useCallback(re=>{re.preventDefault()},[]),q=p.useCallback(re=>{re.preventDefault()},[]),ce=S.length*De,ue=p.useCallback(re=>{const de=hn(),ve=t*fe+1+ce;vr(re,de,ve),xs(re,n,t,_,f,ee,S)},[_,f,t,n,ee,S,ce]);return p.useEffect(()=>{if(!y.current)return;const re=y.current.getContext("2d");if(!re)return;const de=()=>ue(re);return window.addEventListener("resize",de),()=>window.removeEventListener("resize",de)},[ue]),p.useEffect(()=>{const re=y.current;if(!re)return;re.style.letterSpacing="1px";const de=re.getContext("2d");de&&ue(de)},[V,t,n,ue]),p.useEffect(()=>{if(!b.current)return;const re=new IntersectionObserver(de=>{de[0].isIntersecting&&!M.current&&(M.current=!0,g(),setTimeout(()=>{M.current=!1},1e3))},{root:document.getElementById(Oe)});return re.observe(b.current),()=>{re.disconnect()}},[g]),p.useEffect(()=>{if(!T.current)return;const re=new IntersectionObserver(de=>{de[0].isIntersecting&&!M.current&&(M.current=!0,L(),setTimeout(()=>{M.current=!1},1e3))},{root:document.getElementById(Oe),rootMargin:`0px 0px 0px -${Ee}px`});return re.observe(T.current),()=>{re.disconnect()}},[L]),a.jsxs(Qs,{id:ir,children:[a.jsxs(Rs,{ref:re=>{typeof x=="function"?x(re):x&&(x.current=re),P.current=re},onMouseDown:k,style:{cursor:d?"crosshair":"default"},children:[a.jsx(wr,{position:"left",ref:T}),a.jsx(Mn,{isLoading:z,position:"left"}),a.jsx(ei,{ref:y,onDragStart:ne,onDragOver:q,style:{userSelect:$==="dragging"?"none":"auto"}}),a.jsx(wl,{zoom:n,startDate:f}),a.jsx(_c,{data:r,zoom:n,onTileClick:s,onDragStart:te,isDraggable:ie,draggingEventId:ae,separatorRowIndices:S}),a.jsx(wr,{ref:b,position:"right"}),a.jsx(Mn,{isLoading:z,position:"right"}),($==="dragging"||$==="animating")&&a.jsx(nl,{draggedEvent:A,ghostPosition:O,ghostDimensions:N,dropTarget:Y,isValidDrop:Q,dragState:$,zoom:n,data:r,resourceOnly:F,separatorRowIndices:S}),a.jsx(sl,{selectionBox:I,isSelecting:C==="selecting"}),D&&G.length>0&&a.jsx(xl,{selections:G,data:r,zoom:n,startDate:f,onRemove:m,onUpdate:J,separatorRowIndices:S})]}),D&&Z&&G.length>0&&a.jsx(hl,{selections:G,onConfirm:R,onClear:B,onRemove:m})]})}),Sr=e=>{const n=E.duration(e,"seconds"),t=n.hours(),r=n.minutes();return{hours:t,minutes:r}},Cr=e=>{let n=0,t=0,r=0;return e.forEach(o=>{n+=o.minutes;const s=Math.floor(n/Se);t+=o.hours+s,r+=n%Se,r>=Se&&(t++,r-=Se)}),{hours:t,minutes:r}},Mr=(e,n)=>{let t=ar;switch(n){case 0:t=us;break;case 1:t=ar;break;case 2:t=1;break}const r=()=>{let s=t-e.hours-1,i=Se-e.minutes;return i===Se&&(s++,i=0),{hours:Math.max(0,s),minutes:s<0?0:i}},o=()=>{const s=e.hours-t,i=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:i}};return{free:r(),overtime:o()}},ni=(e,n,t)=>{const r=n.isoWeek(),o=e.map(c=>{const d=E(c.startDate).isoWeek(),h=E(c.startDate).isoWeekday(),v=E(c.endDate).isoWeek(),S=E(c.endDate).isoWeekday(),{hours:x,minutes:M}=Sr(c.occupancy);if(r===d){const g=(Ze+1-h)*x,L=(Ze+1-h)*M;return{hours:Math.max(0,g),minutes:L}}else if(r===v){const g=S>Ze?Ze*x:S*x,L=S>Ze?Ze*M:S*M;return{hours:g,minutes:L}}else if(E(n).isBetween(c.startDate,c.endDate))return{hours:Ze*x,minutes:Ze*M};return{hours:0,minutes:0}}),{hours:s,minutes:i}=Cr(o),{free:l,overtime:u}=Mr({hours:s,minutes:i},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,i)},free:l,overtime:u}},ri=(e,n,t,r)=>{const o=n.isoWeekday(),s=e.map(d=>{const{hours:h,minutes:v}=Sr(d.occupancy);return o<=(r?7:5)?{hours:h,minutes:v}:{hours:0,minutes:0}}),{hours:i,minutes:l}=Cr(s),{free:u,overtime:c}=Mr({hours:i,minutes:l},t);return{taken:{hours:Math.max(0,i),minutes:Math.max(0,l)},free:u,overtime:c}},oi=(e,n)=>{let t=0;e.forEach(l=>{const u=E(l.startDate).hour(),c=E(l.endDate).hour(),d=n.hour(),h=E(l.endDate).minute(),v=E(l.startDate).minute();u<d&&c>d?t+=Se:u===d&&c===d&&v&&h?t+=h?h-v:Se-v:u===d&&c>=d?t+=v?Se-v:Se:c===d&&h&&(t+=h)});const r=Math.floor(t/Se),o=t%Se,s=r||o?0:1,i=r?0:o?Se-o:0;return{taken:{hours:r,minutes:o},free:{hours:s,minutes:i},overtime:{hours:0,minutes:0}}},si=(e,n,t,r,o=!1)=>{if(n<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(i=>r===1?E(t).isBetween(i.startDate,i.endDate,"day","[]"):r===2?E(t).isBetween(i.startDate,i.endDate,"hour","[]"):E(i.startDate).isBetween(E(t),E(t).add(6,"days"),"day","[]")||E(t).isBetween(E(i.startDate),E(i.endDate),"day","[]"));switch(r){case 1:return ri(s,t,r,o);case 2:return oi(s,t);default:return ni(s,t,r)}},ii=(e,n,t,r,o,s,i=!1)=>{let l="weeks",u;switch(s){case 0:l="weeks",u=rt;break;case 1:l="days",u=be;break;case 2:l="hours",u=Me;break}const c=Math.ceil(s===2?(t.x-.5*u)/u:t.x/u),d=E(`${n.year}-${n.month+1}-${n.dayOfMonth}T${n.hour}:00:00`).add(c-1,l),h=Math.ceil(t.y/fe),v=r.findIndex((L,V,z)=>z.slice(0,V+1).reduce((f,y)=>f+y,0)>=h),S=s===2?(c+1)*u:c*u,x=(h-1)*fe+fe,M=si(o[v],v,d,s,i),g=E(e.startDate).isSame(E(e.endDate),"day");return{coords:{x:S,y:x},mouseCoords:t,resourceIndex:v,disposition:M,reservationData:{startTime:E(e.startDate).format("hh:mm A"),startDate:E(e.startDate).format("MMM D, YYYY"),endTime:E(e.endDate).format("hh:mm A"),endDate:E(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,isOneDayEvent:g,passengers:e.totalPassengers}}};function ai(e,n){if(e.length<=1)return[];if(e.length<=n){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const r=Math.min(n-1,t.length);return t.slice(0,r).map(o=>o.index).sort((o,s)=>o-s)}function ci(e){const n={categories:[],capacityToCategoryId:new Map},t=new Set;for(const d of e)!d.isSubcontract&&d.capacity!=null&&t.add(d.capacity);const r=[...t].sort((d,h)=>d-h);if(r.length<2)return n;const o=Math.min(5,r.length),s=ai(r,o),i=[];let l=0;for(const d of s)i.push({min:r[l],max:r[d-1],values:r.slice(l,d)}),l=d;i.push({min:r[l],max:r[r.length-1],values:r.slice(l)});const u=[],c=new Map;return i.forEach((d,h)=>{const v="__auto_cat_"+h,S=d.min===d.max?d.min+" pax":d.min+"-"+d.max+" pax";u.push({id:v,name:S,minPassengers:d.min,maxPassengers:d.max});for(const x of d.values)c.set(x,v)}),{categories:u,capacityToCategoryId:c}}const li=(e,n,t,r)=>{const o=[];let s=0,i=[],l=0;return n.length>r?(n.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=r&&(o.push(i),s+=i.length,i=[],l=0),l++,i.push(d)}),t.slice(s).length<=r&&(i=[],n.slice(s).forEach((u,c)=>{const d={id:e[c+s].id,label:e[c+s].label,data:u,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};i.push(d),c===n.length-s-1&&o.push(i)})),o):(n.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};i.push(d)}),o.push(i),o)};var pn={},di={get exports(){return pn},set exports(e){pn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r){r.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(di);const ui=pn;var gn={},fi={get exports(){return gn},set exports(e){gn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r){r.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(fi);const hi=gn,pi=e=>{const n=[];for(const t of e){let r=!1;if(n.length)for(const o of n){let s=!1;for(let i=0;i<o.length;i++){const l=E(t.startDate).startOf("day"),u=E(t.endDate).startOf("day"),c=E(o[i].startDate).startOf("day"),d=E(o[i].endDate).startOf("day");if(l.isBetween(c,d,null,"[]")||u.isBetween(c,d,null,"[]")||l.isBefore(c,"minute")&&u.isAfter(d,"minute")||l.isAfter(c,"minute")&&u.isBefore(d,"minute")){s=!0;break}}if(!s){o.push(t),r=!0;break}}r||n.push([t])}return n};E.extend(ui),E.extend(hi);const kr=new WeakMap,gi=e=>{const n=kr.get(e);if(n)return n;const t=[...e].sort((o,s)=>{const i=E(o.startDate),l=E(s.startDate),u=i.startOf("day").diff(l.startOf("day"),"day");return u!==0?u:i.diff(l)}),r=pi(t);return kr.set(e,r),r},mi=e=>{const n=[[],[]],[t,r]=e.reduce((o,s)=>{const i=gi(s.data);return o[0].push(i),o[1].push(Math.max(i.length,1)),o},n);return{projectsPerPerson:t,rowsPerPerson:r}},yi=e=>e?e.map(n=>n.data.length).reduce((n,t)=>n+Math.max(t,1),0):0,vi=e=>{const{recordsThreshold:n}=Le(),[t,r]=p.useState(0),[o,s]=p.useState(0),i=p.useRef(null);p.useEffect(()=>{i.current=document.getElementById(Oe)},[]);const{projectsPerPerson:l,rowsPerPerson:u}=p.useMemo(()=>mi(e),[e]),c=p.useMemo(()=>li(e,l,u,n),[e,l,n,u]),d=p.useCallback(()=>{c[o].length&&i.current&&(i.current.scroll({top:0}),r(g=>g+c[Math.max(o,0)].length),s(g=>Math.min(g+1,c.length-1)),window.scroll({top:0}))},[o,c]),h=p.useCallback(()=>{c[o].length&&(r(g=>Math.max(g-c[o-1].length,0)),s(g=>Math.max(g-1,0)))},[o,c]),v=p.useCallback(()=>{r(0),s(0)},[]),S=t+c[o].length,x=p.useMemo(()=>u.slice(t,S),[S,u,t]),M=p.useMemo(()=>l.slice(t,S),[S,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:M,rowsPerItem:x,totalRowsPerPage:yi(c[o]),next:d,previous:h,reset:v}};var mn={},xi={get exports(){return mn},set exports(e){mn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var r=["th","st","nd","rd"],o=t%100;return"["+t+(r[(o-20)%10]||r[o]||r[0])+"]"}}})})(xi);const bi=mn;var yn={},wi={get exports(){return yn},set exports(e){yn=e}};(function(e,n){(function(t,r){e.exports=r(Ue)})(Ce,function(t){function r(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var o=r(t);function s(v){return v%10<5&&v%10>1&&~~(v/10)%10!=1}function i(v,S,x){var M=v+" ";switch(x){case"m":return S?"minuta":"minutę";case"mm":return M+(s(v)?"minuty":"minut");case"h":return S?"godzina":"godzinę";case"hh":return M+(s(v)?"godziny":"godzin");case"MM":return M+(s(v)?"miesiące":"miesięcy");case"yy":return M+(s(v)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),u="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,d=function(v,S){return c.test(S)?l[v.month()]:u[v.month()]};d.s=u,d.f=l;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:d,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(v){return v+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})(wi);const Si=yn;var vn={},Ci={get exports(){return vn},set exports(e){vn=e}};(function(e,n){(function(t,r){e.exports=r(Ue)})(Ce,function(t){function r(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=r(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(u,c,d){var h=s[d];return Array.isArray(h)&&(h=h[c?0:1]),h.replace("%d",u)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return o.default.locale(l,null,!0),l})})(Ci);const Mi=vn;var xn={},ki={get exports(){return xn},set exports(e){xn=e}};(function(e,n){(function(t,r){e.exports=r(Ue)})(Ce,function(t){function r(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=r(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),i="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,u=function(d,h){return l.test(h)?s[d.month()]:i[d.month()]};u.s=i,u.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:u,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(d){return d+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(ki);const $i=xn;var bn={},Di={get exports(){return bn},set exports(e){bn=e}};(function(e,n){(function(t,r){e.exports=r(Ue)})(Ce,function(t){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var o=r(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(i){return i+"º"}};return o.default.locale(s,null,!0),s})})(Di);const Ei=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:bi},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:Si},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:bn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:$i},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:Mi}];class _i{constructor(){to(this,"locales",Ei)}getLocales(){return this.locales}addLocales(n){this.locales.push(n)}}const Pt=new _i,$r=p.createContext({localesData:Pt.getLocales(),currentLocale:Pt.getLocales()[0],setCurrentLocale:()=>{}}),Ti=({children:e,lang:n,translations:t})=>{const[r,o]=p.useState("en"),s=Pt.getLocales(),i=p.useCallback(()=>{const h=s.find(v=>v.id===r);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&E.locale(h.dayjsTranslations),h||s[0]},[r,s]),[l,u]=p.useState(i()),c=h=>{localStorage.setItem("locale",h.translateCode),u(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(S=>S.id===h.id)||Pt.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),v=n??h??"en";localStorage.setItem("locale",v),o(v),u(i())},[i,n]);const{Provider:d}=$r;return a.jsx(d,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},Ne=()=>p.useContext($r).currentLocale.lang,Ai=e=>se.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},se.createElement("defs",null,se.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),se.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},se.createElement("stop",{offset:.47,stopColor:"#ccc"}),se.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),se.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),se.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),se.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),se.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),se.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),se.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),se.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),se.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),se.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),se.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Pi=w.div`
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
`,wn={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:vt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function Fi(e,n){const t=n?[...n].sort((l,u)=>l.maxPassengers-u.maxPassengers):[],r=[];for(const l of t){const u=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);u.length>0&&r.push({type:"category",category:l,items:u})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?r.push({type:"uncategorized",items:s}):s.length>0&&r.push({type:"uncategorized",items:s});const i=e.filter(l=>l.isSubcontract);return i.length>0&&r.push({type:"subcontract",items:i}),r}const Hi=({data:e,baseData:n,categories:t,onTileClick:r,onItemClick:o,toggleTheme:s,topBarWidth:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v})=>{const[S,x]=p.useState(wn),[M,g]=p.useState(e),[L,V]=p.useState(!1),[z,_]=p.useState(!1),[f,y]=p.useState(""),[b,T]=p.useState(new Set),{zoom:P,startDate:H,isLoading:j,config:{includeTakenHoursOnWeekendsInDayView:ee,showTooltip:$,showThemeToggle:A}}=Le(),O=p.useRef(null),N=p.useRef(null),[Y,Q]=p.useState(124),{page:te,projectsPerPerson:ie,rowsPerItem:ae,currentPageNum:F,pagesAmount:W,next:K,previous:U,reset:C}=vi(M),{effectiveCategories:I,effectivePage:k}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:te};const X=ci(te);if(X.categories.length===0)return{effectiveCategories:void 0,effectivePage:te};const oe=te.map(le=>{if(le.isSubcontract||le.capacity==null)return le;const xe=X.capacityToCategoryId.get(le.capacity);return xe?{...le,categoryId:xe}:le});return{effectiveCategories:X.categories,effectivePage:oe}},[t,te]),G=p.useCallback(X=>{T(oe=>{const le=new Set(oe);return le.has(X)?le.delete(X):le.add(X),le})},[]),R=p.useMemo(()=>{const X=[],oe=I?[...I].sort((le,xe)=>le.maxPassengers-xe.maxPassengers):[];for(const le of oe)k.some(xe=>!xe.isSubcontract&&xe.categoryId===le.id)&&X.push(le.id);return k.some(le=>le.isSubcontract)&&X.push("__subcontract__"),X},[I,k]),B=p.useCallback(()=>{T(new Set)},[]),m=p.useCallback(()=>{T(new Set(R))},[R]),{visiblePage:J,visibleRowsPerItem:D,visibleTotalRows:Z,visibleProjectsPerPerson:ne,separatorRowIndices:q}=p.useMemo(()=>{const X=Fi(k,I),oe=((I==null?void 0:I.length)??0)>0,le=new Map;te.forEach((ke,Be)=>le.set(ke.id,Be));const xe=[],we=[],We=[],ze=[];let ut=0;for(const ke of X)if(ke.type==="subcontract"||ke.type==="category"&&oe){const ft=ke.type==="subcontract"?"__subcontract__":ke.category.id,ht=b.has(ft);if(ze.push(ut),!ht)for(const Ke of ke.items){const Yt=le.get(Ke.id)??0,It=ae[Yt];xe.push(Ke),we.push(It),We.push(ie[Yt]),ut+=It}}else for(const ft of ke.items){const ht=le.get(ft.id)??0,Ke=ae[ht];xe.push(ft),we.push(Ke),We.push(ie[ht]),ut+=Ke}const En=we.reduce((ke,Be)=>ke+Be,0);return{visiblePage:xe,visibleRowsPerItem:we,visibleTotalRows:En,visibleProjectsPerPerson:We,separatorRowIndices:ze}},[k,I,te,b,ae,ie]),ce=p.useRef(it((X,oe,le,xe,we,We)=>{if(!O.current)return;const{tile:ze,segmentId:ut}=de(X);if(!ut||!ze){V(!1),x(wn);return}const En=re(ut,oe),ke=O.current.getBoundingClientRect(),Be=ze.getBoundingClientRect(),ft={x:X.clientX-ke.left,y:X.clientY-ke.top},ht={x:X.clientX-ke.left,y:X.clientY-ke.top},Ke={x:Be.left-ke.left,y:Be.top-ke.top,width:Be.width,height:Be.height},{coords:{x:Yt,y:It},resourceIndex:Sl,disposition:Cl,reservationData:Ml}=ii(En,le,ft,xe,we,We,ee);x({coords:{x:Yt,y:It},mouseCoords:ht,resourceIndex:Sl,disposition:Cl,reservationData:Ml,tileBounds:Ke}),V(!0)},4)),ue=p.useRef(it((X,oe)=>{C(),g(X.map(le=>({...le,data:le.data.filter(xe=>{const{title:we,description:We,subtitle:ze}=xe;return(we==null?void 0:we.toLowerCase().includes(oe.toLowerCase()))||(ze==null?void 0:ze.toLowerCase().includes(oe.toLowerCase()))||(We==null?void 0:We.toLowerCase().includes(oe.toLowerCase()))})})).filter(le=>le.data.length>0))},500)),re=(X,oe)=>{if(X)return oe.flatMap(le=>le.data).find(le=>le.segmentId===X)},de=X=>{if(!X.target)return{tile:null,segmentId:null};const oe=X.target.closest("[data-segment-id]");return oe?{tile:oe,segmentId:oe.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},ve=X=>{const oe=X.target.value;y(oe),ue.current.cancel(),oe?ue.current(e,oe):(C(),g(e))},he=p.useCallback(()=>{ce.current.cancel(),V(!1),x(wn)},[]);return p.useEffect(()=>{const X=le=>ce.current(le,e,H,D,ne,P),oe=O.current;if(oe)return oe.addEventListener("mousemove",X),oe.addEventListener("mouseleave",he),()=>{oe.removeEventListener("mousemove",X),oe.removeEventListener("mouseleave",he)}},[ce,he,ne,D,H,P,e]),p.useEffect(()=>{f?(ue.current.cancel(),ue.current(e,f)):g(e)},[e,f]),p.useLayoutEffect(()=>{const X=N.current;if(!X)return;const oe=()=>Q(X.offsetHeight);oe();const le=new ResizeObserver(oe);return le.observe(X),()=>le.disconnect()},[]),a.jsxs(Ii,{children:[a.jsx(Na,{headerHeight:Y,data:k,categories:I,pageNum:F,pagesAmount:W,rows:ae,onLoadNext:K,onLoadPrevious:U,searchInputValue:f,onSearchInputChange:ve,onItemClick:o,collapsedGroups:b,onToggleGroup:G,allGroupIds:R,onExpandAll:B,onCollapseAll:m}),a.jsxs(Li,{children:[a.jsx(uc,{ref:N,zoom:P,topBarWidth:i,showThemeToggle:A,toggleTheme:s}),e.length?a.jsx(ti,{data:J,baseData:n||e,zoom:P,rows:Z,ref:O,onTileClick:r,onEventDrop:l,onEventDrag:u,draggableConfig:c,onDragStateChange:_,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v,separatorRowIndices:q}):a.jsx(Ni,{width:i,children:j?a.jsx(Mn,{isLoading:j,position:"left"}):a.jsx(Yi,{})}),$&&L&&!z&&(S==null?void 0:S.resourceIndex)>-1&&a.jsx(Vc,{tooltipData:S})]})]})},Wi=w.div`
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
`,lt=({children:e,sw:n=2})=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:e}),Ui=()=>{var n,t;const e=document.getElementById(Oe);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(n=e==null?void 0:e.requestFullscreen)==null||n.call(e)},Ki=()=>{const{config:e,date:n,zoom:t,handleGoNext:r,handleGoPrev:o,handleGoToday:s,setZoom:i,goToDate:l,toggleDisplayActiveUnits:u}=Le();Ne();const{filterButtonState:c=-1}=e,d=()=>{var h;(h=document.querySelector(`#${Oe} input[placeholder]`))==null||h.focus()};return a.jsxs(Wi,{width:0,children:[a.jsxs(Sn,{$at:"start",children:[a.jsx(ji,{children:n.locale(E.locale()).format("MMMM YYYY")}),a.jsxs(Zi,{children:[a.jsx("button",{className:t===2?"on":"",onClick:()=>i(2),children:"Día"}),a.jsx("button",{className:t===0?"on":"",onClick:()=>i(0),children:"Semana"}),a.jsx("button",{className:t===1?"on":"",onClick:()=>i(1),children:"Mes"})]}),a.jsxs(Vi,{children:[a.jsxs(lt,{children:[a.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),a.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),a.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",a.jsx("input",{type:"date",onChange:h=>h.target.value&&l(h.target.value)})]})]}),a.jsx(Sn,{$at:"center",children:a.jsxs(zi,{children:[a.jsx(Dr,{onClick:o,"aria-label":"Anterior",children:a.jsx(lt,{children:a.jsx("path",{d:"m15 18-6-6 6-6"})})}),a.jsx(Bi,{onClick:s,children:"Hoy"}),a.jsx(Dr,{onClick:r,"aria-label":"Siguiente",children:a.jsx(lt,{children:a.jsx("path",{d:"m9 18 6-6-6-6"})})})]})}),a.jsxs(Sn,{$at:"end",children:[a.jsxs(Gi,{onClick:d,children:[a.jsxs(lt,{children:[a.jsx("circle",{cx:"11",cy:"11",r:"7"}),a.jsx("path",{d:"m20 20-3.2-3.2"})]}),"Buscar",a.jsx("span",{className:"k",children:"⌘K"})]}),c>=0&&a.jsxs(Er,{$primary:!!c,onClick:u,children:[a.jsx(lt,{children:a.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&a.jsx(Xi,{children:c})]}),a.jsxs(Er,{onClick:Ui,children:[a.jsx(lt,{children:a.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]})]})]})},qi={add:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>se.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>se.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>se.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>se.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>se.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>se.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>se.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>se.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},se.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),se.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),se.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Cn=({iconName:e,width:n,height:t,fill:r,className:o})=>{const{colors:s}=Et(),i=qi[e];return i?a.jsx(i,{style:{transition:".5s ease"},fill:r??s.accent,width:n,height:t,className:o}):null},Ji=(e,n,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[n];w.button`
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
`,la=()=>{const{date:e,zoom:n,data:t,goToDate:r}=Le(),o=Ne(),s=p.useRef(null),[i,l]=p.useState(null),u=p.useMemo(()=>Array.from({length:12},(_,f)=>E().month(f).format("MMM").toUpperCase()),[o]),c=e.year(),d=p.useMemo(()=>E(new Date(c,0,1)),[c]),h=p.useMemo(()=>E(new Date(c+1,0,1)).diff(d,"day"),[c,d]),v=_=>_.diff(d,"day")/h*100,S=p.useMemo(()=>{const _=Math.ceil(h/7),f=new Array(_).fill(0),y=new Array(_).fill(0);for(const T of t??[])for(const P of T.data??[]){const H=E(P.startDate);if(H.year()!==c)continue;const j=Math.floor(H.diff(d,"day")/7);if(j<0||j>=_)continue;f[j]+=1;const ee=P.readiness==="sin_chofer"?2:P.readiness==="sin_avisar"?1:0;ee>y[j]&&(y[j]=ee)}const b=Math.max(1,...f);return f.map((T,P)=>({h:T/b*100,sev:y[P]}))},[t,c,d,h]),x=E(),M=x.year()===c?v(x):null,g=n===1?un(1)/2:n===0?un(0)*7/2:.5,L=Math.max(0,v(e.subtract(g,"day"))),V=Math.min(100,v(e.add(g,"day")))-L,z=_=>{var b;const f=(b=s.current)==null?void 0:b.getBoundingClientRect();if(!f)return null;const y=Math.min(1,Math.max(0,(_-f.left)/f.width));return{f:y,d:d.add(Math.round(y*h),"day")}};return a.jsxs(Qi,{children:[a.jsxs(Ri,{children:["Navegar",a.jsx("br",{}),"por fecha"]}),a.jsxs(ea,{ref:s,onClick:_=>{const f=z(_.clientX);f&&r(f.d.toDate())},onMouseMove:_=>{const f=z(_.clientX);f&&l({left:f.f*100,label:`${f.d.date()} ${u[f.d.month()]}`})},onMouseLeave:()=>l(null),children:[a.jsx(ta,{children:u.map((_,f)=>a.jsx("span",{style:{left:`${v(E(new Date(c,f,1)))}%`},children:_},f))}),u.map((_,f)=>f===0?null:a.jsx(na,{style:{left:`${v(E(new Date(c,f,1)))}%`}},f)),a.jsx(ra,{children:S.map((_,f)=>a.jsx(oa,{$sev:_.sev,style:{height:`${_.h}%`}},f))}),a.jsx(ia,{style:{left:`${L}%`,width:`${V}%`}}),M!==null&&a.jsx(sa,{style:{left:`${M}%`},children:a.jsx("span",{children:"HOY"})}),i&&a.jsxs(a.Fragment,{children:[a.jsx(aa,{style:{left:`${i.left}%`}}),a.jsx(ca,{style:{left:`${i.left}%`},children:i.label})]})]})]})},da=w.div`
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
`,fa=({data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,schedulerRef:d,onTimeRangeSelect:h,onMultiTimeRangeSelect:v,clickToAddConfig:S})=>{const{goToDate:x,handleGoToday:M,zoomIn:g,zoomOut:L,zoom:V}=Le();return p.useImperativeHandle(d,()=>({goToDate:x,goToToday:M,setZoom:z=>{if(!mr(z))return;const _=z-V;if(_>0)for(let f=0;f<_;f++)g();else for(let f=0;f<Math.abs(_);f++)L()}}),[x,M,V,g,L]),a.jsx(Hi,{data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,onTimeRangeSelect:h,onMultiTimeRangeSelect:v,clickToAddConfig:S})},ha=p.forwardRef(function({data:n,categories:t,baseData:r,config:o,startDate:s,onRangeChange:i,onTileClick:l,handleToggleDisplayActiveUnits:u,onClearFilterData:c,onItemClick:d,isLoading:h,onEventDrop:v,onEventDrag:S,draggableConfig:x,onTimeRangeSelect:M,onMultiTimeRangeSelect:g,clickToAddConfig:L},V){var O;const z=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),_=p.useRef(null),f=p.useRef(null),[y,b]=p.useState((O=_.current)==null?void 0:O.clientWidth),T=p.useMemo(()=>E(s),[s]),[P,H]=p.useState(z.defaultTheme??"light"),j=()=>{H(P==="light"?"dark":"light")},ee=P==="light"?os:ss,$=z.theme?z.theme[ee.mode]:{},A={...ee,colors:{...ee.colors,...$}};return p.useImperativeHandle(V,()=>({goToDate:N=>{var Y;return(Y=f.current)==null?void 0:Y.goToDate(N)},goToToday:()=>{var N;return(N=f.current)==null?void 0:N.goToToday()},setZoom:N=>{var Y;return(Y=f.current)==null?void 0:Y.setZoom(N)}}),[]),p.useEffect(()=>{const N=()=>{_.current&&b(_.current.clientWidth)};return N(),window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]),_.current,a.jsxs(a.Fragment,{children:[a.jsx(rs,{}),a.jsx(es,{theme:A,children:a.jsx(Ti,{lang:z.lang,translations:z.translations,children:a.jsxs(Us,{data:n,isLoading:!!h,config:z,onRangeChange:i,defaultStartDate:T,handleToggleDisplayActiveUnits:u,onClearFilterData:c,children:[a.jsx(da,{showScroll:!!n.length,$footer:z.showOverview!==!1&&!!n.length,id:Oe,ref:_,children:a.jsx(ua,{children:a.jsx(fa,{data:n,baseData:r,categories:t,onTileClick:l,topBarWidth:y??0,onItemClick:d,toggleTheme:j,onEventDrop:v,onEventDrag:S,draggableConfig:x,schedulerRef:f,onTimeRangeSelect:M,onMultiTimeRangeSelect:g,clickToAddConfig:L})})}),z.showOverview!==!1&&!!n.length&&a.jsx(la,{})]})})})]})}),pa=w.div`
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
  min-height: ${fe}px;
  height: calc(${fe}px * ${({rows:e})=>e});
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
`,Ar=({label:e,count:n,isCollapsed:t,onToggle:r,variant:o="category"})=>a.jsxs(Oa,{$variant:o,onClick:r,title:e,children:[a.jsx(La,{$collapsed:t,children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),a.jsx(Ya,{$variant:o,children:e}),a.jsx(Ia,{$variant:o,children:n})]}),Na=({data:e,categories:n,headerHeight:t,rows:r,onLoadNext:o,onLoadPrevious:s,pageNum:i,pagesAmount:l,searchInputValue:u,onSearchInputChange:c,onItemClick:d,collapsedGroups:h,onToggleGroup:v,allGroupIds:S,onExpandAll:x,onCollapseAll:M})=>{const[g,L]=p.useState(!1),V=Ne(),z=()=>L($=>!$),_=n?[...n].sort(($,A)=>$.maxPassengers-A.maxPassengers):[],f=_.length>0,y=S.length>0,b=y&&h.size===S.length;y&&h.size;const T=e.filter($=>$.isSubcontract),P=V.subcontract??"Subcontract",H=$=>{const A=e.indexOf($);return a.jsx(Pa,{id:$.id,item:$.label,rows:r[A],onItemClick:d,isSubcontract:$.isSubcontract},$.id)},j=$=>{const A=e.filter(Y=>!Y.isSubcontract&&Y.categoryId===$.id);if(A.length===0)return null;const O=h.has($.id),N=$.name;return a.jsxs("div",{children:[a.jsx(Ar,{label:N,count:A.length,isCollapsed:O,onToggle:()=>v($.id),variant:"category"}),!O&&A.map(H)]},$.id)},ee=e.filter($=>!$.isSubcontract&&(!$.categoryId||!f));return a.jsxs(va,{children:[a.jsxs(xa,{$height:t,children:[a.jsxs(ba,{children:[a.jsxs(Sa,{isFocused:g,children:[a.jsx(wa,{placeholder:V.search,value:u,onChange:c,onFocus:z,onBlur:z}),a.jsx(Cn,{iconName:"search"})]}),y&&a.jsx(Ca,{title:b?"Expand all":"Collapse all",onClick:b?x:M,$allCollapsed:b,children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:b?a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),a.jsx(_r,{intent:"previous",isVisible:i!==0,onClick:s,icon:a.jsx(Cn,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:i,pagesAmount:l})]}),f?_.map(j):ee.map(H),f&&ee.length>0&&ee.map(H),T.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(Ar,{label:P,count:T.length,isCollapsed:h.has("__subcontract__"),onToggle:()=>v("__subcontract__"),variant:"subcontract"}),!h.has("__subcontract__")&&T.map(H)]}),a.jsx(_r,{intent:"next",isVisible:i!==l-1,onClick:o,icon:a.jsx(Cn,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:i,pagesAmount:l})]})},Fa=w.div`
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
`,Ha=Dt`
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
`,Mn=({isLoading:e,position:n})=>e?a.jsx(Fa,{position:n,children:a.jsx(Wa,{})}):null,Fe=(e,n)=>{const{ctx:t,x:r,y:o,width:s,height:i,textYPos:l,label:u,font:c,isBottomRow:d,fillStyle:h,topText:v,bottomText:S,strokeStyle:x,labelBetweenCells:M}=e;if(t.beginPath(),t.strokeStyle=x??n.colors.border,t.setLineDash([]),u&&c&&l){t.fillStyle=n.colors.gridBackground,t.fillRect(r,o,s,i),M?(t.moveTo(r,o),t.lineTo(r+s,o),t.stroke(),t.moveTo(r,o+i),t.lineTo(r+s,o+i),t.stroke(),t.moveTo(r+s/2,o+i),t.lineTo(r+s/2,o+i-5),t.stroke()):t.strokeRect(r+.5,o+.5,s,i),t.font=c;const g=r+s/2-t.measureText(u).width/2;t.textBaseline="middle",t.fillStyle=n.colors.accent,t.fillText(u,g,l)}if(d&&h&&v&&S){t.fillStyle=h,t.fillRect(r,o,s,i),t.strokeRect(r+.5,o+.5,s,i),t.font=v.font;const g=r+s/2-t.measureText(v.label).width/2;t.fillStyle=v.color,t.fillText(v.label,g,v.y),t.font=S.font;const L=r+s/2-t.measureText(S.label).width/2;t.fillStyle=S.color,t.fillText(S.label,L,S.y)}},kn=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return t?o==="bottomRow"?n.colors.placeholder:n.colors.accent:r?o==="bottomRow"?n.colors.placeholder:n.colors.textPrimary:n.colors.placeholder},za=(e,n,t,r)=>{const o=nt-Xe/as,s=nt-Xe/cs,i=Ie+tt;let l=0;for(let u=0;u<n;u++){const c=hr(E(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(u,"days")),d=c.isCurrentDay;if(Fe({ctx:e,x:l,y:i,width:be,height:Xe,isBottomRow:!0,fillStyle:d?r.colors.today+"26":c.isBusinessDay?r.colors.gridBackground:r.colors.primary,topText:{y:o,label:d?"":c.dayName.toUpperCase(),font:Pe.bottomRow.name,color:kn({isCurrent:!1,isBusinessDay:c.isBusinessDay},r)},bottomText:{y:s,label:`${c.dayOfMonth}`,font:d?`700 10px ${Ae}`:Pe.bottomRow.number,color:d?r.colors.today:kn({isCurrent:!1,isBusinessDay:c.isBusinessDay,variant:"bottomRow"},r)}},r),d){const S=l+be/2,x=o-13/2;e.save(),e.fillStyle=r.colors.today,e.beginPath(),e.roundRect?e.roundRect(S-30/2,x,30,13,5):e.rect(S-30/2,x,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Ae}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",S,x+13/2+.5),e.restore()}l+=be}},Ba=(e,n,t,r)=>{let o=-(t.dayOfMonth-1)*_e;const s=Ie;let l=t.month;for(let u=0;u<n;u++){l>=Jt&&(l=0);const c=fr(t,u)*_e;Fe({ctx:e,x:o,y:s,width:c,height:tt,textYPos:cr,label:E().month(l).format("MMMM").toUpperCase(),font:Pe.bottomRow.number},r),o+=c,l++}},ja=(e,n,t)=>{let o=0,s=0,i=E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month();o=-n.dayOfMonth*be+be;for(let l=0;l<Jt;l++)i>Jt-1&&(i=0),s=E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(l,"months").daysInMonth()*be,Fe({ctx:e,x:o,y:0,width:s,height:Ie,textYPos:Rt,label:E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,font:Pe.topRow},t),o+=s,i++},Za=(e,n,t,r)=>{const o=7*be,s=Ie,i=e.canvas.width/o+o,l=n.weekOfYear;let u=0;for(let c=0;c<i;c++){const d=E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).day();let h=(l+c)%sr;h<=0&&(h+=sr),d!==1&&c===0&&(u=-d*be+be),Fe({ctx:e,x:u,y:s,width:o,height:tt,textYPos:cr,label:`${t.toUpperCase()} ${h}`,font:Pe.middleRow},r),u+=o}},Va=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return o==="yearView"?t?n.colors.tertiary:n.colors.gridBackground:t?n.colors.currentDay:r?n.colors.primary:n.colors.secondary},Ga=(e,n,t,r,o)=>{const s=nt-Xe/1.6,i=nt-Xe/4.5,l=Ie+tt;let u=0;for(let c=0;c<n;c++){const d=E(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),h=d.isSame(E(),"week");Fe({ctx:e,x:u,y:l,width:rt,height:Xe,isBottomRow:!0,fillStyle:h?o.colors.today+"26":Va({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:d.isoWeek().toString(),font:h?`700 14px ${Ae}`:Pe.bottomRow.name,color:h?o.colors.today:kn({isCurrent:h},o)},bottomText:{y:i,label:r.toUpperCase(),font:Pe.middleRow,color:o.colors.placeholder}},o),u+=rt}},Xa=(e,n,t,r)=>{const s=n.year,i=e.canvas.width*2;let l=0,u=0,c=(ur(s)-t+1)*_e,d=0;for(;l+d<=i;)u>0&&(c=ur(s+u)*_e),d+c>i&&u>0&&(c=Math.ceil((i-d)/_e)*_e),Fe({ctx:e,x:l,y:0,width:c,height:Ie,textYPos:Rt,label:(s+u).toString(),font:Pe.topRow},r),l+=c,d+=c,u++},Ua=(e,n,t,r)=>{const o=Math.floor(n/_t)+2,s=_t*Me;let u=-E(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*Me+.5*Me;for(let c=0;c<o;c++){const d=E(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Fe({ctx:e,x:u,y:ot,width:s,height:yt,textYPos:ot+yt/2+2,label:d,font:Pe.bottomRow.number},r),u+=s}},Ka=(e,n,t,r)=>{const o=Math.ceil(n/_t),s=E(`${t.year}-${t.month+1}-${t.dayOfMonth}`),i=s.add(o-1,"days"),l=s.month(),u=i.add(1,"day").month(),c=l===u?1:2;let d=.5*Me;for(let h=0;h<c;h++){const v=E(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),x=E(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),M=x.format("MMMM").toUpperCase(),g=x.diff(v,"hour")+1,L=h===0?g*Me:n*Me;Fe({ctx:e,x:d,y:0,width:L,height:ot,textYPos:Rt,label:M,font:Pe.topRow},r),d+=L}},qa=(e,n,t,r)=>{let o=0;const s=ot+yt,i=E(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=Me;for(let u=0;u<n;u++){const c=i.add(u,"hours").format("h:00a").toUpperCase();Fe({ctx:e,x:o,y:s,width:l,height:qt,label:c,font:Pe.bottomRow.hoursInDay,textYPos:ot+yt+qt/2+2,labelBetweenCells:!0},r),o+=Me}},Ja=(e,n,t,r,o,s,i)=>{switch(n){case 0:Xa(e,r,s,i),Ba(e,t,r,i),Ga(e,t,r,o,i);break;case 1:ja(e,r,i),Za(e,r,o,i),za(e,t,r,i);break;case 2:Ka(e,t,r,i),Ua(e,t,r,i),qa(e,t,r,i);break}},Qa=w.div`
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
`,Ot=w.span`
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
`,lc=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],dc=()=>a.jsxs(rc,{children:[a.jsx(Pr,{children:"Leyenda"}),a.jsxs(Ot,{children:[a.jsx(He,{name:"transfer"})," Transfer"]}),a.jsxs(Ot,{children:[a.jsx(He,{name:"sun"})," Gira 1 día"]}),a.jsxs(Ot,{children:[a.jsx(He,{name:"tour"})," Gira multidía"]}),a.jsxs(Ot,{children:[a.jsx(oc,{children:"SUB"})," Subcontrato"]}),a.jsx(sc,{}),a.jsxs(Pr,{children:["Estado ",a.jsx("em",{children:"franja izq. + punto esq."})]}),lc.map(e=>a.jsxs(ic,{children:[a.jsx(ac,{style:{background:e.stripe}}),a.jsx(cc,{style:{color:e.color},children:a.jsx(He,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),uc=p.forwardRef(function({zoom:n,topBarWidth:t,showThemeToggle:r,toggleTheme:o},s){const{week:i}=Ne(),{date:l,cols:u,dayOfYear:c,startDate:d,config:h}=Le(),v=p.useRef(null),S=Et(),x=p.useCallback(M=>{const g=hn(),V=(n===2?is:nt)+1;vr(M,g,V),Ja(M,n,u,d,i,c,S)},[u,c,d,i,n,S]);return p.useEffect(()=>{if(!v.current)return;const M=v.current.getContext("2d");if(!M)return;const g=()=>x(M);return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[x]),p.useEffect(()=>{const M=v.current;if(!M)return;M.style.letterSpacing="1px";const g=M.getContext("2d");g&&x(g)},[l,n,x]),a.jsxs(Qa,{ref:s,children:[(h.showTopbar!==!1||h.showLegend!==!1)&&a.jsxs(Ra,{$width:t,children:[h.showTopbar!==!1&&a.jsx(Ki,{width:t,showThemeToggle:r,toggleTheme:o}),h.showLegend!==!1&&a.jsx(dc,{})]}),a.jsx(ec,{id:ls,children:a.jsx(tc,{ref:v})})]})}),fc=(e,n,t)=>{let r;switch(t){case 0:r=_e;break;case 2:r=Me;break;default:r=be}const s=e.startDate.startOf("day"),i=e.endDate.startOf("day"),l=n.startDate.startOf("day"),u=n.endDate.startOf("day"),c=()=>{let d;switch(t){case 2:d=(e.startDate.diff(n.startDate,"minute")/Se+1)*r-r/2;break;default:d=s.diff(l,"day")*r}return Math.max(0,d)};if(e.startDate.isAfter(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(e.startDate,"minute")/Se*r,50);break;default:d=Math.max(i.diff(s,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(n.startDate,"minute")/Se*r+.5*r,50);break;default:d=Math.max(i.diff(l,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isAfter(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(e.startDate,"minute")/Se*r,50);break;default:d=Math.max(u.diff(s,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(n.startDate,"minute")/Se*r,50);break;default:d=Math.max(u.diff(l,"day")*r+r,50)}return{x:c(),width:d}}return{x:c(),width:50}},hc=(e,n,t,r,o,s)=>{const i=e*fe+ds,l=n.hour(),u=t.hour();let c,d,h,v;switch(s){case 2:{c=E(r),d=E(o),h=E(n).hour(l).minute(0),v=E(t).hour(u).minute(0);break}default:{c=E(r).hour(0).minute(0),d=E(o).hour(23).minute(59),h=n,v=t;break}}return{...fc({startDate:c,endDate:d},{startDate:h,endDate:v},s),y:i}},Or=e=>{if(!e)return"white";const n=[];for(let o=1;o<6;o+=2)n.push(parseInt(e.slice(o,o+2),16)/255);const t=n.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"};w.div`
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
  height: ${Qt}px;
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
`,Cc=34,Mc={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63"}},kc="#3E8E5A",$c="#D98A22",Dc=({row:e,data:n,zoom:t,isSubcontract:r=!1,onTileClick:o,onDragStart:s,isDragging:i=!1,isDraggable:l=!0,yOffset:u=0})=>{const{date:c}=Le(),d=fn(c,t),{y:h,x:v,width:S}=hc(e,d.startDate,d.endDate,n.startDate,n.endDate,t),{colors:x}=Et(),M=p.useRef(null),g=E(n.startDate).isSame(E(n.endDate),"day"),L=n.eventType===vt.Tour,V=n.eventType===vt.Transfer,z=g&&(L||V),_=j=>{M.current={x:j.clientX,y:j.clientY},l&&s&&(j.preventDefault(),s(n,j))},f=j=>{if(M.current){const ee=Math.abs(j.clientX-M.current.x),$=Math.abs(j.clientY-M.current.y);Math.sqrt(ee*ee+$*$)<=5&&(o==null||o(n)),M.current=null}else o==null||o(n)},y={left:`${v}px`,top:`${h+u}px`,backgroundColor:`${n.bgColor??x.defaultTile}`,width:`${S}px`,color:Or(n.bgColor??"")},b=!r&&n.readiness?Mc[n.readiness]:null,T=r&&n.subcontractConfirmed===!1,P=r?T?$c:kc:b==null?void 0:b.stripe,H=j=>a.jsxs(pc,{"data-segment-id":n.segmentId,style:y,onClick:f,onMouseDown:_,onDragStart:ee=>ee.preventDefault(),isDraggable:l,isDragging:i,$unconfirmed:T,children:[P&&a.jsx(gc,{style:{background:P}}),j]});return H(z?a.jsxs(a.Fragment,{children:[(r||b)&&a.jsx(Ir,{$sm:!0,children:r?a.jsx(Nr,{children:"SUB"}):b&&a.jsx(Lr,{$sm:!0,style:{color:b.color},children:a.jsx(He,{name:b.icon,strokeWidth:b.icon==="check"?2.6:2.2})})}),a.jsxs(Sc,{children:[a.jsx(He,{name:V?"transfer":"sun",strokeWidth:2.4}),S>=Cc&&a.jsxs(a.Fragment,{children:[a.jsx(Fr,{children:E(n.startDate).format("HH:mm")}),!V&&a.jsx(Fr,{$end:!0,children:E(n.endDate).format("HH:mm")})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(Ir,{children:r?a.jsx(Nr,{children:"SUB"}):b&&a.jsx(Lr,{style:{color:b.color},children:a.jsx(He,{name:b.icon,strokeWidth:b.icon==="check"?2.6:2.2})})}),a.jsxs(mc,{children:[a.jsxs(Yr,{$pad:!0,children:[a.jsx(yc,{children:a.jsx(He,{name:V?"transfer":"tour"})}),a.jsx(vc,{children:n.title})]}),a.jsxs(Yr,{children:[n.bookingNumber&&a.jsx(bc,{children:n.bookingNumber}),n.subtitle&&a.jsx(xc,{children:n.subtitle})]}),n.driver&&a.jsxs(wc,{children:[a.jsx(He,{name:"person"}),n.driver]})]})]}))},Hr=(e,n)=>{let t=0;for(const r of n)e>=r&&t++;return t*De},Ec=w.div`
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
  pointer-events: none;
`,_c=({data:e,zoom:n,onTileClick:t,onDragStart:r,isDraggable:o,draggingEventId:s,separatorRowIndices:i=[]})=>{const l=p.useCallback(()=>{let u=0;return e.map((c,d)=>{if(d>0&&(u+=Math.max(e[d-1].data.length,1)),!c.data.some(h=>h.length>0)){const h=Hr(u,i);return[a.jsx(Ec,{style:{top:`${u*fe+h}px`},children:"Disponible"},`dispo-${c.id}`)]}return c.data.map((h,v)=>h.map(S=>{const x=s===S.segmentId,M=o?o(S):!1,g=v+u,L=Hr(g,i);return a.jsx(Dc,{row:g,data:S,zoom:n,isSubcontract:c.isSubcontract,onTileClick:t,onDragStart:r,isDragging:x,isDraggable:M,yOffset:L},S.segmentId)}))}).flat(2)},[e,t,n,r,o,s,i]);return a.jsx(a.Fragment,{children:l()})};w.div`
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
`;w.div``,w.span``,w.span``,w.div``,w.div``,w.span``,w.span``,w.div``,w.div``,w.span``,w.span``,w.div``,w.div``,w.div``,w.span``,w.div``,w.div``,w.div``,w.div``,w.p``,w.span``;const Zc={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Vc=({tooltipData:e})=>{const{mouseCoords:n,reservationData:t}=e,r=p.useRef(null),[o,s]=p.useState("below"),i=Ne(),l={...Zc,...i.tooltip};p.useLayoutEffect(()=>{if(!r.current||!n)return;const S=r.current,{width:x,height:M}=S.getBoundingClientRect(),g=S.parentElement;if(!g)return;const L=g.getBoundingClientRect(),V=12,z=4,_=L.height-n.y,f=L.width-n.x;let y=n.x+V,b=n.y+V,T="below";f<x+V&&(y=n.x-x-V),_<M+V&&(b=n.y-M-V,T="above"),y=Math.max(z,Math.min(y,L.width-x-z)),b=Math.max(z,Math.min(b,L.height-M-z)),s(T),S.style.left=`${y}px`,S.style.top=`${b}px`},[n]);const u=t.reservationType===vt.Tour,c=u&&t.isOneDayEvent,d=()=>u?c?"oneday":"tour":"transfer",h=()=>u?c?l.oneDay:l.tour:l.transfer,v=[t.groupName&&{label:l.groupName,value:t.groupName},t.driver&&{label:l.driver,value:t.driver},t.passengers&&{label:l.passengers,value:String(t.passengers)},t.flightNumber&&{label:l.flightNumber,value:t.flightNumber}].filter(Boolean);return a.jsxs(Tc,{ref:r,$position:o,children:[a.jsxs(Ac,{children:[a.jsxs(Pc,{children:[a.jsx(Oc,{children:t.bookingNumber}),a.jsx(Yc,{$type:d(),children:h()})]}),a.jsx(Ic,{children:t.eventName}),t.client&&a.jsx(Lc,{children:t.client})]}),a.jsxs(Nc,{children:[a.jsxs(Fc,{children:[a.jsxs(Wr,{children:[a.jsx(zr,{children:l.startDate}),a.jsxs(Br,{children:[a.jsx(jr,{children:t.startDate})," ",a.jsx(Zr,{children:t.startTime})]})]}),u&&t.endDate&&a.jsxs(Wr,{$isEnd:!0,children:[a.jsx(zr,{children:l.endDate}),a.jsxs(Br,{children:[a.jsx(jr,{children:t.endDate})," ",a.jsx(Zr,{children:t.endTime})]})]})]}),v.length>0&&a.jsx(Hc,{children:v.map((S,x)=>a.jsxs(Wc,{children:[a.jsx(zc,{children:S.label}),a.jsx(Bc,{children:S.value})]},x))}),(t.serviceNotes||t.reservationNotes)&&a.jsxs(jc,{children:[t.serviceNotes&&a.jsxs(Vr,{children:[a.jsx(Gr,{children:l.serviceNotes}),a.jsx(Xr,{children:t.serviceNotes})]}),t.reservationNotes&&a.jsxs(Vr,{children:[a.jsx(Gr,{children:l.reservationNotes}),a.jsx(Xr,{children:t.reservationNotes})]})]})]})]})};w.div`
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
  height: ${Qt}px;
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
  height: ${Qt}px;
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
`,dt=w.div`
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
`,nl=({draggedEvent:e,ghostPosition:n,ghostDimensions:t,dropTarget:r,isValidDrop:o,dragState:s,data:i,resourceOnly:l,separatorRowIndices:u=[]})=>{const c=Ne(),d=_=>{let f=0;for(const y of u)y<=_&&f++;return _*fe+f*De},[h,v]=p.useState(null),[S,x]=p.useState(0),M=p.useCallback((_=400,f=300)=>{const b=t.width,T=48,P=document.getElementById("react-scheduler");if(!P)return{x:n.x+b+16,y:n.y};const H=P.scrollLeft,j=P.scrollTop,ee=P.clientWidth,$=P.clientHeight,A=n.x-H,O=n.y-j,N={left:Ee+16,right:ee-16,top:16,bottom:$-16},Y=N.right-(A+b),Q=A-N.left,te=N.bottom-(O+T),ie=O-N.top;let ae,F;return Y>=_+16?ae=A+b+16:Q>=_+16?ae=A-_-16:Y>=Q?(ae=A+b+16,ae+_>N.right&&(ae=N.right-_)):(ae=A-_-16,ae<N.left&&(ae=N.left)),te>=f+16?F=O+T+16:ie>=f+16?F=O-f-16:te>=ie?(F=O+T+16,F+f>N.bottom&&(F=N.bottom-f)):(F=O-f-16,F<N.top&&(F=N.top)),ae=Math.max(N.left,Math.min(ae,N.right-_)),F=Math.max(N.top,Math.min(F,N.bottom-f)),{x:ae+H,y:F+j}},[n.x,n.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&S===0?x(n.x):s==="idle"&&x(0)},[s,e,n.x,S]),p.useEffect(()=>{v(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const g=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const _=[];let f=0;for(const y of i){const b=Math.max(y.data.length,1);if(y.capacity!==void 0&&e.totalPassengers>y.capacity)for(let T=0;T<b;T++)_.push(f+T);f+=b}return _},[e,i,s]);if(!e||s==="idle"||s==="potential")return null;const L=s==="animating",V=Or(e.bgColor??""),z=()=>{if(!r)return"";const _=E(r.startDate).format("MMM D, HH:mm"),f=E(r.endDate).format("HH:mm");return`${_} - ${f}`};return a.jsxs(Gc,{children:[g.map(_=>a.jsx(el,{style:{top:`${d(_)}px`,height:`${fe}px`}},_)),r&&s==="dragging"&&a.jsx(Rc,{$isValid:o,$hasConflict:r.hasConflict,style:{top:`${d(r.resourceIndex)}px`,height:`${fe}px`}}),r&&s==="dragging"&&!l&&a.jsxs(a.Fragment,{children:[a.jsx(Jc,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(fe-48)/2}px`,width:`${t.width}px`}}),a.jsx(Qc,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(fe-48)/2}px`},children:z()})]}),r&&s==="dragging"&&l&&a.jsx(tl,{$isValid:o,$hasConflict:r.hasConflict,style:{left:"0px",top:`${d(r.resourceIndex)}px`,height:`${fe}px`}}),r&&o&&r.hasConflict&&r.conflicts&&r.conflicts.length>0&&s==="dragging"&&(()=>{const _=M(400,300);return a.jsxs(Kr,{style:{left:`${_.x}px`,top:`${_.y}px`},children:[a.jsxs(qr,{children:[a.jsx(Jr,{children:"!"}),r.conflicts.length," ",r.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),a.jsx(Qr,{children:r.conflicts.map((f,y)=>{const b=E(r.startDate).format("YYYY-MM-DD"),T=E(r.endDate).format("YYYY-MM-DD"),P=E(f.event.startDate).format("YYYY-MM-DD"),H=E(f.event.endDate).format("YYYY-MM-DD"),j=E(f.conflictStart).format("YYYY-MM-DD"),ee=E(f.conflictEnd).format("YYYY-MM-DD"),$=b!==T,A=P!==H,O=j!==ee,N=$?E(r.startDate).format("MMM D, h:mm A"):E(r.startDate).format("h:mm A"),Y=$?E(r.endDate).format("MMM D, h:mm A"):E(r.endDate).format("h:mm A"),Q=A?E(f.event.startDate).format("MMM D, h:mm A"):E(f.event.startDate).format("h:mm A"),te=A?E(f.event.endDate).format("MMM D, h:mm A"):E(f.event.endDate).format("h:mm A"),ie=O?E(f.conflictStart).format("MMM D, h:mm A"):E(f.conflictStart).format("h:mm A"),ae=O?E(f.conflictEnd).format("MMM D, h:mm A"):E(f.conflictEnd).format("h:mm A"),F=O?"":E(f.conflictStart).format("MMM D"),W=r.startDate.getTime(),K=r.endDate.getTime(),U=f.event.startDate.getTime(),C=f.event.endDate.getTime(),I=W>=U&&W<C,k=K>U&&K<=C,G=W<=U&&K>=C,R=U<=W&&C>=K;let B=!1,m=!1,J=!1,D=!1,Z="";return G||R?(B=!0,m=!0,J=!0,D=!0,Z=`⚠️ ${c.conflicts.changeBoth}`):I&&k?(B=!0,m=!0,J=!0,D=!0,Z=`⚠️ ${c.conflicts.changeBoth}`):I?(B=!0,D=!0,Z=`⚠️ ${c.conflicts.changeStart}`):k&&(m=!0,J=!0,Z=`⚠️ ${c.conflicts.changeEnd}`),a.jsxs($n,{children:[a.jsxs(Dn,{children:[c.conflicts.conflictsWith,": ",f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),a.jsxs(dt,{children:[a.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",B?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:N}):N," ",c.conflicts.to," ",m?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:Y}):Y]}),a.jsxs(dt,{children:[a.jsx("strong",{children:f.event.title})," ",c.conflicts.currentlyAt,":"," ",J?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:Q}):Q," ",c.conflicts.to," ",D?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:te}):te]}),a.jsxs(Rr,{children:[c.conflicts.conflictTime,": ",F&&`${F}, `,ie," - ",ae]}),Z&&a.jsx(dt,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:Z})]},y)})})]})})(),r&&o&&!r.hasConflict&&r.nearbyEvents&&r.nearbyEvents.length>0&&s==="dragging"&&(()=>{const _=M(400,400);return a.jsxs(Kr,{style:{left:`${_.x}px`,top:`${_.y}px`,borderColor:"#4CAF50"},children:[a.jsxs(qr,{style:{color:"#2E7D32"},children:[a.jsx(Jr,{style:{backgroundColor:"#4CAF50"},children:"✓"}),r.nearbyEvents.length," ",r.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),a.jsxs(Qr,{children:[(()=>{const f=r.nearbyEvents.some(P=>P.position==="before"),y=r.nearbyEvents.some(P=>P.position==="after"),b=E(r.startDate).format("h:mm A"),T=E(r.endDate).format("h:mm A");return a.jsxs($n,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[a.jsxs(Dn,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),a.jsxs(dt,{style:{fontWeight:600},children:[E(r.startDate).format("MMM D"),":"," ",f?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:b}):b," ",c.conflicts.to," ",y?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:T}):T]}),a.jsx(dt,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),r.nearbyEvents.map((f,y)=>{const b=E(f.event.startDate).format("YYYY-MM-DD"),T=E(f.event.endDate).format("YYYY-MM-DD"),P=b!==T,H=P?E(f.event.startDate).format("MMM D, h:mm A"):E(f.event.startDate).format("h:mm A"),j=P?E(f.event.endDate).format("MMM D, h:mm A"):E(f.event.endDate).format("h:mm A"),ee=E(f.event.startDate).format("MMM D"),$=Math.floor(f.timeGap/(1e3*60*60)),A=Math.floor(f.timeGap%(1e3*60*60)/(1e3*60)),O=$>0?`${$}h ${A}m`:`${A}m`,N=f.position==="after",Y=f.position==="before";return a.jsxs($n,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[a.jsxs(Dn,{style:{color:"#1B5E20"},children:[f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),a.jsxs(dt,{children:[!P&&`${ee}: `,N?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:H}):H," ",c.conflicts.to," ",Y?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:j}):j]}),a.jsxs(Rr,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[O," ",f.position==="before"?c.conflicts.before:c.conflicts.after]})]},y)})]})]})})(),a.jsx(Xc,{$isAnimating:L,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:L?`${(h==null?void 0:h.x)??0}px`:"0",top:L?`${(h==null?void 0:h.y)??0}px`:"0",transform:L?void 0:`translate3d(${l?S:n.x}px, ${n.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:V},children:a.jsx(Uc,{children:a.jsxs(qc,{children:[a.jsx(Ur,{$bold:!0,children:e.title}),e.subtitle&&a.jsx(Ur,{children:e.subtitle}),e.description&&a.jsx(Kc,{children:e.description})]})})})]})},rl=Dt`
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
`,sl=({selectionBox:e,isSelecting:n})=>!e||!n?null:a.jsx(ol,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),il=Dt`
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
`,hl=({selections:e,onConfirm:n,onClear:t})=>{var x;const o=Ne().multiSelect,s=p.useMemo(()=>e.filter(M=>M.hasConflict).length,[e]),i=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,u=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",d=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((x=o==null?void 0:o.conflictsWarning)==null?void 0:x.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const v=s>0,S=a.jsxs(al,{$hasConflicts:v,"data-multi-select-ui":!0,children:[a.jsxs(cl,{children:[a.jsxs(ll,{$hasConflicts:v,children:[e.length," ",i]}),v&&a.jsxs(dl,{children:["⚠️ ",h]}),a.jsx(ul,{children:l})]}),a.jsxs(fl,{children:[a.jsxs(eo,{variant:"secondary",onClick:t,children:["✕ ",u]}),a.jsx(eo,{variant:"primary",$hasConflicts:v,onClick:n,children:v?`⚠️ ${d}`:`✓ ${c}`})]})]});return no.createPortal(S,document.body)},pl=Dt`
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

  ${({$hasConflict:e})=>e&&Mt`
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
`,xl=({selections:e,data:n,zoom:t,startDate:r,onRemove:o,onUpdate:s,separatorRowIndices:i=[]})=>{const[l,u]=p.useState(null),[c,d]=p.useState({x:0,y:0}),h=p.useRef(null),v=p.useMemo(()=>{switch(t){case 0:return _e*7;case 1:return be;case 2:return Me;default:return be}},[t]),S=p.useMemo(()=>E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0),[r]),x=p.useMemo(()=>e.map((y,b)=>{let T=0,P=!1;for(const Q of n){if(Q.id===y.resourceId){P=!0;break}T+=Math.max(Q.data.length,1)}if(!P)return null;const H=E(y.startDate),j=E(y.endDate);let ee,$;switch(t){case 0:ee=Math.floor(H.diff(S,"days")/7),$=Math.max(1,Math.ceil(j.diff(H,"days")/7)+1);break;case 1:ee=H.diff(S,"days"),$=Math.max(1,j.diff(H,"days")+1);break;case 2:ee=H.diff(S,"hours"),$=Math.max(1,j.diff(H,"hours")+1);break;default:ee=0,$=1}const A=ee*v;let O=0;for(const Q of i)Q<=T&&O++;const N=T*fe+O*De,Y=$*v;return{index:b,selection:y,x:A,y:N,width:Y,height:fe}}),[e,n,t,S,v]),M=(y,b)=>{const T=E(y).format("MMM D"),P=E(b).format("MMM D");return T===P?T:`${T} - ${P}`},g=y=>!y.hasConflict||!y.conflicts?"":`⚠️ Conflicts with:
${y.conflicts.map(T=>{const P=(T.overlapDuration/36e5).toFixed(1);return`• ${T.event.title} (${P}h overlap)`}).join(`
`)}`,L=p.useCallback(y=>{let b=0;for(const T of n){const P=Math.max(T.data.length,1);if(y>=b*fe&&y<(b+P)*fe)return{resourceId:T.id,resourceLabel:T.label};b+=P}return null},[n]),V=p.useCallback(y=>{const b=Math.floor(y/v);switch(t){case 0:return S.add(b*7,"days").toDate();case 1:return S.add(b,"days").toDate();case 2:return S.add(b,"hours").toDate();default:return S.toDate()}},[t,S,v]),z=p.useCallback((y,b)=>{!s||(y.preventDefault(),y.stopPropagation(),!x[b])||(h.current={x:y.clientX,y:y.clientY},u(b),d({x:0,y:0}))},[s,x]),_=p.useCallback(y=>{if(l===null||!h.current)return;const b=y.clientX-h.current.x,T=y.clientY-h.current.y,P=Math.round(b/v)*v,H=Math.round(T/fe)*fe;d({x:P,y:H})},[l,v]),f=p.useCallback(()=>{if(l===null||!s){u(null),d({x:0,y:0}),h.current=null;return}const y=x[l];if(!y){u(null),d({x:0,y:0}),h.current=null;return}const b=y.x+c.x,T=y.y+c.y,P=L(T+fe/2);if(!P){u(null),d({x:0,y:0}),h.current=null;return}const H=V(b),j=e[l],ee=j.endDate.getTime()-j.startDate.getTime(),$=new Date(H.getTime()+ee);s(l,{startDate:H,endDate:$,resourceId:P.resourceId,resourceLabel:P.resourceLabel}),u(null),d({x:0,y:0}),h.current=null},[l,c,x,e,s,L,V]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",_),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",f)}},[l,_,f]),a.jsx(a.Fragment,{children:x.map(y=>{if(!y)return null;const b=y.selection.hasConflict||!1,T=l===y.index,P=T?y.x+c.x:y.x,H=T?y.y+c.y:y.y;return a.jsxs(gl,{$hasConflict:b,$isDragging:T,style:{left:P,top:H,width:y.width,height:y.height},"data-multi-select-ui":!0,onMouseDown:j=>z(j,y.index),children:[b&&a.jsx(yl,{title:g(y.selection),children:"⚠️"}),a.jsx(ml,{$hasConflict:b,children:M(y.selection.startDate,y.selection.endDate)}),a.jsx(vl,{onClick:j=>{j.stopPropagation(),o(y.index)},onMouseDown:j=>j.stopPropagation(),title:b?"Remove conflicting selection":"Remove selection",children:"×"})]},y.index)})})},bl=w.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,wl=({zoom:e,startDate:n})=>{const{cols:t}=Le(),r=p.useMemo(()=>{if(e===2)return null;const o=e===0?_e*7:be,s=E().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"),i=E().startOf("day"),l=e===0?i.startOf("week").diff(s.startOf("week"),"week"):i.diff(s,"days");return l<0||l>=t?null:{x:l*o,width:o}},[e,n,t]);return r?a.jsx(bl,{style:{left:`${r.x}px`,width:`${r.width}px`},"aria-hidden":!0}):null},ed="";$e.Scheduler=ha,Object.defineProperty($e,Symbol.toStringTag,{value:"Module"})});
