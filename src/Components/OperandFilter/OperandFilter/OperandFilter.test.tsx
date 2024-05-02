import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
import { render } from "test-utils/index";
import OperandFilter from "./OperandFilter";
import { OperandFilterProps } from "./OperandFilter.types";

const initialProps: OperandFilterProps = {
  ...OperandFilter.defaultProps,
};

describe("OperandFilter", () => {
  let props: OperandFilterProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: OperandFilterProps) =>
    render(<OperandFilter {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.BASE_INPUT);
    expect(component).toHaveAttribute("id", props.id);
  });
});
