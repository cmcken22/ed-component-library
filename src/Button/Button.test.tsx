import "@testing-library/jest-dom";
import { fireEvent, render } from "test-utils/index";
import Button, { ButtonProps, baseClassName, dataTestId } from "./";

describe("Button", () => {
  let props: ButtonProps;

  beforeEach(() => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    props = {
      ...Button.defaultProps,
      id: "test_button_id",
      children: "Test Button",
      variant: "contained",
      color: "primary",
      onClick: jest.fn(),
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<Button {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("id", props.id);
  });

  it("should have text", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    expect(component).toHaveTextContent(props?.children as string);
  });

  it("should be disabled", () => {
    props.disabled = true;
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    expect(component).toBeDisabled();
  });

  it("should fire click event", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    fireEvent.click(component);
    expect(props.onClick).toHaveBeenCalled();
  });

  it("should have left icon", () => {
    props.iconLeft = "Add";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    const leftIcon = component.querySelector(`.${baseClassName}__icon-left`);
    expect(leftIcon).toBeInTheDocument();
  });

  it("should have right icon", () => {
    props.iconRight = "Add";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    const rightIcon = component.querySelector(`.${baseClassName}__icon-right`);
    expect(rightIcon).toBeInTheDocument();
  });

  it("should have contained variant", () => {
    props.variant = "contained";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    expect(component).toHaveClass(`${baseClassName}--contained`);
  });

  it("should have outlined variant", () => {
    props.variant = "outlined";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    expect(component).toHaveClass(`${baseClassName}--outlined`);
  });

  it("should have link variant", () => {
    props.variant = "link";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    expect(component).toHaveClass(`${baseClassName}--link`);
  });
});
