import styled from "styled-components";
import { theme } from "../../global/theme";

export const InputStyle = styled.input`
  border-radius: 10px;
  height: 50px;
  width: 80%;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  input[type="text"] {
    padding: 10px;
  }

  input[type="text"]::placeholder {
    padding-left: 2px;
  }

  .icon {
    color: ${theme.colors.primary};
    margin-bottom: 5px;
  }
`;

export const Icons = styled.button`
  position: absolute;
  margin-left: 360px;
  margin-top: 25px;
  background: transparent;
  border-left: 8px;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
`;
