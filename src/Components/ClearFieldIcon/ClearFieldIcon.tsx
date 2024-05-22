import cx from "classnames";
import { TEST_ID } from "src/enums";
import Icon, { IconVariant } from "../Icon";
import { ClearFieldIconProps } from "./ClearFieldIcon.types";

const ClearFieldIcon = ({
  id,
  className,
  sx,
  onClear,
}: ClearFieldIconProps) => {
  return (
    <Icon
      id={id}
      className={cx("ClearFieldIcon", {
        [className]: className,
      })}
      sx={sx}
      data-testid={TEST_ID.CLEAR_FIELD_ICON}
      icon={IconVariant.Close}
      size={20}
      color="border.dark"
      onClick={onClear}
    />
  );
};

ClearFieldIcon.defaultProps = {} as Partial<ClearFieldIconProps>;

export default ClearFieldIcon;
