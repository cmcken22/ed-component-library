import "@testing-library/jest-dom";
import { testInputRendering } from "test-utils/commonTestCases";
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
    const floatValue = 100;
    const formattedValue = "100";
    fireEvent.change(Input, { target: { value: nextValue } });

    expect(props.onChange).toHaveBeenCalledWith({
      value: `${nextValue}`,
      floatValue,
      formattedValue,
    });
    expect(Input).toHaveValue(formattedValue);
  });
});
