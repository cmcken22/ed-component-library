import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{f as l}from"./index-BnUgH7jw.js";import{s as u}from"./index-B_pG5fU1.js";import{b as o}from"./DatePicker-BIjwVOc_.js";import"./index-Dl6G-zuu.js";import"./helpers-ClaLYwNh.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./styled-FV1-rYEQ.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DE3xBI18.js";import"./Tooltip-CN2EnKML.js";import"./index-CxDPfwJT.js";import"./useTheme-CcKttCxE.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./createSvgIcon-Buc-ZZ8X.js";import"./GlobalStyles-BeLHs97O.js";import"./index-DfBNxlIc.js";import"./Typography-CxczIWni.js";import"./Typography-DbM4VYj_.js";import"./Typography-C-mBF-gq.js";import"./Box-D-p1WQB6.js";import"./Icon.types-BTMS2b-f.js";import"./useOnHover-B5yjJnBG.js";import"./index-BhdLl6eK.js";import"./palette-DffXsAfV.js";import"./Button-C6Qvk66p.js";import"./ButtonBase-OJEn4JjY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./ThemeWrapper-DX57becO.js";import"./Avatar-Cgo6Uob0.js";import"./Checkbox-Csiw2tTP.js";import"./FormControlLabel-DGC4j37D.js";import"./styled-CrVuE4qO.js";import"./Chip-Cb4muStl.js";import"./index-Beu9b4Vr.js";import"./Grid-D0Jci1PI.js";import"./Currency-oc0fCwKW.js";import"./react-number-format.es-DkkvJ1RT.js";import"./Input-6HCnmzDM.js";import"./index-Bk1RaGfa.js";import"./Percent-Dw_5VOAE.js";import"./TextArea-OfhDDXFe.js";import"./enqueueSnackbar-MHHZpk1v.js";const mt={title:"Example/Date Picker/RangePickerCalendar",component:o,parameters:{layout:"centered",docs:{source:{transform:u("RangePickerCalendar")}}},tags:["autodocs"],argTypes:{onSelect:{action:"onChange"}}},r={render:t=>{let e={};if(t!=null&&t.currentDate&&(e={...e,currentDate:new Date(t==null?void 0:t.currentDate)}),t!=null&&t.value&&Array.isArray(t==null?void 0:t.value)){const i=t==null?void 0:t.value.map(p=>new Date(p));e={...e,value:i}}return s.jsx(o,{...t,...e})},args:{...o.defaultProps,disableFuture:!1,disableCurrent:!1,disablePast:!1,currentDate:new Date,numberOfMonths:2,onSelect:l()}};var a,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const it=["Default"];export{r as Default,it as __namedExportsOrder,mt as default};
