import React from "react";
import Editor from "../../Editor";
import { SideItem } from "../../Preview/SideItem";
import Text from "../../Text";
import { Container, Header, Side, Content } from "./styles";

export function BasicTemplate({ data }) {
  const { info, exp, education, skill, lang } = data;
  console.log(education);

  if (info !== undefined) {
      return (
        <Container>
          <Header>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Text
                canEdit
                type="title"
                content={`${info[1].firstName} ${info[1].lastName}`}
                size="120%"
              />

              <Text canEdit type="text" content={info[1].position} size="84%" />
            </div>
            <div>
              <Text
                align="right"
                type="text"
                content={info[1].email}
                size="74%"
              />
              <Text
                align="right"
                type="text"
                content={info[1].phone}
                size="74%"
              />
              <Text
                align="right"
                type="text"
                content={info[1].address}
                size="74%"
              />
            </div>
          </Header>

          <Content>
            <Side>
              <Editor>
                <SideItem type="Education" textMb={-2} />
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

              {/* Skills */}

              <Editor>
                {skill[0][1].skill !== "" && (
                  <SideItem type="Skills" textMb={-2} />
                )}
                {skill.map((item, index) => {
                  return <SideItem key={index} name={item[1].skill} />;
                })}
              </Editor>

              {/* Languages */}

              <Editor>
                {lang[0][1].lang !== "" && (
                  <SideItem mt={18} type="Languages" textMb={-2} />
                )}
                {lang.map((item, index) => {
                  return <SideItem key={index} name={item[1].lang} />;
                })}
              </Editor>
            </Side>

            <Side>
              <Editor>
                <SideItem
                  type={info[1].about.length < 1 ? "" : "About me"}
                  name={info[1].about}
                  textMb={10}
                />
              </Editor>

              {/* Experiences */}
              <Editor>
                <SideItem type="Experiences" />
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
                      textMb={8}
                      long={item[1].responsabilities}
                    />
                  );
                })}
              </Editor>
            </Side>
          </Content>
        </Container>
      );
    
  }

  return <Container></Container>;
}
