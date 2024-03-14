import "@testing-library/jest-dom";
import { getChildFromContainer } from "test-utils/helper";
import { fireEvent, render } from "test-utils/index";
import Currency, { CurrencyInputProps } from "./Currency";

describe("Currency", () => {
  let props: CurrencyInputProps;

  beforeEach(() => {
    props = {
      ...Currency.defaultProps,
      id: "test_id",
      label: "This is a label",
      placeholder: "placeholder",
      helperText: "helperText",
      disabled: false,
      value: "",
      fullWidth: false,
      required: false,
      labelPosition: "top",
      onChange: jest.fn(),
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<Currency {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);

    const InputComponent = component.querySelector("input");
    expect(InputComponent).toBeInTheDocument();

    expect(component).toHaveAttribute("id", props.id);
    expect(InputComponent).toHaveValue(props.value);
  });

  it("should have label", () => {
    const { container } = renderComponent(props);
    const label = container.querySelector(".Input__label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(props?.label);
  });

  it("should have helperText", () => {
    const { container } = renderComponent(props);
    const helperText = container.querySelector(".Input__helper-text");
    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent(props?.helperText);
  });

  it("should update value", () => {
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();

    const nextValue = "100";
    fireEvent.change(Input, { target: { value: nextValue } });
    expect(Input).toHaveValue(nextValue);
  });

  it("should have fixed decimal", () => {
    props = {
      ...props,
      fixedDecimalScale: true,
      decimalScale: 2,
    };
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();

    const nextValue = "100";
    const formattedValue = "100.00";
    const floatValue = 100.0;
    const expectedValue = "100.00";

    fireEvent.change(Input, { target: { value: nextValue } });
    expect(props.onChange).toHaveBeenCalledWith(
      formattedValue,
      formattedValue,
      floatValue
    );

    expect(Input).toHaveValue(expectedValue);
  });

  it("should have decimal but not fixed", () => {
    props = {
      ...props,
      decimalScale: 2,
    };
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();

    let nextValue = "100";
    let formattedValue = "100";
    let floatValue = 100;
    let expectedValue = "100";
    fireEvent.change(Input, { target: { value: nextValue } });
    expect(props.onChange).toHaveBeenCalledWith(
      nextValue,
      formattedValue,
      floatValue
    );

    nextValue = "100.12";
    formattedValue = "100.12";
    floatValue = 100.12;
    expectedValue = "100.12";
    fireEvent.change(Input, { target: { value: nextValue } });

    expect(props.onChange).toHaveBeenCalledWith(
      nextValue,
      formattedValue,
      floatValue
    );
    expect(Input).toHaveValue(expectedValue);
  });

  it("should have thousand separator", () => {
    props = {
      ...props,
      thousandSeparator: true,
    };
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();

    const nextValue = "1000";
    const formattedValue = "1,000";
    const floatValue = 1000;
    const expectedValue = "1,000";
    fireEvent.change(Input, { target: { value: nextValue } });

    expect(props.onChange).toHaveBeenCalledWith(
      nextValue,
      formattedValue,
      floatValue
    );
    expect(Input).toHaveValue(expectedValue);
  });

  it("should allow negative values", () => {
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();

    const nextValue = "-100";
    const formattedValue = "-100";
    const floatValue = -100.0;
    const expectedValue = "-100";
    fireEvent.change(Input, { target: { value: nextValue } });

    expect(props.onChange).toHaveBeenCalledWith(
      nextValue,
      formattedValue,
      floatValue
    );
    expect(Input).toHaveValue(expectedValue);
  });
});
