function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-_byTH_QA.js","./index-Dl6G-zuu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-TDi3aXbj.js";import{R as e,r as c}from"./index-Dl6G-zuu.js";import{r as l,u}from"./react-18-Bamk9FSf.js";import{h,i as E,H as d,j as x}from"./index-CUDuwNpH.js";import"../sb-preview/runtime.js";import"./index-D1_ZHIBm.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./index-Bw8VTzHM.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-CXd072mJ.js";import"./lodash-BR7ZO34U.js";import"./index-DrFu-skq.js";var _={code:h,a:E,...d},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},T=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,i)=>{a(()=>import("./index-_byTH_QA.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:p})=>l(e.createElement(D,{showException:i,key:Math.random()},e.createElement(p,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{T as DocsRenderer,_ as defaultComponents};
