import "@testing-library/jest-dom";
import { getChildFromContainer } from "test-utils/helper";
import { fireEvent, render } from "test-utils/index";
import Icon, { IconProps } from ".";

describe("Icon", () => {
  let props: IconProps;

  beforeEach(() => {
    props = {
      ...Icon.defaultProps,
      id: "Icon",
      icon: "Add",
      onClick: jest.fn(),
      onHover: jest.fn(),
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<Icon {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toHaveAttribute("id", props.id);
  });

  it("should accept className", () => {
    props.className = "test-class";
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toHaveClass(props.className);
  });

  it("should allow custom size", () => {
    props.size = "10px";
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toHaveStyle("height: 10px");
    expect(component).toHaveStyle("width: 10px");
  });

  it("should allow custom size as number", () => {
    props.size = 10;
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toHaveStyle("height: 10px");
    expect(component).toHaveStyle("width: 10px");
  });

  it("should allow custom size as height, width", () => {
    props.height = "10px";
    props.width = "10px";
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toHaveStyle("height: 10px");
    expect(component).toHaveStyle("width: 10px");
  });

  it("should allow custom size as height, width as number", () => {
    props.height = 10;
    props.width = 10;
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toHaveStyle("height: 10px");
    expect(component).toHaveStyle("width: 10px");
  });

  it("should have default size", () => {
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toHaveStyle("height: 24px");
    expect(component).toHaveStyle("width: 24px");
  });

  it("should trigger click event", () => {
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    fireEvent.click(component);
    expect(props.onClick).toHaveBeenCalled();
  });

  it("should trigger hover event", () => {
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    fireEvent.mouseEnter(component);
    expect(props.onHover).toHaveBeenCalled();
  });

  it("should have default cursor", () => {
    props.onClick = undefined;
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toHaveStyle("cursor: default");
  });
});
