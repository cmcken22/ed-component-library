import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import Modal from ".";
import { ModalProps } from "./Modal.types";

const initialProps: ModalProps = {
  ...Modal.defaultProps,
};

describe("Modal", () => {
  let props: ModalProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: ModalProps) => render(<Modal {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Modal");
    expect(component).toHaveAttribute("id", props.id);
  });
});
