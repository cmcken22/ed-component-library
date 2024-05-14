
import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import ProgressBar from "./ProgressBar";
import { ProgressBarProps } from "./ProgressBar.types";

const initialProps: ProgressBarProps = {
  ...ProgressBar.defaultProps,
};

describe("ProgressBar", () => {
  let props: ProgressBarProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: ProgressBarProps) => render(<ProgressBar {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("ProgressBar");
    expect(component).toHaveAttribute("id", props.id);
  });
});
