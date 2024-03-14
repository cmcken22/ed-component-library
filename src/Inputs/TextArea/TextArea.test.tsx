import "@testing-library/jest-dom";
import { getChildFromContainer } from "test-utils/helper";
import { fireEvent, render } from "test-utils/index";
import TextArea, { TextAreaProps } from ".";

describe("Input", () => {
  let props: TextAreaProps;

  beforeEach(() => {
    props = {
      ...TextArea.defaultProps,
      id: "test_id",
      label: "This is a label",
      placeholder: "placeholder",
      helperText: "helperText",
      disabled: false,
      value: "12345",
      fullWidth: false,
      required: false,
      labelPosition: "top",
      onChange: jest.fn(),
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<TextArea {...props} />);
    return component;
  };

  it("should render correctly", () => {
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toBeInTheDocument();

    const InputComponent = component.querySelector("textarea");
    expect(InputComponent).toBeInTheDocument();

    expect(component).toHaveAttribute("id", props.id);
    expect(InputComponent).toHaveValue(props.value);
  });

  it("should update value", () => {
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);

    const Input = component.querySelector("textarea");
    expect(Input).toBeInTheDocument();

    const nextValue = "5678";
    fireEvent.change(Input, { target: { value: nextValue } });

    expect(props.onChange).toHaveBeenCalledWith(nextValue);
    expect(Input).toHaveValue(nextValue);
  });

  it("should have label", () => {
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    const label = component.querySelector(".Input__label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(props?.label);
  });

  it("should have helperText", () => {
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    const helperText = component.querySelector(".Input__helper-text");
    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent(props?.helperText);
  });

  it("should be disabled", () => {
    props.disabled = true;
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    const input = component.querySelector("textarea");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("disabled");
  });
});
