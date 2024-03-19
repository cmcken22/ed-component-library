import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{f as l}from"./index-B7eDUBVh.js";import{s as u}from"./index-YfFXUiEp.js";import{b as o}from"./DatePicker-wzN8OjbE.js";import"./index-Dl6G-zuu.js";import"./withBaseInput-CFy_YGrN.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./styled-oBnpV2qj.js";import"./index-CxDPfwJT.js";import"./useTheme-CpDU_v35.js";import"./Tooltip-DCDOzhVy.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-D0h4fVK4.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./useFormControl-EHw8eS4L.js";import"./createSvgIcon-DZh5PR94.js";import"./GlobalStyles-CY7HAbSF.js";import"./Typography-CwlVby8-.js";import"./Icon-CinL_nv7.js";import"./index-kwxT9kJ1.js";import"./palette-DffXsAfV.js";import"./Box-DHtNwdn9.js";import"./Typography-CjvmDS82.js";import"./Typography-B14jcOb6.js";import"./ThemeWrapper-CsGpAzP2.js";import"./Avatar-U9hPAsUd.js";import"./useOnHover-B5yjJnBG.js";import"./Button-tzLgEmFw.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-D_5QeoiE.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Checkbox-Cg0REhrx.js";import"./FormControlLabel-CEpIs0Lm.js";import"./Chip-Bc7hzcjo.js";import"./index-Beu9b4Vr.js";import"./TextField-BOmyFXy2.js";import"./Dropdown-CxxDxOPF.js";import"./Input-IcAIHM-e.js";import"./TextArea-C43Xts_m.js";import"./Currency-CR38yyyY.js";import"./enqueueSnackbar-DaKf3M0m.js";const te={title:"Example/Date Picker/RangePickerCalendar",component:o,parameters:{layout:"centered",docs:{source:{transform:u("RangePickerCalendar")}}},tags:["autodocs"],argTypes:{onSelect:{action:"onChange"}}},r={render:e=>{let t={};if(e!=null&&e.currentDate&&(t={...t,currentDate:new Date(e==null?void 0:e.currentDate)}),e!=null&&e.value&&Array.isArray(e==null?void 0:e.value)){const i=e==null?void 0:e.value.map(p=>new Date(p));t={...t,value:i}}return s.jsx(o,{...e,...t})},args:{...o.defaultProps,disableFuture:!1,disableCurrent:!1,disablePast:!1,currentDate:new Date,numberOfMonths:2,onSelect:l()}};var a,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const re=["Default"];export{r as Default,re as __namedExportsOrder,te as default};
