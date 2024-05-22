import { TEST_ID } from "src/enums";
import { render } from "test-utils/index";
import TabPanel from "./TabPanel";
import { TabPanelProps } from "./TabPanel.types";

const initialProps: TabPanelProps = {
  ...TabPanel.defaultProps,
  tabValue: "1",
  id: "simple-tab-1",
};

describe("TabPanel", () => {
  let props: TabPanelProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: TabPanelProps) =>
    render(<TabPanel {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.TAB_PANEL);
    expect(component).toHaveAttribute("id", props.id);
  });
});
