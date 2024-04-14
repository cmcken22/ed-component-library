
import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import NumberInput from "./NumberInput";
import { NumberInputProps } from "./NumberInput.types";

const initialProps: NumberInputProps = {
  ...NumberInput.defaultProps,
};

describe("NumberInput", () => {
  let props: NumberInputProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: NumberInputProps) => render(<NumberInput {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("NumberInput");
    expect(component).toHaveAttribute("id", props.id);
  });
});
