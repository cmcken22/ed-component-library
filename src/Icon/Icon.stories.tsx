import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import Fuse from "fuse.js";
import { enqueueSnackbar } from "notistack";
import { useCallback, useMemo, useState } from "react";
import { sourceCodeFormatter } from "sb-utils/index";
import { Button, Input } from "..";
import Typography from "../Typography";
import Icon, { IconVariant } from "./";

const meta = {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        transform: sourceCodeFormatter("Icon"),
      },
    },
  },
  argTypes: {
    onClick: {
      action: "clicked",
    },
    onHover: {
      action: "hovered",
    },
    icon: {
      options: Object.keys(IconVariant),
      control: { type: "select" },
    },
    size: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
    width: {
      control: { type: "text" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const iconList = Object.keys(IconVariant).map(
  (key: keyof typeof IconVariant) => {
    return {
      name: key,
      icon: key,
    };
  }
);

const RenderComponent = (args: any) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredList = useMemo(() => {
    if (!searchValue) return iconList;
    const options = {
      keys: ["name"],
    };
    const fuse = new Fuse(iconList, options);
    return fuse.search(searchValue)?.map((result) => result.item) ?? [];
  }, [iconList, searchValue]);

  const handleClick = useCallback((iconName: string) => {
    navigator.clipboard.writeText(iconName);
    enqueueSnackbar(`Copied to clipboard: ${iconName}`, {
      variant: "info",
    });
  }, []);

  return (
    <Box p={3}>
      <Box display="flex" alignItems="center" mb={2} gap={1}>
        <Input
          placeholder="Search Icons..."
          value={searchValue}
          onChange={setSearchValue}
        />
        {searchValue && (
          <Button onClick={() => setSearchValue("")}>Clear Search</Button>
        )}
      </Box>
      <Box
        sx={{
          maxWidth: "800px",
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {filteredList?.map((icon) => {
          if (!icon.icon) return null;
          return (
            <Box
              key={icon.name}
              onClick={() => handleClick(icon?.name)}
              sx={{
                width: "60px",
                mb: 1,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  p: 1,
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "charcoal.10",
                  borderRadius: "4px",
                  minWidth: "60px",
                  width: "fit-content",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 0.5,
                }}
              >
                <Icon {...args} icon={icon.icon} />
              </Box>
              <Typography
                variant="errorMessage"
                sx={{
                  textAlign: "center",
                  width: "100%",
                  display: "block",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {icon.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

// @ts-expect-error
export const Sample: Story = {
  render: RenderComponent,
};
