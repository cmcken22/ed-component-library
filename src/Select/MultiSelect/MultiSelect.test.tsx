import "@testing-library/jest-dom";
import { testInputRendering } from "test-utils/commonTestCases";
import { render } from "test-utils/index";
import MultiSelect from "./MultiSelect";
import { MultiSelectProps } from "./MultiSelect.types";

const initialProps: MultiSelectProps = {
  ...MultiSelect.defaultProps,
  id: "test-id",
  label: "Multi Select",
  placeholder: "Select many options",
  helperText: "Select many options",
  options: [
    {
      label: "Option 1",
      value: "option1",
    },
    {
      label: "Option 2",
      value: "option2",
    },
    {
      label: "Option 3",
      value: "option3",
    },
    {
      label: "Option 4",
      value: "option4",
    },
    {
      label: "Option 5",
      value: "option5",
    },
    {
      label: "Option 6",
      value: "option6",
    },
    {
      label: "Option 7",
      value: "option7",
    },
    {
      label: "Option 8",
      value: "option8",
    },
    {
      label: "Option 9",
      value: "option9",
    },
    {
      label: "Option 10",
      value: "option10",
    },
    {
      label: "Option 11",
      value: "option11",
    },
    {
      label: "Option 12",
      value: "option12",
    },
  ],
};

describe("MultiSelect", () => {
  let props: MultiSelectProps = { ...initialProps };

  beforeEach(() => {
    props = {
      ...initialProps,
    };
  });

  const renderComponent = (props) => render(<MultiSelect {...props} />);

  testInputRendering(renderComponent, props);
});
