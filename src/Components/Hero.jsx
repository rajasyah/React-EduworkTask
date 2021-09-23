import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px 0;
`;

const ImgFluid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: white;
    text-shadow: 4px 2px #000;
  }
`;

function Hero() {
  return (
    <Container>
      <ImgFluid>
        <h2>Frontend Developer</h2>
      </ImgFluid>
    </Container>
  );
}

export default Hero;
