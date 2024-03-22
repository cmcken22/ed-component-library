
import { render } from "test-utils/index";
import BaseSelect from "./BaseSelect";
import { BaseSelectProps } from "./BaseSelect.types";

describe("BaseSelect", () => {
  let props: BaseSelectProps;

  beforeEach(() => {
    props = {
      id: "123"
    };
  });

  const renderComponent = () => render(<BaseSelect {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("BaseSelect");
    expect(component).toHaveTextContent(props.id);
  });
});
