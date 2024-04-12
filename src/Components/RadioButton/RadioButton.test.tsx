import "@testing-library/jest-dom";
import { fireEvent, render } from "test-utils/index";
import RadioButton, { RadioButtonProps, baseClassName, dataTestId } from ".";

describe("RadioButton", () => {
  let props: RadioButtonProps;

  beforeEach(() => {
    props = {
      ...RadioButton.defaultProps,
      id: "test_radio_button_id",
      label: "Test RadioButton",
      value: "test_value",
      labelPosition: "left",
      onChange: jest.fn(),
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<RadioButton {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("id", props.id);
  });

  it("should have label", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    const label = component.querySelector(`.MuiTypography-root`);
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(props.label);
  });

  it("should be checked by default", () => {
    props.checked = true;
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    expect(component).toHaveAttribute("data-checked", "true");
  });

  it("should be disabled", () => {
    props.disabled = true;
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    const input = component.querySelector(`.${baseClassName}__input`);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("disabled");
  });

  it("should get selected on click", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);

    const formControlLabel = component.querySelector(
      `.${baseClassName}__label`
    );
    expect(formControlLabel).toBeInTheDocument();

    fireEvent.click(formControlLabel);
    expect(props.onChange).toHaveBeenCalledWith(props.value, true);
  });

  it("should not change after selected", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);

    const formControlLabel = component.querySelector(
      `.${baseClassName}__label`
    );
    expect(formControlLabel).toBeInTheDocument();

    fireEvent.click(formControlLabel);
    expect(props.onChange).toHaveBeenCalledWith(props.value, true);
    expect(component).toHaveAttribute("data-checked", "true");

    // after clicking again, should still be checked
    fireEvent.click(formControlLabel);
    expect(component).toHaveAttribute("data-checked", "true");
  });

  it("should allow deselect", () => {
    props.allowDeselect = true;
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);

    const formControlLabel = component.querySelector(
      `.${baseClassName}__label`
    );
    expect(formControlLabel).toBeInTheDocument();

    fireEvent.click(formControlLabel);
    expect(props.onChange).toHaveBeenCalledWith(props.value, true);
    expect(component).toHaveAttribute("data-checked", "true");

    fireEvent.click(formControlLabel);
    expect(props.onChange).toHaveBeenCalledWith(props.value, false);
    expect(component).toHaveAttribute("data-checked", "false");
  });
});
