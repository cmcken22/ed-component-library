import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
import { fireEvent, render } from "test-utils/index";
import Stepper from "./Stepper";
import { StepperProps } from "./Stepper.types";

const initialProps: StepperProps = {
  ...Stepper.defaultProps,
  onChange: jest.fn(),
};

describe("Stepper", () => {
  let props: StepperProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: StepperProps) =>
    render(<Stepper {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.STEPPER);
    expect(component).toHaveAttribute("id", props.id);
  });

  it("should accept className", () => {
    props.className = "className";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.STEPPER);
    expect(component).toHaveClass(props.className);
  });

  it("should have step icons", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.STEPPER);

    const upIcon = component.querySelector(".Stepper__icon--up");
    expect(upIcon).toBeInTheDocument();

    const downIcon = component.querySelector(".Stepper__icon--down");
    expect(downIcon).toBeInTheDocument();
  });

  it("should increment/decrement value", () => {
    props.value = 0;
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.STEPPER);

    const upIcon = component.querySelector(".Stepper__icon--up");
    expect(upIcon).toBeInTheDocument();
    fireEvent.click(upIcon);
    expect(props.onChange).toHaveBeenCalledWith(1);
    fireEvent.click(upIcon);
    expect(props.onChange).toHaveBeenCalledWith(2);

    const downIcon = component.querySelector(".Stepper__icon--down");
    expect(downIcon).toBeInTheDocument();
    fireEvent.click(downIcon);
    expect(props.onChange).toHaveBeenCalledWith(1);
    fireEvent.click(downIcon);
    expect(props.onChange).toHaveBeenCalledWith(0);
  });
});
