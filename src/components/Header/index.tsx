import React, { useState } from "react";

import { Container, ButtonLogin, Content, Title } from "./styles";
import { IoRocketSharp } from "react-icons/io5";
import { Button } from "../Button";

export function Header() {
  const [login, setLogin] = useState(false);

  function handleLogin() {
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }

  return (
    <Container>
      <Content>
        <Title>
          <IoRocketSharp />
          Black Friday
        </Title>
        <ButtonLogin>
          <Button title="Entrar" onClick={handleLogin}>
            {login ? "Sair" : "Entrar"}
          </Button>
        </ButtonLogin>
      </Content>
    </Container>
  );
}
