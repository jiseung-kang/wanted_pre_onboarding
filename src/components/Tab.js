import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const TabContainer = styled.form`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 44px;

  input {
    display: none;
    & + label {
      width: 100px;
      margin: 2px;
      padding: 10px;
      color: #9f9f9f;
      font-weight: 700;
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

  div {
    position: absolute;
    margin-top: 44px;
    width: 400px;
    height: 3px;
    background-color: #9f9f9f;

    article {
      position: absolute;
      width: 130px;
      height: 3px;
      top: -2px;
      left: 10px;
      background-color: green;
      margin: 2px;
      transition: 0.2s;
    }
  }
`;

function Tab() {
  const [category, setCategory] = useState("potato");
  const slider = useRef();

  useEffect(() => {
    if (category === "potato") {
      slider.current.style.transform = `translateX(0px)`;
    } else if (category === "sweet-potato") {
      slider.current.style.transform = `translateX(120px)`;
    } else {
      slider.current.style.transform = `translateX(250px)`;
    }
  }, [category]);

  const handleChange = (e) => {
    setCategory(e.target.id);
  };

  return (
    <TabContainer>
      <input type="radio" name="category" id="potato" onChange={handleChange} checked={category === "potato"} />
      <label htmlFor="potato">감자</label>
      <input type="radio" name="category" id="sweet-potato" onChange={handleChange} checked={category === "sweet-potato"} />
      <label htmlFor="sweet-potato">고구마</label>
      <input type="radio" name="category" id="curry" onChange={handleChange} checked={category === "curry"} />
      <label htmlFor="curry">카레라이스</label>
      <div>
        <article ref={slider}></article>
      </div>
    </TabContainer>
  );
}

export default Tab;
