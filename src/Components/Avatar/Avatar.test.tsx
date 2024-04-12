import "@testing-library/jest-dom";
import { getChildFromContainer } from "test-utils/helper";
import { fireEvent, render } from "test-utils/index";
import Avatar, { AvatarProps } from ".";

describe("Avatar", () => {
  let props: AvatarProps;

  beforeEach(() => {
    props = {
      ...Avatar.defaultProps,
      id: "avatar",
      onClick: jest.fn(),
      onHover: jest.fn(),
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<Avatar {...props} />, {});
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

  it("should have default size", () => {
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toHaveStyle("height: 32px");
    expect(component).toHaveStyle("width: 32px");
  });

  it("should have small size", () => {
    props.size = "small";
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toHaveStyle("height: 24px");
    expect(component).toHaveStyle("width: 24px");
  });

  it("should have large size", () => {
    props.size = "large";
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toHaveStyle("height: 40px");
    expect(component).toHaveStyle("width: 40px");
  });

  it("should have image", () => {
    props.src =
      "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/highres-mjb-4858.jpg?1643119143";
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    expect(component).toHaveStyle("background-image: url(" + props.src + ")");
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
