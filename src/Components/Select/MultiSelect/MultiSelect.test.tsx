import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
import { testInputRendering } from "test-utils/commonTestCases";
import { fireEvent, render } from "test-utils/index";
import { BaseSelectMeta } from "../BaseSelect";
import MultiSelect from "./MultiSelect";
import { MultiSelectProps } from "./MultiSelect.types";

const { className, dataTestId } = BaseSelectMeta;

const getDropdownTrigger = (getByTestId: any) => {
  const wrapperNode = getByTestId(dataTestId);
  const selectNode = wrapperNode?.childNodes?.[0]?.childNodes?.[0];
  return selectNode;
};

const initialProps: MultiSelectProps = {
  ...MultiSelect.defaultProps,
  id: "test-id",
  label: "Multi Select",
  placeholder: "Select many options",
  helperText: "Select many options",
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

  it("should have placeholder", () => {
    props.placeholder = "Placeholder";
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId(dataTestId);
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

  it("should select items", () => {
    const { baseElement, getByTestId } = renderComponent(props);
    const selectNode = getDropdownTrigger(getByTestId);
    fireEvent.mouseDown(selectNode);
    const list = baseElement.querySelector(`.${className}__list`);
    expect(list).toBeInTheDocument();

    const listItems = list?.querySelectorAll("li");
    expect(listItems).toHaveLength(props.options.length);
    const firstItem = listItems[0];
    const secondItem = listItems[1];
    const thirdItem = listItems[2];

    fireEvent.click(firstItem);
    expect(props.onChange).toHaveBeenCalledWith([props.options[0].value]);

    fireEvent.click(secondItem);
    expect(props.onChange).toHaveBeenCalledWith([
      props.options[0].value,
      props.options[1].value,
    ]);

    fireEvent.click(thirdItem);
    expect(props.onChange).toHaveBeenCalledWith([
      props.options[0].value,
      props.options[1].value,
      props.options[2].value,
    ]);

    fireEvent.click(secondItem);
    expect(props.onChange).toHaveBeenCalledWith([
      props.options[0].value,
      props.options[2].value,
    ]);
  });

  it("should allow clear", () => {
    props.allowClear = true;
    props.value = initialProps.options.map((option) => option.value);
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CLEAR_FIELD_ICON);
    expect(component).toBeInTheDocument();

    fireEvent.click(component);
    expect(props.onChange).toHaveBeenCalledWith([]);
  });
});
