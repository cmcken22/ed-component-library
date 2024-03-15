import{j as L}from"./jsx-runtime-Du8NFWEI.js";import{r as R,R as re}from"./index-Dl6G-zuu.js";import{F as Ue,u as He,S as Ke,b as Ge,c as Ze,O as Je,B as ye,a as Qe,I as Xe}from"./BaseInput.types-Dq9qK2Q7.js";import{a as Ye,I as er}from"./Icon-Cu7WjEzB.js";import{a as de,g as fe,s as te,u as ce,c as me,b as ve,r as rr}from"./styled-DLEC8BOE.js";import{_ as A}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{a as pe,_ as ge}from"./createTheme-Dc-CT_GP.js";import{u as Ve,f as Ce}from"./useFormControl-EHw8eS4L.js";function ar(e){return fe("MuiFormHelperText",e)}const tr=de("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),we=tr;var Fe;const nr=["children","className","component","disabled","error","filled","focused","margin","required","variant"],ir=e=>{const{classes:r,contained:a,size:t,disabled:n,error:i,filled:o,focused:v,required:d}=e,s={root:["root",n&&"disabled",i&&"error",t&&`size${pe(t)}`,a&&"contained",v&&"focused",o&&"filled",d&&"required"]};return ve(s,ar,r)},or=te("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,a.size&&r[`size${pe(a.size)}`],a.contained&&r.contained,a.filled&&r.filled]}})(({theme:e,ownerState:r})=>A({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${we.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${we.error}`]:{color:(e.vars||e).palette.error.main}},r.size==="small"&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})),lr=R.forwardRef(function(r,a){const t=ce({props:r,name:"MuiFormHelperText"}),{children:n,className:i,component:o="p"}=t,v=ge(t,nr),d=Ve(),s=Ce({props:t,muiFormControl:d,states:["variant","size","disabled","error","filled","focused","required"]}),f=A({},t,{component:o,contained:s.variant==="filled"||s.variant==="outlined",variant:s.variant,size:s.size,disabled:s.disabled,error:s.error,filled:s.filled,focused:s.focused,required:s.required}),p=ir(f);return L.jsx(or,A({as:o,ownerState:f,className:me(p.root,i),ref:a},v,{children:n===" "?Fe||(Fe=L.jsx("span",{className:"notranslate",children:"​"})):n}))}),sr=lr;function ur(e){return fe("MuiFormLabel",e)}const dr=de("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),ie=dr,fr=["children","className","color","component","disabled","error","filled","focused","required"],cr=e=>{const{classes:r,color:a,focused:t,disabled:n,error:i,filled:o,required:v}=e,d={root:["root",`color${pe(a)}`,n&&"disabled",i&&"error",o&&"filled",t&&"focused",v&&"required"],asterisk:["asterisk",i&&"error"]};return ve(d,ur,r)},mr=te("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},r)=>A({},r.root,e.color==="secondary"&&r.colorSecondary,e.filled&&r.filled)})(({theme:e,ownerState:r})=>A({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${ie.focused}`]:{color:(e.vars||e).palette[r.color].main},[`&.${ie.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${ie.error}`]:{color:(e.vars||e).palette.error.main}})),vr=te("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})(({theme:e})=>({[`&.${ie.error}`]:{color:(e.vars||e).palette.error.main}})),pr=R.forwardRef(function(r,a){const t=ce({props:r,name:"MuiFormLabel"}),{children:n,className:i,component:o="label"}=t,v=ge(t,fr),d=Ve(),s=Ce({props:t,muiFormControl:d,states:["color","required","focused","disabled","error","filled"]}),f=A({},t,{color:s.color||"primary",component:o,disabled:s.disabled,error:s.error,filled:s.filled,focused:s.focused,required:s.required}),p=cr(f);return L.jsxs(mr,A({as:o,ownerState:f,className:me(p.root,i),ref:a},v,{children:[n,s.required&&L.jsxs(vr,{ownerState:f,"aria-hidden":!0,className:p.asterisk,children:[" ","*"]})]}))}),gr=pr;function hr(e){return fe("MuiInputLabel",e)}de("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const xr=["disableAnimation","margin","shrink","variant","className"],br=e=>{const{classes:r,formControl:a,size:t,shrink:n,disableAnimation:i,variant:o,required:v}=e,d={root:["root",a&&"formControl",!i&&"animated",n&&"shrink",t&&t!=="normal"&&`size${pe(t)}`,o],asterisk:[v&&"asterisk"]},s=ve(d,hr,r);return A({},r,s)},yr=te(gr,{shouldForwardProp:e=>rr(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[{[`& .${ie.asterisk}`]:r.asterisk},r.root,a.formControl&&r.formControl,a.size==="small"&&r.sizeSmall,a.shrink&&r.shrink,!a.disableAnimation&&r.animated,a.focused&&r.focused,r[a.variant]]}})(({theme:e,ownerState:r})=>A({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},r.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},r.size==="small"&&{transform:"translate(0, 17px) scale(1)"},r.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!r.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},r.variant==="filled"&&A({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},r.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},r.shrink&&A({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},r.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),r.variant==="outlined"&&A({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},r.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},r.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),Sr=R.forwardRef(function(r,a){const t=ce({name:"MuiInputLabel",props:r}),{disableAnimation:n=!1,shrink:i,className:o}=t,v=ge(t,xr),d=Ve();let s=i;typeof s>"u"&&d&&(s=d.filled||d.focused||d.adornedStart);const f=Ce({props:t,muiFormControl:d,states:["size","variant","required","focused"]}),p=A({},t,{disableAnimation:n,formControl:d,shrink:s,size:f.size,variant:f.variant,required:f.required,focused:f.focused}),b=br(p);return L.jsx(yr,A({"data-shrink":s,ownerState:p,ref:a,className:me(b.root,o)},v,{classes:b}))}),Vr=Sr;function Cr(e){return fe("MuiTextField",e)}de("MuiTextField",["root"]);const Ir=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],Nr={standard:Ge,filled:Ze,outlined:Je},wr=e=>{const{classes:r}=e;return ve({root:["root"]},Cr,r)},Fr=te(Ue,{name:"MuiTextField",slot:"Root",overridesResolver:(e,r)=>r.root})({}),Tr=R.forwardRef(function(r,a){const t=ce({props:r,name:"MuiTextField"}),{autoComplete:n,autoFocus:i=!1,children:o,className:v,color:d="primary",defaultValue:s,disabled:f=!1,error:p=!1,FormHelperTextProps:b,fullWidth:y=!1,helperText:c,id:C,InputLabelProps:S,inputProps:h,InputProps:q,inputRef:O,label:E,maxRows:B,minRows:G,multiline:P=!1,name:V,onBlur:M,onChange:H,onFocus:z,placeholder:J,required:W=!1,rows:Y,select:Z=!1,SelectProps:m,type:g,value:D,variant:N="outlined"}=t,F=ge(t,Ir),T=A({},t,{autoFocus:i,color:d,disabled:f,error:p,fullWidth:y,multiline:P,required:W,select:Z,variant:N}),_=wr(T),K={};N==="outlined"&&(S&&typeof S.shrink<"u"&&(K.notched=S.shrink),K.label=E),Z&&((!m||!m.native)&&(K.id=void 0),K["aria-describedby"]=void 0);const U=He(C),Q=c&&U?`${U}-helper-text`:void 0,se=E&&U?`${U}-label`:void 0,xe=Nr[N],ue=L.jsx(xe,A({"aria-describedby":Q,autoComplete:n,autoFocus:i,defaultValue:s,fullWidth:y,multiline:P,name:V,rows:Y,maxRows:B,minRows:G,type:g,value:D,id:U,inputRef:O,onBlur:M,onChange:H,onFocus:z,placeholder:J,inputProps:h},K,q));return L.jsxs(Fr,A({className:me(_.root,v),disabled:f,error:p,fullWidth:y,ref:a,required:W,color:d,variant:N,ownerState:T},F,{children:[E!=null&&E!==""&&L.jsx(Vr,A({htmlFor:U,id:se},S,{children:E})),Z?L.jsx(Ke,A({"aria-describedby":Q,id:U,labelId:se,value:D,input:ue},m,{children:o})):ue,c&&L.jsx(sr,A({id:Q},b,{children:c}))]}))}),Dr=Tr;function ke(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a}var oe;(function(e){e.event="event",e.props="prop"})(oe||(oe={}));function X(){}function Rr(e){var r,a=void 0;return function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return r&&t.length===r.length&&t.every(function(i,o){return i===r[o]})||(r=t,a=e.apply(void 0,t)),a}}function le(e){return!!(e||"").match(/\d/)}function ae(e){return e==null}function Ar(e){return typeof e=="number"&&isNaN(e)}function Le(e){return ae(e)||Ar(e)||typeof e=="number"&&!isFinite(e)}function qe(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function kr(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Lr(e,r,a){var t=kr(a),n=e.search(/[1-9]/);return n=n===-1?e.length:n,e.substring(0,n)+e.substring(n,e.length).replace(t,"$1"+r)}function qr(e){var r=R.useRef(e);r.current=e;var a=R.useRef(function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return r.current.apply(r,t)});return a.current}function Ie(e,r){r===void 0&&(r=!0);var a=e[0]==="-",t=a&&r;e=e.replace("-","");var n=e.split("."),i=n[0],o=n[1]||"";return{beforeDecimal:i,afterDecimal:o,hasNegation:a,addNegation:t}}function _r(e){if(!e)return e;var r=e[0]==="-";r&&(e=e.substring(1,e.length));var a=e.split("."),t=a[0].replace(/^0+/,"")||"0",n=a[1]||"";return(r?"-":"")+t+(n?"."+n:"")}function _e(e,r,a){for(var t="",n=a?"0":"",i=0;i<=r-1;i++)t+=e[i]||n;return t}function Te(e,r){return Array(r+1).join(e)}function Oe(e){var r=e+"",a=r[0]==="-"?"-":"";a&&(r=r.substring(1));var t=r.split(/[eE]/g),n=t[0],i=t[1];if(i=Number(i),!i)return a+n;n=n.replace(".","");var o=1+i,v=n.length;return o<0?n="0."+Te("0",Math.abs(o))+n:o>=v?n=n+Te("0",o-v):n=(n.substring(0,o)||"0")+"."+n.substring(o),a+n}function De(e,r,a){if(["","-"].indexOf(e)!==-1)return e;var t=(e.indexOf(".")!==-1||a)&&r,n=Ie(e),i=n.beforeDecimal,o=n.afterDecimal,v=n.hasNegation,d=parseFloat("0."+(o||"0")),s=o.length<=r?"0."+o:d.toFixed(r),f=s.split("."),p=i;i&&Number(f[0])&&(p=i.split("").reverse().reduce(function(C,S,h){return C.length>h?(Number(C[0])+Number(S)).toString()+C.substring(1,C.length):S+C},f[0]));var b=_e(f[1]||"",r,a),y=v?"-":"",c=t?".":"";return""+y+p+c+b}function ee(e,r){if(e.value=e.value,e!==null){if(e.createTextRange){var a=e.createTextRange();return a.move("character",r),a.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(r,r),!0):(e.focus(),!1)}}var je=Rr(function(e,r){for(var a=0,t=0,n=e.length,i=r.length;e[a]===r[a]&&a<n;)a++;for(;e[n-1-t]===r[i-1-t]&&i-t>a&&n-t>a;)t++;return{from:{start:a,end:n-t},to:{start:a,end:i-t}}});function Or(e,r,a){return Math.min(Math.max(e,r),a)}function be(e){return Math.max(e.selectionStart,e.selectionEnd)}function jr(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function Er(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function Br(e){var r=e.currentValue,a=e.formattedValue,t=e.currentValueIndex,n=e.formattedValueIndex;return r[t]===a[n]}function Mr(e,r,a,t,n,i,o){o===void 0&&(o=Br);var v=n.findIndex(function(E){return E}),d=e.slice(0,v);!r&&!a.startsWith(d)&&(r=d,a=d+a,t=t+d.length);for(var s=a.length,f=e.length,p={},b=new Array(s),y=0;y<s;y++){b[y]=-1;for(var c=0,C=f;c<C;c++){var S=o({currentValue:a,lastValue:r,formattedValue:e,currentValueIndex:y,formattedValueIndex:c});if(S&&p[c]!==!0){b[y]=c,p[c]=!0;break}}}for(var h=t;h<s&&(b[h]===-1||!i(a[h]));)h++;var q=h===s||b[h]===-1?f:b[h];for(h=t-1;h>0&&b[h]===-1;)h--;var O=h===-1||b[h]===-1?0:b[h]+1;return O>q?q:t-O<q-t?O:q}function Re(e,r,a,t){var n=e.length;if(r=Or(r,0,n),t==="left"){for(;r>=0&&!a[r];)r--;r===-1&&(r=a.indexOf(!0))}else{for(;r<=n&&!a[r];)r++;r>n&&(r=a.lastIndexOf(!0))}return r===-1&&(r=n),r}function $r(e){for(var r=Array.from({length:e.length+1}).map(function(){return!0}),a=0,t=r.length;a<t;a++)r[a]=!!(le(e[a])||le(e[a-1]));return r}function Ee(e,r,a,t,n,i){i===void 0&&(i=X);var o=qr(function(c,C){var S,h;return Le(c)?(h="",S=""):typeof c=="number"||C?(h=typeof c=="number"?Oe(c):c,S=t(h)):(h=n(c,void 0),S=t(h)),{formattedValue:S,numAsString:h}}),v=R.useState(function(){return o(ae(e)?r:e,a)}),d=v[0],s=v[1],f=function(c,C){c.formattedValue!==d.formattedValue&&s({formattedValue:c.formattedValue,numAsString:c.value}),i(c,C)},p=e,b=a;ae(e)&&(p=d.numAsString,b=!0);var y=o(p,b);return R.useMemo(function(){s(y)},[y.formattedValue]),[d,f]}function Pr(e){return e.replace(/[^0-9]/g,"")}function zr(e){return e}function Wr(e){var r=e.type;r===void 0&&(r="text");var a=e.displayType;a===void 0&&(a="input");var t=e.customInput,n=e.renderText,i=e.getInputRef,o=e.format;o===void 0&&(o=zr);var v=e.removeFormatting;v===void 0&&(v=Pr);var d=e.defaultValue,s=e.valueIsNumericString,f=e.onValueChange,p=e.isAllowed,b=e.onChange;b===void 0&&(b=X);var y=e.onKeyDown;y===void 0&&(y=X);var c=e.onMouseUp;c===void 0&&(c=X);var C=e.onFocus;C===void 0&&(C=X);var S=e.onBlur;S===void 0&&(S=X);var h=e.value,q=e.getCaretBoundary;q===void 0&&(q=$r);var O=e.isValidInputCharacter;O===void 0&&(O=le);var E=e.isCharacterSame,B=ke(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),G=Ee(h,d,!!s,o,v,f),P=G[0],V=P.formattedValue,M=P.numAsString,H=G[1],z=R.useRef({formattedValue:V,numAsString:M}),J=function(l,u){z.current={formattedValue:l.formattedValue,numAsString:l.value},H(l,u)},W=R.useState(!1),Y=W[0],Z=W[1],m=R.useRef(null),g=R.useRef({setCaretTimeout:null,focusTimeout:null});R.useEffect(function(){return Z(!0),function(){clearTimeout(g.current.setCaretTimeout),clearTimeout(g.current.focusTimeout)}},[]);var D=o,N=function(l,u){var x=parseFloat(u);return{formattedValue:l,value:u,floatValue:isNaN(x)?void 0:x}},F=function(l,u,x){l.selectionStart===0&&l.selectionEnd===l.value.length||(ee(l,u),g.current.setCaretTimeout=setTimeout(function(){l.value===x&&l.selectionStart!==u&&ee(l,u)},0))},T=function(l,u,x){return Re(l,u,q(l),x)},_=function(l,u,x){var k=q(u),j=Mr(u,V,l,x,k,O,E);return j=Re(u,j,k),j},K=function(l){var u=l.formattedValue;u===void 0&&(u="");var x=l.input,k=l.source,j=l.event,I=l.numAsString,w;if(x){var $=l.inputValue||x.value,ne=be(x);x.value=u,w=_($,u,ne),w!==void 0&&F(x,w,u)}u!==V&&J(N(u,I),{event:j,source:k})};R.useEffect(function(){var l=z.current,u=l.formattedValue,x=l.numAsString;V!==u&&(V!==M||u!==x)&&J(N(V,M),{event:void 0,source:oe.props})},[V,M]);var U=m.current?be(m.current):void 0,Q=typeof window<"u"?R.useLayoutEffect:R.useEffect;Q(function(){var l=m.current;if(V!==z.current.formattedValue&&l){var u=_(z.current.formattedValue,V,U);l.value=V,F(l,u,V)}},[V]);var se=function(l,u,x){var k=je(V,l),j=Object.assign(Object.assign({},k),{lastValue:V}),I=v(l,j),w=D(I);if(I=v(w,void 0),p&&!p(N(w,I))){var $=u.target,ne=be($),We=_(l,V,ne);return $.value=V,F($,We,V),!1}return K({formattedValue:w,numAsString:I,inputValue:l,event:u,source:x,input:u.target}),!0},xe=function(l){var u=l.target,x=u.value,k=se(x,l,oe.event);k&&b(l)},ue=function(l){var u=l.target,x=l.key,k=u.selectionStart,j=u.selectionEnd,I=u.value;I===void 0&&(I="");var w;if(x==="ArrowLeft"||x==="Backspace"?w=Math.max(k-1,0):x==="ArrowRight"?w=Math.min(k+1,I.length):x==="Delete"&&(w=k),w===void 0||k!==j){y(l);return}var $=w;if(x==="ArrowLeft"||x==="ArrowRight"){var ne=x==="ArrowLeft"?"left":"right";$=T(I,w,ne),$!==w&&l.preventDefault()}else x==="Delete"&&!O(I[w])?$=T(I,w,"right"):x==="Backspace"&&!O(I[w])&&($=T(I,w,"left"));$!==w&&F(u,$,I),l.isUnitTestRun&&F(u,$,I),y(l)},Be=function(l){var u=l.target,x=u.selectionStart,k=u.selectionEnd,j=u.value;if(j===void 0&&(j=""),x===k){var I=T(j,x);I!==x&&F(u,I,j)}c(l)},Me=function(l){l.persist&&l.persist();var u=l.target,x=l.currentTarget;m.current=u,g.current.focusTimeout=setTimeout(function(){var k=u.selectionStart,j=u.selectionEnd,I=u.value;I===void 0&&(I="");var w=T(I,k);w!==k&&!(k===0&&j===I.length)&&F(u,w,I),C(Object.assign(Object.assign({},l),{currentTarget:x}))},0)},$e=function(l){m.current=null,clearTimeout(g.current.focusTimeout),clearTimeout(g.current.setCaretTimeout),S(l)},Pe=Y&&jr()?"numeric":void 0,Ne=Object.assign({inputMode:Pe},B,{type:r,value:V,onChange:xe,onKeyDown:ue,onMouseUp:Be,onFocus:Me,onBlur:$e});if(a==="text")return n?re.createElement(re.Fragment,null,n(V,B)||null):re.createElement("span",Object.assign({},B,{ref:i}),V);if(t){var ze=t;return re.createElement(ze,Object.assign({},Ne,{ref:i}))}return re.createElement("input",Object.assign({},Ne,{ref:i}))}function Ae(e,r){var a=r.decimalScale,t=r.fixedDecimalScale,n=r.prefix;n===void 0&&(n="");var i=r.suffix;i===void 0&&(i="");var o=r.allowNegative,v=r.thousandsGroupStyle;if(v===void 0&&(v="thousand"),e===""||e==="-")return e;var d=he(r),s=d.thousandSeparator,f=d.decimalSeparator,p=a!==0&&e.indexOf(".")!==-1||a&&t,b=Ie(e,o),y=b.beforeDecimal,c=b.afterDecimal,C=b.addNegation;return a!==void 0&&(c=_e(c,a,!!t)),s&&(y=Lr(y,s,v)),n&&(y=n+y),i&&(c=c+i),C&&(y="-"+y),e=y+(p&&f||"")+c,e}function he(e){var r=e.decimalSeparator;r===void 0&&(r=".");var a=e.thousandSeparator,t=e.allowedDecimalSeparators;return a===!0&&(a=","),t||(t=[r,"."]),{decimalSeparator:r,thousandSeparator:a,allowedDecimalSeparators:t}}function Ur(e,r){e===void 0&&(e="");var a=new RegExp("(-)"),t=new RegExp("(-)(.)*(-)"),n=a.test(e),i=t.test(e);return e=e.replace(/-/g,""),n&&!i&&r&&(e="-"+e),e}function Hr(e,r){return new RegExp("(^-)|[0-9]|"+qe(e),r?"g":void 0)}function Kr(e,r,a){return e===""?!0:!(r!=null&&r.match(/\d/))&&!(a!=null&&a.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function Gr(e,r,a){var t;r===void 0&&(r=Er(e));var n=a.allowNegative,i=a.prefix;i===void 0&&(i="");var o=a.suffix;o===void 0&&(o="");var v=a.decimalScale,d=r.from,s=r.to,f=s.start,p=s.end,b=he(a),y=b.allowedDecimalSeparators,c=b.decimalSeparator,C=e[p]===c;if(le(e)&&(e===i||e===o)&&r.lastValue==="")return e;if(p-f===1&&y.indexOf(e[f])!==-1){var S=v===0?"":c;e=e.substring(0,f)+S+e.substring(f+1,e.length)}var h=function(g,D,N){var F=!1,T=!1;i.startsWith("-")?F=!1:g.startsWith("--")?(F=!1,T=!0):o.startsWith("-")&&g.length===o.length?F=!1:g[0]==="-"&&(F=!0);var _=F?1:0;return T&&(_=2),_&&(g=g.substring(_),D-=_,N-=_),{value:g,start:D,end:N,hasNegation:F}},q=h(e,f,p),O=q.hasNegation;t=q,e=t.value,f=t.start,p=t.end;var E=h(r.lastValue,d.start,d.end),B=E.start,G=E.end,P=E.value,V=e.substring(f,p);e.length&&P.length&&(B>P.length-o.length||G<i.length)&&!(V&&o.startsWith(V))&&(e=P);var M=0;e.startsWith(i)?M+=i.length:f<i.length&&(M=f),e=e.substring(M),p-=M;var H=e.length,z=e.length-o.length;e.endsWith(o)?H=z:(p>z||p>e.length-o.length)&&(H=p),e=e.substring(0,H),e=Ur(O?"-"+e:e,n),e=(e.match(Hr(c,!0))||[]).join("");var J=e.indexOf(c);e=e.replace(new RegExp(qe(c),"g"),function(g,D){return D===J?".":""});var W=Ie(e,n),Y=W.beforeDecimal,Z=W.afterDecimal,m=W.addNegation;return s.end-s.start<d.end-d.start&&Y===""&&C&&!parseFloat(Z)&&(e=m?"-":""),e}function Zr(e,r){var a=r.prefix;a===void 0&&(a="");var t=r.suffix;t===void 0&&(t="");var n=Array.from({length:e.length+1}).map(function(){return!0}),i=e[0]==="-";n.fill(!1,0,a.length+(i?1:0));var o=e.length;return n.fill(!1,o-t.length+1,o+1),n}function Jr(e){var r=he(e),a=r.thousandSeparator,t=r.decimalSeparator,n=e.prefix;n===void 0&&(n="");var i=e.allowNegative;if(i===void 0&&(i=!0),a===t)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+a+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+t+` (default value for decimalSeparator is .)
     `);return n.startsWith("-")&&i&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+n+`
      allowNegative: `+i+`
    `),i=!1),Object.assign(Object.assign({},e),{allowNegative:i})}function Qr(e){e=Jr(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var r=e.suffix,a=e.allowNegative,t=e.allowLeadingZeros,n=e.onKeyDown;n===void 0&&(n=X);var i=e.onBlur;i===void 0&&(i=X);var o=e.thousandSeparator,v=e.decimalScale,d=e.fixedDecimalScale,s=e.prefix;s===void 0&&(s="");var f=e.defaultValue,p=e.value,b=e.valueIsNumericString,y=e.onValueChange,c=ke(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),C=he(e),S=C.decimalSeparator,h=C.allowedDecimalSeparators,q=function(m){return Ae(m,e)},O=function(m,g){return Gr(m,g,e)},E=ae(p)?f:p,B=b??Kr(E,s,r);ae(p)?ae(f)||(B=B||typeof f=="number"):B=B||typeof p=="number";var G=function(m){return Le(m)?m:(typeof m=="number"&&(m=Oe(m)),B&&typeof v=="number"?De(m,v,!!d):m)},P=Ee(G(p),G(f),!!B,q,O,y),V=P[0],M=V.numAsString,H=V.formattedValue,z=P[1],J=function(m){var g=m.target,D=m.key,N=g.selectionStart,F=g.selectionEnd,T=g.value;if(T===void 0&&(T=""),N!==F){n(m);return}D==="Backspace"&&T[0]==="-"&&N===s.length+1&&a&&ee(g,1),v&&d&&(D==="Backspace"&&T[N-1]===S?(ee(g,N-1),m.preventDefault()):D==="Delete"&&T[N]===S&&m.preventDefault()),h!=null&&h.includes(D)&&T[N]===S&&ee(g,N+1);var _=o===!0?",":o;D==="Backspace"&&T[N-1]===_&&ee(g,N-1),D==="Delete"&&T[N]===_&&ee(g,N+1),n(m)},W=function(m){var g=M;if(g.match(/\d/g)||(g=""),t||(g=_r(g)),d&&v&&(g=De(g,v,d)),g!==M){var D=Ae(g,e);z({formattedValue:D,value:g,floatValue:parseFloat(g)},{event:m,source:oe.event})}i(m)},Y=function(m){return m===S?!0:le(m)},Z=function(m){var g=m.currentValue,D=m.lastValue,N=m.formattedValue,F=m.currentValueIndex,T=m.formattedValueIndex,_=g[F],K=N[T],U=je(D,g),Q=U.to;return F>=Q.start&&F<Q.end&&h&&h.includes(_)&&K===S?!0:_===K};return Object.assign(Object.assign({},c),{value:H,valueIsNumericString:!1,isValidInputCharacter:Y,isCharacterSame:Z,onValueChange:z,format:q,removeFormatting:O,getCaretBoundary:function(m){return Zr(m,e)},onKeyDown:J,onBlur:W})}function Xr(e){var r=Qr(e);return re.createElement(Wr,Object.assign({},r))}const Yr=te(Dr,{slot:"root"})(()=>({"& input":{textAlign:"right"}})),Se=e=>{const{id:r,status:a,fullWidth:t,...n}=e;return L.jsx(ye,{id:r,status:a,fullWidth:t,children:L.jsx(ea,{...n,fullWidth:t})})},ea=({label:e,placeholder:r,helperText:a,disabled:t,value:n,required:i,labelPosition:o="top",fixedDecimalScale:v,decimalScale:d,thousandSeparator:s,onChange:f})=>{const{endAdornment:p}=R.useContext(Qe),[b,y]=R.useState(n),c=R.useCallback(S=>{y(S.value),f&&f(S.value,S.formattedValue,S.floatValue)},[y,f]),C=R.useCallback(()=>L.jsx(Xe,{position:"start",sx:{ml:"8px"},children:L.jsx(Ye,{icon:er.Dollar,height:"20px",width:"20px"})}),[]);return L.jsxs(L.Fragment,{children:[L.jsx(ye.Label,{required:i,position:o,children:e}),L.jsx(Xr,{value:b,onValueChange:c,placeholder:r,thousandSeparator:s,fixedDecimalScale:v,decimalScale:d,customInput:Yr,disabled:t,InputProps:{startAdornment:C(),endAdornment:p}}),L.jsx(ye.HelperText,{children:a})]})};Se.defaultProps={labelPosition:"top",thousandSeparator:!1,fixedDecimalScale:!1,decimalScale:2,disabled:!1,required:!1};try{Se.displayName="Currency",Se.__docgenInfo={description:"",displayName:"Currency",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"top"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"top"'}]}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"ReactNode"}},debounce:{defaultValue:null,description:"",name:"debounce",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string, formattedValue: string, floatValue: number) => void"}},fixedDecimalScale:{defaultValue:null,description:"",name:"fixedDecimalScale",required:!1,type:{name:"boolean"}},decimalScale:{defaultValue:null,description:"",name:"decimalScale",required:!1,type:{name:"number"}},thousandSeparator:{defaultValue:null,description:"",name:"thousandSeparator",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"Style props for the container",name:"sx",required:!1,type:{name:"SxProps"}}}}}catch{}export{Se as C,Xr as N,Dr as T};