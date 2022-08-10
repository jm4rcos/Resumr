import React from "react";
import Header from '../../components/Header'
import { colors } from "../../themes/colors";
import { Container } from "./styles";
import Sidebar from "../../components/Sidebar";
import Resume from "../../components/Resume";

export default function Home() {
    return (
      <div
        style={{
            display: "flex",
            flexDirection: "column",
            width: '100vw',
            height: '100vh',
            backgroundColor: colors.background
        }}
      >
        <Header />
        <Container>
          <Resume />
          <Sidebar/>
        </Container>
      </div>
    );
}