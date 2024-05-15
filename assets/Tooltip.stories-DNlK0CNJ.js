import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{s as m}from"./index-DlyO01os.js";import{B as c,H as D}from"./Button-2qPWXf7R.js";import{a as l,I as p}from"./Icon.types-BKDllfL1.js";import{T as P}from"./Typography-Br6reEa4.js";import{T as u}from"./Tooltip-C_Tls1Mb.js";import{B as W}from"./Box-BmeHL9xr.js";import"./index-Dl6G-zuu.js";import"./index-Bm4I-j5O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B65QLLQ5.js";import"./useOnHover-DcG81d-b.js";import"./testIds-CT2jQqrK.js";import"./index-CYSaZ1-Z.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./ThemeWrapper-bDRlVNa7.js";import"./index-D1_ZHIBm.js";import"./index-C3QW2DIj.js";import"./Typography-BoXyf5oC.js";import"./palette-DMXrs0tI.js";import"./index-DL8WKete.js";import"./GlobalStyles-TexeS-Y5.js";import"./Avatar-DIASer-U.js";import"./DatePicker-ClnZxlh6.js";import"./index-Beu9b4Vr.js";import"./Typography-Cn8xeiu4.js";import"./createSvgIcon-KZc-bwgI.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./ButtonBase-oX6lAsK9.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useCommonOnChangeHandler-BSRxhs-1.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DJ9cSgbz.js";import"./Checkbox-CTvvVB9F.js";import"./FormControlLabel-CMkWOaX8.js";import"./Stack-CThqDOCM.js";import"./styled-DOXbsImH.js";import"./Chip-Cg86GGnn.js";import"./DateField-BQDLvCea.js";import"./DateRangeField-CaZuCD_w.js";import"./FileDropZone-BR12Sm9I.js";import"./Grid-6fRPV7AH.js";import"./Input-DFgCvLA-.js";import"./TextArea-B9sqycCQ.js";import"./ProgressBar-Qu8psmeY.js";import"./RadioButton.types-DvAbzWVW.js";const Dt={title:"Example/Tooltip",component:u,parameters:{layout:"centered",docs:{source:{transform:m("Tooltip")}}},tags:["autodocs"],render:b=>t.jsx(W,{children:t.jsx(u,{...b,children:t.jsx(c,{children:"Hover me"})})}),argTypes:{}},e={args:{...u.defaultProps,title:"This is a tooltip",content:"Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.",defaultOpen:!0,placement:"top",persistent:!1,allowClose:!1,fullWidth:!1}},o={args:{...e.args,title:"",content:"This is a very simple tooltip with long text",fullWidth:!0}},n={args:{...e.args,variant:"light"}},r={args:{...e.args,defaultOpen:!1,allowClose:!0,persistent:!0}},N=`
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
