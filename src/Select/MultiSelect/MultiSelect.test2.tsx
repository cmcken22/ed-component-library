
import { render } from "test-utils/index";
import MultiSelect from "./MultiSelect";
import { MultiSelectProps } from "./MultiSelect.types";

describe("MultiSelect", () => {
  let props: MultiSelectProps;

  beforeEach(() => {
    props = {
      id: "123"
    };
  });

  const renderComponent = () => render(<MultiSelect {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("MultiSelect");
    expect(component).toHaveTextContent(props.id);
  });
});
