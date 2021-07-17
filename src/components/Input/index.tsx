import React, { InputHTMLAttributes } from "react";
import { IoMailSharp } from "react-icons/io5";
import { Icons, InputContainer, InputStyle } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  handleFunction: () => void;
};

export function Input({ placeholder, handleFunction, ...rest }: InputProps) {
  return (
    <InputContainer>
      <InputStyle placeholder={placeholder} {...rest} autoFocus type="text" />
      <Icons onClick={handleFunction}>
        <IoMailSharp className="icon" />
      </Icons>
    </InputContainer>
  );
}
