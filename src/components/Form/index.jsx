import React, { useState, useEffect } from "react";
import { Form as Unform } from "@unform/web";
import { colors } from "../../themes/colors";
import Section from "../Section";
import { infoInput, expInput, educationInput } from "../Section/inputs";
import { v4 as UUID } from "uuid";

export default function Form() {
  const [experiences, setExperiences] = useState([]);
  // const [selectedSection, setSelectedSection] = useState();
  const handleAddExperience = () => {
    setExperiences([
      ...experiences,expInput[0]
    ]);
  }
function handleSubmit(data) {
    console.log(data, "data");
  }
  const handleDeleteSection = (section) => {
    const index = experiences.indexOf(section);
    if(index !== -1) {
      experiences.splice(index, 1);
    }
    console.log(experiences, "experiences");
  }

  // useEffect(() => {
  //   console.log(experiences , "expInput!!"); 
  // }, [experiences]);

  return (
    <Unform
      className="unform"
      onSubmit={handleSubmit}
      style={{
        width: "600px",
        maxWidth: "600px",
        maxHeight: "700px",
        overflow: "auto",
        borderRadius: "10px",
        boxShadow: "0px 6px 14px 8px rgba(217, 217, 217, 0.74)",
      }}
    >
      <div
        onScroll={() => console.log("scroll")}
        style={{
          backgroundColor: colors.light,
          borderRadius: "10px",
          padding: "20px 30px 0px 30px",
          position: "relative",
        }}
      >
        {/* Personal informations */}
        <Section
          name="Personal informations"
          path="info"
          inputData={infoInput}
          buttonContent="Select Image"
          newInstance="newInfo"
          newInputPlaceholder="Example: linked In"
          selectFile
        />
        <Section
          name="Experience"
          path="exp"
          inputData={expInput[0]}
          buttonContent="Add Experience"
          newInstance="newExp"
          onClick={handleAddExperience}
          addButton
        />
        {experiences.map((exp, index) => {
          return (
            <Section
              key={index}
              name={`Experience ${index + 2}`}
              path={`exp${index + 2}`}
              inputData={experiences[0]}
              buttonContent="Add Experience"
              // newInstance="newExp"
              deleteSectionIcon
              onDelete={() => handleDeleteSection(exp)}
            />
          );
        })}

        <Section
          name="Education"
          path="education"
          inputData={educationInput}
          buttonContent="Add Education"
          addButton
        />
        {/* <Container col={"repeat(4, 1fr)"} row={"repeat(4, 1fr)"}>
          ///
          <div style={{ width: "100%", gridColumn: "1/3", gridRow: "4" }}>
            <Button
              type="submit"
              onClick={handleSubmit}
              model="add"
              content="Add Experience"
              width="100%"
            />
          </div>
        </Container> */}
        {/* <Text content="Education" type="title" /> */}
        {/* <Container col={"repeat(4, 1fr)"} row={"1fr"}>
          <Input
            name="education.course"
            placeholder="Complete High School"
            style={{ gridColumn: "1/3", gridRow: "1" }}
          />
          <Input
            name="education.school_name"
            placeholder="School Name"
            style={{ gridColumn: "3/5", gridRow: "1" }}
          />

          <div style={{ width: "100%", gridColumn: "1/3", gridRow: "2" }}>
            
            <Button
              type="submit"
              onClick={handleSubmit}
              model="add"
              content="Add Education"
              width="100%"
            />
          </div>
        </Container> */}
        {/* <Container col={"repeat(2, 1fr)"} row={"repeat(3, 1fr)"}>
          ///
          <div style={{ width: "100%", gridColumn: "1/2", gridRow: "1" }}>
            
            <Text
              content="Skills"
              type="title"
              style={{ gridColumn: "1/2", gridRow: "1" }}
            />
          </div>
          <Input
            name="skill.name"
            placeholder="Skill one"
            style={{ gridColumn: "1/2", gridRow: "2" }}
          />
          <div style={{ width: "100%", gridColumn: "1/2", gridRow: "3" }}>
            
            <Button
              type="submit"
              onClick={handleSubmit}
              model="add"
              content="Add Skill"
              width="100%"
            />
          </div>
          ///
          <div style={{ width: "100%", gridColumn: "2/3", gridRow: "1" }}>
            
            <Text
              content="Skills"
              type="title"
              style={{ gridColumn: "1/2", gridRow: "1" }}
            />
          </div>
          <Input
            name="language.name"
            placeholder="English"
            style={{ gridColumn: "2/3", gridRow: "2" }}
          />
          <div style={{ width: "100%", gridColumn: "2/3", gridRow: "3" }}>
            <Button
              type="submit"
              onClick={handleSubmit}
              model="add"
              content="Add Language"
              width="100%"
            />
          </div>
        </Container> */}
      </div>
    </Unform>
  );
}
