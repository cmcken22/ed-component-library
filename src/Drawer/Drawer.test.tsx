
import { render } from "test-utils/index";
import Drawer from "./Drawer";
import { DrawerProps } from "./Drawer.types";

describe("Drawer", () => {
  let props: DrawerProps;

  beforeEach(() => {
    props = {
      id: "123"
    };
  });

  const renderComponent = () => render(<Drawer {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Drawer");
    expect(component).toHaveTextContent(props.id);
  });
});
