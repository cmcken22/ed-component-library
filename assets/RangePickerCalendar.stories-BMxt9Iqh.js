import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{f as l}from"./index-B7eDUBVh.js";import{s as u}from"./index-DjbcUtqK.js";import{b as o}from"./DatePicker-BCraCYYu.js";import"./index-Dl6G-zuu.js";import"./BaseInput.types-BaOfuBPj.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./styled-w1uBJNCI.js";import"./GlobalStyles-BFqByqGf.js";import"./Icon-BtEdJI3L.js";import"./Typography-CwlVby8-.js";import"./palette-DffXsAfV.js";import"./Box-C2XYFoeC.js";import"./TransitionGroupContext-6TzUecMu.js";import"./inheritsLoose-B7h9gheN.js";import"./index-D1_ZHIBm.js";import"./createSvgIcon-BP9fb_UE.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-CInnln3z.js";import"./Typography-BmzuiwxG.js";import"./ThemeWrapper-DzIdJvTu.js";import"./Avatar-D-bsiZda.js";import"./useOnHover-B5yjJnBG.js";import"./Button-DFgCAd42.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-BFDeuqCQ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Checkbox-G3PkRWe0.js";import"./FormControlLabel-C_gVR9GN.js";import"./Chip-BaWKn-RL.js";import"./index-Beu9b4Vr.js";import"./Currency-CYp8sVMU.js";import"./Dropdown-DewONw9Q.js";import"./Input-BASalEaC.js";import"./enqueueSnackbar-uJHMXYgD.js";const W={title:"Example/Date Picker/RangePickerCalendar",component:o,parameters:{layout:"centered",docs:{source:{transform:u("RangePickerCalendar")}}},tags:["autodocs"],argTypes:{onSelect:{action:"onChange"}}},r={render:e=>{let t={};if(e!=null&&e.currentDate&&(t={...t,currentDate:new Date(e==null?void 0:e.currentDate)}),e!=null&&e.value&&Array.isArray(e==null?void 0:e.value)){const i=e==null?void 0:e.value.map(p=>new Date(p));t={...t,value:i}}return s.jsx(o,{...e,...t})},args:{...o.defaultProps,disableFuture:!1,disableCurrent:!1,disablePast:!1,currentDate:new Date,numberOfMonths:2,onSelect:l()}};var a,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    let formattedProps = {};
    if (args?.currentDate) {
      formattedProps = {
        ...formattedProps,
        currentDate: new Date(args?.currentDate)
      };
    }
    if (args?.value && Array.isArray(args?.value)) {
      const nextValue = args?.value.map((date: any) => new Date(date));
      formattedProps = {
        ...formattedProps,
        value: nextValue
      };
    }
    return <RangePickerCalendar {...args} {...formattedProps} />;
  },
  args: {
    ...RangePickerCalendar.defaultProps,
    disableFuture: false,
    disableCurrent: false,
    disablePast: false,
    currentDate: new Date(),
    numberOfMonths: 2,
    onSelect: fn()
  }
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const X=["Default"];export{r as Default,X as __namedExportsOrder,W as default};
