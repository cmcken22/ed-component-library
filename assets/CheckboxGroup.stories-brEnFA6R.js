import{c as F}from"./commonArgTypes-Cz1rbySM.js";import{s as N}from"./index-DlyO01os.js";import{j as h}from"./jsx-runtime-Du8NFWEI.js";import{r}from"./index-Dl6G-zuu.js";import{C as $}from"./Checkbox-D1dTJqUW.js";import{s as A}from"./index-DGPhUUWW.js";import{B as I}from"./Box-gQIt9B05.js";import"./testIds-CT2jQqrK.js";import"./FormControlLabel-QMhEfIZX.js";import"./createTheme-CxQfeomc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-rB6r_AZO.js";import"./Stack-l5PVF6Ai.js";import"./styled-CE3BHGdM.js";import"./ButtonBase-lJFSTU0I.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./createSvgIcon-D2rEfC9A.js";const W=A(I,{shouldForwardProp:a=>a!=="row",slot:"root"})(({theme:a,row:c})=>({...c?{display:"flex",flexDirection:"row",".checkbox":{marginRight:a.spacing(2)}}:{display:"flex",flexDirection:"column",".checkbox":{marginBottom:a.spacing(2)}}})),o=r.forwardRef((a,c)=>{const{id:S,options:m,value:b,onChange:n,disabled:f,row:w,getOptionValue:_,getOptionLabel:O,getOptionDisabled:y,labelPosition:D,...G}=a,[i,p]=r.useState(b||[]);r.useEffect(()=>{p(b||[])},[b]);const E=r.useCallback(e=>i.includes(e),[i]),j=r.useCallback((e,g)=>{if(!f)if(g){const t=[...i,e];p(t),n&&n(t)}else{const t=i.filter(l=>l!==e);p(t),n&&n(t)}},[p,n,f,i]);return h.jsx(W,{id:S,ref:c,row:w,...G,children:m==null?void 0:m.map((e,g)=>{const t=O?O(e):e==null?void 0:e.label,l=_?_(e):e==null?void 0:e.value,R=y?y(e):e==null?void 0:e.disabled;return h.jsx($,{...e,label:t,value:l,onChange:B=>j(l,B),checked:()=>E(l),disabled:R||f,labelPosition:D},`${t}--${g}`)})})});o.defaultProps={options:[],value:null,disabled:!1,row:!1,labelPosition:"right"};try{o.displayName="CheckboxGroup",o.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"any[] | OptionType[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: any[]) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"",name:"row",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"(option: any) => any"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"(option: any) => any"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"(option: any) => any"}}}}}catch{}const ue={title:"Example/Checkbox Group",component:o,parameters:{layout:"centered",docs:{source:{transform:N("CheckboxGroup")}}},tags:["autodocs"],argTypes:{...F.onChange}},s={args:{...o.defaultProps,value:["option_1","option_3"],labelPosition:"right",options:[{label:"Option 1",value:"option_1",disabled:!1},{label:"Option 2",value:"option_2",disabled:!1},{label:"Option 3",value:"option_3",disabled:!0},{label:"Option 4",value:"option_4",disabled:!1}]}},d={args:{...o.defaultProps,labelPosition:"right",getOptionLabel:a=>a._id,getOptionValue:a=>a.data,getOptionDisabled:a=>(a==null?void 0:a._id)==="Test Option 3",options:[{_id:"Test Option 1",data:"option_1"},{_id:"Test Option 2",data:"option_2"},{_id:"Test Option 3",data:"option_3"},{_id:"Test Option 4",data:"option_4"}]}},u={args:{...s.args,labelPosition:"left"}};var x,C,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(C=s.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var P,V,k;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(k=(V=d.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var T,L,q;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Sample.args,
    labelPosition: "left"
  }
}`,...(q=(L=u.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const ce=["Sample","CustomList","LabelPositionLeft"];export{d as CustomList,u as LabelPositionLeft,s as Sample,ce as __namedExportsOrder,ue as default};
