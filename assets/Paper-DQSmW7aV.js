import{r as u}from"./index-Dl6G-zuu.js";import{f as l,_ as x}from"./createTheme-B78KyuB4.js";import{_ as i}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{b as g,e as P,s as b,f as y,i as _,j as $}from"./index-8HRI1sDn.js";import{j as R}from"./jsx-runtime-Du8NFWEI.js";function V(e,a){var o,t;return u.isValidElement(e)&&a.indexOf((o=e.type.muiName)!=null?o:(t=e.type)==null||(t=t._payload)==null||(t=t.value)==null?void 0:t.muiName)!==-1}const v=e=>{let a;return e<1?a=5.11916*e**2:a=4.5*Math.log(e+1)+2,(a/100).toFixed(2)};function C(e){return g("MuiPaper",e)}P("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const M=["className","component","elevation","square","variant"],N=e=>{const{square:a,elevation:o,variant:t,classes:n}=e,r={root:["root",t,!a&&"rounded",t==="elevation"&&`elevation${o}`]};return $(r,C,n)},j=b("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})(({theme:e,ownerState:a})=>{var o;return i({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!a.square&&{borderRadius:e.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},a.variant==="elevation"&&i({boxShadow:(e.vars||e).shadows[a.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${l("#fff",v(a.elevation))}, ${l("#fff",v(a.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[a.elevation]}))}),k=u.forwardRef(function(a,o){const t=y({props:a,name:"MuiPaper"}),{className:n,component:r="div",elevation:p=1,square:d=!1,variant:c="elevation"}=t,f=x(t,M),s=i({},t,{component:r,elevation:p,square:d,variant:c}),m=N(s);return R.jsx(j,i({as:r,ownerState:s,className:_(m.root,n),ref:o},f))}),A=k;export{A as P,V as i};
