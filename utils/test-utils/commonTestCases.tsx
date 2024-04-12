import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";

// Define a reusable test function
export function testInputRendering(renderComponent, props) {
  test("should render correctly", () => {
    props.id = "test-id";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.BASE_INPUT);
    expect(component).toHaveAttribute("id", props.id);
  });
  test("should accept className", () => {
    props.className = "test-class";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.BASE_INPUT);
    expect(component).toHaveClass(props.className);
  });
  test("should have label", () => {
    props.label = "Label";
    const { container } = renderComponent(props);
    const label = container.querySelector(`.Input__label`);
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(props?.label);
  });
  test("should have helperText", () => {
    props.helperText = "helper text";
    const { container } = renderComponent(props);
    const helperText = container.querySelector(`.Input__helper-text`);
    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent(props?.helperText);
  });
}
