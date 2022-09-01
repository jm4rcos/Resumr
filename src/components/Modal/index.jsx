import React from 'react';
import { IoIosClose } from "react-icons/io";
import { colors } from '../../themes/colors';
import Button from '../Button';
import { Back, Container, ContentContainer } from "./styles";

export function Modal({ width, height, content, onClose }){
    return (
      <Back>
        <Container width={width} height={height}>
          <ContentContainer
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <div style={{
              width: "100%",
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}>
              <Button
                model="danger"
                content="Close"
                icon={<IoIosClose size={24} />}
                onClick={onClose}
              />
            </div>
            {content}
          </ContentContainer>
        </Container>
      </Back>
    );
}