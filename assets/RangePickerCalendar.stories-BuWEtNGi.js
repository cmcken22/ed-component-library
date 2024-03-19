import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{f as l}from"./index-B7eDUBVh.js";import{s as u}from"./index-YfFXUiEp.js";import{b as o}from"./DatePicker-CLQxDscs.js";import"./index-Dl6G-zuu.js";import"./withBaseInput-B9YXMaqF.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./styled-CW7PKROT.js";import"./index-CxDPfwJT.js";import"./useTheme-Dcm8TSoZ.js";import"./Tooltip-CtH41MzO.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-CXyXHDm3.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./useFormControl-EHw8eS4L.js";import"./createSvgIcon-DfjrNMDs.js";import"./GlobalStyles-B2fJX7Ye.js";import"./Typography-CwlVby8-.js";import"./Icon.types-Ccc-q3e1.js";import"./useOnHover-B5yjJnBG.js";import"./index-Cs8xiGyc.js";import"./palette-DffXsAfV.js";import"./Box-BMhSVWv5.js";import"./Typography-DjBYimSR.js";import"./Typography-feV-KzQP.js";import"./ThemeWrapper-Dp2fOlB1.js";import"./Avatar-B8FN5_XL.js";import"./Button-DCUvxc8u.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-DA04KGtb.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Checkbox-D2EBMsl3.js";import"./FormControlLabel-Bb1ouJqR.js";import"./Chip-COb_6UN0.js";import"./index-Beu9b4Vr.js";import"./TextField-T5R8eY18.js";import"./Dropdown-BPCV8vHF.js";import"./Currency-B1HAmPJi.js";import"./react-number-format.es-vn8TvMxN.js";import"./Input-OCSwWByg.js";import"./index-Bk1RaGfa.js";import"./Percent-DEuSujEA.js";import"./TextArea-CzW05-IZ.js";import"./enqueueSnackbar-DMnzROeu.js";const ne={title:"Example/Date Picker/RangePickerCalendar",component:o,parameters:{layout:"centered",docs:{source:{transform:u("RangePickerCalendar")}}},tags:["autodocs"],argTypes:{onSelect:{action:"onChange"}}},r={render:e=>{let t={};if(e!=null&&e.currentDate&&(t={...t,currentDate:new Date(e==null?void 0:e.currentDate)}),e!=null&&e.value&&Array.isArray(e==null?void 0:e.value)){const i=e==null?void 0:e.value.map(p=>new Date(p));t={...t,value:i}}return s.jsx(o,{...e,...t})},args:{...o.defaultProps,disableFuture:!1,disableCurrent:!1,disablePast:!1,currentDate:new Date,numberOfMonths:2,onSelect:l()}};var a,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const me=["Default"];export{r as Default,me as __namedExportsOrder,ne as default};
