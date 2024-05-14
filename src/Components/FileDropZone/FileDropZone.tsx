import { Box, styled } from "@mui/material";
import cx from "classnames";
import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { bytesToMb, sizeFormat } from "src/utils";
import Icon, { IconVariant } from "../Icon";
import Typography from "../Typography";
import { FONT_WEIGHT } from "../theme/Typography";
import {
  extractText,
  fileTypesAcceptObject,
  getFile,
} from "./FileDropZone.helper";
import { FileDropZoneProps, FileTypeMap } from "./FileDropZone.types";

import { shouldNotForwardProp } from "src/utils";

interface StyledContainerProps {
  isDragActive?: boolean;
  fullWidth?: boolean;
  height?: string | number;
  width?: string | number;
  noClick?: boolean;
  disabled?: boolean;
}

const StyledContainer = styled(Box, {
  shouldForwardProp: shouldNotForwardProp([
    "isDragActive",
    "fullWidth",
    "height",
    "width",
    "noClick",
  ]),
  slot: "root",
  // @ts-ignore
})<StyledContainerProps>((props) => {
  const { isDragActive, fullWidth, height, width, noClick, disabled, theme } =
    props;

  return {
    border: "1px dashed",
    borderColor: theme.palette.revolver.light,
    height: sizeFormat(height),
    width: fullWidth ? "100%" : sizeFormat(width),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...(!disabled && {
      ...(isDragActive && {
        backgroundColor: theme.palette.revolver?.["5"],
        opacity: 0.5,
      }),
      "&:hover": {
        backgroundColor: noClick ? "initial" : theme.palette.revolver?.["5"],
        cursor: noClick ? "default" : "pointer",
      },
    }),
  };
});

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
  text,
  subText,
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

  const renderText = useCallback(() => {
    const { result, matchIndicies } = extractText(text);

    return (
      <Typography
        className="FileDropZone__text"
        variant="bodyS"
        color="text.secondary"
        fontWeight={FONT_WEIGHT.bold}
      >
        {result.map((item: string, index: number) => {
          if (matchIndicies?.includes(index)) {
            return (
              <Typography
                key={index}
                variant="bodyS"
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
    );
  }, [text, open]);

  const renderSubText = useCallback(() => {
    const limits: string[] = [];
    if (minSize) limits.push(`Min ${bytesToMb(minSize)}mb`);
    if (maxSize) limits.push(`Max ${bytesToMb(maxSize)}mb`);
    return (
      <Typography
        className="FileDropZone__subText"
        variant="bodyXS"
        color="charcoal.50"
      >
        {subText !== undefined ? subText : limits?.join(" | ")}
      </Typography>
    );
  }, [subText, minSize, maxSize]);

  const renderBody = useCallback(() => {
    if (renderContent) {
      return renderContent({ open, isDragActive, isFocused, files });
    }

    return (
      <Box
        className="FileDropZone__content"
        sx={{
          opacity: disabled ? 0.5 : 1,
          pointerEvents: disabled ? "none" : "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          className="FileDropZone__icon"
          sx={{ color: (theme: any) => theme.palette.revolver?.["60"] }}
        >
          <Icon
            icon={IconVariant.FileUpload}
            color="inherit"
            height="48.06px"
            width="65.75px"
          />
        </Box>
        <Box
          className="FileDropZone__content-container"
          display="flex"
          flexDirection="column"
        >
          {renderText()}
          {renderSubText()}
        </Box>
      </Box>
    );
  }, [
    renderContent,
    open,
    isDragActive,
    isFocused,
    files,
    disabled,
    renderText,
    renderSubText,
  ]);

  return (
    <StyledContainer
      id={id}
      className={cx("FileDropZone", {
        [className]: className,
      })}
      data-testid="FileDropZone"
      isDragActive={isDragActive}
      fullWidth={fullWidth}
      height={height}
      width={width}
      noClick={noClick}
      disabled={disabled}
      sx={sx}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {renderBody()}
    </StyledContainer>
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
  // minSize: 10485760,
  maxSize: 20971520, // 20MB
  text: "Drag and drop or {{Browse Files}}",
  subText: undefined,
  width: 500,
  height: 160,
} as Partial<FileDropZoneProps>;

export default FileDropZone;
