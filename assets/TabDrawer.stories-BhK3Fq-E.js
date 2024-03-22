import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{w as T,u as d}from"./index-DM7PHWmo.js";import{r as f}from"./index-Dl6G-zuu.js";import{s as x}from"./index-B_pG5fU1.js";import"./ThemeWrapper-wMS4avzx.js";import"./Avatar-pkVRPl0Q.js";import{B as h}from"./Button-Dbb3vepn.js";import"./Checkbox-PgEx0_vy.js";import"./Chip-DFAP1K_n.js";import{T as s,d as y,e as g,f as p,g as i}from"./DatePicker-BbtfG_KH.js";import"./Grid-BK1KDmXn.js";import"./Icon.types-Co76R5gq.js";import"./Currency-B7IPrDzN.js";import"./Input-C9QAWRFj.js";import"./Percent-D0I6sKJa.js";import"./TextArea-DT4nJouT.js";import"./enqueueSnackbar-BpfayY-2.js";import{T as u}from"./Typography-BXL6phpy.js";const v=t=>`
<TabDrawer${t}>
  <TabContextProvider defaultValue="1">
    <Tabs gutter={16}>
      <Tab label="Tab 1" value="1" />
      <Tab label="Tab 2" value="2" />
    </Tabs>
    <TabPanel tabValue="1">
      Tab 1 Content
      {Array.from({ length: 100 }).map((_, i) => (
        <p key={i}>Content {i}</p>
      ))}
    </TabPanel>
    <TabPanel tabValue="2">Tab 2 Content</TabPanel>
  </TabContextProvider>
</TabDrawer>
`,j={title:"Example/Drawer/TabDrawer",component:s,parameters:{layout:"centered",docs:{source:{transform:(t,n)=>{let a=x("TabDrawer",{indent:1,map:{footer:'<Typography variant="h5">Example Footer</Typography>'}})(t,n);return a=a==null?void 0:a.replace("<TabDrawer",""),a=a==null?void 0:a.replace("/>",""),v(a)}}}},render:t=>{const[n,r]=f.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{...t,open:n,onClose:()=>r(!1),footer:e.jsx(u,{variant:"h5",children:"Example Footer"}),headerBorder:!1,children:e.jsxs(y,{defaultValue:"1",children:[e.jsxs(g,{gutter:16,children:[e.jsx(p,{label:"Tab 1",value:"1"}),e.jsx(p,{label:"Tab 2",value:"2"})]}),e.jsxs(i,{tabValue:"1",children:["Tab 1 Content",Array.from({length:100}).map((a,l)=>e.jsxs("p",{children:["Content ",l]},l))]}),e.jsx(i,{tabValue:"2",children:"Tab 2 Content"})]})}),e.jsx(h,{onClick:()=>r(a=>!a),children:"Open"})]})},argTypes:{marginTop:{control:{type:"number"}},width:{control:{type:"number"}}}},o={args:{...s.defaultProps,title:"Example Title",footer:e.jsx(u,{variant:"h5",children:"Example Footer"})},play:async({canvasElement:t})=>{const r=T(t).getByRole("button");await d.click(r)}};var m,c,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...TabDrawer.defaultProps,
    title: "Example Title",
    footer: <Typography variant="h5">Example Footer</Typography>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole("button");
    await userEvent.click(submitButton);
  }
}`,...(b=(c=o.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const w=["Default"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{o as D,H as T};
