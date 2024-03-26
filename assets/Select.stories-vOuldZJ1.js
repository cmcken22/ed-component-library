import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{s as c}from"./index-B_pG5fU1.js";import{A as I}from"./Avatar-IBObJaJ6.js";import{a as T}from"./Icon.types-Bg_FxVn4.js";import{S as n}from"./DatePicker-eH4B0avm.js";import{B as m}from"./Box-GI0gEbLE.js";import"./index-Dl6G-zuu.js";import"./index-8HRI1sDn.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./useOnHover-B5yjJnBG.js";import"./Typography-CPNth6VQ.js";import"./Typography-DbM4VYj_.js";import"./Typography-SP3Ztg2T.js";import"./Tooltip-CJh6hZtg.js";import"./index-CxDPfwJT.js";import"./useTheme-BpUgHZka.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DPNVsBv0.js";import"./palette-DffXsAfV.js";import"./helpers-DtHNWFAg.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DQSmW7aV.js";import"./createSvgIcon-DJzhYxYh.js";import"./GlobalStyles-lfm5EBAb.js";import"./Button-BVn22Tqx.js";import"./ButtonBase-2lKpUo-h.js";import"./assertThisInitialized-B9jnkVVz.js";import"./ThemeWrapper-kl0zAW7z.js";import"./Checkbox-Din5bU9h.js";import"./FormControlLabel-BEQ-oSee.js";import"./styled-Dq_uxqGx.js";import"./Chip-CZ3RgH3h.js";import"./index-Beu9b4Vr.js";import"./Grid-DnB74UY1.js";import"./Currency-CmkFoGwd.js";import"./react-number-format.es-DkkvJ1RT.js";import"./Input-CENXjZaQ.js";import"./index-Bk1RaGfa.js";import"./Percent-BAMXpoJL.js";import"./TextArea-pw1VhjZv.js";import"./enqueueSnackbar-D04sC6hk.js";const Re={title:"Example/Select/Select",component:n,parameters:{layout:"centered",docs:{source:{transform:c("Select")}}},tags:["autodocs"],argTypes:{status:{options:["error","success","warning"],control:{type:"radio"}}}},a={args:{...n.defaultProps,id:"Select",label:"Label",placeholder:"Placeholder",helperText:"Helper Text",labelPosition:"top",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"},{label:"Option 5",value:"option5"},{label:"Option 6",value:"option6"},{label:"Option 7",value:"option7"},{label:"Option 8",value:"option8"}]}},r={args:{...n.defaultProps,...a.args,labelPosition:"left"}},p={parameters:{layout:"centered",docs:{source:{transform:c("Select",{map:{getOptionLabel:"(option: any) => option.customLabel",getOptionValue:"(option: any) => option.customValue"}})}}},args:{...n.defaultProps,id:"Select",label:"Custom List",placeholder:"Placeholder",labelPosition:"top",getOptionLabel:o=>o.customLabel,getOptionValue:o=>o.customValue,options:[{customLabel:"Option 1",customValue:"option1"},{customLabel:"Option 2",customValue:"option2"},{customLabel:"Option 3",customValue:"option3"},{customLabel:"Option 4",customValue:"option4"},{customLabel:"Option 5",customValue:"option5"}]}},H=`(option: any, { label, value }: any) => (
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
  )`,i={parameters:{layout:"centered",docs:{source:{transform:c("Select",{map:{renderOption:H}})}}},render:o=>e.jsx(n,{...o,renderOption:(l,{label:t,value:E})=>e.jsxs(m,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:[e.jsx(I,{text:l==null?void 0:l.user}),t]},E)}),args:{...n.defaultProps,id:"Select",label:"Custom Option Renderer",placeholder:"Placeholder",labelPosition:"top",options:[{user:"JD",label:"Option 1",value:"option1"},{user:"CD",label:"Option 2",value:"option2"},{user:"MZ",label:"Option 3",value:"option3"},{user:"KN",label:"Option 4",value:"option4"},{user:"SE",label:"Option 5",value:"option5"}],renderOption:()=>e.jsx(e.Fragment,{})}},F=`(value: string, selectedOption: any) => (
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
      <Icon icon={selectedOption?.icon} />
      {selectedOption?.label}
    </Box>
  )`,s={parameters:{layout:"centered",docs:{source:{transform:c("Select",{map:{renderValue:F}})}}},render:o=>e.jsx(n,{...o,renderValue:(l,t)=>e.jsxs(m,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:[e.jsx(T,{icon:t==null?void 0:t.icon}),t==null?void 0:t.label]},l)}),args:{...n.defaultProps,id:"Select",label:"Custom Option Renderer",placeholder:"Placeholder",labelPosition:"top",options:[{icon:"HappyEmoji",label:"Option 1",value:"option1"},{icon:"SadEmoji",label:"Option 2",value:"option2"},{icon:"Hammer",label:"Option 3",value:"option3"},{icon:"Star",label:"Option 4",value:"option4"},{icon:"Heart",label:"Option 5",value:"option5"}],renderValue:()=>e.jsx(e.Fragment,{})}},u={render:o=>e.jsx(m,{sx:{height:"100px",width:"300px"},children:e.jsx(n,{...o})}),args:{...a.args,id:"Select",label:"",helperText:"",placeholder:"Placeholder",labelPosition:"top",variant:"table",fullWidth:!0}};var d,b,O;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Select.defaultProps,
    id: "Select",
    label: "Label",
    placeholder: "Placeholder",
    helperText: "Helper Text",
    labelPosition: "top",
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
    }]
  }
}`,...(O=(b=a.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var g,x,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Select.defaultProps,
    ...Smaple.args,
    labelPosition: "left"
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,S,f;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Select", {
          map: {
            getOptionLabel: "(option: any) => option.customLabel",
            getOptionValue: "(option: any) => option.customValue"
          }
        })
      }
    }
  },
  args: {
    ...Select.defaultProps,
    id: "Select",
    label: "Custom List",
    placeholder: "Placeholder",
    labelPosition: "top",
    getOptionLabel: (option: any) => option.customLabel,
    getOptionValue: (option: any) => option.customValue,
    options: [{
      customLabel: "Option 1",
      customValue: "option1"
    }, {
      customLabel: "Option 2",
      customValue: "option2"
    }, {
      customLabel: "Option 3",
      customValue: "option3"
    }, {
      customLabel: "Option 4",
      customValue: "option4"
    }, {
      customLabel: "Option 5",
      customValue: "option5"
    }]
  }
}`,...(f=(S=p.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,P,V;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Select", {
          map: {
            renderOption: RenderOptionCodeSample
          }
        })
      }
    }
  },
  render: args => {
    return <Select {...args} renderOption={(option: any, {
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
    ...Select.defaultProps,
    id: "Select",
    label: "Custom Option Renderer",
    placeholder: "Placeholder",
    labelPosition: "top",
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
}`,...(V=(P=i.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var L,C,j;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Select", {
          map: {
            renderValue: RenderValueCodeSample
          }
        })
      }
    }
  },
  render: args => {
    return <Select {...args} renderValue={(value: string, selectedOption: any) => <Box key={value} sx={{
      height: "40px",
      display: "flex",
      gap: "8px",
      width: "100%",
      alignItems: "center"
    }}>
            <Icon icon={selectedOption?.icon} />
            {selectedOption?.label}
          </Box>} />;
  },
  args: {
    ...Select.defaultProps,
    id: "Select",
    label: "Custom Option Renderer",
    placeholder: "Placeholder",
    labelPosition: "top",
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
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var R,B,w;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <Box sx={{
    height: "100px",
    width: "300px"
    // backgroundColor: "rgba(255, 0, 255, 0.1)",
  }}>
      <Select {...args} />
    </Box>,
  args: {
    ...Smaple.args,
    id: "Select",
    label: "",
    helperText: "",
    placeholder: "Placeholder",
    labelPosition: "top",
    variant: "table",
    fullWidth: true
  }
}`,...(w=(B=u.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const Be=["Smaple","LeftLabel","CustomList","CustomOptionRenderer","CustomValueRenderer","TableVariant"];export{p as CustomList,i as CustomOptionRenderer,s as CustomValueRenderer,r as LeftLabel,a as Smaple,u as TableVariant,Be as __namedExportsOrder,Re as default};
