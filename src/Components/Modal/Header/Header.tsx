import { Box } from "@mui/material";
import cx from "classnames";
import { useCallback } from "react";
import Typography from "../../Typography";
import { HeaderProps } from "./Header.types";

const Header = ({ id, className, title, subtitle, children }: any) => {
  const renderHeader = useCallback(() => {
    return (
      <>
        {title && (
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography
            variant="bodyS"
            sx={{ color: (theme: any) => theme.palette.charcoal[80] }}
          >
            {subtitle}
          </Typography>
        )}
      </>
    );
  }, [title, subtitle]);

  return (
    <Box
      id={id}
      className={cx("Modal__header", {
        [className]: className,
      })}
      sx={{
        minHeight: "45px",
        padding: 2,
        borderBottom: (theme: any) => `1px solid ${theme.palette.charcoal[20]}`,
      }}
    >
      {children ? children : renderHeader()}
    </Box>
  );
};

Header.defaultProps = {} as Partial<HeaderProps>;

export default Header;
