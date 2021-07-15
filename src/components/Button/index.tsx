import React, { ButtonHTMLAttributes } from "react";
import { ReactNode } from "react";

import { ButtonStyle } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  children: ReactNode;
};

export function Button({ title, children, ...rest }: ButtonProps) {
  return (
    <ButtonStyle type="button" title={title} {...rest}>
      {children}
    </ButtonStyle>
  );
}
