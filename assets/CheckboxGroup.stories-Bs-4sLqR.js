import{s as w,j as y}from"./styled-ucQaTERo.js";import{r as p}from"./index-CBqU2yxZ.js";import{C as S}from"./Checkbox-C3x5qspr.js";import{B as E}from"./Box-BCwfq51s.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FormControlLabel-DjwVXnHl.js";import"./useFormControl-Bd6AoRoF.js";import"./Typography-rKY_6Ojh.js";import"./ButtonBase-BlZvthU4.js";import"./TransitionGroupContext-D_Kblpyy.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./createSvgIcon-DpQRr9RR.js";const L=w(E,{shouldForwardProp:a=>a!=="row",slot:"root"})(({theme:a,row:o})=>({...o?{display:"flex",flexDirection:"row",".CheckboxWrapper":{marginRight:a.spacing(2)}}:{display:"flex",flexDirection:"column",".CheckboxWrapper":{marginBottom:a.spacing(2)}}})),n=({id:a,options:o,value:c,onChange:l,disabled:m,row:P,getOptionValue:b,getOptionLabel:_,getOptionDisabled:g,labelPosition:T})=>{const[i,s]=p.useState(c||[]);p.useEffect(()=>{s(c||[])},[c]);const q=p.useCallback(e=>i.includes(e),[i]),V=p.useCallback((e,f)=>{if(!m)if(f){const t=[...i,e];s(t),l&&l(t)}else{const t=i.filter(r=>r!==e);s(t),l&&l(t)}},[s,l,m,i]);return y.jsx(L,{id:a,row:P,children:o==null?void 0:o.map((e,f)=>{const t=_?_(e):e==null?void 0:e.label,r=b?b(e):e==null?void 0:e.value,D=g?g(e):e==null?void 0:e.disabled;return y.jsx(S,{...e,label:t,value:r,onChange:G=>V(r,G),checked:()=>q(r),disabled:D||m,labelPosition:T},`${t}--${f}`)})})};n.defaultProps={options:[],value:null,disabled:!1,row:!1,labelPosition:"right"};try{n.displayName="CheckboxGroup",n.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"any[] | OptionType[]"}},value:{defaultValue:{value:"null"},description:"",name:"value",required:!1,type:{name:"any[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: any[]) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},row:{defaultValue:{value:"false"},description:"",name:"row",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"right"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"(option: any) => any"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"(option: any) => any"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"(option: any) => any"}}}}}catch{}const Q={title:"Example/Checkbox Group",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},d={args:{...n.defaultProps,value:["option_1","option_3"],labelPosition:"right",options:[{label:"Option 1",value:"option_1",disabled:!1},{label:"Option 2",value:"option_2",disabled:!1},{label:"Option 3",value:"option_3",disabled:!0},{label:"Option 4",value:"option_4",disabled:!1}]}},u={args:{...n.defaultProps,labelPosition:"right",getOptionLabel:a=>a._id,getOptionValue:a=>a.data,getOptionDisabled:a=>(a==null?void 0:a._id)==="Test Option 3",options:[{_id:"Test Option 1",data:"option_1"},{_id:"Test Option 2",data:"option_2"},{_id:"Test Option 3",data:"option_3"},{_id:"Test Option 4",data:"option_4"}]}};var O,v,x;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(x=(v=d.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,C,k;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const U=["Default","CustomList"];export{u as CustomList,d as Default,U as __namedExportsOrder,Q as default};
