import{j as i}from"./jsx-runtime-Du8NFWEI.js";import{s as m}from"./index-FNnhrwHs.js";import{R as e}from"./DatePicker-DvQQmUTA.js";import"./index-Dl6G-zuu.js";import"./BaseInput.types-Dq9qK2Q7.js";import"./createTheme-Dc-CT_GP.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./styled-DLEC8BOE.js";import"./useFormControl-EHw8eS4L.js";import"./GlobalStyles-B-giPn6k.js";import"./Icon-Cu7WjEzB.js";import"./Typography-DjRGjSGD.js";import"./palette-D0GmnfNO.js";import"./Box-DP0gCcGq.js";import"./TransitionGroupContext-6TzUecMu.js";import"./inheritsLoose-B7h9gheN.js";import"./index-D1_ZHIBm.js";import"./createSvgIcon-mbCAAF2W.js";import"./Typography-DTRbJCHq.js";import"./Typography-QG6-VWOQ.js";import"./ThemeWrapper-B0XPfCVJ.js";import"./Avatar-DMliyAUI.js";import"./useOnHover-B5yjJnBG.js";import"./Button-C2iSgadE.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-aX2SwWXP.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Checkbox-BZuhLq3e.js";import"./FormControlLabel-5Qsymijr.js";import"./Chip-CYE1iSQQ.js";import"./index-Beu9b4Vr.js";import"./Currency-D2kCb5_L.js";import"./Dropdown-bWElnDXZ.js";import"./Input-B3B84ziy.js";import"./enqueueSnackbar-C13W9FJf.js";const M={title:"Example/RangePicker",component:e,parameters:{layout:"centered",docs:{source:{transform:m("RangePicker")}}},tags:["autodocs"],argTypes:{onChange:{action:"changed"},value:{control:{type:"array"}},status:{options:["error","success","warning"],control:{type:"radio"}},labelPosition:{options:["top","left"],control:{type:"radio"}}}},t={render:r=>{let o={};return r!=null&&r.currentDate&&(o={...r,currentDate:new Date(r==null?void 0:r.currentDate)}),i.jsx(e,{...r,...o})},args:{...e.defaultProps,label:"Range Picker",helperText:"Helper Text",placeholder:["Start date","End date"]}};var a,p,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    let formattedProps = {};
    if (args?.currentDate) {
      formattedProps = {
        ...args,
        currentDate: new Date(args?.currentDate)
      };
    }
    return <RangePicker {...args} {...formattedProps} />;
  },
  args: {
    ...RangePicker.defaultProps,
    label: "Range Picker",
    helperText: "Helper Text",
    placeholder: ["Start date", "End date"]
  }
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,M as default};
