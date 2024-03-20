import{s as S}from"./index-LwjjZM6p.js";import{j as v}from"./jsx-runtime-Du8NFWEI.js";import{c as E}from"./index-DfBNxlIc.js";import{r}from"./index-Dl6G-zuu.js";import{R as L}from"./RadioButton-2aE3WKlc.js";import{s as N}from"./styled-BR12ND4t.js";import{B as j}from"./Box-BTk9yL7d.js";import"./Typography-ZX8UCtO5.js";import"./createTheme-DCk6V8kG.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./index-BtqKrAAV.js";import"./useTheme-Clx4k-ij.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./FormControlLabel-ALs30M4a.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-Ck0EBljP.js";import"./styled-amVfSIae.js";const k="RadioButtonGroup",T="RadioButtonGroup",W=N(j,{shouldForwardProp:a=>a!=="row",slot:"root"})(({theme:a,row:o})=>({...o?{display:"flex",flexDirection:"row",".RadioButtonWrapper":{marginRight:a.spacing(2)}}:{display:"flex",flexDirection:"column",".RadioButtonWrapper":{marginBottom:a.spacing(2)}}})),n=({id:a,className:o,options:i,value:u,onChange:d,disabled:P,row:V,allowDeselect:p,getOptionValue:b,getOptionLabel:g,getOptionDisabled:y,labelPosition:q})=>{const[m,c]=r.useState(u||null);r.useEffect(()=>{c(u||null)},[u]);const w=r.useCallback(e=>e===m,[m]),C=r.useCallback((e,f)=>{let l=e;p&&(l=f?e:null),c(l),d&&d(l)},[c,d,p]);return v.jsx(W,{id:a,row:V,className:E(k,{[o]:o}),"data-testid":T,"data-value":m,children:i==null?void 0:i.map((e,f)=>{const l=g?g(e):e==null?void 0:e.label,G=b?b(e):e==null?void 0:e.value,D=y?y(e):e==null?void 0:e.disabled;return v.jsx(L,{...e,label:l,onChange:C,checked:()=>w(G),disabled:D||P,allowDeselect:p,labelPosition:q},`${l}--${f}`)})})};n.defaultProps={options:[],value:null,disabled:!1,row:!1,allowDeselect:!1,labelPosition:"right"};try{n.displayName="RadioButtonGroup",n.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"any[] | OptionType[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: any) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"",name:"row",required:!1,type:{name:"boolean"}},allowDeselect:{defaultValue:null,description:"",name:"allowDeselect",required:!1,type:{name:"boolean"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"(option: any) => any"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"(option: any) => any"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"(option: any) => any"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}}}}}catch{}const te={title:"Example/Radio Button Group",component:n,parameters:{layout:"centered",docs:{source:{transform:S("RadioButtonGroup")}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"}}},t={args:{...n.defaultProps,options:[{label:"Option 1",value:"option_1",disabled:!1},{label:"Option 2",value:"option_2",disabled:!1},{label:"Option 3",value:"option_3",disabled:!0},{label:"Option 4",value:"option_4",disabled:!1}],value:"",disabled:!1,allowDeselect:!1,labelPosition:"right"}},s={args:{...t.args,labelPosition:"left"}};var _,x,B;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(B=(x=t.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var R,h,O;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Sample.args,
    labelPosition: "left"
  }
}`,...(O=(h=s.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};const ne=["Sample","LabelPositionLeft"];export{s as LabelPositionLeft,t as Sample,ne as __namedExportsOrder,te as default};
