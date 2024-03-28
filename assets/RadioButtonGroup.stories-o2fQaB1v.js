import{s as S}from"./index-B_pG5fU1.js";import{j as v}from"./jsx-runtime-Du8NFWEI.js";import{s as E,c as L}from"./index-DCyYi5Uh.js";import{r}from"./index-Dl6G-zuu.js";import{R as N}from"./RadioButton-Bt7UqEM6.js";import{B as j}from"./Box-C-V--YKQ.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./Typography-DbM4VYj_.js";import"./index-BEf2p8cz.js";import"./useTheme-BgX8hDp8.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./FormControlLabel-BEhHtoBS.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-B6I9QrUF.js";import"./styled-DWjFcNbo.js";const k="RadioButtonGroup",T="RadioButtonGroup",W=E(j,{shouldForwardProp:a=>a!=="row",slot:"root"})(({theme:a,row:o})=>({...o?{display:"flex",flexDirection:"row",".RadioButtonWrapper":{marginRight:a.spacing(2)}}:{display:"flex",flexDirection:"column",".RadioButtonWrapper":{marginBottom:a.spacing(2)}}})),n=({id:a,className:o,options:i,value:u,onChange:d,disabled:P,row:V,allowDeselect:p,getOptionValue:b,getOptionLabel:g,getOptionDisabled:y,labelPosition:q})=>{const[m,c]=r.useState(u||null);r.useEffect(()=>{c(u||null)},[u]);const w=r.useCallback(e=>e===m,[m]),C=r.useCallback((e,f)=>{let l=e;p&&(l=f?e:null),c(l),d&&d(l)},[c,d,p]);return v.jsx(W,{id:a,row:V,className:L(k,{[o]:o}),"data-testid":T,"data-value":m,children:i==null?void 0:i.map((e,f)=>{const l=g?g(e):e==null?void 0:e.label,G=b?b(e):e==null?void 0:e.value,D=y?y(e):e==null?void 0:e.disabled;return v.jsx(N,{...e,label:l,onChange:C,checked:()=>w(G),disabled:D||P,allowDeselect:p,labelPosition:q},`${l}--${f}`)})})};n.defaultProps={options:[],value:null,disabled:!1,row:!1,allowDeselect:!1,labelPosition:"right"};try{n.displayName="RadioButtonGroup",n.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"any[] | OptionType[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: any) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"",name:"row",required:!1,type:{name:"boolean"}},allowDeselect:{defaultValue:null,description:"",name:"allowDeselect",required:!1,type:{name:"boolean"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"(option: any) => any"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"(option: any) => any"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"(option: any) => any"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}}}}}catch{}const le={title:"Example/Radio Button Group",component:n,parameters:{layout:"centered",docs:{source:{transform:S("RadioButtonGroup")}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"}}},t={args:{...n.defaultProps,options:[{label:"Option 1",value:"option_1",disabled:!1},{label:"Option 2",value:"option_2",disabled:!1},{label:"Option 3",value:"option_3",disabled:!0},{label:"Option 4",value:"option_4",disabled:!1}],value:"",disabled:!1,allowDeselect:!1,labelPosition:"right"}},s={args:{...t.args,labelPosition:"left"}};var _,x,B;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(h=s.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};const te=["Sample","LabelPositionLeft"];export{s as LabelPositionLeft,t as Sample,te as __namedExportsOrder,le as default};
