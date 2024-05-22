import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{s as m}from"./index-DlyO01os.js";import{B as c,H as D}from"./Button-C5LBrWSq.js";import{a as l,I as p}from"./Icon.types-Cts1U0M4.js";import{T as P}from"./Typography-BXdRB8J7.js";import{T as u}from"./Tooltip-DuZ10qG3.js";import{B as W}from"./Box-gQIt9B05.js";import"./index-Dl6G-zuu.js";import"./index-DGPhUUWW.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-CxQfeomc.js";import"./useOnHover-DcG81d-b.js";import"./testIds-CT2jQqrK.js";import"./index-B-KJ_PcS.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./ThemeWrapper-p027yzCS.js";import"./index-D1_ZHIBm.js";import"./index-CZ29VMm6.js";import"./Typography-u1033W3R.js";import"./palette-CESXTxp7.js";import"./index-CiDPmov_.js";import"./GlobalStyles-CgXowqDm.js";import"./Avatar-CUxUFj2W.js";import"./DatePicker-Bgh_D4xi.js";import"./index-Beu9b4Vr.js";import"./Typography-rB6r_AZO.js";import"./createSvgIcon-D2rEfC9A.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./ButtonBase-lJFSTU0I.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useCommonOnChangeHandler-DfyMK7Qn.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DFVa8SY2.js";import"./styled-CE3BHGdM.js";import"./Checkbox-D1dTJqUW.js";import"./FormControlLabel-QMhEfIZX.js";import"./Stack-l5PVF6Ai.js";import"./Chip-CU5XfiV5.js";import"./DateField-DTgvYcYf.js";import"./DateRangeField-CGyRSQe9.js";import"./FileDropZone-CU33z5_1.js";import"./Grid-CCc2OB1M.js";import"./Input-Dj9KVutp.js";import"./TextArea-BS8aYn7o.js";import"./ProgressBar-abn_nouz.js";import"./RadioButton.types-wYdjOlzo.js";const Dt={title:"Example/Tooltip",component:u,parameters:{layout:"centered",docs:{source:{transform:m("Tooltip")}}},tags:["autodocs"],render:b=>t.jsx(W,{children:t.jsx(u,{...b,children:t.jsx(c,{children:"Hover me"})})}),argTypes:{}},e={args:{...u.defaultProps,title:"This is a tooltip",content:"Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.",defaultOpen:!0,placement:"top",persistent:!1,allowClose:!1,fullWidth:!1}},o={args:{...e.args,title:"",content:"This is a very simple tooltip with long text",fullWidth:!0}},n={args:{...e.args,variant:"light"}},r={args:{...e.args,defaultOpen:!1,allowClose:!0,persistent:!0}},N=`
    <HorizontalStack sx={{ alignItems: "center" }}>
      <Typography variant="h6">Custom title</Typography>
      <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
    </HorizontalStack>
  `,a={parameters:{layout:"centered",docs:{source:{transform:m("Tooltip",{map:{title:N}})}}},args:{...e.args,defaultOpen:!1,allowClose:!1,persistent:!1,title:t.jsxs(D,{sx:{alignItems:"center"},children:[t.jsx(P,{variant:"bodyR",children:"Custom title"}),t.jsx(l,{icon:p.HappyEmoji,size:20,color:"inherit"})]})}},R=`
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        margin: "0 auto",
      }}
    >
      <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
      <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
      <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
    </div>
  `,s={parameters:{layout:"centered",docs:{source:{transform:m("Tooltip",{map:{content:R}})}}},args:{...e.args,defaultOpen:!1,allowClose:!1,persistent:!1,title:"Custom Content",content:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",margin:"0 auto"},children:[t.jsx(l,{icon:p.HappyEmoji,size:20,color:"inherit"}),t.jsx(l,{icon:p.HappyEmoji,size:20,color:"inherit"}),t.jsx(l,{icon:p.HappyEmoji,size:20,color:"inherit"})]})}},A=`
    <HorizontalStack
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        mt: 1,
      }}
    >
      <Button variant="outlined">Prev</Button>
      <Button>Next</Button>
    </HorizontalStack>
  `,i={parameters:{layout:"centered",docs:{source:{transform:m("Tooltip",{map:{footer:A}})}}},args:{...e.args,defaultOpen:!1,allowClose:!1,persistent:!1,variant:"light",title:"Custom Footer",footer:t.jsxs(D,{sx:{alignItems:"center",justifyContent:"space-between",width:"100%",mt:1},children:[t.jsx(c,{variant:"outlined",children:"Prev"}),t.jsx(c,{children:"Next"})]})}};var d,f,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Tooltip.defaultProps,
    title: "This is a tooltip",
    content: "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.",
    defaultOpen: true,
    placement: "top",
    persistent: false,
    allowClose: false,
    fullWidth: false
  }
}`,...(g=(f=e.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,C,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "",
    content: "This is a very simple tooltip with long text",
    fullWidth: true
  }
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var x,j,I;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "light"
  }
}`,...(I=(j=n.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var T,H,v;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultOpen: false,
    allowClose: true,
    persistent: true
  }
}`,...(v=(H=r.parameters)==null?void 0:H.docs)==null?void 0:v.source}}};var z,w,S;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Tooltip", {
          map: {
            title: CustomTitleCode
          }
        })
      }
    }
  },
  args: {
    ...Default.args,
    defaultOpen: false,
    allowClose: false,
    persistent: false,
    title: <HorizontalStack sx={{
      alignItems: "center"
    }}>
        <Typography variant="bodyR">Custom title</Typography>
        <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
      </HorizontalStack>
  }
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var E,O,B;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Tooltip", {
          map: {
            content: CustomContentCode
          }
        })
      }
    }
  },
  args: {
    ...Default.args,
    defaultOpen: false,
    allowClose: false,
    persistent: false,
    title: "Custom Content",
    content: <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      margin: "0 auto"
    }}>
        <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
        <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
        <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
      </div>
  }
}`,...(B=(O=s.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var F,k,V;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Tooltip", {
          map: {
            footer: CustomFooterCode
          }
        })
      }
    }
  },
  args: {
    ...Default.args,
    defaultOpen: false,
    allowClose: false,
    persistent: false,
    variant: "light",
    title: "Custom Footer",
    footer: <HorizontalStack sx={{
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      mt: 1
    }}>
        <Button variant="outlined">Prev</Button>
        <Button>Next</Button>
      </HorizontalStack>
  }
}`,...(V=(k=i.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};const bt=["Default","ContentOnly","Light","AllowClose","CustomTitle","CustomContent","CustomFooter"];export{r as AllowClose,o as ContentOnly,s as CustomContent,i as CustomFooter,a as CustomTitle,e as Default,n as Light,bt as __namedExportsOrder,Dt as default};
