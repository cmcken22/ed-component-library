import{s as j}from"./index-B_pG5fU1.js";import{j as O}from"./jsx-runtime-Du8NFWEI.js";import{r as d}from"./index-Dl6G-zuu.js";import{C as B}from"./Checkbox-CVpeMM0H.js";import{s as F}from"./index-DCyYi5Uh.js";import{B as N}from"./Box-C-V--YKQ.js";import"./FormControlLabel-BEhHtoBS.js";import"./createTheme-B78KyuB4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-B6I9QrUF.js";import"./styled-DWjFcNbo.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./createSvgIcon-BO828Ki2.js";const R=F(N,{shouldForwardProp:a=>a!=="row",slot:"root"})(({theme:a,row:n})=>({...n?{display:"flex",flexDirection:"row",".checkbox":{marginRight:a.spacing(2)}}:{display:"flex",flexDirection:"column",".checkbox":{marginBottom:a.spacing(2)}}})),o=({id:a,options:n,value:m,onChange:l,disabled:f,row:V,getOptionValue:_,getOptionLabel:g,getOptionDisabled:y,labelPosition:L})=>{const[i,p]=d.useState(m||[]);d.useEffect(()=>{p(m||[])},[m]);const G=d.useCallback(e=>i.includes(e),[i]),w=d.useCallback((e,b)=>{if(!f)if(b){const t=[...i,e];p(t),l&&l(t)}else{const t=i.filter(r=>r!==e);p(t),l&&l(t)}},[p,l,f,i]);return O.jsx(R,{id:a,row:V,children:n==null?void 0:n.map((e,b)=>{const t=g?g(e):e==null?void 0:e.label,r=_?_(e):e==null?void 0:e.value,D=y?y(e):e==null?void 0:e.disabled;return O.jsx(B,{...e,label:t,value:r,onChange:E=>w(r,E),checked:()=>G(r),disabled:D||f,labelPosition:L},`${t}--${b}`)})})};o.defaultProps={options:[],value:null,disabled:!1,row:!1,labelPosition:"right"};try{o.displayName="CheckboxGroup",o.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"any[] | OptionType[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: any[]) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"",name:"row",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"(option: any) => any"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"(option: any) => any"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"(option: any) => any"}}}}}catch{}const oe={title:"Example/Checkbox Group",component:o,parameters:{layout:"centered",docs:{source:{transform:j("CheckboxGroup")}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"}}},s={args:{...o.defaultProps,value:["option_1","option_3"],labelPosition:"right",options:[{label:"Option 1",value:"option_1",disabled:!1},{label:"Option 2",value:"option_2",disabled:!1},{label:"Option 3",value:"option_3",disabled:!0},{label:"Option 4",value:"option_4",disabled:!1}]}},u={args:{...o.defaultProps,labelPosition:"right",getOptionLabel:a=>a._id,getOptionValue:a=>a.data,getOptionDisabled:a=>(a==null?void 0:a._id)==="Test Option 3",options:[{_id:"Test Option 1",data:"option_1"},{_id:"Test Option 2",data:"option_2"},{_id:"Test Option 3",data:"option_3"},{_id:"Test Option 4",data:"option_4"}]}},c={args:{...s.args,labelPosition:"left"}};var x,h,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(q=c.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};const ne=["Sample","CustomList","LabelPositionLeft"];export{u as CustomList,c as LabelPositionLeft,s as Sample,ne as __namedExportsOrder,oe as default};
