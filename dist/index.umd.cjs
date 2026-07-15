(function($e,a){typeof exports=="object"&&typeof module<"u"?a(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],a):($e=typeof globalThis<"u"?globalThis:$e||self,a($e["react-scheduler"]={},$e["react/jsx-runtime"],$e.React,$e.ReactDOM))})(this,function($e,a,p,io){"use strict";var Al=Object.defineProperty;var Pl=($e,a,p)=>a in $e?Al($e,a,{enumerable:!0,configurable:!0,writable:!0,value:p}):$e[a]=p;var so=($e,a,p)=>(Pl($e,typeof a!="symbol"?a+"":a,p),p);function ao(e){const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return n.default=e,Object.freeze(n)}const re=ao(p);var Ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},mt={},co={get exports(){return mt},set exports(e){mt=e}},me={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var On;function lo(){if(On)return me;On=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function M(m){if(typeof m=="object"&&m!==null){var N=m.$$typeof;switch(N){case e:switch(m=m.type,m){case t:case o:case r:case c:case d:return m;default:switch(m=m&&m.$$typeof,m){case l:case i:case u:case v:case h:case s:return m;default:return N}}case n:return N}}}return me.ContextConsumer=i,me.ContextProvider=s,me.Element=e,me.ForwardRef=u,me.Fragment=t,me.Lazy=v,me.Memo=h,me.Portal=n,me.Profiler=o,me.StrictMode=r,me.Suspense=c,me.SuspenseList=d,me.isAsyncMode=function(){return!1},me.isConcurrentMode=function(){return!1},me.isContextConsumer=function(m){return M(m)===i},me.isContextProvider=function(m){return M(m)===s},me.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},me.isForwardRef=function(m){return M(m)===u},me.isFragment=function(m){return M(m)===t},me.isLazy=function(m){return M(m)===v},me.isMemo=function(m){return M(m)===h},me.isPortal=function(m){return M(m)===n},me.isProfiler=function(m){return M(m)===o},me.isStrictMode=function(m){return M(m)===r},me.isSuspense=function(m){return M(m)===c},me.isSuspenseList=function(m){return M(m)===d},me.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===t||m===o||m===r||m===c||m===d||m===S||typeof m=="object"&&m!==null&&(m.$$typeof===v||m.$$typeof===h||m.$$typeof===s||m.$$typeof===i||m.$$typeof===u||m.$$typeof===x||m.getModuleId!==void 0)},me.typeOf=M,me}var ye={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var In;function uo(){return In||(In=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),x=!1,M=!1,m=!1,N=!1,j=!1,I;I=Symbol.for("react.module.reference");function O(D){return!!(typeof D=="string"||typeof D=="function"||D===t||D===o||j||D===r||D===c||D===d||N||D===S||x||M||m||typeof D=="object"&&D!==null&&(D.$$typeof===v||D.$$typeof===h||D.$$typeof===s||D.$$typeof===i||D.$$typeof===u||D.$$typeof===I||D.getModuleId!==void 0))}function f(D){if(typeof D=="object"&&D!==null){var Z=D.$$typeof;switch(Z){case e:var ne=D.type;switch(ne){case t:case o:case r:case c:case d:return ne;default:var U=ne&&ne.$$typeof;switch(U){case l:case i:case u:case v:case h:case s:return U;default:return Z}}case n:return Z}}}var g=i,w=s,$=e,P=u,L=t,q=v,K=h,_=n,A=o,T=r,B=c,F=d,J=!1,R=!1;function se(D){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ie(D){return R||(R=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function H(D){return f(D)===i}function W(D){return f(D)===s}function X(D){return typeof D=="object"&&D!==null&&D.$$typeof===e}function te(D){return f(D)===u}function C(D){return f(D)===t}function Y(D){return f(D)===v}function k(D){return f(D)===h}function V(D){return f(D)===n}function Q(D){return f(D)===o}function z(D){return f(D)===r}function y(D){return f(D)===c}function G(D){return f(D)===d}ye.ContextConsumer=g,ye.ContextProvider=w,ye.Element=$,ye.ForwardRef=P,ye.Fragment=L,ye.Lazy=q,ye.Memo=K,ye.Portal=_,ye.Profiler=A,ye.StrictMode=T,ye.Suspense=B,ye.SuspenseList=F,ye.isAsyncMode=se,ye.isConcurrentMode=ie,ye.isContextConsumer=H,ye.isContextProvider=W,ye.isElement=X,ye.isForwardRef=te,ye.isFragment=C,ye.isLazy=Y,ye.isMemo=k,ye.isPortal=V,ye.isProfiler=Q,ye.isStrictMode=z,ye.isSuspense=y,ye.isSuspenseList=G,ye.isValidElementType=O,ye.typeOf=f}()),ye}(function(e){process.env.NODE_ENV==="production"?e.exports=lo():e.exports=uo()})(co);function fo(e){function n(H,W,X,te,C){for(var Y=0,k=0,V=0,Q=0,z,y,G=0,D=0,Z,ne=Z=z=0,U=0,ae=0,he=0,de=0,ge=X.length,ce=ge-1,fe,oe="",ee="",ue="",le="",be;U<ge;){if(y=X.charCodeAt(U),U===ce&&k+Q+V+Y!==0&&(k!==0&&(y=k===47?10:47),Q=V=Y=0,ge++,ce++),k+Q+V+Y===0){if(U===ce&&(0<ae&&(oe=oe.replace(v,"")),0<oe.trim().length)){switch(y){case 32:case 9:case 59:case 13:case 10:break;default:oe+=X.charAt(U)}y=59}switch(y){case 123:for(oe=oe.trim(),z=oe.charCodeAt(0),Z=1,de=++U;U<ge;){switch(y=X.charCodeAt(U)){case 123:Z++;break;case 125:Z--;break;case 47:switch(y=X.charCodeAt(U+1)){case 42:case 47:e:{for(ne=U+1;ne<ce;++ne)switch(X.charCodeAt(ne)){case 47:if(y===42&&X.charCodeAt(ne-1)===42&&U+2!==ne){U=ne+1;break e}break;case 10:if(y===47){U=ne+1;break e}}U=ne}}break;case 91:y++;case 40:y++;case 34:case 39:for(;U++<ce&&X.charCodeAt(U)!==y;);}if(Z===0)break;U++}switch(Z=X.substring(de,U),z===0&&(z=(oe=oe.replace(h,"").trim()).charCodeAt(0)),z){case 64:switch(0<ae&&(oe=oe.replace(v,"")),y=oe.charCodeAt(1),y){case 100:case 109:case 115:case 45:ae=W;break;default:ae=B}if(Z=n(W,ae,Z,y,C+1),de=Z.length,0<J&&(ae=t(B,oe,he),be=l(3,Z,ae,W,_,K,de,y,C,te),oe=ae.join(""),be!==void 0&&(de=(Z=be.trim()).length)===0&&(y=0,Z="")),0<de)switch(y){case 115:oe=oe.replace(g,i);case 100:case 109:case 45:Z=oe+"{"+Z+"}";break;case 107:oe=oe.replace(j,"$1 $2"),Z=oe+"{"+Z+"}",Z=T===1||T===2&&s("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=oe+Z,te===112&&(Z=(ee+=Z,""))}else Z="";break;default:Z=n(W,t(W,oe,he),Z,te,C+1)}ue+=Z,Z=he=ae=ne=z=0,oe="",y=X.charCodeAt(++U);break;case 125:case 59:if(oe=(0<ae?oe.replace(v,""):oe).trim(),1<(de=oe.length))switch(ne===0&&(z=oe.charCodeAt(0),z===45||96<z&&123>z)&&(de=(oe=oe.replace(" ",":")).length),0<J&&(be=l(1,oe,W,H,_,K,ee.length,te,C,te))!==void 0&&(de=(oe=be.trim()).length)===0&&(oe="\0\0"),z=oe.charCodeAt(0),y=oe.charCodeAt(1),z){case 0:break;case 64:if(y===105||y===99){le+=oe+X.charAt(U);break}default:oe.charCodeAt(de-1)!==58&&(ee+=o(oe,z,y,oe.charCodeAt(2)))}he=ae=ne=z=0,oe="",y=X.charCodeAt(++U)}}switch(y){case 13:case 10:k===47?k=0:1+z===0&&te!==107&&0<oe.length&&(ae=1,oe+="\0"),0<J*se&&l(0,oe,W,H,_,K,ee.length,te,C,te),K=1,_++;break;case 59:case 125:if(k+Q+V+Y===0){K++;break}default:switch(K++,fe=X.charAt(U),y){case 9:case 32:if(Q+Y+k===0)switch(G){case 44:case 58:case 9:case 32:fe="";break;default:y!==32&&(fe=" ")}break;case 0:fe="\\0";break;case 12:fe="\\f";break;case 11:fe="\\v";break;case 38:Q+k+Y===0&&(ae=he=1,fe="\f"+fe);break;case 108:if(Q+k+Y+A===0&&0<ne)switch(U-ne){case 2:G===112&&X.charCodeAt(U-3)===58&&(A=G);case 8:D===111&&(A=D)}break;case 58:Q+k+Y===0&&(ne=U);break;case 44:k+V+Q+Y===0&&(ae=1,fe+="\r");break;case 34:case 39:k===0&&(Q=Q===y?0:Q===0?y:Q);break;case 91:Q+k+V===0&&Y++;break;case 93:Q+k+V===0&&Y--;break;case 41:Q+k+Y===0&&V--;break;case 40:if(Q+k+Y===0){if(z===0)switch(2*G+3*D){case 533:break;default:z=1}V++}break;case 64:k+V+Q+Y+ne+Z===0&&(Z=1);break;case 42:case 47:if(!(0<Q+Y+V))switch(k){case 0:switch(2*y+3*X.charCodeAt(U+1)){case 235:k=47;break;case 220:de=U,k=42}break;case 42:y===47&&G===42&&de+2!==U&&(X.charCodeAt(de+2)===33&&(ee+=X.substring(de,U+1)),fe="",k=0)}}k===0&&(oe+=fe)}D=G,G=y,U++}if(de=ee.length,0<de){if(ae=W,0<J&&(be=l(2,ee,ae,H,_,K,de,te,C,te),be!==void 0&&(ee=be).length===0))return le+ee+ue;if(ee=ae.join(",")+"{"+ee+"}",T*A!==0){switch(T!==2||s(ee,2)||(A=0),A){case 111:ee=ee.replace(O,":-moz-$1")+ee;break;case 112:ee=ee.replace(I,"::-webkit-input-$1")+ee.replace(I,"::-moz-$1")+ee.replace(I,":-ms-input-$1")+ee}A=0}}return le+ee+ue}function t(H,W,X){var te=W.trim().split(m);W=te;var C=te.length,Y=H.length;switch(Y){case 0:case 1:var k=0;for(H=Y===0?"":H[0]+" ";k<C;++k)W[k]=r(H,W[k],X).trim();break;default:var V=k=0;for(W=[];k<C;++k)for(var Q=0;Q<Y;++Q)W[V++]=r(H[Q]+" ",te[k],X).trim()}return W}function r(H,W,X){var te=W.charCodeAt(0);switch(33>te&&(te=(W=W.trim()).charCodeAt(0)),te){case 38:return W.replace(N,"$1"+H.trim());case 58:return H.trim()+W.replace(N,"$1"+H.trim());default:if(0<1*X&&0<W.indexOf("\f"))return W.replace(N,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+W}function o(H,W,X,te){var C=H+";",Y=2*W+3*X+4*te;if(Y===944){H=C.indexOf(":",9)+1;var k=C.substring(H,C.length-1).trim();return k=C.substring(0,H).trim()+k+";",T===1||T===2&&s(k,1)?"-webkit-"+k+k:k}if(T===0||T===2&&!s(C,1))return C;switch(Y){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(q,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return k=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+k+"-webkit-"+C+"-ms-flex-pack"+k+C;case 1005:return x.test(C)?C.replace(S,":-webkit-")+C.replace(S,":-moz-")+C:C;case 1e3:switch(k=C.substring(13).trim(),W=k.indexOf("-")+1,k.charCodeAt(0)+k.charCodeAt(W)){case 226:k=C.replace(f,"tb");break;case 232:k=C.replace(f,"tb-rl");break;case 220:k=C.replace(f,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+k+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(W=(C=H).length-10,k=(C.charCodeAt(W)===33?C.substring(0,W):C).substring(H.indexOf(":",7)+1).trim(),Y=k.charCodeAt(0)+(k.charCodeAt(7)|0)){case 203:if(111>k.charCodeAt(8))break;case 115:C=C.replace(k,"-webkit-"+k)+";"+C;break;case 207:case 102:C=C.replace(k,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+C.replace(k,"-webkit-"+k)+";"+C.replace(k,"-ms-"+k+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return k=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+k+"-ms-flex-"+k+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace($,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace($,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(L.test(H)===!0)return(k=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?o(H.replace("stretch","fill-available"),W,X,te).replace(":fill-available",":stretch"):C.replace(k,"-webkit-"+k)+C.replace(k,"-moz-"+k.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,X+te===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(M,"$1-webkit-$2")+C}return C}function s(H,W){var X=H.indexOf(W===1?":":"{"),te=H.substring(0,W!==3?X:10);return X=H.substring(X+1,H.length-1),R(W!==2?te:te.replace(P,"$1"),X,W)}function i(H,W){var X=o(W,W.charCodeAt(0),W.charCodeAt(1),W.charCodeAt(2));return X!==W+";"?X.replace(w," or ($1)").substring(4):"("+W+")"}function l(H,W,X,te,C,Y,k,V,Q,z){for(var y=0,G=W,D;y<J;++y)switch(D=F[y].call(d,H,G,X,te,C,Y,k,V,Q,z)){case void 0:case!1:case!0:case null:break;default:G=D}if(G!==W)return G}function u(H){switch(H){case void 0:case null:J=F.length=0;break;default:if(typeof H=="function")F[J++]=H;else if(typeof H=="object")for(var W=0,X=H.length;W<X;++W)u(H[W]);else se=!!H|0}return u}function c(H){return H=H.prefix,H!==void 0&&(R=null,H?typeof H!="function"?T=1:(T=2,R=H):T=0),c}function d(H,W){var X=H;if(33>X.charCodeAt(0)&&(X=X.trim()),ie=X,X=[ie],0<J){var te=l(-1,W,X,X,_,K,0,0,0,0);te!==void 0&&typeof te=="string"&&(W=te)}var C=n(B,X,W,0,0);return 0<J&&(te=l(-2,C,X,X,_,K,C.length,0,0,0),te!==void 0&&(C=te)),ie="",A=0,K=_=1,C}var h=/^\0+/g,v=/[\0\r\f]/g,S=/: */g,x=/zoo|gra/,M=/([,: ])(transform)/g,m=/,\r+?/g,N=/([\t\r\n ])*\f?&/g,j=/@(k\w+)\s*(\S*)\s*/,I=/::(place)/g,O=/:(read-only)/g,f=/[svh]\w+-[tblr]{2}/,g=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,$=/-self|flex-/g,P=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,q=/([^-])(image-set\()/,K=1,_=1,A=0,T=1,B=[],F=[],J=0,R=null,se=0,ie="";return d.use=u,d.set=c,e!==void 0&&c(e),d}var ho={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function po(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var go=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Yn=po(function(e){return go.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Wt={},mo={get exports(){return Wt},set exports(e){Wt=e}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ln;function yo(){if(Ln)return ve;Ln=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,S=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,M=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,j=e?Symbol.for("react.scope"):60119;function I(f){if(typeof f=="object"&&f!==null){var g=f.$$typeof;switch(g){case n:switch(f=f.type,f){case u:case c:case r:case s:case o:case h:return f;default:switch(f=f&&f.$$typeof,f){case l:case d:case x:case S:case i:return f;default:return g}}case t:return g}}}function O(f){return I(f)===c}return ve.AsyncMode=u,ve.ConcurrentMode=c,ve.ContextConsumer=l,ve.ContextProvider=i,ve.Element=n,ve.ForwardRef=d,ve.Fragment=r,ve.Lazy=x,ve.Memo=S,ve.Portal=t,ve.Profiler=s,ve.StrictMode=o,ve.Suspense=h,ve.isAsyncMode=function(f){return O(f)||I(f)===u},ve.isConcurrentMode=O,ve.isContextConsumer=function(f){return I(f)===l},ve.isContextProvider=function(f){return I(f)===i},ve.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===n},ve.isForwardRef=function(f){return I(f)===d},ve.isFragment=function(f){return I(f)===r},ve.isLazy=function(f){return I(f)===x},ve.isMemo=function(f){return I(f)===S},ve.isPortal=function(f){return I(f)===t},ve.isProfiler=function(f){return I(f)===s},ve.isStrictMode=function(f){return I(f)===o},ve.isSuspense=function(f){return I(f)===h},ve.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===r||f===c||f===s||f===o||f===h||f===v||typeof f=="object"&&f!==null&&(f.$$typeof===x||f.$$typeof===S||f.$$typeof===i||f.$$typeof===l||f.$$typeof===d||f.$$typeof===m||f.$$typeof===N||f.$$typeof===j||f.$$typeof===M)},ve.typeOf=I,ve}var xe={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nn;function vo(){return Nn||(Nn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,S=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,M=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,j=e?Symbol.for("react.scope"):60119;function I(y){return typeof y=="string"||typeof y=="function"||y===r||y===c||y===s||y===o||y===h||y===v||typeof y=="object"&&y!==null&&(y.$$typeof===x||y.$$typeof===S||y.$$typeof===i||y.$$typeof===l||y.$$typeof===d||y.$$typeof===m||y.$$typeof===N||y.$$typeof===j||y.$$typeof===M)}function O(y){if(typeof y=="object"&&y!==null){var G=y.$$typeof;switch(G){case n:var D=y.type;switch(D){case u:case c:case r:case s:case o:case h:return D;default:var Z=D&&D.$$typeof;switch(Z){case l:case d:case x:case S:case i:return Z;default:return G}}case t:return G}}}var f=u,g=c,w=l,$=i,P=n,L=d,q=r,K=x,_=S,A=t,T=s,B=o,F=h,J=!1;function R(y){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),se(y)||O(y)===u}function se(y){return O(y)===c}function ie(y){return O(y)===l}function H(y){return O(y)===i}function W(y){return typeof y=="object"&&y!==null&&y.$$typeof===n}function X(y){return O(y)===d}function te(y){return O(y)===r}function C(y){return O(y)===x}function Y(y){return O(y)===S}function k(y){return O(y)===t}function V(y){return O(y)===s}function Q(y){return O(y)===o}function z(y){return O(y)===h}xe.AsyncMode=f,xe.ConcurrentMode=g,xe.ContextConsumer=w,xe.ContextProvider=$,xe.Element=P,xe.ForwardRef=L,xe.Fragment=q,xe.Lazy=K,xe.Memo=_,xe.Portal=A,xe.Profiler=T,xe.StrictMode=B,xe.Suspense=F,xe.isAsyncMode=R,xe.isConcurrentMode=se,xe.isContextConsumer=ie,xe.isContextProvider=H,xe.isElement=W,xe.isForwardRef=X,xe.isFragment=te,xe.isLazy=C,xe.isMemo=Y,xe.isPortal=k,xe.isProfiler=V,xe.isStrictMode=Q,xe.isSuspense=z,xe.isValidElementType=I,xe.typeOf=O}()),xe}(function(e){process.env.NODE_ENV==="production"?e.exports=yo():e.exports=vo()})(mo);var jt=Wt,xo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zt={};Zt[jt.ForwardRef]=wo,Zt[jt.Memo]=Fn;function Bn(e){return jt.isMemo(e)?Fn:Zt[e.$$typeof]||xo}var So=Object.defineProperty,Co=Object.getOwnPropertyNames,Hn=Object.getOwnPropertySymbols,ko=Object.getOwnPropertyDescriptor,Mo=Object.getPrototypeOf,zn=Object.prototype;function Wn(e,n,t){if(typeof n!="string"){if(zn){var r=Mo(n);r&&r!==zn&&Wn(e,r,t)}var o=Co(n);Hn&&(o=o.concat(Hn(n)));for(var s=Bn(e),i=Bn(n),l=0;l<o.length;++l){var u=o[l];if(!bo[u]&&!(t&&t[u])&&!(i&&i[u])&&!(s&&s[u])){var c=ko(n,u);try{So(e,u,c)}catch{}}}}return e}var $o=Wn;function Te(){return(Te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var jn=function(e,n){for(var t=[e[0]],r=0,o=n.length;r<o;r+=1)t.push(n[r],e[r+1]);return t},Vt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!mt.typeOf(e)},kt=Object.freeze([]),je=Object.freeze({});function Qe(e){return typeof e=="function"}function Gt(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Xt(e){return e&&typeof e.styledComponentId=="string"}var Re=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Ut=typeof window<"u"&&"HTMLElement"in window,Do=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),Eo={},_o=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function To(){for(var e=arguments.length<=0?void 0:arguments[0],n=[],t=1,r=arguments.length;t<r;t+=1)n.push(t<0||arguments.length<=t?void 0:arguments[t]);return n.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Ie(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(To.apply(void 0,[_o[e]].concat(t)).trim())}var Ao=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var n=e.prototype;return n.indexOfGroup=function(t){for(var r=0,o=0;o<t;o++)r+=this.groupSizes[o];return r},n.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,i=s;t>=i;)(i<<=1)<0&&Ie(16,""+t);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var l=s;l<i;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(t+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[t]++,u++)},n.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],o=this.indexOfGroup(t),s=o+r;this.groupSizes[t]=0;for(var i=o;i<s;i++)this.tag.deleteRule(o)}},n.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),i=s+o,l=s;l<i;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Mt=new Map,$t=new Map,yt=1,Dt=function(e){if(Mt.has(e))return Mt.get(e);for(;$t.has(yt);)yt++;var n=yt++;return process.env.NODE_ENV!=="production"&&((0|n)<0||n>1<<30)&&Ie(16,""+n),Mt.set(e,n),$t.set(n,e),n},Po=function(e){return $t.get(e)},Oo=function(e,n){n>=yt&&(yt=n+1),Mt.set(e,n),$t.set(n,e)},Io="style["+Re+'][data-styled-version="5.3.8"]',Yo=new RegExp("^"+Re+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Lo=function(e,n,t){for(var r,o=t.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(n,r)},No=function(e,n){for(var t=(n.textContent||"").split(`/*!sc*/
`),r=[],o=0,s=t.length;o<s;o++){var i=t[o].trim();if(i){var l=i.match(Yo);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Oo(c,u),Lo(e,c,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},Fo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Zn=function(e){var n=document.head,t=e||n,r=document.createElement("style"),o=function(l){for(var u=l.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(Re))return d}}(t),s=o!==void 0?o.nextSibling:null;r.setAttribute(Re,"active"),r.setAttribute("data-styled-version","5.3.8");var i=Fo();return i&&r.setAttribute("nonce",i),t.insertBefore(r,s),r},Bo=function(){function e(t){var r=this.element=Zn(t);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,i=0,l=s.length;i<l;i++){var u=s[i];if(u.ownerNode===o)return u}Ie(17)}(r),this.length=0}var n=e.prototype;return n.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.getRule=function(t){var r=this.sheet.cssRules[t];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Ho=function(){function e(t){var r=this.element=Zn(t);this.nodes=r.childNodes,this.length=0}var n=e.prototype;return n.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},n.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),zo=function(){function e(t){this.rules=[],this.length=0}var n=e.prototype;return n.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Vn=Ut,Wo={isServer:!Ut,useCSSOMInjection:!Do},Et=function(){function e(t,r,o){t===void 0&&(t=je),r===void 0&&(r={}),this.options=Te({},Wo,{},t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Ut&&Vn&&(Vn=!1,function(s){for(var i=document.querySelectorAll(Io),l=0,u=i.length;l<u;l++){var c=i[l];c&&c.getAttribute(Re)!=="active"&&(No(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return Dt(t)};var n=e.prototype;return n.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Te({},this.options,{},t),this.gs,r&&this.names||void 0)},n.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,s=r.useCSSOMInjection,i=r.target,t=o?new zo(i):s?new Bo(i):new Ho(i),new Ao(t)));var t,r,o,s,i},n.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.registerName=function(t,r){if(Dt(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},n.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(Dt(t),o)},n.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.clearRules=function(t){this.getTag().clearGroup(Dt(t)),this.clearNames(t)},n.clearTag=function(){this.tag=void 0},n.toString=function(){return function(t){for(var r=t.getTag(),o=r.length,s="",i=0;i<o;i++){var l=Po(i);if(l!==void 0){var u=t.names.get(l),c=r.getGroup(i);if(u&&c&&u.size){var d=Re+".g"+i+'[id="'+l+'"]',h="";u!==void 0&&u.forEach(function(v){v.length>0&&(h+=v+",")}),s+=""+c+d+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),jo=/(a)(d)/gi,Gn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kt(e){var n,t="";for(n=Math.abs(e);n>52;n=n/52|0)t=Gn(n%52)+t;return(Gn(n%52)+t).replace(jo,"$1-$2")}var Ge=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},Xn=function(e){return Ge(5381,e)};function Un(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(Qe(t)&&!Xt(t))return!1}return!0}var Zo=Xn("5.3.8"),Vo=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(r===void 0||r.isStatic)&&Un(n),this.componentId=t,this.baseHash=Ge(Zo,t),this.baseStyle=r,Et.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(n,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var i=Xe(this.rules,n,t,r).join(""),l=Kt(Ge(this.baseHash,i)>>>0);if(!t.hasNameForId(o,l)){var u=r(i,"."+l,void 0,o);t.insertRules(o,l,u)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,d=Ge(this.baseHash,r.hash),h="",v=0;v<c;v++){var S=this.rules[v];if(typeof S=="string")h+=S,process.env.NODE_ENV!=="production"&&(d=Ge(d,S+v));else if(S){var x=Xe(S,n,t,r),M=Array.isArray(x)?x.join(""):x;d=Ge(d,M+v),h+=M}}if(h){var m=Kt(d>>>0);if(!t.hasNameForId(o,m)){var N=r(h,"."+m,void 0,o);t.insertRules(o,m,N)}s.push(m)}}return s.join(" ")},e}(),Go=/^\s*\/\/.*$/gm,Xo=[":","[",".","#"];function Uo(e){var n,t,r,o,s=e===void 0?je:e,i=s.options,l=i===void 0?je:i,u=s.plugins,c=u===void 0?kt:u,d=new fo(l),h=[],v=function(M){function m(N){if(N)try{M(N+"}")}catch{}}return function(N,j,I,O,f,g,w,$,P,L){switch(N){case 1:if(P===0&&j.charCodeAt(0)===64)return M(j+";"),"";break;case 2:if($===0)return j+"/*|*/";break;case 3:switch($){case 102:case 112:return M(I[0]+j),"";default:return j+(L===0?"/*|*/":"")}case-2:j.split("/*|*/}").forEach(m)}}}(function(M){h.push(M)}),S=function(M,m,N){return m===0&&Xo.indexOf(N[t.length])!==-1||N.match(o)?M:"."+n};function x(M,m,N,j){j===void 0&&(j="&");var I=M.replace(Go,""),O=m&&N?N+" "+m+" { "+I+" }":I;return n=j,t=m,r=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),d(N||!m?"":m,O)}return d.use([].concat(c,[function(M,m,N){M===2&&N.length&&N[0].lastIndexOf(t)>0&&(N[0]=N[0].replace(r,S))},v,function(M){if(M===-2){var m=h;return h=[],m}}])),x.hash=c.length?c.reduce(function(M,m){return m.name||Ie(15),Ge(M,m.name)},5381).toString():"",x}var Kn=p.createContext();Kn.Consumer;var qn=p.createContext(),Ko=(qn.Consumer,new Et),qt=Uo();function Jn(){return p.useContext(Kn)||Ko}function Qn(){return p.useContext(qn)||qt}var Rn=function(){function e(n,t){var r=this;this.inject=function(o,s){s===void 0&&(s=qt);var i=r.name+s.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,s(r.rules,i,"@keyframes"))},this.toString=function(){return Ie(12,String(r.name))},this.name=n,this.id="sc-keyframes-"+n,this.rules=t}return e.prototype.getName=function(n){return n===void 0&&(n=qt),this.name+n.hash},e}(),qo=/([A-Z])/,Jo=/([A-Z])/g,Qo=/^ms-/,Ro=function(e){return"-"+e.toLowerCase()};function er(e){return qo.test(e)?e.replace(Jo,Ro).replace(Qo,"-ms-"):e}var tr=function(e){return e==null||e===!1||e===""};function Xe(e,n,t,r){if(Array.isArray(e)){for(var o,s=[],i=0,l=e.length;i<l;i+=1)(o=Xe(e[i],n,t,r))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(tr(e))return"";if(Xt(e))return"."+e.styledComponentId;if(Qe(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!n)return e;var u=e(n);return process.env.NODE_ENV!=="production"&&mt.isElement(u)&&console.warn(Gt(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Xe(u,n,t,r)}var c;return e instanceof Rn?t?(e.inject(t,r),e.getName(r)):e:Vt(e)?function d(h,v){var S,x,M=[];for(var m in h)h.hasOwnProperty(m)&&!tr(h[m])&&(Array.isArray(h[m])&&h[m].isCss||Qe(h[m])?M.push(er(m)+":",h[m],";"):Vt(h[m])?M.push.apply(M,d(h[m],m)):M.push(er(m)+": "+(S=m,(x=h[m])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||S in ho?String(x).trim():x+"px")+";"));return v?[v+" {"].concat(M,["}"]):M}(e):e.toString()}var nr=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function _t(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return Qe(e)||Vt(e)?nr(Xe(jn(kt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:nr(Xe(jn(e,t)))}var rr=/invalid hook call/i,Tt=new Set,or=function(e,n){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(n?' with the id of "'+n+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,r=console.error;try{var o=!0;console.error=function(s){if(rr.test(s))o=!1,Tt.delete(t);else{for(var i=arguments.length,l=new Array(i>1?i-1:0),u=1;u<i;u++)l[u-1]=arguments[u];r.apply(void 0,[s].concat(l))}},p.useRef(),o&&!Tt.has(t)&&(console.warn(t),Tt.add(t))}catch(s){rr.test(s.message)&&Tt.delete(t)}finally{console.error=r}}},sr=function(e,n,t){return t===void 0&&(t=je),e.theme!==t.theme&&e.theme||n||t.theme},es=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ts=/(^-|-$)/g;function Jt(e){return e.replace(es,"-").replace(ts,"")}var Qt=function(e){return Kt(Xn(e)>>>0)};function At(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Rt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},ns=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function rs(e,n,t){var r=e[t];Rt(n)&&Rt(r)?ir(r,n):e[t]=n}function ir(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];for(var o=0,s=t;o<s.length;o++){var i=s[o];if(Rt(i))for(var l in i)ns(l)&&rs(e,i[l],l)}return e}var et=p.createContext();et.Consumer;function os(e){var n=p.useContext(et),t=p.useMemo(function(){return function(r,o){if(!r)return Ie(14);if(Qe(r)){var s=r(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Ie(7)}return Array.isArray(r)||typeof r!="object"?Ie(8):o?Te({},o,{},r):r}(e.theme,n)},[e.theme,n]);return e.children?p.createElement(et.Provider,{value:t},e.children):null}var en={};function ar(e,n,t){var r=Xt(e),o=!At(e),s=n.attrs,i=s===void 0?kt:s,l=n.componentId,u=l===void 0?function(j,I){var O=typeof j!="string"?"sc":Jt(j);en[O]=(en[O]||0)+1;var f=O+"-"+Qt("5.3.8"+O+en[O]);return I?I+"-"+f:f}(n.displayName,n.parentComponentId):l,c=n.displayName,d=c===void 0?function(j){return At(j)?"styled."+j:"Styled("+Gt(j)+")"}(e):c,h=n.displayName&&n.componentId?Jt(n.displayName)+"-"+n.componentId:n.componentId||u,v=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,S=n.shouldForwardProp;r&&e.shouldForwardProp&&(S=n.shouldForwardProp?function(j,I,O){return e.shouldForwardProp(j,I,O)&&n.shouldForwardProp(j,I,O)}:e.shouldForwardProp);var x,M=new Vo(t,h,r?e.componentStyle:void 0),m=M.isStatic&&i.length===0,N=function(j,I){return function(O,f,g,w){var $=O.attrs,P=O.componentStyle,L=O.defaultProps,q=O.foldedComponentIds,K=O.shouldForwardProp,_=O.styledComponentId,A=O.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(_);var T=function(te,C,Y){te===void 0&&(te=je);var k=Te({},C,{theme:te}),V={};return Y.forEach(function(Q){var z,y,G,D=Q;for(z in Qe(D)&&(D=D(k)),D)k[z]=V[z]=z==="className"?(y=V[z],G=D[z],y&&G?y+" "+G:y||G):D[z]}),[k,V]}(sr(f,p.useContext(et),L)||je,f,$),B=T[0],F=T[1],J=function(te,C,Y,k){var V=Jn(),Q=Qn(),z=C?te.generateAndInjectStyles(je,V,Q):te.generateAndInjectStyles(Y,V,Q);return process.env.NODE_ENV!=="production"&&p.useDebugValue(z),process.env.NODE_ENV!=="production"&&!C&&k&&k(z),z}(P,w,B,process.env.NODE_ENV!=="production"?O.warnTooManyClasses:void 0),R=g,se=F.$as||f.$as||F.as||f.as||A,ie=At(se),H=F!==f?Te({},f,{},F):f,W={};for(var X in H)X[0]!=="$"&&X!=="as"&&(X==="forwardedAs"?W.as=H[X]:(K?K(X,Yn,se):!ie||Yn(X))&&(W[X]=H[X]));return f.style&&F.style!==f.style&&(W.style=Te({},f.style,{},F.style)),W.className=Array.prototype.concat(q,_,J!==_?J:null,f.className,F.className).filter(Boolean).join(" "),W.ref=R,p.createElement(se,W)}(x,j,I,m)};return N.displayName=d,(x=p.forwardRef(N)).attrs=v,x.componentStyle=M,x.displayName=d,x.shouldForwardProp=S,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):kt,x.styledComponentId=h,x.target=r?e.target:e,x.withComponent=function(j){var I=n.componentId,O=function(g,w){if(g==null)return{};var $,P,L={},q=Object.keys(g);for(P=0;P<q.length;P++)$=q[P],w.indexOf($)>=0||(L[$]=g[$]);return L}(n,["componentId"]),f=I&&I+"-"+(At(j)?j:Jt(Gt(j)));return ar(j,Te({},O,{attrs:v,componentId:f}),t)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=r?ir({},e.defaultProps,j):j}}),process.env.NODE_ENV!=="production"&&(or(d,h),x.warnTooManyClasses=function(j,I){var O={},f=!1;return function(g){if(!f&&(O[g]=!0,Object.keys(O).length>=200)){var w=I?' with the id of "'+I+'"':"";console.warn("Over 200 classes were generated for component "+j+w+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),f=!0,O={}}}}(d,h)),x.toString=function(){return"."+x.styledComponentId},o&&$o(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var tn=function(e){return function n(t,r,o){if(o===void 0&&(o=je),!mt.isValidElementType(r))return Ie(1,String(r));var s=function(){return t(r,o,_t.apply(void 0,arguments))};return s.withConfig=function(i){return n(t,r,Te({},o,{},i))},s.attrs=function(i){return n(t,r,Te({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},s}(ar,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){tn[e]=tn(e)});var ss=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Un(t),Et.registerId(this.componentId+1)}var n=e.prototype;return n.createStyles=function(t,r,o,s){var i=s(Xe(this.rules,r,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,i)},n.removeStyles=function(t,r){r.clearRules(this.componentId+t)},n.renderStyles=function(t,r,o,s){t>2&&Et.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,s)},e}();function is(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=_t.apply(void 0,[e].concat(t)),s="sc-global-"+Qt(JSON.stringify(o)),i=new ss(o,s);function l(c){var d=Jn(),h=Qn(),v=p.useContext(et),S=p.useRef(d.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(x){return typeof x=="string"&&x.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),d.server&&u(S,c,d,v,h),p.useLayoutEffect(function(){if(!d.server)return u(S,c,d,v,h),function(){return i.removeStyles(S,d)}},[S,c,d,v,h]),null}function u(c,d,h,v,S){if(i.isStatic)i.renderStyles(c,Eo,h,S);else{var x=Te({},d,{theme:sr(d,v,l.defaultProps)});i.renderStyles(c,x,h,S)}}return process.env.NODE_ENV!=="production"&&or(s),p.memo(l)}function tt(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=_t.apply(void 0,[e].concat(t)).join(""),s=Qt(o);return new Rn(s,o)}var Pt=function(){return p.useContext(et)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const b=tn,vt="reactSchedulerOutsideWrapper",Ae="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",as=is`

  #${vt} {
    font-family: ${Ae};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${vt} *,
 #${vt} *:before,
 #${vt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,cs={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},ls={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},nt=`
margin: 0;
padding: 0;
`,rt=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;b.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const we=50,Ye=24,ot=16,Ue=40,st=Ue+ot+Ye,it=84,pe=56,De=196,_e=12,ke=50,at=24,xt=16,nn=40,ds=at+xt+nn,cr=24,lr=52,Pe={topRow:`600 14px ${Ae}`,middleRow:`400 10px ${Ae}`,bottomRow:{name:`600 14px ${Ae}`,number:`600 10px ${Ae}`,hoursInDay:`400 9px ${Ae}`}},ct=3,us=1.6,fs=4.5,rn=12,Ot=24,hs="reactSchedulerCanvasHeaderWrapper",dr="reactSchedulerCanvasWrapper",Le=vt,ps=4,on=48,Ze=5,gs=40,ur=8,sn=Ye/2+2,fr=ot/2+Ye+1,hr=2,Se=60,Ee=21,pr=58,gr="reactSchedulerBody";var Ke={},ms={get exports(){return Ke},set exports(e){Ke=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t=1e3,r=6e4,o=36e5,s="millisecond",i="second",l="minute",u="hour",c="day",d="week",h="month",v="quarter",S="year",x="date",M="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,N=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,j={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(_){var A=["th","st","nd","rd"],T=_%100;return"["+_+(A[(T-20)%10]||A[T]||A[0])+"]"}},I=function(_,A,T){var B=String(_);return!B||B.length>=A?_:""+Array(A+1-B.length).join(T)+_},O={s:I,z:function(_){var A=-_.utcOffset(),T=Math.abs(A),B=Math.floor(T/60),F=T%60;return(A<=0?"+":"-")+I(B,2,"0")+":"+I(F,2,"0")},m:function _(A,T){if(A.date()<T.date())return-_(T,A);var B=12*(T.year()-A.year())+(T.month()-A.month()),F=A.clone().add(B,h),J=T-F<0,R=A.clone().add(B+(J?-1:1),h);return+(-(B+(T-F)/(J?F-R:R-F))||0)},a:function(_){return _<0?Math.ceil(_)||0:Math.floor(_)},p:function(_){return{M:h,y:S,w:d,d:c,D:x,h:u,m:l,s:i,ms:s,Q:v}[_]||String(_||"").toLowerCase().replace(/s$/,"")},u:function(_){return _===void 0}},f="en",g={};g[f]=j;var w=function(_){return _ instanceof q},$=function _(A,T,B){var F;if(!A)return f;if(typeof A=="string"){var J=A.toLowerCase();g[J]&&(F=J),T&&(g[J]=T,F=J);var R=A.split("-");if(!F&&R.length>1)return _(R[0])}else{var se=A.name;g[se]=A,F=se}return!B&&F&&(f=F),F||!B&&f},P=function(_,A){if(w(_))return _.clone();var T=typeof A=="object"?A:{};return T.date=_,T.args=arguments,new q(T)},L=O;L.l=$,L.i=w,L.w=function(_,A){return P(_,{locale:A.$L,utc:A.$u,x:A.$x,$offset:A.$offset})};var q=function(){function _(T){this.$L=$(T.locale,null,!0),this.parse(T)}var A=_.prototype;return A.parse=function(T){this.$d=function(B){var F=B.date,J=B.utc;if(F===null)return new Date(NaN);if(L.u(F))return new Date;if(F instanceof Date)return new Date(F);if(typeof F=="string"&&!/Z$/i.test(F)){var R=F.match(m);if(R){var se=R[2]-1||0,ie=(R[7]||"0").substring(0,3);return J?new Date(Date.UTC(R[1],se,R[3]||1,R[4]||0,R[5]||0,R[6]||0,ie)):new Date(R[1],se,R[3]||1,R[4]||0,R[5]||0,R[6]||0,ie)}}return new Date(F)}(T),this.$x=T.x||{},this.init()},A.init=function(){var T=this.$d;this.$y=T.getFullYear(),this.$M=T.getMonth(),this.$D=T.getDate(),this.$W=T.getDay(),this.$H=T.getHours(),this.$m=T.getMinutes(),this.$s=T.getSeconds(),this.$ms=T.getMilliseconds()},A.$utils=function(){return L},A.isValid=function(){return this.$d.toString()!==M},A.isSame=function(T,B){var F=P(T);return this.startOf(B)<=F&&F<=this.endOf(B)},A.isAfter=function(T,B){return P(T)<this.startOf(B)},A.isBefore=function(T,B){return this.endOf(B)<P(T)},A.$g=function(T,B,F){return L.u(T)?this[B]:this.set(F,T)},A.unix=function(){return Math.floor(this.valueOf()/1e3)},A.valueOf=function(){return this.$d.getTime()},A.startOf=function(T,B){var F=this,J=!!L.u(B)||B,R=L.p(T),se=function(k,V){var Q=L.w(F.$u?Date.UTC(F.$y,V,k):new Date(F.$y,V,k),F);return J?Q:Q.endOf(c)},ie=function(k,V){return L.w(F.toDate()[k].apply(F.toDate("s"),(J?[0,0,0,0]:[23,59,59,999]).slice(V)),F)},H=this.$W,W=this.$M,X=this.$D,te="set"+(this.$u?"UTC":"");switch(R){case S:return J?se(1,0):se(31,11);case h:return J?se(1,W):se(0,W+1);case d:var C=this.$locale().weekStart||0,Y=(H<C?H+7:H)-C;return se(J?X-Y:X+(6-Y),W);case c:case x:return ie(te+"Hours",0);case u:return ie(te+"Minutes",1);case l:return ie(te+"Seconds",2);case i:return ie(te+"Milliseconds",3);default:return this.clone()}},A.endOf=function(T){return this.startOf(T,!1)},A.$set=function(T,B){var F,J=L.p(T),R="set"+(this.$u?"UTC":""),se=(F={},F[c]=R+"Date",F[x]=R+"Date",F[h]=R+"Month",F[S]=R+"FullYear",F[u]=R+"Hours",F[l]=R+"Minutes",F[i]=R+"Seconds",F[s]=R+"Milliseconds",F)[J],ie=J===c?this.$D+(B-this.$W):B;if(J===h||J===S){var H=this.clone().set(x,1);H.$d[se](ie),H.init(),this.$d=H.set(x,Math.min(this.$D,H.daysInMonth())).$d}else se&&this.$d[se](ie);return this.init(),this},A.set=function(T,B){return this.clone().$set(T,B)},A.get=function(T){return this[L.p(T)]()},A.add=function(T,B){var F,J=this;T=Number(T);var R=L.p(B),se=function(W){var X=P(J);return L.w(X.date(X.date()+Math.round(W*T)),J)};if(R===h)return this.set(h,this.$M+T);if(R===S)return this.set(S,this.$y+T);if(R===c)return se(1);if(R===d)return se(7);var ie=(F={},F[l]=r,F[u]=o,F[i]=t,F)[R]||1,H=this.$d.getTime()+T*ie;return L.w(H,this)},A.subtract=function(T,B){return this.add(-1*T,B)},A.format=function(T){var B=this,F=this.$locale();if(!this.isValid())return F.invalidDate||M;var J=T||"YYYY-MM-DDTHH:mm:ssZ",R=L.z(this),se=this.$H,ie=this.$m,H=this.$M,W=F.weekdays,X=F.months,te=function(V,Q,z,y){return V&&(V[Q]||V(B,J))||z[Q].slice(0,y)},C=function(V){return L.s(se%12||12,V,"0")},Y=F.meridiem||function(V,Q,z){var y=V<12?"AM":"PM";return z?y.toLowerCase():y},k={YY:String(this.$y).slice(-2),YYYY:this.$y,M:H+1,MM:L.s(H+1,2,"0"),MMM:te(F.monthsShort,H,X,3),MMMM:te(X,H),D:this.$D,DD:L.s(this.$D,2,"0"),d:String(this.$W),dd:te(F.weekdaysMin,this.$W,W,2),ddd:te(F.weekdaysShort,this.$W,W,3),dddd:W[this.$W],H:String(se),HH:L.s(se,2,"0"),h:C(1),hh:C(2),a:Y(se,ie,!0),A:Y(se,ie,!1),m:String(ie),mm:L.s(ie,2,"0"),s:String(this.$s),ss:L.s(this.$s,2,"0"),SSS:L.s(this.$ms,3,"0"),Z:R};return J.replace(N,function(V,Q){return Q||k[V]||R.replace(":","")})},A.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},A.diff=function(T,B,F){var J,R=L.p(B),se=P(T),ie=(se.utcOffset()-this.utcOffset())*r,H=this-se,W=L.m(this,se);return W=(J={},J[S]=W/12,J[h]=W,J[v]=W/3,J[d]=(H-ie)/6048e5,J[c]=(H-ie)/864e5,J[u]=H/o,J[l]=H/r,J[i]=H/t,J)[R]||H,F?W:L.a(W)},A.daysInMonth=function(){return this.endOf(h).$D},A.$locale=function(){return g[this.$L]},A.locale=function(T,B){if(!T)return this.$L;var F=this.clone(),J=$(T,B,!0);return J&&(F.$L=J),F},A.clone=function(){return L.w(this.$d,this)},A.toDate=function(){return new Date(this.valueOf())},A.toJSON=function(){return this.isValid()?this.toISOString():null},A.toISOString=function(){return this.$d.toISOString()},A.toString=function(){return this.$d.toUTCString()},_}(),K=q.prototype;return P.prototype=K,[["$ms",s],["$s",i],["$m",l],["$H",u],["$W",c],["$M",h],["$y",S],["$D",x]].forEach(function(_){K[_[1]]=function(A){return this.$g(A,_[0],_[1])}}),P.extend=function(_,A){return _.$i||(_(A,q,P),_.$i=!0),P},P.locale=$,P.isDayjs=w,P.unix=function(_){return P(1e3*_)},P.en=g[f],P.Ls=g,P.p={},P})})(ms);const E=Ke,mr=e=>e%4===0&&e%100>0||e%400===0?366:365,an=e=>{const n=e.day();return n!==0&&n!==6},yr=(e,n)=>E(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(n,"months").daysInMonth(),vr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:an(e),isCurrentDay:e.isSame(E(),"day"),year:parseInt(e.format("YYYY"))});let It=null;const ys=e=>{if(It)return It;const n=document.createElement("canvas");n.width=12,n.height=12;const t=n.getContext("2d");return t?(t.strokeStyle="rgba(120, 137, 127, 0.045)",t.lineWidth=6,t.beginPath(),t.moveTo(-3,15),t.lineTo(15,-3),t.stroke(),It=e.createPattern(n,"repeat"),It):null},cn=(e,n,t,r,o,s,i,l=!1)=>{if(e.strokeStyle=i.colors.border,s?e.fillStyle=i.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=i.colors.primary,e.beginPath(),e.setLineDash([]),e.fillRect(n,t,r,pe),l&&!s){const u=ys(e);u&&(e.fillStyle=u,e.fillRect(n,t,r,pe))}e.strokeRect(n+.5,t+.5,r,pe)},ln=(e,n)=>{let t=0;for(const r of n)r<=e&&t++;return t*Ee},vs=(e,n,t,r,o,s=[])=>{for(let i=0;i<n;i++){const l=ln(i,s);for(let u=0;u<=t;u++){const c=E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(u,"days"),d=c.isSame(E(),"day"),h=c.isBefore(E(),"day");cn(e,u*we,i*pe+l,we,an(c),d,o,h)}}},xs=(e,n,t,r)=>{e.setLineDash([5,5]),e.strokeStyle=r.colors.border,e.moveTo(n+.5,.5),e.lineTo(n+.5,t+.5),e.stroke()},bs=(e,n,t,r,o,s=[])=>{let i=0,l=-(r.dayOfMonth-1)*_e;const u=n*pe+s.length*Ee;for(let c=0;c<=t;c++){const h=E(`${r.year}-${r.month+1}-${r.dayOfMonth}`).add(c,"weeks").isSame(E(),"week");for(let v=0;v<n;v++){const S=ln(v,s);cn(e,i,v*pe+S,it,!0,h,o)}i+=it}for(let c=0;c<t;c++){const d=yr(r,c)*_e;xs(e,l,u,o),l+=d}},ws=(e,n,t,r,o,s=[])=>{const i=E(`${r.year}-${r.month+1}-${r.dayOfMonth+1}`);for(let l=0;l<n;l++){const u=ln(l,s);for(let c=0;c<=t;c++){let d;c===Math.floor(t/2)?d=E():c>Math.floor(t/2)?d=E().add(c-Math.floor(t/2),"hours"):d=E().subtract(Math.floor(t/2)-l,"hours");const h=i.isSame(E(),"day")&&d.isSame(E(),"hour");cn(e,c*ke+ke/2-.5,l*pe+u,ke,an(d),h,o)}}},Ss=(e,n,t,r,o=!1)=>{const s=t*pe+n*Ee,i=e.canvas.width,l=s+Ee/2;e.fillStyle=r.mode==="dark"?r.colors.primary+"80":r.colors.primary,e.fillRect(0,s,i,Ee),e.strokeStyle=o?r.colors.subcontractBorder:r.colors.border,e.lineWidth=o?2:1,e.setLineDash([]),e.beginPath(),e.moveTo(0,l+.5),e.lineTo(i,l+.5),e.stroke()},Cs=(e,n,t,r,o,s,i=[],l=-1)=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(dr)){switch(n){case 0:bs(e,t,r,o,s,i);break;case 1:vs(e,t,r,o,s,i);break;case 2:ws(e,t,r,o,s,i);break}for(let c=0;c<i.length;c++)Ss(e,c,i[c],s,i[c]===l)}};var dn={},ks={get exports(){return dn},set exports(e){dn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t="week",r="year";return function(o,s,i){var l=s.prototype;l.week=function(u){if(u===void 0&&(u=null),u!==null)return this.add(7*(u-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var d=i(this).startOf(r).add(1,r).date(c),h=i(this).endOf(t);if(d.isBefore(h))return 1}var v=i(this).startOf(r).date(c).startOf(t).subtract(1,"millisecond"),S=this.diff(v,t,!0);return S<0?i(this).startOf("week").week():Math.ceil(S)},l.weeks=function(u){return u===void 0&&(u=null),this.week(u)}}})})(ks);const Ms=dn;var un={},$s={get exports(){return un},set exports(e){un=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r,o){r.prototype.dayOfYear=function(s){var i=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?i:this.add(s-i,"day")}}})})($s);const Ds=un;var fn={},Es={get exports(){return fn},set exports(e){fn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t="day";return function(r,o,s){var i=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return i(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var d,h,v,S,x=i(this),M=(d=this.isoWeekYear(),h=this.$u,v=(h?s.utc:s)().year(d).startOf("year"),S=4-v.isoWeekday(),v.isoWeekday()>4&&(S+=7),v.add(S,t));return x.diff(M,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var u=l.startOf;l.startOf=function(c,d){var h=this.$utils(),v=!!h.u(d)||d;return h.p(c)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):u.bind(this)(c,d)}}})})(Es);const _s=fn;var hn={},Ts={get exports(){return hn},set exports(e){hn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r,o){r.prototype.isBetween=function(s,i,l,u){var c=o(s),d=o(i),h=(u=u||"()")[0]==="(",v=u[1]===")";return(h?this.isAfter(c,l):!this.isBefore(c,l))&&(v?this.isBefore(d,l):!this.isAfter(d,l))||(h?this.isBefore(c,l):!this.isAfter(c,l))&&(v?this.isAfter(d,l):!this.isBefore(d,l))}}})})(Ts);const As=hn;var pn={},Ps={get exports(){return pn},set exports(e){pn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){var t,r,o=1e3,s=6e4,i=36e5,l=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,d=2592e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:c,months:d,days:l,hours:i,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},S=function(f){return f instanceof O},x=function(f,g,w){return new O(f,w,g.$l)},M=function(f){return r.p(f)+"s"},m=function(f){return f<0},N=function(f){return m(f)?Math.ceil(f):Math.floor(f)},j=function(f){return Math.abs(f)},I=function(f,g){return f?m(f)?{negative:!0,format:""+j(f)+g}:{negative:!1,format:""+f+g}:{negative:!1,format:""}},O=function(){function f(w,$,P){var L=this;if(this.$d={},this.$l=P,w===void 0&&(this.$ms=0,this.parseFromMilliseconds()),$)return x(w*v[M($)],this);if(typeof w=="number")return this.$ms=w,this.parseFromMilliseconds(),this;if(typeof w=="object")return Object.keys(w).forEach(function(_){L.$d[M(_)]=w[_]}),this.calMilliseconds(),this;if(typeof w=="string"){var q=w.match(h);if(q){var K=q.slice(2).map(function(_){return _!=null?Number(_):0});return this.$d.years=K[0],this.$d.months=K[1],this.$d.weeks=K[2],this.$d.days=K[3],this.$d.hours=K[4],this.$d.minutes=K[5],this.$d.seconds=K[6],this.calMilliseconds(),this}}return this}var g=f.prototype;return g.calMilliseconds=function(){var w=this;this.$ms=Object.keys(this.$d).reduce(function($,P){return $+(w.$d[P]||0)*v[P]},0)},g.parseFromMilliseconds=function(){var w=this.$ms;this.$d.years=N(w/c),w%=c,this.$d.months=N(w/d),w%=d,this.$d.days=N(w/l),w%=l,this.$d.hours=N(w/i),w%=i,this.$d.minutes=N(w/s),w%=s,this.$d.seconds=N(w/o),w%=o,this.$d.milliseconds=w},g.toISOString=function(){var w=I(this.$d.years,"Y"),$=I(this.$d.months,"M"),P=+this.$d.days||0;this.$d.weeks&&(P+=7*this.$d.weeks);var L=I(P,"D"),q=I(this.$d.hours,"H"),K=I(this.$d.minutes,"M"),_=this.$d.seconds||0;this.$d.milliseconds&&(_+=this.$d.milliseconds/1e3);var A=I(_,"S"),T=w.negative||$.negative||L.negative||q.negative||K.negative||A.negative,B=q.format||K.format||A.format?"T":"",F=(T?"-":"")+"P"+w.format+$.format+L.format+B+q.format+K.format+A.format;return F==="P"||F==="-P"?"P0D":F},g.toJSON=function(){return this.toISOString()},g.format=function(w){var $=w||"YYYY-MM-DDTHH:mm:ss",P={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return $.replace(u,function(L,q){return q||String(P[L])})},g.as=function(w){return this.$ms/v[M(w)]},g.get=function(w){var $=this.$ms,P=M(w);return P==="milliseconds"?$%=1e3:$=P==="weeks"?N($/v[P]):this.$d[P],$===0?0:$},g.add=function(w,$,P){var L;return L=$?w*v[M($)]:S(w)?w.$ms:x(w,this).$ms,x(this.$ms+L*(P?-1:1),this)},g.subtract=function(w,$){return this.add(w,$,!0)},g.locale=function(w){var $=this.clone();return $.$l=w,$},g.clone=function(){return x(this.$ms,this)},g.humanize=function(w){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!w)},g.milliseconds=function(){return this.get("milliseconds")},g.asMilliseconds=function(){return this.as("milliseconds")},g.seconds=function(){return this.get("seconds")},g.asSeconds=function(){return this.as("seconds")},g.minutes=function(){return this.get("minutes")},g.asMinutes=function(){return this.as("minutes")},g.hours=function(){return this.get("hours")},g.asHours=function(){return this.as("hours")},g.days=function(){return this.get("days")},g.asDays=function(){return this.as("days")},g.weeks=function(){return this.get("weeks")},g.asWeeks=function(){return this.as("weeks")},g.months=function(){return this.get("months")},g.asMonths=function(){return this.as("months")},g.years=function(){return this.get("years")},g.asYears=function(){return this.as("years")},f}();return function(f,g,w){t=w,r=w().$utils(),w.duration=function(L,q){var K=w.locale();return x(L,{$l:K},q)},w.isDuration=S;var $=g.prototype.add,P=g.prototype.subtract;g.prototype.add=function(L,q){return S(L)&&(L=L.asMilliseconds()),$.bind(this)(L,q)},g.prototype.subtract=function(L,q){return S(L)&&(L=L.asMilliseconds()),P.bind(this)(L,q)}}})})(Ps);const Os=pn;var Is="Expected a function",xr=0/0,Ys="[object Symbol]",Ls=/^\s+|\s+$/g,Ns=/^[-+]0x[0-9a-f]+$/i,Fs=/^0b[01]+$/i,Bs=/^0o[0-7]+$/i,Hs=parseInt,zs=typeof Ce=="object"&&Ce&&Ce.Object===Object&&Ce,Ws=typeof self=="object"&&self&&self.Object===Object&&self,js=zs||Ws||Function("return this")(),Zs=Object.prototype,Vs=Zs.toString,Gs=Math.max,Xs=Math.min,gn=function(){return js.Date.now()};function Us(e,n,t){var r,o,s,i,l,u,c=0,d=!1,h=!1,v=!0;if(typeof e!="function")throw new TypeError(Is);n=br(n)||0,mn(t)&&(d=!!t.leading,h="maxWait"in t,s=h?Gs(br(t.maxWait)||0,n):s,v="trailing"in t?!!t.trailing:v);function S(g){var w=r,$=o;return r=o=void 0,c=g,i=e.apply($,w),i}function x(g){return c=g,l=setTimeout(N,n),d?S(g):i}function M(g){var w=g-u,$=g-c,P=n-w;return h?Xs(P,s-$):P}function m(g){var w=g-u,$=g-c;return u===void 0||w>=n||w<0||h&&$>=s}function N(){var g=gn();if(m(g))return j(g);l=setTimeout(N,M(g))}function j(g){return l=void 0,v&&r?S(g):(r=o=void 0,i)}function I(){l!==void 0&&clearTimeout(l),c=0,r=u=o=l=void 0}function O(){return l===void 0?i:j(gn())}function f(){var g=gn(),w=m(g);if(r=arguments,o=this,u=g,w){if(l===void 0)return x(u);if(h)return l=setTimeout(N,n),S(u)}return l===void 0&&(l=setTimeout(N,n)),i}return f.cancel=I,f.flush=O,f}function mn(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Ks(e){return!!e&&typeof e=="object"}function qs(e){return typeof e=="symbol"||Ks(e)&&Vs.call(e)==Ys}function br(e){if(typeof e=="number")return e;if(qs(e))return xr;if(mn(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=mn(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ls,"");var t=Fs.test(e);return t||Bs.test(e)?Hs(e.slice(2),t?2:8):Ns.test(e)?xr:+e}var yn=Us;const Yt=[0,1,2];var bt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(bt||{});const wr=e=>Yt.includes(e),lt=e=>{var r;const t=(((r=document.getElementById(Le))==null?void 0:r.clientWidth)||0)-De;switch(e){case 1:return Math.ceil(t/we)*ct;case 2:return Math.ceil(t/ke)*ct;default:return Math.ceil(t/it)*ct}},Js=e=>lt(e)/ct,Lt=(e,n)=>{const t=lt(n)/2;let r;switch(n){case 1:r=e.subtract(t,"days");break;case 2:r=e.subtract(t,"hours");break;default:r=e.subtract(t,"weeks");break}let o;switch(n){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:r,endDate:o}},Qs=(e,n)=>{const t=Lt(e,n);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},vn=()=>{var t;return((((t=document.getElementById(Le))==null?void 0:t.clientWidth)||0)-De)*ct},Sr=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:E(),isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});E.extend(Ms),E.extend(Ds),E.extend(_s),E.extend(As),E.extend(Os);const Rs=({data:e,children:n,isLoading:t,config:r,defaultStartDate:o=E(),onRangeChange:s,handleToggleDisplayActiveUnits:i,onClearFilterData:l})=>{const{zoom:u,maxRecordsPerPage:c=50}=r,[d,h]=p.useState(u),[v,S]=p.useState(E()),[x,M]=p.useState(!1),[m,N]=p.useState(lt(d)),j=Yt[d]!==Yt[Yt.length-1],I=d!==0,O=p.useMemo(()=>Qs(v,d),[v,d]),f=Lt(v,d).startDate,g=E(f).dayOfYear(),w=vr(f),$=p.useRef(null),P=p.useRef(!1),L=p.useRef(null),[q,K]=p.useState([{x:0,y:0}]),_=p.useCallback((Y,k="auto")=>{var Q,z,y,G;const V=vn();switch(Y){case"back":return(Q=$.current)==null?void 0:Q.scrollTo({behavior:k,left:V/3});case"forward":return(z=$.current)==null?void 0:z.scrollTo({behavior:k,left:V/3});case"middle":{const D=V/ct/4;return(y=$.current)==null?void 0:y.scrollTo({behavior:k,left:V/2-D})}default:return(G=$.current)==null?void 0:G.scrollTo({behavior:k,left:V/2})}},[]),A=Y=>{K(Y)},T=p.useCallback(Y=>{const k=Js(d);let V;switch(d){case 0:V=k*7;break;case 1:V=k;break;case 2:V=Math.ceil(k/Ot);break}yn(()=>{switch((Y==="forward"||Y==="back")&&(P.current=!0),L.current=Y,Y){case"back":S(z=>z.subtract(V,"days"));break;case"forward":S(z=>z.add(V,"days"));break;case"middle":S(E());break}s==null||s(O)},300)()},[s,O,d]);p.useEffect(()=>{L.current&&(_(L.current),L.current=null)},[v,_]),p.useEffect(()=>{$.current=document.getElementById(Le),N(lt(d))},[d]),p.useEffect(()=>{const Y=()=>N(lt(d));return window.addEventListener("resize",Y),()=>window.removeEventListener("resize",Y)},[d]),p.useEffect(()=>{s==null||s(O)},[s,O]),p.useEffect(()=>{M(!1)},[o]),p.useEffect(()=>{x||(_("middle"),M(!0),S(o))},[o,x,_]);const B=()=>{t||(S(Y=>d===2?Y.add(cr,"hours"):Y.add(hr,"weeks")),s==null||s(O))},F=p.useCallback(()=>{t||T("forward")},[t,T]),J=()=>{t||(S(Y=>d===2?Y.subtract(cr,"hours"):Y.subtract(hr,"weeks")),s==null||s(O))},R=p.useCallback(()=>{!x||t||T("back")},[x,t,T]),se=p.useCallback(()=>{t||(L.current="middle",S(E()),s==null||s(O))},[t,s,O]),ie=p.useCallback(Y=>{if(t)return;const k=E(Y).startOf("day");k.isValid()&&(L.current="middle",S(k),s==null||s(O))},[t,s,O]),H=()=>X(d+1),W=()=>X(d-1),X=Y=>{wr(Y)&&(h(Y),N(lt(Y)),s==null||s(O))},te=()=>i==null?void 0:i(),{Provider:C}=Sr;return a.jsx(C,{value:{data:e,config:r,handleGoNext:B,handleScrollNext:F,handleGoPrev:J,handleScrollPrev:R,handleGoToday:se,goToDate:ie,zoomIn:H,zoomOut:W,setZoom:X,zoom:d,isNextZoom:j,isPrevZoom:I,date:v,isLoading:t,cols:m,startDate:w,dayOfYear:g,toggleDisplayActiveUnits:te,tilesCoords:q,updateTilesCoords:A,recordsThreshold:c,onClearFilterData:l,suppressNextSlideRef:P},children:n})},Ne=()=>p.useContext(Sr),Cr=(e,n,t)=>{e.canvas.width=n*window.devicePixelRatio,e.canvas.height=t*window.devicePixelRatio,e.canvas.style.width=n+"px",e.canvas.style.height=t+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},kr=(e,n)=>{if(n.length===0)return e;let t=e,r=0;for(const o of n){const s=o*pe+r*Ee;if(e>=s+Ee)r++;else if(e>=s)return o*pe+r*Ee-r*Ee}return t-r*Ee},ei=5,Mr=(e,n)=>{const t=Math.abs(n.x-e.x),r=Math.abs(n.y-e.y);return Math.sqrt(t*t+r*r)>ei},dt=(e,n,t)=>{const r=t.getBoundingClientRect();return{x:e-r.left+t.scrollLeft,y:n-r.top+t.scrollTop}},ti=({data:e,baseData:n,zoom:t,startDate:r,onEventDrop:o,onEventDrag:s,draggableConfig:i={},gridRef:l,separatorRowIndices:u=[]})=>{const c=n?n.length>0&&n[0].data.length>0&&!Array.isArray(n[0].data[0])?n.map(Y=>({...Y,data:[Y.data]})):n:e,{enabled:d=!0,isDraggable:h,resourceOnly:v=!1,isValidDrop:S}=i,[x,M]=p.useState("idle"),[m,N]=p.useState(null),[j,I]=p.useState({x:0,y:0}),[O,f]=p.useState({width:0,height:48}),[g,w]=p.useState(null),[$,P]=p.useState(!0),L=p.useRef({x:0,y:0}),q=p.useRef({x:0,y:0}),K=p.useRef({x:0,y:0}),_=p.useRef(null),A=p.useRef(null),T=p.useRef(0),B=p.useRef(null),F=p.useCallback(Y=>!d||Y.draggable===!1?!1:h?h(Y):!0,[d,h]),J=p.useCallback((Y,k)=>{const V=kr(k,u),Q=Math.floor(V/pe);let z;switch(t){case 0:z=_e*7;break;case 1:z=we;break;case 2:z=ke;break;default:z=we}const y=Math.floor(Y/z);let G;const D=E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:G=D.add(y*7,"days").toDate();break;case 1:G=D.add(y,"days").toDate();break;case 2:G=D.add(y,"hours").toDate();break;default:G=D.toDate()}return{snappedDate:G,snappedResourceIndex:Q}},[t,r,u]),R=p.useCallback((Y,k,V,Q)=>{const z=[],y=k.getTime(),G=V.getTime(),D=c.find(ne=>ne.id===Q);if(!D)return z;const Z=[];for(const ne of D.data)Array.isArray(ne)?Z.push(...ne):Z.push(ne);for(const ne of Z){if(ne.segmentId===Y.segmentId)continue;const U=ne.startDate.getTime(),ae=ne.endDate.getTime();if(y>=U&&y<ae||G>U&&G<=ae||y<=U&&G>=ae){const de=new Date(Math.max(y,U)),ge=new Date(Math.min(G,ae)),ce=ge.getTime()-de.getTime();z.push({event:ne,conflictStart:de,conflictEnd:ge,overlapDuration:ce})}}return z},[c]),se=p.useCallback((Y,k,V,Q)=>{const z=[],y=k.getTime(),G=V.getTime(),D=E(k).format("YYYY-MM-DD"),Z=c.find(U=>U.id===Q);if(!Z)return z;const ne=[];for(const U of Z.data)Array.isArray(U)?ne.push(...U):ne.push(U);for(const U of ne){if(U.segmentId===Y.segmentId)continue;const ae=U.startDate.getTime(),he=U.endDate.getTime(),de=E(U.startDate).format("YYYY-MM-DD"),ge=E(U.endDate).format("YYYY-MM-DD"),ce=E(V).format("YYYY-MM-DD");if(!(de===D||ge===D||de===ce||ge===ce||E(U.startDate).isBefore(k,"day")&&E(U.endDate).isAfter(V,"day"))||y>=ae&&y<he||G>ae&&G<=he||y<=ae&&G>=he)continue;let ee,ue;he<=y?(ee=y-he,ue="before"):(ee=ae-G,ue="after"),z.push({event:U,timeGap:ee,position:ue})}return z.sort((U,ae)=>U.timeGap-ae.timeGap)},[c]),ie=p.useCallback((Y,k,V)=>{const Q=J(k,V);let z,y;if(v)z=Y.startDate,y=Y.endDate;else{const he=E(Y.endDate).diff(Y.startDate);z=Q.snappedDate,y=E(z).add(he,"milliseconds").toDate()}let G=0,D="",Z;for(const he of e){const de=Math.max(he.data.length,1);if(Q.snappedResourceIndex<G+de){D=he.id,Z=he.capacity;break}G+=de}if(!D)return null;let ne=!0;Z!==void 0&&Y.totalPassengers!==void 0&&(ne=Y.totalPassengers<=Z);const U=R(Y,z,y,D),ae=U.length===0?se(Y,z,y,D):[];return{startDate:z,endDate:y,resourceId:D,resourceIndex:Q.snappedResourceIndex,resourceCapacity:Z,hasCapacity:ne,conflicts:U,hasConflict:U.length>0,nearbyEvents:ae}},[J,e,v,R,se]),H=p.useCallback((Y,k)=>{if(!s)return;const V=Date.now();if(V-T.current<100)return;T.current=V;const Q={event:Y,currentStartDate:k.startDate,currentEndDate:k.endDate,currentResourceId:k.resourceId,conflicts:k.conflicts};s(Q)},[s]),W=p.useCallback((Y,k)=>{if(!F(Y)||!l.current)return;k.preventDefault(),k.stopPropagation();const V=k.target.closest('[style*="left"]');let Q=0,z=0;V&&V.style.left&&V.style.top&&(Q=parseInt(V.style.left),z=parseInt(V.style.top));const y=dt(k.clientX,k.clientY,l.current);L.current={x:Q,y:z},q.current={x:k.clientX,y:k.clientY},K.current={x:y.x-Q,y:20},B.current={startDate:Y.startDate,endDate:Y.endDate,resourceId:""};for(const Z of e){for(const ne of Z.data)if(ne.some(U=>U.segmentId===Y.segmentId)){B.current.resourceId=Z.id;break}if(B.current.resourceId)break}N(Y),M("potential"),I({x:Q,y:z});let G=100,D=48;if(V){const Z=V.getBoundingClientRect();G=Z.width,D=Z.height}f({width:G,height:D})},[F,l,e,t]),X=p.useCallback(Y=>{if(!l.current)return;let k=l.current;for(;k&&k!==document.body;){const U=window.getComputedStyle(k);if(k.scrollHeight>k.clientHeight&&(U.overflowY==="auto"||U.overflowY==="scroll"||U.overflow==="auto"||U.overflow==="scroll"))break;k=k.parentElement}(!k||k===document.body)&&(k=document.documentElement);const V=k.getBoundingClientRect(),Q=Y.clientY,z=50,y=12,G=Q-V.top,D=V.bottom-Q;let Z=!1,ne=0;G<z&&G>0?(Z=!0,ne=-y*(1-G/z)):D<z&&D>0&&(Z=!0,ne=y*(1-D/z)),Z?(A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>{k.scrollTop+=ne,x==="dragging"&&X(Y)})):A.current&&(cancelAnimationFrame(A.current),A.current=null)},[l,x]),te=p.useCallback(Y=>{if(x==="idle"||x==="animating"||!m||!l.current)return;const k={x:Y.clientX,y:Y.clientY};if(x==="potential")if(Mr(q.current,k))M("dragging");else return;X(Y);const V=dt(Y.clientX,Y.clientY,l.current);_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>{const Q={x:V.x-K.current.x,y:V.y-K.current.y};I(Q);const z=ie(m,V.x,V.y);if(z&&S){const y={event:m,currentStartDate:z.startDate,currentEndDate:z.endDate,currentResourceId:z.resourceId,conflicts:z.conflicts};z.hasConflict=!S(y)}if(w(z),z){const y=z.hasCapacity!==!1;P(y),H(m,z)}})},[x,m,l,ie,H,S,X]),C=p.useCallback(async Y=>{if(x==="idle"||x==="animating")return;const k={x:Y.clientX,y:Y.clientY};if(!Mr(q.current,k)||x==="potential"){M("idle"),N(null),w(null);return}if(!m||!g||!B.current){M("idle"),N(null),w(null);return}if(g.hasCapacity===!1){P(!1),M("animating"),I(L.current),setTimeout(()=>{M("idle"),N(null),w(null),P(!0)},300);return}const Q={event:m,originalStartDate:B.current.startDate,originalEndDate:B.current.endDate,originalResourceId:B.current.resourceId,newStartDate:g.startDate,newEndDate:g.endDate,newResourceId:g.resourceId,hasConflict:g.hasConflict,conflicts:g.conflicts};let z=!0;if(o)try{const y=o(Q);z=y instanceof Promise?await y:y}catch{z=!1}z?(P(!0),M("idle"),N(null),w(null)):(P(!1),M("animating"),I(L.current),setTimeout(()=>{M("idle"),N(null),w(null),P(!0)},300))},[x,m,g,o,S]);return p.useEffect(()=>{if(x==="potential"||x==="dragging"){const Y=V=>te(V),k=V=>C(V);return document.addEventListener("mousemove",Y),document.addEventListener("mouseup",k),()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",k)}}else return()=>{}},[x,te,C]),p.useEffect(()=>()=>{_.current&&(cancelAnimationFrame(_.current),_.current=null),A.current&&(cancelAnimationFrame(A.current),A.current=null)},[]),p.useEffect(()=>{(x==="idle"||x==="animating")&&(_.current&&(cancelAnimationFrame(_.current),_.current=null),A.current&&(cancelAnimationFrame(A.current),A.current=null))},[x]),p.useEffect(()=>{(x==="dragging"||x==="potential")&&(x==="dragging"?(M("animating"),I(L.current),setTimeout(()=>{M("idle"),N(null),w(null)},300)):(M("idle"),N(null),w(null)))},[t]),p.useEffect(()=>{if((x==="dragging"||x==="potential")&&m){let Y=!1;for(const k of e){for(const V of k.data)if(V.some(Q=>Q.segmentId===m.segmentId)){Y=!0;break}if(Y)break}Y||(x==="dragging"?(M("animating"),I(L.current),setTimeout(()=>{M("idle"),N(null),w(null)},300)):(M("idle"),N(null),w(null)))}},[e,x,m]),{dragState:x,draggedEvent:m,ghostPosition:j,ghostDimensions:O,dropTarget:g,isValidDrop:$,handleDragStart:W,isDraggable:F,draggingEventId:(m==null?void 0:m.segmentId)||null,resourceOnly:v}},ni=({data:e,baseData:n,zoom:t,startDate:r,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:i={},gridRef:l,isDragging:u,separatorRowIndices:c=[]})=>{const{enabled:d=!1,isSelectable:h}=i,v=d&&!!o,S=p.useCallback(y=>{let G=0;for(const D of c)D<=y&&G++;return y*pe+G*Ee},[c]),[x,M]=p.useState("idle"),[m,N]=p.useState(null),[j,I]=p.useState(null),[O,f]=p.useState(null),[g,w]=p.useState(!1),[$,P]=p.useState([]),[L,q]=p.useState(!1),K=p.useRef(null),_=p.useRef(null),A=p.useRef(null),T=p.useRef(null),B=p.useCallback(()=>{switch(t){case 0:return _e*7;case 1:return we;case 2:return ke;default:return we}},[t]),F=p.useCallback(y=>{const G=B(),D=Math.floor(y/G),Z=E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return Z.add(D*7,"days").toDate();case 1:return Z.add(D,"days").toDate();case 2:return Z.add(D,"hours").toDate();default:return Z.toDate()}},[t,r,B]),J=p.useCallback(y=>{const G=kr(y,c),D=Math.floor(G/pe);let Z=0;for(const ne of e){const U=Math.max(ne.data.length,1);if(D<Z+U)return{resourceId:ne.id,resourceIndex:D,resourceLabel:ne.label};Z+=U}return null},[e,c]),R=p.useCallback(y=>{const G=B();return Math.floor(y/G)*G},[B]),se=p.useCallback((y,G,D,Z=[])=>{const ne=[],ae=(n||e).find(ge=>ge.id===y),he=G.getTime(),de=D.getTime();if(ae){const ge=ae.data[0],ce=ge&&Array.isArray(ge)?ae.data.flat():ae.data;for(const fe of ce){const oe=new Date(fe.startDate).getTime(),ee=new Date(fe.endDate).getTime();if(he<ee&&de>oe){const ue=new Date(Math.max(he,oe)),le=new Date(Math.min(de,ee)),be=le.getTime()-ue.getTime();ne.push({event:fe,conflictStart:ue,conflictEnd:le,overlapDuration:be})}}}for(const ge of Z){if(ge.resourceId!==y)continue;const ce=ge.startDate.getTime(),fe=ge.endDate.getTime();if(he<fe&&de>ce){const oe=new Date(Math.max(he,ce)),ee=new Date(Math.min(de,fe)),ue=ee.getTime()-oe.getTime(),le={segmentId:`pending-${ge.startDate.getTime()}`,reservationId:`pending-${ge.startDate.getTime()}`,startDate:ge.startDate,endDate:ge.endDate,occupancy:0,title:`New Event (${ge.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ne.push({event:le,conflictStart:oe,conflictEnd:ee,overlapDuration:ue})}}return ne},[e,n]),ie=p.useCallback(y=>{if(!v||u||!l.current||y.button!==0)return;const G=y.target;if(G.closest("[data-segment-id]")||G.closest("[data-multi-select-ui]"))return;const D=dt(y.clientX,y.clientY,l.current),Z=J(D.y);if(!Z)return;K.current={x:y.clientX,y:y.clientY},_.current=Z.resourceIndex;const ne=R(D.x),U=B(),ae=S(Z.resourceIndex);N(D),I(D),f({x:ne,y:ae,width:U,height:pe}),M("selecting")},[v,u,l,J,R,B,S]),H=p.useCallback(y=>{I(y);const G=B(),D=R((m==null?void 0:m.x)||0),Z=R(y.x),ne=S(_.current),U=Math.min(D,Z),ae=Math.max(D,Z)+G;f({x:U,y:ne,width:ae-U,height:pe})},[m,B,R,S]),W=p.useCallback(()=>{T.current&&(cancelAnimationFrame(T.current),T.current=null)},[]),X=p.useCallback((y,G)=>{const D=document.getElementById(Le);if(!D||!l.current)return;const Z=D.getBoundingClientRect(),ne=60,U=12,ae=y-(Z.left+De),he=Z.right-y;let de=0;ae<ne?de=-U*(1-Math.max(0,ae)/ne):he<ne&&(de=U*(1-Math.max(0,he)/ne)),W(),de!==0&&(T.current=requestAnimationFrame(()=>{D.scrollLeft+=de,H(dt(y,G,l.current)),X(y,G)}))},[l,H,W]),te=p.useCallback(y=>{if(x!=="selecting"||!l.current||_.current===null)return;const G=dt(y.clientX,y.clientY,l.current);A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>H(G)),X(y.clientX,y.clientY)},[x,l,H,X]),C=p.useCallback(y=>{if(x!=="selecting")return;if(W(),!l.current||!m||!K.current){M("idle"),N(null),I(null),f(null);return}const G=dt(y.clientX,y.clientY,l.current),D=J(m.y);if(!D){M("idle"),N(null),I(null),f(null);return}const Z=Math.min(m.x,G.x),ne=Math.max(m.x,G.x),U=F(Z),ae=F(ne),he=E(ae).hour(23).minute(59).second(0).millisecond(0).toDate();if(h&&!h(D.resourceId,U,he)){M("idle"),N(null),I(null),f(null);return}const de=se(D.resourceId,U,he,$),ge=de.length>0,ce={startDate:U,endDate:he,resourceId:D.resourceId,resourceLabel:D.resourceLabel,zoomLevel:t,hasConflict:ge,conflicts:ge?de:void 0};if(g)P(fe=>[...fe,ce]),q(!0);else if(o){const fe=o(ce),oe=ee=>{ee!=null&&ee.continueMultiSelect&&(w(!0),P([ce]),q(!0))};fe instanceof Promise?fe.then(oe):oe(fe)}M("idle"),N(null),I(null),f(null),K.current=null,_.current=null},[x,l,m,J,F,h,o,t,g,se,$,W]),Y=p.useCallback(()=>{if($.length>0&&s){q(!1);const y=s($),G=D=>{D!=null&&D.continueMultiSelect?q(!0):(P([]),w(!1),q(!1))};y instanceof Promise?y.then(G):G(y);return}P([]),w(!1),q(!1)},[$,s]),k=p.useCallback(()=>{P([]),w(!1),q(!1)},[]),V=p.useCallback(y=>{P(G=>{const D=G.filter((Z,ne)=>ne!==y);return D.length===0&&(w(!1),q(!1)),D})},[]),Q=p.useCallback((y,G)=>{P(D=>D.map((Z,ne)=>{if(ne!==y)return Z;const U={...Z,...G},ae=D.filter((de,ge)=>ge!==y),he=se(U.resourceId,U.startDate,U.endDate,ae);return{...U,hasConflict:he.length>0,conflicts:he.length>0?he:void 0}}))},[se]),z=p.useCallback(y=>{y.key==="Escape"&&(x==="selecting"?(W(),M("idle"),N(null),I(null),f(null),K.current=null,_.current=null):g&&$.length>0&&(P([]),w(!1),q(!1)))},[x,g,$.length,W]);return p.useEffect(()=>{if(x==="selecting")return document.addEventListener("mousemove",te),document.addEventListener("mouseup",C),document.addEventListener("keydown",z),()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",C),document.removeEventListener("keydown",z)}},[x,te,C,z]),p.useEffect(()=>{if(g&&$.length>0)return document.addEventListener("keydown",z),()=>{document.removeEventListener("keydown",z)}},[g,$.length,z]),p.useEffect(()=>()=>{A.current&&(cancelAnimationFrame(A.current),A.current=null),W()},[W]),p.useEffect(()=>{u&&x==="selecting"&&(W(),M("idle"),N(null),I(null),f(null),K.current=null,_.current=null)},[u,x,W]),{selectionState:x,selectionStart:m,selectionEnd:j,selectionBox:O,handleGridMouseDown:ie,isEnabled:v,pendingSelections:$,confirmSelections:Y,clearSelections:k,removeSelection:V,updateSelection:Q,isMultiSelectActive:g,hasUnconfirmedSelections:L}},ri=b.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,oi=b.div`
  position: relative;
`,si=b.canvas``;b.canvas``;const $r=b.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,ii=p.forwardRef(function({zoom:n,rows:t,data:r,baseData:o,onTileClick:s,onEventDrop:i,onEventDrag:l,draggableConfig:u,onDragStateChange:c,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v,separatorRowIndices:S=[],subcontractSeparatorRow:x=-1},M){const m=p.useRef(!1),{handleScrollNext:N,handleScrollPrev:j,date:I,isLoading:O,cols:f,startDate:g,suppressNextSlideRef:w}=Ne(),$=p.useRef(null),P=p.useRef(null),L=p.useRef(null),q=p.useRef(null),[K,_]=p.useState(!1),A=Pt(),{dragState:T,draggedEvent:B,ghostPosition:F,ghostDimensions:J,dropTarget:R,isValidDrop:se,handleDragStart:ie,isDraggable:H,draggingEventId:W,resourceOnly:X}=ti({data:r,baseData:o||r,zoom:n,startDate:g,onEventDrop:i,onEventDrag:l,draggableConfig:u,gridRef:q,separatorRowIndices:S});p.useEffect(()=>{const ce=T==="dragging"||T==="potential";_(ce),c&&c(ce)},[T,c]);const te=p.useRef(!1),C=p.useRef(I),Y=p.useRef(null);p.useEffect(()=>{var le;const ce=C.current;if(C.current=I,!te.current){te.current=!0;return}if(w!=null&&w.current){w.current=!1;return}const fe=q.current;if(!(fe!=null&&fe.animate))return;const oe=I.isAfter(ce)?48:-48;(le=Y.current)==null||le.cancel(),fe.style.willChange="transform";const ee=fe.animate([{transform:`translateX(${oe}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),ue=()=>{fe.style.willChange=""};ee.onfinish=ue,ee.oncancel=ue,Y.current=ee},[I,w]);const{selectionState:k,selectionBox:V,handleGridMouseDown:Q,pendingSelections:z,confirmSelections:y,clearSelections:G,removeSelection:D,updateSelection:Z,isMultiSelectActive:ne,hasUnconfirmedSelections:U}=ni({data:r,baseData:o||r,zoom:n,startDate:g,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v,gridRef:q,isDragging:K,separatorRowIndices:S}),ae=p.useCallback(ce=>{ce.preventDefault()},[]),he=p.useCallback(ce=>{ce.preventDefault()},[]),de=S.length*Ee,ge=p.useCallback(ce=>{const fe=vn(),oe=t*pe+1+de;Cr(ce,fe,oe),Cs(ce,n,t,f,g,A,S,x)},[f,g,t,n,A,S,x,de]);return p.useEffect(()=>{if(!$.current)return;const ce=$.current.getContext("2d");if(!ce)return;const fe=()=>ge(ce);return window.addEventListener("resize",fe),()=>window.removeEventListener("resize",fe)},[ge]),p.useEffect(()=>{const ce=$.current;if(!ce)return;ce.style.letterSpacing="1px";const fe=ce.getContext("2d");fe&&ge(fe)},[I,t,n,ge]),p.useEffect(()=>{if(!P.current)return;const ce=new IntersectionObserver(fe=>{fe[0].isIntersecting&&!m.current&&(m.current=!0,N(),setTimeout(()=>{m.current=!1},1e3))},{root:document.getElementById(Le)});return ce.observe(P.current),()=>{ce.disconnect()}},[N]),p.useEffect(()=>{if(!L.current)return;const ce=new IntersectionObserver(fe=>{fe[0].isIntersecting&&!m.current&&(m.current=!0,j(),setTimeout(()=>{m.current=!1},1e3))},{root:document.getElementById(Le),rootMargin:`0px 0px 0px -${De}px`});return ce.observe(L.current),()=>{ce.disconnect()}},[j]),a.jsxs(ri,{id:dr,children:[a.jsxs(oi,{ref:ce=>{typeof M=="function"?M(ce):M&&(M.current=ce),q.current=ce},onMouseDown:Q,style:{cursor:d?"crosshair":"default"},children:[a.jsx($r,{position:"left",ref:L}),a.jsx(_n,{isLoading:O,position:"left"}),a.jsx(si,{ref:$,onDragStart:ae,onDragOver:he,style:{userSelect:T==="dragging"?"none":"auto"}}),a.jsx(El,{zoom:n,startDate:g}),a.jsx(Nc,{data:r,zoom:n,onTileClick:s,onDragStart:ie,isDraggable:H,draggingEventId:W,separatorRowIndices:S}),a.jsx($r,{ref:P,position:"right"}),a.jsx(_n,{isLoading:O,position:"right"}),(T==="dragging"||T==="animating")&&a.jsx(ll,{draggedEvent:B,ghostPosition:F,ghostDimensions:J,dropTarget:R,isValidDrop:se,dragState:T,zoom:n,data:r,resourceOnly:X,separatorRowIndices:S}),a.jsx(fl,{selectionBox:V,isSelecting:k==="selecting"}),ne&&z.length>0&&a.jsx($l,{selections:z,data:r,zoom:n,startDate:g,onRemove:D,onUpdate:Z,separatorRowIndices:S})]}),ne&&U&&z.length>0&&a.jsx(bl,{selections:z,onConfirm:y,onClear:G,onRemove:D})]})}),Dr=e=>{const n=E.duration(e,"seconds"),t=n.hours(),r=n.minutes();return{hours:t,minutes:r}},Er=e=>{let n=0,t=0,r=0;return e.forEach(o=>{n+=o.minutes;const s=Math.floor(n/Se);t+=o.hours+s,r+=n%Se,r>=Se&&(t++,r-=Se)}),{hours:t,minutes:r}},_r=(e,n)=>{let t=ur;switch(n){case 0:t=gs;break;case 1:t=ur;break;case 2:t=1;break}const r=()=>{let s=t-e.hours-1,i=Se-e.minutes;return i===Se&&(s++,i=0),{hours:Math.max(0,s),minutes:s<0?0:i}},o=()=>{const s=e.hours-t,i=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:i}};return{free:r(),overtime:o()}},ai=(e,n,t)=>{const r=n.isoWeek(),o=e.map(c=>{const d=E(c.startDate).isoWeek(),h=E(c.startDate).isoWeekday(),v=E(c.endDate).isoWeek(),S=E(c.endDate).isoWeekday(),{hours:x,minutes:M}=Dr(c.occupancy);if(r===d){const m=(Ze+1-h)*x,N=(Ze+1-h)*M;return{hours:Math.max(0,m),minutes:N}}else if(r===v){const m=S>Ze?Ze*x:S*x,N=S>Ze?Ze*M:S*M;return{hours:m,minutes:N}}else if(E(n).isBetween(c.startDate,c.endDate))return{hours:Ze*x,minutes:Ze*M};return{hours:0,minutes:0}}),{hours:s,minutes:i}=Er(o),{free:l,overtime:u}=_r({hours:s,minutes:i},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,i)},free:l,overtime:u}},ci=(e,n,t,r)=>{const o=n.isoWeekday(),s=e.map(d=>{const{hours:h,minutes:v}=Dr(d.occupancy);return o<=(r?7:5)?{hours:h,minutes:v}:{hours:0,minutes:0}}),{hours:i,minutes:l}=Er(s),{free:u,overtime:c}=_r({hours:i,minutes:l},t);return{taken:{hours:Math.max(0,i),minutes:Math.max(0,l)},free:u,overtime:c}},li=(e,n)=>{let t=0;e.forEach(l=>{const u=E(l.startDate).hour(),c=E(l.endDate).hour(),d=n.hour(),h=E(l.endDate).minute(),v=E(l.startDate).minute();u<d&&c>d?t+=Se:u===d&&c===d&&v&&h?t+=h?h-v:Se-v:u===d&&c>=d?t+=v?Se-v:Se:c===d&&h&&(t+=h)});const r=Math.floor(t/Se),o=t%Se,s=r||o?0:1,i=r?0:o?Se-o:0;return{taken:{hours:r,minutes:o},free:{hours:s,minutes:i},overtime:{hours:0,minutes:0}}},di=(e,n,t,r,o=!1)=>{if(n<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(i=>r===1?E(t).isBetween(i.startDate,i.endDate,"day","[]"):r===2?E(t).isBetween(i.startDate,i.endDate,"hour","[]"):E(i.startDate).isBetween(E(t),E(t).add(6,"days"),"day","[]")||E(t).isBetween(E(i.startDate),E(i.endDate),"day","[]"));switch(r){case 1:return ci(s,t,r,o);case 2:return li(s,t);default:return ai(s,t,r)}},ui=(e,n,t,r,o,s,i=!1)=>{let l="weeks",u;switch(s){case 0:l="weeks",u=it;break;case 1:l="days",u=we;break;case 2:l="hours",u=ke;break}const c=Math.ceil(s===2?(t.x-.5*u)/u:t.x/u),d=E(`${n.year}-${n.month+1}-${n.dayOfMonth}T${n.hour}:00:00`).add(c-1,l),h=Math.ceil(t.y/pe),v=r.findIndex((N,j,I)=>I.slice(0,j+1).reduce((f,g)=>f+g,0)>=h),S=s===2?(c+1)*u:c*u,x=(h-1)*pe+pe,M=di(o[v],v,d,s,i),m=E(e.startDate).isSame(E(e.endDate),"day");return{coords:{x:S,y:x},mouseCoords:t,resourceIndex:v,disposition:M,reservationData:{startTime:E(e.startDate).format("hh:mm A"),startDate:E(e.startDate).format("MMM D, YYYY"),endTime:E(e.endDate).format("hh:mm A"),endDate:E(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,departureAddress:e.departureAddress,destinationAddress:e.destinationAddress,returnAddress:e.returnAddress,isOneDayEvent:m,passengers:e.totalPassengers}}};function fi(e,n){if(e.length<=1)return[];if(e.length<=n){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const r=Math.min(n-1,t.length);return t.slice(0,r).map(o=>o.index).sort((o,s)=>o-s)}function hi(e){const n={categories:[],capacityToCategoryId:new Map},t=new Set;for(const d of e)!d.isSubcontract&&d.capacity!=null&&t.add(d.capacity);const r=[...t].sort((d,h)=>d-h);if(r.length<2)return n;const o=Math.min(5,r.length),s=fi(r,o),i=[];let l=0;for(const d of s)i.push({min:r[l],max:r[d-1],values:r.slice(l,d)}),l=d;i.push({min:r[l],max:r[r.length-1],values:r.slice(l)});const u=[],c=new Map;return i.forEach((d,h)=>{const v="__auto_cat_"+h,S=d.min===d.max?d.min+" pax":d.min+"-"+d.max+" pax";u.push({id:v,name:S,minPassengers:d.min,maxPassengers:d.max});for(const x of d.values)c.set(x,v)}),{categories:u,capacityToCategoryId:c}}const pi=(e,n,t,r)=>{const o=[];let s=0,i=[],l=0;return n.length>r?(n.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};l>=r&&(o.push(i),s+=i.length,i=[],l=0),l++,i.push(d)}),t.slice(s).length<=r&&(i=[],n.slice(s).forEach((u,c)=>{const d={id:e[c+s].id,label:e[c+s].label,data:u,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,categoryId:e[c+s].categoryId};i.push(d),c===n.length-s-1&&o.push(i)})),o):(n.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,categoryId:e[c].categoryId};i.push(d)}),o.push(i),o)};var xn={},gi={get exports(){return xn},set exports(e){xn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r){r.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(gi);const mi=xn;var bn={},yi={get exports(){return bn},set exports(e){bn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return function(t,r){r.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(yi);const vi=bn,xi=e=>{const n=[];for(const t of e){let r=!1;if(n.length)for(const o of n){let s=!1;for(let i=0;i<o.length;i++){const l=E(t.startDate).startOf("day"),u=E(t.endDate).startOf("day"),c=E(o[i].startDate).startOf("day"),d=E(o[i].endDate).startOf("day");if(l.isBetween(c,d,null,"[]")||u.isBetween(c,d,null,"[]")||l.isBefore(c,"minute")&&u.isAfter(d,"minute")||l.isAfter(c,"minute")&&u.isBefore(d,"minute")){s=!0;break}}if(!s){o.push(t),r=!0;break}}r||n.push([t])}return n};E.extend(mi),E.extend(vi);const Tr=new WeakMap,bi=e=>{const n=Tr.get(e);if(n)return n;const t=[...e].sort((o,s)=>{const i=E(o.startDate),l=E(s.startDate),u=i.startOf("day").diff(l.startOf("day"),"day");return u!==0?u:i.diff(l)}),r=xi(t);return Tr.set(e,r),r},wi=e=>{const n=[[],[]],[t,r]=e.reduce((o,s)=>{const i=bi(s.data);return o[0].push(i),o[1].push(Math.max(i.length,1)),o},n);return{projectsPerPerson:t,rowsPerPerson:r}},Si=e=>e?e.map(n=>n.data.length).reduce((n,t)=>n+Math.max(t,1),0):0,Ci=e=>{const{recordsThreshold:n}=Ne(),[t,r]=p.useState(0),[o,s]=p.useState(0),i=p.useRef(null);p.useEffect(()=>{i.current=document.getElementById(Le)},[]);const{projectsPerPerson:l,rowsPerPerson:u}=p.useMemo(()=>wi(e),[e]),c=p.useMemo(()=>pi(e,l,u,n),[e,l,n,u]),d=p.useCallback(()=>{c[o].length&&i.current&&(i.current.scroll({top:0}),r(m=>m+c[Math.max(o,0)].length),s(m=>Math.min(m+1,c.length-1)),window.scroll({top:0}))},[o,c]),h=p.useCallback(()=>{c[o].length&&(r(m=>Math.max(m-c[o-1].length,0)),s(m=>Math.max(m-1,0)))},[o,c]),v=p.useCallback(()=>{r(0),s(0)},[]),S=t+c[o].length,x=p.useMemo(()=>u.slice(t,S),[S,u,t]),M=p.useMemo(()=>l.slice(t,S),[S,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:M,rowsPerItem:x,totalRowsPerPage:Si(c[o]),next:d,previous:h,reset:v}};var wn={},ki={get exports(){return wn},set exports(e){wn=e}};(function(e,n){(function(t,r){e.exports=r()})(Ce,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var r=["th","st","nd","rd"],o=t%100;return"["+t+(r[(o-20)%10]||r[o]||r[0])+"]"}}})})(ki);const Mi=wn;var Sn={},$i={get exports(){return Sn},set exports(e){Sn=e}};(function(e,n){(function(t,r){e.exports=r(Ke)})(Ce,function(t){function r(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var o=r(t);function s(v){return v%10<5&&v%10>1&&~~(v/10)%10!=1}function i(v,S,x){var M=v+" ";switch(x){case"m":return S?"minuta":"minutę";case"mm":return M+(s(v)?"minuty":"minut");case"h":return S?"godzina":"godzinę";case"hh":return M+(s(v)?"godziny":"godzin");case"MM":return M+(s(v)?"miesiące":"miesięcy");case"yy":return M+(s(v)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),u="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,d=function(v,S){return c.test(S)?l[v.month()]:u[v.month()]};d.s=u,d.f=l;var h={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:d,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(v){return v+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(h,null,!0),h})})($i);const Di=Sn;var Cn={},Ei={get exports(){return Cn},set exports(e){Cn=e}};(function(e,n){(function(t,r){e.exports=r(Ke)})(Ce,function(t){function r(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=r(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(u,c,d){var h=s[d];return Array.isArray(h)&&(h=h[c?0:1]),h.replace("%d",u)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return o.default.locale(l,null,!0),l})})(Ei);const _i=Cn;var kn={},Ti={get exports(){return kn},set exports(e){kn=e}};(function(e,n){(function(t,r){e.exports=r(Ke)})(Ce,function(t){function r(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=r(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),i="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,u=function(d,h){return l.test(h)?s[d.month()]:i[d.month()]};u.s=i,u.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:u,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(d){return d+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Ti);const Ai=kn;var Mn={},Pi={get exports(){return Mn},set exports(e){Mn=e}};(function(e,n){(function(t,r){e.exports=r(Ke)})(Ce,function(t){function r(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var o=r(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(i){return i+"º"}};return o.default.locale(s,null,!0),s})})(Pi);const Oi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract"},translateCode:"en-GB",dayjsTranslations:Mi},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca"},translateCode:"pl-PL",dayjsTranslations:Di},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"Un día",passengers:"Pax"},subcontract:"Subcontrato"},translateCode:"es-ES",dayjsTranslations:Mn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas"},translateCode:"lt-LT",dayjsTranslations:Ai},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer"},translateCode:"de-DE",dayjsTranslations:_i}];class Ii{constructor(){so(this,"locales",Oi)}getLocales(){return this.locales}addLocales(n){this.locales.push(n)}}const Nt=new Ii,Ar=p.createContext({localesData:Nt.getLocales(),currentLocale:Nt.getLocales()[0],setCurrentLocale:()=>{}}),Yi=({children:e,lang:n,translations:t})=>{const[r,o]=p.useState("en"),s=Nt.getLocales(),i=p.useCallback(()=>{const h=s.find(v=>v.id===r);return typeof(h==null?void 0:h.dayjsTranslations)=="object"&&E.locale(h.dayjsTranslations),h||s[0]},[r,s]),[l,u]=p.useState(i()),c=h=>{localStorage.setItem("locale",h.translateCode),u(h)};p.useEffect(()=>{t==null||t.forEach(h=>{s.find(S=>S.id===h.id)||Nt.addLocales(h)})},[s,t]),p.useEffect(()=>{const h=localStorage.getItem("locale"),v=n??h??"en";localStorage.setItem("locale",v),o(v),u(i())},[i,n]);const{Provider:d}=Ar;return a.jsx(d,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},Fe=()=>p.useContext(Ar).currentLocale.lang,Li=e=>re.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},re.createElement("defs",null,re.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),re.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},re.createElement("stop",{offset:.47,stopColor:"#ccc"}),re.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),re.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),re.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),re.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),re.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),re.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),re.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),re.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),re.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),re.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),re.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Ni=b.div`
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
`,Bi=({onTileClick:e})=>{const{feelingEmpty:n}=Fe();return a.jsxs(Ni,{onClick:e,children:[a.jsx(Li,{}),a.jsx(Fi,{children:n})]})},Hi=b.div`
  position: relative;
  display: flex;
`,zi=b.div`
  position: relative;
  margin-left: ${De};
  display: flex;
  flex-direction: column;
  contain: paint;
`,Wi=b.div`
  width: calc(${({width:e})=>e}px - ${De}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${De}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,$n={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:bt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function ji(e,n){const t=n?[...n].sort((l,u)=>l.maxPassengers-u.maxPassengers):[],r=[];for(const l of t){const u=e.filter(c=>!c.isSubcontract&&c.categoryId===l.id);u.length>0&&r.push({type:"category",category:l,items:u})}const o=t.length>0,s=e.filter(l=>!l.isSubcontract&&(!l.categoryId||!o));s.length>0&&o?r.push({type:"uncategorized",items:s}):s.length>0&&r.push({type:"uncategorized",items:s});const i=e.filter(l=>l.isSubcontract);return i.length>0&&r.push({type:"subcontract",items:i}),r}const Zi=({data:e,baseData:n,categories:t,onTileClick:r,onItemClick:o,toggleTheme:s,topBarWidth:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v})=>{const[S,x]=p.useState($n),[M,m]=p.useState(e),[N,j]=p.useState(!1),[I,O]=p.useState(!1),[f,g]=p.useState(""),[w,$]=p.useState(new Set),{zoom:P,startDate:L,isLoading:q,config:{includeTakenHoursOnWeekendsInDayView:K,showTooltip:_,showThemeToggle:A}}=Ne(),T=p.useRef(null),B=p.useRef(null),[F,J]=p.useState(124),{page:R,projectsPerPerson:se,rowsPerItem:ie,currentPageNum:H,pagesAmount:W,next:X,previous:te,reset:C}=Ci(M),{effectiveCategories:Y,effectivePage:k}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:R};const ee=hi(R);if(ee.categories.length===0)return{effectiveCategories:void 0,effectivePage:R};const ue=R.map(le=>{if(le.isSubcontract||le.capacity==null)return le;const be=ee.capacityToCategoryId.get(le.capacity);return be?{...le,categoryId:be}:le});return{effectiveCategories:ee.categories,effectivePage:ue}},[t,R]),V=p.useCallback(ee=>{$(ue=>{const le=new Set(ue);return le.has(ee)?le.delete(ee):le.add(ee),le})},[]),Q=p.useMemo(()=>{const ee=[],ue=Y?[...Y].sort((le,be)=>le.maxPassengers-be.maxPassengers):[];for(const le of ue)k.some(be=>!be.isSubcontract&&be.categoryId===le.id)&&ee.push(le.id);return k.some(le=>le.isSubcontract)&&ee.push("__subcontract__"),ee},[Y,k]),z=p.useCallback(()=>{$(new Set)},[]),y=p.useCallback(()=>{$(new Set(Q))},[Q]),{visiblePage:G,visibleRowsPerItem:D,visibleTotalRows:Z,visibleProjectsPerPerson:ne,separatorRowIndices:U,subcontractSeparatorRow:ae}=p.useMemo(()=>{const ee=ji(k,Y),ue=((Y==null?void 0:Y.length)??0)>0,le=new Map;R.forEach((Me,ht)=>le.set(Me.id,ht));const be=[],Oe=[],ze=[],We=[];let qe=0,Bt=-1;for(const Me of ee)if(Me.type==="subcontract"||Me.type==="category"&&ue){const pt=Me.type==="subcontract"?"__subcontract__":Me.category.id,gt=w.has(pt);if(We.push(qe),Me.type==="subcontract"&&(Bt=qe),!gt)for(const Je of Me.items){const Ht=le.get(Je.id)??0,zt=ie[Ht];be.push(Je),Oe.push(zt),ze.push(se[Ht]),qe+=zt}}else for(const pt of Me.items){const gt=le.get(pt.id)??0,Je=ie[gt];be.push(pt),Oe.push(Je),ze.push(se[gt]),qe+=Je}const Ve=Oe.reduce((Me,ht)=>Me+ht,0);return{visiblePage:be,visibleRowsPerItem:Oe,visibleTotalRows:Ve,visibleProjectsPerPerson:ze,separatorRowIndices:We,subcontractSeparatorRow:Bt}},[k,Y,R,w,ie,se]),he=p.useRef(yn((ee,ue,le,be,Oe,ze)=>{if(!T.current)return;const{tile:We,segmentId:qe}=ce(ee);if(!qe||!We){j(!1),x($n);return}const Bt=ge(qe,ue),Ve=T.current.getBoundingClientRect(),Me=We.getBoundingClientRect(),ht={x:ee.clientX-Ve.left,y:ee.clientY-Ve.top},pt={x:ee.clientX-Ve.left,y:ee.clientY-Ve.top},gt={x:Me.left-Ve.left,y:Me.top-Ve.top,width:Me.width,height:Me.height},{coords:{x:Je,y:Ht},resourceIndex:zt,disposition:_l,reservationData:Tl}=ui(Bt,le,ht,be,Oe,ze,K);x({coords:{x:Je,y:Ht},mouseCoords:pt,resourceIndex:zt,disposition:_l,reservationData:Tl,tileBounds:gt}),j(!0)},4)),de=p.useRef(yn((ee,ue)=>{C(),m(ee.map(le=>({...le,data:le.data.filter(be=>{const{title:Oe,description:ze,subtitle:We}=be;return(Oe==null?void 0:Oe.toLowerCase().includes(ue.toLowerCase()))||(We==null?void 0:We.toLowerCase().includes(ue.toLowerCase()))||(ze==null?void 0:ze.toLowerCase().includes(ue.toLowerCase()))})})).filter(le=>le.data.length>0))},500)),ge=(ee,ue)=>{if(ee)return ue.flatMap(le=>le.data).find(le=>le.segmentId===ee)},ce=ee=>{if(!ee.target)return{tile:null,segmentId:null};const ue=ee.target.closest("[data-segment-id]");return ue?{tile:ue,segmentId:ue.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},fe=ee=>{const ue=ee.target.value;g(ue),de.current.cancel(),ue?de.current(e,ue):(C(),m(e))},oe=p.useCallback(()=>{he.current.cancel(),j(!1),x($n)},[]);return p.useEffect(()=>{const ee=le=>he.current(le,e,L,D,ne,P),ue=T.current;if(ue)return ue.addEventListener("mousemove",ee),ue.addEventListener("mouseleave",oe),()=>{ue.removeEventListener("mousemove",ee),ue.removeEventListener("mouseleave",oe)}},[he,oe,ne,D,L,P,e]),p.useEffect(()=>{f?(de.current.cancel(),de.current(e,f)):m(e)},[e,f]),p.useLayoutEffect(()=>{const ee=B.current;if(!ee)return;const ue=()=>J(ee.offsetHeight);ue();const le=new ResizeObserver(ue);return le.observe(ee),()=>le.disconnect()},[]),a.jsxs(Hi,{children:[a.jsx(Va,{headerHeight:F,data:k,categories:Y,pageNum:H,pagesAmount:W,rows:ie,onLoadNext:X,onLoadPrevious:te,searchInputValue:f,onSearchInputChange:fe,onItemClick:o,collapsedGroups:w,onToggleGroup:V,allGroupIds:Q,onExpandAll:z,onCollapseAll:y}),a.jsxs(zi,{children:[a.jsx(xc,{ref:B,zoom:P,topBarWidth:i,showThemeToggle:A,toggleTheme:s}),e.length?a.jsx(ii,{data:G,baseData:n||e,zoom:P,rows:Z,ref:T,onTileClick:r,onEventDrop:l,onEventDrag:u,draggableConfig:c,onDragStateChange:O,onTimeRangeSelect:d,onMultiTimeRangeSelect:h,clickToAddConfig:v,separatorRowIndices:U,subcontractSeparatorRow:ae}):a.jsx(Wi,{width:i,children:q?a.jsx(_n,{isLoading:q,position:"left"}):a.jsx(Bi,{})}),_&&N&&!I&&(S==null?void 0:S.resourceIndex)>-1&&a.jsx(Qc,{tooltipData:S})]})]})},Vi=b.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 9px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.primary};
`,Dn=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-self: ${({$at:e})=>e??"start"};
  justify-content: ${({$at:e})=>e==="end"?"flex-end":e==="center"?"center":"flex-start"};
`,Gi=b.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Pr=b.button`
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
`,Xi=b.button`
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
`,Ui=b.span`
  font-size: 14px;
  font-weight: 750;
  color: #183d3d;
  margin: 0 4px;
  text-transform: capitalize;
  white-space: nowrap;
`,Ki=b.div`
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
`,Or=b.button`
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
`,qi=b.label`
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
`,Ji=b.button`
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
`,Qi=b.span`
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
`,ut=({children:e,sw:n=2})=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",children:e}),Ri=()=>{var n,t;const e=document.getElementById(gr);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(n=e==null?void 0:e.requestFullscreen)==null||n.call(e)},ea=()=>{const{config:e,date:n,zoom:t,handleGoNext:r,handleGoPrev:o,handleGoToday:s,setZoom:i,goToDate:l,toggleDisplayActiveUnits:u}=Ne();Fe();const{filterButtonState:c=-1}=e,d=()=>{var h;(h=document.querySelector(`#${Le} input[placeholder]`))==null||h.focus()};return a.jsxs(Vi,{width:0,children:[a.jsxs(Dn,{$at:"start",children:[a.jsx(Ui,{children:n.locale(E.locale()).format("MMMM YYYY")}),a.jsxs(Ki,{children:[a.jsx("button",{className:t===2?"on":"",onClick:()=>i(2),children:"Día"}),a.jsx("button",{className:t===0?"on":"",onClick:()=>i(0),children:"Semana"}),a.jsx("button",{className:t===1?"on":"",onClick:()=>i(1),children:"Mes"})]}),e.showJumpToDate!==!1&&a.jsxs(qi,{children:[a.jsxs(ut,{children:[a.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),a.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),a.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",a.jsx("input",{type:"date",onChange:h=>h.target.value&&l(h.target.value)})]})]}),a.jsx(Dn,{$at:"center",children:a.jsxs(Gi,{children:[a.jsx(Pr,{onClick:o,"aria-label":"Anterior",children:a.jsx(ut,{children:a.jsx("path",{d:"m15 18-6-6 6-6"})})}),a.jsx(Xi,{onClick:s,children:"Hoy"}),a.jsx(Pr,{onClick:r,"aria-label":"Siguiente",children:a.jsx(ut,{children:a.jsx("path",{d:"m9 18 6-6-6-6"})})})]})}),a.jsxs(Dn,{$at:"end",children:[a.jsxs(Ji,{onClick:d,children:[a.jsxs(ut,{children:[a.jsx("circle",{cx:"11",cy:"11",r:"7"}),a.jsx("path",{d:"m20 20-3.2-3.2"})]}),"Buscar",a.jsx("span",{className:"k",children:"⌘K"})]}),e.showFilterButton!==!1&&c>=0&&a.jsxs(Or,{$primary:!!c,onClick:u,children:[a.jsx(ut,{children:a.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&a.jsx(Qi,{children:c})]}),e.showFullscreenButton!==!1&&a.jsxs(Or,{onClick:Ri,children:[a.jsx(ut,{children:a.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]})]})]})},ta={add:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>re.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),re.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},En=({iconName:e,width:n,height:t,fill:r,className:o})=>{const{colors:s}=Pt(),i=ta[e];return i?a.jsx(i,{style:{transition:".5s ease"},fill:r??s.accent,width:n,height:t,className:o}):null},na=(e,n,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[n];b.button`
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
  ${({theme:e,variant:n,disabled:t})=>na(e,n,t)}
`;const ra=b.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${pr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ae};
`,oa=b.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,sa=b.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,ia=b.div`
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
`,aa=b.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,ca=b.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,la=b.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
  background: ${({$sev:e})=>e===2?"#c6483d":e===1?"#d98a22":"#93b1a6"};
`,da=b.div`
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
`,ua=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,fa=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`,ha=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,pa=b.div`
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
`,ga=()=>{const{date:e,zoom:n,data:t,goToDate:r}=Ne(),o=Fe(),s=p.useRef(null),[i,l]=p.useState(null),u=p.useMemo(()=>Array.from({length:12},(f,g)=>E().month(g).format("MMM").toUpperCase()),[o]),c=e.year(),d=p.useMemo(()=>E(new Date(c,0,1)),[c]),h=p.useMemo(()=>E(new Date(c+1,0,1)).diff(d,"day"),[c,d]),v=f=>f.diff(d,"day")/h*100,S=p.useMemo(()=>{const f=Math.ceil(h/7),g=new Array(f).fill(0),w=new Array(f).fill(0);for(const P of t??[])for(const L of P.data??[]){const q=E(L.startDate);if(q.year()!==c)continue;const K=Math.floor(q.diff(d,"day")/7);if(K<0||K>=f)continue;g[K]+=1;const _=L.readiness==="sin_chofer"?2:L.readiness==="sin_avisar"?1:0;_>w[K]&&(w[K]=_)}const $=Math.max(1,...g);return g.map((P,L)=>({h:P/$*100,sev:w[L]}))},[t,c,d,h]),x=E(),M=x.year()===c?v(x):null,m=f=>{const{startDate:g,endDate:w}=Lt(f,n),$=Math.max(0,v(g));return{left:$,width:Math.min(100,v(w))-$,startDate:g,endDate:w}},N=m(e),j=i?m(i.d):null,I=f=>`${f.date()} ${u[f.month()]}`,O=f=>{var $;const g=($=s.current)==null?void 0:$.getBoundingClientRect();if(!g)return null;const w=Math.min(1,Math.max(0,(f-g.left)/g.width));return{f:w,d:d.add(Math.round(w*h),"day")}};return a.jsxs(ra,{children:[a.jsxs(oa,{children:["Navegar",a.jsx("br",{}),"por fecha"]}),a.jsxs(sa,{ref:s,onClick:f=>{const g=O(f.clientX);g&&r(g.d.toDate())},onMouseMove:f=>{const g=O(f.clientX);g&&l({left:g.f*100,d:g.d})},onMouseLeave:()=>l(null),children:[a.jsx(ia,{children:u.map((f,g)=>a.jsx("span",{style:{left:`${v(E(new Date(c,g,1)))}%`},children:f},g))}),u.map((f,g)=>g===0?null:a.jsx(aa,{style:{left:`${v(E(new Date(c,g,1)))}%`}},g)),a.jsx(ca,{children:S.map((f,g)=>a.jsx(la,{$sev:f.sev,style:{height:`${f.h}%`}},g))}),a.jsx(ua,{style:{left:`${N.left}%`,width:`${N.width}%`}}),M!==null&&a.jsx(da,{style:{left:`${M}%`},children:a.jsx("span",{children:"HOY"})}),i&&j&&a.jsxs(a.Fragment,{children:[a.jsx(fa,{style:{left:`${j.left}%`,width:`${j.width}%`}}),a.jsx(ha,{style:{left:`${i.left}%`}}),a.jsx(pa,{style:{left:`${i.left}%`},children:`${I(j.startDate)} – ${I(j.endDate)}`})]})]})]})},ma=b.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,ya=b.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?pr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,va=b.div`
  position: relative;
`,xa=({data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,schedulerRef:d,onTimeRangeSelect:h,onMultiTimeRangeSelect:v,clickToAddConfig:S})=>{const{goToDate:x,handleGoToday:M,zoomIn:m,zoomOut:N,zoom:j}=Ne();return p.useImperativeHandle(d,()=>({goToDate:x,goToToday:M,setZoom:I=>{if(!wr(I))return;const O=I-j;if(O>0)for(let f=0;f<O;f++)m();else for(let f=0;f<Math.abs(O);f++)N()}}),[x,M,j,m,N]),a.jsx(Zi,{data:e,baseData:n,categories:t,onTileClick:r,topBarWidth:o,onItemClick:s,toggleTheme:i,onEventDrop:l,onEventDrag:u,draggableConfig:c,onTimeRangeSelect:h,onMultiTimeRangeSelect:v,clickToAddConfig:S})},ba=p.forwardRef(function({data:n,categories:t,baseData:r,config:o,startDate:s,onRangeChange:i,onTileClick:l,handleToggleDisplayActiveUnits:u,onClearFilterData:c,onItemClick:d,isLoading:h,onEventDrop:v,onEventDrag:S,draggableConfig:x,onTimeRangeSelect:M,onMultiTimeRangeSelect:m,clickToAddConfig:N},j){var T;const I=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),O=p.useRef(null),f=p.useRef(null),[g,w]=p.useState((T=O.current)==null?void 0:T.clientWidth),$=p.useMemo(()=>E(s),[s]),[P,L]=p.useState(I.defaultTheme??"light"),q=()=>{L(P==="light"?"dark":"light")},K=P==="light"?cs:ls,_=I.theme?I.theme[K.mode]:{},A={...K,colors:{...K.colors,..._}};return p.useImperativeHandle(j,()=>({goToDate:B=>{var F;return(F=f.current)==null?void 0:F.goToDate(B)},goToToday:()=>{var B;return(B=f.current)==null?void 0:B.goToToday()},setZoom:B=>{var F;return(F=f.current)==null?void 0:F.setZoom(B)}}),[]),p.useLayoutEffect(()=>{const B=()=>{O.current&&w(O.current.clientWidth)};return B(),window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)},[]),a.jsxs(a.Fragment,{children:[a.jsx(as,{}),a.jsx(os,{theme:A,children:a.jsx(Yi,{lang:I.lang,translations:I.translations,children:a.jsx(Rs,{data:n,isLoading:!!h,config:I,onRangeChange:i,defaultStartDate:$,handleToggleDisplayActiveUnits:u,onClearFilterData:c,children:a.jsxs(ma,{id:gr,children:[a.jsx(ya,{showScroll:!!n.length,$footer:I.showOverview!==!1&&!!n.length,id:Le,ref:O,children:a.jsx(va,{children:a.jsx(xa,{data:n,baseData:r,categories:t,onTileClick:l,topBarWidth:g??0,onItemClick:d,toggleTheme:q,onEventDrop:v,onEventDrag:S,draggableConfig:x,schedulerRef:f,onTimeRangeSelect:M,onMultiTimeRangeSelect:m,clickToAddConfig:N})})}),I.showOverview!==!1&&!!n.length&&a.jsx(ga,{})]})})})})]})}),wa=b.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:n})=>e==="next"?`1px solid ${n.colors.border}`:"none"};
`,Sa=b.button`
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
`,Ca=b.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ka=b.p`
  ${nt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,Ir=({intent:e,onClick:n,icon:t,isVisible:r,pageNum:o,pagesAmount:s})=>{const{loadNext:i,loadPrevious:l}=Fe(),u=e==="next"?`${i} ${o+2}/${s}`:`${l} ${o}/${s}`;return a.jsx(wa,{intent:e,children:a.jsxs(Sa,{onClick:n,isVisible:r,children:[t&&a.jsx(Ca,{children:t}),a.jsx(ka,{children:u})]})})},Ma=b.div`
  min-width: ${De+"px"};
  max-width: ${De+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,$a=b.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: ${({$height:e})=>e}px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${De}px;
  background-color: ${({theme:e})=>e.colors.background};
  z-index: 3;
`,Da=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,Ea=b.input`
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
`,_a=b.div`
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
`,Ta=b.button`
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
`,Aa=tt`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,Pa=b.div`
  display: flex;
  align-items: ${({rows:e})=>e>1?"start":"center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${pe}px;
  height: calc(${pe}px * ${({rows:e})=>e});
  border-top: 1px solid
    ${({theme:e,$isSubcontract:n})=>n?e.colors.subcontractBorder+"33":e.colors.border};
  border-left: 3px solid
    ${({theme:e,$isSubcontract:n})=>n?e.colors.subcontractBorder:"transparent"};
  background-color: ${({theme:e,$isSubcontract:n})=>n?e.colors.subcontractBg:"transparent"};
  transition: 0.5s ease;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Aa} 200ms ease-out;
  }
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,Oa=b.div`
  display: flex;
  align-items: center;
`,Ia=b.div`
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
`,Ya=b.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,La=b.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,Yr=b.p`
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
`,Na=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),Fa=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[a.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),a.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),a.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),a.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),a.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),Ba=()=>a.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),a.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),Ha=({id:e,item:n,rows:t,onItemClick:r,isSubcontract:o})=>a.jsx(Pa,{title:n.title,clickable:typeof r=="function",rows:t,$isSubcontract:o,onClick:()=>r==null?void 0:r({id:e,label:n}),children:a.jsxs(Oa,{children:[a.jsx(Ia,{$provider:o,children:Na(n.icon)?a.jsx(Ya,{src:n.icon,alt:""}):o?a.jsx(Ba,{}):a.jsx(Fa,{})}),a.jsxs(La,{children:[a.jsx(Yr,{isMain:!0,children:n.title}),a.jsx(Yr,{children:n.subtitle})]})]})}),za=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 11px 0 9px;
  height: 21px;
  color: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractText:e.colors.accent};
  background: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractBorder+"24":e.colors.accent+"14"};
  border-left: 3px solid
    ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractBorder:"transparent"};
  border-bottom: 1px solid
    ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractBorder:e.colors.border};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractBorder+"33":e.colors.accent+"22"};
  }
`,Wa=b.span`
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
`,ja=b.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:n})=>n==="subcontract"?e.colors.subcontractText:e.colors.accent};
  flex-shrink: 0;
`,Za=b.div`
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
`,Lr=({label:e,count:n,isCollapsed:t,onToggle:r,variant:o="category"})=>a.jsxs(za,{$variant:o,onClick:r,title:e,children:[a.jsx(Za,{$collapsed:t,children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),a.jsx(Wa,{$variant:o,children:e}),a.jsx(ja,{$variant:o,children:n})]}),Va=({data:e,categories:n,headerHeight:t,rows:r,onLoadNext:o,onLoadPrevious:s,pageNum:i,pagesAmount:l,searchInputValue:u,onSearchInputChange:c,onItemClick:d,collapsedGroups:h,onToggleGroup:v,allGroupIds:S,onExpandAll:x,onCollapseAll:M})=>{const[m,N]=p.useState(!1),j=Fe(),I=()=>N(_=>!_),O=n?[...n].sort((_,A)=>_.maxPassengers-A.maxPassengers):[],f=O.length>0,g=S.length>0,w=g&&h.size===S.length;g&&h.size;const $=e.filter(_=>_.isSubcontract),P=j.subcontract??"Subcontract",L=_=>{const A=e.indexOf(_);return a.jsx(Ha,{id:_.id,item:_.label,rows:r[A],onItemClick:d,isSubcontract:_.isSubcontract},_.id)},q=_=>{const A=e.filter(F=>!F.isSubcontract&&F.categoryId===_.id);if(A.length===0)return null;const T=h.has(_.id),B=_.name;return a.jsxs("div",{children:[a.jsx(Lr,{label:B,count:A.length,isCollapsed:T,onToggle:()=>v(_.id),variant:"category"}),!T&&A.map(L)]},_.id)},K=e.filter(_=>!_.isSubcontract&&(!_.categoryId||!f));return a.jsxs(Ma,{children:[a.jsxs($a,{$height:t,children:[a.jsxs(Da,{children:[a.jsxs(_a,{isFocused:m,children:[a.jsx(Ea,{placeholder:j.search,value:u,onChange:c,onFocus:I,onBlur:I}),a.jsx(En,{iconName:"search"})]}),g&&a.jsx(Ta,{title:w?"Expand all":"Collapse all",onClick:w?x:M,$allCollapsed:w,children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:w?a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),a.jsx(Ir,{intent:"previous",isVisible:i!==0,onClick:s,icon:a.jsx(En,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:i,pagesAmount:l})]}),f?O.map(q):K.map(L),f&&K.length>0&&K.map(L),$.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(Lr,{label:P,count:$.length,isCollapsed:h.has("__subcontract__"),onToggle:()=>v("__subcontract__"),variant:"subcontract"}),!h.has("__subcontract__")&&$.map(L)]}),a.jsx(Ir,{intent:"next",isVisible:i!==l-1,onClick:o,icon:a.jsx(En,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:i,pagesAmount:l})]})},Ga=b.div`
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
`,Xa=tt`
from{
    left: -100%;
}
to{
    left: 100%;
}`,Ua=b.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Xa} 1s infinite;
`,_n=({isLoading:e,position:n})=>e?a.jsx(Ga,{position:n,children:a.jsx(Ua,{})}):null,Be=(e,n)=>{const{ctx:t,x:r,y:o,width:s,height:i,textYPos:l,label:u,font:c,isBottomRow:d,fillStyle:h,topText:v,bottomText:S,strokeStyle:x,labelBetweenCells:M}=e;if(t.beginPath(),t.strokeStyle=x??n.colors.border,t.setLineDash([]),u&&c&&l){t.fillStyle=n.colors.gridBackground,t.fillRect(r,o,s,i),M?(t.moveTo(r,o),t.lineTo(r+s,o),t.stroke(),t.moveTo(r,o+i),t.lineTo(r+s,o+i),t.stroke(),t.moveTo(r+s/2,o+i),t.lineTo(r+s/2,o+i-5),t.stroke()):t.strokeRect(r+.5,o+.5,s,i),t.font=c;const m=r+s/2-t.measureText(u).width/2;t.textBaseline="middle",t.fillStyle=n.colors.accent,t.fillText(u,m,l)}if(d&&h&&v&&S){t.fillStyle=h,t.fillRect(r,o,s,i),t.strokeRect(r+.5,o+.5,s,i),t.font=v.font;const m=r+s/2-t.measureText(v.label).width/2;t.fillStyle=v.color,t.fillText(v.label,m,v.y),t.font=S.font;const N=r+s/2-t.measureText(S.label).width/2;t.fillStyle=S.color,t.fillText(S.label,N,S.y)}},Tn=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return t?o==="bottomRow"?n.colors.placeholder:n.colors.accent:r?o==="bottomRow"?n.colors.placeholder:n.colors.textPrimary:n.colors.placeholder},Ka=(e,n,t,r)=>{const o=st-Ue/us,s=st-Ue/fs,i=Ye+ot;let l=0;for(let u=0;u<n;u++){const c=vr(E(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(u,"days")),d=c.isCurrentDay;if(Be({ctx:e,x:l,y:i,width:we,height:Ue,isBottomRow:!0,fillStyle:d?r.colors.currentDay:c.isBusinessDay?r.colors.gridBackground:r.colors.primary,topText:{y:o,label:d?"":c.dayName.toUpperCase(),font:Pe.bottomRow.name,color:Tn({isCurrent:!1,isBusinessDay:c.isBusinessDay},r)},bottomText:{y:s,label:`${c.dayOfMonth}`,font:d?`700 10px ${Ae}`:Pe.bottomRow.number,color:d?r.colors.today:Tn({isCurrent:!1,isBusinessDay:c.isBusinessDay,variant:"bottomRow"},r)}},r),d){const S=l+we/2,x=o-13/2;e.save(),e.fillStyle=r.colors.today,e.beginPath(),e.roundRect?e.roundRect(S-30/2,x,30,13,5):e.rect(S-30/2,x,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Ae}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",S,x+13/2+.5),e.restore()}l+=we}},qa=(e,n,t,r)=>{let o=-(t.dayOfMonth-1)*_e;const s=Ye;let l=t.month;for(let u=0;u<n;u++){l>=rn&&(l=0);const c=yr(t,u)*_e;Be({ctx:e,x:o,y:s,width:c,height:ot,textYPos:fr,label:E().month(l).format("MMMM").toUpperCase(),font:Pe.bottomRow.number},r),o+=c,l++}},Ja=(e,n,t)=>{let o=0,s=0,i=E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month();o=-n.dayOfMonth*we+we;for(let l=0;l<rn;l++)i>rn-1&&(i=0),s=E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(l,"months").daysInMonth()*we,Be({ctx:e,x:o,y:0,width:s,height:Ye,textYPos:sn,label:E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()+`                                                                                                  ${E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).month(i).format("MMMM YYYY").toUpperCase()}`,font:Pe.topRow},t),o+=s,i++},Qa=(e,n,t,r)=>{const o=7*we,s=Ye,i=e.canvas.width/o+o,l=n.weekOfYear;let u=0;for(let c=0;c<i;c++){const d=E(`${n.year}-${n.month+1}-${n.dayOfMonth}`).day();let h=(l+c)%lr;h<=0&&(h+=lr),d!==1&&c===0&&(u=-d*we+we),Be({ctx:e,x:u,y:s,width:o,height:ot,textYPos:fr,label:`${t.toUpperCase()} ${h}`,font:Pe.middleRow},r),u+=o}},Ra=(e,n)=>{const{isCurrent:t,isBusinessDay:r,variant:o}=e;return o==="yearView"?t?n.colors.tertiary:n.colors.gridBackground:t?n.colors.currentDay:r?n.colors.primary:n.colors.secondary},ec=(e,n,t,r,o)=>{const s=st-Ue/1.6,i=st-Ue/4.5,l=Ye+ot;let u=0;for(let c=0;c<n;c++){const d=E(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),h=d.isSame(E(),"week");Be({ctx:e,x:u,y:l,width:it,height:Ue,isBottomRow:!0,fillStyle:h?o.colors.today+"26":Ra({isCurrent:h,variant:"yearView"},o),topText:{y:s,label:d.isoWeek().toString(),font:h?`700 14px ${Ae}`:Pe.bottomRow.name,color:h?o.colors.today:Tn({isCurrent:h},o)},bottomText:{y:i,label:r.toUpperCase(),font:Pe.middleRow,color:o.colors.placeholder}},o),u+=it}},tc=(e,n,t,r)=>{const s=n.year,i=e.canvas.width*2;let l=0,u=0,c=(mr(s)-t+1)*_e,d=0;for(;l+d<=i;)u>0&&(c=mr(s+u)*_e),d+c>i&&u>0&&(c=Math.ceil((i-d)/_e)*_e),Be({ctx:e,x:l,y:0,width:c,height:Ye,textYPos:sn,label:(s+u).toString(),font:Pe.topRow},r),l+=c,d+=c,u++},nc=(e,n,t,r)=>{const o=Math.floor(n/Ot)+2,s=Ot*ke;let u=-E(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*ke+.5*ke;for(let c=0;c<o;c++){const d=E(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Be({ctx:e,x:u,y:at,width:s,height:xt,textYPos:at+xt/2+2,label:d,font:Pe.bottomRow.number},r),u+=s}},rc=(e,n,t,r)=>{const o=Math.ceil(n/Ot),s=E(`${t.year}-${t.month+1}-${t.dayOfMonth}`),i=s.add(o-1,"days"),l=s.month(),u=i.add(1,"day").month(),c=l===u?1:2;let d=.5*ke;for(let h=0;h<c;h++){const v=E(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),x=E(`${t.year}-${t.month+h+1}-01T:23:59:59`).endOf("month"),M=x.format("MMMM").toUpperCase(),m=x.diff(v,"hour")+1,N=h===0?m*ke:n*ke;Be({ctx:e,x:d,y:0,width:N,height:at,textYPos:sn,label:M,font:Pe.topRow},r),d+=N}},oc=(e,n,t,r)=>{let o=0;const s=at+xt,i=E(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=ke;for(let u=0;u<n;u++){const c=i.add(u,"hours").format("h:00a").toUpperCase();Be({ctx:e,x:o,y:s,width:l,height:nn,label:c,font:Pe.bottomRow.hoursInDay,textYPos:at+xt+nn/2+2,labelBetweenCells:!0},r),o+=ke}},sc=(e,n,t,r,o,s,i)=>{switch(n){case 0:tc(e,r,s,i),qa(e,t,r,i),ec(e,t,r,o,i);break;case 1:Ja(e,r,i),Qa(e,r,o,i),Ka(e,t,r,i);break;case 2:rc(e,t,r,i),nc(e,t,r,i),oc(e,t,r,i);break}},ic=b.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,ac=b.div`
  position: sticky;
  left: ${De}px;
  width: calc(${({$width:e})=>e}px - ${De}px);
  z-index: 3;
`,cc=b.div`
  height: ${st}px;
  display: block;
`,lc=b.canvas``,dc={transfer:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M4 8h13l-3-3"}),a.jsx("path",{d:"M20 16H7l3 3"})]}),sun:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"12",r:"4"}),a.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),a.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),a.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:a.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:a.jsxs(a.Fragment,{children:[a.jsx("path",{d:"M12 3 2 20h20z"}),a.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:a.jsxs(a.Fragment,{children:[a.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),a.jsx("path",{d:"M12 7.5V12l3 2"})]})},He=({name:e,className:n,strokeWidth:t=2})=>a.jsx("svg",{className:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:dc[e]}),uc=b.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,Nr=b.span`
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
`,Ft=b.span`
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
`,fc=b.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,hc=b.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,pc=b.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,gc=b.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,mc=b.span`
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
`,yc=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],vc=()=>a.jsxs(uc,{children:[a.jsx(Nr,{children:"Leyenda"}),a.jsxs(Ft,{children:[a.jsx(He,{name:"transfer"})," Transfer"]}),a.jsxs(Ft,{children:[a.jsx(He,{name:"sun"})," Gira 1 día"]}),a.jsxs(Ft,{children:[a.jsx(He,{name:"tour"})," Gira multidía"]}),a.jsxs(Ft,{children:[a.jsx(fc,{children:"SUB"})," Subcontrato"]}),a.jsx(hc,{}),a.jsxs(Nr,{children:["Estado ",a.jsx("em",{children:"franja izq. + punto esq."})]}),yc.map(e=>a.jsxs(pc,{children:[a.jsx(gc,{style:{background:e.stripe}}),a.jsx(mc,{style:{color:e.color},children:a.jsx(He,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),xc=p.forwardRef(function({zoom:n,topBarWidth:t,showThemeToggle:r,toggleTheme:o},s){const{week:i}=Fe(),{date:l,cols:u,dayOfYear:c,startDate:d,config:h}=Ne(),v=p.useRef(null),S=Pt(),x=p.useCallback(M=>{const m=vn(),j=(n===2?ds:st)+1;Cr(M,m,j),sc(M,n,u,d,i,c,S)},[u,c,d,i,n,S]);return p.useEffect(()=>{if(!v.current)return;const M=v.current.getContext("2d");if(!M)return;const m=()=>x(M);return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[x]),p.useEffect(()=>{const M=v.current;if(!M)return;M.style.letterSpacing="1px";const m=M.getContext("2d");m&&x(m)},[l,n,x]),a.jsxs(ic,{ref:s,children:[(h.showTopbar!==!1||h.showLegend!==!1)&&a.jsxs(ac,{$width:t,children:[h.showTopbar!==!1&&a.jsx(ea,{width:t,showThemeToggle:r,toggleTheme:o}),h.showLegend!==!1&&a.jsx(vc,{})]}),a.jsx(cc,{id:hs,children:a.jsx(lc,{ref:v})})]})}),bc=(e,n,t)=>{let r;switch(t){case 0:r=_e;break;case 2:r=ke;break;default:r=we}const s=e.startDate.startOf("day"),i=e.endDate.startOf("day"),l=n.startDate.startOf("day"),u=n.endDate.startOf("day"),c=()=>{let d;switch(t){case 2:d=(e.startDate.diff(n.startDate,"minute")/Se+1)*r-r/2;break;default:d=s.diff(l,"day")*r}return Math.max(0,d)};if(e.startDate.isAfter(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(e.startDate,"minute")/Se*r,50);break;default:d=Math.max(i.diff(s,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isBefore(n.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(n.startDate,"minute")/Se*r+.5*r,50);break;default:d=Math.max(i.diff(l,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isAfter(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(e.startDate,"minute")/Se*r,50);break;default:d=Math.max(u.diff(s,"day")*r+r,50)}return{x:c(),width:d}}if(e.startDate.isBefore(n.startDate)&&e.endDate.isAfter(n.endDate)){let d;switch(t){case 2:d=Math.max(n.endDate.diff(n.startDate,"minute")/Se*r,50);break;default:d=Math.max(u.diff(l,"day")*r+r,50)}return{x:c(),width:d}}return{x:c(),width:50}},wc=(e,n,t,r,o,s)=>{const i=e*pe+ps,l=n.hour(),u=t.hour();let c,d,h,v;switch(s){case 2:{c=E(r),d=E(o),h=E(n).hour(l).minute(0),v=E(t).hour(u).minute(0);break}default:{c=E(r).hour(0).minute(0),d=E(o).hour(23).minute(59),h=n,v=t;break}}return{...bc({startDate:c,endDate:d},{startDate:h,endDate:v},s),y:i}},Fr=e=>{if(!e)return"white";const n=[];for(let o=1;o<6;o+=2)n.push(parseInt(e.slice(o,o+2),16)/255);const t=n.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"};b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,b.p`
  ${nt}
  ${rt}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const Sc=tt`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,Cc=b.button`
  ${nt}
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
  cursor: ${({isDraggable:e,isDragging:n})=>e?n?"grabbing":"grab":"not-allowed"};
  opacity: ${({isDragging:e})=>e?.3:1};
  transition: opacity 0.2s ease;
  /* Motion (gated on reduced-motion): fade/scale a newly-mounted tile in; glide survivors to a new row when a
     unit/group above them is added/removed/collapsed (top only — left/width recompute on horizontal scroll-load);
     and a subtle lift + deeper shadow on hover. transform/box-shadow are transitioned so the hover lift and the
     exit shrink are smooth. translateY (not scale) on hover to avoid blurring the sticky floating text body. */
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Sc} 180ms ease-out;
    transition: opacity 0.2s ease, top 220ms cubic-bezier(0.16, 1, 0.3, 1), transform 160ms ease,
      box-shadow 160ms ease;
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
`,kc=b.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 7px 0 0 7px;
  z-index: 3;
  pointer-events: none;
`,Mc=b.div`
  position: sticky;
  left: ${De+4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
`,Br=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.25;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,$c=b.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,Dc=b.span`
  ${rt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,Ec=b.span`
  ${rt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,_c=b.span`
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
`,Tc=b.div`
  ${rt}
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
`,Hr=b.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,zr=b.span`
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
`,Wr=b.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,Ac=b.div`
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
`,jr=b.span`
  font-size: 8.5px;
  font-weight: 750;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  font-variant-numeric: tabular-nums;
  background: ${({$end:e})=>e?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.95)"};
  color: ${({$end:e})=>e?"#3A4C46":"#183D3D"};
`,Pc=34,Oc={sin_chofer:{stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},sin_avisar:{stripe:"#D98A22",icon:"warn",color:"#D98A22"},notificado:{stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},confirmado:{stripe:"#2E8B63",icon:"check",color:"#2E8B63"}},Ic="#3E8E5A",Yc="#D98A22",Zr=({row:e,data:n,zoom:t,isSubcontract:r=!1,onTileClick:o,onDragStart:s,isDragging:i=!1,isDraggable:l=!0,yOffset:u=0,exiting:c=!1})=>{const{date:d}=Ne(),h=Lt(d,t),{y:v,x:S,width:x}=wc(e,h.startDate,h.endDate,n.startDate,n.endDate,t),{colors:M}=Pt(),m=p.useRef(null),N=E(n.startDate).isSame(E(n.endDate),"day"),j=n.eventType===bt.Tour,I=n.eventType===bt.Transfer,O=N&&(j||I),f=K=>{m.current={x:K.clientX,y:K.clientY},l&&s&&(K.preventDefault(),s(n,K))},g=K=>{if(m.current){const _=Math.abs(K.clientX-m.current.x),A=Math.abs(K.clientY-m.current.y);Math.sqrt(_*_+A*A)<=5&&(o==null||o(n)),m.current=null}else o==null||o(n)},w={left:`${S}px`,top:`${v+u}px`,backgroundColor:`${n.bgColor??M.defaultTile}`,width:`${x}px`,color:Fr(n.bgColor??"")},$=!r&&n.readiness?Oc[n.readiness]:null,P=r&&n.subcontractConfirmed===!1,L=r?P?Yc:Ic:$==null?void 0:$.stripe,q=K=>a.jsxs(Cc,{"data-segment-id":n.segmentId,style:w,onClick:g,onMouseDown:f,onDragStart:_=>_.preventDefault(),isDraggable:l,isDragging:i,$unconfirmed:P,$exiting:c,children:[L&&a.jsx(kc,{style:{background:L}}),K]});return q(O?a.jsxs(a.Fragment,{children:[(r||$)&&a.jsx(Hr,{$sm:!0,children:r?a.jsx(Wr,{children:"SUB"}):$&&a.jsx(zr,{$sm:!0,style:{color:$.color},children:a.jsx(He,{name:$.icon,strokeWidth:$.icon==="check"?2.6:2.2})})}),a.jsxs(Ac,{$transfer:I,children:[a.jsx(He,{name:I?"transfer":"sun",strokeWidth:2.4}),x>=Pc&&a.jsxs(a.Fragment,{children:[a.jsx(jr,{children:E(n.startDate).format("HH:mm")}),!I&&a.jsx(jr,{$end:!0,children:E(n.endDate).format("HH:mm")})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(Hr,{children:r?a.jsx(Wr,{children:"SUB"}):$&&a.jsx(zr,{style:{color:$.color},children:a.jsx(He,{name:$.icon,strokeWidth:$.icon==="check"?2.6:2.2})})}),n.bookingNumber&&a.jsx(_c,{children:n.bookingNumber}),a.jsxs(Mc,{children:[a.jsxs(Br,{$pad:!0,children:[a.jsx($c,{children:a.jsx(He,{name:I?"transfer":"tour"})}),a.jsx(Dc,{children:n.title})]}),n.subtitle&&a.jsx(Br,{children:a.jsx(Ec,{children:n.subtitle})}),n.driver&&a.jsxs(Tc,{children:[a.jsx(He,{name:"person"}),n.driver]})]})]}))},Vr=(e,n)=>{let t=0;for(const r of n)e>=r&&t++;return t*Ee},Lc=b.div`
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
`,Nc=({data:e,zoom:n,onTileClick:t,onDragStart:r,isDraggable:o,draggingEventId:s,separatorRowIndices:i=[]})=>{const{nodes:l,liveMap:u}=p.useMemo(()=>{const x=new Map;let M=0;return{nodes:e.map((N,j)=>{if(j>0&&(M+=Math.max(e[j-1].data.length,1)),!N.data.some(I=>I.length>0)){const I=Vr(M,i);return[a.jsx(Lc,{style:{top:`${M*pe+I}px`},children:"Disponible"},`dispo-${N.id}`)]}return N.data.map((I,O)=>I.map(f=>{const g=s===f.segmentId,w=o?o(f):!1,$=O+M,P=Vr($,i);return x.set(f.segmentId,{project:f,absoluteRow:$,yOffset:P,isSubcontract:!!N.isSubcontract}),a.jsx(Zr,{row:$,data:f,zoom:n,isSubcontract:N.isSubcontract,onTileClick:t,onDragStart:r,isDragging:g,isDraggable:w,yOffset:P},f.segmentId)}))}).flat(2),liveMap:x}},[e,t,n,r,o,s,i]),c=p.useRef(new Map),d=p.useRef([]),[h,v]=p.useState([]);p.useEffect(()=>()=>d.current.forEach(clearTimeout),[]),p.useEffect(()=>{const x=c.current;c.current=u;const M=[];if(x.forEach((j,I)=>{u.has(I)||M.push(j)}),v(j=>{let I=j.filter(O=>!u.has(O.project.segmentId));for(const O of M)I.some(f=>f.project.segmentId===O.project.segmentId)||(I=[...I,O]);return I}),!M.length)return;const m=new Set(M.map(j=>j.project.segmentId)),N=setTimeout(()=>{v(j=>j.filter(I=>!m.has(I.project.segmentId)))},220);d.current.push(N)},[u]);const S=h.filter(x=>!u.has(x.project.segmentId)).map(x=>a.jsx(Zr,{row:x.absoluteRow,data:x.project,zoom:n,isSubcontract:x.isSubcontract,yOffset:x.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},x.project.segmentId));return a.jsx(a.Fragment,{children:[...l,...S]})};b.div`
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
`;const Fc=b.div`
  position: absolute;
  width: 240px;
  background: ${({theme:e})=>e.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
  font-size: 12px;
`,Bc=b.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Hc=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`,zc=b.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
`,Wc=b.span`
  background: ${({$type:e})=>e==="transfer"?"#dbeafe":"#dcfce7"};
  color: ${({$type:e})=>e==="transfer"?"#1e40af":"#166534"};
  font-size: 9px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
`,jc=b.div`
  ${nt}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Zc=b.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
`,Vc=b.div`
  padding: 10px 12px;
`,Gc=b.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,Gr=b.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,Xr=b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,Ur=b.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Kr=b.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,qr=b.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Xc=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Uc=b.div``,Kc=b.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,qc=b.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Jr=b.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,wt=b.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,St=b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Ct=b.div`
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
`;b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.div``,b.span``,b.div``,b.div``,b.div``,b.div``,b.p``,b.span``;const Jc={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",salida:"Salida",destino:"Destino",regreso:"Regreso",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Qc=({tooltipData:e})=>{const{mouseCoords:n,reservationData:t}=e,r=p.useRef(null),[o,s]=p.useState("below"),i=Fe(),l={...Jc,...i.tooltip};p.useLayoutEffect(()=>{if(!r.current||!n)return;const S=r.current,{width:x,height:M}=S.getBoundingClientRect(),m=S.parentElement;if(!m)return;const N=m.getBoundingClientRect(),j=12,I=4,O=N.height-n.y,f=N.width-n.x;let g=n.x+j,w=n.y+j,$="below";f<x+j&&(g=n.x-x-j),O<M+j&&(w=n.y-M-j,$="above"),g=Math.max(I,Math.min(g,N.width-x-I)),w=Math.max(I,Math.min(w,N.height-M-I)),s($),S.style.left=`${g}px`,S.style.top=`${w}px`},[n]);const u=t.reservationType===bt.Tour,c=u&&t.isOneDayEvent,d=()=>u?c?"oneday":"tour":"transfer",h=()=>u?c?l.oneDay:l.tour:l.transfer,v=[t.groupName&&{label:l.groupName,value:t.groupName},t.driver&&{label:l.driver,value:t.driver},t.passengers&&{label:l.passengers,value:String(t.passengers)},t.flightNumber&&{label:l.flightNumber,value:t.flightNumber}].filter(Boolean);return a.jsxs(Fc,{ref:r,$position:o,children:[a.jsxs(Bc,{children:[a.jsxs(Hc,{children:[a.jsx(zc,{children:t.bookingNumber}),a.jsx(Wc,{$type:d(),children:h()})]}),a.jsx(jc,{children:t.eventName}),t.client&&a.jsx(Zc,{children:t.client})]}),a.jsxs(Vc,{children:[a.jsxs(Gc,{children:[a.jsxs(Gr,{children:[a.jsx(Xr,{children:l.startDate}),a.jsxs(Ur,{children:[a.jsx(Kr,{children:t.startDate})," ",a.jsx(qr,{children:t.startTime})]})]}),u&&t.endDate&&a.jsxs(Gr,{$isEnd:!0,children:[a.jsx(Xr,{children:l.endDate}),a.jsxs(Ur,{children:[a.jsx(Kr,{children:t.endDate})," ",a.jsx(qr,{children:t.endTime})]})]})]}),v.length>0&&a.jsx(Xc,{children:v.map((S,x)=>a.jsxs(Uc,{children:[a.jsx(Kc,{children:S.label}),a.jsx(qc,{children:S.value})]},x))}),(t.departureAddress||t.destinationAddress||t.returnAddress)&&a.jsxs(Jr,{children:[t.departureAddress&&a.jsxs(wt,{children:[a.jsx(St,{children:l.salida}),a.jsx(Ct,{children:t.departureAddress})]}),t.destinationAddress&&a.jsxs(wt,{children:[a.jsx(St,{children:l.destino}),a.jsx(Ct,{children:t.destinationAddress})]}),t.returnAddress&&a.jsxs(wt,{children:[a.jsx(St,{children:l.regreso}),a.jsx(Ct,{children:t.returnAddress})]})]}),(t.serviceNotes||t.reservationNotes)&&a.jsxs(Jr,{children:[t.serviceNotes&&a.jsxs(wt,{children:[a.jsx(St,{children:l.serviceNotes}),a.jsx(Ct,{children:t.serviceNotes})]}),t.reservationNotes&&a.jsxs(wt,{children:[a.jsx(St,{children:l.reservationNotes}),a.jsx(Ct,{children:t.reservationNotes})]})]})]})]})};b.div`
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
`;const Rc=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,el=b.div`
  position: absolute;
  height: ${on}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:n,$animateToY:t})=>e&&n!==void 0&&t!==void 0?`transform: translate3d(${n}px, ${t}px, 0);`:""}
`,tl=b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,Qr=b.p`
  ${nt}
  ${rt}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,nl=b.p`
  ${nt}
  ${rt}
`,rl=b.div`
  position: sticky;
  left: ${De+16}px;
  overflow: hidden;
`,ol=b.div`
  position: absolute;
  height: ${on}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:n})=>e?n?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,sl=b.div`
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
`,il=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,al=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,cl=b.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:n})=>e?n?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:n})=>e?n?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,Rr=b.div`
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
`,eo=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,to=b.div`
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
`,no=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,An=b.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,Pn=b.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,ft=b.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,ro=b.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,ll=({draggedEvent:e,ghostPosition:n,ghostDimensions:t,dropTarget:r,isValidDrop:o,dragState:s,data:i,resourceOnly:l,separatorRowIndices:u=[]})=>{const c=Fe(),d=O=>{let f=0;for(const g of u)g<=O&&f++;return O*pe+f*Ee},[h,v]=p.useState(null),[S,x]=p.useState(0),M=p.useCallback((O=400,f=300)=>{const w=t.width,$=48,P=document.getElementById("react-scheduler");if(!P)return{x:n.x+w+16,y:n.y};const L=P.scrollLeft,q=P.scrollTop,K=P.clientWidth,_=P.clientHeight,A=n.x-L,T=n.y-q,B={left:De+16,right:K-16,top:16,bottom:_-16},F=B.right-(A+w),J=A-B.left,R=B.bottom-(T+$),se=T-B.top;let ie,H;return F>=O+16?ie=A+w+16:J>=O+16?ie=A-O-16:F>=J?(ie=A+w+16,ie+O>B.right&&(ie=B.right-O)):(ie=A-O-16,ie<B.left&&(ie=B.left)),R>=f+16?H=T+$+16:se>=f+16?H=T-f-16:R>=se?(H=T+$+16,H+f>B.bottom&&(H=B.bottom-f)):(H=T-f-16,H<B.top&&(H=B.top)),ie=Math.max(B.left,Math.min(ie,B.right-O)),H=Math.max(B.top,Math.min(H,B.bottom-f)),{x:ie+L,y:H+q}},[n.x,n.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&S===0?x(n.x):s==="idle"&&x(0)},[s,e,n.x,S]),p.useEffect(()=>{v(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const m=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const O=[];let f=0;for(const g of i){const w=Math.max(g.data.length,1);if(g.capacity!==void 0&&e.totalPassengers>g.capacity)for(let $=0;$<w;$++)O.push(f+$);f+=w}return O},[e,i,s]);if(!e||s==="idle"||s==="potential")return null;const N=s==="animating",j=Fr(e.bgColor??""),I=()=>{if(!r)return"";const O=E(r.startDate).format("MMM D, HH:mm"),f=E(r.endDate).format("HH:mm");return`${O} - ${f}`};return a.jsxs(Rc,{children:[m.map(O=>a.jsx(al,{style:{top:`${d(O)}px`,height:`${pe}px`}},O)),r&&s==="dragging"&&a.jsx(il,{$isValid:o,$hasConflict:r.hasConflict,style:{top:`${d(r.resourceIndex)}px`,height:`${pe}px`}}),r&&s==="dragging"&&!l&&a.jsxs(a.Fragment,{children:[a.jsx(ol,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(pe-48)/2}px`,width:`${t.width}px`}}),a.jsx(sl,{$isValid:o,$hasConflict:r.hasConflict,style:{left:`${n.x}px`,top:`${d(r.resourceIndex)+(pe-48)/2}px`},children:I()})]}),r&&s==="dragging"&&l&&a.jsx(cl,{$isValid:o,$hasConflict:r.hasConflict,style:{left:"0px",top:`${d(r.resourceIndex)}px`,height:`${pe}px`}}),r&&o&&r.hasConflict&&r.conflicts&&r.conflicts.length>0&&s==="dragging"&&(()=>{const O=M(400,300);return a.jsxs(Rr,{style:{left:`${O.x}px`,top:`${O.y}px`},children:[a.jsxs(eo,{children:[a.jsx(to,{children:"!"}),r.conflicts.length," ",r.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),a.jsx(no,{children:r.conflicts.map((f,g)=>{const w=E(r.startDate).format("YYYY-MM-DD"),$=E(r.endDate).format("YYYY-MM-DD"),P=E(f.event.startDate).format("YYYY-MM-DD"),L=E(f.event.endDate).format("YYYY-MM-DD"),q=E(f.conflictStart).format("YYYY-MM-DD"),K=E(f.conflictEnd).format("YYYY-MM-DD"),_=w!==$,A=P!==L,T=q!==K,B=_?E(r.startDate).format("MMM D, h:mm A"):E(r.startDate).format("h:mm A"),F=_?E(r.endDate).format("MMM D, h:mm A"):E(r.endDate).format("h:mm A"),J=A?E(f.event.startDate).format("MMM D, h:mm A"):E(f.event.startDate).format("h:mm A"),R=A?E(f.event.endDate).format("MMM D, h:mm A"):E(f.event.endDate).format("h:mm A"),se=T?E(f.conflictStart).format("MMM D, h:mm A"):E(f.conflictStart).format("h:mm A"),ie=T?E(f.conflictEnd).format("MMM D, h:mm A"):E(f.conflictEnd).format("h:mm A"),H=T?"":E(f.conflictStart).format("MMM D"),W=r.startDate.getTime(),X=r.endDate.getTime(),te=f.event.startDate.getTime(),C=f.event.endDate.getTime(),Y=W>=te&&W<C,k=X>te&&X<=C,V=W<=te&&X>=C,Q=te<=W&&C>=X;let z=!1,y=!1,G=!1,D=!1,Z="";return V||Q?(z=!0,y=!0,G=!0,D=!0,Z=`⚠️ ${c.conflicts.changeBoth}`):Y&&k?(z=!0,y=!0,G=!0,D=!0,Z=`⚠️ ${c.conflicts.changeBoth}`):Y?(z=!0,D=!0,Z=`⚠️ ${c.conflicts.changeStart}`):k&&(y=!0,G=!0,Z=`⚠️ ${c.conflicts.changeEnd}`),a.jsxs(An,{children:[a.jsxs(Pn,{children:[c.conflicts.conflictsWith,": ",f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),a.jsxs(ft,{children:[a.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",z?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:B}):B," ",c.conflicts.to," ",y?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:F}):F]}),a.jsxs(ft,{children:[a.jsx("strong",{children:f.event.title})," ",c.conflicts.currentlyAt,":"," ",G?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:J}):J," ",c.conflicts.to," ",D?a.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:R}):R]}),a.jsxs(ro,{children:[c.conflicts.conflictTime,": ",H&&`${H}, `,se," - ",ie]}),Z&&a.jsx(ft,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:Z})]},g)})})]})})(),r&&o&&!r.hasConflict&&r.nearbyEvents&&r.nearbyEvents.length>0&&s==="dragging"&&(()=>{const O=M(400,400);return a.jsxs(Rr,{style:{left:`${O.x}px`,top:`${O.y}px`,borderColor:"#4CAF50"},children:[a.jsxs(eo,{style:{color:"#2E7D32"},children:[a.jsx(to,{style:{backgroundColor:"#4CAF50"},children:"✓"}),r.nearbyEvents.length," ",r.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),a.jsxs(no,{children:[(()=>{const f=r.nearbyEvents.some(P=>P.position==="before"),g=r.nearbyEvents.some(P=>P.position==="after"),w=E(r.startDate).format("h:mm A"),$=E(r.endDate).format("h:mm A");return a.jsxs(An,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[a.jsxs(Pn,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),a.jsxs(ft,{style:{fontWeight:600},children:[E(r.startDate).format("MMM D"),":"," ",f?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:w}):w," ",c.conflicts.to," ",g?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:$}):$]}),a.jsx(ft,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),r.nearbyEvents.map((f,g)=>{const w=E(f.event.startDate).format("YYYY-MM-DD"),$=E(f.event.endDate).format("YYYY-MM-DD"),P=w!==$,L=P?E(f.event.startDate).format("MMM D, h:mm A"):E(f.event.startDate).format("h:mm A"),q=P?E(f.event.endDate).format("MMM D, h:mm A"):E(f.event.endDate).format("h:mm A"),K=E(f.event.startDate).format("MMM D"),_=Math.floor(f.timeGap/(1e3*60*60)),A=Math.floor(f.timeGap%(1e3*60*60)/(1e3*60)),T=_>0?`${_}h ${A}m`:`${A}m`,B=f.position==="after",F=f.position==="before";return a.jsxs(An,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[a.jsxs(Pn,{style:{color:"#1B5E20"},children:[f.event.title,f.event.subtitle&&` - ${f.event.subtitle}`]}),a.jsxs(ft,{children:[!P&&`${K}: `,B?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:L}):L," ",c.conflicts.to," ",F?a.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:q}):q]}),a.jsxs(ro,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[T," ",f.position==="before"?c.conflicts.before:c.conflicts.after]})]},g)})]})]})})(),a.jsx(el,{$isAnimating:N,$animateToX:h==null?void 0:h.x,$animateToY:h==null?void 0:h.y,style:{left:N?`${(h==null?void 0:h.x)??0}px`:"0",top:N?`${(h==null?void 0:h.y)??0}px`:"0",transform:N?void 0:`translate3d(${l?S:n.x}px, ${n.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:j},children:a.jsx(tl,{children:a.jsxs(rl,{children:[a.jsx(Qr,{$bold:!0,children:e.title}),e.subtitle&&a.jsx(Qr,{children:e.subtitle}),e.description&&a.jsx(nl,{children:e.description})]})})})]})},dl=tt`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,ul=b.div`
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
  animation: ${dl} 1.5s ease-in-out infinite;
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
`,fl=({selectionBox:e,isSelecting:n})=>!e||!n?null:a.jsx(ul,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),hl=tt`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,pl=b.div`
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
  animation: ${hl} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,gl=b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,ml=b.span`
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
`,yl=b.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,vl=b.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;b.div`
  display: none;
`,b.div`
  display: none;
`,b.button`
  display: none;
`;const xl=b.div`
  display: flex;
  gap: 8px;
`,oo=b.button`
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
`,bl=({selections:e,onConfirm:n,onClear:t})=>{var x;const o=Fe().multiSelect,s=p.useMemo(()=>e.filter(M=>M.hasConflict).length,[e]),i=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,u=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",d=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",h=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((x=o==null?void 0:o.conflictsWarning)==null?void 0:x.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const v=s>0,S=a.jsxs(pl,{$hasConflicts:v,"data-multi-select-ui":!0,children:[a.jsxs(gl,{children:[a.jsxs(ml,{$hasConflicts:v,children:[e.length," ",i]}),v&&a.jsxs(yl,{children:["⚠️ ",h]}),a.jsx(vl,{children:l})]}),a.jsxs(xl,{children:[a.jsxs(oo,{variant:"secondary",onClick:t,children:["✕ ",u]}),a.jsx(oo,{variant:"primary",$hasConflicts:v,onClick:n,children:v?`⚠️ ${d}`:`✓ ${c}`})]})]});return io.createPortal(S,document.body)},wl=tt`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Sl=b.div`
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
  animation: ${wl} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&_t`
      border-style: dashed;
    `}
`,Cl=b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,kl=b.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,Ml=b.button`
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
`,$l=({selections:e,data:n,zoom:t,startDate:r,onRemove:o,onUpdate:s,separatorRowIndices:i=[]})=>{const[l,u]=p.useState(null),[c,d]=p.useState({x:0,y:0}),h=p.useRef(null),v=p.useMemo(()=>{switch(t){case 0:return _e*7;case 1:return we;case 2:return ke;default:return we}},[t]),S=p.useMemo(()=>E().year(r.year).month(r.month).date(r.dayOfMonth).hour(r.hour).minute(0).second(0).millisecond(0),[r]),x=p.useMemo(()=>e.map((g,w)=>{let $=0,P=!1;for(const J of n){if(J.id===g.resourceId){P=!0;break}$+=Math.max(J.data.length,1)}if(!P)return null;const L=E(g.startDate),q=E(g.endDate);let K,_;switch(t){case 0:K=Math.floor(L.diff(S,"days")/7),_=Math.max(1,Math.ceil(q.diff(L,"days")/7)+1);break;case 1:K=L.diff(S,"days"),_=Math.max(1,q.diff(L,"days")+1);break;case 2:K=L.diff(S,"hours"),_=Math.max(1,q.diff(L,"hours")+1);break;default:K=0,_=1}const A=K*v;let T=0;for(const J of i)J<=$&&T++;const B=$*pe+T*Ee,F=_*v;return{index:w,selection:g,x:A,y:B,width:F,height:pe}}),[e,n,t,S,v]),M=(g,w)=>{const $=E(g).format("MMM D"),P=E(w).format("MMM D");return $===P?$:`${$} - ${P}`},m=g=>!g.hasConflict||!g.conflicts?"":`⚠️ Conflicts with:
${g.conflicts.map($=>{const P=($.overlapDuration/36e5).toFixed(1);return`• ${$.event.title} (${P}h overlap)`}).join(`
`)}`,N=p.useCallback(g=>{let w=0;for(const $ of n){const P=Math.max($.data.length,1);if(g>=w*pe&&g<(w+P)*pe)return{resourceId:$.id,resourceLabel:$.label};w+=P}return null},[n]),j=p.useCallback(g=>{const w=Math.floor(g/v);switch(t){case 0:return S.add(w*7,"days").toDate();case 1:return S.add(w,"days").toDate();case 2:return S.add(w,"hours").toDate();default:return S.toDate()}},[t,S,v]),I=p.useCallback((g,w)=>{!s||(g.preventDefault(),g.stopPropagation(),!x[w])||(h.current={x:g.clientX,y:g.clientY},u(w),d({x:0,y:0}))},[s,x]),O=p.useCallback(g=>{if(l===null||!h.current)return;const w=g.clientX-h.current.x,$=g.clientY-h.current.y,P=Math.round(w/v)*v,L=Math.round($/pe)*pe;d({x:P,y:L})},[l,v]),f=p.useCallback(()=>{if(l===null||!s){u(null),d({x:0,y:0}),h.current=null;return}const g=x[l];if(!g){u(null),d({x:0,y:0}),h.current=null;return}const w=g.x+c.x,$=g.y+c.y,P=N($+pe/2);if(!P){u(null),d({x:0,y:0}),h.current=null;return}const L=j(w),q=e[l],K=q.endDate.getTime()-q.startDate.getTime(),_=new Date(L.getTime()+K);s(l,{startDate:L,endDate:_,resourceId:P.resourceId,resourceLabel:P.resourceLabel}),u(null),d({x:0,y:0}),h.current=null},[l,c,x,e,s,N,j]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",O),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",f)}},[l,O,f]),a.jsx(a.Fragment,{children:x.map(g=>{if(!g)return null;const w=g.selection.hasConflict||!1,$=l===g.index,P=$?g.x+c.x:g.x,L=$?g.y+c.y:g.y;return a.jsxs(Sl,{$hasConflict:w,$isDragging:$,style:{left:P,top:L,width:g.width,height:g.height},"data-multi-select-ui":!0,onMouseDown:q=>I(q,g.index),children:[w&&a.jsx(kl,{title:m(g.selection),children:"⚠️"}),a.jsx(Cl,{$hasConflict:w,children:M(g.selection.startDate,g.selection.endDate)}),a.jsx(Ml,{onClick:q=>{q.stopPropagation(),o(g.index)},onMouseDown:q=>q.stopPropagation(),title:w?"Remove conflicting selection":"Remove selection",children:"×"})]},g.index)})})},Dl=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  border-left: 2px solid ${({theme:e})=>e.colors.today};
  border-right: 1px solid rgba(15, 125, 102, 0.22);
  background: ${({theme:e})=>e.colors.today}12;
`,El=({zoom:e,startDate:n})=>{const{cols:t}=Ne(),r=p.useMemo(()=>{if(e===2)return null;const o=e===0?_e*7:we,s=E().year(n.year).month(n.month).date(n.dayOfMonth).startOf("day"),i=E().startOf("day"),l=e===0?i.startOf("week").diff(s.startOf("week"),"week"):i.diff(s,"days");return l<0||l>=t?null:{x:l*o,width:o}},[e,n,t]);return r?a.jsx(Dl,{style:{left:`${r.x}px`,width:`${r.width}px`},"aria-hidden":!0}):null},id="";$e.Scheduler=ba,Object.defineProperty($e,Symbol.toStringTag,{value:"Module"})});
