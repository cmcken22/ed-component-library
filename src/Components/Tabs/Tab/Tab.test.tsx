import { TEST_ID } from "src/enums";
import { render } from "test-utils/index";
import Tab from "./Tab";
import { TabProps } from "./Tab.types";

const initialProps: TabProps = {
  ...Tab.defaultProps,
  id: "1234",
};

describe("Tab", () => {
  let props: TabProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: TabProps) => render(<Tab {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.TAB);
    expect(component).toHaveAttribute("id", props.id);
  });
});
