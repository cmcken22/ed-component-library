import{s as j}from"./index-LwjjZM6p.js";import{j as O}from"./jsx-runtime-Du8NFWEI.js";import{r as d}from"./index-Dl6G-zuu.js";import{C as W}from"./Checkbox-XoUDF6yd.js";import{s as B}from"./styled-BR12ND4t.js";import{B as F}from"./Box-BTk9yL7d.js";import"./FormControlLabel-ALs30M4a.js";import"./createTheme-DCk6V8kG.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-Ck0EBljP.js";import"./styled-amVfSIae.js";import"./ButtonBase-Dgt99m_m.js";import"./TransitionGroupContext-CXyXHDm3.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useControlled-1Y2rT-1r.js";import"./createSvgIcon-CtgctCWC.js";const N=B(F,{shouldForwardProp:a=>a!=="row",slot:"root"})(({theme:a,row:n})=>({...n?{display:"flex",flexDirection:"row",".CheckboxWrapper":{marginRight:a.spacing(2)}}:{display:"flex",flexDirection:"column",".CheckboxWrapper":{marginBottom:a.spacing(2)}}})),o=({id:a,options:n,value:m,onChange:l,disabled:f,row:V,getOptionValue:_,getOptionLabel:g,getOptionDisabled:y,labelPosition:L})=>{const[r,p]=d.useState(m||[]);d.useEffect(()=>{p(m||[])},[m]);const G=d.useCallback(e=>r.includes(e),[r]),w=d.useCallback((e,b)=>{if(!f)if(b){const t=[...r,e];p(t),l&&l(t)}else{const t=r.filter(i=>i!==e);p(t),l&&l(t)}},[p,l,f,r]);return O.jsx(N,{id:a,row:V,children:n==null?void 0:n.map((e,b)=>{const t=g?g(e):e==null?void 0:e.label,i=_?_(e):e==null?void 0:e.value,D=y?y(e):e==null?void 0:e.disabled;return O.jsx(W,{...e,label:t,value:i,onChange:E=>w(i,E),checked:()=>G(i),disabled:D||f,labelPosition:L},`${t}--${b}`)})})};o.defaultProps={options:[],value:null,disabled:!1,row:!1,labelPosition:"right"};try{o.displayName="CheckboxGroup",o.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"any[] | OptionType[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: any[]) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"",name:"row",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"(option: any) => any"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"(option: any) => any"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"(option: any) => any"}}}}}catch{}const le={title:"Example/Checkbox Group",component:o,parameters:{layout:"centered",docs:{source:{transform:j("CheckboxGroup")}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"}}},s={args:{...o.defaultProps,value:["option_1","option_3"],labelPosition:"right",options:[{label:"Option 1",value:"option_1",disabled:!1},{label:"Option 2",value:"option_2",disabled:!1},{label:"Option 3",value:"option_3",disabled:!0},{label:"Option 4",value:"option_4",disabled:!1}]}},u={args:{...o.defaultProps,labelPosition:"right",getOptionLabel:a=>a._id,getOptionValue:a=>a.data,getOptionDisabled:a=>(a==null?void 0:a._id)==="Test Option 3",options:[{_id:"Test Option 1",data:"option_1"},{_id:"Test Option 2",data:"option_2"},{_id:"Test Option 3",data:"option_3"},{_id:"Test Option 4",data:"option_4"}]}},c={args:{...s.args,labelPosition:"left"}};var x,h,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...CheckboxGroup.defaultProps,
    value: ["option_1", "option_3"],
    labelPosition: "right",
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
    }]
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var C,P,k;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...CheckboxGroup.defaultProps,
    labelPosition: "right",
    getOptionLabel: (option: any) => option._id,
    getOptionValue: (option: any) => option.data,
    getOptionDisabled: (option: any) => option?._id === "Test Option 3" ? true : false,
    options: [{
      _id: "Test Option 1",
      data: "option_1"
    }, {
      _id: "Test Option 2",
      data: "option_2"
    }, {
      _id: "Test Option 3",
      data: "option_3"
    }, {
      _id: "Test Option 4",
      data: "option_4"
    }]
  }
}`,...(k=(P=u.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var T,q,S;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Sample.args,
    labelPosition: "left"
  }
}`,...(S=(q=c.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};const re=["Sample","CustomList","LabelPositionLeft"];export{u as CustomList,c as LabelPositionLeft,s as Sample,re as __namedExportsOrder,le as default};
