import { Box } from "@mui/material";
import Typography from "src/Typography";

const Tools = ({ tools }: any) => {
  return (
    <Box
      data-testid="toolbar"
      sx={{
        p: 2,
        width: "100px",
        ".toolbar-item": {
          cursor: "pointer",
        },
        borderRight: "1px solid",
        borderColor: "charcoal.20",
      }}
    >
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
    </Box>
  );
};

Tools.displayName = "Tools";

export default Tools;
