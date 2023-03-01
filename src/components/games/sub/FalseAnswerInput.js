import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FalseAnswerInput = ({index, falseAnswers, setFalseAnswers}) => {
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {
      setInputValue(
        falseAnswers.filter((item) => item?.key == index)[0]?.value ??
          ""
      );
    });
  return (
    <div className='form-group position-relative mb-4 pl-3 pr-3' key={index}>
        <label htmlFor='firstName'>False Answer {index + 1}</label>
        <input
            className='form_input_fields'
            type='text'
            name='firstName'
            placeholder='false answer'
            onChange={(e) => {
                const myArray = falseAnswers.filter(
                  (item) => item?.key != index
                );
                const newArrayItem = {
                  key: index,
                  value: e.currentTarget.value,
                };
                setFalseAnswers([...myArray, newArrayItem]);
                setInputValue(newArrayItem.value);
              }}
              value={inputValue}
        />
    </div>
  )
}

export default FalseAnswerInput