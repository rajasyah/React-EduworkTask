import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
`;

function Navbar() {
  return (
    <Container>
      <h2>Rajasyah Pahlevi</h2>
    </Container>
  );
}

export default Navbar;
