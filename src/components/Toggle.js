import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.form`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 44px;
  background-color: #ebebeb;
  border-radius: 100px;

  article {
    position: absolute;
    width: 150px;
    height: 40px;
    margin: 2px;
    background-color: #ffffff;
    border-radius: 100px;
    transition: 0.2s;
  }

  input {
    display: none;
    & + label {
      width: 150px;
      margin: 2px;
      padding: 10px;
      color: #9f9f9f;
      font-weight: 700;
      border-radius: 100px;
      text-align: center;
      z-index: 2;
      &:hover {
        cursor: pointer;
      }
    }
    &:checked + label {
      color: #5a5a5a;
    }
  }
`;

function Toggle() {
  const [category, setCategory] = useState("basic");
  const slider = useRef();

  useEffect(() => {
    if (category === "basic") {
      slider.current.style.transform = `translateX(-73px)`;
    } else {
      slider.current.style.transform = `translateX(73px)`;
    }
  }, [category]);

  const handleChange = (e) => {
    setCategory(e.target.id);
  };

  return (
    <ToggleContainer>
      <article ref={slider}></article>
      <input type="radio" name="category" id="basic" onChange={handleChange} checked={category === "basic"} />
      <label htmlFor="basic">기본</label>
      <input type="radio" name="category" id="detail" onChange={handleChange} checked={category === "detail"} />
      <label htmlFor="detail">상세</label>
    </ToggleContainer>
  );
}

export default Toggle;
