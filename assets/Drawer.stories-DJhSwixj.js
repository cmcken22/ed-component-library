import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{w as f,u as g}from"./index-DM7PHWmo.js";import{r as h}from"./index-Dl6G-zuu.js";import{s as x}from"./index-B_pG5fU1.js";import"./ThemeWrapper-Dw-fp1HD.js";import"./Avatar-fQDKrKXl.js";import{B as w}from"./Button-Cw41h4HY.js";import"./Checkbox-D1pvv4qW.js";import"./Chip-3C-V2Up1.js";import{c as a}from"./DatePicker-CpUyKBJG.js";import"./Grid-CahVCsyo.js";import"./Icon.types-CsEEbQCp.js";import"./Currency-C5VfasqZ.js";import"./Input-DPazXVYN.js";import"./Percent-BfN4TVBm.js";import"./TextArea-CBdRt04H.js";import"./enqueueSnackbar-GVOas7Gu.js";import{T as p}from"./Typography-C1g_3yIv.js";import{B as v}from"./Box-cOIccGF-.js";import"./styled-DMCGyrn8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BSWZnpwu.js";import"./createTheme-C-bbEhjH.js";import"./index-Dx556MhY.js";import"./GlobalStyles-Dm_UTwER.js";import"./index-DfBNxlIc.js";import"./useOnHover-B5yjJnBG.js";import"./Tooltip-DEIsbpBF.js";import"./useTheme-CD2qRrbv.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-BJNoRnGI.js";import"./assertThisInitialized-B9jnkVVz.js";import"./FormControlLabel-CkfyWINj.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-CbG_DwGs.js";import"./styled-BFfojB-k.js";import"./createSvgIcon-BSw8Ufc7.js";import"./index-CYIh5gUh.js";import"./withBaseInput-K4VB_GuN.js";import"./Paper-BeOq4TRm.js";import"./Typography-DTLcFDMd.js";import"./index-Beu9b4Vr.js";import"./palette-D2hGRGzw.js";import"./react-number-format.es-vn8TvMxN.js";import"./index-Bk1RaGfa.js";const gt={title:"Example/Drawer/Drawer",component:a,render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1)}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},parameters:{layout:"centered",docs:{source:{transform:x("Drawer")}}},tags:["autodocs"],argTypes:{marginTop:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=f(r).getByRole("button");await g.click(e)}},i={render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1),footer:t.jsx(p,{variant:"h5",children:"Example Footer"}),children:t.jsx(v,{p:2,children:t.jsx(p,{variant:"bodyR",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ea autem aut! Aliquid soluta beatae illo eum mollitia praesentium adipisci, exercitationem voluptatibus possimus, nihil sequi tempora dolor iste numquam obcaecati?"})})}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=f(r).getByRole("button");await g.click(e)}};var m,c,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Drawer.defaultProps,
    title: "Drawer Title"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole("button");
    await userEvent.click(submitButton);
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: DrawerProps) => {
    const [open, setOpen] = useState(false);
    return <>
        <Drawer {...args} open={open} onClose={() => setOpen(false)} footer={<Typography variant="h5">Example Footer</Typography>}>
          <Box p={2}>
            <Typography variant="bodyR">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ea
              autem aut! Aliquid soluta beatae illo eum mollitia praesentium
              adipisci, exercitationem voluptatibus possimus, nihil sequi
              tempora dolor iste numquam obcaecati?
            </Typography>
          </Box>
        </Drawer>
        <Button onClick={() => setOpen(p => !p)}>Open</Button>
      </>;
  },
  args: {
    ...Drawer.defaultProps,
    title: "Drawer Title"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole("button");
    await userEvent.click(submitButton);
  }
}`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const ht=["Default","WithContent"];export{n as Default,i as WithContent,ht as __namedExportsOrder,gt as default};
