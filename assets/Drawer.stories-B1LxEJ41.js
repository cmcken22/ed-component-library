import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{w as f,u as g}from"./index-DM7PHWmo.js";import{r as h}from"./index-Dl6G-zuu.js";import{s as x}from"./index-B_pG5fU1.js";import"./ThemeWrapper-wMS4avzx.js";import"./Avatar-pkVRPl0Q.js";import{B as w}from"./Button-Dbb3vepn.js";import"./Checkbox-PgEx0_vy.js";import"./Chip-DFAP1K_n.js";import{c as a}from"./DatePicker-BbtfG_KH.js";import"./Grid-BK1KDmXn.js";import"./Icon.types-Co76R5gq.js";import"./Currency-B7IPrDzN.js";import"./Input-C9QAWRFj.js";import"./Percent-D0I6sKJa.js";import"./TextArea-DT4nJouT.js";import"./enqueueSnackbar-BpfayY-2.js";import{T as p}from"./Typography-BXL6phpy.js";import{B as v}from"./Box-DyLoEUC9.js";import"./styled-IAc8Lal0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./index-CxDPfwJT.js";import"./GlobalStyles-CIXrmKi2.js";import"./index-DfBNxlIc.js";import"./useOnHover-B5yjJnBG.js";import"./Tooltip-CFrTt7ye.js";import"./useTheme-DO6XBSmN.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./lodash-BR7ZO34U.js";import"./ButtonBase-Czbgi4Lg.js";import"./assertThisInitialized-B9jnkVVz.js";import"./FormControlLabel-BWkzxxkj.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-CnkoRAsC.js";import"./styled-DUff_cEZ.js";import"./createSvgIcon-C5McbOQe.js";import"./index-DprujKNK.js";import"./withBaseInput-BMqKywP-.js";import"./Paper-aRqog72_.js";import"./Typography-DbM4VYj_.js";import"./index-Beu9b4Vr.js";import"./palette-DffXsAfV.js";import"./react-number-format.es-vn8TvMxN.js";import"./index-Bk1RaGfa.js";const gt={title:"Example/Drawer/Drawer",component:a,render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1)}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},parameters:{layout:"centered",docs:{source:{transform:x("Drawer")}}},tags:["autodocs"],argTypes:{marginTop:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=f(r).getByRole("button");await g.click(e)}},i={render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1),footer:t.jsx(p,{variant:"h5",children:"Example Footer"}),children:t.jsx(v,{p:2,children:t.jsx(p,{variant:"bodyR",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ea autem aut! Aliquid soluta beatae illo eum mollitia praesentium adipisci, exercitationem voluptatibus possimus, nihil sequi tempora dolor iste numquam obcaecati?"})})}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=f(r).getByRole("button");await g.click(e)}};var m,c,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
