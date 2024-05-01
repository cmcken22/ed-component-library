import "@testing-library/jest-dom";
import { IconVariant } from "src/Components/Icon";
import { TEST_ID } from "src/enums";
import { fireEvent, render } from "test-utils/index";
import Chip, { ChipProps } from ".";

describe("Chip", () => {
  let props: ChipProps;

  beforeEach(() => {
    props = {
      ...Chip.defaultProps,
      id: "Chip",
      onClick: jest.fn(),
      onHover: jest.fn(),
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<Chip {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);
    expect(component).toHaveAttribute("id", props.id);
  });

  it("should accept className", () => {
    props.className = "test-class";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);
    expect(component).toHaveClass(props.className);
  });

  it("should trigger click event", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);
    fireEvent.click(component);
    expect(props.onClick).toHaveBeenCalled();
  });

  it("should trigger hover event", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);
    fireEvent.mouseEnter(component);
    expect(props.onHover).toHaveBeenCalled();
  });

  it("should have default cursor", () => {
    props.onClick = undefined;
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);
    expect(component).toHaveStyle("cursor: default");
  });

  it("should have cursor pointer", () => {
    props.onClick = jest.fn();
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);
    expect(component).toHaveStyle("cursor: pointer");
  });

  it("should have proper icons 1", () => {
    props.type = "positive";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);

    const iconWrapper = component.querySelector(".icon-wrapper");
    expect(iconWrapper).toBeInTheDocument();
    expect(iconWrapper).toHaveClass(`icon--${IconVariant.Success}`);
  });

  it("should have proper icons 2", () => {
    props.type = "negative";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);

    const iconWrapper = component.querySelector(".icon-wrapper");
    expect(iconWrapper).toBeInTheDocument();
    expect(iconWrapper).toHaveClass(`icon--${IconVariant.Error}`);
  });

  it("should have proper icons 3", () => {
    props.type = "warning";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);

    const iconWrapper = component.querySelector(".icon-wrapper");
    expect(iconWrapper).toBeInTheDocument();
    expect(iconWrapper).toHaveClass(`icon--${IconVariant.WarningV2}`);
  });

  it("should have proper icons 4", () => {
    props.type = "pending";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);

    const iconWrapper = component.querySelector(".icon-wrapper");
    expect(iconWrapper).toBeInTheDocument();
    expect(iconWrapper).toHaveClass(
      `icon--${IconVariant.MoreActionsHorizontal}`
    );
  });

  it("should have proper icons 5", () => {
    props.type = "neutral";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);

    const iconWrapper = component.querySelector(".icon-wrapper");
    expect(iconWrapper).toBeInTheDocument();
    expect(iconWrapper).toHaveClass(`icon--${IconVariant.Undetermined}`);
  });

  it("should hide icon", () => {
    props.hideIcon = true;
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);

    const iconWrapper = component.querySelector(".icon-wrapper");
    expect(iconWrapper).not.toBeInTheDocument();
  });

  it("should accept text as children", () => {
    props.children = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);
    expect(component).toHaveTextContent(props.children as string);
  });

  it("should accept text as prop", () => {
    props.text = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CHIP);
    expect(component).toHaveTextContent(props.text);
  });
});
