import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import OperandFilterControl from "./OperandFilterControl";
import { OperandFilterControlProps } from "./OperandFilterControl.types";

const initialProps: OperandFilterControlProps = {
  ...OperandFilterControl.defaultProps,
};

describe("OperandFilterControl", () => {
  let props: OperandFilterControlProps = { ...initialProps };

  beforeEach(() => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    props = { ...initialProps };
  });

  const renderComponent = (props: OperandFilterControlProps) =>
    render(<OperandFilterControl {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("OperandFilterControl");
    expect(component).toHaveAttribute("id", props.id);
  });
});
