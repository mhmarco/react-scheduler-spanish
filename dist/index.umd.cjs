(function(Ae,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],i):(Ae=typeof globalThis<"u"?globalThis:Ae||self,i(Ae["react-scheduler"]={},Ae["react/jsx-runtime"],Ae.React,Ae.ReactDOM))})(this,function(Ae,i,p,So){"use strict";var xd=Object.defineProperty;var bd=(Ae,i,p)=>i in Ae?xd(Ae,i,{enumerable:!0,configurable:!0,writable:!0,value:p}):Ae[i]=p;var wo=(Ae,i,p)=>(bd(Ae,typeof i!="symbol"?i+"":i,p),p);function Co(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const oe=Co(p);var De=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ct={},ko={get exports(){return Ct},set exports(e){Ct=e}},me={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bn;function Mo(){if(Bn)return me;Bn=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),w;w=Symbol.for("react.module.reference");function $(y){if(typeof y=="object"&&y!==null){var L=y.$$typeof;switch(L){case e:switch(y=y.type,y){case t:case o:case n:case c:case d:return y;default:switch(y=y&&y.$$typeof,y){case l:case a:case u:case v:case f:case s:return y;default:return L}}case r:return L}}}return me.ContextConsumer=a,me.ContextProvider=s,me.Element=e,me.ForwardRef=u,me.Fragment=t,me.Lazy=v,me.Memo=f,me.Portal=r,me.Profiler=o,me.StrictMode=n,me.Suspense=c,me.SuspenseList=d,me.isAsyncMode=function(){return!1},me.isConcurrentMode=function(){return!1},me.isContextConsumer=function(y){return $(y)===a},me.isContextProvider=function(y){return $(y)===s},me.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===e},me.isForwardRef=function(y){return $(y)===u},me.isFragment=function(y){return $(y)===t},me.isLazy=function(y){return $(y)===v},me.isMemo=function(y){return $(y)===f},me.isPortal=function(y){return $(y)===r},me.isProfiler=function(y){return $(y)===o},me.isStrictMode=function(y){return $(y)===n},me.isSuspense=function(y){return $(y)===c},me.isSuspenseList=function(y){return $(y)===d},me.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===t||y===o||y===n||y===c||y===d||y===k||typeof y=="object"&&y!==null&&(y.$$typeof===v||y.$$typeof===f||y.$$typeof===s||y.$$typeof===a||y.$$typeof===u||y.$$typeof===w||y.getModuleId!==void 0)},me.typeOf=$,me}var ye={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hn;function $o(){return Hn||(Hn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),w=!1,$=!1,y=!1,L=!1,X=!1,j;j=Symbol.for("react.module.reference");function H(D){return!!(typeof D=="string"||typeof D=="function"||D===t||D===o||X||D===n||D===c||D===d||L||D===k||w||$||y||typeof D=="object"&&D!==null&&(D.$$typeof===v||D.$$typeof===f||D.$$typeof===s||D.$$typeof===a||D.$$typeof===u||D.$$typeof===j||D.getModuleId!==void 0))}function h(D){if(typeof D=="object"&&D!==null){var G=D.$$typeof;switch(G){case e:var ne=D.type;switch(ne){case t:case o:case n:case c:case d:return ne;default:var q=ne&&ne.$$typeof;switch(q){case l:case a:case u:case v:case f:case s:return q;default:return G}}case r:return G}}}var m=a,S=s,A=e,b=u,C=t,Z=v,J=f,Y=r,E=o,I=n,N=c,_=d,P=!1,W=!1;function re(D){return P||(P=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ee(D){return W||(W=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function F(D){return h(D)===a}function z(D){return h(D)===s}function Q(D){return typeof D=="object"&&D!==null&&D.$$typeof===e}function te(D){return h(D)===u}function M(D){return h(D)===t}function U(D){return h(D)===v}function T(D){return h(D)===f}function R(D){return h(D)===r}function V(D){return h(D)===o}function B(D){return h(D)===n}function g(D){return h(D)===c}function K(D){return h(D)===d}ye.ContextConsumer=m,ye.ContextProvider=S,ye.Element=A,ye.ForwardRef=b,ye.Fragment=C,ye.Lazy=Z,ye.Memo=J,ye.Portal=Y,ye.Profiler=E,ye.StrictMode=I,ye.Suspense=N,ye.SuspenseList=_,ye.isAsyncMode=re,ye.isConcurrentMode=ee,ye.isContextConsumer=F,ye.isContextProvider=z,ye.isElement=Q,ye.isForwardRef=te,ye.isFragment=M,ye.isLazy=U,ye.isMemo=T,ye.isPortal=R,ye.isProfiler=V,ye.isStrictMode=B,ye.isSuspense=g,ye.isSuspenseList=K,ye.isValidElementType=H,ye.typeOf=h}()),ye}(function(e){process.env.NODE_ENV==="production"?e.exports=Mo():e.exports=$o()})(ko);function Do(e){function r(F,z,Q,te,M){for(var U=0,T=0,R=0,V=0,B,g,K=0,D=0,G,ne=G=B=0,q=0,le=0,ue=0,de=0,pe=Q.length,Se=pe-1,be,se="",fe="",$e="",Oe="",Ie;q<pe;){if(g=Q.charCodeAt(q),q===Se&&T+V+R+U!==0&&(T!==0&&(g=T===47?10:47),V=R=U=0,pe++,Se++),T+V+R+U===0){if(q===Se&&(0<le&&(se=se.replace(v,"")),0<se.trim().length)){switch(g){case 32:case 9:case 59:case 13:case 10:break;default:se+=Q.charAt(q)}g=59}switch(g){case 123:for(se=se.trim(),B=se.charCodeAt(0),G=1,de=++q;q<pe;){switch(g=Q.charCodeAt(q)){case 123:G++;break;case 125:G--;break;case 47:switch(g=Q.charCodeAt(q+1)){case 42:case 47:e:{for(ne=q+1;ne<Se;++ne)switch(Q.charCodeAt(ne)){case 47:if(g===42&&Q.charCodeAt(ne-1)===42&&q+2!==ne){q=ne+1;break e}break;case 10:if(g===47){q=ne+1;break e}}q=ne}}break;case 91:g++;case 40:g++;case 34:case 39:for(;q++<Se&&Q.charCodeAt(q)!==g;);}if(G===0)break;q++}switch(G=Q.substring(de,q),B===0&&(B=(se=se.replace(f,"").trim()).charCodeAt(0)),B){case 64:switch(0<le&&(se=se.replace(v,"")),g=se.charCodeAt(1),g){case 100:case 109:case 115:case 45:le=z;break;default:le=N}if(G=r(z,le,G,g,M+1),de=G.length,0<P&&(le=t(N,se,ue),Ie=l(3,G,le,z,Y,J,de,g,M,te),se=le.join(""),Ie!==void 0&&(de=(G=Ie.trim()).length)===0&&(g=0,G="")),0<de)switch(g){case 115:se=se.replace(m,a);case 100:case 109:case 45:G=se+"{"+G+"}";break;case 107:se=se.replace(X,"$1 $2"),G=se+"{"+G+"}",G=I===1||I===2&&s("@"+G,3)?"@-webkit-"+G+"@"+G:"@"+G;break;default:G=se+G,te===112&&(G=(fe+=G,""))}else G="";break;default:G=r(z,t(z,se,ue),G,te,M+1)}$e+=G,G=ue=le=ne=B=0,se="",g=Q.charCodeAt(++q);break;case 125:case 59:if(se=(0<le?se.replace(v,""):se).trim(),1<(de=se.length))switch(ne===0&&(B=se.charCodeAt(0),B===45||96<B&&123>B)&&(de=(se=se.replace(" ",":")).length),0<P&&(Ie=l(1,se,z,F,Y,J,fe.length,te,M,te))!==void 0&&(de=(se=Ie.trim()).length)===0&&(se="\0\0"),B=se.charCodeAt(0),g=se.charCodeAt(1),B){case 0:break;case 64:if(g===105||g===99){Oe+=se+Q.charAt(q);break}default:se.charCodeAt(de-1)!==58&&(fe+=o(se,B,g,se.charCodeAt(2)))}ue=le=ne=B=0,se="",g=Q.charCodeAt(++q)}}switch(g){case 13:case 10:T===47?T=0:1+B===0&&te!==107&&0<se.length&&(le=1,se+="\0"),0<P*re&&l(0,se,z,F,Y,J,fe.length,te,M,te),J=1,Y++;break;case 59:case 125:if(T+V+R+U===0){J++;break}default:switch(J++,be=Q.charAt(q),g){case 9:case 32:if(V+U+T===0)switch(K){case 44:case 58:case 9:case 32:be="";break;default:g!==32&&(be=" ")}break;case 0:be="\\0";break;case 12:be="\\f";break;case 11:be="\\v";break;case 38:V+T+U===0&&(le=ue=1,be="\f"+be);break;case 108:if(V+T+U+E===0&&0<ne)switch(q-ne){case 2:K===112&&Q.charCodeAt(q-3)===58&&(E=K);case 8:D===111&&(E=D)}break;case 58:V+T+U===0&&(ne=q);break;case 44:T+R+V+U===0&&(le=1,be+="\r");break;case 34:case 39:T===0&&(V=V===g?0:V===0?g:V);break;case 91:V+T+R===0&&U++;break;case 93:V+T+R===0&&U--;break;case 41:V+T+U===0&&R--;break;case 40:if(V+T+U===0){if(B===0)switch(2*K+3*D){case 533:break;default:B=1}R++}break;case 64:T+R+V+U+ne+G===0&&(G=1);break;case 42:case 47:if(!(0<V+U+R))switch(T){case 0:switch(2*g+3*Q.charCodeAt(q+1)){case 235:T=47;break;case 220:de=q,T=42}break;case 42:g===47&&K===42&&de+2!==q&&(Q.charCodeAt(de+2)===33&&(fe+=Q.substring(de,q+1)),be="",T=0)}}T===0&&(se+=be)}D=K,K=g,q++}if(de=fe.length,0<de){if(le=z,0<P&&(Ie=l(2,fe,le,F,Y,J,de,te,M,te),Ie!==void 0&&(fe=Ie).length===0))return Oe+fe+$e;if(fe=le.join(",")+"{"+fe+"}",I*E!==0){switch(I!==2||s(fe,2)||(E=0),E){case 111:fe=fe.replace(H,":-moz-$1")+fe;break;case 112:fe=fe.replace(j,"::-webkit-input-$1")+fe.replace(j,"::-moz-$1")+fe.replace(j,":-ms-input-$1")+fe}E=0}}return Oe+fe+$e}function t(F,z,Q){var te=z.trim().split(y);z=te;var M=te.length,U=F.length;switch(U){case 0:case 1:var T=0;for(F=U===0?"":F[0]+" ";T<M;++T)z[T]=n(F,z[T],Q).trim();break;default:var R=T=0;for(z=[];T<M;++T)for(var V=0;V<U;++V)z[R++]=n(F[V]+" ",te[T],Q).trim()}return z}function n(F,z,Q){var te=z.charCodeAt(0);switch(33>te&&(te=(z=z.trim()).charCodeAt(0)),te){case 38:return z.replace(L,"$1"+F.trim());case 58:return F.trim()+z.replace(L,"$1"+F.trim());default:if(0<1*Q&&0<z.indexOf("\f"))return z.replace(L,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+z}function o(F,z,Q,te){var M=F+";",U=2*z+3*Q+4*te;if(U===944){F=M.indexOf(":",9)+1;var T=M.substring(F,M.length-1).trim();return T=M.substring(0,F).trim()+T+";",I===1||I===2&&s(T,1)?"-webkit-"+T+T:T}if(I===0||I===2&&!s(M,1))return M;switch(U){case 1015:return M.charCodeAt(10)===97?"-webkit-"+M+M:M;case 951:return M.charCodeAt(3)===116?"-webkit-"+M+M:M;case 963:return M.charCodeAt(5)===110?"-webkit-"+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+M+M;case 978:return"-webkit-"+M+"-moz-"+M+M;case 1019:case 983:return"-webkit-"+M+"-moz-"+M+"-ms-"+M+M;case 883:if(M.charCodeAt(8)===45)return"-webkit-"+M+M;if(0<M.indexOf("image-set(",11))return M.replace(Z,"$1-webkit-$2")+M;break;case 932:if(M.charCodeAt(4)===45)switch(M.charCodeAt(5)){case 103:return"-webkit-box-"+M.replace("-grow","")+"-webkit-"+M+"-ms-"+M.replace("grow","positive")+M;case 115:return"-webkit-"+M+"-ms-"+M.replace("shrink","negative")+M;case 98:return"-webkit-"+M+"-ms-"+M.replace("basis","preferred-size")+M}return"-webkit-"+M+"-ms-"+M+M;case 964:return"-webkit-"+M+"-ms-flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return T=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+T+"-webkit-"+M+"-ms-flex-pack"+T+M;case 1005:return w.test(M)?M.replace(k,":-webkit-")+M.replace(k,":-moz-")+M:M;case 1e3:switch(T=M.substring(13).trim(),z=T.indexOf("-")+1,T.charCodeAt(0)+T.charCodeAt(z)){case 226:T=M.replace(h,"tb");break;case 232:T=M.replace(h,"tb-rl");break;case 220:T=M.replace(h,"lr");break;default:return M}return"-webkit-"+M+"-ms-"+T+M;case 1017:if(M.indexOf("sticky",9)===-1)break;case 975:switch(z=(M=F).length-10,T=(M.charCodeAt(z)===33?M.substring(0,z):M).substring(F.indexOf(":",7)+1).trim(),U=T.charCodeAt(0)+(T.charCodeAt(7)|0)){case 203:if(111>T.charCodeAt(8))break;case 115:M=M.replace(T,"-webkit-"+T)+";"+M;break;case 207:case 102:M=M.replace(T,"-webkit-"+(102<U?"inline-":"")+"box")+";"+M.replace(T,"-webkit-"+T)+";"+M.replace(T,"-ms-"+T+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===45)switch(M.charCodeAt(6)){case 105:return T=M.replace("-items",""),"-webkit-"+M+"-webkit-box-"+T+"-ms-flex-"+T+M;case 115:return"-webkit-"+M+"-ms-flex-item-"+M.replace(A,"")+M;default:return"-webkit-"+M+"-ms-flex-line-pack"+M.replace("align-content","").replace(A,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==45||M.charCodeAt(4)===122)break;case 931:case 953:if(C.test(F)===!0)return(T=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?o(F.replace("stretch","fill-available"),z,Q,te).replace(":fill-available",":stretch"):M.replace(T,"-webkit-"+T)+M.replace(T,"-moz-"+T.replace("fill-",""))+M;break;case 962:if(M="-webkit-"+M+(M.charCodeAt(5)===102?"-ms-"+M:"")+M,Q+te===211&&M.charCodeAt(13)===105&&0<M.indexOf("transform",10))return M.substring(0,M.indexOf(";",27)+1).replace($,"$1-webkit-$2")+M}return M}function s(F,z){var Q=F.indexOf(z===1?":":"{"),te=F.substring(0,z!==3?Q:10);return Q=F.substring(Q+1,F.length-1),W(z!==2?te:te.replace(b,"$1"),Q,z)}function a(F,z){var Q=o(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return Q!==z+";"?Q.replace(S," or ($1)").substring(4):"("+z+")"}function l(F,z,Q,te,M,U,T,R,V,B){for(var g=0,K=z,D;g<P;++g)switch(D=_[g].call(d,F,K,Q,te,M,U,T,R,V,B)){case void 0:case!1:case!0:case null:break;default:K=D}if(K!==z)return K}function u(F){switch(F){case void 0:case null:P=_.length=0;break;default:if(typeof F=="function")_[P++]=F;else if(typeof F=="object")for(var z=0,Q=F.length;z<Q;++z)u(F[z]);else re=!!F|0}return u}function c(F){return F=F.prefix,F!==void 0&&(W=null,F?typeof F!="function"?I=1:(I=2,W=F):I=0),c}function d(F,z){var Q=F;if(33>Q.charCodeAt(0)&&(Q=Q.trim()),ee=Q,Q=[ee],0<P){var te=l(-1,z,Q,Q,Y,J,0,0,0,0);te!==void 0&&typeof te=="string"&&(z=te)}var M=r(N,Q,z,0,0);return 0<P&&(te=l(-2,M,Q,Q,Y,J,M.length,0,0,0),te!==void 0&&(M=te)),ee="",E=0,J=Y=1,M}var f=/^\0+/g,v=/[\0\r\f]/g,k=/: */g,w=/zoo|gra/,$=/([,: ])(transform)/g,y=/,\r+?/g,L=/([\t\r\n ])*\f?&/g,X=/@(k\w+)\s*(\S*)\s*/,j=/::(place)/g,H=/:(read-only)/g,h=/[svh]\w+-[tblr]{2}/,m=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,A=/-self|flex-/g,b=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,Z=/([^-])(image-set\()/,J=1,Y=1,E=0,I=1,N=[],_=[],P=0,W=null,re=0,ee="";return d.use=u,d.set=c,e!==void 0&&c(e),d}var Eo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function _o(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var To=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Wn=_o(function(e){return To.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Jt={},Ao={get exports(){return Jt},set exports(e){Jt=e}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jn;function Po(){if(jn)return ve;jn=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,k=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,$=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,X=e?Symbol.for("react.scope"):60119;function j(h){if(typeof h=="object"&&h!==null){var m=h.$$typeof;switch(m){case r:switch(h=h.type,h){case u:case c:case n:case s:case o:case f:return h;default:switch(h=h&&h.$$typeof,h){case l:case d:case w:case k:case a:return h;default:return m}}case t:return m}}}function H(h){return j(h)===c}return ve.AsyncMode=u,ve.ConcurrentMode=c,ve.ContextConsumer=l,ve.ContextProvider=a,ve.Element=r,ve.ForwardRef=d,ve.Fragment=n,ve.Lazy=w,ve.Memo=k,ve.Portal=t,ve.Profiler=s,ve.StrictMode=o,ve.Suspense=f,ve.isAsyncMode=function(h){return H(h)||j(h)===u},ve.isConcurrentMode=H,ve.isContextConsumer=function(h){return j(h)===l},ve.isContextProvider=function(h){return j(h)===a},ve.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===r},ve.isForwardRef=function(h){return j(h)===d},ve.isFragment=function(h){return j(h)===n},ve.isLazy=function(h){return j(h)===w},ve.isMemo=function(h){return j(h)===k},ve.isPortal=function(h){return j(h)===t},ve.isProfiler=function(h){return j(h)===s},ve.isStrictMode=function(h){return j(h)===o},ve.isSuspense=function(h){return j(h)===f},ve.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===n||h===c||h===s||h===o||h===f||h===v||typeof h=="object"&&h!==null&&(h.$$typeof===w||h.$$typeof===k||h.$$typeof===a||h.$$typeof===l||h.$$typeof===d||h.$$typeof===y||h.$$typeof===L||h.$$typeof===X||h.$$typeof===$)},ve.typeOf=j,ve}var xe={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn;function Oo(){return Zn||(Zn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,k=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,$=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,X=e?Symbol.for("react.scope"):60119;function j(g){return typeof g=="string"||typeof g=="function"||g===n||g===c||g===s||g===o||g===f||g===v||typeof g=="object"&&g!==null&&(g.$$typeof===w||g.$$typeof===k||g.$$typeof===a||g.$$typeof===l||g.$$typeof===d||g.$$typeof===y||g.$$typeof===L||g.$$typeof===X||g.$$typeof===$)}function H(g){if(typeof g=="object"&&g!==null){var K=g.$$typeof;switch(K){case r:var D=g.type;switch(D){case u:case c:case n:case s:case o:case f:return D;default:var G=D&&D.$$typeof;switch(G){case l:case d:case w:case k:case a:return G;default:return K}}case t:return K}}}var h=u,m=c,S=l,A=a,b=r,C=d,Z=n,J=w,Y=k,E=t,I=s,N=o,_=f,P=!1;function W(g){return P||(P=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),re(g)||H(g)===u}function re(g){return H(g)===c}function ee(g){return H(g)===l}function F(g){return H(g)===a}function z(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function Q(g){return H(g)===d}function te(g){return H(g)===n}function M(g){return H(g)===w}function U(g){return H(g)===k}function T(g){return H(g)===t}function R(g){return H(g)===s}function V(g){return H(g)===o}function B(g){return H(g)===f}xe.AsyncMode=h,xe.ConcurrentMode=m,xe.ContextConsumer=S,xe.ContextProvider=A,xe.Element=b,xe.ForwardRef=C,xe.Fragment=Z,xe.Lazy=J,xe.Memo=Y,xe.Portal=E,xe.Profiler=I,xe.StrictMode=N,xe.Suspense=_,xe.isAsyncMode=W,xe.isConcurrentMode=re,xe.isContextConsumer=ee,xe.isContextProvider=F,xe.isElement=z,xe.isForwardRef=Q,xe.isFragment=te,xe.isLazy=M,xe.isMemo=U,xe.isPortal=T,xe.isProfiler=R,xe.isStrictMode=V,xe.isSuspense=B,xe.isValidElementType=j,xe.typeOf=H}()),xe}(function(e){process.env.NODE_ENV==="production"?e.exports=Po():e.exports=Oo()})(Ao);var qt=Jt,Io={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Lo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Yo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qt={};Qt[qt.ForwardRef]=Yo,Qt[qt.Memo]=Vn;function Gn(e){return qt.isMemo(e)?Vn:Qt[e.$$typeof]||Io}var No=Object.defineProperty,Fo=Object.getOwnPropertyNames,Un=Object.getOwnPropertySymbols,zo=Object.getOwnPropertyDescriptor,Bo=Object.getPrototypeOf,Xn=Object.prototype;function Kn(e,r,t){if(typeof r!="string"){if(Xn){var n=Bo(r);n&&n!==Xn&&Kn(e,n,t)}var o=Fo(r);Un&&(o=o.concat(Un(r)));for(var s=Gn(e),a=Gn(r),l=0;l<o.length;++l){var u=o[l];if(!Lo[u]&&!(t&&t[u])&&!(a&&a[u])&&!(s&&s[u])){var c=zo(r,u);try{No(e,u,c)}catch{}}}}return e}var Ho=Kn;function Be(){return(Be=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Jn=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},Rt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ct.typeOf(e)},Pt=Object.freeze([]),Ke=Object.freeze({});function st(e){return typeof e=="function"}function en(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function tn(e){return e&&typeof e.styledComponentId=="string"}var it=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",nn=typeof window<"u"&&"HTMLElement"in window,Wo=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),jo={},Zo=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function Vo(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Ze(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(Vo.apply(void 0,[Zo[e]].concat(t)).trim())}var Go=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,a=s;t>=a;)(a<<=1)<0&&Ze(16,""+t);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(t+1),c=0,d=n.length;c<d;c++)this.tag.insertRule(u,n[c])&&(this.groupSizes[t]++,u++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var a=o;a<s;a++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),a=s+o,l=s;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),Ot=new Map,It=new Map,kt=1,Lt=function(e){if(Ot.has(e))return Ot.get(e);for(;It.has(kt);)kt++;var r=kt++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&Ze(16,""+r),Ot.set(e,r),It.set(r,e),r},Uo=function(e){return It.get(e)},Xo=function(e,r){r>=kt&&(kt=r+1),Ot.set(e,r),It.set(r,e)},Ko="style["+it+'][data-styled-version="5.3.8"]',Jo=new RegExp("^"+it+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),qo=function(e,r,t){for(var n,o=t.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(r,n)},Qo=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var a=t[o].trim();if(a){var l=a.match(Jo);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Xo(c,u),qo(e,c,l[3]),e.getTag().insertRules(u,n)),n.length=0}else n.push(a)}}},Ro=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},qn=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(l){for(var u=l.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(it))return d}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(it,"active"),n.setAttribute("data-styled-version","5.3.8");var a=Ro();return a&&n.setAttribute("nonce",a),t.insertBefore(n,s),n},es=function(){function e(t){var n=this.element=qn(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var u=s[a];if(u.ownerNode===o)return u}Ze(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),ts=function(){function e(t){var n=this.element=qn(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ns=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Qn=nn,rs={isServer:!nn,useCSSOMInjection:!Wo},Yt=function(){function e(t,n,o){t===void 0&&(t=Ke),n===void 0&&(n={}),this.options=Be({},rs,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&nn&&Qn&&(Qn=!1,function(s){for(var a=document.querySelectorAll(Ko),l=0,u=a.length;l<u;l++){var c=a[l];c&&c.getAttribute(it)!=="active"&&(Qo(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return Lt(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Be({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,a=n.target,t=o?new ns(a):s?new es(a):new ts(a),new Go(t)));var t,n,o,s,a},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(Lt(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(Lt(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(Lt(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",a=0;a<o;a++){var l=Uo(a);if(l!==void 0){var u=t.names.get(l),c=n.getGroup(a);if(u&&c&&u.size){var d=it+".g"+a+'[id="'+l+'"]',f="";u!==void 0&&u.forEach(function(v){v.length>0&&(f+=v+",")}),s+=""+c+d+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},e}(),os=/(a)(d)/gi,Rn=function(e){return String.fromCharCode(e+(e>25?39:97))};function rn(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=Rn(r%52)+t;return(Rn(r%52)+t).replace(os,"$1-$2")}var Re=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},er=function(e){return Re(5381,e)};function tr(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(st(t)&&!tn(t))return!1}return!0}var ss=er("5.3.8"),is=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&tr(r),this.componentId=t,this.baseHash=Re(ss,t),this.baseStyle=n,Yt.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var a=et(this.rules,r,t,n).join(""),l=rn(Re(this.baseHash,a)>>>0);if(!t.hasNameForId(o,l)){var u=n(a,"."+l,void 0,o);t.insertRules(o,l,u)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,d=Re(this.baseHash,n.hash),f="",v=0;v<c;v++){var k=this.rules[v];if(typeof k=="string")f+=k,process.env.NODE_ENV!=="production"&&(d=Re(d,k+v));else if(k){var w=et(k,r,t,n),$=Array.isArray(w)?w.join(""):w;d=Re(d,$+v),f+=$}}if(f){var y=rn(d>>>0);if(!t.hasNameForId(o,y)){var L=n(f,"."+y,void 0,o);t.insertRules(o,y,L)}s.push(y)}}return s.join(" ")},e}(),as=/^\s*\/\/.*$/gm,cs=[":","[",".","#"];function ls(e){var r,t,n,o,s=e===void 0?Ke:e,a=s.options,l=a===void 0?Ke:a,u=s.plugins,c=u===void 0?Pt:u,d=new Do(l),f=[],v=function($){function y(L){if(L)try{$(L+"}")}catch{}}return function(L,X,j,H,h,m,S,A,b,C){switch(L){case 1:if(b===0&&X.charCodeAt(0)===64)return $(X+";"),"";break;case 2:if(A===0)return X+"/*|*/";break;case 3:switch(A){case 102:case 112:return $(j[0]+X),"";default:return X+(C===0?"/*|*/":"")}case-2:X.split("/*|*/}").forEach(y)}}}(function($){f.push($)}),k=function($,y,L){return y===0&&cs.indexOf(L[t.length])!==-1||L.match(o)?$:"."+r};function w($,y,L,X){X===void 0&&(X="&");var j=$.replace(as,""),H=y&&L?L+" "+y+" { "+j+" }":j;return r=X,t=y,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),d(L||!y?"":y,H)}return d.use([].concat(c,[function($,y,L){$===2&&L.length&&L[0].lastIndexOf(t)>0&&(L[0]=L[0].replace(n,k))},v,function($){if($===-2){var y=f;return f=[],y}}])),w.hash=c.length?c.reduce(function($,y){return y.name||Ze(15),Re($,y.name)},5381).toString():"",w}var nr=p.createContext();nr.Consumer;var rr=p.createContext(),ds=(rr.Consumer,new Yt),on=ls();function or(){return p.useContext(nr)||ds}function sr(){return p.useContext(rr)||on}var ir=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=on);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.toString=function(){return Ze(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=on),this.name+r.hash},e}(),us=/([A-Z])/,fs=/([A-Z])/g,hs=/^ms-/,ps=function(e){return"-"+e.toLowerCase()};function ar(e){return us.test(e)?e.replace(fs,ps).replace(hs,"-ms-"):e}var cr=function(e){return e==null||e===!1||e===""};function et(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],a=0,l=e.length;a<l;a+=1)(o=et(e[a],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(cr(e))return"";if(tn(e))return"."+e.styledComponentId;if(st(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!r)return e;var u=e(r);return process.env.NODE_ENV!=="production"&&Ct.isElement(u)&&console.warn(en(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),et(u,r,t,n)}var c;return e instanceof ir?t?(e.inject(t,n),e.getName(n)):e:Rt(e)?function d(f,v){var k,w,$=[];for(var y in f)f.hasOwnProperty(y)&&!cr(f[y])&&(Array.isArray(f[y])&&f[y].isCss||st(f[y])?$.push(ar(y)+":",f[y],";"):Rt(f[y])?$.push.apply($,d(f[y],y)):$.push(ar(y)+": "+(k=y,(w=f[y])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||k in Eo?String(w).trim():w+"px")+";"));return v?[v+" {"].concat($,["}"]):$}(e):e.toString()}var lr=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function at(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return st(e)||Rt(e)?lr(et(Jn(Pt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:lr(et(Jn(e,t)))}var dr=/invalid hook call/i,Nt=new Set,ur=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(dr.test(s))o=!1,Nt.delete(t);else{for(var a=arguments.length,l=new Array(a>1?a-1:0),u=1;u<a;u++)l[u-1]=arguments[u];n.apply(void 0,[s].concat(l))}},p.useRef(),o&&!Nt.has(t)&&(console.warn(t),Nt.add(t))}catch(s){dr.test(s.message)&&Nt.delete(t)}finally{console.error=n}}},fr=function(e,r,t){return t===void 0&&(t=Ke),e.theme!==t.theme&&e.theme||r||t.theme},gs=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ms=/(^-|-$)/g;function sn(e){return e.replace(gs,"-").replace(ms,"")}var an=function(e){return rn(er(e)>>>0)};function Ft(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var cn=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},ys=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function vs(e,r,t){var n=e[t];cn(r)&&cn(n)?hr(n,r):e[t]=r}function hr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var a=s[o];if(cn(a))for(var l in a)ys(l)&&vs(e,a[l],l)}return e}var ct=p.createContext();ct.Consumer;function xs(e){var r=p.useContext(ct),t=p.useMemo(function(){return function(n,o){if(!n)return Ze(14);if(st(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Ze(7)}return Array.isArray(n)||typeof n!="object"?Ze(8):o?Be({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?p.createElement(ct.Provider,{value:t},e.children):null}var ln={};function pr(e,r,t){var n=tn(e),o=!Ft(e),s=r.attrs,a=s===void 0?Pt:s,l=r.componentId,u=l===void 0?function(X,j){var H=typeof X!="string"?"sc":sn(X);ln[H]=(ln[H]||0)+1;var h=H+"-"+an("5.3.8"+H+ln[H]);return j?j+"-"+h:h}(r.displayName,r.parentComponentId):l,c=r.displayName,d=c===void 0?function(X){return Ft(X)?"styled."+X:"Styled("+en(X)+")"}(e):c,f=r.displayName&&r.componentId?sn(r.displayName)+"-"+r.componentId:r.componentId||u,v=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,k=r.shouldForwardProp;n&&e.shouldForwardProp&&(k=r.shouldForwardProp?function(X,j,H){return e.shouldForwardProp(X,j,H)&&r.shouldForwardProp(X,j,H)}:e.shouldForwardProp);var w,$=new is(t,f,n?e.componentStyle:void 0),y=$.isStatic&&a.length===0,L=function(X,j){return function(H,h,m,S){var A=H.attrs,b=H.componentStyle,C=H.defaultProps,Z=H.foldedComponentIds,J=H.shouldForwardProp,Y=H.styledComponentId,E=H.target;process.env.NODE_ENV!=="production"&&p.useDebugValue(Y);var I=function(te,M,U){te===void 0&&(te=Ke);var T=Be({},M,{theme:te}),R={};return U.forEach(function(V){var B,g,K,D=V;for(B in st(D)&&(D=D(T)),D)T[B]=R[B]=B==="className"?(g=R[B],K=D[B],g&&K?g+" "+K:g||K):D[B]}),[T,R]}(fr(h,p.useContext(ct),C)||Ke,h,A),N=I[0],_=I[1],P=function(te,M,U,T){var R=or(),V=sr(),B=M?te.generateAndInjectStyles(Ke,R,V):te.generateAndInjectStyles(U,R,V);return process.env.NODE_ENV!=="production"&&p.useDebugValue(B),process.env.NODE_ENV!=="production"&&!M&&T&&T(B),B}(b,S,N,process.env.NODE_ENV!=="production"?H.warnTooManyClasses:void 0),W=m,re=_.$as||h.$as||_.as||h.as||E,ee=Ft(re),F=_!==h?Be({},h,{},_):h,z={};for(var Q in F)Q[0]!=="$"&&Q!=="as"&&(Q==="forwardedAs"?z.as=F[Q]:(J?J(Q,Wn,re):!ee||Wn(Q))&&(z[Q]=F[Q]));return h.style&&_.style!==h.style&&(z.style=Be({},h.style,{},_.style)),z.className=Array.prototype.concat(Z,Y,P!==Y?P:null,h.className,_.className).filter(Boolean).join(" "),z.ref=W,p.createElement(re,z)}(w,X,j,y)};return L.displayName=d,(w=p.forwardRef(L)).attrs=v,w.componentStyle=$,w.displayName=d,w.shouldForwardProp=k,w.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Pt,w.styledComponentId=f,w.target=n?e.target:e,w.withComponent=function(X){var j=r.componentId,H=function(m,S){if(m==null)return{};var A,b,C={},Z=Object.keys(m);for(b=0;b<Z.length;b++)A=Z[b],S.indexOf(A)>=0||(C[A]=m[A]);return C}(r,["componentId"]),h=j&&j+"-"+(Ft(X)?X:sn(en(X)));return pr(X,Be({},H,{attrs:v,componentId:h}),t)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=n?hr({},e.defaultProps,X):X}}),process.env.NODE_ENV!=="production"&&(ur(d,f),w.warnTooManyClasses=function(X,j){var H={},h=!1;return function(m){if(!h&&(H[m]=!0,Object.keys(H).length>=200)){var S=j?' with the id of "'+j+'"':"";console.warn("Over 200 classes were generated for component "+X+S+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),h=!0,H={}}}}(d,f)),w.toString=function(){return"."+w.styledComponentId},o&&Ho(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var dn=function(e){return function r(t,n,o){if(o===void 0&&(o=Ke),!Ct.isValidElementType(n))return Ze(1,String(n));var s=function(){return t(n,o,at.apply(void 0,arguments))};return s.withConfig=function(a){return r(t,n,Be({},o,{},a))},s.attrs=function(a){return r(t,n,Be({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},s}(pr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){dn[e]=dn(e)});var bs=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=tr(t),Yt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var a=s(et(this.rules,n,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,a)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&Yt.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function ws(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=at.apply(void 0,[e].concat(t)),s="sc-global-"+an(JSON.stringify(o)),a=new bs(o,s);function l(c){var d=or(),f=sr(),v=p.useContext(ct),k=p.useRef(d.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&p.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(w){return typeof w=="string"&&w.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),d.server&&u(k,c,d,v,f),p.useLayoutEffect(function(){if(!d.server)return u(k,c,d,v,f),function(){return a.removeStyles(k,d)}},[k,c,d,v,f]),null}function u(c,d,f,v,k){if(a.isStatic)a.renderStyles(c,jo,f,k);else{var w=Be({},d,{theme:fr(d,v,l.defaultProps)});a.renderStyles(c,w,f,k)}}return process.env.NODE_ENV!=="production"&&ur(s),p.memo(l)}function Ye(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=at.apply(void 0,[e].concat(t)).join(""),s=an(o);return new ir(s,o)}var zt=function(){return p.useContext(ct)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const x=dn;var tt={},Ss={get exports(){return tt},set exports(e){tt=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",a="second",l="minute",u="hour",c="day",d="week",f="month",v="quarter",k="year",w="date",$="Invalid Date",y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,L=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(Y){var E=["th","st","nd","rd"],I=Y%100;return"["+Y+(E[(I-20)%10]||E[I]||E[0])+"]"}},j=function(Y,E,I){var N=String(Y);return!N||N.length>=E?Y:""+Array(E+1-N.length).join(I)+Y},H={s:j,z:function(Y){var E=-Y.utcOffset(),I=Math.abs(E),N=Math.floor(I/60),_=I%60;return(E<=0?"+":"-")+j(N,2,"0")+":"+j(_,2,"0")},m:function Y(E,I){if(E.date()<I.date())return-Y(I,E);var N=12*(I.year()-E.year())+(I.month()-E.month()),_=E.clone().add(N,f),P=I-_<0,W=E.clone().add(N+(P?-1:1),f);return+(-(N+(I-_)/(P?_-W:W-_))||0)},a:function(Y){return Y<0?Math.ceil(Y)||0:Math.floor(Y)},p:function(Y){return{M:f,y:k,w:d,d:c,D:w,h:u,m:l,s:a,ms:s,Q:v}[Y]||String(Y||"").toLowerCase().replace(/s$/,"")},u:function(Y){return Y===void 0}},h="en",m={};m[h]=X;var S=function(Y){return Y instanceof Z},A=function Y(E,I,N){var _;if(!E)return h;if(typeof E=="string"){var P=E.toLowerCase();m[P]&&(_=P),I&&(m[P]=I,_=P);var W=E.split("-");if(!_&&W.length>1)return Y(W[0])}else{var re=E.name;m[re]=E,_=re}return!N&&_&&(h=_),_||!N&&h},b=function(Y,E){if(S(Y))return Y.clone();var I=typeof E=="object"?E:{};return I.date=Y,I.args=arguments,new Z(I)},C=H;C.l=A,C.i=S,C.w=function(Y,E){return b(Y,{locale:E.$L,utc:E.$u,x:E.$x,$offset:E.$offset})};var Z=function(){function Y(I){this.$L=A(I.locale,null,!0),this.parse(I)}var E=Y.prototype;return E.parse=function(I){this.$d=function(N){var _=N.date,P=N.utc;if(_===null)return new Date(NaN);if(C.u(_))return new Date;if(_ instanceof Date)return new Date(_);if(typeof _=="string"&&!/Z$/i.test(_)){var W=_.match(y);if(W){var re=W[2]-1||0,ee=(W[7]||"0").substring(0,3);return P?new Date(Date.UTC(W[1],re,W[3]||1,W[4]||0,W[5]||0,W[6]||0,ee)):new Date(W[1],re,W[3]||1,W[4]||0,W[5]||0,W[6]||0,ee)}}return new Date(_)}(I),this.$x=I.x||{},this.init()},E.init=function(){var I=this.$d;this.$y=I.getFullYear(),this.$M=I.getMonth(),this.$D=I.getDate(),this.$W=I.getDay(),this.$H=I.getHours(),this.$m=I.getMinutes(),this.$s=I.getSeconds(),this.$ms=I.getMilliseconds()},E.$utils=function(){return C},E.isValid=function(){return this.$d.toString()!==$},E.isSame=function(I,N){var _=b(I);return this.startOf(N)<=_&&_<=this.endOf(N)},E.isAfter=function(I,N){return b(I)<this.startOf(N)},E.isBefore=function(I,N){return this.endOf(N)<b(I)},E.$g=function(I,N,_){return C.u(I)?this[N]:this.set(_,I)},E.unix=function(){return Math.floor(this.valueOf()/1e3)},E.valueOf=function(){return this.$d.getTime()},E.startOf=function(I,N){var _=this,P=!!C.u(N)||N,W=C.p(I),re=function(T,R){var V=C.w(_.$u?Date.UTC(_.$y,R,T):new Date(_.$y,R,T),_);return P?V:V.endOf(c)},ee=function(T,R){return C.w(_.toDate()[T].apply(_.toDate("s"),(P?[0,0,0,0]:[23,59,59,999]).slice(R)),_)},F=this.$W,z=this.$M,Q=this.$D,te="set"+(this.$u?"UTC":"");switch(W){case k:return P?re(1,0):re(31,11);case f:return P?re(1,z):re(0,z+1);case d:var M=this.$locale().weekStart||0,U=(F<M?F+7:F)-M;return re(P?Q-U:Q+(6-U),z);case c:case w:return ee(te+"Hours",0);case u:return ee(te+"Minutes",1);case l:return ee(te+"Seconds",2);case a:return ee(te+"Milliseconds",3);default:return this.clone()}},E.endOf=function(I){return this.startOf(I,!1)},E.$set=function(I,N){var _,P=C.p(I),W="set"+(this.$u?"UTC":""),re=(_={},_[c]=W+"Date",_[w]=W+"Date",_[f]=W+"Month",_[k]=W+"FullYear",_[u]=W+"Hours",_[l]=W+"Minutes",_[a]=W+"Seconds",_[s]=W+"Milliseconds",_)[P],ee=P===c?this.$D+(N-this.$W):N;if(P===f||P===k){var F=this.clone().set(w,1);F.$d[re](ee),F.init(),this.$d=F.set(w,Math.min(this.$D,F.daysInMonth())).$d}else re&&this.$d[re](ee);return this.init(),this},E.set=function(I,N){return this.clone().$set(I,N)},E.get=function(I){return this[C.p(I)]()},E.add=function(I,N){var _,P=this;I=Number(I);var W=C.p(N),re=function(z){var Q=b(P);return C.w(Q.date(Q.date()+Math.round(z*I)),P)};if(W===f)return this.set(f,this.$M+I);if(W===k)return this.set(k,this.$y+I);if(W===c)return re(1);if(W===d)return re(7);var ee=(_={},_[l]=n,_[u]=o,_[a]=t,_)[W]||1,F=this.$d.getTime()+I*ee;return C.w(F,this)},E.subtract=function(I,N){return this.add(-1*I,N)},E.format=function(I){var N=this,_=this.$locale();if(!this.isValid())return _.invalidDate||$;var P=I||"YYYY-MM-DDTHH:mm:ssZ",W=C.z(this),re=this.$H,ee=this.$m,F=this.$M,z=_.weekdays,Q=_.months,te=function(R,V,B,g){return R&&(R[V]||R(N,P))||B[V].slice(0,g)},M=function(R){return C.s(re%12||12,R,"0")},U=_.meridiem||function(R,V,B){var g=R<12?"AM":"PM";return B?g.toLowerCase():g},T={YY:String(this.$y).slice(-2),YYYY:this.$y,M:F+1,MM:C.s(F+1,2,"0"),MMM:te(_.monthsShort,F,Q,3),MMMM:te(Q,F),D:this.$D,DD:C.s(this.$D,2,"0"),d:String(this.$W),dd:te(_.weekdaysMin,this.$W,z,2),ddd:te(_.weekdaysShort,this.$W,z,3),dddd:z[this.$W],H:String(re),HH:C.s(re,2,"0"),h:M(1),hh:M(2),a:U(re,ee,!0),A:U(re,ee,!1),m:String(ee),mm:C.s(ee,2,"0"),s:String(this.$s),ss:C.s(this.$s,2,"0"),SSS:C.s(this.$ms,3,"0"),Z:W};return P.replace(L,function(R,V){return V||T[R]||W.replace(":","")})},E.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},E.diff=function(I,N,_){var P,W=C.p(N),re=b(I),ee=(re.utcOffset()-this.utcOffset())*n,F=this-re,z=C.m(this,re);return z=(P={},P[k]=z/12,P[f]=z,P[v]=z/3,P[d]=(F-ee)/6048e5,P[c]=(F-ee)/864e5,P[u]=F/o,P[l]=F/n,P[a]=F/t,P)[W]||F,_?z:C.a(z)},E.daysInMonth=function(){return this.endOf(f).$D},E.$locale=function(){return m[this.$L]},E.locale=function(I,N){if(!I)return this.$L;var _=this.clone(),P=A(I,N,!0);return P&&(_.$L=P),_},E.clone=function(){return C.w(this.$d,this)},E.toDate=function(){return new Date(this.valueOf())},E.toJSON=function(){return this.isValid()?this.toISOString():null},E.toISOString=function(){return this.$d.toISOString()},E.toString=function(){return this.$d.toUTCString()},Y}(),J=Z.prototype;return b.prototype=J,[["$ms",s],["$s",a],["$m",l],["$H",u],["$W",c],["$M",f],["$y",k],["$D",w]].forEach(function(Y){J[Y[1]]=function(E){return this.$g(E,Y[0],Y[1])}}),b.extend=function(Y,E){return Y.$i||(Y(E,Z,b),Y.$i=!0),b},b.locale=A,b.isDayjs=S,b.unix=function(Y){return b(1e3*Y)},b.en=m[h],b.Ls=m,b.p={},b})})(Ss);const O=tt,Mt="reactSchedulerOutsideWrapper",Le="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",Cs=ws`

  #${Mt} {
    font-family: ${Le};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Mt} *,
 #${Mt} *:before,
 #${Mt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,ks={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E"}},Ms={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D"}},lt=`
margin: 0;
padding: 0;
`,nt=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;x.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const ke=50,We=24,rt=16,dt=40,Bt=dt+rt+We,ut=84,he=56,_e=196,Ne=12,Ee=50,ft=24,$t=16,un=40,$s=ft+$t+un,gr=24,mr=52,Je={topRow:`600 14px ${Le}`,middleRow:`400 10px ${Le}`,bottomRow:{name:`600 14px ${Le}`,number:`600 10px ${Le}`,hoursInDay:`400 9px ${Le}`}},ht=3,yr=12,Ht=24,vr="reactSchedulerCanvasHeaderWrapper",xr="reactSchedulerCanvasWrapper",Ve=Mt,Ds=4,Wt=48,qe=5,Es=40,br=8,fn=We/2+2,wr=rt/2+We+1,Sr=2,Me=60,Pe=21,Cr=58,kr="reactSchedulerBody",Mr=e=>e%4===0&&e%100>0||e%400===0?366:365,hn=e=>{const r=e.day();return r!==0&&r!==6},$r=(e,r)=>O(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),Dr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:hn(e),isCurrentDay:e.isSame(O(),"day"),year:parseInt(e.format("YYYY"))}),pn=(e,r,t,n,o,s,a,l=!1)=>{s?e.fillStyle=a.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=a.mode==="dark"?a.colors.primary:"#F2F6F4",e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,he);const u=a.mode==="dark";e.strokeStyle=u?a.colors.border:"#EEF3F0",e.beginPath(),e.moveTo(r+n-.5,t),e.lineTo(r+n-.5,t+he),e.stroke(),e.strokeStyle=u?a.colors.border:"#E4EAE7",e.beginPath(),e.moveTo(r,t+.5),e.lineTo(r+n,t+.5),e.stroke(),l&&(e.strokeStyle=u?a.colors.today:"#5C8374",e.beginPath(),e.moveTo(r+.5,t),e.lineTo(r+.5,t+he),e.stroke())},gn=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Pe},_s=(e,r,t,n,o,s=[])=>{for(let a=0;a<r;a++){const l=gn(a,s);for(let u=0;u<=t;u++){const c=O(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(u,"days"),d=c.isSame(O(),"day"),f=c.date()===1;pn(e,u*ke,a*he+l,ke,hn(c),d,o,f)}}},Ts=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},As=(e,r,t,n,o,s=[])=>{let a=0,l=-(n.dayOfMonth-1)*Ne;const u=r*he+s.length*Pe;for(let c=0;c<=t;c++){const f=O(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(c,"weeks").isSame(O(),"week");for(let v=0;v<r;v++){const k=gn(v,s);pn(e,a,v*he+k,ut,!0,f,o)}a+=ut}for(let c=0;c<t;c++){const d=$r(n,c)*Ne;Ts(e,l,u,o),l+=d}},Ps=(e,r,t,n,o,s=[])=>{const a=O(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let l=0;l<r;l++){const u=gn(l,s);for(let c=0;c<=t;c++){let d;c===Math.floor(t/2)?d=O():c>Math.floor(t/2)?d=O().add(c-Math.floor(t/2),"hours"):d=O().subtract(Math.floor(t/2)-l,"hours");const f=a.isSame(O(),"day")&&d.isSame(O(),"hour");pn(e,c*Ee+Ee/2-.5,l*he+u,Ee,hn(d),f,o)}}},Os=(e,r,t,n,o="group")=>{const s=t*he+r*Pe,a=e.canvas.width;e.fillStyle=o==="subcontract"?n.colors.subcontractBorder+"40":o==="warning"?n.colors.warning+"26":n.mode==="dark"?n.colors.primary+"80":"#E9EFEC",e.fillRect(0,s,a,Pe)},Is=(e,r,t,n,o,s,a=[],l=-1,u=-1)=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(xr)){switch(r){case 0:As(e,t,n,o,s,a);break;case 1:_s(e,t,n,o,s,a);break;case 2:Ps(e,t,n,o,s,a);break}for(let d=0;d<a.length;d++){const f=d===l?"subcontract":d===u?"warning":"group";Os(e,d,a[d],s,f)}if(r===1){const d=O(`${o.year}-${o.month+1}-${o.dayOfMonth}`),f=t*he+a.length*Pe;e.strokeStyle=s.mode==="dark"?s.colors.today:"#5C8374",e.setLineDash([]);for(let v=0;v<=n;v++)if(d.add(v,"days").date()===1){const k=v*ke+.5;e.beginPath(),e.moveTo(k,0),e.lineTo(k,f),e.stroke()}}}};var mn={},Ls={get exports(){return mn},set exports(e){mn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){var t="week",n="year";return function(o,s,a){var l=s.prototype;l.week=function(u){if(u===void 0&&(u=null),u!==null)return this.add(7*(u-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var d=a(this).startOf(n).add(1,n).date(c),f=a(this).endOf(t);if(d.isBefore(f))return 1}var v=a(this).startOf(n).date(c).startOf(t).subtract(1,"millisecond"),k=this.diff(v,t,!0);return k<0?a(this).startOf("week").week():Math.ceil(k)},l.weeks=function(u){return u===void 0&&(u=null),this.week(u)}}})})(Ls);const Ys=mn;var yn={},Ns={get exports(){return yn},set exports(e){yn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?a:this.add(s-a,"day")}}})})(Ns);const Fs=yn;var vn={},zs={get exports(){return vn},set exports(e){vn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){var t="day";return function(n,o,s){var a=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return a(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var d,f,v,k,w=a(this),$=(d=this.isoWeekYear(),f=this.$u,v=(f?s.utc:s)().year(d).startOf("year"),k=4-v.isoWeekday(),v.isoWeekday()>4&&(k+=7),v.add(k,t));return w.diff($,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var u=l.startOf;l.startOf=function(c,d){var f=this.$utils(),v=!!f.u(d)||d;return f.p(c)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):u.bind(this)(c,d)}}})})(zs);const Bs=vn;var xn={},Hs={get exports(){return xn},set exports(e){xn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return function(t,n,o){n.prototype.isBetween=function(s,a,l,u){var c=o(s),d=o(a),f=(u=u||"()")[0]==="(",v=u[1]===")";return(f?this.isAfter(c,l):!this.isBefore(c,l))&&(v?this.isBefore(d,l):!this.isAfter(d,l))||(f?this.isBefore(c,l):!this.isAfter(c,l))&&(v?this.isAfter(d,l):!this.isBefore(d,l))}}})})(Hs);const Ws=xn;var bn={},js={get exports(){return bn},set exports(e){bn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){var t,n,o=1e3,s=6e4,a=36e5,l=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,d=2592e6,f=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:c,months:d,days:l,hours:a,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},k=function(h){return h instanceof H},w=function(h,m,S){return new H(h,S,m.$l)},$=function(h){return n.p(h)+"s"},y=function(h){return h<0},L=function(h){return y(h)?Math.ceil(h):Math.floor(h)},X=function(h){return Math.abs(h)},j=function(h,m){return h?y(h)?{negative:!0,format:""+X(h)+m}:{negative:!1,format:""+h+m}:{negative:!1,format:""}},H=function(){function h(S,A,b){var C=this;if(this.$d={},this.$l=b,S===void 0&&(this.$ms=0,this.parseFromMilliseconds()),A)return w(S*v[$(A)],this);if(typeof S=="number")return this.$ms=S,this.parseFromMilliseconds(),this;if(typeof S=="object")return Object.keys(S).forEach(function(Y){C.$d[$(Y)]=S[Y]}),this.calMilliseconds(),this;if(typeof S=="string"){var Z=S.match(f);if(Z){var J=Z.slice(2).map(function(Y){return Y!=null?Number(Y):0});return this.$d.years=J[0],this.$d.months=J[1],this.$d.weeks=J[2],this.$d.days=J[3],this.$d.hours=J[4],this.$d.minutes=J[5],this.$d.seconds=J[6],this.calMilliseconds(),this}}return this}var m=h.prototype;return m.calMilliseconds=function(){var S=this;this.$ms=Object.keys(this.$d).reduce(function(A,b){return A+(S.$d[b]||0)*v[b]},0)},m.parseFromMilliseconds=function(){var S=this.$ms;this.$d.years=L(S/c),S%=c,this.$d.months=L(S/d),S%=d,this.$d.days=L(S/l),S%=l,this.$d.hours=L(S/a),S%=a,this.$d.minutes=L(S/s),S%=s,this.$d.seconds=L(S/o),S%=o,this.$d.milliseconds=S},m.toISOString=function(){var S=j(this.$d.years,"Y"),A=j(this.$d.months,"M"),b=+this.$d.days||0;this.$d.weeks&&(b+=7*this.$d.weeks);var C=j(b,"D"),Z=j(this.$d.hours,"H"),J=j(this.$d.minutes,"M"),Y=this.$d.seconds||0;this.$d.milliseconds&&(Y+=this.$d.milliseconds/1e3);var E=j(Y,"S"),I=S.negative||A.negative||C.negative||Z.negative||J.negative||E.negative,N=Z.format||J.format||E.format?"T":"",_=(I?"-":"")+"P"+S.format+A.format+C.format+N+Z.format+J.format+E.format;return _==="P"||_==="-P"?"P0D":_},m.toJSON=function(){return this.toISOString()},m.format=function(S){var A=S||"YYYY-MM-DDTHH:mm:ss",b={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return A.replace(u,function(C,Z){return Z||String(b[C])})},m.as=function(S){return this.$ms/v[$(S)]},m.get=function(S){var A=this.$ms,b=$(S);return b==="milliseconds"?A%=1e3:A=b==="weeks"?L(A/v[b]):this.$d[b],A===0?0:A},m.add=function(S,A,b){var C;return C=A?S*v[$(A)]:k(S)?S.$ms:w(S,this).$ms,w(this.$ms+C*(b?-1:1),this)},m.subtract=function(S,A){return this.add(S,A,!0)},m.locale=function(S){var A=this.clone();return A.$l=S,A},m.clone=function(){return w(this.$ms,this)},m.humanize=function(S){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!S)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},h}();return function(h,m,S){t=S,n=S().$utils(),S.duration=function(C,Z){var J=S.locale();return w(C,{$l:J},Z)},S.isDuration=k;var A=m.prototype.add,b=m.prototype.subtract;m.prototype.add=function(C,Z){return k(C)&&(C=C.asMilliseconds()),A.bind(this)(C,Z)},m.prototype.subtract=function(C,Z){return k(C)&&(C=C.asMilliseconds()),b.bind(this)(C,Z)}}})})(js);const Zs=bn;var Vs="Expected a function",Er=0/0,Gs="[object Symbol]",Us=/^\s+|\s+$/g,Xs=/^[-+]0x[0-9a-f]+$/i,Ks=/^0b[01]+$/i,Js=/^0o[0-7]+$/i,qs=parseInt,Qs=typeof De=="object"&&De&&De.Object===Object&&De,Rs=typeof self=="object"&&self&&self.Object===Object&&self,ei=Qs||Rs||Function("return this")(),ti=Object.prototype,ni=ti.toString,ri=Math.max,oi=Math.min,wn=function(){return ei.Date.now()};function si(e,r,t){var n,o,s,a,l,u,c=0,d=!1,f=!1,v=!0;if(typeof e!="function")throw new TypeError(Vs);r=_r(r)||0,Sn(t)&&(d=!!t.leading,f="maxWait"in t,s=f?ri(_r(t.maxWait)||0,r):s,v="trailing"in t?!!t.trailing:v);function k(m){var S=n,A=o;return n=o=void 0,c=m,a=e.apply(A,S),a}function w(m){return c=m,l=setTimeout(L,r),d?k(m):a}function $(m){var S=m-u,A=m-c,b=r-S;return f?oi(b,s-A):b}function y(m){var S=m-u,A=m-c;return u===void 0||S>=r||S<0||f&&A>=s}function L(){var m=wn();if(y(m))return X(m);l=setTimeout(L,$(m))}function X(m){return l=void 0,v&&n?k(m):(n=o=void 0,a)}function j(){l!==void 0&&clearTimeout(l),c=0,n=u=o=l=void 0}function H(){return l===void 0?a:X(wn())}function h(){var m=wn(),S=y(m);if(n=arguments,o=this,u=m,S){if(l===void 0)return w(u);if(f)return l=setTimeout(L,r),k(u)}return l===void 0&&(l=setTimeout(L,r)),a}return h.cancel=j,h.flush=H,h}function Sn(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function ii(e){return!!e&&typeof e=="object"}function ai(e){return typeof e=="symbol"||ii(e)&&ni.call(e)==Gs}function _r(e){if(typeof e=="number")return e;if(ai(e))return Er;if(Sn(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=Sn(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(Us,"");var t=Ks.test(e);return t||Js.test(e)?qs(e.slice(2),t?2:8):Xs.test(e)?Er:+e}var Cn=si;const jt=[0,1,2];var Dt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(Dt||{});const Tr=e=>jt.includes(e),pt=e=>{var n;const t=(((n=document.getElementById(Ve))==null?void 0:n.clientWidth)||0)-_e;switch(e){case 1:return Math.ceil(t/ke)*ht;case 2:return Math.ceil(t/Ee)*ht;default:return Math.ceil(t/ut)*ht}},ci=e=>pt(e)/ht,Zt=(e,r)=>{const t=pt(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},li=(e,r)=>{const t=Zt(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},kn=()=>{var t;const e=((t=document.getElementById(Ve))==null?void 0:t.clientWidth)||0;return Math.max(0,e-_e)*ht},Ar=p.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:O(),jumpDate:null,isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});O.extend(Ys),O.extend(Fs),O.extend(Bs),O.extend(Ws),O.extend(Zs);const di=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=O(),onRangeChange:s,handleToggleDisplayActiveUnits:a,onClearFilterData:l,toolbarActions:u})=>{const{zoom:c,maxRecordsPerPage:d=50}=n,[f,v]=p.useState(c),[k,w]=p.useState(O()),[$,y]=p.useState(null),[L,X]=p.useState(!1),[j,H]=p.useState(pt(f)),h=jt[f]!==jt[jt.length-1],m=f!==0,S=p.useMemo(()=>li(k,f),[k,f]),A=Zt(k,f).startDate,b=O(A).dayOfYear(),C=Dr(A),Z=p.useRef(null),J=p.useRef(!1),Y=p.useRef(null),[E,I]=p.useState([{x:0,y:0}]),N=p.useCallback((V,B="auto")=>{var K,D,G,ne;const g=kn();switch(V){case"back":return(K=Z.current)==null?void 0:K.scrollTo({behavior:B,left:g/3});case"forward":return(D=Z.current)==null?void 0:D.scrollTo({behavior:B,left:g/3});case"middle":{const q=g/ht/4;return(G=Z.current)==null?void 0:G.scrollTo({behavior:B,left:g/2-q})}default:return(ne=Z.current)==null?void 0:ne.scrollTo({behavior:B,left:g/2})}},[]),_=V=>{I(V)},P=p.useCallback(V=>{const B=ci(f);let g;switch(f){case 0:g=B*7;break;case 1:g=B;break;case 2:g=Math.ceil(B/Ht);break}Cn(()=>{switch((V==="forward"||V==="back")&&(J.current=!0),Y.current=V,V){case"back":w(D=>D.subtract(g,"days"));break;case"forward":w(D=>D.add(g,"days"));break;case"middle":w(O());break}s==null||s(S)},300)()},[s,S,f]);p.useEffect(()=>{Y.current&&(N(Y.current),Y.current=null)},[k,N]),p.useEffect(()=>{Z.current=document.getElementById(Ve),H(pt(f))},[f]),p.useEffect(()=>{const V=()=>H(pt(f));return window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[f]),p.useEffect(()=>{s==null||s(S)},[s,S]),p.useEffect(()=>{X(!1)},[o]),p.useEffect(()=>{L||(N("middle"),X(!0),w(o))},[o,L,N]);const W=()=>{t||(w(V=>f===2?V.add(gr,"hours"):V.add(Sr,"weeks")),s==null||s(S))},re=p.useCallback(()=>{t||P("forward")},[t,P]),ee=()=>{t||(w(V=>f===2?V.subtract(gr,"hours"):V.subtract(Sr,"weeks")),s==null||s(S))},F=p.useCallback(()=>{!L||t||P("back")},[L,t,P]),z=p.useCallback(()=>{t||(Y.current="middle",w(O()),y(null),s==null||s(S))},[t,s,S]),Q=p.useCallback(V=>{if(t)return;const B=O(V).startOf("day");B.isValid()&&(Y.current="middle",w(B),y(B),s==null||s(S))},[t,s,S]);p.useEffect(()=>{if(!$)return;const V=()=>y(null);return document.addEventListener("mousedown",V,{once:!0}),()=>document.removeEventListener("mousedown",V)},[$]);const te=()=>U(f+1),M=()=>U(f-1),U=V=>{Tr(V)&&(v(V),H(pt(V)),s==null||s(S))},T=()=>a==null?void 0:a(),{Provider:R}=Ar;return i.jsx(R,{value:{data:e,config:n,handleGoNext:W,handleScrollNext:re,handleGoPrev:ee,handleScrollPrev:F,handleGoToday:z,goToDate:Q,zoomIn:te,zoomOut:M,setZoom:U,zoom:f,isNextZoom:h,isPrevZoom:m,date:k,jumpDate:$,isLoading:t,cols:j,startDate:C,dayOfYear:b,toggleDisplayActiveUnits:T,tilesCoords:E,updateTilesCoords:_,recordsThreshold:d,onClearFilterData:l,suppressNextSlideRef:J,toolbarActions:u},children:r})},je=()=>p.useContext(Ar),Pr=(e,r,t)=>{const n=Math.max(0,r),o=Math.max(0,t);e.canvas.width=n*window.devicePixelRatio,e.canvas.height=o*window.devicePixelRatio,e.canvas.style.width=n+"px",e.canvas.style.height=o+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},Or=()=>{var e;return typeof window<"u"&&!!((e=window.matchMedia)!=null&&e.call(window,"(prefers-reduced-motion: reduce)").matches)},Ir=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*he+n*Pe;if(e>=s+Pe)n++;else if(e>=s)return o*he+n*Pe-n*Pe}return t-n*Pe},ui=5,Lr=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>ui},gt=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},fi=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:a={},gridRef:l,separatorRowIndices:u=[]})=>{const c=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(U=>({...U,data:[U.data]})):r:e,{enabled:d=!0,isDraggable:f,resourceOnly:v=!1,isValidDrop:k}=a,[w,$]=p.useState("idle"),[y,L]=p.useState(null),[X,j]=p.useState({x:0,y:0}),[H,h]=p.useState({width:0,height:48}),[m,S]=p.useState(null),[A,b]=p.useState(!0),C=p.useRef({x:0,y:0}),Z=p.useRef({x:0,y:0}),J=p.useRef({x:0,y:0}),Y=p.useRef(null),E=p.useRef(null),I=p.useRef(0),N=p.useRef(null),_=p.useCallback(U=>!d||U.draggable===!1?!1:f?f(U):!0,[d,f]),P=p.useCallback((U,T)=>{const R=Ir(T,u),V=Math.floor(R/he);let B;switch(t){case 0:B=Ne*7;break;case 1:B=ke;break;case 2:B=Ee;break;default:B=ke}const g=Math.floor(U/B);let K;const D=O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:K=D.add(g*7,"days").toDate();break;case 1:K=D.add(g,"days").toDate();break;case 2:K=D.add(g,"hours").toDate();break;default:K=D.toDate()}return{snappedDate:K,snappedResourceIndex:V}},[t,n,u]),W=p.useCallback((U,T,R,V)=>{const B=[],g=T.getTime(),K=R.getTime(),D=c.find(ne=>ne.id===V);if(!D)return B;const G=[];for(const ne of D.data)Array.isArray(ne)?G.push(...ne):G.push(ne);for(const ne of G){if(ne.segmentId===U.segmentId)continue;const q=ne.startDate.getTime(),le=ne.endDate.getTime();if(g>=q&&g<le||K>q&&K<=le||g<=q&&K>=le){const de=new Date(Math.max(g,q)),pe=new Date(Math.min(K,le)),Se=pe.getTime()-de.getTime();B.push({event:ne,conflictStart:de,conflictEnd:pe,overlapDuration:Se})}}return B},[c]),re=p.useCallback((U,T,R,V)=>{const B=[],g=T.getTime(),K=R.getTime(),D=O(T).format("YYYY-MM-DD"),G=c.find(q=>q.id===V);if(!G)return B;const ne=[];for(const q of G.data)Array.isArray(q)?ne.push(...q):ne.push(q);for(const q of ne){if(q.segmentId===U.segmentId)continue;const le=q.startDate.getTime(),ue=q.endDate.getTime(),de=O(q.startDate).format("YYYY-MM-DD"),pe=O(q.endDate).format("YYYY-MM-DD"),Se=O(R).format("YYYY-MM-DD");if(!(de===D||pe===D||de===Se||pe===Se||O(q.startDate).isBefore(T,"day")&&O(q.endDate).isAfter(R,"day"))||g>=le&&g<ue||K>le&&K<=ue||g<=le&&K>=ue)continue;let fe,$e;ue<=g?(fe=g-ue,$e="before"):(fe=le-K,$e="after"),B.push({event:q,timeGap:fe,position:$e})}return B.sort((q,le)=>q.timeGap-le.timeGap)},[c]),ee=p.useCallback((U,T,R)=>{const V=P(T,R);let B,g;if(v)B=U.startDate,g=U.endDate;else{const ue=O(U.endDate).diff(U.startDate);B=V.snappedDate,g=O(B).add(ue,"milliseconds").toDate()}let K=0,D="",G;for(const ue of e){const de=Math.max(ue.data.length,1);if(V.snappedResourceIndex<K+de){D=ue.id,G=ue.capacity;break}K+=de}if(!D)return null;let ne=!0;G!==void 0&&U.totalPassengers!==void 0&&(ne=U.totalPassengers<=G);const q=W(U,B,g,D),le=q.length===0?re(U,B,g,D):[];return{startDate:B,endDate:g,resourceId:D,resourceIndex:V.snappedResourceIndex,resourceCapacity:G,hasCapacity:ne,conflicts:q,hasConflict:q.length>0,nearbyEvents:le}},[P,e,v,W,re]),F=p.useCallback((U,T)=>{if(!s)return;const R=Date.now();if(R-I.current<100)return;I.current=R;const V={event:U,currentStartDate:T.startDate,currentEndDate:T.endDate,currentResourceId:T.resourceId,conflicts:T.conflicts};s(V)},[s]),z=p.useCallback((U,T)=>{if(!_(U)||!l.current)return;T.preventDefault(),T.stopPropagation();const R=T.target.closest('[style*="left"]');let V=0,B=0;R&&R.style.left&&R.style.top&&(V=parseInt(R.style.left),B=parseInt(R.style.top));const g=gt(T.clientX,T.clientY,l.current);C.current={x:V,y:B},Z.current={x:T.clientX,y:T.clientY},J.current={x:g.x-V,y:20},N.current={startDate:U.startDate,endDate:U.endDate,resourceId:""};for(const G of e){for(const ne of G.data)if(ne.some(q=>q.segmentId===U.segmentId)){N.current.resourceId=G.id;break}if(N.current.resourceId)break}L(U),$("potential"),j({x:V,y:B});let K=100,D=48;if(R){const G=R.getBoundingClientRect();K=G.width,D=G.height}h({width:K,height:D})},[_,l,e,t]),Q=p.useCallback(U=>{if(!l.current)return;let T=l.current;for(;T&&T!==document.body;){const q=window.getComputedStyle(T);if(T.scrollHeight>T.clientHeight&&(q.overflowY==="auto"||q.overflowY==="scroll"||q.overflow==="auto"||q.overflow==="scroll"))break;T=T.parentElement}(!T||T===document.body)&&(T=document.documentElement);const R=T.getBoundingClientRect(),V=U.clientY,B=50,g=12,K=V-R.top,D=R.bottom-V;let G=!1,ne=0;K<B&&K>0?(G=!0,ne=-g*(1-K/B)):D<B&&D>0&&(G=!0,ne=g*(1-D/B)),G?(E.current&&cancelAnimationFrame(E.current),E.current=requestAnimationFrame(()=>{T.scrollTop+=ne,w==="dragging"&&Q(U)})):E.current&&(cancelAnimationFrame(E.current),E.current=null)},[l,w]),te=p.useCallback(U=>{if(w==="idle"||w==="animating"||!y||!l.current)return;const T={x:U.clientX,y:U.clientY};if(w==="potential")if(Lr(Z.current,T))$("dragging");else return;Q(U);const R=gt(U.clientX,U.clientY,l.current);Y.current&&cancelAnimationFrame(Y.current),Y.current=requestAnimationFrame(()=>{const V={x:R.x-J.current.x,y:R.y-J.current.y};j(V);const B=ee(y,R.x,R.y);if(B&&k){const g={event:y,currentStartDate:B.startDate,currentEndDate:B.endDate,currentResourceId:B.resourceId,conflicts:B.conflicts};B.hasConflict=!k(g)}if(S(B),B){const g=B.hasCapacity!==!1;b(g),F(y,B)}})},[w,y,l,ee,F,k,Q]),M=p.useCallback(async U=>{if(w==="idle"||w==="animating")return;const T={x:U.clientX,y:U.clientY};if(!Lr(Z.current,T)||w==="potential"){$("idle"),L(null),S(null);return}if(!y||!m||!N.current){$("idle"),L(null),S(null);return}if(m.hasCapacity===!1){b(!1),$("animating"),j(C.current),setTimeout(()=>{$("idle"),L(null),S(null),b(!0)},300);return}const V={event:y,originalStartDate:N.current.startDate,originalEndDate:N.current.endDate,originalResourceId:N.current.resourceId,newStartDate:m.startDate,newEndDate:m.endDate,newResourceId:m.resourceId,hasConflict:m.hasConflict,conflicts:m.conflicts};let B=!0;if(o)try{const g=o(V);B=g instanceof Promise?await g:g}catch{B=!1}B?(b(!0),$("idle"),L(null),S(null)):(b(!1),$("animating"),j(C.current),setTimeout(()=>{$("idle"),L(null),S(null),b(!0)},300))},[w,y,m,o,k]);return p.useEffect(()=>{if(w==="potential"||w==="dragging"){const U=R=>te(R),T=R=>M(R);return document.addEventListener("mousemove",U),document.addEventListener("mouseup",T),()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",T)}}else return()=>{}},[w,te,M]),p.useEffect(()=>()=>{Y.current&&(cancelAnimationFrame(Y.current),Y.current=null),E.current&&(cancelAnimationFrame(E.current),E.current=null)},[]),p.useEffect(()=>{(w==="idle"||w==="animating")&&(Y.current&&(cancelAnimationFrame(Y.current),Y.current=null),E.current&&(cancelAnimationFrame(E.current),E.current=null))},[w]),p.useEffect(()=>{(w==="dragging"||w==="potential")&&(w==="dragging"?($("animating"),j(C.current),setTimeout(()=>{$("idle"),L(null),S(null)},300)):($("idle"),L(null),S(null)))},[t]),p.useEffect(()=>{if((w==="dragging"||w==="potential")&&y){let U=!1;for(const T of e){for(const R of T.data)if(R.some(V=>V.segmentId===y.segmentId)){U=!0;break}if(U)break}U||(w==="dragging"?($("animating"),j(C.current),setTimeout(()=>{$("idle"),L(null),S(null)},300)):($("idle"),L(null),S(null)))}},[e,w,y]),{dragState:w,draggedEvent:y,ghostPosition:X,ghostDimensions:H,dropTarget:m,isValidDrop:A,handleDragStart:z,isDraggable:_,draggingEventId:(y==null?void 0:y.segmentId)||null,resourceOnly:v}},hi=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:a={},gridRef:l,isDragging:u,separatorRowIndices:c=[]})=>{const{enabled:d=!1,isSelectable:f}=a,v=d&&!!o,k=p.useCallback(g=>{let K=0;for(const D of c)D<=g&&K++;return g*he+K*Pe},[c]),[w,$]=p.useState("idle"),[y,L]=p.useState(null),[X,j]=p.useState(null),[H,h]=p.useState(null),[m,S]=p.useState(!1),[A,b]=p.useState([]),[C,Z]=p.useState(!1),J=p.useRef(null),Y=p.useRef(null),E=p.useRef(null),I=p.useRef(null),N=p.useCallback(()=>{switch(t){case 0:return Ne*7;case 1:return ke;case 2:return Ee;default:return ke}},[t]),_=p.useCallback(g=>{const K=N(),D=Math.floor(g/K),G=O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return G.add(D*7,"days").toDate();case 1:return G.add(D,"days").toDate();case 2:return G.add(D,"hours").toDate();default:return G.toDate()}},[t,n,N]),P=p.useCallback(g=>{const K=Ir(g,c),D=Math.floor(K/he);let G=0;for(const ne of e){const q=Math.max(ne.data.length,1);if(D<G+q)return{resourceId:ne.id,resourceIndex:D,resourceLabel:ne.label};G+=q}return null},[e,c]),W=p.useCallback(g=>{const K=N();return Math.floor(g/K)*K},[N]),re=p.useCallback((g,K,D,G=[])=>{const ne=[],le=(r||e).find(pe=>pe.id===g),ue=K.getTime(),de=D.getTime();if(le){const pe=le.data[0],Se=pe&&Array.isArray(pe)?le.data.flat():le.data;for(const be of Se){const se=new Date(be.startDate).getTime(),fe=new Date(be.endDate).getTime();if(ue<fe&&de>se){const $e=new Date(Math.max(ue,se)),Oe=new Date(Math.min(de,fe)),Ie=Oe.getTime()-$e.getTime();ne.push({event:be,conflictStart:$e,conflictEnd:Oe,overlapDuration:Ie})}}}for(const pe of G){if(pe.resourceId!==g)continue;const Se=pe.startDate.getTime(),be=pe.endDate.getTime();if(ue<be&&de>Se){const se=new Date(Math.max(ue,Se)),fe=new Date(Math.min(de,be)),$e=fe.getTime()-se.getTime(),Oe={segmentId:`pending-${pe.startDate.getTime()}`,reservationId:`pending-${pe.startDate.getTime()}`,startDate:pe.startDate,endDate:pe.endDate,occupancy:0,title:`New Event (${pe.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ne.push({event:Oe,conflictStart:se,conflictEnd:fe,overlapDuration:$e})}}return ne},[e,r]),ee=p.useCallback(g=>{if(!v||u||!l.current||g.button!==0)return;const K=g.target;if(K.closest("[data-segment-id]")||K.closest("[data-multi-select-ui]"))return;const D=gt(g.clientX,g.clientY,l.current),G=P(D.y);if(!G)return;J.current={x:g.clientX,y:g.clientY},Y.current=G.resourceIndex;const ne=W(D.x),q=N(),le=k(G.resourceIndex);L(D),j(D),h({x:ne,y:le,width:q,height:he}),$("selecting")},[v,u,l,P,W,N,k]),F=p.useCallback(g=>{j(g);const K=N(),D=W((y==null?void 0:y.x)||0),G=W(g.x),ne=k(Y.current),q=Math.min(D,G),le=Math.max(D,G)+K;h({x:q,y:ne,width:le-q,height:he})},[y,N,W,k]),z=p.useCallback(()=>{I.current&&(cancelAnimationFrame(I.current),I.current=null)},[]),Q=p.useCallback((g,K)=>{const D=document.getElementById(Ve);if(!D||!l.current)return;const G=D.getBoundingClientRect(),ne=60,q=12,le=g-(G.left+_e),ue=G.right-g;let de=0;le<ne?de=-q*(1-Math.max(0,le)/ne):ue<ne&&(de=q*(1-Math.max(0,ue)/ne)),z(),de!==0&&(I.current=requestAnimationFrame(()=>{D.scrollLeft+=de,F(gt(g,K,l.current)),Q(g,K)}))},[l,F,z]),te=p.useCallback(g=>{if(w!=="selecting"||!l.current||Y.current===null)return;const K=gt(g.clientX,g.clientY,l.current);E.current&&cancelAnimationFrame(E.current),E.current=requestAnimationFrame(()=>F(K)),Q(g.clientX,g.clientY)},[w,l,F,Q]),M=p.useCallback(g=>{if(w!=="selecting")return;if(z(),!l.current||!y||!J.current){$("idle"),L(null),j(null),h(null);return}const K=gt(g.clientX,g.clientY,l.current),D=P(y.y);if(!D){$("idle"),L(null),j(null),h(null);return}const G=Math.min(y.x,K.x),ne=Math.max(y.x,K.x),q=_(G),le=_(ne),ue=O(le).hour(23).minute(59).second(0).millisecond(0).toDate();if(f&&!f(D.resourceId,q,ue)){$("idle"),L(null),j(null),h(null);return}const de=re(D.resourceId,q,ue,A),pe=de.length>0,Se={startDate:q,endDate:ue,resourceId:D.resourceId,resourceLabel:D.resourceLabel,zoomLevel:t,hasConflict:pe,conflicts:pe?de:void 0};if(m)b(be=>[...be,Se]),Z(!0);else if(o){const be=o(Se),se=fe=>{fe!=null&&fe.continueMultiSelect&&(S(!0),b([Se]),Z(!0))};be instanceof Promise?be.then(se):se(be)}$("idle"),L(null),j(null),h(null),J.current=null,Y.current=null},[w,l,y,P,_,f,o,t,m,re,A,z]),U=p.useCallback(()=>{if(A.length>0&&s){Z(!1);const g=s(A),K=D=>{D!=null&&D.continueMultiSelect?Z(!0):(b([]),S(!1),Z(!1))};g instanceof Promise?g.then(K):K(g);return}b([]),S(!1),Z(!1)},[A,s]),T=p.useCallback(()=>{b([]),S(!1),Z(!1)},[]),R=p.useCallback(g=>{b(K=>{const D=K.filter((G,ne)=>ne!==g);return D.length===0&&(S(!1),Z(!1)),D})},[]),V=p.useCallback((g,K)=>{b(D=>D.map((G,ne)=>{if(ne!==g)return G;const q={...G,...K},le=D.filter((de,pe)=>pe!==g),ue=re(q.resourceId,q.startDate,q.endDate,le);return{...q,hasConflict:ue.length>0,conflicts:ue.length>0?ue:void 0}}))},[re]),B=p.useCallback(g=>{g.key==="Escape"&&(w==="selecting"?(z(),$("idle"),L(null),j(null),h(null),J.current=null,Y.current=null):m&&A.length>0&&(b([]),S(!1),Z(!1)))},[w,m,A.length,z]);return p.useEffect(()=>{if(w==="selecting")return document.addEventListener("mousemove",te),document.addEventListener("mouseup",M),document.addEventListener("keydown",B),()=>{document.removeEventListener("mousemove",te),document.removeEventListener("mouseup",M),document.removeEventListener("keydown",B)}},[w,te,M,B]),p.useEffect(()=>{if(m&&A.length>0)return document.addEventListener("keydown",B),()=>{document.removeEventListener("keydown",B)}},[m,A.length,B]),p.useEffect(()=>()=>{E.current&&(cancelAnimationFrame(E.current),E.current=null),z()},[z]),p.useEffect(()=>{u&&w==="selecting"&&(z(),$("idle"),L(null),j(null),h(null),J.current=null,Y.current=null)},[u,w,z]),{selectionState:w,selectionStart:y,selectionEnd:X,selectionBox:H,handleGridMouseDown:ee,isEnabled:v,pendingSelections:A,confirmSelections:U,clearSelections:T,removeSelection:R,updateSelection:V,isMultiSelectActive:m,hasUnconfirmedSelections:C}},pi=x.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,gi=x.div`
  position: relative;
`,mi=x.canvas``;x.canvas``;const yi=x.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`,Yr=x.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,vi=p.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onTileContextMenu:a,onEventDrop:l,onEventDrag:u,draggableConfig:c,onDragStateChange:d,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:k,separatorRowIndices:w=[],subcontractSeparatorIndex:$=-1,warningSeparatorIndex:y=-1,fadingUnitIds:L},X){const j=p.useRef(!1),{handleScrollNext:H,handleScrollPrev:h,date:m,isLoading:S,cols:A,startDate:b,suppressNextSlideRef:C,config:Z}=je(),J=p.useRef(null),Y=p.useRef(null),E=p.useRef(t),I=p.useRef(m),N=p.useRef(null),_=p.useRef(null),P=p.useRef(null),W=p.useRef(null),[re,ee]=p.useState(!1),F=zt(),{dragState:z,draggedEvent:Q,ghostPosition:te,ghostDimensions:M,dropTarget:U,isValidDrop:T,handleDragStart:R,isDraggable:V,draggingEventId:B,resourceOnly:g}=fi({data:n,baseData:o||n,zoom:r,startDate:b,onEventDrop:l,onEventDrag:u,draggableConfig:c,gridRef:W,separatorRowIndices:w});p.useEffect(()=>{const ge=z==="dragging"||z==="potential";ee(ge),d&&d(ge)},[z,d]);const K=p.useRef(!1),D=p.useRef(m),G=p.useRef(null);p.useEffect(()=>{var we;const ge=D.current;if(D.current=m,!K.current){K.current=!0;return}if(C!=null&&C.current){C.current=!1;return}const Ce=W.current;if(!(Ce!=null&&Ce.animate))return;const ie=m.isAfter(ge)?48:-48;(we=G.current)==null||we.cancel(),Ce.style.willChange="transform";const ce=Ce.animate([{transform:`translateX(${ie}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),ae=()=>{Ce.style.willChange=""};ce.onfinish=ae,ce.oncancel=ae,G.current=ce},[m,C]);const{selectionState:ne,selectionBox:q,handleGridMouseDown:le,pendingSelections:ue,confirmSelections:de,clearSelections:pe,removeSelection:Se,updateSelection:be,isMultiSelectActive:se,hasUnconfirmedSelections:fe}=hi({data:n,baseData:o||n,zoom:r,startDate:b,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:k,gridRef:W,isDragging:re,separatorRowIndices:w}),$e=p.useCallback(ge=>{ge.preventDefault()},[]),Oe=p.useCallback(ge=>{ge.preventDefault()},[]),Ie=w.length*Pe,yt=p.useCallback(ge=>{const Ce=kn(),ie=t*he+1+Ie;Pr(ge,Ce,ie),Is(ge,r,t,A,b,F,w,$,y)},[A,b,t,r,F,w,$,y,Ie]);return p.useEffect(()=>{if(!J.current)return;const ge=J.current.getContext("2d");if(!ge)return;const Ce=()=>yt(ge);return window.addEventListener("resize",Ce),()=>window.removeEventListener("resize",Ce)},[yt]),p.useEffect(()=>{var ze;const ge=E.current,Ce=I.current;if(E.current=t,I.current=m,ge===t||!m.isSame(Ce,"day")||Or())return;const ie=J.current,ce=Y.current;if(!ie||!ce||ie.width===0||ie.height===0)return;const ae=ce.getContext("2d");if(!ae)return;ce.width=ie.width,ce.height=ie.height,ce.style.width=ie.style.width,ce.style.height=ie.style.height,ae.setTransform(1,0,0,1,0,0),ae.clearRect(0,0,ce.width,ce.height),ae.drawImage(ie,0,0),(ze=N.current)==null||ze.cancel(),ce.style.opacity="1";const we=ce.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease"});we.onfinish=()=>{ce.style.opacity="0"},N.current=we},[t,m]),p.useEffect(()=>{const ge=J.current;if(!ge)return;ge.style.letterSpacing="1px";const Ce=ge.getContext("2d");Ce&&yt(Ce)},[m,t,r,yt]),p.useEffect(()=>{if(!_.current)return;const ge=new IntersectionObserver(Ce=>{Ce[0].isIntersecting&&!j.current&&(j.current=!0,H(),setTimeout(()=>{j.current=!1},1e3))},{root:document.getElementById(Ve)});return ge.observe(_.current),()=>{ge.disconnect()}},[H]),p.useEffect(()=>{if(!P.current)return;const ge=new IntersectionObserver(Ce=>{Ce[0].isIntersecting&&!j.current&&(j.current=!0,h(),setTimeout(()=>{j.current=!1},1e3))},{root:document.getElementById(Ve),rootMargin:`0px 0px 0px -${_e}px`});return ge.observe(P.current),()=>{ge.disconnect()}},[h]),i.jsxs(pi,{id:xr,children:[i.jsxs(gi,{ref:ge=>{typeof X=="function"?X(ge):X&&(X.current=ge),W.current=ge},onMouseDown:le,style:{cursor:f?"crosshair":"default"},children:[i.jsx(Yr,{position:"left",ref:P}),i.jsx(Ln,{isLoading:S,position:"left"}),i.jsx(mi,{ref:J,onDragStart:$e,onDragOver:Oe,style:{userSelect:z==="dragging"?"none":"auto"}}),i.jsx(yi,{ref:Y,"aria-hidden":!0}),i.jsx(pd,{zoom:r,startDate:b}),i.jsx(yd,{zoom:r,startDate:b}),i.jsx(Sl,{data:n,zoom:r,onTileClick:s,onTileContextMenu:a,onDragStart:R,isDraggable:V,draggingEventId:B,separatorRowIndices:w,fadingUnitIds:L,highlightedSegmentId:(Z==null?void 0:Z.highlightedSegmentId)??null,focusedUnitIds:(Z==null?void 0:Z.focusedUnitIds)??null,leavingSegmentIds:(Z==null?void 0:Z.leavingSegmentIds)??null,ghostProject:(Z==null?void 0:Z.ghostProject)??null}),i.jsx(Yr,{ref:_,position:"right"}),i.jsx(Ln,{isLoading:S,position:"right"}),(z==="dragging"||z==="animating")&&i.jsx(Kl,{draggedEvent:Q,ghostPosition:te,ghostDimensions:M,dropTarget:U,isValidDrop:T,dragState:z,zoom:r,data:n,resourceOnly:g,separatorRowIndices:w}),i.jsx(Ql,{selectionBox:q,isSelecting:ne==="selecting"}),se&&ue.length>0&&i.jsx(fd,{selections:ue,data:n,zoom:r,startDate:b,onRemove:Se,onUpdate:be,separatorRowIndices:w})]}),se&&fe&&ue.length>0&&i.jsx(id,{selections:ue,onConfirm:de,onClear:pe,onRemove:Se})]})}),Nr=e=>{const r=O.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},Fr=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/Me);t+=o.hours+s,n+=r%Me,n>=Me&&(t++,n-=Me)}),{hours:t,minutes:n}},zr=(e,r)=>{let t=br;switch(r){case 0:t=Es;break;case 1:t=br;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,a=Me-e.minutes;return a===Me&&(s++,a=0),{hours:Math.max(0,s),minutes:s<0?0:a}},o=()=>{const s=e.hours-t,a=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:a}};return{free:n(),overtime:o()}},xi=(e,r,t)=>{const n=r.isoWeek(),o=e.map(c=>{const d=O(c.startDate).isoWeek(),f=O(c.startDate).isoWeekday(),v=O(c.endDate).isoWeek(),k=O(c.endDate).isoWeekday(),{hours:w,minutes:$}=Nr(c.occupancy);if(n===d){const y=(qe+1-f)*w,L=(qe+1-f)*$;return{hours:Math.max(0,y),minutes:L}}else if(n===v){const y=k>qe?qe*w:k*w,L=k>qe?qe*$:k*$;return{hours:y,minutes:L}}else if(O(r).isBetween(c.startDate,c.endDate))return{hours:qe*w,minutes:qe*$};return{hours:0,minutes:0}}),{hours:s,minutes:a}=Fr(o),{free:l,overtime:u}=zr({hours:s,minutes:a},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,a)},free:l,overtime:u}},bi=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(d=>{const{hours:f,minutes:v}=Nr(d.occupancy);return o<=(n?7:5)?{hours:f,minutes:v}:{hours:0,minutes:0}}),{hours:a,minutes:l}=Fr(s),{free:u,overtime:c}=zr({hours:a,minutes:l},t);return{taken:{hours:Math.max(0,a),minutes:Math.max(0,l)},free:u,overtime:c}},wi=(e,r)=>{let t=0;e.forEach(l=>{const u=O(l.startDate).hour(),c=O(l.endDate).hour(),d=r.hour(),f=O(l.endDate).minute(),v=O(l.startDate).minute();u<d&&c>d?t+=Me:u===d&&c===d&&v&&f?t+=f?f-v:Me-v:u===d&&c>=d?t+=v?Me-v:Me:c===d&&f&&(t+=f)});const n=Math.floor(t/Me),o=t%Me,s=n||o?0:1,a=n?0:o?Me-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:a},overtime:{hours:0,minutes:0}}},Si=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(a=>n===1?O(t).isBetween(a.startDate,a.endDate,"day","[]"):n===2?O(t).isBetween(a.startDate,a.endDate,"hour","[]"):O(a.startDate).isBetween(O(t),O(t).add(6,"days"),"day","[]")||O(t).isBetween(O(a.startDate),O(a.endDate),"day","[]"));switch(n){case 1:return bi(s,t,n,o);case 2:return wi(s,t);default:return xi(s,t,n)}},Ci=(e,r,t,n,o,s,a=!1)=>{let l="weeks",u;switch(s){case 0:l="weeks",u=ut;break;case 1:l="days",u=ke;break;case 2:l="hours",u=Ee;break}const c=Math.ceil(s===2?(t.x-.5*u)/u:t.x/u),d=O(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(c-1,l),f=Math.ceil(t.y/he),v=n.findIndex((L,X,j)=>j.slice(0,X+1).reduce((h,m)=>h+m,0)>=f),k=s===2?(c+1)*u:c*u,w=(f-1)*he+he,$=Si(o[v],v,d,s,a),y=O(e.startDate).isSame(O(e.endDate),"day");return{coords:{x:k,y:w},mouseCoords:t,resourceIndex:v,disposition:$,reservationData:{startTime:O(e.startDate).format("hh:mm A"),startDate:O(e.startDate).format("MMM D, YYYY"),endTime:O(e.endDate).format("hh:mm A"),endDate:O(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,departureAddress:e.departureAddress,destinationAddress:e.destinationAddress,returnAddress:e.returnAddress,isOneDayEvent:y,passengers:e.totalPassengers,readiness:e.readiness,readinessNote:e.readinessNote,subcontractConfirmed:e.subcontractConfirmed}}};function ki(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function Mi(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const d of e)!d.isSubcontract&&!d.isUnassigned&&d.capacity!=null&&t.add(d.capacity);const n=[...t].sort((d,f)=>d-f);if(n.length<2)return r;const o=Math.min(5,n.length),s=ki(n,o),a=[];let l=0;for(const d of s)a.push({min:n[l],max:n[d-1],values:n.slice(l,d)}),l=d;a.push({min:n[l],max:n[n.length-1],values:n.slice(l)});const u=[],c=new Map;return a.forEach((d,f)=>{const v="__auto_cat_"+f,k=d.min===d.max?d.min+" pax":d.min+"-"+d.max+" pax";u.push({id:v,name:k,minPassengers:d.min,maxPassengers:d.max});for(const w of d.values)c.set(w,v)}),{categories:u,capacityToCategoryId:c}}const $i=(e,r,t,n)=>{const o=[];let s=0,a=[],l=0;return r.length>n?(r.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,isUnassigned:e[c].isUnassigned,categoryId:e[c].categoryId};l>=n&&(o.push(a),s+=a.length,a=[],l=0),l++,a.push(d)}),t.slice(s).length<=n&&(a=[],r.slice(s).forEach((u,c)=>{const d={id:e[c+s].id,label:e[c+s].label,data:u,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,isUnassigned:e[c+s].isUnassigned,categoryId:e[c+s].categoryId};a.push(d),c===r.length-s-1&&o.push(a)})),o):(r.forEach((u,c)=>{const d={id:e[c].id,label:e[c].label,data:u,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,isUnassigned:e[c].isUnassigned,categoryId:e[c].categoryId};a.push(d)}),o.push(a),o)};var Mn={},Di={get exports(){return Mn},set exports(e){Mn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(Di);const Ei=Mn;var $n={},_i={get exports(){return $n},set exports(e){$n=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(_i);const Ti=$n,Ai=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let a=0;a<o.length;a++){const l=O(t.startDate).startOf("day"),u=O(t.endDate).startOf("day"),c=O(o[a].startDate).startOf("day"),d=O(o[a].endDate).startOf("day");if(l.isBetween(c,d,null,"[]")||u.isBetween(c,d,null,"[]")||l.isBefore(c,"minute")&&u.isAfter(d,"minute")||l.isAfter(c,"minute")&&u.isBefore(d,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};O.extend(Ei),O.extend(Ti);const Br=new WeakMap,Pi=e=>{const r=Br.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const a=O(o.startDate),l=O(s.startDate),u=a.startOf("day").diff(l.startOf("day"),"day");return u!==0?u:a.diff(l)}),n=Ai(t);return Br.set(e,n),n},Oi=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const a=Pi(s.data);return o[0].push(a),o[1].push(Math.max(a.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},Ii=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,Li=e=>{const{recordsThreshold:r}=je(),[t,n]=p.useState(0),[o,s]=p.useState(0),a=p.useRef(null);p.useEffect(()=>{a.current=document.getElementById(Ve)},[]);const{projectsPerPerson:l,rowsPerPerson:u}=p.useMemo(()=>Oi(e),[e]),c=p.useMemo(()=>$i(e,l,u,r),[e,l,r,u]),d=p.useCallback(()=>{c[o].length&&a.current&&(a.current.scroll({top:0}),n(y=>y+c[Math.max(o,0)].length),s(y=>Math.min(y+1,c.length-1)),window.scroll({top:0}))},[o,c]),f=p.useCallback(()=>{c[o].length&&(n(y=>Math.max(y-c[o-1].length,0)),s(y=>Math.max(y-1,0)))},[o,c]),v=p.useCallback(()=>{n(0),s(0)},[]),k=t+c[o].length,w=p.useMemo(()=>u.slice(t,k),[k,u,t]),$=p.useMemo(()=>l.slice(t,k),[k,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:$,rowsPerItem:w,totalRowsPerPage:Ii(c[o]),next:d,previous:f,reset:v}};var Dn={},Yi={get exports(){return Dn},set exports(e){Dn=e}};(function(e,r){(function(t,n){e.exports=n()})(De,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(Yi);const Ni=Dn;var En={},Fi={get exports(){return En},set exports(e){En=e}};(function(e,r){(function(t,n){e.exports=n(tt)})(De,function(t){function n(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var o=n(t);function s(v){return v%10<5&&v%10>1&&~~(v/10)%10!=1}function a(v,k,w){var $=v+" ";switch(w){case"m":return k?"minuta":"minutę";case"mm":return $+(s(v)?"minuty":"minut");case"h":return k?"godzina":"godzinę";case"hh":return $+(s(v)?"godziny":"godzin");case"MM":return $+(s(v)?"miesiące":"miesięcy");case"yy":return $+(s(v)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),u="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,d=function(v,k){return c.test(k)?l[v.month()]:u[v.month()]};d.s=u,d.f=l;var f={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:d,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(v){return v+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(f,null,!0),f})})(Fi);const zi=En;var _n={},Bi={get exports(){return _n},set exports(e){_n=e}};(function(e,r){(function(t,n){e.exports=n(tt)})(De,function(t){function n(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(u,c,d){var f=s[d];return Array.isArray(f)&&(f=f[c?0:1]),f.replace("%d",u)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(u){return u+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return o.default.locale(l,null,!0),l})})(Bi);const Hi=_n;var Tn={},Wi={get exports(){return Tn},set exports(e){Tn=e}};(function(e,r){(function(t,n){e.exports=n(tt)})(De,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),a="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,u=function(d,f){return l.test(f)?s[d.month()]:a[d.month()]};u.s=a,u.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:u,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(d){return d+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Wi);const ji=Tn;var An={},Zi={get exports(){return An},set exports(e){An=e}};(function(e,r){(function(t,n){e.exports=n(tt)})(De,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return o.default.locale(s,null,!0),s})})(Zi);const Vi=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract",unassigned:"No unit assigned"},translateCode:"en-GB",dayjsTranslations:Ni},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca",unassigned:"Nie przypisano pojazdu"},translateCode:"pl-PL",dayjsTranslations:zi},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"One Day",passengers:"Pax"},subcontract:"Subcontrato",unassigned:"Sin unidad asignada"},translateCode:"es-ES",dayjsTranslations:An},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas",unassigned:"Nepriskirta transporto priemonė"},translateCode:"lt-LT",dayjsTranslations:ji},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer",unassigned:"Kein Fahrzeug zugewiesen"},translateCode:"de-DE",dayjsTranslations:Hi}];class Gi{constructor(){wo(this,"locales",Vi)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const Vt=new Gi,Hr=p.createContext({localesData:Vt.getLocales(),currentLocale:Vt.getLocales()[0],setCurrentLocale:()=>{}}),Ui=({children:e,lang:r,translations:t})=>{const[n,o]=p.useState("en"),s=Vt.getLocales(),a=p.useCallback(()=>{const f=s.find(v=>v.id===n);return typeof(f==null?void 0:f.dayjsTranslations)=="object"&&O.locale(f.dayjsTranslations),f||s[0]},[n,s]),[l,u]=p.useState(a()),c=f=>{localStorage.setItem("locale",f.translateCode),u(f)};p.useEffect(()=>{t==null||t.forEach(f=>{s.find(k=>k.id===f.id)||Vt.addLocales(f)})},[s,t]),p.useEffect(()=>{const f=localStorage.getItem("locale"),v=r??f??"en";localStorage.setItem("locale",v),o(v),u(a())},[a,r]);const{Provider:d}=Hr;return i.jsx(d,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},Qe=()=>p.useContext(Hr).currentLocale.lang,Xi=e=>oe.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},oe.createElement("defs",null,oe.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),oe.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},oe.createElement("stop",{offset:.47,stopColor:"#ccc"}),oe.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),oe.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),oe.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),oe.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),oe.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),oe.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),oe.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),oe.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),oe.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),oe.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),oe.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),Ki=x.div`
  height: 440px;
  width: 514px;
  position: relative;
`,Ji=x.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,qi=({onTileClick:e})=>{const{feelingEmpty:r}=Qe();return i.jsxs(Ki,{onClick:e,children:[i.jsx(Xi,{}),i.jsx(Ji,{children:r})]})},Qi=x.div`
  position: relative;
  display: flex;
`,Ri=x.div`
  position: relative;
  margin-left: ${_e};
  display: flex;
  flex-direction: column;
  contain: paint;
`,ea=x.div`
  width: calc(${({width:e})=>e}px - ${_e}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${_e}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,ta=new Set,na={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:Dt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function ra(e,r){const t=r?[...r].sort((c,d)=>c.maxPassengers-d.maxPassengers):[],n=[],o=e.filter(c=>c.isUnassigned);o.length>0&&n.push({type:"unassigned",items:o});const s=e.filter(c=>!c.isUnassigned);for(const c of t){const d=s.filter(f=>!f.isSubcontract&&f.categoryId===c.id);d.length>0&&n.push({type:"category",category:c,items:d})}const a=t.length>0,l=s.filter(c=>!c.isSubcontract&&(!c.categoryId||!a));l.length>0&&a?n.push({type:"uncategorized",items:l}):l.length>0&&n.push({type:"uncategorized",items:l});const u=s.filter(c=>c.isSubcontract);return u.length>0&&n.push({type:"subcontract",items:u}),n}const oa=({data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,onItemClick:s,toggleTheme:a,topBarWidth:l,onEventDrop:u,onEventDrag:c,draggableConfig:d,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:k})=>{const[w,$]=p.useState(na),[y,L]=p.useState(e),[X,j]=p.useState(!1),[H,h]=p.useState(!1),[m,S]=p.useState(""),[A,b]=p.useState(new Set),[C,Z]=p.useState(new Set),J=p.useRef([]);p.useEffect(()=>()=>J.current.forEach(clearTimeout),[]);const{zoom:Y,startDate:E,isLoading:I,config:{includeTakenHoursOnWeekendsInDayView:N,showTooltip:_,showThemeToggle:P}}=je(),W=p.useRef(null),re=p.useRef(null),[ee,F]=p.useState(124),{page:z,projectsPerPerson:Q,rowsPerItem:te,currentPageNum:M,pagesAmount:U,next:T,previous:R,reset:V}=Li(y),{effectiveCategories:B,effectivePage:g}=p.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:z};const ie=Mi(z);if(ie.categories.length===0)return{effectiveCategories:void 0,effectivePage:z};const ce=z.map(ae=>{if(ae.isSubcontract||ae.isUnassigned||ae.capacity==null)return ae;const we=ie.capacityToCategoryId.get(ae.capacity);return we?{...ae,categoryId:we}:ae});return{effectiveCategories:ie.categories,effectivePage:ce}},[t,z]),K=p.useCallback(ie=>{if(A.has(ie)){b(ae=>{const we=new Set(ae);return we.delete(ie),we});return}if(Or()){b(ae=>new Set(ae).add(ie));return}Z(ae=>new Set(ae).add(ie));const ce=setTimeout(()=>{b(ae=>new Set(ae).add(ie)),Z(ae=>{const we=new Set(ae);return we.delete(ie),we})},190);J.current.push(ce)},[A]),D=p.useMemo(()=>{const ie=[];g.some(ae=>ae.isUnassigned)&&ie.push("__unassigned__");const ce=B?[...B].sort((ae,we)=>ae.maxPassengers-we.maxPassengers):[];for(const ae of ce)g.some(we=>!we.isSubcontract&&we.categoryId===ae.id)&&ie.push(ae.id);return g.some(ae=>ae.isSubcontract)&&ie.push("__subcontract__"),ie},[B,g]),G=p.useCallback(()=>{b(new Set)},[]),ne=p.useCallback(()=>{b(new Set(D))},[D]),q=p.useMemo(()=>{if(C.size===0)return ta;const ie=new Set;for(const ce of g){const ae=ce.isUnassigned?"__unassigned__":ce.isSubcontract?"__subcontract__":ce.categoryId;ae&&C.has(ae)&&ie.add(ce.id)}return ie},[C,g]),{visiblePage:le,visibleRowsPerItem:ue,visibleTotalRows:de,visibleProjectsPerPerson:pe,separatorRowIndices:Se,subcontractSeparatorIndex:be,unassignedSeparatorIndex:se}=p.useMemo(()=>{const ie=ra(g,B),ce=((B==null?void 0:B.length)??0)>0,ae=new Map;z.forEach((Te,bt)=>ae.set(Te.id,bt));const we=[],ze=[],Ue=[],He=[];let vt=0,Ut=-1,Xe=-1;for(const Te of ie)if(Te.type==="unassigned"||Te.type==="subcontract"||Te.type==="category"&&ce){const wt=Te.type==="unassigned"?"__unassigned__":Te.type==="subcontract"?"__subcontract__":Te.category.id,St=A.has(wt);if(Te.type==="subcontract"&&(Ut=He.length),Te.type==="unassigned"&&(Xe=He.length),He.push(vt),!St)for(const ot of Te.items){const Xt=ae.get(ot.id)??0,Kt=te[Xt];we.push(ot),ze.push(Kt),Ue.push(Q[Xt]),vt+=Kt}}else for(const wt of Te.items){const St=ae.get(wt.id)??0,ot=te[St];we.push(wt),ze.push(ot),Ue.push(Q[St]),vt+=ot}const xt=ze.reduce((Te,bt)=>Te+bt,0);return{visiblePage:we,visibleRowsPerItem:ze,visibleTotalRows:xt,visibleProjectsPerPerson:Ue,separatorRowIndices:He,subcontractSeparatorIndex:Ut,unassignedSeparatorIndex:Xe}},[g,B,z,A,te,Q]),fe=p.useMemo(()=>g.reduce((ie,ce)=>ce.isUnassigned?ie+ce.data.reduce((ae,we)=>ae+we.length,0):ie,0),[g]),$e=p.useRef(Cn((ie,ce,ae,we,ze,Ue)=>{if(!W.current)return;const{tile:He,segmentId:vt}=yt(ie);if(!vt||!He){j(!1);return}const Ut=Ie(vt,ce),Xe=W.current.getBoundingClientRect(),xt=He.getBoundingClientRect(),Te={x:ie.clientX-Xe.left,y:ie.clientY-Xe.top},bt={x:ie.clientX-Xe.left,y:ie.clientY-Xe.top},wt={x:xt.left-Xe.left,y:xt.top-Xe.top,width:xt.width,height:xt.height},{coords:{x:St,y:ot},resourceIndex:Xt,disposition:Kt,reservationData:vd}=Ci(Ut,ae,Te,we,ze,Ue,N);$({coords:{x:St,y:ot},mouseCoords:bt,resourceIndex:Xt,disposition:Kt,reservationData:vd,tileBounds:wt}),j(!0)},4)),Oe=p.useRef(Cn((ie,ce)=>{V(),L(ie.map(ae=>({...ae,data:ae.data.filter(we=>{const{title:ze,description:Ue,subtitle:He}=we;return(ze==null?void 0:ze.toLowerCase().includes(ce.toLowerCase()))||(He==null?void 0:He.toLowerCase().includes(ce.toLowerCase()))||(Ue==null?void 0:Ue.toLowerCase().includes(ce.toLowerCase()))})})).filter(ae=>ae.data.length>0))},500)),Ie=(ie,ce)=>{if(ie)return ce.flatMap(ae=>ae.data).find(ae=>ae.segmentId===ie)},yt=ie=>{if(!ie.target)return{tile:null,segmentId:null};const ce=ie.target.closest("[data-segment-id]");return ce?{tile:ce,segmentId:ce.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},ge=ie=>{const ce=ie.target.value;S(ce),Oe.current.cancel(),ce?Oe.current(e,ce):(V(),L(e))},Ce=p.useCallback(()=>{$e.current.cancel(),j(!1)},[]);return p.useEffect(()=>{const ie=ae=>$e.current(ae,e,E,ue,pe,Y),ce=W.current;if(ce)return ce.addEventListener("mousemove",ie),ce.addEventListener("mouseleave",Ce),()=>{ce.removeEventListener("mousemove",ie),ce.removeEventListener("mouseleave",Ce)}},[$e,Ce,pe,ue,E,Y,e]),p.useEffect(()=>{m?(Oe.current.cancel(),Oe.current(e,m)):L(e)},[e,m]),p.useLayoutEffect(()=>{const ie=re.current;if(!ie)return;const ce=()=>F(ie.offsetHeight);ce();const ae=new ResizeObserver(ce);return ae.observe(ie),()=>ae.disconnect()},[]),i.jsxs(Qi,{children:[i.jsx(vc,{headerHeight:ee,data:g,categories:B,pageNum:M,pagesAmount:U,rows:te,onLoadNext:T,onLoadPrevious:R,searchInputValue:m,onSearchInputChange:ge,onItemClick:s,collapsedGroups:A,fadingGroups:C,onToggleGroup:K,allGroupIds:D,onExpandAll:G,onCollapseAll:ne,unassignedCount:fe}),i.jsxs(Ri,{children:[i.jsx(Xc,{ref:re,zoom:Y,topBarWidth:l,showThemeToggle:P,toggleTheme:a}),e.length?i.jsx(vi,{data:le,baseData:r||e,zoom:Y,rows:de,ref:W,onTileClick:n,onTileContextMenu:o,onEventDrop:u,onEventDrag:c,draggableConfig:d,onDragStateChange:h,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:k,separatorRowIndices:Se,subcontractSeparatorIndex:be,warningSeparatorIndex:fe>0?se:-1,fadingUnitIds:q}):i.jsx(ea,{width:l,children:I?i.jsx(Ln,{isLoading:I,position:"left"}):i.jsx(qi,{})}),_&&i.jsx(Fl,{tooltipData:w,visible:X&&!H})]})]})},sa=x.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${_e+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.mode==="dark"?e.colors.primary:"#fff"};
`,Wr=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({$at:e})=>e==="end"?"flex-end":"flex-start"};
`,ia=x.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`,aa=x.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,jr=x.button`
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
`,ca=x.button`
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
    background: #5c8374;
    color: #fff;
  }
`,Zr=x.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 650;
  color: ${({$primary:e})=>e?"#fff":"#3a4c46"};
  border: 1px solid ${({$primary:e})=>e?"transparent":"#c8d5cd"};
  background: ${({$primary:e})=>e?"#5c8374":"#fff"};
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
`,ua=x.span`
  background: #5c8374;
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
`,Et=({children:e,sw:r=2})=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:e}),fa=()=>{var r,t;const e=document.getElementById(kr);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(r=e==null?void 0:e.requestFullscreen)==null||r.call(e)},ha=()=>{const{config:e,zoom:r,handleGoNext:t,handleGoPrev:n,handleGoToday:o,setZoom:s,goToDate:a,toggleDisplayActiveUnits:l,toolbarActions:u}=je(),{filterButtonState:c=-1}=e;return i.jsxs(sa,{width:0,children:[i.jsxs(Wr,{$at:"start",children:[i.jsxs(aa,{children:[i.jsx(jr,{onClick:n,"aria-label":"Anterior",children:i.jsx(Et,{children:i.jsx("path",{d:"m15 18-6-6 6-6"})})}),i.jsx(ca,{onClick:o,children:"Hoy"}),i.jsx(jr,{onClick:t,"aria-label":"Siguiente",children:i.jsx(Et,{children:i.jsx("path",{d:"m9 18 6-6-6-6"})})})]}),e.showViewSwitcher!==!1&&i.jsxs(i.Fragment,{children:[i.jsx(ia,{}),i.jsxs(la,{children:[i.jsx("button",{className:r===2?"on":"",onClick:()=>s(2),children:"Día"}),i.jsx("button",{className:r===0?"on":"",onClick:()=>s(0),children:"Semana"}),i.jsx("button",{className:r===1?"on":"",onClick:()=>s(1),children:"Mes"})]})]}),e.showJumpToDate!==!1&&i.jsxs(da,{children:[i.jsxs(Et,{children:[i.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),i.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),i.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",i.jsx("input",{type:"date",onClick:d=>{var f,v;try{(v=(f=d.currentTarget).showPicker)==null||v.call(f)}catch{}},onChange:d=>d.target.value&&a(d.target.value)})]})]}),i.jsxs(Wr,{$at:"end",children:[e.showFilterButton!==!1&&c>=0&&i.jsxs(Zr,{$primary:!!c,onClick:l,children:[i.jsx(Et,{children:i.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&i.jsx(ua,{children:c})]}),e.showFullscreenButton!==!1&&i.jsxs(Zr,{onClick:fa,children:[i.jsx(Et,{children:i.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]}),u]})]})},pa={add:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>oe.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),oe.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Pn=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=zt(),a=pa[e];return a?i.jsx(a,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},ga=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r];x.button`
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
`;const ma=x.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${Cr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Le};
`,ya=x.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,va=x.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,xa=x.div`
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
`,ba=x.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,wa=x.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,Sa=x.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`,Ca=x.div`
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
`,Ma=x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`,$a=x.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,Da=x.div`
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
`,Vr="#cdd8d2",Gr=[178,216,195],Ea=[15,125,102],_a=e=>{const r=Math.min(1,Math.max(0,e)),t=n=>Math.round(Gr[n]+(Ea[n]-Gr[n])*r);return`rgb(${t(0)}, ${t(1)}, ${t(2)})`},Ta=()=>{const{date:e,zoom:r,data:t,goToDate:n,config:o}=je(),s=Qe(),a=p.useRef(null),[l,u]=p.useState(null),c=p.useMemo(()=>Array.from({length:12},(b,C)=>O().month(C).format("MMM").toUpperCase()),[s]),d=p.useMemo(()=>O().startOf("day"),[]),{domainStart:f,domainEnd:v,domainDays:k}=p.useMemo(()=>{const b=d.subtract(3,"month").startOf("month"),C=d.add(9,"month").endOf("month");return{domainStart:b,domainEnd:C,domainDays:C.diff(b,"day")+1}},[d]),w=b=>b.diff(f,"day")/k*100,$=b=>Math.min(100,Math.max(0,b)),y=p.useMemo(()=>{const b=[];let C=f.startOf("month");for(;C.isBefore(v);)b.push(C),C=C.add(1,"month");return b},[f,v]),L=o==null?void 0:o.yearCounts,X=p.useMemo(()=>{const b=Math.ceil(k/7),C=new Array(b).fill(0),Z=P=>{const W=P.diff(f,"day");return W<0||W>=k?-1:Math.floor(W/7)};if(L&&L.length)for(const P of L){const W=Z(O(P.date));W>=0&&(C[W]+=P.count)}else for(const P of t??[])for(const W of P.data??[]){const re=Z(O(W.startDate));re>=0&&(C[re]+=1)}const J=Math.max(0,...C);if(J<=0)return C.map(()=>({h:0,color:Vr}));const Y=C.filter(P=>P>0).sort((P,W)=>P-W),E=Y.length>>1,I=Y.length%2?Y[E]:(Y[E-1]+Y[E])/2,N=I>0?J/I:1,_=Math.min(1,Math.max(.45,1/(1+Math.log2(Math.max(1,N)))));return C.map(P=>P>0?{h:Math.min(100,100*Math.pow(P/J,_)),color:_a(P/J)}:{h:0,color:Vr})},[t,L,f,k]),j=w(d),H=b=>{const{startDate:C,endDate:Z}=Zt(b,r),J=$(w(C));return{left:J,width:$(w(Z))-J,startDate:C,endDate:Z}},h=H(e),m=l?H(l.d):null,S=b=>`${b.date()} ${c[b.month()]}`,A=b=>{var J;const C=(J=a.current)==null?void 0:J.getBoundingClientRect();if(!C)return null;const Z=Math.min(1,Math.max(0,(b-C.left)/C.width));return{f:Z,d:f.add(Math.round(Z*(k-1)),"day")}};return i.jsxs(ma,{children:[i.jsxs(ya,{children:["Navegar",i.jsx("br",{}),"por fecha"]}),i.jsxs(va,{ref:a,onClick:b=>{const C=A(b.clientX);C&&n(C.d.toDate())},onMouseMove:b=>{const C=A(b.clientX);C&&u({left:C.f*100,d:C.d})},onMouseLeave:()=>u(null),children:[i.jsx(xa,{children:y.map((b,C)=>i.jsx("span",{style:{left:`${w(b)}%`},children:C===0||b.month()===0?`${c[b.month()]} ${b.format("YY")}`:c[b.month()]},C))}),y.map((b,C)=>C===0?null:i.jsx(ba,{style:{left:`${w(b)}%`}},C)),i.jsx(wa,{children:X.map((b,C)=>i.jsx(Sa,{style:{height:`${b.h}%`,background:b.color}},C))}),i.jsx(ka,{style:{left:`${h.left}%`,width:`${h.width}%`}}),i.jsx(Ca,{style:{left:`${$(j)}%`},children:i.jsx("span",{children:"HOY"})}),l&&m&&i.jsxs(i.Fragment,{children:[i.jsx(Ma,{style:{left:`${m.left}%`,width:`${m.width}%`}}),i.jsx($a,{style:{left:`${l.left}%`}}),i.jsx(Da,{style:{left:`${l.left}%`},children:`Ir a ${S(l.d)}`})]})]})]})},Ur=p.createContext(new Map),Aa=()=>p.useContext(Ur),Pa=10500,Oa=60,Ia=600,La=e=>{var u;const r=document.getElementById(Ve),t=r==null?void 0:r.querySelector(`[data-segment-id="${CSS.escape(e)}"]`);if(!r||!t)return!1;const n=r.getBoundingClientRect(),o=(u=document.getElementById(vr))==null?void 0:u.getBoundingClientRect(),s=t.getBoundingClientRect(),a=Math.max((o==null?void 0:o.bottom)??n.top,n.top,0),l=Math.min(n.bottom,window.innerHeight);return s.width>0&&s.right>n.left+_e&&s.left<n.right&&s.bottom>a&&s.top<l},Ya=()=>{const[e,r]=p.useState(()=>new Map),t=p.useRef(0),n=p.useRef(new Set);p.useEffect(()=>{const s=n.current;return()=>s.forEach(clearTimeout)},[]);const o=p.useCallback(s=>{const a=s.filter(d=>La(d.segmentId));if(!a.length)return[];const l=++t.current,u=new Map(a.map((d,f)=>[d.segmentId,{kind:d.kind,key:l,delayMs:Math.min(f*Oa,Ia)}]));r(d=>new Map([...Array.from(d),...Array.from(u)]));const c=setTimeout(()=>{n.current.delete(c),r(d=>{const f=new Map(d);return u.forEach((v,k)=>{var w;((w=f.get(k))==null?void 0:w.key)===l&&f.delete(k)}),f})},Pa);return n.current.add(c),a.map(d=>d.segmentId)},[]);return{pulses:e,pulseTiles:o}},Na=x.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Fa=x.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?Cr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,za=x.div`
  position: relative;
`,Ba=({data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,topBarWidth:s,onItemClick:a,toggleTheme:l,onEventDrop:u,onEventDrag:c,draggableConfig:d,schedulerRef:f,onTimeRangeSelect:v,onMultiTimeRangeSelect:k,clickToAddConfig:w})=>{const{goToDate:$,handleGoToday:y,zoomIn:L,zoomOut:X,zoom:j}=je(),{pulses:H,pulseTiles:h}=Ya();return p.useImperativeHandle(f,()=>({goToDate:$,goToToday:y,setZoom:m=>{if(!Tr(m))return;const S=m-j;if(S>0)for(let A=0;A<S;A++)L();else for(let A=0;A<Math.abs(S);A++)X()},pulseTiles:h}),[$,y,j,L,X,h]),i.jsx(Ur.Provider,{value:H,children:i.jsx(oa,{data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,topBarWidth:s,onItemClick:a,toggleTheme:l,onEventDrop:u,onEventDrag:c,draggableConfig:d,onTimeRangeSelect:v,onMultiTimeRangeSelect:k,clickToAddConfig:w})})},Ha=p.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:a,onTileClick:l,onTileContextMenu:u,handleToggleDisplayActiveUnits:c,onClearFilterData:d,toolbarActions:f,onItemClick:v,isLoading:k,onEventDrop:w,onEventDrag:$,draggableConfig:y,onTimeRangeSelect:L,onMultiTimeRangeSelect:X,clickToAddConfig:j},H){var _;const h=p.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),m=p.useRef(null),S=p.useRef(null),[A,b]=p.useState((_=m.current)==null?void 0:_.clientWidth),C=p.useMemo(()=>O(s),[s]),[Z,J]=p.useState(h.defaultTheme??"light"),Y=()=>{J(Z==="light"?"dark":"light")},E=Z==="light"?ks:Ms,I=h.theme?h.theme[E.mode]:{},N={...E,colors:{...E.colors,...I}};return p.useImperativeHandle(H,()=>({goToDate:P=>{var W;return(W=S.current)==null?void 0:W.goToDate(P)},goToToday:()=>{var P;return(P=S.current)==null?void 0:P.goToToday()},setZoom:P=>{var W;return(W=S.current)==null?void 0:W.setZoom(P)},pulseTiles:P=>{var W;return((W=S.current)==null?void 0:W.pulseTiles(P))??[]}}),[]),p.useLayoutEffect(()=>{const P=()=>{m.current&&b(m.current.clientWidth)};P(),window.addEventListener("resize",P);let W;const re=m.current;return re&&typeof ResizeObserver<"u"&&(W=new ResizeObserver(P),W.observe(re)),()=>{window.removeEventListener("resize",P),W==null||W.disconnect()}},[]),i.jsxs(i.Fragment,{children:[i.jsx(Cs,{}),i.jsx(xs,{theme:N,children:i.jsx(Ui,{lang:h.lang,translations:h.translations,children:i.jsx(di,{data:r,isLoading:!!k,config:h,onRangeChange:a,defaultStartDate:C,handleToggleDisplayActiveUnits:c,onClearFilterData:d,toolbarActions:f,children:i.jsxs(Na,{id:kr,children:[i.jsx(Fa,{showScroll:!!r.length,$footer:h.showOverview!==!1&&!!r.length,id:Ve,ref:m,children:i.jsx(za,{children:i.jsx(Ba,{data:r,baseData:n,categories:t,onTileClick:l,onTileContextMenu:u,topBarWidth:A??0,onItemClick:v,toggleTheme:Y,onEventDrop:w,onEventDrag:$,draggableConfig:y,schedulerRef:S,onTimeRangeSelect:L,onMultiTimeRangeSelect:X,clickToAddConfig:j})})}),h.showOverview!==!1&&!!r.length&&i.jsx(Ta,{})]})})})})]})}),Wa=x.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,ja=x.button`
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
`,Za=x.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Va=x.p`
  ${lt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,Xr=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:a,loadPrevious:l}=Qe(),u=e==="next"?`${a} ${o+2}/${s}`:`${l} ${o}/${s}`;return i.jsx(Wa,{intent:e,children:i.jsxs(ja,{onClick:r,isVisible:n,children:[t&&i.jsx(Za,{children:t}),i.jsx(Va,{children:u})]})})},Ga=x.div`
  min-width: ${_e+"px"};
  max-width: ${_e+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,Ua=x.div`
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
`,Xa=x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,Ka=x.input`
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
`,Ja=x.div`
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
`,qa=Ye`
  from { opacity: 1; }
  to { opacity: 0; }
`,On=x.div`
  ${({$fading:e})=>e&&at`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${qa} 180ms ease forwards;
      }
    `}
`,Qa=x.button`
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
`,Ra=Ye`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,ec=x.div`
  display: flex;
  align-items: ${({rows:e})=>e>1?"start":"center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${he}px;
  height: calc(${he}px * ${({rows:e})=>e});
  border-top: 1px solid
    ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBorder+"33":e.colors.border};
  border-left: 3px solid
    ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBorder:"transparent"};
  background-color: ${({theme:e,$isSubcontract:r})=>r?e.colors.subcontractBg:"transparent"};
  /* Scope the transition to paint-only props. It was transition:0.5s ease (= transition:all), which animated the row
     height (a LAYOUT property) for 500ms on every add/remove/collapse — layout thrash that made rowIn hitch. */
  transition: background-color 0.15s ease, border-color 0.15s ease;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Ra} 200ms ease-out;
  }
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,tc=x.div`
  display: flex;
  align-items: center;
`,nc=x.div`
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
`,rc=x.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,oc=x.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,Kr=x.p`
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
`,sc=x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`,ic=x.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  flex: none;
  font-size: 10px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.accent};
  background: ${({theme:e})=>e.colors.accent+"1A"};
  padding: 1px 6px;
  border-radius: 5px;
  & svg {
    width: 11px;
    height: 11px;
  }
`,ac=x.span`
  min-width: 0;
  font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.placeholder};
  border: 1px solid ${({theme:e})=>e.colors.border};
  padding: 1px 6px;
  border-radius: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,cc=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),lc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:[i.jsx("circle",{cx:"9",cy:"8",r:"3.2"}),i.jsx("path",{d:"M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z"}),i.jsx("circle",{cx:"16.8",cy:"8.6",r:"2.5"}),i.jsx("path",{d:"M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8"})]}),dc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),i.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),i.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),uc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),i.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),fc=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o})=>i.jsx(ec,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,onClick:()=>n==null?void 0:n({id:e,label:r}),children:i.jsxs(tc,{children:[i.jsx(nc,{$provider:o,children:cc(r.icon)?i.jsx(rc,{src:r.icon,alt:""}):o?i.jsx(uc,{}):i.jsx(dc,{})}),i.jsxs(oc,{children:[i.jsx(Kr,{isMain:!0,children:r.title}),r.capacity!=null||r.plate?i.jsxs(sc,{children:[r.capacity!=null&&i.jsxs(ic,{title:`${r.capacity} pasajeros`,children:[i.jsx(lc,{}),r.capacity]}),r.plate&&i.jsx(ac,{title:r.plate,children:r.plate})]}):r.subtitle&&i.jsx(Kr,{children:r.subtitle})]})]})}),Jr=e=>e.mode==="dark"?"#FCA5A5":"#B91C1C",hc=x.div`
  display: flex;
  align-items: center;
  gap: ${({$tone:e})=>e?"4px":"5px"};
  padding: ${({$tone:e})=>e?"0 7px 0 9px":"0 11px 0 9px"};
  height: 21px;
  color: ${({theme:e,$variant:r,$tone:t})=>t==="warning"?Jr(e):r==="subcontract"?e.colors.subcontractText:"#5C8374"};
  background: ${({theme:e,$variant:r,$tone:t})=>t==="warning"?e.colors.warning+"26":r==="subcontract"?e.colors.subcontractBorder+"24":"#E9EFEC"};
  border-left: 3px solid
    ${({theme:e,$variant:r,$tone:t})=>t==="warning"?e.colors.warning:r==="subcontract"?e.colors.subcontractBorder:"transparent"};
  border-bottom: 1px solid
    ${({theme:e,$variant:r,$tone:t})=>t==="warning"?e.colors.warning+"66":r==="subcontract"?e.colors.subcontractBorder:"#D4DFD9"};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({theme:e,$variant:r,$tone:t})=>t==="warning"?e.colors.warning+"38":r==="subcontract"?e.colors.subcontractBorder+"33":"#DAE6E0"};
  }
`,pc=x.span`
  font-size: 9.5px;
  font-weight: 750;
  letter-spacing: ${({$tone:e})=>e?"0.03em":"0.07em"};
  text-transform: uppercase;
  color: ${({theme:e,$variant:r,$tone:t})=>t==="warning"?Jr(e):r==="subcontract"?e.colors.subcontractText:"#5C8374"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`,gc=x.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:r})=>r==="subcontract"?e.colors.subcontractText:"#5C8374"};
  flex-shrink: 0;
`,mc=x.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 15px;
  padding: 0 5px 0 4px;
  border-radius: 8px;
  font-size: 9.5px;
  font-weight: 750;
  line-height: 1;
  flex-shrink: 0;
  color: ${({$tone:e})=>e==="warning"?"#FFFFFF":"#2E8B63"};
  background: ${({theme:e,$tone:r})=>r==="warning"?e.colors.warning:"#2E8B6324"};
`,yc=x.div`
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
`,In=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>{const s=o==="unassigned"?r===0?"ok":"warning":void 0;return i.jsxs(hc,{$variant:o,$tone:s,onClick:n,title:e,children:[i.jsx(yc,{$collapsed:t,children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:i.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx(pc,{$variant:o,$tone:s,children:e}),s?i.jsxs(mc,{$tone:s,children:[i.jsx("svg",{width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",children:s==="ok"?i.jsx("path",{d:"M2.5 6.5L5 9L9.5 3.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M6 1.5L11 10.5H1L6 1.5Z",stroke:"currentColor",strokeWidth:"1.4",strokeLinejoin:"round"}),i.jsx("path",{d:"M6 5V7.2",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"}),i.jsx("circle",{cx:"6",cy:"8.9",r:"0.75",fill:"currentColor"})]})}),r]}):i.jsx(gc,{$variant:o,children:r})]})},vc=({data:e,categories:r,headerHeight:t,rows:n,onLoadNext:o,onLoadPrevious:s,pageNum:a,pagesAmount:l,searchInputValue:u,onSearchInputChange:c,onItemClick:d,collapsedGroups:f,fadingGroups:v,onToggleGroup:k,allGroupIds:w,onExpandAll:$,onCollapseAll:y,unassignedCount:L})=>{const[X,j]=p.useState(!1),H=Qe(),h=()=>j(_=>!_),m=r?[...r].sort((_,P)=>_.maxPassengers-P.maxPassengers):[],S=m.length>0,A=w.length>0,b=A&&f.size===w.length;A&&f.size;const C=e.filter(_=>_.isUnassigned),Z=H.unassigned??"No unit assigned",J=e.filter(_=>_.isSubcontract),Y=H.subcontract??"Subcontract",E=_=>{const P=e.indexOf(_);return i.jsx(fc,{id:_.id,item:_.label,rows:n[P],onItemClick:d,isSubcontract:_.isSubcontract},_.id)},I=_=>{const P=e.filter(F=>!F.isSubcontract&&F.categoryId===_.id);if(P.length===0)return null;const W=f.has(_.id),re=v.has(_.id),ee=_.name;return i.jsxs("div",{children:[i.jsx(In,{label:ee,count:P.length,isCollapsed:W||re,onToggle:()=>k(_.id),variant:"category"}),!W&&i.jsx(On,{$fading:re,children:P.map(E)})]},_.id)},N=e.filter(_=>!_.isSubcontract&&!_.isUnassigned&&(!_.categoryId||!S));return i.jsxs(Ga,{children:[i.jsxs(Ua,{$height:t,children:[i.jsxs(Xa,{children:[i.jsxs(Ja,{isFocused:X,children:[i.jsx(Ka,{placeholder:H.search,value:u,onChange:c,onFocus:h,onBlur:h}),i.jsx(Pn,{iconName:"search"})]}),A&&i.jsx(Qa,{title:b?"Expand all":"Collapse all",onClick:b?$:y,$allCollapsed:b,children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:b?i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),i.jsx(Xr,{intent:"previous",isVisible:a!==0,onClick:s,icon:i.jsx(Pn,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]}),C.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(In,{label:Z,count:L,isCollapsed:f.has("__unassigned__")||v.has("__unassigned__"),onToggle:()=>k("__unassigned__"),variant:"unassigned"}),!f.has("__unassigned__")&&i.jsx(On,{$fading:v.has("__unassigned__"),children:C.map(E)})]}),S?m.map(I):N.map(E),S&&N.length>0&&N.map(E),J.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(In,{label:Y,count:J.length,isCollapsed:f.has("__subcontract__")||v.has("__subcontract__"),onToggle:()=>k("__subcontract__"),variant:"subcontract"}),!f.has("__subcontract__")&&i.jsx(On,{$fading:v.has("__subcontract__"),children:J.map(E)})]}),i.jsx(Xr,{intent:"next",isVisible:a!==l-1,onClick:o,icon:i.jsx(Pn,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]})},xc=x.div`
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
`,bc=Ye`
from{
    left: -100%;
}
to{
    left: 100%;
}`,wc=x.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${bc} 1s infinite;
`,Ln=({isLoading:e,position:r})=>e?i.jsx(xc,{position:r,children:i.jsx(wc,{})}):null,Ge=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:a,textYPos:l,label:u,font:c,isBottomRow:d,fillStyle:f,topText:v,bottomText:k,strokeStyle:w,labelBetweenCells:$}=e;t.beginPath();const y=w??(r.mode==="dark"?r.colors.border:"#E4EAE7");if(t.strokeStyle=y,t.setLineDash([]),u&&c&&l){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,a),$?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+a),t.lineTo(n+s,o+a),t.stroke(),t.moveTo(n+s/2,o+a),t.lineTo(n+s/2,o+a-5),t.stroke()):(t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke()),t.font=c;const L=n+s/2-t.measureText(u).width/2;t.textBaseline="middle",t.fillStyle=r.mode==="dark"?r.colors.textPrimary:"#183D3D",t.fillText(u,L,l)}if(d&&f&&v&&k){t.fillStyle=f,t.fillRect(n,o,s,a),t.beginPath(),t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke(),t.font=v.font;const L=n+s/2-t.measureText(v.label).width/2;t.fillStyle=v.color,t.fillText(v.label,L,v.y),t.font=k.font;const X=n+s/2-t.measureText(k.label).width/2;t.fillStyle=k.color,t.fillText(k.label,X,k.y)}},Sc=(e,r,t,n,o=rt)=>{const s=We+o,a=s+13,l=s+27;let u=0;for(let c=0;c<r;c++){const d=Dr(O(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"days")),f=d.isCurrentDay;if(Ge({ctx:e,x:u,y:s,width:ke,height:dt,isBottomRow:!0,fillStyle:f?n.colors.currentDay:n.colors.gridBackground,topText:{y:a,label:f?"":d.dayName.replace(/\./g,"").toUpperCase(),font:`600 10px ${Le}`,color:n.mode==="dark"?n.colors.placeholder:"#74897F"},bottomText:{y:l,label:`${d.dayOfMonth}`,font:f?`700 12px ${Le}`:`700 13px ${Le}`,color:f?n.colors.today:n.mode==="dark"?n.colors.textPrimary:"#183D3D"}},n),f){const w=u+ke/2,$=a-13/2;e.save(),e.fillStyle=n.colors.today,e.beginPath(),e.roundRect?e.roundRect(w-30/2,$,30,13,5):e.rect(w-30/2,$,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Le}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",w,$+13/2+.5),e.restore()}u+=ke}},Cc=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*Ne;const s=We;let l=t.month;for(let u=0;u<r;u++){l>=yr&&(l=0);const c=$r(t,u)*Ne;Ge({ctx:e,x:o,y:s,width:c,height:rt,textYPos:wr,label:O().month(l).format("MMMM").toUpperCase(),font:Je.bottomRow.number},n),o+=c,l++}},kc=" ".repeat(98),Mc=(e,r,t)=>{const o=O(`${r.year}-${r.month+1}-${r.dayOfMonth}`);let s=-r.dayOfMonth*ke+ke;for(let a=0;a<yr;a++){const l=o.add(a,"months"),u=l.daysInMonth()*ke,c=l.format("MMMM YYYY").toUpperCase();Ge({ctx:e,x:s,y:0,width:u,height:We,textYPos:fn,label:`${c}${kc}${c}`,font:`800 12px ${Le}`},t),s+=u}},$c=(e,r,t,n)=>{const o=7*ke,s=We,a=e.canvas.width/o+o,l=r.weekOfYear;let u=0;for(let c=0;c<a;c++){const d=O(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let f=(l+c)%mr;f<=0&&(f+=mr),d!==1&&c===0&&(u=-d*ke+ke),Ge({ctx:e,x:u,y:s,width:o,height:rt,textYPos:wr,label:`${t.toUpperCase()} ${f}`,font:Je.middleRow},n),u+=o}},Dc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},Ec=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},_c=(e,r,t,n,o)=>{const s=Bt-dt/1.6,a=Bt-dt/4.5,l=We+rt;let u=0;for(let c=0;c<r;c++){const d=O(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),f=d.isSame(O(),"week");Ge({ctx:e,x:u,y:l,width:ut,height:dt,isBottomRow:!0,fillStyle:f?o.colors.today+"26":Dc({isCurrent:f,variant:"yearView"},o),topText:{y:s,label:d.isoWeek().toString(),font:f?`700 14px ${Le}`:Je.bottomRow.name,color:f?o.colors.today:Ec({isCurrent:f},o)},bottomText:{y:a,label:n.toUpperCase(),font:Je.middleRow,color:o.colors.placeholder}},o),u+=ut}},Tc=(e,r,t,n)=>{const s=r.year,a=e.canvas.width*2;let l=0,u=0,c=(Mr(s)-t+1)*Ne,d=0;for(;l+d<=a;)u>0&&(c=Mr(s+u)*Ne),d+c>a&&u>0&&(c=Math.ceil((a-d)/Ne)*Ne),Ge({ctx:e,x:l,y:0,width:c,height:We,textYPos:fn,label:(s+u).toString(),font:Je.topRow},n),l+=c,d+=c,u++},Ac=(e,r,t,n)=>{const o=Math.floor(r/Ht)+2,s=Ht*Ee;let u=-O(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*Ee+.5*Ee;for(let c=0;c<o;c++){const d=O(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Ge({ctx:e,x:u,y:ft,width:s,height:$t,textYPos:ft+$t/2+2,label:d,font:Je.bottomRow.number},n),u+=s}},Pc=(e,r,t,n)=>{const o=Math.ceil(r/Ht),s=O(`${t.year}-${t.month+1}-${t.dayOfMonth}`),a=s.add(o-1,"days"),l=s.month(),u=a.add(1,"day").month(),c=l===u?1:2;let d=.5*Ee;for(let f=0;f<c;f++){const v=O(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),w=O(`${t.year}-${t.month+f+1}-01T:23:59:59`).endOf("month"),$=w.format("MMMM").toUpperCase(),y=w.diff(v,"hour")+1,L=f===0?y*Ee:r*Ee;Ge({ctx:e,x:d,y:0,width:L,height:ft,textYPos:fn,label:$,font:Je.topRow},n),d+=L}},Oc=(e,r,t,n)=>{let o=0;const s=ft+$t,a=O(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=Ee;for(let u=0;u<r;u++){const c=a.add(u,"hours").format("h:00a").toUpperCase();Ge({ctx:e,x:o,y:s,width:l,height:un,label:c,font:Je.bottomRow.hoursInDay,textYPos:ft+$t+un/2+2,labelBetweenCells:!0},n),o+=Ee}},Ic=(e,r,t,n,o,s,a,l=!0)=>{switch(r){case 0:Tc(e,n,s,a),Cc(e,t,n,a),_c(e,t,n,o,a);break;case 1:Mc(e,n,a),l&&$c(e,n,o,a),Sc(e,t,n,a,l?rt:0);break;case 2:Pc(e,t,n,a),Ac(e,t,n,a),Oc(e,t,n,a);break}},Lc=x.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,Yc=x.div`
  position: sticky;
  left: 0;
  width: ${({$width:e})=>e}px;
  z-index: 3;
`,Nc=x.div`
  height: ${({$height:e})=>e??Bt}px;
  display: block;
`,Fc=x.canvas``,zc={transfer:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 8h13l-3-3"}),i.jsx("path",{d:"M20 16H7l3 3"})]}),sun:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),i.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),i.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:i.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 3 2 20h20z"}),i.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),i.jsx("path",{d:"M12 7.5V12l3 2"})]})},Fe=({name:e,className:r,strokeWidth:t=2})=>i.jsx("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:zc[e]}),Bc=x.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${_e+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,qr=x.span`
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
`,Gt=x.span`
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
`,Hc=x.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,Wc=x.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,jc=x.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,Zc=x.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,Vc=x.span`
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
`,Gc=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],Uc=()=>i.jsxs(Bc,{children:[i.jsx(qr,{children:"Leyenda"}),i.jsxs(Gt,{children:[i.jsx(Fe,{name:"transfer"})," Transfer"]}),i.jsxs(Gt,{children:[i.jsx(Fe,{name:"sun"})," Gira 1 día"]}),i.jsxs(Gt,{children:[i.jsx(Fe,{name:"tour"})," Gira multidía"]}),i.jsxs(Gt,{children:[i.jsx(Hc,{children:"SUB"})," Subcontrato"]}),i.jsx(Wc,{}),i.jsxs(qr,{children:["Estado ",i.jsx("em",{children:"franja izq. + punto esq."})]}),Gc.map(e=>i.jsxs(jc,{children:[i.jsx(Zc,{style:{background:e.stripe}}),i.jsx(Vc,{style:{color:e.color},children:i.jsx(Fe,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),Xc=p.forwardRef(function({zoom:r,topBarWidth:t,showThemeToggle:n,toggleTheme:o},s){const{week:a}=Qe(),{date:l,cols:u,dayOfYear:c,startDate:d,config:f}=je(),v=p.useRef(null),k=zt(),w=f.showWeekRow!==!1,$=r===2?$s:r===1&&!w?We+dt:Bt,y=p.useCallback(L=>{const X=kn(),j=$+1;Pr(L,X,j),Ic(L,r,u,d,a,c,k,w)},[u,c,d,a,r,k,w,$]);return p.useEffect(()=>{if(!v.current)return;const L=v.current.getContext("2d");if(!L)return;const X=()=>y(L);return window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[y]),p.useEffect(()=>{const L=v.current;if(!L)return;L.style.letterSpacing="1px";const X=L.getContext("2d");X&&y(X)},[l,r,y]),i.jsxs(Lc,{ref:s,children:[(f.showTopbar!==!1||f.showLegend!==!1)&&i.jsxs(Yc,{$width:t,children:[f.showTopbar!==!1&&i.jsx(ha,{width:t,showThemeToggle:n,toggleTheme:o}),f.showLegend!==!1&&i.jsx(Uc,{})]}),i.jsx(Nc,{$height:$,id:vr,children:i.jsx(Fc,{ref:v})})]})}),Kc=(e,r,t)=>{let n;switch(t){case 0:n=Ne;break;case 2:n=Ee;break;default:n=ke}const s=e.startDate.startOf("day"),a=e.endDate.startOf("day"),l=r.startDate.startOf("day"),u=r.endDate.startOf("day"),c=()=>{let d;switch(t){case 2:d=(e.startDate.diff(r.startDate,"minute")/Me+1)*n-n/2;break;default:d=s.diff(l,"day")*n}return Math.max(0,d)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(e.startDate,"minute")/Me*n,50);break;default:d=Math.max(a.diff(s,"day")*n+n,50)}return{x:c(),width:d}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let d;switch(t){case 2:d=Math.max(e.endDate.diff(r.startDate,"minute")/Me*n+.5*n,50);break;default:d=Math.max(a.diff(l,"day")*n+n,50)}return{x:c(),width:d}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let d;switch(t){case 2:d=Math.max(r.endDate.diff(e.startDate,"minute")/Me*n,50);break;default:d=Math.max(u.diff(s,"day")*n+n,50)}return{x:c(),width:d}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let d;switch(t){case 2:d=Math.max(r.endDate.diff(r.startDate,"minute")/Me*n,50);break;default:d=Math.max(u.diff(l,"day")*n+n,50)}return{x:c(),width:d}}return{x:c(),width:50}},Jc=(e,r,t,n,o,s)=>{const a=e*he+Ds,l=r.hour(),u=t.hour();let c,d,f,v;switch(s){case 2:{c=O(n),d=O(o),f=O(r).hour(l).minute(0),v=O(t).hour(u).minute(0);break}default:{c=O(n).hour(0).minute(0),d=O(o).hour(23).minute(59),f=r,v=t;break}}return{...Kc({startDate:c,endDate:d},{startDate:f,endDate:v},s),y:a}},Qr=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"},Rr={sin_chofer:{icon:"warn",color:"#9AA4B2",label:"Sin chofer"},sin_avisar:{icon:"warn",color:"#D98A22",label:"No notificado al chofer"},programado:{icon:"warn",color:"#C2A878",label:"Notificación programada"},notificado:{icon:"clock",color:"#2C6BB0",label:"Notificado"},confirmado:{icon:"check",color:"#2E8B63",label:"Confirmado"}};x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,x.p`
  ${lt}
  ${nt}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const qc=Ye`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,Qc=Ye`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`,Rc=x.button`
  ${lt}
  position: absolute;
  height: ${Wt}px;
  border-radius: 7px;
  /* NO overflow:hidden — it would make the tile the sticky scroll-container and break the floating text (the multi-day
     body sticks to the visible-left as a wide event scrolls). */
  /* Isolate so the top-right status cluster (z 6) stays contained in the tile instead of escaping to the
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
    animation: ${qc} 180ms ease-out;
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
  ${({$exiting:e})=>e&&at`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${Qc} 190ms ease-out forwards;
      }
    `}
  /* A pulsing tile's flare and rings reach past its edges; lift it so neighbours don't cover them. */
  ${({$pulsing:e})=>e&&"z-index: 8;"}
  /* Persistent green highlight for the event focused from a warning: a bold green ring + glow + an inset green wash
     over the tile bg (below the text, which stays readable). Lifted above neighbours so the ring isn't clipped. */
  ${({$highlighted:e})=>e&&`z-index: 9;
     box-shadow: 0 0 0 3px #0F7D66, 0 0 16px 3px rgba(15, 125, 102, 0.55), inset 0 0 0 200px rgba(15, 125, 102, 0.3);`}
  /* Focus-mode: rows outside the focused set fade back and go inert. */
  ${({$dimmed:e})=>e&&"opacity: 0.26; filter: grayscale(0.45); pointer-events: none;"}
  /* Focus-mode: a blocking service that will vacate the target unit — amber dashed outline, faded. */
  ${({$leaving:e})=>e&&"opacity: 0.74; filter: grayscale(0.2); outline: 2px dashed #D98A22; outline-offset: -2px; z-index: 7;"}
`,el=x.div`
  position: sticky;
  left: ${_e+4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
  padding: 4px 10px;
`,eo=x.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,tl=x.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,nl=x.span`
  ${nt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,rl=x.span`
  ${nt}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,ol=x.span`
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
`,sl=x.div`
  ${nt}
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  padding-right: 46px;
  opacity: 0.9;
  font-size: 9.5px;
  font-weight: 600;
  line-height: 1.1;
  & svg {
    width: 10px;
    height: 10px;
    flex: none;
    opacity: 0.9;
  }
`,to=x.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,no=x.span`
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
`,ro=x.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,Yn={confirmed:{ring:"#2E8B63",glow:"rgba(46, 139, 99, 0.45)"},notified:{ring:"#2C6BB0",glow:"rgba(44, 107, 176, 0.45)"},lost:{ring:"#C6483D",glow:"rgba(198, 72, 61, 0.45)"}},il=Ye`
  0% { box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent; }
  12% { box-shadow: 0 0 0 3px var(--pulse-ring), 0 0 16px 4px var(--pulse-glow); }
  100% { box-shadow: 0 0 0 1.5px var(--pulse-ring), 0 0 0 0 transparent; }
`,al=Ye`
  0%, 80% { opacity: 1; }
  100% { opacity: 0; }
`,cl=Ye`
  0% { transform: scale(0.4); opacity: 0; }
  60% { transform: scale(1.18); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`,ll=Ye`
  0% { transform: scale(0.6); opacity: 0.65; }
  100% { transform: scale(2.2); opacity: 0; }
`,dl=x.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  --pulse-ring: ${({$kind:e})=>Yn[e].ring};
  --pulse-glow: ${({$kind:e})=>Yn[e].glow};
  animation:
    ${il} 2160ms ease-out var(--pulse-delay, 0ms) both,
    ${al} 9600ms linear var(--pulse-delay, 0ms) both;
`,ul=x.span`
  position: relative;
  display: inline-flex;
  --pulse-ring: ${({$kind:e})=>Yn[e].ring};
  @media (prefers-reduced-motion: no-preference) {
    animation: ${cl} 420ms cubic-bezier(0.34, 1.56, 0.64, 1) var(--pulse-delay, 0ms) both;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      border-radius: 50%;
      border: 1.5px solid var(--pulse-ring);
      opacity: 0;
      pointer-events: none;
      animation: ${ll} 750ms cubic-bezier(0.22, 1, 0.36, 1) var(--pulse-delay, 0ms);
    }
    &::after {
      animation-delay: calc(var(--pulse-delay, 0ms) + 170ms);
    }
  }
`,fl=x.div`
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
`,oo=x.span`
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
`,hl=Ye`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`,pl=x.div`
  position: absolute;
  height: ${Wt}px;
  border-radius: 7px;
  /* A clearly-green "this is the event that lands here" preview — nearly opaque so it doesn't muddy over the dark
     blocker underneath; the dashed light border + the "entra a…" badge keep it reading as a preview, not a real tile. */
  background: rgba(21, 133, 97, 0.74);
  border: 2px dashed rgba(255, 255, 255, 0.92);
  box-shadow: 0 0 0 3px rgba(15, 125, 102, 0.28), 0 3px 9px -2px rgba(12, 26, 23, 0.4);
  pointer-events: none;
  z-index: 8;
  overflow: visible;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${hl} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`,gl=x.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`,ml=x.div`
  ${nt}
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  font-size: 12px;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  line-height: 1.15;
  & svg {
    width: 14px;
    height: 14px;
    flex: none;
    color: #fff;
  }
`,yl=x.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.1;
  & svg {
    width: 11px;
    height: 11px;
    flex: none;
    color: #fff;
  }
`,vl=x.span`
  position: absolute;
  bottom: -11px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  background: #2e8b63;
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  border-radius: 6px;
  padding: 2px 8px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.22);
  z-index: 9;
`,xl=x.span`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  background: #d98a22;
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  border-radius: 6px;
  padding: 1px 7px;
  z-index: 8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`,bl=34,Nn=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onTileContextMenu:s,onDragStart:a,isDragging:l=!1,isDraggable:u=!0,yOffset:c=0,exiting:d=!1,highlighted:f=!1,dimmed:v=!1,leaving:k=!1,ghost:w=!1,ghostBadge:$="",pulse:y})=>{const{date:L}=je(),X=Zt(L,t),{y:j,x:H,width:h}=Jc(e,X.startDate,X.endDate,r.startDate,r.endDate,t),{colors:m}=zt(),S=p.useRef(null),A=O(r.startDate).isSame(O(r.endDate),"day"),b=r.eventType===Dt.Tour,C=r.eventType===Dt.Transfer,Z=A&&(b||C);if(w)return i.jsxs(pl,{style:{left:`${H}px`,top:`${j+c}px`,width:`${h}px`},children:[i.jsxs(gl,{children:[i.jsxs(ml,{children:[i.jsx(Fe,{name:C?"transfer":"tour"}),r.title]}),i.jsxs(yl,{children:[i.jsx(Fe,{name:"check",strokeWidth:2.6}),"flota propia"]})]}),$&&i.jsx(vl,{children:$})]});const J=ee=>{ee.button===0&&(S.current={x:ee.clientX,y:ee.clientY},u&&a&&(ee.preventDefault(),a(r,ee)))},Y=ee=>{s&&(ee.preventDefault(),s(r,{x:ee.clientX,y:ee.clientY}))},E=ee=>{if(S.current){const F=Math.abs(ee.clientX-S.current.x),z=Math.abs(ee.clientY-S.current.y);Math.sqrt(F*F+z*z)<=5&&(o==null||o(r)),S.current=null}else o==null||o(r)},I={left:`${H}px`,top:`${j+c}px`,backgroundColor:`${r.bgColor??m.defaultTile}`,width:`${h}px`,color:Qr(r.bgColor??"")},N=!n&&r.readiness?Rr[r.readiness]:null,_=n&&r.subcontractConfirmed===!1,P=y?{"--pulse-delay":`${y.delayMs}ms`}:void 0,W=ee=>y?i.jsx(ul,{$kind:y.kind,style:P,children:ee},`${y.key}-${r.readiness??""}-${String(r.subcontractConfirmed)}`):ee,re=ee=>i.jsxs(Rc,{"data-segment-id":r.segmentId,style:I,onClick:E,onMouseDown:J,onContextMenu:Y,onDragStart:F=>F.preventDefault(),isDraggable:u,isDragging:l,$unconfirmed:_,$exiting:d,$highlighted:f,$dimmed:v,$leaving:k,$pulsing:!!y,children:[y&&i.jsx(dl,{$kind:y.kind,style:P,"aria-hidden":!0},y.key),k&&i.jsx(xl,{children:"Sub"}),ee]});return re(Z?i.jsxs(i.Fragment,{children:[(n||N)&&i.jsx(to,{$sm:!0,children:W(n?i.jsx(ro,{children:"SUB"}):N&&i.jsx(no,{$sm:!0,style:{color:N.color},children:i.jsx(Fe,{name:N.icon,strokeWidth:N.icon==="check"?2.6:2.2})}))}),i.jsxs(fl,{$transfer:C,children:[i.jsx(Fe,{name:C?"transfer":"sun",strokeWidth:2.4}),h>=bl&&i.jsxs(i.Fragment,{children:[i.jsx(oo,{children:O(r.startDate).format("h:mm A")}),!C&&i.jsx(oo,{$end:!0,children:O(r.endDate).format("h:mm A")})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(to,{children:(n||N)&&W(n?i.jsx(ro,{children:"SUB"}):N&&i.jsx(no,{style:{color:N.color},children:i.jsx(Fe,{name:N.icon,strokeWidth:N.icon==="check"?2.6:2.2})}))}),r.bookingNumber&&i.jsx(ol,{children:r.bookingNumber}),i.jsxs(el,{children:[i.jsxs(eo,{$pad:!0,children:[i.jsx(tl,{children:i.jsx(Fe,{name:C?"transfer":"tour"})}),i.jsx(nl,{children:r.title})]}),r.subtitle&&i.jsx(eo,{children:i.jsx(rl,{children:r.subtitle})}),r.driver&&i.jsxs(sl,{children:[i.jsx(Fe,{name:"person"}),r.driver]})]})]}))},so=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Pe},wl=e=>({segmentId:e.segmentId,reservationId:e.reservationId,startDate:e.startDate,endDate:e.endDate,occupancy:0,title:e.title,bookingNumber:"",eventType:e.eventType}),Sl=({data:e,zoom:r,onTileClick:t,onTileContextMenu:n,onDragStart:o,isDraggable:s,draggingEventId:a,separatorRowIndices:l=[],fadingUnitIds:u,highlightedSegmentId:c,focusedUnitIds:d,leavingSegmentIds:f,ghostProject:v})=>{const k=Aa(),{nodes:w,liveMap:$}=p.useMemo(()=>{const h=new Map,m=!!d&&d.length>0;let S=0;return{nodes:e.map((b,C)=>{C>0&&(S+=Math.max(e[C-1].data.length,1));const Z=!!(u!=null&&u.has(b.id)),J=m&&!d.includes(b.id),Y=so(S,l),E=v&&b.id===v.targetUnitId?i.jsx(Nn,{row:S,data:wl(v),zoom:r,yOffset:Y,isDragging:!1,isDraggable:!1,ghost:!0,ghostBadge:v.badge},`ghost-${b.id}`):null;if(!b.data.some(N=>N.length>0))return E?[E]:[];const I=b.data.map((N,_)=>N.map(P=>{const W=a===P.segmentId,re=s?s(P):!1,ee=_+S,F=so(ee,l);return h.set(P.segmentId,{project:P,absoluteRow:ee,yOffset:F,isSubcontract:!!b.isSubcontract}),i.jsx(Nn,{row:ee,data:P,zoom:r,isSubcontract:b.isSubcontract,onTileClick:t,onTileContextMenu:n,onDragStart:o,isDragging:W,isDraggable:re,yOffset:F,exiting:Z,highlighted:c!=null&&P.segmentId===c,dimmed:J,leaving:!!(f!=null&&f.includes(P.segmentId)),pulse:k.get(P.segmentId)},P.segmentId)}));return E?[...I,[E]]:I}).flat(2),liveMap:h}},[e,t,n,r,o,s,a,l,u,c,d,f,v,k]),y=p.useRef(new Map),L=p.useRef([]),[X,j]=p.useState([]);p.useEffect(()=>()=>L.current.forEach(clearTimeout),[]),p.useEffect(()=>{const h=y.current;y.current=$;const m=[];if(h.forEach((b,C)=>{$.has(C)||m.push(b)}),j(b=>{let C=b.filter(Z=>!$.has(Z.project.segmentId));for(const Z of m)C.some(J=>J.project.segmentId===Z.project.segmentId)||(C=[...C,Z]);return C}),!m.length)return;const S=new Set(m.map(b=>b.project.segmentId)),A=setTimeout(()=>{j(b=>b.filter(C=>!S.has(C.project.segmentId)))},220);L.current.push(A)},[$]);const H=X.filter(h=>!$.has(h.project.segmentId)).map(h=>i.jsx(Nn,{row:h.absoluteRow,data:h.project,zoom:r,isSubcontract:h.isSubcontract,yOffset:h.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},h.project.segmentId));return i.jsx(i.Fragment,{children:[...w,...H]})};x.div`
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
`;const Cl=x.div`
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
`,kl=x.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Ml=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`,$l=x.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Dl=x.span`
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
`,El=x.div`
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
`,_l=x.div`
  ${lt}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Tl=x.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`,Al=x.div`
  padding: 10px 12px;
`,Pl=x.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,io=x.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,ao=x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,co=x.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,lo=x.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,uo=x.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Ol=x.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Il=x.div`
  min-width: 0;
`,Ll=x.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,Yl=x.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`,fo=x.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,_t=x.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Tt=x.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,At=x.div`
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
`;x.div``,x.span``,x.span``,x.div``,x.div``,x.span``,x.span``,x.div``,x.div``,x.span``,x.span``,x.div``,x.div``,x.div``,x.span``,x.div``,x.div``,x.div``,x.div``,x.p``,x.span``;const Nl={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",salida:"Salida",destino:"Destino",regreso:"Regreso",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Fl=({tooltipData:e,visible:r=!0})=>{const{mouseCoords:t,reservationData:n}=e,o=p.useRef(null),[s,a]=p.useState("below"),l=Qe(),u={...Nl,...l.tooltip};p.useLayoutEffect(()=>{if(!o.current||!t)return;const $=o.current,{width:y,height:L}=$.getBoundingClientRect(),X=$.parentElement;if(!X)return;const j=X.getBoundingClientRect(),H=12,h=4,m=j.height-t.y,S=j.width-t.x;let A=t.x+H,b=t.y+H,C="below";S<y+H&&(A=t.x-y-H),m<L+H&&(b=t.y-L-H,C="above"),A=Math.max(h,Math.min(A,j.width-y-h)),b=Math.max(h,Math.min(b,j.height-L-h)),a(C),$.style.left=`${A}px`,$.style.top=`${b}px`},[t]);const c=n.reservationType===Dt.Tour,d=c&&n.isOneDayEvent,f=c?d?"sun":"tour":"transfer",v=c?d?u.oneDay:u.tour:u.transfer,k=n.readiness?Rr[n.readiness]:null,w=[n.groupName&&{label:u.groupName,value:n.groupName},n.driver&&{label:u.driver,value:n.driver},n.passengers&&{label:u.passengers,value:String(n.passengers)},n.flightNumber&&{label:u.flightNumber,value:n.flightNumber}].filter(Boolean);return i.jsxs(Cl,{ref:o,$position:s,$visible:r,children:[i.jsxs(kl,{children:[i.jsxs(Ml,{children:[i.jsx($l,{children:n.bookingNumber}),i.jsxs(Dl,{children:[i.jsx(Fe,{name:f,strokeWidth:2.4}),v]})]}),i.jsx(_l,{children:n.eventName}),n.client&&i.jsx(Tl,{children:n.client}),k&&i.jsxs(El,{style:{color:k.color},children:[i.jsx(Fe,{name:k.icon,strokeWidth:k.icon==="check"?2.6:2.2}),n.readinessNote||k.label]})]}),i.jsxs(Al,{children:[i.jsxs(Pl,{children:[i.jsxs(io,{children:[i.jsx(ao,{children:u.startDate}),i.jsxs(co,{children:[i.jsx(lo,{children:n.startDate}),i.jsx(uo,{children:n.startTime})]})]}),c&&n.endDate&&i.jsxs(io,{$isEnd:!0,children:[i.jsx(ao,{children:u.endDate}),i.jsxs(co,{children:[i.jsx(lo,{children:n.endDate}),i.jsx(uo,{children:n.endTime})]})]})]}),w.length>0&&i.jsx(Ol,{children:w.map(($,y)=>i.jsxs(Il,{children:[i.jsx(Ll,{children:$.label}),i.jsx(Yl,{children:$.value})]},y))}),(n.departureAddress||n.destinationAddress||n.returnAddress)&&i.jsxs(fo,{children:[n.departureAddress&&i.jsxs(_t,{children:[i.jsx(Tt,{children:u.salida}),i.jsx(At,{children:n.departureAddress})]}),n.destinationAddress&&i.jsxs(_t,{children:[i.jsx(Tt,{children:u.destino}),i.jsx(At,{children:n.destinationAddress})]}),n.returnAddress&&i.jsxs(_t,{children:[i.jsx(Tt,{children:u.regreso}),i.jsx(At,{children:n.returnAddress})]})]}),(n.serviceNotes||n.reservationNotes)&&i.jsxs(fo,{children:[n.serviceNotes&&i.jsxs(_t,{children:[i.jsx(Tt,{children:u.serviceNotes}),i.jsx(At,{children:n.serviceNotes})]}),n.reservationNotes&&i.jsxs(_t,{children:[i.jsx(Tt,{children:u.reservationNotes}),i.jsx(At,{children:n.reservationNotes})]})]})]})]})};x.div`
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
`;const zl=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,Bl=x.div`
  position: absolute;
  height: ${Wt}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:r,$animateToY:t})=>e&&r!==void 0&&t!==void 0?`transform: translate3d(${r}px, ${t}px, 0);`:""}
`,Hl=x.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,ho=x.p`
  ${lt}
  ${nt}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,Wl=x.p`
  ${lt}
  ${nt}
`,jl=x.div`
  position: sticky;
  left: ${_e+16}px;
  overflow: hidden;
`,Zl=x.div`
  position: absolute;
  height: ${Wt}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Vl=x.div`
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
`,Gl=x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,Ul=x.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,Xl=x.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,po=x.div`
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
`,go=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,mo=x.div`
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
`,yo=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Fn=x.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,zn=x.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,mt=x.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,vo=x.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,Kl=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:a,resourceOnly:l,separatorRowIndices:u=[]})=>{const c=Qe(),d=H=>{let h=0;for(const m of u)m<=H&&h++;return H*he+h*Pe},[f,v]=p.useState(null),[k,w]=p.useState(0),$=p.useCallback((H=400,h=300)=>{const S=t.width,A=48,b=document.getElementById("react-scheduler");if(!b)return{x:r.x+S+16,y:r.y};const C=b.scrollLeft,Z=b.scrollTop,J=b.clientWidth,Y=b.clientHeight,E=r.x-C,I=r.y-Z,N={left:_e+16,right:J-16,top:16,bottom:Y-16},_=N.right-(E+S),P=E-N.left,W=N.bottom-(I+A),re=I-N.top;let ee,F;return _>=H+16?ee=E+S+16:P>=H+16?ee=E-H-16:_>=P?(ee=E+S+16,ee+H>N.right&&(ee=N.right-H)):(ee=E-H-16,ee<N.left&&(ee=N.left)),W>=h+16?F=I+A+16:re>=h+16?F=I-h-16:W>=re?(F=I+A+16,F+h>N.bottom&&(F=N.bottom-h)):(F=I-h-16,F<N.top&&(F=N.top)),ee=Math.max(N.left,Math.min(ee,N.right-H)),F=Math.max(N.top,Math.min(F,N.bottom-h)),{x:ee+C,y:F+Z}},[r.x,r.y,t.width]);p.useEffect(()=>{s==="dragging"&&e&&k===0?w(r.x):s==="idle"&&w(0)},[s,e,r.x,k]),p.useEffect(()=>{v(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const y=p.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const H=[];let h=0;for(const m of a){const S=Math.max(m.data.length,1);if(m.capacity!==void 0&&e.totalPassengers>m.capacity)for(let A=0;A<S;A++)H.push(h+A);h+=S}return H},[e,a,s]);if(!e||s==="idle"||s==="potential")return null;const L=s==="animating",X=Qr(e.bgColor??""),j=()=>{if(!n)return"";const H=O(n.startDate).format("MMM D, HH:mm"),h=O(n.endDate).format("HH:mm");return`${H} - ${h}`};return i.jsxs(zl,{children:[y.map(H=>i.jsx(Ul,{style:{top:`${d(H)}px`,height:`${he}px`}},H)),n&&s==="dragging"&&i.jsx(Gl,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${d(n.resourceIndex)}px`,height:`${he}px`}}),n&&s==="dragging"&&!l&&i.jsxs(i.Fragment,{children:[i.jsx(Zl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${d(n.resourceIndex)+(he-48)/2}px`,width:`${t.width}px`}}),i.jsx(Vl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${d(n.resourceIndex)+(he-48)/2}px`},children:j()})]}),n&&s==="dragging"&&l&&i.jsx(Xl,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${d(n.resourceIndex)}px`,height:`${he}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const H=$(400,300);return i.jsxs(po,{style:{left:`${H.x}px`,top:`${H.y}px`},children:[i.jsxs(go,{children:[i.jsx(mo,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),i.jsx(yo,{children:n.conflicts.map((h,m)=>{const S=O(n.startDate).format("YYYY-MM-DD"),A=O(n.endDate).format("YYYY-MM-DD"),b=O(h.event.startDate).format("YYYY-MM-DD"),C=O(h.event.endDate).format("YYYY-MM-DD"),Z=O(h.conflictStart).format("YYYY-MM-DD"),J=O(h.conflictEnd).format("YYYY-MM-DD"),Y=S!==A,E=b!==C,I=Z!==J,N=Y?O(n.startDate).format("MMM D, h:mm A"):O(n.startDate).format("h:mm A"),_=Y?O(n.endDate).format("MMM D, h:mm A"):O(n.endDate).format("h:mm A"),P=E?O(h.event.startDate).format("MMM D, h:mm A"):O(h.event.startDate).format("h:mm A"),W=E?O(h.event.endDate).format("MMM D, h:mm A"):O(h.event.endDate).format("h:mm A"),re=I?O(h.conflictStart).format("MMM D, h:mm A"):O(h.conflictStart).format("h:mm A"),ee=I?O(h.conflictEnd).format("MMM D, h:mm A"):O(h.conflictEnd).format("h:mm A"),F=I?"":O(h.conflictStart).format("MMM D"),z=n.startDate.getTime(),Q=n.endDate.getTime(),te=h.event.startDate.getTime(),M=h.event.endDate.getTime(),U=z>=te&&z<M,T=Q>te&&Q<=M,R=z<=te&&Q>=M,V=te<=z&&M>=Q;let B=!1,g=!1,K=!1,D=!1,G="";return R||V?(B=!0,g=!0,K=!0,D=!0,G=`⚠️ ${c.conflicts.changeBoth}`):U&&T?(B=!0,g=!0,K=!0,D=!0,G=`⚠️ ${c.conflicts.changeBoth}`):U?(B=!0,D=!0,G=`⚠️ ${c.conflicts.changeStart}`):T&&(g=!0,K=!0,G=`⚠️ ${c.conflicts.changeEnd}`),i.jsxs(Fn,{children:[i.jsxs(zn,{children:[c.conflicts.conflictsWith,": ",h.event.title,h.event.subtitle&&` - ${h.event.subtitle}`]}),i.jsxs(mt,{children:[i.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",B?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:N}):N," ",c.conflicts.to," ",g?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:_}):_]}),i.jsxs(mt,{children:[i.jsx("strong",{children:h.event.title})," ",c.conflicts.currentlyAt,":"," ",K?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:P}):P," ",c.conflicts.to," ",D?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:W}):W]}),i.jsxs(vo,{children:[c.conflicts.conflictTime,": ",F&&`${F}, `,re," - ",ee]}),G&&i.jsx(mt,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:G})]},m)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const H=$(400,400);return i.jsxs(po,{style:{left:`${H.x}px`,top:`${H.y}px`,borderColor:"#4CAF50"},children:[i.jsxs(go,{style:{color:"#2E7D32"},children:[i.jsx(mo,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),i.jsxs(yo,{children:[(()=>{const h=n.nearbyEvents.some(b=>b.position==="before"),m=n.nearbyEvents.some(b=>b.position==="after"),S=O(n.startDate).format("h:mm A"),A=O(n.endDate).format("h:mm A");return i.jsxs(Fn,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[i.jsxs(zn,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),i.jsxs(mt,{style:{fontWeight:600},children:[O(n.startDate).format("MMM D"),":"," ",h?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:S}):S," ",c.conflicts.to," ",m?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:A}):A]}),i.jsx(mt,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),n.nearbyEvents.map((h,m)=>{const S=O(h.event.startDate).format("YYYY-MM-DD"),A=O(h.event.endDate).format("YYYY-MM-DD"),b=S!==A,C=b?O(h.event.startDate).format("MMM D, h:mm A"):O(h.event.startDate).format("h:mm A"),Z=b?O(h.event.endDate).format("MMM D, h:mm A"):O(h.event.endDate).format("h:mm A"),J=O(h.event.startDate).format("MMM D"),Y=Math.floor(h.timeGap/(1e3*60*60)),E=Math.floor(h.timeGap%(1e3*60*60)/(1e3*60)),I=Y>0?`${Y}h ${E}m`:`${E}m`,N=h.position==="after",_=h.position==="before";return i.jsxs(Fn,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[i.jsxs(zn,{style:{color:"#1B5E20"},children:[h.event.title,h.event.subtitle&&` - ${h.event.subtitle}`]}),i.jsxs(mt,{children:[!b&&`${J}: `,N?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:C}):C," ",c.conflicts.to," ",_?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:Z}):Z]}),i.jsxs(vo,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[I," ",h.position==="before"?c.conflicts.before:c.conflicts.after]})]},m)})]})]})})(),i.jsx(Bl,{$isAnimating:L,$animateToX:f==null?void 0:f.x,$animateToY:f==null?void 0:f.y,style:{left:L?`${(f==null?void 0:f.x)??0}px`:"0",top:L?`${(f==null?void 0:f.y)??0}px`:"0",transform:L?void 0:`translate3d(${l?k:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:X},children:i.jsx(Hl,{children:i.jsxs(jl,{children:[i.jsx(ho,{$bold:!0,children:e.title}),e.subtitle&&i.jsx(ho,{children:e.subtitle}),e.description&&i.jsx(Wl,{children:e.description})]})})})]})},Jl=Ye`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,ql=x.div`
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
  animation: ${Jl} 1.5s ease-in-out infinite;
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
`,Ql=({selectionBox:e,isSelecting:r})=>!e||!r?null:i.jsx(ql,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),Rl=Ye`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ed=x.div`
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
  animation: ${Rl} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,td=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,nd=x.span`
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
`,rd=x.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,od=x.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;x.div`
  display: none;
`,x.div`
  display: none;
`,x.button`
  display: none;
`;const sd=x.div`
  display: flex;
  gap: 8px;
`,xo=x.button`
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
`,id=({selections:e,onConfirm:r,onClear:t})=>{var w;const o=Qe().multiSelect,s=p.useMemo(()=>e.filter($=>$.hasConflict).length,[e]),a=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,u=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",d=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",f=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((w=o==null?void 0:o.conflictsWarning)==null?void 0:w.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const v=s>0,k=i.jsxs(ed,{$hasConflicts:v,"data-multi-select-ui":!0,children:[i.jsxs(td,{children:[i.jsxs(nd,{$hasConflicts:v,children:[e.length," ",a]}),v&&i.jsxs(rd,{children:["⚠️ ",f]}),i.jsx(od,{children:l})]}),i.jsxs(sd,{children:[i.jsxs(xo,{variant:"secondary",onClick:t,children:["✕ ",u]}),i.jsx(xo,{variant:"primary",$hasConflicts:v,onClick:r,children:v?`⚠️ ${d}`:`✓ ${c}`})]})]});return So.createPortal(k,document.body)},ad=Ye`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,cd=x.div`
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
  animation: ${ad} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&at`
      border-style: dashed;
    `}
`,ld=x.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,dd=x.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,ud=x.button`
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
`,fd=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:a=[]})=>{const[l,u]=p.useState(null),[c,d]=p.useState({x:0,y:0}),f=p.useRef(null),v=p.useMemo(()=>{switch(t){case 0:return Ne*7;case 1:return ke;case 2:return Ee;default:return ke}},[t]),k=p.useMemo(()=>O().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),w=p.useMemo(()=>e.map((m,S)=>{let A=0,b=!1;for(const P of r){if(P.id===m.resourceId){b=!0;break}A+=Math.max(P.data.length,1)}if(!b)return null;const C=O(m.startDate),Z=O(m.endDate);let J,Y;switch(t){case 0:J=Math.floor(C.diff(k,"days")/7),Y=Math.max(1,Math.ceil(Z.diff(C,"days")/7)+1);break;case 1:J=C.diff(k,"days"),Y=Math.max(1,Z.diff(C,"days")+1);break;case 2:J=C.diff(k,"hours"),Y=Math.max(1,Z.diff(C,"hours")+1);break;default:J=0,Y=1}const E=J*v;let I=0;for(const P of a)P<=A&&I++;const N=A*he+I*Pe,_=Y*v;return{index:S,selection:m,x:E,y:N,width:_,height:he}}),[e,r,t,k,v]),$=(m,S)=>{const A=O(m).format("MMM D"),b=O(S).format("MMM D");return A===b?A:`${A} - ${b}`},y=m=>!m.hasConflict||!m.conflicts?"":`⚠️ Conflicts with:
${m.conflicts.map(A=>{const b=(A.overlapDuration/36e5).toFixed(1);return`• ${A.event.title} (${b}h overlap)`}).join(`
`)}`,L=p.useCallback(m=>{let S=0;for(const A of r){const b=Math.max(A.data.length,1);if(m>=S*he&&m<(S+b)*he)return{resourceId:A.id,resourceLabel:A.label};S+=b}return null},[r]),X=p.useCallback(m=>{const S=Math.floor(m/v);switch(t){case 0:return k.add(S*7,"days").toDate();case 1:return k.add(S,"days").toDate();case 2:return k.add(S,"hours").toDate();default:return k.toDate()}},[t,k,v]),j=p.useCallback((m,S)=>{!s||(m.preventDefault(),m.stopPropagation(),!w[S])||(f.current={x:m.clientX,y:m.clientY},u(S),d({x:0,y:0}))},[s,w]),H=p.useCallback(m=>{if(l===null||!f.current)return;const S=m.clientX-f.current.x,A=m.clientY-f.current.y,b=Math.round(S/v)*v,C=Math.round(A/he)*he;d({x:b,y:C})},[l,v]),h=p.useCallback(()=>{if(l===null||!s){u(null),d({x:0,y:0}),f.current=null;return}const m=w[l];if(!m){u(null),d({x:0,y:0}),f.current=null;return}const S=m.x+c.x,A=m.y+c.y,b=L(A+he/2);if(!b){u(null),d({x:0,y:0}),f.current=null;return}const C=X(S),Z=e[l],J=Z.endDate.getTime()-Z.startDate.getTime(),Y=new Date(C.getTime()+J);s(l,{startDate:C,endDate:Y,resourceId:b.resourceId,resourceLabel:b.resourceLabel}),u(null),d({x:0,y:0}),f.current=null},[l,c,w,e,s,L,X]);return p.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",H),document.addEventListener("mouseup",h),()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",h)}},[l,H,h]),i.jsx(i.Fragment,{children:w.map(m=>{if(!m)return null;const S=m.selection.hasConflict||!1,A=l===m.index,b=A?m.x+c.x:m.x,C=A?m.y+c.y:m.y;return i.jsxs(cd,{$hasConflict:S,$isDragging:A,style:{left:b,top:C,width:m.width,height:m.height},"data-multi-select-ui":!0,onMouseDown:Z=>j(Z,m.index),children:[S&&i.jsx(dd,{title:y(m.selection),children:"⚠️"}),i.jsx(ld,{$hasConflict:S,children:$(m.selection.startDate,m.selection.endDate)}),i.jsx(ud,{onClick:Z=>{Z.stopPropagation(),o(m.index)},onMouseDown:Z=>Z.stopPropagation(),title:S?"Remove conflicting selection":"Remove selection",children:"×"})]},m.index)})})},bo=(e,r,t,n)=>{if(r===2)return null;const o=r===0?Ne*7:ke,s=O().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"),a=e.startOf("day"),l=r===0?a.startOf("week").diff(s.startOf("week"),"week"):a.diff(s,"days");return l<0||l>=n?null:{x:l*o,width:o}},hd=x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({theme:e})=>e.colors.today}12;
`,pd=({zoom:e,startDate:r})=>{const{cols:t}=je(),n=p.useMemo(()=>bo(O(),e,r,t),[e,r,t]);return n?i.jsx(hd,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},gd="#2f6fed",md=x.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${gd}1c;
`,yd=({zoom:e,startDate:r})=>{const{cols:t,jumpDate:n}=je(),o=p.useMemo(()=>!n||n.isSame(O(),"day")?null:bo(n,e,r,t),[n,e,r,t]);return o?i.jsx(md,{style:{left:`${o.x}px`,width:`${o.width}px`},"aria-hidden":!0}):null},Kd="";Ae.Scheduler=Ha,Object.defineProperty(Ae,Symbol.toStringTag,{value:"Module"})});
