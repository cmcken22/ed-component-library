import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{f as l}from"./index-DM7PHWmo.js";import{s as u}from"./index-B_pG5fU1.js";import{b as o}from"./DatePicker-CpUyKBJG.js";import"./index-Dl6G-zuu.js";import"./withBaseInput-K4VB_GuN.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BSWZnpwu.js";import"./createTheme-C-bbEhjH.js";import"./styled-DMCGyrn8.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-BeOq4TRm.js";import"./Tooltip-DEIsbpBF.js";import"./index-Dx556MhY.js";import"./useTheme-CD2qRrbv.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./createSvgIcon-BSw8Ufc7.js";import"./GlobalStyles-Dm_UTwER.js";import"./index-DfBNxlIc.js";import"./Typography-C1g_3yIv.js";import"./Typography-DTLcFDMd.js";import"./Typography-CbG_DwGs.js";import"./Box-cOIccGF-.js";import"./Icon.types-CsEEbQCp.js";import"./useOnHover-B5yjJnBG.js";import"./index-CYIh5gUh.js";import"./palette-D2hGRGzw.js";import"./ThemeWrapper-Dw-fp1HD.js";import"./Avatar-fQDKrKXl.js";import"./Button-Cw41h4HY.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-BJNoRnGI.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Checkbox-D1pvv4qW.js";import"./FormControlLabel-CkfyWINj.js";import"./styled-BFfojB-k.js";import"./Chip-3C-V2Up1.js";import"./index-Beu9b4Vr.js";import"./Grid-CahVCsyo.js";import"./Currency-C5VfasqZ.js";import"./react-number-format.es-vn8TvMxN.js";import"./Input-DPazXVYN.js";import"./index-Bk1RaGfa.js";import"./Percent-BfN4TVBm.js";import"./TextArea-CBdRt04H.js";import"./enqueueSnackbar-GVOas7Gu.js";const it={title:"Example/Date Picker/RangePickerCalendar",component:o,parameters:{layout:"centered",docs:{source:{transform:u("RangePickerCalendar")}}},tags:["autodocs"],argTypes:{onSelect:{action:"onChange"}}},r={render:t=>{let e={};if(t!=null&&t.currentDate&&(e={...e,currentDate:new Date(t==null?void 0:t.currentDate)}),t!=null&&t.value&&Array.isArray(t==null?void 0:t.value)){const i=t==null?void 0:t.value.map(p=>new Date(p));e={...e,value:i}}return s.jsx(o,{...t,...e})},args:{...o.defaultProps,disableFuture:!1,disableCurrent:!1,disablePast:!1,currentDate:new Date,numberOfMonths:2,onSelect:l()}};var a,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const pt=["Default"];export{r as Default,pt as __namedExportsOrder,it as default};
