import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{w as g,u as f}from"./index-BnUgH7jw.js";import{r as h}from"./index-Dl6G-zuu.js";import{s as x}from"./index-DlyO01os.js";import"./ThemeWrapper-bDRlVNa7.js";import"./Avatar-DIASer-U.js";import{c as a,B as w}from"./Button-2qPWXf7R.js";import"./Checkbox-CTvvVB9F.js";import"./Chip-Cg86GGnn.js";import"./FileDropZone-BR12Sm9I.js";import"./Grid-6fRPV7AH.js";import"./Icon.types-BKDllfL1.js";import"./DateField-BQDLvCea.js";import"./DateRangeField-CaZuCD_w.js";import"./Input-DFgCvLA-.js";import"./TextArea-B9sqycCQ.js";import"./ProgressBar-Qu8psmeY.js";import"./RadioButton.types-DvAbzWVW.js";import"./Tooltip-C_Tls1Mb.js";import{T as p}from"./Typography-Br6reEa4.js";import"./index-C3QW2DIj.js";import{B as v}from"./Box-BmeHL9xr.js";import"./index-Bm4I-j5O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B65QLLQ5.js";import"./index-D1_ZHIBm.js";import"./index-DL8WKete.js";import"./GlobalStyles-TexeS-Y5.js";import"./useOnHover-DcG81d-b.js";import"./testIds-CT2jQqrK.js";import"./index-CYSaZ1-Z.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./DatePicker-ClnZxlh6.js";import"./index-Beu9b4Vr.js";import"./Typography-Cn8xeiu4.js";import"./createSvgIcon-KZc-bwgI.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./ButtonBase-oX6lAsK9.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useCommonOnChangeHandler-BSRxhs-1.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DJ9cSgbz.js";import"./Typography-BoXyf5oC.js";import"./Stack-CThqDOCM.js";import"./styled-DOXbsImH.js";import"./FormControlLabel-CMkWOaX8.js";import"./palette-DMXrs0tI.js";const gt={title:"Example/Drawer/Drawer",component:a,render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1)}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},parameters:{layout:"centered",docs:{source:{transform:x("Drawer")}}},tags:["autodocs"],argTypes:{marginTop:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=g(r).getByRole("button");await f.click(e)}},i={render:r=>{const[o,e]=h.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...r,open:o,onClose:()=>e(!1),footer:t.jsx(p,{variant:"h5",children:"Example Footer"}),children:t.jsx(v,{p:2,children:t.jsx(p,{variant:"bodyR",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ea autem aut! Aliquid soluta beatae illo eum mollitia praesentium adipisci, exercitationem voluptatibus possimus, nihil sequi tempora dolor iste numquam obcaecati?"})})}),t.jsx(w,{onClick:()=>e(s=>!s),children:"Open"})]})},args:{...a.defaultProps,title:"Drawer Title"},play:async({canvasElement:r})=>{const e=g(r).getByRole("button");await f.click(e)}};var m,c,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
