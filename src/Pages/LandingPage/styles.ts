import styled from "styled-components";
import BdStyle from "../../assets/black-wallpaper.jpg";
import { theme } from "../../global/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35vh;
  background-image: url(${BdStyle});
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 40px;
  font-family: "Roboto", sans-serif;
  color: ${theme.colors.white};
`;

export const Carousel = styled.div`
  margin-top: 50px;
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: ${theme.colors.primary};
  text-align: center;
`;
