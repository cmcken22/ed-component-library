import { SxProps } from "@mui/material";
import { FileRejection } from "react-dropzone";

export interface FileDropZoneProps {
  id?: string;
  className?: string;
  sx?: SxProps;
  onDrop?: (files: File[], binaryStrings: string[]) => void;
  accept?: string[];
  maxFiles?: number;
  onError?: (err: FileRejection[]) => void;
}

export const MimeTypes = {
  "image/png": [".png"],
  "image/jpeg": [".jpeg", ".jpg"],
  "image/bmp": [".bmp"],
  "image/gif": [".gif"],
  "application/pdf": [".pdf"],
  "application/msword": [".doc", ".docx"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    ".docx",
  ],
  "application/vnd.ms-excel": [".xls", ".xlsx"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
    ".xlsx",
  ],
  "application/vnd.ms-powerpoint": [".ppt", ".pptx"],
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": [
    ".pptx",
  ],
  "text/plain": [".txt"],
  "application/json": [".json"],
  "application/xml": [".xml"],
  "text/html": [".html", ".htm"],
  "text/csv": [".csv"],
  "video/mp4": [".mp4"],
  "audio/mpeg": [".mp3"],
};
