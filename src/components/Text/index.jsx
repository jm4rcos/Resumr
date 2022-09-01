import React from "react";
import Editor from "../Editor";
import { StyledText } from "./styles";

export default function Text(props) {

  if(props.canEdit){
    return (
      <Editor>
        <StyledText
          align={props.align}
          type={props.type}
          content={props.content}
          size={props.size}
          mb={props.mb}
          mt={props.mt}
          color={props.color}
          canEdit={props.canEdit}
        >
          {props.content}
        </StyledText>
      </Editor>
    );
  }

    return (
      <StyledText
        align={props.align}
        type={props.type}
        content={props.content}
        size={props.size}
        mb={props.mb}
        mt={props.mt}
        color={props.color}
        canEdit={props.canEdit}
      >
        {props.content}
      </StyledText>
    );
}