import React, { MouseEventHandler, ReactNode } from "react";

const Button = ({
  onClick,
  children,
  variant,
  styles,
}: {
  styles?: string;
  variant: "primary" | "secondary" | "outline";
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  const buttonStyles = {
    primary: "bg-primary text-white border-secondary hover:bg-primarylight",
    secondary:
      "bg-secondary  border-primary hover:bg-primary hover:border-secondary active:shadow-none",
    outline: "bg-[#fff] text-primary border-primary hover:bg-secondary",
  };
  return (
    <button
      className={`shadow-xl rounded-lg cursor-pointer px-4 py-2 border-[2px] ${
        buttonStyles[variant]
      } ${styles && styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
