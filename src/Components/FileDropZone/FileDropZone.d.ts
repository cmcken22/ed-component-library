import { FileDropZoneProps } from './FileDropZone.types';

declare const FileDropZone: {
    ({ id, className, sx, onDrop, onError, accept, maxFiles, }: FileDropZoneProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<FileDropZoneProps>;
};
export default FileDropZone;
