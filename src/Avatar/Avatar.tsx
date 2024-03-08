import { Box, SxProps, styled } from "@mui/material";
import { useCallback } from "react";
import { useOnHover } from "src/Hooks";
import Typography from "src/Typography";

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

export interface AvatarProps {
  id?: string;
  size?: "default" | "large" | "small";
  text?: string;
  sx?: SxProps;
  src?: string;
  onClick?: () => void;
  onHover?: (hovered: boolean) => void;
}

const Avatar = ({ id, size, text, src, onHover, onClick, sx }: AvatarProps) => {
  const onHoverMethods = useOnHover(onHover);

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
    <StyledWrapper
      id={id}
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
  );
};

Avatar.defaultProps = {
  size: "default",
};

export default Avatar;
