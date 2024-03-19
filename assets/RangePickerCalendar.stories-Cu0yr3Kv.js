import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{f as l}from"./index-B7eDUBVh.js";import{s as u}from"./index-YfFXUiEp.js";import{b as o}from"./DatePicker-hLPxx9bP.js";import"./index-Dl6G-zuu.js";import"./withBaseInput-BsgnoZo0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./styled-BHqtc5H1.js";import"./index-CxDPfwJT.js";import"./useOnHover-B2KCCg7l.js";import"./Tooltip-BGGbFmQz.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-D0h4fVK4.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./useFormControl-EHw8eS4L.js";import"./createSvgIcon-wuQRGJaD.js";import"./GlobalStyles-Cw5gJnzH.js";import"./Typography-CwlVby8-.js";import"./Icon.types-ZLDmiTIS.js";import"./index-BV_mmP2Q.js";import"./palette-DffXsAfV.js";import"./Box-Cx2AHcqC.js";import"./Typography-CWG-RrY2.js";import"./Typography-D13k7nS0.js";import"./Avatar-BLAdS9CV.js";import"./Button-BXStEUTk.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-DwooOwGJ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Checkbox-D7Z_91RO.js";import"./FormControlLabel-BwAZN5ZN.js";import"./Chip-DWAGt5_W.js";import"./index-Beu9b4Vr.js";import"./TextField-BvZ0tNBD.js";import"./Dropdown-DJ30yDWD.js";import"./Input-n6DbCxjg.js";import"./TextArea-Cu2FXdOG.js";import"./Currency-DBCdWNOt.js";import"./enqueueSnackbar-Cr06R9t6.js";import"./ThemeWrapper-DkVgXmRj.js";const ee={title:"Example/Date Picker/RangePickerCalendar",component:o,parameters:{layout:"centered",docs:{source:{transform:u("RangePickerCalendar")}}},tags:["autodocs"],argTypes:{onSelect:{action:"onChange"}}},r={render:e=>{let t={};if(e!=null&&e.currentDate&&(t={...t,currentDate:new Date(e==null?void 0:e.currentDate)}),e!=null&&e.value&&Array.isArray(e==null?void 0:e.value)){const i=e==null?void 0:e.value.map(p=>new Date(p));t={...t,value:i}}return s.jsx(o,{...e,...t})},args:{...o.defaultProps,disableFuture:!1,disableCurrent:!1,disablePast:!1,currentDate:new Date,numberOfMonths:2,onSelect:l()}};var a,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const te=["Default"];export{r as Default,te as __namedExportsOrder,ee as default};
