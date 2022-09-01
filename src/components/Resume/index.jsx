import React, { useState, useEffect } from "react";
import { colors } from "../../themes/colors";
import Button from "../Button";
import Form from "../Form";
import Preview from "../Preview";
import { Container } from "./styles";
import { MdSimCardDownload } from "react-icons/md";
import { Modal } from "../Modal";
import { SelectTemplate } from "../Template/SelectTemplate";
import { TemplateProvider } from "../../context/TemplateContext";

export default function Resume() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  //This function will get the data from Form and send to Preview
  const getData = (formData) => {
    setData(formData);
  };
  return (
    <Container>
      <Form getData={getData} />
      <TemplateProvider>
        <div style={styles}>
          <Button
            content="Download as PDF"
            model="outline"
            width="100%"
            icon={<MdSimCardDownload size={30} />}
          />
          <Preview data={data.length === 0 ? [] : data} />
          <Button content="Save" model="success" width="40%" />

          <Button
            content="Change Layout"
            model="outline"
            onClick={() => setModal(!modal)}
          />
        </div>
        {modal && (
          <Modal
            onClose={() => setModal(!modal)}
            content={<SelectTemplate />}
          />
        )}
      </TemplateProvider>
    </Container>
  );
}

const styles = {
  gap: "1.2rem",
  display: "flex",
  flexDirection: "column",
  width: "30%",
  alignItems: "center",
  justifyContent: "center",
};
