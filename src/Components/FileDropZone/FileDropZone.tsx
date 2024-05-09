import { Box } from "@mui/material";
import cx from "classnames";
import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { sizeFormat } from "src/utils";
import Typography from "../Typography";
import {
  extractText,
  fileTypesAcceptObject,
  getFile,
} from "./FileDropZone.helper";
import { FileDropZoneProps, FileTypeMap } from "./FileDropZone.types";

const FileDropZone = ({
  id,
  className,
  sx,
  accept,
  onDrop,
  validator,
  onError,
  disabled,
  maxFiles,
  minSize,
  maxSize,
  noClick,
  noDrag,
  noKeyboard,
  noDragEventsBubbling,
  renderContent,
  renderAcceptedFiles,
  text,
  width,
  height,
  fullWidth,
}: FileDropZoneProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections && fileRejections?.length) {
        if (onError) onError(fileRejections);
        return;
      }
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
            const [file, binaryString] = arr;
            files.push(file);
            binaryStrings.push(binaryString);
          });
          setFiles(files);
          if (onDrop) onDrop(files, binaryStrings);
        })
        .catch((err: any) => {
          console.error(err);
        });
    },
    [onDrop, setFiles, maxFiles, onError]
  );

  const { getRootProps, getInputProps, open, isDragActive, isFocused } =
    useDropzone({
      accept: fileTypesAcceptObject(accept || []),
      onDrop: handleDrop,
      validator,
      disabled,
      maxFiles,
      minSize,
      maxSize,
      multiple: maxFiles === 1 ? false : true,
      noClick,
      noDrag,
      noKeyboard,
      noDragEventsBubbling,
    });

  const renderFiles = useCallback(() => {
    if (renderAcceptedFiles) {
      return renderAcceptedFiles(files);
    }
    if (!files?.length) return null;
    return files?.map((file: File) => {
      return <Box key={file?.name}>{file?.name}</Box>;
    });
  }, [renderAcceptedFiles, files]);

  const renderBody = useCallback(() => {
    if (renderContent) {
      return renderContent({ open, isDragActive, isFocused, files });
    }

    const { result, matchIndicies } = extractText(text);

    return (
      <Box
        sx={{
          opacity: disabled ? 0.5 : 1,
          pointerEvents: disabled ? "none" : "auto",
        }}
      >
        <Typography variant="bodyR" color="text.secondary">
          {result.map((item: string, index: number) => {
            if (matchIndicies?.includes(index)) {
              return (
                <Typography
                  key={index}
                  variant="bodyR"
                  color="primary"
                  sx={{ cursor: "pointer" }}
                  onClick={open}
                  component="a"
                >
                  {item}
                  {index === result.length - 1 ? "" : " "}
                </Typography>
              );
            }
            return index === result.length - 1 ? item : `${item} `;
          })}
        </Typography>
        {renderFiles()}
      </Box>
    );
  }, [
    renderContent,
    disabled,
    open,
    isDragActive,
    isFocused,
    text,
    files,
    renderFiles,
  ]);

  return (
    <Box
      id={id}
      className={cx("FileDropZone", {
        [className]: className,
      })}
      data-testid="FileDropZone"
      sx={{
        ...(isDragActive && {
          backgroundColor: "action.active",
          opacity: 0.5,
        }),
        border: "1px dashed",
        borderColor: "divider",
        height: sizeFormat(height),
        width: fullWidth ? "100%" : sizeFormat(width),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "action.hover",
          cursor: noClick ? "default" : "pointer",
        },
        ...sx,
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {renderBody()}
    </Box>
  );
};

FileDropZone.defaultProps = {
  maxFiles: 1,
  accept: [...Object.values(FileTypeMap)],
  noClick: false,
  noDrag: false,
  noKeyboard: false,
  noDragEventsBubbling: false,
  disabled: false,
  minSize: 0,
  maxSize: 20971520, // 20MB
  text: "Drag and drop or {{Browse Files}}",
  width: 500,
  height: 300,
} as Partial<FileDropZoneProps>;

export default FileDropZone;
