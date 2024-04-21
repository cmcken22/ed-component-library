import "@testing-library/jest-dom";
import { testInputRendering } from "test-utils/commonTestCases";
import { getChildFromContainer } from "test-utils/helper";
import { fireEvent, render } from "test-utils/index";
import NumberInput from "./NumberInput";
import { NumberInputProps } from "./NumberInput.types";

const initialProps: NumberInputProps = {
  ...NumberInput.defaultProps,
  onChange: jest.fn(),
};

describe("NumberInput", () => {
  let props: NumberInputProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: NumberInputProps) =>
    render(<NumberInput {...props} />);

  testInputRendering(renderComponent, props);

  it("should update value", () => {
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();

    const nextValue = 100;
    const formattedValue = "100";
    fireEvent.change(Input, { target: { value: nextValue } });
    expect(Input).toHaveValue(formattedValue);
  });

  it("should accept string value", () => {
    props.value = "100";
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();
    expect(Input).toHaveValue(props.value);

    const nextValue = "100";
    const formattedValue = "100";
    fireEvent.change(Input, { target: { value: nextValue } });
    expect(Input).toHaveValue(formattedValue);
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

    const nextValue = 100;
    const floatValue = 100.0;
    const formattedValue = "100.00";
    fireEvent.change(Input, { target: { value: nextValue } });
    expect(props.onChange).toHaveBeenCalledWith({
      value: formattedValue,
      floatValue,
      formattedValue,
    });
    expect(Input).toHaveValue(formattedValue);
  });

  it("should have decimal but not fixed", () => {
    props = {
      ...props,
      decimalScale: 2,
    };
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();

    let nextValue = 100;
    let floatValue = 100;
    let formattedValue = "100";
    fireEvent.change(Input, { target: { value: nextValue } });
    expect(props.onChange).toHaveBeenCalledWith({
      value: `${nextValue}`,
      floatValue,
      formattedValue,
    });
    expect(Input).toHaveValue(formattedValue);

    nextValue = 100.12;
    floatValue = 100.12;
    formattedValue = "100.12";
    fireEvent.change(Input, { target: { value: nextValue } });

    expect(props.onChange).toHaveBeenCalledWith({
      value: `${nextValue}`,
      floatValue,
      formattedValue,
    });
    expect(Input).toHaveValue(formattedValue);
  });

  it("should have thousand separator", () => {
    props = {
      ...props,
      thousandSeparator: true,
    };
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();

    const nextValue = 1000;
    const floatValue = 1000;
    const formattedValue = "1,000";
    fireEvent.change(Input, { target: { value: nextValue } });

    expect(props.onChange).toHaveBeenCalledWith({
      value: `${nextValue}`,
      floatValue,
      formattedValue,
    });
    expect(Input).toHaveValue(formattedValue);
  });

  it("should allow negative values", () => {
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();

    const nextValue = -100;
    const floatValue = -100;
    const formattedValue = "-100";
    fireEvent.change(Input, { target: { value: nextValue } });

    expect(props.onChange).toHaveBeenCalledWith({
      value: `${nextValue}`,
      floatValue,
      formattedValue,
    });
    expect(Input).toHaveValue(formattedValue);
  });

  it("should be disabled", () => {
    props.disabled = true;
    const { container } = renderComponent(props);
    const component = getChildFromContainer(container);
    const input = component.querySelector("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("disabled");
  });
});
