import React, { useState, useEffect } from "react";
import { Container, ChildContainer } from "./styles";
import {
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsArrowRightCircle,
  BsArrowLeftCircle,
} from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { colors } from "../../themes/colors";

export default function Editor({ children }) {
  const [h, setH] = useState(0);
  const [colorPicker, setColorPicker] = useState(false);
  const [color, setColor] = useState(colors.danger);

  const defaultColors = ["#000000", "#333333", "#666666", "#999999"];
  
    return (
      <Container h={h} color={color}>
        <button className="arrowLeft">
          <BsArrowLeftCircle size={20} onClick={() => setH(h - 5)} />
        </button>
        <button className="arrowRight">
          <BsArrowRightCircle size={20} onClick={() => setH(h + 5)} />
        </button>

        {/* <button className="colorEdit">
          <IoIosColorPalette
            size={20}
            onClick={() => setColorPicker(!colorPicker)}
            />
        </button> */}
            {/* {colorPicker && <input type="color" style={visibility}/>} */}
        {/* <input type="color"/> */}
        {/* <input type="color" id="excolor2" name="excolor2" list="colors"/>
        <datalist id="colors">
          {defaultColors.map(color => {
            return <option value={color} key={color}/>
          })}
        </datalist> */}

        <ChildContainer>{children}</ChildContainer>
      </Container>
    );
}