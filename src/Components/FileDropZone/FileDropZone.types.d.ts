import { FileRejection } from 'react-dropzone';
import { SxProps } from '@mui/material';

export interface FileDropZoneProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    onDrop?: (files: File[], binaryStrings: string[]) => void;
    accept?: string[];
    maxFiles?: number;
    onError?: (err: FileRejection[]) => void;
}
export declare const MimeTypes: {
    "image/png": string[];
    "image/jpeg": string[];
    "image/bmp": string[];
    "image/gif": string[];
    "application/pdf": string[];
    "application/msword": string[];
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": string[];
    "application/vnd.ms-excel": string[];
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": string[];
    "application/vnd.ms-powerpoint": string[];
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": string[];
    "text/plain": string[];
    "application/json": string[];
    "application/xml": string[];
    "text/html": string[];
    "text/csv": string[];
    "video/mp4": string[];
    "audio/mpeg": string[];
};
