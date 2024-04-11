import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{s as d}from"./index-B_pG5fU1.js";import{A as T}from"./Avatar-q5AfrGxs.js";import{C as B}from"./Chip-Bp5mSx8e.js";import{a as V}from"./Icon.types-Nlgj6b-j.js";import{M as t,O as P}from"./Button-1BO6s6Nr.js";import{T as E}from"./Typography-ad_3Alod.js";import{B as i}from"./Box-QN4gLg71.js";import"./index-Dl6G-zuu.js";import"./index-CcbsCGxW.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./useOnHover-B5yjJnBG.js";import"./Tooltip-DP6TBYy0.js";import"./index-CxDPfwJT.js";import"./useTheme-zj3HIc-m.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DfaGUJ00.js";import"./Typography-DbM4VYj_.js";import"./palette-DCNmPToj.js";import"./ThemeWrapper-DyfggUWY.js";import"./GlobalStyles-B4XTyhQR.js";import"./Checkbox-CIiCrQq3.js";import"./FormControlLabel-EfhPbLgJ.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-ByMLqIOY.js";import"./styled-CyX8x3PR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./createSvgIcon-By8APFNA.js";import"./helpers-Bcpe1sWR.js";import"./Paper-CwDAdALs.js";import"./index-Beu9b4Vr.js";import"./Grid-CwkbpFXQ.js";import"./Currency-CK165PQJ.js";import"./react-number-format.es-DkkvJ1RT.js";import"./Input-DuqdUgPh.js";import"./index-BqFaNRbK.js";import"./Percent-CUpWNMWo.js";import"./TextArea-DbFWoioo.js";const Cn={title:"Example/Select/MultiSelect",component:t,parameters:{layout:"centered",docs:{source:{transform:d("MultiSelect")}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"}}},l={args:{...t.defaultProps,label:"Multi Select",placeholder:"Select many options",helperText:"Select many options",value:["option1","option2","option3","option4"],options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"},{label:"Option 5",value:"option5"},{label:"Option 6",value:"option6"},{label:"Option 7",value:"option7"},{label:"Option 8",value:"option8"},{label:"Option 9",value:"option9"},{label:"Option 10",value:"option10"},{label:"Option 11",value:"option11"},{label:"Option 12",value:"option12"}]}},D=`(option: any, { label, value }: any) => (
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
  )`,p={parameters:{layout:"centered",docs:{source:{transform:d("MultiSelect",{map:{renderOption:D}})}}},render:a=>n.jsx(t,{...a,renderOption:(r,{label:e,value:o})=>n.jsxs(i,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:[n.jsx(T,{text:r==null?void 0:r.user}),e]},o)}),args:{...t.defaultProps,...l.args,label:"Custom Option Renderer",options:[{user:"JD",label:"Option 1",value:"option1"},{user:"CD",label:"Option 2",value:"option2"},{user:"MZ",label:"Option 3",value:"option3"},{user:"KN",label:"Option 4",value:"option4"},{user:"SE",label:"Option 5",value:"option5"}],renderOption:()=>n.jsx(n.Fragment,{})}},F=`(value: string[], selectedOptions: any[]) => (
    <OverflowRowCounter>
      {selectedOptions?.map((opt: any) => (
        <Icon key={opt?.icon} icon={opt?.icon} />
      ))}
    </OverflowRowCounter>
  )`,s={parameters:{layout:"centered",docs:{source:{transform:d("MultiSelect",{map:{renderValue:F}})}}},render:a=>n.jsx(t,{...a,renderValue:(r,e)=>n.jsx(P,{children:e==null?void 0:e.map(o=>n.jsx(V,{icon:o==null?void 0:o.icon},o==null?void 0:o.icon))})}),args:{...t.defaultProps,id:"Select",label:"Custom Option Renderer",placeholder:"Placeholder",labelPosition:"top",value:["option1","option2","option3","option4","option5","option6","option7"],options:[{icon:"HappyEmoji",label:"Option 1",value:"option1"},{icon:"SadEmoji",label:"Option 2",value:"option2"},{icon:"Hammer",label:"Option 3",value:"option3"},{icon:"Star",label:"Option 4",value:"option4"},{icon:"Heart",label:"Option 5",value:"option5"},{icon:"User",label:"Option 6",value:"option6"},{icon:"ToolsV2",label:"Option 7",value:"option7"}],renderValue:()=>n.jsx(n.Fragment,{})}},u={render:a=>n.jsx(i,{sx:{height:"100px",width:"300px"},children:n.jsx(t,{...a})}),args:{...l.args,value:["option1","option2","option3","option4","option5","option6","option7","option8","option9","option10","option11","option12"],fullWidth:!0,id:"Select",label:"",helperText:"",placeholder:"Placeholder",labelPosition:"top",variant:"table",wrap:!0}},c={render:a=>n.jsx(i,{sx:{height:"100px",width:"300px"},children:n.jsx(t,{...a,renderValue:(r,e)=>n.jsxs(i,{sx:{display:"flex",gap:"8px",overflow:"hidden",width:"100%"},children:[n.jsx(i,{sx:{flexGrow:0},children:n.jsx(E,{preventTextSelection:!0,variant:"bodyR",children:"Status"})}),n.jsx(i,{sx:{width:"100%",flexGrow:1,overflow:"hidden",position:"relative"},children:n.jsx(P,{counterPosition:"left",children:e==null?void 0:e.map(o=>n.jsx(B,{type:o==null?void 0:o.status,text:o==null?void 0:o.label}))})})]})})}),args:{...l.args,value:["option1","option2","option3","option4","option5"],options:[{status:"positive",label:"Option 1",value:"option1"},{status:"negative",icon:"SadEmoji",label:"Option 2",value:"option2"},{status:"warning",label:"Option 3",value:"option3"},{status:"pending",label:"Option 4",value:"option4"},{status:"neutral",label:"Option 5",value:"option5"},{status:"positive",label:"Option 6",value:"option6"},{status:"negative",label:"Option 7",value:"option7"}],fullWidth:!0,id:"Select",label:"",helperText:"",placeholder:"Status",labelPosition:"top"}};var m,v,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,O,h;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var w,y,C;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(y=u.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var j,R,M;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Box sx={{
    height: "100px",
    width: "300px"
    // backgroundColor: "rgba(255, 0, 255, 0.1)",
  }}>
      <MultiSelect {...args} renderValue={(_, selectedOptions: any) => {
      return <Box sx={{
        display: "flex",
        // flexDirection: "row",
        gap: "8px",
        overflow: "hidden",
        width: "100%"
        // width: "200px",
      }}>
              <Box sx={{
          // width: "41px",
          flexGrow: 0
        }}>
                <Typography preventTextSelection variant="bodyR">
                  Status
                </Typography>
              </Box>
              <Box sx={{
          width: "100%",
          flexGrow: 1,
          overflow: "hidden",
          // width: "calc(100% - 43px)",
          position: "relative"
        }}>
                <OverflowRowCounter counterPosition="left">
                  {selectedOptions?.map((opt: any) => <Chip type={opt?.status} text={opt?.label} />)}
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
    labelPosition: "top"
  }
}`,...(M=(R=c.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};const jn=["Default","CustomOptionRenderer","CustomValueRenderer","TableVariant","StatusFilter"];export{p as CustomOptionRenderer,s as CustomValueRenderer,l as Default,c as StatusFilter,u as TableVariant,jn as __namedExportsOrder,Cn as default};
