import React, { InputHTMLAttributes } from "react";
import { IoMailSharp } from "react-icons/io5";
import { Icons, InputContainer, InputStyle } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
};

export function Input({ placeholder, ...rest }: InputProps) {
  return (
    <InputContainer>
      <InputStyle placeholder={placeholder} {...rest} autoFocus type="text" />
      <Icons>
        <IoMailSharp className="icon" />
      </Icons>
    </InputContainer>
  );
}
