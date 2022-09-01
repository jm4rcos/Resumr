import React from "react";
import Button from "../Button/index.jsx";
import { Container } from "./styles.js";

import { BsPlusLg } from "react-icons/bs";

export default function Menu(){
    return (
      <Container>
        <Button type="add" content="Add field" icon={<BsPlusLg/>} width={130}/>
        <Button model="solid" content="New Resume" icon={<BsPlusLg/>}/>
        <Button type="success" content="Save"/>
      </Container>
    );
}