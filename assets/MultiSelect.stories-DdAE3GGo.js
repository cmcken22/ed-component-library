import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{c as b}from"./commonArgTypes-Cz1rbySM.js";import{s as v}from"./index-DlyO01os.js";import{A as H}from"./Avatar-CUxUFj2W.js";import{C as I}from"./Chip-C_rATr5i.js";import{a as L}from"./Icon.types-Cts1U0M4.js";import{m as r,j as G}from"./Button-BGo3q6E9.js";import{T as W}from"./Typography-BXdRB8J7.js";import{B as i}from"./Box-gQIt9B05.js";import"./index-Dl6G-zuu.js";import"./index-DGPhUUWW.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-CxQfeomc.js";import"./useOnHover-DcG81d-b.js";import"./testIds-CT2jQqrK.js";import"./Tooltip-DuZ10qG3.js";import"./index-CiDPmov_.js";import"./index-B-KJ_PcS.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./inheritsLoose-B7h9gheN.js";import"./Stack-l5PVF6Ai.js";import"./styled-CE3BHGdM.js";import"./index-CZ29VMm6.js";import"./Typography-u1033W3R.js";import"./palette-CESXTxp7.js";import"./ThemeWrapper-p027yzCS.js";import"./GlobalStyles-CgXowqDm.js";import"./DatePicker-Bgh_D4xi.js";import"./index-Beu9b4Vr.js";import"./Typography-rB6r_AZO.js";import"./createSvgIcon-D2rEfC9A.js";import"./ButtonBase-lJFSTU0I.js";import"./assertThisInitialized-B9jnkVVz.js";import"./useCommonOnChangeHandler-DfyMK7Qn.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DFVa8SY2.js";import"./Checkbox-D1dTJqUW.js";import"./FormControlLabel-QMhEfIZX.js";import"./DateField-CGsaAH1l.js";import"./DateRangeField-BeduJNlo.js";import"./FileDropZone-CU33z5_1.js";import"./Grid-CCc2OB1M.js";import"./Input-D9PB90JL.js";import"./TextArea-r82CavVh.js";import"./ProgressBar-abn_nouz.js";import"./RadioButton.types-wYdjOlzo.js";const x=t=>{let a="[";const o=t[0],e=t[t.length-1];return o&&(a+=`{
      label: "${o.label}",
      value: "${o.value}",
    },
`),e&&(a+=`    ...
`,a+=`    {
      label: "${e.label}",
      value: "${e.value}",
    },
`),a+="  ]",a},Ie={title:"Example/Select/MultiSelect",component:r,parameters:{layout:"centered",docs:{source:{transform:v("MultiSelect",{map:{options:x}})}}},tags:["autodocs"],argTypes:{...b.onChange,...b.status}},l={args:{...r.defaultProps,label:"Multi Select",placeholder:"Select many options",helperText:"Select many options",tooltip:"Tooltip",value:["option1","option2","option3","option4"],options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"},{label:"Option 5",value:"option5"},{label:"Option 6",value:"option6"},{label:"Option 7",value:"option7"},{label:"Option 8",value:"option8"},{label:"Option 9",value:"option9"},{label:"Option 10",value:"option10"},{label:"Option 11",value:"option11"},{label:"Option 12",value:"option12"}]}},p={args:{...l.args,allowClear:!0}},s={args:{...l.args,ChipProps:{type:"positive",variant:"outlined"}}},$=`(option: any, { label, value }: any) => (
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
  )`,u={parameters:{layout:"centered",docs:{source:{transform:v("MultiSelect",{map:{renderOption:$,options:x}})}}},render:t=>n.jsx(r,{...t,renderOption:(a,{label:o,value:e})=>n.jsxs(i,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:[n.jsx(H,{text:a==null?void 0:a.user}),o]},e)}),args:{...r.defaultProps,...l.args,label:"Custom Option Renderer",options:[{user:"JD",label:"Option 1",value:"option1"},{user:"CD",label:"Option 2",value:"option2"},{user:"MZ",label:"Option 3",value:"option3"},{user:"KN",label:"Option 4",value:"option4"},{user:"SE",label:"Option 5",value:"option5"}],renderOption:()=>n.jsx(n.Fragment,{})}},J=`(value: string[], selectedOptions: any[]) => (
    <OverflowRowCounter>
      {selectedOptions?.map((opt: any) => (
        <Icon key={opt?.icon} icon={opt?.icon} />
      ))}
    </OverflowRowCounter>
  )`,d={parameters:{layout:"centered",docs:{source:{transform:v("MultiSelect",{map:{renderValue:J,options:x}})}}},render:t=>n.jsx(r,{...t,renderValue:(a,o)=>n.jsx(G,{children:o==null?void 0:o.map(e=>n.jsx(L,{icon:e==null?void 0:e.icon},e==null?void 0:e.icon))})}),args:{...r.defaultProps,id:"Select",label:"Custom Option Renderer",placeholder:"Placeholder",labelPosition:"top",value:["option1","option2","option3","option4","option5","option6","option7"],options:[{icon:"HappyEmoji",label:"Option 1",value:"option1"},{icon:"SadEmoji",label:"Option 2",value:"option2"},{icon:"Hammer",label:"Option 3",value:"option3"},{icon:"Star",label:"Option 4",value:"option4"},{icon:"Heart",label:"Option 5",value:"option5"},{icon:"User",label:"Option 6",value:"option6"},{icon:"ToolsV2",label:"Option 7",value:"option7"}],renderValue:()=>n.jsx(n.Fragment,{})}},c={render:t=>n.jsx(i,{sx:{height:"100px",width:"300px"},children:n.jsx(r,{...t})}),args:{...l.args,value:["option1","option2","option3","option4","option5","option6","option7","option8","option9","option10","option11","option12"],fullWidth:!0,id:"Select",label:"",helperText:"",placeholder:"Placeholder",labelPosition:"top",variant:"table",wrap:!0}},K=`(_, selectedOptions: any) => {
    return (
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box sx={{ flexGrow: 0 }}>
          <Typography preventTextSelection variant="bodyR">
            Status
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <OverflowRowCounter counterPosition="left">
            {selectedOptions?.map((opt: any) => (
              <Chip
                key={opt?.value}
                type={opt?.status}
                text={opt?.label}
              />
            ))}
          </OverflowRowCounter>
        </Box>
      </Box>
    );
  }`,m={parameters:{layout:"centered",docs:{source:{transform:v("MultiSelect",{map:{renderValue:K,options:x}})}}},render:t=>n.jsx(i,{sx:{height:"100px",width:"300px"},children:n.jsx(r,{...t,renderValue:(a,o)=>n.jsxs(i,{sx:{display:"flex",gap:"8px",overflow:"hidden",width:"100%"},children:[n.jsx(i,{sx:{flexGrow:0},children:n.jsx(W,{preventTextSelection:!0,variant:"bodyR",children:"Status"})}),n.jsx(i,{sx:{flexGrow:1,width:"100%",overflow:"hidden",position:"relative"},children:n.jsx(G,{counterPosition:"left",children:o==null?void 0:o.map(e=>n.jsx(I,{type:e==null?void 0:e.status,text:e==null?void 0:e.label},e==null?void 0:e.value))})})]})})}),args:{...l.args,value:["option1","option2","option3","option4","option5"],options:[{status:"positive",label:"Option 1",value:"option1"},{status:"negative",icon:"SadEmoji",label:"Option 2",value:"option2"},{status:"warning",label:"Option 3",value:"option3"},{status:"pending",label:"Option 4",value:"option4"},{status:"neutral",label:"Option 5",value:"option5"},{status:"positive",label:"Option 6",value:"option6"},{status:"negative",label:"Option 7",value:"option7"}],fullWidth:!0,id:"Select",label:"",helperText:"",placeholder:"Status",labelPosition:"top",renderValue:()=>n.jsx(n.Fragment,{})}};var O,g,h;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...MultiSelect.defaultProps,
    label: "Multi Select",
    placeholder: "Select many options",
    helperText: "Select many options",
    tooltip: "Tooltip",
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
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,S,y;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    allowClear: true
  }
}`,...(y=(S=p.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var w,C,j;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    ChipProps: {
      type: "positive",
      variant: "outlined"
    }
  }
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var R,T,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            renderOption: RenderOptionCodeSample,
            options: renderFirstAndLastOptions
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
}`,...(B=(T=u.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var P,M,V;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            renderValue: RenderValueCodeSample,
            options: renderFirstAndLastOptions
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
}`,...(V=(M=d.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var F,A,D;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var E,k,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            renderValue: StatusFilterCodeSample,
            options: renderFirstAndLastOptions
          }
        })
      }
    }
  },
  render: args => <Box sx={{
    height: "100px",
    width: "300px"
  }}>
      <MultiSelect {...args} renderValue={(_, selectedOptions: any) => {
      return <Box sx={{
        display: "flex",
        gap: "8px",
        overflow: "hidden",
        width: "100%"
      }}>
              <Box sx={{
          flexGrow: 0
        }}>
                <Typography preventTextSelection variant="bodyR">
                  Status
                </Typography>
              </Box>
              <Box sx={{
          flexGrow: 1,
          width: "100%",
          overflow: "hidden",
          position: "relative"
        }}>
                <OverflowRowCounter counterPosition="left">
                  {selectedOptions?.map((opt: any) => <Chip key={opt?.value} type={opt?.status} text={opt?.label} />)}
                </OverflowRowCounter>
              </Box>
            </Box>;
    }} />
    </Box>,
  args: {
    ...Default.args,
    value: ["option1", "option2", "option3", "option4", "option5"],
    options: [{
      status: "positive",
      label: "Option 1",
      value: "option1"
    }, {
      status: "negative",
      icon: "SadEmoji",
      label: "Option 2",
      value: "option2"
    }, {
      status: "warning",
      label: "Option 3",
      value: "option3"
    }, {
      status: "pending",
      label: "Option 4",
      value: "option4"
    }, {
      status: "neutral",
      label: "Option 5",
      value: "option5"
    }, {
      status: "positive",
      label: "Option 6",
      value: "option6"
    }, {
      status: "negative",
      label: "Option 7",
      value: "option7"
    }],
    fullWidth: true,
    id: "Select",
    label: "",
    helperText: "",
    placeholder: "Status",
    labelPosition: "top",
    renderValue: () => <></>
  }
}`,...(_=(k=m.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const Le=["Default","AllowClear","AlternativeChipType","CustomOptionRenderer","CustomValueRenderer","TableVariant","StatusFilter"];export{p as AllowClear,s as AlternativeChipType,u as CustomOptionRenderer,d as CustomValueRenderer,l as Default,m as StatusFilter,c as TableVariant,Le as __namedExportsOrder,Ie as default};
