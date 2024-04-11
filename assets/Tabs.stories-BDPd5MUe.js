import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{s as h}from"./index-B_pG5fU1.js";import{a as g,I as j}from"./Icon.types-Nlgj6b-j.js";import"./ThemeWrapper-DyfggUWY.js";import"./Avatar-q5AfrGxs.js";import{e as s,d as b,f as n,g as r,B as P}from"./Button-1BO6s6Nr.js";import"./Checkbox-CIiCrQq3.js";import"./Chip-Bp5mSx8e.js";import"./Grid-CwkbpFXQ.js";import"./Currency-CK165PQJ.js";import"./Input-DuqdUgPh.js";import"./Percent-CUpWNMWo.js";import"./TextArea-DbFWoioo.js";import{T as f}from"./Typography-ad_3Alod.js";import{B as o}from"./Box-QN4gLg71.js";import{T as v}from"./Tooltip-DP6TBYy0.js";import"./index-Dl6G-zuu.js";import"./index-CcbsCGxW.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./useOnHover-B5yjJnBG.js";import"./Typography-DbM4VYj_.js";import"./index-DfaGUJ00.js";import"./useTheme-zj3HIc-m.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./palette-DCNmPToj.js";import"./index-D1_ZHIBm.js";import"./index-CxDPfwJT.js";import"./GlobalStyles-B4XTyhQR.js";import"./helpers-Bcpe1sWR.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-CwDAdALs.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./createSvgIcon-By8APFNA.js";import"./Typography-ByMLqIOY.js";import"./index-Beu9b4Vr.js";import"./inheritsLoose-B7h9gheN.js";import"./index-BqFaNRbK.js";import"./FormControlLabel-EfhPbLgJ.js";import"./styled-CyX8x3PR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./react-number-format.es-DkkvJ1RT.js";const C=t=>`
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
