import "@testing-library/jest-dom";
import { testInputRendering } from "test-utils/commonTestCases";
import { getChildFromContainer } from "test-utils/helper";
import { fireEvent, render } from "test-utils/index";
import Percent, { PercentProps } from ".";

const initialProps: PercentProps = {
  ...Percent.defaultProps,
  id: "test_id",
  label: "This is a label",
  placeholder: "placeholder",
  helperText: "helperText",
  disabled: false,
  value: undefined,
  fullWidth: false,
  required: false,
  labelPosition: "top",
  onChange: jest.fn(),
};

describe("Percent", () => {
  let props: PercentProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: any) => {
    const component = render(<Percent {...props} />, {});
    return component;
  };

  testInputRendering(renderComponent, props);

  it("should update value", () => {
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();

    const nextValue = 100;
    const formattedValue = "100";
    fireEvent.change(Input, { target: { value: nextValue } });

    expect(props.onChange).toHaveBeenCalledWith(nextValue, formattedValue);
    expect(Input).toHaveValue(formattedValue);
  });

  it("should accept string value", () => {
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();

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
    const formattedValue = "100.00";
    fireEvent.change(Input, { target: { value: nextValue } });

    expect(props.onChange).toHaveBeenCalledWith(nextValue, formattedValue);
    expect(Input).toHaveValue(formattedValue);
  });

  it("should not have decimal but not fixed", () => {
    props = {
      ...props,
      decimalScale: 2,
    };
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();

    let nextValue = 100;
    let formattedValue = "100";
    fireEvent.change(Input, { target: { value: nextValue } });
    expect(props.onChange).toHaveBeenCalledWith(nextValue, formattedValue);

    nextValue = 100.12;
    formattedValue = "100.12";
    fireEvent.change(Input, { target: { value: nextValue } });
    expect(props.onChange).toHaveBeenCalledWith(nextValue, formattedValue);

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
    const formattedValue = "1,000";
    fireEvent.change(Input, { target: { value: nextValue } });

    expect(props.onChange).toHaveBeenCalledWith(nextValue, formattedValue);
    expect(Input).toHaveValue(formattedValue);
  });

  it("should allow negative values", () => {
    const { container } = renderComponent(props);
    const Input = container.querySelector("input");
    expect(Input).toBeInTheDocument();

    const nextValue = -100;
    const formattedValue = "-100";
    fireEvent.change(Input, { target: { value: nextValue } });

    expect(props.onChange).toHaveBeenCalledWith(nextValue, formattedValue);
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
