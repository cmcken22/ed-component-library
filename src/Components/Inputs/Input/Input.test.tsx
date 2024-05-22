import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
import { testInputRendering } from "test-utils/commonTestCases";
import { getChildFromContainer } from "test-utils/helper";
import { fireEvent, render } from "test-utils/index";
import Input, { InputProps } from ".";

const initialProps: InputProps = {
  ...Input.defaultProps,
  id: "test_id",
  label: "This is a label",
  placeholder: "placeholder",
  helperText: "helperText",
  disabled: false,
  value: "",
  fullWidth: false,
  required: false,
  labelPosition: "top",
  type: "text",
  onChange: jest.fn(),
};

describe("Input", () => {
  let props: InputProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: InputProps) => {
    const component = render(<Input {...props} />, {});
    return component;
  };

  testInputRendering(renderComponent, props);

  it("should update value", () => {
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);

    const Input = component.querySelector("input");
    expect(Input).toBeInTheDocument();

    const nextValue = "5678";
    fireEvent.change(Input, { target: { value: nextValue } });

    expect(props.onChange).toHaveBeenCalledWith(nextValue);
    expect(Input).toHaveValue(nextValue);
  });

  it("should allow clear", () => {
    props.allowClear = true;
    props.value = "99";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CLEAR_FIELD_ICON);
    expect(component).toBeInTheDocument();

    fireEvent.click(component);
    expect(props.onChange).toHaveBeenCalledWith("");
  });

  it("should be disabled", () => {
    props.disabled = true;
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    const input = component.querySelector("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("disabled");
  });
});
