import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{f as l}from"./index-BnUgH7jw.js";import{s as u}from"./index-B_pG5fU1.js";import{b as o}from"./Button-BZwuvSDA.js";import"./index-Dl6G-zuu.js";import"./index-DCyYi5Uh.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./Icon.types-C28-lL-C.js";import"./useOnHover-B5yjJnBG.js";import"./Typography-DbM4VYj_.js";import"./index-BEf2p8cz.js";import"./useTheme-BgX8hDp8.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./palette-C9S7df13.js";import"./Box-C-V--YKQ.js";import"./ThemeWrapper-CQqLz_aH.js";import"./Typography-CDWy3aSQ.js";import"./Typography-B6I9QrUF.js";import"./index-D1_ZHIBm.js";import"./index-CxDPfwJT.js";import"./GlobalStyles-Dmpyt81I.js";import"./Avatar-C3F4X0SX.js";import"./Tooltip-C4Gwpmhi.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./inheritsLoose-B7h9gheN.js";import"./Checkbox-CVpeMM0H.js";import"./FormControlLabel-BEhHtoBS.js";import"./useFormControl-EHw8eS4L.js";import"./styled-DWjFcNbo.js";import"./assertThisInitialized-B9jnkVVz.js";import"./createSvgIcon-BO828Ki2.js";import"./Chip-uN1PIWZu.js";import"./helpers-CtoIX1AE.js";import"./Paper-Hs7e5W89.js";import"./index-Beu9b4Vr.js";import"./Grid-BGIExXJq.js";import"./Currency-D8dh0agi.js";import"./react-number-format.es-DkkvJ1RT.js";import"./Input-Yrfz6Brf.js";import"./index-Bk1RaGfa.js";import"./Percent-C7luUz9t.js";import"./TextArea-CaGIjNi8.js";const te={title:"Example/Date Picker/RangePickerCalendar",component:o,parameters:{layout:"centered",docs:{source:{transform:u("RangePickerCalendar")}}},tags:["autodocs"],argTypes:{onSelect:{action:"onChange"}}},r={render:e=>{let t={};if(e!=null&&e.currentDate&&(t={...t,currentDate:new Date(e==null?void 0:e.currentDate)}),e!=null&&e.value&&Array.isArray(e==null?void 0:e.value)){const i=e==null?void 0:e.value.map(p=>new Date(p));t={...t,value:i}}return s.jsx(o,{...e,...t})},args:{...o.defaultProps,disableFuture:!1,disableCurrent:!1,disablePast:!1,currentDate:new Date,numberOfMonths:2,onSelect:l()}};var a,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
