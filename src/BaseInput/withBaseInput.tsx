import { FC } from "react";
import { BaseInputProps } from "./BaseInput.types";
import BaseInputContextProvider from "./BaseInputContextProivder";

const withBaseInput = <T extends BaseInputProps>(
  Component,
  displayName: string
): FC<T> => {
  const WithBaseInput = (props: T) => {
    const { id, status, fullWidth, tooltip, className, sx, variant, ...rest } =
      props;
    return (
      <BaseInputContextProvider
        id={id}
        componentType={displayName}
        className={className}
        status={status}
        fullWidth={fullWidth}
        tooltip={tooltip}
        sx={sx}
        variant={variant}
      >
        <Component {...rest} />
      </BaseInputContextProvider>
    );
  };

  WithBaseInput.displayName = displayName;

  return WithBaseInput;
};

export default withBaseInput;
