import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{s as h}from"./index-DlyO01os.js";import{a as g,I as P}from"./Icon.types-BKDllfL1.js";import{e as s,d as b,f as r,g as n,B as f}from"./Button-2qPWXf7R.js";import"./ThemeWrapper-bDRlVNa7.js";import"./Avatar-DIASer-U.js";import"./Checkbox-CTvvVB9F.js";import"./Chip-Cg86GGnn.js";import"./FileDropZone-BR12Sm9I.js";import"./Grid-6fRPV7AH.js";import"./DateField-BQDLvCea.js";import"./DateRangeField-CaZuCD_w.js";import"./Input-DFgCvLA-.js";import"./TextArea-B9sqycCQ.js";import"./ProgressBar-Qu8psmeY.js";import"./RadioButton.types-DvAbzWVW.js";import{T as j}from"./Tooltip-C_Tls1Mb.js";import{T as v}from"./Typography-Br6reEa4.js";import"./index-C3QW2DIj.js";import{B as o}from"./Box-BmeHL9xr.js";import"./index-Dl6G-zuu.js";import"./index-Bm4I-j5O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B65QLLQ5.js";import"./useOnHover-DcG81d-b.js";import"./index-CYSaZ1-Z.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./testIds-CT2jQqrK.js";import"./DatePicker-ClnZxlh6.js";import"./index-Beu9b4Vr.js";import"./Typography-Cn8xeiu4.js";import"./createSvgIcon-KZc-bwgI.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./ButtonBase-oX6lAsK9.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useCommonOnChangeHandler-BSRxhs-1.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DJ9cSgbz.js";import"./index-DL8WKete.js";import"./GlobalStyles-TexeS-Y5.js";import"./Typography-BoXyf5oC.js";import"./Stack-CThqDOCM.js";import"./styled-DOXbsImH.js";import"./index-D1_ZHIBm.js";import"./FormControlLabel-CMkWOaX8.js";import"./palette-DMXrs0tI.js";const C=e=>`
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
