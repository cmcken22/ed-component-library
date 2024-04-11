import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{f as l}from"./index-BnUgH7jw.js";import{s as u}from"./index-B_pG5fU1.js";import{b as o}from"./Button-DT3EtM8i.js";import"./index-Dl6G-zuu.js";import"./index-CcbsCGxW.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./Icon.types-DlHNAABk.js";import"./useOnHover-DcG81d-b.js";import"./Typography-DbM4VYj_.js";import"./index-DfaGUJ00.js";import"./useTheme-zj3HIc-m.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./palette-DCNmPToj.js";import"./Box-QN4gLg71.js";import"./ThemeWrapper-DOC84Tbd.js";import"./Typography-ad_3Alod.js";import"./Typography-ByMLqIOY.js";import"./index-D1_ZHIBm.js";import"./index-CxDPfwJT.js";import"./GlobalStyles-B4XTyhQR.js";import"./Avatar-DPa3YPJX.js";import"./Tooltip-DP6TBYy0.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./inheritsLoose-B7h9gheN.js";import"./Checkbox-CIiCrQq3.js";import"./FormControlLabel-EfhPbLgJ.js";import"./useFormControl-EHw8eS4L.js";import"./styled-CyX8x3PR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./createSvgIcon-By8APFNA.js";import"./Chip-Dz07MYK7.js";import"./helpers-DG-CnUbz.js";import"./Paper-CwDAdALs.js";import"./index-Beu9b4Vr.js";import"./Grid-CwkbpFXQ.js";import"./Currency-D4OFtLWw.js";import"./react-number-format.es-DkkvJ1RT.js";import"./Input-C8QqeBjV.js";import"./index-BqFaNRbK.js";import"./Percent-DtwbiqxV.js";import"./TextArea-Dex1xWFd.js";const te={title:"Example/Date Picker/RangePickerCalendar",component:o,parameters:{layout:"centered",docs:{source:{transform:u("RangePickerCalendar")}}},tags:["autodocs"],argTypes:{onSelect:{action:"onChange"}}},r={render:e=>{let t={};if(e!=null&&e.currentDate&&(t={...t,currentDate:new Date(e==null?void 0:e.currentDate)}),e!=null&&e.value&&Array.isArray(e==null?void 0:e.value)){const i=e==null?void 0:e.value.map(p=>new Date(p));t={...t,value:i}}return s.jsx(o,{...e,...t})},args:{...o.defaultProps,disableFuture:!1,disableCurrent:!1,disablePast:!1,currentDate:new Date,numberOfMonths:2,onSelect:l()}};var a,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
