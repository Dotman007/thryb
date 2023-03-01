import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AddNewSeekInput = ({ index, seekerKeyInfo, setSeekerKeyInfo }) => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue(
      seekerKeyInfo.filter((item) => item?.key == index)[0]?.value ?? ""
    );
  });
  return (
    <div className='form-group position-relative mb-4 px-3'>
      <label htmlFor='firstName'>Key info</label>
      <input
        className='form_input_fields'
        type='text'
        name='firstName'
        onChange={(e) => {
          const myArray = seekerKeyInfo.filter((item) => item?.key != index);
          const newArrayItem = {
            key: index,
            value: e.currentTarget.value,
          };
          setSeekerKeyInfo([...myArray, newArrayItem]);
          setInputValue(newArrayItem.value);
        }}
        value={inputValue}
      />
    </div>
  );
};

export default AddNewSeekInput;
