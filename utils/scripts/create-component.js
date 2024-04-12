import "colors";
import fs from "fs";
import templates from "./templates/index.js";
console.error("CREARTING COMP".red);

console.error("templates", templates);

/*
  eslint-disable @typescript-eslint/no-var-requires, no-undef
*/

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log(`Creating Component Templates with name: ${componentName}`.magenta);

const componentDirectory = `./src/Components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  console.log("template:", template);
  if (template.extension === "index.ts") {
    fs.writeFileSync(
      `${componentDirectory}/${template.extension}`,
      template.content
    );
  } else {
    fs.writeFileSync(
      `${componentDirectory}/${componentName}${template.extension}`,
      template.content
    );
  }
});

// console.log(
//   "Successfully created component under: " + componentDirectory.green
// );
