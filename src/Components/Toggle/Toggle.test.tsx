import "@testing-library/jest-dom";
import { fireEvent, render } from "test-utils/index";
import Toggle, { ToggleProps } from ".";

describe("Toggle", () => {
  let props: ToggleProps;

  beforeEach(() => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    props = {
      ...Toggle.defaultProps,
      id: "test_toggle_id",
      label: "Test Toggle",
      onChange: jest.fn(),
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<Toggle {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Toggle");
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("id", props.id);
  });

  it("should accept className", () => {
    props.className = "test-class";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Toggle");
    expect(component).toHaveClass(props.className);
  });

  it("should have label", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Toggle");
    const label = component.querySelector(".ToggleLabel");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(props?.label);
  });

  it("should be disabled", () => {
    props.disabled = true;
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Toggle");
    const toggleWrapper = component.querySelector(".ToggleWrapper");
    expect(toggleWrapper).toBeInTheDocument();
    expect(toggleWrapper).toHaveAttribute("disabled");
  });

  it("should update", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Toggle");
    fireEvent.click(component);
    expect(props.onChange).toHaveBeenCalledWith(true);
    fireEvent.click(component);
    expect(props.onChange).toHaveBeenCalledWith(false);
  });

  it("should be toggled on by default", () => {
    props.checked = true;
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Toggle");
    expect(component).toHaveAttribute("data-checked", "true");
  });
});
