import{s as w,j as y}from"./styled-E6V2dxkg.js";import{r}from"./index-CBqU2yxZ.js";import{R as D}from"./RadioButton-m2bS_Mij.js";import{B as P}from"./Box-CW5E8zBp.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Typography-DMu__NgM.js";import"./index-DkvFToXR.js";import"./FormControlLabel-Cyz3Rmf_.js";import"./useFormControl-Bd6AoRoF.js";import"./Typography-CjUrGxKM.js";const G=w(P,{shouldForwardProp:a=>a!=="row",slot:"root"})(({theme:a,row:t})=>({...t?{display:"flex",flexDirection:"row",".RadioButtonWrapper":{marginRight:a.spacing(2)}}:{display:"flex",flexDirection:"column",".RadioButtonWrapper":{marginBottom:a.spacing(2)}}})),n=({id:a,options:t,value:s,onChange:i,disabled:x,row:O,allowDeselect:u,getOptionValue:f,getOptionLabel:m,getOptionDisabled:c,labelPosition:B})=>{const[b,d]=r.useState(s||null);r.useEffect(()=>{d(s||null)},[s]);const R=r.useCallback(e=>e===b,[b]),V=r.useCallback((e,p)=>{let l=e;u&&(l=p?e:null),d(l),i&&i(l)},[d,i,u]);return y.jsx(G,{id:a,row:O,children:t==null?void 0:t.map((e,p)=>{const l=m?m(e):e==null?void 0:e.label,h=f?f(e):e==null?void 0:e.value,q=c?c(e):e==null?void 0:e.disabled;return y.jsx(D,{...e,label:l,onChange:V,checked:()=>R(h),disabled:q||x,allowDeselect:u,labelPosition:B},`${l}--${p}`)})})};n.defaultProps={options:[],value:null,disabled:!1,row:!1,allowDeselect:!1,labelPosition:"right"};try{n.displayName="RadioButtonGroup",n.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"any[] | OptionType[]"}},value:{defaultValue:{value:"null"},description:"",name:"value",required:!1,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: any) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},row:{defaultValue:{value:"false"},description:"",name:"row",required:!1,type:{name:"boolean"}},allowDeselect:{defaultValue:{value:"false"},description:"",name:"allowDeselect",required:!1,type:{name:"boolean"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"(option: any) => any"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"(option: any) => any"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"(option: any) => any"}},labelPosition:{defaultValue:{value:"right"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const L={title:"Example/Radio Button Group",component:n,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{...n.defaultProps,options:[{label:"Option 1",value:"option_1",disabled:!1},{label:"Option 2",value:"option_2",disabled:!1},{label:"Option 3",value:"option_3",disabled:!0},{label:"Option 4",value:"option_4",disabled:!1}],value:"",disabled:!1,allowDeselect:!1}};var v,g,_;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(_=(g=o.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const z=["Sample"];export{o as Sample,z as __namedExportsOrder,L as default};
