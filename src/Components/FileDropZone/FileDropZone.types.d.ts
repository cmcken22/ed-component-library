import { DropzoneState, FileError, FileRejection } from 'react-dropzone';
import { SxProps } from '@mui/material';

export declare const FileTypeMap: {
    readonly PNG: ".png";
    readonly JPEG: ".jpeg";
    readonly JPG: ".jpg";
    readonly BMP: ".bmp";
    readonly GIF: ".gif";
    readonly PDF: ".pdf";
    readonly DOC: ".doc";
    readonly DOCX: ".docx";
    readonly XLS: ".xls";
    readonly XLSX: ".xlsx";
    readonly PPT: ".ppt";
    readonly PPTX: ".pptx";
    readonly TXT: ".txt";
    readonly JSON: ".json";
    readonly XML: ".xml";
    readonly HTML: ".html";
    readonly HTM: ".htm";
    readonly CSV: ".csv";
    readonly MP4: ".mp4";
    readonly MP3: ".mp3";
    readonly MOV: ".mov";
    readonly AVI: ".avi";
};
type Keys = keyof typeof FileTypeMap;
export type FileType = (typeof FileTypeMap)[Keys];
export interface FileDropZoneProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    onDragEnter?: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragLeave?: (event: React.DragEvent<HTMLDivElement>) => void;
    onDrop?: (files: File[], binaryStrings: string[]) => void;
    accept?: FileType[];
    maxFiles?: number;
    onError?: (err: FileRejection[]) => void;
    /**
     * The minimum file size in MB, defaults to 0MB
     */
    minSize?: number;
    /**
     * The maximum file size in MB, defaults to 20MB
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
    renderContent?: ({ open, isDragActive, isFocused, files, }: Partial<DropzoneState> & {
        files: File[];
    }) => JSX.Element;
    /**
     * The text to display. Wrap the link in double curly braces to extract the text.
     * Example: "Click {{here}} to upload a file"
     */
    text?: string;
    subText?: string;
    width?: string | number;
    height?: string | number;
    fullWidth?: boolean;
}
export declare const MimeTypes: {
    "image/png": ".png"[];
    "image/jpeg": (".jpeg" | ".jpg")[];
    "image/bmp": ".bmp"[];
    "image/gif": ".gif"[];
    "application/pdf": ".pdf"[];
    "application/msword": (".doc" | ".docx")[];
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx"[];
    "application/vnd.ms-excel": (".xls" | ".xlsx")[];
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx"[];
    "application/vnd.ms-powerpoint": (".ppt" | ".pptx")[];
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": ".pptx"[];
    "text/plain": ".txt"[];
    "application/json": ".json"[];
    "application/xml": ".xml"[];
    "text/html": (".html" | ".htm")[];
    "text/csv": ".csv"[];
    "video/mp4": ".mp4"[];
    "audio/mpeg": ".mp3"[];
    "video/quicktime": ".mov"[];
    "video/x-msvideo": ".avi"[];
};
export {};
