import { Typography as MuiTypography } from "@mui/material";
import cx from "classnames";
import { useMemo } from "react";
import {
  FONT_WEIGHT_VALUES,
  FontStyle,
  FontVariant,
  FontWeight,
} from "../theme/Typography";

export interface TypographyProps {
  variant: FontVariant;
  children?: any;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  className?: string;
  color?: string;
  fontSize?: string;
  preventTextSelection?: boolean;
  sx?: any;
}

const Typography = ({
  variant,
  children,
  fontWeight,
  fontStyle,
  className,
  color,
  fontSize,
  preventTextSelection,
  sx,
}: TypographyProps) => {
  const convertedFontWeight = useMemo(
    () =>
      FONT_WEIGHT_VALUES?.[fontWeight!]
        ? FONT_WEIGHT_VALUES?.[fontWeight!]
        : fontWeight,
    [fontWeight]
  );

  return (
    <MuiTypography
      className={cx(className)}
      variant={variant as any}
      fontWeight={convertedFontWeight}
      fontStyle={fontStyle}
      color={color}
      fontSize={fontSize}
      sx={{
        ...(preventTextSelection && {
          webkitUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
        }),
        ...sx,
      }}
    >
      {children}
    </MuiTypography>
  );
};

Typography.defaultProps = {
  preventTextSelection: false,
  sx: {},
};

export default Typography;
