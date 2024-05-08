import { Box } from "@mui/material";
import cx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { Accept, useDropzone } from "react-dropzone";
import Typography from "../Typography";
import { FileDropZoneProps, MimeTypes } from "./FileDropZone.types";

const getFile = (file: any) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function (event: any) {
      const binaryString = event.target.result;
      return resolve([file, binaryString]);
    };
    reader.readAsBinaryString(file);
  });
};

const arrayToAcceptObject = (arr: string[]) => {
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

const FileDropZone = ({
  id,
  className,
  sx,
  onDrop,
  onError,
  accept,
  maxFiles,
}: FileDropZoneProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = useCallback(
    (acceptedFiles: any) => {
      console.clear();
      console.log("acceptedFiles", acceptedFiles);
      const files: any = [];
      const binaryStrings: any = [];

      const promises: any[] = [];
      const min = Math.min(acceptedFiles.length, maxFiles);
      for (let i = 0; i < min; i++) {
        const file = acceptedFiles[i];
        promises.push(getFile(file));
      }

      Promise.all(promises)
        .then((res: any) => {
          res.forEach((arr: any) => {
            files.push(arr[0]);
            binaryStrings.push(arr[1]);
          });
          setFiles(files);
          if (onDrop) onDrop(files, binaryStrings);
        })
        .catch((err: any) => {
          console.error(err);
        });
    },
    [onDrop, setFiles, maxFiles]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections, open } =
    useDropzone({
      accept: arrayToAcceptObject(accept || []),
      onDrop: handleDrop,
      maxFiles,
      multiple: maxFiles === 1 ? false : true,
      noClick: true,
    });

  useEffect(() => {
    if (fileRejections.length) {
      if (onError) onError(fileRejections);
    }
  }, [fileRejections, onError]);

  return (
    <Box
      id={id}
      className={cx("FileDropZone", {
        [className]: className,
      })}
      sx={sx}
      data-testid="FileDropZone"
    >
      <Box
        sx={{
          ...(isDragActive && {
            backgroundColor: "action.active",
            opacity: 0.5,
          }),
          border: "1px dashed",
          borderColor: "divider",
          padding: 16,
          // "&:hover": {
          //   backgroundColor: "action.hover",
          //   cursor: "pointer",
          //   opacity: 0.5,
          // },
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Typography variant="bodyR" color="text.secondary">
          Drag and drop or{" "}
          <Typography
            variant="bodyR"
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={open}
            component="a"
          >
            Browse Files
          </Typography>
        </Typography>
        {files?.map((file: File) => <Box>{file.name}</Box>)}
      </Box>
    </Box>
  );
};

FileDropZone.defaultProps = {
  maxFiles: 2,
  accept: [".png", ".jpg", ".jpeg"],
} as Partial<FileDropZoneProps>;

export default FileDropZone;
