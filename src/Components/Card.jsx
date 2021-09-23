import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { DiCss3Full, DiGit } from "react-icons/di";
import { FaFigma } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Cards = styled.div`
  width: 300px;
  height: 150px;
  background-color: black;
  color: white;
  border-radius: 1rem;
  padding: 10px;
  &:hover {
    box-shadow: 10px 14px 98px 0px rgba(192, 192, 192, 0.36);
    -webkit-box-shadow: 10px 14px 98px 0px rgba(192, 192, 192, 0.36);
    -moz-box-shadow: 10px 14px 98px 0px rgba(192, 192, 192, 0.36);
  }
  h2 {
    text-align: center;
  }
  p {
    margin-top: 10px;
  }
`;

function Card() {
  return (
    <Container>
      <Cards>
        <DiCss3Full />

        <h2>Frontend Developer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          repellendus.
        </p>
        <Button />
      </Cards>
      <Cards>
        <FaFigma />
        <h2>UI/UX Design</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          repellendus.
        </p>
        <Button />
      </Cards>
      <Cards>
        <DiGit />
        <h2>Github</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          repellendus.
        </p>
        <Button />
      </Cards>
    </Container>
  );
}

export default Card;
