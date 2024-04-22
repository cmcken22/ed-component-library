import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{s as p}from"./index-B_pG5fU1.js";import{B as m,H as O}from"./Button-DmoC_6a3.js";import{a as i,I as l}from"./Icon.types-Ba5UCeQa.js";import{T as k}from"./Typography-ClegP6xv.js";import{T as c}from"./Tooltip-CNbpjzJ1.js";import{B as V}from"./Box-DPTDcbim.js";import"./index-Dl6G-zuu.js";import"./index-DFf-bhEl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DtgTEXL7.js";import"./useOnHover-DcG81d-b.js";import"./testIds-Bl6124vV.js";import"./ThemeWrapper-Bqi56xwP.js";import"./index-D1_ZHIBm.js";import"./index-CpmRWZ9e.js";import"./GlobalStyles-BkdV5ugX.js";import"./Avatar-DAk9YqhF.js";import"./DatePicker-CbhqrcRL.js";import"./index-_OcG2YHj.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-Beu9b4Vr.js";import"./Typography-C8COxrag.js";import"./createSvgIcon-B9tpKWAV.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./ButtonBase-CdxKgBBF.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useCommonOnChangeHandler-DI5Lva2a.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-CXsvuMT9.js";import"./Typography-BGHga1vv.js";import"./Checkbox-DbV7KlYF.js";import"./FormControlLabel-BLlKfmfO.js";import"./Stack-B_sc2yyH.js";import"./styled-DlwMyq9x.js";import"./Chip-_XKwjvGn.js";import"./DateField-BFqi5wVH.js";import"./DateRangeField-DUC3IHSG.js";import"./Grid-BJJaesu6.js";import"./Input-D_MhUIRL.js";import"./TextArea-BtoFdhNv.js";import"./RadioButton.types-BELa6ELL.js";import"./palette-CiKahY_l.js";const Et={title:"Example/Tooltip",component:c,parameters:{layout:"centered",docs:{source:{transform:p("Tooltip")}}},tags:["autodocs"],render:F=>t.jsx(V,{children:t.jsx(c,{...F,children:t.jsx(m,{children:"Hover me"})})}),argTypes:{}},e={args:{...c.defaultProps,title:"Tooltip title",content:"Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.",defaultOpen:!0,placement:"top",persistent:!1,allowClose:!1}},o={args:{...e.args,variant:"light"}},n={args:{...e.args,defaultOpen:!1,allowClose:!0,persistent:!0}},b=`
    <HorizontalStack sx={{ alignItems: "center" }}>
      <Typography variant="h6">Custom title</Typography>
      <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
    </HorizontalStack>
  `,r={parameters:{layout:"centered",docs:{source:{transform:p("Tooltip",{map:{title:b}})}}},args:{...e.args,defaultOpen:!1,allowClose:!1,persistent:!1,title:t.jsxs(O,{sx:{alignItems:"center"},children:[t.jsx(k,{variant:"bodyR",children:"Custom title"}),t.jsx(i,{icon:l.HappyEmoji,size:20,color:"inherit"})]})}},D=`
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
  `,a={parameters:{layout:"centered",docs:{source:{transform:p("Tooltip",{map:{content:D}})}}},args:{...e.args,defaultOpen:!1,allowClose:!1,persistent:!1,title:"Custom Content",content:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",margin:"0 auto"},children:[t.jsx(i,{icon:l.HappyEmoji,size:20,color:"inherit"}),t.jsx(i,{icon:l.HappyEmoji,size:20,color:"inherit"}),t.jsx(i,{icon:l.HappyEmoji,size:20,color:"inherit"})]})}},P=`
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
  `,s={parameters:{layout:"centered",docs:{source:{transform:p("Tooltip",{map:{footer:P}})}}},args:{...e.args,defaultOpen:!1,allowClose:!1,persistent:!1,variant:"light",title:"Custom Footer",footer:t.jsxs(O,{sx:{alignItems:"center",justifyContent:"space-between",width:"100%",mt:1},children:[t.jsx(m,{variant:"outlined",children:"Prev"}),t.jsx(m,{children:"Next"})]})}};var u,d,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Tooltip.defaultProps,
    title: "Tooltip title",
    content: "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.",
    defaultOpen: true,
    placement: "top",
    persistent: false,
    allowClose: false
  }
}`,...(f=(d=e.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var g,C,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "light"
  }
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var h,x,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultOpen: false,
    allowClose: true,
    persistent: true
  }
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var I,T,H;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(T=r.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var z,v,w;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var E,S,B;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const St=["Default","Light","AllowClose","CustomTitle","CustomContent","CustomFooter"];export{n as AllowClose,a as CustomContent,s as CustomFooter,r as CustomTitle,e as Default,o as Light,St as __namedExportsOrder,Et as default};
