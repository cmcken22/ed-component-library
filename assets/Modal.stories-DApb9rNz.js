import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{r as g}from"./index-Dl6G-zuu.js";import{s as A,f as y}from"./index-DlyO01os.js";import{a as d,I as m}from"./Icon.types-Cts1U0M4.js";import"./ThemeWrapper-p027yzCS.js";import"./Avatar-CUxUFj2W.js";import{M as e,B as x}from"./Button-BGo3q6E9.js";import"./Checkbox-D1dTJqUW.js";import"./Chip-C_rATr5i.js";import"./FileDropZone-CU33z5_1.js";import"./Grid-CCc2OB1M.js";import"./DateField-CGsaAH1l.js";import"./DateRangeField-BeduJNlo.js";import"./Input-D9PB90JL.js";import"./TextArea-r82CavVh.js";import"./ProgressBar-abn_nouz.js";import"./RadioButton.types-wYdjOlzo.js";import"./Tooltip-DuZ10qG3.js";import{T as i}from"./Typography-BXdRB8J7.js";import"./index-CZ29VMm6.js";import{B as v}from"./Box-gQIt9B05.js";import"./index-DGPhUUWW.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-CxQfeomc.js";import"./useOnHover-DcG81d-b.js";import"./index-B-KJ_PcS.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-D1_ZHIBm.js";import"./index-CiDPmov_.js";import"./GlobalStyles-CgXowqDm.js";import"./testIds-CT2jQqrK.js";import"./DatePicker-Bgh_D4xi.js";import"./index-Beu9b4Vr.js";import"./Typography-rB6r_AZO.js";import"./createSvgIcon-D2rEfC9A.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./ButtonBase-lJFSTU0I.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useCommonOnChangeHandler-DfyMK7Qn.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DFVa8SY2.js";import"./Typography-u1033W3R.js";import"./styled-CE3BHGdM.js";import"./Stack-l5PVF6Ai.js";import"./FormControlLabel-QMhEfIZX.js";import"./palette-CESXTxp7.js";const I=({children:o,...a})=>{const[r,t]=g.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(e,{...a,open:r,onClose:()=>t(!1),children:[n.jsx(e.Header,{title:"Title",subtitle:"Header Subtitle or Short Sentence"}),n.jsx(e.Content,{children:o}),n.jsx(e.Footer,{acceptBtnText:"Confirm",cancelBtnText:"Close",onAccept:()=>t(!1),onCancel:()=>t(!1)})]}),n.jsx(x,{onClick:()=>t(!0),children:"Open Modal"})]})},R=({children:o,...a})=>{const[r,t]=g.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(e,{...a,open:r,onClose:()=>t(!1),children:[n.jsx(e.Header,{children:n.jsxs(v,{display:"flex",alignItems:"center",flexDirection:"row",gap:1,sx:{color:"primary.main"},children:[n.jsx(d,{icon:m.HappyEmoji,color:"inherit"}),n.jsx(i,{variant:"h4",color:"inherit",children:"Custom Header"}),n.jsx(d,{icon:m.HappyEmoji,color:"inherit"})]})}),n.jsx(e.Content,{children:o}),n.jsx(e.Footer,{acceptBtnText:"Confirm",cancelBtnText:"Close",onAccept:()=>t(!1),onCancel:()=>t(!1)})]}),n.jsx(x,{onClick:()=>t(!0),children:"Open Modal"})]})},_=({children:o,...a})=>{const[r,t]=g.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(e,{...a,open:r,onClose:()=>t(!1),children:[n.jsx(e.Header,{title:"Title",subtitle:"Header Subtitle or Short Sentence"}),n.jsx(e.Content,{children:o}),n.jsxs(e.Footer,{sx:{justifyContent:"space-between"},children:[n.jsx(d,{icon:m.Hand,color:"inherit"}),n.jsx(i,{variant:"h4",color:"inherit",children:"Custom Footer"}),n.jsx(d,{icon:m.Save,color:"inherit"})]})]}),n.jsx(x,{onClick:()=>t(!0),children:"Open Modal"})]})},Fn={title:"Example/Modal",component:e,subcomponents:{Header:e.Header,Content:e.Content,Footer:e.Footer},parameters:{layout:"centered",docs:{source:{transform:A("Modal")}}},tags:["autodocs"],argTypes:{onClose:{action:"onClose"},open:{control:{type:"boolean"}},hideCloseIcon:{control:{type:"boolean"}}}},s={parameters:{layout:"centered",docs:{source:{transform:(o,a)=>{const{args:r}=a;return`
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
