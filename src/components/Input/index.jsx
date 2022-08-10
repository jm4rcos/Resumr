import React, { useEffect, useRef } from "react";
import { StyledInput } from "./styles";
import { useField } from '@unform/core';

export default function Input({ height, placeholder, name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() =>{
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return (
    <StyledInput
      ref={inputRef}
      {...rest}
      defaultValue={defaultValue}
      placeholder={placeholder}
      height={height}
    />
  );
}
