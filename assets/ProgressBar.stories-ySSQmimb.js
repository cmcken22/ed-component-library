import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{s as B}from"./index-DlyO01os.js";import{P as a}from"./ProgressBar-abn_nouz.js";import{B as P}from"./Box-gQIt9B05.js";import"./index-Dl6G-zuu.js";import"./index-DGPhUUWW.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-CxQfeomc.js";import"./index-B-KJ_PcS.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Typography-BXdRB8J7.js";import"./Typography-u1033W3R.js";import"./Typography-rB6r_AZO.js";import"./index-CZ29VMm6.js";import"./palette-CESXTxp7.js";import"./index-CiDPmov_.js";const R={title:"Example/ProgressBar",component:a,parameters:{layout:"centered",docs:{source:{transform:B("ProgressBar")}}},tags:["autodocs"],render:F=>t.jsx(P,{sx:{minWidth:"200px"},children:t.jsx(a,{...F})}),argTypes:{status:{options:[void 0,"success","error"],control:{type:"radio"}}}},r={args:{...a.defaultProps,leftText:"100kb / 250kb",rightText:"1 second left",value:100/250*100}},e={args:{...r.args,value:void 0}},o={args:{...r.args,status:"error",errorMessage:"Upload failed"}},s={args:{...r.args,railColor:"#C3FF93",color:"#FF70AB"}};var n,m,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...ProgressBar.defaultProps,
    leftText: "100kb / 250kb",
    rightText: "1 second left",
    value: 100 / 250 * 100
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,i,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: undefined
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,u,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: "error",
    errorMessage: "Upload failed"
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,x,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    railColor: "#C3FF93",
    color: "#FF70AB"
  }
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const W=["Default","Indeterminate","ErrorState","CustomColor"];export{s as CustomColor,r as Default,o as ErrorState,e as Indeterminate,W as __namedExportsOrder,R as default};
