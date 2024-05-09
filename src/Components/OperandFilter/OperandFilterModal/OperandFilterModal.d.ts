import { OperandFilterModalProps } from './OperandFilterModal.types';

declare const OperandFilterModal: {
    ({ open, anchorEl, onClose, placement, ...rest }: OperandFilterModalProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<OperandFilterModalProps>;
};
export default OperandFilterModal;
