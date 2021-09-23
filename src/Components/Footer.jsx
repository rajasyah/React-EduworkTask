import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.button`
  width: 20%;
  outline: none;
  border: none;
  background: transparent;
  position: absolute;
  bottom: 50px;
  padding: 10px 0;
  border-radius: 9px;
  color: white;
  background: #000;
  box-shadow: inset 7px 7px 15px #0e0e0e, inset -7px -7px 15px #000000;
  font-weight: bold;
  font-size: 15px;
`;

function Footer() {
  return (
    <Container>
      <Btn>Hire Me</Btn>
    </Container>
  );
}

export default Footer;
