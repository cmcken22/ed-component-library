import{j as i}from"./jsx-runtime-Du8NFWEI.js";import{s as h}from"./index-B_pG5fU1.js";import{R as n}from"./Button-DT3EtM8i.js";import{B as g}from"./Box-QN4gLg71.js";import"./index-Dl6G-zuu.js";import"./index-CcbsCGxW.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./Icon.types-DlHNAABk.js";import"./useOnHover-DcG81d-b.js";import"./Typography-DbM4VYj_.js";import"./index-DfaGUJ00.js";import"./useTheme-zj3HIc-m.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./palette-DCNmPToj.js";import"./ThemeWrapper-DOC84Tbd.js";import"./Typography-ad_3Alod.js";import"./Typography-ByMLqIOY.js";import"./index-D1_ZHIBm.js";import"./index-CxDPfwJT.js";import"./GlobalStyles-B4XTyhQR.js";import"./Avatar-DPa3YPJX.js";import"./Tooltip-DP6TBYy0.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./inheritsLoose-B7h9gheN.js";import"./Checkbox-CIiCrQq3.js";import"./FormControlLabel-EfhPbLgJ.js";import"./useFormControl-EHw8eS4L.js";import"./styled-CyX8x3PR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./createSvgIcon-By8APFNA.js";import"./Chip-Dz07MYK7.js";import"./helpers-DG-CnUbz.js";import"./Paper-CwDAdALs.js";import"./index-Beu9b4Vr.js";import"./Grid-CwkbpFXQ.js";import"./Currency-D4OFtLWw.js";import"./react-number-format.es-DkkvJ1RT.js";import"./Input-C8QqeBjV.js";import"./index-BqFaNRbK.js";import"./Percent-DtwbiqxV.js";import"./TextArea-Dex1xWFd.js";const mt={title:"Example/Date Picker/RangePicker",component:n,parameters:{layout:"centered",docs:{source:{transform:h("RangePicker")}}},render:t=>{let r={};if(t!=null&&t.currentDate&&(r={...t,currentDate:new Date(t==null?void 0:t.currentDate)}),t!=null&&t.value){const P=t==null?void 0:t.value.map(b=>new Date(b));r={...r,value:P}}return i.jsx(n,{...t,...r})},tags:["autodocs"],argTypes:{onChange:{action:"onChange"},onValidation:{action:"onValidation"},value:{control:{type:"array"}},calendarPlacement:{options:["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"],control:{type:"select"}},status:{options:["error","success","warning"],control:{type:"radio"}},labelPosition:{options:["top","left"],control:{type:"radio"}}}},e={args:{...n.defaultProps,id:"range_picker",label:"Range Picker",helperText:"Helper Text",placeholder:["Start date","End date"],popoverProps:{arrow:!1,offset:[0,8]}}},o={args:{...e.args,labelPosition:"left"}},a={render:t=>i.jsx(g,{sx:{height:"100px",width:"300px"},children:i.jsx(n,{...t})}),args:{...e.args,variant:"table"}};var p,m,s;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...RangePicker.defaultProps,
    id: "range_picker",
    label: "Range Picker",
    helperText: "Helper Text",
    placeholder: ["Start date", "End date"],
    popoverProps: {
      arrow: false,
      offset: [0, 8]
    }
  }
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    labelPosition: "left"
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Box sx={{
    height: "100px",
    width: "300px"
    // backgroundColor: "rgba(255, 0, 255, 0.1)",
  }}>
      <RangePicker {...args} />
    </Box>,
  args: {
    ...Default.args,
    variant: "table"
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const st=["Default","LeftLabel","TableVariant"];export{e as Default,o as LeftLabel,a as TableVariant,st as __namedExportsOrder,mt as default};
