import { Box, styled } from "@mui/material";
import cx from "classnames";
import { useCallback } from "react";
import Typography from "src/Components/Typography";
import { useOnHover } from "src/Hooks";
import { TEST_ID } from "src/enums";
import { AvatarProps } from ".";
import Tooltip from "../Tooltip/Tooltip";

const StyledWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "src",
  slot: "Root",
})<{ src?: string }>(({ theme, src }) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "24px",
    width: "24px",
    borderRadius: "50%",
    backgroundColor: theme.palette.secondary["10"],
    backgroundImage: src ? `url(${src})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
});

const Avatar = ({
  id,
  className,
  size,
  text,
  src,
  onHover,
  onClick,
  sx,
  tooltip,
  ToolTipProps,
}: AvatarProps) => {
  const onHoverMethods = useOnHover({ callback: onHover });

  const getAvatarSize = useCallback(() => {
    if (size === "default") {
      return {
        height: "32px",
        width: "32px",
      };
    } else if (size === "large") {
      return {
        height: "40px",
        width: "40px",
      };
    } else if (size === "small") {
      return {
        height: "24px",
        width: "24px",
      };
    }
    return {
      height: size,
      width: size,
    };
  }, [size]);

  const getFontSize = useCallback(() => {
    if (size === "large") {
      return "bodyR";
    } else if (size === "small") {
      return "bodyXS";
    }
    return "bodyS";
  }, [size]);

  return (
    <Tooltip title={tooltip} {...ToolTipProps}>
      <StyledWrapper
        id={id}
        className={cx("avatar", className)}
        data-testid={TEST_ID.AVATAR}
        {...onHoverMethods}
        onClick={onClick}
        src={src}
        sx={{
          ...getAvatarSize(),
          cursor: onClick ? "pointer" : "default",
          ...sx,
        }}
      >
        {!src && (
          <Typography
            variant={getFontSize()}
            color="secondary.dark"
            preventTextSelection
          >
            {text}
          </Typography>
        )}
      </StyledWrapper>
    </Tooltip>
  );
};

Avatar.defaultProps = {
  size: "default",
} as Partial<AvatarProps>;

export default Avatar;
