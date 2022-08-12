import React from "react";
import { StyledText } from "./styles";

export default function Text(props) {
    return (
      <StyledText
        align={props.align}
        type={props.type}
        content={props.content}
        size={props.size}
        mb={props.mb}
        mt={props.mt}
        color={props.color}
      >
        {props.content}
      </StyledText>
    );
}