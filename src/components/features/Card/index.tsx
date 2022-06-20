import React, { ReactNode } from "react";

const Card = ({
  direction = "column",
  children,
  styles,
}: {
  styles?: string;
  direction?: "column" | "row";
  children: ReactNode;
}) => {
  return (
    <div
      className={`shadow-xl bg-white flex rounded-xl p-4 w-full ${
        direction === "column" && "flex-col"
      } ${styles && styles}`}
    >
      {children}
    </div>
  );
};

export default Card;
