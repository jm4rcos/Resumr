import React from "react";
import { StyledText } from "./styles";

export default function Text(props) {
    return(
        <StyledText
            align={props.align}
            type={props.type}
            content={props.content}
        >
            {props.content}
        </StyledText>
    )
}