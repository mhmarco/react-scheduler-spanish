(function(Ee,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react/jsx-runtime"),require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react","react-dom"],i):(Ee=typeof globalThis<"u"?globalThis:Ee||self,i(Ee["react-scheduler"]={},Ee["react/jsx-runtime"],Ee.React,Ee.ReactDOM))})(this,function(Ee,i,h,Oo){"use strict";var Ad=Object.defineProperty;var Id=(Ee,i,h)=>i in Ee?Ad(Ee,i,{enumerable:!0,configurable:!0,writable:!0,value:h}):Ee[i]=h;var Io=(Ee,i,h)=>(Id(Ee,typeof i!="symbol"?i+"":i,h),h);function Lo(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const re=Lo(h);var Te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},At={},Yo={get exports(){return At},set exports(e){At=e}},me={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qn;function No(){if(Qn)return me;Qn=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function D(y){if(typeof y=="object"&&y!==null){var N=y.$$typeof;switch(N){case e:switch(y=y.type,y){case t:case o:case n:case c:case u:return y;default:switch(y=y&&y.$$typeof,y){case l:case a:case f:case v:case d:case s:return y;default:return N}}case r:return N}}}return me.ContextConsumer=a,me.ContextProvider=s,me.Element=e,me.ForwardRef=f,me.Fragment=t,me.Lazy=v,me.Memo=d,me.Portal=r,me.Profiler=o,me.StrictMode=n,me.Suspense=c,me.SuspenseList=u,me.isAsyncMode=function(){return!1},me.isConcurrentMode=function(){return!1},me.isContextConsumer=function(y){return D(y)===a},me.isContextProvider=function(y){return D(y)===s},me.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===e},me.isForwardRef=function(y){return D(y)===f},me.isFragment=function(y){return D(y)===t},me.isLazy=function(y){return D(y)===v},me.isMemo=function(y){return D(y)===d},me.isPortal=function(y){return D(y)===r},me.isProfiler=function(y){return D(y)===o},me.isStrictMode=function(y){return D(y)===n},me.isSuspense=function(y){return D(y)===c},me.isSuspenseList=function(y){return D(y)===u},me.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===t||y===o||y===n||y===c||y===u||y===C||typeof y=="object"&&y!==null&&(y.$$typeof===v||y.$$typeof===d||y.$$typeof===s||y.$$typeof===a||y.$$typeof===f||y.$$typeof===x||y.getModuleId!==void 0)},me.typeOf=D,me}var ye={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rn;function Fo(){return Rn||(Rn=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),x=!1,D=!1,y=!1,N=!1,Q=!1,H;H=Symbol.for("react.module.reference");function X(E){return!!(typeof E=="string"||typeof E=="function"||E===t||E===o||Q||E===n||E===c||E===u||N||E===C||x||D||y||typeof E=="object"&&E!==null&&(E.$$typeof===v||E.$$typeof===d||E.$$typeof===s||E.$$typeof===a||E.$$typeof===f||E.$$typeof===H||E.getModuleId!==void 0))}function w(E){if(typeof E=="object"&&E!==null){var J=E.$$typeof;switch(J){case e:var ee=E.type;switch(ee){case t:case o:case n:case c:case u:return ee;default:var q=ee&&ee.$$typeof;switch(q){case l:case a:case f:case v:case d:case s:return q;default:return J}}case r:return J}}}var g=a,p=s,T=e,M=f,S=t,B=v,W=d,A=r,I=o,P=n,V=c,O=u,k=!1,L=!1;function te(E){return k||(k=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function se(E){return L||(L=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function j(E){return w(E)===a}function F(E){return w(E)===s}function Y(E){return typeof E=="object"&&E!==null&&E.$$typeof===e}function ne(E){return w(E)===f}function $(E){return w(E)===t}function K(E){return w(E)===v}function _(E){return w(E)===d}function R(E){return w(E)===r}function G(E){return w(E)===o}function Z(E){return w(E)===n}function m(E){return w(E)===c}function U(E){return w(E)===u}ye.ContextConsumer=g,ye.ContextProvider=p,ye.Element=T,ye.ForwardRef=M,ye.Fragment=S,ye.Lazy=B,ye.Memo=W,ye.Portal=A,ye.Profiler=I,ye.StrictMode=P,ye.Suspense=V,ye.SuspenseList=O,ye.isAsyncMode=te,ye.isConcurrentMode=se,ye.isContextConsumer=j,ye.isContextProvider=F,ye.isElement=Y,ye.isForwardRef=ne,ye.isFragment=$,ye.isLazy=K,ye.isMemo=_,ye.isPortal=R,ye.isProfiler=G,ye.isStrictMode=Z,ye.isSuspense=m,ye.isSuspenseList=U,ye.isValidElementType=X,ye.typeOf=w}()),ye}(function(e){process.env.NODE_ENV==="production"?e.exports=No():e.exports=Fo()})(Yo);function zo(e){function r(j,F,Y,ne,$){for(var K=0,_=0,R=0,G=0,Z,m,U=0,E=0,J,ee=J=Z=0,q=0,ae=0,fe=0,ce=0,pe=Y.length,Ce=pe-1,be,oe="",ue="",Ie="",je="",Oe;q<pe;){if(m=Y.charCodeAt(q),q===Ce&&_+G+R+K!==0&&(_!==0&&(m=_===47?10:47),G=R=K=0,pe++,Ce++),_+G+R+K===0){if(q===Ce&&(0<ae&&(oe=oe.replace(v,"")),0<oe.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:oe+=Y.charAt(q)}m=59}switch(m){case 123:for(oe=oe.trim(),Z=oe.charCodeAt(0),J=1,ce=++q;q<pe;){switch(m=Y.charCodeAt(q)){case 123:J++;break;case 125:J--;break;case 47:switch(m=Y.charCodeAt(q+1)){case 42:case 47:e:{for(ee=q+1;ee<Ce;++ee)switch(Y.charCodeAt(ee)){case 47:if(m===42&&Y.charCodeAt(ee-1)===42&&q+2!==ee){q=ee+1;break e}break;case 10:if(m===47){q=ee+1;break e}}q=ee}}break;case 91:m++;case 40:m++;case 34:case 39:for(;q++<Ce&&Y.charCodeAt(q)!==m;);}if(J===0)break;q++}switch(J=Y.substring(ce,q),Z===0&&(Z=(oe=oe.replace(d,"").trim()).charCodeAt(0)),Z){case 64:switch(0<ae&&(oe=oe.replace(v,"")),m=oe.charCodeAt(1),m){case 100:case 109:case 115:case 45:ae=F;break;default:ae=V}if(J=r(F,ae,J,m,$+1),ce=J.length,0<k&&(ae=t(V,oe,fe),Oe=l(3,J,ae,F,A,W,ce,m,$,ne),oe=ae.join(""),Oe!==void 0&&(ce=(J=Oe.trim()).length)===0&&(m=0,J="")),0<ce)switch(m){case 115:oe=oe.replace(g,a);case 100:case 109:case 45:J=oe+"{"+J+"}";break;case 107:oe=oe.replace(Q,"$1 $2"),J=oe+"{"+J+"}",J=P===1||P===2&&s("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=oe+J,ne===112&&(J=(ue+=J,""))}else J="";break;default:J=r(F,t(F,oe,fe),J,ne,$+1)}Ie+=J,J=fe=ae=ee=Z=0,oe="",m=Y.charCodeAt(++q);break;case 125:case 59:if(oe=(0<ae?oe.replace(v,""):oe).trim(),1<(ce=oe.length))switch(ee===0&&(Z=oe.charCodeAt(0),Z===45||96<Z&&123>Z)&&(ce=(oe=oe.replace(" ",":")).length),0<k&&(Oe=l(1,oe,F,j,A,W,ue.length,ne,$,ne))!==void 0&&(ce=(oe=Oe.trim()).length)===0&&(oe="\0\0"),Z=oe.charCodeAt(0),m=oe.charCodeAt(1),Z){case 0:break;case 64:if(m===105||m===99){je+=oe+Y.charAt(q);break}default:oe.charCodeAt(ce-1)!==58&&(ue+=o(oe,Z,m,oe.charCodeAt(2)))}fe=ae=ee=Z=0,oe="",m=Y.charCodeAt(++q)}}switch(m){case 13:case 10:_===47?_=0:1+Z===0&&ne!==107&&0<oe.length&&(ae=1,oe+="\0"),0<k*te&&l(0,oe,F,j,A,W,ue.length,ne,$,ne),W=1,A++;break;case 59:case 125:if(_+G+R+K===0){W++;break}default:switch(W++,be=Y.charAt(q),m){case 9:case 32:if(G+K+_===0)switch(U){case 44:case 58:case 9:case 32:be="";break;default:m!==32&&(be=" ")}break;case 0:be="\\0";break;case 12:be="\\f";break;case 11:be="\\v";break;case 38:G+_+K===0&&(ae=fe=1,be="\f"+be);break;case 108:if(G+_+K+I===0&&0<ee)switch(q-ee){case 2:U===112&&Y.charCodeAt(q-3)===58&&(I=U);case 8:E===111&&(I=E)}break;case 58:G+_+K===0&&(ee=q);break;case 44:_+R+G+K===0&&(ae=1,be+="\r");break;case 34:case 39:_===0&&(G=G===m?0:G===0?m:G);break;case 91:G+_+R===0&&K++;break;case 93:G+_+R===0&&K--;break;case 41:G+_+K===0&&R--;break;case 40:if(G+_+K===0){if(Z===0)switch(2*U+3*E){case 533:break;default:Z=1}R++}break;case 64:_+R+G+K+ee+J===0&&(J=1);break;case 42:case 47:if(!(0<G+K+R))switch(_){case 0:switch(2*m+3*Y.charCodeAt(q+1)){case 235:_=47;break;case 220:ce=q,_=42}break;case 42:m===47&&U===42&&ce+2!==q&&(Y.charCodeAt(ce+2)===33&&(ue+=Y.substring(ce,q+1)),be="",_=0)}}_===0&&(oe+=be)}E=U,U=m,q++}if(ce=ue.length,0<ce){if(ae=F,0<k&&(Oe=l(2,ue,ae,j,A,W,ce,ne,$,ne),Oe!==void 0&&(ue=Oe).length===0))return je+ue+Ie;if(ue=ae.join(",")+"{"+ue+"}",P*I!==0){switch(P!==2||s(ue,2)||(I=0),I){case 111:ue=ue.replace(X,":-moz-$1")+ue;break;case 112:ue=ue.replace(H,"::-webkit-input-$1")+ue.replace(H,"::-moz-$1")+ue.replace(H,":-ms-input-$1")+ue}I=0}}return je+ue+Ie}function t(j,F,Y){var ne=F.trim().split(y);F=ne;var $=ne.length,K=j.length;switch(K){case 0:case 1:var _=0;for(j=K===0?"":j[0]+" ";_<$;++_)F[_]=n(j,F[_],Y).trim();break;default:var R=_=0;for(F=[];_<$;++_)for(var G=0;G<K;++G)F[R++]=n(j[G]+" ",ne[_],Y).trim()}return F}function n(j,F,Y){var ne=F.charCodeAt(0);switch(33>ne&&(ne=(F=F.trim()).charCodeAt(0)),ne){case 38:return F.replace(N,"$1"+j.trim());case 58:return j.trim()+F.replace(N,"$1"+j.trim());default:if(0<1*Y&&0<F.indexOf("\f"))return F.replace(N,(j.charCodeAt(0)===58?"":"$1")+j.trim())}return j+F}function o(j,F,Y,ne){var $=j+";",K=2*F+3*Y+4*ne;if(K===944){j=$.indexOf(":",9)+1;var _=$.substring(j,$.length-1).trim();return _=$.substring(0,j).trim()+_+";",P===1||P===2&&s(_,1)?"-webkit-"+_+_:_}if(P===0||P===2&&!s($,1))return $;switch(K){case 1015:return $.charCodeAt(10)===97?"-webkit-"+$+$:$;case 951:return $.charCodeAt(3)===116?"-webkit-"+$+$:$;case 963:return $.charCodeAt(5)===110?"-webkit-"+$+$:$;case 1009:if($.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+$+$;case 978:return"-webkit-"+$+"-moz-"+$+$;case 1019:case 983:return"-webkit-"+$+"-moz-"+$+"-ms-"+$+$;case 883:if($.charCodeAt(8)===45)return"-webkit-"+$+$;if(0<$.indexOf("image-set(",11))return $.replace(B,"$1-webkit-$2")+$;break;case 932:if($.charCodeAt(4)===45)switch($.charCodeAt(5)){case 103:return"-webkit-box-"+$.replace("-grow","")+"-webkit-"+$+"-ms-"+$.replace("grow","positive")+$;case 115:return"-webkit-"+$+"-ms-"+$.replace("shrink","negative")+$;case 98:return"-webkit-"+$+"-ms-"+$.replace("basis","preferred-size")+$}return"-webkit-"+$+"-ms-"+$+$;case 964:return"-webkit-"+$+"-ms-flex-"+$+$;case 1023:if($.charCodeAt(8)!==99)break;return _=$.substring($.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+_+"-webkit-"+$+"-ms-flex-pack"+_+$;case 1005:return x.test($)?$.replace(C,":-webkit-")+$.replace(C,":-moz-")+$:$;case 1e3:switch(_=$.substring(13).trim(),F=_.indexOf("-")+1,_.charCodeAt(0)+_.charCodeAt(F)){case 226:_=$.replace(w,"tb");break;case 232:_=$.replace(w,"tb-rl");break;case 220:_=$.replace(w,"lr");break;default:return $}return"-webkit-"+$+"-ms-"+_+$;case 1017:if($.indexOf("sticky",9)===-1)break;case 975:switch(F=($=j).length-10,_=($.charCodeAt(F)===33?$.substring(0,F):$).substring(j.indexOf(":",7)+1).trim(),K=_.charCodeAt(0)+(_.charCodeAt(7)|0)){case 203:if(111>_.charCodeAt(8))break;case 115:$=$.replace(_,"-webkit-"+_)+";"+$;break;case 207:case 102:$=$.replace(_,"-webkit-"+(102<K?"inline-":"")+"box")+";"+$.replace(_,"-webkit-"+_)+";"+$.replace(_,"-ms-"+_+"box")+";"+$}return $+";";case 938:if($.charCodeAt(5)===45)switch($.charCodeAt(6)){case 105:return _=$.replace("-items",""),"-webkit-"+$+"-webkit-box-"+_+"-ms-flex-"+_+$;case 115:return"-webkit-"+$+"-ms-flex-item-"+$.replace(T,"")+$;default:return"-webkit-"+$+"-ms-flex-line-pack"+$.replace("align-content","").replace(T,"")+$}break;case 973:case 989:if($.charCodeAt(3)!==45||$.charCodeAt(4)===122)break;case 931:case 953:if(S.test(j)===!0)return(_=j.substring(j.indexOf(":")+1)).charCodeAt(0)===115?o(j.replace("stretch","fill-available"),F,Y,ne).replace(":fill-available",":stretch"):$.replace(_,"-webkit-"+_)+$.replace(_,"-moz-"+_.replace("fill-",""))+$;break;case 962:if($="-webkit-"+$+($.charCodeAt(5)===102?"-ms-"+$:"")+$,Y+ne===211&&$.charCodeAt(13)===105&&0<$.indexOf("transform",10))return $.substring(0,$.indexOf(";",27)+1).replace(D,"$1-webkit-$2")+$}return $}function s(j,F){var Y=j.indexOf(F===1?":":"{"),ne=j.substring(0,F!==3?Y:10);return Y=j.substring(Y+1,j.length-1),L(F!==2?ne:ne.replace(M,"$1"),Y,F)}function a(j,F){var Y=o(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return Y!==F+";"?Y.replace(p," or ($1)").substring(4):"("+F+")"}function l(j,F,Y,ne,$,K,_,R,G,Z){for(var m=0,U=F,E;m<k;++m)switch(E=O[m].call(u,j,U,Y,ne,$,K,_,R,G,Z)){case void 0:case!1:case!0:case null:break;default:U=E}if(U!==F)return U}function f(j){switch(j){case void 0:case null:k=O.length=0;break;default:if(typeof j=="function")O[k++]=j;else if(typeof j=="object")for(var F=0,Y=j.length;F<Y;++F)f(j[F]);else te=!!j|0}return f}function c(j){return j=j.prefix,j!==void 0&&(L=null,j?typeof j!="function"?P=1:(P=2,L=j):P=0),c}function u(j,F){var Y=j;if(33>Y.charCodeAt(0)&&(Y=Y.trim()),se=Y,Y=[se],0<k){var ne=l(-1,F,Y,Y,A,W,0,0,0,0);ne!==void 0&&typeof ne=="string"&&(F=ne)}var $=r(V,Y,F,0,0);return 0<k&&(ne=l(-2,$,Y,Y,A,W,$.length,0,0,0),ne!==void 0&&($=ne)),se="",I=0,W=A=1,$}var d=/^\0+/g,v=/[\0\r\f]/g,C=/: */g,x=/zoo|gra/,D=/([,: ])(transform)/g,y=/,\r+?/g,N=/([\t\r\n ])*\f?&/g,Q=/@(k\w+)\s*(\S*)\s*/,H=/::(place)/g,X=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,g=/\(\s*(.*)\s*\)/g,p=/([\s\S]*?);/g,T=/-self|flex-/g,M=/[^]*?(:[rp][el]a[\w-]+)[^]*/,S=/stretch|:\s*\w+\-(?:conte|avail)/,B=/([^-])(image-set\()/,W=1,A=1,I=0,P=1,V=[],O=[],k=0,L=null,te=0,se="";return u.use=f,u.set=c,e!==void 0&&c(e),u}var Bo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ho(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Wo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,er=Ho(function(e){return Wo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),cn={},jo={get exports(){return cn},set exports(e){cn=e}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr;function Zo(){if(tr)return ve;tr=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,D=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,Q=e?Symbol.for("react.scope"):60119;function H(w){if(typeof w=="object"&&w!==null){var g=w.$$typeof;switch(g){case r:switch(w=w.type,w){case f:case c:case n:case s:case o:case d:return w;default:switch(w=w&&w.$$typeof,w){case l:case u:case x:case C:case a:return w;default:return g}}case t:return g}}}function X(w){return H(w)===c}return ve.AsyncMode=f,ve.ConcurrentMode=c,ve.ContextConsumer=l,ve.ContextProvider=a,ve.Element=r,ve.ForwardRef=u,ve.Fragment=n,ve.Lazy=x,ve.Memo=C,ve.Portal=t,ve.Profiler=s,ve.StrictMode=o,ve.Suspense=d,ve.isAsyncMode=function(w){return X(w)||H(w)===f},ve.isConcurrentMode=X,ve.isContextConsumer=function(w){return H(w)===l},ve.isContextProvider=function(w){return H(w)===a},ve.isElement=function(w){return typeof w=="object"&&w!==null&&w.$$typeof===r},ve.isForwardRef=function(w){return H(w)===u},ve.isFragment=function(w){return H(w)===n},ve.isLazy=function(w){return H(w)===x},ve.isMemo=function(w){return H(w)===C},ve.isPortal=function(w){return H(w)===t},ve.isProfiler=function(w){return H(w)===s},ve.isStrictMode=function(w){return H(w)===o},ve.isSuspense=function(w){return H(w)===d},ve.isValidElementType=function(w){return typeof w=="string"||typeof w=="function"||w===n||w===c||w===s||w===o||w===d||w===v||typeof w=="object"&&w!==null&&(w.$$typeof===x||w.$$typeof===C||w.$$typeof===a||w.$$typeof===l||w.$$typeof===u||w.$$typeof===y||w.$$typeof===N||w.$$typeof===Q||w.$$typeof===D)},ve.typeOf=H,ve}var xe={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr;function Vo(){return nr||(nr=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,D=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,N=e?Symbol.for("react.responder"):60118,Q=e?Symbol.for("react.scope"):60119;function H(m){return typeof m=="string"||typeof m=="function"||m===n||m===c||m===s||m===o||m===d||m===v||typeof m=="object"&&m!==null&&(m.$$typeof===x||m.$$typeof===C||m.$$typeof===a||m.$$typeof===l||m.$$typeof===u||m.$$typeof===y||m.$$typeof===N||m.$$typeof===Q||m.$$typeof===D)}function X(m){if(typeof m=="object"&&m!==null){var U=m.$$typeof;switch(U){case r:var E=m.type;switch(E){case f:case c:case n:case s:case o:case d:return E;default:var J=E&&E.$$typeof;switch(J){case l:case u:case x:case C:case a:return J;default:return U}}case t:return U}}}var w=f,g=c,p=l,T=a,M=r,S=u,B=n,W=x,A=C,I=t,P=s,V=o,O=d,k=!1;function L(m){return k||(k=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),te(m)||X(m)===f}function te(m){return X(m)===c}function se(m){return X(m)===l}function j(m){return X(m)===a}function F(m){return typeof m=="object"&&m!==null&&m.$$typeof===r}function Y(m){return X(m)===u}function ne(m){return X(m)===n}function $(m){return X(m)===x}function K(m){return X(m)===C}function _(m){return X(m)===t}function R(m){return X(m)===s}function G(m){return X(m)===o}function Z(m){return X(m)===d}xe.AsyncMode=w,xe.ConcurrentMode=g,xe.ContextConsumer=p,xe.ContextProvider=T,xe.Element=M,xe.ForwardRef=S,xe.Fragment=B,xe.Lazy=W,xe.Memo=A,xe.Portal=I,xe.Profiler=P,xe.StrictMode=V,xe.Suspense=O,xe.isAsyncMode=L,xe.isConcurrentMode=te,xe.isContextConsumer=se,xe.isContextProvider=j,xe.isElement=F,xe.isForwardRef=Y,xe.isFragment=ne,xe.isLazy=$,xe.isMemo=K,xe.isPortal=_,xe.isProfiler=R,xe.isStrictMode=G,xe.isSuspense=Z,xe.isValidElementType=H,xe.typeOf=X}()),xe}(function(e){process.env.NODE_ENV==="production"?e.exports=Zo():e.exports=Vo()})(jo);var ln=cn,Go={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Uo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dn={};dn[ln.ForwardRef]=Xo,dn[ln.Memo]=rr;function or(e){return ln.isMemo(e)?rr:dn[e.$$typeof]||Go}var Ko=Object.defineProperty,Jo=Object.getOwnPropertyNames,sr=Object.getOwnPropertySymbols,qo=Object.getOwnPropertyDescriptor,Qo=Object.getPrototypeOf,ir=Object.prototype;function ar(e,r,t){if(typeof r!="string"){if(ir){var n=Qo(r);n&&n!==ir&&ar(e,n,t)}var o=Jo(r);sr&&(o=o.concat(sr(r)));for(var s=or(e),a=or(r),l=0;l<o.length;++l){var f=o[l];if(!Uo[f]&&!(t&&t[f])&&!(a&&a[f])&&!(s&&s[f])){var c=qo(r,f);try{Ko(e,f,c)}catch{}}}}return e}var Ro=ar;function Ve(){return(Ve=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var cr=function(e,r){for(var t=[e[0]],n=0,o=r.length;n<o;n+=1)t.push(r[n],e[n+1]);return t},un=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!At.typeOf(e)},Ht=Object.freeze([]),rt=Object.freeze({});function yt(e){return typeof e=="function"}function fn(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function hn(e){return e&&typeof e.styledComponentId=="string"}var vt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",pn=typeof window<"u"&&"HTMLElement"in window,es=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production")),ts={},ns=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function rs(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,n=arguments.length;t<n;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(o){e=e.replace(/%[a-z]/,o)}),e}function Xe(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(rs.apply(void 0,[ns[e]].concat(t)).trim())}var os=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,a=s;t>=a;)(a<<=1)<0&&Xe(16,""+t);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var f=this.indexOfGroup(t+1),c=0,u=n.length;c<u;c++)this.tag.insertRule(f,n[c])&&(this.groupSizes[t]++,f++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var a=o;a<s;a++)this.tag.deleteRule(o)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),a=s+o,l=s;l<a;l++)n+=this.tag.getRule(l)+`/*!sc*/
`;return n},e}(),Wt=new Map,jt=new Map,It=1,Zt=function(e){if(Wt.has(e))return Wt.get(e);for(;jt.has(It);)It++;var r=It++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&Xe(16,""+r),Wt.set(e,r),jt.set(r,e),r},ss=function(e){return jt.get(e)},is=function(e,r){r>=It&&(It=r+1),Wt.set(e,r),jt.set(r,e)},as="style["+vt+'][data-styled-version="5.3.8"]',cs=new RegExp("^"+vt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ls=function(e,r,t){for(var n,o=t.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(r,n)},ds=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],o=0,s=t.length;o<s;o++){var a=t[o].trim();if(a){var l=a.match(cs);if(l){var f=0|parseInt(l[1],10),c=l[2];f!==0&&(is(c,f),ls(e,c,l[3]),e.getTag().insertRules(f,n)),n.length=0}else n.push(a)}}},us=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},lr=function(e){var r=document.head,t=e||r,n=document.createElement("style"),o=function(l){for(var f=l.childNodes,c=f.length;c>=0;c--){var u=f[c];if(u&&u.nodeType===1&&u.hasAttribute(vt))return u}}(t),s=o!==void 0?o.nextSibling:null;n.setAttribute(vt,"active"),n.setAttribute("data-styled-version","5.3.8");var a=us();return a&&n.setAttribute("nonce",a),t.insertBefore(n,s),n},fs=function(){function e(t){var n=this.element=lr(t);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var f=s[a];if(f.ownerNode===o)return f}Xe(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),hs=function(){function e(t){var n=this.element=lr(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n),s=this.nodes[t];return this.element.insertBefore(o,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ps=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),dr=pn,gs={isServer:!pn,useCSSOMInjection:!es},Vt=function(){function e(t,n,o){t===void 0&&(t=rt),n===void 0&&(n={}),this.options=Ve({},gs,{},t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&pn&&dr&&(dr=!1,function(s){for(var a=document.querySelectorAll(as),l=0,f=a.length;l<f;l++){var c=a[l];c&&c.getAttribute(vt)!=="active"&&(ds(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(t){return Zt(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ve({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,s=n.useCSSOMInjection,a=n.target,t=o?new ps(a):s?new fs(a):new hs(a),new os(t)));var t,n,o,s,a},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(Zt(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},r.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(Zt(t),o)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(Zt(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),o=n.length,s="",a=0;a<o;a++){var l=ss(a);if(l!==void 0){var f=t.names.get(l),c=n.getGroup(a);if(f&&c&&f.size){var u=vt+".g"+a+'[id="'+l+'"]',d="";f!==void 0&&f.forEach(function(v){v.length>0&&(d+=v+",")}),s+=""+c+u+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},e}(),ms=/(a)(d)/gi,ur=function(e){return String.fromCharCode(e+(e>25?39:97))};function gn(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=ur(r%52)+t;return(ur(r%52)+t).replace(ms,"$1-$2")}var ct=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},fr=function(e){return ct(5381,e)};function hr(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(yt(t)&&!hn(t))return!1}return!0}var ys=fr("5.3.8"),vs=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&hr(r),this.componentId=t,this.baseHash=ct(ys,t),this.baseStyle=n,Vt.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var o=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(o,this.staticRulesId))s.push(this.staticRulesId);else{var a=lt(this.rules,r,t,n).join(""),l=gn(ct(this.baseHash,a)>>>0);if(!t.hasNameForId(o,l)){var f=n(a,"."+l,void 0,o);t.insertRules(o,l,f)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,u=ct(this.baseHash,n.hash),d="",v=0;v<c;v++){var C=this.rules[v];if(typeof C=="string")d+=C,process.env.NODE_ENV!=="production"&&(u=ct(u,C+v));else if(C){var x=lt(C,r,t,n),D=Array.isArray(x)?x.join(""):x;u=ct(u,D+v),d+=D}}if(d){var y=gn(u>>>0);if(!t.hasNameForId(o,y)){var N=n(d,"."+y,void 0,o);t.insertRules(o,y,N)}s.push(y)}}return s.join(" ")},e}(),xs=/^\s*\/\/.*$/gm,bs=[":","[",".","#"];function ws(e){var r,t,n,o,s=e===void 0?rt:e,a=s.options,l=a===void 0?rt:a,f=s.plugins,c=f===void 0?Ht:f,u=new zo(l),d=[],v=function(D){function y(N){if(N)try{D(N+"}")}catch{}}return function(N,Q,H,X,w,g,p,T,M,S){switch(N){case 1:if(M===0&&Q.charCodeAt(0)===64)return D(Q+";"),"";break;case 2:if(T===0)return Q+"/*|*/";break;case 3:switch(T){case 102:case 112:return D(H[0]+Q),"";default:return Q+(S===0?"/*|*/":"")}case-2:Q.split("/*|*/}").forEach(y)}}}(function(D){d.push(D)}),C=function(D,y,N){return y===0&&bs.indexOf(N[t.length])!==-1||N.match(o)?D:"."+r};function x(D,y,N,Q){Q===void 0&&(Q="&");var H=D.replace(xs,""),X=y&&N?N+" "+y+" { "+H+" }":H;return r=Q,t=y,n=new RegExp("\\"+t+"\\b","g"),o=new RegExp("(\\"+t+"\\b){2,}"),u(N||!y?"":y,X)}return u.use([].concat(c,[function(D,y,N){D===2&&N.length&&N[0].lastIndexOf(t)>0&&(N[0]=N[0].replace(n,C))},v,function(D){if(D===-2){var y=d;return d=[],y}}])),x.hash=c.length?c.reduce(function(D,y){return y.name||Xe(15),ct(D,y.name)},5381).toString():"",x}var pr=h.createContext();pr.Consumer;var gr=h.createContext(),Ss=(gr.Consumer,new Vt),mn=ws();function mr(){return h.useContext(pr)||Ss}function yr(){return h.useContext(gr)||mn}var vr=function(){function e(r,t){var n=this;this.inject=function(o,s){s===void 0&&(s=mn);var a=n.name+s.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.toString=function(){return Xe(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=mn),this.name+r.hash},e}(),Cs=/([A-Z])/,ks=/([A-Z])/g,Ms=/^ms-/,$s=function(e){return"-"+e.toLowerCase()};function xr(e){return Cs.test(e)?e.replace(ks,$s).replace(Ms,"-ms-"):e}var br=function(e){return e==null||e===!1||e===""};function lt(e,r,t,n){if(Array.isArray(e)){for(var o,s=[],a=0,l=e.length;a<l;a+=1)(o=lt(e[a],r,t,n))!==""&&(Array.isArray(o)?s.push.apply(s,o):s.push(o));return s}if(br(e))return"";if(hn(e))return"."+e.styledComponentId;if(yt(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!r)return e;var f=e(r);return process.env.NODE_ENV!=="production"&&At.isElement(f)&&console.warn(fn(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),lt(f,r,t,n)}var c;return e instanceof vr?t?(e.inject(t,n),e.getName(n)):e:un(e)?function u(d,v){var C,x,D=[];for(var y in d)d.hasOwnProperty(y)&&!br(d[y])&&(Array.isArray(d[y])&&d[y].isCss||yt(d[y])?D.push(xr(y)+":",d[y],";"):un(d[y])?D.push.apply(D,u(d[y],y)):D.push(xr(y)+": "+(C=y,(x=d[y])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||C in Bo?String(x).trim():x+"px")+";"));return v?[v+" {"].concat(D,["}"]):D}(e):e.toString()}var wr=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function dt(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return yt(e)||un(e)?wr(lt(cr(Ht,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:wr(lt(cr(e,t)))}var Sr=/invalid hook call/i,Gt=new Set,Cr=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var o=!0;console.error=function(s){if(Sr.test(s))o=!1,Gt.delete(t);else{for(var a=arguments.length,l=new Array(a>1?a-1:0),f=1;f<a;f++)l[f-1]=arguments[f];n.apply(void 0,[s].concat(l))}},h.useRef(),o&&!Gt.has(t)&&(console.warn(t),Gt.add(t))}catch(s){Sr.test(s.message)&&Gt.delete(t)}finally{console.error=n}}},kr=function(e,r,t){return t===void 0&&(t=rt),e.theme!==t.theme&&e.theme||r||t.theme},Ds=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Es=/(^-|-$)/g;function yn(e){return e.replace(Ds,"-").replace(Es,"")}var vn=function(e){return gn(fr(e)>>>0)};function Ut(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var xn=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},_s=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ts(e,r,t){var n=e[t];xn(r)&&xn(n)?Mr(n,r):e[t]=r}function Mr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var o=0,s=t;o<s.length;o++){var a=s[o];if(xn(a))for(var l in a)_s(l)&&Ts(e,a[l],l)}return e}var xt=h.createContext();xt.Consumer;function Ps(e){var r=h.useContext(xt),t=h.useMemo(function(){return function(n,o){if(!n)return Xe(14);if(yt(n)){var s=n(o);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:Xe(7)}return Array.isArray(n)||typeof n!="object"?Xe(8):o?Ve({},o,{},n):n}(e.theme,r)},[e.theme,r]);return e.children?h.createElement(xt.Provider,{value:t},e.children):null}var bn={};function $r(e,r,t){var n=hn(e),o=!Ut(e),s=r.attrs,a=s===void 0?Ht:s,l=r.componentId,f=l===void 0?function(Q,H){var X=typeof Q!="string"?"sc":yn(Q);bn[X]=(bn[X]||0)+1;var w=X+"-"+vn("5.3.8"+X+bn[X]);return H?H+"-"+w:w}(r.displayName,r.parentComponentId):l,c=r.displayName,u=c===void 0?function(Q){return Ut(Q)?"styled."+Q:"Styled("+fn(Q)+")"}(e):c,d=r.displayName&&r.componentId?yn(r.displayName)+"-"+r.componentId:r.componentId||f,v=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,C=r.shouldForwardProp;n&&e.shouldForwardProp&&(C=r.shouldForwardProp?function(Q,H,X){return e.shouldForwardProp(Q,H,X)&&r.shouldForwardProp(Q,H,X)}:e.shouldForwardProp);var x,D=new vs(t,d,n?e.componentStyle:void 0),y=D.isStatic&&a.length===0,N=function(Q,H){return function(X,w,g,p){var T=X.attrs,M=X.componentStyle,S=X.defaultProps,B=X.foldedComponentIds,W=X.shouldForwardProp,A=X.styledComponentId,I=X.target;process.env.NODE_ENV!=="production"&&h.useDebugValue(A);var P=function(ne,$,K){ne===void 0&&(ne=rt);var _=Ve({},$,{theme:ne}),R={};return K.forEach(function(G){var Z,m,U,E=G;for(Z in yt(E)&&(E=E(_)),E)_[Z]=R[Z]=Z==="className"?(m=R[Z],U=E[Z],m&&U?m+" "+U:m||U):E[Z]}),[_,R]}(kr(w,h.useContext(xt),S)||rt,w,T),V=P[0],O=P[1],k=function(ne,$,K,_){var R=mr(),G=yr(),Z=$?ne.generateAndInjectStyles(rt,R,G):ne.generateAndInjectStyles(K,R,G);return process.env.NODE_ENV!=="production"&&h.useDebugValue(Z),process.env.NODE_ENV!=="production"&&!$&&_&&_(Z),Z}(M,p,V,process.env.NODE_ENV!=="production"?X.warnTooManyClasses:void 0),L=g,te=O.$as||w.$as||O.as||w.as||I,se=Ut(te),j=O!==w?Ve({},w,{},O):w,F={};for(var Y in j)Y[0]!=="$"&&Y!=="as"&&(Y==="forwardedAs"?F.as=j[Y]:(W?W(Y,er,te):!se||er(Y))&&(F[Y]=j[Y]));return w.style&&O.style!==w.style&&(F.style=Ve({},w.style,{},O.style)),F.className=Array.prototype.concat(B,A,k!==A?k:null,w.className,O.className).filter(Boolean).join(" "),F.ref=L,h.createElement(te,F)}(x,Q,H,y)};return N.displayName=u,(x=h.forwardRef(N)).attrs=v,x.componentStyle=D,x.displayName=u,x.shouldForwardProp=C,x.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ht,x.styledComponentId=d,x.target=n?e.target:e,x.withComponent=function(Q){var H=r.componentId,X=function(g,p){if(g==null)return{};var T,M,S={},B=Object.keys(g);for(M=0;M<B.length;M++)T=B[M],p.indexOf(T)>=0||(S[T]=g[T]);return S}(r,["componentId"]),w=H&&H+"-"+(Ut(Q)?Q:yn(fn(Q)));return $r(Q,Ve({},X,{attrs:v,componentId:w}),t)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Q){this._foldedDefaultProps=n?Mr({},e.defaultProps,Q):Q}}),process.env.NODE_ENV!=="production"&&(Cr(u,d),x.warnTooManyClasses=function(Q,H){var X={},w=!1;return function(g){if(!w&&(X[g]=!0,Object.keys(X).length>=200)){var p=H?' with the id of "'+H+'"':"";console.warn("Over 200 classes were generated for component "+Q+p+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),w=!0,X={}}}}(u,d)),x.toString=function(){return"."+x.styledComponentId},o&&Ro(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var wn=function(e){return function r(t,n,o){if(o===void 0&&(o=rt),!At.isValidElementType(n))return Xe(1,String(n));var s=function(){return t(n,o,dt.apply(void 0,arguments))};return s.withConfig=function(a){return r(t,n,Ve({},o,{},a))},s.attrs=function(a){return r(t,n,Ve({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},s}($r,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){wn[e]=wn(e)});var As=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=hr(t),Vt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,n,o,s){var a=s(lt(this.rules,n,o,s).join(""),""),l=this.componentId+t;o.insertRules(l,l,a)},r.removeStyles=function(t,n){n.clearRules(this.componentId+t)},r.renderStyles=function(t,n,o,s){t>2&&Vt.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function Is(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=dt.apply(void 0,[e].concat(t)),s="sc-global-"+vn(JSON.stringify(o)),a=new As(o,s);function l(c){var u=mr(),d=yr(),v=h.useContext(xt),C=h.useRef(u.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&h.Children.count(c.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&o.some(function(x){return typeof x=="string"&&x.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),u.server&&f(C,c,u,v,d),h.useLayoutEffect(function(){if(!u.server)return f(C,c,u,v,d),function(){return a.removeStyles(C,u)}},[C,c,u,v,d]),null}function f(c,u,d,v,C){if(a.isStatic)a.renderStyles(c,ts,d,C);else{var x=Ve({},u,{theme:kr(u,v,l.defaultProps)});a.renderStyles(c,x,d,C)}}return process.env.NODE_ENV!=="production"&&Cr(s),h.memo(l)}function Ne(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=dt.apply(void 0,[e].concat(t)).join(""),s=vn(o);return new vr(s,o)}var Xt=function(){return h.useContext(xt)};process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const b=wn;var ut={},Os={get exports(){return ut},set exports(e){ut=e}};(function(e,r){(function(t,n){e.exports=n()})(Te,function(){var t=1e3,n=6e4,o=36e5,s="millisecond",a="second",l="minute",f="hour",c="day",u="week",d="month",v="quarter",C="year",x="date",D="Invalid Date",y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,N=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(A){var I=["th","st","nd","rd"],P=A%100;return"["+A+(I[(P-20)%10]||I[P]||I[0])+"]"}},H=function(A,I,P){var V=String(A);return!V||V.length>=I?A:""+Array(I+1-V.length).join(P)+A},X={s:H,z:function(A){var I=-A.utcOffset(),P=Math.abs(I),V=Math.floor(P/60),O=P%60;return(I<=0?"+":"-")+H(V,2,"0")+":"+H(O,2,"0")},m:function A(I,P){if(I.date()<P.date())return-A(P,I);var V=12*(P.year()-I.year())+(P.month()-I.month()),O=I.clone().add(V,d),k=P-O<0,L=I.clone().add(V+(k?-1:1),d);return+(-(V+(P-O)/(k?O-L:L-O))||0)},a:function(A){return A<0?Math.ceil(A)||0:Math.floor(A)},p:function(A){return{M:d,y:C,w:u,d:c,D:x,h:f,m:l,s:a,ms:s,Q:v}[A]||String(A||"").toLowerCase().replace(/s$/,"")},u:function(A){return A===void 0}},w="en",g={};g[w]=Q;var p=function(A){return A instanceof B},T=function A(I,P,V){var O;if(!I)return w;if(typeof I=="string"){var k=I.toLowerCase();g[k]&&(O=k),P&&(g[k]=P,O=k);var L=I.split("-");if(!O&&L.length>1)return A(L[0])}else{var te=I.name;g[te]=I,O=te}return!V&&O&&(w=O),O||!V&&w},M=function(A,I){if(p(A))return A.clone();var P=typeof I=="object"?I:{};return P.date=A,P.args=arguments,new B(P)},S=X;S.l=T,S.i=p,S.w=function(A,I){return M(A,{locale:I.$L,utc:I.$u,x:I.$x,$offset:I.$offset})};var B=function(){function A(P){this.$L=T(P.locale,null,!0),this.parse(P)}var I=A.prototype;return I.parse=function(P){this.$d=function(V){var O=V.date,k=V.utc;if(O===null)return new Date(NaN);if(S.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var L=O.match(y);if(L){var te=L[2]-1||0,se=(L[7]||"0").substring(0,3);return k?new Date(Date.UTC(L[1],te,L[3]||1,L[4]||0,L[5]||0,L[6]||0,se)):new Date(L[1],te,L[3]||1,L[4]||0,L[5]||0,L[6]||0,se)}}return new Date(O)}(P),this.$x=P.x||{},this.init()},I.init=function(){var P=this.$d;this.$y=P.getFullYear(),this.$M=P.getMonth(),this.$D=P.getDate(),this.$W=P.getDay(),this.$H=P.getHours(),this.$m=P.getMinutes(),this.$s=P.getSeconds(),this.$ms=P.getMilliseconds()},I.$utils=function(){return S},I.isValid=function(){return this.$d.toString()!==D},I.isSame=function(P,V){var O=M(P);return this.startOf(V)<=O&&O<=this.endOf(V)},I.isAfter=function(P,V){return M(P)<this.startOf(V)},I.isBefore=function(P,V){return this.endOf(V)<M(P)},I.$g=function(P,V,O){return S.u(P)?this[V]:this.set(O,P)},I.unix=function(){return Math.floor(this.valueOf()/1e3)},I.valueOf=function(){return this.$d.getTime()},I.startOf=function(P,V){var O=this,k=!!S.u(V)||V,L=S.p(P),te=function(_,R){var G=S.w(O.$u?Date.UTC(O.$y,R,_):new Date(O.$y,R,_),O);return k?G:G.endOf(c)},se=function(_,R){return S.w(O.toDate()[_].apply(O.toDate("s"),(k?[0,0,0,0]:[23,59,59,999]).slice(R)),O)},j=this.$W,F=this.$M,Y=this.$D,ne="set"+(this.$u?"UTC":"");switch(L){case C:return k?te(1,0):te(31,11);case d:return k?te(1,F):te(0,F+1);case u:var $=this.$locale().weekStart||0,K=(j<$?j+7:j)-$;return te(k?Y-K:Y+(6-K),F);case c:case x:return se(ne+"Hours",0);case f:return se(ne+"Minutes",1);case l:return se(ne+"Seconds",2);case a:return se(ne+"Milliseconds",3);default:return this.clone()}},I.endOf=function(P){return this.startOf(P,!1)},I.$set=function(P,V){var O,k=S.p(P),L="set"+(this.$u?"UTC":""),te=(O={},O[c]=L+"Date",O[x]=L+"Date",O[d]=L+"Month",O[C]=L+"FullYear",O[f]=L+"Hours",O[l]=L+"Minutes",O[a]=L+"Seconds",O[s]=L+"Milliseconds",O)[k],se=k===c?this.$D+(V-this.$W):V;if(k===d||k===C){var j=this.clone().set(x,1);j.$d[te](se),j.init(),this.$d=j.set(x,Math.min(this.$D,j.daysInMonth())).$d}else te&&this.$d[te](se);return this.init(),this},I.set=function(P,V){return this.clone().$set(P,V)},I.get=function(P){return this[S.p(P)]()},I.add=function(P,V){var O,k=this;P=Number(P);var L=S.p(V),te=function(F){var Y=M(k);return S.w(Y.date(Y.date()+Math.round(F*P)),k)};if(L===d)return this.set(d,this.$M+P);if(L===C)return this.set(C,this.$y+P);if(L===c)return te(1);if(L===u)return te(7);var se=(O={},O[l]=n,O[f]=o,O[a]=t,O)[L]||1,j=this.$d.getTime()+P*se;return S.w(j,this)},I.subtract=function(P,V){return this.add(-1*P,V)},I.format=function(P){var V=this,O=this.$locale();if(!this.isValid())return O.invalidDate||D;var k=P||"YYYY-MM-DDTHH:mm:ssZ",L=S.z(this),te=this.$H,se=this.$m,j=this.$M,F=O.weekdays,Y=O.months,ne=function(R,G,Z,m){return R&&(R[G]||R(V,k))||Z[G].slice(0,m)},$=function(R){return S.s(te%12||12,R,"0")},K=O.meridiem||function(R,G,Z){var m=R<12?"AM":"PM";return Z?m.toLowerCase():m},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:j+1,MM:S.s(j+1,2,"0"),MMM:ne(O.monthsShort,j,Y,3),MMMM:ne(Y,j),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:ne(O.weekdaysMin,this.$W,F,2),ddd:ne(O.weekdaysShort,this.$W,F,3),dddd:F[this.$W],H:String(te),HH:S.s(te,2,"0"),h:$(1),hh:$(2),a:K(te,se,!0),A:K(te,se,!1),m:String(se),mm:S.s(se,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:L};return k.replace(N,function(R,G){return G||_[R]||L.replace(":","")})},I.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},I.diff=function(P,V,O){var k,L=S.p(V),te=M(P),se=(te.utcOffset()-this.utcOffset())*n,j=this-te,F=S.m(this,te);return F=(k={},k[C]=F/12,k[d]=F,k[v]=F/3,k[u]=(j-se)/6048e5,k[c]=(j-se)/864e5,k[f]=j/o,k[l]=j/n,k[a]=j/t,k)[L]||j,O?F:S.a(F)},I.daysInMonth=function(){return this.endOf(d).$D},I.$locale=function(){return g[this.$L]},I.locale=function(P,V){if(!P)return this.$L;var O=this.clone(),k=T(P,V,!0);return k&&(O.$L=k),O},I.clone=function(){return S.w(this.$d,this)},I.toDate=function(){return new Date(this.valueOf())},I.toJSON=function(){return this.isValid()?this.toISOString():null},I.toISOString=function(){return this.$d.toISOString()},I.toString=function(){return this.$d.toUTCString()},A}(),W=B.prototype;return M.prototype=W,[["$ms",s],["$s",a],["$m",l],["$H",f],["$W",c],["$M",d],["$y",C],["$D",x]].forEach(function(A){W[A[1]]=function(I){return this.$g(I,A[0],A[1])}}),M.extend=function(A,I){return A.$i||(A(I,B,M),A.$i=!0),M},M.locale=T,M.isDayjs=p,M.unix=function(A){return M(1e3*A)},M.en=g[w],M.Ls=g,M.p={},M})})(Os);const z=ut,Ot="reactSchedulerOutsideWrapper",Fe="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",Ls=Is`

  #${Ot} {
    font-family: ${Fe};
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${Ot} *,
 #${Ot} *:before,
 #${Ot} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`,Ys={mode:"light",navHeight:"44px",colors:{background:"#FFFFFF",gridBackground:"#FFFFFF",primary:"#F8F8FD",secondary:"#E6F3FF",tertiary:"#C9E5FF",textPrimary:"#1C222F",textSecondary:"#FFFFFF",placeholder:"#777777",button:"#FFFFFF",border:"#D2D2D2",tooltip:"#3B3C5F",hover:"#E6F3FF",disabled:"#777777",warning:"#EF4444",defaultTile:"#728DE2",accent:"#0A11EB",currentDay:"#B3D9FF",today:"#0F7D66",subcontractBg:"#FFF7ED",subcontractBorder:"#F59E0B",subcontractText:"#92400E",unassignedBorder:"#F59E0B",unassignedText:"#92400E"}},Ns={mode:"dark",navHeight:"44px",colors:{background:"#161B22",gridBackground:"#1E252E",primary:"#303b49",secondary:"#444e5b",tertiary:"#6E757F",textPrimary:"#DADCE0",textSecondary:"#EAEBED",placeholder:"#bbbbbb",button:"#60676f",border:"#2C333A",hover:"#303439",tooltip:"#3B3C5F",disabled:"#38414a",warning:"#FF4C4C",defaultTile:"#728DE2",accent:"#1798c2",currentDay:"#2A4A6B",today:"#2DD4BF",subcontractBg:"#422006",subcontractBorder:"#D97706",subcontractText:"#FCD34D",unassignedBorder:"#D97706",unassignedText:"#FCD34D"}},bt=`
margin: 0;
padding: 0;
`,ft=`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;b.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;const ke=50,Ue=24,ht=16,wt=40,Kt=wt+ht+Ue,St=84,he=56,Ae=196,We=12,Pe=50,Ct=24,Lt=16,Sn=40,Fs=Ct+Lt+Sn,Dr=24,Er=52,ot={topRow:`600 14px ${Fe}`,middleRow:`400 10px ${Fe}`,bottomRow:{name:`600 14px ${Fe}`,number:`600 10px ${Fe}`,hoursInDay:`400 9px ${Fe}`}},kt=3,_r=12,Jt=24,Tr="reactSchedulerCanvasHeaderWrapper",Pr="reactSchedulerCanvasWrapper",Ke=Ot,zs=4,qt=48,st=5,Bs=40,Ar=8,Cn=Ue/2+2,Ir=ht/2+Ue+1,Or=2,_e=60,Le=21,Lr=58,Yr="reactSchedulerBody",Nr=e=>e%4===0&&e%100>0||e%400===0?366:365,kn=e=>{const r=e.day();return r!==0&&r!==6},Fr=(e,r)=>z(`${e.year}-${e.month+1}-${e.dayOfMonth}`).add(r,"months").daysInMonth(),zr=e=>({hour:e.hour(),dayName:e.format("ddd"),dayOfMonth:e.date(),weekOfYear:e.isoWeek(),month:e.month(),monthName:e.format("MMMM"),isBusinessDay:kn(e),isCurrentDay:e.isSame(z(),"day"),year:parseInt(e.format("YYYY"))}),Mn=(e,r,t,n,o,s,a,l=!1)=>{s?e.fillStyle=a.colors.currentDay:o?e.fillStyle="transparent":e.fillStyle=a.mode==="dark"?a.colors.primary:"#F2F6F4",e.beginPath(),e.setLineDash([]),e.fillRect(r,t,n,he);const f=a.mode==="dark";e.strokeStyle=f?a.colors.border:"#EEF3F0",e.beginPath(),e.moveTo(r+n-.5,t),e.lineTo(r+n-.5,t+he),e.stroke(),e.strokeStyle=f?a.colors.border:"#E4EAE7",e.beginPath(),e.moveTo(r,t+.5),e.lineTo(r+n,t+.5),e.stroke(),l&&(e.strokeStyle=f?a.colors.today:"#5C8374",e.beginPath(),e.moveTo(r+.5,t),e.lineTo(r+.5,t+he),e.stroke())},$n=(e,r)=>{let t=0;for(const n of r)n<=e&&t++;return t*Le},Hs=(e,r,t,n,o,s=[])=>{for(let a=0;a<r;a++){const l=$n(a,s);for(let f=0;f<=t;f++){const c=z(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(f,"days"),u=c.isSame(z(),"day"),d=c.date()===1;Mn(e,f*ke,a*he+l,ke,kn(c),u,o,d)}}},Ws=(e,r,t,n)=>{e.setLineDash([5,5]),e.strokeStyle=n.colors.border,e.moveTo(r+.5,.5),e.lineTo(r+.5,t+.5),e.stroke()},js=(e,r,t,n,o,s=[])=>{let a=0,l=-(n.dayOfMonth-1)*We;const f=r*he+s.length*Le;for(let c=0;c<=t;c++){const d=z(`${n.year}-${n.month+1}-${n.dayOfMonth}`).add(c,"weeks").isSame(z(),"week");for(let v=0;v<r;v++){const C=$n(v,s);Mn(e,a,v*he+C,St,!0,d,o)}a+=St}for(let c=0;c<t;c++){const u=Fr(n,c)*We;Ws(e,l,f,o),l+=u}},Zs=(e,r,t,n,o,s=[])=>{const a=z(`${n.year}-${n.month+1}-${n.dayOfMonth+1}`);for(let l=0;l<r;l++){const f=$n(l,s);for(let c=0;c<=t;c++){let u;c===Math.floor(t/2)?u=z():c>Math.floor(t/2)?u=z().add(c-Math.floor(t/2),"hours"):u=z().subtract(Math.floor(t/2)-l,"hours");const d=a.isSame(z(),"day")&&u.isSame(z(),"hour");Mn(e,c*Pe+Pe/2-.5,l*he+f,Pe,kn(u),d,o)}}},Vs=(e,r,t,n,o="group")=>{const s=t*he+r*Le,a=e.canvas.width;e.fillStyle=o==="subcontract"?n.colors.subcontractBorder+"40":o==="provider"?n.colors.subcontractBorder+"2E":o==="warning"?n.colors.unassignedBorder+"26":n.mode==="dark"?n.colors.primary+"80":"#E9EFEC",e.fillRect(0,s,a,Le)},Gs=(e,r,t,n,o,s,a=[],l=-1,f=-1,c=[])=>{if(e.clearRect(0,0,e.canvas.width,e.canvas.height),!!document.getElementById(Pr)){switch(r){case 0:js(e,t,n,o,s,a);break;case 1:Hs(e,t,n,o,s,a);break;case 2:Zs(e,t,n,o,s,a);break}for(let d=0;d<a.length;d++){const v=d===l?"subcontract":d===f?"warning":c.includes(d)?"provider":"group";Vs(e,d,a[d],s,v)}if(r===1){const d=z(`${o.year}-${o.month+1}-${o.dayOfMonth}`),v=t*he+a.length*Le;e.strokeStyle=s.mode==="dark"?s.colors.today:"#5C8374",e.setLineDash([]);for(let C=0;C<=n;C++)if(d.add(C,"days").date()===1){const x=C*ke+.5;e.beginPath(),e.moveTo(x,0),e.lineTo(x,v),e.stroke()}}}};var Dn={},Us={get exports(){return Dn},set exports(e){Dn=e}};(function(e,r){(function(t,n){e.exports=n()})(Te,function(){var t="week",n="year";return function(o,s,a){var l=s.prototype;l.week=function(f){if(f===void 0&&(f=null),f!==null)return this.add(7*(f-this.week()),"day");var c=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var u=a(this).startOf(n).add(1,n).date(c),d=a(this).endOf(t);if(u.isBefore(d))return 1}var v=a(this).startOf(n).date(c).startOf(t).subtract(1,"millisecond"),C=this.diff(v,t,!0);return C<0?a(this).startOf("week").week():Math.ceil(C)},l.weeks=function(f){return f===void 0&&(f=null),this.week(f)}}})})(Us);const Xs=Dn;var En={},Ks={get exports(){return En},set exports(e){En=e}};(function(e,r){(function(t,n){e.exports=n()})(Te,function(){return function(t,n,o){n.prototype.dayOfYear=function(s){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?a:this.add(s-a,"day")}}})})(Ks);const Js=En;var _n={},qs={get exports(){return _n},set exports(e){_n=e}};(function(e,r){(function(t,n){e.exports=n()})(Te,function(){var t="day";return function(n,o,s){var a=function(c){return c.add(4-c.isoWeekday(),t)},l=o.prototype;l.isoWeekYear=function(){return a(this).year()},l.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),t);var u,d,v,C,x=a(this),D=(u=this.isoWeekYear(),d=this.$u,v=(d?s.utc:s)().year(u).startOf("year"),C=4-v.isoWeekday(),v.isoWeekday()>4&&(C+=7),v.add(C,t));return x.diff(D,"week")+1},l.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var f=l.startOf;l.startOf=function(c,u){var d=this.$utils(),v=!!d.u(u)||u;return d.p(c)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):f.bind(this)(c,u)}}})})(qs);const Qs=_n;var Tn={},Rs={get exports(){return Tn},set exports(e){Tn=e}};(function(e,r){(function(t,n){e.exports=n()})(Te,function(){return function(t,n,o){n.prototype.isBetween=function(s,a,l,f){var c=o(s),u=o(a),d=(f=f||"()")[0]==="(",v=f[1]===")";return(d?this.isAfter(c,l):!this.isBefore(c,l))&&(v?this.isBefore(u,l):!this.isAfter(u,l))||(d?this.isBefore(c,l):!this.isAfter(c,l))&&(v?this.isAfter(u,l):!this.isBefore(u,l))}}})})(Rs);const ei=Tn;var Pn={},ti={get exports(){return Pn},set exports(e){Pn=e}};(function(e,r){(function(t,n){e.exports=n()})(Te,function(){var t,n,o=1e3,s=6e4,a=36e5,l=864e5,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,u=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:c,months:u,days:l,hours:a,minutes:s,seconds:o,milliseconds:1,weeks:6048e5},C=function(w){return w instanceof X},x=function(w,g,p){return new X(w,p,g.$l)},D=function(w){return n.p(w)+"s"},y=function(w){return w<0},N=function(w){return y(w)?Math.ceil(w):Math.floor(w)},Q=function(w){return Math.abs(w)},H=function(w,g){return w?y(w)?{negative:!0,format:""+Q(w)+g}:{negative:!1,format:""+w+g}:{negative:!1,format:""}},X=function(){function w(p,T,M){var S=this;if(this.$d={},this.$l=M,p===void 0&&(this.$ms=0,this.parseFromMilliseconds()),T)return x(p*v[D(T)],this);if(typeof p=="number")return this.$ms=p,this.parseFromMilliseconds(),this;if(typeof p=="object")return Object.keys(p).forEach(function(A){S.$d[D(A)]=p[A]}),this.calMilliseconds(),this;if(typeof p=="string"){var B=p.match(d);if(B){var W=B.slice(2).map(function(A){return A!=null?Number(A):0});return this.$d.years=W[0],this.$d.months=W[1],this.$d.weeks=W[2],this.$d.days=W[3],this.$d.hours=W[4],this.$d.minutes=W[5],this.$d.seconds=W[6],this.calMilliseconds(),this}}return this}var g=w.prototype;return g.calMilliseconds=function(){var p=this;this.$ms=Object.keys(this.$d).reduce(function(T,M){return T+(p.$d[M]||0)*v[M]},0)},g.parseFromMilliseconds=function(){var p=this.$ms;this.$d.years=N(p/c),p%=c,this.$d.months=N(p/u),p%=u,this.$d.days=N(p/l),p%=l,this.$d.hours=N(p/a),p%=a,this.$d.minutes=N(p/s),p%=s,this.$d.seconds=N(p/o),p%=o,this.$d.milliseconds=p},g.toISOString=function(){var p=H(this.$d.years,"Y"),T=H(this.$d.months,"M"),M=+this.$d.days||0;this.$d.weeks&&(M+=7*this.$d.weeks);var S=H(M,"D"),B=H(this.$d.hours,"H"),W=H(this.$d.minutes,"M"),A=this.$d.seconds||0;this.$d.milliseconds&&(A+=this.$d.milliseconds/1e3);var I=H(A,"S"),P=p.negative||T.negative||S.negative||B.negative||W.negative||I.negative,V=B.format||W.format||I.format?"T":"",O=(P?"-":"")+"P"+p.format+T.format+S.format+V+B.format+W.format+I.format;return O==="P"||O==="-P"?"P0D":O},g.toJSON=function(){return this.toISOString()},g.format=function(p){var T=p||"YYYY-MM-DDTHH:mm:ss",M={Y:this.$d.years,YY:n.s(this.$d.years,2,"0"),YYYY:n.s(this.$d.years,4,"0"),M:this.$d.months,MM:n.s(this.$d.months,2,"0"),D:this.$d.days,DD:n.s(this.$d.days,2,"0"),H:this.$d.hours,HH:n.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,"0"),SSS:n.s(this.$d.milliseconds,3,"0")};return T.replace(f,function(S,B){return B||String(M[S])})},g.as=function(p){return this.$ms/v[D(p)]},g.get=function(p){var T=this.$ms,M=D(p);return M==="milliseconds"?T%=1e3:T=M==="weeks"?N(T/v[M]):this.$d[M],T===0?0:T},g.add=function(p,T,M){var S;return S=T?p*v[D(T)]:C(p)?p.$ms:x(p,this).$ms,x(this.$ms+S*(M?-1:1),this)},g.subtract=function(p,T){return this.add(p,T,!0)},g.locale=function(p){var T=this.clone();return T.$l=p,T},g.clone=function(){return x(this.$ms,this)},g.humanize=function(p){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!p)},g.milliseconds=function(){return this.get("milliseconds")},g.asMilliseconds=function(){return this.as("milliseconds")},g.seconds=function(){return this.get("seconds")},g.asSeconds=function(){return this.as("seconds")},g.minutes=function(){return this.get("minutes")},g.asMinutes=function(){return this.as("minutes")},g.hours=function(){return this.get("hours")},g.asHours=function(){return this.as("hours")},g.days=function(){return this.get("days")},g.asDays=function(){return this.as("days")},g.weeks=function(){return this.get("weeks")},g.asWeeks=function(){return this.as("weeks")},g.months=function(){return this.get("months")},g.asMonths=function(){return this.as("months")},g.years=function(){return this.get("years")},g.asYears=function(){return this.as("years")},w}();return function(w,g,p){t=p,n=p().$utils(),p.duration=function(S,B){var W=p.locale();return x(S,{$l:W},B)},p.isDuration=C;var T=g.prototype.add,M=g.prototype.subtract;g.prototype.add=function(S,B){return C(S)&&(S=S.asMilliseconds()),T.bind(this)(S,B)},g.prototype.subtract=function(S,B){return C(S)&&(S=S.asMilliseconds()),M.bind(this)(S,B)}}})})(ti);const ni=Pn;var ri="Expected a function",Br=0/0,oi="[object Symbol]",si=/^\s+|\s+$/g,ii=/^[-+]0x[0-9a-f]+$/i,ai=/^0b[01]+$/i,ci=/^0o[0-7]+$/i,li=parseInt,di=typeof Te=="object"&&Te&&Te.Object===Object&&Te,ui=typeof self=="object"&&self&&self.Object===Object&&self,fi=di||ui||Function("return this")(),hi=Object.prototype,pi=hi.toString,gi=Math.max,mi=Math.min,An=function(){return fi.Date.now()};function yi(e,r,t){var n,o,s,a,l,f,c=0,u=!1,d=!1,v=!0;if(typeof e!="function")throw new TypeError(ri);r=Hr(r)||0,In(t)&&(u=!!t.leading,d="maxWait"in t,s=d?gi(Hr(t.maxWait)||0,r):s,v="trailing"in t?!!t.trailing:v);function C(g){var p=n,T=o;return n=o=void 0,c=g,a=e.apply(T,p),a}function x(g){return c=g,l=setTimeout(N,r),u?C(g):a}function D(g){var p=g-f,T=g-c,M=r-p;return d?mi(M,s-T):M}function y(g){var p=g-f,T=g-c;return f===void 0||p>=r||p<0||d&&T>=s}function N(){var g=An();if(y(g))return Q(g);l=setTimeout(N,D(g))}function Q(g){return l=void 0,v&&n?C(g):(n=o=void 0,a)}function H(){l!==void 0&&clearTimeout(l),c=0,n=f=o=l=void 0}function X(){return l===void 0?a:Q(An())}function w(){var g=An(),p=y(g);if(n=arguments,o=this,f=g,p){if(l===void 0)return x(f);if(d)return l=setTimeout(N,r),C(f)}return l===void 0&&(l=setTimeout(N,r)),a}return w.cancel=H,w.flush=X,w}function In(e){var r=typeof e;return!!e&&(r=="object"||r=="function")}function vi(e){return!!e&&typeof e=="object"}function xi(e){return typeof e=="symbol"||vi(e)&&pi.call(e)==oi}function Hr(e){if(typeof e=="number")return e;if(xi(e))return Br;if(In(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=In(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=e.replace(si,"");var t=ai.test(e);return t||ci.test(e)?li(e.slice(2),t?2:8):ii.test(e)?Br:+e}var On=yi;const Qt=[0,1,2];var Yt=(e=>(e[e.Tour=0]="Tour",e[e.Transfer=1]="Transfer",e))(Yt||{});const Wr=e=>Qt.includes(e),Mt=e=>{var n;const t=(((n=document.getElementById(Ke))==null?void 0:n.clientWidth)||0)-Ae;switch(e){case 1:return Math.ceil(t/ke)*kt;case 2:return Math.ceil(t/Pe)*kt;default:return Math.ceil(t/St)*kt}},bi=e=>Mt(e)/kt,Rt=(e,r)=>{const t=Mt(r)/2;let n;switch(r){case 1:n=e.subtract(t,"days");break;case 2:n=e.subtract(t,"hours");break;default:n=e.subtract(t,"weeks");break}let o;switch(r){case 1:o=e.add(t,"days");break;case 2:o=e.add(t,"hours");break;default:o=e.add(t,"weeks");break}return{startDate:n,endDate:o}},wi=(e,r)=>{const t=Rt(e,r);return{startDate:t.startDate.toDate(),endDate:t.endDate.toDate()}},Ln=()=>{var t;const e=((t=document.getElementById(Ke))==null?void 0:t.clientWidth)||0;return Math.max(0,e-Ae)*kt},jr=h.createContext({handleGoNext:()=>{},handleScrollNext:()=>{},handleGoPrev:()=>{},handleScrollPrev:()=>{},handleGoToday:()=>{},goToDate:()=>{},zoomIn:()=>{},zoomOut:()=>{},setZoom:()=>{},toggleDisplayActiveUnits:()=>{},updateTilesCoords:()=>{},tilesCoords:[],zoom:0,isNextZoom:!1,isPrevZoom:!1,date:z(),jumpDate:null,isLoading:!1,cols:0,startDate:{hour:0,dayName:"",dayOfMonth:0,weekOfYear:0,month:0,monthName:"",isCurrentDay:!1,isBusinessDay:!1,year:0},dayOfYear:0,recordsThreshold:0,config:{zoom:0}});z.extend(Xs),z.extend(Js),z.extend(Qs),z.extend(ei),z.extend(ni);const Si=({data:e,children:r,isLoading:t,config:n,defaultStartDate:o=z(),onRangeChange:s,handleToggleDisplayActiveUnits:a,onClearFilterData:l,toolbarActions:f})=>{const{zoom:c,maxRecordsPerPage:u=50}=n,[d,v]=h.useState(c),[C,x]=h.useState(z()),[D,y]=h.useState(null),[N,Q]=h.useState(!1),[H,X]=h.useState(Mt(d)),w=Qt[d]!==Qt[Qt.length-1],g=d!==0,p=h.useMemo(()=>wi(C,d),[C,d]),T=Rt(C,d).startDate,M=z(T).dayOfYear(),S=zr(T),B=h.useRef(null),W=h.useRef(!1),A=h.useRef(null),[I,P]=h.useState([{x:0,y:0}]),V=h.useCallback((G,Z="auto")=>{var U,E,J,ee;const m=Ln();switch(G){case"back":return(U=B.current)==null?void 0:U.scrollTo({behavior:Z,left:m/3});case"forward":return(E=B.current)==null?void 0:E.scrollTo({behavior:Z,left:m/3});case"middle":{const q=m/kt/4;return(J=B.current)==null?void 0:J.scrollTo({behavior:Z,left:m/2-q})}default:return(ee=B.current)==null?void 0:ee.scrollTo({behavior:Z,left:m/2})}},[]),O=G=>{P(G)},k=h.useCallback(G=>{const Z=bi(d);let m;switch(d){case 0:m=Z*7;break;case 1:m=Z;break;case 2:m=Math.ceil(Z/Jt);break}On(()=>{switch((G==="forward"||G==="back")&&(W.current=!0),A.current=G,G){case"back":x(E=>E.subtract(m,"days"));break;case"forward":x(E=>E.add(m,"days"));break;case"middle":x(z());break}s==null||s(p)},300)()},[s,p,d]);h.useEffect(()=>{A.current&&(V(A.current),A.current=null)},[C,V]),h.useEffect(()=>{B.current=document.getElementById(Ke),X(Mt(d))},[d]),h.useEffect(()=>{const G=()=>X(Mt(d));return window.addEventListener("resize",G),()=>window.removeEventListener("resize",G)},[d]),h.useEffect(()=>{s==null||s(p)},[s,p]),h.useEffect(()=>{Q(!1)},[o]),h.useEffect(()=>{N||(V("middle"),Q(!0),x(o))},[o,N,V]);const L=()=>{t||(x(G=>d===2?G.add(Dr,"hours"):G.add(Or,"weeks")),s==null||s(p))},te=h.useCallback(()=>{t||k("forward")},[t,k]),se=()=>{t||(x(G=>d===2?G.subtract(Dr,"hours"):G.subtract(Or,"weeks")),s==null||s(p))},j=h.useCallback(()=>{!N||t||k("back")},[N,t,k]),F=h.useCallback(()=>{t||(A.current="middle",x(z()),y(null),s==null||s(p))},[t,s,p]),Y=h.useCallback(G=>{if(t)return;const Z=z(G).startOf("day");Z.isValid()&&(A.current="middle",x(Z),y(Z),s==null||s(p))},[t,s,p]);h.useEffect(()=>{if(!D)return;const G=()=>y(null);return document.addEventListener("mousedown",G,{once:!0}),()=>document.removeEventListener("mousedown",G)},[D]);const ne=()=>K(d+1),$=()=>K(d-1),K=G=>{Wr(G)&&(v(G),X(Mt(G)),s==null||s(p))},_=()=>a==null?void 0:a(),{Provider:R}=jr;return i.jsx(R,{value:{data:e,config:n,handleGoNext:L,handleScrollNext:te,handleGoPrev:se,handleScrollPrev:j,handleGoToday:F,goToDate:Y,zoomIn:ne,zoomOut:$,setZoom:K,zoom:d,isNextZoom:w,isPrevZoom:g,date:C,jumpDate:D,isLoading:t,cols:H,startDate:S,dayOfYear:M,toggleDisplayActiveUnits:_,tilesCoords:I,updateTilesCoords:O,recordsThreshold:u,onClearFilterData:l,suppressNextSlideRef:W,toolbarActions:f},children:r})},Ge=()=>h.useContext(jr),Zr=(e,r,t)=>{const n=Math.max(0,r),o=Math.max(0,t);e.canvas.width=n*window.devicePixelRatio,e.canvas.height=o*window.devicePixelRatio,e.canvas.style.width=n+"px",e.canvas.style.height=o+"px",e.scale(window.devicePixelRatio,window.devicePixelRatio)},Vr=()=>{var e;return typeof window<"u"&&!!((e=window.matchMedia)!=null&&e.call(window,"(prefers-reduced-motion: reduce)").matches)},Gr=(e,r)=>{if(r.length===0)return e;let t=e,n=0;for(const o of r){const s=o*he+n*Le;if(e>=s+Le)n++;else if(e>=s)return o*he+n*Le-n*Le}return t-n*Le},Ci=5,Ur=(e,r)=>{const t=Math.abs(r.x-e.x),n=Math.abs(r.y-e.y);return Math.sqrt(t*t+n*n)>Ci},$t=(e,r,t)=>{const n=t.getBoundingClientRect();return{x:e-n.left+t.scrollLeft,y:r-n.top+t.scrollTop}},ki=({data:e,baseData:r,zoom:t,startDate:n,onEventDrop:o,onEventDrag:s,draggableConfig:a={},gridRef:l,separatorRowIndices:f=[]})=>{const c=r?r.length>0&&r[0].data.length>0&&!Array.isArray(r[0].data[0])?r.map(K=>({...K,data:[K.data]})):r:e,{enabled:u=!0,isDraggable:d,resourceOnly:v=!1,isValidDrop:C}=a,[x,D]=h.useState("idle"),[y,N]=h.useState(null),[Q,H]=h.useState({x:0,y:0}),[X,w]=h.useState({width:0,height:48}),[g,p]=h.useState(null),[T,M]=h.useState(!0),S=h.useRef({x:0,y:0}),B=h.useRef({x:0,y:0}),W=h.useRef({x:0,y:0}),A=h.useRef(null),I=h.useRef(null),P=h.useRef(0),V=h.useRef(null),O=h.useCallback(K=>!u||K.draggable===!1?!1:d?d(K):!0,[u,d]),k=h.useCallback((K,_)=>{const R=Gr(_,f),G=Math.floor(R/he);let Z;switch(t){case 0:Z=We*7;break;case 1:Z=ke;break;case 2:Z=Pe;break;default:Z=ke}const m=Math.floor(K/Z);let U;const E=z().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:U=E.add(m*7,"days").toDate();break;case 1:U=E.add(m,"days").toDate();break;case 2:U=E.add(m,"hours").toDate();break;default:U=E.toDate()}return{snappedDate:U,snappedResourceIndex:G}},[t,n,f]),L=h.useCallback((K,_,R,G)=>{const Z=[],m=_.getTime(),U=R.getTime(),E=c.find(ee=>ee.id===G);if(!E)return Z;const J=[];for(const ee of E.data)Array.isArray(ee)?J.push(...ee):J.push(ee);for(const ee of J){if(ee.segmentId===K.segmentId)continue;const q=ee.startDate.getTime(),ae=ee.endDate.getTime();if(m>=q&&m<ae||U>q&&U<=ae||m<=q&&U>=ae){const ce=new Date(Math.max(m,q)),pe=new Date(Math.min(U,ae)),Ce=pe.getTime()-ce.getTime();Z.push({event:ee,conflictStart:ce,conflictEnd:pe,overlapDuration:Ce})}}return Z},[c]),te=h.useCallback((K,_,R,G)=>{const Z=[],m=_.getTime(),U=R.getTime(),E=z(_).format("YYYY-MM-DD"),J=c.find(q=>q.id===G);if(!J)return Z;const ee=[];for(const q of J.data)Array.isArray(q)?ee.push(...q):ee.push(q);for(const q of ee){if(q.segmentId===K.segmentId)continue;const ae=q.startDate.getTime(),fe=q.endDate.getTime(),ce=z(q.startDate).format("YYYY-MM-DD"),pe=z(q.endDate).format("YYYY-MM-DD"),Ce=z(R).format("YYYY-MM-DD");if(!(ce===E||pe===E||ce===Ce||pe===Ce||z(q.startDate).isBefore(_,"day")&&z(q.endDate).isAfter(R,"day"))||m>=ae&&m<fe||U>ae&&U<=fe||m<=ae&&U>=fe)continue;let ue,Ie;fe<=m?(ue=m-fe,Ie="before"):(ue=ae-U,Ie="after"),Z.push({event:q,timeGap:ue,position:Ie})}return Z.sort((q,ae)=>q.timeGap-ae.timeGap)},[c]),se=h.useCallback((K,_,R)=>{const G=k(_,R);let Z,m;if(v)Z=K.startDate,m=K.endDate;else{const fe=z(K.endDate).diff(K.startDate);Z=G.snappedDate,m=z(Z).add(fe,"milliseconds").toDate()}let U=0,E="",J;for(const fe of e){const ce=Math.max(fe.data.length,1);if(G.snappedResourceIndex<U+ce){E=fe.id,J=fe.capacity;break}U+=ce}if(!E)return null;let ee=!0;J!==void 0&&K.totalPassengers!==void 0&&(ee=K.totalPassengers<=J);const q=L(K,Z,m,E),ae=q.length===0?te(K,Z,m,E):[];return{startDate:Z,endDate:m,resourceId:E,resourceIndex:G.snappedResourceIndex,resourceCapacity:J,hasCapacity:ee,conflicts:q,hasConflict:q.length>0,nearbyEvents:ae}},[k,e,v,L,te]),j=h.useCallback((K,_)=>{if(!s)return;const R=Date.now();if(R-P.current<100)return;P.current=R;const G={event:K,currentStartDate:_.startDate,currentEndDate:_.endDate,currentResourceId:_.resourceId,conflicts:_.conflicts};s(G)},[s]),F=h.useCallback((K,_)=>{if(!O(K)||!l.current)return;_.preventDefault(),_.stopPropagation();const R=_.target.closest('[style*="left"]');let G=0,Z=0;R&&R.style.left&&R.style.top&&(G=parseInt(R.style.left),Z=parseInt(R.style.top));const m=$t(_.clientX,_.clientY,l.current);S.current={x:G,y:Z},B.current={x:_.clientX,y:_.clientY},W.current={x:m.x-G,y:20},V.current={startDate:K.startDate,endDate:K.endDate,resourceId:""};for(const J of e){for(const ee of J.data)if(ee.some(q=>q.segmentId===K.segmentId)){V.current.resourceId=J.id;break}if(V.current.resourceId)break}N(K),D("potential"),H({x:G,y:Z});let U=100,E=48;if(R){const J=R.getBoundingClientRect();U=J.width,E=J.height}w({width:U,height:E})},[O,l,e,t]),Y=h.useCallback(K=>{if(!l.current)return;let _=l.current;for(;_&&_!==document.body;){const q=window.getComputedStyle(_);if(_.scrollHeight>_.clientHeight&&(q.overflowY==="auto"||q.overflowY==="scroll"||q.overflow==="auto"||q.overflow==="scroll"))break;_=_.parentElement}(!_||_===document.body)&&(_=document.documentElement);const R=_.getBoundingClientRect(),G=K.clientY,Z=50,m=12,U=G-R.top,E=R.bottom-G;let J=!1,ee=0;U<Z&&U>0?(J=!0,ee=-m*(1-U/Z)):E<Z&&E>0&&(J=!0,ee=m*(1-E/Z)),J?(I.current&&cancelAnimationFrame(I.current),I.current=requestAnimationFrame(()=>{_.scrollTop+=ee,x==="dragging"&&Y(K)})):I.current&&(cancelAnimationFrame(I.current),I.current=null)},[l,x]),ne=h.useCallback(K=>{if(x==="idle"||x==="animating"||!y||!l.current)return;const _={x:K.clientX,y:K.clientY};if(x==="potential")if(Ur(B.current,_))D("dragging");else return;Y(K);const R=$t(K.clientX,K.clientY,l.current);A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>{const G={x:R.x-W.current.x,y:R.y-W.current.y};H(G);const Z=se(y,R.x,R.y);if(Z&&C){const m={event:y,currentStartDate:Z.startDate,currentEndDate:Z.endDate,currentResourceId:Z.resourceId,conflicts:Z.conflicts};Z.hasConflict=!C(m)}if(p(Z),Z){const m=Z.hasCapacity!==!1;M(m),j(y,Z)}})},[x,y,l,se,j,C,Y]),$=h.useCallback(async K=>{if(x==="idle"||x==="animating")return;const _={x:K.clientX,y:K.clientY};if(!Ur(B.current,_)||x==="potential"){D("idle"),N(null),p(null);return}if(!y||!g||!V.current){D("idle"),N(null),p(null);return}if(g.hasCapacity===!1){M(!1),D("animating"),H(S.current),setTimeout(()=>{D("idle"),N(null),p(null),M(!0)},300);return}const G={event:y,originalStartDate:V.current.startDate,originalEndDate:V.current.endDate,originalResourceId:V.current.resourceId,newStartDate:g.startDate,newEndDate:g.endDate,newResourceId:g.resourceId,hasConflict:g.hasConflict,conflicts:g.conflicts};let Z=!0;if(o)try{const m=o(G);Z=m instanceof Promise?await m:m}catch{Z=!1}Z?(M(!0),D("idle"),N(null),p(null)):(M(!1),D("animating"),H(S.current),setTimeout(()=>{D("idle"),N(null),p(null),M(!0)},300))},[x,y,g,o,C]);return h.useEffect(()=>{if(x==="potential"||x==="dragging"){const K=R=>ne(R),_=R=>$(R);return document.addEventListener("mousemove",K),document.addEventListener("mouseup",_),()=>{document.removeEventListener("mousemove",K),document.removeEventListener("mouseup",_)}}else return()=>{}},[x,ne,$]),h.useEffect(()=>()=>{A.current&&(cancelAnimationFrame(A.current),A.current=null),I.current&&(cancelAnimationFrame(I.current),I.current=null)},[]),h.useEffect(()=>{(x==="idle"||x==="animating")&&(A.current&&(cancelAnimationFrame(A.current),A.current=null),I.current&&(cancelAnimationFrame(I.current),I.current=null))},[x]),h.useEffect(()=>{(x==="dragging"||x==="potential")&&(x==="dragging"?(D("animating"),H(S.current),setTimeout(()=>{D("idle"),N(null),p(null)},300)):(D("idle"),N(null),p(null)))},[t]),h.useEffect(()=>{if((x==="dragging"||x==="potential")&&y){let K=!1;for(const _ of e){for(const R of _.data)if(R.some(G=>G.segmentId===y.segmentId)){K=!0;break}if(K)break}K||(x==="dragging"?(D("animating"),H(S.current),setTimeout(()=>{D("idle"),N(null),p(null)},300)):(D("idle"),N(null),p(null)))}},[e,x,y]),{dragState:x,draggedEvent:y,ghostPosition:Q,ghostDimensions:X,dropTarget:g,isValidDrop:T,handleDragStart:F,isDraggable:O,draggingEventId:(y==null?void 0:y.segmentId)||null,resourceOnly:v}},Mi=({data:e,baseData:r,zoom:t,startDate:n,onTimeRangeSelect:o,onMultiTimeRangeSelect:s,clickToAddConfig:a={},gridRef:l,isDragging:f,separatorRowIndices:c=[]})=>{const{enabled:u=!1,isSelectable:d}=a,v=u&&!!o,C=h.useCallback(m=>{let U=0;for(const E of c)E<=m&&U++;return m*he+U*Le},[c]),[x,D]=h.useState("idle"),[y,N]=h.useState(null),[Q,H]=h.useState(null),[X,w]=h.useState(null),[g,p]=h.useState(!1),[T,M]=h.useState([]),[S,B]=h.useState(!1),W=h.useRef(null),A=h.useRef(null),I=h.useRef(null),P=h.useRef(null),V=h.useCallback(()=>{switch(t){case 0:return We*7;case 1:return ke;case 2:return Pe;default:return ke}},[t]),O=h.useCallback(m=>{const U=V(),E=Math.floor(m/U),J=z().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0);switch(t){case 0:return J.add(E*7,"days").toDate();case 1:return J.add(E,"days").toDate();case 2:return J.add(E,"hours").toDate();default:return J.toDate()}},[t,n,V]),k=h.useCallback(m=>{const U=Gr(m,c),E=Math.floor(U/he);let J=0;for(const ee of e){const q=Math.max(ee.data.length,1);if(E<J+q)return{resourceId:ee.id,resourceIndex:E,resourceLabel:ee.label};J+=q}return null},[e,c]),L=h.useCallback(m=>{const U=V();return Math.floor(m/U)*U},[V]),te=h.useCallback((m,U,E,J=[])=>{const ee=[],ae=(r||e).find(pe=>pe.id===m),fe=U.getTime(),ce=E.getTime();if(ae){const pe=ae.data[0],Ce=pe&&Array.isArray(pe)?ae.data.flat():ae.data;for(const be of Ce){const oe=new Date(be.startDate).getTime(),ue=new Date(be.endDate).getTime();if(fe<ue&&ce>oe){const Ie=new Date(Math.max(fe,oe)),je=new Date(Math.min(ce,ue)),Oe=je.getTime()-Ie.getTime();ee.push({event:be,conflictStart:Ie,conflictEnd:je,overlapDuration:Oe})}}}for(const pe of J){if(pe.resourceId!==m)continue;const Ce=pe.startDate.getTime(),be=pe.endDate.getTime();if(fe<be&&ce>Ce){const oe=new Date(Math.max(fe,Ce)),ue=new Date(Math.min(ce,be)),Ie=ue.getTime()-oe.getTime(),je={segmentId:`pending-${pe.startDate.getTime()}`,reservationId:`pending-${pe.startDate.getTime()}`,startDate:pe.startDate,endDate:pe.endDate,occupancy:0,title:`New Event (${pe.resourceLabel.title})`,bookingNumber:"",description:"Pending selection"};ee.push({event:je,conflictStart:oe,conflictEnd:ue,overlapDuration:Ie})}}return ee},[e,r]),se=h.useCallback(m=>{if(!v||f||!l.current||m.button!==0)return;const U=m.target;if(U.closest("[data-segment-id]")||U.closest("[data-multi-select-ui]"))return;const E=$t(m.clientX,m.clientY,l.current),J=k(E.y);if(!J)return;W.current={x:m.clientX,y:m.clientY},A.current=J.resourceIndex;const ee=L(E.x),q=V(),ae=C(J.resourceIndex);N(E),H(E),w({x:ee,y:ae,width:q,height:he}),D("selecting")},[v,f,l,k,L,V,C]),j=h.useCallback(m=>{H(m);const U=V(),E=L((y==null?void 0:y.x)||0),J=L(m.x),ee=C(A.current),q=Math.min(E,J),ae=Math.max(E,J)+U;w({x:q,y:ee,width:ae-q,height:he})},[y,V,L,C]),F=h.useCallback(()=>{P.current&&(cancelAnimationFrame(P.current),P.current=null)},[]),Y=h.useCallback((m,U)=>{const E=document.getElementById(Ke);if(!E||!l.current)return;const J=E.getBoundingClientRect(),ee=60,q=12,ae=m-(J.left+Ae),fe=J.right-m;let ce=0;ae<ee?ce=-q*(1-Math.max(0,ae)/ee):fe<ee&&(ce=q*(1-Math.max(0,fe)/ee)),F(),ce!==0&&(P.current=requestAnimationFrame(()=>{E.scrollLeft+=ce,j($t(m,U,l.current)),Y(m,U)}))},[l,j,F]),ne=h.useCallback(m=>{if(x!=="selecting"||!l.current||A.current===null)return;const U=$t(m.clientX,m.clientY,l.current);I.current&&cancelAnimationFrame(I.current),I.current=requestAnimationFrame(()=>j(U)),Y(m.clientX,m.clientY)},[x,l,j,Y]),$=h.useCallback(m=>{if(x!=="selecting")return;if(F(),!l.current||!y||!W.current){D("idle"),N(null),H(null),w(null);return}const U=$t(m.clientX,m.clientY,l.current),E=k(y.y);if(!E){D("idle"),N(null),H(null),w(null);return}const J=Math.min(y.x,U.x),ee=Math.max(y.x,U.x),q=O(J),ae=O(ee),fe=z(ae).hour(23).minute(59).second(0).millisecond(0).toDate();if(d&&!d(E.resourceId,q,fe)){D("idle"),N(null),H(null),w(null);return}const ce=te(E.resourceId,q,fe,T),pe=ce.length>0,Ce={startDate:q,endDate:fe,resourceId:E.resourceId,resourceLabel:E.resourceLabel,zoomLevel:t,hasConflict:pe,conflicts:pe?ce:void 0};if(g)M(be=>[...be,Ce]),B(!0);else if(o){const be=o(Ce),oe=ue=>{ue!=null&&ue.continueMultiSelect&&(p(!0),M([Ce]),B(!0))};be instanceof Promise?be.then(oe):oe(be)}D("idle"),N(null),H(null),w(null),W.current=null,A.current=null},[x,l,y,k,O,d,o,t,g,te,T,F]),K=h.useCallback(()=>{if(T.length>0&&s){B(!1);const m=s(T),U=E=>{E!=null&&E.continueMultiSelect?B(!0):(M([]),p(!1),B(!1))};m instanceof Promise?m.then(U):U(m);return}M([]),p(!1),B(!1)},[T,s]),_=h.useCallback(()=>{M([]),p(!1),B(!1)},[]),R=h.useCallback(m=>{M(U=>{const E=U.filter((J,ee)=>ee!==m);return E.length===0&&(p(!1),B(!1)),E})},[]),G=h.useCallback((m,U)=>{M(E=>E.map((J,ee)=>{if(ee!==m)return J;const q={...J,...U},ae=E.filter((ce,pe)=>pe!==m),fe=te(q.resourceId,q.startDate,q.endDate,ae);return{...q,hasConflict:fe.length>0,conflicts:fe.length>0?fe:void 0}}))},[te]),Z=h.useCallback(m=>{m.key==="Escape"&&(x==="selecting"?(F(),D("idle"),N(null),H(null),w(null),W.current=null,A.current=null):g&&T.length>0&&(M([]),p(!1),B(!1)))},[x,g,T.length,F]);return h.useEffect(()=>{if(x==="selecting")return document.addEventListener("mousemove",ne),document.addEventListener("mouseup",$),document.addEventListener("keydown",Z),()=>{document.removeEventListener("mousemove",ne),document.removeEventListener("mouseup",$),document.removeEventListener("keydown",Z)}},[x,ne,$,Z]),h.useEffect(()=>{if(g&&T.length>0)return document.addEventListener("keydown",Z),()=>{document.removeEventListener("keydown",Z)}},[g,T.length,Z]),h.useEffect(()=>()=>{I.current&&(cancelAnimationFrame(I.current),I.current=null),F()},[F]),h.useEffect(()=>{f&&x==="selecting"&&(F(),D("idle"),N(null),H(null),w(null),W.current=null,A.current=null)},[f,x,F]),{selectionState:x,selectionStart:y,selectionEnd:Q,selectionBox:X,handleGridMouseDown:se,isEnabled:v,pendingSelections:T,confirmSelections:K,clearSelections:_,removeSelection:R,updateSelection:G,isMultiSelectActive:g,hasUnconfirmedSelections:S}},$i=b.div`
  height: calc(100vh - headerHeight);
  position: relative;
`,Di=b.div`
  position: relative;
`,Ei=b.canvas``;b.canvas``;const _i=b.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
`,Xr=b.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({position:e})=>e==="left"?0:"auto"};
  right: ${({position:e})=>e==="right"?0:"auto"};
`,Ti=[],Pi=h.forwardRef(function({zoom:r,rows:t,data:n,baseData:o,onTileClick:s,onTileContextMenu:a,onEventDrop:l,onEventDrag:f,draggableConfig:c,onDragStateChange:u,onTimeRangeSelect:d,onMultiTimeRangeSelect:v,clickToAddConfig:C,separatorRowIndices:x=[],subcontractSeparatorIndex:D=-1,warningSeparatorIndex:y=-1,providerSeparatorIndices:N=Ti,fadingUnitIds:Q},H){const X=h.useRef(!1),{handleScrollNext:w,handleScrollPrev:g,date:p,isLoading:T,cols:M,startDate:S,suppressNextSlideRef:B,config:W}=Ge(),A=h.useRef(null),I=h.useRef(null),P=h.useRef(t),V=h.useRef(p),O=h.useRef(null),k=h.useRef(null),L=h.useRef(null),te=h.useRef(null),[se,j]=h.useState(!1),F=Xt(),{dragState:Y,draggedEvent:ne,ghostPosition:$,ghostDimensions:K,dropTarget:_,isValidDrop:R,handleDragStart:G,isDraggable:Z,draggingEventId:m,resourceOnly:U}=ki({data:n,baseData:o||n,zoom:r,startDate:S,onEventDrop:l,onEventDrag:f,draggableConfig:c,gridRef:te,separatorRowIndices:x});h.useEffect(()=>{const ge=Y==="dragging"||Y==="potential";j(ge),u&&u(ge)},[Y,u]);const E=h.useRef(!1),J=h.useRef(p),ee=h.useRef(null);h.useEffect(()=>{var ie;const ge=J.current;if(J.current=p,!E.current){E.current=!0;return}if(B!=null&&B.current){B.current=!1;return}const Me=te.current;if(!(Me!=null&&Me.animate))return;const Be=p.isAfter(ge)?48:-48;(ie=ee.current)==null||ie.cancel(),Me.style.willChange="transform";const $e=Me.animate([{transform:`translateX(${Be}px)`,opacity:.4},{transform:"translateX(0)",opacity:1}],{duration:600,easing:"cubic-bezier(0.16, 1, 0.3, 1)"}),Re=()=>{Me.style.willChange=""};$e.onfinish=Re,$e.oncancel=Re,ee.current=$e},[p,B]);const{selectionState:q,selectionBox:ae,handleGridMouseDown:fe,pendingSelections:ce,confirmSelections:pe,clearSelections:Ce,removeSelection:be,updateSelection:oe,isMultiSelectActive:ue,hasUnconfirmedSelections:Ie}=Mi({data:n,baseData:o||n,zoom:r,startDate:S,onTimeRangeSelect:d,onMultiTimeRangeSelect:v,clickToAddConfig:C,gridRef:te,isDragging:se,separatorRowIndices:x}),je=h.useCallback(ge=>{ge.preventDefault()},[]),Oe=h.useCallback(ge=>{ge.preventDefault()},[]),Et=x.length*Le,Qe=h.useCallback(ge=>{const Me=Ln(),Be=t*he+1+Et;Zr(ge,Me,Be),Gs(ge,r,t,M,S,F,x,D,y,N)},[M,S,t,r,F,x,D,y,N,Et]);return h.useEffect(()=>{if(!A.current)return;const ge=A.current.getContext("2d");if(!ge)return;const Me=()=>Qe(ge);return window.addEventListener("resize",Me),()=>window.removeEventListener("resize",Me)},[Qe]),h.useEffect(()=>{var le;const ge=P.current,Me=V.current;if(P.current=t,V.current=p,ge===t||!p.isSame(Me,"day")||Vr())return;const Be=A.current,$e=I.current;if(!Be||!$e||Be.width===0||Be.height===0)return;const Re=$e.getContext("2d");if(!Re)return;$e.width=Be.width,$e.height=Be.height,$e.style.width=Be.style.width,$e.style.height=Be.style.height,Re.setTransform(1,0,0,1,0,0),Re.clearRect(0,0,$e.width,$e.height),Re.drawImage(Be,0,0),(le=O.current)==null||le.cancel(),$e.style.opacity="1";const ie=$e.animate([{opacity:1},{opacity:0}],{duration:260,easing:"ease"});ie.onfinish=()=>{$e.style.opacity="0"},O.current=ie},[t,p]),h.useEffect(()=>{const ge=A.current;if(!ge)return;ge.style.letterSpacing="1px";const Me=ge.getContext("2d");Me&&Qe(Me)},[p,t,r,Qe]),h.useEffect(()=>{if(!k.current)return;const ge=new IntersectionObserver(Me=>{Me[0].isIntersecting&&!X.current&&(X.current=!0,w(),setTimeout(()=>{X.current=!1},1e3))},{root:document.getElementById(Ke)});return ge.observe(k.current),()=>{ge.disconnect()}},[w]),h.useEffect(()=>{if(!L.current)return;const ge=new IntersectionObserver(Me=>{Me[0].isIntersecting&&!X.current&&(X.current=!0,g(),setTimeout(()=>{X.current=!1},1e3))},{root:document.getElementById(Ke),rootMargin:`0px 0px 0px -${Ae}px`});return ge.observe(L.current),()=>{ge.disconnect()}},[g]),i.jsxs($i,{id:Pr,children:[i.jsxs(Di,{ref:ge=>{typeof H=="function"?H(ge):H&&(H.current=ge),te.current=ge},onMouseDown:fe,style:{cursor:d?"crosshair":"default"},children:[i.jsx(Xr,{position:"left",ref:L}),i.jsx(Vn,{isLoading:T,position:"left"}),i.jsx(Ei,{ref:A,onDragStart:je,onDragOver:Oe,style:{userSelect:Y==="dragging"?"none":"auto"}}),i.jsx(_i,{ref:I,"aria-hidden":!0}),i.jsx(Ed,{zoom:r,startDate:S}),i.jsx(Pd,{zoom:r,startDate:S}),i.jsx(Nl,{data:n,zoom:r,onTileClick:s,onTileContextMenu:a,onDragStart:G,isDraggable:Z,draggingEventId:m,separatorRowIndices:x,fadingUnitIds:Q,highlightedSegmentId:(W==null?void 0:W.highlightedSegmentId)??null,focusedUnitIds:(W==null?void 0:W.focusedUnitIds)??null,leavingSegmentIds:(W==null?void 0:W.leavingSegmentIds)??null,ghostProject:(W==null?void 0:W.ghostProject)??null}),i.jsx(Xr,{ref:k,position:"right"}),i.jsx(Vn,{isLoading:T,position:"right"}),(Y==="dragging"||Y==="animating")&&i.jsx(ld,{draggedEvent:ne,ghostPosition:$,ghostDimensions:K,dropTarget:_,isValidDrop:R,dragState:Y,zoom:r,data:n,resourceOnly:U,separatorRowIndices:x}),i.jsx(fd,{selectionBox:ae,isSelecting:q==="selecting"}),ue&&ce.length>0&&i.jsx($d,{selections:ce,data:n,zoom:r,startDate:S,onRemove:be,onUpdate:oe,separatorRowIndices:x})]}),ue&&Ie&&ce.length>0&&i.jsx(bd,{selections:ce,onConfirm:pe,onClear:Ce,onRemove:be})]})}),Se=(e,r="12h")=>z(e).format(r==="24h"?"HH:mm":"h:mm A"),Kr=e=>{const r=z.duration(e,"seconds"),t=r.hours(),n=r.minutes();return{hours:t,minutes:n}},Jr=e=>{let r=0,t=0,n=0;return e.forEach(o=>{r+=o.minutes;const s=Math.floor(r/_e);t+=o.hours+s,n+=r%_e,n>=_e&&(t++,n-=_e)}),{hours:t,minutes:n}},qr=(e,r)=>{let t=Ar;switch(r){case 0:t=Bs;break;case 1:t=Ar;break;case 2:t=1;break}const n=()=>{let s=t-e.hours-1,a=_e-e.minutes;return a===_e&&(s++,a=0),{hours:Math.max(0,s),minutes:s<0?0:a}},o=()=>{const s=e.hours-t,a=e.minutes;return{hours:Math.max(0,s),minutes:s<0?0:a}};return{free:n(),overtime:o()}},Ai=(e,r,t)=>{const n=r.isoWeek(),o=e.map(c=>{const u=z(c.startDate).isoWeek(),d=z(c.startDate).isoWeekday(),v=z(c.endDate).isoWeek(),C=z(c.endDate).isoWeekday(),{hours:x,minutes:D}=Kr(c.occupancy);if(n===u){const y=(st+1-d)*x,N=(st+1-d)*D;return{hours:Math.max(0,y),minutes:N}}else if(n===v){const y=C>st?st*x:C*x,N=C>st?st*D:C*D;return{hours:y,minutes:N}}else if(z(r).isBetween(c.startDate,c.endDate))return{hours:st*x,minutes:st*D};return{hours:0,minutes:0}}),{hours:s,minutes:a}=Jr(o),{free:l,overtime:f}=qr({hours:s,minutes:a},t);return{taken:{hours:Math.max(0,s),minutes:Math.max(0,a)},free:l,overtime:f}},Ii=(e,r,t,n)=>{const o=r.isoWeekday(),s=e.map(u=>{const{hours:d,minutes:v}=Kr(u.occupancy);return o<=(n?7:5)?{hours:d,minutes:v}:{hours:0,minutes:0}}),{hours:a,minutes:l}=Jr(s),{free:f,overtime:c}=qr({hours:a,minutes:l},t);return{taken:{hours:Math.max(0,a),minutes:Math.max(0,l)},free:f,overtime:c}},Oi=(e,r)=>{let t=0;e.forEach(l=>{const f=z(l.startDate).hour(),c=z(l.endDate).hour(),u=r.hour(),d=z(l.endDate).minute(),v=z(l.startDate).minute();f<u&&c>u?t+=_e:f===u&&c===u&&v&&d?t+=d?d-v:_e-v:f===u&&c>=u?t+=v?_e-v:_e:c===u&&d&&(t+=d)});const n=Math.floor(t/_e),o=t%_e,s=n||o?0:1,a=n?0:o?_e-o:0;return{taken:{hours:n,minutes:o},free:{hours:s,minutes:a},overtime:{hours:0,minutes:0}}},Li=(e,r,t,n,o=!1)=>{if(r<0)return{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}};const s=e.flat(2).filter(a=>n===1?z(t).isBetween(a.startDate,a.endDate,"day","[]"):n===2?z(t).isBetween(a.startDate,a.endDate,"hour","[]"):z(a.startDate).isBetween(z(t),z(t).add(6,"days"),"day","[]")||z(t).isBetween(z(a.startDate),z(a.endDate),"day","[]"));switch(n){case 1:return Ii(s,t,n,o);case 2:return Oi(s,t);default:return Ai(s,t,n)}},Yi=(e,r,t,n,o,s,a=!1,l="12h")=>{let f="weeks",c;switch(s){case 0:f="weeks",c=St;break;case 1:f="days",c=ke;break;case 2:f="hours",c=Pe;break}const u=Math.ceil(s===2?(t.x-.5*c)/c:t.x/c),d=z(`${r.year}-${r.month+1}-${r.dayOfMonth}T${r.hour}:00:00`).add(u-1,f),v=Math.ceil(t.y/he),C=n.findIndex((Q,H,X)=>X.slice(0,H+1).reduce((g,p)=>g+p,0)>=v),x=s===2?(u+1)*c:u*c,D=(v-1)*he+he,y=Li(o[C],C,d,s,a),N=z(e.startDate).isSame(z(e.endDate),"day");return{coords:{x,y:D},mouseCoords:t,resourceIndex:C,disposition:y,reservationData:{startTime:Se(e.startDate,l),startDate:z(e.startDate).format("MMM D, YYYY"),endTime:Se(e.endDate,l),endDate:z(e.endDate).format("MMM D, YYYY"),client:e.subtitle??"",eventName:e.title,reservationType:e.eventType,bookingNumber:e.bookingNumber,groupName:e.groupName,driver:e.driver,flightNumber:e.flightNumber,serviceNotes:e.serviceNotes,reservationNotes:e.reservationNotes,departureAddress:e.departureAddress,destinationAddress:e.destinationAddress,returnAddress:e.returnAddress,isOneDayEvent:N,passengers:e.totalPassengers,readiness:e.readiness,readinessNote:e.readinessNote,subcontractConfirmed:e.subcontractConfirmed,subcontractDetails:e.subcontractDetails}}};function Ni(e,r){if(e.length<=1)return[];if(e.length<=r){const o=[];for(let s=1;s<e.length;s++)o.push(s);return o}const t=[];for(let o=1;o<e.length;o++)t.push({index:o,gap:e[o]-e[o-1]});t.sort((o,s)=>s.gap-o.gap);const n=Math.min(r-1,t.length);return t.slice(0,n).map(o=>o.index).sort((o,s)=>o-s)}function Fi(e){const r={categories:[],capacityToCategoryId:new Map},t=new Set;for(const u of e)!u.isSubcontract&&!u.isUnassigned&&u.capacity!=null&&t.add(u.capacity);const n=[...t].sort((u,d)=>u-d);if(n.length<2)return r;const o=Math.min(5,n.length),s=Ni(n,o),a=[];let l=0;for(const u of s)a.push({min:n[l],max:n[u-1],values:n.slice(l,u)}),l=u;a.push({min:n[l],max:n[n.length-1],values:n.slice(l)});const f=[],c=new Map;return a.forEach((u,d)=>{const v="__auto_cat_"+d,C=u.min===u.max?u.min+" pax":u.min+"-"+u.max+" pax";f.push({id:v,name:C,minPassengers:u.min,maxPassengers:u.max});for(const x of u.values)c.set(x,v)}),{categories:f,capacityToCategoryId:c}}const zi=(e,r,t,n)=>{const o=[];let s=0,a=[],l=0;return r.length>n?(r.forEach((f,c)=>{const u={id:e[c].id,label:e[c].label,data:f,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,isUnassigned:e[c].isUnassigned,provider:e[c].provider,categoryId:e[c].categoryId};l>=n&&(o.push(a),s+=a.length,a=[],l=0),l++,a.push(u)}),t.slice(s).length<=n&&(a=[],r.slice(s).forEach((f,c)=>{const u={id:e[c+s].id,label:e[c+s].label,data:f,capacity:e[c+s].capacity,isSubcontract:e[c+s].isSubcontract,isUnassigned:e[c+s].isUnassigned,provider:e[c+s].provider,categoryId:e[c+s].categoryId};a.push(u),c===r.length-s-1&&o.push(a)})),o):(r.forEach((f,c)=>{const u={id:e[c].id,label:e[c].label,data:f,capacity:e[c].capacity,isSubcontract:e[c].isSubcontract,isUnassigned:e[c].isUnassigned,provider:e[c].provider,categoryId:e[c].categoryId};a.push(u)}),o.push(a),o)};var Yn={},Bi={get exports(){return Yn},set exports(e){Yn=e}};(function(e,r){(function(t,n){e.exports=n()})(Te,function(){return function(t,n){n.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(Bi);const Hi=Yn;var Nn={},Wi={get exports(){return Nn},set exports(e){Nn=e}};(function(e,r){(function(t,n){e.exports=n()})(Te,function(){return function(t,n){n.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(Wi);const ji=Nn,Zi=e=>{const r=[];for(const t of e){let n=!1;if(r.length)for(const o of r){let s=!1;for(let a=0;a<o.length;a++){const l=z(t.startDate).startOf("day"),f=z(t.endDate).startOf("day"),c=z(o[a].startDate).startOf("day"),u=z(o[a].endDate).startOf("day");if(l.isBetween(c,u,null,"[]")||f.isBetween(c,u,null,"[]")||l.isBefore(c,"minute")&&f.isAfter(u,"minute")||l.isAfter(c,"minute")&&f.isBefore(u,"minute")){s=!0;break}}if(!s){o.push(t),n=!0;break}}n||r.push([t])}return r};z.extend(Hi),z.extend(ji);const Qr=new WeakMap,Vi=e=>{const r=Qr.get(e);if(r)return r;const t=[...e].sort((o,s)=>{const a=z(o.startDate),l=z(s.startDate),f=a.startOf("day").diff(l.startOf("day"),"day");return f!==0?f:a.diff(l)}),n=Zi(t);return Qr.set(e,n),n},Gi=e=>{const r=[[],[]],[t,n]=e.reduce((o,s)=>{const a=Vi(s.data);return o[0].push(a),o[1].push(Math.max(a.length,1)),o},r);return{projectsPerPerson:t,rowsPerPerson:n}},Ui=e=>e?e.map(r=>r.data.length).reduce((r,t)=>r+Math.max(t,1),0):0,Xi=e=>{const{recordsThreshold:r}=Ge(),[t,n]=h.useState(0),[o,s]=h.useState(0),a=h.useRef(null);h.useEffect(()=>{a.current=document.getElementById(Ke)},[]);const{projectsPerPerson:l,rowsPerPerson:f}=h.useMemo(()=>Gi(e),[e]),c=h.useMemo(()=>zi(e,l,f,r),[e,l,r,f]),u=h.useCallback(()=>{c[o].length&&a.current&&(a.current.scroll({top:0}),n(y=>y+c[Math.max(o,0)].length),s(y=>Math.min(y+1,c.length-1)),window.scroll({top:0}))},[o,c]),d=h.useCallback(()=>{c[o].length&&(n(y=>Math.max(y-c[o-1].length,0)),s(y=>Math.max(y-1,0)))},[o,c]),v=h.useCallback(()=>{n(0),s(0)},[]),C=t+c[o].length,x=h.useMemo(()=>f.slice(t,C),[C,f,t]),D=h.useMemo(()=>l.slice(t,C),[C,l,t]);return{page:c[o],currentPageNum:o,pagesAmount:c.length,projectsPerPerson:D,rowsPerItem:x,totalRowsPerPage:Ui(c[o]),next:u,previous:d,reset:v}},Je="__subcontract__",en=e=>`${Je}:${e}`,Fn=e=>{const r=[],t=new Map;for(const o of e){if(!o.provider){r.push(o);continue}const s=t.get(o.provider.id)??{id:o.provider.id,name:o.provider.name,items:[]};s.items.push(o),t.set(o.provider.id,s)}const n=[...t.values()].sort((o,s)=>o.name.localeCompare(s.name));return{loose:r,providers:n}};var zn={},Ki={get exports(){return zn},set exports(e){zn=e}};(function(e,r){(function(t,n){e.exports=n()})(Te,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],o=t%100;return"["+t+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(Ki);const Ji=zn;var Bn={},qi={get exports(){return Bn},set exports(e){Bn=e}};(function(e,r){(function(t,n){e.exports=n(ut)})(Te,function(t){function n(v){return v&&typeof v=="object"&&"default"in v?v:{default:v}}var o=n(t);function s(v){return v%10<5&&v%10>1&&~~(v/10)%10!=1}function a(v,C,x){var D=v+" ";switch(x){case"m":return C?"minuta":"minutę";case"mm":return D+(s(v)?"minuty":"minut");case"h":return C?"godzina":"godzinę";case"hh":return D+(s(v)?"godziny":"godzin");case"MM":return D+(s(v)?"miesiące":"miesięcy");case"yy":return D+(s(v)?"lata":"lat")}}var l="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),f="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),c=/D MMMM/,u=function(v,C){return c.test(C)?l[v.month()]:f[v.month()]};u.s=f,u.f=l;var d={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:u,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(v){return v+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return o.default.locale(d,null,!0),d})})(qi);const Qi=Bn;var Hn={},Ri={get exports(){return Hn},set exports(e){Hn=e}};(function(e,r){(function(t,n){e.exports=n(ut)})(Te,function(t){function n(f){return f&&typeof f=="object"&&"default"in f?f:{default:f}}var o=n(t),s={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function a(f,c,u){var d=s[u];return Array.isArray(d)&&(d=d[c?0:1]),d.replace("%d",f)}var l={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(f){return f+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a}};return o.default.locale(l,null,!0),l})})(Ri);const ea=Hn;var Wn={},ta={get exports(){return Wn},set exports(e){Wn=e}};(function(e,r){(function(t,n){e.exports=n(ut)})(Te,function(t){function n(u){return u&&typeof u=="object"&&"default"in u?u:{default:u}}var o=n(t),s="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),a="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),l=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,f=function(u,d){return l.test(d)?s[u.month()]:a[u.month()]};f.s=a,f.f=s;var c={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:f,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(u){return u+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};return o.default.locale(c,null,!0),c})})(ta);const na=Wn;var jn={},ra={get exports(){return jn},set exports(e){jn=e}};(function(e,r){(function(t,n){e.exports=n(ut)})(Te,function(t){function n(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var o=n(t),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(a){return a+"º"}};return o.default.locale(s,null,!0),s})})(ra);const oa=[{id:"en",lang:{feelingEmpty:"I feel so empty...",free:"Free",loadNext:"Next",loadPrevious:"Previous",over:"over",taken:"Taken",topbar:{filters:"Filters",next:"next",prev:"prev",today:"Today",view:"View"},search:"search",week:"week",conflicts:{detected:"Conflict",detectedPlural:"Conflicts",detectedSuffix:"Detected",conflictsWith:"Conflicts with",movingTo:"Moving to",currentlyAt:"Currently at",conflictTime:"Conflict time",to:"to",nearbyEvent:"Nearby Event",nearbyEvents:"Nearby Events",before:"before",after:"after",gap:"gap",yourEvent:"Your event",sameDay:"Same day",changeStart:"Change start time",changeEnd:"Change end time",changeBoth:"Change times"},multiSelect:{selectionsPending:"selection(s) pending",selectionPending:"selection pending",clickToRemove:"Click × on selections to remove",pressEscToClear:"Press Esc to clear all",clearAll:"Clear All",confirmSelection:"Confirm Selection",confirmSelections:"Confirm Selections",conflictWarning:"1 selection has conflicts",conflictsWarning:"{count} selections have conflicts",confirmWithConflict:"Confirm with Conflict",confirmWithConflicts:"Confirm with Conflicts"},tooltip:{client:"Client",schedule:"Schedule",startDate:"Start",endDate:"End",groupName:"Group Name",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},subcontract:"Subcontract",unassigned:"No unit assigned"},translateCode:"en-GB",dayjsTranslations:Ji},{id:"pl",lang:{feelingEmpty:"Czuję się taki pusty...",free:"Wolne",loadNext:"Następne",loadPrevious:"Poprzednie",over:"ponad",taken:"Zajęte",topbar:{filters:"Filtry",next:"następny",prev:"poprzedni",today:"Dziś",view:"Widok"},search:"szukaj",week:"tydzień",conflicts:{detected:"Konflikt",detectedPlural:"Konflikty",detectedSuffix:"Wykryto",conflictsWith:"Konflikt z",movingTo:"Przenoszenie do",currentlyAt:"Obecnie o",conflictTime:"Czas konfliktu",to:"do",nearbyEvent:"Bliskie wydarzenie",nearbyEvents:"Bliskie wydarzenia",before:"przed",after:"po",gap:"przerwa",yourEvent:"Twoje wydarzenie",sameDay:"Ten sam dzień",changeStart:"Zmień czas rozpoczęcia",changeEnd:"Zmień czas zakończenia",changeBoth:"Zmień czasy"},multiSelect:{selectionsPending:"wybór(y) oczekujące",selectionPending:"wybór oczekujący",clickToRemove:"Kliknij × aby usunąć",pressEscToClear:"Naciśnij Esc aby wyczyścić",clearAll:"Wyczyść Wszystko",confirmSelection:"Potwierdź Wybór",confirmSelections:"Potwierdź Wybory",conflictWarning:"1 wybór ma konflikty",conflictsWarning:"{count} wyborów ma konflikty",confirmWithConflict:"Potwierdź z Konfliktem",confirmWithConflicts:"Potwierdź z Konfliktami"},tooltip:{client:"Klient",schedule:"Harmonogram",startDate:"Początek",endDate:"Koniec",groupName:"Nazwa Grupy",driver:"Kierowca",flightNumber:"Lot",serviceNotes:"Uwagi Serwisowe",reservationNotes:"Uwagi Rezerwacji",tour:"Wycieczka",transfer:"Transfer",oneDay:"Jednodniowy",passengers:"Pax"},subcontract:"Podwykonawca",unassigned:"Nie przypisano pojazdu"},translateCode:"pl-PL",dayjsTranslations:Qi},{id:"es",lang:{feelingEmpty:"Sin datos para mostrar",free:"Libre",loadNext:"Siguiente",loadPrevious:"Anterior",over:"terminado",taken:"Transcurrido",topbar:{filters:"Unidades con reservas",next:"siguiente",prev:"anterior",today:"Hoy",view:"Vista"},search:"buscar",week:"semana",conflicts:{detected:"Conflicto",detectedPlural:"Conflictos",detectedSuffix:"Detectado",conflictsWith:"Conflicto con",movingTo:"Moviendo a",currentlyAt:"Actualmente en",conflictTime:"Hora de conflicto",to:"a",nearbyEvent:"Evento Cercano",nearbyEvents:"Eventos Cercanos",before:"antes",after:"después",gap:"espacio",yourEvent:"Tu evento",sameDay:"Mismo día",changeStart:"Cambiar hora de inicio",changeEnd:"Cambiar hora de fin",changeBoth:"Cambiar horarios"},multiSelect:{selectionsPending:"selección(es) pendiente(s)",selectionPending:"selección pendiente",clickToRemove:"Haz clic en × para eliminar",pressEscToClear:"Presiona Esc para limpiar todo",clearAll:"Limpiar Todo",confirmSelection:"Revisar Selección",confirmSelections:"Revisar Selecciones",conflictWarning:"1 selección tiene conflictos",conflictsWarning:"{count} selecciones tienen conflictos",confirmWithConflict:"Revisar con Conflicto",confirmWithConflicts:"Revisar con Conflictos"},tooltip:{client:"Cliente",schedule:"Horario",startDate:"Inicio",endDate:"Fin",groupName:"Nombre del Grupo",driver:"Conductor",flightNumber:"Vuelo",serviceNotes:"Notas de Servicio",reservationNotes:"Notas de Reserva",tour:"Gira",transfer:"Transfer",oneDay:"One Day",passengers:"Pax"},subcontract:"Subcontrato",unassigned:"Sin unidad asignada"},translateCode:"es-ES",dayjsTranslations:jn},{id:"lt",lang:{feelingEmpty:"Jaučiuosi toks tuščias...",free:"Laisva",loadNext:"Kitas",loadPrevious:"Ankstesnis",over:"virš",taken:"Užimta",topbar:{filters:"Filtras",next:"kitas",prev:"ankstesnis",today:"Šiandien",view:"Rodinys"},search:"ieškoti",week:"savaitė",conflicts:{detected:"Konfliktas",detectedPlural:"Konfliktai",detectedSuffix:"Aptikta",conflictsWith:"Konfliktas su",movingTo:"Perkeliama į",currentlyAt:"Šiuo metu",conflictTime:"Konflikto laikas",to:"iki",nearbyEvent:"Artimas įvykis",nearbyEvents:"Artimi įvykiai",before:"prieš",after:"po",gap:"tarpas",yourEvent:"Jūsų įvykis",sameDay:"Ta pati diena",changeStart:"Keisti pradžios laiką",changeEnd:"Keisti pabaigos laiką",changeBoth:"Keisti laikus"},multiSelect:{selectionsPending:"pasirinkimas(-ai) laukia",selectionPending:"pasirinkimas laukia",clickToRemove:"Spustelėkite × norėdami pašalinti",pressEscToClear:"Paspauskite Esc norėdami išvalyti",clearAll:"Išvalyti Viską",confirmSelection:"Patvirtinti Pasirinkimą",confirmSelections:"Patvirtinti Pasirinkimus",conflictWarning:"1 pasirinkimas turi konfliktų",conflictsWarning:"{count} pasirinkimai turi konfliktų",confirmWithConflict:"Patvirtinti su Konfliktu",confirmWithConflicts:"Patvirtinti su Konfliktais"},tooltip:{client:"Klientas",schedule:"Tvarkaraštis",startDate:"Pradžia",endDate:"Pabaiga",groupName:"Grupės Pavadinimas",driver:"Vairuotojas",flightNumber:"Skrydis",serviceNotes:"Paslaugų Pastabos",reservationNotes:"Rezervacijos Pastabos",tour:"Turas",transfer:"Pervežimas",oneDay:"Vienos dienos",passengers:"Pax"},subcontract:"Subrangovas",unassigned:"Nepriskirta transporto priemonė"},translateCode:"lt-LT",dayjsTranslations:na},{id:"de",lang:{feelingEmpty:"Keine Ergebnisse...",free:"Frei",loadNext:"Weiter",loadPrevious:"Zurück",over:"über",taken:"Gebucht",topbar:{filters:"Filter",next:"vor",prev:"zurück",today:"Heute",view:"Ansicht"},search:"Suche",week:"Woche",conflicts:{detected:"Konflikt",detectedPlural:"Konflikte",detectedSuffix:"Erkannt",conflictsWith:"Konflikt mit",movingTo:"Verschieben nach",currentlyAt:"Derzeit um",conflictTime:"Konfliktzeit",to:"bis",nearbyEvent:"Nahes Ereignis",nearbyEvents:"Nahe Ereignisse",before:"vorher",after:"nachher",gap:"Abstand",yourEvent:"Ihr Ereignis",sameDay:"Gleicher Tag",changeStart:"Startzeit ändern",changeEnd:"Endzeit ändern",changeBoth:"Zeiten ändern"},multiSelect:{selectionsPending:"Auswahl(en) ausstehend",selectionPending:"Auswahl ausstehend",clickToRemove:"Klicken Sie auf × zum Entfernen",pressEscToClear:"Esc drücken zum Löschen",clearAll:"Alle Löschen",confirmSelection:"Auswahl Bestätigen",confirmSelections:"Auswahlen Bestätigen",conflictWarning:"1 Auswahl hat Konflikte",conflictsWarning:"{count} Auswahlen haben Konflikte",confirmWithConflict:"Mit Konflikt Bestätigen",confirmWithConflicts:"Mit Konflikten Bestätigen"},tooltip:{client:"Kunde",schedule:"Zeitplan",startDate:"Start",endDate:"Ende",groupName:"Gruppenname",driver:"Fahrer",flightNumber:"Flug",serviceNotes:"Servicehinweise",reservationNotes:"Reservierungshinweise",tour:"Tour",transfer:"Transfer",oneDay:"Eintägig",passengers:"Pax"},subcontract:"Subunternehmer",unassigned:"Kein Fahrzeug zugewiesen"},translateCode:"de-DE",dayjsTranslations:ea}];class sa{constructor(){Io(this,"locales",oa)}getLocales(){return this.locales}addLocales(r){this.locales.push(r)}}const tn=new sa,Rr=h.createContext({localesData:tn.getLocales(),currentLocale:tn.getLocales()[0],setCurrentLocale:()=>{}}),ia=({children:e,lang:r,translations:t})=>{const[n,o]=h.useState("en"),s=tn.getLocales(),a=h.useCallback(()=>{const d=s.find(v=>v.id===n);return typeof(d==null?void 0:d.dayjsTranslations)=="object"&&z.locale(d.dayjsTranslations),d||s[0]},[n,s]),[l,f]=h.useState(a()),c=d=>{localStorage.setItem("locale",d.translateCode),f(d)};h.useEffect(()=>{t==null||t.forEach(d=>{s.find(C=>C.id===d.id)||tn.addLocales(d)})},[s,t]),h.useEffect(()=>{const d=localStorage.getItem("locale"),v=r??d??"en";localStorage.setItem("locale",v),o(v),f(a())},[a,r]);const{Provider:u}=Rr;return i.jsx(u,{value:{currentLocale:l,localesData:s,setCurrentLocale:c},children:e})},it=()=>h.useContext(Rr).currentLocale.lang,aa=e=>re.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 514 440",...e},re.createElement("defs",null,re.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"),re.createElement("radialGradient",{id:"radial-gradient",cx:256.33,cy:218.64,fx:256.33,fy:218.64,r:206.09,gradientUnits:"userSpaceOnUse"},re.createElement("stop",{offset:.47,stopColor:"#ccc"}),re.createElement("stop",{offset:.49,stopColor:"#ccc",stopOpacity:.95}),re.createElement("stop",{offset:.59,stopColor:"#ccc",stopOpacity:.67}),re.createElement("stop",{offset:.69,stopColor:"#ccc",stopOpacity:.43}),re.createElement("stop",{offset:.78,stopColor:"#ccc",stopOpacity:.24}),re.createElement("stop",{offset:.87,stopColor:"#ccc",stopOpacity:.11}),re.createElement("stop",{offset:.94,stopColor:"#ccc",stopOpacity:.03}),re.createElement("stop",{offset:1,stopColor:"#ccc",stopOpacity:0}))),re.createElement("path",{className:"cls-4",d:"m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z"}),re.createElement("path",{className:"cls-1",d:"m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z"}),re.createElement("path",{className:"cls-2",d:"m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z"}),re.createElement("path",{className:"cls-3",d:"m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z"})),ca=b.div`
  height: 440px;
  width: 514px;
  position: relative;
`,la=b.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,da=({onTileClick:e})=>{const{feelingEmpty:r}=it();return i.jsxs(ca,{onClick:e,children:[i.jsx(aa,{}),i.jsx(la,{children:r})]})},ua=b.div`
  position: relative;
  display: flex;
`,fa=b.div`
  position: relative;
  margin-left: ${Ae};
  display: flex;
  flex-direction: column;
  contain: paint;
`,ha=b.div`
  width: calc(${({width:e})=>e}px - ${Ae}px);
  position: sticky;
  top: 0;
  min-height: 440px;
  height: 100%;
  left: ${Ae}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,pa=new Set,ga={coords:{x:0,y:0},mouseCoords:{x:0,y:0},resourceIndex:0,disposition:{taken:{hours:0,minutes:0},free:{hours:0,minutes:0},overtime:{hours:0,minutes:0}},reservationData:{startTime:"",startDate:"",client:"",eventName:"",reservationType:Yt.Tour,bookingNumber:""},tileBounds:{x:0,y:0,width:0,height:0}};function ma(e,r){const t=r?[...r].sort((c,u)=>c.maxPassengers-u.maxPassengers):[],n=[],o=e.filter(c=>c.isUnassigned);o.length>0&&n.push({type:"unassigned",items:o});const s=e.filter(c=>!c.isUnassigned);for(const c of t){const u=s.filter(d=>!d.isSubcontract&&d.categoryId===c.id);u.length>0&&n.push({type:"category",category:c,items:u})}const a=t.length>0,l=s.filter(c=>!c.isSubcontract&&(!c.categoryId||!a));l.length>0&&a?n.push({type:"uncategorized",items:l}):l.length>0&&n.push({type:"uncategorized",items:l});const f=s.filter(c=>c.isSubcontract);return f.length>0&&n.push({type:"subcontract",items:f}),n}const ya=({data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,onItemClick:s,toggleTheme:a,topBarWidth:l,onEventDrop:f,onEventDrag:c,draggableConfig:u,onTimeRangeSelect:d,onMultiTimeRangeSelect:v,clickToAddConfig:C})=>{const[x,D]=h.useState(ga),[y,N]=h.useState(e),[Q,H]=h.useState(!1),[X,w]=h.useState(!1),[g,p]=h.useState(""),[T,M]=h.useState(new Set),[S,B]=h.useState(new Set),W=h.useRef([]);h.useEffect(()=>()=>W.current.forEach(clearTimeout),[]);const{zoom:A,startDate:I,isLoading:P,config:{includeTakenHoursOnWeekendsInDayView:V,showTooltip:O,showThemeToggle:k,hourFormat:L}}=Ge(),te=h.useRef(null),se=h.useRef(null),[j,F]=h.useState(124),{page:Y,projectsPerPerson:ne,rowsPerItem:$,currentPageNum:K,pagesAmount:_,next:R,previous:G,reset:Z}=Xi(y),{effectiveCategories:m,effectivePage:U}=h.useMemo(()=>{if(t&&t.length>0)return{effectiveCategories:t,effectivePage:Y};const ie=Fi(Y);if(ie.categories.length===0)return{effectiveCategories:void 0,effectivePage:Y};const le=Y.map(de=>{if(de.isSubcontract||de.isUnassigned||de.capacity==null)return de;const we=ie.capacityToCategoryId.get(de.capacity);return we?{...de,categoryId:we}:de});return{effectiveCategories:ie.categories,effectivePage:le}},[t,Y]),E=h.useCallback(ie=>{if(T.has(ie)){M(de=>{const we=new Set(de);return we.delete(ie),we});return}if(Vr()){M(de=>new Set(de).add(ie));return}B(de=>new Set(de).add(ie));const le=setTimeout(()=>{M(de=>new Set(de).add(ie)),B(de=>{const we=new Set(de);return we.delete(ie),we})},190);W.current.push(le)},[T]),J=h.useMemo(()=>{const ie=[];U.some(we=>we.isUnassigned)&&ie.push("__unassigned__");const le=m?[...m].sort((we,He)=>we.maxPassengers-He.maxPassengers):[];for(const we of le)U.some(He=>!He.isSubcontract&&He.categoryId===we.id)&&ie.push(we.id);const de=U.filter(we=>we.isSubcontract);return de.length>0&&(ie.push(Je),ie.push(...Fn(de).providers.map(we=>en(we.id)))),ie},[m,U]),ee=h.useCallback(()=>{M(new Set)},[]),q=h.useCallback(()=>{M(new Set(J))},[J]),ae=h.useMemo(()=>{if(S.size===0)return pa;const ie=new Set;for(const le of U){const de=le.isUnassigned?"__unassigned__":le.isSubcontract?Je:le.categoryId,we=!!le.provider&&S.has(en(le.provider.id));(de&&S.has(de)||we)&&ie.add(le.id)}return ie},[S,U]),{visiblePage:fe,visibleRowsPerItem:ce,visibleTotalRows:pe,visibleProjectsPerPerson:Ce,separatorRowIndices:be,subcontractSeparatorIndex:oe,unassignedSeparatorIndex:ue,providerSeparatorIndices:Ie}=h.useMemo(()=>{const ie=ma(U,m),le=((m==null?void 0:m.length)??0)>0,de=new Map;Y.forEach((De,nt)=>de.set(De.id,nt));const we=[],He=[],at=[],Ze=[];let _t=0,mt=-1,sn=-1;const et=[],tt=De=>{for(const nt of De){const Tt=de.get(nt.id)??0,Pt=$[Tt];we.push(nt),He.push(Pt),at.push(ne[Tt]),_t+=Pt}};for(const De of ie)if(De.type==="unassigned"||De.type==="subcontract"||De.type==="category"&&le){const Tt=De.type==="unassigned"?"__unassigned__":De.type==="subcontract"?Je:De.category.id,Pt=T.has(Tt);if(De.type==="subcontract"&&(mt=Ze.length),De.type==="unassigned"&&(sn=Ze.length),Ze.push(_t),Pt)continue;if(De.type!=="subcontract"){tt(De.items);continue}const{loose:Jn,providers:qn}=Fn(De.items);tt(Jn);for(const an of qn)et.push(Ze.length),Ze.push(_t),T.has(en(an.id))||tt(an.items)}else tt(De.items);const Kn=He.reduce((De,nt)=>De+nt,0);return{visiblePage:we,visibleRowsPerItem:He,visibleTotalRows:Kn,visibleProjectsPerPerson:at,separatorRowIndices:Ze,subcontractSeparatorIndex:mt,unassignedSeparatorIndex:sn,providerSeparatorIndices:et}},[U,m,Y,T,$,ne]),je=h.useMemo(()=>U.reduce((ie,le)=>le.isUnassigned?ie+le.data.reduce((de,we)=>de+we.length,0):ie,0),[U]),Oe=h.useRef(null),Et=h.useRef(On((ie,le,de,we,He,at,Ze)=>{if(!te.current)return;const{tile:_t,segmentId:mt}=Me(ie);if(mt&&mt===Oe.current)return;if(Oe.current=null,!mt||!_t){H(!1);return}const sn=ge(mt,le),et=te.current.getBoundingClientRect(),tt=_t.getBoundingClientRect(),Kn={x:ie.clientX-et.left,y:ie.clientY-et.top},De={x:ie.clientX-et.left,y:ie.clientY-et.top},nt={x:tt.left-et.left,y:tt.top-et.top,width:tt.width,height:tt.height},{coords:{x:Tt,y:Pt},resourceIndex:Jn,disposition:qn,reservationData:an}=Yi(sn,de,Kn,we,He,at,V,Ze);D({coords:{x:Tt,y:Pt},mouseCoords:De,resourceIndex:Jn,disposition:qn,reservationData:an,tileBounds:nt}),H(!0)},4)),Qe=h.useRef(On((ie,le)=>{Z(),N(ie.map(de=>({...de,data:de.data.filter(we=>{const{title:He,description:at,subtitle:Ze}=we;return(He==null?void 0:He.toLowerCase().includes(le.toLowerCase()))||(Ze==null?void 0:Ze.toLowerCase().includes(le.toLowerCase()))||(at==null?void 0:at.toLowerCase().includes(le.toLowerCase()))})})).filter(de=>de.data.length>0))},500)),ge=(ie,le)=>{if(ie)return le.flatMap(de=>de.data).find(de=>de.segmentId===ie)},Me=ie=>{if(!ie.target)return{tile:null,segmentId:null};const le=ie.target.closest("[data-segment-id]");return le?{tile:le,segmentId:le.getAttribute("data-segment-id")}:{tile:null,segmentId:null}},Be=ie=>{const le=ie.target.value;p(le),Qe.current.cancel(),le?Qe.current(e,le):(Z(),N(e))},$e=h.useCallback(()=>{Et.current.cancel(),H(!1)},[]),Re=h.useCallback((ie,le)=>{Oe.current=String(ie.segmentId),$e(),o==null||o(ie,le)},[$e,o]);return h.useEffect(()=>{const ie=de=>Et.current(de,e,I,ce,Ce,A,L??"12h"),le=te.current;if(le)return le.addEventListener("mousemove",ie),le.addEventListener("mouseleave",$e),()=>{le.removeEventListener("mousemove",ie),le.removeEventListener("mouseleave",$e)}},[Et,$e,Ce,ce,I,A,L,e]),h.useEffect(()=>{g?(Qe.current.cancel(),Qe.current(e,g)):N(e)},[e,g]),h.useLayoutEffect(()=>{const ie=se.current;if(!ie)return;const le=()=>F(ie.offsetHeight);le();const de=new ResizeObserver(le);return de.observe(ie),()=>de.disconnect()},[]),i.jsxs(ua,{children:[i.jsx(Ac,{headerHeight:j,data:U,categories:m,pageNum:K,pagesAmount:_,rows:$,onLoadNext:R,onLoadPrevious:G,searchInputValue:g,onSearchInputChange:Be,onItemClick:s,collapsedGroups:T,fadingGroups:S,onToggleGroup:E,allGroupIds:J,onExpandAll:ee,onCollapseAll:q,unassignedCount:je}),i.jsxs(fa,{children:[i.jsx(ll,{ref:se,zoom:A,topBarWidth:l,showThemeToggle:k,toggleTheme:a}),e.length?i.jsx(Pi,{data:fe,baseData:r||e,zoom:A,rows:pe,ref:te,onTileClick:n,onTileContextMenu:o&&Re,onEventDrop:f,onEventDrag:c,draggableConfig:u,onDragStateChange:w,onTimeRangeSelect:d,onMultiTimeRangeSelect:v,clickToAddConfig:C,separatorRowIndices:be,subcontractSeparatorIndex:oe,warningSeparatorIndex:je>0?ue:-1,providerSeparatorIndices:Ie,fadingUnitIds:ae}):i.jsx(ha,{width:l,children:P?i.jsx(Vn,{isLoading:P,position:"left"}):i.jsx(da,{})}),O&&i.jsx(Ql,{tooltipData:x,visible:Q&&!X})]})]})},va=b.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 9px 16px 9px ${Ae+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.mode==="dark"?e.colors.primary:"#fff"};
`,eo=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: ${({$at:e})=>e==="end"?"flex-end":"flex-start"};
`,xa=b.span`
  width: 1px;
  height: 20px;
  background: #c8d5cd;
  margin: 0 3px;
`,ba=b.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,to=b.button`
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
`,wa=b.button`
  font-size: 13px;
  font-weight: 700;
  color: #184546;
  border: 1px solid #c8d5cd;
  background: #fff;
  border-radius: 8px;
  padding: 6px 14px;
  cursor: pointer;
  &:hover {
    background: ${({theme:e})=>e.colors.hover};
  }
`,Sa=b.div`
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
`,no=b.button`
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
`,Ca=b.label`
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
`,ka=b.span`
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
`,Nt=({children:e,sw:r=2})=>i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",children:e}),Ma=()=>{var r,t;const e=document.getElementById(Yr);document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(r=e==null?void 0:e.requestFullscreen)==null||r.call(e)},$a=()=>{const{config:e,zoom:r,handleGoNext:t,handleGoPrev:n,handleGoToday:o,setZoom:s,goToDate:a,toggleDisplayActiveUnits:l,toolbarActions:f}=Ge(),{filterButtonState:c=-1}=e;return i.jsxs(va,{width:0,children:[i.jsxs(eo,{$at:"start",children:[i.jsxs(ba,{children:[i.jsx(to,{onClick:n,"aria-label":"Anterior",children:i.jsx(Nt,{children:i.jsx("path",{d:"m15 18-6-6 6-6"})})}),i.jsx(wa,{onClick:o,children:"Hoy"}),i.jsx(to,{onClick:t,"aria-label":"Siguiente",children:i.jsx(Nt,{children:i.jsx("path",{d:"m9 18 6-6-6-6"})})})]}),e.showViewSwitcher!==!1&&i.jsxs(i.Fragment,{children:[i.jsx(xa,{}),i.jsxs(Sa,{children:[i.jsx("button",{className:r===2?"on":"",onClick:()=>s(2),children:"Día"}),i.jsx("button",{className:r===0?"on":"",onClick:()=>s(0),children:"Semana"}),i.jsx("button",{className:r===1?"on":"",onClick:()=>s(1),children:"Mes"})]})]}),e.showJumpToDate!==!1&&i.jsxs(Ca,{children:[i.jsxs(Nt,{children:[i.jsx("path",{d:"M20.5 11.5V7.5A2.5 2.5 0 0 0 18 5H6A2.5 2.5 0 0 0 3.5 7.5V18A2.5 2.5 0 0 0 6 20.5h5"}),i.jsx("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3"}),i.jsx("circle",{cx:"16.7",cy:"16.7",r:"2.7"})]}),"Ir a fecha",i.jsx("input",{type:"date",onClick:u=>{var d,v;try{(v=(d=u.currentTarget).showPicker)==null||v.call(d)}catch{}},onChange:u=>u.target.value&&a(u.target.value)})]})]}),i.jsxs(eo,{$at:"end",children:[e.showFilterButton!==!1&&c>=0&&i.jsxs(no,{$primary:!!c,onClick:l,children:[i.jsx(Nt,{children:i.jsx("path",{d:"M4 6.5h16l-6 7v4.5l-4 2v-6.5z"})}),"Filtros",!!c&&i.jsx(ka,{children:c})]}),e.showFullscreenButton!==!1&&i.jsxs(no,{onClick:Ma,children:[i.jsx(Nt,{children:i.jsx("path",{d:"M8 4H5.5A1.5 1.5 0 0 0 4 5.5V8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M16 20h2.5a1.5 1.5 0 0 0 1.5-1.5V16"})}),"Pantalla completa"]}),f]})]})},Da={add:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z"})),subtract:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"})),filter:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z",fill:"currentColor"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z",fill:"currentColor"})),arrowLeft:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z"})),arrowRight:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z"})),defaultAvatar:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z",fill:"#777"})),calendarWarning:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z",fill:"#EF4444"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#EF4444"})),calendarFree:e=>re.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z",fill:"#278904"}),re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z",fill:"#278904"})),arrowDown:e=>re.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z"})),arrowUp:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z"})),search:e=>re.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z",fill:"#777777"})),close:e=>re.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z"})),moon:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#1C274C"})),sun:e=>re.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},re.createElement("circle",{cx:12,cy:12,r:5,stroke:"#1C274C",strokeWidth:1.5}),re.createElement("path",{d:"M12 2V4",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M12 20V22",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4 12L2 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M22 12L20 12",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 4.22266L17.5558 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M4.22217 4.22266L6.44418 6.25424",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M6.44434 17.5557L4.22211 19.7779",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}),re.createElement("path",{d:"M19.7778 19.7773L17.5558 17.5551",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round"}))},Zn=({iconName:e,width:r,height:t,fill:n,className:o})=>{const{colors:s}=Xt(),a=Da[e];return a?i.jsx(a,{style:{transition:".5s ease"},fill:n??s.accent,width:r,height:t,className:o}):null},Ea=(e,r,t)=>({outlined:{color:t?e.colors.disabled:e.colors.accent,border:`1px solid ${t?e.colors.disabled:e.colors.accent}`,background:"transparent"},filled:{color:t?e.colors.primary:e.colors.textSecondary,background:t?e.colors.disabled:e.colors.accent,border:"1px solid transparent"}})[r];b.button`
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
  ${({theme:e,variant:r,disabled:t})=>Ea(e,r,t)}
`;const _a=b.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${Lr}px;
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px 8px;
  border-top: 1px solid #e0e8e3;
  background: #f3f7f4;
  font-family: ${Fe};
`,Ta=b.div`
  flex: none;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #74897f;
  white-space: nowrap;
  line-height: 1.3;
`,Pa=b.div`
  position: relative;
  flex: 1;
  height: 40px;
  background: #fff;
  border: 1px solid #c8d5cd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`,Aa=b.div`
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
`,Ia=b.span`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #e0e8e3;
`,Oa=b.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  top: 18px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`,La=b.div`
  flex: 1;
  border-radius: 2px 2px 0 0;
  min-height: 3px;
`,Ya=b.div`
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
`,Na=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(15, 125, 102, 0.1);
  border: 1.6px solid ${({theme:e})=>e.colors.today};
  border-radius: 6px;
  pointer-events: none;
`,Fa=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  background: rgba(58, 76, 70, 0.06);
  border: 1.4px dashed #7d938b;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
`,za=b.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  width: 1px;
  background: #3a4c46;
  z-index: 3;
  pointer-events: none;
`,Ba=b.div`
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
`,ro="#cdd8d2",oo=[178,216,195],Ha=[15,125,102],Wa=e=>{const r=Math.min(1,Math.max(0,e)),t=n=>Math.round(oo[n]+(Ha[n]-oo[n])*r);return`rgb(${t(0)}, ${t(1)}, ${t(2)})`},ja=()=>{const{date:e,zoom:r,data:t,goToDate:n,config:o}=Ge(),s=it(),a=h.useRef(null),[l,f]=h.useState(null),c=h.useMemo(()=>Array.from({length:12},(M,S)=>z().month(S).format("MMM").toUpperCase()),[s]),u=h.useMemo(()=>z().startOf("day"),[]),{domainStart:d,domainEnd:v,domainDays:C}=h.useMemo(()=>{const M=u.subtract(3,"month").startOf("month"),S=u.add(9,"month").endOf("month");return{domainStart:M,domainEnd:S,domainDays:S.diff(M,"day")+1}},[u]),x=M=>M.diff(d,"day")/C*100,D=M=>Math.min(100,Math.max(0,M)),y=h.useMemo(()=>{const M=[];let S=d.startOf("month");for(;S.isBefore(v);)M.push(S),S=S.add(1,"month");return M},[d,v]),N=o==null?void 0:o.yearCounts,Q=h.useMemo(()=>{const M=Math.ceil(C/7),S=new Array(M).fill(0),B=k=>{const L=k.diff(d,"day");return L<0||L>=C?-1:Math.floor(L/7)};if(N&&N.length)for(const k of N){const L=B(z(k.date));L>=0&&(S[L]+=k.count)}else for(const k of t??[])for(const L of k.data??[]){const te=B(z(L.startDate));te>=0&&(S[te]+=1)}const W=Math.max(0,...S);if(W<=0)return S.map(()=>({h:0,color:ro}));const A=S.filter(k=>k>0).sort((k,L)=>k-L),I=A.length>>1,P=A.length%2?A[I]:(A[I-1]+A[I])/2,V=P>0?W/P:1,O=Math.min(1,Math.max(.45,1/(1+Math.log2(Math.max(1,V)))));return S.map(k=>k>0?{h:Math.min(100,100*Math.pow(k/W,O)),color:Wa(k/W)}:{h:0,color:ro})},[t,N,d,C]),H=x(u),X=M=>{const{startDate:S,endDate:B}=Rt(M,r),W=D(x(S));return{left:W,width:D(x(B))-W,startDate:S,endDate:B}},w=X(e),g=l?X(l.d):null,p=M=>`${M.date()} ${c[M.month()]}`,T=M=>{var W;const S=(W=a.current)==null?void 0:W.getBoundingClientRect();if(!S)return null;const B=Math.min(1,Math.max(0,(M-S.left)/S.width));return{f:B,d:d.add(Math.round(B*(C-1)),"day")}};return i.jsxs(_a,{children:[i.jsxs(Ta,{children:["Navegar",i.jsx("br",{}),"por fecha"]}),i.jsxs(Pa,{ref:a,onClick:M=>{const S=T(M.clientX);S&&n(S.d.toDate())},onMouseMove:M=>{const S=T(M.clientX);S&&f({left:S.f*100,d:S.d})},onMouseLeave:()=>f(null),children:[i.jsx(Aa,{children:y.map((M,S)=>i.jsx("span",{style:{left:`${x(M)}%`},children:S===0||M.month()===0?`${c[M.month()]} ${M.format("YY")}`:c[M.month()]},S))}),y.map((M,S)=>S===0?null:i.jsx(Ia,{style:{left:`${x(M)}%`}},S)),i.jsx(Oa,{children:Q.map((M,S)=>i.jsx(La,{style:{height:`${M.h}%`,background:M.color}},S))}),i.jsx(Na,{style:{left:`${w.left}%`,width:`${w.width}%`}}),i.jsx(Ya,{style:{left:`${D(H)}%`},children:i.jsx("span",{children:"HOY"})}),l&&g&&i.jsxs(i.Fragment,{children:[i.jsx(Fa,{style:{left:`${g.left}%`,width:`${g.width}%`}}),i.jsx(za,{style:{left:`${l.left}%`}}),i.jsx(Ba,{style:{left:`${l.left}%`},children:`Ir a ${p(l.d)}`})]})]})]})},so=h.createContext(new Map),Za=()=>h.useContext(so),Va=10500,Ga=60,Ua=600,Xa=e=>{var f;const r=document.getElementById(Ke),t=r==null?void 0:r.querySelector(`[data-segment-id="${CSS.escape(e)}"]`);if(!r||!t)return!1;const n=r.getBoundingClientRect(),o=(f=document.getElementById(Tr))==null?void 0:f.getBoundingClientRect(),s=t.getBoundingClientRect(),a=Math.max((o==null?void 0:o.bottom)??n.top,n.top,0),l=Math.min(n.bottom,window.innerHeight);return s.width>0&&s.right>n.left+Ae&&s.left<n.right&&s.bottom>a&&s.top<l},Ka=()=>{const[e,r]=h.useState(()=>new Map),t=h.useRef(0),n=h.useRef(new Set);h.useEffect(()=>{const s=n.current;return()=>s.forEach(clearTimeout)},[]);const o=h.useCallback(s=>{const a=s.filter(u=>Xa(u.segmentId));if(!a.length)return[];const l=++t.current,f=new Map(a.map((u,d)=>[u.segmentId,{kind:u.kind,key:l,delayMs:Math.min(d*Ga,Ua)}]));r(u=>new Map([...Array.from(u),...Array.from(f)]));const c=setTimeout(()=>{n.current.delete(c),r(u=>{const d=new Map(u);return f.forEach((v,C)=>{var x;((x=d.get(C))==null?void 0:x.key)===l&&d.delete(C)}),d})},Va);return n.current.add(c),a.map(u=>u.segmentId)},[]);return{pulses:e,pulseTiles:o}},Ja=b.div`
  position: absolute;
  inset: 0;
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,qa=b.div`
  position: absolute;
  top: 0;
  bottom: ${({$footer:e})=>e?Lr:0}px;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({showScroll:e})=>e?"scroll":"hidden"};
  background-color: ${({theme:e})=>e.colors.gridBackground};
`,Qa=b.div`
  position: relative;
`,Ra=({data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,topBarWidth:s,onItemClick:a,toggleTheme:l,onEventDrop:f,onEventDrag:c,draggableConfig:u,schedulerRef:d,onTimeRangeSelect:v,onMultiTimeRangeSelect:C,clickToAddConfig:x})=>{const{goToDate:D,handleGoToday:y,zoomIn:N,zoomOut:Q,zoom:H}=Ge(),{pulses:X,pulseTiles:w}=Ka();return h.useImperativeHandle(d,()=>({goToDate:D,goToToday:y,setZoom:g=>{if(!Wr(g))return;const p=g-H;if(p>0)for(let T=0;T<p;T++)N();else for(let T=0;T<Math.abs(p);T++)Q()},pulseTiles:w}),[D,y,H,N,Q,w]),i.jsx(so.Provider,{value:X,children:i.jsx(ya,{data:e,baseData:r,categories:t,onTileClick:n,onTileContextMenu:o,topBarWidth:s,onItemClick:a,toggleTheme:l,onEventDrop:f,onEventDrag:c,draggableConfig:u,onTimeRangeSelect:v,onMultiTimeRangeSelect:C,clickToAddConfig:x})})},ec=h.forwardRef(function({data:r,categories:t,baseData:n,config:o,startDate:s,onRangeChange:a,onTileClick:l,onTileContextMenu:f,handleToggleDisplayActiveUnits:c,onClearFilterData:u,toolbarActions:d,onItemClick:v,isLoading:C,onEventDrop:x,onEventDrag:D,draggableConfig:y,onTimeRangeSelect:N,onMultiTimeRangeSelect:Q,clickToAddConfig:H},X){var O;const w=h.useMemo(()=>({zoom:0,filterButtonState:1,includeTakenHoursOnWeekendsInDayView:!1,hourFormat:"12h",showTooltip:!0,showTopbar:!0,showLegend:!0,translations:void 0,...o}),[o]),g=h.useRef(null),p=h.useRef(null),[T,M]=h.useState((O=g.current)==null?void 0:O.clientWidth),S=h.useMemo(()=>z(s),[s]),[B,W]=h.useState(w.defaultTheme??"light"),A=()=>{W(B==="light"?"dark":"light")},I=B==="light"?Ys:Ns,P=w.theme?w.theme[I.mode]:{},V={...I,colors:{...I.colors,...P}};return h.useImperativeHandle(X,()=>({goToDate:k=>{var L;return(L=p.current)==null?void 0:L.goToDate(k)},goToToday:()=>{var k;return(k=p.current)==null?void 0:k.goToToday()},setZoom:k=>{var L;return(L=p.current)==null?void 0:L.setZoom(k)},pulseTiles:k=>{var L;return((L=p.current)==null?void 0:L.pulseTiles(k))??[]}}),[]),h.useLayoutEffect(()=>{const k=()=>{g.current&&M(g.current.clientWidth)};k(),window.addEventListener("resize",k);let L;const te=g.current;return te&&typeof ResizeObserver<"u"&&(L=new ResizeObserver(k),L.observe(te)),()=>{window.removeEventListener("resize",k),L==null||L.disconnect()}},[]),i.jsxs(i.Fragment,{children:[i.jsx(Ls,{}),i.jsx(Ps,{theme:V,children:i.jsx(ia,{lang:w.lang,translations:w.translations,children:i.jsx(Si,{data:r,isLoading:!!C,config:w,onRangeChange:a,defaultStartDate:S,handleToggleDisplayActiveUnits:c,onClearFilterData:u,toolbarActions:d,children:i.jsxs(Ja,{id:Yr,children:[i.jsx(qa,{showScroll:!!r.length,$footer:w.showOverview!==!1&&!!r.length,id:Ke,ref:g,children:i.jsx(Qa,{children:i.jsx(Ra,{data:r,baseData:n,categories:t,onTileClick:l,onTileContextMenu:f,topBarWidth:T??0,onItemClick:v,toggleTheme:A,onEventDrop:x,onEventDrag:D,draggableConfig:y,schedulerRef:p,onTimeRangeSelect:N,onMultiTimeRangeSelect:Q,clickToAddConfig:H})})}),w.showOverview!==!1&&!!r.length&&i.jsx(ja,{})]})})})})]})}),tc=b.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({intent:e,theme:r})=>e==="next"?`1px solid ${r.colors.border}`:"none"};
`,nc=b.button`
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
`,rc=b.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,oc=b.p`
  ${bt}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`,io=({intent:e,onClick:r,icon:t,isVisible:n,pageNum:o,pagesAmount:s})=>{const{loadNext:a,loadPrevious:l}=it(),f=e==="next"?`${a} ${o+2}/${s}`:`${l} ${o}/${s}`;return i.jsx(tc,{intent:e,children:i.jsxs(nc,{onClick:r,isVisible:n,children:[t&&i.jsx(rc,{children:t}),i.jsx(oc,{children:f})]})})},sc=b.div`
  min-width: ${Ae+"px"};
  max-width: ${Ae+"px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({theme:e})=>e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`,ic=b.div`
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
`,ac=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 10px;
`,cc=b.input`
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
`,lc=b.div`
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
`,dc=Ne`
  from { opacity: 1; }
  to { opacity: 0; }
`,nn=b.div`
  ${({$fading:e})=>e&&dt`
      opacity: 0;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${dc} 180ms ease forwards;
      }
    `}
`,uc=b.button`
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
`,fc=Ne`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: none; }
`,hc=b.div`
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
    animation: ${fc} 200ms ease-out;
  }
  cursor: ${({clickable:e})=>e?"pointer":"auto"};
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover};
  }
`,pc=b.div`
  display: flex;
  align-items: center;
`,gc=b.div`
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
`,mc=b.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,yc=b.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`,ao=b.p`
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
`,vc=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 3px;
  line-height: 1;
  max-width: 148px;
`,xc=b.span`
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
`,bc=b.span`
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
`,wc=e=>!!e&&/^(https?:|data:|blob:|\/)/.test(e),Sc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:[i.jsx("circle",{cx:"9",cy:"8",r:"3.2"}),i.jsx("path",{d:"M3.4 19c0-3.3 2.5-5.3 5.6-5.3s5.6 2 5.6 5.3z"}),i.jsx("circle",{cx:"16.8",cy:"8.6",r:"2.5"}),i.jsx("path",{d:"M15.2 14c2.5.1 4.4 1.9 4.4 5h-2.8"})]}),Cc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("rect",{x:"4.5",y:"2.5",width:"15",height:"17.5",rx:"3.4"}),i.jsx("rect",{x:"6.6",y:"4.6",width:"10.8",height:"2.4",rx:".7",fill:"#fff",fillOpacity:".5"}),i.jsx("rect",{x:"6.6",y:"8.6",width:"10.8",height:"5",rx:"1.3",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"7.4",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"}),i.jsx("circle",{cx:"16.6",cy:"17.4",r:"1.05",fill:"#fff",fillOpacity:".92"})]}),kc=()=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"1.5"}),i.jsx("path",{d:"M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 20.5v-3h4v3"})]}),Mc=({id:e,item:r,rows:t,onItemClick:n,isSubcontract:o,nested:s})=>i.jsx(hc,{title:r.title,clickable:typeof n=="function",rows:t,$isSubcontract:o,$nested:s,onClick:()=>n==null?void 0:n({id:e,label:r}),children:i.jsxs(pc,{children:[i.jsx(gc,{$provider:o,children:wc(r.icon)?i.jsx(mc,{src:r.icon,alt:""}):o&&!s?i.jsx(kc,{}):i.jsx(Cc,{})}),i.jsxs(yc,{children:[i.jsx(ao,{isMain:!0,children:r.title}),r.capacity!=null||r.plate?i.jsxs(vc,{children:[r.capacity!=null&&i.jsxs(xc,{title:`${r.capacity} pasajeros`,children:[i.jsx(Sc,{}),r.capacity]}),r.plate&&i.jsx(bc,{title:r.plate,children:r.plate})]}):r.subtitle&&i.jsx(ao,{children:r.subtitle})]})]})}),$c=Ne`
  0% { box-shadow: 0 0 0 0 var(--attention-ring); }
  70%, 100% { box-shadow: 0 0 0 5px transparent; }
`,pt=(e,r,t)=>{const{unassignedBorder:n,unassignedText:o,subcontractBorder:s,subcontractText:a,subcontractBg:l}=e.colors;return t==="warning"?{text:o,bg:n+"26",edge:n,bottom:n+"66",hover:n+"38"}:r==="subcontract"?{text:a,bg:s+"24",edge:s,bottom:s,hover:s+"33"}:r==="provider"?{text:a,bg:s+"2E",edge:s,bottom:s+"55",hover:s+"40"}:{text:"#5C8374",bg:"#E9EFEC",edge:"transparent",bottom:"#D4DFD9",hover:"#DAE6E0"}},Dc=b.div`
  display: flex;
  align-items: center;
  gap: ${({$tone:e})=>e?"4px":"5px"};
  padding: ${({$tone:e,$variant:r})=>e?"0 7px 0 9px":r==="provider"?"0 11px 0 20px":"0 11px 0 9px"};
  height: 21px;
  color: ${({theme:e,$variant:r,$tone:t})=>pt(e,r,t).text};
  background: ${({theme:e,$variant:r,$tone:t})=>pt(e,r,t).bg};
  border-left: 3px solid ${({theme:e,$variant:r,$tone:t})=>pt(e,r,t).edge};
  border-top: ${({theme:e,$variant:r})=>r==="provider"?`1px solid ${e.colors.subcontractBorder}`:"none"};
  border-bottom: 1px solid ${({theme:e,$variant:r,$tone:t})=>pt(e,r,t).bottom};
  cursor: pointer;
  user-select: none;
  transition: background 0.15s ease;

  &:hover {
    background: ${({theme:e,$variant:r,$tone:t})=>pt(e,r,t).hover};
  }
`,Ec=b.span`
  font-size: ${({$variant:e})=>e==="provider"?"10.5px":"9.5px"};
  font-weight: ${({$variant:e})=>e==="provider"?700:750};
  letter-spacing: ${({$tone:e,$variant:r})=>e?"0.03em":r==="provider"?"0.01em":"0.07em"};
  text-transform: ${({$variant:e})=>e==="provider"?"none":"uppercase"};
  color: ${({theme:e,$variant:r,$tone:t})=>pt(e,r,t).text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
`,_c=b.span`
  font-size: 9.5px;
  font-weight: 700;
  opacity: 0.75;
  color: ${({theme:e,$variant:r})=>pt(e,r).text};
  flex-shrink: 0;
`,Tc=b.span`
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
  ${({$pulse:e})=>e&&dt`
      animation: ${$c} 1.8s ease-out infinite;
      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `}
`,Pc=b.div`
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
`,rn=({label:e,count:r,isCollapsed:t,onToggle:n,variant:o="category"})=>{const s=o==="unassigned"?r===0?"ok":"warning":void 0;return i.jsxs(Dc,{$variant:o,$tone:s,onClick:n,title:e,children:[i.jsx(Pc,{$collapsed:t,children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:i.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx(Ec,{$variant:o,$tone:s,children:e}),s?i.jsxs(Tc,{$tone:s,$pulse:s==="warning"&&t,children:[i.jsx("svg",{width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",children:s==="ok"?i.jsx("path",{d:"M2.5 6.5L5 9L9.5 3.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M6 1.5L11 10.5H1L6 1.5Z",stroke:"currentColor",strokeWidth:"1.4",strokeLinejoin:"round"}),i.jsx("path",{d:"M6 5V7.2",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"}),i.jsx("circle",{cx:"6",cy:"8.9",r:"0.75",fill:"currentColor"})]})}),r]}):i.jsx(_c,{$variant:o,children:r})]})},Ac=({data:e,categories:r,headerHeight:t,rows:n,onLoadNext:o,onLoadPrevious:s,pageNum:a,pagesAmount:l,searchInputValue:f,onSearchInputChange:c,onItemClick:u,collapsedGroups:d,fadingGroups:v,onToggleGroup:C,allGroupIds:x,onExpandAll:D,onCollapseAll:y,unassignedCount:N})=>{const[Q,H]=h.useState(!1),X=it(),w=()=>H(k=>!k),g=r?[...r].sort((k,L)=>k.maxPassengers-L.maxPassengers):[],p=g.length>0,T=x.length>0,M=T&&d.size===x.length;T&&d.size;const S=e.filter(k=>k.isUnassigned),B=X.unassigned??"No unit assigned",W=e.filter(k=>k.isSubcontract),A=X.subcontract??"Subcontract",I=Fn(W),P=k=>{const L=e.indexOf(k);return i.jsx(Mc,{id:k.id,item:k.label,rows:n[L],onItemClick:u,isSubcontract:k.isSubcontract,nested:!!k.provider},k.id)},V=k=>{const L=e.filter(F=>!F.isSubcontract&&F.categoryId===k.id);if(L.length===0)return null;const te=d.has(k.id),se=v.has(k.id),j=k.name;return i.jsxs("div",{children:[i.jsx(rn,{label:j,count:L.length,isCollapsed:te||se,onToggle:()=>C(k.id),variant:"category"}),!te&&i.jsx(nn,{$fading:se,children:L.map(P)})]},k.id)},O=e.filter(k=>!k.isSubcontract&&!k.isUnassigned&&(!k.categoryId||!p));return i.jsxs(sc,{children:[i.jsxs(ic,{$height:t,children:[i.jsxs(ac,{children:[i.jsxs(lc,{isFocused:Q,children:[i.jsx(cc,{placeholder:X.search,value:f,onChange:c,onFocus:w,onBlur:w}),i.jsx(Zn,{iconName:"search"})]}),T&&i.jsx(uc,{title:M?"Expand all":"Collapse all",onClick:M?D:y,$allCollapsed:M,children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:M?i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 6.5L8 3L12 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 13L8 9.5L12 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 3L8 6.5L12 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M4 9.5L8 13L12 9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),i.jsx(io,{intent:"previous",isVisible:a!==0,onClick:s,icon:i.jsx(Zn,{iconName:"arrowUp",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]}),S.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(rn,{label:B,count:N,isCollapsed:d.has("__unassigned__")||v.has("__unassigned__"),onToggle:()=>C("__unassigned__"),variant:"unassigned"}),!d.has("__unassigned__")&&i.jsx(nn,{$fading:v.has("__unassigned__"),children:S.map(P)})]}),p?g.map(V):O.map(P),p&&O.length>0&&O.map(P),W.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(rn,{label:A,count:W.length,isCollapsed:d.has(Je)||v.has(Je),onToggle:()=>C(Je),variant:"subcontract"}),!d.has(Je)&&i.jsxs(nn,{$fading:v.has(Je),children:[I.loose.map(P),I.providers.map(k=>{const L=en(k.id);return i.jsxs("div",{children:[i.jsx(rn,{label:k.name,count:k.items.length,isCollapsed:d.has(L)||v.has(L),onToggle:()=>C(L),variant:"provider"}),!d.has(L)&&i.jsx(nn,{$fading:v.has(L),children:k.items.map(P)})]},L)})]})]}),i.jsx(io,{intent:"next",isVisible:a!==l-1,onClick:o,icon:i.jsx(Zn,{iconName:"arrowDown",width:"16",height:"16"}),pageNum:a,pagesAmount:l})]})},Ic=b.div`
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
`,Oc=Ne`
from{
    left: -100%;
}
to{
    left: 100%;
}`,Lc=b.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Oc} 1s infinite;
`,Vn=({isLoading:e,position:r})=>e?i.jsx(Ic,{position:r,children:i.jsx(Lc,{})}):null,qe=(e,r)=>{const{ctx:t,x:n,y:o,width:s,height:a,textYPos:l,label:f,font:c,isBottomRow:u,fillStyle:d,topText:v,bottomText:C,strokeStyle:x,labelBetweenCells:D}=e;t.beginPath();const y=x??(r.mode==="dark"?r.colors.border:"#E4EAE7");if(t.strokeStyle=y,t.setLineDash([]),f&&c&&l){t.fillStyle=r.colors.gridBackground,t.fillRect(n,o,s,a),D?(t.moveTo(n,o),t.lineTo(n+s,o),t.stroke(),t.moveTo(n,o+a),t.lineTo(n+s,o+a),t.stroke(),t.moveTo(n+s/2,o+a),t.lineTo(n+s/2,o+a-5),t.stroke()):(t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke()),t.font=c;const N=n+s/2-t.measureText(f).width/2;t.textBaseline="middle",t.fillStyle=r.mode==="dark"?r.colors.textPrimary:"#184546",t.fillText(f,N,l)}if(u&&d&&v&&C){t.fillStyle=d,t.fillRect(n,o,s,a),t.beginPath(),t.moveTo(n,o+a-.5),t.lineTo(n+s,o+a-.5),t.stroke(),t.font=v.font;const N=n+s/2-t.measureText(v.label).width/2;t.fillStyle=v.color,t.fillText(v.label,N,v.y),t.font=C.font;const Q=n+s/2-t.measureText(C.label).width/2;t.fillStyle=C.color,t.fillText(C.label,Q,C.y)}},Yc=(e,r,t,n,o=ht)=>{const s=Ue+o,a=s+13,l=s+27;let f=0;for(let c=0;c<r;c++){const u=zr(z(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"days")),d=u.isCurrentDay;if(qe({ctx:e,x:f,y:s,width:ke,height:wt,isBottomRow:!0,fillStyle:d?n.colors.currentDay:n.colors.gridBackground,topText:{y:a,label:d?"":u.dayName.replace(/\./g,"").toUpperCase(),font:`600 10px ${Fe}`,color:n.mode==="dark"?n.colors.placeholder:"#74897F"},bottomText:{y:l,label:`${u.dayOfMonth}`,font:d?`700 12px ${Fe}`:`700 13px ${Fe}`,color:d?n.colors.today:n.mode==="dark"?n.colors.textPrimary:"#184546"}},n),d){const x=f+ke/2,D=a-13/2;e.save(),e.fillStyle=n.colors.today,e.beginPath(),e.roundRect?e.roundRect(x-30/2,D,30,13,5):e.rect(x-30/2,D,30,13),e.fill(),e.fillStyle="#fff",e.font=`800 8.5px ${Fe}`,e.textAlign="center",e.textBaseline="middle",e.fillText("HOY",x,D+13/2+.5),e.restore()}f+=ke}},Nc=(e,r,t,n)=>{let o=-(t.dayOfMonth-1)*We;const s=Ue;let l=t.month;for(let f=0;f<r;f++){l>=_r&&(l=0);const c=Fr(t,f)*We;qe({ctx:e,x:o,y:s,width:c,height:ht,textYPos:Ir,label:z().month(l).format("MMMM").toUpperCase(),font:ot.bottomRow.number},n),o+=c,l++}},Fc=" ".repeat(98),zc=(e,r,t)=>{const o=z(`${r.year}-${r.month+1}-${r.dayOfMonth}`);let s=-r.dayOfMonth*ke+ke;for(let a=0;a<_r;a++){const l=o.add(a,"months"),f=l.daysInMonth()*ke,c=l.format("MMMM YYYY").toUpperCase();qe({ctx:e,x:s,y:0,width:f,height:Ue,textYPos:Cn,label:`${c}${Fc}${c}`,font:`800 12px ${Fe}`},t),s+=f}},Bc=(e,r,t,n)=>{const o=7*ke,s=Ue,a=e.canvas.width/o+o,l=r.weekOfYear;let f=0;for(let c=0;c<a;c++){const u=z(`${r.year}-${r.month+1}-${r.dayOfMonth}`).day();let d=(l+c)%Er;d<=0&&(d+=Er),u!==1&&c===0&&(f=-u*ke+ke),qe({ctx:e,x:f,y:s,width:o,height:ht,textYPos:Ir,label:`${t.toUpperCase()} ${d}`,font:ot.middleRow},n),f+=o}},Hc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return o==="yearView"?t?r.colors.tertiary:r.colors.gridBackground:t?r.colors.currentDay:n?r.colors.primary:r.colors.secondary},Wc=(e,r)=>{const{isCurrent:t,isBusinessDay:n,variant:o}=e;return t?o==="bottomRow"?r.colors.placeholder:r.colors.accent:n?o==="bottomRow"?r.colors.placeholder:r.colors.textPrimary:r.colors.placeholder},jc=(e,r,t,n,o)=>{const s=Kt-wt/1.6,a=Kt-wt/4.5,l=Ue+ht;let f=0;for(let c=0;c<r;c++){const u=z(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"weeks"),d=u.isSame(z(),"week");qe({ctx:e,x:f,y:l,width:St,height:wt,isBottomRow:!0,fillStyle:d?o.colors.today+"26":Hc({isCurrent:d,variant:"yearView"},o),topText:{y:s,label:u.isoWeek().toString(),font:d?`700 14px ${Fe}`:ot.bottomRow.name,color:d?o.colors.today:Wc({isCurrent:d},o)},bottomText:{y:a,label:n.toUpperCase(),font:ot.middleRow,color:o.colors.placeholder}},o),f+=St}},Zc=(e,r,t,n)=>{const s=r.year,a=e.canvas.width*2;let l=0,f=0,c=(Nr(s)-t+1)*We,u=0;for(;l+u<=a;)f>0&&(c=Nr(s+f)*We),u+c>a&&f>0&&(c=Math.ceil((a-u)/We)*We),qe({ctx:e,x:l,y:0,width:c,height:Ue,textYPos:Cn,label:(s+f).toString(),font:ot.topRow},n),l+=c,u+=c,f++},Vc=(e,r,t,n)=>{const o=Math.floor(r/Jt)+2,s=Jt*Pe;let f=-z(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`).hour()*Pe+.5*Pe;for(let c=0;c<o;c++){const u=z(`${t.year}-${t.month+1}-${t.dayOfMonth}`).add(c,"day").format("dddd DD/MM/YYYY").toUpperCase();qe({ctx:e,x:f,y:Ct,width:s,height:Lt,textYPos:Ct+Lt/2+2,label:u,font:ot.bottomRow.number},n),f+=s}},Gc=(e,r,t,n)=>{const o=Math.ceil(r/Jt),s=z(`${t.year}-${t.month+1}-${t.dayOfMonth}`),a=s.add(o-1,"days"),l=s.month(),f=a.add(1,"day").month(),c=l===f?1:2;let u=.5*Pe;for(let d=0;d<c;d++){const v=z(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),x=z(`${t.year}-${t.month+d+1}-01T:23:59:59`).endOf("month"),D=x.format("MMMM").toUpperCase(),y=x.diff(v,"hour")+1,N=d===0?y*Pe:r*Pe;qe({ctx:e,x:u,y:0,width:N,height:Ct,textYPos:Cn,label:D,font:ot.topRow},n),u+=N}},Uc=(e,r,t,n,o="12h")=>{let s=0;const a=Ct+Lt,l=z(`${t.year}-${t.month+1}-${t.dayOfMonth}T${t.hour}:00:00`),f=Pe;for(let c=0;c<r;c++){const u=o==="24h"?l.add(c,"hours").format("HH:00"):l.add(c,"hours").format("h:00a").toUpperCase();qe({ctx:e,x:s,y:a,width:f,height:Sn,label:u,font:ot.bottomRow.hoursInDay,textYPos:Ct+Lt+Sn/2+2,labelBetweenCells:!0},n),s+=Pe}},Xc=(e,r,t,n,o,s,a,l=!0,f="12h")=>{switch(r){case 0:Zc(e,n,s,a),Nc(e,t,n,a),jc(e,t,n,o,a);break;case 1:zc(e,n,a),l&&Bc(e,n,o,a),Yc(e,t,n,a,l?ht:0);break;case 2:Gc(e,t,n,a),Vc(e,t,n,a),Uc(e,t,n,a,f);break}},Kc=b.div`
  position: sticky;
  top: 0;
  /* Rows must scroll BEHIND the day-header. Tiles now isolate their internal z-indexes (stripe 3 / cluster 6), but as a
     defensive margin keep the header above the tiles' escaping max (6) in case a host stacking context defeats them. */
  z-index: 10;
`,Jc=b.div`
  position: sticky;
  left: 0;
  width: ${({$width:e})=>e}px;
  z-index: 3;
`,qc=b.div`
  height: ${({$height:e})=>e??Kt}px;
  display: block;
`,Qc=b.canvas``,Rc={transfer:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M4 8h13l-3-3"}),i.jsx("path",{d:"M20 16H7l3 3"})]}),sun:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"})]}),tour:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"}),i.jsx("circle",{cx:"12",cy:"10",r:"2.4"})]}),person:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"7.5",r:"3.4"}),i.jsx("path",{d:"M4.5 20c0-4 3.4-6.4 7.5-6.4S19.5 16 19.5 20z"})]}),check:i.jsx("path",{d:"M20 6 9 17l-5-5"}),warn:i.jsxs(i.Fragment,{children:[i.jsx("path",{d:"M12 3 2 20h20z"}),i.jsx("path",{d:"M12 9v5M12 17h.01"})]}),clock:i.jsxs(i.Fragment,{children:[i.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),i.jsx("path",{d:"M12 7.5V12l3 2"})]}),dash:i.jsx("path",{d:"M6 12h12"})},Ye=({name:e,className:r,strokeWidth:t=2})=>i.jsx("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round",children:Rc[e]}),ze={crit:"#C6483D",warn:"#D98A22",ok:"#2E8B63",info:"#2C6BB0",muted:"#9AA4B2"},gt={sin_chofer:{icon:"warn",color:ze.muted,label:"Sin chofer"},sin_avisar:{icon:"warn",color:ze.crit,label:"Pendiente de notificar"},programado:{icon:"dash",color:ze.muted,label:"Pendiente de notificar"},por_confirmar:{icon:"clock",color:ze.warn,label:"Notificado, esperando confirmación"},notificado:{icon:"clock",color:ze.info,label:"Notificado"},confirmado:{icon:"check",color:ze.ok,label:"Confirmado"}},el={confirmed:{icon:"check",color:ze.ok,label:"Subcontrato confirmado"},unconfirmed:{icon:"clock",color:ze.warn,label:"Subcontrato sin confirmar"}},co=(e,r)=>e==="lost"?ze.crit:e==="confirmed"?ze.ok:r==="notificado"?ze.info:ze.warn,tl=b.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 8px 16px 8px ${Ae+16}px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.gridBackground};
  overflow-x: auto;
`,lo=b.span`
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
`,on=b.span`
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
`,nl=b.span`
  display: inline-flex;
  align-items: center;
  font-size: 9px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.subcontractText};
  background: ${({theme:e})=>e.colors.subcontractBg};
  border: 1px solid ${({theme:e})=>e.colors.subcontractBorder};
  padding: 1px 5px;
  border-radius: 5px;
`,rl=b.span`
  width: 1px;
  height: 16px;
  background: ${({theme:e})=>e.colors.border};
  flex: none;
`,ol=b.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #3a4c46;
  white-space: nowrap;
  flex: none;
`,sl=b.span`
  width: 5px;
  height: 14px;
  border-radius: 2px;
  flex: none;
`,il=b.span`
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
`,al=[gt.sin_chofer,gt.sin_avisar,gt.por_confirmar,gt.confirmado],cl=()=>i.jsxs(tl,{children:[i.jsx(lo,{children:"Leyenda"}),i.jsxs(on,{children:[i.jsx(Ye,{name:"transfer"})," Transfer"]}),i.jsxs(on,{children:[i.jsx(Ye,{name:"sun"})," Gira 1 día"]}),i.jsxs(on,{children:[i.jsx(Ye,{name:"tour"})," Gira multidía"]}),i.jsxs(on,{children:[i.jsx(nl,{children:"SUB"})," Subcontrato"]}),i.jsx(rl,{}),i.jsxs(lo,{children:["Estado ",i.jsx("em",{children:"franja izq. + punto esq."})]}),al.map(e=>i.jsxs(ol,{children:[i.jsx(sl,{style:{background:e.color}}),i.jsx(il,{style:{color:e.color},children:i.jsx(Ye,{name:e.icon,strokeWidth:e.icon==="check"?2.6:2.2})}),e.label]},e.label))]}),ll=h.forwardRef(function({zoom:r,topBarWidth:t,showThemeToggle:n,toggleTheme:o},s){const{week:a}=it(),{date:l,cols:f,dayOfYear:c,startDate:u,config:d}=Ge(),v=h.useRef(null),C=Xt(),x=d.showWeekRow!==!1,D=d.hourFormat??"12h",y=r===2?Fs:r===1&&!x?Ue+wt:Kt,N=h.useCallback(Q=>{const H=Ln(),X=y+1;Zr(Q,H,X),Xc(Q,r,f,u,a,c,C,x,D)},[f,c,u,a,r,C,x,D,y]);return h.useEffect(()=>{if(!v.current)return;const Q=v.current.getContext("2d");if(!Q)return;const H=()=>N(Q);return window.addEventListener("resize",H),()=>window.removeEventListener("resize",H)},[N]),h.useEffect(()=>{const Q=v.current;if(!Q)return;Q.style.letterSpacing="1px";const H=Q.getContext("2d");H&&N(H)},[l,r,N]),i.jsxs(Kc,{ref:s,children:[(d.showTopbar!==!1||d.showLegend!==!1)&&i.jsxs(Jc,{$width:t,children:[d.showTopbar!==!1&&i.jsx($a,{width:t,showThemeToggle:n,toggleTheme:o}),d.showLegend!==!1&&i.jsx(cl,{})]}),i.jsx(qc,{$height:y,id:Tr,children:i.jsx(Qc,{ref:v})})]})}),dl=(e,r,t)=>{let n;switch(t){case 0:n=We;break;case 2:n=Pe;break;default:n=ke}const s=e.startDate.startOf("day"),a=e.endDate.startOf("day"),l=r.startDate.startOf("day"),f=r.endDate.startOf("day"),c=()=>{let u;switch(t){case 2:u=(e.startDate.diff(r.startDate,"minute")/_e+1)*n-n/2;break;default:u=s.diff(l,"day")*n}return Math.max(0,u)};if(e.startDate.isAfter(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(e.startDate,"minute")/_e*n,50);break;default:u=Math.max(a.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isBefore(r.endDate)){let u;switch(t){case 2:u=Math.max(e.endDate.diff(r.startDate,"minute")/_e*n+.5*n,50);break;default:u=Math.max(a.diff(l,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isAfter(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(e.startDate,"minute")/_e*n,50);break;default:u=Math.max(f.diff(s,"day")*n+n,50)}return{x:c(),width:u}}if(e.startDate.isBefore(r.startDate)&&e.endDate.isAfter(r.endDate)){let u;switch(t){case 2:u=Math.max(r.endDate.diff(r.startDate,"minute")/_e*n,50);break;default:u=Math.max(f.diff(l,"day")*n+n,50)}return{x:c(),width:u}}return{x:c(),width:50}},ul=(e,r,t,n,o,s)=>{const a=e*he+zs,l=r.hour(),f=t.hour();let c,u,d,v;switch(s){case 2:{c=z(n),u=z(o),d=z(r).hour(l).minute(0),v=z(t).hour(f).minute(0);break}default:{c=z(n).hour(0).minute(0),u=z(o).hour(23).minute(59),d=r,v=t;break}}return{...dl({startDate:c,endDate:u},{startDate:d,endDate:v},s),y:a}},uo=e=>{if(!e)return"white";const r=[];for(let o=1;o<6;o+=2)r.push(parseInt(e.slice(o,o+2),16)/255);const t=r.map(o=>o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4));return .2126*t[0]+.7152*t[1]+.0722*t[2]>.5?"black":"white"};b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,b.p`
  ${bt}
  ${ft}
  display: inline;
  font-weight: ${({bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;const fl=Ne`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`,hl=Ne`
  from { opacity: 1; transform: none; }
  to { opacity: 0; transform: scale(0.96); }
`,pl=b.button`
  ${bt}
  position: absolute;
  height: ${qt}px;
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
    animation: ${fl} 180ms ease-out;
    transition: opacity 0.2s ease, transform 160ms ease, box-shadow 160ms ease;
    &:hover:not(:active) {
      transform: translateY(-1.5px);
      box-shadow: 0 6px 13px -3px rgba(12, 26, 23, 0.42), 0 0 0 0.5px rgba(12, 26, 23, 0.16);
    }
  }
  ${({$unconfirmed:e})=>e&&`background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0 6px, transparent 6px 12px);
     box-shadow: 0 0 0 1.5px ${ze.warn}, 0 2px 5px -1px rgba(12,26,23,0.28);
     @media (prefers-reduced-motion: no-preference) {
       &:hover:not(:active) { box-shadow: 0 0 0 1.5px ${ze.warn}, 0 6px 13px -3px rgba(12,26,23,0.42); }
     }`}
  ${({$exiting:e})=>e&&dt`
      opacity: 0;
      transform: scale(0.96);
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${hl} 190ms ease-out forwards;
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
`,gl=b.div`
  position: sticky;
  left: ${Ae+4}px;
  width: fit-content;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
  padding: 4px 10px;
`,fo=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  line-height: 1.12;
  ${({$pad:e})=>e&&"padding-right: 24px;"}
`,ml=b.span`
  flex: none;
  opacity: 0.95;
  display: inline-flex;
  & svg {
    width: 15px;
    height: 15px;
  }
`,yl=b.span`
  ${ft}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 12px;
  font-weight: 550;
`,vl=b.span`
  ${ft}
  flex: 0 1 auto;
  min-width: 0;
  font-size: 10.5px;
  font-weight: 600;
  opacity: 0.92;
`,xl=b.span`
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
`,bl=b.div`
  ${ft}
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
`,ho=b.div`
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 4px;
  top: ${({$sm:e})=>e?"3px":"5px"};
  right: ${({$sm:e})=>e?"3px":"6px"};
`,po=b.span`
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
`,go=b.span`
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.95);
  color: ${({theme:e})=>e.colors.subcontractText};
  padding: 1px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
`,wl=Ne`
  0% { box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent; }
  12% { box-shadow: 0 0 0 3px var(--pulse-ring), 0 0 16px 4px var(--pulse-glow); }
  100% { box-shadow: 0 0 0 1.5px var(--pulse-ring), 0 0 0 0 transparent; }
`,Sl=Ne`
  0%, 80% { opacity: 1; }
  100% { opacity: 0; }
`,Cl=Ne`
  0% { transform: scale(0.4); opacity: 0; }
  60% { transform: scale(1.18); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`,kl=Ne`
  0% { transform: scale(0.6); opacity: 0.65; }
  100% { transform: scale(2.2); opacity: 0; }
`,Ml=b.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  --pulse-ring: ${({$color:e})=>e};
  --pulse-glow: ${({$color:e})=>`${e}73`};
  animation:
    ${wl} 2160ms ease-out var(--pulse-delay, 0ms) both,
    ${Sl} 9600ms linear var(--pulse-delay, 0ms) both;
`,$l=b.span`
  position: relative;
  display: inline-flex;
  --pulse-ring: ${({$color:e})=>e};
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Cl} 420ms cubic-bezier(0.34, 1.56, 0.64, 1) var(--pulse-delay, 0ms) both;
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
      animation: ${kl} 750ms cubic-bezier(0.22, 1, 0.36, 1) var(--pulse-delay, 0ms);
    }
    &::after {
      animation-delay: calc(var(--pulse-delay, 0ms) + 170ms);
    }
  }
`,Dl=b.div`
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
`,mo=b.span`
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
  color: ${({$end:e})=>e?"#3A4C46":"#184546"};
`,El=Ne`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
`,_l=b.div`
  position: absolute;
  height: ${qt}px;
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
    animation: ${El} 0.42s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
`,Tl=b.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  min-width: 0;
`,Pl=b.div`
  ${ft}
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
`,Al=b.div`
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
`,Il=b.span`
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
`,Ol=b.span`
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
`,Ll=34,Gn=({row:e,data:r,zoom:t,isSubcontract:n=!1,onTileClick:o,onTileContextMenu:s,onDragStart:a,isDragging:l=!1,isDraggable:f=!0,yOffset:c=0,exiting:u=!1,highlighted:d=!1,dimmed:v=!1,leaving:C=!1,ghost:x=!1,ghostBadge:D="",pulse:y})=>{const{date:N,config:Q}=Ge(),H=Q.hourFormat??"12h",X=Rt(N,t),{y:w,x:g,width:p}=ul(e,X.startDate,X.endDate,r.startDate,r.endDate,t),{colors:T}=Xt(),M=h.useRef(null),S=z(r.startDate).isSame(z(r.endDate),"day"),B=r.eventType===Yt.Tour,W=r.eventType===Yt.Transfer,A=S&&(B||W);if(x)return i.jsxs(_l,{style:{left:`${g}px`,top:`${w+c}px`,width:`${p}px`},children:[i.jsxs(Tl,{children:[i.jsxs(Pl,{children:[i.jsx(Ye,{name:W?"transfer":"tour"}),r.title]}),i.jsxs(Al,{children:[i.jsx(Ye,{name:"check",strokeWidth:2.6}),"flota propia"]})]}),D&&i.jsx(Il,{children:D})]});const I=Y=>{Y.button===0&&(M.current={x:Y.clientX,y:Y.clientY},f&&a&&(Y.preventDefault(),a(r,Y)))},P=Y=>{s&&(Y.preventDefault(),s(r,{x:Y.clientX,y:Y.clientY}))},V=Y=>{if(M.current){const ne=Math.abs(Y.clientX-M.current.x),$=Math.abs(Y.clientY-M.current.y);Math.sqrt(ne*ne+$*$)<=5&&(o==null||o(r)),M.current=null}else o==null||o(r)},O={left:`${g}px`,top:`${w+c}px`,backgroundColor:`${r.bgColor??T.defaultTile}`,width:`${p}px`,color:uo(r.bgColor??"")},k=!n&&r.readiness?gt[r.readiness]:null,L=n&&r.subcontractConfirmed===!1,te=y?{"--pulse-delay":`${y.delayMs}ms`}:void 0,se=y?co(y.kind,n?void 0:r.readiness):"",j=Y=>y?i.jsx($l,{$color:se,style:te,children:Y},`${y.key}-${r.readiness??""}-${String(r.subcontractConfirmed)}`):Y,F=Y=>i.jsxs(pl,{"data-segment-id":r.segmentId,style:O,onClick:V,onMouseDown:I,onContextMenu:P,onDragStart:ne=>ne.preventDefault(),isDraggable:f,isDragging:l,$unconfirmed:L,$exiting:u,$highlighted:d,$dimmed:v,$leaving:C,$pulsing:!!y,children:[y&&i.jsx(Ml,{$color:se,style:te,"aria-hidden":!0},y.key),C&&i.jsx(Ol,{children:"Sub"}),Y]});return F(A?i.jsxs(i.Fragment,{children:[(n||k)&&i.jsx(ho,{$sm:!0,children:j(n?i.jsx(go,{children:"SUB"}):k&&i.jsx(po,{$sm:!0,style:{color:k.color},children:i.jsx(Ye,{name:k.icon,strokeWidth:k.icon==="check"?2.6:2.2})}))}),i.jsxs(Dl,{$transfer:W,children:[i.jsx(Ye,{name:W?"transfer":"sun",strokeWidth:2.4}),p>=Ll&&i.jsxs(i.Fragment,{children:[i.jsx(mo,{children:Se(r.startDate,H)}),!W&&i.jsx(mo,{$end:!0,children:Se(r.endDate,H)})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(ho,{children:(n||k)&&j(n?i.jsx(go,{children:"SUB"}):k&&i.jsx(po,{style:{color:k.color},children:i.jsx(Ye,{name:k.icon,strokeWidth:k.icon==="check"?2.6:2.2})}))}),r.bookingNumber&&i.jsx(xl,{children:r.bookingNumber}),i.jsxs(gl,{children:[i.jsxs(fo,{$pad:!0,children:[i.jsx(ml,{children:i.jsx(Ye,{name:W?"transfer":"tour"})}),i.jsx(yl,{children:r.title})]}),r.subtitle&&i.jsx(fo,{children:i.jsx(vl,{children:r.subtitle})}),r.driver&&i.jsxs(bl,{children:[i.jsx(Ye,{name:"person"}),r.driver]})]})]}))},yo=(e,r)=>{let t=0;for(const n of r)e>=n&&t++;return t*Le},Yl=e=>({segmentId:e.segmentId,reservationId:e.reservationId,startDate:e.startDate,endDate:e.endDate,occupancy:0,title:e.title,bookingNumber:"",eventType:e.eventType}),Nl=({data:e,zoom:r,onTileClick:t,onTileContextMenu:n,onDragStart:o,isDraggable:s,draggingEventId:a,separatorRowIndices:l=[],fadingUnitIds:f,highlightedSegmentId:c,focusedUnitIds:u,leavingSegmentIds:d,ghostProject:v})=>{const C=Za(),{nodes:x,liveMap:D}=h.useMemo(()=>{const g=new Map,p=!!u&&u.length>0;let T=0;return{nodes:e.map((S,B)=>{B>0&&(T+=Math.max(e[B-1].data.length,1));const W=!!(f!=null&&f.has(S.id)),A=p&&!u.includes(S.id),I=yo(T,l),P=v&&S.id===v.targetUnitId?i.jsx(Gn,{row:T,data:Yl(v),zoom:r,yOffset:I,isDragging:!1,isDraggable:!1,ghost:!0,ghostBadge:v.badge},`ghost-${S.id}`):null;if(!S.data.some(O=>O.length>0))return P?[P]:[];const V=S.data.map((O,k)=>O.map(L=>{const te=a===L.segmentId,se=s?s(L):!1,j=k+T,F=yo(j,l);return g.set(L.segmentId,{project:L,absoluteRow:j,yOffset:F,isSubcontract:!!S.isSubcontract,faded:W}),i.jsx(Gn,{row:j,data:L,zoom:r,isSubcontract:S.isSubcontract,onTileClick:t,onTileContextMenu:n,onDragStart:o,isDragging:te,isDraggable:se,yOffset:F,exiting:W,highlighted:c!=null&&L.segmentId===c,dimmed:A,leaving:!!(d!=null&&d.includes(L.segmentId)),pulse:C.get(L.segmentId)},L.segmentId)}));return P?[...V,[P]]:V}).flat(2),liveMap:g}},[e,t,n,r,o,s,a,l,f,c,u,d,v,C]),y=h.useRef(new Map),N=h.useRef([]),[Q,H]=h.useState([]);h.useEffect(()=>()=>N.current.forEach(clearTimeout),[]),h.useEffect(()=>{const g=y.current;y.current=D;const p=[];if(g.forEach((S,B)=>{!D.has(B)&&!S.faded&&p.push(S)}),H(S=>{let B=S.filter(W=>!D.has(W.project.segmentId));for(const W of p)B.some(A=>A.project.segmentId===W.project.segmentId)||(B=[...B,W]);return B}),!p.length)return;const T=new Set(p.map(S=>S.project.segmentId)),M=setTimeout(()=>{H(S=>S.filter(B=>!T.has(B.project.segmentId)))},220);N.current.push(M)},[D]);const X=[];y.current!==D&&y.current.forEach((g,p)=>{!D.has(p)&&!g.faded&&!Q.some(T=>T.project.segmentId===p)&&X.push(g)});const w=[...Q,...X].filter(g=>!D.has(g.project.segmentId)).map(g=>i.jsx(Gn,{row:g.absoluteRow,data:g.project,zoom:r,isSubcontract:g.isSubcontract,yOffset:g.yOffset,isDragging:!1,isDraggable:!1,exiting:!0},g.project.segmentId));return i.jsx(i.Fragment,{children:[...x,...w]})};b.div`
  box-sizing: border-box;
  font-family: ${Fe};
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
`;const Fl=b.div`
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
`,zl=b.div`
  padding: 10px 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,Bl=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`,Hl=b.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.accent};
  letter-spacing: 0.5px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Wl=b.span`
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
`,vo=b.div`
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
`,jl=b.div`
  ${bt}
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Zl=b.div`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.placeholder};
  margin-top: 2px;
  overflow-wrap: anywhere;
`,Vl=b.div`
  padding: 10px 12px;
`,Gl=b.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`,xo=b.div`
  flex: 1;
  ${({$isEnd:e})=>e&&"opacity: 0.8;"}
`,bo=b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,wo=b.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
`,So=b.span`
  color: ${({theme:e})=>e.colors.textPrimary};
`,Co=b.span`
  color: ${({theme:e})=>e.colors.accent};
  font-weight: 600;
`,Ul=b.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,Xl=b.div`
  min-width: 0;
`,Kl=b.div`
  font-size: 9px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`,Jl=b.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.textPrimary};
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`,ko=b.div`
  padding-top: 8px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  margin-top: 8px;
`,Ft=b.div`
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`,zt=b.div`
  font-size: 9px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.placeholder};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 2px;
`,Bt=b.div`
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
`;b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.span``,b.span``,b.div``,b.div``,b.div``,b.span``,b.div``,b.div``,b.div``,b.div``,b.p``,b.span``;const ql={client:"Client",startDate:"Start",endDate:"End",groupName:"Group",driver:"Driver",flightNumber:"Flight",serviceNotes:"Service Notes",reservationNotes:"Reservation Notes",salida:"Salida",destino:"Destino",regreso:"Regreso",tour:"Tour",transfer:"Transfer",oneDay:"One-day",passengers:"Pax"},Ql=({tooltipData:e,visible:r=!0})=>{const{mouseCoords:t,reservationData:n}=e,o=h.useRef(null),[s,a]=h.useState("below"),l=it(),f={...ql,...l.tooltip};h.useLayoutEffect(()=>{if(!o.current||!t)return;const y=o.current,{width:N,height:Q}=y.getBoundingClientRect(),H=y.parentElement;if(!H)return;const X=H.getBoundingClientRect(),w=12,g=4,p=X.height-t.y,T=X.width-t.x;let M=t.x+w,S=t.y+w,B="below";T<N+w&&(M=t.x-N-w),p<Q+w&&(S=t.y-Q-w,B="above"),M=Math.max(g,Math.min(M,X.width-N-g)),S=Math.max(g,Math.min(S,X.height-Q-g)),a(B),y.style.left=`${M}px`,y.style.top=`${S}px`},[t]);const c=n.reservationType===Yt.Tour,u=c&&n.isOneDayEvent,d=c?u?"sun":"tour":"transfer",v=c?u?f.oneDay:f.tour:f.transfer,C=n.readiness?gt[n.readiness]:null,x=n.subcontractConfirmed===void 0?null:el[n.subcontractConfirmed?"confirmed":"unconfirmed"],D=[...n.subcontractConfirmed?n.subcontractDetails??[]:[],n.groupName&&{label:f.groupName,value:n.groupName},n.driver&&{label:f.driver,value:n.driver},n.passengers&&{label:f.passengers,value:String(n.passengers)},n.flightNumber&&{label:f.flightNumber,value:n.flightNumber}].filter(Boolean);return i.jsxs(Fl,{ref:o,$position:s,$visible:r,children:[i.jsxs(zl,{children:[i.jsxs(Bl,{children:[i.jsx(Hl,{children:n.bookingNumber}),i.jsxs(Wl,{children:[i.jsx(Ye,{name:d,strokeWidth:2.4}),v]})]}),i.jsx(jl,{children:n.eventName}),n.client&&i.jsx(Zl,{children:n.client}),C&&i.jsxs(vo,{style:{color:C.color},children:[i.jsx(Ye,{name:C.icon,strokeWidth:C.icon==="check"?2.6:2.2}),n.readinessNote||C.label]}),x&&i.jsxs(vo,{style:{color:x.color},children:[i.jsx(Ye,{name:x.icon,strokeWidth:x.icon==="check"?2.6:2.2}),x.label]})]}),i.jsxs(Vl,{children:[i.jsxs(Gl,{children:[i.jsxs(xo,{children:[i.jsx(bo,{children:f.startDate}),i.jsxs(wo,{children:[i.jsx(So,{children:n.startDate}),i.jsx(Co,{children:n.startTime})]})]}),c&&n.endDate&&i.jsxs(xo,{$isEnd:!0,children:[i.jsx(bo,{children:f.endDate}),i.jsxs(wo,{children:[i.jsx(So,{children:n.endDate}),i.jsx(Co,{children:n.endTime})]})]})]}),D.length>0&&i.jsx(Ul,{children:D.map((y,N)=>i.jsxs(Xl,{children:[i.jsx(Kl,{children:y.label}),i.jsx(Jl,{children:y.value})]},N))}),(n.departureAddress||n.destinationAddress||n.returnAddress)&&i.jsxs(ko,{children:[n.departureAddress&&i.jsxs(Ft,{children:[i.jsx(zt,{children:f.salida}),i.jsx(Bt,{children:n.departureAddress})]}),n.destinationAddress&&i.jsxs(Ft,{children:[i.jsx(zt,{children:f.destino}),i.jsx(Bt,{children:n.destinationAddress})]}),n.returnAddress&&i.jsxs(Ft,{children:[i.jsx(zt,{children:f.regreso}),i.jsx(Bt,{children:n.returnAddress})]})]}),(n.serviceNotes||n.reservationNotes)&&i.jsxs(ko,{children:[n.serviceNotes&&i.jsxs(Ft,{children:[i.jsx(zt,{children:f.serviceNotes}),i.jsx(Bt,{children:n.serviceNotes})]}),n.reservationNotes&&i.jsxs(Ft,{children:[i.jsx(zt,{children:f.reservationNotes}),i.jsx(Bt,{children:n.reservationNotes})]})]})]})]})};b.div`
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
`;const Rl=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
`,ed=b.div`
  position: absolute;
  height: ${qt}px;
  border-radius: 4px;
  opacity: 0.8;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: grabbing;
  transition: ${({$isAnimating:e})=>e?"transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1)":"none"};

  ${({$isAnimating:e,$animateToX:r,$animateToY:t})=>e&&r!==void 0&&t!==void 0?`transform: translate3d(${r}px, ${t}px, 0);`:""}
`,td=b.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`,Mo=b.p`
  ${bt}
  ${ft}
  display: inline;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`,nd=b.p`
  ${bt}
  ${ft}
`,rd=b.div`
  position: sticky;
  left: ${Ae+16}px;
  overflow: hidden;
`,od=b.div`
  position: absolute;
  height: ${qt}px;
  border-radius: 4px;
  border: 3px dashed ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,sd=b.div`
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
`,id=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({$isValid:e=!0,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.4)":"rgba(76, 175, 80, 0.4)":"rgba(117, 117, 117, 0.4)"};
  pointer-events: none;
`,ad=b.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: rgba(117, 117, 117, 0.5);
  pointer-events: none;
  z-index: 999;
`,cd=b.div`
  position: absolute;
  width: 6px;
  background-color: ${({$isValid:e,$hasConflict:r})=>e?r?"#F44336":"#4CAF50":"#757575"};
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 16px ${({$isValid:e,$hasConflict:r})=>e?r?"rgba(244, 67, 54, 0.8)":"rgba(76, 175, 80, 0.8)":"rgba(117, 117, 117, 0.8)"};
`,$o=b.div`
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
`,Do=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #F44336;
  font-size: 13px;
`,Eo=b.div`
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
`,_o=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Un=b.div`
  padding: 10px 12px;
  background-color: #FFF3E0;
  border-left: 4px solid #FF9800;
  border-radius: 4px;
`,Xn=b.div`
  font-weight: 600;
  color: #E65100;
  margin-bottom: 6px;
  font-size: 12px;
`,Dt=b.div`
  color: #555;
  font-size: 11px;
  margin-top: 4px;
  padding: 3px 6px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-weight: 500;
`,To=b.div`
  color: #D84315;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  background-color: #FFE0B2;
  padding: 6px 10px;
  border-radius: 4px;
  border: 2px solid #FF9800;
`,ld=({draggedEvent:e,ghostPosition:r,ghostDimensions:t,dropTarget:n,isValidDrop:o,dragState:s,data:a,resourceOnly:l,separatorRowIndices:f=[]})=>{const c=it(),{config:u}=Ge(),d=u.hourFormat??"12h",v=g=>{let p=0;for(const T of f)T<=g&&p++;return g*he+p*Le},[C,x]=h.useState(null),[D,y]=h.useState(0),N=h.useCallback((g=400,p=300)=>{const M=t.width,S=48,B=document.getElementById("react-scheduler");if(!B)return{x:r.x+M+16,y:r.y};const W=B.scrollLeft,A=B.scrollTop,I=B.clientWidth,P=B.clientHeight,V=r.x-W,O=r.y-A,k={left:Ae+16,right:I-16,top:16,bottom:P-16},L=k.right-(V+M),te=V-k.left,se=k.bottom-(O+S),j=O-k.top;let F,Y;return L>=g+16?F=V+M+16:te>=g+16?F=V-g-16:L>=te?(F=V+M+16,F+g>k.right&&(F=k.right-g)):(F=V-g-16,F<k.left&&(F=k.left)),se>=p+16?Y=O+S+16:j>=p+16?Y=O-p-16:se>=j?(Y=O+S+16,Y+p>k.bottom&&(Y=k.bottom-p)):(Y=O-p-16,Y<k.top&&(Y=k.top)),F=Math.max(k.left,Math.min(F,k.right-g)),Y=Math.max(k.top,Math.min(Y,k.bottom-p)),{x:F+W,y:Y+A}},[r.x,r.y,t.width]);h.useEffect(()=>{s==="dragging"&&e&&D===0?y(r.x):s==="idle"&&y(0)},[s,e,r.x,D]),h.useEffect(()=>{x(s==="animating"&&e?{x:0,y:0}:null)},[s,e]);const Q=h.useMemo(()=>{if(!e||!e.totalPassengers||s==="idle"||s==="potential")return[];const g=[];let p=0;for(const T of a){const M=Math.max(T.data.length,1);if(T.capacity!==void 0&&e.totalPassengers>T.capacity)for(let S=0;S<M;S++)g.push(p+S);p+=M}return g},[e,a,s]);if(!e||s==="idle"||s==="potential")return null;const H=s==="animating",X=uo(e.bgColor??""),w=()=>{if(!n)return"";const g=`${z(n.startDate).format("MMM D")}, ${Se(n.startDate,d)}`,p=Se(n.endDate,d);return`${g} - ${p}`};return i.jsxs(Rl,{children:[Q.map(g=>i.jsx(ad,{style:{top:`${v(g)}px`,height:`${he}px`}},g)),n&&s==="dragging"&&i.jsx(id,{$isValid:o,$hasConflict:n.hasConflict,style:{top:`${v(n.resourceIndex)}px`,height:`${he}px`}}),n&&s==="dragging"&&!l&&i.jsxs(i.Fragment,{children:[i.jsx(od,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${v(n.resourceIndex)+(he-48)/2}px`,width:`${t.width}px`}}),i.jsx(sd,{$isValid:o,$hasConflict:n.hasConflict,style:{left:`${r.x}px`,top:`${v(n.resourceIndex)+(he-48)/2}px`},children:w()})]}),n&&s==="dragging"&&l&&i.jsx(cd,{$isValid:o,$hasConflict:n.hasConflict,style:{left:"0px",top:`${v(n.resourceIndex)}px`,height:`${he}px`}}),n&&o&&n.hasConflict&&n.conflicts&&n.conflicts.length>0&&s==="dragging"&&(()=>{const g=N(400,300);return i.jsxs($o,{style:{left:`${g.x}px`,top:`${g.y}px`},children:[i.jsxs(Do,{children:[i.jsx(Eo,{children:"!"}),n.conflicts.length," ",n.conflicts.length>1?c.conflicts.detectedPlural:c.conflicts.detected," ",c.conflicts.detectedSuffix]}),i.jsx(_o,{children:n.conflicts.map((p,T)=>{const M=z(n.startDate).format("YYYY-MM-DD"),S=z(n.endDate).format("YYYY-MM-DD"),B=z(p.event.startDate).format("YYYY-MM-DD"),W=z(p.event.endDate).format("YYYY-MM-DD"),A=z(p.conflictStart).format("YYYY-MM-DD"),I=z(p.conflictEnd).format("YYYY-MM-DD"),P=M!==S,V=B!==W,O=A!==I,k=P?`${z(n.startDate).format("MMM D")}, ${Se(n.startDate,d)}`:Se(n.startDate,d),L=P?`${z(n.endDate).format("MMM D")}, ${Se(n.endDate,d)}`:Se(n.endDate,d),te=V?`${z(p.event.startDate).format("MMM D")}, ${Se(p.event.startDate,d)}`:Se(p.event.startDate,d),se=V?`${z(p.event.endDate).format("MMM D")}, ${Se(p.event.endDate,d)}`:Se(p.event.endDate,d),j=O?`${z(p.conflictStart).format("MMM D")}, ${Se(p.conflictStart,d)}`:Se(p.conflictStart,d),F=O?`${z(p.conflictEnd).format("MMM D")}, ${Se(p.conflictEnd,d)}`:Se(p.conflictEnd,d),Y=O?"":z(p.conflictStart).format("MMM D"),ne=n.startDate.getTime(),$=n.endDate.getTime(),K=p.event.startDate.getTime(),_=p.event.endDate.getTime(),R=ne>=K&&ne<_,G=$>K&&$<=_,Z=ne<=K&&$>=_,m=K<=ne&&_>=$;let U=!1,E=!1,J=!1,ee=!1,q="";return Z||m?(U=!0,E=!0,J=!0,ee=!0,q=`⚠️ ${c.conflicts.changeBoth}`):R&&G?(U=!0,E=!0,J=!0,ee=!0,q=`⚠️ ${c.conflicts.changeBoth}`):R?(U=!0,ee=!0,q=`⚠️ ${c.conflicts.changeStart}`):G&&(E=!0,J=!0,q=`⚠️ ${c.conflicts.changeEnd}`),i.jsxs(Un,{children:[i.jsxs(Xn,{children:[c.conflicts.conflictsWith,": ",p.event.title,p.event.subtitle&&` - ${p.event.subtitle}`]}),i.jsxs(Dt,{children:[i.jsx("strong",{children:e.title})," ",c.conflicts.movingTo,":"," ",U?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:k}):k," ",c.conflicts.to," ",E?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:L}):L]}),i.jsxs(Dt,{children:[i.jsx("strong",{children:p.event.title})," ",c.conflicts.currentlyAt,":"," ",J?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:te}):te," ",c.conflicts.to," ",ee?i.jsx("span",{style:{color:"#D32F2F",fontWeight:700},children:se}):se]}),i.jsxs(To,{children:[c.conflicts.conflictTime,": ",Y&&`${Y}, `,j," - ",F]}),q&&i.jsx(Dt,{style:{backgroundColor:"#FFEBEE",color:"#C62828",fontWeight:600,marginTop:"6px",border:"1px solid #EF5350"},children:q})]},T)})})]})})(),n&&o&&!n.hasConflict&&n.nearbyEvents&&n.nearbyEvents.length>0&&s==="dragging"&&(()=>{const g=N(400,400);return i.jsxs($o,{style:{left:`${g.x}px`,top:`${g.y}px`,borderColor:"#4CAF50"},children:[i.jsxs(Do,{style:{color:"#2E7D32"},children:[i.jsx(Eo,{style:{backgroundColor:"#4CAF50"},children:"✓"}),n.nearbyEvents.length," ",n.nearbyEvents.length>1?c.conflicts.nearbyEvents:c.conflicts.nearbyEvent]}),i.jsxs(_o,{children:[(()=>{const p=n.nearbyEvents.some(B=>B.position==="before"),T=n.nearbyEvents.some(B=>B.position==="after"),M=Se(n.startDate,d),S=Se(n.endDate,d);return i.jsxs(Un,{style:{backgroundColor:"#F1F8E9",borderLeftColor:"#8BC34A"},children:[i.jsxs(Xn,{style:{color:"#33691E"},children:[c.conflicts.yourEvent,": ",e.title,e.subtitle&&` - ${e.subtitle}`]}),i.jsxs(Dt,{style:{fontWeight:600},children:[z(n.startDate).format("MMM D"),":"," ",p?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:M}):M," ",c.conflicts.to," ",T?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:S}):S]}),i.jsx(Dt,{style:{backgroundColor:"#DCEDC8",marginTop:"4px",fontSize:"10px",color:"#558B2F"},children:c.conflicts.sameDay})]})})(),n.nearbyEvents.map((p,T)=>{const M=z(p.event.startDate).format("YYYY-MM-DD"),S=z(p.event.endDate).format("YYYY-MM-DD"),B=M!==S,W=B?`${z(p.event.startDate).format("MMM D")}, ${Se(p.event.startDate,d)}`:Se(p.event.startDate,d),A=B?`${z(p.event.endDate).format("MMM D")}, ${Se(p.event.endDate,d)}`:Se(p.event.endDate,d),I=z(p.event.startDate).format("MMM D"),P=Math.floor(p.timeGap/(1e3*60*60)),V=Math.floor(p.timeGap%(1e3*60*60)/(1e3*60)),O=P>0?`${P}h ${V}m`:`${V}m`,k=p.position==="after",L=p.position==="before";return i.jsxs(Un,{style:{backgroundColor:"#E8F5E9",borderLeftColor:"#4CAF50"},children:[i.jsxs(Xn,{style:{color:"#1B5E20"},children:[p.event.title,p.event.subtitle&&` - ${p.event.subtitle}`]}),i.jsxs(Dt,{children:[!B&&`${I}: `,k?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:W}):W," ",c.conflicts.to," ",L?i.jsx("span",{style:{color:"#2E7D32",fontWeight:700},children:A}):A]}),i.jsxs(To,{style:{backgroundColor:"#C8E6C9",borderColor:"#4CAF50",color:"#1B5E20"},children:[O," ",p.position==="before"?c.conflicts.before:c.conflicts.after]})]},T)})]})]})})(),i.jsx(ed,{$isAnimating:H,$animateToX:C==null?void 0:C.x,$animateToY:C==null?void 0:C.y,style:{left:H?`${(C==null?void 0:C.x)??0}px`:"0",top:H?`${(C==null?void 0:C.y)??0}px`:"0",transform:H?void 0:`translate3d(${l?D:r.x}px, ${r.y}px, 0)`,backgroundColor:e.bgColor??"rgb(114, 141, 226)",width:`${t.width}px`,color:X},children:i.jsx(td,{children:i.jsxs(rd,{children:[i.jsx(Mo,{$bold:!0,children:e.title}),e.subtitle&&i.jsx(Mo,{children:e.subtitle}),e.description&&i.jsx(nd,{children:e.description})]})})})]})},dd=Ne`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`,ud=b.div`
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
  animation: ${dd} 1.5s ease-in-out infinite;
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
`,fd=({selectionBox:e,isSelecting:r})=>!e||!r?null:i.jsx(ud,{style:{left:e.x,top:e.y,width:e.width,height:e.height}}),hd=Ne`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,pd=b.div`
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
  animation: ${hd} 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,gd=b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`,md=b.span`
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
`,yd=b.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  padding: 4px 10px;
  border-radius: 4px;
`,vd=b.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;b.div`
  display: none;
`,b.div`
  display: none;
`,b.button`
  display: none;
`;const xd=b.div`
  display: flex;
  gap: 8px;
`,Po=b.button`
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
`,bd=({selections:e,onConfirm:r,onClear:t})=>{var x;const o=it().multiSelect,s=h.useMemo(()=>e.filter(D=>D.hasConflict).length,[e]),a=e.length===1?(o==null?void 0:o.selectionPending)||"selection pending":(o==null?void 0:o.selectionsPending)||"selection(s) pending",l=`${(o==null?void 0:o.clickToRemove)||"Click × on selections to remove"} • ${(o==null?void 0:o.pressEscToClear)||"Press Esc to clear all"}`,f=(o==null?void 0:o.clearAll)||"Clear All",c=e.length===1?(o==null?void 0:o.confirmSelection)||"Confirm Selection":(o==null?void 0:o.confirmSelections)||"Confirm Selections",u=e.length===1?(o==null?void 0:o.confirmWithConflict)||"Confirm with Conflict":(o==null?void 0:o.confirmWithConflicts)||"Confirm with Conflicts",d=s===1?(o==null?void 0:o.conflictWarning)||"1 selection has conflicts":((x=o==null?void 0:o.conflictsWarning)==null?void 0:x.replace("{count}",String(s)))||`${s} selections have conflicts`;if(e.length===0)return null;const v=s>0,C=i.jsxs(pd,{$hasConflicts:v,"data-multi-select-ui":!0,children:[i.jsxs(gd,{children:[i.jsxs(md,{$hasConflicts:v,children:[e.length," ",a]}),v&&i.jsxs(yd,{children:["⚠️ ",d]}),i.jsx(vd,{children:l})]}),i.jsxs(xd,{children:[i.jsxs(Po,{variant:"secondary",onClick:t,children:["✕ ",f]}),i.jsx(Po,{variant:"primary",$hasConflicts:v,onClick:r,children:v?`⚠️ ${u}`:`✓ ${c}`})]})]});return Oo.createPortal(C,document.body)},wd=Ne`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,Sd=b.div`
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
  animation: ${wd} 0.2s ease-out;
  z-index: ${({$isDragging:e})=>e?100:5};
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  transition: ${({$isDragging:e})=>e?"none":"background 0.15s ease"};
  box-shadow: ${({$isDragging:e})=>e?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"};

  &:hover {
    background: ${({$hasConflict:e})=>e?"rgba(245, 158, 11, 0.3)":"rgba(34, 197, 94, 0.3)"};
  }

  ${({$hasConflict:e})=>e&&dt`
      border-style: dashed;
    `}
`,Cd=b.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({$hasConflict:e})=>e?"#b45309":"#15803d"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,kd=b.span`
  font-size: 12px;
  margin-right: 4px;
  flex-shrink: 0;
  cursor: help;
`,Md=b.button`
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
`,$d=({selections:e,data:r,zoom:t,startDate:n,onRemove:o,onUpdate:s,separatorRowIndices:a=[]})=>{const[l,f]=h.useState(null),[c,u]=h.useState({x:0,y:0}),d=h.useRef(null),v=h.useMemo(()=>{switch(t){case 0:return We*7;case 1:return ke;case 2:return Pe;default:return ke}},[t]),C=h.useMemo(()=>z().year(n.year).month(n.month).date(n.dayOfMonth).hour(n.hour).minute(0).second(0).millisecond(0),[n]),x=h.useMemo(()=>e.map((g,p)=>{let T=0,M=!1;for(const k of r){if(k.id===g.resourceId){M=!0;break}T+=Math.max(k.data.length,1)}if(!M)return null;const S=z(g.startDate),B=z(g.endDate);let W,A;switch(t){case 0:W=Math.floor(S.diff(C,"days")/7),A=Math.max(1,Math.ceil(B.diff(S,"days")/7)+1);break;case 1:W=S.diff(C,"days"),A=Math.max(1,B.diff(S,"days")+1);break;case 2:W=S.diff(C,"hours"),A=Math.max(1,B.diff(S,"hours")+1);break;default:W=0,A=1}const I=W*v;let P=0;for(const k of a)k<=T&&P++;const V=T*he+P*Le,O=A*v;return{index:p,selection:g,x:I,y:V,width:O,height:he}}),[e,r,t,C,v]),D=(g,p)=>{const T=z(g).format("MMM D"),M=z(p).format("MMM D");return T===M?T:`${T} - ${M}`},y=g=>!g.hasConflict||!g.conflicts?"":`⚠️ Conflicts with:
${g.conflicts.map(T=>{const M=(T.overlapDuration/36e5).toFixed(1);return`• ${T.event.title} (${M}h overlap)`}).join(`
`)}`,N=h.useCallback(g=>{let p=0;for(const T of r){const M=Math.max(T.data.length,1);if(g>=p*he&&g<(p+M)*he)return{resourceId:T.id,resourceLabel:T.label};p+=M}return null},[r]),Q=h.useCallback(g=>{const p=Math.floor(g/v);switch(t){case 0:return C.add(p*7,"days").toDate();case 1:return C.add(p,"days").toDate();case 2:return C.add(p,"hours").toDate();default:return C.toDate()}},[t,C,v]),H=h.useCallback((g,p)=>{!s||(g.preventDefault(),g.stopPropagation(),!x[p])||(d.current={x:g.clientX,y:g.clientY},f(p),u({x:0,y:0}))},[s,x]),X=h.useCallback(g=>{if(l===null||!d.current)return;const p=g.clientX-d.current.x,T=g.clientY-d.current.y,M=Math.round(p/v)*v,S=Math.round(T/he)*he;u({x:M,y:S})},[l,v]),w=h.useCallback(()=>{if(l===null||!s){f(null),u({x:0,y:0}),d.current=null;return}const g=x[l];if(!g){f(null),u({x:0,y:0}),d.current=null;return}const p=g.x+c.x,T=g.y+c.y,M=N(T+he/2);if(!M){f(null),u({x:0,y:0}),d.current=null;return}const S=Q(p),B=e[l],W=B.endDate.getTime()-B.startDate.getTime(),A=new Date(S.getTime()+W);s(l,{startDate:S,endDate:A,resourceId:M.resourceId,resourceLabel:M.resourceLabel}),f(null),u({x:0,y:0}),d.current=null},[l,c,x,e,s,N,Q]);return h.useEffect(()=>{if(l!==null)return document.addEventListener("mousemove",X),document.addEventListener("mouseup",w),()=>{document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",w)}},[l,X,w]),i.jsx(i.Fragment,{children:x.map(g=>{if(!g)return null;const p=g.selection.hasConflict||!1,T=l===g.index,M=T?g.x+c.x:g.x,S=T?g.y+c.y:g.y;return i.jsxs(Sd,{$hasConflict:p,$isDragging:T,style:{left:M,top:S,width:g.width,height:g.height},"data-multi-select-ui":!0,onMouseDown:B=>H(B,g.index),children:[p&&i.jsx(kd,{title:y(g.selection),children:"⚠️"}),i.jsx(Cd,{$hasConflict:p,children:D(g.selection.startDate,g.selection.endDate)}),i.jsx(Md,{onClick:B=>{B.stopPropagation(),o(g.index)},onMouseDown:B=>B.stopPropagation(),title:p?"Remove conflicting selection":"Remove selection",children:"×"})]},g.index)})})},Ao=(e,r,t,n)=>{if(r===2)return null;const o=r===0?We*7:ke,s=z().year(t.year).month(t.month).date(t.dayOfMonth).startOf("day"),a=e.startOf("day"),l=r===0?a.startOf("week").diff(s.startOf("week"),"week"):a.diff(s,"days");return l<0||l>=n?null:{x:l*o,width:o}},Dd=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({theme:e})=>e.colors.today}12;
`,Ed=({zoom:e,startDate:r})=>{const{cols:t}=Ge(),n=h.useMemo(()=>Ao(z(),e,r,t),[e,r,t]);return n?i.jsx(Dd,{style:{left:`${n.x}px`,width:`${n.width}px`},"aria-hidden":!0}):null},_d="#2f6fed",Td=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background: ${_d}1c;
`,Pd=({zoom:e,startDate:r})=>{const{cols:t,jumpDate:n}=Ge(),o=h.useMemo(()=>!n||n.isSame(z(),"day")?null:Ao(n,e,r,t),[n,e,r,t]);return o?i.jsx(Td,{style:{left:`${o.x}px`,width:`${o.width}px`},"aria-hidden":!0}):null},c1="";Ee.READINESS=gt,Ee.Scheduler=ec,Ee.TileIcon=Ye,Ee.tilePulseColor=co,Object.defineProperty(Ee,Symbol.toStringTag,{value:"Module"})});
