import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{w as g,u as f}from"./index-BnUgH7jw.js";import{r as h}from"./index-Dl6G-zuu.js";import{s as x}from"./index-B_pG5fU1.js";import"./ThemeWrapper-N0E1R_KB.js";import"./Avatar-BEyL2C51.js";import{c as a,B as w}from"./Button-9x-6yPRz.js";import"./Checkbox-DbV7KlYF.js";import"./Chip-D0hxJeev.js";import"./Grid-BaUdJumI.js";import"./Icon.types-U26PnCQi.js";import"./DateField-BBXaGs4_.js";import"./DateRangeField-0EMcoyyX.js";import"./Input-Ds9JTK6_.js";import"./TextArea-BwBsypM9.js";import"./RadioButton.types-DoDJgX9A.js";import"./Tooltip-Bs3mXacK.js";import{T as p}from"./Typography-ClegP6xv.js";import{B as v}from"./Box-DPTDcbim.js";import"./index-DFf-bhEl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DtgTEXL7.js";import"./index-D1_ZHIBm.js";import"./index-CpmRWZ9e.js";import"./GlobalStyles-BkdV5ugX.js";import"./useOnHover-DcG81d-b.js";import"./testIds-Bl6124vV.js";import"./index-rkLCEK4n.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./DatePicker-D36GZDOj.js";import"./index-Beu9b4Vr.js";import"./Typography-C8COxrag.js";import"./createSvgIcon-B9tpKWAV.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./ButtonBase-CdxKgBBF.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useCommonOnChangeHandler-rg7iHN_d.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-CXsvuMT9.js";import"./Typography-BGHga1vv.js";import"./Stack-B_sc2yyH.js";import"./styled-DlwMyq9x.js";import"./FormControlLabel-BLlKfmfO.js";import"./palette-CiKahY_l.js";const ut={title:"Example/Drawer/Drawer",component:a,render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1)}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},parameters:{layout:"centered",docs:{source:{transform:x("Drawer")}}},tags:["autodocs"],argTypes:{marginTop:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=g(r).getByRole("button");await f.click(e)}},i={render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1),footer:t.jsx(p,{variant:"h5",children:"Example Footer"}),children:t.jsx(v,{p:2,children:t.jsx(p,{variant:"bodyR",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ea autem aut! Aliquid soluta beatae illo eum mollitia praesentium adipisci, exercitationem voluptatibus possimus, nihil sequi tempora dolor iste numquam obcaecati?"})})}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=g(r).getByRole("button");await f.click(e)}};var m,c,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const dt=["Default","WithContent"];export{n as Default,i as WithContent,dt as __namedExportsOrder,ut as default};