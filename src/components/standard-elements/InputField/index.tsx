import React from "react";

const InputField = ({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (value: number) => void;
}) => {
  return (
    <div className="flex flex-col w-[10rem]">
      <label
        className="w-full text-left font-poppins font-semibold"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="w-full bg-[transparent] border-secondary border-y-0 border-t-0 border-b-[2px] focus:border-primaryDark outline-none"
        id={label}
      />
    </div>
  );
};

export default InputField;
