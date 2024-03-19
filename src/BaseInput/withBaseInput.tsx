import { FC } from "react";
import BaseInput from "./BaseInput";
import { BaseInputProps } from "./BaseInput.types";

const withBaseInput = <T extends BaseInputProps>(
  Component,
  displayName: string
): FC<T> => {
  const WithBaseInput = (props: T) => {
    const { id, status, fullWidth, tooltip, className, sx, ...rest } = props;
    return (
      <BaseInput
        id={id}
        componentType={displayName}
        className={className}
        status={status}
        fullWidth={fullWidth}
        tooltip={tooltip}
        sx={sx}
      >
        <Component {...rest} />
      </BaseInput>
    );
  };

  WithBaseInput.displayName = displayName;

  return WithBaseInput;
};

export default withBaseInput;
