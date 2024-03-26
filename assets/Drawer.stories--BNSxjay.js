import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{w as f,u as g}from"./index-BnUgH7jw.js";import{r as h}from"./index-Dl6G-zuu.js";import{s as x}from"./index-B_pG5fU1.js";import"./ThemeWrapper-kl0zAW7z.js";import"./Avatar-IBObJaJ6.js";import{B as w}from"./Button-B3PXq-J7.js";import"./Checkbox-Din5bU9h.js";import"./Chip-CjxQ3nY6.js";import{c as a}from"./DatePicker-Dx_N93Gj.js";import"./Grid-DnB74UY1.js";import"./Icon.types-Bg_FxVn4.js";import"./Currency-DDCk-yU7.js";import"./Input-r1E-dZHT.js";import"./Percent-DX5iZwNW.js";import"./TextArea-B-2fJdvD.js";import"./enqueueSnackbar-s739X2D4.js";import{T as p}from"./Typography-CPNth6VQ.js";import{B as v}from"./Box-GI0gEbLE.js";import"./index-8HRI1sDn.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./index-CxDPfwJT.js";import"./GlobalStyles-lfm5EBAb.js";import"./useOnHover-B5yjJnBG.js";import"./Tooltip-CJh6hZtg.js";import"./useTheme-BpUgHZka.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./ButtonBase-2lKpUo-h.js";import"./assertThisInitialized-B9jnkVVz.js";import"./FormControlLabel-BEQ-oSee.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-SP3Ztg2T.js";import"./styled-Dq_uxqGx.js";import"./createSvgIcon-DJzhYxYh.js";import"./index-DPNVsBv0.js";import"./helpers-CCWd5abd.js";import"./Paper-DQSmW7aV.js";import"./Typography-DbM4VYj_.js";import"./index-Beu9b4Vr.js";import"./palette-DffXsAfV.js";import"./react-number-format.es-DkkvJ1RT.js";import"./index-Bk1RaGfa.js";const yt={title:"Example/Drawer/Drawer",component:a,render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1)}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},parameters:{layout:"centered",docs:{source:{transform:x("Drawer")}}},tags:["autodocs"],argTypes:{marginTop:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=f(r).getByRole("button");await g.click(e)}},i={render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1),footer:t.jsx(p,{variant:"h5",children:"Example Footer"}),children:t.jsx(v,{p:2,children:t.jsx(p,{variant:"bodyR",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ea autem aut! Aliquid soluta beatae illo eum mollitia praesentium adipisci, exercitationem voluptatibus possimus, nihil sequi tempora dolor iste numquam obcaecati?"})})}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=f(r).getByRole("button");await g.click(e)}};var m,c,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const ft=["Default","WithContent"];export{n as Default,i as WithContent,ft as __namedExportsOrder,yt as default};
