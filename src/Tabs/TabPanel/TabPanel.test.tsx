
import { render } from "test-utils/index";
import TabPanel from "./TabPanel";
import { TabPanelProps } from "./TabPanel.types";

describe("TabPanel", () => {
  let props: TabPanelProps;

  beforeEach(() => {
    props = {
      id: "123"
    };
  });

  const renderComponent = () => render(<TabPanel {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("TabPanel");
    expect(component).toHaveTextContent(props.id);
  });
});
