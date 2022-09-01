import React, { useContext, useEffect, useState } from 'react';
import { Container, ImageContainer } from "./styles";
import Template1 from '../../../assets/Template1.png'
import FlexTemplate from "../../../assets/FlexTemplate.png";
import Button from "../../Button"
import TemplateContext from '../../../context/TemplateContext';

export function SelectTemplate(){
    const { selectedTemplate, setSelectedTemplate } = useContext(TemplateContext)
    const [selected, setSelected] = useState(selectedTemplate);

    const templates = [
      {
        id: 1,
        name: "Basic Template",
        image: Template1,
      },
      {
        id: 2,
        name: "Flex Template",
        image: FlexTemplate,
      },
      {
        id: 3,
        name: "Basic 2",
        image: Template1,
      },
    ];

    function handleSelect(i){
        setSelected(i)
        
        //It will store the selected template on the TemplateContext
        setSelectedTemplate(i)
    }

    function handleScale(e){
        let magnifier = document.querySelector('.magnifier')
        
        let left = e.pageX ;
        let top = e.pageY ;

        magnifier.style.left = left - 250 + 'px'
        magnifier.style.top = top - 250 + 'px'

        console.log(e);
    }
    

    return (
      <Container>
        {/* <Magnifier className="magnifier"/> */}
        {templates.map((template, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ImageContainer>
                <img
                    src={template.image}
                    alt={template.name}
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'contain',
                        borderRadius: "10px",
                    }}
                />
              </ImageContainer>
              <Button
                content={template.name}
                onClick={() => handleSelect(index + 1)}
                model={index + 1 === selected ? "solid" : "add"}
              />
            </div>
          );
        })}
      </Container>
    );
}