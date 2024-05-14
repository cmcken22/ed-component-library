import { FileDropZoneProps } from './FileDropZone.types';

declare const FileDropZone: {
    ({ id, className, sx, accept, onDrop, validator, onError, disabled, maxFiles, minSize, maxSize, noClick, noDrag, noKeyboard, noDragEventsBubbling, renderContent, text, subText, width, height, fullWidth, }: FileDropZoneProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<FileDropZoneProps>;
};
export default FileDropZone;
