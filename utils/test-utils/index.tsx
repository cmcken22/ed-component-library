import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import ThemeWrapper from "src/ThemeWrapper";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeWrapper>{children}</ThemeWrapper>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
