import { Box } from "@mui/material";
import cx from "classnames";
import { Button } from "src/index";
import { FooterProps } from "./Footer.types";

const Footer = ({
  id,
  className,
  sx,
  children,
  onAccept,
  onCancel,
  acceptBtn,
  acceptBtnText,
  acceptBtnProps,
  cancelBtn,
  cancelBtnText,
  cancelBtnProps,
}: any) => {
  return (
    <Box
      id={id}
      className={cx("Modal__footer", {
        [className]: className,
      })}
      sx={{
        minHeight: "45px",
        padding: 2,
        borderTop: (theme: any) => `1px solid ${theme.palette.charcoal[20]}`,
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
        gap: 1,
        ...sx,
      }}
    >
      {children ? (
        children
      ) : (
        <>
          {cancelBtn && (
            <Button variant="outlined" onClick={onCancel} {...cancelBtnProps}>
              {cancelBtnText}
            </Button>
          )}
          {acceptBtn && (
            <Button onClick={onAccept} {...acceptBtnProps}>
              {acceptBtnText}
            </Button>
          )}
        </>
      )}
    </Box>
  );
};

Footer.defaultProps = {
  acceptBtn: true,
  acceptBtnText: "Confirm",
  cancelBtn: true,
  cancelBtnText: "Close",
} as Partial<FooterProps>;

export default Footer;
