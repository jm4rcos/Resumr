import React, { useState, useEffect } from "react";
import { Container, ChildContainer } from "./styles";
import { IoIosColorPalette } from "react-icons/io";

export default function ColorEditor({ children }) {
  const [color, setColor] = useState("#000")
  
    return (
      <Container v={v} h={h}>
        <button className="icon">
          <IoIosColorPalette size={20} onClick={() => console.log("Color changed")} />
        </button>
        <ChildContainer>{children}</ChildContainer>
      </Container>
    );
}