import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import Provider from "./Provider";

export default function Section({

  updateData,
  setUpdateData,
  index,
  getData,
  id,
  type,
  ...rest
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = [
      {
        id: v4(),
        name: getData.name,
        input: getData.input
      }
    ]

    // setData(getData);
    // console.log(getData);
    // setUpdateData(!updateData);
    // eslint-disable-next-line
  }, []);

  function handleAddSection(section) {
    const newSection = {
      id: v4(),
      name: section.name,
      input: section.input
    }
    // console.log(newSection, "new");
    console.log(section);

    // setData({ ...data, data[experiencies, novaExperiencia]} })

    // const arr = [];
    // arr.push(section);
    // data.input.push(section);
    // setUpdateData(!updateData);
  }

  function handleDeleteSection(section, index) {
    // data.input.splice(index, 1);
    const filteredData = data.input.filter((item, i) => (console.log(section)));

    console.log(filteredData);

    // setData({ name: "Skills", input: [...filteredData]});
    // console.log(filteredData);
    // console.log(data.input, "data");

    // setData({...data, input: filteredData});

    // console.log(data);

    // console.log({ input: { ...filteredData } },  name: "Skills" );

    // setData([ {input: { ...filteredData }}, {name: "Skills"} ]);


    setUpdateData(!updateData);
  }

  return (
    <div>
      {data.name === type &&
        data.input.map((item, i) => {
          return (
            <Provider
              key={i}
              index={i}
              data={item}
              type={data.name}
              onAdd={() => handleAddSection(item)}
              onDelete={() => handleDeleteSection(item, i)}
              setUpdateData={setUpdateData}
              updateData={updateData}
            />
          );
        })}
    </div>
  );
}
