import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{T as c}from"./Typography-CjvmDS82.js";import{a as l,I as d}from"./Icon-CinL_nv7.js";import{B as t}from"./Box-DHtNwdn9.js";import"./index-Dl6G-zuu.js";import"./Typography-CwlVby8-.js";import"./createTheme-B78KyuB4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./Typography-B14jcOb6.js";import"./styled-oBnpV2qj.js";import"./index-kwxT9kJ1.js";import"./palette-DffXsAfV.js";import"./useTheme-CpDU_v35.js";const C={title:"Example/Icon",component:l,parameters:{layout:"centered"},tags:["autodocs"]},i=Object.keys(d).map(r=>({name:r,icon:r})),o={render:r=>e.jsx(t,{sx:{maxWidth:"800px",display:"flex",flexWrap:"wrap",gap:2,p:3},children:i==null?void 0:i.map(n=>n.icon?e.jsxs(t,{onClick:()=>console.log(n.name),sx:{width:"60px",mb:1,overflow:"hidden"},children:[e.jsx(t,{sx:{p:1,borderWidth:"1px",borderStyle:"solid",borderColor:"charcoal.10",borderRadius:"4px",minWidth:"60px",width:"fit-content",display:"flex",justifyContent:"center",alignItems:"center",mb:.5},children:e.jsx(l,{...r,icon:n.icon})}),e.jsx(c,{variant:"errorMessage",sx:{textAlign:"center",width:"100%",display:"block",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:n.name})]},n.name):null)})};var a,s,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Box sx={{
    maxWidth: "800px",
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "space-evenly",
    gap: 2,
    p: 3
  }}>
      {iconList?.map(icon => {
      if (!icon.icon) return null;
      return <Box key={icon.name} onClick={() => console.log(icon.name)} sx={{
        width: "60px",
        mb: 1,
        overflow: "hidden"
      }}>
            <Box sx={{
          p: 1,
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "charcoal.10",
          borderRadius: "4px",
          minWidth: "60px",
          width: "fit-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 0.5
        }}>
              <Icon {...args} icon={icon.icon} />
            </Box>
            <Typography variant="errorMessage" sx={{
          textAlign: "center",
          width: "100%",
          display: "block",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap"
        }}>
              {icon.name}
            </Typography>
          </Box>;
    })}
    </Box>
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const I=["Sample"];export{o as Sample,I as __namedExportsOrder,C as default};
