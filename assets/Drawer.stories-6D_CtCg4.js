import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{w as g,u as f}from"./index-BnUgH7jw.js";import{r as h}from"./index-Dl6G-zuu.js";import{s as x}from"./index-B_pG5fU1.js";import"./ThemeWrapper-D2Lh4ffa.js";import"./Avatar-_rNZu4pO.js";import{c as a,B as w}from"./Button-DvPBqjxF.js";import"./Checkbox-CEycOWC4.js";import"./Chip-BhL-YUgZ.js";import"./Grid-Bu2osdGr.js";import"./Icon.types-DhqP0w5k.js";import"./DateField-KSlfIR47.js";import"./DateRangeField-kfF__j0N.js";import"./Input-Crk4I3p9.js";import"./TextArea-xmXFB66i.js";import{T as p}from"./Typography-C2npGzRJ.js";import{B as v}from"./Box-TRhWXm-4.js";import"./index-D5lE8zFj.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DtgTEXL7.js";import"./index-D1_ZHIBm.js";import"./index-CpmRWZ9e.js";import"./GlobalStyles-D5B41vK4.js";import"./useOnHover-DcG81d-b.js";import"./testIds-Bl6124vV.js";import"./Tooltip-Dq2jsA7A.js";import"./useTheme-D-YGWJ_P.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./inheritsLoose-B7h9gheN.js";import"./DatePicker-BlexNek5.js";import"./index-Sf89G3JB.js";import"./index-Beu9b4Vr.js";import"./Typography-CoWQAh3d.js";import"./createSvgIcon-Dq_AaE_0.js";import"./ButtonBase-B8BUVujF.js";import"./assertThisInitialized-B9jnkVVz.js";import"./useCommonOnChangeHandler-DDi61CwF.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-BfG0c4km.js";import"./Typography-BGHga1vv.js";import"./FormControlLabel-Bi0SKVm3.js";import"./styled-3drYQxig.js";import"./palette-CiKahY_l.js";const lt={title:"Example/Drawer/Drawer",component:a,render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1)}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},parameters:{layout:"centered",docs:{source:{transform:x("Drawer")}}},tags:["autodocs"],argTypes:{marginTop:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=g(r).getByRole("button");await f.click(e)}},i={render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1),footer:t.jsx(p,{variant:"h5",children:"Example Footer"}),children:t.jsx(v,{p:2,children:t.jsx(p,{variant:"bodyR",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ea autem aut! Aliquid soluta beatae illo eum mollitia praesentium adipisci, exercitationem voluptatibus possimus, nihil sequi tempora dolor iste numquam obcaecati?"})})}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=g(r).getByRole("button");await f.click(e)}};var m,c,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const ut=["Default","WithContent"];export{n as Default,i as WithContent,ut as __namedExportsOrder,lt as default};
