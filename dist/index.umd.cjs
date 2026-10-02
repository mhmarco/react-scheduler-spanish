(function(Oe,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],i):(Oe=typeof globalThis<"u"?globalThis:Oe||self,i(Oe["react-scheduler"]={},Oe["react/jsx-runtime"],Oe.React,Oe.ReactDOM))})(this,function(Oe,i,h,Ao){"use strict";var _d=Object.defineProperty;var Td=(Oe,i,h)=>i in Oe?_d(Oe,i,{enumerable:!0,configurable:!0,writable:!0,value:h}):Oe[i]=h;var To=(Oe,i,h)=>(Td(Oe,typeof i!="symbol"?i+"":i,h),h);function Po(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const oe=Po(h);var Ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Et={},Io={get exports(){return Et},set exports(e){Et=e}},me={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn;function Oo(){if(Xn)return me;Xn=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),b;b=Symbol.for("react.module.reference");function D(y){if(typeof y=="object"&&y!==null){var L=y.$$typeof;switch(L){case e:switch(y=y.type,y){case t:case o:case n:case c:case u:return y;default:switch(y=y&&y.$$typeof,y){case l:case a:case d:case v:case f:case s:return y;default:return L}}case r:return L}}}return me.ContextConsumer=a,me.ContextProvider=s,me.Element=e,me.ForwardRef=d,me.Fragment=t,me.Lazy=v,me.Memo=f,me.Portal=r,me.Profiler=o,me.StrictMode=n,me.Suspense=c,me.SuspenseList=u,me.isAsyncMode=function(){return!1},me.isConcurrentMode=function(){return!1},me.isContextConsumer=function(y){return D(y)===a},me.isContextProvider=function(y){return D(y)===s},me.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===e},me.isForwardRef=function(y){return D(y)===d},me.isFragment=function(y){return D(y)===t},me.isLazy=function(y){return D(y)===v},me.isMemo=function(y){return D(y)===f},me.isPortal=function(y){return D(y)===r},me.isProfiler=function(y){return D(y)===o},me.isStrictMode=function(y){return D(y)===n},me.isSuspense=function(y){return D(y)===c},me.isSuspenseList=function(y){return D(y)===u},me.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===t||y===o||y===n||y===c||y===u||y===C||typeof y=="object"&&y!==null&&(y.$$typeof===v||y.$$typeof===f||y.$$typeof===s||y.$$typeof===a||y.$$typeof===d||y.$$typeof===b||y.getModuleId!==void 0)},me.typeOf=D,me}var ye={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn;function Lo(){return Kn||(Kn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),b=!1,D=!1,y=!1,L=!1,J=!1,Z;Z=Symbol.for("react.module.reference");function z(E){return!!(typeof E=="string"||typeof E=="function"||E===t||E===o||J||E===n||E===c||E===u||L||E===C||b||D||y||typeof E=="object"&&E!==null&&(E.$$typeof===v||E.$$typeof===f||E.$$typeof===s||E.$$typeof===a||E.$$typeof===d||E.$$typeof===Z||E.getModuleId!==void 0))}function p(E){if(typeof E=="object"&&E!==null){var U=E.$$typeof;switch(U){case e:var ne=E.type;switch(ne){case t:case o:case n:case c:case u:return ne;default:var Q=ne&&ne.$$typeof;switch(Q){case l:case a:case d:case v:case f:case s:return Q;default:return U}}case r:return U}}}var m=a,x=s,_=e,k=d,S=t,j=v,G=f,O=r,P=o,A=n,F=c,N=u,$=!1,Y=!1;function te(E){return $||($=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ee(E){return Y||(Y=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function H(E){return p(E)===a}function B(E){return p(E)===s}function K(E){return typeof E=="object"&&E!==null&&E.$$typeof===e}function re(E){return p(E)===d}function M(E){return p(E)===t}function X(E){return p(E)===v}function T(E){return p(E)===f}function R(E){return p(E)===r}function V(E){return p(E)===o}function W(E){return p(E)===n}function g(E){return p(E)===c}function q(E){return p(E)===u}ye.ContextConsumer=m,ye.ContextProvider=x,ye.Element=_,ye.ForwardRef=k,ye.Fragment=S,ye.Lazy=j,ye.Memo=G,ye.Portal=O,ye.Profiler=P,ye.StrictMode=A,ye.Suspense=F,ye.SuspenseList=N,ye.isAsyncMode=te,ye.isConcurrentMode=ee,ye.isContextConsumer=H,ye.isContextProvider=B,ye.isElement=K,ye.isForwardRef=re,ye.isFragment=M,ye.isLazy=X,ye.isMemo=T,ye.isPortal=R,ye.isProfiler=V,ye.isStrictMode=W,ye.isSuspense=g,ye.isSuspenseList=q,ye.isValidElementType=z,ye.typeOf=p}()),ye}(function(e){process.env.NODE_ENV==="production"?e.exports=Oo():e.exports=Lo()})(Io);function Yo(e){function r(H,B,K,re,M){for(var X=0,T=0,R=0,V=0,W,g,q=0,E=0,U,ne=U=W=0,Q=0,ae=0,fe=0,le=0,pe=K.length,Se=pe-1,be,se="",ue="",Te="",Be="",Ie;Q<pe;){if(g=K.charCodeAt(Q),Q===Se&&T+V+R+X!==0&&(T!==0&&(g=T===47?10:47),V=R=X=0,pe++,Se++),T+V+R+X===0){if(Q===Se&&(0<ae&&(se=se.replace(v,"")),0<se.trim().length)){switch(g){case 32:case 9:case 59:case 13:case 10:break;default:se+=K.charAt(Q)}g=59}switch(g){case 123:for(se=se.trim(),W=se.charCodeAt(0),U=1,le=++Q;Q<pe;){switch(g=K.charCodeAt(Q)){case 123:U++;break;case 125:U--;break;case 47:switch(g=K.charCodeAt(Q+1)){case 42:case 47:e:{for(ne=Q+1;ne<Se;++ne)switch(K.charCodeAt(ne)){case 47:if(g===42&&K.charCodeAt(ne-1)===42&&Q+2!==ne){Q=ne+1;break e}break;case 10:if(g===47){Q=ne+1;break e}}Q=ne}}break;case 91:g++;case 40:g++;case 34:case 39:for(;Q++<Se&&K.charCodeAt(Q)!==g;);}if(U===0)break;Q++}switch(U=K.substring(le,Q),W===0&&(W=(se=se.replace(f,"").trim()).charCodeAt(0)),W){case 64:switch(0<ae&&(se=se.replace(v,"")),g=se.charCodeAt(1),g){case 100:case 109:case 115:case 45:ae=B;break;default:ae=F}if(U=r(B,ae,U,g,M+1),le=U.length,0<$&&(ae=t(F,se,fe),Ie=l(3,U,ae,B,O,G,le,g,M,re),se=ae.join(""),Ie!==void 0&&(le=(U=Ie.trim()).length)===0&&(g=0,U="")),0<le)switch(g){case 115:se=se.replace(m,a);case 100:case 109:case 45:U=se+"{"+U+"}";break;case 107:se=se.replace(J,"$1 $2"),U=se+"{"+U+"}",U=A===1||A===2&&s("@"+U,3)?"@-webkit-"+U+"@"+U:"@"+U;break;default:U=se+U,re===112&&(U=(ue+=U,""))}else U="";break;default:U=r(B,t(B,se,fe),U,re,M+1)}Te+=U,U=fe=ae=ne=W=0,se="",g=K.charCodeAt(++Q);break;case 125:case 59:if(se=(0<ae?se.replace(v,""):se).trim(),1<(le=se.length))switch(ne===0&&(W=se.charCodeAt(0),W===45||96<W&&123>W)&&(le=(se=se.replace(" ",":")).length),0<$&&(Ie=l(1,se,B,H,O,G,ue.length,re,M,re))!==void 0&&(le=(se=Ie.trim()).length)===0&&(se="\0\0"),W=se.charCodeAt(0),g=se.charCodeAt(1),W){case 0:break;case 64:if(g===105||g===99){Be+=se+K.charAt(Q);break}default:se.charCodeAt(le-1)!==58&&(ue+=o(se,W,g,se.charCodeAt(2)))}fe=ae=ne=W=0,se="",g=K.charCodeAt(++Q)}}switch(g){case 13:case 10:T===47?T=0:1+W===0&&re!==107&&0<se.length&&(ae=1,se+="\0"),0<$*te&&l(0,se,B,H,O,G,ue.length,re,M,re),G=1,O++;break;case 59:case 125:if(T+V+R+X===0){G++;break}default:switch(G++,be=K.charAt(Q),g){case 9:case 32:if(V+X+T===0)switch(q){case 44:case 58:case 9:case 32:be="";break;default:g!==32&&(be=" ")}break;case 0:be="\\0";break;case 12:be="\\f";break;case 11:be="\\v";break;case 38:V+T+X===0&&(ae=fe=1,be="\f"+be);break;case 108:if(V+T+X+P===0&&0<ne)switch(Q-ne){case 2:q===112&&K.charCodeAt(Q-3)===58&&(P=q);case 8:E===111&&(P=E)}break;case 58:V+T+X===0&&(ne=Q);break;case 44:T+R+V+X===0&&(ae=1,be+="\r");break;case 34:case 39:T===0&&(V=V===g?0:V===0?g:V);break;case 91:V+T+R===0&&X++;break;case 93:V+T+R===0&&X--;break;case 41:V+T+X===0&&R--;break;case 40:if(V+T+X===0){if(W===0)switch(2*q+3*E){case 533:break;default:W=1}R++}break;case 64:T+R+V+X+ne+U===0&&(U=1);break;case 42:case 47:if(!(0<V+X+R))switch(T){case 0:switch(2*g+3*K.charCodeAt(Q+1)){case 235:T=47;break;case 220:le=Q,T=42}break;case 42:g===47&&q===42&&le+2!==Q&&(K.charCodeAt(le+2)===33&&(ue+=K.substring(le,Q+1)),be="",T=0)}}T===0&&(se+=be)}E=q,q=g,Q++}if(le=ue.length,0<le){if(ae=B,0<$&&(Ie=l(2,ue,ae,H,O,G,le,re,M,re),Ie!==void 0&&(ue=Ie).length===0))return Be+ue+Te;if(ue=ae.join(",")+"{"+ue+"}",A*P!==0){switch(A!==2||s(ue,2)||(P=0),P){case 111:ue=ue.replace(z,":-moz-$1")+ue;break;case 112:ue=ue.replace(Z,"::-webkit-input-$1")+ue.replace(Z,"::-moz-$1")+ue.replace(Z,":-ms-input-$1")+ue}P=0}}return Be+ue+Te}function t(H,B,K){var re=B.trim().split(y);B=re;var M=re.length,X=H.length;switch(X){case 0:case 1:var T=0;for(H=X===0?"":H[0]+" ";T<M;++T)B[T]=n(H,B[T],K).trim();break;default:var R=T=0;for(B=[];T<M;++T)for(var V=0;V<X;++V)B[R++]=n(H[V]+" ",re[T],K).trim()}return B}function n(H,B,K){var re=B.charCodeAt(0);switch(33>re&&(re=(B=B.trim()).charCodeAt(0)),re){case 38:return B.replace(L,"$1"+H.trim());case 58:return H.trim()+B.replace(L,"$1"+H.trim());default:if(0<1*K&&0<B.indexOf("\f"))return B.replace(L,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+B}function o(H,B,K,re){var M=H+";",X=2*B+3*K+4*re;if(X===944){H=M.indexOf(":",9)+1;var T=M.substring(H,M.length-1).trim();return T=M.substring(0,H).trim()+T+";",A===1||A===2&&s(T,1)?"-webkit-"+T+T:T}if(A===0||A===2&&!s(M,1))return M;switch(X){case 1015:return M.charCodeAt(10)===97?"-webkit-"+M+M:M;case 951:return M.charCodeAt(3)===116?"-webkit-"+M+M:M;case 963:return M.charCodeAt(5)===110?"-webkit-"+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+M+M;case 978:return"-webkit-"+M+"-moz-"+M+M;case 1019:case 983:return"-webkit-"+M+"-moz-"+M+"-ms-"+M+M;case 883:if(M.charCodeAt(8)===45)return"-webkit-"+M+M;if(0<M.indexOf("image-set(",11))return M.replace(j,"$1-webkit-$2")+M;break;case 932:if(M.charCodeAt(4)===45)switch(M.charCodeAt(5)){case 103:return"-webkit-box-"+M.replace("-grow","")+"-webkit-"+M+"-ms-"+M.replace("grow","positive")+M;case 115:return"-webkit-"+M+"-ms-"+M.replace("shrink","negative")+M;case 98:return"-webkit-"+M+"-ms-"+M.replace("basis","preferred-size")+M}return"-webkit-"+M+"-ms-"+M+M;case 964:return"-webkit-"+M+"-ms-flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return T=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+T+"-webkit-"+M+"-ms-flex-pack"+T+M;case 1005:return b.test(M)?M.replace(C,":-webkit-")+M.replace(C,":-moz-")+M:M;case 1e3:switch(T=M.substring(13).trim(),B=T.indexOf("-")+1,T.charCodeAt(0)+T.charCodeAt(B)){case 226:T=M.replace(p,"tb");break;case 232:T=M.replace(p,"tb-rl");break;case 220:T=M.replace(p,"lr");break;default:return M}return"-webkit-"+M+"-ms-"+T+M;case 1017:if(M.indexOf("sticky",9)===-1)break;case 975:switch(B=(M=H).length-10,T=(M.charCodeAt(B)===33?M.substring(0,B):M).substring(H.indexOf(":",7)+1).trim(),X=T.charCodeAt(0)+(T.charCodeAt(7)|0)){case 203:if(111>T.charCodeAt(8))break;case 115:M=M.replace(T,"-webkit-"+T)+";"+M;break;case 207:case 102:M=M.replace(T,"-webkit-"+(102<X?"inline-":"")+"box")+";"+M.replace(T,"-webkit-"+T)+";"+M.replace(T,"-ms-"+T+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===45)switch(M.charCodeAt(6)){case 105:return T=M.replace("-items",""),"-webkit-"+M+"-webkit-box-"+T+"-ms-flex-"+T+M;case 115:return"-webkit-"+M+"-ms-flex-item-"+M.replace(_,"")+M;default:return"-webkit-"+M+"-ms-flex-line-pack"+M.replace("align-content","").replace(_,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==45||M.charCodeAt(4)===122)break;case 931:case 953:if(S.test(H)===!0)return(T=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?o(H.replace("stretch","fill-available"),B,K,re).replace(":fill-available",":stretch"):M.replace(T,"-webkit-"+T)+M.replace(T,"-moz-"+T.replace("fill-",""))+M;break;case 962:if(M="-webkit-"+M+(M.charCodeAt(5)===102?"-ms-"+M:"")+M,K+re===211&&M.charCodeAt(13)===105&&0<M.indexOf("transform",10))return M.substring(0,M.indexOf(";",27)+1).replace(D,"$1-webkit-$2")+M}return M}function s(H,B){var K=H.indexOf(B===1?":":"{"),re=H.substring(0,B!==3?K:10);return K=H.substring(K+1,H.length-1),Y(B!==2?re:re.replace(k,"$1"),K,B)}function a(H,B){var K=o(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return K!==B+";"?K.replace(x," or ($1)").substring(4):"("+B+")"}function l(H,B,K,re,M,X,T,R,V,W){for(var g=0,q=B,E;g<$;++g)switch(E=N[g].call(u,H,q,K,re,M,X,T,R,V,W)){case void 0:case!1:case!0:case null:break;default:q=E}if(q!==B)return q}function d(H){switch(H){case void 0:case null:$=N.length=0;break;default:if(typeof H=="function")N[$++]=H;else if(typeof H=="object")for(var B=0,K=H.length;B<K;++B)d(H[B]);else te=!!H|0}return d}function c(H){return H=H.prefix,H!==void 0&&(Y=null,H?typeof H!="function"?A=1:(A=2,Y=H):A=0),c}function u(H,B){var K=H;if(33>K.charCodeAt(0)&&(K=K.trim()),ee=K,K=[ee],0<$){var re=l(-1,B,K,K,O,G,0,0,0,0);re!==void 0&&typeof re=="string"&&(B=re)}var M=r(F,K,B,0,0);return 0<$&&(re=l(-2,M,K,K,O,G,M.length,0,0,0),re!==void 0&&(M=re)),ee="",P=0,G=O=1,M}var f=/^\0+/g,v=/[\0\r\f]/g,C=/: */g,b=/zoo|gra/,D=/([,: ])(transform)/g,y=/,\r+?/g,L=/([\t\r\n ])*\f?&/g,J=/@(k\w+)\s*(\S*)\s*/,Z=/::(place)/g,z=/:(read-only)/g,p=/[svh]\w+-[tblr]{2}/,m=/\(\s*(.*)\s*\)/g,x=/([\s\S]*?);/g,_=/-self|flex-/g,k=/[^]*?(:[rp][el]a[\w-]+)[^]*/,S=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,G=1,O=1,P=0,A=1,F=[],N=[],$=0,Y=null,te=0,ee="";return u.use=d,u.set=c,e!==void 0&&c(e),u}var No={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Fo(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Bo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Jn=Fo(function(e){return Bo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),nn={},zo={get exports(){return nn},set exports(e){nn=e}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qn;function Ho(){if(qn)return ve;qn=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,D=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,J=e?Symbol.for("react.scope"):60119;function Z(p){if(typeof p=="object"&&p!==null){var m=p.$$typeof;switch(m){case r:switch(p=p.type,p){case d:case c:case n:case s:case o:case f:return p;default:switch(p=p&&p.$$typeof,p){case l:case u:case b:case C:case a:return p;default:return m}}case t:return m}}}function z(p){return Z(p)===c}return ve.AsyncMode=d,ve.ConcurrentMode=c,ve.ContextConsumer=l,ve.ContextProvider=a,ve.Element=r,ve.ForwardRef=u,ve.Fragment=n,ve.Lazy=b,ve.Memo=C,ve.Portal=t,ve.Profiler=s,ve.StrictMode=o,ve.Suspense=f,ve.isAsyncMode=function(p){return z(p)||Z(p)===d},ve.isConcurrentMode=z,ve.isContextConsumer=function(p){return Z(p)===l},ve.isContextProvider=function(p){return Z(p)===a},ve.isElement=function(p){return typeof p=="object"&&p!==null&&p.$$typeof===r},ve.isForwardRef=function(p){return Z(p)===u},ve.isFragment=function(p){return Z(p)===n},ve.isLazy=function(p){return Z(p)===b},ve.isMemo=function(p){return Z(p)===C},ve.isPortal=function(p){return Z(p)===t},ve.isProfiler=function(p){return Z(p)===s},ve.isStrictMode=function(p){return Z(p)===o},ve.isSuspense=function(p){return Z(p)===f},ve.isValidElementType=function(p){return typeof p=="string"||typeof p=="function"||p===n||p===c||p===s||p===o||p===f||p===v||typeof p=="object"&&p!==null&&(p.$$typeof===b||p.$$typeof===C||p.$$typeof===a||p.$$typeof===l||p.$$typeof===u||p.$$typeof===y||p.$$typeof===L||p.$$typeof===J||p.$$typeof===D)},ve.typeOf=Z,ve}var xe={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qn;function Wo(){return Qn||(Qn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,D=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,J=e?Symbol.for("react.scope"):60119;function Z(g){return typeof g=="string"||typeof g=="function"||g===n||g===c||g===s||g===o||g===f||g===v||typeof g=="object"&&g!==null&&(g.$$typeof===b||g.$$typeof===C||g.$$typeof===a||g.$$typeof===l||g.$$typeof===u||g.$$typeof===y||g.$$typeof===L||g.$$typeof===J||g.$$typeof===D)}function z(g){if(typeof g=="object"&&g!==null){var q=g.$$typeof;switch(q){case r:var E=g.type;switch(E){case d:case c:case n:case s:case o:case f:return E;default:var U=E&&E.$$typeof;switch(U){case l:case u:case b:case C:case a:return U;default:return q}}case t:return q}}}var p=d,m=c,x=l,_=a,k=r,S=u,j=n,G=b,O=C,P=t,A=s,F=o,N=f,$=!1;function Y(g){return $||($=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),te(g)||z(g)===d}function te(g){return z(g)===c}function ee(g){return z(g)===l}function H(g){return z(g)===a}function B(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function K(g){return z(g)===u}function re(g){return z(g)===n}function M(g){return z(g)===b}function X(g){return z(g)===C}function T(g){return z(g)===t}function R(g){return z(g)===s}function V(g){return z(g)===o}function W(g){return z(g)===f}xe.AsyncMode=p,xe.ConcurrentMode=m,xe.ContextConsumer=x,xe.ContextProvider=_,xe.Element=k,xe.ForwardRef=S,xe.Fragment=j,xe.Lazy=G,xe.Memo=O,xe.Portal=P,xe.Profiler=A,xe.StrictMode=F,xe.Suspense=N,xe.isAsyncMode=Y,xe.isConcurrentMode=te,xe.isContextConsumer=ee,xe.isContextProvider=H,xe.isElement=B,xe.isForwardRef=K,xe.isFragment=re,xe.isLazy=M,xe.isMemo=X,xe.isPortal=T,xe.isProfiler=R,xe.isStrictMode=V,xe.isSuspense=W,xe.isValidElementType=Z,xe.typeOf=z}()),xe}(function(e){process.env.NODE_ENV==="production"?e.exports=Ho():e.exports=Wo()})(zo);var rn=nn,jo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Zo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},on={};on[rn.ForwardRef]=Vo,on[rn.Memo]=Rn;function er(e){return rn.isMemo(e)?Rn:on[e.$$typeof]||jo}var Go=Object.defineProperty,Uo=Object.getOwnPropertyNames,tr=Object.getOwnPropertySymbols,Xo=Object.getOwnPropertyDescriptor,Ko=Object.getPrototypeOf,nr=Object.prototype;function rr(e,r,t){if(typeof r!="string"){if(nr){var n=Ko(r);n&&n!==nr&&rr(e,n,t)}var o=Uo(r);tr&&(o=o.concat(tr(r)));for(var s=er(e),a=er(r),l=0;l<o.length;++l){var d=o[l];if(!Zo[d]&&!(t&&t[d])&&!(a&&a[d])&&!(s&&s[d])){var c=Xo(r,d);try{Go(e,d,c)}catch{}}}}return e}var Jo=rr;function je(){return(je=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var or=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},sn=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Et.typeOf(e)},Nt=Object.freeze([]),Qe=Object.freeze({});function ht(e){return typeof e=="function"}function an(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function cn(e){return e&&typeof e.styledComponentId=="string"}var pt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ln=typeof window<"u"&&"HTMLElement"in window,qo=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),Qo={},Ro=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function es(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Ge(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(es.apply(void 0,[Ro[e]].concat(t)).trim())}var ts=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,a=s;t>=a;)(a<<=1)<0&&Ge(16,""+t);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(t+1),c=0,u=n.length;c<u;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[t]++,d++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var a=o;a<s;a++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),a=s+o,l=s;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),Ft=new Map,Bt=new Map,_t=1,zt=function(e){if(Ft.has(e))return Ft.get(e);for(;Bt.has(_t);)_t++;var r=_t++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&Ge(16,""+r),Ft.set(e,r),Bt.set(r,e),r},ns=function(e){return Bt.get(e)},rs=function(e,r){r>=_t&&(_t=r+1),Ft.set(e,r),Bt.set(r,e)},os="style["+pt+'][data-styled-version="5.3.8"]',ss=new RegExp("^"+pt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),is=function(e,r,t){for(var n,o=t.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(r,n)},as=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var a=t[o].trim();if(a){var l=a.match(ss);if(l){var d=0|parseInt(l[1],10),c=l[2];d!==0&&(rs(c,d),is(e,c,l[3]),e.getTag().insertRules(d,n)),n.length=0}else n.push(a)}}},cs=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},sr=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(l){for(var d=l.childNodes,c=d.length;c>=0;c--){var u=d[c];if(u&&u.nodeType===1&&u.hasAttribute(pt))return u}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(pt,"active"),n.setAttribute("data-styled-version","5.3.8");var a=cs();return a&&n.setAttribute("nonce",a),t.insertBefore(n,s),n},ls=function(){function e(t){var n=this.element=sr(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var d=s[a];if(d.ownerNode===o)return d}Ge(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),ds=function(){function e(t){var n=this.element=sr(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),us=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ir=ln,fs={isServer:!ln,useCSSOMInjection:!qo},Ht=function(){function e(t,n,o){t===void 0&&(t=Qe),n===void 0&&(n={}),this.options=je({},fs,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&ln&&ir&&(ir=!1,function(s){for(var a=document.querySelectorAll(os),l=0,d=a.length;l<d;l++){var c=a[l];c&&c.getAttribute(pt)!=="active"&&(as(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return zt(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(je({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,a=n.target,t=o?new us(a):s?new ls(a):new ds(a),new ts(t)));var t,n,o,s,a},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(zt(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(zt(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(zt(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",a=0;a<o;a++){var l=ns(a);if(l!==void 0){var d=t.names.get(l),c=n.getGroup(a);if(d&&c&&d.size){var u=pt+".g"+a+'[id="'+l+'"]',f="";d!==void 0&&d.forEach(function(v){v.length>0&&(f+=v+",")}),s+=""+c+u+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},e}(),hs=/(a)(d)/gi,ar=function(e){return String.fromCharCode(e+(e>25?39:97))};function dn(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=ar(r%52)+t;return(ar(r%52)+t).replace(hs,"$1-$2")}var ot=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},cr=function(e){return ot(5381,e)};function lr(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(ht(t)&&!cn(t))return!1}return!0}var ps=cr("5.3.8"),gs=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&lr(r),this.componentId=t,this.baseHash=ot(ps,t),this.baseStyle=n,Ht.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var a=st(this.rules,r,t,n).join(""),l=dn(ot(this.baseHash,a)>>>0);if(!t.hasNameForId(o,l)){var d=n(a,"."+l,void 0,o);t.insertRules(o,l,d)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,u=ot(this.baseHash,n.hash),f="",v=0;v<c;v++){var C=this.rules[v];if(typeof C=="string")f+=C,process.env.NODE_ENV!=="production"&&(u=ot(u,C+v));else if(C){var b=st(C,r,t,n),D=Array.isArray(b)?b.join(""):b;u=ot(u,D+v),f+=D}}if(f){var y=dn(u>>>0);if(!t.hasNameForId(o,y)){var L=n(f,"."+y,void 0,o);t.insertRules(o,y,L)}s.push(y)}}return s.join(" ")},e}(),ms=/^\s*\/\/.*$/gm,ys=[":","[",".","#"];function vs(e){var r,t,n,o,s=e===void 0?Qe:e,a=s.options,l=a===void 0?Qe:a,d=s.plugins,c=d===void 0?Nt:d,u=new Yo(l),f=[],v=function(D){function y(L){if(L)try{D(L+"}")}catch{}}return function(L,J,Z,z,p,m,x,_,k,S){switch(L){case 1:if(k===0&&J.charCodeAt(0)===64)return D(J+";"),"";break;case 2:if(_===0)return J+"/*|*/";break;case 3:switch(_){case 102:case 112:return D(Z[0]+J),"";default:return J+(S===0?"/*|*/":"")}case-2:J.split("/*|*/}").forEach(y)}}}(function(D){f.push(D)}),C=function(D,y,L){return y===0&&ys.indexOf(L[t.length])!==-1||L.match(o)?D:"."+r};function b(D,y,L,J){J===void 0&&(J="&");var Z=D.replace(ms,""),z=y&&L?L+" "+y+" { "+Z+" }":Z;return r=J,t=y,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),u(L||!y?"":y,z)}return u.use([].concat(c,[function(D,y,L){D===2&&L.length&&L[0].lastIndexOf(t)>0&&(L[0]=L[0].replace(n,C))},v,function(D){if(D===-2){var y=f;return f=[],y}}])),b.hash=c.length?c.reduce(function(D,y){return y.name||Ge(15),ot(D,y.name)},5381).toString():"",b}var dr=h.createContext();dr.Consumer;var ur=h.createContext(),xs=(ur.Consumer,new Ht),un=vs();function fr(){return h.useContext(dr)||xs}function hr(){return h.useContext(ur)||un}var pr=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=un);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.toString=function(){return Ge(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=un),this.name+r.hash},e}(),bs=/([A-Z])/,ws=/([A-Z])/g,Ss=/^ms-/,Cs=function(e){return"-"+e.toLowerCase()};function gr(e){return bs.test(e)?e.replace(ws,Cs).replace(Ss,"-ms-"):e}var mr=function(e){return e==null||e===!1||e===""};function st(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],a=0,l=e.length;a<l;a+=1)(o=st(e[a],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(mr(e))return"";if(cn(e))return"."+e.styledComponentId;if(ht(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!r)return e;var d=e(r);return process.env.NODE_ENV!=="production"&&Et.isElement(d)&&console.warn(an(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),st(d,r,t,n)}var c;return e instanceof pr?t?(e.inject(t,n),e.getName(n)):e:sn(e)?function u(f,v){var C,b,D=[];for(var y in f)f.hasOwnProperty(y)&&!mr(f[y])&&(Array.isArray(f[y])&&f[y].isCss||ht(f[y])?D.push(gr(y)+":",f[y],";"):sn(f[y])?D.push.apply(D,u(f[y],y)):D.push(gr(y)+": "+(C=y,(b=f[y])==null||typeof b=="boolean"||b===""?"":typeof b!="number"||b===0||C in No?String(b).trim():b+"px")+";"));return v?[v+" {"].concat(D,["}"]):D}(e):e.toString()}var yr=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function it(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return ht(e)||sn(e)?yr(st(or(Nt,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:yr(st(or(e,t)))}var vr=/invalid hook call/i,Wt=new Set,xr=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(vr.test(s))o=!1,Wt.delete(t);else{for(var a=arguments.length,l=new Array(a>1?a-1:0),d=1;d<a;d++)l[d-1]=arguments[d];n.apply(void 0,[s].concat(l))}},h.useRef(),o&&!Wt.has(t)&&(console.warn(t),Wt.add(t))}catch(s){vr.test(s.message)&&Wt.delete(t)}finally{console.error=n}}},br=function(e,r,t){return t===void 0&&(t=Qe),e.theme!==t.theme&&e.theme||r||t.theme},ks=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ms=/(^-|-$)/g;function fn(e){return e.replace(ks,"-").replace(Ms,"")}var hn=function(e){return dn(cr(e)>>>0)};function jt(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var pn=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},$s=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ds(e,r,t){var n=e[t];pn(r)&&pn(n)?wr(n,r):e[t]=r}function wr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var a=s[o];if(pn(a))for(var l in a)$s(l)&&Ds(e,a[l],l)}return e}var gt=h.createContext();gt.Consumer;function Es(e){var r=h.useContext(gt),t=h.useMemo(function(){return function(n,o){if(!n)return Ge(14);if(ht(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Ge(7)}return Array.isArray(n)||typeof n!="object"?Ge(8):o?je({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?h.createElement(gt.Provider,{value:t},e.children):null}var gn={};function Sr(e,r,t){var n=cn(e),o=!jt(e),s=r.attrs,a=s===void 0?Nt:s,l=r.componentId,d=l===void 0?function(J,Z){var z=typeof J!="string"?"sc":fn(J);gn[z]=(gn[z]||0)+1;var p=z+"-"+hn("5.3.8"+z+gn[z]);return Z?Z+"-"+p:p}(r.displayName,r.parentComponentId):l,c=r.displayName,u=c===void 0?function(J){return jt(J)?"styled."+J:"Styled("+an(J)+")"}(e):c,f=r.displayName&&r.componentId?fn(r.displayName)+"-"+r.componentId:r.componentId||d,v=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,C=r.shouldForwardProp;n&&e.shouldForwardProp&&(C=r.shouldForwardProp?function(J,Z,z){return e.shouldForwardProp(J,Z,z)&&r.shouldForwardProp(J,Z,z)}:e.shouldForwardProp);var b,D=new gs(t,f,n?e.componentStyle:void 0),y=D.isStatic&&a.length===0,L=function(J,Z){return function(z,p,m,x){var _=z.attrs,k=z.componentStyle,S=z.defaultProps,j=z.foldedComponentIds,G=z.shouldForwardProp,O=z.styledComponentId,P=z.target;process.env.NODE_ENV!=="production"&&h.useDebugValue(O);var A=function(re,M,X){re===void 0&&(re=Qe);var T=je({},M,{theme:re}),R={};return X.forEach(function(V){var W,g,q,E=V;for(W in ht(E)&&(E=E(T)),E)T[W]=R[W]=W==="className"?(g=R[W],q=E[W],g&&q?g+" "+q:g||q):E[W]}),[T,R]}(br(p,h.useContext(gt),S)||Qe,p,_),F=A[0],N=A[1],$=function(re,M,X,T){var R=fr(),V=hr(),W=M?re.generateAndInjectStyles(Qe,R,V):re.generateAndInjectStyles(X,R,V);return process.env.NODE_ENV!=="production"&&h.useDebugValue(W),process.env.NODE_ENV!=="production"&&!M&&T&&T(W),W}(k,x,F,process.env.NODE_ENV!=="production"?z.warnTooManyClasses:void 0),Y=m,te=N.$as||p.$as||N.as||p.as||P,ee=jt(te),H=N!==p?je({},p,{},N):p,B={};for(var K in H)K[0]!=="$"&&K!=="as"&&(K==="forwardedAs"?B.as=H[K]:(G?G(K,Jn,te):!ee||Jn(K))&&(B[K]=H[K]));return p.style&&N.style!==p.style&&(B.style=je({},p.style,{},N.style)),B.className=Array.prototype.concat(j,O,$!==O?$:null,p.className,N.className).filter(Boolean).join(" "),B.ref=Y,h.createElement(te,B)}(b,J,Z,y)};return L.displayName=u,(b=h.forwardRef(L)).attrs=v,b.componentStyle=D,b.displayName=u,b.shouldForwardProp=C,b.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Nt,b.styledComponentId=f,b.target=n?e.target:e,b.withComponent=function(J){var Z=r.componentId,z=function(m,x){if(m==null)return{};var _,k,S={},j=Object.keys(m);for(k=0;k<j.length;k++)_=j[k],x.indexOf(_)>=0||(S[_]=m[_]);return S}(r,["componentId"]),p=Z&&Z+"-"+(jt(J)?J:fn(an(J)));return Sr(J,je({},z,{attrs:v,componentId:p}),t)},Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=n?wr({},e.defaultProps,J):J}}),process.env.NODE_ENV!=="production"&&(xr(u,f),b.warnTooManyClasses=function(J,Z){var z={},p=!1;return function(m){if(!p&&(z[m]=!0,Object.keys(z).length>=200)){var x=Z?' with the id of "'+Z+'"':"";console.warn("Over 200 classes were generated for component "+J+x+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),p=!0,z={}}}}(u,f)),b.toString=function(){return"."+b.styledComponentId},o&&Jo(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),b}var mn=function(e){return function r(t,n,o){if(o===void 0&&(o=Qe),!Et.isValidElementType(n))return Ge(1,String(n));var s=function(){return t(n,o,it.apply(void 0,arguments))};return s.withConfig=function(a){return r(t,n,je({},o,{},a))},s.attrs=function(a){return r(t,n,je({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},s}(Sr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){mn[e]=mn(e)});var _s=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=lr(t),Ht.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var a=s(st(this.rules,n,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,a)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&Ht.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function Ts(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=it.apply(void 0,[e].concat(t)),s="sc-global-"+hn(JSON.stringify(o)),a=new _s(o,s);function l(c){var u=fr(),f=hr(),v=h.useContext(gt),C=h.useRef(u.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&h.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(b){return typeof b=="string"&&b.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),u.server&&d(C,c,u,v,f),h.useLayoutEffect(function(){if(!u.server)return d(C,c,u,v,f),function(){return a.removeStyles(C,u)}},[C,c,u,v,f]),null}function d(c,u,f,v,C){if(a.isStatic)a.renderStyles(c,Qo,f,C);else{var b=je({},u,{theme:br(u,v,l.defaultProps)});a.renderStyles(c,b,f,C)}}return process.env.NODE_ENV!=="production"&&xr(s),h.memo(l)}function Ye(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=it.apply(void 0,[e].concat(t)).join(""),s=hn(o);return new pr(s,o)}var Zt=function(){return h.useContext(gt)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const w=mn;var at={},As={get exports(){return at},set exports(e){at=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",a="second",l="minute",d="hour",c="day",u="week",f="month",v="quarter",C="year",b="date",D="Invalid Date",y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,L=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,J={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(O){var P=["th","st","nd","rd"],A=O%100;return"["+O+(P[(A-20)%10]||P[A]||P[0])+"]"}},Z=function(O,P,A){var F=String(O);return!F||F.length>=P?O:""+Array(P+1-F.length).join(A)+O},z={s:Z,z:function(O){var P=-O.utcOffset(),A=Math.abs(P),F=Math.floor(A/60),N=A%60;return(P<=0?"+":"-")+Z(F,2,"0")+":"+Z(N,2,"0")},m:function O(P,A){if(P.date()<A.date())return-O(A,P);var F=12*(A.year()-P.year())+(A.month()-P.month()),N=P.clone().add(F,f),$=A-N<0,Y=P.clone().add(F+($?-1:1),f);return+(-(F+(A-N)/($?N-Y:Y-N))||0)},a:function(O){return O<0?Math.ceil(O)||0:Math.floor(O)},p:function(O){return{M:f,y:C,w:u,d:c,D:b,h:d,m:l,s:a,ms:s,Q:v}[O]||String(O||"").toLowerCase().replace(/s$/,"")},u:function(O){return O===void 0}},p="en",m={};m[p]=J;var x=function(O){return O instanceof j},_=function O(P,A,F){var N;if(!P)return p;if(typeof P=="string"){var $=P.toLowerCase();m[$]&&(N=$),A&&(m[$]=A,N=$);var Y=P.split("-");if(!N&&Y.length>1)return O(Y[0])}else{var te=P.name;m[te]=P,N=te}return!F&&N&&(p=N),N||!F&&p},k=function(O,P){if(x(O))return O.clone();var A=typeof P=="object"?P:{};return A.date=O,A.args=arguments,new j(A)},S=z;S.l=_,S.i=x,S.w=function(O,P){return k(O,{locale:P.$L,utc:P.$u,x:P.$x,$offset:P.$offset})};var j=function(){function O(A){this.$L=_(A.locale,null,!0),this.parse(A)}var P=O.prototype;return P.parse=function(A){this.$d=function(F){var N=F.date,$=F.utc;if(N===null)return new Date(NaN);if(S.u(N))return new Date;if(N instanceof Date)return new Date(N);if(typeof N=="string"&&!/Z$/i.test(N)){var Y=N.match(y);if(Y){var te=Y[2]-1||0,ee=(Y[7]||"0").substring(0,3);return $?new Date(Date.UTC(Y[1],te,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,ee)):new Date(Y[1],te,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,ee)}}return new Date(N)}(A),this.$x=A.x||{},this.init()},P.init=function(){var A=this.$d;this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()},P.$utils=function(){return S},P.isValid=function(){return this.$d.toString()!==D},P.isSame=function(A,F){var N=k(A);return this.startOf(F)<=N&&N<=this.endOf(F)},P.isAfter=function(A,F){return k(A)<this.startOf(F)},P.isBefore=function(A,F){return this.endOf(F)<k(A)},P.$g=function(A,F,N){return S.u(A)?this[F]:this.set(N,A)},P.unix=function(){return Math.floor(this.valueOf()/1e3)},P.valueOf=function(){return this.$d.getTime()},P.startOf=function(A,F){var N=this,$=!!S.u(F)||F,Y=S.p(A),te=function(T,R){var V=S.w(N.$u?Date.UTC(N.$y,R,T):new Date(N.$y,R,T),N);return $?V:V.endOf(c)},ee=function(T,R){return S.w(N.toDate()[T].apply(N.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(R)),N)},H=this.$W,B=this.$M,K=this.$D,re="set"+(this.$u?"UTC":"");switch(Y){case C:return $?te(1,0):te(31,11);case f:return $?te(1,B):te(0,B+1);case u:var M=this.$locale().weekStart||0,X=(H<M?H+7:H)-M;return te($?K-X:K+(6-X),B);case c:case b:return ee(re+"Hours",0);case d:return ee(re+"Minutes",1);case l:return ee(re+"Seconds",2);case a:return ee(re+"Milliseconds",3);default:return this.clone()}},P.endOf=function(A){return this.startOf(A,!1)},P.$set=function(A,F){var N,$=S.p(A),Y="set"+(this.$u?"UTC":""),te=(N={},N[c]=Y+"Date",N[b]=Y+"Date",N[f]=Y+"Month",N[C]=Y+"FullYear",N[d]=Y+"Hours",N[l]=Y+"Minutes",N[a]=Y+"Seconds",N[s]=Y+"Milliseconds",N)[$],ee=$===c?this.$D+(F-this.$W):F;if($===f||$===C){var H=this.clone().set(b,1);H.$d[te](ee),H.init(),this.$d=H.set(b,Math.min(this.$D,H.daysInMonth())).$d}else te&&this.$d[te](ee);return this.init(),this},P.set=function(A,F){return this.clone().$set(A,F)},P.get=function(A){return this[S.p(A)]()},P.add=function(A,F){var N,$=this;A=Number(A);var Y=S.p(F),te=function(B){var K=k($);return S.w(K.date(K.date()+Math.round(B*A)),$)};if(Y===f)return this.set(f,this.$M+A);if(Y===C)return this.set(C,this.$y+A);if(Y===c)return te(1);if(Y===u)return te(7);var ee=(N={},N[l]=n,N[d]=o,N[a]=t,N)[Y]||1,H=this.$d.getTime()+A*ee;return S.w(H,this)},P.subtract=function(A,F){return this.add(-1*A,F)},P.format=function(A){var F=this,N=this.$locale();if(!this.isValid())return N.invalidDate||D;var $=A||"YYYY-MM-DDTHH:mm:ssZ",Y=S.z(this),te=this.$H,ee=this.$m,H=this.$M,B=N.weekdays,K=N.months,re=function(R,V,W,g){return R&&(R[V]||R(F,$))||W[V].slice(0,g)},M=function(R){return S.s(te%12||12,R,"0")},X=N.meridiem||function(R,V,W){var g=R<12?"AM":"PM";return W?g.toLowerCase():g},T={YY:String(this.$y).slice(-2),YYYY:this.$y,M:H+1,MM:S.s(H+1,2,"0"),MMM:re(N.monthsShort,H,K,3),MMMM:re(K,H),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:re(N.weekdaysMin,this.$W,B,2),ddd:re(N.weekdaysShort,this.$W,B,3),dddd:B[this.$W],H:String(te),HH:S.s(te,2,"0"),h:M(1),hh:M(2),a:X(te,ee,!0),A:X(te,ee,!1),m:String(ee),mm:S.s(ee,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:Y};return $.replace(L,function(R,V){return V||T[R]||Y.replace(":","")})},P.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},P.diff=function(A,F,N){var $,Y=S.p(F),te=k(A),ee=(te.utcOffset()-this.utcOffset())*n,H=this-te,B=S.m(this,te);return B=($={},$[C]=B/12,$[f]=B,$[v]=B/3,$[u]=(H-ee)/6048e5,$[c]=(H-ee)/864e5,$[d]=H/o,$[l]=H/n,$[a]=H/t,$)[Y]||H,N?B:S.a(B)},P.daysInMonth=function(){return this.endOf(f).$D},P.$locale=function(){return m[this.$L]},P.locale=function(A,F){if(!A)return this.$L;var N=this.clone(),$=_(A,F,!0);return $&&(N.$L=$),N},P.clone=function(){return S.w(this.$d,this)},P.toDate=function(){return new Date(this.valueOf())},P.toJSON=function(){return this.isValid()?this.toISOString():null},P.toISOString=function(){return this.$d.toISOString()},P.toString=function(){return this.$d.toUTCString()},O}(),G=j.prototype;return k.prototype=G,[["$ms",s],["$s",a],["$m",l],["$H",d],["$W",c],["$M",f],["$y",C],["$D",b]].forEach(function(O){G[O[1]]=function(P){return this.$g(P,O[0],O[1])}}),k.extend=function(O,P){return O.$i||(O(P,j,k),O.$i=!0),k},k.locale=_,k.isDayjs=x,k.unix=function(O){return k(1e3*O)},k.en=m[p],k.Ls=m,k.p={},k})})(As);const I=at,Tt="reactSchedulerOutsideWrapper",Ne="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",Ps=Ts`

  #${Tt} {
    font-family: ${Ne};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Tt} *,
 #${Tt} *:before,
 #${Tt} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,Is={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E",unassignedBorder:"#F59E0B",unassignedText:"#92400E"}},Os={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D",unassignedBorder:"#D97706",unassignedText:"#FCD34D"}},mt=`
margin: 0;
padding: 0;
`,ct=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;w.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const Ce=50,Ze=24,lt=16,yt=40,Vt=yt+lt+Ze,vt=84,he=56,Pe=196,He=12,_e=50,xt=24,At=16,yn=40,Ls=xt+At+yn,Cr=24,kr=52,Re={topRow:`600 14px ${Ne}`,middleRow:`400 10px ${Ne}`,bottomRow:{name:`600 14px ${Ne}`,number:`600 10px ${Ne}`,hoursInDay:`400 9px ${Ne}`}},bt=3,Mr=12,Gt=24,$r="reactSchedulerCanvasHeaderWrapper",Dr="reactSchedulerCanvasWrapper",Ue=Tt,Ys=4,Ut=48,et=5,Ns=40,Er=8,vn=Ze/2+2,_r=lt/2+Ze+1,Tr=2,$e=60,Le=21,Ar=58,Pr="reactSchedulerBody",Ir=e=>e%4===0&&e%100>0||e%400===0?366:365,xn=e=>{const r=e.day();return r!==0&&r!==6},Or=(e,r)=>I(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),Lr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:xn(e),isCurrentDay:e.isSame(I(),"day"),year:parseInt(e.format("YYYY"))}),bn=(e,r,t,n,o,s,a,l=!1)=>{s?e.fillStyle=a.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=a.mode==="dark"?a.colors.primary:"#F2F6F4",e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,he);const d=a.mode==="dark";e.strokeStyle=d?a.colors.border:"#EEF3F0",e.beginPath(),e.moveTo(r+n-.5,t),e.lineTo(r+n-.5,t+he),e.stroke(),e.strokeStyle=d?a.colors.border:"#E4EAE7",e.beginPath(),e.moveTo(r,t+.5),e.lineTo(r+n,t+.5),e.stroke(),l&&(e.strokeStyle=d?a.colors.today:"#5C8374",e.beginPath(),e.moveTo(r+.5,t),e.lineTo(r+.5,t+he),e.stroke())},wn=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Le},Fs=(e,r,t,n,o,s=[])=>{for(let a=0;a<r;a++){const l=wn(a,s);for(let d=0;d<=t;d++){const c=I(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(d,"days"),u=c.isSame(I(),"day"),f=c.date()===1;bn(e,d*Ce,a*he+l,Ce,xn(c),u,o,f)}}},Bs=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},zs=(e,r,t,n,o,s=[])=>{let a=0,l=-(n.dayOfMonth-1)*He;const d=r*he+s.length*Le;for(let c=0;c<=t;c++){const f=I(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(c,"weeks").isSame(I(),"week");for(let v=0;v<r;v++){const C=wn(v,s);bn(e,a,v*he+C,vt,!0,f,o)}a+=vt}for(let c=0;c<t;c++){const u=Or(n,c)*He;Bs(e,l,d,o),l+=u}},Hs=(e,r,t,n,o,s=[])=>{const a=I(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let l=0;l<r;l++){const d=wn(l,s);for(let c=0;c<=t;c++){let u;c===Math.floor(t/2)?u=I():c>Math.floor(t/2)?u=I().add(c-Math.floor(t/2),"hours"):u=I().subtract(Math.floor(t/2)-l,"hours");const f=a.isSame(I(),"day")&&u.isSame(I(),"hour");bn(e,c*_e+_e/2-.5,l*he+d,_e,xn(u),f,o)}}},Ws=(e,r,t,n,o="group")=>{const s=t*he+r*Le,a=e.canvas.width;e.fillStyle=o==="subcontract"?n.colors.subcontractBorder+"40":o==="provider"?n.colors.subcontractBorder+"2E":o==="warning"?n.colors.unassignedBorder+"26":n.mode==="dark"?n.colors.primary+"80":"#E9EFEC",e.fillRect(0,s,a,Le)},js=(e,r,t,n,o,s,a=[],l=-1,d=-1,c=[])=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(Dr)){switch(r){case 0:zs(e,t,n,o,s,a);break;case 1:Fs(e,t,n,o,s,a);break;case 2:Hs(e,t,n,o,s,a);break}for(let f=0;f<a.length;f++){const v=f===l?"subcontract":f===d?"warning":c.includes(f)?"provider":"group";Ws(e,f,a[f],s,v)}if(r===1){const f=I(`${o.year}-${o.month+1}-${o.dayOfMonth}`),v=t*he+a.length*Le;e.strokeStyle=s.mode==="dark"?s.colors.today:"#5C8374",e.setLineDash([]);for(let C=0;C<=n;C++)if(f.add(C,"days").date()===1){const b=C*Ce+.5;e.beginPath(),e.moveTo(b,0),e.lineTo(b,v),e.stroke()}}}};var Sn={},Zs={get exports(){return Sn},set exports(e){Sn=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){var t="week",n="year";return function(o,s,a){var l=s.prototype;l.week=function(d){if(d===void 0&&(d=null),d!==null)return this.add(7*(d-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var u=a(this).startOf(n).add(1,n).date(c),f=a(this).endOf(t);if(u.isBefore(f))return 1}var v=a(this).startOf(n).date(c).startOf(t).subtract(1,"millisecond"),C=this.diff(v,t,!0);return C<0?a(this).startOf("week").week():Math.ceil(C)},l.weeks=function(d){return d===void 0&&(d=null),this.week(d)}}})})(Zs);const Vs=Sn;var Cn={},Gs={get exports(){return Cn},set exports(e){Cn=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?a:this.add(s-a,"day")}}})})(Gs);const Us=Cn;var kn={},Xs={get exports(){return kn},set exports(e){kn=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){var t="day";return function(n,o,s){var a=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return a(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var u,f,v,C,b=a(this),D=(u=this.isoWeekYear(),f=this.$u,v=(f?s.utc:s)().year(u).startOf("year"),C=4-v.isoWeekday(),v.isoWeekday()>4&&(C+=7),v.add(C,t));return b.diff(D,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var d=l.startOf;l.startOf=function(c,u){var f=this.$utils(),v=!!f.u(u)||u;return f.p(c)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(c,u)}}})})(Xs);const Ks=kn;var Mn={},Js={get exports(){return Mn},set exports(e){Mn=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){return function(t,n,o){n.prototype.isBetween=function(s,a,l,d){var c=o(s),u=o(a),f=(d=d||"()")[0]==="(",v=d[1]===")";return(f?this.isAfter(c,l):!this.isBefore(c,l))&&(v?this.isBefore(u,l):!this.isAfter(u,l))||(f?this.isBefore(c,l):!this.isAfter(c,l))&&(v?this.isAfter(u,l):!this.isBefore(u,l))}}})})(Js);const qs=Mn;var $n={},Qs={get exports(){return $n},set exports(e){$n=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){var t,n,o=1e3,s=6e4,a=36e5,l=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,u=2592e6,f=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:c,months:u,days:l,hours:a,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},C=function(p){return p instanceof z},b=function(p,m,x){return new z(p,x,m.$l)},D=function(p){return n.p(p)+"s"},y=function(p){return p<0},L=function(p){return y(p)?Math.ceil(p):Math.floor(p)},J=function(p){return Math.abs(p)},Z=function(p,m){return p?y(p)?{negative:!0,format:""+J(p)+m}:{negative:!1,format:""+p+m}:{negative:!1,format:""}},z=function(){function p(x,_,k){var S=this;if(this.$d={},this.$l=k,x===void 0&&(this.$ms=0,this.parseFromMilliseconds()),_)return b(x*v[D(_)],this);if(typeof x=="number")return this.$ms=x,this.parseFromMilliseconds(),this;if(typeof x=="object")return Object.keys(x).forEach(function(O){S.$d[D(O)]=x[O]}),this.calMilliseconds(),this;if(typeof x=="string"){var j=x.match(f);if(j){var G=j.slice(2).map(function(O){return O!=null?Number(O):0});return this.$d.years=G[0],this.$d.months=G[1],this.$d.weeks=G[2],this.$d.days=G[3],this.$d.hours=G[4],this.$d.minutes=G[5],this.$d.seconds=G[6],this.calMilliseconds(),this}}return this}var m=p.prototype;return m.calMilliseconds=function(){var x=this;this.$ms=Object.keys(this.$d).reduce(function(_,k){return _+(x.$d[k]||0)*v[k]},0)},m.parseFromMilliseconds=function(){var x=this.$ms;this.$d.years=L(x/c),x%=c,this.$d.months=L(x/u),x%=u,this.$d.days=L(x/l),x%=l,this.$d.hours=L(x/a),x%=a,this.$d.minutes=L(x/s),x%=s,this.$d.seconds=L(x/o),x%=o,this.$d.milliseconds=x},m.toISOString=function(){var x=Z(this.$d.years,"Y"),_=Z(this.$d.months,"M"),k=+this.$d.days||0;this.$d.weeks&&(k+=7*this.$d.weeks);var S=Z(k,"D"),j=Z(this.$d.hours,"H"),G=Z(this.$d.minutes,"M"),O=this.$d.seconds||0;this.$d.milliseconds&&(O+=this.$d.milliseconds/1e3);var P=Z(O,"S"),A=x.negative||_.negative||S.negative||j.negative||G.negative||P.negative,F=j.format||G.format||P.format?"T":"",N=(A?"-":"")+"P"+x.format+_.format+S.format+F+j.format+G.format+P.format;return N==="P"||N==="-P"?"P0D":N},m.toJSON=function(){return this.toISOString()},m.format=function(x){var _=x||"YYYY-MM-DDTHH:mm:ss",k={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return _.replace(d,function(S,j){return j||String(k[S])})},m.as=function(x){return this.$ms/v[D(x)]},m.get=function(x){var _=this.$ms,k=D(x);return k==="milliseconds"?_%=1e3:_=k==="weeks"?L(_/v[k]):this.$d[k],_===0?0:_},m.add=function(x,_,k){var S;return S=_?x*v[D(_)]:C(x)?x.$ms:b(x,this).$ms,b(this.$ms+S*(k?-1:1),this)},m.subtract=function(x,_){return this.add(x,_,!0)},m.locale=function(x){var _=this.clone();return _.$l=x,_},m.clone=function(){return b(this.$ms,this)},m.humanize=function(x){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!x)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},p}();return function(p,m,x){t=x,n=x().$utils(),x.duration=function(S,j){var G=x.locale();return b(S,{$l:G},j)},x.isDuration=C;var _=m.prototype.add,k=m.prototype.subtract;m.prototype.add=function(S,j){return C(S)&&(S=S.asMilliseconds()),_.bind(this)(S,j)},m.prototype.subtract=function(S,j){return C(S)&&(S=S.asMilliseconds()),k.bind(this)(S,j)}}})})(Qs);const Rs=$n;var ei="Expected a function",Yr=0/0,ti="[object Symbol]",ni=/^\s+|\s+$/g,ri=/^[-+]0x[0-9a-f]+$/i,oi=/^0b[01]+$/i,si=/^0o[0-7]+$/i,ii=parseInt,ai=typeof Ee=="object"&&Ee&&Ee.Object===Object&&Ee,ci=typeof self=="object"&&self&&self.Object===Object&&self,li=ai||ci||Function("return this")(),di=Object.prototype,ui=di.toString,fi=Math.max,hi=Math.min,Dn=function(){return li.Date.now()};function pi(e,r,t){var n,o,s,a,l,d,c=0,u=!1,f=!1,v=!0;if(typeof e!="function")throw new TypeError(ei);r=Nr(r)||0,En(t)&&(u=!!t.leading,f="maxWait"in t,s=f?fi(Nr(t.maxWait)||0,r):s,v="trailing"in t?!!t.trailing:v);function C(m){var x=n,_=o;return n=o=void 0,c=m,a=e.apply(_,x),a}function b(m){return c=m,l=setTimeout(L,r),u?C(m):a}function D(m){var x=m-d,_=m-c,k=r-x;return f?hi(k,s-_):k}function y(m){var x=m-d,_=m-c;return d===void 0||x>=r||x<0||f&&_>=s}function L(){var m=Dn();if(y(m))return J(m);l=setTimeout(L,D(m))}function J(m){return l=void 0,v&&n?C(m):(n=o=void 0,a)}function Z(){l!==void 0&&clearTimeout(l),c=0,n=d=o=l=void 0}function z(){return l===void 0?a:J(Dn())}function p(){var m=Dn(),x=y(m);if(n=arguments,o=this,d=m,x){if(l===void 0)return b(d);if(f)return l=setTimeout(L,r),C(d)}return l===void 0&&(l=setTimeout(L,r)),a}return p.cancel=Z,p.flush=z,p}function En(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function gi(e){return!!e&&typeof e=="object"}function mi(e){return typeof e=="symbol"||gi(e)&&ui.call(e)==ti}function Nr(e){if(typeof e=="number")return e;if(mi(e))return Yr;if(En(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=En(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(ni,"");var t=oi.test(e);return t||si.test(e)?ii(e.slice(2),t?2:8):ri.test(e)?Yr:+e}var _n=pi;const Xt=[0,1,2];var Pt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(Pt||{});const Fr=e=>Xt.includes(e),wt=e=>{var n;const t=(((n=document.getElementById(Ue))==null?void 0:n.clientWidth)||0)-Pe;switch(e){case 1:return Math.ceil(t/Ce)*bt;case 2:return Math.ceil(t/_e)*bt;default:return Math.ceil(t/vt)*bt}},yi=e=>wt(e)/bt,Kt=(e,r)=>{const t=wt(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},vi=(e,r)=>{const t=Kt(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},Tn=()=>{var t;const e=((t=document.getElementById(Ue))==null?void 0:t.clientWidth)||0;return Math.max(0,e-Pe)*bt},Br=h.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:I(),jumpDate:null,isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});I.extend(Vs),I.extend(Us),I.extend(Ks),I.extend(qs),I.extend(Rs);const xi=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=I(),onRangeChange:s,handleToggleDisplayActiveUnits:a,onClearFilterData:l,toolbarActions:d})=>{const{zoom:c,maxRecordsPerPage:u=50}=n,[f,v]=h.useState(c),[C,b]=h.useState(I()),[D,y]=h.useState(null),[L,J]=h.useState(!1),[Z,z]=h.useState(wt(f)),p=Xt[f]!==Xt[Xt.length-1],m=f!==0,x=h.useMemo(()=>vi(C,f),[C,f]),_=Kt(C,f).startDate,k=I(_).dayOfYear(),S=Lr(_),j=h.useRef(null),G=h.useRef(!1),O=h.useRef(null),[P,A]=h.useState([{x:0,y:0}]),F=h.useCallback((V,W="auto")=>{var q,E,U,ne;const g=Tn();switch(V){case"back":return(q=j.current)==null?void 0:q.scrollTo({behavior:W,left:g/3});case"forward":return(E=j.current)==null?void 0:E.scrollTo({behavior:W,left:g/3});case"middle":{const Q=g/bt/4;return(U=j.current)==null?void 0:U.scrollTo({behavior:W,left:g/2-Q})}default:return(ne=j.current)==null?void 0:ne.scrollTo({behavior:W,left:g/2})}},[]),N=V=>{A(V)},$=h.useCallback(V=>{const W=yi(f);let g;switch(f){case 0:g=W*7;break;case 1:g=W;break;case 2:g=Math.ceil(W/Gt);break}_n(()=>{switch((V==="forward"||V==="back")&&(G.current=!0),O.current=V,V){case"back":b(E=>E.subtract(g,"days"));break;case"forward":b(E=>E.add(g,"days"));break;case"middle":b(I());break}s==null||s(x)},300)()},[s,x,f]);h.useEffect(()=>{O.current&&(F(O.current),O.current=null)},[C,F]),h.useEffect(()=>{j.current=document.getElementById(Ue),z(wt(f))},[f]),h.useEffect(()=>{const V=()=>z(wt(f));return window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[f]),h.useEffect(()=>{s==null||s(x)},[s,x]),h.useEffect(()=>{J(!1)},[o]),h.useEffect(()=>{L||(F("middle"),J(!0),b(o))},[o,L,F]);const Y=()=>{t||(b(V=>f===2?V.add(Cr,"hours"):V.add(Tr,"weeks")),s==null||s(x))},te=h.useCallback(()=>{t||$("forward")},[t,$]),ee=()=>{t||(b(V=>f===2?V.subtract(Cr,"hours"):V.subtract(Tr,"weeks")),s==null||s(x))},H=h.useCallback(()=>{!L||t||$("back")},[L,t,$]),B=h.useCallback(()=>{t||(O.current="middle",b(I()),y(null),s==null||s(x))},[t,s,x]),K=h.useCallback(V=>{if(t)return;const W=I(V).startOf("day");W.isValid()&&(O.current="middle",b(W),y(W),s==null||s(x))},[t,s,x]);h.useEffect(()=>{if(!D)return;const V=()=>y(null);return document.addEventListener("mousedown",V,{once:!0}),()=>document.removeEventListener("mousedown",V)},[D]);const re=()=>X(f+1),M=()=>X(f-1),X=V=>{Fr(V)&&(v(V),z(wt(V)),s==null||s(x))},T=()=>a==null?void 0:a(),{Provider:R}=Br;return i.jsx(R,{value:{data:e,config:n,handleGoNext:Y,handleScrollNext:te,handleGoPrev:ee,handleScrollPrev:H,handleGoToday:B,goToDate:K,zoomIn:re,zoomOut:M,setZoom:X,zoom:f,isNextZoom:p,isPrevZoom:m,date:C,jumpDate:D,isLoading:t,cols:Z,startDate:S,dayOfYear:k,toggleDisplayActiveUnits:T,tilesCoords:P,updateTilesCoords:N,recordsThreshold:u,onClearFilterData:l,suppressNextSlideRef:G,toolbarActions:d},children:r})},Ve=()=>h.useContext(Br),zr=(e,r,t)=>{const n=Math.max(0,r),o=Math.max(0,t);e.canvas.width=n*window.devicePixelRatio,e.canvas.height=o*window.devicePixelRatio,e.canvas.style.width=n+"px",e.canvas.style.height=o+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},Hr=()=>{var e;return typeof window<"u"&&!!((e=window.matchMedia)!=null&&e.call(window,"(prefers-reduced-motion: reduce)").matches)},Wr=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*he+n*Le;if(e>=s+Le)n++;else if(e>=s)return o*he+n*Le-n*Le}return t-n*Le},bi=5,jr=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>bi},St=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},wi=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:a={},gridRef:l,separatorRowIndices:d=[]})=>{const c=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(X=>({...X,data:[X.data]})):r:e,{enabled:u=!0,isDraggable:f,resourceOnly:v=!1,isValidDrop:C}=a,[b,D]=h.useState("idle"),[y,L]=h.useState(null),[J,Z]=h.useState({x:0,y:0}),[z,p]=h.useState({width:0,height:48}),[m,x]=h.useState(null),[_,k]=h.useState(!0),S=h.useRef({x:0,y:0}),j=h.useRef({x:0,y:0}),G=h.useRef({x:0,y:0}),O=h.useRef(null),P=h.useRef(null),A=h.useRef(0),F=h.useRef(null),N=h.useCallback(X=>!u||X.draggable===!1?!1:f?f(X):!0,[u,f]),$=h.useCallback((X,T)=>{const R=Wr(T,d),V=Math.floor(R/he);let W;switch(t){case 0:W=He*7;break;case 1:W=Ce;break;case 2:W=_e;break;default:W=Ce}const g=Math.floor(X/W);let q;const E=I().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:q=E.add(g*7,"days").toDate();break;case 1:q=E.add(g,"days").toDate();break;case 2:q=E.add(g,"hours").toDate();break;default:q=E.toDate()}return{snappedDate:q,snappedResourceIndex:V}},[t,n,d]),Y=h.useCallback((X,T,R,V)=>{const W=[],g=T.getTime(),q=R.getTime(),E=c.find(ne=>ne.id===V);if(!E)return W;const U=[];for(const ne of E.data)Array.isArray(ne)?U.push(...ne):U.push(ne);for(const ne of U){if(ne.segmentId===X.segmentId)continue;const Q=ne.startDate.getTime(),ae=ne.endDate.getTime();if(g>=Q&&g<ae||q>Q&&q<=ae||g<=Q&&q>=ae){const le=new Date(Math.max(g,Q)),pe=new Date(Math.min(q,ae)),Se=pe.getTime()-le.getTime();W.push({event:ne,conflictStart:le,conflictEnd:pe,overlapDuration:Se})}}return W},[c]),te=h.useCallback((X,T,R,V)=>{const W=[],g=T.getTime(),q=R.getTime(),E=I(T).format("YYYY-MM-DD"),U=c.find(Q=>Q.id===V);if(!U)return W;const ne=[];for(const Q of U.data)Array.isArray(Q)?ne.push(...Q):ne.push(Q);for(const Q of ne){if(Q.segmentId===X.segmentId)continue;const ae=Q.startDate.getTime(),fe=Q.endDate.getTime(),le=I(Q.startDate).format("YYYY-MM-DD"),pe=I(Q.endDate).format("YYYY-MM-DD"),Se=I(R).format("YYYY-MM-DD");if(!(le===E||pe===E||le===Se||pe===Se||I(Q.startDate).isBefore(T,"day")&&I(Q.endDate).isAfter(R,"day"))||g>=ae&&g<fe||q>ae&&q<=fe||g<=ae&&q>=fe)continue;let ue,Te;fe<=g?(ue=g-fe,Te="before"):(ue=ae-q,Te="after"),W.push({event:Q,timeGap:ue,position:Te})}return W.sort((Q,ae)=>Q.timeGap-ae.timeGap)},[c]),ee=h.useCallback((X,T,R)=>{const V=$(T,R);let W,g;if(v)W=X.startDate,g=X.endDate;else{const fe=I(X.endDate).diff(X.startDate);W=V.snappedDate,g=I(W).add(fe,"milliseconds").toDate()}let q=0,E="",U;for(const fe of e){const le=Math.max(fe.data.length,1);if(V.snappedResourceIndex<q+le){E=fe.id,U=fe.capacity;break}q+=le}if(!E)return null;let ne=!0;U!==void 0&&X.totalPassengers!==void 0&&(ne=X.totalPassengers<=U);const Q=Y(X,W,g,E),ae=Q.length===0?te(X,W,g,E):[];return{startDate:W,endDate:g,resourceId:E,resourceIndex:V.snappedResourceIndex,resourceCapacity:U,hasCapacity:ne,conflicts:Q,hasConflict:Q.length>0,nearbyEvents:ae}},[$,e,v,Y,te]),H=h.useCallback((X,T)=>{if(!s)return;const R=Date.now();if(R-A.current<100)return;A.current=R;const V={event:X,currentStartDate:T.startDate,currentEndDate:T.endDate,currentResourceId:T.resourceId,conflicts:T.conflicts};s(V)},[s]),B=h.useCallback((X,T)=>{if(!N(X)||!l.current)return;T.preventDefault(),T.stopPropagation();const R=T.target.closest('[style*="left"]');let V=0,W=0;R&&R.style.left&&R.style.top&&(V=parseInt(R.style.left),W=parseInt(R.style.top));const g=St(T.clientX,T.clientY,l.current);S.current={x:V,y:W},j.current={x:T.clientX,y:T.clientY},G.current={x:g.x-V,y:20},F.current={startDate:X.startDate,endDate:X.endDate,resourceId:""};for(const U of e){for(const ne of U.data)if(ne.some(Q=>Q.segmentId===X.segmentId)){F.current.resourceId=U.id;break}if(F.current.resourceId)break}L(X),D("potential"),Z({x:V,y:W});let q=100,E=48;if(R){const U=R.getBoundingClientRect();q=U.width,E=U.height}p({width:q,height:E})},[N,l,e,t]),K=h.useCallback(X=>{if(!l.current)return;let T=l.current;for(;T&&T!==document.body;){const Q=window.getComputedStyle(T);if(T.scrollHeight>T.clientHeight&&(Q.overflowY==="auto"||Q.overflowY==="scroll"||Q.overflow==="auto"||Q.overflow==="scroll"))break;T=T.parentElement}(!T||T===document.body)&&(T=document.documentElement);const R=T.getBoundingClientRect(),V=X.clientY,W=50,g=12,q=V-R.top,E=R.bottom-V;let U=!1,ne=0;q<W&&q>0?(U=!0,ne=-g*(1-q/W)):E<W&&E>0&&(U=!0,ne=g*(1-E/W)),U?(P.current&&cancelAnimationFrame(P.current),P.current=requestAnimationFrame(()=>{T.scrollTop+=ne,b==="dragging"&&K(X)})):P.current&&(cancelAnimationFrame(P.current),P.current=null)},[l,b]),re=h.useCallback(X=>{if(b==="idle"||b==="animating"||!y||!l.current)return;const T={x:X.clientX,y:X.clientY};if(b==="potential")if(jr(j.current,T))D("dragging");else return;K(X);const R=St(X.clientX,X.clientY,l.current);O.current&&cancelAnimationFrame(O.current),O.current=requestAnimationFrame(()=>{const V={x:R.x-G.current.x,y:R.y-G.current.y};Z(V);const W=ee(y,R.x,R.y);if(W&&C){const g={event:y,currentStartDate:W.startDate,currentEndDate:W.endDate,currentResourceId:W.resourceId,conflicts:W.conflicts};W.hasConflict=!C(g)}if(x(W),W){const g=W.hasCapacity!==!1;k(g),H(y,W)}})},[b,y,l,ee,H,C,K]),M=h.useCallback(async X=>{if(b==="idle"||b==="animating")return;const T={x:X.clientX,y:X.clientY};if(!jr(j.current,T)||b==="potential"){D("idle"),L(null),x(null);return}if(!y||!m||!F.current){D("idle"),L(null),x(null);return}if(m.hasCapacity===!1){k(!1),D("animating"),Z(S.current),setTimeout(()=>{D("idle"),L(null),x(null),k(!0)},300);return}const V={event:y,originalStartDate:F.current.startDate,originalEndDate:F.current.endDate,originalResourceId:F.current.resourceId,newStartDate:m.startDate,newEndDate:m.endDate,newResourceId:m.resourceId,hasConflict:m.hasConflict,conflicts:m.conflicts};let W=!0;if(o)try{const g=o(V);W=g instanceof Promise?await g:g}catch{W=!1}W?(k(!0),D("idle"),L(null),x(null)):(k(!1),D("animating"),Z(S.current),setTimeout(()=>{D("idle"),L(null),x(null),k(!0)},300))},[b,y,m,o,C]);return h.useEffect(()=>{if(b==="potential"||b==="dragging"){const X=R=>re(R),T=R=>M(R);return document.addEventListener("mousemove",X),document.addEventListener("mouseup",T),()=>{document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",T)}}else return()=>{}},[b,re,M]),h.useEffect(()=>()=>{O.current&&(cancelAnimationFrame(O.current),O.current=null),P.current&&(cancelAnimationFrame(P.current),P.current=null)},[]),h.useEffect(()=>{(b==="idle"||b==="animating")&&(O.current&&(cancelAnimationFrame(O.current),O.current=null),P.current&&(cancelAnimationFrame(P.current),P.current=null))},[b]),h.useEffect(()=>{(b==="dragging"||b==="potential")&&(b==="dragging"?(D("animating"),Z(S.current),setTimeout(()=>{D("idle"),L(null),x(null)},300)):(D("idle"),L(null),x(null)))},[t]),h.useEffect(()=>{if((b==="dragging"||b==="potential")&&y){let X=!1;for(const T of e){for(const R of T.data)if(R.some(V=>V.segmentId===y.segmentId)){X=!0;break}if(X)break}X||(b==="dragging"?(D("animating"),Z(S.current),setTimeout(()=>{D("idle"),L(null),x(null)},300)):(D("idle"),L(null),x(null)))}},[e,b,y]),{dragState:b,draggedEvent:y,ghostPosition:J,ghostDimensions:z,dropTarget:m,isValidDrop:_,handleDragStart:B,isDraggable:N,draggingEventId:(y==null?void 0:y.segmentId)||null,resourceOnly:v}},Si=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:a={},gridRef:l,isDragging:d,separatorRowIndices:c=[]})=>{const{enabled:u=!1,isSelectable:f}=a,v=u&&!!o,C=h.useCallback(g=>{let q=0;for(const E of c)E<=g&&q++;return g*he+q*Le},[c]),[b,D]=h.useState("idle"),[y,L]=h.useState(null),[J,Z]=h.useState(null),[z,p]=h.useState(null),[m,x]=h.useState(!1),[_,k]=h.useState([]),[S,j]=h.useState(!1),G=h.useRef(null),O=h.useRef(null),P=h.useRef(null),A=h.useRef(null),F=h.useCallback(()=>{switch(t){case 0:return He*7;case 1:return Ce;case 2:return _e;default:return Ce}},[t]),N=h.useCallback(g=>{const q=F(),E=Math.floor(g/q),U=I().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return U.add(E*7,"days").toDate();case 1:return U.add(E,"days").toDate();case 2:return U.add(E,"hours").toDate();default:return U.toDate()}},[t,n,F]),$=h.useCallback(g=>{const q=Wr(g,c),E=Math.floor(q/he);let U=0;for(const ne of e){const Q=Math.max(ne.data.length,1);if(E<U+Q)return{resourceId:ne.id,resourceIndex:E,resourceLabel:ne.label};U+=Q}return null},[e,c]),Y=h.useCallback(g=>{const q=F();return Math.floor(g/q)*q},[F]),te=h.useCallback((g,q,E,U=[])=>{const ne=[],ae=(r||e).find(pe=>pe.id===g),fe=q.getTime(),le=E.getTime();if(ae){const pe=ae.data[0],Se=pe&&Array.isArray(pe)?ae.data.flat():ae.data;for(const be of Se){const se=new Date(be.startDate).getTime(),ue=new Date(be.endDate).getTime();if(fe<ue&&le>se){const Te=new Date(Math.max(fe,se)),Be=new Date(Math.min(le,ue)),Ie=Be.getTime()-Te.getTime();ne.push({event:be,conflictStart:Te,conflictEnd:Be,overlapDuration:Ie})}}}for(const pe of U){if(pe.resourceId!==g)continue;const Se=pe.startDate.getTime(),be=pe.endDate.getTime();if(fe<be&&le>Se){const se=new Date(Math.max(fe,Se)),ue=new Date(Math.min(le,be)),Te=ue.getTime()-se.getTime(),Be={segmentId:`pending-${pe.startDate.getTime()}`,reservationId:`pending-${pe.startDate.getTime()}`,startDate:pe.startDate,endDate:pe.endDate,occupancy:0,title:`New Event (${pe.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ne.push({event:Be,conflictStart:se,conflictEnd:ue,overlapDuration:Te})}}return ne},[e,r]),ee=h.useCallback(g=>{if(!v||d||!l.current||g.button!==0)return;const q=g.target;if(q.closest("[data-segment-id]")||q.closest("[data-multi-select-ui]"))return;const E=St(g.clientX,g.clientY,l.current),U=$(E.y);if(!U)return;G.current={x:g.clientX,y:g.clientY},O.current=U.resourceIndex;const ne=Y(E.x),Q=F(),ae=C(U.resourceIndex);L(E),Z(E),p({x:ne,y:ae,width:Q,height:he}),D("selecting")},[v,d,l,$,Y,F,C]),H=h.useCallback(g=>{Z(g);const q=F(),E=Y((y==null?void 0:y.x)||0),U=Y(g.x),ne=C(O.current),Q=Math.min(E,U),ae=Math.max(E,U)+q;p({x:Q,y:ne,width:ae-Q,height:he})},[y,F,Y,C]),B=h.useCallback(()=>{A.current&&(cancelAnimationFrame(A.current),A.current=null)},[]),K=h.useCallback((g,q)=>{const E=document.getElementById(Ue);if(!E||!l.current)return;const U=E.getBoundingClientRect(),ne=60,Q=12,ae=g-(U.left+Pe),fe=U.right-g;let le=0;ae<ne?le=-Q*(1-Math.max(0,ae)/ne):fe<ne&&(le=Q*(1-Math.max(0,fe)/ne)),B(),le!==0&&(A.current=requestAnimationFrame(()=>{E.scrollLeft+=le,H(St(g,q,l.current)),K(g,q)}))},[l,H,B]),re=h.useCallback(g=>{if(b!=="selecting"||!l.current||O.current===null)return;const q=St(g.clientX,g.clientY,l.current);P.current&&cancelAnimationFrame(P.current),P.current=requestAnimationFrame(()=>H(q)),K(g.clientX,g.clientY)},[b,l,H,K]),M=h.useCallback(g=>{if(b!=="selecting")return;if(B(),!l.current||!y||!G.current){D("idle"),L(null),Z(null),p(null);return}const q=St(g.clientX,g.clientY,l.current),E=$(y.y);if(!E){D("idle"),L(null),Z(null),p(null);return}const U=Math.min(y.x,q.x),ne=Math.max(y.x,q.x),Q=N(U),ae=N(ne),fe=I(ae).hour(23).minute(59).second(0).millisecond(0).toDate();if(f&&!f(E.resourceId,Q,fe)){D("idle"),L(null),Z(null),p(null);return}const le=te(E.resourceId,Q,fe,_),pe=le.length>0,Se={startDate:Q,endDate:fe,resourceId:E.resourceId,resourceLabel:E.resourceLabel,zoomLevel:t,hasConflict:pe,conflicts:pe?le:void 0};if(m)k(be=>[...be,Se]),j(!0);else if(o){const be=o(Se),se=ue=>{ue!=null&&ue.continueMultiSelect&&(x(!0),k([Se]),j(!0))};be instanceof Promise?be.then(se):se(be)}D("idle"),L(null),Z(null),p(null),G.current=null,O.current=null},[b,l,y,$,N,f,o,t,m,te,_,B]),X=h.useCallback(()=>{if(_.length>0&&s){j(!1);const g=s(_),q=E=>{E!=null&&E.continueMultiSelect?j(!0):(k([]),x(!1),j(!1))};g instanceof Promise?g.then(q):q(g);return}k([]),x(!1),j(!1)},[_,s]),T=h.useCallback(()=>{k([]),x(!1),j(!1)},[]),R=h.useCallback(g=>{k(q=>{const E=q.filter((U,ne)=>ne!==g);return E.length===0&&(x(!1),j(!1)),E})},[]),V=h.useCallback((g,q)=>{k(E=>E.map((U,ne)=>{if(ne!==g)return U;const Q={...U,...q},ae=E.filter((le,pe)=>pe!==g),fe=te(Q.resourceId,Q.startDate,Q.endDate,ae);return{...Q,hasConflict:fe.length>0,conflicts:fe.length>0?fe:void 0}}))},[te]),W=h.useCallback(g=>{g.key==="Escape"&&(b==="selecting"?(B(),D("idle"),L(null),Z(null),p(null),G.current=null,O.current=null):m&&_.length>0&&(k([]),x(!1),j(!1)))},[b,m,_.length,B]);return h.useEffect(()=>{if(b==="selecting")return document.addEventListener("mousemove",re),document.addEventListener("mouseup",M),document.addEventListener("keydown",W),()=>{document.removeEventListener("mousemove",re),document.removeEventListener("mouseup",M),document.removeEventListener("keydown",W)}},[b,re,M,W]),h.useEffect(()=>{if(m&&_.length>0)return document.addEventListener("keydown",W),()=>{document.removeEventListener("keydown",W)}},[m,_.length,W]),h.useEffect(()=>()=>{P.current&&(cancelAnimationFrame(P.current),P.current=null),B()},[B]),h.useEffect(()=>{d&&b==="selecting"&&(B(),D("idle"),L(null),Z(null),p(null),G.current=null,O.current=null)},[d,b,B]),{selectionState:b,selectionStart:y,selectionEnd:J,selectionBox:z,handleGridMouseDown:ee,isEnabled:v,pendingSelections:_,confirmSelections:X,clearSelections:T,removeSelection:R,updateSelection:V,isMultiSelectActive:m,hasUnconfirmedSelections:S}},Ci=w.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,ki=w.div`
  position: relative;
`,Mi=w.canvas``;w.canvas``;const $i=w.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`,Zr=w.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,Di=[],Ei=h.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onTileContextMenu:a,onEventDrop:l,onEventDrag:d,draggableConfig:c,onDragStateChange:u,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:C,separatorRowIndices:b=[],subcontractSeparatorIndex:D=-1,warningSeparatorIndex:y=-1,providerSeparatorIndices:L=Di,fadingUnitIds:J},Z){const z=h.useRef(!1),{handleScrollNext:p,handleScrollPrev:m,date:x,isLoading:_,cols:k,startDate:S,suppressNextSlideRef:j,config:G}=Ve(),O=h.useRef(null),P=h.useRef(null),A=h.useRef(t),F=h.useRef(x),N=h.useRef(null),$=h.useRef(null),Y=h.useRef(null),te=h.useRef(null),[ee,H]=h.useState(!1),B=Zt(),{dragState:K,draggedEvent:re,ghostPosition:M,ghostDimensions:X,dropTarget:T,isValidDrop:R,handleDragStart:V,isDraggable:W,draggingEventId:g,resourceOnly:q}=wi({data:n,baseData:o||n,zoom:r,startDate:S,onEventDrop:l,onEventDrag:d,draggableConfig:c,gridRef:te,separatorRowIndices:b});h.useEffect(()=>{const ge=K==="dragging"||K==="potential";H(ge),u&&u(ge)},[K,u]);const E=h.useRef(!1),U=h.useRef(x),ne=h.useRef(null);h.useEffect(()=>{var ce;const ge=U.current;if(U.current=x,!E.current){E.current=!0;return}if(j!=null&&j.current){j.current=!1;return}const ke=te.current;if(!(ke!=null&&ke.animate))return;const De=x.isAfter(ge)?48:-48;(ce=ne.current)==null||ce.cancel(),ke.style.willChange="transform";const Ae=ke.animate([{transform:`translateX(${De}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),ie=()=>{ke.style.willChange=""};Ae.onfinish=ie,Ae.oncancel=ie,ne.current=Ae},[x,j]);const{selectionState:Q,selectionBox:ae,handleGridMouseDown:fe,pendingSelections:le,confirmSelections:pe,clearSelections:Se,removeSelection:be,updateSelection:se,isMultiSelectActive:ue,hasUnconfirmedSelections:Te}=Si({data:n,baseData:o||n,zoom:r,startDate:S,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:C,gridRef:te,isDragging:ee,separatorRowIndices:b}),Be=h.useCallback(ge=>{ge.preventDefault()},[]),Ie=h.useCallback(ge=>{ge.preventDefault()},[]),ut=b.length*Le,kt=h.useCallback(ge=>{const ke=Tn(),De=t*he+1+ut;zr(ge,ke,De),js(ge,r,t,k,S,B,b,D,y,L)},[k,S,t,r,B,b,D,y,L,ut]);return h.useEffect(()=>{if(!O.current)return;const ge=O.current.getContext("2d");if(!ge)return;const ke=()=>kt(ge);return window.addEventListener("resize",ke),()=>window.removeEventListener("resize",ke)},[kt]),h.useEffect(()=>{var de;const ge=A.current,ke=F.current;if(A.current=t,F.current=x,ge===t||!x.isSame(ke,"day")||Hr())return;const De=O.current,Ae=P.current;if(!De||!Ae||De.width===0||De.height===0)return;const ie=Ae.getContext("2d");if(!ie)return;Ae.width=De.width,Ae.height=De.height,Ae.style.width=De.style.width,Ae.style.height=De.style.height,ie.setTransform(1,0,0,1,0,0),ie.clearRect(0,0,Ae.width,Ae.height),ie.drawImage(De,0,0),(de=N.current)==null||de.cancel(),Ae.style.opacity="1";const ce=Ae.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease"});ce.onfinish=()=>{Ae.style.opacity="0"},N.current=ce},[t,x]),h.useEffect(()=>{const ge=O.current;if(!ge)return;ge.style.letterSpacing="1px";const ke=ge.getContext("2d");ke&&kt(ke)},[x,t,r,kt]),h.useEffect(()=>{if(!$.current)return;const ge=new IntersectionObserver(ke=>{ke[0].isIntersecting&&!z.current&&(z.current=!0,p(),setTimeout(()=>{z.current=!1},1e3))},{root:document.getElementById(Ue)});return ge.observe($.current),()=>{ge.disconnect()}},[p]),h.useEffect(()=>{if(!Y.current)return;const ge=new IntersectionObserver(ke=>{ke[0].isIntersecting&&!z.current&&(z.current=!0,m(),setTimeout(()=>{z.current=!1},1e3))},{root:document.getElementById(Ue),rootMargin:`0px 0px 0px -${Pe}px`});return ge.observe(Y.current),()=>{ge.disconnect()}},[m]),i.jsxs(Ci,{id:Dr,children:[i.jsxs(ki,{ref:ge=>{typeof Z=="function"?Z(ge):Z&&(Z.current=ge),te.current=ge},onMouseDown:fe,style:{cursor:f?"crosshair":"default"},children:[i.jsx(Zr,{position:"left",ref:Y}),i.jsx(zn,{isLoading:_,position:"left"}),i.jsx(Mi,{ref:O,onDragStart:Be,onDragOver:Ie,style:{userSelect:K==="dragging"?"none":"auto"}}),i.jsx($i,{ref:P,"aria-hidden":!0}),i.jsx(Md,{zoom:r,startDate:S}),i.jsx(Ed,{zoom:r,startDate:S}),i.jsx(Ol,{data:n,zoom:r,onTileClick:s,onTileContextMenu:a,onDragStart:V,isDraggable:W,draggingEventId:g,separatorRowIndices:b,fadingUnitIds:J,highlightedSegmentId:(G==null?void 0:G.highlightedSegmentId)??null,focusedUnitIds:(G==null?void 0:G.focusedUnitIds)??null,leavingSegmentIds:(G==null?void 0:G.leavingSegmentIds)??null,ghostProject:(G==null?void 0:G.ghostProject)??null}),i.jsx(Zr,{ref:$,position:"right"}),i.jsx(zn,{isLoading:_,position:"right"}),(K==="dragging"||K==="animating")&&i.jsx(id,{draggedEvent:re,ghostPosition:M,ghostDimensions:X,dropTarget:T,isValidDrop:R,dragState:K,zoom:r,data:n,resourceOnly:q,separatorRowIndices:b}),i.jsx(ld,{selectionBox:ae,isSelecting:Q==="selecting"}),ue&&le.length>0&&i.jsx(Cd,{selections:le,data:n,zoom:r,startDate:S,onRemove:be,onUpdate:se,separatorRowIndices:b})]}),ue&&Te&&le.length>0&&i.jsx(yd,{selections:le,onConfirm:pe,onClear:Se,onRemove:be})]})}),Vr=e=>{const r=I.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},Gr=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/$e);t+=o.hours+s,n+=r%$e,n>=$e&&(t++,n-=$e)}),{hours:t,minutes:n}},Ur=(e,r)=>{let t=Er;switch(r){case 0:t=Ns;break;case 1:t=Er;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,a=$e-e.minutes;return a===$e&&(s++,a=0),{hours:Math.max(0,s),minutes:s<0?0:a}},o=()=>{const s=e.hours-t,a=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:a}};return{free:n(),overtime:o()}},_i=(e,r,t)=>{const n=r.isoWeek(),o=e.map(c=>{const u=I(c.startDate).isoWeek(),f=I(c.startDate).isoWeekday(),v=I(c.endDate).isoWeek(),C=I(c.endDate).isoWeekday(),{hours:b,minutes:D}=Vr(c.occupancy);if(n===u){const y=(et+1-f)*b,L=(et+1-f)*D;return{hours:Math.max(0,y),minutes:L}}else if(n===v){const y=C>et?et*b:C*b,L=C>et?et*D:C*D;return{hours:y,minutes:L}}else if(I(r).isBetween(c.startDate,c.endDate))return{hours:et*b,minutes:et*D};return{hours:0,minutes:0}}),{hours:s,minutes:a}=Gr(o),{free:l,overtime:d}=Ur({hours:s,minutes:a},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,a)},free:l,overtime:d}},Ti=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(u=>{const{hours:f,minutes:v}=Vr(u.occupancy);return o<=(n?7:5)?{hours:f,minutes:v}:{hours:0,minutes:0}}),{hours:a,minutes:l}=Gr(s),{free:d,overtime:c}=Ur({hours:a,minutes:l},t);return{taken:{hours:Math.max(0,a),minutes:Math.max(0,l)},free:d,overtime:c}},Ai=(e,r)=>{let t=0;e.forEach(l=>{const d=I(l.startDate).hour(),c=I(l.endDate).hour(),u=r.hour(),f=I(l.endDate).minute(),v=I(l.startDate).minute();d<u&&c>u?t+=$e:d===u&&c===u&&v&&f?t+=f?f-v:$e-v:d===u&&c>=u?t+=v?$e-v:$e:c===u&&f&&(t+=f)});const n=Math.floor(t/$e),o=t%$e,s=n||o?0:1,a=n?0:o?$e-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:a},overtime:{hours:0,minutes:0}}},Pi=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(a=>n===1?I(t).isBetween(a.startDate,a.endDate,"day","[]"):n===2?I(t).isBetween(a.startDate,a.endDate,"hour","[]"):I(a.startDate).isBetween(I(t),I(t).add(6,"days"),"day","[]")||I(t).isBetween(I(a.startDate),I(a.endDate),"day","[]"));switch(n){case 1:return Ti(s,t,n,o);case 2:return Ai(s,t);default:return _i(s,t,n)}},Ii=(e,r,t,n,o,s,a=!1)=>{let l="weeks",d;switch(s){case 0:l="weeks",d=vt;break;case 1:l="days",d=Ce;break;case 2:l="hours",d=_e;break}const c=Math.ceil(s===2?(t.x-.5*d)/d:t.x/d),u=I(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(c-1,l),f=Math.ceil(t.y/he),v=n.findIndex((L,J,Z)=>Z.slice(0,J+1).reduce((p,m)=>p+m,0)>=f),C=s===2?(c+1)*d:c*d,b=(f-1)*he+he,D=Pi(o[v],v,u,s,a),y=I(e.startDate).isSame(I(e.endDate),"day");return{coords:{x:C,y:b},mouseCoords:t,resourceIndex:v,disposition:D,reservationData:{startTime:I(e.startDate).format("hh:mm A"),startDate:I(e.startDate).format("MMM D, YYYY"),endTime:I(e.endDate).format("hh:mm A"),endDate:I(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,departureAddress:e.departureAddress,destinationAddress:e.destinationAddress,returnAddress:e.returnAddress,isOneDayEvent:y,passengers:e.totalPassengers,readiness:e.readiness,readinessNote:e.readinessNote,subcontractConfirmed:e.subcontractConfirmed,subcontractDetails:e.subcontractDetails}}};function Oi(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function Li(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const u of e)!u.isSubcontract&&!u.isUnassigned&&u.capacity!=null&&t.add(u.capacity);const n=[...t].sort((u,f)=>u-f);if(n.length<2)return r;const o=Math.min(5,n.length),s=Oi(n,o),a=[];let l=0;for(const u of s)a.push({min:n[l],max:n[u-1],values:n.slice(l,u)}),l=u;a.push({min:n[l],max:n[n.length-1],values:n.slice(l)});const d=[],c=new Map;return a.forEach((u,f)=>{const v="__auto_cat_"+f,C=u.min===u.max?u.min+" pax":u.min+"-"+u.max+" pax";d.push({id:v,name:C,minPassengers:u.min,maxPassengers:u.max});for(const b of u.values)c.set(b,v)}),{categories:d,capacityToCategoryId:c}}const Yi=(e,r,t,n)=>{const o=[];let s=0,a=[],l=0;return r.length>n?(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,isUnassigned:e[c].isUnassigned,provider:e[c].provider,categoryId:e[c].categoryId};l>=n&&(o.push(a),s+=a.length,a=[],l=0),l++,a.push(u)}),t.slice(s).length<=n&&(a=[],r.slice(s).forEach((d,c)=>{const u={id:e[c+s].id,label:e[c+s].label,data:d,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,isUnassigned:e[c+s].isUnassigned,provider:e[c+s].provider,categoryId:e[c+s].categoryId};a.push(u),c===r.length-s-1&&o.push(a)})),o):(r.forEach((d,c)=>{const u={id:e[c].id,label:e[c].label,data:d,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,isUnassigned:e[c].isUnassigned,provider:e[c].provider,categoryId:e[c].categoryId};a.push(u)}),o.push(a),o)};var An={},Ni={get exports(){return An},set exports(e){An=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(Ni);const Fi=An;var Pn={},Bi={get exports(){return Pn},set exports(e){Pn=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(Bi);const zi=Pn,Hi=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let a=0;a<o.length;a++){const l=I(t.startDate).startOf("day"),d=I(t.endDate).startOf("day"),c=I(o[a].startDate).startOf("day"),u=I(o[a].endDate).startOf("day");if(l.isBetween(c,u,null,"[]")||d.isBetween(c,u,null,"[]")||l.isBefore(c,"minute")&&d.isAfter(u,"minute")||l.isAfter(c,"minute")&&d.isBefore(u,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};I.extend(Fi),I.extend(zi);const Xr=new WeakMap,Wi=e=>{const r=Xr.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const a=I(o.startDate),l=I(s.startDate),d=a.startOf("day").diff(l.startOf("day"),"day");return d!==0?d:a.diff(l)}),n=Hi(t);return Xr.set(e,n),n},ji=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const a=Wi(s.data);return o[0].push(a),o[1].push(Math.max(a.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},Zi=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,Vi=e=>{const{recordsThreshold:r}=Ve(),[t,n]=h.useState(0),[o,s]=h.useState(0),a=h.useRef(null);h.useEffect(()=>{a.current=document.getElementById(Ue)},[]);const{projectsPerPerson:l,rowsPerPerson:d}=h.useMemo(()=>ji(e),[e]),c=h.useMemo(()=>Yi(e,l,d,r),[e,l,r,d]),u=h.useCallback(()=>{c[o].length&&a.current&&(a.current.scroll({top:0}),n(y=>y+c[Math.max(o,0)].length),s(y=>Math.min(y+1,c.length-1)),window.scroll({top:0}))},[o,c]),f=h.useCallback(()=>{c[o].length&&(n(y=>Math.max(y-c[o-1].length,0)),s(y=>Math.max(y-1,0)))},[o,c]),v=h.useCallback(()=>{n(0),s(0)},[]),C=t+c[o].length,b=h.useMemo(()=>d.slice(t,C),[C,d,t]),D=h.useMemo(()=>l.slice(t,C),[C,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:D,rowsPerItem:b,totalRowsPerPage:Zi(c[o]),next:u,previous:f,reset:v}},Xe="__subcontract__",Jt=e=>`${Xe}:${e}`,In=e=>{const r=[],t=new Map;for(const o of e){if(!o.provider){r.push(o);continue}const s=t.get(o.provider.id)??{id:o.provider.id,name:o.provider.name,items:[]};s.items.push(o),t.set(o.provider.id,s)}const n=[...t.values()].sort((o,s)=>o.name.localeCompare(s.name));return{loose:r,providers:n}};var On={},Gi={get exports(){return On},set exports(e){On=e}};(function(e,r){(function(t,n){e.exports=n()})(Ee,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(Gi);const Ui=On;var Ln={},Xi={get exports(){return Ln},set exports(e){Ln=e}};(function(e,r){(function(t,n){e.exports=n(at)})(Ee,function(t){function n(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var o=n(t);function s(v){return v%10<5&&v%10>1&&~~(v/10)%10!=1}function a(v,C,b){var D=v+" ";switch(b){case"m":return C?"minuta":"minutę";case"mm":return D+(s(v)?"minuty":"minut");case"h":return C?"godzina":"godzinę";case"hh":return D+(s(v)?"godziny":"godzin");case"MM":return D+(s(v)?"miesiące":"miesięcy");case"yy":return D+(s(v)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),d="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,u=function(v,C){return c.test(C)?l[v.month()]:d[v.month()]};u.s=d,u.f=l;var f={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:u,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(v){return v+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(f,null,!0),f})})(Xi);const Ki=Ln;var Yn={},Ji={get exports(){return Yn},set exports(e){Yn=e}};(function(e,r){(function(t,n){e.exports=n(at)})(Ee,function(t){function n(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(d,c,u){var f=s[u];return Array.isArray(f)&&(f=f[c?0:1]),f.replace("%d",d)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return o.default.locale(l,null,!0),l})})(Ji);const qi=Yn;var Nn={},Qi={get exports(){return Nn},set exports(e){Nn=e}};(function(e,r){(function(t,n){e.exports=n(at)})(Ee,function(t){function n(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),a="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,d=function(u,f){return l.test(f)?s[u.month()]:a[u.month()]};d.s=a,d.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:d,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(u){return u+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(Qi);const Ri=Nn;var Fn={},ea={get exports(){return Fn},set exports(e){Fn=e}};(function(e,r){(function(t,n){e.exports=n(at)})(Ee,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return o.default.locale(s,null,!0),s})})(ea);const ta=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract",unassigned:"No unit assigned"},translateCode:"en-GB",dayjsTranslations:Ui},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca",unassigned:"Nie przypisano pojazdu"},translateCode:"pl-PL",dayjsTranslations:Ki},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"One Day",passengers:"Pax"},subcontract:"Subcontrato",unassigned:"Sin unidad asignada"},translateCode:"es-ES",dayjsTranslations:Fn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas",unassigned:"Nepriskirta transporto priemonė"},translateCode:"lt-LT",dayjsTranslations:Ri},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer",unassigned:"Kein Fahrzeug zugewiesen"},translateCode:"de-DE",dayjsTranslations:qi}];class na{constructor(){To(this,"locales",ta)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const qt=new na,Kr=h.createContext({localesData:qt.getLocales(),currentLocale:qt.getLocales()[0],setCurrentLocale:()=>{}}),ra=({children:e,lang:r,translations:t})=>{const[n,o]=h.useState("en"),s=qt.getLocales(),a=h.useCallback(()=>{const f=s.find(v=>v.id===n);return typeof(f==null?void 0:f.dayjsTranslations)=="object"&&I.locale(f.dayjsTranslations),f||s[0]},[n,s]),[l,d]=h.useState(a()),c=f=>{localStorage.setItem("locale",f.translateCode),d(f)};h.useEffect(()=>{t==null||t.forEach(f=>{s.find(C=>C.id===f.id)||qt.addLocales(f)})},[s,t]),h.useEffect(()=>{const f=localStorage.getItem("locale"),v=r??f??"en";localStorage.setItem("locale",v),o(v),d(a())},[a,r]);const{Provider:u}=Kr;return i.jsx(u,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},tt=()=>h.useContext(Kr).currentLocale.lang,oa=e=>oe.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},oe.createElement("defs",null,oe.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),oe.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},oe.createElement("stop",{offset:.47,stopColor:"#ccc"}),oe.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),oe.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),oe.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),oe.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),oe.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),oe.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),oe.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),oe.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),oe.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),oe.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),oe.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),sa=w.div`
  height: 440px;
  width: 514px;
  position: relative;
`,ia=w.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,aa=({onTileClick:e})=>{const{feelingEmpty:r}=tt();return i.jsxs(sa,{onClick:e,children:[i.jsx(oa,{}),i.jsx(ia,{children:r})]})},ca=w.div`
  position: relative;
  display: flex;
`,la=w.div`
  position: relative;
  margin-left: ${Pe};
  display: flex;
  flex-direction: column;
  contain: paint;
`,da=w.div`
  width: calc(${({width:e})=>e}px - ${Pe}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Pe}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,ua=new Set,fa={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:Pt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function ha(e,r){const t=r?[...r].sort((c,u)=>c.maxPassengers-u.maxPassengers):[],n=[],o=e.filter(c=>c.isUnassigned);o.length>0&&n.push({type:"unassigned",items:o});const s=e.filter(c=>!c.isUnassigned);for(const c of t){const u=s.filter(f=>!f.isSubcontract&&f.categoryId===c.id);u.length>0&&n.push({type:"category",category:c,items:u})}const a=t.length>0,l=s.filter(c=>!c.isSubcontract&&(!c.categoryId||!a));l.length>0&&a?n.push({type:"uncategorized",items:l}):l.length>0&&n.push({type:"uncategorized",items:l});const d=s.filter(c=>c.isSubcontract);return d.length>0&&n.push({type:"subcontract",items:d}),n}const pa=({data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,onItemClick:s,toggleTheme:a,topBarWidth:l,onEventDrop:d,onEventDrag:c,draggableConfig:u,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:C})=>{const[b,D]=h.useState(fa),[y,L]=h.useState(e),[J,Z]=h.useState(!1),[z,p]=h.useState(!1),[m,x]=h.useState(""),[_,k]=h.useState(new Set),[S,j]=h.useState(new Set),G=h.useRef([]);h.useEffect(()=>()=>G.current.forEach(clearTimeout),[]);const{zoom:O,startDate:P,isLoading:A,config:{includeTakenHoursOnWeekendsInDayView:F,showTooltip:N,showThemeToggle:$}}=Ve(),Y=h.useRef(null),te=h.useRef(null),[ee,H]=h.useState(124),{page:B,projectsPerPerson:K,rowsPerItem:re,currentPageNum:M,pagesAmount:X,next:T,previous:R,reset:V}=Vi(y),{effectiveCategories:W,effectivePage:g}=h.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:B};const ie=Li(B);if(ie.categories.length===0)return{effectiveCategories:void 0,effectivePage:B};const ce=B.map(de=>{if(de.isSubcontract||de.isUnassigned||de.capacity==null)return de;const we=ie.capacityToCategoryId.get(de.capacity);return we?{...de,categoryId:we}:de});return{effectiveCategories:ie.categories,effectivePage:ce}},[t,B]),q=h.useCallback(ie=>{if(_.has(ie)){k(de=>{const we=new Set(de);return we.delete(ie),we});return}if(Hr()){k(de=>new Set(de).add(ie));return}j(de=>new Set(de).add(ie));const ce=setTimeout(()=>{k(de=>new Set(de).add(ie)),j(de=>{const we=new Set(de);return we.delete(ie),we})},190);G.current.push(ce)},[_]),E=h.useMemo(()=>{const ie=[];g.some(we=>we.isUnassigned)&&ie.push("__unassigned__");const ce=W?[...W].sort((we,ze)=>we.maxPassengers-ze.maxPassengers):[];for(const we of ce)g.some(ze=>!ze.isSubcontract&&ze.categoryId===we.id)&&ie.push(we.id);const de=g.filter(we=>we.isSubcontract);return de.length>0&&(ie.push(Xe),ie.push(...In(de).providers.map(we=>Jt(we.id)))),ie},[W,g]),U=h.useCallback(()=>{k(new Set)},[]),ne=h.useCallback(()=>{k(new Set(E))},[E]),Q=h.useMemo(()=>{if(S.size===0)return ua;const ie=new Set;for(const ce of g){const de=ce.isUnassigned?"__unassigned__":ce.isSubcontract?Xe:ce.categoryId,we=!!ce.provider&&S.has(Jt(ce.provider.id));(de&&S.has(de)||we)&&ie.add(ce.id)}return ie},[S,g]),{visiblePage:ae,visibleRowsPerItem:fe,visibleTotalRows:le,visibleProjectsPerPerson:pe,separatorRowIndices:Se,subcontractSeparatorIndex:be,unassignedSeparatorIndex:se,providerSeparatorIndices:ue}=h.useMemo(()=>{const ie=ha(g,W),ce=((W==null?void 0:W.length)??0)>0,de=new Map;B.forEach((Me,qe)=>de.set(Me.id,qe));const we=[],ze=[],nt=[],We=[];let rt=0,tn=-1,Je=-1;const ft=[],Mt=Me=>{for(const qe of Me){const $t=de.get(qe.id)??0,Dt=re[$t];we.push(qe),ze.push(Dt),nt.push(K[$t]),rt+=Dt}};for(const Me of ie)if(Me.type==="unassigned"||Me.type==="subcontract"||Me.type==="category"&&ce){const $t=Me.type==="unassigned"?"__unassigned__":Me.type==="subcontract"?Xe:Me.category.id,Dt=_.has($t);if(Me.type==="subcontract"&&(tn=We.length),Me.type==="unassigned"&&(Je=We.length),We.push(rt),Dt)continue;if(Me.type!=="subcontract"){Mt(Me.items);continue}const{loose:Gn,providers:Un}=In(Me.items);Mt(Gn);for(const _o of Un)ft.push(We.length),We.push(rt),_.has(Jt(_o.id))||Mt(_o.items)}else Mt(Me.items);const Vn=ze.reduce((Me,qe)=>Me+qe,0);return{visiblePage:we,visibleRowsPerItem:ze,visibleTotalRows:Vn,visibleProjectsPerPerson:nt,separatorRowIndices:We,subcontractSeparatorIndex:tn,unassignedSeparatorIndex:Je,providerSeparatorIndices:ft}},[g,W,B,_,re,K]),Te=h.useMemo(()=>g.reduce((ie,ce)=>ce.isUnassigned?ie+ce.data.reduce((de,we)=>de+we.length,0):ie,0),[g]),Be=h.useRef(null),Ie=h.useRef(_n((ie,ce,de,we,ze,nt)=>{if(!Y.current)return;const{tile:We,segmentId:rt}=ge(ie);if(rt&&rt===Be.current)return;if(Be.current=null,!rt||!We){Z(!1);return}const tn=kt(rt,ce),Je=Y.current.getBoundingClientRect(),ft=We.getBoundingClientRect(),Mt={x:ie.clientX-Je.left,y:ie.clientY-Je.top},Vn={x:ie.clientX-Je.left,y:ie.clientY-Je.top},Me={x:ft.left-Je.left,y:ft.top-Je.top,width:ft.width,height:ft.height},{coords:{x:qe,y:$t},resourceIndex:Dt,disposition:Gn,reservationData:Un}=Ii(tn,de,Mt,we,ze,nt,F);D({coords:{x:qe,y:$t},mouseCoords:Vn,resourceIndex:Dt,disposition:Gn,reservationData:Un,tileBounds:Me}),Z(!0)},4)),ut=h.useRef(_n((ie,ce)=>{V(),L(ie.map(de=>({...de,data:de.data.filter(we=>{const{title:ze,description:nt,subtitle:We}=we;return(ze==null?void 0:ze.toLowerCase().includes(ce.toLowerCase()))||(We==null?void 0:We.toLowerCase().includes(ce.toLowerCase()))||(nt==null?void 0:nt.toLowerCase().includes(ce.toLowerCase()))})})).filter(de=>de.data.length>0))},500)),kt=(ie,ce)=>{if(ie)return ce.flatMap(de=>de.data).find(de=>de.segmentId===ie)},ge=ie=>{if(!ie.target)return{tile:null,segmentId:null};const ce=ie.target.closest("[data-segment-id]");return ce?{tile:ce,segmentId:ce.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},ke=ie=>{const ce=ie.target.value;x(ce),ut.current.cancel(),ce?ut.current(e,ce):(V(),L(e))},De=h.useCallback(()=>{Ie.current.cancel(),Z(!1)},[]),Ae=h.useCallback((ie,ce)=>{Be.current=String(ie.segmentId),De(),o==null||o(ie,ce)},[De,o]);return h.useEffect(()=>{const ie=de=>Ie.current(de,e,P,fe,pe,O),ce=Y.current;if(ce)return ce.addEventListener("mousemove",ie),ce.addEventListener("mouseleave",De),()=>{ce.removeEventListener("mousemove",ie),ce.removeEventListener("mouseleave",De)}},[Ie,De,pe,fe,P,O,e]),h.useEffect(()=>{m?(ut.current.cancel(),ut.current(e,m)):L(e)},[e,m]),h.useLayoutEffect(()=>{const ie=te.current;if(!ie)return;const ce=()=>H(ie.offsetHeight);ce();const de=new ResizeObserver(ce);return de.observe(ie),()=>de.disconnect()},[]),i.jsxs(ca,{children:[i.jsx(_c,{headerHeight:ee,data:g,categories:W,pageNum:M,pagesAmount:X,rows:re,onLoadNext:T,onLoadPrevious:R,searchInputValue:m,onSearchInputChange:ke,onItemClick:s,collapsedGroups:_,fadingGroups:S,onToggleGroup:q,allGroupIds:E,onExpandAll:U,onCollapseAll:ne,unassignedCount:Te}),i.jsxs(la,{children:[i.jsx(sl,{ref:te,zoom:O,topBarWidth:l,showThemeToggle:$,toggleTheme:a}),e.length?i.jsx(Ei,{data:ae,baseData:r||e,zoom:O,rows:le,ref:Y,onTileClick:n,onTileContextMenu:o&&Ae,onEventDrop:d,onEventDrag:c,draggableConfig:u,onDragStateChange:p,onTimeRangeSelect:f,onMultiTimeRangeSelect:v,clickToAddConfig:C,separatorRowIndices:Se,subcontractSeparatorIndex:be,warningSeparatorIndex:Te>0?se:-1,providerSeparatorIndices:ue,fadingUnitIds:Q}):i.jsx(da,{width:l,children:A?i.jsx(zn,{isLoading:A,position:"left"}):i.jsx(aa,{})}),N&&i.jsx(Kl,{tooltipData:b,visible:J&&!z})]})]})},ga=w.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Pe+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.mode==="dark"?e.colors.primary:"#fff"};
`,Jr=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({$at:e})=>e==="end"?"flex-end":"flex-start"};
`,ma=w.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`,ya=w.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,qr=w.button`
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
`,va=w.button`
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
`,xa=w.div`
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
`,Qr=w.button`
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
`,ba=w.label`
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
`,wa=w.span`
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
`,It=({children:e,sw:r=2})=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:e}),Sa=()=>{var r,t;const e=document.getElementById(Pr);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(r=e==null?void 0:e.requestFullscreen)==null||r.call(e)},Ca=()=>{const{config:e,zoom:r,handleGoNext:t,handleGoPrev:n,handleGoToday:o,setZoom:s,goToDate:a,toggleDisplayActiveUnits:l,toolbarActions:d}=Ve(),{filterButtonState:c=-1}=e;return i.jsxs(ga,{width:0,children:[i.jsxs(Jr,{$at:"start",children:[i.jsxs(ya,{children:[i.jsx(qr,{onClick:n,"aria-label":"Anterior",children:i.jsx(It,{children:i.jsx("path",{d:"m15 18-6-6 6-6"})})}),i.jsx(va,{onClick:o,children:"Hoy"}),i.jsx(qr,{onClick:t,"aria-label":"Siguiente",children:i.jsx(It,{children:i.jsx("path",{d:"m9 18 6-6-6-6"})})})]}),e.showViewSwitcher!==!1&&i.jsxs(i.Fragment,{children:[i.jsx(ma,{}),i.jsxs(xa,{children:[i.jsx("button",{className:r===2?"on":"",onClick:()=>s(2),children:"Día"}),i.jsx("button",{className:r===0?"on":"",onClick:()=>s(0),children:"Semana"}),i.jsx("button",{className:r===1?"on":"",onClick:()=>s(1),children:"Mes"})]})]}),e.showJumpToDate!==!1&&i.jsxs(ba,{children:[i.jsxs(It,{children:[i.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),i.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),i.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",i.jsx("input",{type:"date",onClick:u=>{var f,v;try{(v=(f=u.currentTarget).showPicker)==null||v.call(f)}catch{}},onChange:u=>u.target.value&&a(u.target.value)})]})]}),i.jsxs(Jr,{$at:"end",children:[e.showFilterButton!==!1&&c>=0&&i.jsxs(Qr,{$primary:!!c,onClick:l,children:[i.jsx(It,{children:i.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&i.jsx(wa,{children:c})]}),e.showFullscreenButton!==!1&&i.jsxs(Qr,{onClick:Sa,children:[i.jsx(It,{children:i.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]}),d]})]})},ka={add:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>oe.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>oe.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>oe.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>oe.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>oe.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},oe.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),oe.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),oe.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Bn=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=Zt(),a=ka[e];return a?i.jsx(a,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},Ma=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r];w.button`
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
  ${({theme:e,variant:r,disabled:t})=>Ma(e,r,t)}
`;const $a=w.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${Ar}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Ne};
`,Da=w.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,Ea=w.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,_a=w.div`
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
`,Ta=w.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,Aa=w.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,Pa=w.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`,Ia=w.div`
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
`,Oa=w.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,La=w.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`,Ya=w.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,Na=w.div`
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
`,Rr="#cdd8d2",eo=[178,216,195],Fa=[15,125,102],Ba=e=>{const r=Math.min(1,Math.max(0,e)),t=n=>Math.round(eo[n]+(Fa[n]-eo[n])*r);return`rgb(${t(0)}, ${t(1)}, ${t(2)})`},za=()=>{const{date:e,zoom:r,data:t,goToDate:n,config:o}=Ve(),s=tt(),a=h.useRef(null),[l,d]=h.useState(null),c=h.useMemo(()=>Array.from({length:12},(k,S)=>I().month(S).format("MMM").toUpperCase()),[s]),u=h.useMemo(()=>I().startOf("day"),[]),{domainStart:f,domainEnd:v,domainDays:C}=h.useMemo(()=>{const k=u.subtract(3,"month").startOf("month"),S=u.add(9,"month").endOf("month");return{domainStart:k,domainEnd:S,domainDays:S.diff(k,"day")+1}},[u]),b=k=>k.diff(f,"day")/C*100,D=k=>Math.min(100,Math.max(0,k)),y=h.useMemo(()=>{const k=[];let S=f.startOf("month");for(;S.isBefore(v);)k.push(S),S=S.add(1,"month");return k},[f,v]),L=o==null?void 0:o.yearCounts,J=h.useMemo(()=>{const k=Math.ceil(C/7),S=new Array(k).fill(0),j=$=>{const Y=$.diff(f,"day");return Y<0||Y>=C?-1:Math.floor(Y/7)};if(L&&L.length)for(const $ of L){const Y=j(I($.date));Y>=0&&(S[Y]+=$.count)}else for(const $ of t??[])for(const Y of $.data??[]){const te=j(I(Y.startDate));te>=0&&(S[te]+=1)}const G=Math.max(0,...S);if(G<=0)return S.map(()=>({h:0,color:Rr}));const O=S.filter($=>$>0).sort(($,Y)=>$-Y),P=O.length>>1,A=O.length%2?O[P]:(O[P-1]+O[P])/2,F=A>0?G/A:1,N=Math.min(1,Math.max(.45,1/(1+Math.log2(Math.max(1,F)))));return S.map($=>$>0?{h:Math.min(100,100*Math.pow($/G,N)),color:Ba($/G)}:{h:0,color:Rr})},[t,L,f,C]),Z=b(u),z=k=>{const{startDate:S,endDate:j}=Kt(k,r),G=D(b(S));return{left:G,width:D(b(j))-G,startDate:S,endDate:j}},p=z(e),m=l?z(l.d):null,x=k=>`${k.date()} ${c[k.month()]}`,_=k=>{var G;const S=(G=a.current)==null?void 0:G.getBoundingClientRect();if(!S)return null;const j=Math.min(1,Math.max(0,(k-S.left)/S.width));return{f:j,d:f.add(Math.round(j*(C-1)),"day")}};return i.jsxs($a,{children:[i.jsxs(Da,{children:["Navegar",i.jsx("br",{}),"por fecha"]}),i.jsxs(Ea,{ref:a,onClick:k=>{const S=_(k.clientX);S&&n(S.d.toDate())},onMouseMove:k=>{const S=_(k.clientX);S&&d({left:S.f*100,d:S.d})},onMouseLeave:()=>d(null),children:[i.jsx(_a,{children:y.map((k,S)=>i.jsx("span",{style:{left:`${b(k)}%`},children:S===0||k.month()===0?`${c[k.month()]} ${k.format("YY")}`:c[k.month()]},S))}),y.map((k,S)=>S===0?null:i.jsx(Ta,{style:{left:`${b(k)}%`}},S)),i.jsx(Aa,{children:J.map((k,S)=>i.jsx(Pa,{style:{height:`${k.h}%`,background:k.color}},S))}),i.jsx(Oa,{style:{left:`${p.left}%`,width:`${p.width}%`}}),i.jsx(Ia,{style:{left:`${D(Z)}%`},children:i.jsx("span",{children:"HOY"})}),l&&m&&i.jsxs(i.Fragment,{children:[i.jsx(La,{style:{left:`${m.left}%`,width:`${m.width}%`}}),i.jsx(Ya,{style:{left:`${l.left}%`}}),i.jsx(Na,{style:{left:`${l.left}%`},children:`Ir a ${x(l.d)}`})]})]})]})},to=h.createContext(new Map),Ha=()=>h.useContext(to),Wa=10500,ja=60,Za=600,Va=e=>{var d;const r=document.getElementById(Ue),t=r==null?void 0:r.querySelector(`[data-segment-id="${CSS.escape(e)}"]`);if(!r||!t)return!1;const n=r.getBoundingClientRect(),o=(d=document.getElementById($r))==null?void 0:d.getBoundingClientRect(),s=t.getBoundingClientRect(),a=Math.max((o==null?void 0:o.bottom)??n.top,n.top,0),l=Math.min(n.bottom,window.innerHeight);return s.width>0&&s.right>n.left+Pe&&s.left<n.right&&s.bottom>a&&s.top<l},Ga=()=>{const[e,r]=h.useState(()=>new Map),t=h.useRef(0),n=h.useRef(new Set);h.useEffect(()=>{const s=n.current;return()=>s.forEach(clearTimeout)},[]);const o=h.useCallback(s=>{const a=s.filter(u=>Va(u.segmentId));if(!a.length)return[];const l=++t.current,d=new Map(a.map((u,f)=>[u.segmentId,{kind:u.kind,key:l,delayMs:Math.min(f*ja,Za)}]));r(u=>new Map([...Array.from(u),...Array.from(d)]));const c=setTimeout(()=>{n.current.delete(c),r(u=>{const f=new Map(u);return d.forEach((v,C)=>{var b;((b=f.get(C))==null?void 0:b.key)===l&&f.delete(C)}),f})},Wa);return n.current.add(c),a.map(u=>u.segmentId)},[]);return{pulses:e,pulseTiles:o}},Ua=w.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Xa=w.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?Ar:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Ka=w.div`
  position: relative;
`,Ja=({data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,topBarWidth:s,onItemClick:a,toggleTheme:l,onEventDrop:d,onEventDrag:c,draggableConfig:u,schedulerRef:f,onTimeRangeSelect:v,onMultiTimeRangeSelect:C,clickToAddConfig:b})=>{const{goToDate:D,handleGoToday:y,zoomIn:L,zoomOut:J,zoom:Z}=Ve(),{pulses:z,pulseTiles:p}=Ga();return h.useImperativeHandle(f,()=>({goToDate:D,goToToday:y,setZoom:m=>{if(!Fr(m))return;const x=m-Z;if(x>0)for(let _=0;_<x;_++)L();else for(let _=0;_<Math.abs(x);_++)J()},pulseTiles:p}),[D,y,Z,L,J,p]),i.jsx(to.Provider,{value:z,children:i.jsx(pa,{data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,topBarWidth:s,onItemClick:a,toggleTheme:l,onEventDrop:d,onEventDrag:c,draggableConfig:u,onTimeRangeSelect:v,onMultiTimeRangeSelect:C,clickToAddConfig:b})})},qa=h.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:a,onTileClick:l,onTileContextMenu:d,handleToggleDisplayActiveUnits:c,onClearFilterData:u,toolbarActions:f,onItemClick:v,isLoading:C,onEventDrop:b,onEventDrag:D,draggableConfig:y,onTimeRangeSelect:L,onMultiTimeRangeSelect:J,clickToAddConfig:Z},z){var N;const p=h.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),m=h.useRef(null),x=h.useRef(null),[_,k]=h.useState((N=m.current)==null?void 0:N.clientWidth),S=h.useMemo(()=>I(s),[s]),[j,G]=h.useState(p.defaultTheme??"light"),O=()=>{G(j==="light"?"dark":"light")},P=j==="light"?Is:Os,A=p.theme?p.theme[P.mode]:{},F={...P,colors:{...P.colors,...A}};return h.useImperativeHandle(z,()=>({goToDate:$=>{var Y;return(Y=x.current)==null?void 0:Y.goToDate($)},goToToday:()=>{var $;return($=x.current)==null?void 0:$.goToToday()},setZoom:$=>{var Y;return(Y=x.current)==null?void 0:Y.setZoom($)},pulseTiles:$=>{var Y;return((Y=x.current)==null?void 0:Y.pulseTiles($))??[]}}),[]),h.useLayoutEffect(()=>{const $=()=>{m.current&&k(m.current.clientWidth)};$(),window.addEventListener("resize",$);let Y;const te=m.current;return te&&typeof ResizeObserver<"u"&&(Y=new ResizeObserver($),Y.observe(te)),()=>{window.removeEventListener("resize",$),Y==null||Y.disconnect()}},[]),i.jsxs(i.Fragment,{children:[i.jsx(Ps,{}),i.jsx(Es,{theme:F,children:i.jsx(ra,{lang:p.lang,translations:p.translations,children:i.jsx(xi,{data:r,isLoading:!!C,config:p,onRangeChange:a,defaultStartDate:S,handleToggleDisplayActiveUnits:c,onClearFilterData:u,toolbarActions:f,children:i.jsxs(Ua,{id:Pr,children:[i.jsx(Xa,{showScroll:!!r.length,$footer:p.showOverview!==!1&&!!r.length,id:Ue,ref:m,children:i.jsx(Ka,{children:i.jsx(Ja,{data:r,baseData:n,categories:t,onTileClick:l,onTileContextMenu:d,topBarWidth:_??0,onItemClick:v,toggleTheme:O,onEventDrop:b,onEventDrag:D,draggableConfig:y,schedulerRef:x,onTimeRangeSelect:L,onMultiTimeRangeSelect:J,clickToAddConfig:Z})})}),p.showOverview!==!1&&!!r.length&&i.jsx(za,{})]})})})})]})}),Qa=w.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,Ra=w.button`
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
`,ec=w.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,tc=w.p`
  ${mt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,no=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:a,loadPrevious:l}=tt(),d=e==="next"?`${a} ${o+2}/${s}`:`${l} ${o}/${s}`;return i.jsx(Qa,{intent:e,children:i.jsxs(Ra,{onClick:r,isVisible:n,children:[t&&i.jsx(ec,{children:t}),i.jsx(tc,{children:d})]})})},nc=w.div`
  min-width: ${Pe+"px"};
  max-width: ${Pe+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,rc=w.div`
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
`,oc=w.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,sc=w.input`
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
`,ic=w.div`
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
`,ac=Ye`
  from { opacity: 1; }
  to { opacity: 0; }
`,Qt=w.div`
  ${({$fading:e})=>e&&it`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${ac} 180ms ease forwards;
      }
    `}
`,cc=w.button`
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
`,lc=Ye`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,dc=w.div`
  display: flex;
  align-items: ${({rows:e})=>e>1?"start":"center"};
  padding: 0.813rem 0 0.813rem ${({$nested:e})=>e?"1.75rem":"1rem"};
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
    animation: ${lc} 200ms ease-out;
  }
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,uc=w.div`
  display: flex;
  align-items: center;
`,fc=w.div`
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
`,hc=w.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,pc=w.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,ro=w.p`
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
`,gc=w.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`,mc=w.span`
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
`,yc=w.span`
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
`,vc=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),xc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:[i.jsx("circle",{cx:"9",cy:"8",r:"3.2"}),i.jsx("path",{d:"M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z"}),i.jsx("circle",{cx:"16.8",cy:"8.6",r:"2.5"}),i.jsx("path",{d:"M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8"})]}),bc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),i.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),i.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),wc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),i.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),Sc=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o,nested:s})=>i.jsx(dc,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,$nested:s,onClick:()=>n==null?void 0:n({id:e,label:r}),children:i.jsxs(uc,{children:[i.jsx(fc,{$provider:o,children:vc(r.icon)?i.jsx(hc,{src:r.icon,alt:""}):o&&!s?i.jsx(wc,{}):i.jsx(bc,{})}),i.jsxs(pc,{children:[i.jsx(ro,{isMain:!0,children:r.title}),r.capacity!=null||r.plate?i.jsxs(gc,{children:[r.capacity!=null&&i.jsxs(mc,{title:`${r.capacity} pasajeros`,children:[i.jsx(xc,{}),r.capacity]}),r.plate&&i.jsx(yc,{title:r.plate,children:r.plate})]}):r.subtitle&&i.jsx(ro,{children:r.subtitle})]})]})}),Cc=Ye`
  0% { box-shadow: 0 0 0 0 var(--attention-ring); }
  70%, 100% { box-shadow: 0 0 0 5px transparent; }
`,dt=(e,r,t)=>{const{unassignedBorder:n,unassignedText:o,subcontractBorder:s,subcontractText:a,subcontractBg:l}=e.colors;return t==="warning"?{text:o,bg:n+"26",edge:n,bottom:n+"66",hover:n+"38"}:r==="subcontract"?{text:a,bg:s+"24",edge:s,bottom:s,hover:s+"33"}:r==="provider"?{text:a,bg:s+"2E",edge:s,bottom:s+"55",hover:s+"40"}:{text:"#5C8374",bg:"#E9EFEC",edge:"transparent",bottom:"#D4DFD9",hover:"#DAE6E0"}},kc=w.div`
  display: flex;
  align-items: center;
  gap: ${({$tone:e})=>e?"4px":"5px"};
  padding: ${({$tone:e,$variant:r})=>e?"0 7px 0 9px":r==="provider"?"0 11px 0 20px":"0 11px 0 9px"};
  height: 21px;
  color: ${({theme:e,$variant:r,$tone:t})=>dt(e,r,t).text};
  background: ${({theme:e,$variant:r,$tone:t})=>dt(e,r,t).bg};
  border-left: 3px solid ${({theme:e,$variant:r,$tone:t})=>dt(e,r,t).edge};
  border-top: ${({theme:e,$variant:r})=>r==="provider"?`1px solid ${e.colors.subcontractBorder}`:"none"};
  border-bottom: 1px solid ${({theme:e,$variant:r,$tone:t})=>dt(e,r,t).bottom};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({theme:e,$variant:r,$tone:t})=>dt(e,r,t).hover};
  }
`,Mc=w.span`
  font-size: ${({$variant:e})=>e==="provider"?"10.5px":"9.5px"};
  font-weight: ${({$variant:e})=>e==="provider"?700:750};
  letter-spacing: ${({$tone:e,$variant:r})=>e?"0.03em":r==="provider"?"0.01em":"0.07em"};
  text-transform: ${({$variant:e})=>e==="provider"?"none":"uppercase"};
  color: ${({theme:e,$variant:r,$tone:t})=>dt(e,r,t).text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`,$c=w.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:r})=>dt(e,r).text};
  flex-shrink: 0;
`,Dc=w.span`
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
  color: ${({theme:e,$tone:r})=>r==="warning"?e.mode==="dark"?"#1C1917":"#FFFFFF":"#2E8B63"};
  background: ${({theme:e,$tone:r})=>r==="warning"?e.mode==="dark"?e.colors.unassignedBorder:e.colors.unassignedText:"#2E8B6324"};
  --attention-ring: ${({theme:e})=>e.colors.unassignedBorder}99;
  ${({$pulse:e})=>e&&it`
      animation: ${Cc} 1.8s ease-out infinite;
      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `}
`,Ec=w.div`
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
`,Rt=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>{const s=o==="unassigned"?r===0?"ok":"warning":void 0;return i.jsxs(kc,{$variant:o,$tone:s,onClick:n,title:e,children:[i.jsx(Ec,{$collapsed:t,children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:i.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx(Mc,{$variant:o,$tone:s,children:e}),s?i.jsxs(Dc,{$tone:s,$pulse:s==="warning"&&t,children:[i.jsx("svg",{width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",children:s==="ok"?i.jsx("path",{d:"M2.5 6.5L5 9L9.5 3.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M6 1.5L11 10.5H1L6 1.5Z",stroke:"currentColor",strokeWidth:"1.4",strokeLinejoin:"round"}),i.jsx("path",{d:"M6 5V7.2",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"}),i.jsx("circle",{cx:"6",cy:"8.9",r:"0.75",fill:"currentColor"})]})}),r]}):i.jsx($c,{$variant:o,children:r})]})},_c=({data:e,categories:r,headerHeight:t,rows:n,onLoadNext:o,onLoadPrevious:s,pageNum:a,pagesAmount:l,searchInputValue:d,onSearchInputChange:c,onItemClick:u,collapsedGroups:f,fadingGroups:v,onToggleGroup:C,allGroupIds:b,onExpandAll:D,onCollapseAll:y,unassignedCount:L})=>{const[J,Z]=h.useState(!1),z=tt(),p=()=>Z($=>!$),m=r?[...r].sort(($,Y)=>$.maxPassengers-Y.maxPassengers):[],x=m.length>0,_=b.length>0,k=_&&f.size===b.length;_&&f.size;const S=e.filter($=>$.isUnassigned),j=z.unassigned??"No unit assigned",G=e.filter($=>$.isSubcontract),O=z.subcontract??"Subcontract",P=In(G),A=$=>{const Y=e.indexOf($);return i.jsx(Sc,{id:$.id,item:$.label,rows:n[Y],onItemClick:u,isSubcontract:$.isSubcontract,nested:!!$.provider},$.id)},F=$=>{const Y=e.filter(B=>!B.isSubcontract&&B.categoryId===$.id);if(Y.length===0)return null;const te=f.has($.id),ee=v.has($.id),H=$.name;return i.jsxs("div",{children:[i.jsx(Rt,{label:H,count:Y.length,isCollapsed:te||ee,onToggle:()=>C($.id),variant:"category"}),!te&&i.jsx(Qt,{$fading:ee,children:Y.map(A)})]},$.id)},N=e.filter($=>!$.isSubcontract&&!$.isUnassigned&&(!$.categoryId||!x));return i.jsxs(nc,{children:[i.jsxs(rc,{$height:t,children:[i.jsxs(oc,{children:[i.jsxs(ic,{isFocused:J,children:[i.jsx(sc,{placeholder:z.search,value:d,onChange:c,onFocus:p,onBlur:p}),i.jsx(Bn,{iconName:"search"})]}),_&&i.jsx(cc,{title:k?"Expand all":"Collapse all",onClick:k?D:y,$allCollapsed:k,children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:k?i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),i.jsx(no,{intent:"previous",isVisible:a!==0,onClick:s,icon:i.jsx(Bn,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]}),S.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Rt,{label:j,count:L,isCollapsed:f.has("__unassigned__")||v.has("__unassigned__"),onToggle:()=>C("__unassigned__"),variant:"unassigned"}),!f.has("__unassigned__")&&i.jsx(Qt,{$fading:v.has("__unassigned__"),children:S.map(A)})]}),x?m.map(F):N.map(A),x&&N.length>0&&N.map(A),G.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(Rt,{label:O,count:G.length,isCollapsed:f.has(Xe)||v.has(Xe),onToggle:()=>C(Xe),variant:"subcontract"}),!f.has(Xe)&&i.jsxs(Qt,{$fading:v.has(Xe),children:[P.loose.map(A),P.providers.map($=>{const Y=Jt($.id);return i.jsxs("div",{children:[i.jsx(Rt,{label:$.name,count:$.items.length,isCollapsed:f.has(Y)||v.has(Y),onToggle:()=>C(Y),variant:"provider"}),!f.has(Y)&&i.jsx(Qt,{$fading:v.has(Y),children:$.items.map(A)})]},Y)})]})]}),i.jsx(no,{intent:"next",isVisible:a!==l-1,onClick:o,icon:i.jsx(Bn,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]})},Tc=w.div`
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
`,Ac=Ye`
from{
    left: -100%;
}
to{
    left: 100%;
}`,Pc=w.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Ac} 1s infinite;
`,zn=({isLoading:e,position:r})=>e?i.jsx(Tc,{position:r,children:i.jsx(Pc,{})}):null,Ke=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:a,textYPos:l,label:d,font:c,isBottomRow:u,fillStyle:f,topText:v,bottomText:C,strokeStyle:b,labelBetweenCells:D}=e;t.beginPath();const y=b??(r.mode==="dark"?r.colors.border:"#E4EAE7");if(t.strokeStyle=y,t.setLineDash([]),d&&c&&l){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,a),D?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+a),t.lineTo(n+s,o+a),t.stroke(),t.moveTo(n+s/2,o+a),t.lineTo(n+s/2,o+a-5),t.stroke()):(t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke()),t.font=c;const L=n+s/2-t.measureText(d).width/2;t.textBaseline="middle",t.fillStyle=r.mode==="dark"?r.colors.textPrimary:"#183D3D",t.fillText(d,L,l)}if(u&&f&&v&&C){t.fillStyle=f,t.fillRect(n,o,s,a),t.beginPath(),t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke(),t.font=v.font;const L=n+s/2-t.measureText(v.label).width/2;t.fillStyle=v.color,t.fillText(v.label,L,v.y),t.font=C.font;const J=n+s/2-t.measureText(C.label).width/2;t.fillStyle=C.color,t.fillText(C.label,J,C.y)}},Ic=(e,r,t,n,o=lt)=>{const s=Ze+o,a=s+13,l=s+27;let d=0;for(let c=0;c<r;c++){const u=Lr(I(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"days")),f=u.isCurrentDay;if(Ke({ctx:e,x:d,y:s,width:Ce,height:yt,isBottomRow:!0,fillStyle:f?n.colors.currentDay:n.colors.gridBackground,topText:{y:a,label:f?"":u.dayName.replace(/\./g,"").toUpperCase(),font:`600 10px ${Ne}`,color:n.mode==="dark"?n.colors.placeholder:"#74897F"},bottomText:{y:l,label:`${u.dayOfMonth}`,font:f?`700 12px ${Ne}`:`700 13px ${Ne}`,color:f?n.colors.today:n.mode==="dark"?n.colors.textPrimary:"#183D3D"}},n),f){const b=d+Ce/2,D=a-13/2;e.save(),e.fillStyle=n.colors.today,e.beginPath(),e.roundRect?e.roundRect(b-30/2,D,30,13,5):e.rect(b-30/2,D,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Ne}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",b,D+13/2+.5),e.restore()}d+=Ce}},Oc=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*He;const s=Ze;let l=t.month;for(let d=0;d<r;d++){l>=Mr&&(l=0);const c=Or(t,d)*He;Ke({ctx:e,x:o,y:s,width:c,height:lt,textYPos:_r,label:I().month(l).format("MMMM").toUpperCase(),font:Re.bottomRow.number},n),o+=c,l++}},Lc=" ".repeat(98),Yc=(e,r,t)=>{const o=I(`${r.year}-${r.month+1}-${r.dayOfMonth}`);let s=-r.dayOfMonth*Ce+Ce;for(let a=0;a<Mr;a++){const l=o.add(a,"months"),d=l.daysInMonth()*Ce,c=l.format("MMMM YYYY").toUpperCase();Ke({ctx:e,x:s,y:0,width:d,height:Ze,textYPos:vn,label:`${c}${Lc}${c}`,font:`800 12px ${Ne}`},t),s+=d}},Nc=(e,r,t,n)=>{const o=7*Ce,s=Ze,a=e.canvas.width/o+o,l=r.weekOfYear;let d=0;for(let c=0;c<a;c++){const u=I(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let f=(l+c)%kr;f<=0&&(f+=kr),u!==1&&c===0&&(d=-u*Ce+Ce),Ke({ctx:e,x:d,y:s,width:o,height:lt,textYPos:_r,label:`${t.toUpperCase()} ${f}`,font:Re.middleRow},n),d+=o}},Fc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},Bc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},zc=(e,r,t,n,o)=>{const s=Vt-yt/1.6,a=Vt-yt/4.5,l=Ze+lt;let d=0;for(let c=0;c<r;c++){const u=I(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),f=u.isSame(I(),"week");Ke({ctx:e,x:d,y:l,width:vt,height:yt,isBottomRow:!0,fillStyle:f?o.colors.today+"26":Fc({isCurrent:f,variant:"yearView"},o),topText:{y:s,label:u.isoWeek().toString(),font:f?`700 14px ${Ne}`:Re.bottomRow.name,color:f?o.colors.today:Bc({isCurrent:f},o)},bottomText:{y:a,label:n.toUpperCase(),font:Re.middleRow,color:o.colors.placeholder}},o),d+=vt}},Hc=(e,r,t,n)=>{const s=r.year,a=e.canvas.width*2;let l=0,d=0,c=(Ir(s)-t+1)*He,u=0;for(;l+u<=a;)d>0&&(c=Ir(s+d)*He),u+c>a&&d>0&&(c=Math.ceil((a-u)/He)*He),Ke({ctx:e,x:l,y:0,width:c,height:Ze,textYPos:vn,label:(s+d).toString(),font:Re.topRow},n),l+=c,u+=c,d++},Wc=(e,r,t,n)=>{const o=Math.floor(r/Gt)+2,s=Gt*_e;let d=-I(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*_e+.5*_e;for(let c=0;c<o;c++){const u=I(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();Ke({ctx:e,x:d,y:xt,width:s,height:At,textYPos:xt+At/2+2,label:u,font:Re.bottomRow.number},n),d+=s}},jc=(e,r,t,n)=>{const o=Math.ceil(r/Gt),s=I(`${t.year}-${t.month+1}-${t.dayOfMonth}`),a=s.add(o-1,"days"),l=s.month(),d=a.add(1,"day").month(),c=l===d?1:2;let u=.5*_e;for(let f=0;f<c;f++){const v=I(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),b=I(`${t.year}-${t.month+f+1}-01T:23:59:59`).endOf("month"),D=b.format("MMMM").toUpperCase(),y=b.diff(v,"hour")+1,L=f===0?y*_e:r*_e;Ke({ctx:e,x:u,y:0,width:L,height:xt,textYPos:vn,label:D,font:Re.topRow},n),u+=L}},Zc=(e,r,t,n)=>{let o=0;const s=xt+At,a=I(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),l=_e;for(let d=0;d<r;d++){const c=a.add(d,"hours").format("h:00a").toUpperCase();Ke({ctx:e,x:o,y:s,width:l,height:yn,label:c,font:Re.bottomRow.hoursInDay,textYPos:xt+At+yn/2+2,labelBetweenCells:!0},n),o+=_e}},Vc=(e,r,t,n,o,s,a,l=!0)=>{switch(r){case 0:Hc(e,n,s,a),Oc(e,t,n,a),zc(e,t,n,o,a);break;case 1:Yc(e,n,a),l&&Nc(e,n,o,a),Ic(e,t,n,a,l?lt:0);break;case 2:jc(e,t,n,a),Wc(e,t,n,a),Zc(e,t,n,a);break}},Gc=w.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,Uc=w.div`
  position: sticky;
  left: 0;
  width: ${({$width:e})=>e}px;
  z-index: 3;
`,Xc=w.div`
  height: ${({$height:e})=>e??Vt}px;
  display: block;
`,Kc=w.canvas``,Jc={transfer:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 8h13l-3-3"}),i.jsx("path",{d:"M20 16H7l3 3"})]}),sun:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),i.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),i.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:i.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 3 2 20h20z"}),i.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),i.jsx("path",{d:"M12 7.5V12l3 2"})]})},Fe=({name:e,className:r,strokeWidth:t=2})=>i.jsx("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:Jc[e]}),qc=w.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Pe+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,oo=w.span`
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
`,en=w.span`
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
`,Qc=w.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,Rc=w.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,el=w.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,tl=w.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,nl=w.span`
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
`,rl=[{label:"Sin chofer",stripe:"#9AA4B2",icon:"warn",color:"#9AA4B2"},{label:"Sin avisar",stripe:"#D98A22",icon:"warn",color:"#D98A22"},{label:"Notificado",stripe:"#2C6BB0",icon:"clock",color:"#2C6BB0"},{label:"Confirmado",stripe:"#2E8B63",icon:"check",color:"#2E8B63"}],ol=()=>i.jsxs(qc,{children:[i.jsx(oo,{children:"Leyenda"}),i.jsxs(en,{children:[i.jsx(Fe,{name:"transfer"})," Transfer"]}),i.jsxs(en,{children:[i.jsx(Fe,{name:"sun"})," Gira 1 día"]}),i.jsxs(en,{children:[i.jsx(Fe,{name:"tour"})," Gira multidía"]}),i.jsxs(en,{children:[i.jsx(Qc,{children:"SUB"})," Subcontrato"]}),i.jsx(Rc,{}),i.jsxs(oo,{children:["Estado ",i.jsx("em",{children:"franja izq. + punto esq."})]}),rl.map(e=>i.jsxs(el,{children:[i.jsx(tl,{style:{background:e.stripe}}),i.jsx(nl,{style:{color:e.color},children:i.jsx(Fe,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),sl=h.forwardRef(function({zoom:r,topBarWidth:t,showThemeToggle:n,toggleTheme:o},s){const{week:a}=tt(),{date:l,cols:d,dayOfYear:c,startDate:u,config:f}=Ve(),v=h.useRef(null),C=Zt(),b=f.showWeekRow!==!1,D=r===2?Ls:r===1&&!b?Ze+yt:Vt,y=h.useCallback(L=>{const J=Tn(),Z=D+1;zr(L,J,Z),Vc(L,r,d,u,a,c,C,b)},[d,c,u,a,r,C,b,D]);return h.useEffect(()=>{if(!v.current)return;const L=v.current.getContext("2d");if(!L)return;const J=()=>y(L);return window.addEventListener("resize",J),()=>window.removeEventListener("resize",J)},[y]),h.useEffect(()=>{const L=v.current;if(!L)return;L.style.letterSpacing="1px";const J=L.getContext("2d");J&&y(J)},[l,r,y]),i.jsxs(Gc,{ref:s,children:[(f.showTopbar!==!1||f.showLegend!==!1)&&i.jsxs(Uc,{$width:t,children:[f.showTopbar!==!1&&i.jsx(Ca,{width:t,showThemeToggle:n,toggleTheme:o}),f.showLegend!==!1&&i.jsx(ol,{})]}),i.jsx(Xc,{$height:D,id:$r,children:i.jsx(Kc,{ref:v})})]})}),il=(e,r,t)=>{let n;switch(t){case 0:n=He;break;case 2:n=_e;break;default:n=Ce}const s=e.startDate.startOf("day"),a=e.endDate.startOf("day"),l=r.startDate.startOf("day"),d=r.endDate.startOf("day"),c=()=>{let u;switch(t){case 2:u=(e.startDate.diff(r.startDate,"minute")/$e+1)*n-n/2;break;default:u=s.diff(l,"day")*n}return Math.max(0,u)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(e.startDate,"minute")/$e*n,50);break;default:u=Math.max(a.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(r.startDate,"minute")/$e*n+.5*n,50);break;default:u=Math.max(a.diff(l,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(e.startDate,"minute")/$e*n,50);break;default:u=Math.max(d.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(r.startDate,"minute")/$e*n,50);break;default:u=Math.max(d.diff(l,"day")*n+n,50)}return{x:c(),width:u}}return{x:c(),width:50}},al=(e,r,t,n,o,s)=>{const a=e*he+Ys,l=r.hour(),d=t.hour();let c,u,f,v;switch(s){case 2:{c=I(n),u=I(o),f=I(r).hour(l).minute(0),v=I(t).hour(d).minute(0);break}default:{c=I(n).hour(0).minute(0),u=I(o).hour(23).minute(59),f=r,v=t;break}}return{...il({startDate:c,endDate:u},{startDate:f,endDate:v},s),y:a}},so=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"},io={sin_chofer:{icon:"warn",color:"#9AA4B2",label:"Sin chofer"},sin_avisar:{icon:"warn",color:"#D98A22",label:"No notificado al chofer"},programado:{icon:"warn",color:"#C2A878",label:"Notificación programada"},notificado:{icon:"clock",color:"#2C6BB0",label:"Notificado"},confirmado:{icon:"check",color:"#2E8B63",label:"Confirmado"}},cl={confirmed:{icon:"check",color:"#2E8B63",label:"Subcontrato confirmado"},unconfirmed:{icon:"clock",color:"#D98A22",label:"Subcontrato sin confirmar"}};w.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,w.p`
  ${mt}
  ${ct}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const ll=Ye`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,dl=Ye`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`,ul=w.button`
  ${mt}
  position: absolute;
  height: ${Ut}px;
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
    animation: ${ll} 180ms ease-out;
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
  ${({$exiting:e})=>e&&it`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${dl} 190ms ease-out forwards;
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
`,fl=w.div`
  position: sticky;
  left: ${Pe+4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
  padding: 4px 10px;
`,ao=w.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,hl=w.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,pl=w.span`
  ${ct}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,gl=w.span`
  ${ct}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,ml=w.span`
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
`,yl=w.div`
  ${ct}
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
`,co=w.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,lo=w.span`
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
`,uo=w.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,Hn={confirmed:{ring:"#2E8B63",glow:"rgba(46, 139, 99, 0.45)"},notified:{ring:"#2C6BB0",glow:"rgba(44, 107, 176, 0.45)"},lost:{ring:"#C6483D",glow:"rgba(198, 72, 61, 0.45)"}},vl=Ye`
  0% { box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent; }
  12% { box-shadow: 0 0 0 3px var(--pulse-ring), 0 0 16px 4px var(--pulse-glow); }
  100% { box-shadow: 0 0 0 1.5px var(--pulse-ring), 0 0 0 0 transparent; }
`,xl=Ye`
  0%, 80% { opacity: 1; }
  100% { opacity: 0; }
`,bl=Ye`
  0% { transform: scale(0.4); opacity: 0; }
  60% { transform: scale(1.18); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`,wl=Ye`
  0% { transform: scale(0.6); opacity: 0.65; }
  100% { transform: scale(2.2); opacity: 0; }
`,Sl=w.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  --pulse-ring: ${({$kind:e})=>Hn[e].ring};
  --pulse-glow: ${({$kind:e})=>Hn[e].glow};
  animation:
    ${vl} 2160ms ease-out var(--pulse-delay, 0ms) both,
    ${xl} 9600ms linear var(--pulse-delay, 0ms) both;
`,Cl=w.span`
  position: relative;
  display: inline-flex;
  --pulse-ring: ${({$kind:e})=>Hn[e].ring};
  @media (prefers-reduced-motion: no-preference) {
    animation: ${bl} 420ms cubic-bezier(0.34, 1.56, 0.64, 1) var(--pulse-delay, 0ms) both;
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
      animation: ${wl} 750ms cubic-bezier(0.22, 1, 0.36, 1) var(--pulse-delay, 0ms);
    }
    &::after {
      animation-delay: calc(var(--pulse-delay, 0ms) + 170ms);
    }
  }
`,kl=w.div`
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
`,fo=w.span`
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
`,Ml=Ye`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`,$l=w.div`
  position: absolute;
  height: ${Ut}px;
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
    animation: ${Ml} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`,Dl=w.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`,El=w.div`
  ${ct}
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
`,_l=w.div`
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
`,Tl=w.span`
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
`,Al=w.span`
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
`,Pl=34,Wn=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onTileContextMenu:s,onDragStart:a,isDragging:l=!1,isDraggable:d=!0,yOffset:c=0,exiting:u=!1,highlighted:f=!1,dimmed:v=!1,leaving:C=!1,ghost:b=!1,ghostBadge:D="",pulse:y})=>{const{date:L}=Ve(),J=Kt(L,t),{y:Z,x:z,width:p}=al(e,J.startDate,J.endDate,r.startDate,r.endDate,t),{colors:m}=Zt(),x=h.useRef(null),_=I(r.startDate).isSame(I(r.endDate),"day"),k=r.eventType===Pt.Tour,S=r.eventType===Pt.Transfer,j=_&&(k||S);if(b)return i.jsxs($l,{style:{left:`${z}px`,top:`${Z+c}px`,width:`${p}px`},children:[i.jsxs(Dl,{children:[i.jsxs(El,{children:[i.jsx(Fe,{name:S?"transfer":"tour"}),r.title]}),i.jsxs(_l,{children:[i.jsx(Fe,{name:"check",strokeWidth:2.6}),"flota propia"]})]}),D&&i.jsx(Tl,{children:D})]});const G=ee=>{ee.button===0&&(x.current={x:ee.clientX,y:ee.clientY},d&&a&&(ee.preventDefault(),a(r,ee)))},O=ee=>{s&&(ee.preventDefault(),s(r,{x:ee.clientX,y:ee.clientY}))},P=ee=>{if(x.current){const H=Math.abs(ee.clientX-x.current.x),B=Math.abs(ee.clientY-x.current.y);Math.sqrt(H*H+B*B)<=5&&(o==null||o(r)),x.current=null}else o==null||o(r)},A={left:`${z}px`,top:`${Z+c}px`,backgroundColor:`${r.bgColor??m.defaultTile}`,width:`${p}px`,color:so(r.bgColor??"")},F=!n&&r.readiness?io[r.readiness]:null,N=n&&r.subcontractConfirmed===!1,$=y?{"--pulse-delay":`${y.delayMs}ms`}:void 0,Y=ee=>y?i.jsx(Cl,{$kind:y.kind,style:$,children:ee},`${y.key}-${r.readiness??""}-${String(r.subcontractConfirmed)}`):ee,te=ee=>i.jsxs(ul,{"data-segment-id":r.segmentId,style:A,onClick:P,onMouseDown:G,onContextMenu:O,onDragStart:H=>H.preventDefault(),isDraggable:d,isDragging:l,$unconfirmed:N,$exiting:u,$highlighted:f,$dimmed:v,$leaving:C,$pulsing:!!y,children:[y&&i.jsx(Sl,{$kind:y.kind,style:$,"aria-hidden":!0},y.key),C&&i.jsx(Al,{children:"Sub"}),ee]});return te(j?i.jsxs(i.Fragment,{children:[(n||F)&&i.jsx(co,{$sm:!0,children:Y(n?i.jsx(uo,{children:"SUB"}):F&&i.jsx(lo,{$sm:!0,style:{color:F.color},children:i.jsx(Fe,{name:F.icon,strokeWidth:F.icon==="check"?2.6:2.2})}))}),i.jsxs(kl,{$transfer:S,children:[i.jsx(Fe,{name:S?"transfer":"sun",strokeWidth:2.4}),p>=Pl&&i.jsxs(i.Fragment,{children:[i.jsx(fo,{children:I(r.startDate).format("h:mm A")}),!S&&i.jsx(fo,{$end:!0,children:I(r.endDate).format("h:mm A")})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(co,{children:(n||F)&&Y(n?i.jsx(uo,{children:"SUB"}):F&&i.jsx(lo,{style:{color:F.color},children:i.jsx(Fe,{name:F.icon,strokeWidth:F.icon==="check"?2.6:2.2})}))}),r.bookingNumber&&i.jsx(ml,{children:r.bookingNumber}),i.jsxs(fl,{children:[i.jsxs(ao,{$pad:!0,children:[i.jsx(hl,{children:i.jsx(Fe,{name:S?"transfer":"tour"})}),i.jsx(pl,{children:r.title})]}),r.subtitle&&i.jsx(ao,{children:i.jsx(gl,{children:r.subtitle})}),r.driver&&i.jsxs(yl,{children:[i.jsx(Fe,{name:"person"}),r.driver]})]})]}))},ho=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Le},Il=e=>({segmentId:e.segmentId,reservationId:e.reservationId,startDate:e.startDate,endDate:e.endDate,occupancy:0,title:e.title,bookingNumber:"",eventType:e.eventType}),Ol=({data:e,zoom:r,onTileClick:t,onTileContextMenu:n,onDragStart:o,isDraggable:s,draggingEventId:a,separatorRowIndices:l=[],fadingUnitIds:d,highlightedSegmentId:c,focusedUnitIds:u,leavingSegmentIds:f,ghostProject:v})=>{const C=Ha(),{nodes:b,liveMap:D}=h.useMemo(()=>{const m=new Map,x=!!u&&u.length>0;let _=0;return{nodes:e.map((S,j)=>{j>0&&(_+=Math.max(e[j-1].data.length,1));const G=!!(d!=null&&d.has(S.id)),O=x&&!u.includes(S.id),P=ho(_,l),A=v&&S.id===v.targetUnitId?i.jsx(Wn,{row:_,data:Il(v),zoom:r,yOffset:P,isDragging:!1,isDraggable:!1,ghost:!0,ghostBadge:v.badge},`ghost-${S.id}`):null;if(!S.data.some(N=>N.length>0))return A?[A]:[];const F=S.data.map((N,$)=>N.map(Y=>{const te=a===Y.segmentId,ee=s?s(Y):!1,H=$+_,B=ho(H,l);return m.set(Y.segmentId,{project:Y,absoluteRow:H,yOffset:B,isSubcontract:!!S.isSubcontract,faded:G}),i.jsx(Wn,{row:H,data:Y,zoom:r,isSubcontract:S.isSubcontract,onTileClick:t,onTileContextMenu:n,onDragStart:o,isDragging:te,isDraggable:ee,yOffset:B,exiting:G,highlighted:c!=null&&Y.segmentId===c,dimmed:O,leaving:!!(f!=null&&f.includes(Y.segmentId)),pulse:C.get(Y.segmentId)},Y.segmentId)}));return A?[...F,[A]]:F}).flat(2),liveMap:m}},[e,t,n,r,o,s,a,l,d,c,u,f,v,C]),y=h.useRef(new Map),L=h.useRef([]),[J,Z]=h.useState([]);h.useEffect(()=>()=>L.current.forEach(clearTimeout),[]),h.useEffect(()=>{const m=y.current;y.current=D;const x=[];if(m.forEach((S,j)=>{!D.has(j)&&!S.faded&&x.push(S)}),Z(S=>{let j=S.filter(G=>!D.has(G.project.segmentId));for(const G of x)j.some(O=>O.project.segmentId===G.project.segmentId)||(j=[...j,G]);return j}),!x.length)return;const _=new Set(x.map(S=>S.project.segmentId)),k=setTimeout(()=>{Z(S=>S.filter(j=>!_.has(j.project.segmentId)))},220);L.current.push(k)},[D]);const z=[];y.current!==D&&y.current.forEach((m,x)=>{!D.has(x)&&!m.faded&&!J.some(_=>_.project.segmentId===x)&&z.push(m)});const p=[...J,...z].filter(m=>!D.has(m.project.segmentId)).map(m=>i.jsx(Wn,{row:m.absoluteRow,data:m.project,zoom:r,isSubcontract:m.isSubcontract,yOffset:m.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},m.project.segmentId));return i.jsx(i.Fragment,{children:[...b,...p]})};w.div`
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
`;const Ll=w.div`
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
`,Yl=w.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Nl=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`,Fl=w.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Bl=w.span`
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
`,po=w.div`
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
`,zl=w.div`
  ${mt}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Hl=w.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`,Wl=w.div`
  padding: 10px 12px;
`,jl=w.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,go=w.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,mo=w.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,yo=w.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,vo=w.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,xo=w.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Zl=w.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Vl=w.div`
  min-width: 0;
`,Gl=w.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,Ul=w.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`,bo=w.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Ot=w.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,Lt=w.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Yt=w.div`
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
`;w.div``,w.span``,w.span``,w.div``,w.div``,w.span``,w.span``,w.div``,w.div``,w.span``,w.span``,w.div``,w.div``,w.div``,w.span``,w.div``,w.div``,w.div``,w.div``,w.p``,w.span``;const Xl={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",salida:"Salida",destino:"Destino",regreso:"Regreso",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Kl=({tooltipData:e,visible:r=!0})=>{const{mouseCoords:t,reservationData:n}=e,o=h.useRef(null),[s,a]=h.useState("below"),l=tt(),d={...Xl,...l.tooltip};h.useLayoutEffect(()=>{if(!o.current||!t)return;const y=o.current,{width:L,height:J}=y.getBoundingClientRect(),Z=y.parentElement;if(!Z)return;const z=Z.getBoundingClientRect(),p=12,m=4,x=z.height-t.y,_=z.width-t.x;let k=t.x+p,S=t.y+p,j="below";_<L+p&&(k=t.x-L-p),x<J+p&&(S=t.y-J-p,j="above"),k=Math.max(m,Math.min(k,z.width-L-m)),S=Math.max(m,Math.min(S,z.height-J-m)),a(j),y.style.left=`${k}px`,y.style.top=`${S}px`},[t]);const c=n.reservationType===Pt.Tour,u=c&&n.isOneDayEvent,f=c?u?"sun":"tour":"transfer",v=c?u?d.oneDay:d.tour:d.transfer,C=n.readiness?io[n.readiness]:null,b=n.subcontractConfirmed===void 0?null:cl[n.subcontractConfirmed?"confirmed":"unconfirmed"],D=[...n.subcontractConfirmed?n.subcontractDetails??[]:[],n.groupName&&{label:d.groupName,value:n.groupName},n.driver&&{label:d.driver,value:n.driver},n.passengers&&{label:d.passengers,value:String(n.passengers)},n.flightNumber&&{label:d.flightNumber,value:n.flightNumber}].filter(Boolean);return i.jsxs(Ll,{ref:o,$position:s,$visible:r,children:[i.jsxs(Yl,{children:[i.jsxs(Nl,{children:[i.jsx(Fl,{children:n.bookingNumber}),i.jsxs(Bl,{children:[i.jsx(Fe,{name:f,strokeWidth:2.4}),v]})]}),i.jsx(zl,{children:n.eventName}),n.client&&i.jsx(Hl,{children:n.client}),C&&i.jsxs(po,{style:{color:C.color},children:[i.jsx(Fe,{name:C.icon,strokeWidth:C.icon==="check"?2.6:2.2}),n.readinessNote||C.label]}),b&&i.jsxs(po,{style:{color:b.color},children:[i.jsx(Fe,{name:b.icon,strokeWidth:b.icon==="check"?2.6:2.2}),b.label]})]}),i.jsxs(Wl,{children:[i.jsxs(jl,{children:[i.jsxs(go,{children:[i.jsx(mo,{children:d.startDate}),i.jsxs(yo,{children:[i.jsx(vo,{children:n.startDate}),i.jsx(xo,{children:n.startTime})]})]}),c&&n.endDate&&i.jsxs(go,{$isEnd:!0,children:[i.jsx(mo,{children:d.endDate}),i.jsxs(yo,{children:[i.jsx(vo,{children:n.endDate}),i.jsx(xo,{children:n.endTime})]})]})]}),D.length>0&&i.jsx(Zl,{children:D.map((y,L)=>i.jsxs(Vl,{children:[i.jsx(Gl,{children:y.label}),i.jsx(Ul,{children:y.value})]},L))}),(n.departureAddress||n.destinationAddress||n.returnAddress)&&i.jsxs(bo,{children:[n.departureAddress&&i.jsxs(Ot,{children:[i.jsx(Lt,{children:d.salida}),i.jsx(Yt,{children:n.departureAddress})]}),n.destinationAddress&&i.jsxs(Ot,{children:[i.jsx(Lt,{children:d.destino}),i.jsx(Yt,{children:n.destinationAddress})]}),n.returnAddress&&i.jsxs(Ot,{children:[i.jsx(Lt,{children:d.regreso}),i.jsx(Yt,{children:n.returnAddress})]})]}),(n.serviceNotes||n.reservationNotes)&&i.jsxs(bo,{children:[n.serviceNotes&&i.jsxs(Ot,{children:[i.jsx(Lt,{children:d.serviceNotes}),i.jsx(Yt,{children:n.serviceNotes})]}),n.reservationNotes&&i.jsxs(Ot,{children:[i.jsx(Lt,{children:d.reservationNotes}),i.jsx(Yt,{children:n.reservationNotes})]})]})]})]})};w.div`
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
`;const Jl=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,ql=w.div`
  position: absolute;
  height: ${Ut}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:r,$animateToY:t})=>e&&r!==void 0&&t!==void 0?`transform: translate3d(${r}px, ${t}px, 0);`:""}
`,Ql=w.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,wo=w.p`
  ${mt}
  ${ct}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,Rl=w.p`
  ${mt}
  ${ct}
`,ed=w.div`
  position: sticky;
  left: ${Pe+16}px;
  overflow: hidden;
`,td=w.div`
  position: absolute;
  height: ${Ut}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,nd=w.div`
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
`,rd=w.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,od=w.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,sd=w.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,So=w.div`
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
`,Co=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,ko=w.div`
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
`,Mo=w.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,jn=w.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,Zn=w.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,Ct=w.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,$o=w.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,id=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:a,resourceOnly:l,separatorRowIndices:d=[]})=>{const c=tt(),u=z=>{let p=0;for(const m of d)m<=z&&p++;return z*he+p*Le},[f,v]=h.useState(null),[C,b]=h.useState(0),D=h.useCallback((z=400,p=300)=>{const x=t.width,_=48,k=document.getElementById("react-scheduler");if(!k)return{x:r.x+x+16,y:r.y};const S=k.scrollLeft,j=k.scrollTop,G=k.clientWidth,O=k.clientHeight,P=r.x-S,A=r.y-j,F={left:Pe+16,right:G-16,top:16,bottom:O-16},N=F.right-(P+x),$=P-F.left,Y=F.bottom-(A+_),te=A-F.top;let ee,H;return N>=z+16?ee=P+x+16:$>=z+16?ee=P-z-16:N>=$?(ee=P+x+16,ee+z>F.right&&(ee=F.right-z)):(ee=P-z-16,ee<F.left&&(ee=F.left)),Y>=p+16?H=A+_+16:te>=p+16?H=A-p-16:Y>=te?(H=A+_+16,H+p>F.bottom&&(H=F.bottom-p)):(H=A-p-16,H<F.top&&(H=F.top)),ee=Math.max(F.left,Math.min(ee,F.right-z)),H=Math.max(F.top,Math.min(H,F.bottom-p)),{x:ee+S,y:H+j}},[r.x,r.y,t.width]);h.useEffect(()=>{s==="dragging"&&e&&C===0?b(r.x):s==="idle"&&b(0)},[s,e,r.x,C]),h.useEffect(()=>{v(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const y=h.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const z=[];let p=0;for(const m of a){const x=Math.max(m.data.length,1);if(m.capacity!==void 0&&e.totalPassengers>m.capacity)for(let _=0;_<x;_++)z.push(p+_);p+=x}return z},[e,a,s]);if(!e||s==="idle"||s==="potential")return null;const L=s==="animating",J=so(e.bgColor??""),Z=()=>{if(!n)return"";const z=I(n.startDate).format("MMM D, HH:mm"),p=I(n.endDate).format("HH:mm");return`${z} - ${p}`};return i.jsxs(Jl,{children:[y.map(z=>i.jsx(od,{style:{top:`${u(z)}px`,height:`${he}px`}},z)),n&&s==="dragging"&&i.jsx(rd,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${u(n.resourceIndex)}px`,height:`${he}px`}}),n&&s==="dragging"&&!l&&i.jsxs(i.Fragment,{children:[i.jsx(td,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(he-48)/2}px`,width:`${t.width}px`}}),i.jsx(nd,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${u(n.resourceIndex)+(he-48)/2}px`},children:Z()})]}),n&&s==="dragging"&&l&&i.jsx(sd,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${u(n.resourceIndex)}px`,height:`${he}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const z=D(400,300);return i.jsxs(So,{style:{left:`${z.x}px`,top:`${z.y}px`},children:[i.jsxs(Co,{children:[i.jsx(ko,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),i.jsx(Mo,{children:n.conflicts.map((p,m)=>{const x=I(n.startDate).format("YYYY-MM-DD"),_=I(n.endDate).format("YYYY-MM-DD"),k=I(p.event.startDate).format("YYYY-MM-DD"),S=I(p.event.endDate).format("YYYY-MM-DD"),j=I(p.conflictStart).format("YYYY-MM-DD"),G=I(p.conflictEnd).format("YYYY-MM-DD"),O=x!==_,P=k!==S,A=j!==G,F=O?I(n.startDate).format("MMM D, h:mm A"):I(n.startDate).format("h:mm A"),N=O?I(n.endDate).format("MMM D, h:mm A"):I(n.endDate).format("h:mm A"),$=P?I(p.event.startDate).format("MMM D, h:mm A"):I(p.event.startDate).format("h:mm A"),Y=P?I(p.event.endDate).format("MMM D, h:mm A"):I(p.event.endDate).format("h:mm A"),te=A?I(p.conflictStart).format("MMM D, h:mm A"):I(p.conflictStart).format("h:mm A"),ee=A?I(p.conflictEnd).format("MMM D, h:mm A"):I(p.conflictEnd).format("h:mm A"),H=A?"":I(p.conflictStart).format("MMM D"),B=n.startDate.getTime(),K=n.endDate.getTime(),re=p.event.startDate.getTime(),M=p.event.endDate.getTime(),X=B>=re&&B<M,T=K>re&&K<=M,R=B<=re&&K>=M,V=re<=B&&M>=K;let W=!1,g=!1,q=!1,E=!1,U="";return R||V?(W=!0,g=!0,q=!0,E=!0,U=`⚠️ ${c.conflicts.changeBoth}`):X&&T?(W=!0,g=!0,q=!0,E=!0,U=`⚠️ ${c.conflicts.changeBoth}`):X?(W=!0,E=!0,U=`⚠️ ${c.conflicts.changeStart}`):T&&(g=!0,q=!0,U=`⚠️ ${c.conflicts.changeEnd}`),i.jsxs(jn,{children:[i.jsxs(Zn,{children:[c.conflicts.conflictsWith,": ",p.event.title,p.event.subtitle&&` - ${p.event.subtitle}`]}),i.jsxs(Ct,{children:[i.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",W?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:F}):F," ",c.conflicts.to," ",g?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:N}):N]}),i.jsxs(Ct,{children:[i.jsx("strong",{children:p.event.title})," ",c.conflicts.currentlyAt,":"," ",q?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:$}):$," ",c.conflicts.to," ",E?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:Y}):Y]}),i.jsxs($o,{children:[c.conflicts.conflictTime,": ",H&&`${H}, `,te," - ",ee]}),U&&i.jsx(Ct,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:U})]},m)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const z=D(400,400);return i.jsxs(So,{style:{left:`${z.x}px`,top:`${z.y}px`,borderColor:"#4CAF50"},children:[i.jsxs(Co,{style:{color:"#2E7D32"},children:[i.jsx(ko,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),i.jsxs(Mo,{children:[(()=>{const p=n.nearbyEvents.some(k=>k.position==="before"),m=n.nearbyEvents.some(k=>k.position==="after"),x=I(n.startDate).format("h:mm A"),_=I(n.endDate).format("h:mm A");return i.jsxs(jn,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[i.jsxs(Zn,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),i.jsxs(Ct,{style:{fontWeight:600},children:[I(n.startDate).format("MMM D"),":"," ",p?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:x}):x," ",c.conflicts.to," ",m?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:_}):_]}),i.jsx(Ct,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),n.nearbyEvents.map((p,m)=>{const x=I(p.event.startDate).format("YYYY-MM-DD"),_=I(p.event.endDate).format("YYYY-MM-DD"),k=x!==_,S=k?I(p.event.startDate).format("MMM D, h:mm A"):I(p.event.startDate).format("h:mm A"),j=k?I(p.event.endDate).format("MMM D, h:mm A"):I(p.event.endDate).format("h:mm A"),G=I(p.event.startDate).format("MMM D"),O=Math.floor(p.timeGap/(1e3*60*60)),P=Math.floor(p.timeGap%(1e3*60*60)/(1e3*60)),A=O>0?`${O}h ${P}m`:`${P}m`,F=p.position==="after",N=p.position==="before";return i.jsxs(jn,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[i.jsxs(Zn,{style:{color:"#1B5E20"},children:[p.event.title,p.event.subtitle&&` - ${p.event.subtitle}`]}),i.jsxs(Ct,{children:[!k&&`${G}: `,F?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:S}):S," ",c.conflicts.to," ",N?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:j}):j]}),i.jsxs($o,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[A," ",p.position==="before"?c.conflicts.before:c.conflicts.after]})]},m)})]})]})})(),i.jsx(ql,{$isAnimating:L,$animateToX:f==null?void 0:f.x,$animateToY:f==null?void 0:f.y,style:{left:L?`${(f==null?void 0:f.x)??0}px`:"0",top:L?`${(f==null?void 0:f.y)??0}px`:"0",transform:L?void 0:`translate3d(${l?C:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:J},children:i.jsx(Ql,{children:i.jsxs(ed,{children:[i.jsx(wo,{$bold:!0,children:e.title}),e.subtitle&&i.jsx(wo,{children:e.subtitle}),e.description&&i.jsx(Rl,{children:e.description})]})})})]})},ad=Ye`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,cd=w.div`
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
  animation: ${ad} 1.5s ease-in-out infinite;
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
`,ld=({selectionBox:e,isSelecting:r})=>!e||!r?null:i.jsx(cd,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),dd=Ye`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ud=w.div`
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
  animation: ${dd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,fd=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,hd=w.span`
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
`,pd=w.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,gd=w.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;w.div`
  display: none;
`,w.div`
  display: none;
`,w.button`
  display: none;
`;const md=w.div`
  display: flex;
  gap: 8px;
`,Do=w.button`
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
`,yd=({selections:e,onConfirm:r,onClear:t})=>{var b;const o=tt().multiSelect,s=h.useMemo(()=>e.filter(D=>D.hasConflict).length,[e]),a=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,d=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",u=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",f=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((b=o==null?void 0:o.conflictsWarning)==null?void 0:b.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const v=s>0,C=i.jsxs(ud,{$hasConflicts:v,"data-multi-select-ui":!0,children:[i.jsxs(fd,{children:[i.jsxs(hd,{$hasConflicts:v,children:[e.length," ",a]}),v&&i.jsxs(pd,{children:["⚠️ ",f]}),i.jsx(gd,{children:l})]}),i.jsxs(md,{children:[i.jsxs(Do,{variant:"secondary",onClick:t,children:["✕ ",d]}),i.jsx(Do,{variant:"primary",$hasConflicts:v,onClick:r,children:v?`⚠️ ${u}`:`✓ ${c}`})]})]});return Ao.createPortal(C,document.body)},vd=Ye`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,xd=w.div`
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
  animation: ${vd} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&it`
      border-style: dashed;
    `}
`,bd=w.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,wd=w.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,Sd=w.button`
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
`,Cd=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:a=[]})=>{const[l,d]=h.useState(null),[c,u]=h.useState({x:0,y:0}),f=h.useRef(null),v=h.useMemo(()=>{switch(t){case 0:return He*7;case 1:return Ce;case 2:return _e;default:return Ce}},[t]),C=h.useMemo(()=>I().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),b=h.useMemo(()=>e.map((m,x)=>{let _=0,k=!1;for(const $ of r){if($.id===m.resourceId){k=!0;break}_+=Math.max($.data.length,1)}if(!k)return null;const S=I(m.startDate),j=I(m.endDate);let G,O;switch(t){case 0:G=Math.floor(S.diff(C,"days")/7),O=Math.max(1,Math.ceil(j.diff(S,"days")/7)+1);break;case 1:G=S.diff(C,"days"),O=Math.max(1,j.diff(S,"days")+1);break;case 2:G=S.diff(C,"hours"),O=Math.max(1,j.diff(S,"hours")+1);break;default:G=0,O=1}const P=G*v;let A=0;for(const $ of a)$<=_&&A++;const F=_*he+A*Le,N=O*v;return{index:x,selection:m,x:P,y:F,width:N,height:he}}),[e,r,t,C,v]),D=(m,x)=>{const _=I(m).format("MMM D"),k=I(x).format("MMM D");return _===k?_:`${_} - ${k}`},y=m=>!m.hasConflict||!m.conflicts?"":`⚠️ Conflicts with:
${m.conflicts.map(_=>{const k=(_.overlapDuration/36e5).toFixed(1);return`• ${_.event.title} (${k}h overlap)`}).join(`
`)}`,L=h.useCallback(m=>{let x=0;for(const _ of r){const k=Math.max(_.data.length,1);if(m>=x*he&&m<(x+k)*he)return{resourceId:_.id,resourceLabel:_.label};x+=k}return null},[r]),J=h.useCallback(m=>{const x=Math.floor(m/v);switch(t){case 0:return C.add(x*7,"days").toDate();case 1:return C.add(x,"days").toDate();case 2:return C.add(x,"hours").toDate();default:return C.toDate()}},[t,C,v]),Z=h.useCallback((m,x)=>{!s||(m.preventDefault(),m.stopPropagation(),!b[x])||(f.current={x:m.clientX,y:m.clientY},d(x),u({x:0,y:0}))},[s,b]),z=h.useCallback(m=>{if(l===null||!f.current)return;const x=m.clientX-f.current.x,_=m.clientY-f.current.y,k=Math.round(x/v)*v,S=Math.round(_/he)*he;u({x:k,y:S})},[l,v]),p=h.useCallback(()=>{if(l===null||!s){d(null),u({x:0,y:0}),f.current=null;return}const m=b[l];if(!m){d(null),u({x:0,y:0}),f.current=null;return}const x=m.x+c.x,_=m.y+c.y,k=L(_+he/2);if(!k){d(null),u({x:0,y:0}),f.current=null;return}const S=J(x),j=e[l],G=j.endDate.getTime()-j.startDate.getTime(),O=new Date(S.getTime()+G);s(l,{startDate:S,endDate:O,resourceId:k.resourceId,resourceLabel:k.resourceLabel}),d(null),u({x:0,y:0}),f.current=null},[l,c,b,e,s,L,J]);return h.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",z),document.addEventListener("mouseup",p),()=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",p)}},[l,z,p]),i.jsx(i.Fragment,{children:b.map(m=>{if(!m)return null;const x=m.selection.hasConflict||!1,_=l===m.index,k=_?m.x+c.x:m.x,S=_?m.y+c.y:m.y;return i.jsxs(xd,{$hasConflict:x,$isDragging:_,style:{left:k,top:S,width:m.width,height:m.height},"data-multi-select-ui":!0,onMouseDown:j=>Z(j,m.index),children:[x&&i.jsx(wd,{title:y(m.selection),children:"⚠️"}),i.jsx(bd,{$hasConflict:x,children:D(m.selection.startDate,m.selection.endDate)}),i.jsx(Sd,{onClick:j=>{j.stopPropagation(),o(m.index)},onMouseDown:j=>j.stopPropagation(),title:x?"Remove conflicting selection":"Remove selection",children:"×"})]},m.index)})})},Eo=(e,r,t,n)=>{if(r===2)return null;const o=r===0?He*7:Ce,s=I().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"),a=e.startOf("day"),l=r===0?a.startOf("week").diff(s.startOf("week"),"week"):a.diff(s,"days");return l<0||l>=n?null:{x:l*o,width:o}},kd=w.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({theme:e})=>e.colors.today}12;
`,Md=({zoom:e,startDate:r})=>{const{cols:t}=Ve(),n=h.useMemo(()=>Eo(I(),e,r,t),[e,r,t]);return n?i.jsx(kd,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},$d="#2f6fed",Dd=w.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${$d}1c;
`,Ed=({zoom:e,startDate:r})=>{const{cols:t,jumpDate:n}=Ve(),o=h.useMemo(()=>!n||n.isSame(I(),"day")?null:Eo(n,e,r,t),[n,e,r,t]);return o?i.jsx(Dd,{style:{left:`${o.x}px`,width:`${o.width}px`},"aria-hidden":!0}):null},s1="";Oe.Scheduler=qa,Object.defineProperty(Oe,Symbol.toStringTag,{value:"Module"})});
