import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{w as g,u as f}from"./index-BnUgH7jw.js";import{r as h}from"./index-Dl6G-zuu.js";import{s as x}from"./index-DlyO01os.js";import"./ThemeWrapper-p027yzCS.js";import"./Avatar-CUxUFj2W.js";import{c as a,B as w}from"./Button-pfOcBCDq.js";import"./Checkbox-D1dTJqUW.js";import"./Chip-CU5XfiV5.js";import"./FileDropZone-CU33z5_1.js";import"./Grid-CCc2OB1M.js";import"./Icon.types-Cts1U0M4.js";import"./DateField-MJkJhh_n.js";import"./DateRangeField-BXnnCepX.js";import"./Input-BQ75RuYt.js";import"./TextArea-gdhbUIK_.js";import"./ProgressBar-abn_nouz.js";import"./RadioButton.types-wYdjOlzo.js";import"./Tooltip-DuZ10qG3.js";import{T as p}from"./Typography-BXdRB8J7.js";import"./index-CZ29VMm6.js";import{B as v}from"./Box-gQIt9B05.js";import"./index-DGPhUUWW.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-CxQfeomc.js";import"./index-D1_ZHIBm.js";import"./index-CiDPmov_.js";import"./GlobalStyles-CgXowqDm.js";import"./useOnHover-DcG81d-b.js";import"./testIds-CT2jQqrK.js";import"./index-B-KJ_PcS.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./DatePicker-Bgh_D4xi.js";import"./index-Beu9b4Vr.js";import"./Typography-rB6r_AZO.js";import"./createSvgIcon-D2rEfC9A.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./ButtonBase-lJFSTU0I.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useCommonOnChangeHandler-DfyMK7Qn.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DFVa8SY2.js";import"./Typography-u1033W3R.js";import"./styled-CE3BHGdM.js";import"./Stack-l5PVF6Ai.js";import"./FormControlLabel-QMhEfIZX.js";import"./palette-CESXTxp7.js";const gt={title:"Example/Drawer/Drawer",component:a,render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1)}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},parameters:{layout:"centered",docs:{source:{transform:x("Drawer")}}},tags:["autodocs"],argTypes:{marginTop:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=g(r).getByRole("button");await f.click(e)}},i={render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1),footer:t.jsx(p,{variant:"h5",children:"Example Footer"}),children:t.jsx(v,{p:2,children:t.jsx(p,{variant:"bodyR",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ea autem aut! Aliquid soluta beatae illo eum mollitia praesentium adipisci, exercitationem voluptatibus possimus, nihil sequi tempora dolor iste numquam obcaecati?"})})}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=g(r).getByRole("button");await f.click(e)}};var m,c,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const ft=["Default","WithContent"];export{n as Default,i as WithContent,ft as __namedExportsOrder,gt as default};
