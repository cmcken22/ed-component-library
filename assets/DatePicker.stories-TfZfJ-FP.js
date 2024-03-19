import{j as i}from"./jsx-runtime-Du8NFWEI.js";import{s as m}from"./index-DjbcUtqK.js";import{D as o}from"./DatePicker-2rLIWey5.js";import"./index-Dl6G-zuu.js";import"./BaseInput.types-Byba_d1A.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./styled-w1uBJNCI.js";import"./GlobalStyles-BFqByqGf.js";import"./Icon-BtEdJI3L.js";import"./Typography-CwlVby8-.js";import"./palette-DffXsAfV.js";import"./Box-C2XYFoeC.js";import"./TransitionGroupContext-6TzUecMu.js";import"./inheritsLoose-B7h9gheN.js";import"./index-D1_ZHIBm.js";import"./createSvgIcon-BP9fb_UE.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-DKrUwtw9.js";import"./Typography-BmzuiwxG.js";import"./ThemeWrapper-DzIdJvTu.js";import"./Avatar-DKR2KhpK.js";import"./useOnHover-B5yjJnBG.js";import"./Button-e4SxMJ8x.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-BFDeuqCQ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Checkbox-BmrJKc4W.js";import"./FormControlLabel-C_gVR9GN.js";import"./Chip-Bi0_kYxl.js";import"./index-Beu9b4Vr.js";import"./Currency-S2apet0C.js";import"./Dropdown-G6Rk-ydQ.js";import"./Input-CGNHRJDV.js";import"./enqueueSnackbar-CNkjsw7A.js";const M={title:"Example/Date Picker/DatePicker",component:o,parameters:{layout:"centered",docs:{source:{transform:m("DatePicker")}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"},onValidation:{action:"onValidation"},value:{control:{type:"date"}},calendarPlacement:{options:["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"],control:{type:"select"}},status:{options:["error","success","warning"],control:{type:"radio"}},labelPosition:{options:["top","left"],control:{type:"radio"}}}},r={render:t=>{let e={};return t!=null&&t.currentDate&&(e={...e,currentDate:new Date(t==null?void 0:t.currentDate)}),t!=null&&t.value&&(e={...e,value:new Date(t==null?void 0:t.value)}),i.jsx(o,{...t,...e})},args:{...o.defaultProps,id:"date-picker",label:"Date Picker",helperText:"Helper Text",placeholder:"Please enter date",popoverProps:{arrow:!1,offset:[0,8]}}};var a,p,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    let formattedProps = {};
    if (args?.currentDate) {
      formattedProps = {
        ...formattedProps,
        currentDate: new Date(args?.currentDate)
      };
    }
    if (args?.value) {
      formattedProps = {
        ...formattedProps,
        value: new Date(args?.value)
      };
    }
    return <DatePicker {...args} {...formattedProps} />;
  },
  args: {
    ...DatePicker.defaultProps,
    id: "date-picker",
    label: "Date Picker",
    helperText: "Helper Text",
    placeholder: "Please enter date",
    popoverProps: {
      arrow: false,
      offset: [0, 8]
    }
  }
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const N=["Sample"];export{r as Sample,N as __namedExportsOrder,M as default};
