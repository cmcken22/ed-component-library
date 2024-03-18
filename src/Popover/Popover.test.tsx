import { render } from "test-utils/index";
import Popover from "./Popover";
import { PopoverProps } from "./Popover.types";

describe("Test Component", () => {
  let props: PopoverProps;

  beforeEach(() => {
    props = {
      id: "123",
    };
  });

  const renderComponent = () => render(<Popover {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Popover");
    expect(component).toHaveTextContent("conner was here");
  });
});
