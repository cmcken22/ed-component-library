import{c as S}from"./commonArgTypes-Cz1rbySM.js";import{s as E}from"./index-DOK-dFBq.js";import{j as v}from"./jsx-runtime-Du8NFWEI.js";import{s as L,c as N}from"./index-DFf-bhEl.js";import{r}from"./index-Dl6G-zuu.js";import{R as j}from"./RadioButton.types-DoDJgX9A.js";import{B as k}from"./Box-DPTDcbim.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DtgTEXL7.js";import"./index-rkLCEK4n.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Typography-BGHga1vv.js";import"./FormControlLabel-BLlKfmfO.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-C8COxrag.js";import"./Stack-B_sc2yyH.js";import"./styled-DlwMyq9x.js";const T="RadioButtonGroup",W="RadioButtonGroup",F=L(k,{shouldForwardProp:a=>a!=="row",slot:"root"})(({theme:a,row:n})=>({...n?{display:"flex",flexDirection:"row",".RadioButtonWrapper":{marginRight:a.spacing(2)}}:{display:"flex",flexDirection:"column",".RadioButtonWrapper":{marginBottom:a.spacing(2)}}})),o=({id:a,className:n,options:i,value:u,onChange:d,disabled:P,row:V,allowDeselect:p,getOptionValue:b,getOptionLabel:y,getOptionDisabled:g,labelPosition:q})=>{const[m,c]=r.useState(u||null);r.useEffect(()=>{c(u||null)},[u]);const w=r.useCallback(e=>e===m,[m]),G=r.useCallback((e,f)=>{let l=e;p&&(l=f?e:null),c(l),d&&d(l)},[c,d,p]);return v.jsx(F,{id:a,row:V,className:N(T,{[n]:n}),"data-testid":W,"data-value":m,children:i==null?void 0:i.map((e,f)=>{const l=y?y(e):e==null?void 0:e.label,C=b?b(e):e==null?void 0:e.value,D=g?g(e):e==null?void 0:e.disabled;return v.jsx(j,{...e,label:l,onChange:G,checked:()=>w(C),disabled:D||P,allowDeselect:p,labelPosition:q},`${l}--${f}`)})})};o.defaultProps={options:[],value:null,disabled:!1,row:!1,allowDeselect:!1,labelPosition:"right"};try{o.displayName="RadioButtonGroup",o.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"any[] | OptionType[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: any) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"",name:"row",required:!1,type:{name:"boolean"}},allowDeselect:{defaultValue:null,description:"",name:"allowDeselect",required:!1,type:{name:"boolean"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"(option: any) => any"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"(option: any) => any"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"(option: any) => any"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}}}}}catch{}const oe={title:"Example/Radio Button Group",component:o,parameters:{layout:"centered",docs:{source:{transform:E("RadioButtonGroup")}}},tags:["autodocs"],argTypes:{...S.onChange}},t={args:{...o.defaultProps,options:[{label:"Option 1",value:"option_1",disabled:!1},{label:"Option 2",value:"option_2",disabled:!1},{label:"Option 3",value:"option_3",disabled:!0},{label:"Option 4",value:"option_4",disabled:!1}],value:"",disabled:!1,allowDeselect:!1,labelPosition:"right"}},s={args:{...t.args,labelPosition:"left"}};var _,x,B;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(B=(x=t.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var R,O,h;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Sample.args,
    labelPosition: "left"
  }
}`,...(h=(O=s.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};const ne=["Sample","LabelPositionLeft"];export{s as LabelPositionLeft,t as Sample,ne as __namedExportsOrder,oe as default};
