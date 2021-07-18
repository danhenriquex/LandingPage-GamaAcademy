import styled, { css } from "styled-components";
import { theme } from "../../global/theme";

interface InputContainerProps {
  error: boolean;
}

export const Container = styled.div<InputContainerProps>`
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    padding-top: 10px;
    text-align: center;

    @media only screen and (max-width: 500px) {
      font-size: 11px;
    }
  }

  ${({ error }) =>
    error &&
    css`
      border-color: #ea3e4f;
      color: #ea3e4f;

      :hover {
        border-color: #ea3e4f;
      }
    `}
`;

export const InputStyle = styled.input`
  border-radius: 10px;
  height: 50px;
  width: 100%;
  border: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  padding: 10px;

  &:focus {
    outline: none;
  }

  ::placeholder {
    padding-left: 2px;
  }
`;

export const InputContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .icon {
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 1198px) {
    width: 80%;
  }
`;

export const Icons = styled.button`
  background: ${theme.colors.white};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  border-left: 8px;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
`;
