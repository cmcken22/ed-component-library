import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as l}from"./index-_byTH_QA.js";import{M as r}from"./index-XrkUo5u5.js";import"./index-Dl6G-zuu.js";import"./iframe-BZaDhcAd.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./index-D1_ZHIBm.js";import"./index-Bw8VTzHM.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-CXd072mJ.js";import"./lodash-BR7ZO34U.js";import"./index-DrFu-skq.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Instrcutions"}),`
`,e.jsx(n.h1,{id:"how-to-work-with-the-component-library",children:"How to work with the component library"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#run-the-repo-locally",children:"Run the repo locally"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-structure",children:"Component Structure"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#creating-a-new-component",children:"Creating a new component"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#testing-the-components-with-jest",children:"Testing the Components with Jest"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#testing-the-components-with-chromatic",children:"Testing the Components with Chromatic"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#deploying-storybook-to-github-pages",children:"Deploying Storybook to Github Pages"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#using-yalc-to-preview-a-release",children:"Using Yalc to preview a release"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#publishing-to-npm",children:"Publishing to NPM"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"run-the-repo-locally",children:"Run the repo locally"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"install the dependencies"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm install
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"run storybook"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm run sb
`})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"component-structure",children:"Component Structure"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Components have a modular structure, with each component isolated to its own folder."}),`
`,e.jsx(n.li,{children:"Everything pertaining to a component is contained within its folder."}),`
`,e.jsxs(n.li,{children:["Each component should contain the following files",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"})," - The main export file"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<ComponentName>.tsx"})," - The main component file"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<ComponentName>.types.ts"})," - The types file (i.e: prop type definitions, interfaces, etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<ComponentName>.stories.tsx"})," - The storybook file"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<ComponentName>.test.tsx"})," - The test file"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<ComponentName>.theme.ts"})," - The MUI theme override file (if applicable)"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"creating-a-new-component",children:"Creating a new component"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["To create a new component please use the ",e.jsx(n.code,{children:"generate"}),`
command`]}),`
`,e.jsxs(n.li,{children:["Replacing ",e.jsx(n.code,{children:"<ComponentName>"})," with the name of the component you want to create"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm run generate <ComponentName>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This will create a new folder with the component structure and files mentioned above"}),`
`,e.jsxs(n.li,{children:["Make sure to export your component in the ",e.jsx(n.code,{children:"src/index.ts"})," file in order for it to be included in the npm package"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`export { default as Button } from "./Button";
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Only the components exported in the ",e.jsx(n.code,{children:"src/index.ts"})," file will be included in the npm package!!!"]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"testing-the-components-with-jest",children:"Testing the Components with Jest"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We use Jest and React Testing Library for testing component logic"}),`
`,e.jsx(n.li,{children:"Each component should have a test file"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm run test
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Or to run tests in watch mode"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm run test:watch
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The unit tests focus on component logic rather than rendering"}),`
`,e.jsxs(n.li,{children:["This is because Jest has dificulty access dom styles and testing styles can be very tedious with not much gain",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Testing if a background color is red is not as important as testing if a function returns the correct value"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For visual testing we can leverage Chromatic - learn more about Chromatic ",e.jsx(n.a,{href:"https://www.chromatic.com",rel:"nofollow",children:"here"})]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"testing-the-components-with-chromatic",children:"Testing the Components with Chromatic"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Chromatic is a visual testing & review tool that scans every possible UI state across browsers to catch visual and functional bugs."}),`
`,e.jsx(n.li,{children:"It is integrated with Storybook and creates a visual snapshot of each component story"}),`
`,e.jsxs(n.li,{children:["Learn more about Chromatic ",e.jsx(n.a,{href:"https://www.chromatic.com",rel:"nofollow",children:"here"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm run chromatic
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Once the build is complete you can visit the Chromatic dashboard to review the visual snapshots"}),`
`,e.jsx(n.li,{children:"Chromatic will spit out the url at the end of the build process"}),`
`,e.jsxs(n.li,{children:["At the time of writing, the url is ",e.jsx(n.a,{href:"https://www.chromatic.com/builds?appId=65e7ee0213e9571ce1685faa",rel:"nofollow",children:"https://www.chromatic.com/builds?appId=65e7ee0213e9571ce1685faa"})]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"deploying-storybook-to-github-pages",children:"Deploying Storybook to Github Pages"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Storybook can be deployed to Github Pages for easy sharing and review"}),`
`,e.jsx(n.li,{children:"To deploy the storybook to Github Pages run the following command"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm run sb:deploy
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["View the updated storybook at ",e.jsx(n.a,{href:"https://cmcken22.github.io/ed-component-library",rel:"nofollow",children:"https://cmcken22.github.io/ed-component-library"})]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"using-yalc-to-preview-a-release",children:"Using Yalc to preview a release"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Before pushing to NPM it is important to test the component in a real world scenario"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"We can use Yalc to publish the component to a local registry and then install it in another project"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Doing this will allow us to test the component in another repo before pushing to NPM reducing the likelyhood of publishing bugs"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["You need to have ",e.jsx(n.code,{children:"yalc"})," installed globally"]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm install -g yalc
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["In the package.json file, update the version number for example from ",e.jsx(n.code,{children:"1.0.0"})," to ",e.jsx(n.code,{children:"2.0.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["please follow ",e.jsx(n.a,{href:"https://semver.org",rel:"nofollow",children:"semantic versioning"})," when updating the version number"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "version": "2.0.0"
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Then build the repo to create our dist folder with the minified component files"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm run build
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Then run the following command to publish the package to the local ",e.jsx(n.code,{children:"yalc"})," registry"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`yalc publish
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"now navigate to the project you want to test the component in and run the following command"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`yalc add @cmckenna/ed-component-library
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Then run the install again to make sure the dependencies have been installed"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm install
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You can now use the repo in the project as if it were installed from NPM"}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"publishing-to-npm",children:"Publishing to NPM"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"package.json"})," has been configured to publish to the NPM registry"]}),`
`,e.jsxs(n.li,{children:["First we need to bump the version number in the ",e.jsx(n.code,{children:"package.json"})," file",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["for example from ",e.jsx(n.code,{children:"2.0.0"})," to ",e.jsx(n.code,{children:"2.0.1"})]}),`
`,e.jsxs(n.li,{children:["please follow ",e.jsx(n.a,{href:"https://semver.org",rel:"nofollow",children:"semantic versioning"})," when updating the version number"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "version": "2.0.1"
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Then we need to build the package, sign into NPM and publish the package"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm run build
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm login
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm publish
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"That's it! The package is now published to NPM and can be installed in any project"}),`
`]})]})}function f(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{f as default};
