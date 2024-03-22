import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{f as l}from"./index-DM7PHWmo.js";import{s as u}from"./index-B_pG5fU1.js";import{b as o}from"./DatePicker-BbtfG_KH.js";import"./index-Dl6G-zuu.js";import"./withBaseInput-BMqKywP-.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./styled-IAc8Lal0.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-aRqog72_.js";import"./Tooltip-CFrTt7ye.js";import"./index-CxDPfwJT.js";import"./useTheme-DO6XBSmN.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./createSvgIcon-C5McbOQe.js";import"./GlobalStyles-CIXrmKi2.js";import"./index-DfBNxlIc.js";import"./Typography-BXL6phpy.js";import"./Typography-DbM4VYj_.js";import"./Typography-CnkoRAsC.js";import"./Box-DyLoEUC9.js";import"./Icon.types-Co76R5gq.js";import"./useOnHover-B5yjJnBG.js";import"./index-DprujKNK.js";import"./palette-DffXsAfV.js";import"./ThemeWrapper-wMS4avzx.js";import"./Avatar-pkVRPl0Q.js";import"./Button-Dbb3vepn.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-Czbgi4Lg.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Checkbox-PgEx0_vy.js";import"./FormControlLabel-BWkzxxkj.js";import"./styled-DUff_cEZ.js";import"./Chip-DFAP1K_n.js";import"./index-Beu9b4Vr.js";import"./Grid-BK1KDmXn.js";import"./Currency-B7IPrDzN.js";import"./react-number-format.es-vn8TvMxN.js";import"./Input-C9QAWRFj.js";import"./index-Bk1RaGfa.js";import"./Percent-D0I6sKJa.js";import"./TextArea-DT4nJouT.js";import"./enqueueSnackbar-BpfayY-2.js";const it={title:"Example/Date Picker/RangePickerCalendar",component:o,parameters:{layout:"centered",docs:{source:{transform:u("RangePickerCalendar")}}},tags:["autodocs"],argTypes:{onSelect:{action:"onChange"}}},r={render:t=>{let e={};if(t!=null&&t.currentDate&&(e={...e,currentDate:new Date(t==null?void 0:t.currentDate)}),t!=null&&t.value&&Array.isArray(t==null?void 0:t.value)){const i=t==null?void 0:t.value.map(p=>new Date(p));e={...e,value:i}}return s.jsx(o,{...t,...e})},args:{...o.defaultProps,disableFuture:!1,disableCurrent:!1,disablePast:!1,currentDate:new Date,numberOfMonths:2,onSelect:l()}};var a,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
