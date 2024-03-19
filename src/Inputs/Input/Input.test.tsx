import "@testing-library/jest-dom";
import { getChildFromContainer } from "test-utils/helper";
import { fireEvent, render } from "test-utils/index";
import Input, { InputProps } from ".";

describe("Input", () => {
  let props: InputProps;

  beforeEach(() => {
    props = {
      ...Input.defaultProps,
      id: "test_id",
      label: "This is a label",
      placeholder: "placeholder",
      helperText: "helperText",
      disabled: false,
      value: "12345",
      fullWidth: false,
      required: false,
      labelPosition: "top",
      type: "text",
      onChange: jest.fn(),
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<Input {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toBeInTheDocument();

    const InputComponent = component.querySelector("input");
    expect(InputComponent).toBeInTheDocument();

    expect(component).toHaveAttribute("id", props.id);
    expect(InputComponent).toHaveValue(props.value);
  });

  it("should accept className", () => {
    props.className = "test-class";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Input");
    expect(component).toHaveClass(props.className);
  });

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
    const input = component.querySelector("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("disabled");
  });

  // it("should have success state", () => {
  //   props.status = "success";
  //   const { container } = renderComponent(props);
  //   expect(container).toMatchSnapshot("Input success state");
  // });

  // it("should have warning state", () => {
  //   props.status = "warning";
  //   const { container } = renderComponent(props);
  //   expect(container).toMatchSnapshot("Input warning state");
  // });

  // it("should have error state", () => {
  //   props.status = "error";
  //   const { container } = renderComponent(props);
  //   expect(container).toMatchSnapshot("Input error state");
  // });
});
