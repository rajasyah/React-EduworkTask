import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: transparent;
  color: white;
  padding: 5px;
  border: none;
  cursor: pointer;
  margin-top: 5px;
`;

function Button() {
  return <Btn>Read more...</Btn>;
}

export default Button;
