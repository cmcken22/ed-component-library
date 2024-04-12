import { Box } from "@mui/material";
import cx from "classnames";
import { forwardRef, isValidElement, useCallback, useMemo } from "react";
import { useEllisDonTheme } from "src/Components/theme";
import { useOnHover } from "src/Hooks";
import { sizeFormat } from "src/utils";
import { IconProps } from ".";
import IconMap from "./Icon.map";

const Icon = forwardRef<HTMLDivElement, IconProps>((props, ref) => {
  const {
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
    ...tooltipProps
  } = props;
  const theme = useEllisDonTheme();
  const onHoverMethods = useOnHover({
    callback: onHover,
    ...tooltipProps,
  });

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

  const renderIcon = useCallback(() => {
    if (isValidElement(icon)) {
      return icon;
    }
    if (typeof icon === "string") {
      const IconComponent = IconMap[icon!];
      return <IconComponent fill="transparent" stroke="currentColor" />;
    }
  }, [icon]);

  return (
    <Box
      id={id}
      ref={ref}
      className={cx(`icon-wrapper`, {
        [className]: className,
        [`icon--${icon}`]: typeof icon === "string",
      })}
      // spread the remaining props
      // this is important for the Icon to be able to have a tooltip wrapper
      {...tooltipProps}
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
      {renderIcon()}
    </Box>
  );
});

Icon.defaultProps = {} as Partial<IconProps>;

export default Icon;
