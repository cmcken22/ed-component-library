import{j as u}from"./jsx-runtime-Du8NFWEI.js";import{s as f}from"./index-YfFXUiEp.js";import{R as p}from"./DatePicker-CLQxDscs.js";import"./index-Dl6G-zuu.js";import"./withBaseInput-B9YXMaqF.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./styled-CW7PKROT.js";import"./index-CxDPfwJT.js";import"./useTheme-Dcm8TSoZ.js";import"./Tooltip-CtH41MzO.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-CXyXHDm3.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./useFormControl-EHw8eS4L.js";import"./createSvgIcon-DfjrNMDs.js";import"./GlobalStyles-B2fJX7Ye.js";import"./Typography-CwlVby8-.js";import"./Icon.types-Ccc-q3e1.js";import"./useOnHover-B5yjJnBG.js";import"./index-Cs8xiGyc.js";import"./palette-DffXsAfV.js";import"./Box-BMhSVWv5.js";import"./Typography-DjBYimSR.js";import"./Typography-feV-KzQP.js";import"./ThemeWrapper-Dp2fOlB1.js";import"./Avatar-B8FN5_XL.js";import"./Button-DCUvxc8u.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-DA04KGtb.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Checkbox-D2EBMsl3.js";import"./FormControlLabel-Bb1ouJqR.js";import"./Chip-COb_6UN0.js";import"./index-Beu9b4Vr.js";import"./TextField-T5R8eY18.js";import"./Dropdown-BPCV8vHF.js";import"./Currency-B1HAmPJi.js";import"./react-number-format.es-vn8TvMxN.js";import"./Input-OCSwWByg.js";import"./index-Bk1RaGfa.js";import"./Percent-DEuSujEA.js";import"./TextArea-CzW05-IZ.js";import"./enqueueSnackbar-DMnzROeu.js";const nt={title:"Example/Date Picker/RangePicker",component:p,parameters:{layout:"centered",docs:{source:{transform:f("RangePicker")}}},render:t=>{let o={};if(t!=null&&t.currentDate&&(o={...t,currentDate:new Date(t==null?void 0:t.currentDate)}),t!=null&&t.value){const c=t==null?void 0:t.value.map(d=>new Date(d));o={...o,value:c}}return u.jsx(p,{...t,...o})},tags:["autodocs"],argTypes:{onChange:{action:"onChange"},onValidation:{action:"onValidation"},value:{control:{type:"array"}},calendarPlacement:{options:["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"],control:{type:"select"}},status:{options:["error","success","warning"],control:{type:"radio"}},labelPosition:{options:["top","left"],control:{type:"radio"}}}},e={args:{...p.defaultProps,id:"range_picker",label:"Range Picker",helperText:"Helper Text",placeholder:["Start date","End date"],popoverProps:{arrow:!1,offset:[0,8]}}},r={args:{...e.args,labelPosition:"left"}};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const mt=["Default","LeftLabel"];export{e as Default,r as LeftLabel,mt as __namedExportsOrder,nt as default};
