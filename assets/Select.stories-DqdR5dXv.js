import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{s as u}from"./index-B_pG5fU1.js";import{A as R}from"./Avatar-pkVRPl0Q.js";import{a as B}from"./Icon.types-Co76R5gq.js";import{S as n}from"./DatePicker-BbtfG_KH.js";import{B as C}from"./Box-DyLoEUC9.js";import"./index-Dl6G-zuu.js";import"./index-DfBNxlIc.js";import"./useOnHover-B5yjJnBG.js";import"./Typography-BXL6phpy.js";import"./Typography-DbM4VYj_.js";import"./createTheme-B78KyuB4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./Typography-CnkoRAsC.js";import"./styled-IAc8Lal0.js";import"./Tooltip-CFrTt7ye.js";import"./index-CxDPfwJT.js";import"./useTheme-DO6XBSmN.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./index-DprujKNK.js";import"./palette-DffXsAfV.js";import"./withBaseInput-BMqKywP-.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-aRqog72_.js";import"./createSvgIcon-C5McbOQe.js";import"./GlobalStyles-CIXrmKi2.js";import"./ThemeWrapper-wMS4avzx.js";import"./Button-Dbb3vepn.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-Czbgi4Lg.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Checkbox-PgEx0_vy.js";import"./FormControlLabel-BWkzxxkj.js";import"./styled-DUff_cEZ.js";import"./Chip-DFAP1K_n.js";import"./index-Beu9b4Vr.js";import"./Grid-BK1KDmXn.js";import"./Currency-B7IPrDzN.js";import"./react-number-format.es-vn8TvMxN.js";import"./Input-C9QAWRFj.js";import"./index-Bk1RaGfa.js";import"./Percent-D0I6sKJa.js";import"./TextArea-DT4nJouT.js";import"./enqueueSnackbar-BpfayY-2.js";const Ce={title:"Example/Select/Select",component:n,parameters:{layout:"centered",docs:{source:{transform:u("Select")}}},tags:["autodocs"],argTypes:{status:{options:["error","success","warning"],control:{type:"radio"}}}},r={args:{...n.defaultProps,id:"Select",label:"Label",placeholder:"Placeholder",helperText:"Helper Text",labelPosition:"top",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"},{label:"Option 5",value:"option5"}]}},l={args:{...n.defaultProps,...r.args,labelPosition:"left"}},p={parameters:{layout:"centered",docs:{source:{transform:u("Select",{map:{getOptionLabel:"(option: any) => option.customLabel",getOptionValue:"(option: any) => option.customValue"}})}}},args:{...n.defaultProps,id:"Select",label:"Custom List",placeholder:"Placeholder",labelPosition:"top",getOptionLabel:t=>t.customLabel,getOptionValue:t=>t.customValue,options:[{customLabel:"Option 1",customValue:"option1"},{customLabel:"Option 2",customValue:"option2"},{customLabel:"Option 3",customValue:"option3"},{customLabel:"Option 4",customValue:"option4"},{customLabel:"Option 5",customValue:"option5"}]}},E=`(option: any, { label, value }: any) => (
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
  )`,i={parameters:{layout:"centered",docs:{source:{transform:u("Select",{map:{renderOption:E}})}}},render:t=>e.jsx(n,{...t,renderOption:(a,{label:o,value:j})=>e.jsxs(C,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:[e.jsx(R,{text:a==null?void 0:a.user}),o]},j)}),args:{...n.defaultProps,id:"Select",label:"Custom Option Renderer",placeholder:"Placeholder",labelPosition:"top",options:[{user:"JD",label:"Option 1",value:"option1"},{user:"CD",label:"Option 2",value:"option2"},{user:"MZ",label:"Option 3",value:"option3"},{user:"KN",label:"Option 4",value:"option4"},{user:"SE",label:"Option 5",value:"option5"}],renderOption:()=>e.jsx(e.Fragment,{})}},I=`(value: string, selectedOption: any) => (
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
  )`,s={parameters:{layout:"centered",docs:{source:{transform:u("Select",{map:{renderValue:I}})}}},render:t=>e.jsx(n,{...t,renderValue:(a,o)=>e.jsxs(C,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:[e.jsx(B,{icon:o==null?void 0:o.icon}),o==null?void 0:o.label]},a)}),args:{...n.defaultProps,id:"Select",label:"Custom Option Renderer",placeholder:"Placeholder",labelPosition:"top",options:[{icon:"HappyEmoji",label:"Option 1",value:"option1"},{icon:"SadEmoji",label:"Option 2",value:"option2"},{icon:"Hammer",label:"Option 3",value:"option3"},{icon:"Star",label:"Option 4",value:"option4"},{icon:"Heart",label:"Option 5",value:"option5"}],renderValue:()=>e.jsx(e.Fragment,{})}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    }]
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var b,O,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Select.defaultProps,
    ...Smaple.args,
    labelPosition: "left"
  }
}`,...(g=(O=l.parameters)==null?void 0:O.docs)==null?void 0:g.source}}};var x,S,v;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(S=p.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var h,f,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var L,P,V;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(V=(P=s.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const je=["Smaple","LeftLabel","CustomList","CustomOptionRenderer","CustomValueRenderer"];export{p as CustomList,i as CustomOptionRenderer,s as CustomValueRenderer,l as LeftLabel,r as Smaple,je as __namedExportsOrder,Ce as default};
