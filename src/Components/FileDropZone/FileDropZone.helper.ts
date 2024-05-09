import { Accept } from "react-dropzone";
import { MimeTypes } from "./FileDropZone.types";

export const getFile = (file: any) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function (event: any) {
      const binaryString = event.target.result;
      return resolve([file, binaryString]);
    };
    reader.readAsBinaryString(file);
  });
};

export const fileTypesAcceptObject = (arr: string[]) => {
  if (!arr.length) return MimeTypes;

  const obj: any = {};
  for (const fileType of arr) {
    for (const key in MimeTypes) {
      if (MimeTypes[key].includes(fileType)) {
        if (!obj[key]) {
          obj[key] = [];
        }
        obj[key] = [...obj[key], fileType];
      }
    }
  }
  return obj as Accept;
};
