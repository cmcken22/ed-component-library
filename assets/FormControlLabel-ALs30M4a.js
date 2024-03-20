import{b as G,h as q,r as S,e as O,f as I,m as W,_,g as D,a as B}from"./createTheme-DCk6V8kG.js";import{_ as m}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{r as C}from"./index-Dl6G-zuu.js";import{f as z,h as M,l as H,i as E,b as U,s as N,e as A,c as J}from"./styled-BR12ND4t.js";import{u as K,f as Q}from"./useFormControl-EHw8eS4L.js";import{j as y}from"./jsx-runtime-Du8NFWEI.js";import{T as V}from"./Typography-Ck0EBljP.js";import{s as X}from"./styled-amVfSIae.js";const Y=["component","direction","spacing","divider","children","className","useFlexGap"],Z=G(),w=X("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function ee(e){return H({props:e,name:"MuiStack",defaultTheme:Z})}function oe(e,o){const s=C.Children.toArray(e).filter(Boolean);return s.reduce((l,n,r)=>(l.push(n),r<s.length-1&&l.push(C.cloneElement(o,{key:`separator-${r}`})),l),[])}const re=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],se=({ownerState:e,theme:o})=>{let s=m({display:"flex",flexDirection:"column"},q({theme:o},S({values:e.direction,breakpoints:o.breakpoints.values}),l=>({flexDirection:l})));if(e.spacing){const l=O(o),n=Object.keys(o.breakpoints.values).reduce((t,a)=>((typeof e.spacing=="object"&&e.spacing[a]!=null||typeof e.direction=="object"&&e.direction[a]!=null)&&(t[a]=!0),t),{}),r=S({values:e.direction,base:n}),i=S({values:e.spacing,base:n});typeof r=="object"&&Object.keys(r).forEach((t,a,d)=>{if(!r[t]){const f=a>0?r[d[a-1]]:"column";r[t]=f}}),s=I(s,q({theme:o},i,(t,a)=>e.useFlexGap?{gap:D(l,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${re(a?r[a]:e.direction)}`]:D(l,t)}}))}return s=W(o.breakpoints,s),s};function te(e={}){const{createStyledComponent:o=w,useThemeProps:s=ee,componentName:l="MuiStack"}=e,n=()=>E({root:["root"]},t=>U(l,t),{}),r=o(se);return C.forwardRef(function(t,a){const d=s(t),u=z(d),{component:f="div",direction:P="column",spacing:R=0,divider:k,children:c,className:x,useFlexGap:b=!1}=u,F=_(u,Y),$={direction:P,spacing:R,useFlexGap:b},g=n();return y.jsx(r,m({as:f,ownerState:$,ref:a,className:M(g.root,x)},F,{children:k?oe(c,k):c}))})}const le=te({createStyledComponent:N("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>A({props:e,name:"MuiStack"})}),ae=le;function ne(e){return U("MuiFormControlLabel",e)}const ie=J("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),h=ie,ce=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],pe=e=>{const{classes:o,disabled:s,labelPlacement:l,error:n,required:r}=e,i={root:["root",s&&"disabled",`labelPlacement${B(l)}`,n&&"error",r&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",n&&"error"]};return E(i,ne,o)},me=N("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[{[`& .${h.label}`]:o.label},o.root,o[`labelPlacement${B(s.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>m({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${h.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${h.label}`]:{[`&.${h.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),de=N("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${h.error}`]:{color:(e.vars||e).palette.error.main}})),ue=C.forwardRef(function(o,s){var l,n;const r=A({props:o,name:"MuiFormControlLabel"}),{className:i,componentsProps:v={},control:t,disabled:a,disableTypography:d,label:u,labelPlacement:f="end",required:P,slotProps:R={}}=r,k=_(r,ce),c=K(),x=(l=a??t.props.disabled)!=null?l:c==null?void 0:c.disabled,b=P??t.props.required,F={disabled:x,required:b};["checked","name","onChange","value","inputRef"].forEach(L=>{typeof t.props[L]>"u"&&typeof r[L]<"u"&&(F[L]=r[L])});const $=Q({props:r,muiFormControl:c,states:["error"]}),g=m({},r,{disabled:x,labelPlacement:f,required:b,error:$.error}),j=pe(g),T=(n=R.typography)!=null?n:v.typography;let p=u;return p!=null&&p.type!==V&&!d&&(p=y.jsx(V,m({component:"span"},T,{className:M(j.label,T==null?void 0:T.className),children:p}))),y.jsxs(me,m({className:M(j.root,i),ownerState:g,ref:s},k,{children:[C.cloneElement(t,F),b?y.jsxs(ae,{display:"block",children:[p,y.jsxs(de,{ownerState:g,"aria-hidden":!0,className:j.asterisk,children:[" ","*"]})]}):p]}))}),ke=ue;export{ke as F};
