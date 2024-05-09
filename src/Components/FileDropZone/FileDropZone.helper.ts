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

interface ExtractedTextResult {
  result: string[];
  matchIndicies: number[];
}

export const extractText = (input: string): ExtractedTextResult => {
  // Regular expression to match "{{...}}"
  const pattern = /\{\{([^}]+)\}\}/g;

  // Array to store the extracted text
  const result: string[] = [];

  // Index to keep track of the start of the current match
  let lastIndex = 0;
  const matchIndicies: number[] = [];

  // Iterate through matches
  let match;
  while ((match = pattern.exec(input)) !== null) {
    // Extract the text before the match
    const beforeMatch = input.substring(lastIndex, match.index);
    if (beforeMatch.trim() !== "") {
      result.push(beforeMatch.trim());
    }
    // Extract the text within the curly braces
    const insideMatch = match[1];
    result.push(insideMatch.trim());
    matchIndicies.push(result?.length - 1);
    // Update the last index
    lastIndex = match.index + match[0].length;
  }

  // Extract the remaining text after the last match
  const remainingText = input.substring(lastIndex);
  if (remainingText.trim() !== "") {
    result.push(remainingText.trim());
  }

  return {
    result,
    matchIndicies,
  };
};
