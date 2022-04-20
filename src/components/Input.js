import React, { useEffect, useState } from "react";
import styled from "styled-components";

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  p {
    color: red;
  }
`;

function Input() {
  const [isValid, setIsValid] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  useEffect(() => {
    checkValid(email);
  }, [email]);

  const checkValid = (input) => {
    setIsValid(input.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = () => {
    setShowPw(!showPw);
  };

  return (
    <InputContainer>
      <label htmlFor="user-email">E-mail</label>
      <div>
        <input type="text" id="user-email" placeholder="E-mail" onChange={handleEmail} onFocus={onFocus} onBlur={onBlur} value={email} />
        {isValid ? "✅" : "☑️"}
      </div>
      {!focused && email !== "" && !isValid && <p>Invalid Email</p>}
      <label htmlFor="user-pw">Password</label>
      <div>
        <input type={showPw ? "text" : "password"} id="user-pw" placeholder="Password" />
        <button type="button" onClick={handlePassword}>
          {showPw ? "🤓" : "😎"}
        </button>
      </div>
    </InputContainer>
  );
}

export default Input;
