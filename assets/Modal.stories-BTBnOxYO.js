import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{r as g}from"./index-Dl6G-zuu.js";import{s as A,f as y}from"./index-DlyO01os.js";import{a as d,I as m}from"./Icon.types-BKDllfL1.js";import"./ThemeWrapper-bDRlVNa7.js";import"./Avatar-DIASer-U.js";import{M as e,B as x}from"./Button-2qPWXf7R.js";import"./Checkbox-CTvvVB9F.js";import"./Chip-Cg86GGnn.js";import"./FileDropZone-BR12Sm9I.js";import"./Grid-6fRPV7AH.js";import"./DateField-BQDLvCea.js";import"./DateRangeField-CaZuCD_w.js";import"./Input-DFgCvLA-.js";import"./TextArea-B9sqycCQ.js";import"./ProgressBar-Qu8psmeY.js";import"./RadioButton.types-DvAbzWVW.js";import"./Tooltip-C_Tls1Mb.js";import{T as i}from"./Typography-Br6reEa4.js";import"./index-C3QW2DIj.js";import{B as v}from"./Box-BmeHL9xr.js";import"./index-Bm4I-j5O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B65QLLQ5.js";import"./useOnHover-DcG81d-b.js";import"./index-CYSaZ1-Z.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-D1_ZHIBm.js";import"./index-DL8WKete.js";import"./GlobalStyles-TexeS-Y5.js";import"./testIds-CT2jQqrK.js";import"./DatePicker-ClnZxlh6.js";import"./index-Beu9b4Vr.js";import"./Typography-Cn8xeiu4.js";import"./createSvgIcon-KZc-bwgI.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./ButtonBase-oX6lAsK9.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useCommonOnChangeHandler-BSRxhs-1.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DJ9cSgbz.js";import"./Typography-BoXyf5oC.js";import"./Stack-CThqDOCM.js";import"./styled-DOXbsImH.js";import"./FormControlLabel-CMkWOaX8.js";import"./palette-DMXrs0tI.js";const I=({children:o,...a})=>{const[r,t]=g.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(e,{...a,open:r,onClose:()=>t(!1),children:[n.jsx(e.Header,{title:"Title",subtitle:"Header Subtitle or Short Sentence"}),n.jsx(e.Content,{children:o}),n.jsx(e.Footer,{acceptBtnText:"Confirm",cancelBtnText:"Close",onAccept:()=>t(!1),onCancel:()=>t(!1)})]}),n.jsx(x,{onClick:()=>t(!0),children:"Open Modal"})]})},R=({children:o,...a})=>{const[r,t]=g.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(e,{...a,open:r,onClose:()=>t(!1),children:[n.jsx(e.Header,{children:n.jsxs(v,{display:"flex",alignItems:"center",flexDirection:"row",gap:1,sx:{color:"primary.main"},children:[n.jsx(d,{icon:m.HappyEmoji,color:"inherit"}),n.jsx(i,{variant:"h4",color:"inherit",children:"Custom Header"}),n.jsx(d,{icon:m.HappyEmoji,color:"inherit"})]})}),n.jsx(e.Content,{children:o}),n.jsx(e.Footer,{acceptBtnText:"Confirm",cancelBtnText:"Close",onAccept:()=>t(!1),onCancel:()=>t(!1)})]}),n.jsx(x,{onClick:()=>t(!0),children:"Open Modal"})]})},_=({children:o,...a})=>{const[r,t]=g.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(e,{...a,open:r,onClose:()=>t(!1),children:[n.jsx(e.Header,{title:"Title",subtitle:"Header Subtitle or Short Sentence"}),n.jsx(e.Content,{children:o}),n.jsxs(e.Footer,{sx:{justifyContent:"space-between"},children:[n.jsx(d,{icon:m.Hand,color:"inherit"}),n.jsx(i,{variant:"h4",color:"inherit",children:"Custom Footer"}),n.jsx(d,{icon:m.Save,color:"inherit"})]})]}),n.jsx(x,{onClick:()=>t(!0),children:"Open Modal"})]})},Fn={title:"Example/Modal",component:e,subcomponents:{Header:e.Header,Content:e.Content,Footer:e.Footer},parameters:{layout:"centered",docs:{source:{transform:A("Modal")}}},tags:["autodocs"],argTypes:{onClose:{action:"onClose"},open:{control:{type:"boolean"}},hideCloseIcon:{control:{type:"boolean"}}}},s={parameters:{layout:"centered",docs:{source:{transform:(o,a)=>{const{args:r}=a;return`
<Modal
${y({args:r,indent:1})}>
  <Modal.Header title="Title" subtitle="Header Subtitle or Short Sentence" />
  <Modal.Content>
      <Typography variant="bodyR">Content</Typography>
  </Modal.Content>
  <Modal.Footer
    acceptBtnText="Confirm"
    cancelBtnText="Close"
    onAccept={() => {}}
    onCancel={() => {}}
  />
</Modal>
`}}}},render:o=>n.jsx(I,{...o,children:n.jsx(i,{variant:"bodyR",children:"Content"})}),args:{...e.defaultProps,open:!1}},c={parameters:{layout:"centered",docs:{source:{transform:(o,a)=>{const{args:r}=a;return`
<Modal
${y({args:r,indent:1})}>
  <Modal.Header title="Title" subtitle="Header Subtitle or Short Sentence" />
  <Modal.Content>
    {Array.from({ length: 100 }, (_, i) => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography key={i} variant="bodyR">
          Content
        </Typography>
      </Box>
    ))}
  </Modal.Content>
  <Modal.Footer
    acceptBtnText="Confirm"
    cancelBtnText="Close"
    onAccept={() => {}}
    onCancel={() => {}}
  />
</Modal>
`}}}},render:o=>n.jsx(I,{...o,children:Array.from({length:100},(a,r)=>n.jsx(v,{sx:{display:"flex",flexDirection:"column"},children:n.jsx(i,{variant:"bodyR",children:"Content"},r)}))}),args:{...s.args}},l={parameters:{layout:"centered",docs:{source:{transform:(o,a)=>{const{args:r}=a;return`
<Modal
${y({args:r,indent:1})}>
  <Modal.Header>
    <Box
      display="flex"
      alignItems="center"
      flexDirection="row"
      gap={1}
      sx={{
        color: "primary.main",
      }}
    >
      <Icon icon={IconVariant.HappyEmoji} color="inherit" />
      <Typography variant="h4" color="inherit">
        Custom Header
      </Typography>
      <Icon icon={IconVariant.HappyEmoji} color="inherit" />
    </Box>
  </Modal.Header>
  <Modal.Content>
    <Typography variant="bodyR">
      Content
    </Typography>
  </Modal.Content>
  <Modal.Footer
    acceptBtnText="Confirm"
    cancelBtnText="Close"
    onAccept={() => {}}
    onCancel={() => {}}
  />
</Modal>
`}}}},render:o=>n.jsx(R,{...o,children:n.jsx(i,{variant:"bodyR",children:"Content"})}),args:{...s.args}},p={parameters:{layout:"centered",docs:{source:{transform:(o,a)=>{const{args:r}=a;return`
<Modal
${y({args:r,indent:1})}>
  <Modal.Header title="Title" subtitle="Header Subtitle or Short Sentence" />
  <Modal.Content>
    <Typography variant="bodyR">
      Content
    </Typography>
  </Modal.Content>
  <Modal.Footer
    sx={{
      justifyContent: "space-between",
    }}
  >
    <Icon icon={IconVariant.Hand} color="inherit" />
    <Typography variant="h4" color="inherit">
      Custom Footer
    </Typography>
    <Icon icon={IconVariant.Save} color="inherit" />
  </Modal.Footer>
</Modal>
`}}}},render:o=>n.jsx(_,{...o,children:n.jsx(i,{variant:"bodyR",children:"Content"})}),args:{...s.args}};var u,h,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: (_: any, context: any) => {
          const {
            args
          } = context;
          const argString = formatArgs({
            args,
            indent: 1
          });
          return \`
<Modal
\${argString}>
  <Modal.Header title="Title" subtitle="Header Subtitle or Short Sentence" />
  <Modal.Content>
      <Typography variant="bodyR">Content</Typography>
  </Modal.Content>
  <Modal.Footer
    acceptBtnText="Confirm"
    cancelBtnText="Close"
    onAccept={() => {}}
    onCancel={() => {}}
  />
</Modal>
\`;
        }
      }
    }
  },
  render: (args: any) => <TestModal {...args}>
      <Typography variant="bodyR">Content</Typography>
    </TestModal>,
  args: {
    ...Modal.defaultProps,
    open: false
  }
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var M,f,T;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: (_: any, context: any) => {
          const {
            args
          } = context;
          const argString = formatArgs({
            args,
            indent: 1
          });
          return \`
<Modal
\${argString}>
  <Modal.Header title="Title" subtitle="Header Subtitle or Short Sentence" />
  <Modal.Content>
    {Array.from({ length: 100 }, (_, i) => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography key={i} variant="bodyR">
          Content
        </Typography>
      </Box>
    ))}
  </Modal.Content>
  <Modal.Footer
    acceptBtnText="Confirm"
    cancelBtnText="Close"
    onAccept={() => {}}
    onCancel={() => {}}
  />
</Modal>
\`;
        }
      }
    }
  },
  render: (args: any) => <TestModal {...args}>
      {Array.from({
      length: 100
    }, (_, i) => <Box sx={{
      display: "flex",
      flexDirection: "column"
    }}>
          <Typography key={i} variant="bodyR">
            Content
          </Typography>
        </Box>)}
    </TestModal>,
  args: {
    ...Default.args
  }
}`,...(T=(f=c.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var S,j,H;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: (_: any, context: any) => {
          const {
            args
          } = context;
          const argString = formatArgs({
            args,
            indent: 1
          });
          return \`
<Modal
\${argString}>
  <Modal.Header>
    <Box
      display="flex"
      alignItems="center"
      flexDirection="row"
      gap={1}
      sx={{
        color: "primary.main",
      }}
    >
      <Icon icon={IconVariant.HappyEmoji} color="inherit" />
      <Typography variant="h4" color="inherit">
        Custom Header
      </Typography>
      <Icon icon={IconVariant.HappyEmoji} color="inherit" />
    </Box>
  </Modal.Header>
  <Modal.Content>
    <Typography variant="bodyR">
      Content
    </Typography>
  </Modal.Content>
  <Modal.Footer
    acceptBtnText="Confirm"
    cancelBtnText="Close"
    onAccept={() => {}}
    onCancel={() => {}}
  />
</Modal>
\`;
        }
      }
    }
  },
  render: (args: any) => <CustomHeaderModal {...args}>
      <Typography variant="bodyR">Content</Typography>
    </CustomHeaderModal>,
  args: {
    ...Default.args
  }
}`,...(H=(j=l.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var b,B,F;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: (_: any, context: any) => {
          const {
            args
          } = context;
          const argString = formatArgs({
            args,
            indent: 1
          });
          return \`
<Modal
\${argString}>
  <Modal.Header title="Title" subtitle="Header Subtitle or Short Sentence" />
  <Modal.Content>
    <Typography variant="bodyR">
      Content
    </Typography>
  </Modal.Content>
  <Modal.Footer
    sx={{
      justifyContent: "space-between",
    }}
  >
    <Icon icon={IconVariant.Hand} color="inherit" />
    <Typography variant="h4" color="inherit">
      Custom Footer
    </Typography>
    <Icon icon={IconVariant.Save} color="inherit" />
  </Modal.Footer>
</Modal>
\`;
        }
      }
    }
  },
  render: (args: any) => <CustomFooterModal {...args}>
      <Typography variant="bodyR">Content</Typography>
    </CustomFooterModal>,
  args: {
    ...Default.args
  }
}`,...(F=(B=p.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const vn=["Default","MaxContent","CustomHeader","CustomFooter"];export{p as CustomFooter,l as CustomHeader,s as Default,c as MaxContent,vn as __namedExportsOrder,Fn as default};
