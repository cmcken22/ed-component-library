import { Accept } from 'react-dropzone';

export declare const getFile: (file: any) => Promise<unknown>;
export declare const fileTypesAcceptObject: (arr: string[]) => {
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
} | Accept;
interface ExtractedTextResult {
    result: string[];
    matchIndicies: number[];
}
export declare const extractText: (input: string) => ExtractedTextResult;
export {};
