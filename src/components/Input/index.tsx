import React, { InputHTMLAttributes } from "react";
import { IoMailSharp } from "react-icons/io5";
import { Icons, InputContainer, InputStyle, Container } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  error?: boolean;
  message?: string;
};

export function Input({
  placeholder,
  error = false,
  message,
  ...rest
}: InputProps) {
  return (
    <Container error={error}>
      <InputContainer>
        <InputStyle placeholder={placeholder} {...rest} autoFocus type="text" />
        <Icons>
          <IoMailSharp className="icon" />
        </Icons>
      </InputContainer>
      {error && <p>{message}</p>}
    </Container>
  );
}
