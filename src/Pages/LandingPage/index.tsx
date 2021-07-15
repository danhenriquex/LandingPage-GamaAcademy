import React from "react";
import { Header, Card } from "../../components";
import CarouselSale from "../../components/Carousel";

import {
  Container,
  Content,
  Body,
  Title,
  Carousel,
  Footer,
  SubTitle,
} from "./styles";

export function LandingPage() {
  return (
    <Container>
      <Header />
      <Content>
        <Body>
          <div style={{ flexDirection: "column" }}>
            <Title>A Black friday está chegando</Title>
            <SubTitle>
              Digite seu e-mail para receber novidades de promoções.
            </SubTitle>
          </div>
          <Card />
        </Body>
      </Content>
      <Footer>
        <Carousel>
          <CarouselSale />
        </Carousel>
      </Footer>
    </Container>
  );
}
