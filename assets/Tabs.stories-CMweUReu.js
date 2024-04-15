import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{s as h}from"./index-B_pG5fU1.js";import{a as g,I as j}from"./Icon.types-DhqP0w5k.js";import{e as s,d as b,f as n,g as r,B as P}from"./Button-DC2wR9h_.js";import"./ThemeWrapper-DNKQPsvA.js";import"./Avatar-_rNZu4pO.js";import"./Checkbox-CEycOWC4.js";import"./Chip-BmMAu8xS.js";import"./Grid-Bu2osdGr.js";import"./DateField-NfwgrFsR.js";import"./DateRangeField-CrQaXRVL.js";import"./Input-BvReK6_F.js";import"./TextArea-BylOEoGO.js";import{T as f}from"./Typography-C2npGzRJ.js";import{B as o}from"./Box-TRhWXm-4.js";import{T as v}from"./Tooltip-Dq2jsA7A.js";import"./index-Dl6G-zuu.js";import"./index-D5lE8zFj.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-DtgTEXL7.js";import"./Typography-BGHga1vv.js";import"./index-Sf89G3JB.js";import"./useTheme-D-YGWJ_P.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./palette-CiKahY_l.js";import"./useOnHover-DcG81d-b.js";import"./testIds-Bl6124vV.js";import"./DatePicker-CyootzQZ.js";import"./index-Beu9b4Vr.js";import"./Typography-CoWQAh3d.js";import"./createSvgIcon-Dq_AaE_0.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./ButtonBase-B8BUVujF.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useCommonOnChangeHandler-MKW6boOs.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-BfG0c4km.js";import"./index-CpmRWZ9e.js";import"./GlobalStyles-D5B41vK4.js";import"./FormControlLabel-Bi0SKVm3.js";import"./styled-3drYQxig.js";import"./index-D1_ZHIBm.js";const C=e=>`
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
`,da={title:"Example/Tabs",component:s,subcomponents:{TabContextProvider:b,Tab:n,TabPanel:r},parameters:{layout:"centered",docs:{source:{transform:(e,c)=>{let t=h("Tabs",{indent:2})(e,c);return t=t==null?void 0:t.replace("<Tabs",""),t=t==null?void 0:t.replace("/>",""),C(t)}}}},tags:["autodocs"],argTypes:{gutter:{control:{type:"number"}}}},l={render:e=>a.jsx(o,{sx:{height:"200px",width:"300px"},children:a.jsxs(b,{defaultValue:"1",children:[a.jsxs(s,{...e,children:[a.jsx(n,{label:"Tab 1",value:"1"}),a.jsx(n,{label:"Tab 2",value:"2"}),a.jsx(n,{label:"Tab 3",value:"3",disabled:!0})]}),a.jsxs(o,{mt:1,children:[a.jsx(r,{tabValue:"1",children:"Tab 1 Content"}),a.jsx(r,{tabValue:"2",children:"Tab 2 Content"}),a.jsx(r,{tabValue:"3",children:"Tab 3 Content"})]})]})}),args:{...s.defaultProps}},i={render:e=>a.jsx(o,{sx:{height:"200px",width:"300px"},children:a.jsxs(b,{defaultValue:"1",children:[a.jsxs(s,{...e,children:[a.jsx(n,{value:"1",children:a.jsxs(o,{display:"flex",justifyContent:"space-between",gap:1,alignItems:"center",children:[a.jsx(f,{variant:"bodyXS",children:"Tab 1"}),a.jsx(v,{title:"This is a tooltip",placement:"top",arrow:!0,children:a.jsx("span",{children:a.jsx(g,{icon:j.WarningV2,height:"12px",width:"12px",sx:{transform:"rotate(180deg)"}})})})]})}),a.jsx(n,{value:"2",children:a.jsx(P,{children:"Tab 2"})})]}),a.jsxs(o,{mt:1,children:[a.jsx(r,{tabValue:"1",children:"This tab has a tooltip"}),a.jsx(r,{tabValue:"2",children:"This tab has a button"})]})]})}),args:{...s.defaultProps}};var p,T,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const ua=["Default","CustomTabs"];export{i as CustomTabs,l as Default,ua as __namedExportsOrder,da as default};
