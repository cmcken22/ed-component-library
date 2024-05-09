import{c as t}from"./commonArgTypes-Cz1rbySM.js";import{s as S}from"./index-DlyO01os.js";import{I as f}from"./Icon.types-pqrT6upQ.js";import{C as v}from"./Chip-BcJ9R-JK.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./index-DFf-bhEl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DtgTEXL7.js";import"./Typography-BGHga1vv.js";import"./index-Dj5QuGqs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./palette-CiKahY_l.js";import"./useOnHover-DcG81d-b.js";import"./Box-DPTDcbim.js";import"./Typography-Db548vBZ.js";import"./Typography-C8COxrag.js";import"./testIds-K29TpReK.js";const B={title:"Example/Chip",component:v,parameters:{layout:"centered",docs:{source:{transform:S("Chip")}}},tags:["autodocs"],argTypes:{...t.onClick,...t.onHover,type:{options:["positive","negative","warning","pending","neutral","primary","secondary"],control:{type:"radio"}},icon:{options:[void 0,...Object.keys(f)],control:{type:"select"}}}},r={args:{type:"positive",text:"Chip",hideIcon:!1,iconPosition:"left",variant:"contained"}},e={args:{...r.args,variant:"outlined"}},o={args:{...r.args,type:"primary",allowClose:!0}},a={args:{...r.args,type:"secondary",allowClose:!0}};var s,n,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: "positive",
    text: "Chip",
    hideIcon: false,
    iconPosition: "left",
    variant: "contained"
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,m,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Sample.args,
    variant: "outlined"
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Sample.args,
    type: "primary",
    allowClose: true
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,y,C;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Sample.args,
    type: "secondary",
    allowClose: true
  }
}`,...(C=(y=a.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const D=["Sample","Outlined","Primary","Secondary"];export{e as Outlined,o as Primary,r as Sample,a as Secondary,D as __namedExportsOrder,B as default};
