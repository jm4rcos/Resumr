import React, { useState, useEffect } from "react";
import Button from "../Button";
import Input from "../Input";
import Text from "../Text";
import TextArea from "../TextArea";
import { Container } from "./styles";
import { Scope } from "@unform/core";
import { v1 as UUID } from 'uuid'
import { HiOutlineTrash } from 'react-icons/hi'
import { BsPlusLg } from 'react-icons/bs'
import { colors } from "../../themes/colors";

export default function Section({
  name,
  content,
  col,
  row,
  path,
  inputData,
  buttonContent,
  onClick,
  newInstance,
  newInputPlaceholder,
  deleteSectionIcon,
  addButton,
  buttonType,
  selectFile,
  onDelete,
  sectionItem,
  addExp,
  ...rest
  })
  {
    // const [personalInfo, setPersonalInfo] = useState([

    // ]); 
    const [data, setData] = useState([])

    const [updateInputData, setUpdateInputData] = useState(false);

    function handleAdd(objName, objPlaceholder) {
      if (objName === "newInfo" && inputData.length <= 6) {
        inputData.push({
          name: objName,
          placeholder: objPlaceholder,
          style: { gridColumn: "1/3", gridRow: "6" },
        });
      }

      // return console.log(inputData);
    }

    return (
      <>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text content={name} type="title" />
          {deleteSectionIcon && (
            <HiOutlineTrash
              size={24}
              onClick={onDelete}
              style={{ cursor: "pointer" }}
            />
          )}
          {addButton && (
            <div>
              <Button
                // type="submit"
                // addItem={() => {
                //   handleAdd(newInstance, newInputPlaceholder);
                //   setUpdateInputData(!updateInputData);
                // }}
                onClick={onClick}
                model="outline"
                content={buttonContent}
                width="100%"
                addExp={addExp}
                // align="flex-start"
                icon={<BsPlusLg />}
              />
            </div>
          )}
        </div>
        <Container col={col} row={row}>
          <Scope path={path}>
            {inputData?.map((info) => {
              if (info.name === "about" || info.name === "responsabilities") {
                return (
                  <TextArea
                    key={UUID()}
                    name={info.name || info[0].name}
                    placeholder={info.placeholder}
                    style={info.style}
                  />
                );
              }
              return (
                <Input
                  key={UUID()}
                  name={info.name || info[0].name}
                  placeholder={info.placeholder}
                  style={info.style}
                />
              );
            })}
          </Scope>
          {selectFile && (
            <div style={{ width: "100%", gridColumn: "3/5" }}>
              <Button
                // type="submit"
                onClick={
                  newInstance === "newInfo"
                    ? () => {
                        handleAdd(newInstance, newInputPlaceholder);
                        setUpdateInputData(!updateInputData);
                      }
                    : onClick
                }
                model="add"
                content={buttonContent}
                width="100%"
                type={buttonType}
              />
            </div>
          )}
        </Container>
      </>
    );
  }
