import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{f as l}from"./index-B7eDUBVh.js";import{s as u}from"./index-LwjjZM6p.js";import{b as o}from"./DatePicker-Bc2fpNpw.js";import"./index-Dl6G-zuu.js";import"./withBaseInput-ABsdFxEq.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DCk6V8kG.js";import"./styled-BR12ND4t.js";import"./index-DumyTNJm.js";import"./useTheme-Clx4k-ij.js";import"./Tooltip-C1rbe5nA.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-CXyXHDm3.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./Paper-BuJzcfCq.js";import"./useFormControl-EHw8eS4L.js";import"./createSvgIcon-CtgctCWC.js";import"./GlobalStyles-CFtsqArI.js";import"./index-DfBNxlIc.js";import"./Icon.types-D_4oR35k.js";import"./useOnHover-B5yjJnBG.js";import"./Typography-ZX8UCtO5.js";import"./index-BtqKrAAV.js";import"./palette-CuLLrWCY.js";import"./Box-BTk9yL7d.js";import"./Typography-Dp_zQvbO.js";import"./Typography-Ck0EBljP.js";import"./ThemeWrapper-Cn-q4vKO.js";import"./Avatar-B5dfTtQL.js";import"./Button-oPd68YvA.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-Dgt99m_m.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Checkbox-XoUDF6yd.js";import"./FormControlLabel-ALs30M4a.js";import"./styled-amVfSIae.js";import"./Chip-BKih_8IO.js";import"./index-Beu9b4Vr.js";import"./TextField-BWOwwqZi.js";import"./isMuiElement-DAcuSkv2.js";import"./Dropdown-Dvv6v3kl.js";import"./Grid-MFrIJdd4.js";import"./Currency-URzqfVnb.js";import"./react-number-format.es-vn8TvMxN.js";import"./Input-DalmzjrG.js";import"./index-Bk1RaGfa.js";import"./Percent-BLrTkxAJ.js";import"./TextArea-C9cQx3mk.js";import"./enqueueSnackbar-DQPv75I_.js";const lt={title:"Example/Date Picker/RangePickerCalendar",component:o,parameters:{layout:"centered",docs:{source:{transform:u("RangePickerCalendar")}}},tags:["autodocs"],argTypes:{onSelect:{action:"onChange"}}},r={render:t=>{let e={};if(t!=null&&t.currentDate&&(e={...e,currentDate:new Date(t==null?void 0:t.currentDate)}),t!=null&&t.value&&Array.isArray(t==null?void 0:t.value)){const i=t==null?void 0:t.value.map(p=>new Date(p));e={...e,value:i}}return s.jsx(o,{...t,...e})},args:{...o.defaultProps,disableFuture:!1,disableCurrent:!1,disablePast:!1,currentDate:new Date,numberOfMonths:2,onSelect:l()}};var a,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const ut=["Default"];export{r as Default,ut as __namedExportsOrder,lt as default};
