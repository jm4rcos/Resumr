import React, { useState, useEffect } from "react";
import { colors } from "../../themes/colors";
import Button from "../Button";
import Text from "../Text";
import { SideItem } from "./SideItem";
import { Container, Header, Line, Side, Content } from "./styles";

export default function Preview() {

  return (
    <Container>
      <Header>
        {/* Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Text type="title" content={`João Marcos`} size="150%" />
          <Text type="text" content={`Software Engineer`} size="92%" />
        </div>

        {/* Contact */}
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Text
            align="right"
            type="text"
            content={`joaomarcos@gmail.com`}
            size="70%"
          />
          <Text
            align="right"
            type="text"
            content={`+55 8298140-1182`}
            size="70%"
          />
          <Text
            align="right"
            type="text"
            content={`Alagoas, Brasil`}
            size="70%"
          />
        </div>

        <Line type="horizontal" />
      </Header>

      <Content>
        <Side>
          {/* Education */}
          <SideItem
            type="Education"
            name="Front-end Course"
            value="Havard University"
          />
          <SideItem
            // type="Education"
            name="Back-end"
            value="Michigan University"
          />

          {/* Skills */}
          <SideItem mt={20} type="Skills" name="Front-end Course" />
          <SideItem name="Back-end Course" />

          {/* Languages */}
          <SideItem mt={20} type="Languages" name="English" />
          <SideItem name="Chinese" />
          <SideItem name="Latin" />
        </Side>

        <Side>
          <SideItem type="About me" name="nasnlama" textMb={10} />
          <SideItem
            type="Experiences"
            name="Software Engineer"
            value="DALIM Software (2022 - current)"
            textMt={6}
            long="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed tincidunt."
          />
          <SideItem name="Front-end" value="Google (2021 - current)" mt={10} />
        </Side>
      </Content>
    </Container>
  );
}