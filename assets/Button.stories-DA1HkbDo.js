import{j as y}from"./jsx-runtime-Du8NFWEI.js";import{r as n}from"./index-Dl6G-zuu.js";import{s as h}from"./index-B_pG5fU1.js";import{I as r}from"./Icon.types-Bg_FxVn4.js";import{B as l}from"./Button-B3PXq-J7.js";import"./index-8HRI1sDn.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./useOnHover-B5yjJnBG.js";import"./Typography-DbM4VYj_.js";import"./index-DPNVsBv0.js";import"./useTheme-BpUgHZka.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./palette-DffXsAfV.js";import"./Box-GI0gEbLE.js";import"./ButtonBase-2lKpUo-h.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";const V={title:"Example/Button",component:l,parameters:{layout:"centered",docs:{source:{transform:h("Button")}}},tags:["autodocs"],argTypes:{color:{options:["primary","secondary","danger"],control:{type:"select"}},variant:{options:["contained","outlined","link"],control:{type:"select"}},iconLeft:{options:["undefined",...Object.keys(r)],control:{type:"select"}},iconRight:{options:["undefined",...Object.keys(r)],control:{type:"select"}}}},s=e=>{const u=n.useMemo(()=>{if((e==null?void 0:e.iconLeft)!=="undefined")return e==null?void 0:e.iconLeft},[e==null?void 0:e.iconLeft]),f=n.useMemo(()=>{if((e==null?void 0:e.iconRight)!=="undefined")return e==null?void 0:e.iconRight},[e==null?void 0:e.iconRight]);return y.jsx(l,{...e,iconLeft:u,iconRight:f})},o={render:s,args:{children:"Sample Button",variant:"contained",color:"primary",loading:!1}},t={render:s,args:{children:"Click Me",variant:"contained",color:"primary",iconLeft:"Heart"}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: renderTemplate,
  args: {
    children: "Sample Button",
    variant: "contained",
    color: "primary",
    loading: false
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,a,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: renderTemplate,
  args: {
    children: "Click Me",
    variant: "contained",
    color: "primary",
    iconLeft: "Heart"
  }
}`,...(d=(a=t.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const q=["Sample","WithIcon"];export{o as Sample,t as WithIcon,q as __namedExportsOrder,V as default};
