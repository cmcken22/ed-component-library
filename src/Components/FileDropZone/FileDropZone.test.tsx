import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
import { mbToBytes } from "src/utils";
import { act, fireEvent, render } from "test-utils/index";
import FileDropZone from "./FileDropZone";
import { FileDropZoneProps } from "./FileDropZone.types";

const initialProps: FileDropZoneProps = {
  ...FileDropZone.defaultProps,
  onDrop: jest.fn(),
  onDragEnter: jest.fn(),
  onDragLeave: jest.fn(),
  onError: jest.fn(),
};

describe("FileDropZone", () => {
  let props: FileDropZoneProps = { ...initialProps };
  let files;

  beforeEach(() => {
    files = [createFile("file1.pdf", 1111, "application/pdf")];
    props = { ...initialProps };
  });

  const renderComponent = (props: FileDropZoneProps) =>
    render(<FileDropZone {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.FILE_DROP_ZONE);
    expect(component).toHaveAttribute("id", props.id);
  });

  test("invoke onDragEnter when dragenter event occurs", async () => {
    const event = createDtWithFiles(files);

    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.FILE_DROP_ZONE);

    await act(() => fireEvent.dragEnter(component, event));
    expect(props.onDragEnter).toHaveBeenCalled();
  });

  test("invoke onDragLeave when dragleave event occurs", async () => {
    const event = createDtWithFiles(files);

    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.FILE_DROP_ZONE);

    await act(() => fireEvent.dragLeave(component, event));
    expect(props.onDragLeave).toHaveBeenCalled();
  });

  test("invoke onDrop when file drop event occurs", async () => {
    const event = createDtWithFiles(files);

    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.FILE_DROP_ZONE);

    await act(async () => {
      fireEvent.drop(component, event);
      await new Promise((r) => setTimeout(r, 500));
    });
    expect(props.onDrop).toHaveBeenCalled();
  });

  test("too large error", async () => {
    const largeFile = createFile(
      "file1.pdf",
      4000000000000000,
      "application/pdf"
    );
    const files = [largeFile];
    const event = createDtWithFiles(files);

    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.FILE_DROP_ZONE);

    await act(async () => {
      fireEvent.drop(component, event);
      await new Promise((r) => setTimeout(r, 500));
    });

    expect(props.onError).toHaveBeenCalledWith([
      {
        file: largeFile,
        errors: [
          {
            code: "file-too-large",
            message: `File is larger than ${mbToBytes(props?.maxSize)} bytes`,
          },
        ],
      },
    ]);
  });

  test("too many files error", async () => {
    props.maxFiles = 1;
    const file1 = createFile("file1.pdf", 1111, "application/pdf");
    const file2 = createFile("file2.pdf", 1111, "application/pdf");
    const files = [file1, file2];
    const event = createDtWithFiles(files);
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.FILE_DROP_ZONE);

    await act(async () => {
      fireEvent.drop(component, event);
      await new Promise((r) => setTimeout(r, 500));
    });

    expect(props.onError).toHaveBeenCalledWith([
      {
        file: file1,
        errors: [
          {
            code: "too-many-files",
            message: "Too many files",
          },
        ],
      },
      {
        file: file2,
        errors: [
          {
            code: "too-many-files",
            message: "Too many files",
          },
        ],
      },
    ]);
  });

  it("sets {accept} prop on the <input>", () => {
    props.accept = [".jpeg"];
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.FILE_DROP_ZONE);
    const input = component.querySelector("input");
    expect(input).toHaveAttribute("accept", "image/jpeg");
  });

  it("updates {multiple} prop on the <input> when maxFiles > 1", () => {
    props.maxFiles = 2;
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.FILE_DROP_ZONE);
    const input = component.querySelector("input");
    expect(input).toHaveAttribute("multiple");
  });

  it("should be disabled", () => {
    props.disabled = true;
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.FILE_DROP_ZONE);
    const input = component.querySelector("input");
    expect(input).toBeDisabled();
  });
});

/**
 * createDtWithFiles creates a mock data transfer object that can be used for drop events
 * @param {File[]} files
 */
function createDtWithFiles(files = []) {
  return {
    dataTransfer: {
      files,
      items: files.map((file) => ({
        kind: "file",
        size: file.size,
        type: file.type,
        getAsFile: () => file,
      })),
      types: ["Files"],
    },
  };
}

/**
 * createFile creates a mock File object
 * @param {string} name
 * @param {number} size
 * @param {string} type
 */
function createFile(name, size, type) {
  const file = new File([], name, { type });
  Object.defineProperty(file, "size", {
    get() {
      return size;
    },
  });
  return file;
}
