import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{f as l}from"./index-BnUgH7jw.js";import{s as u}from"./index-B_pG5fU1.js";import{b as o}from"./DatePicker-Dx_N93Gj.js";import"./index-Dl6G-zuu.js";import"./helpers-CCWd5abd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./index-8HRI1sDn.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DQSmW7aV.js";import"./Tooltip-CJh6hZtg.js";import"./index-CxDPfwJT.js";import"./useTheme-BpUgHZka.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./createSvgIcon-DJzhYxYh.js";import"./GlobalStyles-lfm5EBAb.js";import"./Typography-CPNth6VQ.js";import"./Typography-DbM4VYj_.js";import"./Typography-SP3Ztg2T.js";import"./Box-GI0gEbLE.js";import"./Icon.types-Bg_FxVn4.js";import"./useOnHover-B5yjJnBG.js";import"./index-DPNVsBv0.js";import"./palette-DffXsAfV.js";import"./Button-B3PXq-J7.js";import"./ButtonBase-2lKpUo-h.js";import"./assertThisInitialized-B9jnkVVz.js";import"./ThemeWrapper-kl0zAW7z.js";import"./Avatar-IBObJaJ6.js";import"./Checkbox-Din5bU9h.js";import"./FormControlLabel-BEQ-oSee.js";import"./styled-Dq_uxqGx.js";import"./Chip-CjxQ3nY6.js";import"./index-Beu9b4Vr.js";import"./Grid-DnB74UY1.js";import"./Currency-DDCk-yU7.js";import"./react-number-format.es-DkkvJ1RT.js";import"./Input-r1E-dZHT.js";import"./index-Bk1RaGfa.js";import"./Percent-DX5iZwNW.js";import"./TextArea-B-2fJdvD.js";import"./enqueueSnackbar-s739X2D4.js";const ne={title:"Example/Date Picker/RangePickerCalendar",component:o,parameters:{layout:"centered",docs:{source:{transform:u("RangePickerCalendar")}}},tags:["autodocs"],argTypes:{onSelect:{action:"onChange"}}},r={render:e=>{let t={};if(e!=null&&e.currentDate&&(t={...t,currentDate:new Date(e==null?void 0:e.currentDate)}),e!=null&&e.value&&Array.isArray(e==null?void 0:e.value)){const i=e==null?void 0:e.value.map(p=>new Date(p));t={...t,value:i}}return s.jsx(o,{...e,...t})},args:{...o.defaultProps,disableFuture:!1,disableCurrent:!1,disablePast:!1,currentDate:new Date,numberOfMonths:2,onSelect:l()}};var a,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
