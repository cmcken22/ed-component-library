import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{c as b}from"./commonArgTypes-Cz1rbySM.js";import{s as m}from"./index-DlyO01os.js";import{A as k}from"./Avatar-CUxUFj2W.js";import{a as D}from"./Icon.types-Cts1U0M4.js";import{S as n}from"./Button-B7nE5RFy.js";import{B as d}from"./Box-gQIt9B05.js";import"./index-Dl6G-zuu.js";import"./index-DGPhUUWW.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-CxQfeomc.js";import"./Typography-BXdRB8J7.js";import"./Typography-u1033W3R.js";import"./Typography-rB6r_AZO.js";import"./useOnHover-DcG81d-b.js";import"./testIds-CT2jQqrK.js";import"./Tooltip-DuZ10qG3.js";import"./index-CiDPmov_.js";import"./index-B-KJ_PcS.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./inheritsLoose-B7h9gheN.js";import"./Stack-l5PVF6Ai.js";import"./styled-CE3BHGdM.js";import"./index-CZ29VMm6.js";import"./palette-CESXTxp7.js";import"./ThemeWrapper-p027yzCS.js";import"./GlobalStyles-CgXowqDm.js";import"./DatePicker-Bgh_D4xi.js";import"./index-Beu9b4Vr.js";import"./createSvgIcon-D2rEfC9A.js";import"./ButtonBase-lJFSTU0I.js";import"./assertThisInitialized-B9jnkVVz.js";import"./useCommonOnChangeHandler-DfyMK7Qn.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DFVa8SY2.js";import"./Checkbox-D1dTJqUW.js";import"./FormControlLabel-QMhEfIZX.js";import"./Chip-CU5XfiV5.js";import"./DateField-MJkJhh_n.js";import"./DateRangeField-BXnnCepX.js";import"./FileDropZone-CU33z5_1.js";import"./Grid-CCc2OB1M.js";import"./Input-BQ75RuYt.js";import"./TextArea-gdhbUIK_.js";import"./ProgressBar-abn_nouz.js";import"./RadioButton.types-wYdjOlzo.js";const Ae={title:"Example/Select/Select",component:n,parameters:{layout:"centered",docs:{source:{transform:m("Select")}}},tags:["autodocs"],argTypes:{...b.onChange,...b.status}},a={args:{...n.defaultProps,id:"Select",label:"Label",placeholder:"Placeholder",helperText:"Helper Text",labelPosition:"top",tooltip:"Tooltip",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"},{label:"Option 5",value:"option5"},{label:"Option 6",value:"option6"},{label:"Option 7",value:"option7"},{label:"Option 8",value:"option8"}]}},r={args:{...a.args,value:a.args.options[0].value,allowClear:!0}},p={args:{...n.defaultProps,...a.args,labelPosition:"left"}},i={parameters:{layout:"centered",docs:{source:{transform:m("Select",{map:{getOptionLabel:"(option: any) => option.customLabel",getOptionValue:"(option: any) => option.customValue"}})}}},args:{...n.defaultProps,id:"Select",label:"Custom List",placeholder:"Placeholder",labelPosition:"top",getOptionLabel:o=>o.customLabel,getOptionValue:o=>o.customValue,options:[{customLabel:"Option 1",customValue:"option1"},{customLabel:"Option 2",customValue:"option2"},{customLabel:"Option 3",customValue:"option3"},{customLabel:"Option 4",customValue:"option4"},{customLabel:"Option 5",customValue:"option5"}]}},J=`(option: any, { label, value }: any) => (
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
  )`,s={parameters:{layout:"centered",docs:{source:{transform:m("Select",{map:{renderOption:J}})}}},render:o=>e.jsx(n,{...o,renderOption:(l,{label:t,value:F})=>e.jsxs(d,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:[e.jsx(k,{text:l==null?void 0:l.user}),t]},F)}),args:{...n.defaultProps,id:"Select",label:"Custom Option Renderer",placeholder:"Placeholder",labelPosition:"top",options:[{user:"JD",label:"Option 1",value:"option1"},{user:"CD",label:"Option 2",value:"option2"},{user:"MZ",label:"Option 3",value:"option3"},{user:"KN",label:"Option 4",value:"option4"},{user:"SE",label:"Option 5",value:"option5"}],renderOption:()=>e.jsx(e.Fragment,{})}},K=`(value: string, selectedOption: any) => (
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
  )`,u={parameters:{layout:"centered",docs:{source:{transform:m("Select",{map:{renderValue:K}})}}},render:o=>e.jsx(n,{...o,renderValue:(l,t)=>e.jsxs(d,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:[e.jsx(D,{icon:t==null?void 0:t.icon}),t==null?void 0:t.label]},l)}),args:{...n.defaultProps,id:"Select",label:"Custom Option Renderer",placeholder:"Placeholder",labelPosition:"top",options:[{icon:"HappyEmoji",label:"Option 1",value:"option1"},{icon:"SadEmoji",label:"Option 2",value:"option2"},{icon:"Hammer",label:"Option 3",value:"option3"},{icon:"Star",label:"Option 4",value:"option4"},{icon:"Heart",label:"Option 5",value:"option5"}],renderValue:()=>e.jsx(e.Fragment,{})}},c={render:o=>e.jsx(d,{sx:{height:"100px",width:"300px"},children:e.jsx(n,{...o})}),args:{...a.args,id:"Select",label:"",helperText:"",placeholder:"Placeholder",labelPosition:"top",variant:"table",fullWidth:!0}};var g,O,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Select.defaultProps,
    id: "Select",
    label: "Label",
    placeholder: "Placeholder",
    helperText: "Helper Text",
    labelPosition: "top",
    tooltip: "Tooltip",
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
}`,...(x=(O=a.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var h,v,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Sample.args,
    value: Sample.args.options[0].value,
    allowClear: true
  }
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var f,y,P;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Select.defaultProps,
    ...Sample.args,
    labelPosition: "left"
  }
}`,...(P=(y=p.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var V,C,L;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var j,R,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(R=s.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var B,T,E;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(T=u.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var I,H,A;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Box sx={{
    height: "100px",
    width: "300px"
    // backgroundColor: "rgba(255, 0, 255, 0.1)",
  }}>
      <Select {...args} />
    </Box>,
  args: {
    ...Sample.args,
    id: "Select",
    label: "",
    helperText: "",
    placeholder: "Placeholder",
    labelPosition: "top",
    variant: "table",
    fullWidth: true
  }
}`,...(A=(H=c.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};const Fe=["Sample","AllowClear","LeftLabel","CustomList","CustomOptionRenderer","CustomValueRenderer","TableVariant"];export{r as AllowClear,i as CustomList,s as CustomOptionRenderer,u as CustomValueRenderer,p as LeftLabel,a as Sample,c as TableVariant,Fe as __namedExportsOrder,Ae as default};
