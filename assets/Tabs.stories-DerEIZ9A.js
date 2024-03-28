import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{s as h}from"./index-B_pG5fU1.js";import{a as g,I as j}from"./Icon.types-C28-lL-C.js";import"./ThemeWrapper-CQqLz_aH.js";import"./Avatar-C3F4X0SX.js";import{e as s,d as b,f as n,g as r,B as P}from"./Button-BZwuvSDA.js";import"./Checkbox-CVpeMM0H.js";import"./Chip-uN1PIWZu.js";import"./Grid-BGIExXJq.js";import"./Currency-D8dh0agi.js";import"./Input-Yrfz6Brf.js";import"./Percent-C7luUz9t.js";import"./TextArea-CaGIjNi8.js";import{T as f}from"./Typography-CDWy3aSQ.js";import{B as o}from"./Box-C-V--YKQ.js";import{T as v}from"./Tooltip-C4Gwpmhi.js";import"./index-Dl6G-zuu.js";import"./index-DCyYi5Uh.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./useOnHover-B5yjJnBG.js";import"./Typography-DbM4VYj_.js";import"./index-BEf2p8cz.js";import"./useTheme-BgX8hDp8.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./palette-C9S7df13.js";import"./index-D1_ZHIBm.js";import"./index-CxDPfwJT.js";import"./GlobalStyles-Dmpyt81I.js";import"./helpers-CtoIX1AE.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-Hs7e5W89.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./createSvgIcon-BO828Ki2.js";import"./Typography-B6I9QrUF.js";import"./index-Beu9b4Vr.js";import"./inheritsLoose-B7h9gheN.js";import"./FormControlLabel-BEhHtoBS.js";import"./styled-DWjFcNbo.js";import"./assertThisInitialized-B9jnkVVz.js";import"./react-number-format.es-DkkvJ1RT.js";import"./index-Bk1RaGfa.js";const C=t=>`
<TabContextProvider defaultValue="1">
  <Tabs${t}  >
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
`,ma={title:"Example/Tabs",component:s,subcomponents:{TabContextProvider:b,Tab:n,TabPanel:r},parameters:{layout:"centered",docs:{source:{transform:(t,c)=>{let e=h("Tabs",{indent:2})(t,c);return e=e==null?void 0:e.replace("<Tabs",""),e=e==null?void 0:e.replace("/>",""),C(e)}}}},tags:["autodocs"],argTypes:{gutter:{control:{type:"number"}}}},l={render:t=>a.jsx(o,{sx:{height:"200px",width:"300px"},children:a.jsxs(b,{defaultValue:"1",children:[a.jsxs(s,{...t,children:[a.jsx(n,{label:"Tab 1",value:"1"}),a.jsx(n,{label:"Tab 2",value:"2"}),a.jsx(n,{label:"Tab 3",value:"3",disabled:!0})]}),a.jsxs(o,{mt:1,children:[a.jsx(r,{tabValue:"1",children:"Tab 1 Content"}),a.jsx(r,{tabValue:"2",children:"Tab 2 Content"}),a.jsx(r,{tabValue:"3",children:"Tab 3 Content"})]})]})}),args:{...s.defaultProps}},i={render:t=>a.jsx(o,{sx:{height:"200px",width:"300px"},children:a.jsxs(b,{defaultValue:"1",children:[a.jsxs(s,{...t,children:[a.jsx(n,{value:"1",children:a.jsxs(o,{display:"flex",justifyContent:"space-between",gap:1,alignItems:"center",children:[a.jsx(f,{variant:"bodyXS",children:"Tab 1"}),a.jsx(v,{title:"This is a tooltip",placement:"top",arrow:!0,children:a.jsx("span",{children:a.jsx(g,{icon:j.WarningV2,height:"12px",width:"12px",sx:{transform:"rotate(180deg)"}})})})]})}),a.jsx(n,{value:"2",children:a.jsx(P,{children:"Tab 2"})})]}),a.jsxs(o,{mt:1,children:[a.jsx(r,{tabValue:"1",children:"This tab has a tooltip"}),a.jsx(r,{tabValue:"2",children:"This tab has a button"})]})]})}),args:{...s.defaultProps}};var p,T,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(T=l.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};var d,u,x;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
                <Tooltip title="This is a tooltip" placement="top" arrow>
                  <span>
                    <Icon icon={IconVariant.WarningV2} height="12px" width="12px" sx={{
                    transform: "rotate(180deg)"
                  }} />
                  </span>
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
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const da=["Default","CustomTabs"];export{i as CustomTabs,l as Default,da as __namedExportsOrder,ma as default};
