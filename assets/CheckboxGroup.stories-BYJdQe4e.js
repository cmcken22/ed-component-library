import{s as w}from"./index-DjbcUtqK.js";import{j as y}from"./jsx-runtime-Du8NFWEI.js";import{r as p}from"./index-Dl6G-zuu.js";import{C as S}from"./Checkbox-BmrJKc4W.js";import{s as E}from"./styled-w1uBJNCI.js";import{B as L}from"./Box-C2XYFoeC.js";import"./FormControlLabel-C_gVR9GN.js";import"./createTheme-B78KyuB4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-BmzuiwxG.js";import"./ButtonBase-BFDeuqCQ.js";import"./TransitionGroupContext-6TzUecMu.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./createSvgIcon-BP9fb_UE.js";const j=E(L,{shouldForwardProp:a=>a!=="row",slot:"root"})(({theme:a,row:n})=>({...n?{display:"flex",flexDirection:"row",".CheckboxWrapper":{marginRight:a.spacing(2)}}:{display:"flex",flexDirection:"column",".CheckboxWrapper":{marginBottom:a.spacing(2)}}})),o=({id:a,options:n,value:c,onChange:l,disabled:m,row:P,getOptionValue:b,getOptionLabel:_,getOptionDisabled:g,labelPosition:T})=>{const[i,s]=p.useState(c||[]);p.useEffect(()=>{s(c||[])},[c]);const q=p.useCallback(e=>i.includes(e),[i]),V=p.useCallback((e,f)=>{if(!m)if(f){const t=[...i,e];s(t),l&&l(t)}else{const t=i.filter(r=>r!==e);s(t),l&&l(t)}},[s,l,m,i]);return y.jsx(j,{id:a,row:P,children:n==null?void 0:n.map((e,f)=>{const t=_?_(e):e==null?void 0:e.label,r=b?b(e):e==null?void 0:e.value,D=g?g(e):e==null?void 0:e.disabled;return y.jsx(S,{...e,label:t,value:r,onChange:G=>V(r,G),checked:()=>q(r),disabled:D||m,labelPosition:T},`${t}--${f}`)})})};o.defaultProps={options:[],value:null,disabled:!1,row:!1,labelPosition:"right"};try{o.displayName="CheckboxGroup",o.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"any[] | OptionType[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: any[]) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"",name:"row",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"(option: any) => any"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"(option: any) => any"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"(option: any) => any"}}}}}catch{}const Y={title:"Example/Checkbox Group",component:o,parameters:{layout:"centered",docs:{source:{transform:w("CheckboxGroup")}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"}}},d={args:{...o.defaultProps,value:["option_1","option_3"],labelPosition:"right",options:[{label:"Option 1",value:"option_1",disabled:!1},{label:"Option 2",value:"option_2",disabled:!1},{label:"Option 3",value:"option_3",disabled:!0},{label:"Option 4",value:"option_4",disabled:!1}]}},u={args:{...o.defaultProps,labelPosition:"right",getOptionLabel:a=>a._id,getOptionValue:a=>a.data,getOptionDisabled:a=>(a==null?void 0:a._id)==="Test Option 3",options:[{_id:"Test Option 1",data:"option_1"},{_id:"Test Option 2",data:"option_2"},{_id:"Test Option 3",data:"option_3"},{_id:"Test Option 4",data:"option_4"}]}};var O,x,h;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(h=(x=d.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,C,k;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const Z=["Default","CustomList"];export{u as CustomList,d as Default,Z as __namedExportsOrder,Y as default};
