import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{s as h}from"./index-B_pG5fU1.js";import{a as g,I as P}from"./Icon.types-Ba5UCeQa.js";import{e as s,d as b,f as n,g as r,B as f}from"./Button-qCeSoY-y.js";import"./ThemeWrapper-BC0j1MWR.js";import"./Avatar-DAk9YqhF.js";import"./Checkbox-DbV7KlYF.js";import"./Chip-D9EWMA4o.js";import"./Grid-BJJaesu6.js";import"./DateField-D7WHR2fg.js";import"./DateRangeField-C_bIiRH5.js";import"./Input-zE8CS11a.js";import"./TextArea-Bv6z7v0Z.js";import"./RadioButton.types-BELa6ELL.js";import{T as j}from"./Tooltip-CNbpjzJ1.js";import{T as v}from"./Typography-ClegP6xv.js";import{B as o}from"./Box-DPTDcbim.js";import"./index-Dl6G-zuu.js";import"./index-DFf-bhEl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DtgTEXL7.js";import"./Typography-BGHga1vv.js";import"./index-_OcG2YHj.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./palette-CiKahY_l.js";import"./useOnHover-DcG81d-b.js";import"./testIds-Bl6124vV.js";import"./DatePicker-D4dhWDwh.js";import"./index-Beu9b4Vr.js";import"./Typography-C8COxrag.js";import"./createSvgIcon-B9tpKWAV.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./ButtonBase-CdxKgBBF.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useCommonOnChangeHandler-UR5sVcBX.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-CXsvuMT9.js";import"./index-CpmRWZ9e.js";import"./GlobalStyles-BkdV5ugX.js";import"./Stack-B_sc2yyH.js";import"./styled-DlwMyq9x.js";import"./index-D1_ZHIBm.js";import"./FormControlLabel-BLlKfmfO.js";const C=e=>`
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
`,ua={title:"Example/Tabs",component:s,subcomponents:{TabContextProvider:b,Tab:n,TabPanel:r},parameters:{layout:"centered",docs:{source:{transform:(e,c)=>{let t=h("Tabs",{indent:2})(e,c);return t=t==null?void 0:t.replace("<Tabs",""),t=t==null?void 0:t.replace("/>",""),C(t)}}}},tags:["autodocs"],argTypes:{gutter:{control:{type:"number"}}}},i={render:e=>a.jsx(o,{sx:{height:"200px",width:"300px"},children:a.jsxs(b,{defaultValue:"1",children:[a.jsxs(s,{...e,children:[a.jsx(n,{label:"Tab 1",value:"1"}),a.jsx(n,{label:"Tab 2",value:"2"}),a.jsx(n,{label:"Tab 3",value:"3",disabled:!0})]}),a.jsxs(o,{mt:1,children:[a.jsx(r,{tabValue:"1",children:"Tab 1 Content"}),a.jsx(r,{tabValue:"2",children:"Tab 2 Content"}),a.jsx(r,{tabValue:"3",children:"Tab 3 Content"})]})]})}),args:{...s.defaultProps}},l={render:e=>a.jsx(o,{sx:{height:"200px",width:"300px"},children:a.jsxs(b,{defaultValue:"1",children:[a.jsxs(s,{...e,children:[a.jsx(n,{value:"1",children:a.jsxs(o,{display:"flex",justifyContent:"space-between",gap:1,alignItems:"center",children:[a.jsx(v,{variant:"bodyXS",children:"Tab 1"}),a.jsx(j,{title:"This is a tooltip",children:a.jsx(g,{icon:P.WarningV2,height:"12px",width:"12px",sx:{transform:"rotate(180deg)"}})})]})}),a.jsx(n,{value:"2",children:a.jsx(f,{children:"Tab 2"})})]}),a.jsxs(o,{mt:1,children:[a.jsx(r,{tabValue:"1",children:"This tab has a tooltip"}),a.jsx(r,{tabValue:"2",children:"This tab has a button"})]})]})}),args:{...s.defaultProps}};var p,T,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const xa=["Default","CustomTabs"];export{l as CustomTabs,i as Default,xa as __namedExportsOrder,ua as default};
