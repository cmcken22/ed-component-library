import{j as y}from"./styled-E6V2dxkg.js";import{r as n}from"./index-CBqU2yxZ.js";import{I as r}from"./Icon-DT4u0hqr.js";import{B as l}from"./Button-BsDGra9e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BpvXyOxN.js";import"./Typography-DMu__NgM.js";import"./index-DkvFToXR.js";import"./Box-CW5E8zBp.js";import"./index-BtM5VmRH.js";import"./ButtonBase-DqGNsjr1.js";import"./TransitionGroupContext-D_Kblpyy.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";const C={title:"Example/Button",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{options:["primary","secondary","danger"],control:{type:"select"}},variant:{options:["contained","outlined","link"],control:{type:"select"}},iconLeft:{options:["undefined",...Object.keys(r)],control:{type:"select"}},iconRight:{options:["undefined",...Object.keys(r)],control:{type:"select"}}}},s=e=>{const u=n.useMemo(()=>{if((e==null?void 0:e.iconLeft)!=="undefined")return e==null?void 0:e.iconLeft},[e==null?void 0:e.iconLeft]),f=n.useMemo(()=>{if((e==null?void 0:e.iconRight)!=="undefined")return e==null?void 0:e.iconRight},[e==null?void 0:e.iconRight]);return y.jsx(l,{...e,iconLeft:u,iconRight:f})},t={render:s,args:{children:"Sample Button",variant:"contained",color:"primary"}},o={render:s,args:{children:"Click Me",variant:"contained",color:"primary",iconLeft:"Heart"}};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: renderTemplate,
  args: {
    children: "Sample Button",
    variant: "contained",
    color: "primary"
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,a,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: renderTemplate,
  args: {
    children: "Click Me",
    variant: "contained",
    color: "primary",
    iconLeft: "Heart"
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const H=["Sample","WithIcon"];export{t as Sample,o as WithIcon,H as __namedExportsOrder,C as default};
