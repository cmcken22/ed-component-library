import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
import { render } from "test-utils/index";
import HorizontalStack from "./HorizontalStack";
import { HorizontalStackProps } from "./HorizontalStack.types";

const initialProps: HorizontalStackProps = {
  ...HorizontalStack.defaultProps,
  id: "1234",
};

describe("HorizontalStack", () => {
  let props: HorizontalStackProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: HorizontalStackProps) =>
    render(<HorizontalStack {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.HORIZONTAL_STACK);
    expect(component).toHaveAttribute("id", props.id);
  });
});
