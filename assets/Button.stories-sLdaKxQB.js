import{j as y}from"./jsx-runtime-Du8NFWEI.js";import{r as n}from"./index-Dl6G-zuu.js";import{I as r}from"./Icon-Cu7WjEzB.js";import{s as h}from"./index-FNnhrwHs.js";import{B as l}from"./Button-C2iSgadE.js";import"./Typography-DjRGjSGD.js";import"./createTheme-Dc-CT_GP.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./palette-D0GmnfNO.js";import"./styled-DLEC8BOE.js";import"./Box-DP0gCcGq.js";import"./index-D1_ZHIBm.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-aX2SwWXP.js";import"./TransitionGroupContext-6TzUecMu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";const _={title:"Example/Button",component:l,parameters:{layout:"centered",docs:{source:{transform:h("Button")}}},tags:["autodocs"],argTypes:{color:{options:["primary","secondary","danger"],control:{type:"select"}},variant:{options:["contained","outlined","link"],control:{type:"select"}},iconLeft:{options:["undefined",...Object.keys(r)],control:{type:"select"}},iconRight:{options:["undefined",...Object.keys(r)],control:{type:"select"}}}},s=e=>{const u=n.useMemo(()=>{if((e==null?void 0:e.iconLeft)!=="undefined")return e==null?void 0:e.iconLeft},[e==null?void 0:e.iconLeft]),f=n.useMemo(()=>{if((e==null?void 0:e.iconRight)!=="undefined")return e==null?void 0:e.iconRight},[e==null?void 0:e.iconRight]);return y.jsx(l,{...e,iconLeft:u,iconRight:f})},o={render:s,args:{children:"Sample Button",variant:"contained",color:"primary"}},t={render:s,args:{children:"Click Me",variant:"contained",color:"primary",iconLeft:"Heart"}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: renderTemplate,
  args: {
    children: "Sample Button",
    variant: "contained",
    color: "primary"
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,a,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: renderTemplate,
  args: {
    children: "Click Me",
    variant: "contained",
    color: "primary",
    iconLeft: "Heart"
  }
}`,...(d=(a=t.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const F=["Sample","WithIcon"];export{o as Sample,t as WithIcon,F as __namedExportsOrder,_ as default};
