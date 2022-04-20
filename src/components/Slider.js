import React, { useState } from "react";
import styled from "styled-components";

const SliderWrapper = styled.article`
  width: 400px;
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 360px;
    height: 30px;
    border: 1px solid #9f9f9f;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
  }
`;

const SliderContainer = styled.form`
  input {
    width: 400px;
    cursor: pointer;
  }

  datalist {
    display: flex;
    justify-content: space-between;
    width: 400px;
    option {
      padding: 2px;
      border: 1px solid green;
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        color: #ffffff;
        background-color: green;
      }
    }
  }
`;

function Slider() {
  const [value, setValue] = useState(1);

  const handleClick = (e) => {
    setValue(e.target.value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <SliderWrapper>
      <div>{value} %</div>
      <SliderContainer>
        <input type="range" onChange={handleChange} list="points" value={value} />
        <datalist id="points">
          <option value="1" label="1%" onClick={handleClick}></option>
          <option value="25" label="25%" onClick={handleClick}></option>
          <option value="50" label="50%" onClick={handleClick}></option>
          <option value="75" label="75%" onClick={handleClick}></option>
          <option value="100" label="100%" onClick={handleClick}></option>
        </datalist>
      </SliderContainer>
    </SliderWrapper>
  );
}

export default Slider;
