import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{s as u}from"./index-B_pG5fU1.js";import{A as M}from"./Avatar-C3F4X0SX.js";import{a as j}from"./Icon.types-C28-lL-C.js";import{M as e,O as R}from"./Button-BZwuvSDA.js";import{B as C}from"./Box-C-V--YKQ.js";import"./index-Dl6G-zuu.js";import"./index-DCyYi5Uh.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./useOnHover-B5yjJnBG.js";import"./Typography-CDWy3aSQ.js";import"./Typography-DbM4VYj_.js";import"./Typography-B6I9QrUF.js";import"./Tooltip-C4Gwpmhi.js";import"./index-CxDPfwJT.js";import"./useTheme-BgX8hDp8.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./inheritsLoose-B7h9gheN.js";import"./index-BEf2p8cz.js";import"./palette-C9S7df13.js";import"./ThemeWrapper-CQqLz_aH.js";import"./GlobalStyles-Dmpyt81I.js";import"./Checkbox-CVpeMM0H.js";import"./FormControlLabel-BEhHtoBS.js";import"./useFormControl-EHw8eS4L.js";import"./styled-DWjFcNbo.js";import"./assertThisInitialized-B9jnkVVz.js";import"./createSvgIcon-BO828Ki2.js";import"./Chip-uN1PIWZu.js";import"./helpers-CtoIX1AE.js";import"./Paper-Hs7e5W89.js";import"./index-Beu9b4Vr.js";import"./Grid-BGIExXJq.js";import"./Currency-D8dh0agi.js";import"./react-number-format.es-DkkvJ1RT.js";import"./Input-Yrfz6Brf.js";import"./index-Bk1RaGfa.js";import"./Percent-C7luUz9t.js";import"./TextArea-CaGIjNi8.js";const go={title:"Example/Select/MultiSelect",component:e,parameters:{layout:"centered",docs:{source:{transform:u("MultiSelect")}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"}}},t={args:{...e.defaultProps,label:"Multi Select",placeholder:"Select many options",helperText:"Select many options",value:["option1","option2","option3","option4"],options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"},{label:"Option 5",value:"option5"},{label:"Option 6",value:"option6"},{label:"Option 7",value:"option7"},{label:"Option 8",value:"option8"},{label:"Option 9",value:"option9"},{label:"Option 10",value:"option10"},{label:"Option 11",value:"option11"},{label:"Option 12",value:"option12"}]}},w=`(option: any, { label, value }: any) => (
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
  )`,r={parameters:{layout:"centered",docs:{source:{transform:u("MultiSelect",{map:{renderOption:w}})}}},render:a=>o.jsx(e,{...a,renderOption:(i,{label:l,value:n})=>o.jsxs(C,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:[o.jsx(M,{text:i==null?void 0:i.user}),l]},n)}),args:{...e.defaultProps,...t.args,label:"Custom Option Renderer",options:[{user:"JD",label:"Option 1",value:"option1"},{user:"CD",label:"Option 2",value:"option2"},{user:"MZ",label:"Option 3",value:"option3"},{user:"KN",label:"Option 4",value:"option4"},{user:"SE",label:"Option 5",value:"option5"}],renderOption:()=>o.jsx(o.Fragment,{})}},P=`(value: string[], selectedOptions: any[]) => (
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
  )`,p={parameters:{layout:"centered",docs:{source:{transform:u("MultiSelect",{map:{renderValue:P}})}}},render:a=>o.jsx(e,{...a,renderValue:(i,l)=>o.jsx(R,{children:l==null?void 0:l.map(n=>o.jsx(j,{icon:n==null?void 0:n.icon},n==null?void 0:n.icon))})}),args:{...e.defaultProps,id:"Select",label:"Custom Option Renderer",placeholder:"Placeholder",labelPosition:"top",value:["option1","option2","option3","option4","option5","option6","option7"],options:[{icon:"HappyEmoji",label:"Option 1",value:"option1"},{icon:"SadEmoji",label:"Option 2",value:"option2"},{icon:"Hammer",label:"Option 3",value:"option3"},{icon:"Star",label:"Option 4",value:"option4"},{icon:"Heart",label:"Option 5",value:"option5"},{icon:"User",label:"Option 6",value:"option6"},{icon:"ToolsV2",label:"Option 7",value:"option7"}],renderValue:()=>o.jsx(o.Fragment,{})}},s={render:a=>o.jsx(C,{sx:{height:"100px",width:"300px"},children:o.jsx(e,{...a})}),args:{...t.args,value:["option1","option2","option3","option4","option5","option6","option7","option8","option9","option10","option11","option12"],fullWidth:!0,id:"Select",label:"",helperText:"",placeholder:"Placeholder",labelPosition:"top",variant:"table",wrap:!0}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var b,v,O;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(O=(v=r.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var x,g,h;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    return <MultiSelect {...args} renderValue={(_, selectedOptions: any) => {
      return <OverflowRowCounter>
              {selectedOptions?.map((opt: any) => <Icon key={opt?.icon} icon={opt?.icon} />)}
            </OverflowRowCounter>;
    }} />;
  },
  args: {
    ...MultiSelect.defaultProps,
    id: "Select",
    label: "Custom Option Renderer",
    placeholder: "Placeholder",
    labelPosition: "top",
    value: ["option1", "option2", "option3", "option4", "option5", "option6", "option7"],
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
    }, {
      icon: "User",
      label: "Option 6",
      value: "option6"
    }, {
      icon: "ToolsV2",
      label: "Option 7",
      value: "option7"
    }],
    renderValue: () => <></>
  }
}`,...(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,f,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const ho=["Default","CustomOptionRenderer","CustomValueRenderer","TableVariant"];export{r as CustomOptionRenderer,p as CustomValueRenderer,t as Default,s as TableVariant,ho as __namedExportsOrder,go as default};
