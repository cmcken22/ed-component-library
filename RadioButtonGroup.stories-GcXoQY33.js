import{j as m}from"./Typography-B9kEj_1_.js";import{r as d}from"./index-CBqU2yxZ.js";import{R as x}from"./RadioButton-DdGeQmkx.js";import{s as B}from"./styled-rwD5gtOs.js";import{B as R}from"./Box-BFjoy81w.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DZp7yd2Y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DkvFToXR.js";import"./FormControlLabel-CbpU6zef.js";import"./useFormControl-Bd6AoRoF.js";import"./Typography-LR_mAL0j.js";const w=B(R,{shouldForwardProp:a=>a!=="row",slot:"root"})(({theme:a,row:t})=>({...t?{display:"flex",flexDirection:"row",".RadioButtonWrapper":{marginRight:a.spacing(2)}}:{display:"flex",flexDirection:"column",".RadioButtonWrapper":{marginBottom:a.spacing(2)}}})),l=({options:a,value:t,onChange:s,disabled:y,row:_,allowDeselect:u})=>{const[i,p]=d.useState(t||null),c=d.useCallback(e=>e===i,[i]),g=d.useCallback((e,o)=>{let n=e;u&&(n=o?e:null),p(n),s&&s(n)},[p,s,u]);return m.jsx(w,{row:_,children:a==null?void 0:a.map((e,o)=>m.jsx(x,{...e,onChange:g,checked:()=>c(e==null?void 0:e.value),disabled:(e==null?void 0:e.disabled)||y},`${e==null?void 0:e.label}--${o}--${c(e==null?void 0:e.value)}`))})};l.defaultProps={options:[],value:null,disabled:!1,row:!1,allowDeselect:!1};try{l.displayName="RadioButtonGroup",l.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"any[]"}},value:{defaultValue:{value:"null"},description:"",name:"value",required:!1,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: any) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},row:{defaultValue:{value:"false"},description:"",name:"row",required:!1,type:{name:"boolean"}},allowDeselect:{defaultValue:{value:"false"},description:"",name:"allowDeselect",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Example/Radio Button Group",component:l,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{...l.defaultProps,options:[{label:"Option 1",value:"option_1",disabled:!1},{label:"Option 2",value:"option_2",disabled:!1},{label:"Option 3",value:"option_3",disabled:!0},{label:"Option 4",value:"option_4",disabled:!1}],value:"",disabled:!1,allowDeselect:!1}};var f,b,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    allowDeselect: false
  }
  // argTypes: {}
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const W=["Sample"];export{r as Sample,W as __namedExportsOrder,S as default};
