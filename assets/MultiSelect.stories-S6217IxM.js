import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{s as u}from"./index-B_pG5fU1.js";import{A as M}from"./Avatar-IBObJaJ6.js";import{a as j}from"./Icon.types-Bg_FxVn4.js";import{M as t}from"./DatePicker-eH4B0avm.js";import{B as m}from"./Box-GI0gEbLE.js";import"./index-Dl6G-zuu.js";import"./index-8HRI1sDn.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./useOnHover-B5yjJnBG.js";import"./Typography-CPNth6VQ.js";import"./Typography-DbM4VYj_.js";import"./Typography-SP3Ztg2T.js";import"./Tooltip-CJh6hZtg.js";import"./index-CxDPfwJT.js";import"./useTheme-BpUgHZka.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DPNVsBv0.js";import"./palette-DffXsAfV.js";import"./helpers-DtHNWFAg.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DQSmW7aV.js";import"./createSvgIcon-DJzhYxYh.js";import"./GlobalStyles-lfm5EBAb.js";import"./Button-BVn22Tqx.js";import"./ButtonBase-2lKpUo-h.js";import"./assertThisInitialized-B9jnkVVz.js";import"./ThemeWrapper-kl0zAW7z.js";import"./Checkbox-Din5bU9h.js";import"./FormControlLabel-BEQ-oSee.js";import"./styled-Dq_uxqGx.js";import"./Chip-CZ3RgH3h.js";import"./index-Beu9b4Vr.js";import"./Grid-DnB74UY1.js";import"./Currency-CmkFoGwd.js";import"./react-number-format.es-DkkvJ1RT.js";import"./Input-CENXjZaQ.js";import"./index-Bk1RaGfa.js";import"./Percent-BAMXpoJL.js";import"./TextArea-pw1VhjZv.js";import"./enqueueSnackbar-D04sC6hk.js";const Se={title:"Example/Select/MultiSelect",component:t,parameters:{layout:"centered",docs:{source:{transform:u("MultiSelect")}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"}}},a={args:{...t.defaultProps,label:"Multi Select",placeholder:"Select many options",helperText:"Select many options",value:["option1","option2","option3","option4"],options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"},{label:"Option 5",value:"option5"},{label:"Option 6",value:"option6"},{label:"Option 7",value:"option7"},{label:"Option 8",value:"option8"},{label:"Option 9",value:"option9"},{label:"Option 10",value:"option10"},{label:"Option 11",value:"option11"},{label:"Option 12",value:"option12"}]}},P=`(option: any, { label, value }: any) => (
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
  )`,r={parameters:{layout:"centered",docs:{source:{transform:u("MultiSelect",{map:{renderOption:P}})}}},render:l=>e.jsx(t,{...l,renderOption:(o,{label:i,value:n})=>e.jsxs(m,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:[e.jsx(M,{text:o==null?void 0:o.user}),i]},n)}),args:{...t.defaultProps,...a.args,label:"Custom Option Renderer",options:[{user:"JD",label:"Option 1",value:"option1"},{user:"CD",label:"Option 2",value:"option2"},{user:"MZ",label:"Option 3",value:"option3"},{user:"KN",label:"Option 4",value:"option4"},{user:"SE",label:"Option 5",value:"option5"}],renderOption:()=>e.jsx(e.Fragment,{})}},R=`(value: string[], selectedOptions: any[]) => (
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
  )`,p={parameters:{layout:"centered",docs:{source:{transform:u("MultiSelect",{map:{renderValue:R}})}}},render:l=>e.jsx(t,{...l,renderValue:(o,i)=>e.jsx(m,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:i==null?void 0:i.map(n=>e.jsx(j,{icon:n==null?void 0:n.icon},n==null?void 0:n.icon))},o==null?void 0:o.length)}),args:{...t.defaultProps,id:"Select",label:"Custom Option Renderer",placeholder:"Placeholder",labelPosition:"top",value:["option1","option2","option3","option4","option5"],options:[{icon:"HappyEmoji",label:"Option 1",value:"option1"},{icon:"SadEmoji",label:"Option 2",value:"option2"},{icon:"Hammer",label:"Option 3",value:"option3"},{icon:"Star",label:"Option 4",value:"option4"},{icon:"Heart",label:"Option 5",value:"option5"}],renderValue:()=>e.jsx(e.Fragment,{})}},s={render:l=>e.jsx(m,{sx:{height:"100px",width:"300px"},children:e.jsx(t,{...l})}),args:{...a.args,value:["option1","option2","option3","option4","option5","option6","option7","option8","option9","option10","option11","option12"],fullWidth:!0,id:"Select",label:"",helperText:"",placeholder:"Placeholder",labelPosition:"top",variant:"table",wrap:!0}};var c,d,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    }, {
      label: "Option 5",
      value: "option5"
    }, {
      label: "Option 6",
      value: "option6"
    }, {
      label: "Option 7",
      value: "option7"
    }, {
      label: "Option 8",
      value: "option8"
    }, {
      label: "Option 9",
      value: "option9"
    }, {
      label: "Option 10",
      value: "option10"
    }, {
      label: "Option 11",
      value: "option11"
    }, {
      label: "Option 12",
      value: "option12"
    }]
  }
}`,...(b=(d=a.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var x,v,O;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(O=(v=r.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var g,h,S;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(h=p.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var y,f,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Box sx={{
    height: "100px",
    width: "300px"
    // backgroundColor: "rgba(255, 0, 255, 0.1)",
  }}>
      <MultiSelect {...args} />
    </Box>,
  args: {
    ...Default.args,
    value: ["option1", "option2", "option3", "option4", "option5", "option6", "option7", "option8", "option9", "option10", "option11", "option12"],
    fullWidth: true,
    id: "Select",
    label: "",
    helperText: "",
    placeholder: "Placeholder",
    labelPosition: "top",
    variant: "table",
    wrap: true
  }
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const ye=["Default","CustomOptionRenderer","CustomValueRenderer","TableVariant"];export{r as CustomOptionRenderer,p as CustomValueRenderer,a as Default,s as TableVariant,ye as __namedExportsOrder,Se as default};
