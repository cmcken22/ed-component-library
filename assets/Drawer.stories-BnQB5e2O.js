import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{w as f,u as g}from"./index-BnUgH7jw.js";import{r as h}from"./index-Dl6G-zuu.js";import{s as x}from"./index-B_pG5fU1.js";import"./ThemeWrapper-D-DMLTn3.js";import"./Avatar-Cgo6Uob0.js";import{B as w}from"./Button-BxvLiHfC.js";import"./Checkbox-Csiw2tTP.js";import"./Chip-rg6ZW--I.js";import{c as a}from"./DatePicker-88JejYxY.js";import"./Grid-CoFhzsX2.js";import"./Icon.types-DTOJSqgO.js";import"./Currency-Nro9y0N8.js";import"./Input-D6j0Qf8e.js";import"./Percent-BnXHPtF2.js";import"./TextArea-CoVPkCtP.js";import"./enqueueSnackbar-B-YUycbw.js";import{T as p}from"./Typography-CxczIWni.js";import{B as v}from"./Box-D-p1WQB6.js";import"./styled-FV1-rYEQ.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./index-CxDPfwJT.js";import"./GlobalStyles-BeLHs97O.js";import"./index-DfBNxlIc.js";import"./useOnHover-B5yjJnBG.js";import"./Tooltip-CN2EnKML.js";import"./useTheme-CcKttCxE.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./ButtonBase-OJEn4JjY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./FormControlLabel-DGC4j37D.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-C-mBF-gq.js";import"./styled-CrVuE4qO.js";import"./createSvgIcon-Buc-ZZ8X.js";import"./index-DTikmPcf.js";import"./helpers-n0__mVcP.js";import"./Paper-DE3xBI18.js";import"./Typography-DbM4VYj_.js";import"./index-Beu9b4Vr.js";import"./palette-DffXsAfV.js";import"./react-number-format.es-DkkvJ1RT.js";import"./index-Bk1RaGfa.js";const ft={title:"Example/Drawer/Drawer",component:a,render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1)}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},parameters:{layout:"centered",docs:{source:{transform:x("Drawer")}}},tags:["autodocs"],argTypes:{marginTop:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=f(r).getByRole("button");await g.click(e)}},i={render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1),footer:t.jsx(p,{variant:"h5",children:"Example Footer"}),children:t.jsx(v,{p:2,children:t.jsx(p,{variant:"bodyR",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ea autem aut! Aliquid soluta beatae illo eum mollitia praesentium adipisci, exercitationem voluptatibus possimus, nihil sequi tempora dolor iste numquam obcaecati?"})})}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=f(r).getByRole("button");await g.click(e)}};var m,c,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const gt=["Default","WithContent"];export{n as Default,i as WithContent,gt as __namedExportsOrder,ft as default};
