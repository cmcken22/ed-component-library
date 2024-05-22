import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{s as h}from"./index-DlyO01os.js";import{a as g,I as P}from"./Icon.types-Cts1U0M4.js";import{e as s,d as b,f as r,g as n,B as f}from"./Button-B7nE5RFy.js";import"./ThemeWrapper-p027yzCS.js";import"./Avatar-CUxUFj2W.js";import"./Checkbox-D1dTJqUW.js";import"./Chip-CU5XfiV5.js";import"./FileDropZone-CU33z5_1.js";import"./Grid-CCc2OB1M.js";import"./DateField-MJkJhh_n.js";import"./DateRangeField-BXnnCepX.js";import"./Input-BQ75RuYt.js";import"./TextArea-gdhbUIK_.js";import"./ProgressBar-abn_nouz.js";import"./RadioButton.types-wYdjOlzo.js";import{T as j}from"./Tooltip-DuZ10qG3.js";import{T as v}from"./Typography-BXdRB8J7.js";import"./index-CZ29VMm6.js";import{B as o}from"./Box-gQIt9B05.js";import"./index-Dl6G-zuu.js";import"./index-DGPhUUWW.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-CxQfeomc.js";import"./useOnHover-DcG81d-b.js";import"./index-B-KJ_PcS.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./testIds-CT2jQqrK.js";import"./DatePicker-Bgh_D4xi.js";import"./index-Beu9b4Vr.js";import"./Typography-rB6r_AZO.js";import"./createSvgIcon-D2rEfC9A.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./ButtonBase-lJFSTU0I.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useCommonOnChangeHandler-DfyMK7Qn.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DFVa8SY2.js";import"./index-CiDPmov_.js";import"./GlobalStyles-CgXowqDm.js";import"./Typography-u1033W3R.js";import"./styled-CE3BHGdM.js";import"./Stack-l5PVF6Ai.js";import"./index-D1_ZHIBm.js";import"./FormControlLabel-QMhEfIZX.js";import"./palette-CESXTxp7.js";const C=e=>`
<TabContextProvider defaultValue="1">
  <Tabs${e}  >
    <Tab label="Tab 1" value="1" />
    <Tab label="Tab 2" value="2" />
    <Tab label="Tab 3" value="3" disabled />
  </Tabs>
  <div style={{ marginTop: "8px" }}>
    <TabPanel tabValue="1">Tab 1 Content</TabPanel>
    <TabPanel tabValue="2">Tab 2 Content</TabPanel>
    <TabPanel tabValue="3">Tab 3 Content</TabPanel>
  </div>
</TabContextProvider>
`,ha={title:"Example/Tabs",component:s,subcomponents:{TabContextProvider:b,Tab:r,TabPanel:n},parameters:{layout:"centered",docs:{source:{transform:(e,c)=>{let t=h("Tabs",{indent:2})(e,c);return t=t==null?void 0:t.replace("<Tabs",""),t=t==null?void 0:t.replace("/>",""),C(t)}}}},tags:["autodocs"],argTypes:{gutter:{control:{type:"number"}}}},i={render:e=>a.jsx(o,{sx:{height:"200px",width:"300px"},children:a.jsxs(b,{defaultValue:"1",children:[a.jsxs(s,{...e,children:[a.jsx(r,{label:"Tab 1",value:"1"}),a.jsx(r,{label:"Tab 2",value:"2"}),a.jsx(r,{label:"Tab 3",value:"3",disabled:!0})]}),a.jsxs(o,{mt:1,children:[a.jsx(n,{tabValue:"1",children:"Tab 1 Content"}),a.jsx(n,{tabValue:"2",children:"Tab 2 Content"}),a.jsx(n,{tabValue:"3",children:"Tab 3 Content"})]})]})}),args:{...s.defaultProps}},l={render:e=>a.jsx(o,{sx:{height:"200px",width:"300px"},children:a.jsxs(b,{defaultValue:"1",children:[a.jsxs(s,{...e,children:[a.jsx(r,{value:"1",children:a.jsxs(o,{display:"flex",justifyContent:"space-between",gap:1,alignItems:"center",children:[a.jsx(v,{variant:"bodyXS",children:"Tab 1"}),a.jsx(j,{title:"This is a tooltip",children:a.jsx(g,{icon:P.WarningV2,height:"12px",width:"12px",sx:{transform:"rotate(180deg)"}})})]})}),a.jsx(r,{value:"2",children:a.jsx(f,{children:"Tab 2"})})]}),a.jsxs(o,{mt:1,children:[a.jsx(n,{tabValue:"1",children:"This tab has a tooltip"}),a.jsx(n,{tabValue:"2",children:"This tab has a button"})]})]})}),args:{...s.defaultProps}};var p,T,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: any) => {
    return <Box sx={{
      height: "200px",
      width: "300px"
    }}>
        <TabContextProvider defaultValue="1">
          <Tabs {...args}>
            <Tab label="Tab 1" value="1" />
            <Tab label="Tab 2" value="2" />
            <Tab label="Tab 3" value="3" disabled />
          </Tabs>
          <Box mt={1}>
            <TabPanel tabValue="1">Tab 1 Content</TabPanel>
            <TabPanel tabValue="2">Tab 2 Content</TabPanel>
            <TabPanel tabValue="3">Tab 3 Content</TabPanel>
          </Box>
        </TabContextProvider>
      </Box>;
  },
  // @ts-expect-error
  args: {
    ...Tabs.defaultProps
  }
}`,...(m=(T=i.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};var d,u,x;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: any) => {
    return <Box sx={{
      height: "200px",
      width: "300px"
    }}>
        <TabContextProvider defaultValue="1">
          <Tabs {...args}>
            <Tab value="1">
              <Box display="flex" justifyContent="space-between" gap={1} alignItems="center">
                <Typography variant="bodyXS">Tab 1</Typography>
                <Tooltip title="This is a tooltip">
                  <Icon icon={IconVariant.WarningV2} height="12px" width="12px" sx={{
                  transform: "rotate(180deg)"
                }} />
                </Tooltip>
              </Box>
            </Tab>
            <Tab value="2">
              <Button>Tab 2</Button>
            </Tab>
          </Tabs>
          <Box mt={1}>
            <TabPanel tabValue="1">This tab has a tooltip</TabPanel>
            <TabPanel tabValue="2">This tab has a button</TabPanel>
          </Box>
        </TabContextProvider>
      </Box>;
  },
  // @ts-expect-error
  args: {
    ...Tabs.defaultProps
  }
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const ga=["Default","CustomTabs"];export{l as CustomTabs,i as Default,ga as __namedExportsOrder,ha as default};
