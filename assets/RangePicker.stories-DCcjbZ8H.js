import{j as l}from"./jsx-runtime-Du8NFWEI.js";import{s}from"./index-DjbcUtqK.js";import{R as o}from"./DatePicker-BCraCYYu.js";import"./index-Dl6G-zuu.js";import"./BaseInput.types-BaOfuBPj.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./styled-w1uBJNCI.js";import"./GlobalStyles-BFqByqGf.js";import"./Icon-BtEdJI3L.js";import"./Typography-CwlVby8-.js";import"./palette-DffXsAfV.js";import"./Box-C2XYFoeC.js";import"./TransitionGroupContext-6TzUecMu.js";import"./inheritsLoose-B7h9gheN.js";import"./index-D1_ZHIBm.js";import"./createSvgIcon-BP9fb_UE.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-CInnln3z.js";import"./Typography-BmzuiwxG.js";import"./ThemeWrapper-DzIdJvTu.js";import"./Avatar-D-bsiZda.js";import"./useOnHover-B5yjJnBG.js";import"./Button-DFgCAd42.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-BFDeuqCQ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Checkbox-G3PkRWe0.js";import"./FormControlLabel-C_gVR9GN.js";import"./Chip-BaWKn-RL.js";import"./index-Beu9b4Vr.js";import"./Currency-CYp8sVMU.js";import"./Dropdown-DewONw9Q.js";import"./Input-BASalEaC.js";import"./enqueueSnackbar-uJHMXYgD.js";const N={title:"Example/Date Picker/RangePicker",component:o,parameters:{layout:"centered",docs:{source:{transform:s("RangePicker")}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"},onValidation:{action:"onValidation"},value:{control:{type:"array"}},calendarPlacement:{options:["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"],control:{type:"select"}},status:{options:["error","success","warning"],control:{type:"radio"}},labelPosition:{options:["top","left"],control:{type:"radio"}}}},r={render:t=>{let e={};if(t!=null&&t.currentDate&&(e={...t,currentDate:new Date(t==null?void 0:t.currentDate)}),t!=null&&t.value){const i=t==null?void 0:t.value.map(m=>new Date(m));e={...e,value:i}}return l.jsx(o,{...t,...e})},args:{...o.defaultProps,id:"range_picker",label:"Range Picker",helperText:"Helper Text",placeholder:["Start date","End date"],popoverProps:{arrow:!1,offset:[0,8]}}};var a,n,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    let formattedProps = {};
    if (args?.currentDate) {
      formattedProps = {
        ...args,
        currentDate: new Date(args?.currentDate)
      };
    }
    if (args?.value) {
      const nextValue = args?.value.map((date: any) => new Date(date));
      formattedProps = {
        ...formattedProps,
        value: nextValue
      };
    }
    return <RangePicker {...args} {...formattedProps} />;
  },
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
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Q=["Default"];export{r as Default,Q as __namedExportsOrder,N as default};
