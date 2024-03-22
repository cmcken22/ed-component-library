import{j as d}from"./jsx-runtime-Du8NFWEI.js";import{s as f}from"./index-B_pG5fU1.js";import{C as s}from"./Currency-C5VfasqZ.js";import"./index-Dl6G-zuu.js";import"./react-number-format.es-vn8TvMxN.js";import"./withBaseInput-K4VB_GuN.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BSWZnpwu.js";import"./createTheme-C-bbEhjH.js";import"./styled-DMCGyrn8.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-BeOq4TRm.js";import"./Tooltip-DEIsbpBF.js";import"./index-Dx556MhY.js";import"./useTheme-CD2qRrbv.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./createSvgIcon-BSw8Ufc7.js";import"./GlobalStyles-Dm_UTwER.js";import"./index-DfBNxlIc.js";import"./Typography-C1g_3yIv.js";import"./Typography-DTLcFDMd.js";import"./Typography-CbG_DwGs.js";import"./Box-cOIccGF-.js";import"./Icon.types-CsEEbQCp.js";import"./useOnHover-B5yjJnBG.js";import"./index-CYIh5gUh.js";import"./palette-D2hGRGzw.js";const K={title:"Example/Inputs/Currency",component:s,parameters:{layout:"centered",docs:{source:{transform:f("Currency")}}},tags:["autodocs"],render:o=>{let r=o.thousandSeparator;r==="true"&&(r=!0),r==="false"&&(r=!1);let a=o.prefix;a==="null"&&(a=null);let l=o.suffix;return l==="null"&&(l=null),d.jsx(s,{...o,thousandSeparator:r,prefix:a,suffix:l})},argTypes:{onChange:{action:"changed"},thousandSeparator:{control:{type:"text"}},prefix:{options:["null","Dollar","Pound","Euro","$","£","€"],control:{type:"select"}},suffix:{options:["null","Dollar","Pound","Euro","$","£","€"],control:{type:"select"}},status:{options:["error","success","warning"],control:{type:"radio"}},labelPosition:{options:["top","left"],control:{type:"radio"}}}},e={args:{...s.defaultProps,id:"Primary",label:"Primary",placeholder:"Enter a value",disabled:!1,helperText:"Helper Text",required:!1,value:"Hello world",fullWidth:!1,labelPosition:"top"}},t={args:{...e.args,labelPosition:"left"}};var i,p,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Currency.defaultProps,
    id: "Primary",
    label: "Primary",
    placeholder: "Enter a value",
    disabled: false,
    helperText: "Helper Text",
    required: false,
    value: "Hello world",
    fullWidth: false,
    labelPosition: "top"
  }
}`,...(n=(p=e.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var m,u,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Sample.args,
    labelPosition: "left"
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const M=["Sample","LeftLabel"];export{t as LeftLabel,e as Sample,M as __namedExportsOrder,K as default};
