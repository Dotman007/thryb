import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const InterestedPersonSeekInput = ({
  interestedPersonKeyInfo,
  setInterestedPersonKeyInfo,
  index,
}) => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue(
      interestedPersonKeyInfo.filter((item) => item?.key == index)[0]?.value ??
        ""
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
          const myArray = interestedPersonKeyInfo.filter(
            (item) => item?.key != index
          );
          const newArrayItem = {
            key: index,
            value: e.currentTarget.value,
          };
          setInterestedPersonKeyInfo([...myArray, newArrayItem]);
          setInputValue(newArrayItem.value);
        }}
        value={inputValue}
      />
    </div>
  );
};

export default InterestedPersonSeekInput;
