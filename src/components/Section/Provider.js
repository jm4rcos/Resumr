import { Scope } from '@unform/core';
import React, { useState, useEffect } from 'react';
import Input from '../Input';
import Text from '../Text';
import TextArea from '../TextArea';
import { Container } from './styles';
import Button from "../Button";
import { HiOutlineTrash } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";

export default function Provider({
  col,
  row,
  index,
  type,
  data,
  section,
  onDelete,
  onAdd,
  setUpdateData,
  updateData
}) {
  function handleAddSection(item, i) {
    onAdd(item, i);
  }

  function handleDeleteSection(item, i) {
    onDelete(item, i);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          content={index === 0 ? type : `${type} ${index + 1}`}
          type="title"
          size="110%"
        />
        {index === 0 ? (
          <>
            {type === "Informations" ? (
              <Button
                content="Update Preview"
                model="outline"
                icon={<GrUpdate />}
                // onClick={handleUpdate}
                type="submit"
              />
            ) : (
              <Button
                onClick={() => handleAddSection(data, index)}
                model="outline"
                content={`Add ${type}`}
                icon={<BsPlusLg />}
                type="button"
              />
            )}
          </>
        ) : (
          <button
            type="button"
            style={{
              outline: "none",
              border: "none",
              background: "none",
            }}
          >
            <HiOutlineTrash
              type="button"
              size={24}
              onClick={() => handleDeleteSection(data, index)}
              style={{ cursor: "pointer" }}
            />
          </button>
        )}
      </div>
      <Container col={col} row={row} section={section}>
        <Scope path={index === 0 ? type : `${type}${index + 1}`}>
          {data.map((item, i) => {
            if (item.name === undefined) return null;
            if (item.name === "about" || item.name === "responsabilities") {
              return (
                <TextArea
                  key={i}
                  name={item.name}
                  placeholder={item.placeholder}
                  style={item.style}
                  onChange={() => {
                    setUpdateData(!updateData);
                  }}
                />
              );
            }
            return (
              <Input
                key={i}
                name={item.name}
                placeholder={item.placeholder}
                style={item.style}
                onChange={() => {
                  setUpdateData(!updateData);
                }}
              />
            );
          })}
        </Scope>
      </Container>
    </>
  );
}