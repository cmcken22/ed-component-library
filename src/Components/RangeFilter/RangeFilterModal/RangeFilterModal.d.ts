import { RangeFilterModalProps } from './RangeFilterModal.types';

declare const RangeFilterModal: {
    ({ open, anchorEl, onClose, placement, ...rest }: RangeFilterModalProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<RangeFilterModalProps>;
};
export default RangeFilterModal;
