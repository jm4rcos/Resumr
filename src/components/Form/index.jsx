import React, { useState, useRef, useEffect } from "react";
import { Form as Unform } from "@unform/web";
//eslint-disable-next-line
import { colors } from "../../themes/colors";
import Section from "../Section";
import {
  inputArray,
} from "../Section/inputs";
import { v4 as UUID } from "uuid";

export default function Form({ getData }) {
  const [updateData, setUpdateData] = useState(false);
  //eslint-disable-next-line
  const [formData, setFormData] = useState([]);

  const formRef = useRef(null);

  function handleSubmit(data) {
    setFormData(formRef.current.getData());
    getData(data);
    console.log(data);
  }

  useEffect(() => {
    handleSubmit(formRef.current.getData());
  }, [updateData])

  return (
    <Unform
      ref={formRef}
      className="unform"
      onSubmit={handleSubmit}
      style={{
        width: "650px",
        maxWidth: "650px",
        maxHeight: "700px",
        overflow: "auto",
        borderRadius: "10px",
        boxShadow: "0px 6px 14px 8px rgba(217, 217, 217, 0.74)",
      }}
    >
      <div
        style={{
          backgroundColor: colors.light,
          borderRadius: "10px",
          padding: "20px 40px 0px 30px",
          position: "relative",
        }}
      >
        {inputArray.map((data, i) => {
          const sectionID = UUID();

          return (
            <div key={i}>
              <Section
                id={sectionID}
                index={i}
                type={data.name}
                getData={data}
                updateData={updateData}
                setUpdateData={setUpdateData}
              />
            </div>
          );
        })}
      </div>
    </Unform>
  );
}
