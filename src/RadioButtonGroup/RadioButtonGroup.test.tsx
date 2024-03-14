import "@testing-library/jest-dom";
import { fireEvent, render } from "test-utils/index";
import RadioButtonGroup, { RadioButtonGroupProps, dataTestId } from ".";
import { baseClassName as radioButtonClassName } from "../RadioButton";

describe("RadioButtonGroup", () => {
  let props: RadioButtonGroupProps;

  beforeEach(() => {
    props = {
      ...RadioButtonGroup.defaultProps,
      id: "test_radio_button_group_id",
      labelPosition: "left",
      value: "test_value",
      options: [
        { label: "Option 1", value: "option_1" },
        { label: "Option 2", value: "option_2" },
        { label: "Option 3", value: "option_3", disabled: true },
        { label: "Option 4", value: "option_4" },
      ],
      onChange: jest.fn(),
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<RadioButtonGroup {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("id", props.id);
  });

  it("should render all options", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    expect(component).toBeInTheDocument();

    const options = component.querySelectorAll(`.${radioButtonClassName}`);
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      expect(option).toBeInTheDocument();
      expect(option).toHaveTextContent(props.options[i].label);
    }
  });

  it("should have option 1 selected by default", () => {
    props.value = "option_1";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("data-value", props.value);
    const options = component.querySelectorAll(`.${radioButtonClassName}`);
    expect(options[0]).toHaveAttribute("data-checked", "true");
  });

  it("should have third option disabled only", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    expect(component).toBeInTheDocument();

    const options = component.querySelectorAll(`.${radioButtonClassName}`);

    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      expect(option).toBeInTheDocument();
      const input = option.querySelector(`.${radioButtonClassName}__input`);
      if (i === 2) {
        expect(input).toHaveAttribute("disabled");
      } else {
        expect(input).not.toHaveAttribute("disabled");
      }
    }
  });

  it("should select first value", () => {
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(dataTestId);
    expect(component).toBeInTheDocument();

    const options = component.querySelectorAll(`.${radioButtonClassName}`);
    const firstOption = options[0];
    const input = firstOption.querySelector(`.${radioButtonClassName}__input`);
    fireEvent.click(input);
    expect(props.onChange).toHaveBeenCalledWith(props.options[0].value);
    expect(firstOption).toHaveAttribute("data-checked", "true");
  });
});
