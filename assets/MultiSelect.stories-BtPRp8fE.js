import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{s as c}from"./index-B_pG5fU1.js";import{A as M}from"./Avatar-DAk9YqhF.js";import{C as V}from"./Chip-D9EWMA4o.js";import{a as P}from"./Icon.types-Ba5UCeQa.js";import{M as t,O as T}from"./Button-qCeSoY-y.js";import{T as E}from"./Typography-ClegP6xv.js";import{B as i}from"./Box-DPTDcbim.js";import"./index-Dl6G-zuu.js";import"./index-DFf-bhEl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DtgTEXL7.js";import"./useOnHover-DcG81d-b.js";import"./testIds-Bl6124vV.js";import"./Tooltip-CNbpjzJ1.js";import"./Stack-B_sc2yyH.js";import"./styled-DlwMyq9x.js";import"./index-CpmRWZ9e.js";import"./index-_OcG2YHj.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./inheritsLoose-B7h9gheN.js";import"./Typography-BGHga1vv.js";import"./palette-CiKahY_l.js";import"./ThemeWrapper-BC0j1MWR.js";import"./GlobalStyles-BkdV5ugX.js";import"./DatePicker-D4dhWDwh.js";import"./index-Beu9b4Vr.js";import"./Typography-C8COxrag.js";import"./createSvgIcon-B9tpKWAV.js";import"./ButtonBase-CdxKgBBF.js";import"./assertThisInitialized-B9jnkVVz.js";import"./useCommonOnChangeHandler-UR5sVcBX.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-CXsvuMT9.js";import"./Checkbox-DbV7KlYF.js";import"./FormControlLabel-BLlKfmfO.js";import"./DateField-D7WHR2fg.js";import"./DateRangeField-C_bIiRH5.js";import"./Grid-BJJaesu6.js";import"./Input-zE8CS11a.js";import"./TextArea-Bv6z7v0Z.js";import"./RadioButton.types-BELa6ELL.js";const Re={title:"Example/Select/MultiSelect",component:t,parameters:{layout:"centered",docs:{source:{transform:c("MultiSelect")}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"}}},l={args:{...t.defaultProps,label:"Multi Select",placeholder:"Select many options",helperText:"Select many options",tooltip:"Tooltip",value:["option1","option2","option3","option4"],options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"},{label:"Option 5",value:"option5"},{label:"Option 6",value:"option6"},{label:"Option 7",value:"option7"},{label:"Option 8",value:"option8"},{label:"Option 9",value:"option9"},{label:"Option 10",value:"option10"},{label:"Option 11",value:"option11"},{label:"Option 12",value:"option12"}]}},F=`(option: any, { label, value }: any) => (
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
  )`,p={parameters:{layout:"centered",docs:{source:{transform:c("MultiSelect",{map:{renderOption:F}})}}},render:a=>e.jsx(t,{...a,renderOption:(r,{label:o,value:n})=>e.jsxs(i,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:[e.jsx(M,{text:r==null?void 0:r.user}),o]},n)}),args:{...t.defaultProps,...l.args,label:"Custom Option Renderer",options:[{user:"JD",label:"Option 1",value:"option1"},{user:"CD",label:"Option 2",value:"option2"},{user:"MZ",label:"Option 3",value:"option3"},{user:"KN",label:"Option 4",value:"option4"},{user:"SE",label:"Option 5",value:"option5"}],renderOption:()=>e.jsx(e.Fragment,{})}},D=`(value: string[], selectedOptions: any[]) => (
    <OverflowRowCounter>
      {selectedOptions?.map((opt: any) => (
        <Icon key={opt?.icon} icon={opt?.icon} />
      ))}
    </OverflowRowCounter>
  )`,s={parameters:{layout:"centered",docs:{source:{transform:c("MultiSelect",{map:{renderValue:D}})}}},render:a=>e.jsx(t,{...a,renderValue:(r,o)=>e.jsx(T,{children:o==null?void 0:o.map(n=>e.jsx(P,{icon:n==null?void 0:n.icon},n==null?void 0:n.icon))})}),args:{...t.defaultProps,id:"Select",label:"Custom Option Renderer",placeholder:"Placeholder",labelPosition:"top",value:["option1","option2","option3","option4","option5","option6","option7"],options:[{icon:"HappyEmoji",label:"Option 1",value:"option1"},{icon:"SadEmoji",label:"Option 2",value:"option2"},{icon:"Hammer",label:"Option 3",value:"option3"},{icon:"Star",label:"Option 4",value:"option4"},{icon:"Heart",label:"Option 5",value:"option5"},{icon:"User",label:"Option 6",value:"option6"},{icon:"ToolsV2",label:"Option 7",value:"option7"}],renderValue:()=>e.jsx(e.Fragment,{})}},u={render:a=>e.jsx(i,{sx:{height:"100px",width:"300px"},children:e.jsx(t,{...a})}),args:{...l.args,value:["option1","option2","option3","option4","option5","option6","option7","option8","option9","option10","option11","option12"],fullWidth:!0,id:"Select",label:"",helperText:"",placeholder:"Placeholder",labelPosition:"top",variant:"table",wrap:!0}},k=`(_, selectedOptions: any) => {
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
  }`,d={parameters:{layout:"centered",docs:{source:{transform:c("MultiSelect",{map:{renderValue:k}})}}},render:a=>e.jsx(i,{sx:{height:"100px",width:"300px"},children:e.jsx(t,{...a,renderValue:(r,o)=>e.jsxs(i,{sx:{display:"flex",gap:"8px",overflow:"hidden",width:"100%"},children:[e.jsx(i,{sx:{flexGrow:0},children:e.jsx(E,{preventTextSelection:!0,variant:"bodyR",children:"Status"})}),e.jsx(i,{sx:{flexGrow:1,width:"100%",overflow:"hidden",position:"relative"},children:e.jsx(T,{counterPosition:"left",children:o==null?void 0:o.map(n=>e.jsx(V,{type:n==null?void 0:n.status,text:n==null?void 0:n.label},n==null?void 0:n.value))})})]})})}),args:{...l.args,value:["option1","option2","option3","option4","option5"],options:[{status:"positive",label:"Option 1",value:"option1"},{status:"negative",icon:"SadEmoji",label:"Option 2",value:"option2"},{status:"warning",label:"Option 3",value:"option3"},{status:"pending",label:"Option 4",value:"option4"},{status:"neutral",label:"Option 5",value:"option5"},{status:"positive",label:"Option 6",value:"option6"},{status:"negative",label:"Option 7",value:"option7"}],fullWidth:!0,id:"Select",label:"",helperText:"",placeholder:"Status",labelPosition:"top",renderValue:()=>e.jsx(e.Fragment,{})}};var m,v,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,O,h;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(O=p.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var g,f,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,w,C;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var j,R,B;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            renderValue: StatusFilterCodeSample
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
}`,...(B=(R=d.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const Be=["Default","CustomOptionRenderer","CustomValueRenderer","TableVariant","StatusFilter"];export{p as CustomOptionRenderer,s as CustomValueRenderer,l as Default,d as StatusFilter,u as TableVariant,Be as __namedExportsOrder,Re as default};
