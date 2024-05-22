import { TEST_ID } from "src/enums";
import { render } from "test-utils/index";
import TabDrawer from "./TabDrawer";
import { TabDrawerProps } from "./TabDrawer.types";

const initialProps: TabDrawerProps = {
  ...TabDrawer.defaultProps,
  id: "123",
  open: true,
};

describe("TabDrawer", () => {
  let props: TabDrawerProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: TabDrawerProps) =>
    render(<TabDrawer {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.DRAWER);
    expect(component).toHaveAttribute("id", props.id);
  });
});
