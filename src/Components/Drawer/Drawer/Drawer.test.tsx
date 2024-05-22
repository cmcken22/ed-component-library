import { TEST_ID } from "src/enums";
import { render } from "test-utils/index";
import Drawer from "./Drawer";
import { DrawerProps } from "./Drawer.types";

const initialProps: DrawerProps = {
  ...Drawer.defaultProps,
  id: "1234",
  open: true,
};

describe("Drawer", () => {
  let props: DrawerProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: DrawerProps) => render(<Drawer {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.DRAWER);
    expect(component).toHaveAttribute("id", props.id);
  });
});
