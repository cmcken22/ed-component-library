import{j as i}from"./jsx-runtime-Du8NFWEI.js";import{s as b}from"./index-B_pG5fU1.js";import{R as n}from"./Button-qCeSoY-y.js";import{B as g}from"./Box-DPTDcbim.js";import"./index-Dl6G-zuu.js";import"./index-DFf-bhEl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DtgTEXL7.js";import"./Icon.types-Ba5UCeQa.js";import"./Typography-BGHga1vv.js";import"./index-_OcG2YHj.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./palette-CiKahY_l.js";import"./useOnHover-DcG81d-b.js";import"./testIds-Bl6124vV.js";import"./ThemeWrapper-BC0j1MWR.js";import"./Typography-ClegP6xv.js";import"./Typography-C8COxrag.js";import"./index-D1_ZHIBm.js";import"./index-CpmRWZ9e.js";import"./GlobalStyles-BkdV5ugX.js";import"./Avatar-DAk9YqhF.js";import"./Tooltip-CNbpjzJ1.js";import"./Stack-B_sc2yyH.js";import"./styled-DlwMyq9x.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./inheritsLoose-B7h9gheN.js";import"./DatePicker-D4dhWDwh.js";import"./index-Beu9b4Vr.js";import"./createSvgIcon-B9tpKWAV.js";import"./ButtonBase-CdxKgBBF.js";import"./assertThisInitialized-B9jnkVVz.js";import"./useCommonOnChangeHandler-UR5sVcBX.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-CXsvuMT9.js";import"./Checkbox-DbV7KlYF.js";import"./FormControlLabel-BLlKfmfO.js";import"./Chip-D9EWMA4o.js";import"./DateField-D7WHR2fg.js";import"./DateRangeField-C_bIiRH5.js";import"./Grid-BJJaesu6.js";import"./Input-zE8CS11a.js";import"./TextArea-Bv6z7v0Z.js";import"./RadioButton.types-BELa6ELL.js";const lt={title:"Example/Date Picker/RangePicker",component:n,parameters:{layout:"centered",docs:{source:{transform:b("RangePicker")}}},render:t=>{let r={};if(t!=null&&t.currentDate&&(r={...t,currentDate:new Date(t==null?void 0:t.currentDate)}),t!=null&&t.value){const P=t==null?void 0:t.value.map(h=>new Date(h));r={...r,value:P}}return i.jsx(n,{...t,...r})},tags:["autodocs"],argTypes:{onChange:{action:"onChange"},onValidation:{action:"onValidation"},value:{control:{type:"array"}},calendarPlacement:{options:["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"],control:{type:"select"}},status:{options:["error","success","warning"],control:{type:"radio"}},labelPosition:{options:["top","left"],control:{type:"radio"}}}},e={args:{...n.defaultProps,id:"range_picker",label:"Range Picker",helperText:"Helper Text",placeholder:["Start date","End date"],popoverProps:{arrow:!1,offset:[0,8]}}},o={args:{...e.args,labelPosition:"left"}},a={render:t=>i.jsx(g,{sx:{height:"100px",width:"300px"},children:i.jsx(n,{...t})}),args:{...e.args,variant:"table"}};var p,m,s;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
  }}>
      <RangePicker {...args} />
    </Box>,
  args: {
    ...Default.args,
    variant: "table"
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const ct=["Default","LeftLabel","TableVariant"];export{e as Default,o as LeftLabel,a as TableVariant,ct as __namedExportsOrder,lt as default};
