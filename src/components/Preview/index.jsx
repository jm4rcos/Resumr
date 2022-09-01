import React, { useEffect, useState, useContext } from "react";
import Text from "../Text";
import { SideItem } from "./SideItem";
import Editor from "../Editor";
import { Container, Header, Side, Content } from "./styles";
import { Template } from "../Template";
import TemplateContext, { TemplateProvider } from "../../context/TemplateContext";

export default function Preview({ data }) {
  const [previewData, setPreviewData] = useState();

  const { selectedTemplate } = useContext(TemplateContext);

  function convertData(data) {
    if (data !== undefined) {
      setPreviewData(Object.entries(data));
    }
  }

  useEffect(() => {
    convertData(data);
  }, [data, setPreviewData]);

  if (previewData !== undefined) {
    const info = previewData.find((item) => item[0].includes("Info"));
    const exp = [];
    const education = [];
    const skill = [];
    const lang = [];

    previewData.forEach((item) => {
      if (item[0].includes("Exp")) return exp.push(item);
      if (item[0].includes("Educ")) return education.push(item);
      if (item[0].includes("Skill")) return skill.push(item);
      if (item[0].includes("Lang")) return lang.push(item);
    });

    return (
      <Template
        type={selectedTemplate}
        info={info}
        exp={exp}
        education={education}
        skill={skill}
        lang={lang}
      />
      // <Container>
      //   <Header>
      // <div
      //   style={{
      //     display: "flex",
      //     flexDirection: "column",
      //     alignItems: "flex-start",
      //   }}
      // >
      //       <Text
      //         canEdit
      //         type="title"
      //         content={info[1].firstName}
      //         // content={`${
      //         //   info[1].firstName !== undefined ?
      //         //   info[1].firstName :
      //         //   "First Name"
      //         // }`}
      //         size="120%"
      //       />

      //       {/* <Text canEdit type="text" content={info[1].position} size="84%" /> */}
      //     </div>
      //     <div>
      //       <Text
      //         align="right"
      //         type="text"
      //         // content={info[1].email}
      //         size="74%"
      //       />
      //       <Text
      //         align="right"
      //         type="text"
      //         // content={info[1].phone}
      //         size="74%"
      //       />
      //       <Text
      //         align="right"
      //         type="text"
      //         // content={info[1].address}
      //         size="74%"
      //       />
      //     </div>
      //   </Header>

      //   <Content>
      //     <Side>
      //       <Editor>
      //         <SideItem type="Education" textMb={-2} />
      //         {/* {education.map((item, index) => {
      //           return (
      //             <SideItem
      //               key={index}
      //               // name={item[1].course}
      //               // value={item[1].schoolName}
      //               textMb={index === education.length - 1 && 10}
      //             />
      //           );
      //         })} */}
      //       </Editor>

      //       {/* Skills */}

      //       <Editor>
      //         {/* {skill[0][1].skill !== "" && (
      //           <SideItem type="Skills" textMb={-2} />
      //         )}
      //         {skill.map((item, index) => {
      //           // return <SideItem key={index} name={item[1].skill} />;
      //         })} */}
      //       </Editor>

      //       {/* Languages */}

      //       <Editor>
      //         {/* {lang[0][1].lang !== "" && (
      //           <SideItem mt={18} type="Languages" textMb={-2} />
      //         )}
      //         {lang.map((item, index) => {
      //           // return <SideItem key={index} name={item[1].lang} />;
      //         })} */}
      //       </Editor>
      //     </Side>

      //     <Side>
      //       <Editor>
      //         {/* <SideItem type="About me" name={info[1].about} textMb={10} /> */}
      //       </Editor>

      //       {/* Experiences */}
      //       <Editor>
      //         <SideItem type="Experiences" />
      //         {/* {exp.map((item, index) => {
      //           return (
      //             <SideItem
      //               key={index}
      //               name={item[1].job}
      //               value={`${
      //                 item[1].company ? item[1].company : "Company"
      //               } - (${item[1].startDate ? item[1].startDate : "Start Date"}
      //             /${item[1].endDate ? item[1].endDate : "End Date"})`}
      //               textMt={0}
      //               textMb={8}
      //               long={item[1].responsabilities}
      //             />
      //           );
      //         })} */}
      //       </Editor>
      //     </Side>
      //   </Content>
      // </Container>
    );
  }

  return <Container></Container>;
}
