import { SxProps } from "@mui/material";
import { createContext } from "react";

export interface BaseInputProps {
  id?: string;
  className?: string;
  status?: "error" | "warning" | "success";
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  /**
   * Style props for the container
   * @type SxProps
   */
  sx?: SxProps;
}

export interface StandardInputProps extends Omit<BaseInputProps, "children"> {}

export type BaseInputContext = {
  status: "error" | "warning" | "success" | undefined;
  required?: boolean;
  disabled?: boolean;
  labelPosition?: "top" | "left";
  endAdornment?: React.ReactNode;
  setLabelPosition: (pos: string) => void;
};

const defaultContext: BaseInputContext = {
  status: undefined,
  required: false,
  disabled: false,
  labelPosition: "top",
  endAdornment: undefined,
  setLabelPosition: () => {},
};

export const BaseInputContext = createContext<BaseInputContext>(defaultContext);
