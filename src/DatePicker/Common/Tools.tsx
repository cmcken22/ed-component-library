import { Box, styled } from "@mui/material";
import Typography from "src/Typography";

const StyledWrapper = styled(Box, {
  slot: "root",
})<any>(({ theme }) => {
  return {
    padding: theme.spacing(2),
    width: "100px",
    ".toolbar-item": {
      cursor: "pointer",
    },
    borderRight: `${theme.shape.borderWidth} solid`,
    borderColor: theme.palette.charcoal["20"],
  };
});

const Tools = ({ tools }: any) => {
  return (
    <StyledWrapper data-testid="toolbar">
      {tools?.map((tool: any) => (
        <Box
          key={tool.label}
          onClick={tool.onClick}
          className="toolbar-item"
          data-testid={`toolbar-item--${tool.label}`}
        >
          <Typography variant="bodyXS">{tool.label}</Typography>
        </Box>
      ))}
    </StyledWrapper>
  );
};

Tools.displayName = "Tools";

export default Tools;
