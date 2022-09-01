import React from "react";
import Editor from "../../Editor";
import { SideItem } from "../../Preview/SideItem";
import Text from "../../Text";
import { Container, Header, Side, Content } from "./styles";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

export function FlexTemplate({ data }) {
  const { info, exp, education, skill, lang } = data;
  console.log(education);

  if (info !== undefined) {
      return (
        <Container>
          <Header>
            <Text
              mb={-6}
              canEdit
              type="title"
              content={`${info[1].firstName} ${info[1].lastName}`}
              size="120%"
            />
            <Text canEdit type="text" content={info[1].position} size="84%" />
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                columnGap: "1em",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                {info[1].email.length > 0 && <AiOutlineMail size={14} />}
                <Text
                  align="left"
                  type="text"
                  content={info[1].email}
                  size="70%"
                />
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                {info[1].phone.length > 0 && <AiOutlinePhone size={14} />}
                <Text
                  align="left"
                  type="text"
                  content={info[1].phone}
                  size="70%"
                />
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                {info[1].address.length > 0 && <AiOutlineHome size={14} />}
                <Text
                  align="left"
                  type="text"
                  content={info[1].address}
                  size="70%"
                />
              </div>
            </div>
          </Header>

          <Content>
            {/* About */}
            <Editor>
              <SideItem
                type={info[1].about.length < 1 ? "" : "About me"}
                name={info[1].about}
              />
            </Editor>

            {/* Experiences */}
            <Editor>
              <SideItem type="Experiences" mb={-6} mt={10} />
              {exp.map((item, index) => {
                return (
                  <SideItem
                    key={index}
                    name={item[1].job}
                    value={`
                        ${item[1].company}
                        ${item[1].startDate && ` - ${item[1].startDate}`}
                        ${item[1].endDate && `/ ${item[1].endDate}`}
                        `}
                    textMt={0}
                    textMb={6}
                    long={item[1].responsabilities}
                  />
                );
              })}
            </Editor>

            <Editor>
              <SideItem type="Education" mb={-6} mt={10} />
              {education.map((item, index) => {
                return (
                  <SideItem
                    key={index}
                    name={item[1].course}
                    value={item[1].schoolName}
                    textMb={index === education.length - 1 && 10}
                  />
                );
              })}
            </Editor>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                paddingBottom: "20px",
              }}
            >
              {/* Skills */}

              <Editor>
                {skill[0][1].skill !== "" && <SideItem type="Skills" />}
                {skill.map((item, index) => {
                  return <SideItem key={index} name={item[1].skill} />;
                })}
              </Editor>

              {/* Languages */}

              <Editor>
                {lang[0][1].lang !== "" && <SideItem type="Languages" />}
                {lang.map((item, index) => {
                  return <SideItem key={index} name={item[1].lang} />;
                })}
              </Editor>
            </div>
          </Content>
        </Container>
      );
    
  }

  return <Container></Container>;
}
