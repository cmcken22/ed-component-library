import { TEST_ID } from "src/enums";
import { render } from "test-utils/index";
import Tabs from ".";
import { TabsProps } from "./Tabs.types";

const initialProps: TabsProps = {
  ...Tabs.defaultProps,
  children: [],
  id: "1234",
};

describe("TabPanel", () => {
  let props: TabsProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: TabsProps) => render(<Tabs {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.TABS);
    expect(component).toHaveAttribute("id", props.id);
  });
});
