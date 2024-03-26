import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{s as h}from"./index-B_pG5fU1.js";import{a as g,I as f}from"./Icon.types-Bg_FxVn4.js";import"./ThemeWrapper-kl0zAW7z.js";import"./Avatar-IBObJaJ6.js";import{B as j}from"./Button-BVn22Tqx.js";import"./Checkbox-Din5bU9h.js";import"./Chip-CZ3RgH3h.js";import{e as s,d as p,f as r,g as n}from"./DatePicker-eH4B0avm.js";import"./Grid-DnB74UY1.js";import"./Currency-CmkFoGwd.js";import"./Input-CENXjZaQ.js";import"./Percent-BAMXpoJL.js";import"./TextArea-pw1VhjZv.js";import"./enqueueSnackbar-D04sC6hk.js";import{T as P}from"./Typography-CPNth6VQ.js";import{B as o}from"./Box-GI0gEbLE.js";import{T as v}from"./Tooltip-CJh6hZtg.js";import"./index-Dl6G-zuu.js";import"./index-8HRI1sDn.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./useOnHover-B5yjJnBG.js";import"./Typography-DbM4VYj_.js";import"./index-DPNVsBv0.js";import"./useTheme-BpUgHZka.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./palette-DffXsAfV.js";import"./index-CxDPfwJT.js";import"./GlobalStyles-lfm5EBAb.js";import"./ButtonBase-2lKpUo-h.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./FormControlLabel-BEQ-oSee.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-SP3Ztg2T.js";import"./styled-Dq_uxqGx.js";import"./useControlled-1Y2rT-1r.js";import"./createSvgIcon-DJzhYxYh.js";import"./helpers-DtHNWFAg.js";import"./Paper-DQSmW7aV.js";import"./index-Beu9b4Vr.js";import"./react-number-format.es-DkkvJ1RT.js";import"./index-Bk1RaGfa.js";import"./index-D1_ZHIBm.js";const C=e=>`
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
`,ca={title:"Example/Tabs",component:s,subcomponents:{TabContextProvider:p,Tab:r,TabPanel:n},parameters:{layout:"centered",docs:{source:{transform:(e,c)=>{let t=h("Tabs",{indent:2})(e,c);return t=t==null?void 0:t.replace("<Tabs",""),t=t==null?void 0:t.replace("/>",""),C(t)}}}},tags:["autodocs"],argTypes:{gutter:{control:{type:"number"}}}},i={render:e=>a.jsx(o,{sx:{height:"200px",width:"300px"},children:a.jsxs(p,{defaultValue:"1",children:[a.jsxs(s,{...e,children:[a.jsx(r,{label:"Tab 1",value:"1"}),a.jsx(r,{label:"Tab 2",value:"2"}),a.jsx(r,{label:"Tab 3",value:"3",disabled:!0})]}),a.jsxs(o,{mt:1,children:[a.jsx(n,{tabValue:"1",children:"Tab 1 Content"}),a.jsx(n,{tabValue:"2",children:"Tab 2 Content"}),a.jsx(n,{tabValue:"3",children:"Tab 3 Content"})]})]})}),args:{...s.defaultProps}},l={render:e=>a.jsx(o,{sx:{height:"200px",width:"300px"},children:a.jsxs(p,{defaultValue:"1",children:[a.jsxs(s,{...e,children:[a.jsx(r,{value:"1",children:a.jsxs(o,{display:"flex",justifyContent:"space-between",gap:1,alignItems:"center",children:[a.jsx(P,{variant:"bodyXS",children:"Tab 1"}),a.jsx(v,{title:"This is a tooltip",placement:"top",arrow:!0,children:a.jsx("span",{children:a.jsx(g,{icon:f.WarningV2,height:"12px",width:"12px",sx:{transform:"rotate(180deg)"}})})})]})}),a.jsx(r,{value:"2",children:a.jsx(j,{children:"Tab 2"})})]}),a.jsxs(o,{mt:1,children:[a.jsx(n,{tabValue:"1",children:"This tab has a tooltip"}),a.jsx(n,{tabValue:"2",children:"This tab has a button"})]})]})}),args:{...s.defaultProps}};var b,T,m;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const ha=["Default","CustomTabs"];export{l as CustomTabs,i as Default,ha as __namedExportsOrder,ca as default};