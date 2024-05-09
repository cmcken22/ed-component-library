import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{r as y}from"./index-Dl6G-zuu.js";import{s as g}from"./index-DOK-dFBq.js";import"./ThemeWrapper-BDVUGYr3.js";import"./Avatar-FMKA3gd5.js";import{M as r,B as C}from"./Button-d43TxtP-.js";import"./Checkbox-OLwf4oqH.js";import"./Chip-JRo1c3Yg.js";import"./Grid-CNULhpLV.js";import"./Icon.types-pqrT6upQ.js";import"./DateField-BJd6GFf2.js";import"./DateRangeField-4u2esDVm.js";import"./Input-02HW81G0.js";import"./TextArea-C5cvFItY.js";import"./RadioButton.types-DHdbIpIC.js";import"./Tooltip-bDknbv3d.js";import{T as x}from"./Typography-Db548vBZ.js";import{B as h}from"./Box-DPTDcbim.js";import"./index-DFf-bhEl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DtgTEXL7.js";import"./index-D1_ZHIBm.js";import"./index-CpmRWZ9e.js";import"./GlobalStyles-BkdV5ugX.js";import"./useOnHover-DcG81d-b.js";import"./testIds-K29TpReK.js";import"./index-Dj5QuGqs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./DatePicker-DnE9E4aP.js";import"./index-Beu9b4Vr.js";import"./Typography-C8COxrag.js";import"./createSvgIcon-B9tpKWAV.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./ButtonBase-CdxKgBBF.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useCommonOnChangeHandler-ByM5h5Kz.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-CXsvuMT9.js";import"./Typography-BGHga1vv.js";import"./Stack-B_sc2yyH.js";import"./styled-DlwMyq9x.js";import"./FormControlLabel-BLlKfmfO.js";import"./palette-CiKahY_l.js";const f=({children:t,...p})=>{const[s,n]=y.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(r,{...p,open:s,onClose:()=>n(!1),children:[o.jsx(r.Header,{title:"Title",subtitle:"Header Subtitle or Short Sentence"}),o.jsx(r.Content,{children:o.jsx(h,{sx:{display:"flex",flexDirection:"column"},children:t})}),o.jsx(r.Footer,{acceptBtnText:"Confirm",cancelBtnText:"Close",onAccept:()=>n(!1),onCancel:()=>n(!1)})]}),o.jsx(C,{onClick:()=>n(!0),children:"Open Modal"})]})},lo={title:"Example/Modal",component:r,subcomponents:{Header:r.Header,Content:r.Content,Footer:r.Footer},parameters:{layout:"centered",docs:{source:{transform:g("Modal")}}},tags:["autodocs"],argTypes:{onClose:{action:"onClose"},open:{control:{type:"boolean"}},hideCloseIcon:{control:{type:"boolean"}}}},e={render:t=>o.jsx(f,{...t,children:o.jsx(x,{variant:"bodyR",children:"Content"})}),args:{...r.defaultProps,open:!1}},a={render:t=>o.jsx(f,{...t,children:Array.from({length:100},(p,s)=>o.jsx(x,{variant:"bodyR",children:"Content"},s))}),args:{...e.args}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => <TestModal {...args}>
      <Typography variant="bodyR">Content</Typography>
    </TestModal>,
  args: {
    ...Modal.defaultProps,
    open: false
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: any) => <TestModal {...args}>
      {Array.from({
      length: 100
    }, (_, i) => <Typography key={i} variant="bodyR">
          Content
        </Typography>)}
    </TestModal>,
  args: {
    ...Default.args
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const co=["Default","MaxContent"];export{e as Default,a as MaxContent,co as __namedExportsOrder,lo as default};
