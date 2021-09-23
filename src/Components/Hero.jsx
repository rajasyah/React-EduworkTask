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
  img {
    width: 125px;
    height: 125px;
    border: 3px solid white;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
    box-shadow: 10px 14px 42px 0px rgba(0, 0, 0, 0.36);
    -webkit-box-shadow: 10px 14px 42px 0px rgba(0, 0, 0, 0.36);
    -moz-box-shadow: 10px 14px 42px 0px rgba(0, 0, 0, 0.36);
  }
  h2 {
    color: white;
    text-shadow: 4px 2px #000;
  }
`;

function Hero() {
  return (
    <Container>
      <ImgFluid>
        <img src="asset/img/self.jpg" alt="self" />
        <h2>Frontend Developer</h2>
      </ImgFluid>
    </Container>
  );
}

export default Hero;
