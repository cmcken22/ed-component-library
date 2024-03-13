import "@testing-library/jest-dom";
import { fireEvent, render } from "../../utils/test-utils";
import Input, { InputProps } from "./Input";

describe("Input", () => {
  let props: InputProps;

  beforeEach(() => {
    props = {
      id: "test_id",
      label: "This is a label",
      placeholder: "placeholder",
      helperText: "helperText",
      disabled: false,
      value: "12345",
      fullWidth: false,
      required: false,
      labelPosition: "top",
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<Input {...props} />, {});
    return component;
  };

  // test("renders correctly", () => {
  //   const { container } = renderComponent(props);
  //   expect(container).toMatchSnapshot("Input test 1");
  // });

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Input");
    expect(component).toBeInTheDocument();

    const InputComponent = component.querySelector("input");
    expect(InputComponent).toBeInTheDocument();

    expect(component).toHaveAttribute("id", props.id);
    expect(InputComponent).toHaveValue(props.value);
  });

  it("should update value", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Input");
    const Input = component.querySelector("input");
    expect(Input).toBeInTheDocument();
    const nextValue = "5678";
    fireEvent.change(Input!, { target: { value: nextValue } });
    expect(Input).toHaveValue(nextValue);
  });

  // it("should have label", () => {
  //   const { getByTestId } = renderComponent(props);
  //   const component = getByTestId("Input");
  //   const label = component.querySelector(".Input__label");
  //   expect(label).toBeInTheDocument();
  //   expect(label).toHaveTextContent(props?.label!);
  // });

  // it("should have helperText", () => {
  //   const { getByTestId } = renderComponent(props);
  //   const component = getByTestId("Input");
  //   const helperText = component.querySelector(".Input__helper-text");
  //   expect(helperText).toBeInTheDocument();
  //   expect(helperText).toHaveTextContent(props?.helperText!);
  // });

  // it("should have success state", () => {
  //   props.status = "success";
  //   const { container } = renderComponent(props);
  //   expect(container).toMatchSnapshot("Input success state");
  // });

  // it("should have warning state", () => {
  //   props.status = "warning";
  //   const { container } = renderComponent(props);
  //   expect(container).toMatchSnapshot("Input warning state");
  // });

  // it("should have error state", () => {
  //   props.status = "error";
  //   const { container } = renderComponent(props);
  //   expect(container).toMatchSnapshot("Input error state");
  // });
});
