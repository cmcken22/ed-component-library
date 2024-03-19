import { SxProps } from "@mui/material";
import { createContext } from "react";
import { Status } from "src/CommonTypes";

export interface BaseInputProps {
  id?: string;
  className?: string;
  status?: keyof typeof Status;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  /**
   * Style props for the container
   * @type SxProps
   */
  sx?: SxProps;
  tooltip?: string;
}

export interface StandardInputProps extends Omit<BaseInputProps, "children"> {}

export type BaseInputContext = {
  status?: keyof typeof Status | undefined;
  required?: boolean;
  disabled?: boolean;
  labelPosition?: "top" | "left";
  endAdornment?: React.ReactNode;
  setLabelPosition: (pos: string) => void;
  setStatus?: (status: Status | undefined) => void;
  tooltip?: string;
};

const defaultContext: BaseInputContext = {
  status: undefined,
  required: false,
  disabled: false,
  labelPosition: "top",
  endAdornment: undefined,
  setLabelPosition: () => {},
  setStatus: () => {},
  tooltip: undefined,
};

export const BaseInputContext = createContext<BaseInputContext>(defaultContext);
