import styled from "styled-components";
import { theme } from "../../global/theme";

export const ButtonStyle = styled.button`
  width: 110px;
  height: 45px;
  border-radius: 8px;
  background: ${theme.colors.primary};
  border: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
`;
