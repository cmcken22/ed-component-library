import{j as u}from"./jsx-runtime-Du8NFWEI.js";import{s as f}from"./index-YfFXUiEp.js";import{R as a}from"./DatePicker-hLPxx9bP.js";import"./index-Dl6G-zuu.js";import"./withBaseInput-BsgnoZo0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./styled-BHqtc5H1.js";import"./index-CxDPfwJT.js";import"./useOnHover-B2KCCg7l.js";import"./Tooltip-BGGbFmQz.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-D0h4fVK4.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./useFormControl-EHw8eS4L.js";import"./createSvgIcon-wuQRGJaD.js";import"./GlobalStyles-Cw5gJnzH.js";import"./Typography-CwlVby8-.js";import"./Icon.types-ZLDmiTIS.js";import"./index-BV_mmP2Q.js";import"./palette-DffXsAfV.js";import"./Box-Cx2AHcqC.js";import"./Typography-CWG-RrY2.js";import"./Typography-D13k7nS0.js";import"./Avatar-BLAdS9CV.js";import"./Button-BXStEUTk.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-DwooOwGJ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Checkbox-D7Z_91RO.js";import"./FormControlLabel-BwAZN5ZN.js";import"./Chip-DWAGt5_W.js";import"./index-Beu9b4Vr.js";import"./TextField-BvZ0tNBD.js";import"./Dropdown-DJ30yDWD.js";import"./Input-n6DbCxjg.js";import"./TextArea-Cu2FXdOG.js";import"./Currency-DBCdWNOt.js";import"./enqueueSnackbar-Cr06R9t6.js";import"./ThemeWrapper-DkVgXmRj.js";const ot={title:"Example/Date Picker/RangePicker",component:a,parameters:{layout:"centered",docs:{source:{transform:f("RangePicker")}}},render:t=>{let o={};if(t!=null&&t.currentDate&&(o={...t,currentDate:new Date(t==null?void 0:t.currentDate)}),t!=null&&t.value){const c=t==null?void 0:t.value.map(d=>new Date(d));o={...o,value:c}}return u.jsx(a,{...t,...o})},tags:["autodocs"],argTypes:{onChange:{action:"onChange"},onValidation:{action:"onValidation"},value:{control:{type:"array"}},calendarPlacement:{options:["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"],control:{type:"select"}},status:{options:["error","success","warning"],control:{type:"radio"}},labelPosition:{options:["top","left"],control:{type:"radio"}}}},e={args:{...a.defaultProps,id:"range_picker",label:"Range Picker",helperText:"Helper Text",placeholder:["Start date","End date"],popoverProps:{arrow:!1,offset:[0,8]}}},r={args:{...e.args,labelPosition:"left"}};var p,i,n;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...RangePicker.defaultProps,
    id: "range_picker",
    label: "Range Picker",
    helperText: "Helper Text",
    placeholder: ["Start date", "End date"],
    popoverProps: {
      arrow: false,
      offset: [0, 8]
    }
  }
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,l,s;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    labelPosition: "left"
  }
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const rt=["Default","LeftLabel"];export{e as Default,r as LeftLabel,rt as __namedExportsOrder,ot as default};
