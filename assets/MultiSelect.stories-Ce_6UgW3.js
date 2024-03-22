import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{s as S}from"./index-B_pG5fU1.js";import{A as G}from"./Avatar-fQDKrKXl.js";import{a as N,I as z}from"./Icon.types-CsEEbQCp.js";import{r as p}from"./index-Dl6G-zuu.js";import"./ThemeWrapper-Dw-fp1HD.js";import"./Button-Cw41h4HY.js";import"./Checkbox-D1pvv4qW.js";import"./Chip-3C-V2Up1.js";import{u as J,B as K}from"./DatePicker-CpUyKBJG.js";import"./Grid-CahVCsyo.js";import"./Currency-C5VfasqZ.js";import"./Input-DPazXVYN.js";import"./Percent-BfN4TVBm.js";import"./TextArea-CBdRt04H.js";import"./enqueueSnackbar-GVOas7Gu.js";import{T as W}from"./Typography-C1g_3yIv.js";import{B as y}from"./Box-cOIccGF-.js";import"./index-DfBNxlIc.js";import"./useOnHover-B5yjJnBG.js";import"./styled-DMCGyrn8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BSWZnpwu.js";import"./createTheme-C-bbEhjH.js";import"./Tooltip-DEIsbpBF.js";import"./index-Dx556MhY.js";import"./useTheme-CD2qRrbv.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./Typography-DTLcFDMd.js";import"./index-CYIh5gUh.js";import"./palette-D2hGRGzw.js";import"./GlobalStyles-Dm_UTwER.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-BJNoRnGI.js";import"./assertThisInitialized-B9jnkVVz.js";import"./FormControlLabel-CkfyWINj.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-CbG_DwGs.js";import"./styled-BFfojB-k.js";import"./createSvgIcon-BSw8Ufc7.js";import"./withBaseInput-K4VB_GuN.js";import"./Paper-BeOq4TRm.js";import"./index-Beu9b4Vr.js";import"./react-number-format.es-vn8TvMxN.js";import"./index-Bk1RaGfa.js";const Z=({label:i,onRemove:t})=>{const o=p.useCallback(e=>{e==null||e.stopPropagation(),e==null||e.preventDefault(),t&&t()},[t]);return n.jsxs(y,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:"24px",borderRadius:"20px",backgroundColor:"charcoal.10",color:"text.main",fontSize:"12px",lineHeight:"16px",padding:"0 8px",cursor:"pointer"},children:[i,n.jsx(y,{onMouseDown:o,children:n.jsx(N,{icon:z.Close1,size:12,color:"text.main",sx:{marginLeft:"4px",cursor:"pointer"}})})]})};try{SelectItemChip.displayName="SelectItemChip",SelectItemChip.__docgenInfo={description:"",displayName:"SelectItemChip",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}}}}}catch{}const s=i=>{const{value:t,options:o,onChange:e,placeholder:c,defaultActiveFirstOption:C,renderValue:b,...L}=i,[l,x]=p.useState(t||[]),q=p.useRef(!1),{handleGetOptionLabel:O,handleGetOptionValue:m,handleGetOptionDisabled:w,getOptionFromValue:j}=J(i);p.useEffect(()=>{x(t||[])},[t]);const A=p.useCallback(a=>!l||!(l!=null&&l.length)?!1:l.includes(a),[l,m]),u=p.useCallback(a=>{let r=[...l];r.includes(a)?r=r.filter(f=>f!==a):r.push(a),x(r),e&&e(r)},[l,x,e]),T=p.useCallback(a=>{const r=!a||(a==null?void 0:a.length)===0;if(r&&c)return n.jsx(W,{variant:"bodyR",color:"charcoal.light",children:c});if(r)return null;const f=[],R=[];for(const v of a){const V=j(v);V&&(R.push(V),f.push(n.jsx(Z,{label:O(V),onRemove:()=>u(v)},v)))}return b?b(a,R):f},[O,c,j,b,u]),M=p.useCallback(()=>{if(o.length===0||l&&l.length>0)return;const a=o[0],r=m(a);u(r)},[l,o,m,u]);return p.useEffect(()=>{C&&o.length>0&&(q.current||(q.current=!0,M()))},[o,C,M,l]),n.jsx(K,{...L,multiple:!0,value:l,options:o,getOptionLabel:O,getOptionValue:m,getOptionDisabled:w,onChange:u,renderSelectedValue:T,getValueSelected:A,placeholder:c})};s.defaultProps={labelPosition:"top",options:[],maxListHeight:144};try{s.displayName="MultiSelect",s.__docgenInfo={description:"",displayName:"MultiSelect",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string[]) => void"}},renderValue:{defaultValue:null,description:"",name:"renderValue",required:!1,type:{name:"(value: string[], selectedOptions: any[]) => ReactNode"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"(option: any) => string"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"(option: any) => string"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"(option: any) => boolean"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"(option: any, props: RenderOptionProps) => ReactNode"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"",name:"onHover",required:!1,type:{name:"(hovered: boolean) => void"}},sx:{defaultValue:null,description:"Style props for the container",name:"sx",required:!1,type:{name:"SxProps"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'},{value:'"success"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:`StandardSelectOption accepts label, value, and disabled,
or you can provide a custom list of options and utilize the getOptionLabel, getOptionValue, and getOptionDisabled methods.`,name:"options",required:!0,type:{name:"any[] | StandardSelectOption[]"}},defaultActiveFirstOption:{defaultValue:null,description:"",name:"defaultActiveFirstOption",required:!1,type:{name:"boolean"}},checkBoxSelection:{defaultValue:null,description:"",name:"checkBoxSelection",required:!1,type:{name:"boolean"}},maxListHeight:{defaultValue:null,description:"",name:"maxListHeight",required:!1,type:{name:"string | number"}}}}}catch{}const Je={title:"Example/Select/MultiSelect",component:s,parameters:{layout:"centered",docs:{source:{transform:S("MultiSelect")}}},tags:["autodocs"],argTypes:{}},d={args:{...s.defaultProps,label:"Multi Select",placeholder:"Select many options",helperText:"Select many options",value:["option1","option2","option3","option4"],options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"}]}},Q=`(option: any, { label, value }: any) => (
    <Box
      key={value}
      sx={{
        height: "40px",
        display: "flex",
        gap: "8px",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Avatar text={option?.user} />
      {label}
    </Box>
  )`,g={parameters:{layout:"centered",docs:{source:{transform:S("MultiSelect",{map:{renderOption:Q}})}}},render:i=>n.jsx(s,{...i,renderOption:(t,{label:o,value:e})=>n.jsxs(y,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:[n.jsx(G,{text:t==null?void 0:t.user}),o]},e)}),args:{...s.defaultProps,...d.args,label:"Custom Option Renderer",options:[{user:"JD",label:"Option 1",value:"option1"},{user:"CD",label:"Option 2",value:"option2"},{user:"MZ",label:"Option 3",value:"option3"},{user:"KN",label:"Option 4",value:"option4"},{user:"SE",label:"Option 5",value:"option5"}],renderOption:()=>n.jsx(n.Fragment,{})}},U=`(value: string[], selectedOptions: any[]) => (
    <Box
      key={value?.length}
      sx={{
        height: "40px",
        display: "flex",
        gap: "8px",
        width: "100%",
        alignItems: "center",
      }}
    >
      {selectedOptions?.map((opt: any) => (
        <Icon key={opt?.icon} icon={opt?.icon} />
      ))}
    </Box>
  )`,h={parameters:{layout:"centered",docs:{source:{transform:S("MultiSelect",{map:{renderValue:U}})}}},render:i=>n.jsx(s,{...i,renderValue:(t,o)=>n.jsx(y,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:o==null?void 0:o.map(e=>n.jsx(N,{icon:e==null?void 0:e.icon},e==null?void 0:e.icon))},t==null?void 0:t.length)}),args:{...s.defaultProps,id:"Select",label:"Custom Option Renderer",placeholder:"Placeholder",labelPosition:"top",value:["option1","option2","option3","option4","option5"],options:[{icon:"HappyEmoji",label:"Option 1",value:"option1"},{icon:"SadEmoji",label:"Option 2",value:"option2"},{icon:"Hammer",label:"Option 3",value:"option3"},{icon:"Star",label:"Option 4",value:"option4"},{icon:"Heart",label:"Option 5",value:"option5"}],renderValue:()=>n.jsx(n.Fragment,{})}};var I,_,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...MultiSelect.defaultProps,
    label: "Multi Select",
    placeholder: "Select many options",
    helperText: "Select many options",
    value: ["option1", "option2", "option3", "option4"],
    options: [{
      label: "Option 1",
      value: "option1"
    }, {
      label: "Option 2",
      value: "option2"
    }, {
      label: "Option 3",
      value: "option3"
    }, {
      label: "Option 4",
      value: "option4"
    }]
  }
}`,...(P=(_=d.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var k,D,B;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            renderOption: RenderOptionCodeSample
          }
        })
      }
    }
  },
  render: args => {
    return <MultiSelect {...args} renderOption={(option: any, {
      label,
      value
    }: any) => <Box key={value} sx={{
      height: "40px",
      display: "flex",
      gap: "8px",
      width: "100%",
      alignItems: "center"
    }}>
            <Avatar text={option?.user} />
            {label}
          </Box>} />;
  },
  args: {
    ...MultiSelect.defaultProps,
    ...Default.args,
    label: "Custom Option Renderer",
    options: [{
      user: "JD",
      label: "Option 1",
      value: "option1"
    }, {
      user: "CD",
      label: "Option 2",
      value: "option2"
    }, {
      user: "MZ",
      label: "Option 3",
      value: "option3"
    }, {
      user: "KN",
      label: "Option 4",
      value: "option4"
    }, {
      user: "SE",
      label: "Option 5",
      value: "option5"
    }],
    renderOption: () => <></>
  }
}`,...(B=(D=g.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var E,H,F;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            renderValue: RenderValueCodeSample
          }
        })
      }
    }
  },
  render: args => {
    return <MultiSelect {...args} renderValue={(value: string[], selectedOptions: any) => {
      return <Box key={value?.length} sx={{
        height: "40px",
        display: "flex",
        gap: "8px",
        width: "100%",
        alignItems: "center"
      }}>
              {selectedOptions?.map((opt: any) => <Icon key={opt?.icon} icon={opt?.icon} />)}
            </Box>;
    }} />;
  },
  args: {
    ...MultiSelect.defaultProps,
    id: "Select",
    label: "Custom Option Renderer",
    placeholder: "Placeholder",
    labelPosition: "top",
    value: ["option1", "option2", "option3", "option4", "option5"],
    options: [{
      icon: "HappyEmoji",
      label: "Option 1",
      value: "option1"
    }, {
      icon: "SadEmoji",
      label: "Option 2",
      value: "option2"
    }, {
      icon: "Hammer",
      label: "Option 3",
      value: "option3"
    }, {
      icon: "Star",
      label: "Option 4",
      value: "option4"
    }, {
      icon: "Heart",
      label: "Option 5",
      value: "option5"
    }],
    renderValue: () => <></>
  }
}`,...(F=(H=h.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};const Ke=["Default","CustomOptionRenderer","CustomValueRenderer"];export{g as CustomOptionRenderer,h as CustomValueRenderer,d as Default,Ke as __namedExportsOrder,Je as default};
