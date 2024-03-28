import{j as g}from"./jsx-runtime-Du8NFWEI.js";import{s as y}from"./index-B_pG5fU1.js";import{C as n}from"./Currency-D8dh0agi.js";import"./index-Dl6G-zuu.js";import"./react-number-format.es-DkkvJ1RT.js";import"./helpers-CtoIX1AE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./index-DCyYi5Uh.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-Hs7e5W89.js";import"./Tooltip-C4Gwpmhi.js";import"./index-CxDPfwJT.js";import"./useTheme-BgX8hDp8.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./inheritsLoose-B7h9gheN.js";import"./createSvgIcon-BO828Ki2.js";import"./GlobalStyles-Dmpyt81I.js";import"./Typography-CDWy3aSQ.js";import"./Typography-DbM4VYj_.js";import"./Typography-B6I9QrUF.js";import"./Box-C-V--YKQ.js";import"./Icon.types-C28-lL-C.js";import"./useOnHover-B5yjJnBG.js";import"./index-BEf2p8cz.js";import"./palette-C9S7df13.js";const N={title:"Example/Inputs/Currency",component:n,parameters:{layout:"centered",docs:{source:{transform:y("Currency")}}},tags:["autodocs"],render:o=>{let e=o.thousandSeparator;e==="true"&&(e=!0),e==="false"&&(e=!1);let s=o.prefix;s==="null"&&(s=null);let l=o.suffix;return l==="null"&&(l=null),g.jsx(n,{...o,thousandSeparator:e,prefix:s,suffix:l})},argTypes:{onChange:{action:"changed"},thousandSeparator:{control:{type:"text"}},prefix:{options:["null","Dollar","Pound","Euro"],control:{type:"select"}},suffix:{options:["null","Dollar","Pound","Euro"],control:{type:"select"}},status:{options:["error","success","warning"],control:{type:"radio"}},labelPosition:{options:["top","left"],control:{type:"radio"}}}},r={args:{...n.defaultProps,id:"Primary",label:"Primary",placeholder:"Enter a value",disabled:!1,helperText:"Helper Text",required:!1,value:"",fullWidth:!1,labelPosition:"top"}},t={args:{...r.args,labelPosition:"left"}},a={args:{...r.args,variant:"table",label:"",helperText:"",color:"success.main"}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Currency.defaultProps,
    id: "Primary",
    label: "Primary",
    placeholder: "Enter a value",
    disabled: false,
    helperText: "Helper Text",
    required: false,
    value: "",
    fullWidth: false,
    labelPosition: "top"
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,c,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Sample.args,
    labelPosition: "left"
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var f,x,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Sample.args,
    variant: "table",
    label: "",
    helperText: "",
    color: "success.main"
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const Q=["Sample","LeftLabel","TableVariant"];export{t as LeftLabel,r as Sample,a as TableVariant,Q as __namedExportsOrder,N as default};
