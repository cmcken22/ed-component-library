
import { render } from "test-utils/index";
import Grid from "./Grid";
import { GridProps } from "./Grid.types";

describe("Grid", () => {
  let props: GridProps;

  beforeEach(() => {
    props = {
      id: "123"
    };
  });

  const renderComponent = () => render(<Grid {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("Grid");
    expect(component).toHaveTextContent("conner was here");
  });
});
