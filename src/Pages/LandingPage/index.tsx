import React, { useState } from "react";
import { Header, Card, Input } from "../../components";
import CarouselSale from "../../components/Carousel";
import { ToastContainer, toast } from "react-toastify";

import {
  Container,
  Content,
  Body,
  Title,
  Carousel,
  Footer,
  SubTitle,
  InputEmail,
} from "./styles";

export function LandingPage() {
  // eslint-disable-next-line
  const [emails, setEmails] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");

  const notify = () => {
    if (email !== "") {
      toast("E-mail enviado com sucesso!", {
        type: "dark",
      });
    }
  };

  function handleSendEmails(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email !== "") {
      emails.push(email);

      localStorage.setItem("@blackfriday:email", JSON.stringify(emails));

      setEmail("");
    }
  }

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    setEmail(event.target.value);
  }

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
            <InputEmail onSubmit={handleSendEmails}>
              <Input
                placeholder="Digite seu e-mail"
                id="inputEmail"
                onChange={(event) => handleEmail(event)}
                value={email}
                autoFocus
                handleFunction={notify}
              />
            </InputEmail>
          </div>
          <Card />
        </Body>
      </Content>
      <Footer>
        <Carousel>
          <CarouselSale />
        </Carousel>
      </Footer>
      <ToastContainer />
    </Container>
  );
}
