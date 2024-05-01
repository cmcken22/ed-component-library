import{c as j}from"./commonArgTypes-Cz1rbySM.js";import{s as k}from"./index-DOK-dFBq.js";import{j as _}from"./jsx-runtime-Du8NFWEI.js";import{s as F,c as I}from"./index-DFf-bhEl.js";import{r as o}from"./index-Dl6G-zuu.js";import{T as W}from"./testIds-Cn_mvHBt.js";import{s as A,a as V}from"./index-rkLCEK4n.js";import{R as U}from"./RadioButton.types-Dl1thSzl.js";import{B as $}from"./Box-DPTDcbim.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DtgTEXL7.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Typography-BGHga1vv.js";import"./FormControlLabel-BLlKfmfO.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-C8COxrag.js";import"./Stack-B_sc2yyH.js";import"./styled-DlwMyq9x.js";const z=F($,{shouldForwardProp:A(["row","gap"]),slot:"root"})(({theme:a,row:i,gap:l})=>({...i?{display:"flex",flexDirection:"row",gap:l!==void 0?V(l):a.spacing(1),".RadioButtonWrapper":{marginRight:a.spacing(2)}}:{display:"flex",flexDirection:"column",gap:l!==void 0?V(l):a.spacing(1),".RadioButtonWrapper":{marginBottom:a.spacing(2)}}})),r=o.forwardRef((a,i)=>{const{id:l,className:g,options:u,value:d,onChange:p,disabled:D,row:q,gap:C,allowDeselect:m,getOptionValue:y,getOptionLabel:v,getOptionDisabled:O,labelPosition:G,...N}=a,[c,f]=o.useState(d||null);o.useEffect(()=>{f(d||null)},[d]);const T=o.useCallback(e=>e===c,[c]),L=o.useCallback((e,b)=>{let t=e;m&&(t=b?e:null),f(t),p&&p(t)},[f,p,m]);return _.jsx(z,{id:l,ref:i,row:q,className:I("RadioButtonGroup",{[g]:g}),gap:C,"data-testid":W.RADIO_BUTTON_GROUP,"data-value":c,...N,children:u==null?void 0:u.map((e,b)=>{const t=v?v(e):e==null?void 0:e.label,S=y?y(e):e==null?void 0:e.value,E=O?O(e):e==null?void 0:e.disabled;return _.jsx(U,{...e,label:t,onChange:L,checked:()=>T(S),disabled:E||D,allowDeselect:m,labelPosition:G},`${t}--${b}`)})})});r.defaultProps={options:[],value:null,disabled:!1,row:!1,allowDeselect:!1,labelPosition:"right",gap:"8px"};try{r.displayName="RadioButtonGroup",r.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"any[] | OptionType[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: any) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"",name:"row",required:!1,type:{name:"boolean"}},allowDeselect:{defaultValue:null,description:"",name:"allowDeselect",required:!1,type:{name:"boolean"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"(option: any) => any"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"(option: any) => any"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"(option: any) => any"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string | number"}}}}}catch{}const de={title:"Example/Radio Button Group",component:r,parameters:{layout:"centered",docs:{source:{transform:k("RadioButtonGroup")}}},tags:["autodocs"],argTypes:{...j.onChange}},n={args:{...r.defaultProps,options:[{label:"Option 1",value:"option_1",disabled:!1},{label:"Option 2",value:"option_2",disabled:!1},{label:"Option 3",value:"option_3",disabled:!0},{label:"Option 4",value:"option_4",disabled:!1}],value:"",disabled:!1,allowDeselect:!1,labelPosition:"right"}},s={args:{...n.args,labelPosition:"left"}};var P,R,x;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(x=(R=n.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var h,w,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Sample.args,
    labelPosition: "left"
  }
}`,...(B=(w=s.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const pe=["Sample","LabelPositionLeft"];export{s as LabelPositionLeft,n as Sample,pe as __namedExportsOrder,de as default};
