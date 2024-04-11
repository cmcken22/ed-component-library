import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import Pagination from "./Pagination";
import { PaginationProps } from "./Pagination.types";

const initialProps: PaginationProps = {
  id: "test_id",
  className: "test_class",
  page: 1,
  count: 10,
  onChange: jest.fn(),
  ...Pagination.defaultProps,
};

describe("Pagination", () => {
  let props: PaginationProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: PaginationProps) =>
    render(<Pagination {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Pagination");
    expect(component).toHaveAttribute("id", props.id);
  });
});
