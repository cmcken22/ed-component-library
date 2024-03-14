import { prettyDOM } from "@testing-library/react";

export const getChildFromContainer = (container: HTMLElement) => {
  return container.firstElementChild;
};

export const printHtml = (elm: HTMLElement) => {
  console.log(prettyDOM(elm));
};
