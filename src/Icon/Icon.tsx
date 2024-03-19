import { Box } from "@mui/material";
import cx from "classnames";
import { useMemo } from "react";
import { useOnHover } from "src/Hooks";
import { useEllisDonTheme } from "src/theme";
import { sizeFormat } from "src/utils";
import { IconProps } from "./";
import IconMap from "./Icon.map";

const Icon = ({
  id,
  className,
  icon,
  color,
  size,
  height,
  width,
  sx,
  onClick,
  onHover,
}: IconProps) => {
  const theme = useEllisDonTheme();
  const onHoverMethods = useOnHover(onHover);
  const IconComponent =
    typeof icon === "string" ? IconMap[icon!] : (icon as any);

  const computedSize = useMemo(() => {
    if (size) {
      return {
        height: sizeFormat(size),
        width: sizeFormat(size),
      };
    }
    return {
      height: height ? sizeFormat(height) : "24px",
      width: width ? sizeFormat(width) : "24px",
    };
  }, [size, height, width]);

  if (!IconComponent) return null;

  return (
    <Box
      id={id}
      className={cx(`icon-wrapper`, {
        [className]: className,
        [`icon--${icon}`]: typeof icon === "string",
      })}
      {...onHoverMethods}
      onClick={onClick}
      sx={{
        display: "flex",
        color: color ? color : "charcoal.90",
        height: computedSize?.height,
        width: computedSize?.width,
        cursor: onClick ? "pointer" : "default",
        "& > svg": {
          height: "100%",
          width: "100%",
        },
        transition: `color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
        ...sx,
      }}
    >
      <IconComponent fill="transparent" stroke="currentColor" />
    </Box>
  );
};

Icon.defaultProps = {} as Partial<IconProps>;

export default Icon;
