
import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import Pagination from "./Pagination";
import { PaginationProps } from "./Pagination.types";

const initialProps: PaginationProps = {
  ...Pagination.defaultProps,
};

describe("Pagination", () => {
  let props: PaginationProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: PaginationProps) => render(<Pagination {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent();
    const component = getByTestId("Pagination");
    expect(component).toHaveTextContent(props.id);
  });
});
