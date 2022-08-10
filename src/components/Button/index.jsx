import React from "react";
import { StyledButton } from "./styles";
import Text from "../Text";

export default function Button(props, {...rest}) {
  return (
    <StyledButton
      model={props.model}
      icon={props.icon}
      width={props.width}
      disabled={props.disabled}
      {...rest}
      onClick={props.onClick}
    >
      {props.icon}
      <Text content={props.content} align={props.align}/>
    </StyledButton>
  );
}
