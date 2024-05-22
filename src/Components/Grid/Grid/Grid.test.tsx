import { TEST_ID } from "src/enums";
import { render } from "test-utils/index";
import Grid from "./Grid";
import { GridProps } from "./Grid.types";

const initialProps: GridProps = {
  ...Grid.defaultProps,
  id: "1234",
};

describe("Grid", () => {
  let props: GridProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: GridProps) => render(<Grid {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.GRID);
    expect(component).toHaveAttribute("id", props.id);
  });
});
