
import { render } from "test-utils/index";
import TabDrawer from "./TabDrawer";
import { TabDrawerProps } from "./TabDrawer.types";

describe("TabDrawer", () => {
  let props: TabDrawerProps;

  beforeEach(() => {
    props = {
      id: "123"
    };
  });

  const renderComponent = () => render(<TabDrawer {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("TabDrawer");
    expect(component).toHaveTextContent(props.id);
  });
});
