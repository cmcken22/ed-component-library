import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{s as h}from"./index-B_pG5fU1.js";import{a as g,I as f}from"./Icon.types-DTOJSqgO.js";import"./ThemeWrapper-D-DMLTn3.js";import"./Avatar-Cgo6Uob0.js";import{B as j}from"./Button-BxvLiHfC.js";import"./Checkbox-Csiw2tTP.js";import"./Chip-rg6ZW--I.js";import{e as s,d as p,f as r,g as n}from"./DatePicker-88JejYxY.js";import"./Grid-CoFhzsX2.js";import"./Currency-Nro9y0N8.js";import"./Input-D6j0Qf8e.js";import"./Percent-BnXHPtF2.js";import"./TextArea-CoVPkCtP.js";import"./enqueueSnackbar-B-YUycbw.js";import{T as P}from"./Typography-CxczIWni.js";import{B as o}from"./Box-D-p1WQB6.js";import{T as v}from"./Tooltip-CN2EnKML.js";import"./index-Dl6G-zuu.js";import"./index-DfBNxlIc.js";import"./useOnHover-B5yjJnBG.js";import"./Typography-DbM4VYj_.js";import"./createTheme-B78KyuB4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./index-DTikmPcf.js";import"./useTheme-CcKttCxE.js";import"./styled-FV1-rYEQ.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./palette-DffXsAfV.js";import"./index-CxDPfwJT.js";import"./GlobalStyles-BeLHs97O.js";import"./index-D1_ZHIBm.js";import"./ButtonBase-OJEn4JjY.js";import"./TransitionGroupContext-DD5ZWpDm.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./FormControlLabel-DGC4j37D.js";import"./useFormControl-EHw8eS4L.js";import"./Typography-C-mBF-gq.js";import"./styled-CrVuE4qO.js";import"./useControlled-1Y2rT-1r.js";import"./createSvgIcon-Buc-ZZ8X.js";import"./helpers-n0__mVcP.js";import"./Paper-DE3xBI18.js";import"./index-Beu9b4Vr.js";import"./react-number-format.es-DkkvJ1RT.js";import"./index-Bk1RaGfa.js";const C=e=>`
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
`,ha={title:"Example/Tabs",component:s,subcomponents:{TabContextProvider:p,Tab:r,TabPanel:n},parameters:{layout:"centered",docs:{source:{transform:(e,c)=>{let t=h("Tabs",{indent:2})(e,c);return t=t==null?void 0:t.replace("<Tabs",""),t=t==null?void 0:t.replace("/>",""),C(t)}}}},tags:["autodocs"],argTypes:{gutter:{control:{type:"number"}}}},i={render:e=>a.jsx(o,{sx:{height:"200px",width:"300px"},children:a.jsxs(p,{defaultValue:"1",children:[a.jsxs(s,{...e,children:[a.jsx(r,{label:"Tab 1",value:"1"}),a.jsx(r,{label:"Tab 2",value:"2"}),a.jsx(r,{label:"Tab 3",value:"3",disabled:!0})]}),a.jsxs(o,{mt:1,children:[a.jsx(n,{tabValue:"1",children:"Tab 1 Content"}),a.jsx(n,{tabValue:"2",children:"Tab 2 Content"}),a.jsx(n,{tabValue:"3",children:"Tab 3 Content"})]})]})}),args:{...s.defaultProps}},l={render:e=>a.jsx(o,{sx:{height:"200px",width:"300px"},children:a.jsxs(p,{defaultValue:"1",children:[a.jsxs(s,{...e,children:[a.jsx(r,{value:"1",children:a.jsxs(o,{display:"flex",justifyContent:"space-between",gap:1,alignItems:"center",children:[a.jsx(P,{variant:"bodyXS",children:"Tab 1"}),a.jsx(v,{title:"This is a tooltip",placement:"top",arrow:!0,children:a.jsx("span",{children:a.jsx(g,{icon:f.WarningV2,height:"12px",width:"12px",sx:{transform:"rotate(180deg)"}})})})]})}),a.jsx(r,{value:"2",children:a.jsx(j,{children:"Tab 2"})})]}),a.jsxs(o,{mt:1,children:[a.jsx(n,{tabValue:"1",children:"This tab has a tooltip"}),a.jsx(n,{tabValue:"2",children:"This tab has a button"})]})]})}),args:{...s.defaultProps}};var b,T,m;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const ga=["Default","CustomTabs"];export{l as CustomTabs,i as Default,ga as __namedExportsOrder,ha as default};
