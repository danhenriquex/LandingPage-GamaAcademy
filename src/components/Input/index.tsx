import React, { InputHTMLAttributes } from "react";
import { IoMailSharp } from "react-icons/io5";
import { Icons, InputContainer, InputStyle } from "./styles";

import { ToastContainer, toast } from "react-toastify";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
};

export function Input({ placeholder, ...rest }: InputProps) {
  const notify = () =>
    toast("E-mail enviado com sucesso!", {
      type: "dark",
    });

  return (
    <InputContainer>
      <InputStyle placeholder={placeholder} {...rest} autoFocus type="text" />
      <Icons onClick={notify}>
        <IoMailSharp className="icon" />
      </Icons>
      <ToastContainer />
    </InputContainer>
  );
}
