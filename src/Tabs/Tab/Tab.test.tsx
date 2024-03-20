
import { render } from "test-utils/index";
import Tab from "./Tab";
import { TabProps } from "./Tab.types";

describe("Tab", () => {
  let props: TabProps;

  beforeEach(() => {
    props = {
      id: "123"
    };
  });

  const renderComponent = () => render(<Tab {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Tab");
    expect(component).toHaveTextContent(props.id);
  });
});
