import{j as P}from"./jsx-runtime-Du8NFWEI.js";import{r as i}from"./index-Dl6G-zuu.js";import{c}from"./commonArgTypes-Cz1rbySM.js";import{s as R}from"./index-DlyO01os.js";import{I as m}from"./Icon.types-Dxrb28Jb.js";import{B as S}from"./Button-CwkT7QO6.js";import"./index-DFf-bhEl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DtgTEXL7.js";import"./Typography-BGHga1vv.js";import"./index-xi7t2yyr.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./palette-CQ4KNksy.js";import"./useOnHover-DcG81d-b.js";import"./Box-DPTDcbim.js";import"./testIds-K29TpReK.js";import"./ThemeWrapper-CLi4j_ee.js";import"./Typography-Db548vBZ.js";import"./Typography-C8COxrag.js";import"./index-D1_ZHIBm.js";import"./index-CpmRWZ9e.js";import"./GlobalStyles-BkdV5ugX.js";import"./Avatar-CxMVQTgy.js";import"./Tooltip-CzPRUoZp.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./inheritsLoose-B7h9gheN.js";import"./Stack-B_sc2yyH.js";import"./styled-DlwMyq9x.js";import"./DatePicker-DAg2a-z6.js";import"./index-Beu9b4Vr.js";import"./createSvgIcon-B9tpKWAV.js";import"./ButtonBase-CdxKgBBF.js";import"./assertThisInitialized-B9jnkVVz.js";import"./useCommonOnChangeHandler-CejeZjjp.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-CXsvuMT9.js";import"./Checkbox-OLwf4oqH.js";import"./FormControlLabel-BLlKfmfO.js";import"./Chip-C2IzmdZR.js";import"./DateField-Cpd1si__.js";import"./DateRangeField-DZwkc384.js";import"./Grid-DQvCoX54.js";import"./Input-BWIlc7g8.js";import"./TextArea-D8cMXacj.js";import"./RadioButton.types-CyWRnN95.js";const j=o=>{const x=i.useMemo(()=>{if((o==null?void 0:o.iconLeft)!=="undefined")return o==null?void 0:o.iconLeft},[o==null?void 0:o.iconLeft]),L=i.useMemo(()=>{if((o==null?void 0:o.iconRight)!=="undefined")return o==null?void 0:o.iconRight},[o==null?void 0:o.iconRight]);return P.jsx(S,{...o,iconLeft:x,iconRight:L})},Bo={title:"Example/Button",component:S,parameters:{backgrounds:{default:"dark"},layout:"centered",docs:{source:{transform:R("Button")}}},render:j,tags:["autodocs"],argTypes:{...c.onClick,...c.onHover,color:{options:["primary","secondary","danger"],control:{type:"select"}},variant:{options:["contained","outlined","link"],control:{type:"select"}},iconLeft:{options:[void 0,...Object.keys(m)],control:{type:"select"}},iconRight:{options:[void 0,...Object.keys(m)],control:{type:"select"}}}},r={args:{children:"Primary Button",variant:"contained",color:"primary",loading:!1}},t={args:{...r.args,children:"Secondary Button",color:"secondary"}},e={args:{...r.args,children:"Danger Button",color:"danger"}},n={args:{children:"Click Me",variant:"contained",color:"primary",iconLeft:"Heart"}};var a,p,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "contained",
    color: "primary",
    loading: false
  }
}`,...(s=(p=r.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var d,l,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Secondary Button",
    color: "secondary"
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var y,f,h;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: "Danger Button",
    color: "danger"
  }
}`,...(h=(f=e.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,B,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Click Me",
    variant: "contained",
    color: "primary",
    iconLeft: "Heart"
  }
}`,...(k=(B=n.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const ko=["Primary","Secondary","Danger","WithIcon"];export{e as Danger,r as Primary,t as Secondary,n as WithIcon,ko as __namedExportsOrder,Bo as default};
