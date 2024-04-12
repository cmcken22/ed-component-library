import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
import { testInputRendering } from "test-utils/commonTestCases";
import { fireEvent, render } from "test-utils/index";
import Select, { SelectProps } from ".";
import { BaseSelectMeta } from "../BaseSelect";

const { className, dataTestId } = BaseSelectMeta;

const getDropdownTrigger = (getByTestId: any) => {
  const wrapperNode = getByTestId(dataTestId);
  const selectNode = wrapperNode?.childNodes?.[0]?.childNodes?.[0];
  return selectNode;
};

const initialProps: SelectProps = {
  ...Select.defaultProps,
  id: "Select",
  label: "Label",
  labelPosition: "top",
  helperText: "Helper Text",
  onChange: jest.fn(),
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
  ],
};

describe("Select", () => {
  let props: SelectProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: any) => {
    const component = render(<Select {...props} />, {});
    return component;
  };

  testInputRendering(renderComponent, props);

  it("should have placeholder", () => {
    props.placeholder = "Placeholder";
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId(TEST_ID.BASE_INPUT);
    const input = inputContainer.querySelector("input");
    expect(input).toHaveAttribute("placeholder", props.placeholder);
  });

  it("should have list", () => {
    props.open = true;
    const { baseElement } = renderComponent(props);
    const list = baseElement.querySelector(`.${className}__list`);
    expect(list).toBeInTheDocument();
  });

  it("should have list after focusing on input", () => {
    const { baseElement, getByTestId } = renderComponent(props);
    const selectNode = getDropdownTrigger(getByTestId);
    fireEvent.mouseDown(selectNode);
    const list = baseElement.querySelector(`.${className}__list`);
    expect(list).toBeInTheDocument();
  });

  it("should render list items", () => {
    const { baseElement, getByTestId } = renderComponent(props);
    const selectNode = getDropdownTrigger(getByTestId);
    fireEvent.mouseDown(selectNode);
    const list = baseElement.querySelector(`.${className}__list`);
    expect(list).toBeInTheDocument();

    const listItems = list?.querySelectorAll("li");
    expect(listItems).toHaveLength(props.options.length);

    for (let i = 0; i < listItems.length; i++) {
      expect(listItems[i]).toHaveTextContent(props.options[i].label);
    }
  });

  it("should render custom list", () => {
    props = {
      ...props,
      options: [
        {
          customLabel: "Option 1",
          customValue: "option1",
        },
      ],
      getOptionLabel: (option) => option?.customLabel,
      getOptionValue: (option) => option?.customValue,
    };
    const { baseElement, getByTestId } = renderComponent(props);
    const selectNode = getDropdownTrigger(getByTestId);
    fireEvent.mouseDown(selectNode);
    const list = baseElement.querySelector(`.${className}__list`);
    expect(list).toBeInTheDocument();

    const listItems = list?.querySelectorAll("li");
    expect(listItems).toHaveLength(props.options.length);

    for (let i = 0; i < listItems.length; i++) {
      expect(listItems[i]).toHaveTextContent(props.options[i].customLabel);
    }
  });

  it("should select item", () => {
    const { baseElement, getByTestId } = renderComponent(props);
    const inputContainer = getByTestId(TEST_ID.BASE_INPUT);
    const input = inputContainer.querySelector("input");
    const selectNode = getDropdownTrigger(getByTestId);
    fireEvent.mouseDown(selectNode);

    const list = baseElement.querySelector(`.${className}__list`);
    expect(list).toBeInTheDocument();

    const listItems = list?.querySelectorAll("li");
    expect(listItems).toHaveLength(props.options.length);

    fireEvent.click(listItems[0]);
    expect(input).toHaveValue(props.options[0].value);
    expect(props.onChange).toHaveBeenCalledWith(props.options[0].value);
  });

  it("should deselect item", () => {
    const { baseElement, getByTestId } = renderComponent(props);
    const inputContainer = getByTestId(TEST_ID.BASE_INPUT);
    expect(inputContainer).toBeInTheDocument();

    const input = inputContainer.querySelector("input");
    const selectNode = getDropdownTrigger(getByTestId);
    fireEvent.mouseDown(selectNode);

    const list = baseElement.querySelector(`.${className}__list`);
    expect(list).toBeInTheDocument();

    const listItems = list?.querySelectorAll("li");
    expect(listItems).toHaveLength(props.options.length);

    fireEvent.click(listItems[0]);
    expect(input).toHaveValue(props.options[0].value);
    expect(props.onChange).toHaveBeenCalledWith(props.options[0].value);

    fireEvent.mouseDown(selectNode);
    fireEvent.click(listItems[0]);
    expect(input).toHaveValue("");
    expect(props.onChange).toHaveBeenCalledWith("");
  });

  it("second option should be disabled", () => {
    props.options[1].disabled = true;
    const { baseElement, getByTestId } = renderComponent(props);
    const inputContainer = getByTestId(TEST_ID.BASE_INPUT);
    expect(inputContainer).toBeInTheDocument();

    const selectNode = getDropdownTrigger(getByTestId);
    fireEvent.mouseDown(selectNode);

    const list = baseElement.querySelector(`.${className}__list`);
    expect(list).toBeInTheDocument();

    const listItems = list?.querySelectorAll("li");
    expect(listItems).toHaveLength(props.options.length);

    expect(listItems[1]).toHaveClass("Mui-disabled");
  });

  it("should select first item by default", () => {
    props.defaultActiveFirstOption = true;
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId(TEST_ID.BASE_INPUT);
    const input = inputContainer.querySelector("input");
    expect(inputContainer).toBeInTheDocument();
    expect(input).toHaveValue(props.options[0].value);
    expect(props.onChange).toHaveBeenCalledWith(props.options[0].value);
  });

  it("should render with checkboxes", () => {
    props.checkBoxSelection = true;
    const { baseElement, getByTestId } = renderComponent(props);
    const selectNode = getDropdownTrigger(getByTestId);
    fireEvent.mouseDown(selectNode);

    const list = baseElement.querySelector(`.${className}__list`);
    expect(list).toBeInTheDocument();

    const listItems = list?.querySelectorAll("li");
    expect(listItems).toHaveLength(props.options.length);

    for (let i = 0; i < listItems.length; i++) {
      const checkbox = listItems[i].querySelector(".MuiCheckbox-root");
      expect(checkbox).toBeInTheDocument();
    }
  });
});
