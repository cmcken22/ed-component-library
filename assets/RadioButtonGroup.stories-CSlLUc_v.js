import{s as C}from"./index-FNnhrwHs.js";import{j as g}from"./jsx-runtime-Du8NFWEI.js";import{c as G}from"./Typography-DjRGjSGD.js";import{r as o}from"./index-Dl6G-zuu.js";import{R as P}from"./RadioButton-DSvSLmtT.js";import{s as D}from"./styled-DLEC8BOE.js";import{B as E}from"./Box-DP0gCcGq.js";import"./createTheme-Dc-CT_GP.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./FormControlLabel-5Qsymijr.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-QG6-VWOQ.js";const N="RadioButtonGroup",j="RadioButtonGroup",k=D(E,{shouldForwardProp:a=>a!=="row",slot:"root"})(({theme:a,row:n})=>({...n?{display:"flex",flexDirection:"row",".RadioButtonWrapper":{marginRight:a.spacing(2)}}:{display:"flex",flexDirection:"column",".RadioButtonWrapper":{marginBottom:a.spacing(2)}}})),t=({id:a,className:n,options:s,value:i,onChange:u,disabled:B,row:R,allowDeselect:d,getOptionValue:f,getOptionLabel:b,getOptionDisabled:y,labelPosition:h})=>{const[p,m]=o.useState(i||null);o.useEffect(()=>{m(i||null)},[i]);const O=o.useCallback(e=>e===p,[p]),V=o.useCallback((e,c)=>{let l=e;d&&(l=c?e:null),m(l),u&&u(l)},[m,u,d]);return g.jsx(k,{id:a,row:R,className:G(N,{[n]:n}),"data-testid":j,"data-value":p,children:s==null?void 0:s.map((e,c)=>{const l=b?b(e):e==null?void 0:e.label,q=f?f(e):e==null?void 0:e.value,w=y?y(e):e==null?void 0:e.disabled;return g.jsx(P,{...e,label:l,onChange:V,checked:()=>O(q),disabled:w||B,allowDeselect:d,labelPosition:h},`${l}--${c}`)})})};t.defaultProps={options:[],value:null,disabled:!1,row:!1,allowDeselect:!1,labelPosition:"right"};try{t.displayName="RadioButtonGroup",t.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"any[] | OptionType[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: any) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"",name:"row",required:!1,type:{name:"boolean"}},allowDeselect:{defaultValue:null,description:"",name:"allowDeselect",required:!1,type:{name:"boolean"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"(option: any) => any"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"(option: any) => any"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"(option: any) => any"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const M={title:"Example/Radio Button Group",component:t,parameters:{layout:"centered",docs:{source:{transform:C("RadioButtonGroup")}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"}}},r={args:{...t.defaultProps,options:[{label:"Option 1",value:"option_1",disabled:!1},{label:"Option 2",value:"option_2",disabled:!1},{label:"Option 3",value:"option_3",disabled:!0},{label:"Option 4",value:"option_4",disabled:!1}],value:"",disabled:!1,allowDeselect:!1,labelPosition:"right"}};var v,_,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...RadioButtonGroup.defaultProps,
    options: [{
      label: "Option 1",
      value: "option_1",
      disabled: false
    }, {
      label: "Option 2",
      value: "option_2",
      disabled: false
    }, {
      label: "Option 3",
      value: "option_3",
      disabled: true
    }, {
      label: "Option 4",
      value: "option_4",
      disabled: false
    }],
    value: "",
    disabled: false,
    allowDeselect: false,
    labelPosition: "right"
  }
  // argTypes: {}
}`,...(x=(_=r.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const Q=["Sample"];export{r as Sample,Q as __namedExportsOrder,M as default};
