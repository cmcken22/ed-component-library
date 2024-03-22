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

const SvgString = `
    <svg
      height="800px"
      width="800px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 413.137 413.137"
    >
      <g>
        <path
          style={{ fill: "currentColor" }}
          d="M311.358,136.395H101.779c-4.662,0-8.441,3.779-8.441,8.441v175.749
          c0,4.662,3.779,8.441,8.441,8.441h37.363v59.228c0,13.742,11.14,24.883,24.883,24.883l0,0c13.742,0,24.883-11.14,24.883-24.883
          v-59.228h34.803v59.228c0,13.742,11.14,24.883,24.883,24.883l0,0c13.742,0,24.883-11.14,24.883-24.883v-59.228h37.882
          c4.662,0,8.441-3.779,8.441-8.441V144.836C319.799,140.174,316.02,136.395,311.358,136.395z"
        />
        <path
          style={{ fill: "currentColor" }}
          d="M57.856,136.354L57.856,136.354c-13.742,0-24.883,11.14-24.883,24.883v101.065
          c0,13.742,11.14,24.883,24.883,24.883l0,0c13.742,0,24.883-11.14,24.883-24.883V161.237
          C82.738,147.495,71.598,136.354,57.856,136.354z"
        />
        <path
          style={{ fill: "currentColor" }}
          d="M355.281,136.354L355.281,136.354c-13.742,0-24.883,11.14-24.883,24.883v101.065
          c0,13.742,11.14,24.883,24.883,24.883l0,0c13.742,0,24.883-11.14,24.883-24.883V161.237
          C380.164,147.495,369.024,136.354,355.281,136.354z"
        />
        <path
          style={{ fill: "currentColor" }}
          d="M103.475,124.069h205.692c5.366,0,9.368-4.943,8.266-10.195
          c-6.804-32.428-27.45-59.756-55.465-75.543l17.584-31.727c1.19-2.148,0.414-4.855-1.734-6.045
          c-2.153-1.193-4.856-0.414-6.046,1.734l-17.717,31.966c-14.511-6.734-30.683-10.495-47.734-10.495
          c-17.052,0-33.224,3.761-47.735,10.495L140.869,2.292c-1.191-2.149-3.898-2.924-6.045-1.734c-2.148,1.19-2.924,3.897-1.734,6.045
          l17.584,31.727c-28.015,15.788-48.661,43.115-55.465,75.544C94.106,119.126,98.108,124.069,103.475,124.069z M267.697,76.786
          c0,5.282-4.282,9.565-9.565,9.565c-5.282,0-9.565-4.282-9.565-9.565c0-5.282,4.282-9.565,9.565-9.565
          C263.415,67.221,267.697,71.504,267.697,76.786z M154.508,67.221c5.282,0,9.565,4.282,9.565,9.565c0,5.282-4.282,9.565-9.565,9.565
          c-5.282,0-9.565-4.282-9.565-9.565C144.943,71.504,149.225,67.221,154.508,67.221z"
        />
      </g>
    </svg>
  `;

export const CustomIcon: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Icon", {
          map: {
            icon: SvgString,
          },
        }),
      },
    },
  },
  args: {
    ...Icon.defaultProps,
    icon: (
      <svg
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 413.137 413.137"
      >
        <g>
          <path
            style={{ fill: "currentColor" }}
            d="M311.358,136.395H101.779c-4.662,0-8.441,3.779-8.441,8.441v175.749
            c0,4.662,3.779,8.441,8.441,8.441h37.363v59.228c0,13.742,11.14,24.883,24.883,24.883l0,0c13.742,0,24.883-11.14,24.883-24.883
            v-59.228h34.803v59.228c0,13.742,11.14,24.883,24.883,24.883l0,0c13.742,0,24.883-11.14,24.883-24.883v-59.228h37.882
            c4.662,0,8.441-3.779,8.441-8.441V144.836C319.799,140.174,316.02,136.395,311.358,136.395z"
          />
          <path
            style={{ fill: "currentColor" }}
            d="M57.856,136.354L57.856,136.354c-13.742,0-24.883,11.14-24.883,24.883v101.065
            c0,13.742,11.14,24.883,24.883,24.883l0,0c13.742,0,24.883-11.14,24.883-24.883V161.237
            C82.738,147.495,71.598,136.354,57.856,136.354z"
          />
          <path
            style={{ fill: "currentColor" }}
            d="M355.281,136.354L355.281,136.354c-13.742,0-24.883,11.14-24.883,24.883v101.065
            c0,13.742,11.14,24.883,24.883,24.883l0,0c13.742,0,24.883-11.14,24.883-24.883V161.237
            C380.164,147.495,369.024,136.354,355.281,136.354z"
          />
          <path
            style={{ fill: "currentColor" }}
            d="M103.475,124.069h205.692c5.366,0,9.368-4.943,8.266-10.195
            c-6.804-32.428-27.45-59.756-55.465-75.543l17.584-31.727c1.19-2.148,0.414-4.855-1.734-6.045
            c-2.153-1.193-4.856-0.414-6.046,1.734l-17.717,31.966c-14.511-6.734-30.683-10.495-47.734-10.495
            c-17.052,0-33.224,3.761-47.735,10.495L140.869,2.292c-1.191-2.149-3.898-2.924-6.045-1.734c-2.148,1.19-2.924,3.897-1.734,6.045
            l17.584,31.727c-28.015,15.788-48.661,43.115-55.465,75.544C94.106,119.126,98.108,124.069,103.475,124.069z M267.697,76.786
            c0,5.282-4.282,9.565-9.565,9.565c-5.282,0-9.565-4.282-9.565-9.565c0-5.282,4.282-9.565,9.565-9.565
            C263.415,67.221,267.697,71.504,267.697,76.786z M154.508,67.221c5.282,0,9.565,4.282,9.565,9.565c0,5.282-4.282,9.565-9.565,9.565
            c-5.282,0-9.565-4.282-9.565-9.565C144.943,71.504,149.225,67.221,154.508,67.221z"
          />
        </g>
      </svg>
    ),
  },
};
