import { SxProps } from "@mui/material";
import { DropzoneState, FileError, FileRejection } from "react-dropzone";

/**
 * The whole purpose of this function is to capture and preserve types to enable type inference,
 * it's entirely useless otherwise
 * https://stackoverflow.com/questions/53662208/types-from-both-keys-and-values-of-object-in-typescript#:~:text=The%20whole%20purpose%20of%20this%20function%20is%20to%20capture%20and%20preserve%20types%20to%20enable%20type%20inference%2C%20it%27s%20entirely%20useless%20otherwise%2C%20but%20with%20it%20you%20can%20have
 */
function t<V extends string, T extends { [key in string]: V }>(o: T): T {
  return o;
}

export const FileTypeMap = t({
  PNG: ".png",
  JPEG: ".jpeg",
  JPG: ".jpg",
  BMP: ".bmp",
  GIF: ".gif",
  PDF: ".pdf",
  DOC: ".doc",
  DOCX: ".docx",
  XLS: ".xls",
  XLSX: ".xlsx",
  PPT: ".ppt",
  PPTX: ".pptx",
  TXT: ".txt",
  JSON: ".json",
  XML: ".xml",
  HTML: ".html",
  HTM: ".htm",
  CSV: ".csv",
  MP4: ".mp4",
  MP3: ".mp3",
  MOV: ".mov",
  AVI: ".avi",
} as const);

type Keys = keyof typeof FileTypeMap;
export type FileType = (typeof FileTypeMap)[Keys];

export interface FileDropZoneProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  onDrop?: (files: File[], binaryStrings: string[]) => void;
  accept?: FileType[];
  maxFiles?: number;
  onError?: (err: FileRejection[]) => void;
  /**
   * The minimum file size in bytes
   */
  minSize?: number;
  /**
   * The maximum file size in bytes, defaults to 20MB
   */
  maxSize?: number;
  validator?: <T extends File>(file: T) => FileError | FileError[] | null;
  disabled?: boolean;
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick?: boolean;
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog. Note that it also stops tracking the focus state.
   */
  noKeyboard?: boolean;
  /**
   * If true, disables drag 'n' drop
   */
  noDrag?: boolean;
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling?: boolean;
  renderContent?: ({
    open,
    isDragActive,
    isFocused,
    files,
  }: Partial<DropzoneState> & { files: File[] }) => JSX.Element;
  renderAcceptedFiles?: (files: File[]) => JSX.Element;
  /**
   * The text to display. Wrap the link in double curly braces to extract the text.
   * Example: "Click {{here}} to upload a file"
   */
  text?: string;
  width?: string | number;
  height?: string | number;
  fullWidth?: boolean;
}

export const MimeTypes = {
  "image/png": [FileTypeMap.PNG],
  "image/jpeg": [FileTypeMap.JPEG, FileTypeMap.JPG],
  "image/bmp": [FileTypeMap.BMP],
  "image/gif": [FileTypeMap.GIF],
  "application/pdf": [FileTypeMap.PDF],
  "application/msword": [FileTypeMap.DOC, FileTypeMap.DOCX],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    FileTypeMap.DOCX,
  ],
  "application/vnd.ms-excel": [FileTypeMap.XLS, FileTypeMap.XLSX],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
    FileTypeMap.XLSX,
  ],
  "application/vnd.ms-powerpoint": [FileTypeMap.PPT, FileTypeMap.PPTX],
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": [
    FileTypeMap.PPTX,
  ],
  "text/plain": [FileTypeMap.TXT],
  "application/json": [FileTypeMap.JSON],
  "application/xml": [FileTypeMap.XML],
  "text/html": [FileTypeMap.HTML, FileTypeMap.HTM],
  "text/csv": [FileTypeMap.CSV],
  "video/mp4": [FileTypeMap.MP4],
  "audio/mpeg": [FileTypeMap.MP3],
  "video/quicktime": [FileTypeMap.MOV],
  "video/x-msvideo": [FileTypeMap.AVI],
};
