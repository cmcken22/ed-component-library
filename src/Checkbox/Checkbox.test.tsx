import "@testing-library/jest-dom";
import { fireEvent, render } from "test-utils/index";
import Checkbox, { CheckboxProps } from ".";

describe("Checkbox", () => {
  let props: CheckboxProps;

  beforeEach(() => {
    props = {
      ...Checkbox.defaultProps,
      id: "checkbox",
      onChange: jest.fn(),
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<Checkbox {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Checkbox");
    expect(component).toHaveAttribute("id", props.id);
  });

  it("should accept className", () => {
    props.className = "test-class";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Checkbox");
    expect(component).toHaveClass(props.className);
  });

  it("should have a label", () => {
    props.label = "Primary";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Checkbox");
    expect(component).toHaveTextContent(props.label);
  });

  it("should update value", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Checkbox");
    fireEvent.click(component);
    expect(props.onChange).toHaveBeenCalledWith(true);
  });

  it("should be checked by default", () => {
    props.checked = true;
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Checkbox");
    expect(component).toHaveAttribute("data-checked", "true");
  });

  it("should be disabled", () => {
    props.disabled = true;
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Checkbox");
    const span = component.querySelector("span");
    const input = span.querySelector("input");
    expect(input).toHaveAttribute("disabled");
  });
});
