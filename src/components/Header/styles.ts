import styled from "styled-components";
import { theme } from "../../global/theme";
import BdStyle from "../../assets/black-wallpaper.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(${BdStyle});
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary};
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  gap: 15px;
`;

export const ButtonLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
