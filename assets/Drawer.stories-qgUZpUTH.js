import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{w as g,u as f}from"./index-BnUgH7jw.js";import{r as h}from"./index-Dl6G-zuu.js";import{s as x}from"./index-B_pG5fU1.js";import"./ThemeWrapper-CQqLz_aH.js";import"./Avatar-C3F4X0SX.js";import{c as a,B as w}from"./Button-BZwuvSDA.js";import"./Checkbox-CVpeMM0H.js";import"./Chip-uN1PIWZu.js";import"./Grid-BGIExXJq.js";import"./Icon.types-C28-lL-C.js";import"./Currency-D8dh0agi.js";import"./Input-Yrfz6Brf.js";import"./Percent-C7luUz9t.js";import"./TextArea-CaGIjNi8.js";import{T as p}from"./Typography-CDWy3aSQ.js";import{B as v}from"./Box-C-V--YKQ.js";import"./index-DCyYi5Uh.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./index-D1_ZHIBm.js";import"./index-CxDPfwJT.js";import"./GlobalStyles-Dmpyt81I.js";import"./useOnHover-B5yjJnBG.js";import"./Tooltip-C4Gwpmhi.js";import"./useTheme-BgX8hDp8.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./inheritsLoose-B7h9gheN.js";import"./helpers-CtoIX1AE.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-Hs7e5W89.js";import"./createSvgIcon-BO828Ki2.js";import"./Typography-DbM4VYj_.js";import"./index-BEf2p8cz.js";import"./Typography-B6I9QrUF.js";import"./index-Beu9b4Vr.js";import"./FormControlLabel-BEhHtoBS.js";import"./styled-DWjFcNbo.js";import"./assertThisInitialized-B9jnkVVz.js";import"./palette-C9S7df13.js";import"./react-number-format.es-DkkvJ1RT.js";import"./index-Bk1RaGfa.js";const ct={title:"Example/Drawer/Drawer",component:a,render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1)}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},parameters:{layout:"centered",docs:{source:{transform:x("Drawer")}}},tags:["autodocs"],argTypes:{marginTop:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=g(r).getByRole("button");await f.click(e)}},i={render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1),footer:t.jsx(p,{variant:"h5",children:"Example Footer"}),children:t.jsx(v,{p:2,children:t.jsx(p,{variant:"bodyR",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ea autem aut! Aliquid soluta beatae illo eum mollitia praesentium adipisci, exercitationem voluptatibus possimus, nihil sequi tempora dolor iste numquam obcaecati?"})})}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=g(r).getByRole("button");await f.click(e)}};var m,c,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const lt=["Default","WithContent"];export{n as Default,i as WithContent,lt as __namedExportsOrder,ct as default};
