import React, { useState, useEffect, useRef } from "react";
import { Form as Unform } from "@unform/web";
import { colors } from "../../themes/colors";
import Section from "../Section";
import {
  infoInput,
  expInput,
  educationInput,
  skillInput,
  langInput
} from "../Section/inputs";

export default function Form() {
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [skill, setSkill] = useState([]);
  const [langs, setLangs] = useState([]);

  const [formData, setFormData] = useState([]);
  const formRef = useRef(null);
  

  const handleAddExperience = () => {
    setExperiences([...experiences, expInput[0]]);
  };

  const handleAddEducation = () => {
    setEducations([...educations, educationInput[0]]);
  };

  const handleAddSkill = () => {
    setSkill([...skill, skillInput[0]]);
  };

  const handleAddLanguage = () => {
    setLangs([...langs, langInput[0]]);
  };
  
  function handleSubmit(data, { reset }) {
    // setFormData([...formData, data]);
    // console.log(formData, "formData");

    console.log(data, "formRef data!");

    // reset()
  }

  const handleDeleteExp = (section) => {
    const newArr = experiences.slice();
    newArr.splice(section, 1);
    setExperiences(newArr);
  };
  const handleDeleteEducation = (section) => {
    const newArr = educations.slice();
    newArr.splice(section, 1);
    setEducations(newArr);
  };
  const handleDeleteSkill = (section) => {
    const newArr = skill.slice();
    newArr.splice(section, 1);
    setSkill(newArr);
  };
  const handleDeleteLanguage = (section) => {
    const newArr = langs.slice();
    newArr.splice(section, 1);
    setLangs(newArr);
  };

  return (
    <Unform
      // initialData={initialData}
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
        onScroll={() => console.log("scroll")}
        style={{
          backgroundColor: colors.light,
          borderRadius: "10px",
          padding: "20px 40px 0px 30px",
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
        {experiences.map((item, index) => {
          return (
            <Section
              key={index}
              name={`Experience ${index + 2}`}
              path={`exp${index + 2}`}
              inputData={experiences[0]}
              buttonContent="Add Experience"
              newInstance="newExp"
              // newInstance="newExp"
              deleteSectionIcon
              onDelete={() => handleDeleteExp(item)}
            />
          );
        })}

        <Section
          name="Education"
          path="education"
          inputData={educationInput[0]}
          buttonContent="Add Education"
          newInstance="newEducation"
          newInputPlaceholder="School Name"
          addButton
          onClick={handleAddEducation}
        />
        {educations.map((item, index) => {
          return (
            <Section
              key={index}
              name={`Education ${index + 2}`}
              path={`education${index + 2}`}
              inputData={educations[0]}
              buttonContent="Add Experience"
              newInstance="newEducation"
              // newInstance="newExp"
              deleteSectionIcon
              onDelete={() => handleDeleteEducation(item)}
            />
          );
        })}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem 1.5rem",
          }}
        >
          <div>
            <Section
              name="Skills"
              path="skill"
              inputData={skillInput[0]}
              buttonContent="Add Skill"
              newInstance="newSkill"
              addButton
              onClick={handleAddSkill}
            />
            {skill.map((item, index) => {
              return (
                <Section
                  name={`Skill ${index + 2}`}
                  key={index}
                  path={`skill${index + 2}`}
                  inputData={skill[0]}
                  buttonContent="Add New skill"
                  newInstance="newSkill"
                  // newInstance="newExp"
                  deleteSectionIcon
                  onDelete={() => handleDeleteSkill(item)}
                />
              );
            })}
          </div>
          <div>
            <Section
              name="Languages"
              path="language"
              inputData={langInput[0]}
              buttonContent="Add Language"
              newInstance="newLang"
              onClick={handleAddLanguage}
              addButton
            />
            {langs.map((item, index) => {
              return (
                <Section
                  key={index}
                  name={`Language ${index + 2}`}
                  path={`lang${index + 2}`}
                  inputData={langs[0]}
                  buttonContent="Add New skill"
                  newInstance="newSkill"
                  // newInstance="newExp"
                  deleteSectionIcon
                  onDelete={() => handleDeleteLanguage(item)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Unform>
  );
}