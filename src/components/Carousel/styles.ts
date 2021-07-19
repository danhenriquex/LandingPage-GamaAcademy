import styled from "styled-components";

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 400px;
    height: 30%;

    @media only screen and (max-width: 500px) {
      width: 200px;
      height: 10%;
    }
  }
`;
