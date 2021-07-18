import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Header, Input } from "../../components";
import CarouselSale from "../../components/Carousel";
import { theme } from "../../global/theme";
import {
  Body,
  Carousel,
  Container,
  Content,
  Footer,
  InputEmail,
  SubTitle,
  Title,
} from "./styles";

export function LandingPage() {
  // eslint-disable-next-line
  const [emails, setEmails] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState(false);

  function handleSendEmails(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email.includes("@") && email !== "") {
      emails.push(email);

      localStorage.setItem("@blackfriday:email", JSON.stringify(emails));

      setEmail("");

      toast("E-mail enviado com sucesso!", {
        type: "dark",
        progressStyle: { backgroundColor: `${theme.colors.primary}` },
      });
      setError(false);
    } else {
      setError(true);
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
                error={error}
                message="E-mail inválido. Verique se você digitou corretamente."
              />
            </InputEmail>
          </div>
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
