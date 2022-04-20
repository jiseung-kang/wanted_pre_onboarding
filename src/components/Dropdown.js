import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DropDown = styled.button`
  display: flex;
  justify-content: space-between;
  width: 200px;
  border: 0.5px solid gray;
  cursor: pointer;
`;
const DropDownContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 200px;
  border: 0.3px solid gray;

  input,
  button {
    width: 200px;
    padding: 1px;
    margin: 1px;
    background: none;
    border: none;
    cursor: pointer;
  }
  input {
    width: 168px;
    padding-left: 30px;
    border: 0.3px solid gray;
  }
  button:hover {
    background-color: #e2e2e2;
  }
  span {
    position: absolute;
    margin-left: 10px;
  }
`;

function Dropdown() {
  const dataList = ["BTCUSD.PERP", "ETHUSD.PERP", "ETHUSD.PERP", "BCHUSD.PERP", "LTCUSD.PERP", "XRPUSD.PERP", "1000SHIBUSD.PERP"];

  const [select, setSelect] = useState("All Symbols");
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  const handleShow = () => {
    setIsShow(!isShow);
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
    setIsShow(false);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <DropDown onClick={handleShow}>
        {select} <span>🔻</span>
      </DropDown>
      {isShow && (
        <DropDownContainer>
          <div>
            <span>🔎</span>
            <input type="text" placeholder="Search Symbol" onChange={handleInput} />
          </div>

          <button type="button" onClick={handleSelect} value="All Symbols">
            All Symbols
          </button>
          {dataList
            .filter((data) => data.toLowerCase().includes(input.toLowerCase()))
            .map((v) => {
              return (
                <button type="button" onClick={handleSelect} value={v}>
                  {v}
                </button>
              );
            })}
        </DropDownContainer>
      )}
    </div>
  );
}

export default Dropdown;
