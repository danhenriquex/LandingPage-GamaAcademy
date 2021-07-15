import React from "react";

import { Container, ButtonLogin, Content, Title } from "./styles";
import { IoRocketSharp } from "react-icons/io5";
import { Button } from "../Button";

export function Header() {
  return (
    <Container>
      <Content>
        <Title>
          <IoRocketSharp />
          Black Friday
        </Title>
        <ButtonLogin>
          <Button title="Entrar">Entrar</Button>
        </ButtonLogin>
      </Content>
    </Container>
  );
}
