import { render } from "test-utils/index";
import Tabs from "./Tabs";
import { TabsProps } from "./Tabs.types";

describe("Tabs", () => {
  let props: TabsProps;

  beforeEach(() => {
    props = {
      id: "123",
    };
  });

  const renderComponent = () => render(<Tabs {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Tabs");
    expect(component).toHaveTextContent(props.id);
  });
});
