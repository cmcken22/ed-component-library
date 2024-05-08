
import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import FileDropZone from "./FileDropZone";
import { FileDropZoneProps } from "./FileDropZone.types";

const initialProps: FileDropZoneProps = {
  ...FileDropZone.defaultProps,
};

describe("FileDropZone", () => {
  let props: FileDropZoneProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: FileDropZoneProps) => render(<FileDropZone {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("FileDropZone");
    expect(component).toHaveAttribute("id", props.id);
  });
});
