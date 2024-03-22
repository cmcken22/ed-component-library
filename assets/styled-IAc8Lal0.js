import{u as tt,_ as U,a as Jt}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{r as F,b as X}from"./index-Dl6G-zuu.js";import{e as Qt,i as yt,a as er,b as gt,k as tr,l as rr,_ as nr,n as bt,s as or,u as sr,c as ar,o as ir}from"./createTheme-B78KyuB4.js";import{j as vt}from"./jsx-runtime-Du8NFWEI.js";const xt="$$material";function St(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var cr=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ur=St(function(e){return cr.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function fr(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function lr(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var dr=function(){function e(r){var n=this;this._insertTag=function(o){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(o,s),n.tags.push(o)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(lr(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var s=fr(o);try{s.insertRule(n,s.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),O="-ms-",pe="-moz-",d="-webkit-",wt="comm",Ue="rule",Be="decl",pr="@import",$t="@keyframes",mr="@layer",hr=Math.abs,me=String.fromCharCode,yr=Object.assign;function gr(e,t){return C(e,0)^45?(((t<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}function _t(e){return e.trim()}function br(e,t){return(e=t.exec(e))?e[0]:e}function p(e,t,r){return e.replace(t,r)}function We(e,t){return e.indexOf(t)}function C(e,t){return e.charCodeAt(t)|0}function ee(e,t,r){return e.slice(t,r)}function q(e){return e.length}function Ye(e){return e.length}function ae(e,t){return t.push(e),e}function vr(e,t){return e.map(t).join("")}var he=1,Y=1,kt=0,E=0,_=0,K="";function ye(e,t,r,n,o,s,a){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:he,column:Y,length:a,return:""}}function Q(e,t){return yr(ye("",null,null,"",null,null,0),e,{length:-e.length},t)}function xr(){return _}function Sr(){return _=E>0?C(K,--E):0,Y--,_===10&&(Y=1,he--),_}function R(){return _=E<kt?C(K,E++):0,Y++,_===10&&(Y=1,he++),_}function W(){return C(K,E)}function ce(){return E}function ne(e,t){return ee(K,e,t)}function te(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pt(e){return he=Y=1,kt=q(K=e),E=0,[]}function Ct(e){return K="",e}function ue(e){return _t(ne(E-1,De(e===91?e+2:e===40?e+1:e)))}function wr(e){for(;(_=W())&&_<33;)R();return te(e)>2||te(_)>3?"":" "}function $r(e,t){for(;--t&&R()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return ne(e,ce()+(t<6&&W()==32&&R()==32))}function De(e){for(;R();)switch(_){case e:return E;case 34:case 39:e!==34&&e!==39&&De(_);break;case 40:e===41&&De(e);break;case 92:R();break}return E}function _r(e,t){for(;R()&&e+_!==57;)if(e+_===84&&W()===47)break;return"/*"+ne(t,E-1)+"*"+me(e===47?e:R())}function kr(e){for(;!te(W());)R();return ne(e,E)}function Pr(e){return Ct(fe("",null,null,null,[""],e=Pt(e),0,[0],e))}function fe(e,t,r,n,o,s,a,i,c){for(var m=0,f=0,g=a,A=0,T=0,b=0,u=1,S=1,v=1,w=0,k="",L=o,x=s,$=n,l=k;S;)switch(b=w,w=R()){case 40:if(b!=108&&C(l,g-1)==58){We(l+=p(ue(w),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:l+=ue(w);break;case 9:case 10:case 13:case 32:l+=wr(b);break;case 92:l+=$r(ce()-1,7);continue;case 47:switch(W()){case 42:case 47:ae(Cr(_r(R(),ce()),t,r),c);break;default:l+="/"}break;case 123*u:i[m++]=q(l)*v;case 125*u:case 59:case 0:switch(w){case 0:case 125:S=0;case 59+f:v==-1&&(l=p(l,/\f/g,"")),T>0&&q(l)-g&&ae(T>32?nt(l+";",n,r,g-1):nt(p(l," ","")+";",n,r,g-2),c);break;case 59:l+=";";default:if(ae($=rt(l,t,r,m,f,o,i,k,L=[],x=[],g),s),w===123)if(f===0)fe(l,t,$,$,L,s,g,i,x);else switch(A===99&&C(l,3)===110?100:A){case 100:case 108:case 109:case 115:fe(e,$,$,n&&ae(rt(e,$,$,0,0,o,i,k,o,L=[],g),x),o,x,g,i,n?L:x);break;default:fe(l,$,$,$,[""],x,0,i,x)}}m=f=T=0,u=v=1,k=l="",g=a;break;case 58:g=1+q(l),T=b;default:if(u<1){if(w==123)--u;else if(w==125&&u++==0&&Sr()==125)continue}switch(l+=me(w),w*u){case 38:v=f>0?1:(l+="\f",-1);break;case 44:i[m++]=(q(l)-1)*v,v=1;break;case 64:W()===45&&(l+=ue(R())),A=W(),f=g=q(k=l+=kr(ce())),w++;break;case 45:b===45&&q(l)==2&&(u=0)}}return s}function rt(e,t,r,n,o,s,a,i,c,m,f){for(var g=o-1,A=o===0?s:[""],T=Ye(A),b=0,u=0,S=0;b<n;++b)for(var v=0,w=ee(e,g+1,g=hr(u=a[b])),k=e;v<T;++v)(k=_t(u>0?A[v]+" "+w:p(w,/&\f/g,A[v])))&&(c[S++]=k);return ye(e,t,r,o===0?Ue:i,c,m,f)}function Cr(e,t,r){return ye(e,t,r,wt,me(xr()),ee(e,2,-2),0)}function nt(e,t,r,n){return ye(e,t,r,Be,ee(e,0,n),ee(e,n+1,-1),n)}function B(e,t){for(var r="",n=Ye(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function Or(e,t,r,n){switch(e.type){case mr:if(e.children.length)break;case pr:case Be:return e.return=e.return||e.value;case wt:return"";case $t:return e.return=e.value+"{"+B(e.children,n)+"}";case Ue:e.value=e.props.join(",")}return q(r=B(e.children,n))?e.return=e.value+"{"+r+"}":""}function Tr(e){var t=Ye(e);return function(r,n,o,s){for(var a="",i=0;i<t;i++)a+=e[i](r,n,o,s)||"";return a}}function Ar(e){return function(t){t.root||(t=t.return)&&e(t)}}var Er=function(t,r,n){for(var o=0,s=0;o=s,s=W(),o===38&&s===12&&(r[n]=1),!te(s);)R();return ne(t,E)},Rr=function(t,r){var n=-1,o=44;do switch(te(o)){case 0:o===38&&W()===12&&(r[n]=1),t[n]+=Er(E-1,r,n);break;case 2:t[n]+=ue(o);break;case 4:if(o===44){t[++n]=W()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=me(o)}while(o=R());return t},Mr=function(t,r){return Ct(Rr(Pt(t),r))},ot=new WeakMap,jr=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,o=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!ot.get(n))&&!o){ot.set(t,!0);for(var s=[],a=Mr(r,s),i=n.props,c=0,m=0;c<a.length;c++)for(var f=0;f<i.length;f++,m++)t.props[m]=s[c]?a[c].replace(/&\f/g,i[f]):i[f]+" "+a[c]}}},Fr=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ot(e,t){switch(gr(e,t)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+pe+e+O+e+e;case 6828:case 4268:return d+e+O+e+e;case 6165:return d+e+O+"flex-"+e+e;case 5187:return d+e+p(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+O+"flex-$1$2")+e;case 5443:return d+e+O+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return d+e+O+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return d+e+O+p(e,"shrink","negative")+e;case 5292:return d+e+O+p(e,"basis","preferred-size")+e;case 6060:return d+"box-"+p(e,"-grow","")+d+e+O+p(e,"grow","positive")+e;case 4554:return d+p(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+O+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(q(e)-1-t>6)switch(C(e,t+1)){case 109:if(C(e,t+4)!==45)break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+pe+(C(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~We(e,"stretch")?Ot(p(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(C(e,t+1)!==115)break;case 6444:switch(C(e,q(e)-3-(~We(e,"!important")&&10))){case 107:return p(e,":",":"+d)+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+d+(C(e,14)===45?"inline-":"")+"box$3$1"+d+"$2$3$1"+O+"$2box$3")+e}break;case 5936:switch(C(e,t+11)){case 114:return d+e+O+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+O+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+O+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return d+e+O+e+e}return e}var Ir=function(t,r,n,o){if(t.length>-1&&!t.return)switch(t.type){case Be:t.return=Ot(t.value,t.length);break;case $t:return B([Q(t,{value:p(t.value,"@","@"+d)})],o);case Ue:if(t.length)return vr(t.props,function(s){switch(br(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return B([Q(t,{props:[p(s,/:(read-\w+)/,":"+pe+"$1")]})],o);case"::placeholder":return B([Q(t,{props:[p(s,/:(plac\w+)/,":"+d+"input-$1")]}),Q(t,{props:[p(s,/:(plac\w+)/,":"+pe+"$1")]}),Q(t,{props:[p(s,/:(plac\w+)/,O+"input-$1")]})],o)}return""})}},Lr=[Ir],Tt=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(u){var S=u.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(u),u.setAttribute("data-s",""))})}var o=t.stylisPlugins||Lr,s={},a,i=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(u){for(var S=u.getAttribute("data-emotion").split(" "),v=1;v<S.length;v++)s[S[v]]=!0;i.push(u)});var c,m=[jr,Fr];{var f,g=[Or,Ar(function(u){f.insert(u)})],A=Tr(m.concat(o,g)),T=function(S){return B(Pr(S),A)};c=function(S,v,w,k){f=w,T(S?S+"{"+v.styles+"}":v.styles),k&&(b.inserted[v.name]=!0)}}var b={key:r,sheet:new dr({key:r,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:c};return b.sheet.hydrate(i),b},At={exports:{}},h={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=typeof Symbol=="function"&&Symbol.for,Xe=P?Symbol.for("react.element"):60103,Ke=P?Symbol.for("react.portal"):60106,ge=P?Symbol.for("react.fragment"):60107,be=P?Symbol.for("react.strict_mode"):60108,ve=P?Symbol.for("react.profiler"):60114,xe=P?Symbol.for("react.provider"):60109,Se=P?Symbol.for("react.context"):60110,Ze=P?Symbol.for("react.async_mode"):60111,we=P?Symbol.for("react.concurrent_mode"):60111,$e=P?Symbol.for("react.forward_ref"):60112,_e=P?Symbol.for("react.suspense"):60113,zr=P?Symbol.for("react.suspense_list"):60120,ke=P?Symbol.for("react.memo"):60115,Pe=P?Symbol.for("react.lazy"):60116,qr=P?Symbol.for("react.block"):60121,Nr=P?Symbol.for("react.fundamental"):60117,Wr=P?Symbol.for("react.responder"):60118,Dr=P?Symbol.for("react.scope"):60119;function M(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xe:switch(e=e.type,e){case Ze:case we:case ge:case ve:case be:case _e:return e;default:switch(e=e&&e.$$typeof,e){case Se:case $e:case Pe:case ke:case xe:return e;default:return t}}case Ke:return t}}}function Et(e){return M(e)===we}h.AsyncMode=Ze;h.ConcurrentMode=we;h.ContextConsumer=Se;h.ContextProvider=xe;h.Element=Xe;h.ForwardRef=$e;h.Fragment=ge;h.Lazy=Pe;h.Memo=ke;h.Portal=Ke;h.Profiler=ve;h.StrictMode=be;h.Suspense=_e;h.isAsyncMode=function(e){return Et(e)||M(e)===Ze};h.isConcurrentMode=Et;h.isContextConsumer=function(e){return M(e)===Se};h.isContextProvider=function(e){return M(e)===xe};h.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xe};h.isForwardRef=function(e){return M(e)===$e};h.isFragment=function(e){return M(e)===ge};h.isLazy=function(e){return M(e)===Pe};h.isMemo=function(e){return M(e)===ke};h.isPortal=function(e){return M(e)===Ke};h.isProfiler=function(e){return M(e)===ve};h.isStrictMode=function(e){return M(e)===be};h.isSuspense=function(e){return M(e)===_e};h.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ge||e===we||e===ve||e===be||e===_e||e===zr||typeof e=="object"&&e!==null&&(e.$$typeof===Pe||e.$$typeof===ke||e.$$typeof===xe||e.$$typeof===Se||e.$$typeof===$e||e.$$typeof===Nr||e.$$typeof===Wr||e.$$typeof===Dr||e.$$typeof===qr)};h.typeOf=M;At.exports=h;var Vr=At.exports,Rt=Vr,Gr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mt={};Mt[Rt.ForwardRef]=Gr;Mt[Rt.Memo]=Hr;var Ur=!0;function Br(e,t,r){var n="";return r.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):n+=o+" "}),n}var jt=function(t,r,n){var o=t.key+"-"+r.name;(n===!1||Ur===!1)&&t.registered[o]===void 0&&(t.registered[o]=r.styles)},Ft=function(t,r,n){jt(t,r,n);var o=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var s=r;do t.insert(r===s?"."+o:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function Yr(e){for(var t=0,r,n=0,o=e.length;o>=4;++n,o-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Xr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kr=/[A-Z]|^ms/g,Zr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,It=function(t){return t.charCodeAt(1)===45},st=function(t){return t!=null&&typeof t!="boolean"},ze=St(function(e){return It(e)?e:e.replace(Kr,"-$&").toLowerCase()}),at=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(Zr,function(n,o,s){return N={name:o,styles:s,next:N},o})}return Xr[t]!==1&&!It(t)&&typeof r=="number"&&r!==0?r+"px":r};function re(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return N={name:r.name,styles:r.styles,next:N},r.name;if(r.styles!==void 0){var n=r.next;if(n!==void 0)for(;n!==void 0;)N={name:n.name,styles:n.styles,next:N},n=n.next;var o=r.styles+";";return o}return Jr(e,t,r)}case"function":{if(e!==void 0){var s=N,a=r(e);return N=s,re(e,t,a)}break}}if(t==null)return r;var i=t[r];return i!==void 0?i:r}function Jr(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=re(e,t,r[o])+";";else for(var s in r){var a=r[s];if(typeof a!="object")t!=null&&t[a]!==void 0?n+=s+"{"+t[a]+"}":st(a)&&(n+=ze(s)+":"+at(s,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var i=0;i<a.length;i++)st(a[i])&&(n+=ze(s)+":"+at(s,a[i])+";");else{var c=re(e,t,a);switch(s){case"animation":case"animationName":{n+=ze(s)+":"+c+";";break}default:n+=s+"{"+c+"}"}}}return n}var it=/label:\s*([^\s;\n{]+)\s*(;|$)/g,N,Je=function(t,r,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,s="";N=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,s+=re(n,r,a)):s+=a[0];for(var i=1;i<t.length;i++)s+=re(n,r,t[i]),o&&(s+=a[i]);it.lastIndex=0;for(var c="",m;(m=it.exec(s))!==null;)c+="-"+m[1];var f=Yr(s)+c;return{name:f,styles:s,next:N}},Lt=F.createContext(typeof HTMLElement<"u"?Tt({key:"css"}):null),Qr=Lt.Provider,zt=function(t){return F.forwardRef(function(r,n){var o=F.useContext(Lt);return t(r,o,n)})},Ce=F.createContext({}),qe={exports:{}},ct;function qt(){return ct||(ct=1,function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(r[s]=o[s])}return r},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(qe)),qe.exports}qt();var en=zt(function(e,t){var r=e.styles,n=Je([r],void 0,F.useContext(Ce)),o=F.useRef();return tt(function(){var s=t.key+"-global",a=new t.sheet.constructor({key:s,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),i=!1,c=document.querySelector('style[data-emotion="'+s+" "+n.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),c!==null&&(i=!0,c.setAttribute("data-emotion",s),a.hydrate([c])),o.current=[a,i],function(){a.flush()}},[t]),tt(function(){var s=o.current,a=s[0],i=s[1];if(i){s[1]=!1;return}if(n.next!==void 0&&Ft(t,n.next,!0),a.tags.length){var c=a.tags[a.tags.length-1].nextElementSibling;a.before=c,a.flush()}t.insert("",n,a,!1)},[t,n.name]),null});function Nt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Je(t)}var tn=function(){var t=Nt.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},rn=ur,nn=function(t){return t!=="theme"},ut=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?rn:nn},ft=function(t,r,n){var o;if(r){var s=r.shouldForwardProp;o=t.__emotion_forwardProp&&s?function(a){return t.__emotion_forwardProp(a)&&s(a)}:s}return typeof o!="function"&&n&&(o=t.__emotion_forwardProp),o},on=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;return jt(r,n,o),Jt(function(){return Ft(r,n,o)}),null},sn=function e(t,r){var n=t.__emotion_real===t,o=n&&t.__emotion_base||t,s,a;r!==void 0&&(s=r.label,a=r.target);var i=ft(t,r,n),c=i||ut(o),m=!c("as");return function(){var f=arguments,g=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(s!==void 0&&g.push("label:"+s+";"),f[0]==null||f[0].raw===void 0)g.push.apply(g,f);else{g.push(f[0][0]);for(var A=f.length,T=1;T<A;T++)g.push(f[T],f[0][T])}var b=zt(function(u,S,v){var w=m&&u.as||o,k="",L=[],x=u;if(u.theme==null){x={};for(var $ in u)x[$]=u[$];x.theme=F.useContext(Ce)}typeof u.className=="string"?k=Br(S.registered,L,u.className):u.className!=null&&(k=u.className+" ");var l=Je(g.concat(L),S.registered,x);k+=S.key+"-"+l.name,a!==void 0&&(k+=" "+a);var V=m&&i===void 0?ut(w):c,G={};for(var H in u)m&&H==="as"||V(H)&&(G[H]=u[H]);return G.className=k,G.ref=v,F.createElement(F.Fragment,null,F.createElement(on,{cache:S,serialized:l,isStringTag:typeof w=="string"}),F.createElement(w,G))});return b.displayName=s!==void 0?s:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=o,b.__emotion_styles=g,b.__emotion_forwardProp=i,Object.defineProperty(b,"toString",{value:function(){return"."+a}}),b.withComponent=function(u,S){return e(u,U({},r,S,{shouldForwardProp:ft(b,S,!0)})).apply(void 0,g)},b}},an=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ve=sn.bind();an.forEach(function(e){Ve[e]=Ve(e)});let Ge;typeof document=="object"&&(Ge=Tt({key:"css",prepend:!0}));function cn(e){const{injectFirst:t,children:r}=e;return t&&Ge?vt.jsx(Qr,{value:Ge,children:r}):r}function un(e){return e==null||Object.keys(e).length===0}function fn(e){const{styles:t,defaultTheme:r={}}=e,n=typeof t=="function"?o=>t(un(o)?r:o):t;return vt.jsx(en,{styles:n})}function ln(e,t){return Ve(e,t)}const dn=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},pn=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:fn,StyledEngineProvider:cn,ThemeContext:Ce,css:Nt,default:ln,internal_processStyles:dn,keyframes:tn},Symbol.toStringTag,{value:"Module"})),mn=Object.freeze(Object.defineProperty({__proto__:null,default:Qt,isPlainObject:yt},Symbol.toStringTag,{value:"Module"})),hn=Object.freeze(Object.defineProperty({__proto__:null,default:er},Symbol.toStringTag,{value:"Module"})),yn=Object.freeze(Object.defineProperty({__proto__:null,default:gt,private_createBreakpoints:tr,unstable_applyStyles:rr},Symbol.toStringTag,{value:"Module"}));function gn(e){return Object.keys(e).length===0}function bn(e=null){const t=F.useContext(Ce);return!t||gn(t)?e:t}const vn=gt();function xn(e=vn){return bn(e)}const Sn=["sx"],wn=e=>{var t,r;const n={systemProps:{},otherProps:{}},o=(t=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?t:bt;return Object.keys(e).forEach(s=>{o[s]?n.systemProps[s]=e[s]:n.otherProps[s]=e[s]}),n};function $n(e){const{sx:t}=e,r=nr(e,Sn),{systemProps:n,otherProps:o}=wn(r);let s;return Array.isArray(t)?s=[n,...t]:typeof t=="function"?s=(...a)=>{const i=t(...a);return yt(i)?U({},n,i):n}:s=U({},n,t),U({},o,{sx:s})}const _n=Object.freeze(Object.defineProperty({__proto__:null,default:or,extendSxProp:$n,unstable_createStyleFunctionSx:sr,unstable_defaultSxConfig:bt},Symbol.toStringTag,{value:"Module"})),lt=e=>e,kn=()=>{let e=lt;return{configure(t){e=t},generate(t){return e(t)},reset(){e=lt}}},Pn=kn(),Cn=Pn;function Wt(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=Wt(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function fo(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=Wt(e))&&(n&&(n+=" "),n+=t);return n}const On={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Tn(e,t,r="Mui"){const n=On[t];return n?`${r}-${n}`:`${Cn.generate(e)}-${t}`}function lo(e,t,r="Mui"){const n={};return t.forEach(o=>{n[o]=Tn(e,o,r)}),n}var Dt={exports:{}},y={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=Symbol.for("react.element"),et=Symbol.for("react.portal"),Oe=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),Ae=Symbol.for("react.profiler"),Ee=Symbol.for("react.provider"),Re=Symbol.for("react.context"),An=Symbol.for("react.server_context"),Me=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),Fe=Symbol.for("react.suspense_list"),Ie=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),En=Symbol.for("react.offscreen"),Vt;Vt=Symbol.for("react.module.reference");function I(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qe:switch(e=e.type,e){case Oe:case Ae:case Te:case je:case Fe:return e;default:switch(e=e&&e.$$typeof,e){case An:case Re:case Me:case Le:case Ie:case Ee:return e;default:return t}}case et:return t}}}y.ContextConsumer=Re;y.ContextProvider=Ee;y.Element=Qe;y.ForwardRef=Me;y.Fragment=Oe;y.Lazy=Le;y.Memo=Ie;y.Portal=et;y.Profiler=Ae;y.StrictMode=Te;y.Suspense=je;y.SuspenseList=Fe;y.isAsyncMode=function(){return!1};y.isConcurrentMode=function(){return!1};y.isContextConsumer=function(e){return I(e)===Re};y.isContextProvider=function(e){return I(e)===Ee};y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qe};y.isForwardRef=function(e){return I(e)===Me};y.isFragment=function(e){return I(e)===Oe};y.isLazy=function(e){return I(e)===Le};y.isMemo=function(e){return I(e)===Ie};y.isPortal=function(e){return I(e)===et};y.isProfiler=function(e){return I(e)===Ae};y.isStrictMode=function(e){return I(e)===Te};y.isSuspense=function(e){return I(e)===je};y.isSuspenseList=function(e){return I(e)===Fe};y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Oe||e===Ae||e===Te||e===je||e===Fe||e===En||typeof e=="object"&&e!==null&&(e.$$typeof===Le||e.$$typeof===Ie||e.$$typeof===Ee||e.$$typeof===Re||e.$$typeof===Me||e.$$typeof===Vt||e.getModuleId!==void 0)};y.typeOf=I;Dt.exports=y;var dt=Dt.exports;const Rn=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function Gt(e){const t=`${e}`.match(Rn);return t&&t[1]||""}function Ht(e,t=""){return e.displayName||e.name||Gt(e)||t}function pt(e,t,r){const n=Ht(t);return e.displayName||(n!==""?`${r}(${n})`:r)}function Mn(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return Ht(e,"Component");if(typeof e=="object")switch(e.$$typeof){case dt.ForwardRef:return pt(e,e.render,"ForwardRef");case dt.Memo:return pt(e,e.type,"memo");default:return}}}const jn=Object.freeze(Object.defineProperty({__proto__:null,default:Mn,getFunctionName:Gt},Symbol.toStringTag,{value:"Module"}));function Ut(e,t){const r=U({},t);return Object.keys(e).forEach(n=>{if(n.toString().match(/^(components|slots)$/))r[n]=U({},e[n],r[n]);else if(n.toString().match(/^(componentsProps|slotProps)$/)){const o=e[n]||{},s=t[n];r[n]={},!s||!Object.keys(s)?r[n]=o:!o||!Object.keys(o)?r[n]=s:(r[n]=U({},s),Object.keys(o).forEach(a=>{r[n][a]=Ut(o[a],s[a])}))}else r[n]===void 0&&(r[n]=e[n])}),r}function Fn(e){const{theme:t,name:r,props:n}=e;return!t||!t.components||!t.components[r]||!t.components[r].defaultProps?n:Ut(t.components[r].defaultProps,n)}function In({props:e,name:t,defaultTheme:r,themeId:n}){let o=xn(r);return n&&(o=o[n]||o),Fn({theme:o,name:t,props:e})}function po(e,t,r=void 0){const n={};return Object.keys(e).forEach(o=>{n[o]=e[o].reduce((s,a)=>{if(a){const i=t(a);i!==""&&s.push(i),r&&r[a]&&s.push(r[a])}return s},[]).join(" ")}),n}const Ln=ar(),Bt=Ln;function mo({props:e,name:t}){return In({props:e,name:t,defaultTheme:Bt,themeId:xt})}var oe={},Ne={exports:{}},mt;function zn(){return mt||(mt=1,function(e){function t(r,n){if(r==null)return{};var o={},s=Object.keys(r),a,i;for(i=0;i<s.length;i++)a=s[i],!(n.indexOf(a)>=0)&&(o[a]=r[a]);return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Ne)),Ne.exports}const qn=X(pn),Nn=X(mn),Wn=X(hn),Dn=X(jn),Vn=X(yn),Gn=X(_n);var Z=ir;Object.defineProperty(oe,"__esModule",{value:!0});var Hn=oe.default=oo,Yt=oe.shouldForwardProp=le;oe.systemDefaultTheme=void 0;var j=Z(qt()),He=Z(zn()),ht=Jn(qn),Un=Nn;Z(Wn);Z(Dn);var Bn=Z(Vn),Yn=Z(Gn);const Xn=["ownerState"],Kn=["variants"],Zn=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Xt(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(Xt=function(n){return n?r:t})(e)}function Jn(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=Xt(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var a=o?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(n,s,a):n[s]=e[s]}return n.default=e,r&&r.set(e,n),n}function Qn(e){return Object.keys(e).length===0}function eo(e){return typeof e=="string"&&e.charCodeAt(0)>96}function le(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const to=oe.systemDefaultTheme=(0,Bn.default)(),ro=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function ie({defaultTheme:e,theme:t,themeId:r}){return Qn(t)?e:t[r]||t}function no(e){return e?(t,r)=>r[e]:null}function de(e,t){let{ownerState:r}=t,n=(0,He.default)(t,Xn);const o=typeof e=="function"?e((0,j.default)({ownerState:r},n)):e;if(Array.isArray(o))return o.flatMap(s=>de(s,(0,j.default)({ownerState:r},n)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:s=[]}=o;let i=(0,He.default)(o,Kn);return s.forEach(c=>{let m=!0;typeof c.props=="function"?m=c.props((0,j.default)({ownerState:r},n,r)):Object.keys(c.props).forEach(f=>{(r==null?void 0:r[f])!==c.props[f]&&n[f]!==c.props[f]&&(m=!1)}),m&&(Array.isArray(i)||(i=[i]),i.push(typeof c.style=="function"?c.style((0,j.default)({ownerState:r},n,r)):c.style))}),i}return o}function oo(e={}){const{themeId:t,defaultTheme:r=to,rootShouldForwardProp:n=le,slotShouldForwardProp:o=le}=e,s=a=>(0,Yn.default)((0,j.default)({},a,{theme:ie((0,j.default)({},a,{defaultTheme:r,themeId:t}))}));return s.__mui_systemSx=!0,(a,i={})=>{(0,ht.internal_processStyles)(a,x=>x.filter($=>!($!=null&&$.__mui_systemSx)));const{name:c,slot:m,skipVariantsResolver:f,skipSx:g,overridesResolver:A=no(ro(m))}=i,T=(0,He.default)(i,Zn),b=f!==void 0?f:m&&m!=="Root"&&m!=="root"||!1,u=g||!1;let S,v=le;m==="Root"||m==="root"?v=n:m?v=o:eo(a)&&(v=void 0);const w=(0,ht.default)(a,(0,j.default)({shouldForwardProp:v,label:S},T)),k=x=>typeof x=="function"&&x.__emotion_real!==x||(0,Un.isPlainObject)(x)?$=>de(x,(0,j.default)({},$,{theme:ie({theme:$.theme,defaultTheme:r,themeId:t})})):x,L=(x,...$)=>{let l=k(x);const V=$?$.map(k):[];c&&A&&V.push(D=>{const z=ie((0,j.default)({},D,{defaultTheme:r,themeId:t}));if(!z.components||!z.components[c]||!z.components[c].styleOverrides)return null;const J=z.components[c].styleOverrides,se={};return Object.entries(J).forEach(([Kt,Zt])=>{se[Kt]=de(Zt,(0,j.default)({},D,{theme:z}))}),A(D,se)}),c&&!b&&V.push(D=>{var z;const J=ie((0,j.default)({},D,{defaultTheme:r,themeId:t})),se=J==null||(z=J.components)==null||(z=z[c])==null?void 0:z.variants;return de({variants:se},(0,j.default)({},D,{theme:J}))}),u||V.push(s);const G=V.length-$.length;if(Array.isArray(x)&&G>0){const D=new Array(G).fill("");l=[...x,...D],l.raw=[...x.raw,...D]}const H=w(l,...V);return a.muiName&&(H.muiName=a.muiName),H};return w.withConfig&&(L.withConfig=w.withConfig),L}}const so=e=>Yt(e)&&e!=="classes",ho=Yt,yo=Hn({themeId:xt,defaultTheme:Bt,rootShouldForwardProp:so});export{Cn as C,fn as G,cn as S,xt as T,bn as a,Tn as b,lo as c,Bt as d,mo as e,$n as f,Fn as g,fo as h,po as i,dn as j,ln as k,In as l,tn as m,Ut as n,Ce as o,ho as p,On as q,so as r,yo as s,qn as t,xn as u};
